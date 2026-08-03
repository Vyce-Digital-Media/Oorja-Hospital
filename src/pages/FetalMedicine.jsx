import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, CheckCircle2, MessageSquare } from 'lucide-react';
import { globalData, fetalServicesData } from '../data/content';
import ServiceCard from '../components/ui/ServiceCard';
import CTASection from '../components/ui/CTASection';

export default function FetalMedicine() {
  return (
    <div className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">

      {/* 1. PAGE HEADER */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-rose-50 via-white to-pink-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-6">
              <HeartPulse className="w-3.5 h-3.5 animate-pulse" />
              Specialised Department
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              {fetalServicesData.title}
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              High-definition 3D/4D pregnancy ultrasonography, multiple pregnancy monitoring, fetal echocardiography, and high-risk maternal Counselling.
            </p>
            {/* Doctor Lead Badge */}
            <div className="mt-8 inline-flex items-center gap-3 p-4 rounded-2xl bg-white border border-rose-100 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm">IA</div>
              <div>
                <span className="text-xs uppercase font-bold text-rose-500 tracking-wider block">Department Lead</span>
                <span className="font-bold text-slate-900 text-sm block">Dr. Ishita Agarwal</span>
                <span className="text-xs text-slate-400">AIIMS Trained, Fetal Fellowship (Apollo, Delhi), FMF-UK Certified</span>
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
                <span className="text-xs font-bold uppercase tracking-widest text-rose-500 block mb-3">What We Scan & Monitor</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight mb-3">
                  Advanced Prenatal & Maternal Care
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our state-of-the-art ultrasound machine delivers high-definition fetal sonography, helping monitor baby's development with precision.
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2.5 pt-2 border-t border-slate-100">
                {['3D/4D Real-life Womb Imaging', 'Twin & Triplet Pregnancy Care', 'Fetal Echocardiography & Brain Scans', 'FMF-UK Certified Standards'].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Booking Card */}
              <div className="bg-rose-50 border border-rose-100 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-slate-900 text-base">Schedule Your Fetal Scan</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Book your pregnancy scan or high-risk maternal Counselling consultation directly via WhatsApp.
                </p>
                <a
                  href={globalData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold w-full py-3 rounded-xl text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right Card Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {fetalServicesData.services.map((service, idx) => (
                <ServiceCard key={service.id} service={service} index={idx} accent="rose" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CTASection
        title="Consult With Dr. Ishita Agarwal"
        subtitle="Schedule your pregnancy scan today with our compassionate, FMF-UK certified maternal-fetal specialist."
        isLight={true}
      />
    </div>
  );
}
