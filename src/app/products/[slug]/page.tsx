import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/lib/constants';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return {
      title: 'Product Not Found | Avicroft',
    };
  }

  return {
    title: `${product.name} | Avicroft`,
    description: product.tagline,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--brand)] py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            {/* Content */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-black/80 mb-8">
                {product.tagline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={product.url}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-base font-bold text-white hover:bg-black/80 transition-colors"
                >
                  {product.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black px-8 py-4 text-base font-bold text-black hover:bg-black hover:text-white transition-colors"
                >
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/10 shadow-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Key Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feature) => (
              <div
                key={feature}
                className="p-6 rounded-2xl bg-[var(--muted)] hover:bg-[var(--brand-light)] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--brand)] flex items-center justify-center mb-4">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-[var(--muted)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            About {product.name}
          </h2>
          <p className="text-lg text-[var(--label-secondary)] leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to try {product.name}?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Get started today and see the difference it can make for your business.
          </p>
          <Link
            href={product.url}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-lg font-bold text-black hover:bg-[var(--brand-hover)] transition-colors"
          >
            {product.ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
