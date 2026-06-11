import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist",
      company: "MatRisk AI",
      period: "05/2026",
      description: "Data Scientist at MatRisk AI.",
      certificate: "/certificates/zee_certificate.pdf"
    },
    {
      title: "Full Stack Web Development Intern",
      company: "Future Interns",
      period: "05/2026",
      description: "Successfully completed a 1-month internship program in Full Stack Web Development.",
      certificate: "/certificates/sourav_internship_certificate.pdf"
    },
    {
      title: "Data Science Job Simulation",
      company: "BCG X",
      period: "05/2026",
      description: "Completed a customer churn analysis simulation for XYZ Analytics using Python (Pandas, NumPy). Engineered a random forest model achieving a 50% recall rate in predicting customer churn, and delivered an executive summary with actionable insights for decision-making."
    },
    {
      title: "Front-End Software Engineering Virtual Experience",
      company: "Skyscanner",
      period: "05/2026",
      description: "Completed a job simulation building a web application using React. Developed a page for picking a travel date using Skyscanner’s open-source Backpack React library, customized the application, and ran automated tests to ensure proper rendering."
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
                {exp.certificate && (
                  <a 
                    href={exp.certificate} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors group/link"
                  >
                    <span>View Certificate</span>
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
