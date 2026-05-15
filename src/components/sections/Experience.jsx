import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Creative Lead",
      company: "Mulearn.KNP",
      period: "01/2026 - Present",
      description: "Led branding and creative initiatives for events. Managed design workflows and promotional assets for community engagement."
    },
    {
      title: "Design Lead",
      company: "FOSS Club CEKNPY",
      period: "01/2026 - Present",
      description: "Managed design workflows and promotional assets. Contributed to digital design projects and visual materials for open-source initiatives."
    },
    {
      title: "Design Lead",
      company: "IIC CEKNPY",
      period: "07/2025 - Present",
      description: "Led UI/design initiatives for innovation events. Maintaining branding consistency and mentoring members."
    },
    {
      title: "Web Lead",
      company: "TinkerHub CEKNPY",
      period: "07/2025 - 03/2026",
      description: "Developed and maintained community web platforms with modern design and best practices."
    },
    {
      title: "Design Intern",
      company: "IEEE SB CEK",
      period: "09/2025 - 02/2026",
      description: "Designed event creatives and branding materials to support IEEE initiatives."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4">04 // Journey</h2>
          <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-text/90">Experience</h3>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-16 border-b border-white/10 pb-12 group"
            >
              <div className="md:w-1/3 flex flex-col">
                <div className="text-sm tracking-widest text-white/40 uppercase mb-2">{exp.period}</div>
                <div className="text-xl font-medium text-white/80 group-hover:text-white transition-colors">{exp.company}</div>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-2xl font-medium mb-4 text-white/90">{exp.title}</h4>
                <p className="text-white/50 font-light leading-relaxed max-w-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
