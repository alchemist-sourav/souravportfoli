import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section-padding border-t border-white/5">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-white/40 mb-4">05 // Connect</h2>
            <h3 className="text-5xl md:text-6xl font-medium tracking-tight text-text/90 mb-8">
              Let's create <br/> something together.
            </h3>
            <p className="text-lg text-white/40 max-w-md font-light leading-relaxed mb-16">
              Have a project in mind or looking for a creative developer? I'm always open to discussing new opportunities.
            </p>

            <div className="space-y-10">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Email</div>
                <a href="mailto:souravs51380@email.com" className="text-2xl font-light hover:text-white transition-colors duration-300">
                  souravs51380@email.com
                </a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Location</div>
                <div className="text-2xl font-light text-white/80">Kollam, Kerala</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/30 mb-2">Phone</div>
                <div className="text-2xl font-light text-white/80">+91 8606185711</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-10 md:p-14"
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white text-white outline-none transition-colors placeholder:text-white/30 font-light"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white text-white outline-none transition-colors placeholder:text-white/30 font-light"
                  />
                </div>
              </div>

              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white text-white outline-none transition-colors placeholder:text-white/30 font-light"
                />
              </div>

              <div className="relative">
                <textarea 
                  rows="4"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-white/20 pb-4 focus:border-white text-white outline-none transition-colors placeholder:text-white/30 font-light resize-none"
                ></textarea>
              </div>

              <button type="submit" className="w-full py-5 flex justify-between items-center group relative overflow-hidden">
                <span className="relative z-10 text-sm tracking-[0.2em] uppercase font-medium group-hover:text-midnight transition-colors duration-500">Send Message</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <svg className="relative z-10 text-white group-hover:text-midnight transition-colors duration-500 transform group-hover:translate-x-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
