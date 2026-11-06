import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ButtonArrow } from '../Buttons/ButtonArrow';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { SERVICES_LIST } from '../../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const featuredServices = SERVICES_LIST.slice(0, 4);

  return (
    <>
      {/* Wayfare Fixed Nav Wrap: fixed top: 20px, centered */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        
        {/* Nav Pill Container: exact Wayfare geometry (height 60px, rounded-full, backdrop-filter blur(18px)) */}
        <nav
          className={`pointer-events-auto h-[58px] sm:h-[62px] max-w-full rounded-full transition-all duration-300 flex items-center justify-between gap-6 md:gap-10 pl-5 sm:pl-6 pr-2 sm:pr-2.5 shadow-[0_10px_40px_rgba(33,29,22,0.08)] border ${
            isScrolled
              ? 'bg-[#FCF9F3]/95 border-[#E0D6C4]/80 backdrop-blur-xl'
              : 'bg-[#FCF9F3]/85 border-[#E0D6C4]/50 backdrop-blur-lg'
          }`}
        >
          {/* Site Logo */}
          <Link
            to="/"
            className="flex items-center group flex-shrink-0 py-1"
            aria-label="Varnith Global Home"
          >
            <img
              src="/varnith-logo.png"
              alt="Varnith Global"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </Link>

          {/* Center Navigation Links (Real Multi-Page Routes) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors py-1 ${
                  isActive
                    ? 'text-[#211D16] font-semibold'
                    : 'text-[#4E493F] hover:text-[#211D16]'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors py-1 ${
                  isActive
                    ? 'text-[#211D16] font-semibold'
                    : 'text-[#4E493F] hover:text-[#211D16]'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-1.5 text-[15px] font-medium tracking-tight transition-colors py-1 ${
                    isActive || isServicesDropdownOpen
                      ? 'text-[#211D16] font-semibold'
                      : 'text-[#4E493F] hover:text-[#211D16]'
                  }`
                }
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-[#211D16]' : ''
                  }`}
                />
              </NavLink>

              {/* Dropdown Menu Window */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-84 xl:w-96">
                  <div className="bg-[#FCF9F3] rounded-2xl p-3 shadow-2xl border border-[#E0D6C4] backdrop-blur-2xl animate-fadeIn">
                    <div className="px-3 py-1.5 mb-1 border-b border-[#E0D6C4]/50 flex items-center justify-between text-[11px] font-semibold text-[#857E70] uppercase tracking-wider">
                      <span>Core Practices</span>
                      <Link to="/services" className="text-[#211D16] hover:underline flex items-center gap-1">
                        <span>All Services</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                    {featuredServices.map((sol) => (
                      <Link
                        key={sol.id}
                        to={`/services/${sol.slug}`}
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-[#F5EFE4] block transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-display text-sm font-medium text-[#211D16] group-hover:text-[#211D16] transition-colors">
                            {sol.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FFC94A]/25 text-[#231C0A] font-medium">
                            {sol.category.split(' ')[0]}
                          </span>
                        </div>
                        <p className="text-xs text-[#857E70] mt-0.5 line-clamp-1">
                          {sol.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/industries"
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors py-1 ${
                  isActive
                    ? 'text-[#211D16] font-semibold'
                    : 'text-[#4E493F] hover:text-[#211D16]'
                }`
              }
            >
              Industries
            </NavLink>

            <NavLink
              to="/insights"
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors py-1 ${
                  isActive
                    ? 'text-[#211D16] font-semibold'
                    : 'text-[#4E493F] hover:text-[#211D16]'
                }`
              }
            >
              Insights
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[15px] font-medium tracking-tight transition-colors py-1 ${
                  isActive
                    ? 'text-[#211D16] font-semibold'
                    : 'text-[#4E493F] hover:text-[#211D16]'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Controls: Arrow CTA Button */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <ButtonArrow
              label="Let's Talk"
              variant="primary"
              to="/contact"
            />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-full border border-[#E0D6C4] text-[#211D16] hover:bg-black/5 cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FCF9F3]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 animate-fadeIn lg:hidden">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#857E70] font-medium block mb-2">
              Navigation
            </span>

            <Link
              to="/"
              className="block w-full text-left font-display text-2xl font-medium text-[#211D16] py-2 border-b border-[#E0D6C4]/50"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="block w-full text-left font-display text-2xl font-medium text-[#211D16] py-2 border-b border-[#E0D6C4]/50"
            >
              About Varnith Global
            </Link>

            <Link
              to="/services"
              className="block w-full text-left font-display text-2xl font-medium text-[#211D16] py-2 border-b border-[#E0D6C4]/50 flex items-center justify-between"
            >
              <span>Services & Practices</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              to="/industries"
              className="block w-full text-left font-display text-2xl font-medium text-[#211D16] py-2 border-b border-[#E0D6C4]/50"
            >
              Industries
            </Link>

            <Link
              to="/insights"
              className="block w-full text-left font-display text-2xl font-medium text-[#211D16] py-2 border-b border-[#E0D6C4]/50"
            >
              Insights & Journal
            </Link>

            <Link
              to="/contact"
              className="block w-full text-left font-display text-2xl font-medium text-[#211D16] py-2 border-b border-[#E0D6C4]/50"
            >
              Contact
            </Link>
          </div>

          <div className="pt-6 border-t border-[#E0D6C4] space-y-4">
            <ButtonArrow
              label="Contact Our Team"
              variant="primary"
              to="/contact"
              className="w-full justify-between"
            />
            <p className="text-xs text-[#857E70] text-center">
              Hyderabad, India · (+91) 9391816116 · info@varnithglobal.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};
