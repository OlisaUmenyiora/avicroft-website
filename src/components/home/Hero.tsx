'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Brand logos for social proof
const TRUSTED_BY = [
  { name: 'Uber', logo: 'Uber' },
  { name: 'airbnb', logo: 'airbnb' },
  { name: 'Revolut', logo: 'Revolut' },
  { name: 'Pinterest', logo: 'Pinterest' },
];

// Products for the flip animation
const FLIP_PRODUCTS = [
  { name: 'Aura', color: '#FAD400' },
  { name: 'Scholar', color: '#3B82F6' },
];

function FlipBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % FLIP_PRODUCTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentProduct = FLIP_PRODUCTS[currentIndex];

  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24" style={{ perspective: '1000px' }}>
      {/* Shadow/glow effect */}
      <motion.div
        className="absolute inset-0 blur-2xl rounded-full scale-150"
        animate={{ backgroundColor: `${currentProduct.color}40` }}
        transition={{ duration: 0.5 }}
      />

      {/* Flip container */}
      <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="absolute inset-0 rounded-[28%] shadow-lg flex items-center justify-center"
            style={{
              backgroundColor: currentProduct.color,
              backfaceVisibility: 'hidden',
            }}
          >
            <span className="text-lg md:text-xl font-bold text-black tracking-tight">
              {currentProduct.name}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 overflow-hidden -mt-20 md:-mt-24 pt-28 md:pt-32">
      {/* Background gradient - extends behind navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* App Icon with Flip Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <FlipBox />
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
              <span className="text-[var(--brand)]">YOU</span>
              <span
                className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--brand)] rounded-full"
              />
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
          Simple, affordable software for wellness businesses
          <br className="hidden sm:block" />
          and schools. Minimalist. Easy to use. Free to start.
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
