import ShinyText from "./animations/ShinyText";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-background text-foreground px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        <ShinyText text="SYLION TECH" speed={3} />
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-xl text-muted-foreground">
        L'IA qui parle métier. Des assistants et services IA intégrés à vos outils.
      </p>
      <a href="#contact" data-testid="link-demo">
        <Button 
          size="lg" 
          className="rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          data-testid="button-demo"
        >
          Demander une démo
        </Button>
      </a>
    </section>
  );
}
