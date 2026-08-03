import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { globalData } from '../../data/content';

export default function CTASection({
  title = "Ready to Prioritise Your Digestive & Fetal Health?",
  subtitle = "Schedule a consultation with our AIIMS-trained specialists today. Fast, confidential booking directly via our Contact page or WhatsApp.",
  isLight = true,
}) {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="bg-teal-500 rounded-3xl overflow-hidden relative"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-1/3 w-60 h-60 bg-teal-400/30 rounded-full -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-teal-600/30 rounded-full translate-y-1/2 pointer-events-none" />
          <div className="absolute top-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/4 pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center max-w-3xl mx-auto space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs uppercase tracking-widest font-bold text-white backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Direct Consultation Appointment</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-teal-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-teal-600 hover:bg-teal-50 font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us Page</span>
                <ArrowRight className="w-4 h-4 ml-1 opacity-70" />
              </Link>

              <a
                href={globalData.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-all duration-200 w-full sm:w-auto"
              >
                <span>Book via WhatsApp</span>
              </a>
            </div>

            {/* Trust badges */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/80 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> AIIMS-Trained Specialists</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> 24x7 Emergency Support</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Modern Diagnostics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
