import { motion } from "framer-motion";
import { BarChart3, Zap, Shield, Workflow } from "lucide-react";

const menuItems = [
  { icon: BarChart3, title: "Analytics", desc: "Conversations, temps de réponse, satisfaction" },
  { icon: Zap, title: "Multi-canal", desc: "WhatsApp, Messenger, Instagram, web" },
  { icon: Workflow, title: "Workflows", desc: "Escalade humain, notifications, automatisations" },
  { icon: Shield, title: "Sécurité", desc: "Données protégées, conformité RGPD" },
];

export default function BentoMenu() {
  return (
    <section className="relative py-16 px-6 bg-[#0B0B0B] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Modules <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">avancés</span>
          </h2>
          <p className="text-gray-400">Plateforme IA évolutive pour votre entreprise</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
              data-testid={`bento-card-${index}`}
            >
              <div className="h-full p-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#4F46E5]/50 transition-all text-center">
                <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] mb-3">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
