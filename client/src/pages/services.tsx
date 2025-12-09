import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Zap, 
  Brain, 
  HeadphonesIcon, 
  Plug, 
  Shield, 
  Lock, 
  KeyRound, 
  Server,
  ArrowRight,
  MessageCircle,
  Check
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const services = [
  {
    icon: Zap,
    title: "Deploiement Express",
    description: "Configuration complete de votre Assistant WhatsApp IA. Connexion WhatsApp API, tenant isole, parametrage IA, tests. Operationnel en quelques minutes.",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
    highlights: ["WhatsApp API", "Tenant isole", "Tests inclus"]
  },
  {
    icon: Brain,
    title: "Indexation IA (RAG)",
    description: "Transformation de vos documents internes (FAQ, PDF, procedures) en base de connaissances IA hebergee localement. L'IA repond sur vos propres donnees.",
    gradient: "from-[#7C3AED] to-[#4F46E5]",
    highlights: ["FAQ & PDF", "Hebergement local", "Donnees privees"]
  },
  {
    icon: HeadphonesIcon,
    title: "Formation & Support FR/Darija",
    description: "Formation des equipes, support continu, optimisation des reponses, amelioration des workflows.",
    gradient: "from-[#4F46E5] to-[#06b6d4]",
    highlights: ["Formation equipes", "Support continu", "Optimisation IA"]
  },
  {
    icon: Plug,
    title: "Integration CRM / SI",
    description: "Connecteurs pour HubSpot, Salesforce, Odoo, Dynamics ou systemes internes via API/webhooks. Creation automatique de leads, tickets, taches.",
    gradient: "from-[#06b6d4] to-[#7C3AED]",
    highlights: ["CRM connectes", "API/Webhooks", "Leads automatiques"]
  }
];

const securityFeatures = [
  {
    icon: Lock,
    title: "Chiffrement bout en bout",
    description: "Toutes les donnees sont chiffrees en transit et au repos."
  },
  {
    icon: Shield,
    title: "Isolation par tenant",
    description: "Chaque organisation possede son espace securise, ses logs et sa base RAG."
  },
  {
    icon: KeyRound,
    title: "Rotation cles API",
    description: "Gestion automatique des cles API avec rotation reguliere."
  },
  {
    icon: Server,
    title: "Environnements dev/test/prod",
    description: "Separation stricte des environnements pour la securite et la qualite."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour
          </Button>
        </Link>

        <header className="mb-20 text-center" data-testid="section-hero">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/30 text-[#4F46E5] text-sm font-medium mb-6">
            Accompagnement complet
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Nos Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Un accompagnement complet pour deployer votre Assistant WhatsApp IA. De la configuration initiale a l'integration CRM, nous vous guidons a chaque etape.
          </p>
        </header>

        <section className="mb-20" data-testid="section-services">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-gray-800 bg-[#111111] hover:border-[#4F46E5]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#4F46E5]/10"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-').slice(0, 20)}`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((highlight) => (
                    <span 
                      key={highlight}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4F46E5]/10 border border-[#4F46E5]/20 text-xs font-medium text-[#4F46E5]"
                    >
                      <Check className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20" data-testid="section-security">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-medium mb-6">
              Protection des donnees
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                Securite & Conformite
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Votre assistant WhatsApp IA est heberge de maniere securisee avec des standards enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-[#4F46E5]/30 bg-gradient-to-b from-[#4F46E5]/10 via-[#4F46E5]/5 to-transparent"
                data-testid={`card-security-${feature.title.toLowerCase().replace(/\s+/g, '-').slice(0, 15)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4F46E5]/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30" data-testid="section-cta-final">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Pret a transformer votre relation client ?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Nos experts vous accompagnent de A a Z pour deployer votre Assistant WhatsApp IA. Demandez une consultation gratuite ou testez directement l'assistant.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" data-testid="link-contact-cta">
                <Button 
                  className="w-full sm:w-auto bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl font-semibold hover:opacity-90 gap-2 px-6"
                  data-testid="button-expert"
                  onClick={() => trackEvent({ action: 'cta_click', category: 'services', label: 'services_parler_expert' })}
                >
                  Parler a un expert
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://wa.me/212600000000" 
                target="_blank" 
                rel="noopener noreferrer"
                data-testid="link-whatsapp-cta"
              >
                <Button 
                  className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-xl font-semibold gap-2 px-6"
                  onClick={() => trackEvent({ action: 'cta_click', category: 'services', label: 'services_tester_assistant' })}
                >
                  <MessageCircle className="w-5 h-5" />
                  Tester l'assistant
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
