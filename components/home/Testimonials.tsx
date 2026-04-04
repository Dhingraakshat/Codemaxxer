'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Section from '@/components/layout/Section';
import TestimonialCard from '@/components/shared/TestimonialCard';
import { fadeUpVariant, staggerContainer } from '@/lib/animations';

const testimonials = [
  {
    quote: 'Codemaxxers delivered a world-class payment platform in just 4 months. Our transaction volume tripled within weeks of launch.',
    author: 'David Kim',
    role: 'CTO',
    company: 'NexaPay Inc.',
  },
  {
    quote: 'The AI assistant has transformed our radiology department. We can now process 3x the cases with the same team size.',
    author: 'Dr. Sarah Mitchell',
    role: 'Chief Radiologist',
    company: 'HealthFirst Labs',
  },
  {
    quote: "LogiSync's platform has given us unprecedented visibility into our supply chain. The ROI was evident within the first quarter.",
    author: 'Marcus Johnson',
    role: 'VP Operations',
    company: 'LogiSync',
  },
  {
    quote: 'EduBot transformed how our students learn. Study time dropped 40% while test scores improved significantly.',
    author: 'Jennifer Torres',
    role: 'CEO',
    company: 'EduTech Corp',
  },
  {
    quote: "RetailMind's recommendation engine paid for itself in the first week. Our AOV jumped 35% immediately after launch.",
    author: 'Aisha Patel',
    role: 'Head of E-commerce',
    company: 'RetailMind',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [paused]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <Section withGrid>
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div variants={fadeUpVariant}>
            <Badge>Testimonials</Badge>
          </motion.div>
          <motion.h2 variants={fadeUpVariant} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(24px,3.5vw,38px)", letterSpacing: "-0.02em" }}>
            What Our Clients <span className="text-yellow">Say.</span>
          </motion.h2>
        </motion.div>

        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Cards strip */}
          <div className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current * 360}px - ${current * 24}px))` }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="flex-shrink-0">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>

          {/* Gradient fades */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white hover:border-yellow hover:text-yellow transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-yellow w-6' : 'bg-[#2A2A2A]'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white hover:border-yellow hover:text-yellow transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Section>
  );
}
