import { motion } from "framer-motion";
import { MessageCircle, Database, Globe, FileText, Shield, Brain } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "WhatsApp IA 24/7",
      bullets: ["Réponses automatiques instantanées", "Contexte de conversation préservé", "Escalade vers humain si besoin"],
      gradient: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: Database,
      title: "Base RAG intelligente",
      bullets: ["Répond depuis vos docs (FAQ, PDF)", "Pas d'hallucination, données maîtrisées", "Mise à jour en temps réel"],
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      icon: Globe,
      title: "Multilingue natif",
      bullets: ["Français, Arabe, Darija, Anglais", "Code-switching automatique", "Détection de langue intelligente"],
      gradient: "from-[#7C3AED] to-[#06b6d4]",
    },
  ];

  return (
    <section className="relative py-20 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-features-title">
            Ce que <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">SYLIONAI</span> fait pour vous
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Un assistant complet, intelligent et adapté aux TPE et sociétés
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                
                <ul className="space-y-2 text-gray-400 text-sm">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#25D366] mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
