import ShinyText from "./animations/ShinyText";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-[#0B0B0B] text-white text-center">
      <h2 className="text-3xl md:text-4xl mb-6 font-semibold px-6">
        <ShinyText text="Prêt à booster votre performance ?" speed={2} />
      </h2>
      <a href="#contact" data-testid="link-contact">
        <Button 
          size="lg" 
          className="rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          data-testid="button-contact"
        >
          Contactez-nous
        </Button>
      </a>
    </section>
  );
}
