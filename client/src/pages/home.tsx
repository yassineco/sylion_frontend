import Hero from "@/components/Hero";
import KPIs from "@/components/KPIs";
import Features from "@/components/Features";
import BentoMenu from "@/components/BentoMenu";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <KPIs />
      <Features />
      <BentoMenu />
      <CTA />
    </main>
  );
}
