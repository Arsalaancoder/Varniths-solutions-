import React from 'react';
import { PageHero } from '../components/Common/PageHero';
import { ContactSection } from '../sections/Contact/ContactSection';
import { FAQ } from '../sections/FAQ/FAQ';
import { COMPANY_INFO } from '../data/content';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Subpage Hero */}
      <PageHero
        eyebrow="Direct Executive Desk"
        title="Start a Strategic Conversation."
        description="Whether you need retained executive search, corporate cohort training in DevOps and SAP Security, or customized AI workflow automation, our Hyderabad leadership team is ready to assist."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2200&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Contact Us' },
        ]}
      />

      {/* 02. Interactive Contact Form & Location Section */}
      <ContactSection />

      {/* 03. Frequently Asked Questions */}
      <FAQ />
    </div>
  );
};

