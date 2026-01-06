import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all promotional images
import promoGurukul from "@/assets/promo-gurukul.jpg";
import promoMantraDiksha from "@/assets/promo-mantra-diksha.jpg";
import promoTantraKavach from "@/assets/promo-tantra-kavach.jpg";
import promoJyotish from "@/assets/promo-jyotish.jpg";
import promoVastu from "@/assets/promo-vastu.jpg";
import promoServices from "@/assets/promo-services.jpg";
import promoPricing from "@/assets/promo-pricing.jpg";
import promoHavanPuja from "@/assets/promo-havan-puja.jpg";
import promoVastuvid from "@/assets/promo-vastuvid.jpg";
import promoMantraVigyan from "@/assets/promo-mantra-vigyan.png";

const promotionalImages = [
  {
    src: promoGurukul,
    title: "गुरुकुल की ज्ञान परम्परा",
    description: "माँ बगलामुखी साधना क्रियायोग वीडियो प्रशिक्षण"
  },
  {
    src: promoMantraDiksha,
    title: "मंत्रयोग दीक्षा/शिक्षा",
    description: "श्री ब्रह्मास्त्र महाविद्या माँ बगलामुखी सिद्धपीठ सावंगी"
  },
  {
    src: promoTantraKavach,
    title: "तंत्र रक्षा कवच",
    description: "ब्रह्मास्त्र कवच - शत्रु बाधा निवारण हेतु"
  },
  {
    src: promoJyotish,
    title: "ज्योतिष कार्यालय",
    description: "श्री पीताम्बरा माँ बगलामुखी ज्योतिष कार्यालय - कुण्डली फलादेश"
  },
  {
    src: promoVastu,
    title: "ज्योतिष एवं वास्तु संस्थान",
    description: "Vedic Astrology, Numerology, Vastu Consultant, Spiritual Guidance"
  },
  {
    src: promoServices,
    title: "विशेष सेवाएं",
    description: "Kundalini Yoga, Chakra Balancing, Third Eye Activation, Dash Mahavidya"
  },
  {
    src: promoPricing,
    title: "हवन एवं अनुष्ठान मूल्य सूची",
    description: "सर्व सिद्धी माँ बगलामुखी मंदिर सावंगी - हवन, अनुष्ठान व अन्य सेवाएं"
  },
  {
    src: promoHavanPuja,
    title: "हवन, पूजन, तंत्रोक, अनुष्ठान",
    description: "शत्रुओ पर विजय, लक्ष्मी प्राप्ति, तंत्र बाधा से मुक्ति"
  },
  {
    src: promoVastuvid,
    title: "वास्तु विशेषज्ञ",
    description: "बिना तोड़-फोड़ के वास्तु दोष निवारण"
  },
  {
    src: promoMantraVigyan,
    title: "मंत्र विज्ञान (शिक्षण)",
    description: "माँ बगलामुखी साधना से अलौकिक शक्तियों की प्राप्ति"
  }
];

const PromotionalGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);
  const handleCall = () => {
    window.open("tel:+919806284177", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919806284177?text=नमस्ते, मुझे माँ बगलामुखी मंदिर सावंगी की सेवाओं के बारे में जानकारी चाहिए।", "_blank");
  };

  return (
    <section id="services-gallery" className="py-16 bg-gradient-to-b from-temple-cream to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-temple-saffron/20 rounded-full mb-4">
            <span className="text-temple-maroon font-hindi text-lg">॥ ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा ॥</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-temple-maroon font-hindi mb-4">
            🙏 हमारी सेवाएं एवं कार्यक्रम
          </h2>
          <p className="text-lg text-temple-brown font-hindi max-w-3xl mx-auto">
            सनातन धर्म प्रचार प्रसार पीताम्बरा संस्थान द्वारा प्रदत्त विभिन्न आध्यात्मिक सेवाएं
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {promotionalImages.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage({ src: image.src, title: image.title })}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-temple-gold/30 cursor-pointer"
          >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-temple-maroon/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold font-hindi mb-1">{image.title}</h3>
                  <p className="text-sm font-hindi opacity-90">{image.description}</p>
                 </div>
              </div>
              {/* Click indicator */}
              <div className="absolute top-3 right-3 bg-temple-gold/80 text-temple-maroon px-2 py-1 rounded-full text-xs font-hindi opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                🔍 देखें
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-temple-saffron via-temple-gold to-temple-saffron p-8 rounded-2xl shadow-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-temple-maroon font-hindi mb-4">
            📞 सेवाओं के लिए संपर्क करें
          </h3>
          <p className="text-temple-brown font-hindi mb-6 text-lg">
            परम पूज्य आचार्य रविन्द्र मानकर जी से मार्गदर्शन प्राप्त करें
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleCall}
              className="bg-temple-maroon hover:bg-temple-maroon/90 text-white font-hindi text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              📞 9806284177
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white font-hindi text-lg px-8 py-6 rounded-full shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp पर संपर्क करें
            </Button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <h3 className="text-xl font-bold text-white font-hindi text-center">{selectedImage.title}</h3>
            </div>
            <button
              className="absolute -top-3 -right-3 w-12 h-12 bg-temple-gold rounded-full flex items-center justify-center text-temple-maroon hover:bg-temple-saffron transition-colors shadow-lg"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PromotionalGallery;
