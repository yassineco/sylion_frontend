import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Info } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PricingPage() {
  const plans = [
    {
      name: "PME Starter",
      tag: "Starter",
      price: "590 DH",
      period: "/mois",
      description: "Pour les petites structures qui veulent commencer avec un assistant WhatsApp IA simple et efficace.",
      features: [
        "1 numéro WhatsApp géré par l'assistant",
        "Jusqu'à 500 conversations/mois",
        "Assistant IA 24/7",
        "Multilingue FR/AR/Darija/EN",
        "Base de connaissance simple (RAG basique)",
        "Support email",
      ],
      cta: "Demander une démo",
      color: "#7C3AED",
    },
    {
      name: "Business",
      tag: "Business",
      price: "990 DH",
      period: "/mois",
      description: "Pour les PME qui veulent automatiser sérieusement leur WhatsApp et suivre la performance.",
      features: [
        "Jusqu'à 3 numéros WhatsApp gérés",
        "Conversations illimitées*",
        "Base de connaissance avancée (RAG multi-documents)",
        "Support prioritaire FR/Darija",
        "Analytics simplifiés",
        "Add-ons possibles : CRM, multi-canal, workflows (sur devis)",
      ],
      popular: true,
      cta: "Demander une démo",
      color: "#4F46E5",
    },
    {
      name: "Enterprise",
      tag: "Enterprise",
      price: "Sur devis",
      period: "",
      periodSubtext: "Facturation mensuelle adaptée à vos volumes et intégrations.",
      description: "Pour écoles, cliniques, agences auto, groupes et grandes PME.",
      features: [
        "Nombre de numéros WhatsApp illimité",
        "Hébergement dédié Maroc ou Europe",
        "SLA prioritaire et support dédié FR/Darija",
        "Configuration avancée et formation équipes",
        "API et modules avancés (CRM, multi-canal, workflows)",
        "Développements sur mesure",
      ],
      cta: "Demander un devis",
      color: "#F59E0B",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour
          </Button>
        </Link>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] text-sm font-medium mb-6">
            Tarification transparente
          </span>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            Choisissez votre formule
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Des offres adaptées à chaque PME marocaine. Prix en Dirhams, sans engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                plan.popular
                  ? "border-[#4F46E5] bg-gradient-to-b from-[#4F46E5]/10 via-[#4F46E5]/5 to-transparent shadow-lg shadow-[#4F46E5]/10"
                  : "border-gray-800 bg-[#111111] hover:border-gray-700"
              }`}
              data-testid={`card-plan-${plan.tag.toLowerCase()}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-xs font-semibold whitespace-nowrap shadow-lg">
                    Plan le plus choisi
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span 
                  className="inline-block px-3 py-1 rounded-md text-xs font-medium mb-4"
                  style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
                >
                  {plan.tag}
                </span>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-800">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-400 text-sm ml-1">{plan.period}</span>}
                {plan.periodSubtext && (
                  <p className="text-xs text-gray-500 mt-2">{plan.periodSubtext}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check 
                      className="w-5 h-5 flex-shrink-0 mt-0.5" 
                      style={{ color: plan.color }}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" data-testid={`link-select-${plan.tag.toLowerCase()}`}>
                <Button
                  className={`w-full rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90 hover:shadow-lg hover:shadow-[#4F46E5]/20"
                      : "bg-white/5 border border-gray-700 text-white hover:bg-white/10"
                  }`}
                  data-testid={`button-select-${plan.tag.toLowerCase()}`}
                  onClick={() => trackEvent({ action: 'cta_click', category: 'pricing', label: `pricing_${plan.tag.toLowerCase()}_${plan.cta.includes('devis') ? 'devis' : 'demo'}` })}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 rounded-2xl bg-[#111111] border border-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#4F46E5]/10 flex-shrink-0">
              <Info className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Note importante</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Les coûts WhatsApp Business (360dialog, Meta, numéros et conversations) sont facturés directement par le fournisseur WhatsApp et restent à la charge du client. SylionAI facture uniquement l'intelligence, l'automatisation et le support.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                * Sous réserve des limites WhatsApp/360dialog du client.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
