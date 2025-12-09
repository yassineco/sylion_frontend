import { Button } from "./ui/button";
import LightRays from "./backgrounds/LightRays";
import GridPattern from "./backgrounds/GridPattern";
import FloatingOrbs from "./backgrounds/FloatingOrbs";
import { motion } from "framer-motion";
import { MessageCircle, Play, Clock, Users, CheckCircle } from "lucide-react";
import logoUrl from "@assets/sylion-logo.png";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-[#0B0B0B] text-white px-6 overflow-hidden">
      <LightRays />
      <GridPattern />
      <FloatingOrbs />
      
      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20 border border-[#25D366]/30 backdrop-blur-sm mb-8">
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span className="text-sm font-medium text-gray-300">Assistant WhatsApp IA pour PME</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.2,
            type: "spring",
            stiffness: 100
          }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
          </div>
          
          <div className="relative">
            <motion.img 
              src={logoUrl} 
              alt="SYLION TECH" 
              className="h-32 md:h-40 w-auto mx-auto relative z-10 mb-6"
              style={{
                filter: "drop-shadow(0 0 40px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 80px rgba(34, 211, 238, 0.3))",
              }}
              animate={{
                filter: [
                  "drop-shadow(0 0 40px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 80px rgba(34, 211, 238, 0.3))",
                  "drop-shadow(0 0 50px rgba(34, 211, 238, 0.8)) drop-shadow(0 0 100px rgba(34, 211, 238, 0.4))",
                  "drop-shadow(0 0 40px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 80px rgba(34, 211, 238, 0.3))",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          L'Assistant WhatsApp IA qui répond{" "}
          <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
            24h/24
          </span>
          {" "}à vos clients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          Répondez automatiquement aux messages WhatsApp de vos clients. 
          L'IA comprend votre métier, parle Français, Arabe, Darija et Anglais, 
          et libère votre équipe des tâches répétitives.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#contact" data-testid="link-demo">
            <Button 
              size="lg" 
              className="rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90 transition-all hover:scale-105 px-8 py-7 text-lg shadow-lg shadow-[#25D366]/50"
              data-testid="button-demo"
              onClick={() => trackEvent({ action: 'cta_click', category: 'demo', label: 'hero_demarrer_en_10_minutes' })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Démarrer en 10 minutes
            </Button>
          </a>
          <a href="#how-it-works" data-testid="link-discover">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all hover:scale-105 px-8 py-7 text-lg"
              data-testid="button-discover"
              onClick={() => trackEvent({ action: 'cta_click', category: 'navigation', label: 'hero_voir_comment_ca_marche' })}
            >
              <Play className="w-5 h-5 mr-2" />
              Voir comment ça marche
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center py-4 sm:py-0">
            <div className="flex items-center justify-center mb-2">
              <Clock className="w-5 h-5 text-[#25D366] mr-2" />
              <span className="text-2xl sm:text-3xl font-bold text-white">92%</span>
            </div>
            <div className="text-sm text-gray-400">Réponses automatisées</div>
          </div>
          <div className="text-center py-4 sm:py-0 border-y sm:border-y-0 sm:border-x border-white/10">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-5 h-5 text-[#25D366] mr-2" />
              <span className="text-2xl sm:text-3xl font-bold text-white">48%</span>
            </div>
            <div className="text-sm text-gray-400">Temps traitement réduit</div>
          </div>
          <div className="text-center py-4 sm:py-0">
            <div className="flex items-center justify-center mb-2">
              <CheckCircle className="w-5 h-5 text-[#25D366] mr-2" />
              <span className="text-2xl sm:text-3xl font-bold text-white">99%</span>
            </div>
            <div className="text-sm text-gray-400">Précision sur vos docs</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
