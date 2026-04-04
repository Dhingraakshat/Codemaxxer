import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withGrid?: boolean;
  withNoise?: boolean;
  id?: string;
}

export default function Section({ children, className, withGrid, withNoise, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-24 px-6 md:px-12 lg:px-24',
        withGrid && 'grid-overlay',
        withNoise && 'noise-overlay',
        className
      )}
    >
      {children}
    </section>
  );
}
