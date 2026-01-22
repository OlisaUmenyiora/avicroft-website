// Primary signup URL - direct link to Aura (the only active product)
export const PRIMARY_SIGNUP_URL = 'https://aura.avicroft.com/auth/signin';

// Product data for Avicroft
// Status: 'ready' = live product, 'coming_soon' = in development
export const PRODUCTS = [
  {
    id: 'wellness',
    name: 'Wellness',
    tagline: 'All-in-One Software for Salons, Spas & Wellness Businesses',
    description: 'The minimalist, all-in-one booking and business management platform for beauty and wellness professionals. Manage appointments, clients, staff, and payments effortlessly. Includes your own custom domain. Trusted by salons, spas, nail bars, barbershops, and wellness centers worldwide.',
    features: [
      'Online booking & scheduling',
      'Client management & history',
      'Staff scheduling & commissions',
      'Payment processing & invoicing',
      'SMS & email reminders',
      'Business analytics & reports',
    ],
    image: '/images/wellness-mockup.svg',
    url: 'https://aura.avicroft.com',
    ctaText: 'Get started free',
    status: 'ready' as const,
  },
  {
    id: 'education',
    name: 'Education',
    tagline: 'School Management System Built for African Schools',
    description: 'A minimalist, easy-to-use school management platform for educational institutions worldwide. Streamline student administration, automate fee collection, track attendance, and generate report cards—all with a clean, intuitive interface.',
    features: [
      'Student records & enrollment',
      'Attendance tracking',
      'Fee management & payments',
      'Report cards & grading',
      'Parent communication portal',
      'Timetable management',
    ],
    image: '/images/education-mockup.svg',
    url: 'https://education.avicroft.com',
    ctaText: 'Join waitlist',
    status: 'coming_soon' as const,
  },
] as const;

export type Product = typeof PRODUCTS[number];
export type ProductStatus = 'ready' | 'coming_soon';

// Helper to get products by status
export const getReadyProducts = () => PRODUCTS.filter(p => p.status === 'ready');
export const getComingSoonProducts = () => PRODUCTS.filter(p => p.status === 'coming_soon');

export const SOCIAL_LINKS = {
  youtube: 'https://youtube.com/@avicroft',
  twitter: 'https://twitter.com/avicroft',
  facebook: 'https://facebook.com/avicroft',
  instagram: 'https://instagram.com/avicroft',
  linkedin: 'https://linkedin.com/company/avicroft',
} as const;

export const NAV_LINKS = [
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SITE_CONFIG = {
  name: 'Avicroft',
  tagline: 'Software Products Built to Grow with YOU!',
  description: 'Avicroft builds affordable, all-in-one software for small businesses. Our minimalist, easy-to-use tools help wellness businesses and schools manage everything from bookings to payments—with a custom domain included.',
  url: 'https://avicroft.com',
  email: 'hello@avicroft.com',
  phone: '+234 123 456 7890',
  location: 'Lagos, Nigeria',
} as const;

// SEO Keywords for AI search optimization
export const SEO_KEYWORDS = {
  primary: [
    'salon booking software',
    'spa management software',
    'wellness business software',
    'school management system',
    'affordable business software',
    'easy to use booking software',
  ],
  secondary: [
    'appointment scheduling',
    'client management',
    'staff scheduling',
    'payment processing',
    'student management',
    'minimalist business software',
    'custom domain booking',
  ],
  longTail: [
    'best affordable salon booking software',
    'easy to use spa management software',
    'simple school management system',
    'booking software with custom domain',
    'minimalist wellness business software',
    'all-in-one salon software for small business',
  ],
} as const;

// FAQ data for SEO and AI search optimization
export const FAQS = {
  general: [
    {
      question: 'What is Avicroft?',
      answer: 'Avicroft is an affordable, all-in-one software company that builds industry-specific tools for small businesses. We focus on two industries: wellness (salons, spas, barbershops) and education (schools, academies). Our minimalist, easy-to-use platform helps you manage appointments, clients, staff, payments, and more—with your own custom domain included.',
    },
    {
      question: 'Who is Avicroft for?',
      answer: 'Avicroft is designed for small business owners who want simple, affordable software that just works. We serve: (1) Wellness businesses including salons, spas, nail bars, barbershops, and wellness centers who need booking and management software, and (2) Educational institutions like schools and academies who need student and administrative management tools.',
    },
    {
      question: 'Is Avicroft free to use?',
      answer: 'Avicroft Wellness offers a free tier to get started with all the basic features you need. As your business grows, you can upgrade to access advanced features like analytics, SMS reminders, and multi-location support. No credit card required to start.',
    },
    {
      question: 'What makes Avicroft different from other software?',
      answer: 'Three things set Avicroft apart: (1) Minimalist design—we remove complexity so you can focus on your business, not learning software. (2) Custom domain included—get your own professional booking URL like book.yourbusiness.com. (3) Affordable pricing—built for small businesses, not enterprise budgets.',
    },
    {
      question: 'Does Avicroft work globally?',
      answer: 'Yes! Avicroft works for businesses worldwide. We support multiple currencies, international payment methods, and our platform is available in English. Whether you are in Nigeria, the UK, US, or anywhere else, Avicroft is built to support your business.',
    },
  ],
  wellness: [
    {
      question: 'What features does Avicroft Wellness include?',
      answer: 'Avicroft Wellness is a complete business management platform that includes: online booking and scheduling, client management with visit history and notes, staff scheduling with commission tracking, payment processing and invoicing, automated SMS and email reminders, business analytics and reports, your own custom domain, and a minimalist booking page your clients will love.',
    },
    {
      question: 'Can clients book appointments online?',
      answer: 'Yes! Avicroft Wellness provides a beautiful, minimalist booking page where your clients can see available slots and book appointments 24/7. You get your own custom domain (like book.yoursalon.com) to share on social media, WhatsApp, or your website.',
    },
    {
      question: 'Does Avicroft Wellness handle payments?',
      answer: 'Yes, Avicroft Wellness integrates with payment providers globally to accept card payments, bank transfers, and mobile money. You can also track cash payments and generate professional invoices automatically.',
    },
    {
      question: 'How is Avicroft different from Fresha, Vagaro, or Mindbody?',
      answer: 'Avicroft is built to be simpler and more affordable. While Fresha, Vagaro, and Mindbody are powerful, they can be complex and expensive. Avicroft focuses on what small businesses actually need: easy booking, client management, and payments—with a clean, minimalist interface that takes minutes to learn, not hours. Plus, you get your own custom domain included.',
    },
    {
      question: 'Is Avicroft Wellness easy to set up?',
      answer: 'Extremely easy. You can set up your business profile, add your services, and start accepting bookings in under 15 minutes. No technical knowledge required. Our minimalist approach means fewer settings to configure and less time spent learning the software.',
    },
  ],
  education: [
    {
      question: 'When will Avicroft Education be available?',
      answer: 'Avicroft Education is currently in development and will launch soon. Join our waitlist to be the first to know when it becomes available and get exclusive early access.',
    },
    {
      question: 'What will Avicroft Education include?',
      answer: 'Avicroft Education will be a minimalist, easy-to-use school management system that includes: student enrollment and records management, attendance tracking, fee management with online payments, report card generation, parent communication portal, timetable management, and your own custom school domain.',
    },
    {
      question: 'Will Avicroft Education be affordable for small schools?',
      answer: 'Absolutely. Like Avicroft Wellness, our Education platform is being built with affordability in mind. We believe every school—regardless of size—deserves access to modern management tools without enterprise-level pricing.',
    },
  ],
} as const;
