import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, CreditCard } from "lucide-react";
import LightRays from "./backgrounds/LightRays";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-[#0B0B0B] via-[#0a1f1a] to-[#0B0B0B] text-white overflow-hidden">
      <LightRays color="#25D366" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Prêt à{" "}
            <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
              automatiser
            </span>
            {" "}votre WhatsApp ?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Rejoignez les entreprises qui répondent déjà 24h/24 à leurs clients grâce à l'IA SYLION
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/212600000000" target="_blank" rel="noopener noreferrer" data-testid="link-contact">
              <Button 
                size="lg" 
                className="rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90 transition-all hover:scale-105 px-10 py-7 text-lg shadow-2xl shadow-[#25D366]/50 group"
                data-testid="button-contact"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Demander une démo WhatsApp
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
                <CreditCard className="w-5 h-5 mr-2" />
                Voir les tarifs
              </Button>
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Opérationnel en 10 min</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Support en Français & Darija</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
