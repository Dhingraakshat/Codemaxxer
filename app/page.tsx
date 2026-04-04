import HeroSection from '@/components/home/HeroSection';
import StatsSection from '@/components/home/StatsSection';
import ServicesTeaser from '@/components/home/ServicesTeaser';
import WhyUs from '@/components/home/WhyUs';
import Process from '@/components/home/Process';
import FeaturedWork from '@/components/home/FeaturedWork';
import Testimonials from '@/components/home/Testimonials';
import TechStack from '@/components/home/TechStack';
import CTABanner from '@/components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesTeaser />
      <WhyUs />
      <Process />
      <FeaturedWork />
      <Testimonials />
      <TechStack />
      <CTABanner />
    </>
  );
}
