import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yogesh K G - Portfolio',
    short_name: 'Yogesh',
    description: 'Professional portfolio of Yogesh K G',
    start_url: '/',
    display: 'standalone',
    background_color: '#030014',
    theme_color: '#030014',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
