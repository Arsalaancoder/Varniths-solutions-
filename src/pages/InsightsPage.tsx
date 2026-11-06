import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/Common/PageHero';
import { ARTICLES } from '../data/content';
import { Calendar, Clock, ArrowUpRight, Search, Sparkles } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'Recruitment Trends', label: 'Recruitment Trends' },
    { id: 'Learning & Development', label: 'Learning & Development' },
    { id: 'AI & Digital Transformation', label: 'AI & Digital Transformation' },
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCat = selectedCategory === 'all' || art.category === selectedCategory;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = ARTICLES[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 01. Atmospheric Subpage Hero */}
      <PageHero
        eyebrow="The Varnith Global Journal"
        title="Field Notes, Industry Benchmarks & Insights."
        description="Perspectives from our talent directors and technical instructors on executive hiring, cloud infrastructure training, and practical enterprise AI."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80"
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insights' },
        ]}
      />

      {/* 02. Filter & Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-3 rounded-2xl glass-pill border border-[#E0D6C4] dark:border-[#2F2A20] shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#211D16] text-[#FCF9F3] dark:bg-[#FFC94A] dark:text-[#231C0A] shadow-sm'
                    : 'text-[#4E493F] dark:text-[#8F887A] hover:text-[#211D16] dark:hover:text-[#F3ECDF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:w-72">
            <Search className="w-4 h-4 text-[#857E70] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search perspectives..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#F5EFE4]/60 dark:bg-[#27231A] border border-[#E0D6C4] dark:border-[#2F2A20] text-xs sm:text-sm text-[#211D16] dark:text-[#F3ECDF] placeholder-[#857E70] focus:outline-none focus:ring-2 focus:ring-[#FFC94A]"
            />
          </div>
        </div>
      </section>

      {/* 03. Featured Top Editorial Article (Wayfare Hero Post) */}
      {selectedCategory === 'all' && !searchQuery && featuredArticle && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            to={`/insights/${featuredArticle.slug}`}
            className="group block rounded-[32px] overflow-hidden border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-[16/11] overflow-hidden bg-[#1A1712]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-semibold glass-pill bg-white/90 dark:bg-[#1C1913]/90 text-[#211D16] dark:text-[#F3ECDF] shadow-sm">
                  Featured Lead Article
                </span>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-10 lg:p-12 space-y-4">
                <div className="flex items-center gap-3 text-xs text-[#857E70] dark:text-[#8F887A]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FFC94A]" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors leading-snug">
                  {featuredArticle.title}
                </h3>

                <p className="text-sm text-[#4E493F] dark:text-[#C4BDAF] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center gap-2 text-xs font-semibold text-[#211D16] dark:text-[#FFC94A] group-hover:translate-x-1 transition-transform">
                  <span>Read Full Perspective</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* 04. Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <Link
              key={art.id}
              to={`/insights/${art.slug}`}
              className="group cursor-pointer flex flex-col justify-between space-y-4 rounded-3xl p-4 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#1A1712]">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold glass-pill bg-white/90 dark:bg-[#1C1913]/90 text-[#211D16] dark:text-[#F3ECDF] shadow-sm">
                  {art.category}
                </span>
              </div>

              <div className="space-y-3 p-2 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#857E70] dark:text-[#8F887A]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FFC94A]" />
                      <span>{art.date}</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-medium tracking-tight text-[#211D16] dark:text-[#F3ECDF] group-hover:text-[#211D16] dark:group-hover:text-[#FFC94A] transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#4E493F] dark:text-[#C4BDAF] line-clamp-3 leading-relaxed">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E0D6C4]/40 dark:border-[#2F2A20]/40 flex items-center justify-between text-xs font-semibold text-[#211D16] dark:text-[#FFC94A]">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 05. Newsletter Dispatch Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pb-12">
        <div className="rounded-[32px] p-8 sm:p-12 border border-[#E0D6C4] dark:border-[#2F2A20] bg-[#FCF9F3] dark:bg-[#1C1913] shadow-xl text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#FFC94A] font-semibold block">
            Direct to Your Inbox
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#211D16] dark:text-[#F3ECDF]">
            Stay Informed with Quarterly Intelligence
          </h3>
          <p className="text-sm text-[#4E493F] dark:text-[#C4BDAF] max-w-xl mx-auto leading-relaxed">
            Every quarter, we compile tech salary movements, DevOps hiring trends, and SAP certification demand across Hyderabad and India into one crisp briefing.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#FFC94A] hover:bg-[#FFD978] text-[#231C0A] font-semibold text-xs transition-colors"
            >
              Subscribe or Contact Our Editorial Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

