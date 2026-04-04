import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-black text-center relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,197,24,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="relative z-10">
        <p
          className="font-syne font-extrabold text-yellow leading-none select-none mb-4"
          style={{ fontSize: 'clamp(100px, 20vw, 200px)', textShadow: '0 0 120px rgba(245,197,24,0.3)' }}
        >
          404
        </p>
        <h1 className="font-syne font-bold text-white text-2xl md:text-3xl mb-4">
          Looks like this page got lost in the void.
        </h1>
        <p className="text-white-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-yellow text-black font-syne font-bold px-8 py-4 rounded-sm hover:bg-yellow-soft transition-colors duration-200 text-base"
        >
          Go Home <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
