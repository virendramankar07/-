import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "होम", href: "#home" },
    { name: "इतिहास", href: "#history" },
    { name: "लाइव दर्शन", href: "#live" },
    { name: "गैलरी", href: "#gallery" },
    { name: "संपर्क", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-sacred flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-2xl">🙏</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-hindi text-lg md:text-xl font-semibold text-foreground leading-tight block">
                माँ बगलामुखी
              </span>
              <span className="text-xs text-muted-foreground">शक्ति सिद्धपीठ मंदिर सावंगी,</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link font-hindi text-sm">
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="sacred" size="default" asChild>

            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors font-hindi font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="sacred" className="w-full" asChild>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
