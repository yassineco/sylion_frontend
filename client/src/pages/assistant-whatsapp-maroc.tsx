import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, MessageCircle, ArrowRight, Building2, GraduationCap, Stethoscope, UtensilsCrossed, Car, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const faqData = [
  {
    question: "Faut-il absolument la WhatsApp Business API pour utiliser l'assistant IA ?",
    answer: "Oui. Pour une intégration professionnelle, scalable et sécurisée, l'API est indispensable."
  },
  {
    question: "Est-ce compliqué techniquement à mettre en place ?",
    answer: "Non. L'équipe SYLION s'occupe de la configuration technique. Côté client, il suffit de valider le numéro et de fournir les documents nécessaires (FAQ, procédures, offres…)."
  },
  {
    question: "L'assistant peut-il répondre en Darija et en mélange Français/Darija ?",
    answer: "Oui, c'est même un de ses points forts. L'IA comprend le code-switching naturel utilisé au Maroc."
  },
  {
    question: "Et si l'assistant ne sait pas répondre ?",
    answer: "Il peut proposer de transférer la demande à un agent humain ou d'enregistrer la demande pour traitement ultérieur, selon les règles définies."
  },
  {
    question: "Que se passe-t-il si notre activité évolue ?",
    answer: "Il suffit de mettre à jour vos documents ou vos règles métiers. L'assistant s'adapte sans gros développement."
  }
];

