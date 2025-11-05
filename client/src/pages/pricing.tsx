import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "499€",
      period: "/mois",
      features: [
        "Assistant IA de base",
        "Jusqu'à 1000 requêtes/mois",
        "Support email",
        "1 intégration incluse",
      ],
    },
    {
      name: "Business",
      price: "1 499€",
      period: "/mois",
      features: [
        "Assistant IA avancé",
        "Requêtes illimitées",
        "Support prioritaire 24/7",
        "Intégrations illimitées",
        "RAG personnalisé",
        "Analytics détaillés",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Sur devis",
      period: "",
      features: [
        "Solution sur mesure",
        "Hébergement dédié",
        "SLA garanti",
        "Account manager dédié",
        "Formation sur site",
        "Développements spécifiques",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            ← Retour
          </Button>
        </Link>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            Tarifs
          </h1>
          <p className="text-xl text-muted-foreground">
            Choisissez la formule adaptée à vos besoins
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border ${
                plan.popular
                  ? "border-[#4F46E5] bg-gradient-to-b from-[#4F46E5]/5 to-transparent"
                  : "border-border"
              }`}
              data-testid={`card-plan-${plan.name.toLowerCase()}`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-medium mb-4">
                  Populaire
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-2xl ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                data-testid={`button-select-${plan.name.toLowerCase()}`}
              >
                Choisir {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
