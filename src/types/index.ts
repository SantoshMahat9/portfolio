export interface Project {
  id: string;
  codeName?: string;
  title: string;
  category: string;
  year: string;
  status?: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  mode: string;
  isUpcoming: boolean;
  statusBadge: string;
  scopeSummary: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  tag: string;
  skills: {
    name: string;
    description: string;
    verified: boolean;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  duration: string;
  cgpa: string;
  location: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  credentialNote?: string;
  highlight?: boolean;
}
