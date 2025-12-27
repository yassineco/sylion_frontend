import { XCircle } from "lucide-react";

export default function NotFor() {
  const items = [
    'Un "chatbot rapide" sans gouvernance',
    "Des tests personnels ou projets non business",
    "Des intégrations WhatsApp non officielles",
  ];

  return (
    <section className="py-20 px-6 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Ce n'est pas pour…
        </h2>

        <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400">
                <XCircle className="w-5 h-5 text-red-500/70 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
