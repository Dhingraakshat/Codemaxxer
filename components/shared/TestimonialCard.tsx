import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-black-soft border border-[#2A2A2A] border-l-[3px] border-l-yellow rounded-lg p-6 min-w-[320px] max-w-[400px]">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-yellow fill-yellow" />
        ))}
      </div>
      <p className="text-yellow font-syne font-extrabold text-5xl leading-none mb-3 opacity-60">&ldquo;</p>
      <p className="text-white-soft text-sm leading-relaxed mb-4">
        {testimonial.quote}
      </p>
      <div>
        <p className="font-syne font-bold text-white text-sm">{testimonial.author}</p>
        <p className="text-white-muted text-xs">
          {testimonial.role}
          {testimonial.company && `, ${testimonial.company}`}
        </p>
      </div>
    </div>
  );
}
