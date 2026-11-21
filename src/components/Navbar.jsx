import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .55, ease: [0.22, 1, .36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5"
    >
      <nav aria-label="Main navigation" className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-5 ${isScrolled ? 'border-white/10 bg-[#0c0e13]/90 shadow-2xl shadow-black/20 backdrop-blur-2xl' : 'border-white/[.07] bg-[#0c0e13]/50 backdrop-blur-xl'}`}>
        <a href="#home" onClick={closeMenu} className="group flex items-center gap-3" aria-label="Sourav home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-300/25 bg-indigo-300/10 text-sm font-bold text-indigo-200">S.</span>
          <span className="text-sm font-semibold tracking-wide text-white">Sourav<span className="text-indigo-300">.</span></span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-semibold uppercase tracking-[.15em] text-white/55 transition-colors hover:text-white">
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#10121a] transition-all hover:bg-indigo-100 md:inline-flex">
          Let’s talk <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: .98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: .98 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#10131a]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={closeMenu} className="block rounded-xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white">
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
