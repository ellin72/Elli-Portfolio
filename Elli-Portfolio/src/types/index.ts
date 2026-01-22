// Project type definitions
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  codeUrl: string;
  demoUrl: string;
}

// Skill type definitions
export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

// Social link type
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// Contact form type
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Navigation item type
export interface NavItem {
  name: string;
  href: string;
}
