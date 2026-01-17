'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCarousel } from '@/lib/hooks/useCarousel';
import { PRODUCTS, type Product } from '@/lib/constants';

interface ProductCardProps {
  product: Product;
  position: 'active' | 'next' | 'prev' | 'hidden';
}

function ProductCard({ product, position }: ProductCardProps) {
  const variants = {
    active: {
      x: 0,
      y: 0,
      scale: 1,
      zIndex: 30,
      opacity: 1,
      rotateY: 0,
    },
    next: {
      x: 60,
      y: 15,
      scale: 0.9,
      zIndex: 20,
      opacity: 0.9,
      rotateY: -2,
    },
    prev: {
      x: -60,
      y: 15,
      scale: 0.9,
      zIndex: 10,
      opacity: 0.5,
      rotateY: 2,
    },
    hidden: {
      x: 120,
      y: 30,
      scale: 0.85,
      zIndex: 0,
      opacity: 0,
      rotateY: -3,
    },
  };

  return (
    <motion.div
      className="absolute inset-0 w-full"
      initial={variants.hidden}
      animate={variants[position]}
      exit={variants.hidden}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Image - Full card background */}
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 580px"
          />
        </div>

        {/* Dark overlay header at top */}
        <div className="absolute inset-x-0 top-0 z-10">
          <div className="bg-black/85 backdrop-blur-sm rounded-t-3xl p-5 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{product.name}</h3>
            <p className="text-sm text-white/80 leading-relaxed line-clamp-3 mb-4">
              {product.description}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3">
              <Link
                href={product.url}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-bold text-black hover:bg-[var(--brand-hover)] transition-colors"
              >
                {product.ctaText}
              </Link>
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center justify-center rounded-full bg-black border border-white/20 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductCarousel() {
  const {
    currentIndex,
    goToNext,
    goToPrev,
    handlers,
  } = useCarousel({
    itemCount: PRODUCTS.length,
    autoPlayInterval: 5000,
    pauseOnHover: true,
  });

  const getPosition = (index: number): 'active' | 'next' | 'prev' | 'hidden' => {
    const diff = (index - currentIndex + PRODUCTS.length) % PRODUCTS.length;
    if (diff === 0) return 'active';
    if (diff === 1) return 'next';
    if (diff === PRODUCTS.length - 1) return 'prev';
    return 'hidden';
  };

  return (
    <div
      className="relative w-full"
      {...handlers}
    >
      {/* Cards Container */}
      <div className="relative h-[420px] sm:h-[460px] md:h-[500px] w-full perspective-[1000px]">
        <AnimatePresence mode="popLayout">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              position={getPosition(index)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        {/* Prev Button - Yellow outline circle */}
        <button
          onClick={goToPrev}
          className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--brand)] bg-transparent text-[var(--brand)] hover:bg-[var(--brand)] hover:text-black transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Swipe indicator */}
        <span className="text-base font-medium text-white min-w-[60px] text-center">Swipe</span>

        {/* Next Button - Yellow filled circle */}
        <button
          onClick={goToNext}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--brand)] text-black hover:bg-[var(--brand-hover)] transition-colors"
          aria-label="Next product"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
