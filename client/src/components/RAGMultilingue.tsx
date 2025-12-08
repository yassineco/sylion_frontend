import { motion } from "framer-motion";
import { Globe, FileText, Brain, Languages, Shield, Sparkles } from "lucide-react";

const languages = [
  { name: "Darija", code: "MA" },
  { name: "Arabe classique", code: "AR" },
  { name: "Français", code: "FR" },
  { name: "Anglais", code: "EN" },
];

const features = [
  {
    icon: FileText,
    title: "Basé sur vos documents",
    description: "L'IA va chercher les réponses dans vos FAQ, procédures, fiches produits, catalogues et PDF avant de répondre.",
  },
  {
    icon: Shield,
    title: "Vous gardez le contrôle",
    description: "Ce que l'IA sait vient de vos propres informations. Pas d'invention, pas d'hallucination.",
  },
  {
    icon: Brain,
    title: "Technologie RAG",
    description: "Recherche Augmentée par Génération : l'IA combine recherche intelligente et génération de texte naturel.",
  },
];

export default function RAGMultilingue() {
  return (
    <section className="relative py-32 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7C3AED]/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#4F46E5]" />
            <span className="text-sm font-medium">Différenciateur</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Une IA qui parle <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">vos langues</span> et connaît <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">vos documents</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ce n'est pas un chatbot générique. C'est un assistant branché sur la connaissance de votre entreprise, adapté au Maroc.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-[#4F46E5]" />
                <h3 className="text-2xl font-bold">Multilingue natif</h3>
              </div>
              <p className="text-gray-400 mb-6 text-lg">
                L'assistant comprend et mélange naturellement les langues parlées au Maroc :
              </p>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#4F46E5]/50 transition-colors"
                    data-testid={`lang-${lang.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="text-xs font-bold text-[#4F46E5] bg-[#4F46E5]/20 px-2 py-0.5 rounded">{lang.code}</span>
                    <span className="font-medium">{lang.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Languages className="w-8 h-8 text-[#25D366]" />
                <h3 className="text-2xl font-bold">Code-switching intelligent</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Vos clients écrivent en Darija mélangé au Français ? L'assistant comprend et répond dans la même langue, naturellement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#4F46E5]/50 transition-all duration-300"
                data-testid={`rag-feature-${index}`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20">
                    <feature.icon className="w-6 h-6 text-[#4F46E5]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
