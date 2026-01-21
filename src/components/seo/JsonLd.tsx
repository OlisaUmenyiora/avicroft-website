import { SITE_CONFIG, PRODUCTS, SOCIAL_LINKS, FAQS } from '@/lib/constants';

// Organization Schema - tells search engines about Avicroft
export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.svg`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressCountry: 'NG',
    },
    sameAs: [
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.youtube,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Software Application Schema for each product
export function ProductJsonLd({ productId }: { productId: string }) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Avicroft ${product.name}`,
    applicationCategory: product.id === 'wellness' ? 'BusinessApplication' : 'EducationalApplication',
    operatingSystem: 'Web Browser',
    description: product.description,
    url: product.url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free tier available',
    },
    featureList: product.features,
    provider: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// All products schema for the products page
export function AllProductsJsonLd() {
  const schemas = PRODUCTS.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Avicroft ${product.name}`,
    applicationCategory: product.id === 'wellness' ? 'BusinessApplication' : 'EducationalApplication',
    operatingSystem: 'Web Browser',
    description: product.description,
    url: product.url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList: product.features,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

// FAQ Schema - critical for AI search engines
export function FAQJsonLd({ category }: { category: keyof typeof FAQS }) {
  const faqs = FAQS[category];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebSite Schema with SearchAction
export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// LocalBusiness Schema for contact page
export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos',
      addressCountry: 'NG',
    },
    sameAs: [
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
