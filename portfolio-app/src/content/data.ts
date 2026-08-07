import {
  PersonalInfo,
  Stat,
  Skill,
  SkillCategoryBlock,
  Experience,
  Project,
  Certification,
  Testimonial,
  EducationItem,
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Yogesh K G',
  title: 'AI & Machine Learning Student',
  subtitle: 'Aspiring Artificial Intelligence and Machine Learning student',
  email: 'yogesh.kg4789@gmail.com',
  phone: '+91 8310182168',
  location: 'Bagaluru cross, Bangalore 560063',
  bio: 'I am an aspiring Artificial Intelligence and Machine Learning student seeking to apply strong analytical, programming, and problem-solving skills to develop intelligent systems and contribute to innovative research and real-world applications in AI.',
  resumeUrl: '/063_yogesh_resume.pdf',
  profileImage: '/Pofile Picture.png',
  availableForWork: true,
};

export const typingStrings: string[] = [
  'AI/ML Enthusiast',
  'Software Engineer',
  'Problem Solver',
  'Full-Stack Developer',
];

export const stats: Stat[] = [
  { label: 'CGPA', value: 9.29, suffix: '' },
  { label: 'Projects Completed', value: 3, suffix: '+' },
  { label: 'Hackathons Won', value: 1, suffix: '' },
];

export const skills: Skill[] = [
  { name: 'J2SE', icon: 'java', level: 90, category: 'languages' },
  { name: 'J2EE', icon: 'java', level: 85, category: 'languages' },
  { name: 'C', icon: 'cpp', level: 80, category: 'languages' },
  { name: 'C++', icon: 'cpp', level: 80, category: 'languages' },
  { name: 'Python', icon: 'python', level: 85, category: 'languages' },
  { name: 'HTML5', icon: 'html5', level: 90, category: 'frontend' },
  { name: 'CSS', icon: 'css3', level: 85, category: 'frontend' },
  { name: 'JavaScript', icon: 'javascript', level: 85, category: 'frontend' },
  { name: 'Oracle DB', icon: 'sql', level: 80, category: 'database' },
  { name: 'MySQL', icon: 'sql', level: 85, category: 'database' },
];

export const skillCategories: SkillCategoryBlock[] = [
  {
    title: 'PROGRAMMING LANGUAGES',
    icon: 'code',
    items: [
      { name: 'J2SE (Java Standard Edition)', type: 'icon' },
      { name: 'J2EE (Java Enterprise Edition)', type: 'icon' },
      { name: 'C', type: 'icon' },
      { name: 'C++', type: 'icon' },
      { name: 'Python', type: 'icon' },
    ],
  },
  {
    title: 'WEB AND UI',
    icon: 'globe',
    items: [
      { name: 'HTML5', type: 'icon' },
      { name: 'CSS', type: 'icon' },
      { name: 'JavaScript', type: 'icon' },
    ],
  },
  {
    title: 'DATABASES',
    icon: 'database',
    items: [
      { name: 'Oracle DB', type: 'icon' },
      { name: 'MySQL', type: 'icon' },
    ],
  },
];

export const experiences: Experience[] = [];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Helpdesk Support Ticket Automation System',
    description: 'Automated support ticket lifecycle with priority-based routing and SLA-driven workflows.',
    longDescription: 'Developed a full-stack Java web application to automate support ticket lifecycle with priority-based routing, SLA-driven workflows, and knowledge-base integration using MVC architecture (Servlets, JSP, DAO, Service Layer).',
    image: '',
    videoUrl: '/project videos/HelpdeskApp.mp4',
    category: 'fullstack',
    technologies: ['Java', 'Servlets', 'JSP', 'MySQL'],
    features: ['Priority-based routing', 'SLA-driven workflows', 'Knowledge-base integration'],
    githubUrl: 'https://github.com/Yogesh4789/HSTA',
    liveUrl: 'https://hstasupport.onrender.com/',
    featured: true,
  },
  {
    id: '2',
    title: 'Data Quality Intelligence for Fraud and Credit Risk',
    description: 'A modular web-based analytics system for multi-dimensional dataset quality assessment.',
    longDescription: 'A modular web-based analytics system that performs multi-dimensional dataset quality assessment, reliability scoring, and performance degradation estimation to support fraud detection and credit risk detection workflows through structured scoring, visualization, and report generation.',
    image: '/project videos/Data Quality Intelligence.jpeg',
    category: 'ai-ml',
    technologies: ['Python', 'Data Analysis', 'Visualization'],
    features: ['Reliability scoring', 'Performance degradation estimation', 'Visualization and report generation'],
    githubUrl: 'https://github.com/yogesh063/DQI',
    liveUrl: '',
    featured: true,
  },
  {
    id: '3',
    title: 'NeuroBeat: Emotion-Aware Music Recommendation',
    description: 'An AI-powered, emotion-aware music recommendation and mood-based song discovery system.',
    longDescription: 'NeuroBeat is an AI-powered, emotion-aware music recommendation project that analyzes user text to detect mood and then suggests personalized songs using contextual signals such as time of day, activity, and weather, creating a more responsive and personalized listening experience.',
    image: '',
    videoUrl: '/project videos/NueroBeatApp.mp4',
    category: 'ai-ml',
    technologies: ['AI', 'Python', 'NLP'],
    features: ['Text-based mood detection', 'Contextual music suggestions', 'Personalized listening experience'],
    githubUrl: 'https://github.com/Yogesh4789/NeuroBeat',
    liveUrl: 'https://neurobeat.streamlit.app/',
    featured: true,
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    title: 'Full Stack Java Developer Masters Program',
    issuer: 'SimpliLearn',
    issueDate: '',
    credentialId: '190106004',
    credentialUrl: '',
    image: '/images/certificate_images/JFSD Full Stack Java Developer Master Program.svg',
  },
  {
    id: '2',
    title: 'Computer Networks and Internet Protocol',
    issuer: 'NPTEL',
    issueDate: '',
    credentialId: 'NPTEL26CS35S550204335',
    credentialUrl: '',
    image: '/images/certificate_images/CN NPTEL exam (NOC26CS35S55020433504208688).svg',
  },
  {
    id: '3',
    title: 'Internship Completion Certificate',
    issuer: 'SkillCraft Technology',
    issueDate: '',
    credentialId: 'SCT/NOV25/0643',
    credentialUrl: '',
    image: '/images/certificate_images/SkillCraft Technology Certificate.svg',
  }
];

export const testimonials: Testimonial[] = [];

export const education: EducationItem[] = [
  {
    id: '1',
    institution: 'NMIT',
    degree: 'Bachelors in Artificial Intelligence & Machine Learning',
    duration: '2023-2027',
    grade: 'CGPA: 9.29',
    description: "Pursuing a Bachelor's in AI & Machine Learning at NMIT, where I'm training machines to think smarter while I work on outsmarting them one algorithm at a time.",
    logo: '/images/education/NMIT.svg',
  },
  {
    id: '2',
    institution: 'Smt SDC Independent PU College',
    degree: 'Pre-University Course (PCMB)',
    duration: '2021-2023',
    grade: '92.33%',
    description: "Completed Pre-University education with a focus on Physics, Chemistry, Mathematics, and Biology.",
    logo: '/images/education/SDC.png',
  }
];
