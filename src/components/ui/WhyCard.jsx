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
      borderHover: 'hover:border-cyan-400',
      iconBg: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:bg-cyan-400 group-hover:text-navy',
      featuredBg: 'bg-gradient-to-br from-[#0B192C] via-[#0D2547] to-[#060F1E] border-cyan-500/40',
    },
    rose: {
      borderHover: 'hover:border-rose',
      iconBg: 'bg-rose-500/10 text-rose border border-rose/30 group-hover:bg-rose group-hover:text-white',
      featuredBg: 'bg-gradient-to-br from-[#0B192C] via-[#1F122B] to-[#060F1E] border-rose/40',
    },
    gold: {
      borderHover: 'hover:border-blue-400',
      iconBg: 'bg-blue-600/10 text-blue-400 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white',
      featuredBg: 'bg-gradient-to-br from-[#0B192C] via-[#0D2547] to-[#060F1E] border-blue-500/40',
    },
  };

  const style = accentStyles[reason.accent] || accentStyles.teal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-2xl p-6 sm:p-8 border transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] flex flex-col justify-between ${
        style.borderHover
      } ${
        isFeatured
          ? `${style.featuredBg} md:col-span-2 shadow-2xl`
          : 'bg-[#0B192C]/80 border-blue-500/20'
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
          <span className="font-serif text-xl sm:text-2xl font-bold text-blue-500/30 group-hover:text-cyan-400/60 transition-colors">
            0{reason.id}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-serif font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors leading-snug ${
            isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {reason.title}
        </h3>

        {/* Description */}
        <p
          className={`text-slate-400 font-sans leading-relaxed ${
            isFeatured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
          }`}
        >
          {reason.description}
        </p>
      </div>

      {/* Featured footer tag */}
      {isFeatured && (
        <div className="pt-6 mt-6 border-t border-blue-500/20 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan-400">
          <span>Key Differentiator</span>
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        </div>
      )}
    </motion.div>
  );
}
