import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import CTASection from '../components/ui/CTASection';

const galleryImages = [
  { src: '/gallery-exterior.png', alt: 'Oorja Hospital Exterior', title: 'Hospital Exterior' },
  { src: '/gallery-endoscopy.png', alt: 'Endoscopy Suite', title: 'Advanced Endoscopy Suite' },
  { src: '/gallery-waiting.png', alt: 'Patient Waiting Room', title: 'Modern Waiting Room' },
  { src: '/gallery-ultrasound.png', alt: 'Fetal Ultrasound Room', title: 'Fetal Medicine Department' },
  { src: '/gallery-patient.png', alt: 'Patient Room', title: 'Comfortable Patient Rooms' },
  { src: '/gallery-office.png', alt: 'Clinic Office', title: 'Expert Consultation' }
];

// Duplicate arrays for infinite marquee (3 sets ensure seamless looping when shifting by 1/3)
const row1 = [...galleryImages, ...galleryImages, ...galleryImages];
const row2Base = [...galleryImages].reverse();
const row2 = [...row2Base, ...row2Base, ...row2Base];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (originalIndex) => {
    setLightboxIndex(originalIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <main className="pt-20 sm:pt-24 overflow-hidden bg-white text-slate-900">
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-33.333333%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 40s linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Header Section matching other pages */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-teal-50 via-white to-cyan-50 border-b border-slate-100 relative overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Hospital Gallery
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
                Take a tour of our state-of-the-art facilities designed for patient comfort and advanced medical care. Experience world-class healthcare in a modern, comforting environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Rows */}
      <div className="flex flex-col gap-4 md:gap-6 mb-24">
        {/* Row 1 - Scrolling Left */}
        <div className="flex w-max animate-marquee-left">
          {row1.map((img, idx) => {
            const originalIndex = idx % galleryImages.length;
            return (
              <div 
                key={`r1-${idx}`} 
                className="w-[30vw] sm:w-[25vw] md:w-[22vw] lg:w-[18vw] xl:w-[16vw] flex-shrink-0 px-1.5 md:px-3"
                onClick={() => openLightbox(originalIndex)}
              >
                <div className="aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Row 2 - Scrolling Right */}
        <div className="flex w-max animate-marquee-right">
          {row2.map((img, idx) => {
            const originalIndex = galleryImages.length - 1 - (idx % galleryImages.length);
            return (
              <div 
                key={`r2-${idx}`} 
                className="w-[30vw] sm:w-[25vw] md:w-[22vw] lg:w-[18vw] xl:w-[16vw] flex-shrink-0 px-1.5 md:px-3"
                onClick={() => openLightbox(originalIndex)}
              >
                <div className="aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CTASection />

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-sm p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={prevLightbox}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={nextLightbox}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative flex flex-col items-center justify-center w-full h-[85vh] max-w-6xl"
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-10 left-0 right-0 text-center text-slate-900 font-medium tracking-wide">
                {galleryImages[lightboxIndex].title} ({lightboxIndex + 1} / {galleryImages.length})
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
