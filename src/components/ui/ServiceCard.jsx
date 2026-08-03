import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import MedicalImage from './MedicalImage';

export default function ServiceCard({
  service,
  index = 0,
  accent = 'teal', // 'teal' | 'rose'
}) {
  const IconComponent = Icons[service.iconName] || Icons.Activity;

  const accentStyles = {
    teal: {
      border: 'border-slate-100 hover:border-teal-300',
      iconBg: 'bg-teal-50 text-teal-500 border border-teal-100 group-hover:bg-teal-500 group-hover:text-white',
      badge: 'bg-teal-50 text-teal-600 border border-teal-100',
      titleHover: 'group-hover:text-teal-600',
    },
    rose: {
      border: 'border-slate-100 hover:border-rose-300',
      iconBg: 'bg-rose-50 text-rose-500 border border-rose-100 group-hover:bg-rose-500 group-hover:text-white',
      badge: 'bg-rose-50 text-rose-600 border border-rose-100',
      titleHover: 'group-hover:text-rose-600',
    },
  };

  const style = accentStyles[accent] || accentStyles.teal;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group bg-white rounded-2xl p-6 sm:p-7 border shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 flex flex-col justify-between ${style.border}`}
    >
      <div>
        {/* Image with floating icon */}
        {service.image ? (
          <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-slate-100 relative mb-5 group-hover:border-slate-200 transition-all duration-500 flex-shrink-0">
            <MedicalImage
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-opacity duration-500" />
            <div className={`absolute top-3 left-3 z-10 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-md ${style.iconBg}`}>
              <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        ) : (
          <div className="mb-5">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${style.iconBg}`}>
              <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className={`text-lg sm:text-xl font-bold text-slate-900 mb-2 transition-colors leading-snug ${style.titleHover}`}>
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
      </div>

      {/* Footer */}
      <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
        <span>Oorja Specialised Care</span>
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${style.badge}`}>
          {accent === 'teal' ? 'Gastro & Liver' : 'Fetal Medicine'}
        </span>
      </div>
    </motion.div>
  );
}
