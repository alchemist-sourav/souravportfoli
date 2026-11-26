import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Github, Linkedin, Link2, Mail, MapPin } from 'lucide-react';

const CONTACT_EMAIL = 'souravs51380@gmail.com';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const subject = String(form.get('subject') || 'Portfolio enquiry').trim();
    const message = String(form.get('message') || '').trim();
    const body = `Hi Sourav,\n\n${message}\n\nFrom: ${name}\nReply to: ${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section-padding border-t border-white/[.06]">
      <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <p className="eyebrow">07 / Get in touch</p>
          <h2 className="text-5xl font-semibold leading-[1.04] tracking-[-.055em] md:text-6xl">Have a good idea?<br /><span className="text-indigo-200">Let’s build it.</span></h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/45">Open to thoughtful collaborations, developer opportunities and conversations about AI, software and product building.</p>

          <div className="mt-10 space-y-5">
            <button type="button" onClick={copyEmail} className="group flex items-center gap-3 text-left">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.03] text-indigo-200"><Mail size={18} /></span>
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">Email</span>
                <span className="mt-1 block text-sm font-medium text-white/80 transition-colors group-hover:text-indigo-200">{CONTACT_EMAIL}</span>
              </span>
              <Copy size={14} className="ml-2 text-white/25" />
            </button>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[.03] text-indigo-200"><MapPin size={18} /></span>
              <span><span className="block text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">Based in</span><span className="mt-1 block text-sm font-medium text-white/80">Kerala, India</span></span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">\n            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-indigo-200/25 bg-indigo-200/10 px-4 py-2.5 text-xs font-semibold text-indigo-100 transition-colors hover:bg-indigo-200/15">View résumé <ArrowUpRight size={14} /></a>
            <a aria-label="GitHub" href="https://github.com/alchemist-sourav" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/55 transition-all hover:border-indigo-200/30 hover:text-indigo-200"><Github size={18} /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/souravalchemist" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/55 transition-all hover:border-indigo-200/30 hover:text-indigo-200"><Linkedin size={18} /></a>
            <a aria-label="Bitsbee digital profile" href="https://bitsb.ee/sourav.s" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/55 transition-all hover:border-indigo-200/30 hover:text-indigo-200"><Link2 size={18} /></a>
          </div>
          <p aria-live="polite" className="mt-3 min-h-5 text-xs text-indigo-200/70">{copied ? 'Email address copied.' : ''}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .12 }} className="glass-card p-6 md:p-9">
          <div className="mb-7">
            <p className="text-sm font-semibold text-white/85">Send a message</p>
            <p className="mt-1 text-xs leading-6 text-white/40">This opens your email app with the message pre-filled. Nothing is sent automatically.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-xs font-medium text-white/55">Your name
                <input name="name" type="text" autoComplete="name" required placeholder="Name" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-indigo-200/50" />
              </label>
              <label className="block text-xs font-medium text-white/55">Email address
                <input name="email" type="email" autoComplete="email" required placeholder="you@example.com" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-indigo-200/50" />
              </label>
            </div>
            <label className="block text-xs font-medium text-white/55">Subject
              <input name="subject" type="text" required placeholder="What would you like to discuss?" className="mt-2 w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-white/25 focus:border-indigo-200/50" />
            </label>
            <label className="block text-xs font-medium text-white/55">Message
              <textarea name="message" rows="5" required placeholder="Tell me a little about it..." className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-white/[.025] px-4 py-3.5 text-sm leading-6 text-white outline-none transition-colors placeholder:text-white/25 focus:border-indigo-200/50" />
            </label>
            <button type="submit" className="btn-primary w-full justify-between">
              Open email draft <ArrowUpRight size={17} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
