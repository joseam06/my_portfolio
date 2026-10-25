export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  placeholder?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
}