import { Button } from "@/components/ui/button";

export default function HeroNew() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          L'assistant IA WhatsApp conçu pour les comptes{" "}
          <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            360dialog
          </span>{" "}
          en environnement B2B.
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Multi-tenant • RAG • Scalabilité native • Conçu pour l'opérationnel réel
        </p>

        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={scrollToDemo}
            className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
            data-testid="button-hero-demo"
          >
            Demander une démo
          </Button>
          
          <p className="text-gray-500 text-sm max-w-md">
            Déploiement pilote possible. Filtrage par maturité WhatsApp Business.
          </p>
        </div>
      </div>
    </section>
  );
}
