import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  accent = 'gold', // 'gold' | 'teal' | 'rose'
  className = '',
}) {
  const accentColors = {
    gold: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    teal: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    rose: 'text-rose border-rose/30 bg-rose-500/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`space-y-3.5 mb-12 sm:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs uppercase tracking-widest font-bold shadow-sm ${accentColors[accent] || accentColors.gold}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
