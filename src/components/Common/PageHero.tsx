import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WAYFARE_CURVES } from '../../animations/transitions';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  description,
  image = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
  breadcrumbs,
  children,
}) => {
  return (
    <section className="relative w-full p-2 sm:p-2.5 lg:p-3 pt-0 overflow-hidden">
      <div className="relative w-full min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-end bg-[#1A1712] border border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 shadow-2xl">
        
        {/* Full-bleed Photo Background */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transform scale-100"
            loading="eager"
          />
        </div>

        {/* Warm Photographic Overlay Veil matching Wayfare */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE4]/95 via-[#F5EFE4]/80 to-[#F5EFE4]/20 dark:from-[#14120E]/95 dark:via-[#14120E]/85 dark:to-[#14120E]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5EFE4]/70 via-transparent to-transparent dark:from-[#14120E]/80 dark:via-transparent to-transparent pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-16 pt-32 sm:pt-36 pb-12 sm:pb-16 max-w-7xl mx-auto space-y-6">
          
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0.001, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: WAYFARE_CURVES.expo }}
              className="flex items-center gap-1.5 text-xs text-[#857E70] dark:text-[#8F887A] font-medium"
            >
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-[#857E70]/60" />}
                  {crumb.to ? (
                    <Link to={crumb.to} className="hover:text-[#211D16] dark:hover:text-[#F3ECDF] transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#211D16] dark:text-[#F3ECDF] font-semibold">{crumb.label}</span>
                  )}
                </React.Fragment>
              ))}
            </motion.nav>
          )}

          {/* Eyebrow Badge with Sun Dot */}
          <motion.div
            initial={{ opacity: 0.001, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7, ease: WAYFARE_CURVES.expo }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill bg-[#FCF9F3]/80 dark:bg-[#1C1913]/80 text-xs sm:text-sm font-medium text-[#211D16] dark:text-[#F3ECDF] border border-[#E0D6C4]/60 dark:border-[#2F2A20]/60 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFC94A] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFC94A]" />
            </span>
            <span className="tracking-wide text-[#4E493F] dark:text-[#C4BDAF]">
              {eyebrow}
            </span>
          </motion.div>

          {/* Large Headline in Clash Grotesk */}
          <motion.h1
            initial={{ opacity: 0.001, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: WAYFARE_CURVES.expo }}
            className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] leading-[1.08] max-w-4xl"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0.001, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: WAYFARE_CURVES.expo }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed max-w-2xl"
          >
            {description}
          </motion.p>

          {children && (
            <motion.div
              initial={{ opacity: 0.001, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8, ease: WAYFARE_CURVES.expo }}
              className="pt-2"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

