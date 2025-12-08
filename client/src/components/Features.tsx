import { motion } from "framer-motion";
import { MessageCircle, Database, Globe, Sparkles } from "lucide-react";
import GridPattern from "./backgrounds/GridPattern";

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: "Assistant WhatsApp IA 24/7",
      description: "Répondez automatiquement à vos clients sur WhatsApp. L'assistant comprend le contexte et répond comme vous le feriez.",
      gradient: "from-[#25D366] to-[#128C7E]",
    },
    {
      icon: Database,
      title: "Base de connaissances intelligente",
      description: "L'IA s'appuie sur vos documents : FAQ, catalogues, procédures. Les réponses viennent de vos propres informations.",
      gradient: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      icon: Globe,
      title: "Multilingue : FR, AR, Darija, EN",
      description: "Vos clients écrivent dans leur langue préférée. L'assistant comprend et répond naturellement, même en code-switching.",
      gradient: "from-[#7C3AED] to-[#06b6d4]",
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/30 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-medium">Notre solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-features-title">
            Tout ce dont votre <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">PME a besoin</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Un assistant WhatsApp complet, intelligent et adapté au marché marocain
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
              <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#25D366]/20 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#128C7E]/0 group-hover:from-[#25D366]/5 group-hover:to-[#128C7E]/5 rounded-2xl transition-all duration-300" />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6`}>
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
