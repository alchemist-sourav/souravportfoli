import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-white/[.07] px-6 py-8 md:px-10">
    <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <a href="#home" className="text-sm font-semibold tracking-wide text-white/80">Sourav<span className="text-indigo-300">.</span></a>
        <p className="mt-1 text-xs text-white/30">© {new Date().getFullYear()} · Built with curiosity and care.</p>
      </div>
      <div className="flex flex-wrap gap-6">
        <a href="https://github.com/alchemist-sourav" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-white/45 transition-colors hover:text-white">GitHub <ArrowUpRight size={12} /></a>
        <a href="https://www.linkedin.com/in/souravalchemist" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-white/45 transition-colors hover:text-white">LinkedIn <ArrowUpRight size={12} /></a>
        <a href="https://bitsb.ee/sourav.s" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-white/45 transition-colors hover:text-white">Bitsbee <ArrowUpRight size={12} /></a>
        <a href="mailto:souravs51380@gmail.com" className="inline-flex items-center gap-1 text-xs text-white/45 transition-colors hover:text-white">Email <ArrowUpRight size={12} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
