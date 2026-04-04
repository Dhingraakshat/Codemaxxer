import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import PageHero from '@/components/layout/PageHero';
import Section from '@/components/layout/Section';
import BlogCard from '@/components/shared/BlogCard';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and perspectives from the Codemaxxers engineering team.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  const categoryGradient = 'linear-gradient(135deg, #0A1A1A 0%, #0D2020 100%)';

  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights from the Trenches."
        subtitle="Practical engineering guides, architecture deep-dives, and AI perspectives from the team that ships."
      />

      {/* Featured post */}
      <Section withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Badge>Featured</Badge>
          </div>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="bg-black-soft border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-yellow transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,197,24,0.15)] grid md:grid-cols-2">
              {/* Left: gradient image */}
              <div
                className="h-56 md:h-auto min-h-[250px] relative flex items-center justify-center"
                style={{ background: categoryGradient }}
              >
                <span className="font-syne font-extrabold text-7xl text-white opacity-5 select-none">{featured.category}</span>
                <div className="absolute top-4 left-4">
                  <Badge>{featured.category}</Badge>
                </div>
              </div>
              {/* Right: content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h2 className="font-syne font-extrabold text-2xl text-white mb-3 group-hover:text-yellow transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-white-muted leading-relaxed mb-4">{featured.excerpt}</p>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-white-muted text-sm mb-4">
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{featured.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{featured.readTime}</span>
                  </div>
                  <p className="text-white-muted text-xs mb-4">{formatDate(featured.date)}</p>
                  <span className="inline-flex items-center gap-2 text-yellow font-syne font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </Section>

      {/* Rest of posts */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Badge>All Posts</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
