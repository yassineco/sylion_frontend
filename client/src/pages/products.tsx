import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            ← Retour
          </Button>
        </Link>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
          Nos Produits
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Découvrez notre gamme de solutions IA sur mesure
        </p>
        <div className="space-y-8">
          <div className="p-6 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-3">Assistant IA Personnalisé</h3>
            <p className="text-muted-foreground">
              Intégrez un assistant intelligent qui comprend votre métier et répond aux questions de vos clients 24/7.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-3">RAG-as-a-Service</h3>
            <p className="text-muted-foreground">
              Service de recherche augmentée par génération hébergé localement pour une sécurité maximale de vos données.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
