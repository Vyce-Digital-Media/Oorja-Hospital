import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Award, Users, Stethoscope, Clock, HeartPulse, Building2 } from 'lucide-react';
import { globalData, aboutData, whyOorjaData } from '../data/content';
import * as LucideIcons from 'lucide-react';
import CTASection from '../components/ui/CTASection';
import MedicalImage from '../components/ui/MedicalImage';

export default function About() {
  const iconMap = [Award, HeartPulse, Stethoscope, Users, Building2, Clock];

  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER BANNER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse inline-block" />
              {aboutData.eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {aboutData.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              {aboutData.bodyCopy}
            </p>
          </div>
        </div>
      </section>

      {/* 2. VISUAL FEATURE SHOWCASE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[3/4] sm:aspect-[4/5] max-h-[550px] w-full group">
                <MedicalImage
                  src="/hospital-exterior.jpg"
                  alt="Oorja Super-Speciality Centre Facility"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700"
                />
              </div>
              {/* Floating Quality Box */}
              <div className="absolute -bottom-6 -right-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-7 h-7 text-teal-500" />
                  <span className="font-bold text-slate-900 text-base">Ethical Medical Care</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Evidence-based treatment protocols following international current clinical standards.
                </p>
              </div>
            </motion.div>

            {/* Right: Narrative */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                Modern, Reliable & Accessible Healthcare Under One Roof
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                At Oorja Gastro-Liver and Fetal Medicine Centre, our core philosophy surrounds patient dignity, scientific rigor, and holistic comfort. Whether you are seeking comprehensive evaluation for a liver condition, precision therapeutic GI endoscopy, or high-definition 3D/4D fetal sonography, our suite is designed to give you peace of mind.
              </p>
              <div className="pt-4 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-teal-50 rounded-2xl p-5 text-center border border-teal-100">
                    <span className="text-2xl font-extrabold text-teal-600 block mb-1">AIIMS</span>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Trained Medical Leadership</span>
                  </div>
                  <div className="bg-rose-50 rounded-2xl p-5 text-center border border-rose-100">
                    <span className="text-2xl font-extrabold text-rose-600 block mb-1">FMF-UK</span>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Certified Fetal Specialists</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2.5. FACILITY HIGHLIGHTS — WHITE/GREEN THEME */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full -translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs font-extrabold uppercase tracking-widest mb-2">Our Capabilities</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3">
              Facility Highlights & Infrastructure
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              Equipped with state-of-the-art diagnostic technology and patient-friendly daycare and admission facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.highlights.map((highlight, idx) => {
              const IconComp = iconMap[idx % iconMap.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white hover:bg-teal-50/50 border border-slate-200 hover:border-teal-400 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-6 h-6 text-teal-600" />
                  </div>
                  <p className="text-slate-900 font-bold text-sm sm:text-base leading-relaxed">{highlight}</p>
                  <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider">
                    <span>Oorja Facility</span>
                    <CheckCircle2 className="w-4 h-4 text-teal-600" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY OORJA SHOULD BE YOUR TOP CHOICE */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <p className="text-teal-100 text-xs font-bold uppercase tracking-widest mb-2">The Oorja Difference</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Why Oorja Should Be Your Top Choice?
            </h2>
            <p className="text-teal-100 text-base max-w-xl mx-auto">
              Explore how our dual-speciality focus, top medical lineage, and thoughtful clinic design ensure superior healthcare outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyOorjaData.reasons.map((reason, idx) => {
              const Icon = LucideIcons[reason.iconName] || LucideIcons.Award;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-bold text-base">{reason.title}</h3>
                      <span className="text-white/30 font-bold text-sm">0{idx + 1}</span>
                    </div>
                    <p className="text-teal-100 text-xs leading-relaxed mb-4">{reason.description}</p>
                  </div>
                  <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white/70 uppercase tracking-wider">
                    <span>Key Differentiator</span>
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        title="Experience Advanced Clinical Excellence"
        subtitle="Our team is ready to provide personalized consultation and support for your health journey."
        isLight={true}
      />
    </div>
  );
}
