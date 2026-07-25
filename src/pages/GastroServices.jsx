import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2, MessageSquare } from 'lucide-react';
import { globalData, gastroServicesData } from '../data/content';
import ServiceCard from '../components/ui/ServiceCard';
import CTASection from '../components/ui/CTASection';
import MedicalImage from '../components/ui/MedicalImage';

export default function GastroServices() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              Specialised Department
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {gastroServicesData.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Comprehensive diagnosis and evidence-based therapeutic management for digestive diseases, liver disorders, obesity, and pancreatobiliary conditions.
            </p>
            {/* Doctor Lead Badge */}
            <div className="mt-8 inline-flex items-center gap-3 p-4 rounded-2xl bg-white border border-teal-100 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-sm">HJ</div>
              <div>
                <span className="text-xs uppercase font-bold text-teal-500 tracking-wider block">Department Lead</span>
                <span className="font-bold text-slate-900 text-sm block">Dr. Jain Harsh Prakash</span>
                <span className="text-xs text-slate-400">DM Gastroenterology (AIIMS), Ex-Consultant (Medanta)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STICKY HEADING + CARD GRID */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Sticky Left Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 self-start space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 block mb-3">What We Treat & Diagnose</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-3">
                  Precision GI & Liver Healthcare
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our endoscopy suite is equipped with advanced image enhancement technology for accurate early diagnosis and minimally invasive therapeutic interventions.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {['State-of-the-art Endoscopy Suite', 'Daycare Endoscopic Facilities', 'GI Oncology Screening & Surveillance', 'Personalized Obesity Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Booking Card */}
              <div className="bg-teal-50 border border-teal-100 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-slate-900 text-base">Need Immediate Consultation?</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Speak directly with our clinical staff or book an appointment online via WhatsApp.
                </p>
                <a
                  href={globalData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold w-full py-3 rounded-xl text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right Card Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {gastroServicesData.services.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} accent="teal" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection
        title="Consult With Dr. Jain Harsh Prakash"
        subtitle="Schedule your appointment today for personalized evaluation and evidence-based treatment."
        isLight={true}
      />
    </div>
  );
}
