import React from 'react';
import { HistoricalLocation, HistoricalState } from '../types';

interface LocationDetailPanelProps {
  location: HistoricalLocation | HistoricalState | null;
  onClose: () => void;
}

// Type guard
function isState(item: HistoricalLocation | HistoricalState): item is HistoricalState {
  return (item as HistoricalState).monarchs !== undefined;
}

const LocationDetailPanel: React.FC<LocationDetailPanelProps> = ({ location, onClose }) => {
  if (!location) return null;

  const isStateItem = isState(location);
  const isCapital = isStateItem || (location as HistoricalLocation).type === 'capital';

  return (
    <div className="absolute top-6 right-6 bottom-24 z-[400] w-96 pointer-events-none">
      <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/50 h-full flex flex-col overflow-hidden pointer-events-auto transform transition-all duration-500 animate-slide-in-right relative">
        
        {/* Artistic Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper-2.png')] opacity-30 pointer-events-none z-0"></div>

        {/* Header */}
        <div className="relative z-10 p-6 pb-4 border-b border-stone-200/60 bg-gradient-to-b from-white/80 to-transparent">
           <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-400 hover:text-ink hover:bg-stone-100 rounded-full p-1.5 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          
          <div className="mt-2">
            <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border ${isStateItem ? 'border-cinnabar text-cinnabar' : 'border-bronze text-bronze'}`}>
                    {isStateItem ? '政权' : ((location as HistoricalLocation).type === 'capital' ? '都城' : (location as HistoricalLocation).type === 'battle' ? '战役' : '名胜')}
                </span>
                {!isStateItem && (location as HistoricalLocation).modernName && (
                    <span className="text-xs text-stone-400 font-serif">今: {(location as HistoricalLocation).modernName}</span>
                )}
            </div>
            <h2 className="text-3xl font-display text-ink mb-1 drop-shadow-sm">
                {location.name}
            </h2>
            {isStateItem && (
                 <div className="flex items-center gap-3 text-sm font-serif text-stone-500 mt-2">
                    <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>
                        {(location as HistoricalState).startYear} - {(location as HistoricalState).endYear}
                    </span>
                    <span className="w-px h-3 bg-stone-300"></span>
                    <span className="flex items-center gap-1 text-cinnabar">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.5L18.5 19H5.5L12 5.5z"/></svg>
                        {(location as HistoricalState).capital}
                    </span>
                 </div>
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 pt-4 overflow-y-auto flex-1 custom-scrollbar relative z-10">
          
          {/* Description */}
          <div className="mb-8">
            <p className="text-charcoal text-sm leading-relaxed font-serif text-justify first-letter:text-2xl first-letter:float-left first-letter:mr-2 first-letter:text-bronze first-letter:font-display">
              {location.description}
            </p>
          </div>

          {/* State Specific Info: Monarchs Timeline */}
          {isStateItem && (
            <div className="mb-8">
                <h3 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4 border-b border-stone-100 pb-2">历代君王</h3>
                <div className="relative pl-4 border-l border-stone-200 space-y-3">
                    {(location as HistoricalState).monarchs.split('\n').map((monarch, idx) => (
                        <div key={idx} className="relative group">
                            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-stone-300 group-hover:border-cinnabar transition-colors"></div>
                            <p className="text-sm font-serif text-stone-600 group-hover:text-ink transition-colors leading-tight">
                                {monarch}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
          )}

          {/* Fall Reason / Anecdote Card */}
          <div className="relative bg-stone-50 border border-stone-100 rounded-lg p-5 mt-2 overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10">
                <svg className="w-16 h-16 text-bronze" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.389 15.954 15.133 15.174C15.877 14.394 16.919 13.914 18.259 13.734V12.734C16.919 12.554 15.877 12.074 15.133 11.294C14.389 10.514 14.017 9.572 14.017 8.468H18.259V6H12.017V8.468C12.017 11.756 12.869 14.732 14.573 17.396C16.277 20.06 18.797 21.692 22.133 22.292L21.733 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.38897 15.954 6.13297 15.174C6.87697 14.394 7.91897 13.914 9.25897 13.734V12.734C7.91897 12.554 6.87697 12.074 6.13297 11.294C5.38897 10.514 5.01697 9.572 5.01697 8.468H9.25897V6H3.01697V8.468C3.01697 11.756 3.86897 14.732 5.57297 17.396C7.27697 20.06 9.79697 21.692 13.133 22.292L12.733 21H5.01697Z"/></svg>
             </div>
             
             <h3 className="text-xs font-bold text-bronze uppercase tracking-widest mb-2">
                {isStateItem ? '兴衰始末' : '历史典故'}
             </h3>
             <p className="text-ink/80 text-sm font-serif italic leading-relaxed relative z-10">
               {isStateItem ? (location as HistoricalState).fallReason : (location as HistoricalLocation).anecdote}
             </p>
          </div>

          {/* Source Footer for States */}
          {isStateItem && (location as HistoricalState).source && (
              <div className="mt-6 flex items-center justify-end">
                  <span className="text-[10px] text-stone-400 bg-white px-2 py-1 border border-stone-100 rounded-full">
                    { (location as HistoricalState).source}
                  </span>
              </div>
          )}

        </div>
      </div>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default LocationDetailPanel;