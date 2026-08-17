import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';
import { StarsBackground } from '../components/canvas/StarsBackground';

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background text-slate-100 selection:bg-cyber-cyan selection:text-background overflow-x-hidden">
      {/* 3D Ambient Stars Canvas Backdrop */}
      <StarsBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
