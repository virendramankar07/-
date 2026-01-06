import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919806284177"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn bottom-24 right-4 bg-green-500 text-white hover:bg-green-600"
        aria-label="WhatsApp पर संपर्क करें"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href="tel:+91 9806284177"
        className="float-btn bottom-6 right-4 bg-primary text-primary-foreground"
        aria-label="फोन करें"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
};

export default FloatingButtons;
