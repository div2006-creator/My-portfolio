import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO, NAV_ITEMS } from '../../utils/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Top subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
              {PERSONAL_INFO.name}<span className="text-cyber-cyan">.dev</span>
            </h3>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-cyber-cyan hover:border-cyber-cyan/40 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold text-cyber-cyan uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold text-cyber-cyan uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Three.js', 'R3F', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart className="w-3.5 h-3.5 text-cyber-pink fill-cyber-pink" /> by {PERSONAL_INFO.name} &copy; {new Date().getFullYear()}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-cyber-cyan transition-colors group"
          >
            <span>Back to Top</span>
            <div className="w-7 h-7 rounded-lg glass-panel flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4 text-cyber-cyan" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
