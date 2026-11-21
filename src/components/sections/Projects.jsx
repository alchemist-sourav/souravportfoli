import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Layers3, ShieldCheck, BrainCircuit, Workflow } from 'lucide-react';

const projects = [
  {
    id: 1, title: 'AI_REDTEAM', category: 'AI Safety & Security',
    description: 'An AI security testing initiative focused on evaluating model behavior, identifying weaknesses and making AI systems more resilient.',
    tags: ['Python', 'LLM Security', 'AI Evaluation'], link: 'https://github.com/Alchemist1910',
    icon: ShieldCheck, featured: true, label: 'Security · Research'
  },
  {
    id: 2, title: 'NEETHI', category: 'AI Legal Awareness Platform',
    description: 'A legal-awareness platform designed to make Indian legal information easier to discover through retrieval-augmented generation.',
    tags: ['Next.js', 'RAG', 'ChromaDB'], link: 'https://github.com/Alchemist1910/NEETHI',
    icon: BrainCircuit, label: 'AI · Knowledge systems'
  },
  {
    id: 3, title: 'Alchemist OS', category: 'Personal AI Assistant',
    description: 'An assistant architecture combining memory, tool execution, voice interaction and screen-aware workflows.',
    tags: ['FastAPI', 'WebSockets', 'SQLite'], link: 'https://github.com/alchemist-sourav/-Alchemist-OS',
    icon: Workflow, label: 'Agents · Automation'
  },
  {
    id: 4, title: 'OpportunityHunter AI', category: 'AI Opportunity Discovery',
    description: 'A platform concept for discovering and organizing relevant opportunities with an AI-assisted workflow.',
    tags: ['Python', 'React', 'AI'], link: 'https://github.com/Alchemist1910',
    icon: Layers3, label: 'AI · Full-stack'
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="eyebrow">01 / Selected work</p>
        <h2 className="section-heading">Things I’m building<span className="text-indigo-300">.</span></h2>
        <p className="muted-copy mt-4 max-w-xl leading-7">A selection of experiments and products across AI, security and software engineering.</p>
      </div>
      <a href="https://github.com/Alchemist1910" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-indigo-200">More on GitHub <ArrowUpRight size={16} /></a>
    </motion.div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project, index) => {
        const Icon = project.icon;
        return (
          <motion.a
            key={project.id} href={project.link} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: .55, delay: index * .08 }}
            className={`glass-card group relative flex min-h-[310px] flex-col overflow-hidden p-7 md:p-9 ${project.featured ? 'md:col-span-2 md:min-h-[270px]' : ''}`}
          >
            <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-indigo-400/[.07] blur-3xl transition-all duration-500 group-hover:bg-indigo-400/[.13]" />
            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200/15 bg-indigo-300/[.07] text-indigo-200"><Icon size={20} /></span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.18em] text-indigo-200/75">{project.label}</p>
                  <p className="mt-1 text-xs text-white/35">{project.category}</p>
                </div>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-indigo-200/30 group-hover:text-indigo-200"><ArrowUpRight size={16} /></span>
            </div>
            <div className="relative mt-auto pt-12">
              <div className="flex items-end justify-between gap-4">
                <h3 className="text-3xl font-semibold tracking-tight md:text-4xl">{project.title}</h3>
                <span className="mb-1 hidden text-[10px] uppercase tracking-[.16em] text-white/25 md:inline">0{index + 1}</span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/48">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/[.09] bg-white/[.025] px-3 py-1.5 text-[10px] font-medium tracking-wide text-white/55">{tag}</span>)}
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  </section>
);

export default Projects;
