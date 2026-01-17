'use client';

import Link from 'next/link';
import { ProductCarousel } from './ProductCarousel';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-84px)] overflow-hidden">
      {/* Background - Yellow left, Black right with diagonal */}
      <div className="absolute inset-0">
        {/* Mobile: Yellow background */}
        <div className="absolute inset-0 bg-[var(--brand)] lg:hidden" />

        {/* Desktop: Yellow/Black split with diagonal */}
        <div className="hidden lg:block absolute inset-0">
          {/* Yellow section */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-[var(--brand)]" />
          {/* Diagonal transition - yellow triangle */}
          <div
            className="absolute inset-y-0 left-[45%] w-[20%] bg-[var(--brand)]"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            }}
          />
          {/* Black section */}
          <div className="absolute inset-y-0 right-0 w-[55%] bg-black" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-8 py-12 md:py-16 lg:py-20">
          {/* Left Column - Text Content */}
          <div className="flex-1 max-w-xl lg:max-w-lg xl:max-w-xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-extrabold text-black leading-[1.05] tracking-tight">
              <span className="block">Software Products</span>
              <span className="block italic font-bold">Built to Grow</span>
              <span className="block relative">
                with YOU!
              </span>
            </h1>

            {/* Squiggle underline SVG */}
            <svg
              className="w-[200px] sm:w-[250px] md:w-[300px] h-4 mt-2"
              viewBox="0 0 200 15"
              preserveAspectRatio="none"
            >
              <path
                d="M5,10 Q20,3 35,10 T65,10 T95,10 T125,10 T155,10 T185,10"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-black"
              />
            </svg>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-10">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-black text-white px-8 py-4 text-base font-bold hover:bg-black/80 transition-colors"
              >
                Get Started for free now
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border-2 border-black bg-white text-black px-8 py-4 text-base font-bold hover:bg-black hover:text-white transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="flex-1 w-full lg:max-w-[520px] xl:max-w-[580px]">
            {/* Mobile: Add black bg wrapper */}
            <div className="lg:hidden bg-black rounded-3xl p-4 sm:p-6">
              <ProductCarousel />
            </div>
            {/* Desktop: sits on black background */}
            <div className="hidden lg:block">
              <ProductCarousel />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
