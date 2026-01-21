import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getFeaturedPosts, getCategoryLabel, BlogPost } from '@/lib/blog';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides and insights for wellness businesses and schools. Learn how to grow your business with tips on booking, payments, client management, and more.',
  alternates: {
    canonical: 'https://avicroft.com/blog',
  },
  openGraph: {
    title: 'Avicroft Blog | Guides for Wellness & Education Businesses',
    description: 'Practical guides and insights to help you grow your wellness business or school. Tips, strategies, and industry knowledge.',
    url: 'https://avicroft.com/blog',
  },
};

function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`group ${featured ? 'col-span-full lg:col-span-2' : ''}`}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className={`p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all h-full ${featured ? 'bg-gradient-to-br from-[var(--brand)]/5 to-transparent' : 'bg-white'}`}>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
              {getCategoryLabel(post.category)}
            </span>
            {post.featured && (
              <span className="px-3 py-1 text-xs font-medium bg-[var(--brand)] text-black rounded-full">
                Featured
              </span>
            )}
          </div>

          <h2 className={`font-bold text-gray-900 mb-3 group-hover:text-[var(--brand)] transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
            {post.title}
          </h2>

          <p className={`text-gray-500 mb-4 ${featured ? 'text-base' : 'text-sm'} line-clamp-3`}>
            {post.description}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        {/* Background gradient - extends behind navbar */}
        <div className="absolute inset-x-0 top-[-100px] bottom-0 bg-gradient-to-b from-gray-100 to-white pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insights & Guides
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Practical advice to help you grow your wellness business or school. Written by the Avicroft team.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.slice(0, 2).map((post) => (
                <PostCard key={post.slug} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 md:py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-950 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Put these insights into action with Avicroft. Simple, affordable software that helps you manage and grow.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-7 py-3.5 text-base font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
