import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import type { BlogPost } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';

const categoryGradients: Record<string, string> = {
  AI: 'linear-gradient(135deg, #0A1A1A 0%, #0D2020 100%)',
  'Web Dev': 'linear-gradient(135deg, #0A0D1A 0%, #0D1020 100%)',
  Architecture: 'linear-gradient(135deg, #1A0A0A 0%, #201010 100%)',
  default: 'linear-gradient(135deg, #111111 0%, #1A1A1A 100%)',
};

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const gradient = categoryGradients[post.category] || categoryGradients.default;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-black-soft border border-[#2A2A2A] rounded-lg overflow-hidden hover:border-yellow transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,197,24,0.2)] h-full flex flex-col">
        {/* Gradient placeholder image */}
        <div
          className="h-44 relative flex items-center justify-center"
          style={{ background: gradient }}
        >
          <span className="font-syne font-extrabold text-4xl text-white opacity-5 select-none">
            {post.category}
          </span>
          <div className="absolute top-4 left-4">
            <Badge>{post.category}</Badge>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-syne font-bold text-white text-base mb-2 group-hover:text-yellow transition-colors duration-200 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white-muted text-sm mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between text-xs text-white-muted mt-auto pt-4 border-t border-[#2A2A2A]">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-yellow group-hover:translate-x-1 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
}
