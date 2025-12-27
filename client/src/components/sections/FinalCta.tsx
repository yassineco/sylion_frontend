import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export default function FinalCta() {
  const handleCtaClick = () => {
    trackEvent({ action: "cta_click", category: "demo", label: "final_cta_demo" });
    window.location.href = "/contact";
  };

  return (
    <section id="demo" className="py-24 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8">
          Vous avez (ou visez) un compte{" "}
          <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            360dialog
          </span>{" "}
          ?
        </h2>

        <Button
          onClick={handleCtaClick}
          className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-10 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 mb-6"
          data-testid="button-final-demo"
        >
          Demander une démo
        </Button>

        <p className="text-gray-500 text-sm max-w-md mx-auto">
          On démarre par un cadrage court : objectif, scope, données, conformité.
        </p>
      </div>
    </section>
  );
}
