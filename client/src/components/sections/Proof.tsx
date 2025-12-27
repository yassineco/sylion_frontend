import { ArrowRight } from "lucide-react";

export default function Proof() {
  const pipelineSteps = [
    "WhatsApp (360dialog)",
    "Normalisation",
    "RAG",
    "IA",
    "Réponse",
    "Logs & audit",
  ];

  return (
    <section id="proof" className="py-20 px-6 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Une pipeline production, pas un chatbot.
        </h2>

        <div className="bg-[#0a0a0a] border border-gray-800 rounded-xl p-6 mb-8 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-max justify-center">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-mono text-[#22D3EE] whitespace-nowrap px-3 py-2 bg-[#111111] rounded-lg border border-gray-800">
                  {step}
                </span>
                {index < pipelineSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Chaque message est traité et stocké de manière traçable. Rien n'est "magique" : c'est auditable.
        </p>
      </div>
    </section>
  );
}
