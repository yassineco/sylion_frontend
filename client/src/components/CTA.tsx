import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function CTA() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-[#0B0B0B] via-[#0a1f1a] to-[#0B0B0B] text-white overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Prêt à{" "}
            <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
              automatiser
            </span>
            {" "}votre WhatsApp ?
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Rejoignez les entreprises qui répondent 24h/24 grâce à l'IA SYLION
          </p>

          <a 
            href="https://wa.me/212600000000" 
            target="_blank" 
            rel="noopener noreferrer" 
            data-testid="link-contact"
          >
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90 transition-all hover:scale-105 px-10 py-7 text-lg shadow-2xl shadow-[#25D366]/50 group"
              data-testid="button-contact"
              onClick={() => trackEvent({ action: 'cta_click', category: 'demo', label: 'cta_final_demo' })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Demander une démo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Opérationnel en 10 min</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Sans engagement</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
