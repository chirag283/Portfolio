export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  details: ProjectDetails;
}

export interface ProjectDetails {
  overview: string;
  problemStatement: string;
  solution: string;
  architecture: string;
  folderStructure: string;
  challenges: string[];
  futureImprovements: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; iconName: string; level?: number }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  grade?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface GitHubProfile {
  avatarUrl: string;
  name: string;
  login: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  htmlUrl: string;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  htmlUrl: string;
  updatedAt: string;
}
