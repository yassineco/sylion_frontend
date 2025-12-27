import Hero from "@/components/Hero";
import TargetAudience360 from "@/components/TargetAudience360";
import Features from "@/components/Features";
import OnboardingStepper from "@/components/OnboardingStepper";
import BentoMenu from "@/components/BentoMenu";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TargetAudience360 />
      <Features />
      <OnboardingStepper />
      <BentoMenu />
      <CTA />
    </main>
  );
}
