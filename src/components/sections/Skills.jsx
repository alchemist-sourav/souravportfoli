import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Braces, Palette, Database, Wrench } from 'lucide-react';

const skillCategories = [
  { title: 'AI & intelligent systems', icon: Bot, skills: ['Python', 'RAG systems', 'LLM applications', 'LangChain', 'ChromaDB', 'Hugging Face', 'AI agents'] },
  { title: 'Frontend engineering', icon: Braces, skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML & CSS'] },
  { title: 'Backend & data', icon: Database, skills: ['FastAPI', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase'] },
  { title: 'Product & design', icon: Palette, skills: ['Figma', 'UI/UX design', 'Responsive design', 'Prototyping', 'Design systems'] },
  { title: 'Developer tools', icon: Wrench, skills: ['Git & GitHub', 'VS Code', 'Postman', 'Linux / WSL', 'Docker fundamentals'] },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
      <p className="eyebrow">05 / Toolset</p>
      <h2 className="section-heading">Tools I use to make things happen<span className="text-indigo-300">.</span></h2>
      <p className="muted-copy mt-4 max-w-2xl leading-7">A practical toolkit across AI, product engineering, data and interface design. I keep learning as the work demands it.</p>
    </motion.div>

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skillCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <motion.div key={category.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="glass-card p-6 md:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-200/15 bg-indigo-300/[.07] text-indigo-200"><Icon size={18} /></span>
              <h3 className="text-sm font-semibold text-white/85">{category.title}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => <span key={skill} className="rounded-lg border border-white/[.08] bg-white/[.025] px-3 py-2 text-xs text-white/55">{skill}</span>)}
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;
