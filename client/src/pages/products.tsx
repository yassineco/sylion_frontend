import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  MessageCircle, 
  Database, 
  ArrowRight, 
  Check,
  Users,
  FileText,
  Headphones,
  Target,
  Search,
  Shield,
  Building2,
  Zap,
  Plug,
  Globe
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const assistantBenefits = [
  "Reponses automatiques 24/7 en FR/AR/Darija/EN",
  "Qualification intelligente des leads entrants",
  "Redirection vers un humain si besoin",
  "Reduction de 70% de la charge support"
];

const ragBenefits = [
  "Recherche intelligente dans vos documents",
  "Reponses fiables basees sur vos donnees",
  "Centralisation de toute la documentation",
  "Acces multi-equipes et multi-sites"
];

const useCases = [
  {
    icon: Target,
    title: "Qualification automatique des leads WhatsApp",
    description: "L'Assistant IA qualifie les demandes entrantes et envoie les leads chauds vers votre CRM automatiquement.",
    products: ["Assistant WhatsApp IA", "Integration CRM"]
  },
  {
    icon: MessageCircle,
    title: "Reponses instantanees aux FAQ clients",
    description: "L'IA repond immediatement aux questions frequentes en s'appuyant sur votre base de connaissances.",
    products: ["Assistant WhatsApp IA", "Base RAG"]
  },
  {
    icon: Users,
    title: "Support interne pour vos equipes",
    description: "Vos collaborateurs interrogent la base documentaire interne via un chat simple et obtiennent des reponses fiables.",
    products: ["Base RAG"]
  },
  {
    icon: Headphones,
    title: "Pre-qualification avant transfert humain",
    description: "L'Assistant collecte les informations cles avant de transmettre la conversation a un agent humain.",
    products: ["Assistant WhatsApp IA"]
  }
];

