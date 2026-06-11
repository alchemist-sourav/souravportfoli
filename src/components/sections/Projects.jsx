import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Neethi",
      category: "AI Web Platform",
      tags: ["Next.js", "FastAPI", "RAG"],
      link: "https://github.com/Alchemist1910/NEETHI",
      desc: "An AI-powered legal awareness platform implementing a RAG pipeline using LangChain.",
      colSpan: "md:col-span-2"
    },
    {
      id: 2,
      title: "Mughashastram",
      category: "Computer Vision",
      tags: ["Python", "Voice AI"],
      link: "#",
      desc: "Webcam-based facial scanning with generated voice responses.",
      colSpan: "md:col-span-1"
    },
    {
      id: 3,
      title: "Alchemist OS",
      category: "AI Operating System",
      tags: ["Python", "Next.js", "AI Agents"],
      link: "https://github.com/alchemist-sourav/-Alchemist-OS",
      desc: "A futuristic, highly autonomous AI operating system acting as a digital operator and continuous background companion.",
      colSpan: "md:col-span-1"
    },
    {
      id: 4,
      title: "Pieza",
      category: "Full-Stack App",
      tags: ["MERN", "Socket.io", "Razorpay"],
      link: "https://github.com/alchemist-sourav/pizza-app",
      desc: "A modern web application for custom-built pizzas with real-time order tracking and secure payments.",
      colSpan: "md:col-span-2"
    },
    {
      id: 5,
      title: "SNIB Space Hero",
      category: "3D Web Experience",
      tags: ["Next.js", "Three.js", "Framer Motion"],
      link: "https://space-3-d.vercel.app",
      desc: "A visually stunning, interactive landing page blending 3D environments with premium 2D UI elements and micro-interactions.",
      colSpan: "md:col-span-3"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4">02 // Work</h2>
        <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-text/90">Selected Projects</h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`glass-card p-10 group relative overflow-hidden flex flex-col justify-between min-h-[320px] ${project.colSpan} block hover:border-white/20`}
          >
            {/* Minimalist Visuals / Hover effects */}
            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </div>

            <div className="relative z-10">
              <div className="text-xs uppercase tracking-widest text-white/40 mb-8">{project.category}</div>
              <h4 className="text-3xl font-medium mb-4 text-text/90">{project.title}</h4>
              <p className="text-white/50 font-light mb-8 max-w-sm">{project.desc}</p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium tracking-wide text-white/60 px-3 py-1 border border-white/10 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
