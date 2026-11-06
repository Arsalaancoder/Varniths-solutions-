import React, { useState } from 'react';
import { FAQS } from '../../data/content';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
          <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
            Clear Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
            Have questions about syllabus structure, live lab sessions, enterprise RPO models, or confidential executive search? Our team is always ready to advise.
          </p>

          <div className="pt-4 p-5 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] space-y-2">
            <span className="text-xs font-semibold text-[#857E70] dark:text-[#FFC94A] uppercase tracking-wider block">
              Direct Enquiry:
            </span>
            <p className="text-xs text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
              Prefer speaking with an admissions or corporate talent consultant directly?
            </p>
            <a
              href="tel:+919391816116"
              className="inline-block text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] hover:underline transition-colors pt-1"
            >
              Call Us: (+91) 9391816116 →
            </a>
          </div>
        </div>

        {/* Right Column: FAQ Accordion List (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#FCF9F3] dark:bg-[#1C1913] border-[#FFC94A]/50 shadow-md'
                    : 'bg-[#FCF9F3]/70 dark:bg-[#1C1913]/70 border-[#E0D6C4] dark:border-[#2F2A20] hover:border-[#E0D6C4]/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-medium text-[#211D16] dark:text-[#F3ECDF] cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#FFC94A] text-[#231C0A] rotate-180'
                        : 'bg-[#ECE3D3] dark:bg-[#27231A] text-[#857E70] dark:text-[#8F887A]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed border-t border-[#E0D6C4]/50 dark:border-[#2F2A20]/50 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
