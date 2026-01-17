// Product data for Avicroft
export const PRODUCTS = [
  {
    id: 'education',
    name: 'Education',
    tagline: 'School Management System for Africa',
    description: 'Relaxed happy person using laptop in a bright modern space, coffee nearby. Genuine smile, looking at screen like something just worked. Soft natural lighting, clean background. Warm and inviting. No text.',
    features: [
      'Student records',
      'Attendance tracking',
      'Fee management',
      'Report cards',
    ],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    url: 'https://education.avicroft.com',
    ctaText: 'Start for free',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    tagline: 'Launch Your Online Store Today',
    description: 'Full-featured e-commerce platform to sell products online with ease.',
    features: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Order management',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    url: 'https://ecommerce.avicroft.com',
    ctaText: 'Start for free',
  },
  {
    id: 'salon',
    name: 'Salon',
    tagline: 'Beauty & Wellness Booking Made Simple',
    description: 'Complete booking and management platform for salons, spas, nail bars, and lash studios.',
    features: [
      'Online booking',
      'Staff scheduling',
      'Payment processing',
      'Client management',
    ],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    url: 'https://salon.avicroft.com',
    ctaText: 'Start for free',
  },
] as const;

export type Product = typeof PRODUCTS[number];

export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@avicroft',
  twitter: 'https://twitter.com/avicroft',
  facebook: 'https://facebook.com/avicroft',
  instagram: 'https://instagram.com/avicroft',
  linkedin: 'https://linkedin.com/company/avicroft',
} as const;

export const NAV_LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SITE_CONFIG = {
  name: 'Avicroft',
  tagline: 'Software Products Built to Grow with YOU!',
  description: 'Avicroft builds software products that help businesses grow. From salon management to education systems to e-commerce platforms.',
  url: 'https://avicroft.com',
} as const;
