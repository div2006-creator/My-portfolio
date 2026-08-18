import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  Code,
  FileCode,
  Braces,
  Cpu,
  Layout,
  Palette,
  Layers,
  Server,
  Database,
  Network,
  Globe,
  Brain,
  Eye,
  Sparkles,
  Crosshair,
  Gamepad2,
  Boxes,
  Box,
  GitBranch,
  Github,
  Laptop,
  Wrench
} from 'lucide-react';
import { SKILLS } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

// Icon Renderer Helper for confirmed technical skills
const renderSkillIcon = (iconName: string) => {
  const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
  switch (iconName) {
    case 'Code2': return <Code2 {...iconProps} className="w-6 h-6 text-sky-400" />;
    case 'Terminal': return <Terminal {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case 'Code': return <Code {...iconProps} className="w-6 h-6 text-emerald-400" />;
    case 'FileCode': return <FileCode {...iconProps} className="w-6 h-6 text-amber-400" />;
    case 'Braces': return <Braces {...iconProps} className="w-6 h-6 text-yellow-400" />;
    case 'Cpu': return <Cpu {...iconProps} className="w-6 h-6 text-purple-400" />;
    case 'Layout': return <Layout {...iconProps} className="w-6 h-6 text-sky-400" />;
    case 'Palette': return <Palette {...iconProps} className="w-6 h-6 text-pink-400" />;
    case 'Layers': return <Layers {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case 'Server': return <Server {...iconProps} className="w-6 h-6 text-emerald-400" />;
    case 'Database': return <Database {...iconProps} className="w-6 h-6 text-blue-400" />;
    case 'Network': return <Network {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case 'Globe': return <Globe {...iconProps} className="w-6 h-6 text-purple-400" />;
    case 'Brain': return <Brain {...iconProps} className="w-6 h-6 text-sky-400" />;
    case 'Eye': return <Eye {...iconProps} className="w-6 h-6 text-teal-400" />;
    case 'Sparkles': return <Sparkles {...iconProps} className="w-6 h-6 text-amber-300" />;
    case 'Crosshair': return <Crosshair {...iconProps} className="w-6 h-6 text-rose-400" />;
    case 'Gamepad2': return <Gamepad2 {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case 'Boxes': return <Boxes {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case 'Box': return <Box {...iconProps} className="w-6 h-6 text-blue-400" />;
    case 'GitBranch': return <GitBranch {...iconProps} className="w-6 h-6 text-amber-400" />;
    case 'Github': return <Github {...iconProps} className="w-6 h-6 text-slate-200" />;
    case 'Laptop': return <Laptop {...iconProps} className="w-6 h-6 text-sky-400" />;
    default: return <Code2 {...iconProps} className="w-6 h-6 text-sky-400" />;
  }
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    { label: 'All', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Programming Languages', icon: <Code2 className="w-4 h-4" /> },
    { label: 'Web Development', icon: <Layers className="w-4 h-4" /> },
    { label: 'Backend & Database', icon: <Server className="w-4 h-4" /> },
    { label: 'AI / Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { label: '3D / Development', icon: <Boxes className="w-4 h-4" /> },
    { label: 'Developer Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1.0] }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Skills"
          title="Skills & Technologies"
          subtitle="A verified overview of programming languages, web development frameworks, databases, AI/ML concepts, 3D engines, and developer tools."
        />

        {/* Category Tabs Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                selectedCategory === cat.label
                  ? 'bg-sky-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={`${skill.category}-${skill.name}`}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <GlassCard className="h-full space-y-3 border-slate-800 hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_15px_30px_rgba(56,189,248,0.18)] group p-5">
                  
                  {/* Card Header: Icon & Category Label */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-sky-400/40 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                      {renderSkillIcon(skill.iconName)}
                    </div>

                    <span className="text-[10px] font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="space-y-1 pt-1">
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Description */}
                  {skill.description && (
                    <p className="text-slate-400 text-xs leading-relaxed font-sans pt-2 border-t border-slate-800/60">
                      {skill.description}
                    </p>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
