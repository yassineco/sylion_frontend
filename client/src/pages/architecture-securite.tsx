import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Check, 
  ArrowRight, 
  Server, 
  Shield, 
  Lock,
  Database,
  Eye,
  Users,
  Layers,
  Zap,
  Globe,
  FileText,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const faqData = [
  {
    question: "Pouvez-vous héberger la plateforme au Maroc ?",
    answer: "Oui, nous proposons un hébergement au Maroc pour les clients qui le souhaitent, ainsi qu'un hébergement en Europe pour les clients sensibles à la conformité UE."
  },
  {
    question: "Nos données sont-elles mélangées avec celles d'autres clients ?",
    answer: "Non, chaque client dispose d'un espace isolé : ses propres identifiants WhatsApp, sa base de connaissances, ses workflows et ses logs. Aucun mélange de données entre tenants."
  },
  {
    question: "Qui a accès aux conversations de nos clients ?",
    answer: "L'accès est strictement contrôlé. Seules les personnes autorisées (Admin client, Support SYLION selon contrat) peuvent consulter les conversations, avec journalisation des accès."
  },
  {
    question: "Comment gérez-vous les accès aux CRM / systèmes internes ?",
    answer: "Nous appliquons le principe du moindre privilège. Les intégrations n'ont accès qu'au périmètre défini (contacts, leads, tickets…), jamais aux droits admin globaux sauf nécessité absolue."
  },
  {
    question: "Proposez-vous un environnement de test avant la production ?",
    answer: "Oui, pour les projets Enterprise, nous proposons un environnement de pré-production (sandbox) pour valider les workflows et intégrations avant le passage en production."
  }
];

