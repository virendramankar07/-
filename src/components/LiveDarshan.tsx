import { Button } from "@/components/ui/button";
import { ExternalLink, Youtube } from "lucide-react";

const LiveDarshan = () => {
  return (
    <section id="live" className="sacred-section bg-maroon">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-foreground/10 rounded-full mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">लाइव प्रसारण</span>
          </div>
          <h2 className="font-hindi text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mt-2 mb-4">
            🔴 लाइव दर्शन
          </h2>
          <p className="font-hindi text-accent-foreground/80 text-lg">
            माँ बगलामुखी के दिव्य दर्शन करें - सीधे अपने घर बैठे
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-foreground/10 backdrop-blur-sm p-2">
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hGsXW32kVMc?si=aeyN9NgrH2rBTvPf"
                title="माँ बगलामुखी लाइव दर्शन"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Info */}
          <div className="mt-8 text-center">
            <p className="font-hindi text-accent-foreground/70 text-sm mb-6">
              यदि वीडियो नहीं चल रहा है, तो कृपया हमारे आधिकारिक YouTube चैनल पर जाएं
            </p>
            <Button variant="gold" size="lg" asChild>
              <a href="https://www.youtube.com/@MaaBaglamukhiMandirSawangi" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5" />
                YouTube पर देखें
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDarshan;
