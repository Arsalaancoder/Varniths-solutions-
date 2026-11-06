import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';
import { Compass, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 py-20">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        
        {/* Sun Compass Icon */}
        <div className="w-16 h-16 rounded-full bg-[#FFC94A] flex items-center justify-center mx-auto shadow-lg">
          <Compass className="w-8 h-8 text-[#231C0A] animate-spin-slow" />
        </div>

        {/* 404 Number */}
        <span className="font-display text-7xl sm:text-9xl font-bold tracking-tight text-[#211D16] dark:text-[#F3ECDF] block leading-none">
          404
        </span>

        {/* Headline */}
        <h1 className="font-display text-2xl sm:text-4xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
          Page Not Found on Our Compass
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed max-w-md mx-auto">
          The requested URL does not exist or has been relocated within our updated practice structure.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <ButtonArrow
            label="Return Home"
            variant="primary"
            to="/"
          />
          <Link
            to="/services"
            className="px-6 py-3 rounded-full border border-[#E0D6C4] dark:border-[#2F2A20] text-sm font-semibold text-[#211D16] dark:text-[#F3ECDF] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Explore Services
          </Link>
        </div>

        {/* Helpful Shortcuts */}
        <div className="pt-8 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 flex flex-wrap items-center justify-center gap-6 text-xs text-[#857E70] dark:text-[#8F887A]">
          <Link to="/about" className="hover:text-[#211D16] dark:hover:text-[#F3ECDF] transition-colors">
            About Varnith Global
          </Link>
          <Link to="/industries" className="hover:text-[#211D16] dark:hover:text-[#F3ECDF] transition-colors">
            Industries We Serve
          </Link>
          <Link to="/insights" className="hover:text-[#211D16] dark:hover:text-[#F3ECDF] transition-colors">
            Insights & Journal
          </Link>
          <Link to="/contact" className="hover:text-[#211D16] dark:hover:text-[#F3ECDF] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

