import React from 'react';
import { ImageTrail } from '../../components/CursorTrail/ImageTrail';
import { ButtonArrow } from '../../components/Buttons/ButtonArrow';
import { WordReveal } from '../../components/AnimatedText/WordReveal';
import { COMPANY_INFO } from '../../data/content';
import { MessageSquare, PhoneCall } from 'lucide-react';

interface CTAProps {
  onOpenContact?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenContact }) => {
  // Curated high aesthetic recruitment, team, and corporate technology imagery for cursor photo trail
  const trailImages = [
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Wayfare CTA Window with Interactive Cursor Photo Trail */}
      <ImageTrail
        images={trailImages}
        distance={110}
        size={150}
        radius={18}
        life={1.3}
        className="rounded-[32px] md:rounded-[40px] bg-[#1A1712] p-8 sm:p-14 lg:p-20 text-center relative shadow-2xl border border-[#2F2A20]"
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFC94A]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Content Container (Layered above Trail canvas) */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 md:space-y-8 pointer-events-auto">
          {/* Eyebrow Tag */}
          <span className="text-xs uppercase tracking-widest text-[#FFC94A] font-medium px-4 py-1.5 rounded-full bg-[#FFC94A]/15 border border-[#FFC94A]/25 inline-block">
            Start the Transformation
          </span>

          {/* CTA Title with Blur/Slide Reveal */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#F3ECDF] leading-[1.1]">
            <WordReveal
              text="Let's Build What's Next, Together."
              tag="span"
              delay={0.1}
              stagger={0.06}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#C4BDAF] max-w-2xl mx-auto leading-relaxed">
            Send us your current talent requirements, team training goals, or digital modernization ideas. Our Hyderabad directors reply within one business day with an actionable roadmap.
          </p>

          {/* Buttons Row */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <ButtonArrow
              label="Explore Our Solutions"
              variant="primary"
              to="/contact"
              onClick={onOpenContact}
            />

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-pill bg-white/10 hover:bg-white/20 text-[#F3ECDF] text-[15px] font-medium border border-white/20 shadow-sm transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 text-[#FFC94A]" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>

          {/* Direct Phone Assistance */}
          <div className="pt-4 text-xs text-[#8F887A] flex items-center justify-center gap-2">
            <PhoneCall className="w-3.5 h-3.5 text-[#FFC94A]" />
            <span>Direct Admissions & Enterprise Line: {COMPANY_INFO.phone}</span>
          </div>
        </div>
      </ImageTrail>
    </section>
  );
};
