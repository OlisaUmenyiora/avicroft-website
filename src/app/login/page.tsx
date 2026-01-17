import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/lib/constants';

export const metadata = {
  title: 'Login | Avicroft',
  description: 'Login to your Avicroft product account.',
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-68px)] md:min-h-[calc(100vh-84px)] bg-[var(--muted)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black mb-2">
            Welcome back
          </h1>
          <p className="text-[var(--label-secondary)]">
            Select your product to login
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="space-y-4">
            {PRODUCTS.map((product) => (
              <Link
                key={product.id}
                href={product.url}
                target="_blank"
                className="flex items-center justify-between p-4 rounded-xl border-2 border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)] transition-colors group"
              >
                <div>
                  <h3 className="font-bold text-black">
                    Avicroft {product.name}
                  </h3>
                  <p className="text-sm text-[var(--label-secondary)]">
                    {product.tagline}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-[var(--label-tertiary)] group-hover:text-black transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
            <p className="text-sm text-[var(--label-secondary)]">
              Don&apos;t have an account?{' '}
              <Link
                href="/products"
                className="font-medium text-black hover:text-[var(--brand)] transition-colors"
              >
                Get started for free
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--label-tertiary)]">
          Need help?{' '}
          <Link
            href="/contact"
            className="font-medium text-black hover:text-[var(--brand)] transition-colors"
          >
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}
