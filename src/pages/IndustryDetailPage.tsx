import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDUSTRIES_LIST, COMPANY_INFO } from '../data/content';
import { PageHero } from '../components/Common/PageHero';
import {
  CheckCircle2,
  AlertTriangle,
  Award,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Send,
  Loader2,
  Building2,
  ShieldCheck,
  MessageSquare,
} from 'lucide-react';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const industry = INDUSTRIES_LIST.find((i) => i.slug === slug || i.id === slug);

  const [enquiry, setEnquiry] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!industry) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <Sparkles className="w-12 h-12 text-[#FFC94A]" />
        <h2 className="font-display text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
          Industry Not Found
        </h2>
        <p className="text-[#857E70] dark:text-[#8F887A] max-w-md">
          The requested industry vertical could not be found.
        </p>
        <Link
          to="/industries"
          className="px-6 py-3 rounded-full bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] font-semibold text-sm"
        >
          Return to All Industries
        </Link>
      </div>
    );
  }

  const otherIndustries = INDUSTRIES_LIST.filter((i) => i.id !== industry.id).slice(0, 3);

  const handleEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiry.name || !enquiry.email) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Subpage Atmospheric Hero */}
      <PageHero
        eyebrow={`Industry Sector • ${industry.category}`}
        title={industry.title}
        description={industry.tagline}
        image={industry.image}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Industries', to: '/industries' },
          { label: industry.title },
        ]}
      />

      {/* 02. Editorial Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Challenges, Solutions & Case Study (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
                Sector Dynamics
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
                Overcoming Talent Bottlenecks in {industry.title}
              </h2>
              <p className="text-base sm:text-lg text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                {industry.description}
              </p>
            </div>

            {/* Challenges Addressed */}
            <div className="space-y-4 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <h3 className="font-display text-xl sm:text-2xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                  Critical Industry Challenges We Solve
                </h3>
              </div>

              <div className="space-y-3">
                {industry.challenges.map((chal, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      !
                    </span>
                    <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed font-medium">
                      {chal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions Provided */}
            <div className="space-y-4 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Our Tailored Sector Solutions
              </h3>

              <div className="space-y-3">
                {industry.solutionsProvided.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FFC94A] flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-[#211D16] dark:text-[#F3ECDF] leading-relaxed font-medium">
                      {sol}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Feature Box */}
            {industry.caseStudy && (
              <div className="rounded-3xl p-6 sm:p-8 bg-[#1A1712] text-[#F3ECDF] border border-[#2F2A20] shadow-2xl space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#FFC94A] font-semibold">
                  <Award className="w-4 h-4 text-[#FFC94A]" />
                  <span>Verified Outcome / Case Study</span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-medium text-[#F3ECDF] leading-snug">
                  {industry.caseStudy.headline}
                </h4>

                <div className="inline-block px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm font-semibold text-[#FFC94A]">
                  {industry.caseStudy.metrics}
                </div>

                <p className="text-xs sm:text-sm text-[#C4BDAF] leading-relaxed">
                  {industry.caseStudy.summary}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Sector Facts & Fast Consultation (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="rounded-3xl p-6 sm:p-8 bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] shadow-xl space-y-6">
              
              <div className="space-y-1 pb-4 border-b border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC94A] block">
                  Sector Overview
                </span>
                <h4 className="font-display text-xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                  Practice Capabilities
                </h4>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Sector Focus</span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">{industry.category}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Talent Turnaround</span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">14–21 Business Days</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Delivery Network</span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">Hyderabad & Pan-India</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Confidential Mandates</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Supported</span>
                </div>
              </div>

              {/* Fast Form */}
              <div className="pt-4 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 space-y-3">
                <h5 className="font-display text-sm font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                  Consult with our Sector Lead
                </h5>

                {submitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200">
                    <p className="font-semibold">Request Received!</p>
                    <p>Our industry head for {industry.title} will connect with you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquiry} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={enquiry.name}
                      onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] text-xs text-[#211D16] dark:text-[#F3ECDF] placeholder-[#857E70] focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      value={enquiry.email}
                      onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] text-xs text-[#211D16] dark:text-[#F3ECDF] placeholder-[#857E70] focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 rounded-full bg-[#FFC94A] hover:bg-[#FFD978] text-[#231C0A] font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-60"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Connecting...</span>
                        </>
                      ) : (
                        <>
                          <span>Request Sector Briefing</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* WhatsApp Option */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919391816116?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20solutions%20for%20${encodeURIComponent(
                    industry.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full border border-[#E0D6C4] dark:border-[#2F2A20] text-xs font-semibold text-[#211D16] dark:text-[#F3ECDF] hover:bg-black/5 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#FFC94A]" />
                  <span>Enquire via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Other Industries Row */}
      {otherIndustries.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-12 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-semibold block mb-1">
                Other Industries
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Explore Additional Industry Verticals
              </h3>
            </div>
            <Link
              to="/industries"
              className="text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherIndustries.map((ind) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.slug}`}
                className="group rounded-3xl p-5 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] hover:shadow-xl transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1A1712]">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FFC94A]/20 text-[#231C0A] dark:text-[#FFD978]">
                    {ind.category}
                  </span>
                  <h4 className="font-display text-base font-semibold text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors">
                    {ind.title}
                  </h4>
                  <p className="text-xs text-[#4E493F] dark:text-[#C4BDAF] line-clamp-2">
                    {ind.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 flex items-center justify-between text-xs font-medium text-[#211D16] dark:text-[#FFC94A]">
                  <span>Explore Sector</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

