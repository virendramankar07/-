import { Calendar, Star, Flame, Sun, Moon, Sparkles } from "lucide-react";

const upcomingEvents = [
  {
    date: "7 अप्रैल 2025",
    day: "सोमवार",
    title: "चैत्र नवरात्रि प्रारंभ",
    description: "नौ दिवसीय माँ दुर्गा की आराधना का शुभारंभ",
    type: "नवरात्रि",
    icon: Star,
  },
  {
    date: "13 अप्रैल 2025",
    day: "रविवार",
    title: "बगलामुखी जयंती",
    description: "माँ बगलामुखी की विशेष पूजा एवं हवन",
    type: "विशेष पूजा",
    icon: Flame,
  },
  {
    date: "15 अप्रैल 2025",
    day: "मंगलवार",
    title: "राम नवमी",
    description: "भगवान श्री राम जन्मोत्सव",
    type: "त्योहार",
    icon: Sun,
  },
  {
    date: "29 सितंबर 2025",
    day: "सोमवार",
    title: "शारदीय नवरात्रि प्रारंभ",
    description: "नौ दिवसीय माँ दुर्गा की महाआराधना",
    type: "नवरात्रि",
    icon: Star,
  },
  {
    date: "7 अक्टूबर 2025",
    day: "मंगलवार",
    title: "दुर्गा अष्टमी",
    description: "कन्या पूजन एवं महाहवन",
    type: "विशेष पूजा",
    icon: Flame,
  },
  {
    date: "8 अक्टूबर 2025",
    day: "बुधवार",
    title: "महानवमी",
    description: "माँ सिद्धिदात्री की पूजा",
    type: "विशेष पूजा",
    icon: Moon,
  },
  {
    date: "20 अक्टूबर 2025",
    day: "सोमवार",
    title: "दीपावली",
    description: "मंदिर में विशेष दीप सजावट एवं लक्ष्मी पूजन",
    type: "त्योहार",
    icon: Sparkles,
  },
  {
    date: "प्रत्येक मंगलवार",
    day: "साप्ताहिक",
    title: "बगलामुखी साधना",
    description: "विशेष तांत्रिक पूजा एवं मंत्र जाप",
    type: "साप्ताहिक",
    icon: Flame,
  },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case "नवरात्रि":
      return "bg-sacred-saffron/20 text-sacred-saffron border-sacred-saffron/30";
    case "विशेष पूजा":
      return "bg-sacred-maroon/20 text-sacred-maroon border-sacred-maroon/30";
    case "त्योहार":
      return "bg-sacred-gold/20 text-sacred-gold border-sacred-gold/30";
    case "साप्ताहिक":
      return "bg-primary/20 text-primary border-primary/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const EventsCalendar = () => {
  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sacred-gold/10 rounded-full mb-4">
            <Calendar className="w-5 h-5 text-sacred-gold" />
            <span className="text-sacred-gold font-medium">आगामी कार्यक्रम</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            उत्सव एवं पूजा कैलेंडर
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-hindi">
            मंदिर में आयोजित होने वाले विशेष पूजन, नवरात्रि उत्सव एवं अन्य धार्मिक कार्यक्रमों की जानकारी
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {upcomingEvents.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-sacred hover:border-sacred-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Type Badge */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border mb-4 ${getTypeColor(event.type)}`}>
                  <IconComponent className="w-3 h-3" />
                  {event.type}
                </div>

                {/* Date */}
                <div className="mb-3">
                  <p className="text-xl font-display font-bold text-foreground">{event.date}</p>
                  <p className="text-sm text-muted-foreground">{event.day}</p>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-hindi font-semibold text-foreground mb-2 group-hover:text-sacred-saffron transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground font-hindi leading-relaxed">
                  {event.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-sacred-gold animate-pulse" />
                    <span>मंदिर में विशेष आयोजन</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navaratri Special Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-sacred p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Star className="w-12 h-12 md:w-16 md:h-16 text-sacred-gold" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3">
                नवरात्रि विशेष आयोजन
              </h3>
              <p className="text-white/80 font-hindi text-lg mb-4 max-w-xl">
                नवरात्रि के पावन अवसर पर मंदिर में प्रतिदिन विशेष पूजा, हवन, कन्या भोज एवं सांस्कृतिक कार्यक्रमों का आयोजन किया जाता है। भक्तगण सादर आमंत्रित हैं।
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                  🪔 प्रातः आरती: 5:30 AM
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm border border-white/20">
                  🔱 महाआरती: 7:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 font-hindi">
          * तिथियाँ पंचांग के अनुसार परिवर्तित हो सकती हैं। कृपया मंदिर से संपर्क करें।
        </p>
      </div>
    </section>
  );
};

export default EventsCalendar;