const governanceData = [
  {
    topic: "Exploitation de la plateforme",
    sylion: "Mise à jour, patches, monitoring",
    client: "Validation des nouveautés, règles métiers"
  },
  {
    topic: "Sécurité de la plateforme",
    sylion: "Sécurisation infra, contrôle accès interne, logs",
    client: "Sécurité de son réseau, de ses postes et de ses comptes utilisateurs"
  },
  {
    topic: "Données métier (FAQ, PDF, offres, procédures)",
    sylion: "Stockage et traitement",
    client: "Contenu, exactitude et droits sur ces données"
  },
  {
    topic: "Intégrations CRM / systèmes internes",
    sylion: "Implémentation technique et respect du périmètre d'accès",
    client: "Gestion des comptes API, des rôles et des droits dans ses outils"
  }
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

export default function ArchitectureSecuritePage() {
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
      <main className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
          <Link href="/" data-testid="link-home">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
              ← Retour
            </Button>
          </Link>

          <header className="mb-20 text-center" data-testid="section-hero">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] text-xs font-medium">
                Multi-tenant
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-[#7C3AED] text-xs font-medium">
                Enterprise grade
              </span>
              <span className="inline-block px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-medium">
                Scalable
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Architecture & Sécurité
              </span>
              <br />
              <span className="text-white text-2xl md:text-3xl">de la plateforme SYLION</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Une plateforme WhatsApp IA conçue dès le départ pour les organisations exigeantes : architecture multi-tenant, Workers + Queue, hébergement dédié Maroc/Europe, chiffrement des données et gouvernance claire entre vos équipes et SYLION.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-hero">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6" data-testid="button-expert-hero" onClick={() => trackEvent({ action: 'cta_click', category: 'architecture_security', label: 'expert_technique' })}>
                  Parler à un expert technique
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/enterprise" data-testid="link-enterprise-hero">
                <Button variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 rounded-xl font-semibold gap-2 px-6" onClick={() => trackEvent({ action: 'cta_click', category: 'architecture_security', label: 'voir_offre_enterprise' })}>
                  Voir l'offre Enterprise
                </Button>
              </Link>
            </div>
          </header>

          <section className="mb-20" data-testid="section-overview">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Vue d'ensemble de l'architecture SYLION
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              SYLION repose sur une architecture moderne composée de plusieurs couches indépendantes : passerelle WhatsApp, moteur IA, base de connaissances (RAG), file de messages (queue) et Workers de traitement. Cette séparation permet de gérer un grand volume de conversations, d'isoler les données de chaque client et d'évoluer sans interrompre le service.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-center">
                <MessageCircle className="w-8 h-8 text-[#25D366] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Clients WhatsApp</p>
              </div>
              <div className="p-4 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-center">
                <Globe className="w-8 h-8 text-[#4F46E5] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Gateway WhatsApp</p>
                <p className="text-xs text-gray-400">Webhook + Normalisation</p>
              </div>
              <div className="p-4 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 text-center">
                <Zap className="w-8 h-8 text-[#7C3AED] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Queue & Workers IA</p>
                <p className="text-xs text-gray-400">Traitement asynchrone</p>
              </div>
              <div className="p-4 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-center">
                <Layers className="w-8 h-8 text-[#F59E0B] mx-auto mb-2" />
                <p className="text-sm text-white font-medium">Services internes</p>
                <p className="text-xs text-gray-400">RAG, CRM, Logs, Admin</p>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-multi-tenant">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Multi-tenant & isolation par client
            </h2>
            <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] mb-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Chaque client dispose de :
              </p>
              <ul className="space-y-3">
                {[
                  "ses propres identifiants WhatsApp API (360dialog / Meta)",
                  "sa propre base de connaissances (documents, FAQ, catalogues)",
                  "sa propre configuration d'intentions & workflows",
                  "sa propre configuration d'intégrations (CRM, outils internes)"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Aucun mélange de données entre clients :</strong> les documents et les logs sont isolés par tenant.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20" data-testid="section-scalability">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Scalabilité : Queue + Workers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              SYLION utilise une architecture Queue + Workers pour traiter les messages. Plutôt que de répondre directement dans le webhook, les messages sont placés dans une file, puis traités par des Workers capables de monter en charge.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Zap, text: "Absorption des pics de charge (campagnes, promos, heures de pointe)" },
                { icon: Server, text: "Possibilité de scaler horizontalement le nombre de Workers" },
                { icon: Eye, text: "Temps de réponse stable, même en forte activité" },
                { icon: Shield, text: "Gestion des erreurs et des retries (messages rejoués en cas d'échec temporaire)" }
              ].map((item) => (
                <div key={item.text} className="p-4 rounded-xl border border-gray-800 bg-[#111111] flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-[#7C3AED] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" data-testid="section-hosting">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Hébergement & données
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#4F46E5]" />
                  Localisation des données
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Hébergement au choix :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                    <strong className="text-white">Maroc</strong> – pour proximité et contraintes locales
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-[#4F46E5]" />
                    <strong className="text-white">Europe</strong> – pour clients sensibles à la conformité UE
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#4F46E5]" />
                  Types de données stockées
                </h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    Contenu des messages WhatsApp (selon besoin métier)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    Métadonnées de conversation (ID, timestamps, état)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    Documents de la base de connaissances (FAQ, PDF, catalogues)
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    Logs techniques (erreurs, temps de réponse, intégration CRM)
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              Les accès à ces données sont strictement contrôlés, journalisés, et limités selon les rôles (Support SYLION, Admin client, etc.).
            </p>
          </section>

          <section className="mb-20" data-testid="section-encryption">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Chiffrement & sécurité des accès
            </h2>
            <div className="space-y-4 mb-6">
              {[
                "Communication chiffrée (HTTPS/TLS) entre SYLION ↔ WhatsApp API provider",
                "Communication chiffrée entre SYLION ↔ CRM / systèmes internes",
                "Communication chiffrée entre SYLION ↔ interface d'admin",
                "Secrets & clés API stockés de manière sécurisée (vault / store chiffré)",
                "Rotation possible des clés (WhatsApp API, CRM, etc.)",
                "Principes de moindre privilège : les services n'ont accès qu'aux ressources nécessaires"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30">
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Périmètre minimal :</strong> SYLION ne demande jamais des accès "admin global" à vos systèmes internes si ce n'est pas nécessaire. Les intégrations sont conçues selon le principe du périmètre minimal.
              </p>
            </div>
          </section>

          <section className="mb-20" data-testid="section-governance">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Gouvernance & responsabilités (qui fait quoi ?)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-[#111111] border border-gray-800 text-gray-400 font-medium text-sm">
                      Domaine
                    </th>
                    <th className="text-left p-4 bg-[#4F46E5]/10 border border-gray-800 text-[#4F46E5] font-medium text-sm">
                      SYLION
                    </th>
                    <th className="text-left p-4 bg-[#F59E0B]/10 border border-gray-800 text-[#F59E0B] font-medium text-sm">
                      Client
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {governanceData.map((row) => (
                    <tr key={row.topic}>
                      <td className="p-4 bg-[#0D0D0D] border border-gray-800 text-white text-sm font-medium">
                        {row.topic}
                      </td>
                      <td className="p-4 bg-[#0D0D0D] border border-gray-800 text-gray-300 text-sm">
                        {row.sylion}
                      </td>
                      <td className="p-4 bg-[#0D0D0D] border border-gray-800 text-gray-300 text-sm">
                        {row.client}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-20" data-testid="section-monitoring">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Logs, monitoring & alertes
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              La plateforme SYLION est conçue pour être observable : chaque brique émet des métriques et des logs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Logs d'erreurs et de performance",
                "Suivi du volume de messages par tenant",
                "Monitoring des temps de réponse",
                "Alerte en cas de dépassement de seuil (erreurs, temps de traitement, intégrations CRM en panne…)",
                "Possibilité de fournir des exports ou accès en lecture à vos équipes IT (selon contrat)"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-gray-800 bg-[#111111]">
                  <Eye className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-20" data-testid="section-compliance">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Conformité & bonnes pratiques
            </h2>
            <div className="space-y-3 mb-6">
              {[
                "Séparation des environnements (dev / test / prod)",
                "Possibilité d'utiliser un environnement de pré-production pour vos tests (cas Enterprise)",
                "Sauvegardes régulières et plan de reprise en cas d'incident (selon SLA)",
                "Minimisation des données collectées",
                "Possibilité de suppression de conversations à la demande",
                "Accès limité aux personnes autorisées"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              SYLION peut adapter certaines politiques de conservation de données selon les exigences contractuelles des grands comptes.
            </p>
          </section>

          <section className="mb-20" data-testid="section-whatsapp-api">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              WhatsApp Business API & fournisseur (360dialog / Meta)
            </h2>
            <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
              <p className="text-gray-300 leading-relaxed mb-4">
                SYLION ne remplace pas la WhatsApp Business API, il s'y connecte. La brique "transport" des messages (numéros, canaux, conformité WhatsApp) est assurée par un fournisseur agréé (ex : 360dialog / Meta).
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Le client conserve la propriété de ses numéros WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Les coûts de conversations WhatsApp sont facturés directement par le fournisseur au client</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">
                    <strong className="text-white">SYLION facture uniquement :</strong> l'intelligence (IA), l'automatisation, le support et les intégrations
                  </span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-20" data-testid="section-faq">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              FAQ Architecture & Sécurité
            </h2>
            <div className="space-y-4">
              {faqData.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <section className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30" data-testid="section-cta-final">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
              Des exigences techniques fortes ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              Vous avez des exigences fortes en matière de sécurité, de conformité ou d'architecture ? Discutons directement avec vos équipes IT / DSI pour cadrer le périmètre technique et les garanties nécessaires.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-final">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6" data-testid="button-expert-final">
                  Parler à un expert technique
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/enterprise" data-testid="link-enterprise-final">
                <Button variant="outline" className="border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B]/10 rounded-xl font-semibold gap-2 px-6">
                  Voir l'offre Enterprise
                </Button>
              </Link>
            </div>
          </section>

          <section className="flex flex-wrap gap-4" data-testid="section-internal-links">
            <Link href="/enterprise" data-testid="link-enterprise-bottom">
              <Button variant="ghost" className="text-[#F59E0B] hover:text-[#FBBF24] hover:bg-transparent p-0 gap-2">
                Offre Enterprise
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/integration-crm-workflows" data-testid="link-integration-bottom">
              <Button variant="ghost" className="text-[#4F46E5] hover:text-[#7C3AED] hover:bg-transparent p-0 gap-2">
                Intégration CRM & Workflows
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/whatsapp-business-api-maroc" data-testid="link-api-bottom">
              <Button variant="ghost" className="text-[#25D366] hover:text-[#20BD5A] hover:bg-transparent p-0 gap-2">
                WhatsApp Business API Maroc
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
