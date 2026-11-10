import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#location" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#hero" className="font-display text-xl font-bold text-primary md:text-2xl">
          Krishna Haveli
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="tel:1234567891" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground md:hidden" aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-3 font-body text-base font-medium text-foreground/80 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
          <a href="tel:1234567891" className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-body text-sm font-semibold text-primary-foreground">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
