import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import LightRays from "./backgrounds/LightRays";

export default function CTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0B0B0B] via-[#1a0b2e] to-[#0B0B0B] text-white overflow-hidden">
      <LightRays color="#7C3AED" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Prêt à{" "}
            <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              transformer
            </span>
            {" "}votre entreprise ?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Rejoignez les entreprises qui ont déjà fait le choix de l'intelligence artificielle
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" data-testid="link-contact">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90 transition-all hover:scale-105 px-10 py-7 text-lg shadow-2xl shadow-[#4F46E5]/50 group"
                data-testid="button-contact"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contactez-nous
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            <a href="/pricing" data-testid="link-pricing">
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all hover:scale-105 px-10 py-7 text-lg"
                data-testid="button-pricing"
              >
                Voir les tarifs
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Démo gratuite</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Support 24/7</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
