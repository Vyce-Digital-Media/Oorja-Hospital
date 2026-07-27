import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import MedicalImage from './MedicalImage';

export default function DoctorCard({ doctor, index = 0, isDetailView = false, isLight = true }) {
  const accentStyles = {
    teal: {
      badge: 'bg-teal-50 text-teal-700 border-teal-200',
      highlight: 'text-teal-600',
      borderHover: 'hover:border-teal-500',
    },
    rose: {
      badge: 'bg-rose-50 text-rose-700 border-rose-200',
      highlight: 'text-rose-600',
      borderHover: 'hover:border-rose-500',
    },
  };

  const style = accentStyles[doctor.accent] || accentStyles.teal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-3xl overflow-hidden border bg-white border-slate-200/80 text-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col ${style.borderHover} ${
        isDetailView && doctor.image ? 'lg:flex-row lg:items-center gap-8 lg:p-10 p-6' : isDetailView ? 'p-8 sm:p-12' : 'p-6 sm:p-8'
      }`}
    >
      {/* Doctor Photo with Frame */}
      {doctor.image && (
        <div
          className={`relative overflow-hidden rounded-2xl flex-shrink-0 bg-teal-50/60 border border-teal-100/50 ${
            isDetailView ? 'w-full lg:w-80 xl:w-96 h-80 sm:h-96 lg:h-auto self-stretch' : 'w-full h-72 sm:h-80 mb-6'
          }`}
        >
          <MedicalImage
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />

          {/* Green hairline frame effect */}
          <div className="absolute inset-3 border border-teal-400/40 rounded-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Slide-Up Hover Profile Overlay (if not already on detail view) */}
          {!isDetailView && (
            <Link
              to="/team"
              className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end justify-between bg-gradient-to-t from-teal-900/95 via-teal-900/70 to-transparent text-white"
            >
              <div>
                <span className="text-xs uppercase font-semibold tracking-widest text-teal-300 block mb-1">
                  AIIMS Trained Specialist
                </span>
                <span className="text-sm font-medium flex items-center gap-1">
                  View Full Profile <ArrowUpRight className="w-4 h-4 text-teal-300" />
                </span>
              </div>
            </Link>
          )}
        </div>
      )}

      {/* Doctor Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Specialty Tag */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-extrabold tracking-wide uppercase ${style.badge}`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{doctor.accent === 'teal' ? 'Gastroenterology Lead' : 'Fetal Medicine Lead'}</span>
            </span>
          </div>

          {/* Name */}
          <h3 className="text-2xl sm:text-3xl font-sans font-extrabold mb-2 text-slate-900 group-hover:text-teal-600 transition-colors">
            {doctor.name}
          </h3>

          <p className="text-sm sm:text-base font-bold mb-6 leading-relaxed text-teal-600">
            {doctor.specialty}
          </p>

          {/* Qualifications List */}
          <div className="space-y-2.5 mb-6">
            <h4 className="text-xs uppercase font-extrabold tracking-wider mb-2 flex items-center gap-1.5 text-slate-900">
              <span>Qualifications & Credentials</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {doctor.qualifications.map((qual, qIdx) => (
                <li
                  key={qIdx}
                  className="flex items-start gap-2 text-xs sm:text-sm p-3 rounded-xl border font-semibold text-slate-700 bg-teal-50/40 border-teal-100/80 hover:bg-teal-50 hover:border-teal-300 transition-all shadow-2xs"
                >
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${style.highlight}`} />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bio text if in detail view */}
          {isDetailView && doctor.bioText && (
            <div className="pt-5 border-t border-slate-100">
              <p className="text-sm sm:text-base leading-relaxed font-sans text-slate-600">
                {doctor.bioText}
              </p>
            </div>
          )}
        </div>

        {/* CTA footer in teaser view */}
        {!isDetailView && (
          <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500">Surat Super-Specialist</span>
            <Link
              to="/team"
              className="inline-flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
