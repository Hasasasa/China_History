import React, { useState, useEffect } from 'react';
import { Dynasty } from '../types';

interface TimelineControlProps {
  dynasties: Dynasty[];
  currentIndex: number;
  onChange: (index: number) => void;
}

const TimelineControl: React.FC<TimelineControlProps> = ({ dynasties, currentIndex, onChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        if (currentIndex < dynasties.length - 1) {
          onChange(currentIndex + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex, dynasties.length, onChange]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const handleNext = () => currentIndex < dynasties.length - 1 && onChange(currentIndex + 1);
  const handlePrev = () => currentIndex > 0 && onChange(currentIndex - 1);

  // Calculate percentage for progress bar
  const progressPercent = (currentIndex / (dynasties.length - 1)) * 100;

  return (
    <div className="absolute bottom-8 left-0 right-0 z-[400] flex justify-center px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-glass p-2 pl-3 pr-6 flex items-center gap-4 border border-white/50 max-w-4xl w-full">
        
        {/* Controls Group */}
        <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              onClick={togglePlay}
              className="w-10 h-10 bg-gradient-to-b from-ink to-charcoal hover:from-black hover:to-ink text-white rounded-full flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95"
            >
              {isPlaying ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              ) : (
                <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              )}
            </button>

            <div className="hidden md:flex gap-1">
              <button onClick={handlePrev} disabled={currentIndex === 0} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-200 text-ink/70 disabled:opacity-30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={handleNext} disabled={currentIndex === dynasties.length - 1} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-stone-200 text-ink/70 disabled:opacity-30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
        </div>

        {/* Timeline Slider Area */}
        <div className="flex-1 relative h-12 flex flex-col justify-center mx-2 group">
          
          {/* Track Layer */}
          <div className="relative w-full h-0.5 bg-stone-300 rounded-full">
              {/* Colored Progress */}
              <div 
                className="absolute top-0 left-0 h-full bg-bronze rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              ></div>
              
              {/* Thumb Visual */}
              <div 
                  className="absolute top-1/2 -mt-[7px] w-[14px] h-[14px] bg-white border-[3px] border-bronze rounded-full shadow-sm z-20 transition-all duration-300 pointer-events-none transform -translate-x-1/2 group-hover:scale-125"
                  style={{ left: `${progressPercent}%` }}
              ></div>

              {/* Invisible Native Input */}
              <input
                type="range"
                min="0"
                max={dynasties.length - 1}
                value={currentIndex}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="absolute top-[-15px] left-0 right-0 bottom-[-15px] w-full h-10 opacity-0 cursor-pointer z-30"
              />
          </div>
          
          {/* Ticks & Labels */}
          <div className="absolute top-7 w-full h-4 select-none pointer-events-none">
            {dynasties.map((d, i) => {
               const shortName = d.name.replace('朝','').replace('西周','西').replace('东周','东').replace('五代十国','五代').replace('北宋','北').replace('南宋','南');
               const isActive = i === currentIndex;
               const percentage = (i / (dynasties.length - 1)) * 100;
               return (
                 <div 
                    key={d.id} 
                    className={`absolute transform -translate-x-1/2 flex flex-col items-center transition-all duration-300`}
                    style={{ left: `${percentage}%` }}
                 >
                    {/* Tick */}
                    <div className={`absolute -top-7 w-px h-1.5 transition-colors ${isActive ? 'bg-bronze h-2' : 'bg-stone-300'}`}></div>
                    
                    {/* Label */}
                    <span className={`text-[10px] md:text-xs font-serif tracking-tight mt-1 transition-all duration-300 ${
                        isActive 
                        ? 'text-ink font-bold scale-110 -translate-y-1' 
                        : 'text-stone-400 opacity-0 md:opacity-100'
                    }`}>
                        {shortName}
                    </span>
                 </div>
               )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineControl;
