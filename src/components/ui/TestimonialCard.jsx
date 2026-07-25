import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

export default function TestimonialCard({
  review,
  index = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-[#0B192C]/80 hover:bg-[#0D2547] rounded-2xl p-6 sm:p-8 border border-blue-500/20 hover:border-cyan-400 shadow-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Quote Icon motif */}
      <div className="absolute -top-4 -right-4 text-cyan-500/10 group-hover:text-cyan-500/20 group-hover:scale-110 transition-all duration-700 pointer-events-none">
        <Quote className="w-32 h-32 rotate-12" />
      </div>

      <div className="relative z-10">
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-6 text-amber-400">
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-slate-200 font-sans text-base sm:text-lg leading-relaxed mb-8 italic">
          "{review.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="relative z-10 pt-6 border-t border-blue-500/20 flex items-center justify-between">
        <div>
          <h4 className="font-serif font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
            {review.author}
          </h4>
          {review.service && (
            <span className="text-xs text-slate-400 font-medium block mt-0.5">
              Verified Patient • {review.service}
            </span>
          )}
        </div>
        <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-400 transition-colors">
          <Quote className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
