import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_LIST, COMPANY_INFO } from '../data/content';
import { PageHero } from '../components/Common/PageHero';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Award,
  ChevronRight,
  HelpCircle,
  Loader2,
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const service = SERVICES_LIST.find((s) => s.slug === slug || s.id === slug);

  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <Sparkles className="w-12 h-12 text-[#FFC94A]" />
        <h2 className="font-display text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
          Practice Not Found
        </h2>
        <p className="text-[#857E70] dark:text-[#8F887A] max-w-md">
          The requested service practice could not be located in our catalog.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 rounded-full bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] font-semibold text-sm"
        >
          Return to All Services
        </Link>
      </div>
    );
  }

  const relatedServices = SERVICES_LIST.filter(
    (s) => s.id !== service.id && s.vertical === service.vertical
  ).slice(0, 3);

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.email || !enquiryForm.phone) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Hero with Breadcrumb */}
      <PageHero
        eyebrow={`${service.category} • ${service.deliveryMode}`}
        title={service.title}
        description={service.summary}
        image={service.image}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {service.duration && (
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FFC94A] text-[#231C0A] flex items-center gap-1.5 shadow-sm">
              <Clock className="w-3.5 h-3.5" />
              <span>Program Duration: {service.duration}</span>
            </span>
          )}
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold glass-pill bg-white/80 dark:bg-[#1C1913]/80 text-[#211D16] dark:text-[#F3ECDF] border border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
            {service.deliveryMode}
          </span>
        </div>
      </PageHero>

      {/* 02. Main Editorial Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Full Editorial Narrative & Deliverables (7 cols) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
                Overview & Strategic Purpose
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
                Purpose-Built for Measurable Outcomes
              </h2>
              <p className="text-base sm:text-lg text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Core Features & Deliverables Checklist */}
            <div className="space-y-4 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                What's Included in This Practice
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {service.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] flex items-start gap-3 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#FFC94A] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#211D16] dark:text-[#F3ECDF] font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Measurable Benefits */}
            <div className="space-y-4 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-xl sm:text-2xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Measurable Business Value
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] space-y-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FFC94A]/20 flex items-center justify-center text-[#211D16] dark:text-[#FFC94A] text-xs font-semibold">
                      0{idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Stages Timeline */}
            {service.processStages && service.processStages.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block mb-2">
                    Execution Roadmap
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                    How We Deliver This Engagement
                  </h3>
                </div>

                <div className="space-y-4">
                  {service.processStages.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] flex items-start gap-4 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display text-base font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                          {step.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Target Audience / Ideal Fit */}
            <div className="p-6 rounded-3xl bg-[#ECE3D3]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] space-y-2">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#857E70] dark:text-[#8F887A] block">
                Ideal Engagement Profile:
              </span>
              <p className="text-sm text-[#211D16] dark:text-[#F3ECDF] leading-relaxed">
                {service.audience}
              </p>
            </div>
          </div>

          {/* Right Column: Sticky Summary & Fast Enquiry Card (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Quick Practice Facts Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] shadow-xl space-y-6">
              <div className="space-y-1 pb-4 border-b border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#FFC94A] block">
                  Practice Summary
                </span>
                <h4 className="font-display text-xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                  Engagement Specification
                </h4>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Delivery Format</span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">{service.deliveryMode}</span>
                </div>
                {service.duration && (
                  <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                    <span className="text-[#857E70] dark:text-[#8F887A]">Timeline / Duration</span>
                    <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">{service.duration}</span>
                  </div>
                )}
                <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Headquarters Oversight</span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">Hyderabad, India</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#E0D6C4]/30 dark:border-[#2F2A20]/30">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Coverage Scope</span>
                  <span className="font-semibold text-[#211D16] dark:text-[#F3ECDF]">Pan-India & Global</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-[#857E70] dark:text-[#8F887A]">Direct SLA Support</span>
                  <span className="font-semibold text-emerald-600 dark:text-emerald-400">Guaranteed</span>
                </div>
              </div>

              {/* Fast Enquiry Form inside card */}
              <div className="pt-4 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 space-y-3">
                <h5 className="font-display text-sm font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                  Request Practice Consultation
                </h5>

                {submitted ? (
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-200 space-y-1">
                    <p className="font-semibold">Enquiry Received!</p>
                    <p>Our practice director for {service.title} will reach out to your team shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] text-xs text-[#211D16] dark:text-[#F3ECDF] placeholder-[#857E70] focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Work Email"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] text-xs text-[#211D16] dark:text-[#F3ECDF] placeholder-[#857E70] focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
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
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Practice Request</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/919391816116?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(
                    service.title
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

            {/* Direct Line */}
            <div className="text-center text-xs text-[#857E70] dark:text-[#8F887A]">
              <span>Direct Admissions & Talent Desk: </span>
              <a href="tel:+919391816116" className="font-semibold text-[#211D16] dark:text-[#F3ECDF] hover:underline">
                (+91) 9391816116
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Related Practices Row */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-12 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-semibold block mb-1">
                Complementary Offerings
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Related Practices You Might Need
              </h3>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                to={`/services/${rel.slug}`}
                className="group rounded-3xl p-5 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] hover:shadow-xl transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1A1712]">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#FFC94A]/20 text-[#231C0A] dark:text-[#FFD978]">
                    {rel.category}
                  </span>
                  <h4 className="font-display text-base font-semibold text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#4E493F] dark:text-[#C4BDAF] line-clamp-2">
                    {rel.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 flex items-center justify-between text-xs font-medium text-[#211D16] dark:text-[#FFC94A]">
                  <span>Explore Practice</span>
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

