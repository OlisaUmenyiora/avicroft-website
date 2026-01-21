'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Brand logos for social proof with SVG icons
const TRUSTED_BY = [
  {
    name: 'Uber',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 92 28" fill="currentColor">
        <path d="M17.098 10.958v11.088c0 .576-.473 1.05-1.05 1.05H14.44a1.05 1.05 0 01-1.05-1.05v-1.05c-1.356 1.47-3.36 2.362-5.67 2.362-4.41 0-7.72-3.486-7.72-8.19 0-4.704 3.31-8.19 7.72-8.19 2.31 0 4.314.892 5.67 2.362V8.29c0-.576.474-1.05 1.05-1.05h1.608c.577 0 1.05.474 1.05 1.05v2.668zm-9.378 9.198c2.52 0 4.41-1.89 4.41-5.04 0-3.15-1.89-5.04-4.41-5.04s-4.41 1.89-4.41 5.04c0 3.15 1.89 5.04 4.41 5.04zM32.256 7.24c4.536 0 7.518 3.318 7.518 8.19v.84c0 .576-.474 1.05-1.05 1.05h-10.92c.378 2.52 2.268 3.78 4.536 3.78 1.596 0 2.94-.588 3.906-1.512.42-.378 1.05-.336 1.428.084l1.092 1.218c.378.42.336 1.05-.084 1.428-1.554 1.386-3.696 2.184-6.342 2.184-4.872 0-8.106-3.486-8.106-8.19 0-4.662 3.234-8.19 8.022-8.19v.118zm3.654 6.804c-.21-2.478-1.89-3.948-4.032-3.948-2.142 0-3.822 1.47-4.032 3.948h8.064zM46.452 10.118v-1.05c0-.576.474-1.05 1.05-1.05h1.68c.577 0 1.05.474 1.05 1.05v13.02c0 .576-.473 1.05-1.05 1.05h-1.68a1.05 1.05 0 01-1.05-1.05v-1.05c-1.218 1.386-3.024 2.362-5.334 2.362-4.284 0-7.518-3.528-7.518-8.19 0-4.662 3.234-8.232 7.518-8.232 2.31 0 4.116.976 5.334 2.362v-.222zm-4.326 10.038c2.52 0 4.368-1.89 4.368-5.04 0-3.15-1.848-5.04-4.368-5.04s-4.368 1.89-4.368 5.04c0 3.15 1.848 5.04 4.368 5.04zM59.472 7.24c2.184 0 3.948.756 5.082 1.974V1.778c0-.576.474-1.05 1.05-1.05h1.68c.576 0 1.05.474 1.05 1.05v20.268c0 .576-.474 1.05-1.05 1.05h-1.68a1.05 1.05 0 01-1.05-1.05v-1.008c-1.134 1.218-2.898 2.32-5.082 2.32-4.284 0-7.518-3.528-7.518-8.19 0-4.662 3.234-8.232 7.518-8.232v.304zm.966 12.916c2.52 0 4.368-1.89 4.368-5.04 0-3.15-1.848-5.04-4.368-5.04s-4.368 1.89-4.368 5.04c0 3.15 1.848 5.04 4.368 5.04z" />
      </svg>
    ),
  },
  {
    name: 'Airbnb',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 102 32" fill="currentColor">
        <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1-.76 1.47l-.1.2c-2.49 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.29 6.29 0 007.54 7.93 16.5 16.5 0 003.03-1.06c.76-.32 1.51-.66 2.28-1.15a22.93 22.93 0 004.45-3.34 22.93 22.93 0 004.45 3.34c.73.48 1.48.83 2.28 1.15a16.5 16.5 0 003.03 1.06 6.29 6.29 0 007.54-7.93zm-14.7-.9a18.9 18.9 0 01-4.63-3.88c-2.08-2.36-3.24-4.73-3.24-6.54 0-1.5.54-2.87 1.52-3.82a5.02 5.02 0 013.71-1.52 5.02 5.02 0 013.71 1.52c.98.95 1.52 2.32 1.52 3.82 0 1.81-1.16 4.21-3.24 6.54a18.9 18.9 0 01-4.63 3.88h5.28zm17.43-4.14c-1.52-3.12-3.08-6.24-4.74-9.29a49.8 49.8 0 00-1.86-3.36c-.67-1.1-1.28-1.88-2.06-2.55a3.4 3.4 0 00-2.31-.93c-.89 0-1.69.32-2.31.93-.78.67-1.39 1.45-2.06 2.55-.63 1.06-1.23 2.19-1.86 3.36-1.66 3.05-3.22 6.17-4.74 9.29-.6 1.26-1.06 2.48-1.3 3.6-.22.99-.22 1.95.03 2.84.57 1.95 2.06 3.47 4.03 4.14.67.22 1.36.32 2.03.32.41 0 .86-.06 1.27-.13a12.61 12.61 0 002.55-.86c.73-.32 1.42-.67 2.12-1.06.92-.54 1.81-1.16 2.68-1.85a21.04 21.04 0 002.68 1.85c.7.42 1.39.76 2.12 1.06.76.32 1.55.6 2.55.86.41.1.86.13 1.27.13.67 0 1.36-.1 2.03-.32 1.97-.67 3.46-2.19 4.03-4.14.25-.89.25-1.85.03-2.84a14.21 14.21 0 00-1.3-3.6z" />
        <path d="M71.37 21.56h-2.55l-2.87-4.14-2.87 4.14h-2.42l4.11-5.67-3.82-5.25h2.48l2.58 3.63 2.52-3.63h2.42l-3.79 5.19 4.21 5.73zm8.37-9.99c-.6-.44-1.42-.67-2.48-.67a4.2 4.2 0 00-2.03.48c-.6.32-1.06.76-1.39 1.33v-1.55h-2.19v10.4h2.26v-5.86c0-.99.22-1.72.67-2.22.44-.51 1.06-.76 1.85-.76.73 0 1.27.22 1.62.63.35.42.54 1.06.54 1.91v6.3h2.26v-6.65c0-1.36-.38-2.42-1.11-3.34zm10.59-.67c-1.16 0-2.16.28-2.97.86-.82.57-1.42 1.39-1.81 2.42-.38 1.03-.57 2.22-.57 3.57 0 2.09.51 3.72 1.52 4.86 1.02 1.16 2.42 1.72 4.21 1.72 1.16 0 2.13-.16 2.9-.48.76-.32 1.52-.83 2.26-1.52l-1.27-1.42c-.54.48-1.06.83-1.55 1.06-.51.22-1.13.35-1.88.35-1.02 0-1.81-.32-2.36-.95s-.86-1.55-.92-2.74h8.37v-.99c0-1.33-.19-2.48-.57-3.44a5.04 5.04 0 00-1.72-2.36c-.76-.57-1.69-.86-2.81-.86l.17-.08zm-3.05 5.32c.13-1.06.44-1.88.92-2.45.48-.57 1.16-.86 2.03-.86.89 0 1.55.28 1.97.86.44.57.67 1.39.73 2.45h-5.65z" />
      </svg>
    ),
  },
  {
    name: 'Revolut',
    logo: (
      <svg className="h-4 w-auto" viewBox="0 0 94 20" fill="currentColor">
        <path d="M13.59 7.2c-.85-1.76-2.67-2.8-5.17-2.8H0v15.2h3.45v-5.33h3.73l3.22 5.33h4.02l-3.7-5.87c1.66-.67 2.87-2.24 2.87-4.33 0-.8-.16-1.5-.44-2.13l-.56-.07zM3.45 7.47h4.64c1.76 0 2.8.89 2.8 2.4 0 1.5-1.04 2.4-2.8 2.4H3.45V7.47zm22.28 5.86c0-2.4-1.73-4.4-4.8-4.4-2.98 0-5.04 2-5.04 4.8 0 2.8 2.06 4.8 5.17 4.8 1.87 0 3.38-.67 4.31-1.87l-2.04-1.6c-.53.67-1.33 1.07-2.24 1.07-1.24 0-2.13-.62-2.44-1.73h7.04c.03-.27.04-.54.04-.8v-.27zm-7.04-.93c.27-1.11 1.07-1.73 2.24-1.73 1.11 0 1.91.62 2.18 1.73h-4.42zm12.07 6.13l3.78-9.33h-3.42l-2.09 5.73-2.09-5.73h-3.47l3.82 9.33h3.47zm8.15 0c3.02 0 5.04-2 5.04-4.8 0-2.8-2.02-4.8-5.04-4.8-3.02 0-5.07 2-5.07 4.8 0 2.8 2.05 4.8 5.07 4.8zm0-2.4c-1.24 0-2.13-.93-2.13-2.4 0-1.47.89-2.4 2.13-2.4 1.2 0 2.09.93 2.09 2.4 0 1.47-.89 2.4-2.09 2.4zm8.28 2.4V4.4h-2.93v14.13h2.93zm8.51 0V9.2h-2.93v5.6c0 1.2-.71 1.87-1.73 1.87-1.02 0-1.69-.67-1.69-1.87V9.2h-2.93v6.27c0 2 1.56 3.07 3.47 3.07 1.24 0 2.27-.45 2.89-1.24v.97l2.92.26zm5.48-6.53v-2.8h-1.96V6.4l-2.93.93V9.2h-1.47v2.8h1.47v3.2c0 2.27 1.11 3.33 4.89 2.93v-2.53c-1.33.09-1.96-.04-1.96-.8V12h1.96z" />
      </svg>
    ),
  },
  {
    name: 'Pinterest',
    logo: (
      <svg className="h-5 w-auto" viewBox="0 0 100 26" fill="currentColor">
        <path d="M5.134 13.053c0-1.167.173-2.243.52-3.23.346-.987.845-1.843 1.498-2.57a7.073 7.073 0 012.376-1.752 7.23 7.23 0 013.126-.65c2.276 0 4.065.713 5.366 2.14 1.301 1.425 1.952 3.323 1.952 5.69 0 .823-.06 1.63-.18 2.421a9.47 9.47 0 01-.582 2.214 7.032 7.032 0 01-1.02 1.869 5.323 5.323 0 01-1.513 1.358c-.6.351-1.296.527-2.089.527-1.004 0-1.864-.285-2.58-.855-.716-.57-1.142-1.259-1.278-2.068-.152.608-.347 1.151-.586 1.63a7.29 7.29 0 01-.762 1.203 8.835 8.835 0 01-.762.89c-.25.26-.458.482-.625.666l-.312.352-.138-.39c-.114-.352-.21-.765-.286-1.24a13.366 13.366 0 01-.112-1.7c0-1.187.143-2.329.43-3.424.285-1.096.594-2.047.925-2.855.331-.806.497-1.346.497-1.617 0-.41-.097-.78-.292-1.112-.195-.332-.52-.498-.977-.498-.631 0-1.17.41-1.616 1.229-.446.818-.669 1.837-.669 3.055 0 .456.034.89.104 1.303.069.413.134.739.195.977l.09.352-2.857 12.091c-.097.39-.19.823-.28 1.299a16.83 16.83 0 00-.159 1.442c-.023.488-.03.946-.022 1.372.007.426.03.77.067 1.034l.045.37h-.39c-1.64-1.217-2.877-2.69-3.709-4.417-.832-1.728-1.248-3.715-1.248-5.961zm25.862 0h3.805V3.058h-3.805v9.995zm0 9.814h3.805v-6.81h-3.805v6.81zM38.862 13.053c0 1.944.486 3.545 1.458 4.804.972 1.26 2.31 1.89 4.014 1.89 1.704 0 3.042-.63 4.014-1.89.972-1.259 1.458-2.86 1.458-4.804 0-1.944-.486-3.546-1.458-4.805-.972-1.259-2.31-1.889-4.014-1.889-1.704 0-3.042.63-4.014 1.89-.972 1.258-1.458 2.86-1.458 4.804zm13.639 0c0 3.047-.858 5.508-2.576 7.383-1.717 1.876-4.006 2.814-6.867 2.814-2.86 0-5.15-.938-6.866-2.814-1.718-1.875-2.576-4.336-2.576-7.383 0-3.048.858-5.508 2.576-7.384 1.717-1.875 4.006-2.813 6.866-2.813 2.861 0 5.15.938 6.867 2.813 1.718 1.876 2.576 4.336 2.576 7.384zm3.805-9.995h3.61v2.277c1.249-1.73 2.952-2.595 5.107-2.595 1.704 0 3.031.539 3.98 1.617.95 1.078 1.424 2.564 1.424 4.458v14.052h-3.805V9.73c0-1.014-.244-1.794-.73-2.342-.488-.547-1.188-.82-2.102-.82-.848 0-1.595.288-2.24.865-.646.578-.969 1.296-.969 2.155v13.279h-3.805V3.058h.53zm23.206 16.689c.848 0 1.578-.213 2.19-.64.611-.426.917-1.018.917-1.777V15.33h-2.093c-1.233 0-2.186.213-2.857.639-.671.426-1.007 1.074-1.007 1.943 0 .608.224 1.116.67 1.523.447.406 1.148.61 2.102.61l.078.003zm7.047-2.417c0 1.683-.576 3.02-1.726 4.014-1.15.994-2.72 1.491-4.706 1.491-1.985 0-3.693-.406-5.123-1.217v-3.675c.63.426 1.4.778 2.31 1.055.91.278 1.743.417 2.5.417 1.963 0 2.944-.592 2.944-1.777 0-.39-.155-.72-.463-.99-.31-.27-.902-.574-1.779-.912l-1.865-.717c-2.645-1.019-3.968-2.622-3.968-4.805 0-1.509.573-2.724 1.718-3.645 1.145-.92 2.668-1.381 4.57-1.381 1.902 0 3.516.357 4.842 1.07v3.54c-1.444-.888-3.067-1.333-4.87-1.333-.832 0-1.493.167-1.982.502-.488.334-.733.78-.733 1.34 0 .413.164.761.492 1.047.328.286.987.604 1.976.955l1.475.521c1.41.496 2.46 1.116 3.148 1.86.689.745 1.033 1.714 1.033 2.907l.207.733zm6.996 2.417c.848 0 1.579-.213 2.19-.64.612-.426.917-1.018.917-1.777V15.33h-2.092c-1.234 0-2.186.213-2.858.639-.67.426-1.006 1.074-1.006 1.943 0 .608.223 1.116.67 1.523.446.406 1.147.61 2.101.61l.078.003zm-2.94-16.689h3.61v1.617c1.086-1.275 2.512-1.912 4.277-1.912 1.704 0 3.083.502 4.136 1.507 1.053 1.004 1.58 2.388 1.58 4.151v10.446h-3.805v-9.65c0-.999-.248-1.77-.743-2.314-.496-.543-1.196-.815-2.102-.815-.848 0-1.566.278-2.153.833-.588.556-.882 1.255-.882 2.099v9.847H87.98V3.058h4.835z" />
      </svg>
    ),
  },
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
    <div className="relative flex flex-col items-center">
      {/* Hanging notch/hook - like a price tag */}
      <div className="relative z-10 w-8 h-3 bg-gray-300 rounded-t-full mb-[-2px]" />

      {/* Flip container with perspective */}
      <div className="relative w-20 h-20 md:w-24 md:h-24" style={{ perspective: '1000px' }}>
        {/* Shadow/glow effect */}
        <motion.div
          className="absolute inset-0 blur-2xl rounded-full scale-150"
          animate={{ backgroundColor: `${currentProduct.color}30` }}
          transition={{ duration: 0.5 }}
        />

        {/* Drop shadow underneath */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 bg-black/10 rounded-full blur-md" />

        {/* Flip box */}
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
              className="absolute inset-0 rounded-[28%] shadow-xl flex items-center justify-center"
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

        {/* CTAs - side by side on all screen sizes like Mobbin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:bg-black transition-colors shadow-lg shadow-gray-900/20"
          >
            Get started free
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-gray-200 bg-white text-gray-700 px-5 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
          >
            See our products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Social Proof with real logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 md:mt-20"
        >
          <p className="text-sm text-gray-400 mb-6">Trusted by design teams at</p>
          <div className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap text-gray-300">
            {TRUSTED_BY.map((brand) => (
              <span
                key={brand.name}
                className="hover:text-gray-400 transition-colors cursor-default"
                aria-label={brand.name}
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
