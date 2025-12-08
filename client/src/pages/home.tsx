import Hero from "@/components/Hero";
import KPIs from "@/components/KPIs";
import Features from "@/components/Features";
import PMEUseCases from "@/components/PMEUseCases";
import OnboardingStepper from "@/components/OnboardingStepper";
import RAGMultilingue from "@/components/RAGMultilingue";
import BentoMenu from "@/components/BentoMenu";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <KPIs />
      <Features />
      <PMEUseCases />
      <OnboardingStepper />
      <RAGMultilingue />
      <BentoMenu />
      <CTA />
    </main>
  );
}
