import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Common/PageHero';
import { INDUSTRIES_LIST } from '../data/content';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Subpage Hero */}
      <PageHero
        eyebrow="Specialized Verticals"
        title="Industries & Sectors We Empower."
        description="Every industry faces distinct talent scarcity and technological hurdles. We bring specialized recruitment playbooks, compliance know-how, and tailored training cohorts to each domain."
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries' },
        ]}
      />

      {/* 02. Industries Grid (Wayfare Destination Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_LIST.map((industry) => (
            <Link
              key={industry.id}
              to={`/industries/${industry.slug}`}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Photo Box with Overlay and Badges */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#1A1712]">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent pointer-events-none" />

                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-semibold glass-pill bg-white/90 dark:bg-[#1C1913]/90 text-[#211D16] dark:text-[#F3ECDF] shadow-sm">
                  {industry.category}
                </span>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                  <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight text-white group-hover:text-[#FFC94A] transition-colors leading-snug">
                    {industry.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full glass-pill bg-white/20 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-[#FFC94A] group-hover:text-[#231C0A] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-medium text-[#211D16] dark:text-[#F3ECDF] leading-snug">
                    {industry.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] line-clamp-3 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Challenges Addressed Peek */}
                <div className="pt-3 border-t border-[#E0D6C4]/50 dark:border-[#2F2A20]/50 space-y-1.5 text-xs text-[#857E70] dark:text-[#8F887A]">
                  <span className="font-semibold text-[#857E70] dark:text-[#8F887A] uppercase text-[10px] tracking-wider block">
                    Challenges Solved:
                  </span>
                  {industry.challenges.slice(0, 2).map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC94A] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{ch}</span>
                    </div>
                  ))}
                </div>

                {/* Case Study Pill Preview */}
                {industry.caseStudy && (
                  <div className="p-3 rounded-2xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 space-y-1 text-xs">
                    <span className="text-[10px] uppercase font-semibold text-[#FFC94A] block">
                      Case Study Metric
                    </span>
                    <p className="font-medium text-[#211D16] dark:text-[#F3ECDF] truncate">
                      {industry.caseStudy.metrics}
                    </p>
                  </div>
                )}

                {/* Bottom Row */}
                <div className="pt-3 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 flex items-center justify-between text-xs font-semibold text-[#211D16] dark:text-[#FFC94A]">
                  <span>Explore Sector Solutions</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 03. Cross-Industry Governance Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-[32px] p-8 sm:p-12 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFC94A]/20 flex items-center justify-center text-[#211D16] dark:text-[#FFC94A]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-medium text-[#211D16] dark:text-[#F3ECDF]">
              Regulatory & IP Protection
            </h4>
            <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
              Every mandate operates under non-disclosure boundaries, data segregation protocols, and compliance controls tailored to banking, health, and enterprise SaaS.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFC94A]/20 flex items-center justify-center text-[#211D16] dark:text-[#FFC94A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-medium text-[#211D16] dark:text-[#F3ECDF]">
              Production Emulation Labs
            </h4>
            <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
              Our training squads simulate authentic production stress conditions, ensuring new hires and upskilled cohorts deliver value from day one.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFC94A]/20 flex items-center justify-center text-[#211D16] dark:text-[#FFC94A]">
              <Building2 className="w-5 h-5" />
            </div>
            <h4 className="font-display text-lg font-medium text-[#211D16] dark:text-[#F3ECDF]">
              GCC & Tech Hub Scaling
            </h4>
            <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
              Deep regional networks across Hyderabad, Bengaluru, Pune, and Chennai enable rapid buildout of Global Capability Centers and offshore engineering hubs.
            </p>
          </div>
        </div>
      </section>

      {/* 04. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <div className="rounded-[32px] bg-[#1A1712] p-8 sm:p-12 text-[#F3ECDF] flex flex-col md:flex-row items-center justify-between gap-8 border border-[#2F2A20]">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#FFC94A] font-semibold block">
              Enterprise Industry Advisory
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F3ECDF]">
              Need Sector-Specific Talent Intelligence?
            </h3>
            <p className="text-xs sm:text-sm text-[#C4BDAF] leading-relaxed">
              Schedule a strategy discussion with our industry practice heads to benchmark compensation, map candidate supply, and design tailored talent pods.
            </p>
          </div>

          <ButtonArrow
            label="Schedule Consultation"
            variant="primary"
            to="/contact"
          />
        </div>
      </section>
    </div>
  );
};

