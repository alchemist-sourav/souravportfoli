import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4">01 // About</h2>
        <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-text/90 max-w-3xl leading-tight">
          Combining technical expertise with creative design to build impactful, AI-driven products.
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card p-10 md:col-span-2 flex flex-col justify-between group"
        >
          <div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-8 text-white/50 group-hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <h4 className="text-2xl font-medium mb-4">Philosophy</h4>
            <p className="text-white/50 text-lg leading-relaxed max-w-xl font-light">
              I am a versatile developer passionate about full-stack web development, applied AI, and UI/UX design. I turn complex ideas into intuitive interfaces and powerful AI-driven platforms.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-10 flex flex-col justify-between group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h4 className="text-xl font-medium mb-2">Education</h4>
            <p className="text-white/40 text-sm mb-8 uppercase tracking-wider">2023 — 2027</p>
            <div className="text-lg text-white/70 font-light mb-1">B.Tech in AI & Data Science</div>
            <div className="text-white/40 text-sm">College of Engineering Karunagappally</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
