import React from 'react';
import { motion } from 'framer-motion';

const GraphicDesign = () => {
  const designs = [
    { 
      id: 1, 
      title: 'FOSS Fest 25', 
      category: 'Event Poster', 
      image: '/images/uploaded_image_2.jpg' 
    },
    { 
      id: 2, 
      title: 'Humynex Robotics', 
      category: 'Social Media Poster', 
      image: '/images/uploaded_image_4.png' 
    },
    { 
      id: 3, 
      title: 'Product Building', 
      category: 'Event Poster', 
      image: '/images/uploaded_image_5.png' 
    },
    { 
      id: 4, 
      title: 'Happy New Year 2026', 
      category: 'Greeting Design', 
      image: '/images/uploaded_image_3.png' 
    },
    { 
      id: 5, 
      title: 'FOSS Fest 25 Welcome Banner', 
      category: 'Event Banner', 
      image: '/images/uploaded_image_1.jpg',
      colSpan: 'md:col-span-2 lg:col-span-2',
      aspect: 'aspect-video'
    },
    { 
      id: 6, 
      title: 'Neethi Web UI/UX', 
      category: 'UI/UX Design', 
      image: '/images/neethi-figma.jpg',
      link: 'https://www.figma.com/design/38UIYrpbJU9otbXbZaaNRC/Neethi?node-id=0-1&t=3S0Rh2y3h8Y4MvO1-1',
      colSpan: 'md:col-span-2 lg:col-span-2',
      aspect: 'aspect-video'
    },
  ];

  return (
    <section id="design" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4">03 // Design</h2>
        <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-text/90">UI/UX & Graphic Design</h3>
        <p className="text-white/50 mt-4 max-w-xl">A collection of my UI/UX and graphic design work including web interfaces, event posters, social media creatives, and digital assets.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {designs.map((design, index) => {
          const CardContent = (
            <>
              {/* Background Image / Placeholder */}
              {design.image ? (
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${design.image})`, backgroundColor: '#1a1a1a' }}
                ></div>
              ) : (
                <div className="absolute inset-0 bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors duration-500"></div>
              )}
              
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xs uppercase tracking-widest text-[#00f0ff] mb-2">{design.category}</div>
                <h4 className="text-xl font-medium text-white opacity-90 group-hover:opacity-100 transition-opacity">{design.title}</h4>
                {design.link && (
                  <div className="mt-4 flex items-center text-sm font-medium text-white/60 group-hover:text-[#00f0ff] transition-colors">
                    View Project <span className="ml-2">→</span>
                  </div>
                )}
              </div>
            </>
          );

          const cardClasses = `glass-card p-6 flex flex-col justify-end relative overflow-hidden group hover:border-white/20 ${
            design.aspect || 'aspect-[3/4]'
          }`;

          return (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={design.colSpan || ''}
            >
              {design.link ? (
                <a 
                  href={design.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${cardClasses} block h-full`}
                >
                  {CardContent}
                </a>
              ) : (
                <div className={`${cardClasses} h-full`}>
                  {CardContent}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GraphicDesign;
