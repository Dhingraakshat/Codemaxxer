import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import CostEstimator from '@/components/home/CostEstimator';
import WhyUs from '@/components/home/WhyUs';
import Process from '@/components/home/Process';
import Testimonials from '@/components/home/Testimonials';
import TechStack from '@/components/home/TechStack';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesTeaser />
      <CostEstimator />
      <WhyUs />
      <Process />
      <Testimonials />
      <TechStack />
      <CTABanner />
    </>
  );
}
