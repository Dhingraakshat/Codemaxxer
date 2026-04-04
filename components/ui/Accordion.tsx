'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

function AccordionSingle({ item, index }: { item: AccordionItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#2A2A2A] rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 bg-black-soft hover:bg-black-muted transition-colors duration-200 text-left"
        aria-expanded={open}
      >
        <span className="font-syne font-semibold text-white">{item.title}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-yellow flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key={`accordion-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 py-4 font-dmsans text-white-muted border-t border-[#2A2A2A]">
              {item.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <AccordionSingle key={index} item={item} index={index} />
      ))}
    </div>
  );
}
