import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";
import logoUrl from "@assets/sylion-logo.png";
import { X, Menu } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/products", label: "Produits" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/enterprise", label: "Enterprise" },
    { href: "/contact", label: "Contact" },
  ];

  if (location !== "/") {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-logo">
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img 
                  src={logoUrl} 
                  alt="SYLION TECH" 
                  className="h-10 sm:h-12 w-auto relative z-10 transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))",
                  }}
                />
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {links.slice(1).map((link) => (
                <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:bg-white/10 text-sm lg:text-base px-2 lg:px-4"
                    data-testid={`button-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="md:hidden">
              <button
                type="button"
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                onClick={toggleMenu}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                data-testid="button-menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-[#0B0B0B]/98 backdrop-blur-lg md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)} data-testid="link-logo-mobile">
              <img 
                src={logoUrl} 
                alt="SYLION TECH" 
                className="h-10 w-auto"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))",
                }}
              />
            </Link>
            <button
              type="button"
              aria-label="Fermer le menu"
              onClick={toggleMenu}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              data-testid="button-close-menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 px-6 py-8 overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                <div className="block py-4 px-4 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors border-b border-white/5">
                  {link.label}
                </div>
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-6 pb-8">
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button 
                className="w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl py-6 text-lg font-semibold"
                data-testid="button-mobile-cta"
              >
                Demander une démo
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
