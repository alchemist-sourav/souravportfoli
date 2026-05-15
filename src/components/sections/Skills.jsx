import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["RAG Pipeline", "LangChain", "ChromaDB", "Hugging Face", "LLMs", "Speech Recognition", "TTS"]
    },
    {
      title: "Full-Stack Development",
      skills: ["React.js", "Next.js", "FastAPI", "Python", "Tailwind CSS", "Firebase", "MySQL"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "UI/UX Design", "Git/GitHub", "VS Code", "Photoshop", "Canva"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1"
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4">03 // Expertise</h2>
          <h3 className="text-3xl font-medium tracking-tight text-text/90">Skills & Tech</h3>
        </motion.div>

        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-white/10 pt-6"
            >
              <h4 className="text-lg font-medium mb-6 text-white/80">{cat.title}</h4>
              <ul className="space-y-4">
                {cat.skills.map(skill => (
                  <li key={skill} className="text-white/40 font-light tracking-wide text-sm flex items-center gap-3">
                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
