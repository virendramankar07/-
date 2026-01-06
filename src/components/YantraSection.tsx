import { Sparkles, Shield, Heart, Star } from "lucide-react";
import yantraImage from "@/assets/baglamukhi-yantra.jpg";

const benefits = [
  {
    icon: Shield,
    title: "शत्रु विनाश",
    titleEn: "Victory Over Enemies",
    description: "शत्रुओं पर विजय और बुरी शक्तियों से सुरक्षा प्रदान करता है।"
  },
  {
    icon: Sparkles,
    title: "वाक् सिद्धि",
    titleEn: "Power of Speech",
    description: "वाणी में शक्ति और प्रभाव लाता है, वाद-विवाद में विजय दिलाता है।"
  },
  {
    icon: Heart,
    title: "मानसिक शांति",
    titleEn: "Mental Peace",
    description: "मन को शांत करता है और नकारात्मक विचारों को दूर करता है।"
  },
  {
    icon: Star,
    title: "सफलता प्राप्ति",
    titleEn: "Success & Prosperity",
    description: "जीवन के सभी क्षेत्रों में सफलता और समृद्धि प्रदान करता है।"
  }
];

const YantraSection = () => {
  return (
    <section id="yantra" className="py-20 bg-gradient-to-b from-background to-sacred-cream/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sacred-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sacred-gold/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-sacred-saffron/10 text-sacred-saffron rounded-full text-sm font-medium mb-4">
            🔱 पवित्र यंत्र
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            श्री बगलामुखी यंत्र
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hindi">
            बगलामुखी यंत्र दस महाविद्याओं में से एक माँ बगलामुखी की दिव्य शक्ति का प्रतीक है
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Yantra Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sacred-saffron/20 via-sacred-gold/20 to-sacred-maroon/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white p-6 rounded-2xl shadow-sacred border border-sacred-gold/20">
              <div className="absolute inset-0 bg-gradient-to-br from-sacred-gold/5 to-transparent rounded-2xl" />
              <img
                src={yantraImage}
                alt="श्री बगलामुखी यंत्र - Sacred Baglamukhi Yantra"
                className="w-full rounded-xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-sacred-saffron rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <span className="text-white text-xl">ॐ</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {/* Main Description */}
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-sacred-gold/20 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-sacred-maroon mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-sacred-gold" />
                यंत्र का महत्व
              </h3>
              <p className="text-muted-foreground leading-relaxed font-hindi mb-4">
                बगलामुखी यंत्र एक अत्यंत शक्तिशाली तांत्रिक यंत्र है जो माँ बगलामुखी की दिव्य ऊर्जा को धारण करता है। 
                इस यंत्र की पूजा से साधक को अपने शत्रुओं पर विजय, वाक् सिद्धि, और जीवन में सफलता प्राप्त होती है।
              </p>
              <p className="text-muted-foreground leading-relaxed font-hindi">
                यह यंत्र विशेष रूप से न्यायालय के मुकदमों, प्रतियोगी परीक्षाओं, और किसी भी प्रकार के विवाद में 
                विजय प्राप्त करने के लिए अत्यंत प्रभावशाली माना जाता है।
              </p>
            </div>

            {/* Mantra */}
            <div className="bg-gradient-to-r from-sacred-saffron/10 to-sacred-gold/10 p-6 rounded-2xl border border-sacred-gold/30">
              <h4 className="font-hindi text-lg font-semibold text-sacred-maroon mb-2">
                बगलामुखी मूल मंत्र:
              </h4>
              <p className="font-hindi text-xl text-sacred-saffron font-medium leading-relaxed">
                "ॐ ह्लीं बगलामुखी सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिह्वां कीलय बुद्धिं विनाशय ह्रीं ॐ स्वाहा"
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-center text-foreground mb-8">
            यंत्र पूजा के लाभ
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl border border-sacred-gold/20 shadow-sm hover:shadow-sacred hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-sacred-saffron to-sacred-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-hindi text-lg font-bold text-foreground mb-1">
                  {benefit.title}
                </h4>
                <p className="text-sm text-sacred-saffron font-medium mb-2">
                  {benefit.titleEn}
                </p>
                <p className="text-sm text-muted-foreground font-hindi">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YantraSection;