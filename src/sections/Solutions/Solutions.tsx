import React from 'react';
import { HoverSlider } from '../../components/HoverSlider/HoverSlider';
import { BUSINESS_VERTICALS } from '../../data/content';
import { BusinessVertical } from '../../types';

interface SolutionsSectionProps {
  onSelectVertical?: (vertical: BusinessVertical) => void;
}

export const Solutions: React.FC<SolutionsSectionProps> = ({ onSelectVertical }) => {
  return (
    <section id="solutions" className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Wayfare-style Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
            Comprehensive Capability Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
            Three Verticals, One Unified Standard
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] max-w-md leading-relaxed">
          While traditional vendors isolate hiring from training and tech, we connect all three to create resilient, high-velocity teams.
        </p>
      </div>

      {/* The Signature Wayfare Hover Slider Component */}
      <HoverSlider
        verticals={BUSINESS_VERTICALS}
        onSelectVertical={onSelectVertical}
      />
    </section>
  );
};
