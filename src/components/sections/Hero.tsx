import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight, Terminal, Sparkles, Code2, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { Button } from '../ui/Button';
import { HeroCanvas } from '../canvas/HeroCanvas';

export const Hero: React.FC = () => {
  // Staggered entrance animation variants for loading sequence
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1.0] },
    },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Soft background ambient gradient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sky-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Content Column with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-sky-400/30 text-xs font-mono text-slate-300 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-sky-300 font-semibold">{PERSONAL_INFO.status}</span>
            </motion.div>

            {/* Candidate Name */}
            <motion.div variants={itemVariants} className="space-y-1">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-sky-400 uppercase font-semibold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-sky-400" /> Software Portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.1]">
                {PERSONAL_INFO.name}
              </h1>
            </motion.div>

            {/* Role Title */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-lg sm:text-xl font-heading font-semibold text-slate-200">
              <GraduationCap className="w-5 h-5 text-indigo-400 flex-shrink-0" />
              <span className="text-gradient-cyan">{PERSONAL_INFO.title}</span>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants}>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-sans">
                "{PERSONAL_INFO.tagline}"
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={<ChevronRight className="w-5 h-5" />}
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={<Terminal className="w-5 h-5" />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-sky-400 text-glow-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D Interactive Canvas Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl glass-panel p-2 border border-slate-800 shadow-2xl overflow-hidden group">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 text-[11px] font-mono text-sky-400">
                <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                <span>Interactive 3D Core</span>
              </div>

              <HeroCanvas />

              <div className="absolute bottom-4 right-4 z-20 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800">
                Move cursor to interact
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors"
        aria-label="Scroll to About Section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
      </a>
    </section>
  );
};
