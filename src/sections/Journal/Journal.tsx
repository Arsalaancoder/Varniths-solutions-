import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../../data/content';
import { ArticleItem } from '../../types';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';

interface JournalProps {
  onSelectArticle?: (article: ArticleItem) => void;
}

export const Journal: React.FC<JournalProps> = ({ onSelectArticle }) => {
  return (
    <section id="journal" className="py-20 md:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-medium px-3.5 py-1 rounded-full bg-[#ECE3D3] dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] inline-block">
            Thoughts & Observations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF]">
            The Varnith Global Journal
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#4E493F] dark:text-[#C4BDAF] max-w-md leading-relaxed">
          Critical perspectives on tech recruiting, developer capability building, enterprise cloud infrastructure, and intelligent automation.
        </p>
      </div>

      {/* 3-Column Editorial Grid (Wayfare Post Grid style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <Link
            key={article.id}
            to={`/insights/${article.slug}`}
            onClick={() => onSelectArticle && onSelectArticle(article)}
            className="group cursor-pointer flex flex-col justify-between space-y-4 rounded-3xl p-4 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Cover Image with 16/10 aspect ratio */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1A1712]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold glass-pill bg-white/90 dark:bg-[#1C1913]/90 text-[#211D16] dark:text-[#F3ECDF] shadow-sm">
                {article.category}
              </span>
            </div>

            {/* Meta & Title */}
            <div className="space-y-3 p-2">
              <div className="flex items-center gap-3 text-xs text-[#857E70] dark:text-[#8F887A]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#FFC94A]" />
                  <span>{article.date}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <h3 className="font-display text-xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors leading-snug">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] line-clamp-3 leading-relaxed">
                {article.excerpt}
              </p>
            </div>

            {/* Read Story Link */}
            <div className="p-2 pt-0 flex items-center gap-1.5 text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] group-hover:translate-x-1 transition-transform">
              <span>Read Perspective</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
