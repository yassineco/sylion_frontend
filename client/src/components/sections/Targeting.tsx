import { CheckCircle } from "lucide-react";

export default function Targeting() {
  const cards = [
    {
      title: "Vous êtes déjà sur 360dialog",
      bullets: [
        "Connexion rapide",
        "Mise en production immédiate",
        "Traçabilité & audit",
      ],
      accent: "from-[#4F46E5] to-[#7C3AED]",
    },
    {
      title: "Vous voulez passer sur 360dialog",
      bullets: [
        "Accompagnement création & validation",
        "Mise en conformité WhatsApp Business",
        "Prestation facturée, clé en main",
      ],
      accent: "from-[#25D366] to-[#128C7E]",
    },
  ];

  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Pour qui est fait{" "}
          <span className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
            SYLIONAI
          </span>{" "}
          ?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors"
              data-testid={`card-targeting-${index}`}
            >
              <h3 className={`text-xl font-semibold mb-6 bg-gradient-to-r ${card.accent} bg-clip-text text-transparent`}>
                {card.title}
              </h3>
              <ul className="space-y-4">
                {card.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-[#4F46E5] flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
