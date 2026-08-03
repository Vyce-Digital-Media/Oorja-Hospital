import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MessageSquare } from 'lucide-react';
import { globalData, navLinks } from '../../data/content';
import MedicalImage from '../ui/MedicalImage';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2 border-b border-slate-100'
          : 'bg-white shadow-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <Link to="/" className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0">
          <div className="w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <img src="/logo-new.png" alt="Oorja Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base text-slate-900 tracking-tight group-hover:text-teal-600 transition-colors whitespace-nowrap">
              Oorja
            </span>
            <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium hidden sm:block whitespace-nowrap">
              Gastro-Liver & Fetal Medicine
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isDropdownActive = location.pathname.startsWith('/services');
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 whitespace-nowrap rounded-lg ${
                      isDropdownActive
                        ? 'text-teal-600 font-semibold'
                        : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 w-56 pt-2 z-50"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden p-1.5">
                          <Link
                            to="/services"
                            className="block px-3 py-2 text-xs font-semibold uppercase tracking-wider text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="h-px bg-slate-100 my-1" />
                          {link.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`block px-3 py-2.5 text-sm rounded-lg transition-all duration-150 ${
                                location.pathname === subItem.path
                                  ? 'bg-teal-50 text-teal-600 font-medium'
                                  : 'text-slate-700 hover:bg-teal-50 hover:text-teal-600'
                              }`}
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-[11px] text-slate-400 mt-0.5">
                                {subItem.subtext}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                    isActive
                      ? 'text-teal-600 font-semibold bg-teal-50'
                      : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Right: Phone + CTA */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href={globalData.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-teal-500" />
            <span>{globalData.contact.phone}</span>
          </a>
          <Link
            to="/contact"
            className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile: Book + Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/contact"
            className="bg-teal-500 text-white px-3 py-1.5 rounded-lg text-xs font-semibold"
          >
            Contact
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-teal-50 text-teal-600 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-teal-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 py-1 space-y-1 ml-4 border-l-2 border-teal-100">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-lg text-sm text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-3">
                <Link
                  to="/contact"
                  className="block w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-semibold text-center transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
