'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Brand logos for social proof
const TRUSTED_BY = [
  { name: 'Uber', logo: 'Uber' },
  { name: 'airbnb', logo: 'airbnb' },
  { name: 'Revolut', logo: 'Revolut' },
  { name: 'Pinterest', logo: 'Pinterest' },
];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-96px)] flex flex-col items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* App Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Shadow/glow effect */}
            <div className="absolute inset-0 bg-[var(--brand)]/30 blur-2xl rounded-full scale-150" />
            {/* Icon container */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-[28%] bg-gradient-to-br from-[var(--brand)] to-[#E8C400] shadow-lg flex items-center justify-center">
              <Image
                src="/avicroft-logo.svg"
                alt="Avicroft"
                width={60}
                height={60}
                className="w-12 h-12 md:w-14 md:h-14 brightness-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
        >
          Software products{' '}
          <span className="block mt-1">built to grow</span>
          <span className="block mt-1">
            with{' '}
            <span className="relative inline-block">
              <span className="text-[var(--brand)]">you</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M5,8 Q20,2 35,8 T65,8 T95,8"
                  fill="none"
                  stroke="var(--brand)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-500 max-w-xl mx-auto"
        >
          Featuring Education, E-commerce, and Salon
          <br className="hidden sm:block" />
          management solutions for Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-7 py-3.5 text-base font-semibold hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
          >
            Get started free
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white text-gray-700 px-7 py-3.5 text-base font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            See our products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 md:mt-20"
        >
          <p className="text-sm text-gray-400 mb-6">Trusted by design teams at</p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {TRUSTED_BY.map((brand) => (
              <span
                key={brand.name}
                className="text-lg md:text-xl font-semibold text-gray-300 hover:text-gray-400 transition-colors cursor-default"
              >
                {brand.logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
