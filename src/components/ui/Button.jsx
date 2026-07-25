import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  magnetic = false,
  onClick,
  ...props
}) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || !buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Max magnetic shift of 6px
    const maxShift = 6;
    const x = Math.max(-maxShift, Math.min(maxShift, distanceX * 0.2));
    const y = Math.max(-maxShift, Math.min(maxShift, distanceY * 0.2));
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    if (magnetic) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const baseStyles = "inline-flex items-center justify-center font-sans font-semibold text-sm sm:text-base px-7 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-navy whitespace-nowrap flex-shrink-0";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:scale-[1.02]",
    teal: "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:scale-[1.02]",
    rose: "bg-rose-600 text-white hover:bg-rose-500 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:scale-[1.02]",
    gold: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:scale-[1.02]",
    outline: "border border-blue-500/40 text-cyan-400 hover:border-cyan-400 hover:bg-blue-600/20 bg-transparent",
    white: "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:border-cyan-400 shadow-md hover:scale-[1.02]",
  };

  const content = (
    <motion.span
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">{children}</span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
