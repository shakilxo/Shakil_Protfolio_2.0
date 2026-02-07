
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  liveLink: string;
  repoLink?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}
