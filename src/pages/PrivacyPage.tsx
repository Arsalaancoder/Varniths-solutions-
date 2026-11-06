import React from 'react';
import { PageHero } from '../components/Common/PageHero';
import { COMPANY_INFO } from '../data/content';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'data-collected', title: '2. Information We Collect' },
    { id: 'usage', title: '3. How We Use Your Information' },
    { id: 'recruitment-confidentiality', title: '4. Candidate Confidentiality & Talent Data' },
    { id: 'enterprise-client-data', title: '5. Corporate Client Protections' },
    { id: 'data-security', title: '6. Storage & Security Safeguards' },
    { id: 'statutory-rights', title: '7. Your Statutory Rights (DPDP & GDPR)' },
    { id: 'contact-dpo', title: '8. Contact Our Data Governance Officer' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Subpage Hero */}
      <PageHero
        eyebrow="Legal & Governance"
        title="Privacy Policy."
        description="How Varnith Global collects, safeguards, and processes personal, candidate, and corporate data across our recruitment, training, and technology practices."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Privacy Policy' },
        ]}
      >
        <span className="text-xs text-[#857E70] dark:text-[#8F887A]">
          Effective Date: March 1, 2026 · Version 2.4
        </span>
      </PageHero>

      {/* 02. Two-Column Legal Layout with Sticky Table of Contents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Table of Contents (Sticky 4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 p-6 rounded-3xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] shadow-sm">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#857E70] dark:text-[#8F887A] block">
              Table of Contents
            </span>
            <nav className="space-y-1.5 text-xs sm:text-sm">
              {sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1 text-[#4E493F] dark:text-[#C4BDAF] hover:text-[#211D16] dark:hover:text-[#FFC94A] transition-colors"
                >
                  {sec.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal Text Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12 text-sm sm:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
            
            <section id="introduction" className="space-y-3 scroll-mt-28">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                1. Introduction & Overview
              </h3>
              <p>
                Varnith Global ("we", "our", or "us"), headquartered at 4-36, Vikash Nagar, Dilshuknagar, Hyderabad 500060, Telangana, India, is committed to safeguarding the privacy and integrity of personal information collected through our website, recruitment consulting practices, technical training curriculums, and technology consulting services.
              </p>
              <p>
                This Privacy Policy explains what information we gather, the legal grounds on which we process it, how we secure it, and how candidates, students, and corporate partners can exercise their privacy rights.
              </p>
            </section>

            <section id="data-collected" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                2. Information We Collect
              </h3>
              <p>Depending on how you interact with Varnith Global, we collect:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Candidate & Talent Data:</strong> Full name, email address, phone number, work history, resume, LinkedIn profile, compensation expectations, technical certifications, and references provided during recruitment evaluations.</li>
                <li><strong>Student & Learner Data:</strong> Course enrollment records, attendance logs, lab assignment submissions, project code, and exam evaluations.</li>
                <li><strong>Corporate Client Data:</strong> Company name, designated hiring manager contact details, billing credentials, technical requirements, and project specifications.</li>
                <li><strong>Technical Diagnostics:</strong> IP address, browser type, referral URLs, and pages visited on our website.</li>
              </ul>
            </section>

            <section id="usage" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                3. How We Use Your Information
              </h3>
              <p>We process your data strictly for legitimate operational purposes:</p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li>To evaluate candidates for active recruitment requisitions and facilitate interviews with client employers.</li>
                <li>To administer training bootcamps, provide access to cloud sandbox environments, and award verified certificates of completion.</li>
                <li>To respond to enterprise consulting enquiries and draft customized SLA agreements.</li>
                <li>To comply with regulatory obligations under Indian corporate and taxation laws.</li>
              </ul>
            </section>

            <section id="recruitment-confidentiality" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                4. Candidate Confidentiality & Talent Data
              </h3>
              <p>
                Candidate confidentiality is our highest ethical principle. We do not distribute candidate resumes, current employer details, or salary data to any prospective employer without obtaining prior candidate consent. All candidate evaluations are shared through secure, encrypted transmission channels.
              </p>
            </section>

            <section id="enterprise-client-data" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                5. Corporate Client Protections
              </h3>
              <p>
                All proprietary client hiring requisitions, team structures, expansion roadmaps, and compensation ranges disclosed during consulting discussions are treated as strictly confidential under bilateral non-disclosure agreements (NDAs).
              </p>
            </section>

            <section id="data-security" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                6. Storage & Security Safeguards
              </h3>
              <p>
                We enforce multi-tiered administrative, physical, and technical safeguards. All data stored within our recruitment applicant tracking system (ATS) and learning management systems (LMS) is encrypted in transit using TLS 1.3 and encrypted at rest using AES-256 standard encryption.
              </p>
            </section>

            <section id="statutory-rights" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                7. Your Statutory Rights (DPDP & GDPR)
              </h3>
              <p>
                In compliance with the Digital Personal Data Protection (DPDP) Act of India and international standards such as GDPR, you have the right to request access to the personal data we maintain, correct factual inaccuracies, request deletion of your talent profile, or withdraw consent at any time.
              </p>
            </section>

            <section id="contact-dpo" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                8. Contact Our Data Governance Officer
              </h3>
              <p>
                To exercise any privacy rights, request data removal, or submit privacy enquiries, please address our Data Governance Officer:
              </p>
              <div className="p-5 rounded-2xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] space-y-1 text-xs sm:text-sm">
                <p><strong>Varnith Global — Data Governance Office</strong></p>
                <p>Address: 4-36, 1st Floor, Vikash Nagar, Dilshuknagar, Hyderabad 500060, Telangana, India</p>
                <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#211D16] dark:text-[#FFC94A] underline">{COMPANY_INFO.email}</a></p>
                <p>Telephone: {COMPANY_INFO.phone}</p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

