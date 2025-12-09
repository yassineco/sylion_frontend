import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, MessageCircle, Zap, Globe, FileText, Shield, Server, Clock, ChevronDown, ChevronUp, Info } from "lucide-react";
import { useState, useEffect } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
        data-testid={`faq-toggle-${question.slice(0, 20).toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span className="font-semibold text-white pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#4F46E5] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function WhatsappBusinessApiMarocPage() {
  useEffect(() => {
    document.title = "WhatsApp Business API Maroc – Prix, Activation & Automatisation IA (Guide 2025)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Découvrez comment activer WhatsApp Business API au Maroc, les prix officiels Meta, les meilleurs providers et comment automatiser vos réponses clients avec une IA 24/7.");
    }
  }, []);

  const features = [
    {
      icon: Clock,
      title: "Activation en 10 minutes",
      description: "On connecte l'assistant à votre numéro et vos documents sans complexité technique.",
    },
    {
      icon: Globe,
      title: "Multilingue natif",
      description: "L'assistant comprend Français, Arabe, Darija et Anglais — les langues réellement parlées par vos clients.",
    },
    {
      icon: FileText,
      title: "Basé sur vos documents (RAG)",
      description: "Les réponses viennent de vos FAQ, procédures, PDF, catalogues.",
    },
    {
      icon: Shield,
      title: "Pas d'hallucination",
      description: "L'IA ne \"devine\" pas : elle s'appuie sur ce que vous lui fournissez.",
    },
    {
      icon: Server,
      title: "Hébergement Maroc & Europe",
      description: "Respect des contraintes de sécurité et de localisation des données.",
    },
    {
      icon: MessageCircle,
      title: "Conversations illimitées",
      description: "Votre WhatsApp continue de tourner, l'IA absorbe la charge.",
    },
  ];

  const faqs = [
    {
      question: "Est-ce obligatoire d'avoir la WhatsApp Business API pour utiliser une IA ?",
      answer: "Oui, pour une intégration propre, scalable et sécurisée, l'API est indispensable.",
    },
    {
      question: "Combien de temps prend l'activation de l'API ?",
      answer: "Entre 5 et 15 minutes dans la majorité des cas, une fois les documents validés.",
    },
    {
      question: "Puis-je garder mon numéro actuel ?",
      answer: "Dans de nombreux cas oui, si le numéro peut recevoir un SMS ou un appel pour la validation.",
    },
    {
      question: "Est-ce légal au Maroc ?",
      answer: "Oui, c'est la solution officielle fournie par Meta pour les entreprises.",
    },
    {
      question: "L'IA peut-elle répondre en Darija et en mélange FR/Darija ?",
      answer: "Oui, c'est même un des points forts de l'assistant SYLION.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour à l'accueil
          </Button>
        </Link>

        <article>
          <header className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-medium mb-6">
              Guide WhatsApp Business API
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                WhatsApp Business API Maroc
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl">
                Le Guide Complet 2025
              </span>
              <br />
              <span className="text-gray-400 text-xl md:text-2xl font-normal">
                Prix, Activation, Automatisation IA
              </span>
            </h1>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Pourquoi toutes les entreprises marocaines passent à WhatsApp API ?
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Au Maroc, plus de 90% des échanges clients passent déjà par WhatsApp. Mais la majorité des entreprises utilisent encore un numéro classique, impossible à connecter à un assistant IA, un CRM, ou un système de gestion.
              </p>
              <p className="text-gray-300 mb-6">
                La <strong className="text-white">WhatsApp Business API (WABA)</strong> est la version professionnelle de WhatsApp :
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  Multi-utilisateurs
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  Automatisation avancée
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  Messages illimités
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  Intégration IA / CRM
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0" />
                  Sécurité entreprise
                </li>
              </ul>
              <p className="text-gray-400 mb-8">
                C'est la solution utilisée par les écoles, agences immobilières, cliniques, centres auto, e-commerce, banques...
              </p>
              <Link href="/contact" data-testid="link-expert">
                <Button className="rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90" data-testid="button-expert">
                  Parler à un expert WhatsApp
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Qu'est-ce que la WhatsApp Business API ?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              La WhatsApp Business API n'est pas une application — et ce n'est pas l'application WhatsApp Business classique. C'est une <strong className="text-white">infrastructure professionnelle</strong> fournie par Meta qui permet à une entreprise de :
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                Répondre automatiquement aux messages clients
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                Gérer des milliers de conversations en parallèle
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                Connecter WhatsApp à une IA (comme l'assistant SYLION)
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                Donner l'accès à plusieurs agents en même temps
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                Envoyer des messages transactionnels (notifications, confirmations)
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Check className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-1" />
                Gérer plusieurs numéros de manière centralisée
              </li>
            </ul>
            <p className="text-gray-400 italic">
              En résumé, c'est la seule solution sérieuse pour les entreprises qui veulent professionnaliser leur WhatsApp.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              WhatsApp Business API vs WhatsApp Business (application)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Fonction</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">WhatsApp Business (app)</th>
                    <th className="text-left py-4 px-4 text-[#25D366] font-medium">WhatsApp Business API</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-white">Appareil</td>
                    <td className="py-4 px-4 text-gray-400">Un seul téléphone</td>
                    <td className="py-4 px-4 text-gray-300">Serveur + multi-agents</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-white">Messages</td>
                    <td className="py-4 px-4 text-gray-400">Limités par l'humain</td>
                    <td className="py-4 px-4 text-gray-300">Scalable, gros volumes</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-white">Automatisation</td>
                    <td className="py-4 px-4 text-gray-400">Réponses rapides basiques</td>
                    <td className="py-4 px-4 text-gray-300">IA + workflows avancés</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-white">RAG / documents</td>
                    <td className="py-4 px-4 text-gray-400">Impossible</td>
                    <td className="py-4 px-4 text-gray-300">Possible avec Sylion</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-white">Multi-agent</td>
                    <td className="py-4 px-4 text-gray-400">Non</td>
                    <td className="py-4 px-4 text-gray-300">Oui, plusieurs conseillers</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="py-4 px-4 text-white">CRM / intégration</td>
                    <td className="py-4 px-4 text-gray-400">Non</td>
                    <td className="py-4 px-4 text-gray-300">Oui, via API</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white">Sécurité / SLA</td>
                    <td className="py-4 px-4 text-gray-400">Niveau utilisateur</td>
                    <td className="py-4 px-4 text-gray-300">Niveau entreprise</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 mt-6 italic">
              Si une entreprise veut un assistant IA sur WhatsApp, la WhatsApp Business API est indispensable.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Comment activer WhatsApp Business API au Maroc ?
            </h2>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#4F46E5]/20 text-[#4F46E5] flex items-center justify-center font-bold">1</span>
                  <h3 className="text-xl font-semibold text-white">Choisir un provider officiel</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  L'activation de l'API se fait via un provider officiel (Business Solution Provider). Les plus utilisés au Maroc :
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-400"><strong className="text-white">360dialog</strong> : prix bas, onboarding simple, idéal PME</li>
                  <li className="text-gray-400"><strong className="text-white">Meta Cloud API direct</strong> : très performant mais process plus lourd</li>
                  <li className="text-gray-400"><strong className="text-white">Infobip</strong> : très solide pour le segment enterprise</li>
                  <li className="text-gray-400"><strong className="text-white">Twilio</strong> : multi-canaux, mais plus cher</li>
                </ul>
                <p className="text-gray-400 text-sm">
                  Pour 90–95% des PME marocaines, 360dialog est généralement le meilleur compromis entre simplicité, coût et fiabilité.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#4F46E5]/20 text-[#4F46E5] flex items-center justify-center font-bold">2</span>
                  <h3 className="text-xl font-semibold text-white">Valider le numéro WhatsApp</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Le provider envoie un SMS ou un appel de validation. L'entreprise peut utiliser :
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-400">Un nouveau numéro dédié à l'assistant</li>
                  <li className="text-gray-400">Ou parfois migrer un numéro existant, selon les contraintes</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#4F46E5]/20 text-[#4F46E5] flex items-center justify-center font-bold">3</span>
                  <h3 className="text-xl font-semibold text-white">Connecter l'API à SYLION</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Une fois l'API activée, il faut la connecter à une plateforme : c'est là où intervient SYLION. SYLION gère :
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-400">La partie IA et le routage des messages</li>
                  <li className="text-gray-400">La base de connaissances (RAG)</li>
                  <li className="text-gray-400">Le suivi des usages et l'interface d'administration</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Prix de WhatsApp Business API au Maroc (2025)
            </h2>
            <p className="text-gray-300 mb-8">
              Les tarifs de base sont définis par Meta et facturés par le provider (360dialog, Infobip, etc.). On distingue deux grandes catégories de conversations.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-xl font-semibold text-white mb-4">1. Conversations de session (réponses dans les 24h)</h3>
                <p className="text-gray-300 mb-4">
                  Quand un client écrit à l'entreprise, une fenêtre de 24h s'ouvre : tous les messages échangés dans ce délai sont considérés comme une seule "conversation de session".
                </p>
                <p className="text-[#25D366] font-semibold">
                  Au Maroc : environ 0,30 – 0,45 DH par conversation
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-xl font-semibold text-white mb-4">2. Conversations templates (notifications push)</h3>
                <p className="text-gray-300 mb-4">
                  Lorsqu'une entreprise initie la conversation (ex : rappel de rendez-vous, code d'accès, relance), elle utilise des "templates" validés par Meta. Très adaptées pour :
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="text-gray-400">Confirmations de rendez-vous</li>
                  <li className="text-gray-400">Rappels de factures</li>
                  <li className="text-gray-400">Notifications de livraison</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30">
              <p className="text-sm text-gray-300">
                <Info className="w-4 h-4 inline mr-2 text-[#4F46E5]" />
                Ces coûts sont indépendants de la couche IA. L'IA et l'infrastructure Sylion sont facturées séparément sous forme d'abonnement mensuel.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Automatiser WhatsApp avec une IA : le vrai changement
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              La vraie révolution ne vient pas seulement de l'API, mais de ce qu'on branche dessus. Depuis 2024–2025, les entreprises marocaines passent à des assistants IA capables de :
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                Répondre automatiquement 24/7, même à 3h du matin
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                Comprendre le Français, l'Arabe, la Darija et l'Anglais
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                Mélanger les langues (code-switching) comme le font les clients
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                S'appuyer sur les documents internes (FAQ, procédures, catalogues PDF)
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                Qualifier les leads (immobilier, auto, formations...)
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Zap className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-1" />
                Transférer la conversation à un agent humain si besoin
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Pourquoi les entreprises au Maroc choisissent SYLION ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl border border-gray-800 bg-[#111111] hover:border-gray-700 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Combien coûte un assistant WhatsApp IA ?
            </h2>
            <p className="text-gray-300 mb-8">
              SYLION propose une tarification claire, adaptée au marché marocain.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-lg font-bold text-white mb-2">PME Starter</h3>
                <p className="text-3xl font-bold text-[#7C3AED] mb-2">590 DH<span className="text-sm text-gray-400">/mois</span></p>
                <p className="text-sm text-gray-400">1 numéro, assistant simple, RAG basique.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#4F46E5] bg-gradient-to-b from-[#4F46E5]/10 to-transparent">
                <span className="inline-block px-2 py-1 rounded-full bg-[#4F46E5] text-white text-xs font-medium mb-2">Recommandé</span>
                <h3 className="text-lg font-bold text-white mb-2">Business</h3>
                <p className="text-3xl font-bold text-[#4F46E5] mb-2">990 DH<span className="text-sm text-gray-400">/mois</span></p>
                <p className="text-sm text-gray-400">Jusqu'à 3 numéros, RAG avancée, support prioritaire.</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-lg font-bold text-white mb-2">Entreprise</h3>
                <p className="text-2xl font-bold text-[#F59E0B] mb-2">À partir de 2 500 DH<span className="text-sm text-gray-400">/mois</span></p>
                <p className="text-sm text-gray-400">Pour écoles, cliniques, agences auto, grands comptes.</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/pricing" data-testid="link-pricing">
                <Button variant="outline" className="rounded-xl border-gray-700 text-white hover:bg-white/10" data-testid="button-voir-tarifs">
                  Voir le détail des tarifs
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Questions fréquentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>

          <section className="p-8 rounded-2xl bg-gradient-to-br from-[#4F46E5]/20 via-[#7C3AED]/10 to-transparent border border-[#4F46E5]/30">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
              Passez à l'action
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Vous voulez activer la WhatsApp Business API et mettre en place un assistant IA 24/7 pour vos clients au Maroc ? Réservez un échange avec notre équipe ou testez l'assistant en direct.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90" data-testid="button-tester">
                Tester l'assistant sur WhatsApp
              </Button>
              <Link href="/contact" data-testid="link-demo-final">
                <Button variant="outline" className="rounded-xl border-white/20 text-white hover:bg-white/10 w-full" data-testid="button-demo-final">
                  Demander une démo
                </Button>
              </Link>
            </div>
          </section>
        </article>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
