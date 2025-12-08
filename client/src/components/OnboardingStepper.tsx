import { motion } from "framer-motion";
import { Smartphone, Settings, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Vous choisissez votre numéro WhatsApp",
    description: "Numéro existant ou nouveau numéro dédié à l'assistant. C'est vous qui décidez.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Nous connectons l'assistant à votre activité",
    description: "On configure les messages, les horaires, et on ajoute vos documents : FAQ, offres, procédures.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Il répond à vos clients en quelques minutes",
    description: "Vos clients écrivent sur WhatsApp, l'IA répond automatiquement 24/7, et vous gardez le contrôle.",
  },
];

export default function OnboardingStepper() {
  return (
    <section id="how-it-works" className="relative py-32 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-background to-[#0B0B0B]" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30 backdrop-blur-sm mb-6">
            <CheckCircle className="w-4 h-4 text-[#4F46E5]" />
            <span className="text-sm font-medium">Mise en place rapide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Un assistant opérationnel{" "}
            <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
              en 10 minutes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pas de complexité technique. Nous nous occupons de tout.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4F46E5] via-[#25D366] to-[#7C3AED] hidden lg:block -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
                data-testid={`step-${step.number}`}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/10">
                  <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm font-bold px-4 py-1 rounded-full">
                    {step.number}
                  </div>
                  
                  <div className="pt-4">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 mb-6">
                      <step.icon className="w-8 h-8 text-[#25D366]" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#25D366]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
