import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function WhyCard({
  reason,
  index = 0,
}) {
  const IconComponent = Icons[reason.iconName] || Icons.Award;
  const isFeatured = reason.featured;

  const accentStyles = {
    teal: {
      borderHover: 'hover:border-teal-400',
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100 group-hover:bg-teal-600 group-hover:text-white',
      featuredBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/60 border-teal-200 shadow-md',
    },
    rose: {
      borderHover: 'hover:border-rose-400',
      iconBg: 'bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white',
      featuredBg: 'bg-gradient-to-br from-rose-50/90 via-white to-orange-50/60 border-rose-200 shadow-md',
    },
    gold: {
      borderHover: 'hover:border-teal-400',
      iconBg: 'bg-teal-50 text-teal-600 border border-teal-100 group-hover:bg-teal-600 group-hover:text-white',
      featuredBg: 'bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/60 border-teal-200 shadow-md',
    },
  };

  const style = accentStyles[reason.accent] || accentStyles.teal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-2xl p-6 sm:p-8 border transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-sm hover:shadow-xl flex flex-col justify-between ${
        style.borderHover
      } ${
        isFeatured
          ? `${style.featuredBg} md:col-span-2 shadow-lg`
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div>
        {/* Top Header with Icon & Index number */}
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${style.iconBg}`}
          >
            <IconComponent className="w-7 h-7 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-bold text-slate-300 group-hover:text-teal-600 transition-colors">
            0{reason.id}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-sans font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors leading-snug ${
            isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {reason.title}
        </h3>

        {/* Description */}
        <p
          className={`text-slate-600 font-sans leading-relaxed ${
            isFeatured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}
        >
          {reason.description}
        </p>
      </div>

      {/* Featured footer tag */}
      {isFeatured && (
        <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-teal-600">
          <span>Key Differentiator</span>
          <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
        </div>
      )}
    </motion.div>
  );
}
