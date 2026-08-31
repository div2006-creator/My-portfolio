import React from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Terminal,
  X,
} from 'lucide-react';

const skills = [
  'C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React',
  'Node.js', 'MySQL', 'Git', 'GitHub', 'Machine Learning', 'Deep Learning',
  'Generative AI',
];

const projects = [
  {
    number: '01',
    title: 'CrimeNet AI',
    description: 'AI-based criminal network analysis project developed for Smart India Hackathon.',
    github: 'https://github.com/div2006-creator/CNI',
  },
  {
    number: '02',
    title: 'Page Pulse',
    description: 'Web application developed for the Digital Heroes Training Task.',
    github: 'https://github.com/div2006-creator/Page-Pulse-for-Digital-Heroes-Training-Task',
    live: 'https://page-pulse-for-digital-heroes-train.vercel.app/',
  },
  {
    number: '03',
    title: 'Fabbit Business Management Platform',
    description: 'Business management website/platform developed for Fabbit.',
  },
  {
    number: '04',
    title: '3D Printing Farm Management',
    description: 'Website for managing and monitoring a 3D printing farm.',
  },
];

export const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark"><Terminal size={17} /></span>
          <span>DS<span className="brand-dot">.</span></span>
        </a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`}>
          {['about', 'skills', 'projects', 'education', 'contact'].map((item) => (
            <a key={item} href={`#${item}`} onClick={closeMenu}>{item}</a>
          ))}
        </nav>
        <a className="header-link" href="#contact">Let&apos;s connect <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Computer Science Student</p>
            <h1>Hi, I&apos;m <span>Divyansh<br className="desktop-break" /> Sharma</span></h1>
            <p className="hero-role">Computer Science Engineering Student &amp; Developer</p>
            <p className="hero-intro">I&apos;m a CSE student at Galgotias University who enjoys turning thoughtful ideas into useful software. My interests span software development, DSA, AI/ML, and backend development.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View projects <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Contact me <ArrowUpRight size={17} /></a>
            </div>
          </div>
          <div className="hero-aside" aria-label="Academic profile">
            <div className="aside-label">Currently studying</div>
            <div className="aside-degree">B.Tech<br />Computer Science<br />&amp; Engineering</div>
            <div className="aside-rule" />
            <div className="aside-meta"><span>University</span><strong>Galgotias University</strong></div>
            <div className="aside-meta"><span>CGPA</span><strong>8.8</strong></div>
          </div>
        </section>

        <section id="about" className="content-section section-wrap split-section">
          <div className="section-kicker">01 / About</div>
          <div className="section-content">
            <h2>Learning by building.</h2>
            <p className="large-copy">I am a Computer Science Engineering student interested in coding, software development, data structures and algorithms, and AI/ML. I like exploring how strong fundamentals and practical engineering can come together in clear, dependable products.</p>
            <div className="focus-line"><Code2 size={18} /><span>Software development · DSA · AI/ML · Backend development</span></div>
          </div>
        </section>

        <section id="skills" className="content-section section-wrap split-section">
          <div className="section-kicker">02 / Skills</div>
          <div className="section-content">
            <h2>Tools I work with.</h2>
            <div className="skill-grid">
              {skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section id="projects" className="content-section section-wrap split-section">
          <div className="section-kicker">03 / Selected work</div>
          <div className="section-content">
            <h2>Projects with purpose.</h2>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-item" key={project.title}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-info"><h3>{project.title}</h3><p>{project.description}</p></div>
                  <div className="project-links">
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={18} /></a>}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}><ExternalLink size={18} /></a>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="content-section section-wrap split-section">
          <div className="section-kicker">04 / Education</div>
          <div className="section-content education-row">
            <GraduationCap size={30} strokeWidth={1.5} />
            <div><h2>B.Tech Computer Science and Engineering</h2><p>Galgotias University</p></div>
            <div className="cgpa"><span>CGPA</span><strong>8.8</strong></div>
          </div>
        </section>

        <section id="contact" className="contact-section section-wrap">
          <p className="eyebrow">05 / Contact</p>
          <h2>Let&apos;s start a conversation.</h2>
          <p className="contact-copy">For projects, ideas, or just a good technical conversation.</p>
          <div className="contact-links">
            <a href="https://github.com/div2006-creator" target="_blank" rel="noreferrer"><Github size={19} /> GitHub <ArrowUpRight size={15} /></a>
            <span><Linkedin size={19} /> LinkedIn <small>URL not provided</small></span>
            <span><Mail size={19} /> Email <small>Placeholder</small></span>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>Divyansh Sharma</span><span>Built with React</span></footer>
    </div>
  );
};

export default App;