const integrationSteps = [
  { icon: MessageCircle, label: "Client WhatsApp / Web" },
  { icon: Zap, label: "Assistant IA SYLION" },
  { icon: Database, label: "Base de connaissances (RAG)" },
  { icon: Plug, label: "Connecteurs CRM / SI" }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour
          </Button>
        </Link>

        <header className="mb-20 text-center" data-testid="section-hero">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] text-sm font-medium mb-6">
            Solutions IA pretes a l'emploi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Nos Produits
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            SYLION propose des briques IA pretes a deployer : un Assistant WhatsApp IA multilingue 
            et une Base de Connaissances IA (RAG) hebergee au Maroc ou en Europe. 
            Deployables en quelques minutes, modulaires et evolutifs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/assistant-whatsapp-maroc" data-testid="link-assistant-hero">
              <Button 
                className="w-full sm:w-auto bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6"
                data-testid="button-discover-assistant"
                onClick={() => trackEvent({ action: 'cta_click', category: 'products', label: 'products_discover_assistant' })}
              >
                <MessageCircle className="w-5 h-5" />
                Decouvrir l'Assistant WhatsApp IA
              </Button>
            </Link>
            <Link href="/contact" data-testid="link-contact-hero">
              <Button 
                className="w-full sm:w-auto bg-white/5 border border-gray-700 text-white rounded-xl font-semibold hover:bg-white/10 gap-2 px-6"
                data-testid="button-expert-hero"
                onClick={() => trackEvent({ action: 'cta_click', category: 'products', label: 'products_parler_expert' })}
              >
                Parler a un expert
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </header>

        <section className="mb-20" data-testid="section-products">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#25D366]/50 transition-all duration-300" data-testid="card-product-assistant">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Assistant WhatsApp IA</h3>
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[#25D366]/20 text-[#25D366]">
                    Produit principal
                  </span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Un assistant WhatsApp IA disponible 24/7, multilingue (FR/AR/Darija/EN), 
                qui repond automatiquement a vos clients en s'appuyant sur vos documents internes. 
                Connecte a la WhatsApp Business API officielle.
              </p>
              <ul className="space-y-3 mb-6">
                {assistantBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-xs font-medium text-[#4F46E5]">
                  WhatsApp API
                </span>
                <span className="px-3 py-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-xs font-medium text-[#4F46E5]">
                  Multilingue
                </span>
                <span className="px-3 py-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-xs font-medium text-[#4F46E5]">
                  IA + RAG
                </span>
              </div>
              <a href="#use-cases" data-testid="link-usecases-assistant">
                <Button variant="ghost" className="text-[#25D366] hover:text-[#128C7E] hover:bg-transparent p-0 gap-2">
                  Voir les cas d'usage
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#4F46E5]/50 transition-all duration-300" data-testid="card-product-rag">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Base de Connaissances IA (RAG)</h3>
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[#4F46E5]/20 text-[#4F46E5]">
                    Module IA
                  </span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Transformez vos PDF, FAQ et procedures en base de connaissances intelligente. 
                Hebergee au Maroc ou en Europe, interrogeable via WhatsApp ou d'autres canaux. 
                Vos donnees restent privees et securisees.
              </p>
              <ul className="space-y-3 mb-6">
                {ragBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-xs font-medium text-[#7C3AED]">
                  RAG
                </span>
                <span className="px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-xs font-medium text-[#7C3AED]">
                  Docs internes
                </span>
                <span className="px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-xs font-medium text-[#7C3AED]">
                  Hebergement local
                </span>
              </div>
              <Link href="/whatsapp-business-api-maroc" data-testid="link-rag-more">
                <Button variant="ghost" className="text-[#4F46E5] hover:text-[#7C3AED] hover:bg-transparent p-0 gap-2">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-20" data-testid="section-comparison">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Quel produit est fait pour vous ?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choisissez la solution adaptee a vos besoins ou combinez les deux pour une automatisation complete.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-[#25D366]/30 bg-gradient-to-b from-[#25D366]/10 via-[#25D366]/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
                <h3 className="text-xl font-bold text-white">Assistant WhatsApp IA</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">Ideal pour PME/TPE qui veulent automatiser WhatsApp</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vous recevez beaucoup de messages WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vous voulez qualifier les leads automatiquement</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vous cherchez a reduire la charge du SAV</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vos clients preferent WhatsApp aux emails</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-[#4F46E5]/30 bg-gradient-to-b from-[#4F46E5]/10 via-[#4F46E5]/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-8 h-8 text-[#4F46E5]" />
                <h3 className="text-xl font-bold text-white">Base de Connaissances IA</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6">Ideal pour organisations avec beaucoup de documentation</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vous avez des FAQ, PDF ou procedures a centraliser</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vos equipes perdent du temps a chercher l'info</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vous gerez plusieurs sites ou departements</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">Vous voulez des reponses fiables basees sur vos donnees</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="use-cases" className="mb-20" data-testid="section-usecases">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Cas d'usage concrets
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Decouvrez comment nos produits s'appliquent a des situations reelles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-6 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#4F46E5]/50 transition-colors"
                data-testid={`card-usecase-${useCase.title.toLowerCase().replace(/\s+/g, '-').slice(0, 20)}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-4">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{useCase.description}</p>
                <div className="flex flex-wrap gap-2">
                  {useCase.products.map((product) => (
                    <span 
                      key={product}
                      className="px-2 py-1 rounded text-xs font-medium bg-[#25D366]/10 text-[#25D366]"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20" data-testid="section-integration">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Comment ca s'integre a votre SI ?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Architecture modulaire : commencez par l'Assistant seul, puis ajoutez le RAG et les connecteurs CRM.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {integrationSteps.map((step, index) => (
              <div key={step.label} className="relative">
                <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-white">{step.label}</p>
                </div>
                {index < integrationSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-medium">Approche modulaire :</span> Vous pouvez demarrer avec l'Assistant WhatsApp seul, 
              puis ajouter la Base de Connaissances IA et les integrations CRM/ERP au fur et a mesure de vos besoins.
            </p>
          </div>
        </section>

        <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30" data-testid="section-cta-final">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Pret a tester l'un de nos produits ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Demandez une demonstration personnalisee ou consultez nos tarifs adaptes aux PME marocaines.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" data-testid="link-demo-final">
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6"
                  data-testid="button-demo-final"
                  onClick={() => trackEvent({ action: 'cta_click', category: 'products', label: 'products_cta_demo_final' })}
                >
                  <MessageCircle className="w-5 h-5" />
                  Demander une demo WhatsApp
                </Button>
              </Link>
              <Link href="/pricing" data-testid="link-pricing-final">
                <Button 
                  className="w-full sm:w-auto bg-white/5 border border-gray-700 text-white rounded-xl font-semibold hover:bg-white/10 gap-2 px-6"
                  data-testid="button-pricing-final"
                  onClick={() => trackEvent({ action: 'cta_click', category: 'products', label: 'products_cta_pricing_final' })}
                >
                  Voir les tarifs
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
