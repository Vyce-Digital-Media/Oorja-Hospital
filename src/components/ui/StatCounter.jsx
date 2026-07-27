import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

export default function StatCounter({
  value,
  suffix = '',
  label,
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const roundedValue = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isInView) {
      if (prefersReducedMotion) {
        motionValue.set(value);
      } else {
        const controls = animate(motionValue, value, {
          duration: 2,
          delay: delay,
          ease: [0.22, 1, 0.36, 1],
        });
        return () => controls.stop();
      }
    }
  }, [isInView, value, delay, motionValue]);

  return (
    <div ref={ref} className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-400 transition-all">
      <div className="flex items-baseline gap-1 font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
        <motion.span>{roundedValue}</motion.span>
        {suffix && <span className="text-teal-600 text-3xl sm:text-4xl lg:text-5xl font-extrabold">{suffix}</span>}
      </div>
      <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 mt-2 text-center sm:text-left">
        {label}
      </span>
    </div>
  );
}
