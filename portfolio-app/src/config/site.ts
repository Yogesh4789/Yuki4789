export const siteConfig = {
  name: 'Yogesh K G',
  title: 'Yogesh K G | Software Engineer',
  description: 'Portfolio of Yogesh K G, an aspiring AI & Machine Learning student.',
  url: 'https://yogeshkg.dev',
  ogImage: '/og.jpg',
  links: {
    github: 'https://github.com/Yogesh4789',
    linkedin: 'https://linkedin.com/in/yogeshkg',
    twitter: 'https://twitter.com/yogeshkg',
  },
  author: 'Yogesh K G',
};

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key',
};
