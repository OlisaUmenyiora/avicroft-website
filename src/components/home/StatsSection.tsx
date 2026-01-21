'use client';

import { motion } from 'framer-motion';
import { PRODUCTS } from '@/lib/constants';

// Floating app icons data
const FLOATING_ICONS = [
  { name: 'Wellness', color: 'bg-gradient-to-br from-[var(--brand)] to-[#E8C400]', position: 'top-[10%] left-[5%]', size: 'w-14 h-14 md:w-16 md:h-16', delay: 0 },
  { name: 'Education', color: 'bg-gradient-to-br from-blue-500 to-blue-600', position: 'top-[15%] right-[8%]', size: 'w-16 h-16 md:w-20 md:h-20', delay: 0.1 },
  { name: 'Chat', color: 'bg-white border border-gray-200', position: 'top-[25%] left-[15%]', size: 'w-14 h-14 md:w-16 md:h-16', delay: 0.15 },
  { name: 'Cloud', color: 'bg-gradient-to-br from-sky-400 to-sky-500', position: 'top-[8%] right-[20%]', size: 'w-12 h-12 md:w-14 md:h-14', delay: 0.05 },
  { name: 'Analytics', color: 'bg-gradient-to-br from-rose-500 to-rose-600', position: 'bottom-[15%] right-[5%]', size: 'w-16 h-16 md:w-18 md:h-18', delay: 0.25 },
  { name: 'Payments', color: 'bg-gradient-to-br from-emerald-500 to-emerald-600', position: 'bottom-[25%] right-[18%]', size: 'w-14 h-14 md:w-16 md:h-16', delay: 0.3 },
  { name: 'Booking', color: 'bg-gradient-to-br from-purple-500 to-purple-600', position: 'bottom-[20%] left-[3%]', size: 'w-12 h-12 md:w-14 md:h-14', delay: 0.2 },
  { name: 'Social', color: 'bg-gradient-to-br from-orange-500 to-orange-600', position: 'top-[40%] left-[2%]', size: 'w-10 h-10 md:w-12 md:h-12', delay: 0.35 },
];

// Icons as simple shapes
const IconShapes: Record<string, React.ReactNode> = {
  Wellness: (
    <svg className="w-6 h-6 md:w-7 md:h-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Education: (
    <svg className="w-7 h-7 md:w-8 md:h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  Booking: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Chat: (
    <svg className="w-6 h-6 md:w-7 md:h-7 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  Cloud: (
    <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Analytics: (
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Payments: (
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  Social: (
    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

export function StatsSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-white">
      {/* Floating Icons - Hidden on small mobile, visible on larger screens */}
      <div className="absolute inset-0 hidden sm:block">
        {FLOATING_ICONS.map((icon) => (
          <motion.div
            key={icon.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: icon.delay }}
            className={`absolute ${icon.position} ${icon.size} ${icon.color} rounded-2xl shadow-lg flex items-center justify-center`}
          >
            {IconShapes[icon.name]}
          </motion.div>
        ))}
      </div>

      {/* Stats Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-500 mb-4"
        >
          A growing ecosystem of
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-2"
        >
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {PRODUCTS.length} products
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            10,000+ users
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            25+ countries
          </p>
        </motion.div>
      </div>
    </section>
  );
}
