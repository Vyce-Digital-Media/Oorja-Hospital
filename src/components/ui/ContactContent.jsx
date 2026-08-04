import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Clock, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { globalData } from '../../data/content';

export default function ContactContent({ showHeader = true }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Gastroenterology Consultation',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const text = `*New Appointment Request from Oorja Website*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message || 'N/A'}`;
    window.open(`https://wa.me/918780761808?text=${text}`, '_blank');
  };

  return (
    <div className="bg-white text-slate-900">
      {/* 1. PAGE HEADER */}
      {showHeader && (
        <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                Get In Touch
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Contact Us & Visit Our Centre
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                We are conveniently located in New City Light Road, Surat. Reach out directly by phone, WhatsApp, or visit us for consultation.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 2. CONTACT INFO + MAP + FORM */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Contact Info + Map */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Centre Information
                </h2>
                <p className="text-slate-500 text-base leading-relaxed">
                  Our dedicated super-speciality centre offers admission facilities, daycare endoscopic treatment suites, and 24x7 emergency on-call support.
                </p>

                <ul className="space-y-5">
                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Our Address</h4>
                      <a href={globalData.contact.mapUrl} target="_blank" rel="noopener noreferrer"
                        className="text-slate-800 font-semibold text-sm hover:text-teal-600 transition-colors leading-snug block">
                        {globalData.contact.address}
                      </a>
                    </div>
                  </li>
                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Phone Number</h4>
                      <a href={`tel:${globalData.contact.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-slate-800 font-semibold text-sm hover:text-teal-600 transition-colors block">
                        {globalData.contact.phone}
                      </a>
                      <span className="text-xs text-slate-400 mt-0.5 block">Available for appointments & inquiries</span>
                    </div>
                  </li>
                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Email Address</h4>
                      <a href={`mailto:${globalData.contact.email}`}
                        className="text-slate-800 font-semibold text-sm hover:text-teal-600 transition-colors block">
                        {globalData.contact.email}
                      </a>
                    </div>
                  </li>
                  {/* Emergency */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 text-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-1">Emergency Care</h4>
                      <span className="text-slate-800 font-semibold text-sm block">24x7 On-Call Emergency Services</span>
                      <span className="text-xs text-slate-400 mt-0.5 block">Dedicated support for patients in need</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>


            {/* Right: Appointment Form */}
            <div className="lg:col-span-6 bg-teal-50 border border-teal-100 rounded-3xl p-6 sm:p-8 shadow-sm lg:-mt-12">
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-500 block mb-1.5">Quick Booking</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1.5">
                    Request an Appointment
                  </h3>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Patient Full Name *
                    </label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange}
                      placeholder="Enter patient name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-slate-900 text-xs shadow-sm transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number (WhatsApp Preferred) *
                    </label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-slate-900 text-xs shadow-sm transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Select Department / Service *
                    </label>
                    <select name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-slate-900 text-xs shadow-sm cursor-pointer"
                    >
                      <optgroup label="Gastroenterology & Liver">
                        <option value="Digestive Issues Care">Digestive Issues Consultation</option>
                        <option value="Liver Disease Evaluation">Liver Diseases Care</option>
                        <option value="Obesity & Weight Management">Obesity Solutions</option>
                        <option value="Pancreatobiliary Care">Pancreatobiliary Disorders</option>
                        <option value="GI Oncology Screening">GI Oncology Screening</option>
                        <option value="Advanced Endoscopy / ERCP">Advanced Endoscopy / ERCP / EUS</option>
                      </optgroup>
                      <optgroup label="Fetal Medicine & Scans">
                        <option value="3D/4D Ultrasonography Scan">3D/4D Ultrasonography Scan</option>
                        <option value="Multiple Pregnancy Monitoring">Multiple Pregnancy Management</option>
                        <option value="High Risk Pregnancy Counselling">High Risk Pregnancy Counselling</option>
                        <option value="Invasive Fetal Testing">Invasive Fetal Testing Procedures</option>
                        <option value="Fetal Echocardiography">Fetal Echocardiography</option>
                        <option value="Fetal Neurosonography">Fetal Neurosonography</option>
                      </optgroup>
                      <option value="General Inquiry">General Consultation / Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Additional Notes / Preferred Date & Time (Optional)
                    </label>
                    <textarea name="message" rows={2} value={formData.message} onChange={handleChange}
                      placeholder="Briefly describe your symptoms or preferred consultation time..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-slate-900 text-xs shadow-sm transition-all resize-none placeholder:text-slate-400"
                    />
                  </div>

                  <div className="pt-1">
                    <button type="submit"
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs py-3.5 px-5 rounded-xl transition-all duration-200 shadow-md hover:shadow-teal-200 flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <MessageSquare className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                      <span>Send Appointment Request via WhatsApp</span>
                      <Send className="w-3 h-3 ml-1 opacity-70" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 lg:mt-16 space-y-4 pt-8 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Location Map</h4>
              <a href={globalData.contact.mapUrl} target="_blank" rel="noopener noreferrer"
                className="text-xs text-teal-500 font-semibold hover:underline">
                Open in Google Maps →
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-md w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <iframe
                src={globalData.contact.mapEmbedUrl}
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oorja Hospital Location Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
