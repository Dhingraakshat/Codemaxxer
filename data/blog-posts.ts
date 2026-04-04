export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-ai-chatbots-2024',
    title: 'Building Production-Ready AI Chatbots in 2024',
    category: 'AI',
    excerpt: 'From RAG pipelines to context management — a practical guide to shipping AI chatbots that actually work.',
    author: 'Alex Rivera',
    date: '2024-11-15',
    readTime: '8 min read',
    tags: ['AI', 'LLM', 'RAG', 'Production'],
  },
  {
    slug: 'nextjs-performance-guide',
    title: 'Next.js Performance Secrets: From 3s to 0.8s Load Time',
    category: 'Web Dev',
    excerpt: 'The exact optimizations we used to cut load times by 73% on a high-traffic SaaS dashboard.',
    author: 'Sam Chen',
    date: '2024-10-28',
    readTime: '12 min read',
    tags: ['Next.js', 'Performance', 'Web Dev', 'Optimization'],
  },
  {
    slug: 'future-of-saas-ai',
    title: 'The Future of SaaS is AI-Native',
    category: 'AI',
    excerpt: 'Why every SaaS product built in 2025 needs to have AI at its core — not as a feature, but as infrastructure.',
    author: 'Jordan Patel',
    date: '2024-10-10',
    readTime: '6 min read',
    tags: ['AI', 'SaaS', 'Product Strategy'],
  },
  {
    slug: 'microservices-vs-monolith',
    title: 'Microservices vs Monolith: What We Learned After 50+ Projects',
    category: 'Architecture',
    excerpt: 'The honest truth about when to split your architecture — and when the monolith is the smarter choice.',
    author: 'Alex Rivera',
    date: '2024-09-22',
    readTime: '10 min read',
    tags: ['Architecture', 'Microservices', 'Engineering'],
  },
];
