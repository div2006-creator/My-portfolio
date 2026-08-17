export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | '3D & Creative' | 'AI & Web3' | 'Mobile / Apps';
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & Database' | '3D & Graphics' | 'Tools & DevOps';
  level: number; // 0 to 100
  iconName?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface NavItem {
  name: string;
  href: string;
}
