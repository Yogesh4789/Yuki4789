export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // lucide icon name
}

export interface Skill {
  name: string;
  icon: string; // path to icon or component name
  level: number; // 0-100
  category: SkillCategory;
}

export type SkillCategory = 'frontend' | 'backend' | 'ai-ml' | 'cloud' | 'database' | 'tools' | 'languages';

// Bento-box skill types
export interface SkillItem {
  name: string;
  type: 'icon' | 'badge'; // icon = renders SVG logo + label, badge = renders outlined pill
}

export interface SkillCategoryBlock {
  title: string;
  icon: string; // lucide icon name
  items: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string; // placeholder path
  videoUrl?: string; // path to local video or external URL
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export type ProjectCategory = 'all' | 'fullstack' | 'ai-ml';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string; // placeholder
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating: number; // 1-5
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  resumeUrl: string;
  profileImage: string;
  availableForWork: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description: string;
  logo: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
