import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xs uppercase tracking-[0.2em] text-white/30">
          © {currentYear} Sourav S.
        </div>

        <div className="flex gap-8">
          <a href="https://github.com/Alchemist1910" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/souravalchemist" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
