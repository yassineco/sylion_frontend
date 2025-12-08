import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "590 DH",
      period: "/mois",
      description: "Pour petites équipes ou indépendants souhaitant automatiser leur WhatsApp.",
      features: [
        "Assistant WhatsApp IA 24/7",
        "Jusqu'à 500 conversations/mois",
        "Base documentaire simple",
        "Multilingue FR/AR/Darija/EN",
        "Support email",
      ],
      cta: "Demander une démo",
    },
    {
      name: "Business",
      price: "990 DH",
      period: "/mois",
      description: "Pour PME souhaitant une IA complète et une automatisation avancée.",
      features: [
        "Assistants multiples",
        "Conversations illimitées",
        "Base RAG avancée",
        "Support prioritaire FR/Darija",
        "Intégration CRM",
        "Analytics détaillés",
        "Workflows automatisés",
      ],
      popular: true,
      cta: "Demander une démo",
    },
    {
      name: "Pro / Entreprise",
      price: "À partir de 2 500 DH",
      period: "/mois",
      description: "Pour écoles, cliniques, agences auto, centres de formation, grandes PME.",
      features: [
        "Nombre d'assistants illimité",
        "Hébergement dédié Maroc ou Europe",
        "SLA garanti",
        "Account manager dédié",
        "Formation sur site",
        "API et intégrations personnalisées",
      ],
      cta: "Demander un devis",
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
            Choisissez la formule adaptée à votre PME. Prix en Dirhams marocains.
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
                  Recommandé
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
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
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-16 p-6 rounded-2xl border border-border">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold">Note importante :</span> Les coûts WhatsApp (numéros, frais 360dialog/Meta, conversations) sont facturés directement par le fournisseur WhatsApp Business et restent à la charge du client. SylionAI facture uniquement l'intelligence, l'automatisation et le support.
          </p>
        </div>
      </div>
    </main>
  );
}
