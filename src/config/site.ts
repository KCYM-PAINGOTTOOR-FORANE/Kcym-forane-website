export const siteConfig = {
  name: 'KCYM Paingottoor Forane - Ignite & Unite',
  shortName: 'KCYM',
  description:
    'Kerala Catholic Youth Movement, Paingottoor Forane. Empowering the youth of Kerala through faith, service, and community fellowship across seven parishes.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    instagram: 'https://www.instagram.com/kcym_paingottoorforane/',
  },
  creator: 'KCYM Paingottoor Forane',
  keywords: [
    'KCYM',
    'Kerala Catholic Youth Movement',
    'Paingottoor Forane',
    'Catholic youth Kerala',
    'KCYM parish',
    'Kothamangalam diocese youth',
    'Catholic youth fellowship',
  ],
  nav: [
    { label: 'About', href: '/#about' },
    { label: 'Leadership', href: '/#leadership' },
    { label: 'Parishes', href: '/#parishes' },
    { label: 'Activities', href: '/#activities' },
    { label: 'Connect', href: '/#connect' },
  ],
  contact: {
    address: 'KCYM Office, Paingottoor Parish, Kerala, India',
    email: 'contact@kcympaingottoor.org',
    phone: '+91 6238920587',
    instagramHandle: '@kcym_paingottoorforane',
  },
} as const;

export type SiteConfig = typeof siteConfig;
