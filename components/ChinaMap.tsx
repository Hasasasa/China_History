import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { HistoricalLocation, HistoricalState, Coordinates } from '../types';

interface ChinaMapProps {
  locations: HistoricalLocation[];
  states?: HistoricalState[];
  boundary: Coordinates[];
  center: Coordinates;
  zoom: number;
  loading: boolean;
  onLocationSelect: (item: HistoricalLocation | HistoricalState) => void;
  selectedItem: HistoricalLocation | HistoricalState | null;
}

const MapUpdater: React.FC<{ center: Coordinates; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();

  // Fix: Force Leaflet to recalculate map size on mount.
  // This solves the issue where the map renders incorrectly (grey/partial) until window resize (F12).
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);
    return () => clearTimeout(timer);
  }, [map]);

  useEffect(() => {
    map.setView([center.lat, center.lng], zoom, {
      animate: true,
      duration: 1.2
    });
  }, [map, center, zoom]);
  return null;
};

// Elegant Pin for Locations
const createLocationIcon = (type: string, isSelected: boolean) => {
  const isCapital = type === 'capital';
  // Bronze/Gold for capitals, Dark Ink/Red for others
  const outerColor = isCapital ? '#8B2E28' : '#B08D55'; 
  const innerColor = isCapital ? '#B08D55' : '#FFFFFF';
  const size = isCapital ? 24 : 18;
  
  const scaleClass = isSelected ? 'scale-125 drop-shadow-xl' : 'scale-100 hover:scale-110 drop-shadow-md';
  const zIndex = isSelected ? 999 : (isCapital ? 100 : 1);

  return L.divIcon({
    className: 'bg-transparent border-none',
    html: `
      <div class="group cursor-pointer transition-all duration-300 ease-out ${scaleClass}" style="position: relative; width: 100%; height: 100%; z-index: ${zIndex};">
        <svg viewBox="0 0 24 24" fill="${outerColor}" stroke="white" stroke-width="1.5" style="width: 100%; height: 100%; display: block;">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="5" fill="${innerColor}" stroke="none" />
        </svg>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2], // Center anchor for dots
    popupAnchor: [0, -size], 
  });
};

// Seal/Stamp style Icon for States
const createStateIcon = (name: string, isSelected: boolean) => {
  const animationClass = isSelected ? 'animate-pulse-slow' : '';
  const opacity = isSelected ? 'opacity-100' : 'opacity-90 hover:opacity-100';

  return L.divIcon({
    className: 'bg-transparent border-none',
    html: `
      <div class="group cursor-pointer transition-all duration-300 ${opacity} ${animationClass}" style="position: relative; width: 100%; height: 100%;">
        <div class="flex flex-col items-center">
           <!-- Stamp Body -->
           <div class="bg-gradient-to-br from-cinnabar to-[#6b1d18] text-white font-display border border-red-900/50 shadow-lg rounded-sm w-[52px] h-[52px] flex items-center justify-center text-xl tracking-tight relative transition-transform duration-300 ${isSelected ? 'scale-110 ring-2 ring-bronze ring-offset-2 ring-offset-transparent' : 'group-hover:scale-105'}">
              <div class="absolute inset-0 border border-white/20 m-0.5"></div>
              ${name.substring(0, 2)}
           </div>
           <!-- Stick/Pole (hidden to look floating) -->
        </div>
      </div>
    `,
    iconSize: [60, 60],
    iconAnchor: [30, 30], // Center
    popupAnchor: [0, -30],
  });
};

const ChinaMap: React.FC<ChinaMapProps> = ({ locations, states = [], boundary, center, zoom, loading, onLocationSelect, selectedItem }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 bg-[#F9F7F2]">
      <MapContainer
        center={[center.lat, center.lng]}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ background: '#F9F7F2' }} 
        attributionControl={false}
        zoomControl={false}
      >
        <MapUpdater center={center} zoom={zoom} />
        
        {/* Gaode Map (AMap) - Using a muted style via CSS filters if possible, but tiles are images. */}
        {/* We can overlay a sepia tone div if we want, but clean tiles are fine. */}
        <TileLayer
          url="https://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}"
          attribution='&copy; 高德地图'
          className="grayscale-[20%] contrast-[95%] sepia-[10%]" // Subtle CSS filter for vintage look
        />

        {/* Territory Polygon - Refined Colors */}
        {boundary.length > 0 && (
          <Polygon
            positions={boundary.map(c => [c.lat, c.lng])}
            pathOptions={{
              color: '#B08D55', // Bronze stroke
              weight: 1,
              opacity: 0.8,
              dashArray: '5, 5',
              fillColor: '#D4B483', // Paper-like fill
              fillOpacity: 0.2,
              className: 'transition-all duration-700 pointer-events-none'
            }}
          />
        )}

        {/* State/Kingdom Markers */}
        {!loading && states.map((state, idx) => {
          const isSelected = selectedItem?.name === state.name;
          return (
            <Marker
              key={`state-${state.name}-${idx}-${isSelected ? 'selected' : 'normal'}`}
              position={[state.position.lat, state.position.lng]}
              icon={createStateIcon(state.name, isSelected)}
              zIndexOffset={isSelected ? 1000 : 200} 
              eventHandlers={{
                click: () => onLocationSelect(state)
              }}
            >
               {!isSelected && (
                 <Tooltip direction="top" offset={[0, -28]} opacity={1} className="state-tooltip font-bold font-serif text-cinnabar">
                  {state.name}
                </Tooltip>
               )}
            </Marker>
          );
        })}

        {/* Location Markers */}
        {!loading && locations.map((loc, idx) => {
          const isSelected = selectedItem?.name === loc.name;
          return (
            <Marker
              key={`loc-${loc.name}-${idx}-${isSelected ? 'selected' : 'normal'}`}
              position={[loc.position.lat, loc.position.lng]}
              icon={createLocationIcon(loc.type, isSelected)}
              zIndexOffset={isSelected ? 1000 : 100}
              eventHandlers={{
                click: () => onLocationSelect(loc)
              }}
            >
              {!isSelected && (
                <Tooltip direction="top" offset={[0, -10]} opacity={0.9} className="location-tooltip font-serif text-ink">
                  {loc.name}
                </Tooltip>
              )}
            </Marker>
          );
        })}
      </MapContainer>
      <style>{`
        .state-tooltip {
          background-color: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          text-shadow: 0 1px 2px white, 0 0 1em white;
          font-size: 14px;
        }
        .state-tooltip::before { display: none; }
        
        .location-tooltip {
          background-color: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0,0,0,0.1);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          padding: 2px 6px;
          border-radius: 2px;
          font-size: 12px;
        }
        .location-tooltip::before { border-top-color: rgba(255,255,255,0.9); }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ChinaMap;