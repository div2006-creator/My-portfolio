import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code2,
  Terminal,
  FileCode,
  Braces,
  Layers,
  Boxes,
  Box,
  Layout,
  Palette,
  Server,
  Database,
  Network,
  Globe,
  Brain,
  Eye,
  Cpu,
  LineChart,
  GitBranch,
  Github,
  Zap,
  Laptop,
  Sparkles,
  Wrench
} from 'lucide-react';
import { SKILLS } from '../../utils/constants';
import { SkillCategory } from '../../types';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

// Icon Renderer Helper
const renderSkillIcon = (iconName: string) => {
  const iconProps = { className: "w-6 h-6 transition-transform duration-300 group-hover:scale-110" };
  switch (iconName) {
    case 'Code2': return <Code2 {...iconProps} className="w-6 h-6 text-sky-400" />;
    case 'Terminal': return <Terminal {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case 'FileCode': return <FileCode {...iconProps} className="w-6 h-6 text-amber-400" />;
    case 'Braces': return <Braces {...iconProps} className="w-6 h-6 text-yellow-400" />;
    case 'Layers': return <Layers {...iconProps} className="w-6 h-6 text-sky-400" />;
    case 'Boxes': return <Boxes {...iconProps} className="w-6 h-6 text-cyan-400" />;
    case 'Box': return <Box {...iconProps} className="w-6 h-6 text-blue-400" />;
    case 'Layout': return <Layout {...iconProps} className="w-6 h-6 text-emerald-400" />;
    case 'Palette': return <Palette {...iconProps} className="w-6 h-6 text-teal-400" />;
    case 'Server': return <Server {...iconProps} className="w-6 h-6 text-emerald-400" />;
    case 'Database': return <Database {...iconProps} className="w-6 h-6 text-blue-400" />;
    case 'Network': return <Network {...iconProps} className="w-6 h-6 text-purple-400" />;
    case 'Globe': return <Globe {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case 'Brain': return <Brain {...iconProps} className="w-6 h-6 text-indigo-400" />;
    case 'Eye': return <Eye {...iconProps} className="w-6 h-6 text-emerald-400" />;
    case 'Cpu': return <Cpu {...iconProps} className="w-6 h-6 text-purple-400" />;
    case 'LineChart': return <LineChart {...iconProps} className="w-6 h-6 text-pink-400" />;
    case 'GitBranch': return <GitBranch {...iconProps} className="w-6 h-6 text-amber-400" />;
    case 'Github': return <Github {...iconProps} className="w-6 h-6 text-slate-200" />;
    case 'Zap': return <Zap {...iconProps} className="w-6 h-6 text-yellow-400" />;
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
    { label: 'AI/ML', icon: <Brain className="w-4 h-4" /> },
    { label: 'Developer Tools', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS
    : SKILLS.filter(s => s.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1.0] }
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="Core programming languages, web frameworks, database systems, AI/ML domains, and developer tooling."
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

        {/* Skills Cards Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              >
                <GlassCard className="h-full space-y-4 border-slate-800 hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_15px_30px_rgba(56,189,248,0.18)] group p-6">
                  
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center group-hover:border-sky-400/40 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300">
                      {renderSkillIcon(skill.iconName)}
                    </div>

                    <span className="text-[10px] font-mono text-sky-400 font-semibold px-2.5 py-1 rounded-full bg-sky-400/10 border border-sky-400/30">
                      {skill.tag}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {skill.category}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-xs leading-relaxed font-sans pt-1 border-t border-slate-800/60">
                    {skill.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
