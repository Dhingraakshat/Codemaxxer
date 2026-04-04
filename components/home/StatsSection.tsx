'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion } from 'framer-motion';

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', desc: 'shipped & scaling' },
  { value: 5, suffix: '+', label: 'Years Experience', desc: 'in web & AI' },
  { value: 98, suffix: '%', label: 'Client Satisfaction', desc: 'across all projects' },
  { isStatic: true, staticValue: '24/7', label: 'Support', desc: 'always available' },
];

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-0 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] border-y border-[#181818] overflow-hidden">
      {/* subtle glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(245,197,24,0.04) 0%, transparent 60%)',
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`text-center py-12 px-6 group relative ${i < stats.length - 1 ? 'border-r border-[#181818]' : ''}`}
            >
              {/* hover glow bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'radial-gradient(ellipse at 50% 100%, rgba(245,197,24,0.04) 0%, transparent 70%)',
              }} />

              <div
                className="stat-number mb-1 relative z-10"
                style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}
              >
                {stat.isStatic ? stat.staticValue : <CountUp target={stat.value!} suffix={stat.suffix!} />}
              </div>
              <p className="text-white font-syne font-semibold text-sm mb-0.5 relative z-10">{stat.label}</p>
              <p className="text-white-muted text-xs relative z-10">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
