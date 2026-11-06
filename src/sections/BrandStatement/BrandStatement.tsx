import React from 'react';
import { TextFill } from '../../components/AnimatedText/TextFill';
import { COMPANY_INFO } from '../../data/content';

export const BrandStatement: React.FC = () => {
  return (
    <section
      id="statement"
      className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-12 border-y border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 bg-[#FCF9F3] dark:bg-[#14120E] overflow-hidden"
    >
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFC94A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6 md:space-y-8">
        {/* Eyebrow Label matching Wayfare "Our promise" */}
        <div className="inline-block">
          <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-4 py-1.5 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20]">
            Our Core Conviction
          </span>
        </div>

        {/* The Scroll-Filled Brand Statement */}
        <div className="py-2">
          <TextFill
            text={COMPANY_INFO.statement}
            tag="h2"
            start={0.8}
            end={0.25}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] font-display font-medium tracking-tight text-center"
          />
        </div>

        {/* Editorial Subtext */}
        <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] max-w-2xl mx-auto font-sans leading-relaxed">
          At Varnith Global, we eliminate organizational friction by uniting executive talent acquisition, production-grade technical education, and AI-enabled workflows into one cohesive engine.
        </p>
      </div>
    </section>
  );
};
