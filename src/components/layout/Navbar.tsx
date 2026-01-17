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
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Yellow accent line at top */}
        <div className="h-1 bg-[var(--brand)]" />

        <nav className="bg-[var(--brand)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between md:h-20">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0">
                <Image
                  src="/avicroft-logo.svg"
                  alt="Avicroft"
                  width={140}
                  height={40}
                  className="h-8 w-auto md:h-10"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:gap-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-black hover:text-black/70 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Desktop Login Button */}
              <div className="hidden md:block">
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border-2 border-black bg-transparent px-6 py-2.5 text-sm font-semibold text-black hover:bg-black hover:text-white transition-colors"
                >
                  Login
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-black hover:bg-black/10 transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[68px] md:h-[84px]" />
    </>
  );
}
