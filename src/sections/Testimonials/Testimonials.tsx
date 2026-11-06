import React from 'react';
import { TESTIMONIALS } from '../../data/content';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  // Duplicate for smooth seamless infinite marquee
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section className="py-20 md:py-32 overflow-hidden relative border-y border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 bg-[#FCF9F3] dark:bg-[#14120E]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12 text-center space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
          Verified Feedback
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
          What Professionals & Clients Say
        </h2>
        <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] max-w-xl mx-auto leading-relaxed">
          Authentic feedback from graduates and corporate partners across our testing, SAP security, DevOps, and analytics programs.
        </p>
      </div>

      {/* Infinite Ticker Container with Lateral Edge Fades (Fade Left, Fade Right) */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#FCF9F3] dark:from-[#14120E] to-transparent" />
        {/* Right Edge Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#FCF9F3] dark:from-[#14120E] to-transparent" />

        {/* Marquee Row */}
        <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] py-4">
          {marqueeItems.map((test, idx) => (
            <div
              key={`${test.id}-${idx}`}
              className="w-[340px] sm:w-[420px] rounded-3xl p-6 sm:p-8 bg-[#F5EFE4]/60 dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] shadow-md flex flex-col justify-between space-y-6 flex-shrink-0"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex text-[#FFC94A] gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC94A] text-[#FFC94A]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-[#211D16] dark:text-[#F3ECDF] font-serif italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 flex items-center justify-between">
                <div>
                  <h4 className="font-display text-sm font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                    {test.author}
                  </h4>
                  <p className="text-xs text-[#857E70] dark:text-[#8F887A]">
                    {test.role}
                  </p>
                </div>

                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#FFC94A]/20 text-[#231C0A] dark:text-[#FFD978] border border-[#FFC94A]/30 max-w-[140px] truncate">
                  {test.serviceOrCourse.split(' ')[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
