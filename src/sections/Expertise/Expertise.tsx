import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_LIST } from '../../data/content';
import { ServiceItem, BusinessVerticalId } from '../../types';
import { ArrowUpRight, Clock } from 'lucide-react';

interface ExpertiseProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onSelectService }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | BusinessVerticalId>('all');

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_LIST
    : SERVICES_LIST.filter((s) => s.vertical === selectedFilter);

  const filters = [
    { id: 'all', label: 'All Offerings' },
    { id: 'hr', label: 'HR Consulting & Talent (Primary)' },
    { id: 'training', label: 'Training & Development' },
    { id: 'tech', label: 'Technology & AI' },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header & Filter Controls (Wayfare Trip Finder style) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
            Specialized Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
            Explore Our Core Practices & Programs
          </h2>
          <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
            Every practice is led by seasoned industry practitioners and backed by proven placement track records and enterprise SLAs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] self-start lg:self-end">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedFilter === f.id
                  ? 'bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] shadow-sm'
                  : 'text-[#4E493F] dark:text-[#8F887A] hover:text-[#211D16] dark:hover:text-[#F3ECDF]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid (Wayfare Trip Card style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredServices.map((service) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            onClick={() => onSelectService && onSelectService(service)}
            className="group cursor-pointer rounded-3xl overflow-hidden border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
          >
            {/* Card Cover Image with Aspect Ratio and Chips */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1712]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Chips */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold glass-pill bg-white/90 dark:bg-[#1C1913]/90 text-[#211D16] dark:text-[#F3ECDF] border border-white/20 shadow-sm">
                  {service.category}
                </span>

                {service.duration && (
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#FFC94A] text-[#231C0A] shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#231C0A]" />
                    <span>{service.duration}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-display text-xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] line-clamp-3 leading-relaxed">
                  {service.summary}
                </p>
              </div>

              {/* Card Footer: Delivery Mode + Action View Pill */}
              <div className="pt-4 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 flex items-center justify-between text-xs">
                <span className="text-[#857E70] dark:text-[#8F887A] font-medium truncate max-w-[60%]">
                  {service.deliveryMode}
                </span>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] group-hover:bg-[#FFC94A] group-hover:text-[#231C0A] font-medium transition-all shadow-sm">
                  <span>Explore Practice</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
