'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Loader2, Check } from 'lucide-react';
import { PRODUCTS, PRIMARY_SIGNUP_URL } from '@/lib/constants';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showProducts, setShowProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsLoading(true);
      // Brief delay to show loading state, then show product selection
      setTimeout(() => {
        setShowProducts(true);
        setIsLoading(false);
      }, 500);
    }
  };

  const handleGoogleSignIn = () => {
    // Redirect to Aura signup (primary product)
    window.location.href = PRIMARY_SIGNUP_URL;
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/avicroft-logo.svg"
            alt="Avicroft"
            width={100}
            height={28}
            className="h-8 w-auto brightness-0 invert"
          />
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">
          Create your account
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Get started with Avicroft for free
        </p>

        {!showProducts ? (
          <>
            {/* OAuth Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-3 rounded-full border border-gray-700 bg-transparent px-6 py-3.5 text-base font-medium text-white hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Continue with Google
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-950 text-gray-500">or</span>
              </div>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
                disabled={isLoading}
                className="w-full rounded-full border border-gray-700 bg-gray-900 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all disabled:opacity-50"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                disabled={isLoading}
                className="w-full rounded-full border border-gray-700 bg-gray-900 px-6 py-3.5 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--brand)] focus:border-transparent transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-full bg-white text-gray-900 px-6 py-3.5 text-base font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Please wait...
                  </>
                ) : (
                  'Continue'
                )}
              </button>
            </form>

            {/* Sign in link */}
            <div className="mt-6 text-center">
              <Link
                href="/login"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Already have an account? <span className="text-[var(--brand)]">Sign in</span>
              </Link>
            </div>

            {/* Terms */}
            <p className="mt-6 text-center text-sm text-gray-500">
              By creating an account, you agree to Avicroft&apos;s{' '}
              <Link href="/terms" className="underline hover:text-white transition-colors">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline hover:text-white transition-colors">
                Privacy Policy
              </Link>
              .
            </p>
          </>
        ) : (
          /* Product Selection */
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-3">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              <p className="text-white font-medium">Great, {name.split(' ')[0]}!</p>
              <p className="text-gray-400 text-sm mt-1">
                Select a product to create your account
              </p>
            </div>
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={product.status === 'ready' ? `${product.url}/signup` : product.url}
                target="_blank"
                className="flex items-center justify-between p-4 rounded-2xl border border-gray-800 bg-gray-900/50 hover:border-[var(--brand)] hover:bg-gray-900 transition-all group"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white">
                      Avicroft {product.name}
                    </h3>
                    {product.status === 'coming_soon' && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {product.tagline}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-[var(--brand)] transition-colors" />
              </Link>
            ))}
            <button
              onClick={() => setShowProducts(false)}
              className="w-full text-center text-sm text-gray-500 hover:text-white transition-colors mt-4"
            >
              &larr; Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
