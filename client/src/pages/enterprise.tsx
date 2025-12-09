import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Check, 
  MessageCircle, 
  ArrowRight, 
  Server, 
  Users, 
  Headphones, 
  Plug, 
  FileText, 
  Workflow,
  Shield,
  Gauge,
  Eye,
  Lock,
  GraduationCap,
  Stethoscope,
  Building2,
  Car,
  Landmark,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "Quelle est la différence entre l'offre Business et Enterprise ?",
    answer: "L'offre Enterprise inclut : multi-numéros illimités, intégrations avancées, SLA, support prioritaire, hébergement dédié et développement sur mesure."
  },
  {
    question: "Pouvez-vous déployer un assistant IA pour plusieurs filiales / agences ?",
    answer: "Oui, c'est un cas d'usage courant (groupes auto, écoles multi-sites, assurances, immobilier)."
  },
  {
    question: "Est-ce sécurisé pour les données sensibles ?",
    answer: "Oui, avec isolation par tenant, chiffrement, hébergement dédié et gouvernance des accès."
  },
  {
    question: "Pouvez-vous travailler avec nos équipes IT internes ?",
    answer: "Oui, nous intégrons vos règles de sécurité, API internes et processus validation."
  },
  {
    question: "Comment est structuré le devis Enterprise ?",
    answer: "Setup + abonnement mensuel, selon volume, complexité, intégrations et SLA."
  }
];

const advancedFeatures = [
  {
    icon: Server,
    title: "Hébergement dédié Maroc ou Europe",
    description: "Données isolées, infrastructure conforme, sécurité renforcée."
  },
  {
    icon: Users,
    title: "Multi-numéros & multi-équipes",
    description: "Support WhatsApp pour plusieurs filiales, départements ou agences."
  },
  {
    icon: Headphones,
    title: "SLA prioritaire + support dédié",
    description: "Accompagnement FR/Darija, astreinte entreprise, résolution rapide."
  },
  {
    icon: Plug,
    title: "Intégrations CRM & outils internes",
    description: "Connecteurs pour Salesforce, HubSpot, Dynamics, Odoo, systèmes internes via API."
  },
  {
    icon: FileText,
    title: "RAG multi-documents",
    description: "Base de connaissances IA alimentée par vos PDF, procédures, catalogues, offres, processus internes."
  },
  {
    icon: Workflow,
    title: "Workflows IA personnalisés",
    description: "Qualification automatique, escalade intelligente, transfert aux agents humains."
  }
];

const architectureBlocks = [
  {
    icon: Shield,
    title: "Isolation par tenant",
    description: "Chaque organisation possède son espace sécurisé, ses logs, sa base RAG, ses numéros WhatsApp et ses clés."
  },
  {
    icon: Gauge,
    title: "Scalabilité Workers + Queue",
    description: "Architecture distribuée capable de traiter des milliers de messages simultanés."
  },
  {
    icon: Eye,
    title: "Monitoring & observabilité",
    description: "Tableau de bord, logs conversationnels, consommation tokens, alertes."
  },
  {
    icon: Lock,
    title: "Sécurité & conformité",
    description: "Chiffrement, gestion permissions, audit, rotation clés API."
  }
];

const useCases = [
  {
    icon: GraduationCap,
    title: "Écoles & Groupes Éducatifs",
    description: "Réponses aux questions des parents, inscriptions, frais, orientation, documents PDF."
  },
  {
    icon: Stethoscope,
    title: "Cliniques & Centres médicaux",
    description: "Spécialités, horaires, pré-qualification, orientation patient, procédures internes."
  },
  {
    icon: Building2,
    title: "Groupes immobiliers",
    description: "Qualification leads, demandes de visite, envoi fiches PDF, disponibilité, localisation."
  },
  {
    icon: Car,
    title: "Agences auto & Leasing",
    description: "Modèles, prix, financement, collecte leads chauds, prise de RDV showroom."
  },
  {
    icon: Landmark,
    title: "Banques / Assurances",
    description: "Préqualification client, documentation, FAQ réglementaire, parcours d'éligibilité."
  }
];

const enterpriseGuarantees = [
  "Support FR/Darija dédié",
  "SLA prioritaire (délais garantis)",
  "Mise en production encadrée",
  "Formation équipes",
  "Gestion multi-environnements (pré-prod / prod)",
  "Contrat annuel ou mensuel modulable",
  "Contrat de confidentialité, audit, conformité",
  "Assistance onboarding WhatsApp API"
];