const useCases = [
  {
    icon: Building2,
    title: "Immobilier",
    description: "Réponses aux demandes de visite, envoi de fiches biens, collecte de coordonnées, qualification des leads."
  },
  {
    icon: GraduationCap,
    title: "Écoles & Formations",
    description: "Informations sur les frais, horaires, inscriptions, filières, concours, avec envoi de documents PDF."
  },
  {
    icon: Stethoscope,
    title: "Cliniques & Centres médicaux",
    description: "Questions fréquentes, spécialités, horaires, prises de contact et pré-qualification des demandes."
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Commerces",
    description: "Envoi du menu, adresse, horaires, prise de réservation ou commandes simples."
  },
  {
    icon: Car,
    title: "Agences auto & Leasing",
    description: "Informations sur les modèles, tarifs, financement, collecte des leads chauds pour les commerciaux."
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

export default function AssistantWhatsAppMarocPage() {
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

          <header className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-medium mb-6">
              Guide complet 2025
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Assistant WhatsApp IA pour PME au Maroc
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Découvrez comment automatiser vos conversations WhatsApp avec une intelligence artificielle adaptée au marché marocain.
            </p>
          </header>

          <section className="mb-16" data-testid="section-why-assistant">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Pourquoi un assistant WhatsApp est devenu indispensable au Maroc ?
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed mb-4">
                Au Maroc, WhatsApp est devenu le premier canal de communication entre les clients et les entreprises : demandes d'informations, prises de rendez-vous, réservations, réclamations, suivi de commande…
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Le problème :</strong> les équipes support ne peuvent pas répondre 24h/24, ni gérer des dizaines de conversations en parallèle, surtout le soir et le week-end.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">L'Assistant WhatsApp IA résout ce problème :</strong> il répond automatiquement, 24h/24, dans les langues de vos clients (Français, Arabe, Darija, Anglais), et s'appuie sur vos propres informations (FAQ, catalogues, procédures).
              </p>
            </div>
            <a 
              href="https://wa.me/212600000000" 
              target="_blank" 
              rel="noopener noreferrer"
              data-testid="link-whatsapp-demo-1"
            >
              <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold gap-2" onClick={() => trackEvent({ action: 'cta_click', category: 'assistant_whatsapp_seo', label: 'assistant_maroc_tester_assistant' })}>
                <MessageCircle className="w-5 h-5" />
                Tester l'assistant sur WhatsApp
              </Button>
            </a>
          </section>

          <section className="mb-16" data-testid="section-what-is">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Qu'est-ce qu'un Assistant WhatsApp IA ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Un Assistant WhatsApp IA est un agent virtuel connecté à la WhatsApp Business API qui :
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "comprend les messages de vos clients",
                "répond automatiquement à leurs questions",
                "consulte vos documents internes (FAQ, catalogues, procédures)",
                "qualifie les demandes (prospects, SAV, informations)",
                "transfère au bon interlocuteur humain si nécessaire"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-xl bg-[#4F46E5]/10 border border-[#4F46E5]/30">
              <p className="text-gray-300">
                <strong className="text-white">Important :</strong> Contrairement aux bots "scriptés" avec des menus fixes, l'assistant IA comprend le langage naturel, même lorsque le client mélange Français et Darija.
              </p>
            </div>
          </section>

          <section className="mb-16" data-testid="section-comparison">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Assistant WhatsApp IA vs bot scripté vs équipe humaine
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-4 text-gray-400 font-medium">Critère</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Équipe humaine</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Bot scripté</th>
                    <th className="text-left p-4 text-[#4F46E5] font-medium">Assistant IA (SYLION)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800/50">
                    <td className="p-4 text-white font-medium">Disponibilité</td>
                    <td className="p-4 text-gray-400">Heures de bureau uniquement</td>
                    <td className="p-4 text-gray-400">24/7 mais limité aux menus</td>
                    <td className="p-4 text-[#25D366]">24/7 avec compréhension naturelle</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="p-4 text-white font-medium">Qualité de réponse</td>
                    <td className="p-4 text-gray-400">Variable selon le conseiller</td>
                    <td className="p-4 text-gray-400">Bonne si le client suit les menus</td>
                    <td className="p-4 text-[#25D366]">Stable, basée sur vos documents</td>
                  </tr>
                  <tr className="border-b border-gray-800/50">
                    <td className="p-4 text-white font-medium">Capacité</td>
                    <td className="p-4 text-gray-400">Quelques conversations</td>
                    <td className="p-4 text-gray-400">Beaucoup, scénarios rigides</td>
                    <td className="p-4 text-[#25D366]">Conversations illimitées</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-white font-medium">Évolution</td>
                    <td className="p-4 text-gray-400">Formation continue coûteuse</td>
                    <td className="p-4 text-gray-400">Modifier les arbres de décision</td>
                    <td className="p-4 text-[#25D366]">Mise à jour simple des docs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-300 leading-relaxed">
              <strong className="text-white">Conclusion :</strong> Pour une PME marocaine qui veut automatiser WhatsApp sérieusement, l'assistant IA est aujourd'hui le meilleur équilibre entre qualité de service, coût et scalabilité.
            </p>
          </section>

          <section className="mb-16" data-testid="section-use-cases">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Cas d'usage concrets au Maroc
            </h2>
            <p className="text-gray-300 mb-8">
              Voici quelques exemples de ce que peut faire un Assistant WhatsApp IA pour différents secteurs :
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="p-6 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#4F46E5]/50 transition-colors"
                  data-testid={`card-usecase-${useCase.title.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center mb-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16" data-testid="section-how-it-works">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Comment fonctionne l'Assistant WhatsApp IA SYLION ?
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Connexion à votre numéro WhatsApp</h3>
                  <p className="text-gray-400 leading-relaxed">
                    SYLION se connecte à votre numéro via la WhatsApp Business API (ex : 360dialog). Vous gardez la propriété du numéro.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Import de vos documents et règles métiers</h3>
                  <p className="text-gray-400 leading-relaxed">
                    FAQ, procédures internes, fiches produits, catalogues, conditions commerciales… L'assistant s'appuie sur vos informations pour répondre. C'est la couche RAG.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">L'IA répond 24/7 dans la langue de vos clients</h3>
                  <p className="text-gray-400 leading-relaxed">
                    L'Assistant comprend le Français, l'Arabe, la Darija et l'Anglais, y compris le code-switching. Les conversations sont tracées et vous gardez un contrôle complet sur les réponses.
                  </p>
                </div>
              </div>
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

          <section className="mb-16" data-testid="section-results">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Résultats typiques observés
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  92%
                </p>
                <p className="text-gray-400 text-sm">de réponses automatisées sur WhatsApp</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  48h
                </p>
                <p className="text-gray-400 text-sm">libérées par mois par conseiller en moyenne</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111] text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-2">
                  99%
                </p>
                <p className="text-gray-400 text-sm">de précision sur les réponses issues de vos documents (RAG)</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Les chiffres varient selon les secteurs, mais la tendance est claire : l'Assistant WhatsApp IA absorbe la majorité des demandes récurrentes et laisse vos équipes se concentrer sur les cas à forte valeur ajoutée.
            </p>
          </section>

          <section className="mb-16" data-testid="section-pricing">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Combien coûte un Assistant WhatsApp IA ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Le coût dépend du niveau d'automatisation, du nombre de numéros et des intégrations souhaitées (CRM, outils internes…). SYLION propose une tarification claire, adaptée au marché marocain :
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-lg font-bold text-white mb-2">PME Starter</h3>
                <p className="text-3xl font-bold text-[#7C3AED] mb-2">590 DH<span className="text-sm text-gray-400">/mois</span></p>
                <p className="text-sm text-gray-400">Pour démarrer avec un assistant simple et efficace.</p>
              </div>
              <div className="p-6 rounded-2xl border border-[#4F46E5] bg-gradient-to-b from-[#4F46E5]/10 via-[#4F46E5]/5 to-transparent">
                <h3 className="text-lg font-bold text-white mb-2">Business</h3>
                <p className="text-3xl font-bold text-[#4F46E5] mb-2">990 DH<span className="text-sm text-gray-400">/mois</span></p>
                <p className="text-sm text-gray-400">Pour les PME qui veulent automatiser sérieusement leur WhatsApp.</p>
              </div>
              <div className="p-6 rounded-2xl border border-gray-800 bg-[#111111]">
                <h3 className="text-lg font-bold text-white mb-2">Enterprise</h3>
                <p className="text-2xl font-bold text-[#F59E0B] mb-2">Sur devis</p>
                <p className="text-sm text-gray-400">Pour écoles, cliniques, agences auto, groupes et grandes PME.</p>
              </div>
            </div>
            <Link href="/pricing" data-testid="link-pricing">
              <Button variant="outline" className="rounded-xl border-gray-700 text-white hover:bg-white/10 gap-2" data-testid="button-voir-tarifs">
                Voir le détail des tarifs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </section>

          <section className="mb-16" data-testid="section-get-started">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              Comment démarrer en 10 minutes avec SYLION ?
            </h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start p-4 rounded-xl bg-[#111111] border border-gray-800">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Vous réservez un créneau de démo</h3>
                  <p className="text-gray-400 text-sm">On analyse votre activité, vos volumes et vos objectifs.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl bg-[#111111] border border-gray-800">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">On configure votre assistant</h3>
                  <p className="text-gray-400 text-sm">Connexion WhatsApp API, import de vos documents, réglage des réponses clés.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-xl bg-[#111111] border border-gray-800">
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Vous testez en conditions réelles</h3>
                  <p className="text-gray-400 text-sm">Vous suivez les conversations, ajustez les réponses, puis ouvrez aux vrais clients.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-whatsapp-demo-2"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Tester l'assistant sur WhatsApp
                </Button>
              </a>
              <Link href="/contact" data-testid="link-contact">
                <Button variant="outline" className="rounded-xl border-gray-700 text-white hover:bg-white/10 gap-2" data-testid="button-demander-demo">
                  Demander une démo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-16" data-testid="section-faq">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
              FAQ : Assistant WhatsApp pour PME marocaines
            </h2>
            <div className="space-y-4">
              {faqData.map((item) => (
                <FAQItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          <section className="mb-8 p-8 rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30" data-testid="section-cta-final">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Passez à l'Assistant WhatsApp IA
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Vous voulez arrêter de perdre des messages WhatsApp et offrir une réponse professionnelle 24/7 à vos clients ? L'Assistant WhatsApp IA SYLION est conçu pour les PME marocaines, avec une mise en place rapide, un accompagnement local et une technologie de pointe.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-whatsapp-demo-3"
              >
                <Button className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Tester l'assistant sur WhatsApp
                </Button>
              </a>
              <Link href="/contact" data-testid="link-contact-final">
                <Button className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2" data-testid="button-demander-demo-final">
                  Demander une démo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
