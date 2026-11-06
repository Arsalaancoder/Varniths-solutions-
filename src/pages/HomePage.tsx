import React from 'react';
import { Hero } from '../sections/Hero/Hero';
import { BrandStatement } from '../sections/BrandStatement/BrandStatement';
import { CompanyOverview } from '../sections/CompanyOverview/CompanyOverview';
import { DestinationsShowcase } from '../sections/Destinations/DestinationsShowcase';
import { Expertise } from '../sections/Expertise/Expertise';
import { Solutions } from '../sections/Solutions/Solutions';
import { PinnedStory } from '../sections/PinnedStory/PinnedStory';
import { Testimonials } from '../sections/Testimonials/Testimonials';
import { CapabilitiesMatrix } from '../sections/Included/CapabilitiesMatrix';
import { Journal } from '../sections/Journal/Journal';
import { FAQ } from '../sections/FAQ/FAQ';
import { CTA } from '../sections/CTA/CTA';
import { ContactSection } from '../sections/Contact/ContactSection';
import { scrollToTarget } from '../animations/scroll';

export const HomePage: React.FC = () => {
  const handleOpenContact = () => {
    scrollToTarget('#contact', -60);
  };

  return (
    <>
      {/* 01. Full-bleed Photographic Hero Section */}
      <Hero onOpenContact={handleOpenContact} />

      {/* 02. Scroll-Filled Animated Brand Statement (Wayfare Statement) */}
      <BrandStatement />

      {/* 03. Intro Section: High-touch / Facts Card & Proof (Wayfare Intro) */}
      <CompanyOverview />

      {/* 04. Core Disciplines / Practice Horizontal Showcase (Wayfare Destinations) */}
      <DestinationsShowcase />

      {/* 05. Solutions Grid: Filterable Cards (Wayfare Trips) */}
      <Expertise />

      {/* 06. Business Verticals: Dark Panel Hover Slider (Wayfare Travel Styles) */}
      <Solutions />

      {/* 07. Consulting Approach: Pinned Storytelling (Wayfare How It Works) */}
      <PinnedStory />

      {/* 08. Testimonials Marquee Ticker (Wayfare Reviews) */}
      <Testimonials />

      {/* 09. Capabilities Matrix: 4 Cells + Photo (Wayfare Included) */}
      <CapabilitiesMatrix />

      {/* 10. Insights & Editorial Grid (Wayfare Journal) */}
      <Journal />

      {/* 11. Frequently Asked Questions (Wayfare FAQ) */}
      <FAQ />

      {/* 12. Final CTA Window with Desktop Cursor Photo Trail (Wayfare CTA Window) */}
      <CTA onOpenContact={handleOpenContact} />

      {/* 13. Direct Contact Form & Office Headquarters */}
      <ContactSection />
    </>
  );
};

