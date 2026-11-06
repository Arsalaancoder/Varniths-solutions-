import React from 'react';
import { motion } from 'framer-motion';
import { ButtonArrow } from '../../components/Buttons/ButtonArrow';
import { WAYFARE_CURVES } from '../../animations/transitions';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    // Outer Frame wrapper with 12px margin matching Wayfare framer-e5fcv
    <section
      id="hero"
      className="relative w-full p-2 sm:p-2.5 lg:p-3 pt-0 overflow-hidden"
    >
      {/* Full-width, Full-bleed Photo Panel with 28px rounded corners (Wayfare Photo Panel) */}
      <div className="relative w-full min-h-[640px] md:min-h-[780px] lg:h-[900px] rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-end bg-[#1A1712] border border-[#E0D6C4]/40 shadow-2xl">
        
        {/* Full-bleed Photographic Background covering entire hero */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/varnith-hero.jpg"
            alt="Building better teams, empowering better futures — Varnith Global"
            className="w-full h-full object-cover object-[center_35%] filter brightness-[1.08] contrast-[1.04] saturate-[1.05] transform scale-100 transition-transform duration-1000 ease-out"
            loading="eager"
          />
        </div>

        {/* Luminous Warm Photographic Overlay — keeps the team workspace bright, luminous & clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE4]/55 via-[#F5EFE4]/20 to-transparent pointer-events-none" />

        {/* Gentle Bottom Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE4]/35 via-transparent to-transparent pointer-events-none" />

        {/* Top subtle ambient vignette for navbar legibility */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />

        {/* Hero Content Container matching Wayfare Hero Row (padding: 150px 58px 104px on desktop) */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-36 sm:pt-40 pb-12 sm:pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto">
            
            {/* Left Column: Hero Copy */}
            <div className="max-w-2xl lg:max-w-3xl space-y-6 md:space-y-8">
              
              {/* Eyebrow Badge with Glowing Sun Dot */}
              <motion.div
                initial={{ opacity: 0.001, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05, duration: 0.9, ease: WAYFARE_CURVES.expo }}
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill bg-[#FCF9F3]/85 text-xs sm:text-sm font-medium text-[#211D16] border border-[#E0D6C4]/60 shadow-sm self-start"
              >
                {/* Sun Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC94A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC94A]" />
                </span>
                <span className="tracking-wide text-[#4E493F]">
                  HR Consulting • Talent Solutions • Technology
                </span>
              </motion.div>

              {/* Large Headline positioned over background on left */}
              <motion.h1
                initial={{ opacity: 0.001, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.9, ease: WAYFARE_CURVES.expo }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-medium tracking-tight text-[#211D16] leading-[1.05]"
              >
                Building better teams,<br />
                empowering better futures.
              </motion.h1>

              {/* Supporting Paragraph beneath headline */}
              <motion.p
                initial={{ opacity: 0.001, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.9, ease: WAYFARE_CURVES.expo }}
                className="font-sans text-base sm:text-lg md:text-xl text-[#4E493F] leading-relaxed max-w-xl"
              >
                We connect exceptional talent, professional development and intelligent technology to help businesses move forward.
              </motion.p>

              {/* Two CTA Buttons */}
              <motion.div
                initial={{ opacity: 0.001, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.9, ease: WAYFARE_CURVES.expo }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <ButtonArrow
                  label="Explore Our Solutions"
                  variant="primary"
                  to="/services"
                />

                <ButtonArrow
                  label="Let's Talk"
                  variant="dark"
                  to="/contact"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
