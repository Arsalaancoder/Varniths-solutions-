import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/Common/ScrollToTop';
import { initSmoothScroll } from './animations/scroll';

// 13 Multi-Page Views
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  // Initialize Lenis smooth virtual scrolling on mount
  useEffect(() => {
    const lenis = initSmoothScroll();
    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#F5EFE4] text-[#4E493F] font-sans selection:bg-[#FFC94A] selection:text-[#231C0A] overflow-x-hidden">
        {/* Automatic scroll to top on route change */}
        <ScrollToTop />

        {/* 01. Wayfare Floating Pill Navigation */}
        <Navbar />

        {/* 02. Dynamic Page Content Views */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:slug" element={<IndustryDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/style-guide" element={<StyleGuidePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* 03. Wayfare Grand Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
