import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Sparkles, Terminal, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { Button } from '../ui/Button';
import { HeroCanvas } from '../canvas/HeroCanvas';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-purple/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-cyber-cyan/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyber-cyan/30 text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
              <span className="text-cyber-cyan font-semibold">{PERSONAL_INFO.status}</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.1]">
                Building <br />
                <span className="text-gradient">3D Digital Worlds</span> <br />
                & Web Apps
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
              Hi, I'm <strong className="text-white">{PERSONAL_INFO.name}</strong>. {PERSONAL_INFO.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
              >
                Explore Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Terminal className="w-5 h-5" />}
              >
                Get In Touch
              </Button>
            </div>

            {/* Stats Row */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-cyber-cyan text-glow-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 3D Interactive Canvas Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl glass-panel p-2 border border-slate-700/50 shadow-2xl">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-slate-800 text-[11px] font-mono text-cyber-cyan">
                <Sparkles className="w-3.5 h-3.5 text-cyber-cyan animate-pulse" />
                <span>Interactive 3D WebGL</span>
              </div>
              <HeroCanvas />
              <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                Drag to rotate 3D mesh
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-cyber-cyan transition-colors"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-cyber-cyan" />
      </a>
    </section>
  );
};
