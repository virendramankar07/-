import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "संदेश भेजा गया! ✅",
      description: "आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही संपर्क करेंगे।",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "पता",
      value: "माँ बगलामुखी मंदिर, सावंगी, जिला-बैतूल, मध्य प्रदेश",
    },
    {
      icon: Phone,
      title: "फोन",
      value: "+91-9806284177, +91-8305433947",
    },
    {
      icon: Mail,
      title: "ईमेल",
      value: "ravindramankar56@gmail.com",
    },
  ];

  return (
    <section id="contact" className="sacred-section bg-gradient-divine">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">संपर्क</span>
          <h2 className="font-hindi text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            📞 संपर्क करें
          </h2>
          <p className="font-hindi text-muted-foreground text-lg">
            किसी भी प्रकार की जानकारी के लिए हमसे संपर्क करें
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info & Map */}
          <div className="space-y-6">
            <div className="temple-card">
              <h3 className="font-hindi text-xl font-semibold text-foreground mb-6">मंदिर कार्यालय</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-hindi text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-hindi font-medium text-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map */}
            <div className="temple-card p-2">
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229539.95525563144!2d78.04299986658721!3d21.763571529502162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6774197244bf5%3A0x661e0dc52bf97c27!2sMaa%20Baglamukhi%20Mandir!5e0!3m2!1sen!2sin!4v1761722139555!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="मंदिर स्थान"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="temple-card">
            <h3 className="font-hindi text-xl font-semibold text-foreground mb-6">हमें संदेश भेजें</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-hindi text-sm text-muted-foreground mb-2 block">आपका नाम</label>
                <Input
                  type="text"
                  placeholder="नाम दर्ज करें"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 font-hindi"
                />
              </div>
              <div>
                <label className="font-hindi text-sm text-muted-foreground mb-2 block">ईमेल</label>
                <Input
                  type="email"
                  placeholder="ईमेल दर्ज करें"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 font-hindi"
                />
              </div>
              <div>
                <label className="font-hindi text-sm text-muted-foreground mb-2 block">संदेश</label>
                <Textarea
                  placeholder="अपना संदेश लिखें..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 font-hindi resize-none"
                />
              </div>
              <Button type="submit" variant="sacred" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                संदेश भेजें
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
