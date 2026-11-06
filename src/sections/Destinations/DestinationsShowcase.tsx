import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { getLenis } from '../../animations/scroll';

gsap.registerPlugin(ScrollTrigger);

interface DisciplineCard {
  id: string;
  number: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  slug: string;
  accent: string;
}

const DISCIPLINES: DisciplineCard[] = [
  {
    id: 'talent-acquisition',
    number: '01',
    tag: 'Search & Direct Placement',
    title: 'Talent Acquisition',
    desc: 'Precision candidate identification, multi-stage skill evaluation, and cultural alignment delivering high-retention corporate engineering and leadership placements.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
    slug: 'talent-acquisition',
    accent: 'Primary Practice',
  },
  {
    id: 'rpo-services',
    number: '02',
    tag: 'Enterprise Scalable Squads',
    title: 'Recruitment Process Outsourcing',
    desc: 'Full-cycle talent acquisition outsourcing with embedded recruiter pods directly integrated into your tools, ATS pipelines, and guaranteed hiring SLAs.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85',
    slug: 'rpo-services',
    accent: 'Enterprise Scalable',
  },
  {
    id: 'executive-hiring',
    number: '03',
    tag: 'Confidential Leadership Mandates',
    title: 'Executive Search & Hiring',
    desc: 'Discreet partner-led profiling, board-level stakeholder alignment, and comprehensive competency search for visionary Directors, VPs, and C-suite leadership.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85',
    slug: 'executive-hiring',
    accent: 'Leadership Search',
  },
  {
    id: 'dei-hiring',
    number: '04',
    tag: 'Equitable & Inclusive Teams',
    title: 'Diversity, Equity & Inclusion',
    desc: 'Intentional diversity recruitment pipelines, bias-neutral job crafting, inclusive interview rubrics, and ERG advisory building representative engineering cohorts.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85',
    slug: 'dei-hiring',
    accent: 'Culture & Inclusion',
  },
  {
    id: 'talent-intelligence',
    number: '05',
    tag: 'Market Benchmarking & Roadmaps',
    title: 'Talent Intelligence',
    desc: 'Actionable labor supply heatmaps, competitor organizational structures, real-time compensation percentiles, and forward skill demand forecasting.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
    slug: 'talent-intelligence',
    accent: 'Workforce Planning',
  },
  {
    id: 'training-development',
    number: '06',
    tag: 'Production-Grade Emulation Labs',
    title: 'Training & Development',
    desc: 'Hands-on enterprise bootcamps across DevOps, Kubernetes, SAP Basis Security, SAP GRC, Data Analytics, and Software Testing with live sandbox infrastructure.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=85',
    slug: 'devops-training',
    accent: 'Capability Building',
  },
  {
    id: 'technology-transformation',
    number: '07',
    tag: 'Enterprise Cloud & Intelligent AI',
    title: 'Technology & Digital Transformation',
    desc: 'Cloud-native architecture modernization, automated release engineering, and domain-tuned generative AI workflows that eliminate corporate operational bottlenecks.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=85',
    slug: 'ai-solutions',
    accent: 'AI & Modernization',
  },
];

interface DestinationsShowcaseProps {
  onSelectPractice?: (practiceId: string) => void;
}

