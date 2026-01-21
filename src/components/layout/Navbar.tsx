'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        {/* Floating Pill Navbar */}
        <nav className="mx-auto max-w-4xl bg-white/80 backdrop-blur-xl rounded-full shadow-lg shadow-black/5 border border-gray-100">
          <div className="flex h-14 items-center justify-between px-4 md:px-6">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/avicroft-logo.svg"
                alt="Avicroft"
                width={120}
                height={32}
                className="h-7 w-auto brightness-0"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Login Button */}
            <div className="hidden md:block">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Log in
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
