import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import logoUrl from "@assets/sylion-logo.png";

export default function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/products", label: "Produits" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/assistant-whatsapp-maroc", label: "Assistant IA" },
    { href: "/whatsapp-business-api-maroc", label: "WhatsApp API" },
    { href: "/contact", label: "Contact" },
  ];

  if (location !== "/") {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-logo">
            <div className="relative group">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img 
                src={logoUrl} 
                alt="SYLION TECH" 
                className="h-12 w-auto relative z-10 transition-all duration-300 group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))",
                }}
              />
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-white/10"
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white" data-testid="button-menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
