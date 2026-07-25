import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal via-gold to-rose z-50 origin-left pointer-events-none shadow-[0_1px_8px_rgba(176,141,87,0.4)]"
      style={{ scaleX }}
    />
  );
}
