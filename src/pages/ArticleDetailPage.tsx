import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data/content';
import { PageHero } from '../components/Common/PageHero';
import { Calendar, Clock, ArrowUpRight, Share2, Sparkles, MessageSquare, Quote } from 'lucide-react';
import { ButtonArrow } from '../components/Buttons/ButtonArrow';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = ARTICLES.find((a) => a.slug === slug || a.id === slug);

  if (!article) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <Sparkles className="w-12 h-12 text-[#FFC94A]" />
        <h2 className="font-display text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
          Perspective Not Found
        </h2>
        <p className="text-[#857E70] dark:text-[#8F887A] max-w-md">
          The requested article could not be located in our journal archives.
        </p>
        <Link
          to="/insights"
          className="px-6 py-3 rounded-full bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] font-semibold text-sm"
        >
          Return to All Insights
        </Link>
      </div>
    );
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Subpage Atmospheric Hero */}
      <PageHero
        eyebrow={`${article.category} • ${article.date}`}
        title={article.title}
        description={article.excerpt}
        image={article.image}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insights', to: '/insights' },
          { label: article.category },
        ]}
      >
        <div className="flex items-center gap-4 text-xs text-[#857E70] dark:text-[#8F887A] pt-2">
          <span className="flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-[#FFC94A]" />
            <span>{article.readTime}</span>
          </span>
          <span>·</span>
          <span>By {article.author}</span>
        </div>
      </PageHero>

      {/* 02. Article Editorial Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Author Byline Block */}
        <div className="p-5 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FFC94A] flex items-center justify-center font-display font-semibold text-[#231C0A] text-sm">
              VG
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold text-[#211D16] dark:text-[#F3ECDF]">
                {article.author}
              </h4>
              <p className="text-xs text-[#857E70] dark:text-[#8F887A]">
                Published {article.date} · Hyderabad, India
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(
              `Read this article from Varnith Global: ${article.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E0D6C4] dark:border-[#2F2A20] text-xs font-medium text-[#211D16] dark:text-[#F3ECDF] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5 text-[#FFC94A]" />
            <span className="hidden sm:inline">Share</span>
          </a>
        </div>

        {/* Lead Callout Quote */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#FCF9F3] dark:bg-[#1C1913] border-l-4 border-[#FFC94A] border-y border-r border-[#E0D6C4] dark:border-[#2F2A20] shadow-md space-y-2">
          <Quote className="w-6 h-6 text-[#FFC94A]" />
          <p className="font-serif text-lg sm:text-xl italic text-[#211D16] dark:text-[#F3ECDF] leading-relaxed">
            "{article.excerpt}"
          </p>
        </div>

        {/* Article Body Paragraphs */}
        <div className="space-y-6 font-sans text-base sm:text-lg text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
          {article.content.map((para, idx) => (
            <p key={idx}>
              {para}
            </p>
          ))}
        </div>

        {/* Key Takeaways Callout Card */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#FFC94A]/10 border border-[#FFC94A]/30 space-y-3">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#231C0A] dark:text-[#FFC94A] block">
            Executive Summary & Takeaways
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-[#231C0A] dark:text-[#F3ECDF] list-disc list-inside leading-relaxed">
            <li>Niche capability vetting eliminates recruitment churn and reduces time-to-hire by over 40%.</li>
            <li>Hands-on production lab emulation prepares technical cohorts far better than passive slide certifications.</li>
            <li>Unifying talent acquisition, continuous education, and AI automation yields lasting operational velocity.</li>
          </ul>
        </div>

        {/* End of article discussion prompt */}
        <div className="pt-8 border-t border-[#E0D6C4] dark:border-[#2F2A20] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg font-medium text-[#211D16] dark:text-[#F3ECDF]">
              Have questions or need enterprise consultation?
            </h4>
            <p className="text-xs text-[#857E70] dark:text-[#8F887A]">
              Our advisory team is available to discuss your specific organizational roadmaps.
            </p>
          </div>
          <ButtonArrow
            label="Speak with an Advisor"
            variant="primary"
            to="/contact"
          />
        </div>
      </article>

      {/* 03. Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-12 border-t border-[#E0D6C4]/60 dark:border-[#2F2A20]/60">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#857E70] dark:text-[#8F887A] font-semibold block mb-1">
                More Reading
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
                Related Perspectives
              </h3>
            </div>
            <Link
              to="/insights"
              className="text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((art) => (
              <Link
                key={art.id}
                to={`/insights/${art.slug}`}
                className="group rounded-3xl p-6 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#1A1712]">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FFC94A]/20 text-[#231C0A] dark:text-[#FFD978]">
                    {art.category}
                  </span>
                  <h4 className="font-display text-lg font-semibold text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-xs text-[#4E493F] dark:text-[#C4BDAF] line-clamp-2 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 flex items-center justify-between text-xs font-semibold text-[#211D16] dark:text-[#FFC94A]">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

