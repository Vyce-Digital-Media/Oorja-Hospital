import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Heart, Sparkles } from 'lucide-react';
import { testimonialsData } from '../data/content';
import TestimonialCard from '../components/ui/TestimonialCard';
import CTASection from '../components/ui/CTASection';

export default function Testimonials() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              Verified Patient Reviews
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {testimonialsData.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Read real stories of recovery, accurate clinical diagnosis, and compassionate prenatal care from patients across Surat and Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUST SUMMARY + REVIEWS — TEAL */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Trust Summary Row */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Consistently 5-Star Rated Care</h3>
                <p className="text-sm text-slate-500">
                  Reflecting our commitment to ethical medical consultation and calm, welcoming hospital environments.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 bg-teal-50 px-4 py-2 rounded-xl border border-teal-100">
                <CheckCircle2 className="w-4 h-4 text-teal-500" /> Verified Gastro Reviews
              </span>
              <span className="flex items-center gap-1.5 bg-rose-50 px-4 py-2 rounded-xl border border-rose-100">
                <CheckCircle2 className="w-4 h-4 text-rose-500" /> Verified Fetal Scans
              </span>
            </div>
          </div>

          {/* Masonry / 2-Col Grid of Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-6">
              {testimonialsData.reviews
                .filter((_, idx) => idx % 2 === 0)
                .map((review, idx) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(review.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed italic mb-5">"{review.quote}"</p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                        {review.service && (
                          <p className="text-xs text-teal-500 font-medium mt-0.5">{review.service}</p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
            <div className="space-y-6 md:pt-10">
              {testimonialsData.reviews
                .filter((_, idx) => idx % 2 === 1)
                .map((review, idx) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.05 }}
                    className="bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(review.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed italic mb-5">"{review.quote}"</p>
                    </div>
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                        {review.service && (
                          <p className="text-xs text-teal-500 font-medium mt-0.5">{review.service}</p>
                        )}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-teal-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Bottom gratitude */}
          <div className="mt-16 text-center space-y-3">
            <Heart className="w-8 h-8 text-white mx-auto animate-pulse" />
            <h4 className="font-bold text-white text-2xl">We Are Grateful For Our Patients' Trust</h4>
            <p className="text-sm text-teal-100 max-w-lg mx-auto leading-relaxed">
              Every review motivates our team to continually uphold the highest standards of diagnostic precision and patient comfort.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection
        title="Experience Our Patient-Centred Healthcare"
        subtitle="Book your appointment today to consult with our highly qualified gastroenterology and fetal medicine team."
        isLight={true}
      />
    </div>
  );
}
