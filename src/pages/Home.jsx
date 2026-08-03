import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Phone, MessageSquare,
  Ambulance, Building2, Stethoscope, CheckCircle2,
  Star, ChevronRight, Award, Cpu, UserCheck, FileText, HeartPulse, Smile,
  Activity
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import {
  globalData, homeData,
  whyOorjaData, teamData, testimonialsData, aboutData
} from '../data/content';
import MedicalImage from '../components/ui/MedicalImage';
import CTASection from '../components/ui/CTASection';

// Teal palette for this layout
const TEAL = '#14b8a6'; // teal-500
const TEAL_DARK = '#0d9488'; // teal-600

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};

/* ─── SERVICES QUICK BOOK CARDS ─────────────────────────────── */
const quickServices = [
  { icon: Stethoscope, label: 'Specialist Doctor', desc: 'AIIMS-trained Gastroenterologist and FMF-UK Certified Fetal Medicine Experts.' },
  { icon: Building2, label: 'In-patient Facility', desc: 'Daycare and admission facility with state-of-the-art equipment.' },
  { icon: Ambulance, label: 'Emergency', desc: '24x7 on-call emergency support for urgent gastro & fetal medicine needs.' },
];

/* ─── FACILITIES TABS ────────────────────────────────────────── */
const facilityTabs = [
  {
    label: 'Gastroenterology & Liver',
    image: '/service-1.jpg',
    title: 'Gastroenterology & Liver Care',
    desc: 'Comprehensive evaluation and treatment of all digestive disorders, fatty liver, hepatitis, jaundice, cirrhosis and endoscopic procedures by DM Gastroenterology specialist from AIIMS.',
  },
  {
    label: 'Advanced Endoscopy',
    image: '/service-6.jpg',
    title: 'Advanced Endoscopy / ERCP / EUS',
    desc: 'Minimally invasive diagnosis and treatment of GI tract, pancreas, liver and gallbladder problems with precision endoscopy equipment.',
  },
  {
    label: 'Fetal Medicine',
    image: '/service-7.jpg',
    title: 'High Definition 3D/4D Ultrasonography',
    desc: 'Advanced real-time imaging of your baby in the womb with state-of-the-art 3D/4D ultrasound technology by an FMF-UK certified specialist.',
  },
  {
    label: 'High Risk Pregnancy',
    image: '/service-9.jpg',
    title: 'High Risk Pregnancy Counselling',
    desc: 'Specialized monitoring and expert counselling for women with maternal health conditions, previous complications, or complex fetal concerns.',
  },
  {
    label: 'Fetal Echocardiography',
    image: '/service-11.jpg',
    title: 'Fetal Echocardiography',
    desc: 'Detailed structural and functional evaluation of the baby\'s heart for early detection of congenital cardiac defects.',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const featuredTestimonials = testimonialsData.reviews.slice(0, 3);

  return (
    <div className="overflow-hidden bg-white text-slate-900 font-sans">

      {/* ═══════════════════════════════════════════════════════════
          1. HERO SECTION
          Left: headline + CTAs + trust badge | Right: hero image + floating card
      ═══════════════════════════════════════════════════════════ */}
      <section className="pt-20 sm:pt-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 relative overflow-hidden min-h-[88vh] flex items-center isolate z-10">
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-cyan-300/10 rounded-full translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* LEFT COLUMN */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse inline-block" />
                  {homeData.hero.eyebrow}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]"
              >
                Exceptional Care,{' '}
                <span className="text-teal-500 block">Every Time</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p variants={fadeUp} custom={2} className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
                {homeData.hero.subtext}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-3">
                <a
                  href={globalData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-teal-200 transition-all duration-200"
                >
                  <span>Book Appointment</span>
                </a>
                <a
                  href={`tel:${globalData.contact.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 border border-slate-300 bg-white hover:border-teal-400 text-slate-700 hover:text-teal-600 font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>Find Doctor</span>
                </a>
              </motion.div>

              {/* Trust Badge: Stats row */}
              <motion.div variants={fadeUp} custom={4} className="flex items-center gap-4 pt-2">
                {/* Avatar stack */}
                <div className="flex -space-x-2.5">
                  {['/dr-harsh-jain.jpg', '/dr-ishita-agarwal.jpg', '/about-1.jpg'].map((src, i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow-sm bg-teal-100 flex-shrink-0">
                      <MedicalImage src={src} alt="doctor" className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
                <div>
                  <span className="font-bold text-slate-900 text-sm">10+ </span>
                  <span className="text-slate-500 text-sm">years of experience</span>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN: Hero image + floating cards */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Background teal blob shape */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] bg-teal-400/20 rounded-full" />
              </div>

              {/* Hero Banner Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-xl"
              >
                <img
                  src="/hero-banner.jpg"
                  alt="Oorja Gastro-Liver & Fetal Medicine Centre - Dr. Harsh Jain & Dr. Ishita Agarwal"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  onError={(e) => { e.target.src = '/hero-banner.png'; }}
                />
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          2. EASILY BOOK YOUR DOCTOR — TEAL BACKGROUND, 4 ICON CARDS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-teal-500 relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Easily Book Your Doctor
            </h2>
            <p className="text-teal-100 text-base sm:text-lg max-w-xl mx-auto">
              Two super-specialities under one roof — Gastroenterology, Hepatology & Maternal-Fetal Medicine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {quickServices.map((item, idx) => {
              const Icon = item.icon;
              const isHighlighted = item.label === 'Emergency';
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 ${isHighlighted
                    ? 'bg-white shadow-xl shadow-teal-700/20'
                    : 'bg-teal-600/50 hover:bg-teal-600/70 border border-teal-400/30'
                    }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${isHighlighted ? 'bg-teal-50 text-teal-500' : 'bg-white/10 text-white'
                    }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className={`font-bold text-base mb-2 ${isHighlighted ? 'text-slate-900' : 'text-white'}`}>
                    {item.label}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isHighlighted ? 'text-slate-500' : 'text-teal-100'}`}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          3. FACILITIES & SERVICES — WHITE, LEFT SIDEBAR TABS + RIGHT PANEL
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              <span className="text-teal-500">Facilities</span> and Services
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Advanced, ethical and patient-centred care — all under one roof at Oorja.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* Left: Tab List */}
            <div className="space-y-1.5">
              {facilityTabs.map((tab, idx) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${activeTab === idx
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-200'
                    : 'text-slate-700 hover:bg-teal-50 hover:text-teal-600 border border-transparent hover:border-teal-100'
                    }`}
                >
                  <span>{tab.label}</span>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${activeTab === idx ? 'translate-x-0.5' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
              <div className="pt-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Content Panel */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-5">
                {/* Image */}
                <div className="sm:col-span-2 h-56 sm:h-auto min-h-[220px] overflow-hidden">
                  <MedicalImage
                    src={facilityTabs[activeTab].image}
                    alt={facilityTabs[activeTab].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Text */}
                <div className="sm:col-span-3 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-[22px] font-bold text-slate-900 mb-3 tracking-tight">
                      {facilityTabs[activeTab].title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      {facilityTabs[activeTab].desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          5. ABOUT OORJA — WHITE, LEFT IMAGE + RIGHT TEXT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] sm:aspect-[4/5] border border-slate-100 max-h-[550px] w-full">
                <MedicalImage
                  src="/hospital-exterior.jpg"
                  alt="Oorja Hospital Exterior Facility"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-teal-500">
                {aboutData.eyebrow}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                A dedicated <span className="text-teal-500">super-speciality centre</span> for digestive health and fetal medicine services
              </h2>
              <p className="text-slate-500 text-base leading-relaxed">
                {aboutData.bodyCopy}
              </p>

              {/* Key highlights */}
              <ul className="space-y-3">
                {aboutData.highlights.slice(0, 4).map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {homeData.stats.map((stat, idx) => (
                  <div key={idx} className="bg-teal-50 rounded-2xl p-4 text-center border border-teal-100 hover:border-teal-300 transition-colors">
                    <div className="text-2xl font-extrabold text-teal-600">{stat.value}{stat.suffix}</div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm text-sm"
              >
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          6. WHY CHOOSE OORJA — TEAL BACKGROUND, 4 ICON CARDS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Why Choose Oorja?
            </h2>
            <p className="text-teal-100 text-base max-w-xl mx-auto">
              {whyOorjaData.subtext}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyOorjaData.reasons.slice(0, 4).map((reason, idx) => {
              const Icon = LucideIcons[reason.iconName] || LucideIcons.Award;
              return (
                <motion.div
                  key={reason.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{reason.title}</h3>
                  <p className="text-teal-100 text-xs leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/why-oorja"
              className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-teal-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm"
            >
              View All Differentiators <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          7. MEET OUR DOCTORS — WHITE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Meet Our <span className="text-teal-500">Doctors</span>
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              Experienced. Compassionate. Dedicated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamData.doctors.map((doctor, idx) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl overflow-hidden group transition-all duration-300"
              >
                {/* Photo */}
                <div className="w-full h-64 overflow-hidden bg-teal-50">
                  <MedicalImage
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  {/* Badge */}
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${doctor.accent === 'teal'
                    ? 'bg-teal-100 text-teal-700'
                    : 'bg-rose-100 text-rose-700'
                    }`}>
                    {doctor.accent === 'teal' ? 'Gastroenterology Lead' : 'Fetal Medicine Lead'}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4">{doctor.specialty}</p>
                  <div className="space-y-1.5 mb-5">
                    {doctor.qualifications.slice(0, 3).map((q, qi) => (
                      <div key={qi} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{q}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/team"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
                  >
                    View Full Profile <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          8. PATIENT TESTIMONIALS — TEAL BACKGROUND
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-teal-500 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              What Our Patients Say
            </h2>
            <p className="text-teal-100 text-base max-w-xl mx-auto">
              Genuine experiences from patients across Gastroenterology, Endoscopy and Prenatal care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials.map((review, idx) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-between"
              >
                {/* Stars */}
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{review.quote}"
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                    {review.service && (
                      <p className="text-xs text-teal-500 font-medium mt-0.5">{review.service}</p>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-teal-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 bg-white text-teal-600 hover:bg-teal-50 font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm"
            >
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          9. CTA SECTION — WHITE
      ═══════════════════════════════════════════════════════════ */}
      <CTASection isLight={true} />
    </div>
  );
}
