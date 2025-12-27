import { motion } from "framer-motion";
import { Smartphone, Settings, MessageCircle } from "lucide-react";

const steps = [
  { number: "1", icon: Smartphone, title: "Choisissez votre numéro", desc: "Existant ou nouveau, vous décidez" },
  { number: "2", icon: Settings, title: "Nous configurons l'IA", desc: "Docs, FAQ, messages personnalisés" },
  { number: "3", icon: MessageCircle, title: "L'assistant répond 24/7", desc: "Opérationnel, vous gardez le contrôle" },
];

export default function OnboardingStepper() {
  return (
    <section id="how-it-works" className="relative py-16 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-background to-[#0B0B0B]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Opérationnel <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">en 10 minutes</span>
          </h2>
          <p className="text-muted-foreground">Pas de complexité technique</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
              data-testid={`step-${step.number}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white font-bold text-lg mb-4">
                {step.number}
              </div>
              <div className="inline-flex p-3 rounded-xl bg-[#25D366]/10 mb-3">
                <step.icon className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
