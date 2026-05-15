import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-midnight pointer-events-none z-10"></div>
      
      {/* Subtle Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-[0.02] blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <motion.div 
            className="absolute -inset-x-10 -inset-y-10 bg-white opacity-0 group-hover:opacity-[0.03] blur-3xl transition-opacity duration-1000 rounded-full"
          />
          <h1 className="text-[12vw] md:text-[180px] font-medium tracking-tighter leading-none text-text">
            SOURAV
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col items-center gap-4"
        >
          <p className="text-xl md:text-2xl font-light text-white/50 tracking-wide uppercase text-center max-w-lg">
            AI & Data Science Student
          </p>
          <p className="text-lg md:text-xl text-white/40 max-w-xl text-center font-light leading-relaxed">
            Building intelligent systems & modern digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16"
        >
          <a href="#projects" className="text-sm uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors duration-500 pb-2 border-b border-white/10 hover:border-white/50">
            Discover Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
