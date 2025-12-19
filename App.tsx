import React, { useState, useEffect } from 'react';
import { DYNASTIES, INITIAL_DYNASTY_DATA } from './constants';
import { STATIC_DYNASTY_DATA } from './data';
import { HistoricalLocation, HistoricalState, Coordinates } from './types';
import TimelineControl from './components/TimelineControl';
import ChinaMap from './components/ChinaMap';
import InfoPanel from './components/InfoPanel';
import LocationDetailPanel from './components/LocationDetailPanel';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [selectedItem, setSelectedItem] = useState<HistoricalLocation | HistoricalState | null>(null);
  
  // State to handle manual map overrides (when user clicks "Jump to location")
  const [manualView, setManualView] = useState<{center: Coordinates, zoom: number} | null>(null);

  const currentDynasty = DYNASTIES[currentIndex];
  const currentData = STATIC_DYNASTY_DATA[currentDynasty.id] || INITIAL_DYNASTY_DATA;

  // When dynasty changes, reset selection and manual view to default to the dynasty's main view
  const handleDynastyChange = (index: number) => {
    setCurrentIndex(index);
    setSelectedItem(null);
    setManualView(null);
  };

  // When a specific location is selected (either from map or panel)
  const handleLocationSelect = (item: HistoricalLocation | HistoricalState) => {
    setSelectedItem(item);
    // Automatically zoom in to the selected location
    // We use a zoom level of 7 for detailed view of the specific city/site
    setManualView({ center: item.position, zoom: 7 });
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    // Optionally stay at the location or zoom back out. 
    // Staying at location is usually better UX, but user can zoom out manually.
  };

  // Determine active map view params
  const activeCenter = manualView ? manualView.center : currentData.center;
  const activeZoom = manualView ? manualView.zoom : currentData.zoom;

  return (
    <div className="h-screen w-screen bg-paper overflow-hidden relative font-sans text-ink">
      
      {/* Map Layer */}
      <div className="absolute inset-0 z-0">
          <ChinaMap 
            locations={currentData.locations}
            states={currentData.states || []}
            boundary={currentData.boundary}
            center={activeCenter}
            zoom={activeZoom}
            loading={false}
            onLocationSelect={handleLocationSelect}
            selectedItem={selectedItem}
          />
      </div>

      {/* Floating UI Layers */}
      <InfoPanel 
        data={currentData} 
        currentDynastyId={currentDynasty.id} 
        loading={false} 
        onLocationSelect={handleLocationSelect}
      />

      <LocationDetailPanel 
        location={selectedItem} 
        onClose={handleCloseDetail} 
      />

      <TimelineControl 
        dynasties={DYNASTIES} 
        currentIndex={currentIndex} 
        onChange={handleDynastyChange} 
      />
      
    </div>
  );
};

export default App;