import { motion } from "framer-motion";
import { MessageSquare, Database, Plug, Sparkles } from "lucide-react";
import GridPattern from "./backgrounds/GridPattern";

export default function Features() {
  const features = [
    {
      icon: MessageSquare,
      title: "Assistant IA pour vos sites et apps",
      description: "Intégrez un chatbot intelligent qui comprend votre métier et répond à vos clients 24/7 avec précision.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Database,
      title: "RAG-as-a-Service hébergé localement",
      description: "Recherche augmentée par génération pour une IA qui s'appuie sur vos données en toute sécurité.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Plug,
      title: "Intégrations CRM / CMI / WhatsApp",
      description: "Connectez vos outils existants et automatisez vos workflows sans effort.",
      gradient: "from-pink-500 to-red-500",
    },
  ];

  return (
    <section className="relative py-32 bg-[#0B0B0B] text-white overflow-hidden">
      <GridPattern />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#4F46E5]" />
            <span className="text-sm font-medium">Nos solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-features-title">
            Une <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">IA sur mesure</span> pour votre entreprise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Des solutions intelligentes qui s'adaptent à vos besoins spécifiques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#4F46E5]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4F46E5]/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/0 to-[#7C3AED]/0 group-hover:from-[#4F46E5]/5 group-hover:to-[#7C3AED]/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
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
