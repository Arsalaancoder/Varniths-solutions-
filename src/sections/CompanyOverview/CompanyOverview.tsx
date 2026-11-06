import React from 'react';
import { Star, Award } from 'lucide-react';
import { ButtonArrow } from '../../components/Buttons/ButtonArrow';

export const CompanyOverview: React.FC = () => {
  const factRows = [
    { label: 'Empowering enterprises since', value: '2016' },
    { label: 'Dedicated recruiter squads', value: 'Direct Partner-led' },
    { label: 'Industry veteran instructors', value: '100%' },
    { label: 'Specialized business practices', value: '7 Core Pillars' },
    { label: '12-Month candidate retention', value: '92%' },
    { label: 'Advisory support & SLAs', value: '24/7' },
  ];

  return (
    // Section matching Wayfare framer-vrbc18 (Intro)
    <section
      id="overview"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Intro Copy (7 cols) */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
              Why Varnith Global
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] leading-[1.08]">
              High Touch by Design.<br />Enterprise in Scale.
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed max-w-2xl font-sans">
            We keep our recruiting pods agile and our technical instructors practicing, so you spend your days building market-leading products instead of waiting in recruiter queues or managing fragmented vendors.
          </p>

          <div className="pt-1">
            <ButtonArrow
              label="Explore Our Story"
              variant="dark"
              to="/about"
            />
          </div>

          {/* Wayfare Proof Block: 4.9 Rating + Stars + Avatar Stack */}
          <div className="pt-6 border-t border-[#E0D6C4] dark:border-[#2F2A20] flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="font-display text-3xl font-bold text-[#211D16] dark:text-[#F3ECDF] tracking-tight">
                4.9
              </span>
              <div className="space-y-0.5">
                <div className="flex text-[#FFC94A] gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC94A] text-[#FFC94A]" />
                  ))}
                </div>
                <p className="text-xs text-[#857E70] dark:text-[#8F887A] font-medium">
                  from verified enterprise & candidate reviews
                </p>
              </div>
            </div>

            {/* Avatar Stack */}
            <div className="flex items-center -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client Reviewer"
                className="w-10 h-10 rounded-full border-2 border-[#FCF9F3] dark:border-[#1C1913] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client Reviewer"
                className="w-10 h-10 rounded-full border-2 border-[#FCF9F3] dark:border-[#1C1913] object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client Reviewer"
                className="w-10 h-10 rounded-full border-2 border-[#FCF9F3] dark:border-[#1C1913] object-cover"
              />
              <div className="w-10 h-10 rounded-full border-2 border-[#FCF9F3] dark:border-[#1C1913] bg-[#211D16] dark:bg-[#FFC94A] text-[#FCF9F3] dark:text-[#231C0A] text-xs font-semibold flex items-center justify-center">
                +1.2k
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Featured Photo + Overlapping Facts Card (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-[32px] overflow-hidden border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header of Facts Card */}
            <div className="space-y-1 pb-4 border-b border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFC94A] block">
                Quality Benchmark
              </span>
              <h3 className="font-display text-lg sm:text-xl font-medium text-[#211D16] dark:text-[#F3ECDF] leading-snug">
                Every practice is scouted by our own leadership team before rollout.
              </h3>
            </div>

            {/* Fact Rows matching Wayfare Intro */}
            <div className="space-y-3.5">
              {factRows.map((fact, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-1.5 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30 text-xs sm:text-sm"
                >
                  <span className="text-[#857E70] dark:text-[#8F887A] font-medium">
                    {fact.label}
                  </span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Facts Note Banner at Bottom */}
            <div className="rounded-2xl p-4 bg-[#F5EFE4] dark:bg-[#27231A] border border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 text-xs text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed flex items-start gap-3">
              <Award className="w-4 h-4 text-[#FFC94A] flex-shrink-0 mt-0.5" />
              <span>
                "Our broad and balanced curriculum prepares professionals and enterprise cohorts with stimulating real-time project activities for sustained career growth."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
