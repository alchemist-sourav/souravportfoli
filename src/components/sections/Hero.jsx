import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Github, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden px-6 pb-20 pt-32 md:min-h-screen md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/[.09] blur-[130px]" />
      <div className="pointer-events-none absolute right-[7%] top-[34%] h-44 w-44 rounded-full border border-indigo-200/[.08]" />
      <div className="pointer-events-none absolute right-[11%] top-[38%] h-28 w-28 rounded-full border border-indigo-200/[.08]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="eyebrow">
            <Sparkles size={14} /> AI · Full-Stack · Product Engineering
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .65 }} className="mb-4 text-sm font-medium tracking-wide text-white/45">
            Hello, I’m Sourav S.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .14, duration: .8, ease: [0.22, 1, .36, 1] }}
            className="max-w-4xl text-[clamp(3.5rem,8vw,6.6rem)] font-semibold leading-[.98] tracking-[-.065em]"
          >
            I build digital
            <span className="block bg-gradient-to-r from-indigo-200 via-[#a8b4ff] to-sky-200 bg-clip-text pb-2 text-transparent">experiences</span>
            that think.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .27, duration: .7 }} className="mt-7 max-w-xl text-base leading-8 text-white/55 md:text-lg">
            AI & Full-Stack Developer focused on turning complex ideas into useful products — from intelligent applications and agentic workflows to thoughtful web experiences.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38, duration: .7 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">Explore my work <ArrowUpRight size={16} /></a>
            <a href="https://github.com/Alchemist1910" target="_blank" rel="noopener noreferrer" className="btn-secondary"><Github size={16} /> GitHub</a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-14 flex items-center gap-3 text-xs font-medium uppercase tracking-[.18em] text-white/35">
            <span className="h-px w-9 bg-indigo-300/60" /> Based in Kerala, India
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: .96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: .25, duration: .9, ease: [0.22, 1, .36, 1] }}
          className="relative mx-auto w-full max-w-[410px]"
        >
          <div className="absolute -inset-5 rounded-[2.2rem] bg-gradient-to-br from-indigo-400/15 via-transparent to-sky-300/10 blur-2xl" />
          <div className="glass-card relative overflow-hidden p-6 md:p-7">
            <div className="flex items-center justify-between border-b border-white/[.08] pb-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/35">Developer profile</p>
                <p className="mt-1 text-sm font-semibold text-white/85">Currently building</p>
              </div>
              <span className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[.07] px-3 py-1.5 text-[10px] font-semibold text-emerald-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Learning & creating
              </span>
            </div>

            <div className="py-8">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-200/20 bg-gradient-to-br from-indigo-300/20 to-sky-300/10 text-2xl font-semibold tracking-tight text-indigo-100">AS</div>
              <h2 className="text-2xl font-semibold tracking-tight">Ideas into systems.</h2>
              <p className="mt-2 text-sm leading-6 text-white/45">Exploring the intersection of artificial intelligence, software engineering and human-centered design.</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                ['01', 'AI applications'],
                ['02', 'Full-stack systems'],
                ['03', 'Agentic workflows'],
                ['04', 'Product interfaces'],
              ].map(([number, label]) => (
                <div key={number} className="rounded-2xl border border-white/[.07] bg-white/[.025] p-3.5">
                  <span className="text-[10px] font-semibold tracking-widest text-indigo-200/70">{number}</span>
                  <p className="mt-2 text-xs font-medium text-white/70">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/[.08] pt-5 text-xs text-white/35">
              <span>Curiosity-led engineering</span>
              <ArrowDown size={15} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
