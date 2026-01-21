'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const VALUES = [
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
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        {/* Background gradient - extends behind navbar */}
        <div className="absolute inset-x-0 top-[-100px] bottom-0 bg-gradient-to-b from-gray-100 to-white pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Building software that{' '}
            <span className="text-[var(--brand)]">grows</span> with you
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto"
          >
            Avicroft creates powerful, user-friendly software solutions designed to help businesses across Africa and beyond reach their full potential.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                We believe every business deserves access to powerful software tools. Our mission is to democratize technology by building products that are intuitive, affordable, and built for the unique needs of growing businesses.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                From wellness businesses to schools, we are committed to helping you digitize your operations and unlock new opportunities for growth—with software that&apos;s simple, affordable, and built to grow with you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl bg-gradient-to-br from-[var(--brand)]/10 to-[var(--brand)]/5 overflow-hidden flex items-center justify-center"
            >
              <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-[var(--brand)] to-[#E8C400] shadow-2xl flex items-center justify-center">
                <Image
                  src="/avicroft-logo.svg"
                  alt="Avicroft"
                  width={80}
                  height={80}
                  className="w-16 h-16 brightness-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-500">
              The principles that guide everything we build
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {value.description}
                </p>
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
            Ready to grow with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 mb-8 max-w-xl mx-auto"
          >
            Explore our products and see how Avicroft can help your business thrive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-7 py-3.5 text-base font-semibold hover:bg-gray-100 transition-colors"
            >
              View Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 text-white px-7 py-3.5 text-base font-semibold hover:bg-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
