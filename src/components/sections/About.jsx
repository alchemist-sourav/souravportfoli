import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Compass, Lightbulb } from 'lucide-react';

const highlights = [
  { icon: Code2, title: 'Engineering mindset', text: 'I enjoy understanding how systems work, then building them with care and purpose.' },
  { icon: Lightbulb, title: 'Applied AI', text: 'Exploring RAG, LLM applications, automation and practical machine-learning workflows.' },
  { icon: Compass, title: 'Curious by default', text: 'Learning across software, security, product design and the communities around technology.' },
];

const About = () => (
  <section id="about" className="section-padding">
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
      <p className="eyebrow">02 / A little about me</p>
      <h2 className="section-heading max-w-4xl">Part engineer, part explorer.<br /><span className="text-white/40">Always building toward what’s next.</span></h2>
    </motion.div>

    <div className="grid gap-4 lg:grid-cols-[1.2fr_.8fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card flex flex-col justify-between p-7 md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-white/35">The story so far</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
            I’m Sourav, an AI & Data Science engineering student and developer from Kerala, India. I work across the stack — shaping interfaces, building APIs and experimenting with AI systems that solve concrete problems.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/45">
            My projects range from legal-information tools and AI security testing to opportunity discovery and civil-engineering decision support. I’m especially interested in the space where thoughtful product design meets reliable engineering.
          </p>
        </div>
        <a href="https://github.com/alchemist-sourav" target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-indigo-200 transition-colors hover:text-white">
          Follow what I’m building <ArrowUpRight size={16} />
        </a>
      </motion.div>

      <div className="grid gap-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="glass-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200/15 bg-indigo-300/[.07] text-indigo-200"><Icon size={18} /></span>
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/45">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>

    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-4 flex flex-col gap-3 rounded-2xl border border-white/[.08] bg-white/[.025] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.17em] text-white/35">Education</p>
        <p className="mt-1 text-sm font-semibold text-white/85">B.Tech · Artificial Intelligence & Data Science</p>
        <p className="mt-1 text-xs text-white/40">College of Engineering Karunagappally</p>
      </div>
      <span className="text-xs font-medium tracking-wide text-indigo-200/75">2023 — 2027</span>
    </motion.div>
  </section>
);

export default About;
