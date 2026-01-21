'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

const cardColors: Record<string, string> = {
  wellness: 'from-[var(--brand)] to-[#E8C400]',
  education: 'from-blue-500 to-blue-600',
};

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Software solutions designed to help your business grow. Choose the product that fits your needs.
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-16 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 group">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${cardColors[product.id]} opacity-10`} />
                    {/* Coming Soon Badge */}
                    {product.status === 'coming_soon' && (
                      <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-full flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cardColors[product.id]} flex items-center justify-center`}>
                      <ProductIcon name={product.id} />
                    </div>
                    {product.status === 'coming_soon' && (
                      <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
                        Coming Soon
                      </span>
                    )}
                    {product.status === 'ready' && (
                      <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
                        Available Now
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h2>
                  <p className="text-xl text-gray-600 mb-4">
                    {product.tagline}
                  </p>
                  <p className="text-gray-500 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${cardColors[product.id]} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={product.url}
                      target="_blank"
                      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors ${
                        product.status === 'ready'
                          ? 'bg-gray-900 text-white hover:bg-black'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}
                    >
                      {product.ctaText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-2 rounded-full border border-gray-200 text-gray-700 px-6 py-3 text-base font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to get started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Join thousands of businesses already using Avicroft products to grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-7 py-3.5 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ProductIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    wellness: (
      <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    education: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
