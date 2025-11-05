import { Link, useLocation } from "wouter";
import { Button } from "./ui/button";

export default function Navigation() {
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/products", label: "Produits" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
  ];

  if (location !== "/") {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-logo">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              SYLION TECH
            </h2>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            {links.slice(1).map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <Button
                  variant="ghost"
                  className="text-foreground hover-elevate"
                  data-testid={`button-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" data-testid="button-menu">
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
