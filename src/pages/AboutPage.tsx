import React from 'react';
import { PageHero } from '../components/Common/PageHero';
import { COMPANY_INFO } from '../data/content';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Terminal,
  MapPin,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Advisory Director',
      role: 'Head of Executive Search & HR Consulting',
      experience: '16+ Years Experience',
      focus: 'C-Suite Mandates, RPO Strategy & Global Capability Center (GCC) Buildout',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Practice Lead — Cloud & DevOps',
      role: 'Director of Cloud Engineering & Infrastructure Training',
      experience: '12+ Years Enterprise Architecture',
      focus: 'Multi-Cloud Kubernetes, Infrastructure as Code, CI/CD Pipeline Automation',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Practice Lead — SAP Security & GRC',
      role: 'Senior SAP Security Consultant & Enterprise Trainer',
      experience: '14+ Years SAP Architecture',
      focus: 'SAP NetWeaver, Authorization Architectures, SOX Compliance & Access Risk',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Practice Lead — Data & Quality Engineering',
      role: 'Director of Analytics & Software Testing Cohorts',
      experience: '11+ Years Engineering QA',
      focus: 'Selenium Automation, RestAssured API Testing, Power BI & Enterprise SQL',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const coreValues = [
    {
      icon: Target,
      title: 'Precision Over Volume',
      desc: 'We never flood client inboxes with unfiltered resumes. Every candidate profile has undergone direct technical scrutiny, reference checks, and compensation alignment before submission.',
    },
    {
      icon: Terminal,
      title: 'Production Emulation Labs',
      desc: 'Theory alone creates fragile engineers. All our technical cohorts train on live Kubernetes clusters, containerized microservices, and live SAP authorization scenarios.',
    },
    {
      icon: ShieldCheck,
      title: 'Strict Governance & Discretion',
      desc: 'Confidential executive mandates and proprietary enterprise training syllabi are managed under strict non-disclosure protections and regulatory compliance frameworks.',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Subpage Hero */}
      <PageHero
        eyebrow="Company Identity & Conviction"
        title="Building Better Teams, Empowering Better Futures."
        description="Headquartered in Hyderabad, Varnith Global unites executive talent search, intensive technical education, and AI-driven workflow modernization into one integrated growth partner."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* 02. The Varnith Story & Purpose Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
              Our Genesis
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] leading-[1.1]">
              Bridging the Disconnect Between Hiring, Training, and Technology.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
              <p>
                In today's fast-moving market, traditional corporate services operate in isolated silos. Recruitment agencies send resumes without understanding modern production architectures; training institutes teach theoretical slides detached from live client deadlines; and technology vendors deliver code without ensuring teams are trained to operate it.
              </p>
              <p>
                Varnith Global was established in Hyderabad to eliminate that friction. By uniting <strong>strategic recruitment</strong>, <strong>hands-on technical capability building</strong>, and <strong>practical workflow automation</strong>, we provide businesses with a singular, high-touch accountability partner.
              </p>
              <p>
                Whether you are an enterprise establishing a new Global Capability Center (GCC) in India, a scaleup seeking niche Kubernetes leads, or an aspiring professional aiming for a career transition into SAP Security or DevOps, we walk beside you through every stage of execution.
              </p>
            </div>

            <div className="pt-2">
              <ButtonArrow
                label="Explore Our Solutions"
                variant="primary"
                to="/services"
              />
            </div>
          </div>

          {/* Right: Immersive Composition Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#1A1712]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                alt="Varnith Global Executive Leadership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-6 inset-x-6 p-6 rounded-2xl glass-pill bg-white/90 dark:bg-[#1C1913]/90 backdrop-blur-md border border-[#E0D6C4] dark:border-[#2F2A20] shadow-lg space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#857E70] dark:text-[#FFC94A] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFC94A]" />
                  <span>Verified Identity</span>
                </div>
                <h4 className="font-display text-base font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                  Varnith Global Corporate Headquarters
                </h4>
                <p className="text-xs text-[#857E70] dark:text-[#8F887A] leading-relaxed">
                  Vikash Nagar, Dilshuknagar, Hyderabad 500060, Telangana, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Three Core Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
            Operating Standards
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
            Three Uncompromising Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#FCF9F3] dark:bg-[#1C1913] border border-[#E0D6C4] dark:border-[#2F2A20] shadow-md hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFC94A]/20 text-[#211D16] dark:text-[#FFC94A] flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 04. Verified Milestones Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-[32px] p-8 sm:p-14 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#E0D6C4]/60 dark:divide-[#2F2A20]/60">
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <span className="font-display text-4xl sm:text-5xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                500+
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#857E70] dark:text-[#8F887A]">
                Executive & Tech Placements
              </p>
            </div>
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <span className="font-display text-4xl sm:text-5xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                92%
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#857E70] dark:text-[#8F887A]">
                12-Month Retention Rate
              </p>
            </div>
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <span className="font-display text-4xl sm:text-5xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                1,200+
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#857E70] dark:text-[#8F887A]">
                Trained Industry Professionals
              </p>
            </div>
            <div className="space-y-1.5 pt-4 lg:pt-0">
              <span className="font-display text-4xl sm:text-5xl font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                4.9 / 5
              </span>
              <p className="text-xs sm:text-sm font-medium text-[#857E70] dark:text-[#8F887A]">
                Student & Partner Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Practice Leadership Profiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
              Experienced Practitioners
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
              Practice Leads & Directors
            </h2>
          </div>
          <p className="text-sm text-[#4E493F] dark:text-[#C4BDAF] max-w-md leading-relaxed">
            Every Varnith Global program is directed by hands-on professionals who bring active enterprise delivery experience to your mandates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipTeam.map((lead, idx) => (
            <div
              key={idx}
              className="rounded-3xl overflow-hidden border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="aspect-[4/4] overflow-hidden bg-[#1A1712]">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#FFC94A] block">
                    {lead.experience}
                  </span>
                  <h4 className="font-display text-base font-semibold text-[#211D16] dark:text-[#F3ECDF] mt-0.5">
                    {lead.name}
                  </h4>
                  <p className="text-xs font-medium text-[#857E70] dark:text-[#8F887A]">
                    {lead.role}
                  </p>
                </div>

                <p className="text-[11px] text-[#4E493F] dark:text-[#C4BDAF] pt-2 border-t border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 leading-relaxed">
                  {lead.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06. Hyderabad Office Infrastructure & Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <div className="rounded-[32px] p-8 sm:p-12 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-semibold block">
                Local Presence, Global Delivery
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Visit Our Hyderabad Facilities
              </h3>
              <p className="text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                Our main office houses dedicated client interview conference rooms, high-bandwidth lab stations for student cohort testing, and direct partner meeting suites.
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-[#211D16] dark:text-[#F3ECDF] pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FFC94A] flex-shrink-0" />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFC94A] flex-shrink-0" />
                  <span>{COMPANY_INFO.officeHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#FFC94A] flex-shrink-0" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FFC94A] flex-shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center gap-4">
              <ButtonArrow
                label="Plan a Campus Visit"
                variant="primary"
                to="/contact"
              />
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] hover:underline"
              >
                Chat with Hyderabad Admissions Desk →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

