import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calendar, Clock, ArrowRight, Share2, Sparkles, User, Heart, ChevronRight, BookOpen } from 'lucide-react';
import { blogCategories, blogArticles } from '../data/blogData';
import CTASection from '../components/ui/CTASection';
import MedicalImage from '../components/ui/MedicalImage';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return blogArticles.filter(art => {
      const matchesCategory = activeCategory === "All" || art.category === activeCategory;
      const matchesSearch = 
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);


  const handleShare = (art) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };



  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-slate-50 text-slate-900 min-h-screen">

      {/* 1. HERO HEADER WITH SEARCH — WHITE & GREEN THEME */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-emerald-50 text-slate-900 border-b border-teal-100/80 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-300/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-widest mb-6 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-teal-600" />
              Oorja Medical & Wellness Insights
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
            >
              Health Wisdom From <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Surat's Specialists</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Evidence-based medical articles, preventive digestive guidance, and maternal health advice authored by our AIIMS & FMF-UK doctors.
            </motion.p>

            {/* Live Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative max-w-xl mx-auto shadow-xl rounded-2xl border border-teal-100 bg-white"
            >
              <div className="relative flex items-center">
                <Search className="absolute left-5 w-5 h-5 text-teal-600 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search symptoms, fatty liver, pregnancy, diet tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-transparent hover:bg-slate-50/50 focus:bg-white border-none text-slate-900 placeholder:text-slate-400 text-sm sm:text-base outline-none transition-all duration-200"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="sticky top-16 sm:top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {blogCategories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-teal-500 text-white shadow-md shadow-teal-500/25 scale-105"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MAIN BLOG CONTENT */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* No Results Fallback */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-500">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Found</h3>
            <p className="text-slate-500 text-sm mb-6">
              We couldn't find any articles matching "{searchQuery}". Try adjusting your search term or select "All Categories".
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="px-6 py-2.5 bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Article Cards Grid — Uniform size, 3 in top row, 2 in bottom row (centered) */}
        <div className="flex flex-wrap justify-center gap-8 items-stretch">
          {filteredArticles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              onClick={() => setSelectedArticle(art)}
              className="w-full sm:w-[calc((100%_-_2rem)_/_2)] lg:w-[calc((100%_-_4rem)_/_3)] bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer hover:-translate-y-1.5"
            >
              {/* Card Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <div className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                    {art.category}
                  </div>
                  {art.featured && (
                    <div className="bg-teal-500 text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </div>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-teal-500" /> {art.readTime}
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors leading-snug mb-3">
                    {art.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                {/* Author & CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-700">{art.author.name}</span>
                  </div>

                  <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>



      {/* 5. ARTICLE READING MODAL / POP-OVER */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden my-auto relative border border-slate-100"
            >
              {/* Top Bar / Close */}
              <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-lg">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium sm:block hidden">
                    {selectedArticle.readTime}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleShare(selectedArticle)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {copiedLink ? "Link Copied!" : "Share"}
                  </button>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-600 transition-colors"
                    title="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-10 lg:p-12">
                {/* Title & Subtitle */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                  {selectedArticle.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
                  {selectedArticle.subtitle}
                </p>

                {/* Author Info Banner */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-lg flex-shrink-0 shadow-sm">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">{selectedArticle.author.name}</h4>
                    <p className="text-xs text-teal-600 font-medium">{selectedArticle.author.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Published on {selectedArticle.date} • Oorja Super-Speciality Centre</p>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/9] shadow-md">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Render HTML Medical Article Content */}
                <div 
                  className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h3:text-xl sm:prose-h3:text-2xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-teal-600 hover:prose-a:text-teal-500"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />

                {/* Bottom Close & Consultation Callout */}
                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="font-bold text-slate-900 text-sm">Need a specialized consultation?</p>
                    <p className="text-xs text-slate-500">Book an appointment with {selectedArticle.author.name}.</p>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href="/contact"
                      className="flex-1 sm:flex-initial px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-xl text-xs font-bold text-center transition-all shadow-sm"
                    >
                      Book Consultation
                    </a>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. CTA SECTION */}
      <CTASection
        title="Ready to Take Control of Your Health?"
        subtitle="Schedule your diagnostic scan or specialist gastroenterology consultation at Surat's most trusted facility."
        isLight={true}
      />
    </div>
  );
}
