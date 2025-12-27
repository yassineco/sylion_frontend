import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "wouter";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
    };

    console.log("Form data ready for backend:", payload);

    // TODO: Uncomment when backend is ready
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(payload),
    //   });
    //   if (!response.ok) throw new Error('Network response was not ok');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   return;
    // }

    trackEvent({ action: 'form_submit', category: 'contact', label: 'contact_whatsapp_demo' });
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] text-white overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
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
              Prêt à automatiser votre WhatsApp ? Demandez une démo et découvrez comment répondre à vos clients 24/7.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 flex items-center justify-center">
                  <span className="text-[#4F46E5] font-bold text-sm">S</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Entreprise</h3>
                  <p className="text-gray-400">SYLION TECH (SARL AU)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#4F46E5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:contact@sylionai.com" 
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid="link-email"
                  >
                    contact@sylionai.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#4F46E5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Téléphone / WhatsApp</h3>
                  <a 
                    href="tel:+212649700830" 
                    className="text-gray-400 hover:text-white transition-colors"
                    data-testid="link-phone"
                  >
                    +212 6 49 70 08 30
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#4F46E5] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-gray-400">2 RUE ESSANAOUBAR, ÉTAGE 4, APPARTEMENT 12, Casablanca – Maroc</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-8 rounded-2xl bg-white/5 border border-gray-800">
                <CheckCircle className="w-16 h-16 text-[#25D366] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Merci !</h3>
                <p className="text-gray-400">
                  Votre demande a bien été enregistrée. Nous vous recontacterons rapidement.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="ghost"
                  className="mt-6 text-[#4F46E5] hover:bg-white/10"
                  data-testid="button-new-request"
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
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
                  Demander une démo WhatsApp
                </Button>
              </form>
            )}
          </div>
        </div>
        
        {/* Mentions légales */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h4 className="text-sm font-semibold text-gray-500 mb-3">Mentions légales</h4>
          <div className="text-xs text-gray-600 space-y-1">
            <p>SYLION TECH – Société à Responsabilité Limitée à Associé Unique (SARL AU)</p>
            <p>Siège social : 2 RUE ESSANAOUBAR, ÉTAGE 4, APPARTEMENT 12, Casablanca – Maroc</p>
            <p>RC : 704357 • ICE : 003843338000086</p>
            <p>Email : contact@sylionai.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
