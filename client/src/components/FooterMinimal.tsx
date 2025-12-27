import { Link } from "wouter";
import { Button } from "./ui/button";
import logoUrl from "@assets/sylion-logo.png";

export default function FooterMinimal() {
  const scrollToDemo = () => {
    const el = document.getElementById("demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-white/10 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" data-testid="link-footer-logo">
            <div className="flex items-center gap-3">
              <img
                src={logoUrl}
                alt="SYLIONAI"
                className="h-8 w-auto"
                style={{
                  filter: "drop-shadow(0 0 6px rgba(34, 211, 238, 0.3))",
                }}
              />
              <span className="text-white font-bold text-lg">
                SYLION<span className="text-[#4F46E5]">AI</span>
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/contact" data-testid="link-footer-contact">
              <span className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </span>
            </Link>
            <Button
              onClick={scrollToDemo}
              variant="outline"
              className="border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10 px-4 py-2 rounded-lg text-sm"
              data-testid="button-footer-demo"
            >
              Demander une démo
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SYLIONAI. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
