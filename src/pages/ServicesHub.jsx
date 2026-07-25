import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, HeartPulse, CheckCircle2 } from 'lucide-react';
import { gastroServicesData, fetalServicesData } from '../data/content';
import ServiceCard from '../components/ui/ServiceCard';
import CTASection from '../components/ui/CTASection';

export default function ServicesHub() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse inline-block" />
              Specialised Clinical Care
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Our Super-Speciality Medical Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Oorja Gastro-Liver and Fetal Medicine Centre integrates advanced clinical science, therapeutic GI endoscopy, and high-definition prenatal imaging under one trusted roof in Surat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TWO DEPARTMENT SELECTOR */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">

            {/* Gastro Department */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 border border-teal-100 hover:border-teal-400 shadow-lg hover:shadow-teal-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-teal-50 border border-teal-100 text-teal-500 flex items-center justify-center mb-5 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
                  <Activity className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 block mb-1">Department 01</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Gastroenterology & Liver Services
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Comprehensive diagnosis and therapeutic interventions for digestive disorders, fatty liver, obesity, pancreatobiliary diseases, and GI oncology.
                </p>
                <ul className="space-y-2 mb-6">
                  {gastroServicesData.services.slice(0, 4).map((s) => (
                    <li key={s.id} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                      <span>{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/services/gastroenterology"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm text-sm"
              >
                Explore All 6 Gastro Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Fetal Department */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-3xl p-8 border border-rose-100 hover:border-rose-400 shadow-lg hover:shadow-rose-50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-rose-50 border border-rose-100 text-rose-500 flex items-center justify-center mb-5 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <HeartPulse className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-1">Department 02</span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">
                  Fetal Medicine & HD Scans
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Advanced 3D/4D ultrasonography, multiple pregnancy management, fetal echocardiography, and high-risk maternal-fetal counseling.
                </p>
                <ul className="space-y-2 mb-6">
                  {fetalServicesData.services.slice(0, 4).map((s) => (
                    <li key={s.id} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                      <span>{s.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/services/fetal-medicine"
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm text-sm"
              >
                Explore All 6 Fetal Services <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ALL GASTRO SERVICES — TEAL SECTION */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-1">Department Overview</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{gastroServicesData.title}</h2>
              <p className="text-teal-100 text-sm mt-1">Led by Dr. Jain Harsh Prakash, DM Gastroenterology (AIIMS)</p>
            </div>
            <Link to="/services/gastroenterology" className="text-sm font-bold text-white hover:text-teal-100 flex items-center gap-1">
              View Department Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gastroServicesData.services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} accent="teal" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALL FETAL SERVICES — WHITE SECTION */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-1">Department Overview</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{fetalServicesData.title}</h2>
              <p className="text-slate-500 text-sm mt-1">Led by Dr. Ishita Agarwal, Fetal Medicine Specialist & FMF-UK Certified</p>
            </div>
            <Link to="/services/fetal-medicine" className="text-sm font-bold text-rose-500 hover:text-rose-700 flex items-center gap-1">
              View Department Page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fetalServicesData.services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} accent="rose" />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CTASection isLight={true} />
    </div>
  );
}
