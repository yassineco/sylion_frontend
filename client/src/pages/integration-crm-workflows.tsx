import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Check, 
  MessageCircle, 
  ArrowRight, 
  Database,
  RefreshCw,
  Headphones,
  Route,
  Shield,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Users,
  Building2,
  GraduationCap,
  Car,
  Phone
} from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "Pouvez-vous intégrer notre CRM interne ou développé en interne ?",
    answer: "Oui, tant qu'une API ou une base d'intégration est disponible."
  },
  {
    question: "Sommes-nous obligés d'avoir un CRM pour utiliser l'Assistant WhatsApp IA ?",
    answer: "Non, mais l'intégration CRM démultiplie la valeur sur le long terme."
  },
  {
    question: "Combien de temps dure un projet d'intégration CRM ?",
    answer: "Entre quelques jours et quelques semaines selon la complexité."
  },
  {
    question: "Qui gère les droits d'accès et la sécurité côté CRM ?",
    answer: "Les accès sont pilotés par vos équipes IT/CRM. SYLION utilise des clés/API limités au périmètre défini."
  },
  {
    question: "Peut-on commencer sans intégration et l'ajouter plus tard ?",
    answer: "Oui, c'est un scénario courant : démarrage rapide sans CRM, puis intégration ensuite."
  }
];

const crmIntegrations = [
  {
    name: "HubSpot",
    description: "Création de contacts, deals, tickets support, ajout de notes depuis les conversations WhatsApp."
  },
  {
    name: "Salesforce",
    description: "Création de leads/opportunités, logs d'interactions, synchronisation champs personnalisés."
  },
  {
    name: "Odoo",
    description: "Intégration commerciale et support, création de clients, devis, tickets."
  },
  {
    name: "Dynamics 365 / Autres CRM",
    description: "Intégrations via API, webhooks et connecteurs sur mesure."
  }
];

const workflows = [
  {
    icon: Database,
    title: "Qualification automatique des leads",
    description: "L'Assistant IA pose les bonnes questions (budget, besoin, timing) puis crée un lead qualifié dans le CRM."
  },
  {
    icon: RefreshCw,
    title: "Rappels & relances automatiques",
    description: "Après une demande WhatsApp, le CRM crée une tâche ou envoie un reminder si le commercial n'a pas répondu."
  },
  {
    icon: Headphones,
    title: "Support & tickets",
    description: "L'IA identifie un problème récurrent → création d'un ticket support dans le CRM / helpdesk avec résumé de la conversation."
  },
  {
    icon: Route,
    title: "Parcours client multi-étapes",
    description: "De la première question WhatsApp jusqu'à la signature, les étapes sont tracées dans le CRM sans saisie manuelle."
  }
];

const securityPoints = [
  "Données WhatsApp et CRM synchronisées de manière chiffrée",
  "Aucun stockage inutile : uniquement les champs nécessaires",
  "Respect des droits d'accès définis côté CRM",
  "Logs et traçabilité des synchronisations",
  "Possibilité de travailler en environnements de test (sandbox CRM) avant la prod"
];

