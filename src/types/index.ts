export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  status?: string;
  description: string;
  longDescription?: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  accentColor: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  joiningDate?: string;
  mode: string;
  isUpcoming?: boolean;
  statusBadge?: string;
  responsibilities: string[];
  technologies: string[];
  highlight?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    levelDescription?: string;
    iconName?: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  university: string;
  duration: string;
  cgpa: string;
  location: string;
  highlights: string[];
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
