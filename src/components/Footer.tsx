import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/MahakalBhaktRavindraMankar", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/guruji_ravindramankar", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@MaaBaglamukhiMandirSawangi", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "होम", href: "#home" },
    { name: "इतिहास", href: "#history" },
    { name: "लाइव दर्शन", href: "#live" },
    { name: "गैलरी", href: "#gallery" },
    { name: "संपर्क", href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-sacred flex items-center justify-center">
                <span className="text-2xl">🙏</span>
              </div>
              <div>
                <span className="font-hindi text-xl font-semibold block">माँ बगलामुखी</span>
                <span className="text-sm text-primary-foreground/60">शक्ति सिद्धपीठ मंदिर, सावंगी</span>
              </div>
            </div>
            <p className="font-hindi text-primary-foreground/70 max-w-md mb-6 leading-relaxed">
              दस महाविद्याओं में से आठवीं महाविद्या - माँ बगलामुखी की कृपा से शत्रुओं पर विजय, वाद-विवाद में जीत और मन की शक्ति प्राप्त करें।
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-hindi font-semibold text-lg mb-4">त्वरित लिंक</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="font-hindi text-primary-foreground/70 hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-hindi font-semibold text-lg mb-4">संपर्क जानकारी</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-hindi text-sm text-primary-foreground/70">
                  सावंगी, जिला-बैतूल, मध्य प्रदेश
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70">+91-9806284177</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-primary-foreground/70 break-all">ravindramankar56@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="font-hindi text-primary-foreground/50 text-sm">
            © 2024 माँ बगलामुखी शक्ति सिद्धपीठ मंदिर, सावंगी। सर्वाधिकार सुरक्षित।
          </p>
          <p className="font-hindi text-primary-foreground/40 text-xs mt-2">
            || ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ||
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
