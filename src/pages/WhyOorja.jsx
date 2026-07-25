import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { whyOorjaData } from '../data/content';
import CTASection from '../components/ui/CTASection';
import * as LucideIcons from 'lucide-react';

export default function WhyOorja() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {whyOorjaData.eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {whyOorjaData.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              {whyOorjaData.subtext}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ALL REASONS — TEAL SECTION */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-2">The Oorja Difference</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Integrative, Ethical, & Patient-First Excellence
            </h2>
            <p className="text-teal-100 text-base max-w-xl mx-auto">
              Explore how our dual-speciality focus, top medical lineage, and thoughtful clinic design ensure superior healthcare outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOorjaData.reasons.map((reason, idx) => {
              const Icon = LucideIcons[reason.iconName] || LucideIcons.Award;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-bold text-base">{reason.title}</h3>
                    <span className="text-white/30 font-bold text-sm">0{reason.id}</span>
                  </div>
                  <p className="text-teal-100 text-xs leading-relaxed mb-4">{reason.description}</p>
                  {reason.featured && (
                    <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white/70 uppercase tracking-wider">
                      <span>Key Differentiator</span>
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. SUMMARY BANNER — WHITE */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-500 flex items-center justify-center text-2xl font-bold flex-shrink-0">
              7
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-slate-900 mb-2">7 Key Reasons to Choose Oorja Centre</h3>
              <p className="text-slate-500 text-sm">
                From AIIMS-trained expertise to our 24x7 on-call support — every aspect of our practice is designed to deliver excellence, trust, and patient peace of mind.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 text-xs font-bold text-teal-600 uppercase tracking-wider flex-shrink-0">
              {['Ethical Care', 'Evidence-Based', 'Advanced Tech'].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl border border-teal-100 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        title="Choose Surat's Most Trusted Clinical Team"
        subtitle="Experience evidence-based care delivered with genuine empathy and modern medical infrastructure."
        isLight={true}
      />
    </div>
  );
}
