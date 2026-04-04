'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { useEffect, useRef, useState } from 'react';

const trustLogos = ['TechCrunch', 'Forbes', 'Wired', 'Fast Co.', 'VentureBeat', 'Product Hunt'];

const codeLines = [
  { color: '#555', text: '// codemaxxers.ai — production' },
  { color: '', text: '' },
  { color: '#e5e5e5', text: 'const ai = new CodemaxxersAI({' },
  { color: '#98d8a0', text: '  model: "gpt-4-turbo",' },
  { color: '#e5e5e5', text: '  context: await getContext(),' },
  { color: '#e5e5e5', text: '  stream: true,' },
  { color: '#e5e5e5', text: '});' },
  { color: '', text: '' },
  { color: '#e5e5e5', text: 'const result = await ai.analyze(data);' },
  { color: '', text: '' },
  { color: '#F5C518', text: '// ✓ Deployed in 4 months' },
  { color: '#F5C518', text: '// ✓ 99.99% uptime achieved' },
  { color: '#F5C518', text: '// ✓ $2M+ daily transactions' },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityVal = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => { setMounted(true); }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Ambient orbs */}
      <div className="orb-drift absolute rounded-full pointer-events-none" style={{
        width: '700px', height: '700px', top: '-160px', left: '-160px',
        background: 'radial-gradient(circle, rgba(245,197,24,0.07) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div className="orb-drift-reverse absolute rounded-full pointer-events-none" style={{
        width: '500px', height: '500px', top: '50%', right: '-200px',
        background: 'radial-gradient(circle, rgba(245,197,24,0.045) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />
      <div className="absolute rounded-full pointer-events-none" style={{
        width: '900px', height: '300px', bottom: '-80px', left: '50%', transform: 'translateX(-50%)',
        background: 'radial-gradient(ellipse, rgba(245,197,24,0.1) 0%, transparent 65%)',
        filter: 'blur(30px)',
      }} />

      {/* Yellow grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(245,197,24,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.018) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24 pt-28 pb-20"
        style={mounted ? { y, opacity: opacityVal } : {}}
      >
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-center">

          {/* Left */}
          <motion.div variants={container} initial="hidden" animate="visible" className="space-y-7 max-w-2xl">

            <motion.div variants={item}>
              <Badge>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  WELCOME TO THE FUTURE OF IT
                  <Sparkles className="w-3 h-3" />
                </span>
              </Badge>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-syne font-extrabold text-white leading-[1.03]"
              style={{ fontSize: 'clamp(42px, 6.5vw, 86px)', letterSpacing: '-0.03em' }}
            >
              We Build the<br />
              Software{' '}
              <span style={{ color: '#F5C518', textShadow: '0 0 50px rgba(245,197,24,0.4)' }}>That</span>
              <br />
              Drives the{' '}
              <span className="yellow-underline" style={{ color: '#F5C518', textShadow: '0 0 50px rgba(245,197,24,0.4)' }}>
                Future.
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-white-muted leading-relaxed" style={{ fontSize: '1.05rem', maxWidth: '500px' }}>
              Codemaxxers is an elite IT company building world-class web applications and AI solutions that transform how businesses operate, compete, and grow.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 items-center">
              <Button href="/contact" size="lg" className="btn-pulse">Start a Project</Button>
              <Button href="/work" variant="secondary" size="lg">View Our Work</Button>
            </motion.div>

            <motion.div variants={item} className="pt-2">
              <p className="text-white-muted text-[10px] font-syne uppercase tracking-[0.18em] mb-3">
                Trusted by forward-thinking companies
              </p>
              <div className="flex flex-wrap gap-2">
                {trustLogos.map((logo) => (
                  <span key={logo} className="px-3.5 py-1.5 border border-[#242424] rounded-full text-xs text-white-muted font-syne hover:border-yellow/40 hover:text-white-soft transition-all duration-300 cursor-default">
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Code card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block animate-float"
          >
            <div
              className="relative bg-[#0D0D0D] border border-[#222] rounded-2xl overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(245,197,24,0.07), 0 30px 70px rgba(0,0,0,0.7), 0 0 100px rgba(245,197,24,0.05)' }}
            >
              {/* Window bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#1A1A1A] bg-[#090909]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-white-muted text-xs font-mono">codemaxxers.ai.ts</span>
                <div className="flex items-center gap-1 text-yellow">
                  <Zap className="w-3 h-3" />
                  <span className="text-xs font-syne font-semibold">live</span>
                </div>
              </div>

              {/* Code body */}
              <div className="p-5 font-mono text-xs leading-[1.85]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.055, duration: 0.25 }}
                  >
                    {line.text ? (
                      <span style={{ color: line.color || '#e5e5e5' }}>{line.text}</span>
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Status bar */}
              <div className="px-5 py-2.5 border-t border-[#1A1A1A] bg-[#090909] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
                  <span className="text-[#28C840] text-xs font-mono">deployed</span>
                </div>
                <span className="text-white-muted text-xs font-mono">4ms avg</span>
              </div>

              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                background: 'linear-gradient(145deg, rgba(245,197,24,0.04) 0%, transparent 40%)',
              }} />
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <span className="text-white-muted text-[10px] font-syne uppercase tracking-[0.22em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-yellow animate-bounce-slow" />
      </motion.div>
    </section>
  );
}
