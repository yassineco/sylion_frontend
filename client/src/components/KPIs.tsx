import CountUp from "./animations/CountUp";
import { motion } from "framer-motion";
import { MessageCircle, Clock, FileText } from "lucide-react";

export default function KPIs() {
  const data = [
    { 
      value: 92, 
      label: "réponses automatiques",
      icon: MessageCircle,
      description: "Vos clients reçoivent une réponse instantanée, même à 3h du matin"
    },
    { 
      value: 48, 
      label: "heures libérées / mois",
      icon: Clock,
      description: "Votre équipe se concentre sur ce qui compte vraiment"
    },
    { 
      value: 99, 
      label: "précision sur vos docs",
      icon: FileText,
      description: "L'IA répond à partir de vos propres documents et FAQ"
    },
  ];

  return (
    <section className="relative py-32 bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-background to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Des résultats <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">concrets</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ce que l'Assistant WhatsApp IA apporte à votre entreprise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {data.map((kpi, index) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
              data-testid={`kpi-${kpi.label.replace(/\s+/g, '-')}`}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-[#25D366]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#25D366]/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/5 to-[#128C7E]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 mb-6">
                    <kpi.icon className="w-6 h-6 text-[#25D366]" />
                  </div>
                  
                  <div className="mb-4">
                    <CountUp 
                      value={kpi.value} 
                      duration={2} 
                      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent" 
                      suffix="%" 
                    />
                  </div>
                  
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    {kpi.label}
                  </p>
                  
                  <p className="text-sm text-muted-foreground/80">
                    {kpi.description}
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
