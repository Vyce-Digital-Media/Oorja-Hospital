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
      className="group bg-white hover:bg-teal-50/50 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-teal-400 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Quote Icon motif */}
      <div className="absolute -top-4 -right-4 text-teal-500/10 group-hover:text-teal-500/15 group-hover:scale-110 transition-all duration-700 pointer-events-none">
        <Quote className="w-32 h-32 rotate-12" />
      </div>

      <div className="relative z-10">
        {/* Rating stars */}
        <div className="flex items-center gap-1 mb-6 text-amber-500">
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Quote text */}
        <p className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed mb-8 italic font-medium">
          "{review.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="relative z-10 pt-6 border-t border-slate-100 flex items-center justify-between">
        <div>
          <h4 className="font-serif font-bold text-slate-900 text-lg group-hover:text-teal-600 transition-colors">
            {review.author}
          </h4>
          {review.service && (
            <span className="text-xs text-teal-600 font-bold block mt-0.5">
              Verified Patient • {review.service}
            </span>
          )}
        </div>
        <div className="w-10 h-10 rounded-xl bg-teal-50 group-hover:bg-teal-100 border border-teal-100 flex items-center justify-center text-teal-600 transition-colors">
          <Quote className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
