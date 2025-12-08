import { motion } from "framer-motion";
import { Building2, GraduationCap, Stethoscope, UtensilsCrossed, Car, MessageCircle } from "lucide-react";

const useCases = [
  {
    icon: Building2,
    title: "Immobilier",
    description: "Répond aux demandes de visite, envoie les fiches des biens, collecte les coordonnées et confirme les rendez-vous.",
    gradient: "from-[#4F46E5] to-[#7C3AED]",
  },
  {
    icon: GraduationCap,
    title: "Écoles & Formations",
    description: "Donne les informations sur les frais, horaires et inscriptions. Envoie les documents et oriente vers le bon contact.",
    gradient: "from-[#7C3AED] to-[#4F46E5]",
  },
  {
    icon: Stethoscope,
    title: "Cliniques & Centres médicaux",
    description: "Répond aux questions fréquentes, explique les spécialités, oriente les patients et facilite la prise de rendez-vous.",
    gradient: "from-[#4F46E5] to-[#06b6d4]",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants & Commerces",
    description: "Envoie le menu, l'adresse et les horaires. Prend les demandes de réservation ou de commande simple.",
    gradient: "from-[#06b6d4] to-[#4F46E5]",
  },
  {
    icon: Car,
    title: "Agences auto & Leasing",
    description: "Donne les informations sur les modèles disponibles, les prix et les offres de financement. Collecte les leads chauds.",
    gradient: "from-[#7C3AED] to-[#06b6d4]",
  },
];

export default function PMEUseCases() {
  return (
    <section className="relative py-32 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F46E5]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/30 backdrop-blur-sm mb-6">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-medium">Cas d'usage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-pme-title">
            Pourquoi les <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">PME marocaines</span> choisissent notre Assistant
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions concrètes pour chaque secteur d'activité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              data-testid={`usecase-${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#128C7E]/0 group-hover:from-[#25D366]/5 group-hover:to-[#128C7E]/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${useCase.gradient} mb-6`}>
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
