'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SOCIAL_LINKS } from '@/lib/constants';

const FOOTER_LINKS = {
  explore: [
    { name: 'Products', href: '/products' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Changelog', href: '/changelog' },
    { name: 'About', href: '/about' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Help center', href: '/support' },
    { name: 'Careers', href: '/careers' },
  ],
  social: [
    { name: 'X (Twitter)', href: SOCIAL_LINKS.twitter },
    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
    { name: 'Instagram', href: SOCIAL_LINKS.instagram },
    { name: 'Facebook', href: SOCIAL_LINKS.facebook },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/avicroft-logo.svg"
              alt="Avicroft"
              width={120}
              height={32}
              className="h-7 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Design better digital experiences with Avicroft.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[var(--brand)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-[var(--brand)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[var(--brand)] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800" />

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; Avicroft 2024&ndash;{new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
