import { Project, Skill, Experience, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: "Divyansh Sharma",
  title: "Computer Science Engineering Student / Developer",
  tagline: "Building intelligent, interactive and impactful digital experiences.",
  bio: "I am a Computer Science Engineering student and developer passionate about building high-performance web applications, intelligent systems, and interactive 3D digital experiences.",
  email: "sharmadiv888@gmail.com",
  github: "https://github.com/div2006-creator",
  linkedin: "https://www.linkedin.com/in/divyansh-sharma-5166ba331/",
  location: "India",
  status: "Available for Software Engineering Roles & Projects",
  stats: [
    { label: "Engineering Major", value: "CS & SE" },
    { label: "Projects Built", value: "20+" },
    { label: "Core Focus", value: "Web3D & AI" },
    { label: "Code Quality", value: "100%" },
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "nexus-3d-dashboard",
    title: "Nexus 3D Cyber Dashboard",
    tagline: "Real-time futuristic analytics visualizer with interactive 3D WebGL nodes.",
    description: "An enterprise-grade monitoring dashboard featuring real-time data streaming, interactive 3D network topology visualization, and customizable glassmorphism widgets.",
    longDescription: "Nexus 3D Cyber Dashboard reimagines telemetry monitoring by representing server nodes as interactive 3D orbital constellations. Built with React Three Fiber and WebGL shaders, it offers zero latency streaming, hardware-accelerated rendering, and modular analytics cards.",
    category: "3D & Creative",
    tags: ["React", "Three.js", "R3F", "TypeScript", "Tailwind CSS", "WebSockets"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    metrics: [
      { label: "Render Target", value: "60 FPS" },
      { label: "Data Throughput", value: "10k msg/s" }
    ]
  },
  {
    id: "quantum-ai-platform",
    title: "Quantum AI Studio",
    tagline: "Generative AI workspace for developers and creative prompt engineers.",
    description: "A full-stack SaaS platform empowering creators to generate 3D assets, code snippets, and design tokens using LLM orchestrations.",
    longDescription: "Quantum AI Studio combines state-of-the-art generative artificial intelligence models with an intuitive node-based creative flow. Users can generate low-poly 3D models directly in the browser and export them to GLTF/GLB formats.",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    metrics: [
      { label: "Active Users", value: "12,000+" },
      { label: "Asset Generation", value: "< 2.5s" }
    ]
  },
  {
    id: "hyperion-fintech",
    title: "Hyperion DeFi Protocol",
    tagline: "Decentralized liquidity platform with real-time WebGL asset visualization.",
    description: "High-security DeFi platform featuring dynamic asset allocation charts, particle-based risk graphs, and slick wallet connection modules.",
    longDescription: "Hyperion provides seamless liquidity pool management with custom Framer Motion page transitions, responsive dark mode glassmorphism UI, and real-time gas tracking.",
    category: "AI & Web3",
    tags: ["React", "Ethers.js", "Framer Motion", "Tailwind CSS", "Solidity"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    metrics: [
      { label: "TVL Tracked", value: "$45M+" },
      { label: "Latency", value: "120ms" }
    ]
  },
  {
    id: "aurora-design-system",
    title: "Aurora Cyber Design System",
    tagline: "A futuristic component library built for 3D web apps and dark UIs.",
    description: "Comprehensive design system featuring 40+ accessible glassmorphism components, glow utilities, and Three.js canvas helper hooks.",
    longDescription: "Aurora gives developers pre-built futuristic UI primitives, canvas wrappers, and custom GLSL shader effects ready to drop into any React application.",
    category: "3D & Creative",
    tags: ["React", "Storybook", "Tailwind CSS", "TypeScript", "GSAP"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false
  }
];

export const SKILLS: Skill[] = [
  // 1. Programming Languages
  {
    name: "Java",
    category: "Programming Languages",
    description: "Object-oriented programming, robust application architecture, and data structures.",
    tag: "Core Language",
    iconName: "Code2"
  },
  {
    name: "C++",
    category: "Programming Languages",
    description: "High-performance algorithms, memory management, and competitive problem solving.",
    tag: "Systems & DSA",
    iconName: "Terminal"
  },
  {
    name: "Python",
    category: "Programming Languages",
    description: "AI/ML data pipelines, scripting, computer vision automation, and backend logic.",
    tag: "AI & Scripting",
    iconName: "FileCode"
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    description: "Asynchronous ES6+ web execution, dynamic DOM interfaces, and full-stack logic.",
    tag: "Web Core",
    iconName: "Braces"
  },

  // 2. Web Development
  {
    name: "React",
    category: "Web Development",
    description: "Building responsive, component-based UIs with modern hooks and state management.",
    tag: "Frontend Framework",
    iconName: "Layers"
  },
  {
    name: "Three.js",
    category: "Web Development",
    description: "Hardware-accelerated 3D WebGL graphics, lighting, materials, and custom shaders.",
    tag: "3D Web Graphics",
    iconName: "Boxes"
  },
  {
    name: "React Three Fiber",
    category: "Web Development",
    description: "Declarative 3D scene architecture, Drei helpers, and interactive canvas components.",
    tag: "3D React Ecosystem",
    iconName: "Box"
  },
  {
    name: "HTML5 / CSS3",
    category: "Web Development",
    description: "Semantic page structure, flex/grid responsive layouts, and keyframe animations.",
    tag: "Markup & Styling",
    iconName: "Layout"
  },
  {
    name: "Tailwind CSS",
    category: "Web Development",
    description: "Utility-first cyber styling, modern glassmorphic designs, and theme configurations.",
    tag: "CSS Framework",
    iconName: "Palette"
  },

  // 3. Backend & Database
  {
    name: "Node.js",
    category: "Backend & Database",
    description: "Event-driven asynchronous server runtimes and REST API web servers.",
    tag: "Backend Runtime",
    iconName: "Server"
  },
  {
    name: "MySQL",
    category: "Backend & Database",
    description: "Relational database schema design, indexing, foreign keys, and complex SQL queries.",
    tag: "Relational DB",
    iconName: "Database"
  },
  {
    name: "Express.js",
    category: "Backend & Database",
    description: "Modular backend routing, middleware validation, and API authentication.",
    tag: "API Framework",
    iconName: "Network"
  },
  {
    name: "REST APIs",
    category: "Backend & Database",
    description: "Designing structured JSON endpoint architecture and HTTP request handling.",
    tag: "API Architecture",
    iconName: "Globe"
  },

  // 4. AI/ML
  {
    name: "Machine Learning",
    category: "AI/ML",
    description: "Supervised and unsupervised learning models, regression, classification, and metrics.",
    tag: "Core AI Domain",
    iconName: "Brain"
  },
  {
    name: "Computer Vision",
    category: "AI/ML",
    description: "Digital image processing, visual data extraction, and object recognition pipelines.",
    tag: "Visual Intelligence",
    iconName: "Eye"
  },
  {
    name: "PyTorch & Scikit-Learn",
    category: "AI/ML",
    description: "Neural network training, tensor computations, and machine learning model evaluation.",
    tag: "ML Frameworks",
    iconName: "Cpu"
  },
  {
    name: "Data Analytics",
    category: "AI/ML",
    description: "Exploratory data analysis, feature engineering, and statistical data visualization.",
    tag: "Data Pipelines",
    iconName: "LineChart"
  },

  // 5. Developer Tools
  {
    name: "Git",
    category: "Developer Tools",
    description: "Distributed version control, branch management, merge conflict resolution, and commits.",
    tag: "Version Control",
    iconName: "GitBranch"
  },
  {
    name: "GitHub",
    category: "Developer Tools",
    description: "Open-source collaboration, pull requests, repository management, and code reviews.",
    tag: "Code Hosting",
    iconName: "Github"
  },
  {
    name: "Vite",
    category: "Developer Tools",
    description: "Next-generation fast frontend tooling, ESM module bundling, and instant HMR.",
    tag: "Build Tool",
    iconName: "Zap"
  },
  {
    name: "VS Code",
    category: "Developer Tools",
    description: "Customized IDE environment, debugging workflows, and extension integrations.",
    tag: "IDE Environment",
    iconName: "Laptop"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Senior 3D Web Engineer",
    company: "CyberSpace Interactive",
    period: "2024 - Present",
    description: [
      "Architected interactive 3D WebGL experiences and design systems using React Three Fiber, Three.js, and GSAP.",
      "Optimized canvas performance achieving steady 60 FPS across mobile and low-tier GPU devices through geometry instancing and texture compression.",
      "Mentored junior developers in WebGL shaders and state management pattern."
    ],
    skills: ["React", "Three.js", "R3F", "TypeScript", "GSAP"]
  },
  {
    id: "exp-2",
    role: "Full Stack Developer",
    company: "Vortex Digital Labs",
    period: "2023 - 2024",
    description: [
      "Built responsive, high-traffic web applications with React, Next.js, Node.js, and Tailwind CSS.",
      "Implemented real-time WebSocket telemetry visualizers and interactive glassmorphism UI components.",
      "Improved site load speeds by 45% using Vite bundle splitting and dynamic asset preloading."
    ],
    skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"]
  },
  {
    id: "exp-3",
    role: "Frontend Developer Engineer",
    company: "Apex Tech Studios",
    period: "2022 - 2023",
    description: [
      "Developed modular web frontends, REST API integrations, and smooth micro-animations using Framer Motion.",
      "Collaborated with UI/UX designers to translate Figma wireframes into polished, pixel-perfect web interfaces."
    ],
    skills: ["JavaScript", "React", "HTML5/CSS3", "Framer Motion", "Tailwind CSS"]
  }
];