export const DestinationsShowcase: React.FC<DestinationsShowcaseProps> = ({ onSelectPractice }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Desktop and Tablet: Pinned Horizontal Scroll with GSAP ScrollTrigger
      mm.add('(min-width: 860px)', () => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        // Reset any inline transform
        gsap.set(track, { clearProps: 'transform' });

        // Calculate travel distance
        const getDistance = () => {
          const trackWidth = track.scrollWidth;
          const viewportWidth = window.innerWidth;
          // Leave comfortable right padding so the final card lands cleanly in view
          return Math.max(0, trackWidth - viewportWidth + 140);
        };

        const totalDistance = getDistance();

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: () => `+=${Math.max(1400, getDistance() * 1.1)}`,
            pin: true,
            scrub: 1, // Smooth scrub behavior connecting scroll to position
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const prog = self.progress;
              setScrollProgress(prog);
              const idx = Math.min(
                DISCIPLINES.length - 1,
                Math.round(prog * (DISCIPLINES.length - 1))
              );
              setActiveIndex(idx);
            },
          },
        });

        // Parallax inner card images on scroll
        const cardImages = track.querySelectorAll('.card-parallax-img');
        cardImages.forEach((img) => {
          gsap.fromTo(
            img,
            { scale: 1.15, x: '6%' },
            {
              scale: 1.05,
              x: '-6%',
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${Math.max(1400, getDistance() * 1.1)}`,
                scrub: 1.2,
              },
            }
          );
        });

        return () => {
          tween.kill();
        };
      });

      // Mobile: Touch Horizontal Track (update active index on scroll)
      mm.add('(max-width: 859px)', () => {
        const mobileEl = mobileScrollRef.current;
        if (!mobileEl) return;

        const handleMobileScroll = () => {
          const scrollLeft = mobileEl.scrollLeft;
          const cardWidth = mobileEl.querySelector('.mobile-card')?.clientWidth || 300;
          const idx = Math.min(
            DISCIPLINES.length - 1,
            Math.max(0, Math.round(scrollLeft / (cardWidth + 16)))
          );
          setActiveIndex(idx);
          const maxScroll = mobileEl.scrollWidth - mobileEl.clientWidth;
          setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
        };

        mobileEl.addEventListener('scroll', handleMobileScroll, { passive: true });
        return () => mobileEl.removeEventListener('scroll', handleMobileScroll);
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Smooth Navigation Arrow Click Controller
  const handleNavigateCard = (targetIndex: number) => {
    const clamped = Math.max(0, Math.min(DISCIPLINES.length - 1, targetIndex));
    setActiveIndex(clamped);

    if (window.innerWidth >= 860) {
      // Find the ScrollTrigger instance on the container
      const st = ScrollTrigger.getAll().find((s) => s.trigger === containerRef.current);
      if (st) {
        const start = st.start;
        const end = st.end;
        const targetProgress = clamped / (DISCIPLINES.length - 1);
        const targetScrollY = start + targetProgress * (end - start);

        const lenis = getLenis();
        if (lenis) {
          lenis.scrollTo(targetScrollY, { duration: 1.1 });
        } else {
          window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
        }
      }
    } else {
      // Mobile smooth horizontal scroll
      if (mobileScrollRef.current) {
        const cards = mobileScrollRef.current.querySelectorAll('.mobile-card');
        const targetCard = cards[clamped] as HTMLElement;
        if (targetCard) {
          mobileScrollRef.current.scrollTo({
            left: targetCard.offsetLeft - 20,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <section
      ref={containerRef}
      id="disciplines"
      className="relative w-full bg-[#F5EFE4] overflow-hidden select-none"
    >
      {/* Ambient background glow & subtle grid line */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-[#FFC94A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[300px] bg-[#ECE3D3]/60 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Pinned Viewport Container (h-screen on desktop) */}
      <div className="w-full min-h-[640px] lg:h-screen lg:max-h-[960px] flex flex-col justify-between py-8 md:py-12 px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Top Header Row with Section Title & Controls */}
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#E0D6C4]/60">
          
          {/* Left Title Group */}
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECE3D3] border border-[#E0D6C4] text-xs font-semibold text-[#857E70] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#FFC94A] animate-pulse-subtle" />
              <span>Core Disciplines</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#211D16] leading-[1.1]">
              Core Disciplines We Deliver with Excellence
            </h2>

            <p className="text-xs sm:text-sm text-[#4E493F] leading-relaxed max-w-xl">
              Scroll horizontally to explore our seven interconnected pillars across strategic talent, hands-on engineering labs, and enterprise AI.
            </p>
          </div>

          {/* Right Controls: Interactive Progress, Counter & Nav Arrows */}
          <div className="flex items-center gap-6 self-start md:self-end">
            
            {/* Active Counter & Total Indicator */}
            <div className="flex items-baseline gap-1.5 font-display">
              <span className="text-2xl sm:text-3xl font-bold text-[#211D16]">
                {DISCIPLINES[activeIndex]?.number || '01'}
              </span>
              <span className="text-sm font-medium text-[#857E70]">
                / 07
              </span>
            </div>

            {/* Scroll Progress Bar */}
            <div className="hidden sm:block w-28 lg:w-36 h-1.5 rounded-full bg-[#E0D6C4] overflow-hidden">
              <div
                className="h-full bg-[#FFC94A] transition-all duration-150 ease-out rounded-full"
                style={{ width: `${Math.max(14, scrollProgress * 100)}%` }}
              />
            </div>

            {/* Previous and Next Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleNavigateCard(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Previous Discipline Card"
                className="w-10 h-10 rounded-full border border-[#E0D6C4] bg-[#FCF9F3] text-[#211D16] flex items-center justify-center hover:bg-[#211D16] hover:text-[#FCF9F3] transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-sm active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => handleNavigateCard(activeIndex + 1)}
                disabled={activeIndex === DISCIPLINES.length - 1}
                aria-label="Next Discipline Card"
                className="w-10 h-10 rounded-full border border-[#E0D6C4] bg-[#FCF9F3] text-[#211D16] flex items-center justify-center hover:bg-[#FFC94A] hover:text-[#231C0A] transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none cursor-pointer shadow-sm active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* All Practices Catalog Shortcut */}
            <Link
              to="/services"
              className="hidden xl:inline-flex items-center gap-1 text-xs font-semibold text-[#211D16] hover:underline ml-2"
            >
              <span>Catalog</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Desktop/Tablet: Pinned Horizontal Scrolling Track */}
        <div className="hidden md:block relative w-full overflow-visible py-4 flex-1 flex items-center">
          <div
            ref={trackRef}
            className="flex items-center gap-6 lg:gap-8 will-change-transform pl-2"
          >
            {DISCIPLINES.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => handleNavigateCard(idx)}
                  className={`group relative flex-shrink-0 w-[340px] md:w-[380px] lg:w-[440px] xl:w-[480px] h-[460px] lg:h-[500px] xl:h-[540px] rounded-[28px] lg:rounded-[32px] overflow-hidden border transition-all duration-500 shadow-xl cursor-pointer ${
                    isActive
                      ? 'border-[#FFC94A] shadow-2xl scale-[1.01]'
                      : 'border-[#E0D6C4]/70 hover:border-[#211D16]/40 opacity-90 hover:opacity-100'
                  } bg-[#1A1712]`}
                >
                  {/* Background Photographic Layer with Parallax */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-parallax-img w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-108"
                      loading="lazy"
                    />
                  </div>

                  {/* Dark Photographic Gradient Veil for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/15 pointer-events-none" />

                  {/* Top Header Badge & Numbering */}
                  <div className="absolute top-5 inset-x-5 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold glass-pill bg-white/90 text-[#211D16] border border-white/30 shadow-md">
                      {item.accent}
                    </span>

                    <span className="font-display text-sm font-bold text-white/80 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                      {item.number}
                    </span>
                  </div>

                  {/* Bottom Content Card Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 z-10 space-y-3 pointer-events-auto">
                    
                    {/* Tagline */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#FFC94A]">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFC94A]" />
                      <span>{item.tag}</span>
                    </div>

                    {/* Title in Clash Grotesk */}
                    <h3 className="font-display text-2xl lg:text-3xl font-medium tracking-tight text-white group-hover:text-[#FFC94A] transition-colors leading-tight">
                      {item.title}
                    </h3>

                    {/* Descriptive Paragraph */}
                    <p className="text-xs sm:text-sm text-white/80 line-clamp-3 leading-relaxed font-sans">
                      {item.desc}
                    </p>

                    {/* Action Button Row */}
                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to={`/services/${item.slug}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectPractice) onSelectPractice(item.id);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFC94A] hover:bg-[#FFD978] text-[#231C0A] text-xs font-semibold transition-all duration-200 shadow-md group-hover:shadow-lg active:scale-95"
                      >
                        <span>Explore Practice</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <span className="text-[11px] font-medium text-white/60">
                        SLA Guaranteed
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Touch-Friendly Horizontal Swipe Track with Snap */}
        <div className="md:hidden relative w-full py-4">
          <div
            ref={mobileScrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scrollbar-none scroll-smooth"
          >
            {DISCIPLINES.map((item, idx) => (
              <div
                key={item.id}
                className="mobile-card snap-center flex-shrink-0 w-[290px] sm:w-[330px] h-[440px] rounded-[24px] overflow-hidden relative border border-[#E0D6C4] bg-[#1A1712] shadow-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/20 pointer-events-none" />

                <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold glass-pill bg-white/90 text-[#211D16]">
                    {item.accent}
                  </span>
                  <span className="font-display text-xs font-bold text-white/90 px-2.5 py-0.5 rounded-full bg-black/40">
                    {item.number}
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 z-10 space-y-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#FFC94A] block">
                    {item.tag}
                  </span>

                  <h3 className="font-display text-xl font-medium tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-white/80 line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      to={`/services/${item.slug}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FFC94A] text-[#231C0A] text-xs font-semibold"
                    >
                      <span>Explore Practice</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Auxiliary Bar */}
        <div className="max-w-7xl w-full mx-auto pt-3 border-t border-[#E0D6C4]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#857E70]">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#211D16]">Varnith Global Enterprise Capabilities</span>
            <span>·</span>
            <span>Continuous Delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All 7 Practice Directors Active in Hyderabad IST</span>
          </div>
        </div>
      </div>
    </section>
  );
};
