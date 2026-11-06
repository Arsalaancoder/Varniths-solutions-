import React from 'react';
import { PageHero } from '../components/Common/PageHero';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';
import { Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

export const StyleGuidePage: React.FC = () => {
  const colorTokens = [
    { name: 'Sand (Page Background)', hex: '#F5EFE4', token: '--color-sand', usage: 'Master warm page background across all views' },
    { name: 'Surface (Cards & Pills)', hex: '#FCF9F3', token: '--color-surface', usage: 'Card surfaces & floating glass nav pill' },
    { name: 'Shell (Subtle Surface)', hex: '#ECE3D3', token: '--color-shell', usage: 'Eyebrow badges, pill containers & section chips' },
    { name: 'Line (Borders)', hex: '#E0D6C4', token: '--color-line', usage: 'Dividers and subtle card border lines' },
    { name: 'Ink (Headings)', hex: '#211D16', token: '--color-ink', usage: 'High-contrast Clash Grotesk headings & dark buttons' },
    { name: 'Body (Paragraphs)', hex: '#4E493F', token: '--color-body', usage: 'Editorial paragraphs & reading copy' },
    { name: 'Muted (Metadata)', hex: '#857E70', token: '--color-muted', usage: 'Captions, dates & small metadata labels' },
    { name: 'Sun Gold (Primary Accent)', hex: '#FFC94A', token: '--color-sun', usage: 'Primary CTA buttons, star ratings & indicator orbs' },
    { name: 'Sun Light (Hover Fill)', hex: '#FFD978', token: '--color-sun-light', usage: 'Primary button hover state fill' },
    { name: 'Sun Deep (Sun Text)', hex: '#231C0A', token: '--color-sun-deep', usage: 'High contrast text on gold button' },
    { name: 'Night Deep (Dark Panels)', hex: '#1A1712', token: '--color-night-deep', usage: 'CTA window, hover slider & footer backdrop' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Subpage Atmospheric Hero */}
      <PageHero
        eyebrow="Wayfare Design System"
        title="Design Tokens & Style Guide."
        description="The authoritative visual specification for the Varnith Global digital experience: exact hex tokens, typography hierarchy, button micro-interactions, and glass pill geometry."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Style Guide' },
        ]}
      />

      {/* 02. Master Color Palette Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#857E70] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] border border-[#E0D6C4] inline-block">
            01 / Color Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#211D16]">
            Exact Wayfare Color Tokens
          </h2>
          <p className="text-sm text-[#4E493F] max-w-xl">
            Strictly derived from the original Wayfare template styles. No arbitrary corporate blue, purple gradients, or uninspected approximations.
          </p>
        </div>

        {/* Color Swatches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {colorTokens.map((c) => (
            <div
              key={c.name}
              className="rounded-2xl border border-[#E0D6C4] p-4 bg-[#FCF9F3] space-y-3 shadow-sm"
            >
              <div
                className="w-full h-16 rounded-xl border border-black/10 shadow-inner flex items-end p-2"
                style={{ backgroundColor: c.hex }}
              >
                <span
                  className="text-[11px] font-mono font-bold px-2 py-0.5 rounded shadow-sm"
                  style={{
                    backgroundColor: c.hex === '#211D16' || c.hex === '#1A1712' ? '#FCF9F3' : '#211D16',
                    color: c.hex === '#211D16' || c.hex === '#1A1712' ? '#211D16' : '#FCF9F3',
                  }}
                >
                  {c.hex}
                </span>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-[#211D16]">
                  {c.name}
                </h4>
                <p className="text-xs text-[#857E70] mt-0.5">
                  {c.usage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. Typography Scales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 pt-6 border-t border-[#E0D6C4]/60">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#857E70] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] border border-[#E0D6C4] inline-block">
            02 / Typography
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#211D16]">
            Clash Grotesk & General Sans Hierarchy
          </h2>
        </div>

        <div className="rounded-3xl p-6 sm:p-10 border border-[#E0D6C4] bg-[#FCF9F3] shadow-md space-y-8">
          <div className="space-y-2 pb-6 border-b border-[#E0D6C4]/40">
            <span className="text-xs font-mono text-[#857E70]">Display Large (Hero Title) — 76px / 1.05 / Clash Grotesk 500</span>
            <p className="font-display text-4xl sm:text-6xl lg:text-[76px] font-medium text-[#211D16] leading-[1.05]">
              Building better teams.
            </p>
          </div>

          <div className="space-y-2 pb-6 border-b border-[#E0D6C4]/40">
            <span className="text-xs font-mono text-[#857E70]">Heading 1 (Section Title) — 48px / 1.1 / Clash Grotesk 500</span>
            <p className="font-display text-3xl sm:text-5xl font-medium text-[#211D16] leading-[1.1]">
              From Talent Challenges to Business Transformation.
            </p>
          </div>

          <div className="space-y-2 pb-6 border-b border-[#E0D6C4]/40">
            <span className="text-xs font-mono text-[#857E70]">Heading 2 (Card Title) — 24px / 1.2 / Clash Grotesk 600</span>
            <p className="font-display text-2xl font-semibold text-[#211D16]">
              Talent Acquisition & Executive Leadership Search
            </p>
          </div>

          <div className="space-y-2 pb-6 border-b border-[#E0D6C4]/40">
            <span className="text-xs font-mono text-[#857E70]">Body Large — 18px / 1.6 / General Sans</span>
            <p className="font-sans text-lg text-[#4E493F] leading-relaxed max-w-3xl">
              We connect exceptional talent, professional development and intelligent technology to help businesses move forward with confidence and speed.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#857E70]">Eyebrow & Caption — 12px / uppercase / 0.08em tracking</span>
            <p className="text-xs uppercase tracking-widest text-[#857E70] font-semibold">
              HR CONSULTING • TALENT SOLUTIONS • TECHNOLOGY
            </p>
          </div>
        </div>
      </section>

      {/* 04. Button Variants & Micro-Interactions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 pt-6 border-t border-[#E0D6C4]/60 pb-16">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#857E70] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] border border-[#E0D6C4] inline-block">
            03 / Button Components
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-[#211D16]">
            Wayfare Arrow Fill Micro-Interactions
          </h2>
        </div>

        <div className="rounded-3xl p-8 border border-[#E0D6C4] bg-[#FCF9F3] shadow-md flex flex-wrap items-center gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#857E70] block">Primary (Sun Gold with Arrow)</span>
            <ButtonArrow
              label="Explore Our Solutions"
              variant="primary"
              to="/services"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#857E70] block">Dark (Ink with Arrow)</span>
            <ButtonArrow
              label="Let's Talk"
              variant="dark"
              to="/contact"
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-[#857E70] block">Ghost Pill Badge</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-[#E0D6C4] text-xs font-semibold text-[#211D16]">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC94A]" />
              <span>Enterprise Ready</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
