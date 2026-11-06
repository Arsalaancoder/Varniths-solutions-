import React, { useState } from 'react';
import { COMPANY_INFO } from '../../data/content';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'HR Consulting & Talent Acquisition',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, and Phone Number).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate API request delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'HR Consulting & Talent Acquisition',
        message: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again or reach out directly on WhatsApp.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Direct Contact Info & Office Address (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
              Let's Discuss Your Talent & Learning Goals
            </h2>
            <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
              Wish to enquire about corporate recruitment, executive search, course syllabus, or enterprise training batches? You can visit our Hyderabad office, call us directly, or submit this enquiry.
            </p>
          </div>

          {/* Contact Details Cards */}
          <div className="space-y-4">
            {/* Phone */}
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-start gap-4 p-4 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] hover:border-[#FFC94A]/60 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFC94A]/20 text-[#211D16] dark:text-[#FFC94A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC94A] group-hover:text-[#231C0A] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#857E70] dark:text-[#8F887A]">
                  Phone Consultation
                </span>
                <p className="text-base font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                  {COMPANY_INFO.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-start gap-4 p-4 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] hover:border-[#FFC94A]/60 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFC94A]/20 text-[#211D16] dark:text-[#FFC94A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFC94A] group-hover:text-[#231C0A] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#857E70] dark:text-[#8F887A]">
                  Direct Email
                </span>
                <p className="text-base font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                  {COMPANY_INFO.email}
                </p>
              </div>
            </a>

            {/* Physical Location */}
            <div className="flex items-start gap-4 p-4 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20]">
              <div className="w-10 h-10 rounded-xl bg-[#ECE3D3] dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#857E70] dark:text-[#8F887A]">
                  Hyderabad Headquarters
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#211D16] dark:text-[#F3ECDF] leading-relaxed mt-0.5">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-4 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20]">
              <div className="w-10 h-10 rounded-xl bg-[#ECE3D3] dark:bg-[#27231A] text-[#857E70] dark:text-[#8F887A] flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#857E70] dark:text-[#8F887A]">
                  Office Hours
                </span>
                <p className="text-xs sm:text-sm font-medium text-[#211D16] dark:text-[#F3ECDF]">
                  {COMPANY_INFO.officeHours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form (7 cols) */}
        <div className="lg:col-span-7 rounded-[32px] p-6 sm:p-10 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-2xl relative overflow-hidden">
          <div className="mb-6 pb-4 border-b border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
            <h3 className="font-display text-2xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#857E70] dark:text-[#8F887A] mt-1">
              A dedicated relationship manager reviews and responds within one working day.
            </p>
          </div>

          {/* Success State Alert */}
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3 text-emerald-800 dark:text-emerald-200 animate-fadeIn">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
              <div className="text-sm">
                <p className="font-semibold">Thank you! Your message has been received.</p>
                <p className="text-xs mt-0.5 text-emerald-700 dark:text-emerald-300">
                  Our talent and admissions team will contact you shortly via email or phone.
                </p>
              </div>
            </div>
          )}

          {/* Error State Alert */}
          {status === 'error' && (
            <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 flex items-start gap-3 text-rose-800 dark:text-rose-200 animate-fadeIn">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
              <div className="text-sm">
                <p className="font-semibold">Unable to submit enquiry</p>
                <p className="text-xs mt-0.5 text-rose-700 dark:text-rose-300">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#4E493F] dark:text-[#C4BDAF]">
                  Full Name <span className="text-[#FFC94A]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#F5EFE4]/60 dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC94A]/50 focus:border-[#FFC94A] transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#4E493F] dark:text-[#C4BDAF]">
                  Email Address <span className="text-[#FFC94A]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#F5EFE4]/60 dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC94A]/50 focus:border-[#FFC94A] transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#4E493F] dark:text-[#C4BDAF]">
                  Phone Number <span className="text-[#FFC94A]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9391816116"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#F5EFE4]/60 dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC94A]/50 focus:border-[#FFC94A] transition-all"
                />
              </div>

              {/* Practice / Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#4E493F] dark:text-[#C4BDAF]">
                  Area of Interest
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#F5EFE4]/60 dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC94A]/50 focus:border-[#FFC94A] transition-all"
                >
                  <option value="HR Consulting & Talent Acquisition">HR Consulting & Talent Acquisition</option>
                  <option value="Recruitment Process Outsourcing (RPO)">Recruitment Process Outsourcing (RPO)</option>
                  <option value="Executive Hiring Services">Executive Hiring Services</option>
                  <option value="Corporate DevOps Training">DevOps & Cloud Engineering Training</option>
                  <option value="SAP Basis Security & GRC Training">SAP Basis Security & GRC</option>
                  <option value="Data Analytics & Business Intelligence">Data Analytics & Power BI</option>
                  <option value="Software Testing Program">Software Testing (Manual + Auto + API)</option>
                  <option value="Python Full-Stack Engineering">Python Full-Stack Engineering</option>
                  <option value="Technology & AI-led Solutions">Technology & AI Solutions</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#4E493F] dark:text-[#C4BDAF]">
                Your Message / Specific Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your team size, hiring goals, or training questions..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#F5EFE4]/60 dark:bg-[#27231A] text-[#211D16] dark:text-[#F3ECDF] text-sm focus:outline-none focus:ring-2 focus:ring-[#FFC94A]/50 focus:border-[#FFC94A] transition-all resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#FFC94A] hover:bg-[#FFD978] text-[#231C0A] font-semibold text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-60 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#231C0A]" />
                    <span>Transmitting Enquiry…</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4 text-[#231C0A]" />
                  </>
                )}
              </button>

              <span className="text-xs text-[#857E70] dark:text-[#8F887A]">
                No spam. Strictly confidential.
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
