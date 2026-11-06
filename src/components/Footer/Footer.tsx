import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_LIST } from '../../data/content';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="relative bg-[#1A1712] dark:bg-[#0E0C09] text-[#F3ECDF] pt-20 pb-12 overflow-hidden border-t border-[#2F2A20]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[300px] bg-[#FFC94A]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-16">
        
        {/* Top Newsletter / Quick Pitch Banner (Wayfare Footer Top) */}
        <div className="rounded-3xl bg-white/[0.03] border border-[#2F2A20] p-6 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8 backdrop-blur-sm">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#FFC94A] font-medium block">
              Continuous Intelligence
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#F3ECDF]">
              Quarterly Insights on Tech Hiring & Cloud Architecture
            </h3>
            <p className="text-xs sm:text-sm text-[#8F887A] leading-relaxed">
              One concise dispatch every quarter with emerging tech salary benchmarks, recruitment best practices, and new course syllabi. Strictly no spam.
            </p>
          </div>

          {/* Form */}
          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm text-[#FFC94A] font-medium bg-[#FFC94A]/10 px-6 py-3.5 rounded-full border border-[#FFC94A]/20">
                <CheckCircle2 className="w-4 h-4 text-[#FFC94A]" />
                <span>Subscribed! You will receive our next quarterly dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your work email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full sm:w-80 px-5 py-3 rounded-full bg-white/5 border border-[#2F2A20] text-[#F3ECDF] placeholder-[#8F887A] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#FFC94A] hover:bg-[#FFD978] text-[#231C0A] text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4 text-[#231C0A]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Multi-Column Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4 border-t border-[#2F2A20]">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block py-1 group" aria-label="Varnith Global Home">
              <img
                src="/varnith-logo-dark.png"
                alt="Varnith Global"
                className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </Link>

            <p className="text-xs sm:text-sm text-[#8F887A] leading-relaxed max-w-sm">
              Premier HR consulting, executive talent acquisition, corporate training, and digital transformation partner headquartered in Hyderabad, Telangana.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8F887A]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Office Active: Hyderabad, IST</span>
            </div>
          </div>

          {/* Solutions Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-[#FFC94A] uppercase">
              Solutions & Practices
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C4BDAF]">
              <li>
                <Link to="/services/talent-acquisition" className="hover:text-[#FFC94A] transition-colors">
                  Talent Acquisition & Search
                </Link>
              </li>
              <li>
                <Link to="/services/rpo-services" className="hover:text-[#FFC94A] transition-colors">
                  Recruitment Process Outsourcing (RPO)
                </Link>
              </li>
              <li>
                <Link to="/services/executive-hiring" className="hover:text-[#FFC94A] transition-colors">
                  Executive Leadership Hiring
                </Link>
              </li>
              <li>
                <Link to="/services/devops-training" className="hover:text-[#FFC94A] transition-colors">
                  DevOps & Cloud Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/sap-basis-security" className="hover:text-[#FFC94A] transition-colors">
                  SAP Basis Security & GRC
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="hover:text-[#FFC94A] transition-colors">
                  AI-led Solutions & Automation
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#FFC94A] hover:underline font-medium inline-block pt-1">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-[#FFC94A] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C4BDAF]">
              <li>
                <Link to="/" className="hover:text-[#FFC94A] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFC94A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#FFC94A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#FFC94A] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[#FFC94A] transition-colors">
                  Insights & Journal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFC94A] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Talk to Us Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-semibold tracking-wider text-[#FFC94A] uppercase">
              Talk to Us
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#C4BDAF]">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="block hover:text-[#FFC94A] transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="block hover:text-[#FFC94A] transition-colors font-medium text-[#F3ECDF]"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-xs text-[#8F887A] leading-relaxed pt-1">
                {COMPANY_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FFC94A] hover:underline"
                >
                  <span>Chat with Admissions on WhatsApp →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Legal and Copyright */}
        <div className="pt-8 border-t border-[#2F2A20] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F887A]">
          <p>© 2026 Varnith Global. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="hover:text-[#F3ECDF] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#F3ECDF] transition-colors"
            >
              Terms & Conditions
            </Link>
            <span>Mon to Sat, 9am to 6:30pm IST</span>
          </div>
        </div>

        {/* Signature Wayfare Cropped Wordmark Backdrop (Wordmark Clip) */}
        <div className="pt-8 select-none pointer-events-none overflow-hidden wordmark-clip">
          <p className="font-display text-[15vw] font-bold tracking-tight text-white/[0.03] text-center leading-none uppercase whitespace-nowrap">
            VARNITH GLOBAL
          </p>
        </div>
      </div>
    </footer>
  );
};
