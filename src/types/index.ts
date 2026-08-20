export type ProjectCategory = 'Full Stack' | 'AI & Computer Vision' | 'IoT & Web' | 'Data Analytics';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  tags: string[];
  features?: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  contextTag?: string;
}

export type SkillCategory =
  | 'Programming Languages'
  | 'Web Development'
  | 'Backend & Database'
  | 'AI / Machine Learning'
  | '3D / Development'
  | 'Developer Tools';

export interface Skill {
  name: string;
  category: SkillCategory;
  description?: string;
  iconName: string;
}

export type TimelineType = 'Hackathon' | 'Competition' | 'Project' | 'Achievement' | 'Education';

export interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  category: TimelineType;
  dateTag?: string;
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
