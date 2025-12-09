import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, Info, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      tag: "Starter",
      price: "790 DH",
      period: "/mois",
      description: "Pour démarrer sérieusement avec un Assistant WhatsApp IA sans faire de compromis.",
      features: [
        "1 numéro WhatsApp Business API",
        "Assistant IA multilingue (FR / AR / Darija)",
        "Scénarios standard + FAQ de base",
        "Dashboard simple de suivi",
        "Support par email",
      ],
      cta: "Demander une démo",
      color: "#7C3AED",
    },
    {
      name: "Business",
      tag: "Business",
      price: "1 490 DH",
      period: "/mois",
      description: "Le plan idéal pour les PME qui veulent automatiser sérieusement WhatsApp.",
      features: [
        "Conversations illimitées*",
        "Assistant IA avancé (FR / AR / Darija / EN)",
        "RAG sur vos documents (FAQ, PDF, procédures)",
        "Intégrations CRM possibles (HubSpot, Odoo, Salesforce, etc.)*",
        "Support FR/Darija (email + WhatsApp)",
        "Optimisations mensuelles des réponses IA",
      ],
      popular: true,
      cta: "Demander une démo",
      color: "#4F46E5",
      note: "*Sous réserve des limites de la WhatsApp Business API et du fournisseur (360dialog / Meta).",
    },
    {
      name: "Enterprise",
      tag: "Enterprise",
      price: "À partir de 4 900 DH",
      period: "/mois",
      description: "Pour écoles, cliniques, groupes, banques, assurances et grandes structures.",
      features: [
        "Hébergement dédié (Maroc ou Europe)",
        "Multi-numéros WhatsApp",
        "Intégrations CRM / SI avancées (API, webhooks, middlewares)",
        "Workflows complexes (multi-équipe, multi-pays)",
        "SLA prioritaire & support dédié",
        "Environnements de recette & pré-production",
      ],
      cta: "Demander un devis",
      color: "#F59E0B",
      note: "Tarification sur devis, ajustée selon vos volumes, intégrations et exigences de SLA.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour
          </Button>
        </Link>
        
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] text-sm font-medium mb-6">
            Positionnement Premium
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            Tarifs SYLION – Positionnement Premium assumé
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            SYLION est une solution WhatsApp IA premium conçue pour les PME ambitieuses et les grands comptes : 
            sécurité, intégrations, support FR/Darija et architecture scalable. 
            Nos tarifs reflètent cette exigence, tout en restant largement inférieurs au coût d'un agent dédié.
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
                    Recommandé
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
                <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-400 text-sm ml-1">{plan.period}</span>}
              </div>

              <ul className="space-y-3 mb-6">
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

              {plan.note && (
                <p className="text-xs text-gray-500 mb-6 leading-relaxed">{plan.note}</p>
              )}

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

        <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#25D366]/5 to-transparent border border-[#25D366]/30" data-testid="section-pack-activation">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-xl bg-[#25D366]/20 flex items-center justify-center">
                <Zap className="w-7 h-7 text-[#25D366]" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold text-white">Pack Activation WhatsApp Business API & 360</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-semibold">
                  One-shot
                </span>
              </div>
              <p className="text-3xl font-bold text-[#25D366] mb-4">1 490 DH <span className="text-sm text-gray-400 font-normal">(one-shot)</span></p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Nous prenons en charge pour vous toute la partie technique et administrative de mise en place de la WhatsApp Business API via 360dialog / Meta : 
                création du compte, vérifications, configuration, connexion au numéro, tests et mise en production.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Création et configuration du compte 360dialog / Meta</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Liaison avec votre numéro WhatsApp Business</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Configuration technique de l'API (webhooks, clés, tests)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-300">Accompagnement jusqu'à la mise en service</span>
                </li>
              </ul>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#111111] border border-gray-800 mb-6">
                <Info className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  Les frais WhatsApp (conversations Meta) restent facturés directement par le fournisseur (360dialog / Meta). 
                  Le pack couvre uniquement l'activation, la configuration et l'expertise SYLION.
                </p>
              </div>
              <Link href="/contact" data-testid="link-pack-activation">
                <Button 
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold px-6"
                  data-testid="button-pack-activation"
                  onClick={() => trackEvent({ action: 'cta_click', category: 'pricing', label: 'pricing_pack_activation_360' })}
                >
                  Parler à un expert
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-[#111111] border border-gray-800">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-[#4F46E5]/10 flex-shrink-0">
              <Info className="w-5 h-5 text-[#4F46E5]" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Note importante</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Les coûts WhatsApp Business (360dialog, Meta, numéros et conversations) sont facturés directement par le fournisseur WhatsApp et restent à la charge du client. SYLION facture uniquement l'intelligence, l'automatisation et le support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
