import { motion } from "framer-motion";
import { Building2, GraduationCap, Stethoscope, UtensilsCrossed, Car } from "lucide-react";

const useCases = [
  { icon: Building2, title: "Immobilier", bullet: "Visites, fiches biens, RDV" },
  { icon: GraduationCap, title: "Formation", bullet: "Inscriptions, tarifs, docs" },
  { icon: Stethoscope, title: "Santé", bullet: "FAQ, orientation, RDV" },
  { icon: UtensilsCrossed, title: "Restauration", bullet: "Menu, réservations, horaires" },
  { icon: Car, title: "Auto & Leasing", bullet: "Modèles, prix, leads" },
];

export default function PMEUseCases() {
  return (
    <section className="relative py-16 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3" data-testid="text-pme-title">
            Pourquoi les <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">entreprises</span> choisissent SYLIONAI
          </h2>
          <p className="text-gray-400">Solutions adaptées à chaque secteur</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-[#4F46E5]/50 transition-colors"
              data-testid={`usecase-${useCase.title.toLowerCase()}`}
            >
              <useCase.icon className="w-5 h-5 text-[#4F46E5]" />
              <span className="font-medium">{useCase.title}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-sm text-gray-400">{useCase.bullet}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
