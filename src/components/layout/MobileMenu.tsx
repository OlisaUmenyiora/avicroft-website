'use client';

import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PRIMARY_SIGNUP_URL } from '@/lib/constants';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MENU_LINKS = [
  ...NAV_LINKS,
  { name: 'Log in', href: '/login' },
];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 400 }}
            className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-lg"
          >
            <div className="rounded-3xl bg-white shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4">
                <Image
                  src="/avicroft-logo.svg"
                  alt="Avicroft"
                  width={100}
                  height={28}
                  className="h-6 w-auto"
                />
                <button
                  type="button"
                  className="p-2 -mr-2 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={onClose}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="px-6 pb-4">
                <ul className="space-y-1">
                  {MENU_LINKS.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-2.5 text-lg font-semibold text-gray-900 hover:text-[var(--brand)] transition-colors"
                        onClick={onClose}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Join Button */}
              <div className="px-6 pb-6">
                <a
                  href={PRIMARY_SIGNUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-gray-900 px-6 py-3.5 text-center text-base font-semibold text-white hover:bg-black transition-colors"
                  onClick={onClose}
                >
                  Join for free
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
