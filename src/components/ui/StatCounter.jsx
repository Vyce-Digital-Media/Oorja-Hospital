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
    <div ref={ref} className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-[#0B192C]/80 backdrop-blur-sm border border-blue-500/20 shadow-lg hover:border-cyan-400/50 transition-colors">
      <div className="flex items-baseline gap-1 font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
        <motion.span>{roundedValue}</motion.span>
        {suffix && <span className="text-cyan-400 text-3xl sm:text-4xl lg:text-5xl">{suffix}</span>}
      </div>
      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 mt-2 text-center sm:text-left">
        {label}
      </span>
    </div>
  );
}
