import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Byamn LMS',
    period: 'Internship',
    description: 'Working on a learning-management platform built with Next.js and MongoDB, contributing to student and admin workflows, search, pagination and authorization.',
  },
  {
    title: 'Data Scientist',
    company: 'MatRisk AI',
    period: '05 / 2026',
    description: 'Contributed to data-science work focused on analyzing information and translating it into useful product insights.',
    certificate: '/certificates/zee_certificate.pdf',
  },
  {
    title: 'Full Stack Web Development Intern',
    company: 'Future Interns',
    period: '05 / 2026',
    description: 'Completed a one-month internship program focused on full-stack web development.',
    certificate: '/certificates/sourav_internship_certificate.pdf',
  },
  {
    title: 'Data Science Job Simulation',
    company: 'BCG X',
    period: '05 / 2026',
    description: 'Completed a customer-churn analysis simulation using Python, Pandas and NumPy; developed a random-forest model and summarized findings for decision-making.',
  },
  {
    title: 'Front-End Software Engineering Virtual Experience',
    company: 'Skyscanner',
    period: '05 / 2026',
    description: 'Built a React travel-date selection interface using Skyscanner’s Backpack component library and ran automated tests to check rendering.',
  },
  {
    title: 'Web Lead',
    company: 'TinkerHub CEKNPY',
    period: '07 / 2025 — 03 / 2026',
    description: 'Supported the developer community through web-platform work and collaboration around technical initiatives.',
  },
  {
    title: 'Design Intern',
    company: 'IEEE SB CEK',
    period: '09 / 2025 — 02 / 2026',
    description: 'Created event creatives and visual communication assets supporting student-branch activities.',
  },
];

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="mx-auto max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
        <p className="eyebrow">05 / The journey</p>
        <h2 className="section-heading">Experience & community<span className="text-indigo-300">.</span></h2>
        <p className="muted-copy mt-4 max-w-2xl leading-7">A mix of internships, practical simulations and community roles that continue to shape how I build.</p>
      </motion.div>

      <div className="space-y-3">
        {experiences.map((exp, index) => (
          <motion.article key={exp.title + exp.company} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className="glass-card grid gap-4 p-6 md:grid-cols-[190px_1fr] md:gap-8 md:p-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-indigo-200/70">{exp.period}</p>
              <p className="mt-2 text-sm font-semibold text-white/80">{exp.company}</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[.08] bg-white/[.03] text-white/55"><Briefcase size={15} /></span>
              <div>
                <h3 className="text-base font-semibold text-white/90">{exp.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/45">{exp.description}</p>
                {exp.certificate && (
                  <a href={exp.certificate} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-indigo-200/80 transition-colors hover:text-white">
                    View certificate <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
export default Experience;
