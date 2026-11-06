import React from 'react';
import { PageHero } from '../components/Common/PageHero';
import { COMPANY_INFO } from '../data/content';

export const TermsPage: React.FC = () => {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'recruitment-terms', title: '2. Recruitment & Talent Acquisition Terms' },
    { id: 'training-terms', title: '3. Professional Training & Lab Terms' },
    { id: 'tech-terms', title: '4. Technology & Digital Consulting' },
    { id: 'commercials', title: '5. Invoicing & Commercial Terms' },
    { id: 'confidentiality', title: '6. Mutual Confidentiality' },
    { id: 'liability', title: '7. Limitation of Liability' },
    { id: 'governing-law', title: '8. Governing Law & Jurisdiction' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Subpage Hero */}
      <PageHero
        eyebrow="Commercial Agreements"
        title="Terms of Engagement."
        description="The operational guidelines, service level commitments, and commercial terms governing recruitment partnerships, student curriculums, and technology consulting."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Terms & Conditions' },
        ]}
      >
        <span className="text-xs text-[#857E70] dark:text-[#8F887A]">
          Effective Date: March 1, 2026 · Master Engagement Standards
        </span>
      </PageHero>

      {/* 02. Two-Column Legal Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Table of Contents */}
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

          {/* Legal Text Body */}
          <div className="lg:col-span-8 space-y-12 text-sm sm:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
            
            <section id="acceptance" className="space-y-3 scroll-mt-28">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                1. Acceptance of Terms
              </h3>
              <p>
                By engaging Varnith Global for recruitment services, enrolling in our technical training bootcamps, or contracting our technology advisory practices, you agree to be bound by these Master Terms of Engagement ("Terms"). Individual Statements of Work (SOW) or candidate enrollment agreements executed in writing supplement and incorporate these terms.
              </p>
            </section>

            <section id="recruitment-terms" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                2. Recruitment & Talent Acquisition Terms
              </h3>
              <p>
                Varnith Global provides retained search, contingency recruitment, and Recruitment Process Outsourcing (RPO) under specific performance metrics:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-2">
                <li><strong>Candidate Submissions:</strong> All candidate profiles submitted to client companies represent vetted individuals who have expressed interest in the role.</li>
                <li><strong>Replacement Guarantee:</strong> Unless specified otherwise in an executed enterprise SOW, Varnith Global provides a 90-day candidate replacement guarantee for full-time direct hires who depart voluntarily or are terminated for cause.</li>
                <li><strong>Non-Circumvention:</strong> Clients agree not to solicit or hire submitted candidates directly for a period of 12 months from the date of submission without compensating Varnith Global according to agreed fee schedules.</li>
              </ul>
            </section>

            <section id="training-terms" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                3. Professional Training & Lab Terms
              </h3>
              <p>
                Students enrolled in our technical programs (including DevOps, SAP Basis Security, SAP GRC, Software Testing, Data Analytics, and Python) are granted a personal, non-transferable license to access our recorded lectures, proprietary lab environments, and course materials.
              </p>
              <p>
                Lab infrastructure is intended solely for educational practice. Any unauthorized vulnerability testing, distribution of proprietary course slides, or misuse of cloud sandbox credentials terminates enrollment without refund.
              </p>
            </section>

            <section id="tech-terms" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                4. Technology & Digital Consulting
              </h3>
              <p>
                All custom software engineering, automation scripts, and cloud infrastructure architectures delivered to corporate clients are deemed "work-for-hire" upon full settlement of project invoices, transferring complete IP ownership to the client entity.
              </p>
            </section>

            <section id="commercials" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                5. Invoicing & Commercial Terms
              </h3>
              <p>
                Corporate invoices are rendered in Indian Rupees (INR) or agreed foreign currency, payable within 30 days of issuance unless otherwise stipulated in the client contract. Student tuition fees must be cleared prior to batch commencement to guarantee lab access.
              </p>
            </section>

            <section id="confidentiality" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                6. Mutual Confidentiality
              </h3>
              <p>
                Both parties agree to treat all business plans, candidate information, fee structures, and technical architectures disclosed during the engagement as strictly proprietary, maintaining non-disclosure obligations for a minimum period of 3 years following contract termination.
              </p>
            </section>

            <section id="liability" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                7. Limitation of Liability
              </h3>
              <p>
                In no event shall either party be liable for indirect, incidental, or consequential damages. Varnith Global's cumulative liability arising out of any engagement shall not exceed the total fees received under the specific SOW in question during the prior 6-month period.
              </p>
            </section>

            <section id="governing-law" className="space-y-3 scroll-mt-28 pt-6 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
              <h3 className="font-display text-2xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                8. Governing Law & Jurisdiction
              </h3>
              <p>
                These Terms of Engagement are governed by the substantive laws of India. Any unresolved dispute arising out of or in connection with these terms shall be submitted to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.
              </p>
              <div className="p-5 rounded-2xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] space-y-1 text-xs sm:text-sm mt-4">
                <p><strong>Varnith Global Corporate Legal Counsel</strong></p>
                <p>Office: 4-36, Vikash Nagar, Dilshuknagar, Hyderabad 500060, Telangana, India</p>
                <p>Email: legal@varnithglobal.com / {COMPANY_INFO.email}</p>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

