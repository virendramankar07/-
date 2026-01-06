import { Button } from "@/components/ui/button";
import heroImage from "@/assets/temple-hero.jpg";
import deityImage from "@/assets/maa-baglamukhi.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Sacred Temple Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Om Symbol */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
              <span className="text-2xl om-pulse">🕉️</span>
              <span className="text-sm font-hindi font-medium text-primary">जय माँ बगलामुखी</span>
            </div>

            {/* Heading */}
            <h1 className="font-hindi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2 animate-fade-in py-1" style={{ animationDelay: "0.1s" }}>
              माँ बगलामुखी
              </h1>
            <h2 className="font-hindi text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient-sacred leading-relaxed mb-4 animate-fade-in py-5" style={{ animationDelay: "0.15s" }}>
              शक्ति सिद्धपीठ मंदिर सावंगी,           
              </h2>
            <p className="font-hindi text-xl md:text-2xl text-muted-foreground mb-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
               जिला-बैतूल, मध्य प्रदेश
            </p>

            {/* Subheading */}
            <p className="font-hindi text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              माँ बगलामुखी शक्ति सिद्धपीठ सावंगी आपका हार्दिक स्वागत करती है। दस महाविद्याओं में से आठवीं महाविद्या - शक्ति, बुद्धि और विजय की देवी।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="sacred" size="lg" asChild>
                <a href="#live">🔴 लाइव दर्शन</a>
              </Button>
              <Button variant="sacredOutline" size="lg" asChild>
                <a href="#history">📜 इतिहास जानें</a>
              </Button>
            </div>

            {/* Temple Timings */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <div className="text-2xl mb-1">🌅</div>
                <div className="font-hindi text-sm text-muted-foreground">मंगला आरती</div>
                <div className="font-semibold text-foreground">6:00 AM</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🛕</div>
                <div className="font-hindi text-sm text-muted-foreground">दर्शन समय</div>
                <div className="font-semibold text-foreground">6 AM - 9:30 PM</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">🔥</div>
                <div className="font-hindi text-sm text-muted-foreground">हवन पूजा</div>
                <div className="font-semibold text-foreground">दिन भर</div>
              </div>
            </div>
          </div>

          {/* Deity Image */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-sacred rounded-full blur-3xl opacity-30 animate-glow" />
              <img
                src={deityImage}
                alt="माँ बगलामुखी"
                className="relative w-80 xl:w-96 rounded-3xl shadow-2xl border-4 border-gold/30"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
