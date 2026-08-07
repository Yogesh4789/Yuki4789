import { NavItem, SocialLink } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CERTIFICATIONS: 'certifications',
  RESUME: 'resume',
  CONTACT: 'contact',
};

export const ANIMATION_DURATION = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
};

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Yogesh4789',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yogesh-k-g-ab394229b/',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://x.com/Yogesh_K_G',
    icon: 'twitter',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yogesh_k_g4789/',
    icon: 'instagram',
  },
];
