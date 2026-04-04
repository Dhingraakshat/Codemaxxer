'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, X, ExternalLink, Link2 } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import BlogCard from '@/components/shared/BlogCard';
import Section from '@/components/layout/Section';
import { blogPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: Props) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const [progress, setProgress] = useState(0);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Reading progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-yellow z-[100] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-black grid-overlay">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white-muted hover:text-yellow transition-colors mb-8 font-syne text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Badge>{post.category}</Badge>
          <h1 className="font-syne font-extrabold text-white mt-4 mb-6 leading-tight" style={{ fontSize: "clamp(22px,3vw,34px)", letterSpacing: "-0.02em" }}>{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-white-muted text-sm border-b border-[#2A2A2A] pb-6">
            <span className="flex items-center gap-1"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{post.readTime}</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </section>

      {/* Content + ToC */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Article */}
            <article className="max-w-3xl">
              <p className="text-white-soft text-lg leading-relaxed mb-6">{post.excerpt}</p>
              <h2 className="font-syne font-bold text-white text-2xl mb-4">Introduction</h2>
              <p className="text-white-muted leading-relaxed mb-6">
                Building production-grade software requires more than just writing code — it demands a deep understanding
                of system design, performance constraints, and the real-world conditions your software will face.
                In this guide, we share the exact lessons we&apos;ve learned from shipping 50+ projects to production.
              </p>
              <blockquote className="border-l-4 border-l-yellow pl-6 my-6 py-2">
                <p className="text-white-soft italic text-lg">
                  &ldquo;The difference between a demo and a product is the ability to handle the unexpected gracefully.&rdquo;
                </p>
              </blockquote>
              <h2 className="font-syne font-bold text-white text-2xl mb-4">The Core Principles</h2>
              <p className="text-white-muted leading-relaxed mb-4">
                Every production system we build starts with three non-negotiable principles: observability, idempotency,
                and graceful degradation. Without these, you&apos;re flying blind when something inevitably goes wrong.
              </p>
              <p className="text-white-muted leading-relaxed mb-6">
                Observability means structured logging, distributed tracing, and metrics that tell you not just what happened,
                but why it happened and how to prevent it happening again.
              </p>
              <h2 className="font-syne font-bold text-white text-2xl mb-4">Implementation Details</h2>
              <p className="text-white-muted leading-relaxed mb-4">
                Let&apos;s look at a concrete example. When we built the NexaPay payment platform, the key architectural
                decision was to make every payment operation idempotent using a client-generated idempotency key.
              </p>
              {/* Fake code block */}
              <div className="bg-black-muted border border-[#2A2A2A] rounded-lg p-5 my-6 font-mono text-sm overflow-x-auto">
                <pre className="text-white-soft">
                  <span className="text-[#999]">// Idempotent payment processing</span>{'\n'}
                  <span className="text-yellow">async function</span>{' '}
                  <span className="text-[#FFD84D]">processPayment</span>
                  <span className="text-white">(payload: PaymentPayload) {'{'}</span>{'\n'}
                  <span className="text-white">  </span>
                  <span className="text-yellow">const</span>
                  <span className="text-white"> key = </span>
                  <span className="text-[#FFD84D]">generateIdempotencyKey</span>
                  <span className="text-white">(payload);</span>{'\n'}
                  <span className="text-white">  </span>
                  <span className="text-yellow">const</span>
                  <span className="text-white"> cached = </span>
                  <span className="text-yellow">await</span>
                  <span className="text-white"> redis.</span>
                  <span className="text-[#FFD84D]">get</span>
                  <span className="text-white">(key);</span>{'\n'}
                  <span className="text-white">  </span>
                  <span className="text-yellow">if</span>
                  <span className="text-white"> (cached) </span>
                  <span className="text-yellow">return</span>
                  <span className="text-white"> JSON.</span>
                  <span className="text-[#FFD84D]">parse</span>
                  <span className="text-white">(cached);</span>{'\n'}
                  <span className="text-white">  </span>
                  <span className="text-[#999]">// ... process and cache result</span>{'\n'}
                  <span className="text-white">{'}'}</span>
                </pre>
              </div>
              <h2 className="font-syne font-bold text-white text-2xl mb-4">Key Takeaways</h2>
              <ul className="space-y-3 mb-6">
                {[
                  'Design for failure from the start — not as an afterthought.',
                  'Observability is not optional in production systems.',
                  'Idempotency prevents duplicate processing nightmares.',
                  'Graceful degradation keeps your system available during partial failures.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white-muted">
                    <span className="text-yellow mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[#2A2A2A]">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-black-muted border border-[#2A2A2A] rounded-full text-xs text-white-muted font-syne hover:border-yellow hover:text-yellow transition-all duration-200">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Share */}
              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#2A2A2A]">
                <span className="text-white-muted text-sm font-syne">Share:</span>
                {[
                  { icon: X, label: 'Twitter' },
                  { icon: ExternalLink, label: 'LinkedIn' },
                  { icon: Link2, label: 'Copy Link' },
                ].map(({ icon: Icon, label }) => (
                  <button key={label} className="w-9 h-9 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white-muted hover:text-yellow hover:border-yellow transition-all duration-200" aria-label={label}>
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Author card */}
              <div className="mt-8 bg-black-soft border border-[#2A2A2A] rounded-xl p-6 flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-yellow flex items-center justify-center flex-shrink-0">
                  <span className="font-syne font-bold text-black text-lg">
                    {post.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-syne font-bold text-white">{post.author}</p>
                  <p className="text-white-muted text-sm">Engineer at Codemaxxers. Writes about software architecture, AI, and shipping products that scale.</p>
                </div>
              </div>
            </article>

            {/* Table of Contents (desktop sidebar) */}
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="bg-black-soft border border-[#2A2A2A] rounded-lg p-5">
                  <p className="font-syne font-bold text-white text-sm uppercase tracking-widest mb-4">Contents</p>
                  <ul className="space-y-2">
                    {['Introduction', 'The Core Principles', 'Implementation Details', 'Key Takeaways'].map((item) => (
                      <li key={item}>
                        <a href="#" className="text-white-muted text-sm hover:text-yellow transition-colors duration-200 block py-1">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <Section className="bg-black-soft" withGrid>
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Badge>Related Posts</Badge>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 lg:px-24 text-center bg-black"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 70%)' }}>
        <h2 className="font-syne font-extrabold text-3xl text-white mb-4">Ready to Build Something?</h2>
        <p className="text-white-muted mb-8">Turn these insights into your next product.</p>
        <Link href="/contact" className="inline-flex items-center gap-2 bg-yellow text-black font-syne font-bold px-8 py-4 rounded-sm hover:bg-yellow-soft transition-colors duration-200">
          Start a Project <span>→</span>
        </Link>
      </section>
    </>
  );
}
