import React from 'react';
import { DynastyData, HistoricalLocation, HistoricalState } from '../types';
import { DYNASTIES } from '../constants';
import logo from '../logo/logo.png';

interface InfoPanelProps {
  data: DynastyData | null;
  currentDynastyId: string;
  loading: boolean;
  onLocationSelect: (location: HistoricalLocation | HistoricalState) => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ data, currentDynastyId, loading, onLocationSelect }) => {
  const dynastyInfo = DYNASTIES.find(d => d.id === currentDynastyId);

  if (loading || !data || !dynastyInfo) {
    return null;
  }

  // Helper to find associated state for a capital
  const getStateName = (locationName: string) => {
    if (!data.states) return null;
    // Find a state where the capital string includes this location name
    const state = data.states.find(s => s.capital.includes(locationName));
    return state ? state.name : null;
  };

  // Group locations
  const capitals = data.locations.filter(l => l.type === 'capital');
  const battles = data.locations.filter(l => l.type === 'battle');
  const cultureAndTrade = data.locations.filter(l => l.type === 'cultural' || l.type === 'trade');

  return (
    <div className="absolute top-6 left-6 z-[400] max-w-sm w-full pointer-events-none">
      {/* Main Glass Card */}
      <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-glass rounded-xl p-6 transition-all duration-500 pointer-events-auto max-h-[calc(100vh-120px)] overflow-hidden flex flex-col relative group">
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-bronze/5 to-transparent rounded-bl-full pointer-events-none -z-10"></div>

        {/* Title Section */}
        <div className="flex flex-col mb-4 flex-shrink-0 relative">
          <div className="flex items-center gap-3">
             <img
               src={logo}
               alt="logo"
               className="w-8 h-8 object-contain drop-shadow-sm flex-shrink-0"
             />
             <h2 className="text-4xl font-bold text-ink tracking-wide font-display drop-shadow-sm">
              {dynastyInfo.name}
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-bronze/50 to-transparent self-center mt-2"></div>
          </div>
          <span className="text-bronze font-serif italic text-sm mt-1 tracking-wider">
             {dynastyInfo.period}
          </span>
        </div>
        
        {/* Summary Content */}
        <div className="space-y-4 mb-6 flex-shrink-0">
          <p className="text-charcoal/90 text-sm leading-7 font-serif text-justify border-l-2 border-bronze/20 pl-3">
            {data.summary}
          </p>
          <div className="text-xs leading-relaxed text-stone-500 bg-stone-50/50 p-2.5 rounded border border-stone-100 font-sans flex gap-2">
            <span className="flex-shrink-0 text-bronze">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
            {data.territoryDescription}
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto pr-2 flex-1 space-y-6 pb-2 custom-scrollbar">
            
            {/* States / Regimes Section */}
            {data.states && data.states.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-stone-500"></div>
                  诸侯 & 政权
                </h3>
                <div className="flex flex-wrap gap-2">
                    {data.states.map((state, idx) => (
                      <button
                        key={`state-btn-${idx}`}
                        onClick={() => onLocationSelect(state)}
                        className="group relative px-3 py-1.5 rounded-sm text-sm font-serif text-ink border border-stone-300 hover:border-stone-500 hover:text-stone-700 transition-all duration-300 bg-white/50 hover:bg-white hover:shadow-sm active:scale-95 flex items-center gap-2 overflow-hidden"
                        title="查看政权"
                      >
                         <span className="font-display text-stone-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute left-1 -ml-2 group-hover:ml-0">印</span>
                         <span className="transition-transform duration-300 group-hover:translate-x-2">{state.name}</span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Capitals Section */}
            {capitals.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-cinnabar"></div>
                  帝都 & 王城
                </h3>
                <div className="flex flex-wrap gap-2">
                    {capitals.map((loc, idx) => {
                      const stateName = getStateName(loc.name);
                      return (
                        <button
                          key={idx}
                          onClick={() => onLocationSelect(loc)}
                          className="px-2.5 py-1 rounded text-xs font-medium border border-cinnabar/30 text-cinnabar bg-white/30 hover:bg-cinnabar hover:text-white backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                        >
                          {loc.name}{stateName ? ` (${stateName})` : ''}
                        </button>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Battles Section */}
            {battles.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-stone-600"></div>
                  战役 & 典故
                </h3>
                <div className="flex flex-wrap gap-2">
                    {battles.map((loc, idx) => (
                      <button
                        key={idx}
                        onClick={() => onLocationSelect(loc)}
                        className="px-2.5 py-1 rounded text-xs font-medium border border-stone-400/30 text-stone-600 bg-white/30 hover:bg-stone-600 hover:text-white backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                      >
                        {loc.name}
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Culture & Trade Section */}
            {cultureAndTrade.length > 0 && (
              <div>
                <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-bronze"></div>
                  名胜 & 古迹
                </h3>
                <div className="flex flex-wrap gap-2">
                    {cultureAndTrade.map((loc, idx) => (
                      <button
                        key={idx}
                        onClick={() => onLocationSelect(loc)}
                        className={`px-2.5 py-1 rounded text-xs font-medium border bg-white/30 backdrop-blur-sm transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 ${
                           loc.type === 'trade' 
                           ? 'border-jade/30 text-jade hover:bg-jade hover:text-white' 
                           : 'border-bronze/30 text-bronze hover:bg-bronze hover:text-white'
                        }`}
                      >
                        {loc.name}
                      </button>
                    ))}
                </div>
              </div>
            )}
        </div>

      </div>
    </div>
  );
};

export default InfoPanel;
