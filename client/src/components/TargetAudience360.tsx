import { motion } from "framer-motion";
import { Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { trackEvent } from "@/lib/analytics";

export default function TargetAudience360() {
  return (
    <section className="relative py-20 bg-[#0B0B0B] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4F46E5]/5 to-transparent" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-360dialog-title">
            Pour qui est fait <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">SYLIONAI</span> ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all duration-300"
            data-testid="card-360dialog-existing"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20">
                <Zap className="w-5 h-5 text-[#25D366]" />
              </div>
              <h3 className="text-xl font-bold">Vous êtes déjà sur 360dialog</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>Connexion rapide</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>Mise en production immédiate</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <span>Traçabilité & audit</span>
              </li>
            </ul>
            <a href="#contact" className="inline-block mt-6">
              <Button 
                size="sm" 
                className="rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white hover:opacity-90"
                onClick={() => trackEvent({ action: 'cta_click', category: 'demo', label: '360dialog_existing' })}
                data-testid="button-360dialog-existing"
              >
                Connecter mon compte
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-[#4F46E5]/30 hover:border-[#4F46E5]/60 transition-all duration-300"
            data-testid="card-360dialog-new"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-[#4F46E5]/20 to-[#7C3AED]/20">
                <Users className="w-5 h-5 text-[#4F46E5]" />
              </div>
              <h3 className="text-xl font-bold">Vous voulez passer sur 360dialog</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4F46E5] flex-shrink-0" />
                <span>Accompagnement création & validation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4F46E5] flex-shrink-0" />
                <span>Mise en conformité WhatsApp Business</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#4F46E5] flex-shrink-0" />
                <span>Prestation facturée, clé en main</span>
              </li>
            </ul>
            <a href="/pricing" className="inline-block mt-6">
              <Button 
                size="sm" 
                variant="outline"
                className="rounded-full border-[#4F46E5]/50 text-white hover:bg-[#4F46E5]/10"
                onClick={() => trackEvent({ action: 'cta_click', category: 'pricing', label: '360dialog_new' })}
                data-testid="button-360dialog-new"
              >
                Voir le Pack Activation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
