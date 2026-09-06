import { ScrollReveal } from '@/components/ui/scroll-reveal';
import {
  AboutSection,
  ActivitiesSection,
  ConnectSection,
  ForaneIntroSection,
  ForaneLeadershipSection,
  HeroSection,
  ParishesSection,
} from '@/features/home';

export default function Home() {
  return (
    <>
      <ScrollReveal amount={0}>
        <HeroSection />
      </ScrollReveal>
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal>
        <ForaneIntroSection />
      </ScrollReveal>
      <ScrollReveal>
        <ForaneLeadershipSection />
      </ScrollReveal>
      <ScrollReveal>
        <ParishesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ActivitiesSection />
      </ScrollReveal>
      <ScrollReveal>
        <ConnectSection />
      </ScrollReveal>
    </>
  );
}
