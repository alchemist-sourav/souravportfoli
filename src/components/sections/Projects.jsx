import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bot, BrainCircuit, Code2, ShieldCheck, Workflow } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI_REDTEAM',
    category: 'AI safety & LLM security',
    label: 'Security · Active development',
    description: 'An automated red-teaming platform for assessing LLM application security. Configure targets, run adversarial test cases, evaluate responses and generate structured risk reports. Backend MVP implemented; dashboard work is in progress.',
    tags: ['FastAPI', 'PostgreSQL', 'LLM Security', 'Groq'],
    link: 'https://github.com/alchemist-sourav/AI_REDTEAM',
    icon: ShieldCheck,
    featured: true,
  },
  {
    id: 2,
    title: 'NEETHI',
    category: 'AI legal awareness',
    label: 'AI · Knowledge systems',
    description: 'An AI-powered legal-tech platform designed to make Indian legal information easier to access, with a RAG-based legal assistant, lawyer discovery and legal updates.',
    tags: ['Next.js', 'FastAPI', 'ChromaDB', 'RAG'],
    link: 'https://github.com/alchemist-sourav/NEETHI',
    icon: BrainCircuit,
  },
  {
    id: 3,
    title: 'Alchemist OS',
    category: 'Personal AI assistant',
    label: 'Agents · Automation',
    description: 'A personal AI assistant architecture combining persistent memory, voice interaction, browser automation, screen awareness and tool-based task execution.',
    tags: ['Python', 'FastAPI', 'WebSockets', 'SQLite'],
    link: 'https://github.com/alchemist-sourav/-Alchemist-OS',
    icon: Bot,
  },
  {
    id: 4,
    title: 'OpportunityHunter AI',
    category: 'Opportunity discovery',
    label: 'AI · Full-stack',
    description: 'A platform for discovering grants, jobs and growth opportunities based on user goals, built around a privacy-conscious, free-tier-friendly stack.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase'],
    link: 'https://github.com/alchemist-sourav/OpportunityHunter-AI-',
    icon: Workflow,
  },
  {
    id: 5,
    title: 'CIVORA',
    category: 'Civil engineering decision support',
    label: 'Agentic RAG · Predictive systems',
    description: 'An AI-powered civil-engineering decision-support concept bringing together standards retrieval, cost and risk prediction, labor intelligence and GIS analysis. Currently in architecture and specification development.',
    tags: ['Agentic RAG', 'FastAPI', 'PostgreSQL', 'GIS'],
    link: 'https://github.com/alchemist-sourav/CIVORA',
    icon: Code2,
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="eyebrow">03 / Selected work</p>
        <h2 className="section-heading">Things I’m building<span className="text-indigo-300">.</span></h2>
        <p className="muted-copy mt-4 max-w-xl leading-7">A selection of products and experiments across AI, security, software engineering and decision support.</p>
      </div>
      <a href="https://github.com/alchemist-sourav" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-indigo-200">Explore GitHub <ArrowUpRight size={16} /></a>
    </motion.div>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {projects.map((project, index) => {
        const Icon = project.icon;
        return (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .55, delay: index * .07 }}
            className={`glass-card group relative flex min-h-[310px] flex-col overflow-hidden p-7 md:p-9 ${project.featured ? 'md:col-span-2 md:min-h-[285px]' : ''}`}
          >
            <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-indigo-400/[.07] blur-3xl transition-all duration-500 group-hover:bg-indigo-400/[.13]" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-200/15 bg-indigo-300/[.07] text-indigo-200"><Icon size={20} /></span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-indigo-200/75">{project.label}</p>
                  <p className="mt-1 text-xs text-white/35">{project.category}</p>
                </div>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-indigo-200/30 group-hover:text-indigo-200"><ArrowUpRight size={16} /></span>
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
