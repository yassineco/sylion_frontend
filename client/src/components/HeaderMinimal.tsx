import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "./ui/button";
import logoUrl from "@assets/sylion-logo.png";
import { X, Menu } from "lucide-react";

export default function HeaderMinimal() {
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

  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToProof = () => {
    const el = document.getElementById("proof");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" data-testid="link-logo">
              <div className="flex items-center gap-3 group">
                <img
                  src={logoUrl}
                  alt="SYLIONAI"
                  className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))",
                  }}
                />
                <span className="text-white font-bold text-xl hidden sm:block">
                  SYLION<span className="text-[#4F46E5]">AI</span>
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={scrollToProof}
                className="text-gray-400 hover:text-white transition-colors text-sm"
                data-testid="link-how-it-works"
              >
                Comment ça marche
              </button>
              <Button
                onClick={scrollToDemo}
                className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white px-6 py-2 rounded-lg font-medium"
                data-testid="button-header-demo"
              >
                Demander une démo
              </Button>
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
              onClick={toggleMenu}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors md:hidden"
              data-testid="button-menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-[#0B0B0B]/98 backdrop-blur-lg md:hidden"
          data-testid="mobile-menu"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Link href="/" onClick={() => setIsOpen(false)} data-testid="link-logo-mobile">
              <div className="flex items-center gap-3">
                <img
                  src={logoUrl}
                  alt="SYLIONAI"
                  className="h-10 w-auto"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))",
                  }}
                />
                <span className="text-white font-bold text-xl">
                  SYLION<span className="text-[#4F46E5]">AI</span>
                </span>
              </div>
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

          <nav className="flex flex-col gap-2 px-6 py-8">
            <button
              onClick={scrollToProof}
              className="block py-4 px-4 text-lg font-medium text-white hover:bg-white/10 rounded-xl transition-colors border-b border-white/5 text-left"
              data-testid="link-mobile-how"
            >
              Comment ça marche
            </button>
          </nav>

          <div className="mt-auto px-6 pb-8">
            <Button
              onClick={scrollToDemo}
              className="w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-xl py-6 text-lg font-semibold"
              data-testid="button-mobile-demo"
            >
              Demander une démo
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
