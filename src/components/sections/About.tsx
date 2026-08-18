import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Code2,
  Brain,
  Eye,
  Server,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { AboutCanvas } from '../canvas/AboutCanvas';

export const About: React.FC = () => {
  // Technical Interests Data
  const interests = [
    {
      title: "Software Development",
      icon: <Code2 className="w-6 h-6 text-sky-400" />,
      description: "Engineering clean, scalable, and maintainable software architectures using object-oriented principles.",
      badge: "Core Field",
    },
    {
      title: "AI / Machine Learning",
      icon: <Brain className="w-6 h-6 text-indigo-400" />,
      description: "Exploring predictive algorithms, neural networks, intelligent automation, and data analytics.",
      badge: "Research Focus",
    },
    {
      title: "Computer Vision",
      icon: <Eye className="w-6 h-6 text-emerald-400" />,
      description: "Processing visual data, feature extraction, object detection, and intelligent visual analytics.",
      badge: "Domain Interest",
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-purple-400" />,
      description: "Designing RESTful APIs, microservices, secure authentication, and relational database schemas.",
      badge: "Architecture",
    },
  ];

  // Tech Stack & Languages
  const languages = ["Java", "C++", "Python", "JavaScript"];
  const technologies = ["React", "Node.js", "MySQL", "Git", "GitHub", "Three.js"];

  // Animated Statistics Cards Data
  const statCards = [
    { value: "B.Tech CSE", label: "Galgotias University", highlight: "Undergraduate" },
    { value: "4+", label: "Programming Languages", highlight: "Java, C++, Python, JS" },
    { value: "6+", label: "Modern Frameworks & Tools", highlight: "React, Node, Three.js, MySQL" },
    { value: "20+", label: "Projects & Experiments", highlight: "Full-Stack & 3D Web" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1.0] }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-grid">
      {/* Background glow graphics */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Developer Profile"
          title="About Divyansh Sharma"
          subtitle="Computer Science Engineering student focused on building intelligent software, backend architectures, and 3D web applications."
        />

        {/* Top Grid: Bio & Education Card + 3D Interactive Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Introduction & Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <GlassCard className="h-full space-y-6 border-slate-800 hover:border-sky-400/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="space-y-4">
                
                {/* Header Tag */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white">Divyansh Sharma</h3>
                      <p className="text-xs font-mono text-sky-400">Computer Science & Engineering</p>
                    </div>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Galgotias University</span>
                  </div>
                </div>

                {/* Short Intro */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                  I am a passionate <strong className="text-white">Computer Science Engineering student at Galgotias University</strong> with a strong foundation in core computer science, algorithm design, and modern software development.
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  My mission is to create intelligent, high-performance applications by bridging backend engineering with interactive frontend and 3D web technologies. I actively explore AI/ML algorithms and computer vision pipelines to solve real-world problems.
                </p>
              </div>

              {/* Education Badge Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 uppercase tracking-wider">Degree Program</span>
                  <span className="text-sky-400 font-semibold">Undergraduate</span>
                </div>
                <div className="text-sm font-heading font-semibold text-white">
                  B.Tech in Computer Science and Engineering
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Galgotias University &bull; India
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Card: Interactive 3D Node & Quick Profile Attributes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <GlassCard className="h-full flex flex-col justify-between border-slate-800 hover:border-sky-400/40 transition-all duration-300 transform hover:-translate-y-1">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" /> Interactive Tech Node
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">R3F 3D Mesh</span>
                </div>
                <AboutCanvas />
              </div>

              {/* Core Strengths Bullet Points */}
              <div className="space-y-2 pt-4 border-t border-slate-800/80">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Engineering Principles
                </div>
                {[
                  "Strong Algorithmic & Problem-Solving Foundation",
                  "Modular & Maintainable Code Architecture",
                  "Cross-Domain Integration (Web, AI & 3D)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

        </div>

        {/* Middle Section: Animated Statistics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {statCards.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard className="h-full border-slate-800 hover:border-sky-400/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(56,189,248,0.12)]">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-sky-400 font-semibold px-2.5 py-0.5 rounded-full bg-sky-400/10 border border-sky-400/20">
                    {stat.highlight}
                  </span>
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight pt-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {stat.label}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Interests Section */}
        <div className="space-y-8 mb-16">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Technical Interests & Specializations
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
              Key domains driving my software development journey and academic research.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {interests.map((item, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <GlassCard className="h-full space-y-4 border-slate-800 hover:border-sky-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:rotate-1 hover:shadow-[0_15px_35px_rgba(56,189,248,0.15)] group">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-heading font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-slate-400 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Skills & Languages Summary Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="border-sky-400/30 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <h3 className="text-xl font-heading font-bold text-white flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-sky-400" /> Languages & Technologies
                </h3>
                <p className="text-slate-400 text-xs font-mono">
                  Primary toolset & programming languages utilized across academic & personal projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Languages */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-sky-400" /> Programming Languages
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 font-semibold hover:border-sky-400/60 hover:text-sky-400 hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-300"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" /> Technologies & Tools
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 font-semibold hover:border-indigo-400/60 hover:text-indigo-400 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
