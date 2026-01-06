import { Clock, Calendar, Sun, Moon } from "lucide-react";

const HistorySection = () => {
  const historyItems = [
    {
      title: "पौराणिक कथा",
      content: "एक राक्षस ने भगवान ब्रह्मा के ग्रंथ चुरा लिए थे। राक्षस का वध करने और ग्रंथ वापस लाने के लिए मां बगलामुखी का जन्म हुआ था। भगवान विष्णु ने अपनी तपस्या से देवी बगलामुखी को प्रसन्न किया।",
      icon: "📜",
    },
    {
      title: "पांडवों द्वारा स्थापना",
      content: "पांडवों ने अपने अज्ञातवास के दौरान मां बगलामुखी का मंदिर बनाया और उनकी पूजा की। ऐसा माना जाता है कि मंदिर का निर्माण पांडवों ने एक ही रात में किया था।",
      icon: "🏛️",
    },
    {
      title: "भगवान राम की पूजा",
      content: "एक पौराणिक कथा के अनुसार, भगवान राम ने रावण पर विजय प्राप्त करने के लिए मां बगलामुखी की पूजा की थी और उन्हें 'ब्रह्मास्त्र' प्राप्त हुआ था।",
      icon: "🏹",
    },
    {
      title: "10 महाविद्या",
      content: "मां बगलामुखी 10 महाविद्याओं में से आठवीं महाविद्या मानी जाती हैं। उन्हें 'स्तम्भन शक्ति' और 'मौन विजय' की अधिष्ठात्री माना जाता है।",
      icon: "🕉️",
    },
  ];

  const timings = [
    { label: "मंगला आरती", time: "6:00 AM", icon: Sun },
    { label: "दर्शन समय", time: "6:00 AM - 9:30 PM", icon: Clock },
    { label: "हवन पूजा", time: "आरती के अलावा दिन भर", icon: Calendar },
    { label: "नवरात्रि विशेष", time: "6:00 AM - 11:00 PM", icon: Moon },
  ];

  return (
    <section id="history" className="sacred-section">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">इतिहास एवं समय</span>
          <h2 className="font-hindi text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            मंदिर का इतिहास
          </h2>
          <p className="font-hindi text-muted-foreground text-lg">
            महाभारत काल से जुड़ी पौराणिक विरासत
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* History Cards */}
          <div className="space-y-6">
            <h3 className="font-hindi text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-3xl">📖</span> पौराणिक इतिहास
            </h3>
            {historyItems.map((item, index) => (
              <div
                key={item.title}
                className="temple-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-hindi font-semibold text-lg text-foreground mb-2">{item.title}</h4>
                    <p className="font-hindi text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timings */}
          <div>
            <h3 className="font-hindi text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="text-3xl">⏰</span> दर्शन एवं आरती समय
            </h3>
            <div className="bg-gradient-sacred rounded-2xl p-1">
              <div className="bg-card rounded-xl p-6 space-y-4">
                {timings.map((timing, index) => (
                  <div
                    key={timing.label}
                    className="flex items-center justify-between py-4 border-b border-border/50 last:border-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <timing.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-hindi font-medium text-foreground">{timing.label}</span>
                    </div>
                    <span className="font-semibold text-primary">{timing.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-6 bg-saffron-light rounded-2xl border border-primary/20">
              <h4 className="font-hindi font-semibold text-foreground mb-3 flex items-center gap-2">
                <span>🔥</span> विशेष सूचना
              </h4>
              <p className="font-hindi text-sm text-muted-foreground leading-relaxed">
                नवरात्रि और विशेष पर्वों पर मंदिर का समय बढ़ाया जाता है। भक्त अपनी मनोकामनाओं की पूर्ति के लिए यज्ञ, हवन या मंत्र जाप करवा सकते हैं।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
