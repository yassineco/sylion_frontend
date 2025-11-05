import ShinyText from "./animations/ShinyText";
import { Button } from "./ui/button";
import LightRays from "./backgrounds/LightRays";
import GridPattern from "./backgrounds/GridPattern";
import FloatingOrbs from "./backgrounds/FloatingOrbs";
import { motion } from "framer-motion";
import { Sparkles, Zap, Brain } from "lucide-react";

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4F46E5]/20 to-[#7C3AED]/20 border border-[#4F46E5]/30 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-[#4F46E5]" />
            <span className="text-sm font-medium text-gray-300">L'avenir de l'IA en entreprise</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          <ShinyText text="SYLION TECH" speed={3} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          L'intelligence artificielle qui comprend votre métier.
          <br />
          Des assistants IA intégrés pour transformer votre entreprise.
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
              className="rounded-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90 transition-all hover:scale-105 px-8 py-7 text-lg shadow-lg shadow-[#4F46E5]/50"
              data-testid="button-demo"
            >
              <Zap className="w-5 h-5 mr-2" />
              Demander une démo
            </Button>
          </a>
          <a href="/products" data-testid="link-discover">
            <Button 
              size="lg" 
              variant="outline"
              className="rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 transition-all hover:scale-105 px-8 py-7 text-lg"
              data-testid="button-discover"
            >
              <Brain className="w-5 h-5 mr-2" />
              Découvrir nos solutions
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">92%</div>
            <div className="text-sm text-gray-400">Gain de productivité</div>
          </div>
          <div className="text-center border-x border-white/10">
            <div className="text-3xl font-bold text-white mb-1">48h</div>
            <div className="text-sm text-gray-400">Gagnées par mois</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99%</div>
            <div className="text-sm text-gray-400">Fiabilité IA</div>
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