const enterpriseFeatures = [
  "Nombre de numéros WhatsApp illimité",
  "RAG multi-équipes",
  "Intégrations CRM/ERP/API",
  "Accompagnement sur mesure",
  "Monitoring avancé",
  "Hébergement dédié Maroc/UE",
  "SLA renforcé + support prioritaire",
  "Workflows IA personnalisés",
  "Développements spécifiques"
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left bg-[#111111] hover:bg-[#151515] transition-colors"
        data-testid={`faq-toggle-${question.slice(0, 20).replace(/\s/g, '-').toLowerCase()}`}
      >
        <span className="font-medium text-white pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#4F46E5] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="p-5 bg-[#0D0D0D] border-t border-gray-800">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function EnterprisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />
      <main className="min-h-screen bg-[#0B0B0B] text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Link href="/" data-testid="link-home">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
              ← Retour
            </Button>
          </Link>

          <header className="mb-20 text-center" data-testid="section-hero">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] text-sm font-medium mb-6">
              Solution Enterprise 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Solution WhatsApp IA pour Grands Comptes au Maroc
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Automatisation intelligente, sécurité avancée, hébergement dédié, multi-numéros, intégration CRM et SLA premium. Une plateforme IA WhatsApp conçue pour les écoles, cliniques, banques, assurances, groupes auto et grandes PME marocaines.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-hero">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6" data-testid="button-consultation-hero">
                  Demander une consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-whatsapp-hero"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold gap-2 px-6">
                  <MessageCircle className="w-5 h-5" />
                  Tester l'assistant
                </Button>
              </a>
            </div>
          </header>

          <section className="mb-20" data-testid="section-why-enterprise">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Pourquoi les grands comptes passent à WhatsApp IA ?
            </h2>
            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Les organisations marocaines gèrent des milliers de conversations WhatsApp chaque mois : demandes d'information, admissions, rendez-vous, réclamations, fiches produits, financement, support…
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Les équipes support ne peuvent pas absorber ce volume 24h/24, et les bots scriptés ne suffisent plus pour répondre naturellement en FR/AR/Darija.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Les grands comptes adoptent désormais des assistants IA capables de comprendre le langage naturel, d'utiliser des documents internes (RAG), de qualifier les demandes, et d'offrir un support continu.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  +40%
                </p>
                <p className="text-gray-400 text-sm">efficacité support</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  24/7
                </p>
                <p className="text-gray-400 text-sm">disponibilité</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  99%
                </p>
                <p className="text-gray-400 text-sm">précision sur documents internes</p>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-advanced-features">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Fonctionnalités avancées pour les grandes organisations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#4F46E5]/50 transition-colors"
                  data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s/g, '-').slice(0, 20)}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" data-testid="section-architecture">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Architecture professionnelle SYLION (version grand compte)
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {architectureBlocks.map((block) => (
                <div
                  key={block.title}
                  className="p-6 rounded-2xl border border-[#4F46E5]/30 bg-gradient-to-b from-[#4F46E5]/10 via-[#4F46E5]/5 to-transparent"
                  data-testid={`card-arch-${block.title.toLowerCase().replace(/\s/g, '-').slice(0, 15)}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                      <block.icon className="w-5 h-5 text-[#4F46E5]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{block.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{block.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" data-testid="section-use-cases">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Cas d'usage Enterprise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-6 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#F59E0B]/50 transition-colors"
                  data-testid={`card-usecase-${useCase.title.toLowerCase().replace(/\s/g, '-').slice(0, 15)}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/20 flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/assistant-whatsapp-maroc" data-testid="link-assistant-maroc">
                <Button variant="ghost" className="text-[#4F46E5] hover:text-[#7C3AED] hover:bg-transparent p-0 gap-2">
                  Voir tous les cas d'usage PME
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-20" data-testid="section-results">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Résultats pour les grands comptes
            </h2>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] flex items-center gap-4">
                <div className="text-3xl font-bold text-[#25D366]">x10</div>
                <p className="text-gray-300">capacité de traitement sans recruter</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] flex items-center gap-4">
                <div className="text-3xl font-bold text-[#25D366]">70%</div>
                <p className="text-gray-300">des demandes traitées automatiquement</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] flex items-center gap-4">
                <div className="text-3xl font-bold text-[#25D366]">-50%</div>
                <p className="text-gray-300">de charge sur équipes support</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] flex items-center gap-4">
                <div className="text-3xl font-bold text-[#25D366]">0</div>
                <p className="text-gray-300">message perdu même en pic de charge</p>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-engagement">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Notre engagement Enterprise
            </h2>
            <div className="p-8 rounded-2xl border border-gray-800 bg-[#111111]">
              <div className="grid md:grid-cols-2 gap-4">
                {enterpriseGuarantees.map((guarantee) => (
                  <div key={guarantee} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0" />
                    <span className="text-gray-300">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-offer">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Offre Enterprise (sur devis)
            </h2>
            <div className="p-8 rounded-2xl border border-[#F59E0B]/30 bg-gradient-to-b from-[#F59E0B]/10 via-[#F59E0B]/5 to-transparent">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-md text-xs font-medium bg-[#F59E0B]/20 text-[#F59E0B]">
                  Enterprise
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Sur devis</h3>
              <p className="text-gray-400 mb-6">Adapté à vos volumes et intégrations</p>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {enterpriseFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" data-testid="link-contact-offer">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2" data-testid="button-consultation-offer">
                  Demander une consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <div className="mt-6">
                <Link href="/pricing" data-testid="link-pricing">
                  <Button variant="ghost" className="text-[#4F46E5] hover:text-[#7C3AED] hover:bg-transparent p-0 gap-2">
                    Voir les offres PME Starter et Business
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-process">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Processus projet Enterprise
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] relative">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Audit & cadrage</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Analyse de votre activité, cartographie des cas d'usage WhatsApp.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] relative">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Mise en place & intégration</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Configuration WhatsApp API, IA, RAG, workflows, connecteurs.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] relative">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Déploiement & amélioration</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Monitoring, optimisation, formation, reporting.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-faq">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              FAQ Enterprise
            </h2>
            <div className="space-y-4">
              {faqData.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
            <div className="mt-8">
              <Link href="/whatsapp-business-api-maroc" data-testid="link-api-maroc">
                <Button variant="ghost" className="text-[#4F46E5] hover:text-[#7C3AED] hover:bg-transparent p-0 gap-2">
                  En savoir plus sur la WhatsApp Business API au Maroc
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30" data-testid="section-cta-final">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
              Prêt à passer à l'échelle ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Vous êtes une école, un groupe, une clinique, une banque, une assurance ou une grande PME ? Passez à l'automatisation WhatsApp IA avec une solution sécurisée, évolutive et adaptée au marché marocain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-final">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6" data-testid="button-consultation-final">
                  Demander une consultation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-whatsapp-final"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold gap-2 px-6">
                  <MessageCircle className="w-5 h-5" />
                  Tester l'assistant sur WhatsApp
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
