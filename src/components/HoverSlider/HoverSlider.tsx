import React, { useState, useEffect, useRef } from 'react';
import { BusinessVertical } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HoverSliderProps {
  verticals: BusinessVertical[];
  onSelectVertical?: (vertical: BusinessVertical) => void;
  className?: string;
}

export const HoverSlider: React.FC<HoverSliderProps> = ({
  verticals,
  onSelectVertical,
  className = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [recentIndices, setRecentIndices] = useState<number[]>([0]);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Detect touch device
  useEffect(() => {
    try {
      setIsTouchDevice(window.matchMedia('(hover: none)').matches);
    } catch {}
  }, []);

  // Handle active selection with recent index history for smooth cross-clip
  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setRecentIndices((prev) => [...prev.filter((i) => i !== index), index].slice(-4));
    if (onSelectVertical) {
      onSelectVertical(verticals[index]);
    }
  };

  // Autoplay fallback for touch devices or inactive states
  useEffect(() => {
    if (!isTouchDevice || verticals.length < 2) return;

    autoplayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % verticals.length;
        setRecentIndices((r) => [...r.filter((i) => i !== next), next].slice(-4));
        return next;
      });
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isTouchDevice, verticals.length]);

  return (
    <div
      className={`relative w-full rounded-[28px] lg:rounded-[36px] bg-[#1A1712] p-6 md:p-10 lg:p-14 text-[#F3ECDF] overflow-hidden shadow-2xl border border-[#2F2A20] ${className}`}
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFC94A]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#FFC94A]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header Eyebrow & Title */}
      <div className="relative z-10 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#2F2A20] pb-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#FFC94A] font-medium mb-2 block">
            01 / Business Verticals
          </span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-[#F3ECDF] tracking-tight">
            Integrated Solutions Built for Scale
          </h3>
        </div>
        <p className="text-sm md:text-base text-[#8F887A] max-w-md">
          Delivering end-to-end organizational impact through talent strategy, continuous technical education, and AI modernization.
        </p>
      </div>

      {/* Main Grid: Selectable Verticals (Left) + Wipe Image Showcase (Right) */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left Column: Verticals List */}
        <div className="w-full lg:w-[58%] flex flex-col justify-center space-y-4">
          {verticals.map((vert, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div
                key={vert.id}
                onMouseEnter={() => handleSelect(idx)}
                onClick={() => handleSelect(idx)}
                className={`group cursor-pointer rounded-2xl p-5 md:p-6 transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-white/[0.08] border-[#FFC94A]/40 shadow-lg backdrop-blur-sm'
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                }`}
              >
                {/* Active Indicator Accent Line */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full transition-all duration-300 ${
                    isActive ? 'bg-[#FFC94A] scale-y-100' : 'bg-transparent scale-y-0'
                  }`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    {/* Index Number */}
                    <span
                      className={`font-display text-lg md:text-xl font-medium transition-colors ${
                        isActive ? 'text-[#FFC94A]' : 'text-white/40'
                      }`}
                    >
                      {vert.index}
                    </span>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h4
                          className={`font-display text-lg md:text-2xl font-medium tracking-tight transition-colors ${
                            isActive ? 'text-[#F3ECDF]' : 'text-[#F3ECDF]/80 group-hover:text-[#F3ECDF]'
                          }`}
                        >
                          {vert.title}
                        </h4>
                        {vert.id === 'hr' && (
                          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFC94A]/20 text-[#FFD978] border border-[#FFC94A]/30">
                            Primary
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-sm md:text-base leading-relaxed transition-all duration-300 ${
                          isActive
                            ? 'text-[#C4BDAF] max-h-24 opacity-100 mt-2'
                            : 'text-[#8F887A] max-h-12 overflow-hidden opacity-75'
                        }`}
                      >
                        {vert.tagline}
                      </p>

                      {/* Expandable Highlight points on active */}
                      {isActive && (
                        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-[#F3ECDF] animate-fadeIn">
                          {vert.highlightPoints.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC94A] flex-shrink-0" />
                              <span>{point}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                      isActive
                        ? 'bg-[#FFC94A] text-[#231C0A] translate-x-1'
                        : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Signature Wayfare Image Hover Slider with Clip-Path Wipe */}
        <div className="w-full lg:w-[42%] aspect-[4/5] min-h-[380px] lg:min-h-[480px] rounded-[24px] overflow-hidden relative shadow-2xl border border-[#2F2A20] bg-black/40">
          {verticals.map((vert, idx) => {
            const isActive = idx === activeIndex;
            const recentOrder = recentIndices.indexOf(idx);

            return (
              <div
                key={vert.id}
                className="absolute inset-0 w-full h-full"
                style={{
                  zIndex: isActive ? 10 : recentOrder < 0 ? 0 : recentOrder + 1,
                  clipPath: isActive ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
                  transform: isActive ? 'scale(1)' : 'scale(1.12)',
                  transition: isActive
                    ? 'clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)'
                    : 'clip-path 0s linear 0.9s, transform 0s linear 0.9s',
                }}
              >
                <img
                  src={vert.image}
                  alt={vert.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  draggable={false}
                />

                {/* Atmospheric gradient veil matching Wayfare */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1712] via-[#1A1712]/30 to-transparent" />

                {/* Floating Bottom Card Over Image */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 z-20">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#FFC94A] text-[#231C0A] mb-2 shadow-sm">
                    {vert.primaryServiceCount}
                  </span>
                  <h5 className="font-display text-xl md:text-2xl font-medium text-[#F3ECDF] mb-2">
                    {vert.title}
                  </h5>
                  <p className="text-xs md:text-sm text-[#C4BDAF] line-clamp-2">
                    {vert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
