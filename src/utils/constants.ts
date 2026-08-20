import { Project, Skill, Experience, TimelineItem, NavItem } from '../types';

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
  { name: "C", category: "Programming Languages", description: "Procedural programming, memory fundamentals, and low-level code execution.", iconName: "Code2" },
  { name: "C++", category: "Programming Languages", description: "Object-oriented programming, data structures, and efficient algorithms.", iconName: "Terminal" },
  { name: "Java", category: "Programming Languages", description: "Object-oriented software design, class hierarchies, and core Java APIs.", iconName: "Code" },
  { name: "Python", category: "Programming Languages", description: "Scripting, data analysis, computer vision, and machine learning models.", iconName: "FileCode" },
  { name: "JavaScript", category: "Programming Languages", description: "Dynamic web logic, asynchronous execution, and modern DOM manipulation.", iconName: "Braces" },
  { name: "C#", category: "Programming Languages", description: "Object-oriented application development and Unity engine scripting.", iconName: "Cpu" },

  // 2. Web Development
  { name: "HTML", category: "Web Development", description: "Structural web markup and semantic document architecture.", iconName: "Layout" },
  { name: "CSS", category: "Web Development", description: "Web page styling, responsive flexbox & grid layouts, and visual design.", iconName: "Palette" },
  { name: "JavaScript", category: "Web Development", description: "Interactive client-side functionality and modern web logic.", iconName: "Braces" },
  { name: "React", category: "Web Development", description: "Component-based user interface development and modern state hooks.", iconName: "Layers" },
  { name: "Node.js", category: "Web Development", description: "Server-side JavaScript runtime execution and web servers.", iconName: "Server" },

  // 3. Backend & Database
  { name: "MySQL", category: "Backend & Database", description: "Relational database management, SQL queries, and table schema design.", iconName: "Database" },
  { name: "JDBC", category: "Backend & Database", description: "Java Database Connectivity API for database queries and data transactions.", iconName: "Network" },
  { name: "Java Servlets", category: "Backend & Database", description: "Server-side Java web components for processing client HTTP requests.", iconName: "Server" },
  { name: "JSP", category: "Backend & Database", description: "JavaServer Pages for server-side dynamic HTML rendering.", iconName: "Globe" },

  // 4. AI / Machine Learning
  { name: "Machine Learning", category: "AI / Machine Learning", description: "Supervised and unsupervised learning concepts and predictive data modeling.", iconName: "Brain" },
  { name: "Deep Learning", category: "AI / Machine Learning", description: "Neural network architectures and deep learning model concepts.", iconName: "Cpu" },
  { name: "Computer Vision", category: "AI / Machine Learning", description: "Image processing, visual data extraction, and object recognition.", iconName: "Eye" },
  { name: "Generative AI", category: "AI / Machine Learning", description: "Generative artificial intelligence concepts and synthetic data application.", iconName: "Sparkles" },
  { name: "YOLO", category: "AI / Machine Learning", description: "Real-time object detection models and bounding box predictions.", iconName: "Crosshair" },

  // 5. 3D / Development
  { name: "Unity", category: "3D / Development", description: "Interactive 3D game engine development, asset integration, and C# scripting.", iconName: "Gamepad2" },
  { name: "Three.js", category: "3D / Development", description: "3D WebGL graphics rendering, meshes, lighting, and camera management.", iconName: "Boxes" },
  { name: "Ursina", category: "3D / Development", description: "Python-based 3D engine development for rapid prototyping.", iconName: "Box" },

  // 6. Developer Tools
  { name: "Git", category: "Developer Tools", description: "Distributed version control, branch management, and commit tracking.", iconName: "GitBranch" },
  { name: "GitHub", category: "Developer Tools", description: "Cloud repository hosting, code collaboration, and version tracking.", iconName: "Github" },
  { name: "VS Code", category: "Developer Tools", description: "Primary integrated development environment for coding and debugging.", iconName: "Laptop" }
];

export const ACHIEVEMENTS_TIMELINE: TimelineItem[] = [
  {
    id: "duality-ai-hackathon",
    title: "Duality AI Hackathon",
    subtitle: "Grocery Item 6D Pose Estimation",
    category: "Hackathon",
    dateTag: "AI Hackathon",
    description: "Developed a computer vision 6D pose estimation pipeline using deep learning models (YOLO) and Falcon synthetic dataset.",
    highlights: [
      "Tackled 6D spatial pose prediction from synthetic images",
      "Trained deep learning models using Falcon synthetic data pipeline",
      "Applied Computer Vision & Object Recognition"
    ],
    skills: ["Python", "Computer Vision", "Deep Learning", "YOLO", "Synthetic Data"]
  },
  {
    id: "digital-heroes-training-task",
    title: "Digital Heroes Training Task",
    subtitle: "Page Pulse Technical Web Audit Tool",
    category: "Competition",
    dateTag: "Technical Challenge",
    description: "Engineered and deployed Page Pulse, a web auditing tool that analyzes target URLs and generates detailed JSON technical reports.",
    highlights: [
      "Built URL HTTP status detection & response-time measurement",
      "Extracted SEO metadata, H1 counts, & missing alt attributes",
      "Deployed production Web Auditing tool on Vercel"
    ],
    skills: ["JavaScript", "Node.js", "APIs", "HTML", "CSS"],
    link: "https://page-pulse-for-digital-heroes-train.vercel.app/"
  },
  {
    id: "fabbit-platform-project",
    title: "Fabbit Business Platform",
    subtitle: "Full-Stack Enterprise System",
    category: "Project",
    dateTag: "Software Development",
    description: "Developed a business management platform for Fabbit to manage products, service categories, administration, and user authentication.",
    highlights: [
      "Engineered administrative and operational management suite",
      "Implemented secure authentication and responsive modern workflows",
      "Integrated backend APIs and database schemas"
    ],
    skills: ["React", "Node.js", "MySQL", "JavaScript", "HTML/CSS"]
  },
  {
    id: "bamboo-printer-farm",
    title: "Bamboo 3D Printer Farm Manager",
    subtitle: "IoT & Hardware Web Platform",
    category: "Project",
    dateTag: "IoT Development",
    description: "Created a web-based platform to monitor status, track progress, stream live camera feeds, and manage remote controls for Bamboo 3D printer farms.",
    highlights: [
      "Connected to printers over local LAN / Developer Mode connectivity",
      "Monitored print progress, temperatures, & AMS filament state",
      "Implemented pause, resume, and cancel remote operational controls"
    ],
    skills: ["JavaScript", "HTML/CSS", "APIs", "3D Printer Integration"]
  },
  {
    id: "galgotias-btech-cse",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "Galgotias University",
    category: "Education",
    dateTag: "Undergraduate Degree",
    description: "Pursuing B.Tech CSE degree with strong emphasis on software engineering principles, algorithms, data structures, and computer vision.",
    highlights: [
      "Strong academic foundation in C, C++, Java, and Python",
      "Continuous project development and algorithmic problem solving",
      "Focus on full-stack web, computer vision, and backend architecture"
    ],
    skills: ["Java", "C++", "Python", "React", "MySQL"]
  }
];

export const EXPERIENCES: TimelineItem[] = ACHIEVEMENTS_TIMELINE;
