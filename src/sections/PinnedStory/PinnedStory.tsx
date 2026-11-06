import React, { useState, useEffect, useRef } from 'react';
import { TRANSFORMATION_STAGES } from '../../data/content';
import { CheckCircle2, Quote } from 'lucide-react';

export const PinnedStory: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowCenter = window.innerHeight * 0.45;

      stageRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowCenter && rect.bottom >= windowCenter) {
          setActiveStage(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStage = TRANSFORMATION_STAGES[activeStage] || TRANSFORMATION_STAGES[0];

  return (
    <section id="story" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="mb-14 md:mb-20 max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
          The Transformation Journey
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
          From Talent Challenges to Business Transformation.
        </h2>
        <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
          A proven five-stage methodology turning talent shortages and capability bottlenecks into sustainable business momentum.
        </p>
      </div>

      {/* Pinned Two-Column Layout matching Wayfare "How It Works" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start relative">
        
        {/* Left Column: Sticky Pinned Photo & Synchronized Quote Window (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 z-20">
          {/* Main Stage Image with Smooth Cross-Transition */}
          <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-[28px] overflow-hidden shadow-2xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#1A1712]">
            {TRANSFORMATION_STAGES.map((stage, idx) => {
              const isActive = idx === activeStage;
              return (
                <div
                  key={stage.number}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.08)',
                    transition: 'opacity 0.65s ease-out, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: isActive ? 10 : 0,
                  }}
                >
                  <img
                    src={stage.image}
                    alt={stage.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1712]/80 via-transparent to-transparent" />

                  {/* Stage Number Floating Watermark */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-pill bg-white/85 dark:bg-[#1C1913]/85 text-xs font-semibold text-[#211D16] dark:text-[#F3ECDF] shadow-sm">
                    Stage {stage.number} of 05
                  </div>
                </div>
              );
            })}
          </div>

          {/* Synchronized Quote / Context Panel (Wayfare Quote Window) */}
          <div className="rounded-2xl p-6 glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] shadow-lg relative overflow-hidden transition-all duration-300">
            <div className="flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#FFC94A] flex-shrink-0 mt-1 opacity-90" />
              <div className="space-y-2">
                <p className="text-sm font-serif italic text-[#211D16] dark:text-[#F3ECDF] leading-relaxed">
                  {currentStage.quote.text}
                </p>
                <p className="text-xs font-medium text-[#857E70] dark:text-[#8F887A] uppercase tracking-wider">
                  — {currentStage.quote.context}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Scrolling 5 Stages (7 cols) */}
        <div className="lg:col-span-7 space-y-16 lg:space-y-28 py-4">
          {TRANSFORMATION_STAGES.map((stage, idx) => {
            const isActive = idx === activeStage;

            return (
              <div
                key={stage.number}
                ref={(el) => { stageRefs.current[idx] = el; }}
                className={`p-6 sm:p-8 rounded-3xl transition-all duration-500 border ${
                  isActive
                    ? 'bg-[#FCF9F3] dark:bg-[#1C1913] border-[#E0D6C4] dark:border-[#2F2A20] shadow-xl scale-[1.01]'
                    : 'bg-transparent border-transparent opacity-50 hover:opacity-75'
                }`}
              >
                {/* Step Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`font-display text-base font-semibold px-3 py-1 rounded-full transition-colors ${
                      isActive
                        ? 'bg-[#FFC94A] text-[#231C0A]'
                        : 'bg-[#ECE3D3] dark:bg-[#27231A] text-[#857E70] dark:text-[#8F887A]'
                    }`}
                  >
                    {stage.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-semibold">
                    {stage.subtitle}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] mb-4">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed mb-6">
                  {stage.description}
                </p>

                {/* Deliverables Matrix */}
                <div className="space-y-2.5 pt-4 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#857E70] dark:text-[#8F887A] block">
                    Key Outcomes & Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF]">
                    {stage.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FFC94A] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
