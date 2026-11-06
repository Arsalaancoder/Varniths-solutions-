import React from 'react';
import { ShieldCheck, Terminal, Users, Clock, Sparkles } from 'lucide-react';

export const CapabilitiesMatrix: React.FC = () => {
  const capabilities = [
    {
      icon: Users,
      title: 'Dedicated Practice Director',
      desc: 'Direct partner-level strategic guidance from initial talent requisition to final candidate onboarding.',
    },
    {
      icon: Terminal,
      title: 'Production-Grade Labs',
      desc: 'Real-world enterprise sandbox clusters, live code repositories, and secure SAP environments.',
    },
    {
      icon: ShieldCheck,
      title: 'End-to-End Placement Pipeline',
      desc: 'Rigorous technical screening, interview scheduling, offer negotiation, and 12-month retention guarantees.',
    },
    {
      icon: Clock,
      title: '24/7 Advisory & SLAs',
      desc: 'Continuous enterprise escalation support, dedicated account management, and ongoing skill refreshers.',
    },
  ];

  return (
    // Section matching Wayfare framer-1hk4ha (padding: 112px 70px)
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header Container */}
      <div className="mb-12 md:mb-16 space-y-3 max-w-3xl">
        <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
          Always Delivered
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
          Complete Capability, Nothing Left to Chance
        </h2>
        <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
          Every partnership is backed by clear service level agreements, dedicated practice leadership, and proven delivery frameworks.
        </p>
      </div>

      {/* Two-Column Layout matching Wayfare Included Row (Photo Left + 2x2 Grid Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Included Photo (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 bg-[#1A1712] group">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
              alt="Varnith Global Enterprise Capabilities"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1712]/80 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-6 inset-x-6 p-5 rounded-2xl glass-pill bg-white/85 dark:bg-[#1C1913]/85 backdrop-blur-md border border-[#E0D6C4] dark:border-[#2F2A20] shadow-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#857E70] dark:text-[#FFC94A] uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-[#FFC94A]" />
                <span>Enterprise Guarantee</span>
              </div>
              <p className="font-display text-sm font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Transparent SLAs with 100% verified placement support.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 2x2 Grid of Capabilities Cells (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-4"
              >
                {/* Icon Chip */}
                <div className="w-12 h-12 rounded-2xl bg-[#FFC94A]/20 text-[#211D16] dark:text-[#FFC94A] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-medium text-[#211D16] dark:text-[#F3ECDF]">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
