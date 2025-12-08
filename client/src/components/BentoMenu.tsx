import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Workflow, Database, Layers, Rocket } from "lucide-react";

const menuItems = [
  {
    id: 1,
    title: "Analytics",
    subtitle: "Dashboard",
    description: "Suivez les conversations, les temps de réponse et la satisfaction client",
    icon: BarChart3,
    span: "col-span-1 row-span-2",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    id: 2,
    title: "CRM",
    subtitle: "Intégration",
    description: "Synchronisez avec Salesforce, HubSpot, Zoho...",
    icon: Layers,
    span: "col-span-1 row-span-1",
    gradient: "from-[#7C3AED] to-[#4F46E5]",
  },
  {
    id: 3,
    title: "Multi-canal",
    subtitle: "Connecteurs",
    description: "WhatsApp, Messenger, Instagram, site web...",
    icon: Zap,
    span: "col-span-1 row-span-2",
    gradient: "from-[#4F46E5] to-[#06b6d4]",
  },
  {
    id: 4,
    title: "Workflows",
    subtitle: "Automatisation",
    description: "Escalade vers un humain, notifications, actions automatiques",
    icon: Workflow,
    span: "col-span-1 row-span-2",
    gradient: "from-[#7C3AED] to-[#4F46E5]",
  },
  {
    id: 5,
    title: "API",
    subtitle: "Développeurs",
    description: "Intégrez l'IA dans vos propres applications",
    icon: Database,
    span: "col-span-1 row-span-1",
    gradient: "from-[#06b6d4] to-[#4F46E5]",
  },
  {
    id: 6,
    title: "Sécurité",
    subtitle: "Conformité",
    description: "Données hébergées au Maroc, conformité RGPD",
    icon: Shield,
    span: "col-span-1 row-span-1",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
];

export default function BentoMenu() {
  return (
    <section className="relative py-24 px-6 bg-[#0B0B0B] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F46E5]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30 backdrop-blur-sm mb-6">
            <Rocket className="w-4 h-4 text-[#4F46E5]" />
            <span className="text-sm font-medium text-gray-300">Pour aller plus loin</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Modules <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">avancés</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            SYLION n'est pas juste un bot WhatsApp. C'est une plateforme IA évolutive pour votre entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[180px]">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.span} group relative`}
              data-testid={`bento-card-${item.id}`}
            >
              <div className="relative h-full rounded-xl overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover-elevate active-elevate-2 transition-all duration-300">
                {/* Gradient border effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl`} />
                
                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${item.gradient} mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-2">{item.subtitle}</p>
                  </div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${item.gradient} blur-2xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
