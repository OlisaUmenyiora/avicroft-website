import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About | Avicroft',
  description: 'Learn about Avicroft - building software products that help businesses grow across Africa and beyond.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[var(--brand)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6">
              Building software that grows with you
            </h1>
            <p className="text-lg md:text-xl text-black/80">
              Avicroft creates powerful, user-friendly software solutions designed to help businesses across Africa and beyond reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-[var(--label-secondary)] mb-6">
                We believe every business deserves access to powerful software tools. Our mission is to democratize technology by building products that are intuitive, affordable, and built for the unique needs of growing businesses.
              </p>
              <p className="text-lg text-[var(--label-secondary)]">
                From salon management to school administration to e-commerce, we are committed to helping businesses digitize their operations and unlock new opportunities for growth.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl bg-[var(--muted)] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/avicroft-logo.svg"
                  alt="Avicroft"
                  width={200}
                  height={60}
                  className="opacity-20"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-[var(--muted)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Our Values
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Simplicity',
                description: 'We believe powerful software should be easy to use. Our products are designed with simplicity at their core.',
              },
              {
                title: 'Reliability',
                description: 'Businesses depend on our software. We build products that work consistently, even in challenging environments.',
              },
              {
                title: 'Growth',
                description: 'Our products are built to scale with your business. Start small and grow without limits.',
              },
              {
                title: 'Support',
                description: 'We stand behind our products with dedicated customer support to help you succeed.',
              },
              {
                title: 'Innovation',
                description: 'We continuously improve our products based on customer feedback and emerging technologies.',
              },
              {
                title: 'Accessibility',
                description: 'We build software that works for everyone, regardless of technical expertise or device.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 bg-white rounded-2xl"
              >
                <h3 className="text-xl font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--label-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to grow with us?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Explore our products and see how Avicroft can help your business thrive.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-8 py-4 text-lg font-bold text-black hover:bg-[var(--brand-hover)] transition-colors"
            >
              View Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
