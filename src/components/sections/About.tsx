import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Rocket, CheckCircle2, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Globe className="w-6 h-6 text-cyber-cyan" />,
      title: "Interactive 3D Web",
      description: "Crafting real-time WebGL experiences using Three.js, R3F, and custom shaders that run smoothly at 60 FPS.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyber-purple" />,
      title: "Full-Stack Architecture",
      description: "Building resilient REST & GraphQL APIs, scalable databases, and serverless cloud backend infrastructure.",
    },
    {
      icon: <Code className="w-6 h-6 text-cyber-emerald" />,
      title: "Clean Modern Frontend",
      description: "Engineering type-safe React & TypeScript applications with Tailwind CSS and responsive glassmorphism UI.",
    },
    {
      icon: <Rocket className="w-6 h-6 text-cyber-pink" />,
      title: "High Performance",
      description: "Focusing on low-latency asset delivery, WebGL memory management, and Lighthouse score optimizations.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Engineering Mindset"
          title="Architecting Next-Gen Web Solutions"
          subtitle="Combining mathematical precision, modern software design patterns, and creative 3D artistry."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Bio Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <GlassCard className="h-full space-y-6 flex flex-col justify-between border-cyber-cyan/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center">
                    <Award className="w-6 h-6 text-cyber-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">About Me</h3>
                    <p className="text-xs font-mono text-cyber-cyan">Developer & Creative Technologist</p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed">
                  I love turning complex technical challenges into elegant, intuitive, and visually stunning web interfaces. Whether rendering orbital 3D data graphs or optimizing full-stack performance, quality is my highest priority.
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-800">
                <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Core Philosophies
                </div>
                {["Component Modularization", "Hardware Acceleration", "User-Centric Motion & UX"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyber-emerald flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard className="h-full space-y-4 border-slate-800 hover:border-cyber-cyan/40">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
