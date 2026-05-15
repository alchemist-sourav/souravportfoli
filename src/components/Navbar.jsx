import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 pointer-events-none"
    >
      <div className={`pointer-events-auto flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-500 border ${isScrolled ? 'bg-card/80 backdrop-blur-xl border-white/10 shadow-2xl' : 'bg-transparent border-transparent'}`}>
        <a href="#home" className="text-sm font-medium tracking-widest uppercase text-text/90 hover:text-white transition-colors">
          Sourav.
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
