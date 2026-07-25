import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import MedicalImage from './MedicalImage';

export default function DoctorCard({ doctor, index = 0, isDetailView = false, isLight = false }) {
  const accentStyles = {
    teal: {
      badge: isLight ? 'bg-blue-50 text-blue-700 border-blue-200' : 'bg-teal-light text-teal border-teal/30',
      highlight: isLight ? 'text-blue-600' : 'text-teal',
      borderHover: isLight ? 'hover:border-blue-600' : 'hover:border-gold',
    },
    rose: {
      badge: isLight ? 'bg-rose-50 text-rose-700 border-rose-200' : 'bg-rose-light text-rose border-rose/30',
      highlight: isLight ? 'text-rose-600' : 'text-rose',
      borderHover: isLight ? 'hover:border-rose-600' : 'hover:border-gold',
    },
  };

  const style = accentStyles[doctor.accent] || accentStyles.teal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`group rounded-2xl overflow-hidden border shadow-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.2)] transition-all duration-500 flex flex-col ${style.borderHover} ${
        isLight
          ? 'bg-white border-slate-200 text-slate-900 shadow-md hover:shadow-2xl'
          : 'bg-[#0B192C]/80 border-blue-500/20 text-white'
      } ${
        isDetailView && doctor.image ? 'lg:flex-row lg:items-center gap-8 lg:p-10 p-6' : isDetailView ? 'p-8 sm:p-12' : 'p-6 sm:p-8'
      }`}
    >
      {/* Doctor Photo with Gold Frame */}
      {doctor.image && (
        <div
          className={`relative overflow-hidden rounded-2xl flex-shrink-0 ${
            isLight ? 'bg-slate-100' : 'bg-navy'
          } ${
            isDetailView ? 'w-full lg:w-80 xl:w-96 h-80 sm:h-96 lg:h-auto self-stretch' : 'w-full h-72 sm:h-80 mb-6'
          }`}
        >
          <MedicalImage
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-all duration-700 ease-out"
          />

          {/* Gold hairline frame effect */}
          <div className="absolute inset-3 border border-cyan-500/40 rounded-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Slide-Up Hover Profile Overlay (if not already on detail view) */}
          {!isDetailView && (
            <Link
              to="/team"
              className={`absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex items-end justify-between ${
                isLight
                  ? 'bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent text-white'
                  : 'bg-gradient-to-t from-navy/95 via-navy/70 to-transparent text-white'
              }`}
            >
              <div>
                <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400 block mb-1">
                  AIIMS Trained Specialist
                </span>
                <span className="text-sm font-medium flex items-center gap-1">
                  View Full Profile <ArrowUpRight className="w-4 h-4 text-cyan-400" />
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
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold tracking-wide uppercase ${style.badge}`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{doctor.accent === 'teal' ? 'Gastroenterology Lead' : 'Fetal Medicine Lead'}</span>
            </span>
          </div>

          {/* Name */}
          <h3 className={`text-2xl sm:text-3xl font-sans font-bold mb-2 transition-colors ${
            isLight ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-cyan-400'
          }`}>
            {doctor.name}
          </h3>

          <p className={`text-sm sm:text-base font-semibold mb-6 leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {doctor.specialty}
          </p>

          {/* Qualifications List */}
          <div className="space-y-2 mb-6">
            <h4 className={`text-xs uppercase font-bold tracking-wider mb-2 flex items-center gap-1.5 ${
              isLight ? 'text-slate-900' : 'text-white'
            }`}>
              <span>Qualifications & Credentials</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {doctor.qualifications.map((qual, qIdx) => (
                <li
                  key={qIdx}
                  className={`flex items-start gap-2 text-xs sm:text-sm p-2.5 rounded-xl border font-medium ${
                    isLight
                      ? 'text-slate-700 bg-slate-50 border-slate-200'
                      : 'text-slate-200 bg-white/5 border-white/10'
                  }`}
                >
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${style.highlight}`} />
                  <span>{qual}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bio text if in detail view */}
          {isDetailView && doctor.bioText && (
            <div className={`pt-4 border-t ${isLight ? 'border-slate-200' : 'border-blue-500/20'}`}>
              <p className={`text-sm sm:text-base leading-relaxed font-sans ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {doctor.bioText}
              </p>
            </div>
          )}
        </div>

        {/* CTA footer in teaser view */}
        {!isDetailView && (
          <div className={`pt-4 mt-2 border-t flex items-center justify-between ${isLight ? 'border-slate-200' : 'border-blue-500/20'}`}>
            <span className={`text-xs font-semibold ${isLight ? 'text-slate-500' : 'text-slate-500'}`}>Surat Super-Specialist</span>
            <Link
              to="/team"
              className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider transition-colors ${
                isLight ? 'text-blue-600 hover:text-slate-900' : 'text-cyan-400 hover:text-white'
              }`}
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
