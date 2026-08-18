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
    id: "fabbit-business-platform",
    title: "Fabbit Business Management Platform",
    tagline: "Business operations, product, service, and administrative management system.",
    description: "A business management platform developed for Fabbit to manage products, services, administration, and overall business operations.",
    longDescription: "Fabbit Business Management Platform provides a comprehensive administrative and operational suite designed for Fabbit. It handles product catalog management, service offerings, business administration, secure authentication, and responsive modern user workflows.",
    category: "Full Stack",
    tags: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "MySQL", "REST APIs"],
    features: [
      "Product management",
      "Categories and services",
      "Admin management",
      "Business management functionality",
      "Authentication and authorization",
      "Modern responsive interface",
      "Deployment and domain integration"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    contextTag: "Business Platform"
  },
  {
    id: "page-pulse",
    title: "Page Pulse",
    tagline: "Web auditing tool generating real-time technical website reports.",
    description: "A website auditing tool that analyzes a given website URL and generates a comprehensive technical report including HTTP status, performance metrics, SEO tags, and image metadata.",
    longDescription: "Page Pulse (developed as part of the Digital Heroes Training Task) accepts any target URL and performs rapid server-side inspection to return structural and technical audits in JSON format, detailing HTTP response times, SEO headers, missing alt attributes, and approximate word counts.",
    category: "Full Stack",
    tags: ["JavaScript", "Node.js", "APIs", "HTML", "CSS"],
    features: [
      "HTTP status detection",
      "Response-time measurement",
      "Page title extraction",
      "Meta description analysis",
      "H1 count",
      "Images missing alt text",
      "Approximate word count",
      "JSON-based backend response"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/div2006-creator/Page-Pulse-for-Digital-Heroes-Training-Task",
    liveUrl: "https://page-pulse-for-digital-heroes-train.vercel.app/",
    featured: true,
    contextTag: "Digital Heroes Training Task"
  },
  {
    id: "grocery-6d-pose-estimation",
    title: "Grocery Item 6D Pose Estimation",
    tagline: "Computer vision 6D pose estimation using Falcon synthetic dataset.",
    description: "A deep learning computer vision project developed for the Duality AI Hackathon estimating the 6D pose (3D translation & rotation) of grocery items from images.",
    longDescription: "Grocery Item 6D Pose Estimation leverages deep learning architectures (YOLO) and synthetic dataset generation via the Falcon platform to predict precise 6D spatial poses for items in retail and automated robotic environments.",
    category: "AI & Computer Vision",
    tags: ["Python", "Computer Vision", "Deep Learning", "YOLO", "Synthetic Data"],
    features: [
      "Project overview & 6D pose estimation concept",
      "Computer vision pipeline execution",
      "Deep learning object recognition (YOLO)",
      "Falcon synthetic dataset integration",
      "Duality AI Hackathon context"
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    contextTag: "Duality AI Hackathon"
  },
  {
    id: "bamboo-3d-printing-farm",
    title: "Bamboo 3D Printing Farm Management Platform",
    tagline: "Web platform for remote monitoring and control of Bamboo 3D printers.",
    description: "A web-based platform designed to monitor status, track progress, stream live camera feeds, and manage temperature & printer controls for Bamboo 3D printer farms.",
    longDescription: "Bamboo 3D Printing Farm Management Platform interfaces with printer hardware over local LAN / Developer Mode connectivity. It provides real-time telemetry dashboards for print progress, AMS filament status, live video feeds, and remote pause/resume/cancel operational controls.",
    category: "IoT & Web",
    tags: ["HTML", "CSS", "JavaScript", "APIs", "3D Printer Integration"],
    features: [
      "Printer status monitoring",
      "Print progress tracking",
      "Temperature monitoring",
      "Camera feed streaming",
      "AMS information",
      "Pause/resume/cancel print controls",
      "LAN / Developer Mode printer connectivity"
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    contextTag: "Hardware & IoT"
  },
  {
    id: "oceanguard",
    title: "OceanGuard",
    tagline: "Crowdsourced ocean hazard reporting and social media analytics platform.",
    description: "An integrated platform helping collect, analyze, and visualize ocean hazard information using crowdsourced reports, data analytics, and social media data.",
    longDescription: "OceanGuard aggregates real-time environmental hazard reports from community participants and social media sentiment streams, providing interactive data visualizations and AI-assisted hazard detection to support maritime safety.",
    category: "Data Analytics",
    tags: ["React", "Node.js", "Data Visualization", "Social Media Analytics", "AI Analysis"],
    features: [
      "Crowdsourced hazard reporting",
      "Social media analytics",
      "Ocean hazard monitoring",
      "Data visualization",
      "AI / data analysis components"
    ],
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    contextTag: "Environmental Tech"
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
