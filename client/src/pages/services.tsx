import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour
          </Button>
        </Link>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
          Nos Services
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Un accompagnement complet pour déployer votre Assistant WhatsApp IA
        </p>
        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">Déploiement Express</h3>
            <p className="text-gray-400">
              Configuration de votre Assistant WhatsApp IA et connexion à votre numéro. Opérationnel en 10 minutes.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">Indexation de Documents (RAG)</h3>
            <p className="text-gray-400">
              Indexation de vos FAQ, catalogues et documents. L'IA répond à partir de vos propres informations.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-semibold mb-3">Formation et Support FR/Darija</h3>
            <p className="text-gray-400">
              Formation de vos équipes en Français et Darija. Support continu pour optimiser votre assistant.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
