import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Common/PageHero';
import { SERVICES_LIST } from '../data/content';
import { BusinessVerticalId } from '../types';
import { ArrowUpRight, Clock, Search, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';

export const ServicesPage: React.FC = () => {
  const [selectedVertical, setSelectedVertical] = useState<'all' | BusinessVerticalId>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      const matchesVertical = selectedVertical === 'all' || service.vertical === selectedVertical;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesVertical && matchesSearch;
    });
  }, [selectedVertical, searchQuery]);

  const filterOptions = [
    { id: 'all', label: 'All Services (10)' },
    { id: 'hr', label: 'HR Consulting & Talent (5)' },
    { id: 'training', label: 'Training & Development (5)' },
    { id: 'tech', label: 'Technology & AI (2)' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Subpage Atmospheric Hero */}
      <PageHero
        eyebrow="Practices & Capabilities"
        title="Custom Solutions Tailored to Your Growth."
        description="Whether you need retained executive search, embedded RPO squads, hands-on DevOps labs, or custom AI workflow integration, explore our core practices."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      {/* 02. Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedVertical(opt.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedVertical === opt.id
                    ? 'bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] shadow-sm'
                    : 'text-[#4E493F] dark:text-[#8F887A] hover:text-[#211D16] dark:hover:text-[#F3ECDF]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-[#857E70] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search services or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] text-xs sm:text-sm text-[#211D16] dark:text-[#F3ECDF] placeholder-[#857E70] focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-4 px-2 flex items-center justify-between text-xs text-[#857E70] dark:text-[#8F887A]">
          <span>Showing {filteredServices.length} practice{filteredServices.length === 1 ? '' : 's'}</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-[#211D16] dark:text-[#FFC94A] hover:underline cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>
      </section>

      {/* 03. Services Grid (Wayfare Trip Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 rounded-3xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] p-8 space-y-4">
            <Sparkles className="w-8 h-8 text-[#FFC94A] mx-auto" />
            <h3 className="font-display text-xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
              No practices matching your criteria
            </h3>
            <p className="text-sm text-[#857E70] dark:text-[#8F887A] max-w-md mx-auto">
              Try adjusting your search query or reset the filter to explore all Varnith Global offerings.
            </p>
            <button
              onClick={() => { setSelectedVertical('all'); setSearchQuery(''); }}
              className="px-5 py-2.5 rounded-full bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group cursor-pointer rounded-3xl overflow-hidden border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Image Aspect Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1712]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Chips */}
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

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] line-clamp-3 leading-relaxed">
                      {service.summary}
                    </p>
                  </div>

                  {/* Features Peek */}
                  {service.features && service.features.length > 0 && (
                    <div className="pt-2 border-t border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 space-y-1 text-xs text-[#857E70] dark:text-[#8F887A]">
                      <div className="flex items-center gap-1.5 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC94A] flex-shrink-0" />
                        <span className="truncate">{service.features[0]}</span>
                      </div>
                      {service.features[1] && (
                        <div className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FFC94A] flex-shrink-0" />
                          <span className="truncate">{service.features[1]}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 flex items-center justify-between text-xs">
                    <span className="text-[#857E70] dark:text-[#8F887A] font-medium truncate max-w-[55%]">
                      {service.deliveryMode}
                    </span>

                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] group-hover:bg-[#FFC94A] group-hover:text-[#231C0A] font-semibold transition-all shadow-sm">
                      <span>Explore Practice</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* 04. Verified Quality Milestones Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-3xl p-8 sm:p-12 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <span className="font-display text-3xl sm:text-4xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
              500+
            </span>
            <p className="text-xs sm:text-sm text-[#857E70] dark:text-[#8F887A]">
              Corporate Placements
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-display text-3xl sm:text-4xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
              92%
            </span>
            <p className="text-xs sm:text-sm text-[#857E70] dark:text-[#8F887A]">
              12-Month Retention Rate
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-display text-3xl sm:text-4xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
              1,200+
            </span>
            <p className="text-xs sm:text-sm text-[#857E70] dark:text-[#8F887A]">
              Engineers & Analysts Trained
            </p>
          </div>
          <div className="space-y-1">
            <span className="font-display text-3xl sm:text-4xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
              24/7
            </span>
            <p className="text-xs sm:text-sm text-[#857E70] dark:text-[#8F887A]">
              Enterprise Advisory & SLAs
            </p>
          </div>
        </div>
      </section>

      {/* 05. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <div className="rounded-[32px] bg-[#1A1712] p-8 sm:p-12 text-[#F3ECDF] flex flex-col md:flex-row items-center justify-between gap-8 border border-[#2F2A20]">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#FFC94A] font-semibold block">
              Direct Practice Consultation
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F3ECDF]">
              Need a Customized Engagement Model?
            </h3>
            <p className="text-xs sm:text-sm text-[#C4BDAF] leading-relaxed">
              Our Hyderabad directors construct bespoke recruiting pods and training roadmaps matched precisely to your timeline and tech stack.
            </p>
          </div>

          <ButtonArrow
            label="Speak with a Director"
            variant="primary"
            to="/contact"
          />
        </div>
      </section>
    </div>
  );
};

