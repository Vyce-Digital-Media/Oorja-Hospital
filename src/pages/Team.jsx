import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HeartHandshake, Award } from 'lucide-react';
import { teamData } from '../data/content';
import DoctorCard from '../components/ui/DoctorCard';
import CTASection from '../components/ui/CTASection';

export default function Team() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Award className="w-3.5 h-3.5" />
              Medical Leadership
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {teamData.heading}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Meet our premier specialists combining rigorous AIIMS training, fellowship expertise from Apollo and Medanta, and a patient-first clinical philosophy.
            </p>
          </div>
        </div>
      </section>

      {/* 2. DOCTOR CARDS — TEAL SECTION */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Our Specialists
            </h2>
            <p className="text-teal-100 text-base max-w-xl mx-auto">
              Experienced. Compassionate. Dedicated to Your Digestive & Fetal Health.
            </p>
          </div>

          <div className="space-y-12">
            {/* Doctor 1 */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-0.5 bg-white/50 rounded-full" />
                <span className="text-xs uppercase font-bold tracking-widest text-white/70">Gastroenterology Department Lead</span>
              </div>
              <DoctorCard doctor={teamData.doctors[0]} index={0} isDetailView={true} isLight={false} />
            </div>

            {/* Doctor 2 */}
            <div>
              <div className="flex items-center gap-3 mb-6 justify-start lg:justify-end">
                <span className="text-xs uppercase font-bold tracking-widest text-white/70">Fetal Medicine Department Lead</span>
                <span className="w-10 h-0.5 bg-white/50 rounded-full" />
              </div>
              <div className="[&>div]:lg:flex-row-reverse">
                <DoctorCard doctor={teamData.doctors[1]} index={1} isDetailView={true} isLight={false} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLINICAL PHILOSOPHY BANNER — WHITE */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto text-center space-y-5">
            <div className="w-14 h-14 rounded-xl bg-teal-100 text-teal-500 flex items-center justify-center mx-auto">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Collaborative Healthcare Approach
            </h3>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We believe that true medical excellence comes from listening patiently to patients, explaining diagnosis and treatment options clearly without medical jargon, and following ethical, evidence-based standards at every single step.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-teal-600 uppercase tracking-wider">
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-teal-100 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> Evidence Based Treatment
              </span>
              <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl border border-teal-100 shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" /> Clear Patient Communication
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        title="Schedule a Consultation With Our Doctors"
        subtitle="Connect with Dr. Harsh Jain or Dr. Ishita Agarwal directly to discuss your digestive health or prenatal imaging needs."
        isLight={true}
      />
    </div>
  );
}
