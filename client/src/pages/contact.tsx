import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Merci ! Nous vous contacterons bientôt.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link href="/" data-testid="link-home">
          <Button variant="ghost" className="mb-8 text-white hover:bg-white/10" data-testid="button-back">
            ← Retour
          </Button>
        </Link>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Parlons de votre projet et découvrons comment l'IA peut transformer votre entreprise
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#4F46E5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">contact@syliontech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#4F46E5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-gray-400">+33 1 23 45 67 89</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#4F46E5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-400">Paris, France</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-gray-700 text-white"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-gray-700 text-white"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Entreprise
                </label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/5 border-gray-700 text-white"
                  data-testid="input-company"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-gray-700 text-white min-h-32"
                  required
                  data-testid="input-message"
                />
              </div>
              <Button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white hover:opacity-90"
                data-testid="button-submit"
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