const targetSegments = [
  { icon: Users, label: "Équipes commerciales B2B / B2C" },
  { icon: Headphones, label: "SAV & support client" },
  { icon: Phone, label: "Centres de contact" },
  { icon: GraduationCap, label: "Écoles & centres de formation" },
  { icon: Car, label: "Agences auto & immobilier" }
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

export default function IntegrationCrmWorkflowsPage() {
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
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Link href="/" data-testid="link-home">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
              ← Retour
            </Button>
          </Link>

          <header className="mb-20 text-center" data-testid="section-hero">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] text-sm font-medium mb-6">
              Intégration & Workflows IA
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Intégration WhatsApp IA & CRM
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl">Workflows automatisés</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connectez votre Assistant WhatsApp IA SYLION à votre CRM (HubSpot, Salesforce, Odoo, Dynamics…) et automatisez la qualification des leads, le suivi client et les tâches commerciales. Une seule plateforme pour centraliser vos conversations, vos données et vos actions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-hero">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6" data-testid="button-expert-hero">
                  Parler à un expert CRM
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

          <section className="mb-20" data-testid="section-why-crm">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Pourquoi connecter WhatsApp IA à votre CRM ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              WhatsApp concentre aujourd'hui une grande partie des demandes clients, mais ces échanges restent souvent "perdus" dans un téléphone ou une boîte partagée.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              En connectant votre Assistant WhatsApp IA à votre CRM, vous :
            </p>
            <ul className="space-y-3">
              {[
                "centralisez toutes les conversations dans un même outil",
                "créez automatiquement des fiches contacts et opportunités",
                "suivez les leads du premier message jusqu'à la vente",
                "pilotez votre activité avec des données fiables",
                "déclenchez des campagnes, relances et tâches automatiquement"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-20" data-testid="section-crm-supported">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              CRM supportés & intégrations possibles
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {crmIntegrations.map((crm) => (
                <div
                  key={crm.name}
                  className="p-6 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#4F46E5]/50 transition-colors"
                  data-testid={`card-crm-${crm.name.toLowerCase().replace(/\s/g, '-').slice(0, 15)}`}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{crm.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{crm.description}</p>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-2xl border border-[#4F46E5]/30 bg-[#4F46E5]/5">
              <p className="text-gray-300 leading-relaxed">
                SYLION s'intègre également avec des <strong className="text-white">CRM internes et des outils maison</strong> via API REST, webhooks ou middlewares (n8n, Make, Zapier, etc.).
              </p>
            </div>
          </section>

          <section className="mb-20" data-testid="section-workflows">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Exemples de Workflows IA concrets
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {workflows.map((workflow) => (
                <div
                  key={workflow.title}
                  className="p-6 rounded-2xl border border-gray-800 bg-[#111111]"
                  data-testid={`card-workflow-${workflow.title.toLowerCase().replace(/\s/g, '-').slice(0, 15)}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-4">
                    <workflow.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{workflow.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{workflow.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" data-testid="section-architecture">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Architecture d'intégration (vue simple)
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-center">
                <MessageCircle className="w-8 h-8 text-[#25D366] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Client sur WhatsApp</p>
              </div>
              <div className="p-4 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-center">
                <Building2 className="w-8 h-8 text-[#4F46E5] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Assistant IA SYLION</p>
                <p className="text-xs text-gray-400">WhatsApp API + RAG</p>
              </div>
              <div className="p-4 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-center">
                <RefreshCw className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Connecteur</p>
                <p className="text-xs text-gray-400">Webhooks / API</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-center">
                <Database className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">CRM</p>
                <p className="text-xs text-gray-400">HubSpot / Salesforce / Odoo</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              À chaque événement important (nouvelle conversation, lead qualifié, mot-clé spécifique, demande de rappel…), SYLION envoie les données au CRM avec le bon format : contact, ticket, lead, note, tâche, etc.
            </p>
          </section>

          <section className="mb-20" data-testid="section-security">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Sécurité & gouvernance des données
            </h2>
            <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-[#4F46E5]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-4">Protection des données</h3>
                  <ul className="space-y-3">
                    {securityPoints.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-target">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Pour qui est cette intégration ?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {targetSegments.map((segment) => (
                <div
                  key={segment.label}
                  className="p-4 rounded-xl border border-gray-800 bg-[#111111] text-center"
                >
                  <segment.icon className="w-6 h-6 text-[#4F46E5] mx-auto mb-2" />
                  <p className="text-xs text-gray-300">{segment.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed">
              Toutes les organisations qui reçoivent des leads ou des demandes récurrentes via WhatsApp et qui veulent arrêter de perdre ces opportunités.
            </p>
          </section>

          <section className="mb-20" data-testid="section-process">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Processus d'intégration avec SYLION
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] relative">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm">
                    1
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Audit CRM & cas d'usage</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Identification des objets à créer (contacts, leads, tickets…) et des champs à synchroniser.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] relative">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm">
                    2
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Mise en place technique</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Connexion API CRM, configuration webhooks, mapping champs, sandbox + tests.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] relative">
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-sm">
                    3
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 mt-4">Recette & déploiement</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Tests en conditions réelles, validation des équipes métiers, passage en production.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-pricing">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Tarification de l'intégration CRM
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              L'intégration CRM est généralement incluse dans un projet <strong className="text-white">Business avancé</strong> ou <strong className="text-white">Enterprise</strong>. Le coût dépend :
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "du CRM utilisé",
                "du nombre d'objets à synchroniser",
                "de la complexité des workflows",
                "et du niveau de personnalisation attendu"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link href="/pricing" data-testid="link-pricing">
                <Button variant="ghost" className="text-[#4F46E5] hover:text-[#7C3AED] hover:bg-transparent p-0 gap-2">
                  Voir les offres PME Starter et Business
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/enterprise" data-testid="link-enterprise">
                <Button variant="ghost" className="text-[#F59E0B] hover:text-[#FBBF24] hover:bg-transparent p-0 gap-2">
                  En savoir plus sur l'offre Enterprise
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-20" data-testid="section-faq">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              FAQ Intégration CRM & Workflows IA
            </h2>
            <div className="space-y-4">
              {faqData.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30" data-testid="section-cta-final">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
              Prêt à connecter WhatsApp à votre CRM ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Vous voulez connecter vos conversations WhatsApp à votre CRM et automatiser vos workflows commerciaux et support ? Parlons de vos cas d'usage et de votre stack CRM actuelle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-final">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6" data-testid="button-expert-final">
                  Parler à un expert CRM
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
