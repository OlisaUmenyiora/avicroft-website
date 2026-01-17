import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Products | Avicroft',
  description: 'Explore Avicroft software products - Salon, Education, and E-commerce solutions built to grow with you.',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--brand)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-4">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-black/80 max-w-2xl mx-auto">
            Software solutions designed to help your business grow. Choose the product that fits your needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {PRODUCTS.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--muted)]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-[var(--label-secondary)] mb-6">
                    {product.tagline}
                  </p>
                  <p className="text-base text-[var(--label-tertiary)] mb-6">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[var(--label-secondary)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={product.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-base font-bold text-black hover:bg-[var(--brand-hover)] transition-colors"
                    >
                      {product.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-black px-6 py-3 text-base font-bold text-black hover:bg-black hover:text-white transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using Avicroft products to grow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-lg font-bold text-black hover:bg-[var(--brand-hover)] transition-colors"
          >
            Contact us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
