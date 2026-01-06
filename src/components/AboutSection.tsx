import deityImage from "@/assets/maa-baglamukhi.jpg";

const AboutSection = () => {
  const features = [
    {
      title: "महाविद्या",
      description: "दस महाविद्याओं में से आठवीं माना जाता है",
      icon: "🔱",
    },
    {
      title: "स्तंभन शक्ति",
      description: "हानिकारक कार्यों को पंगु बनाने की शक्ति",
      icon: "⚡",
    },
    {
      title: "पीताम्बरा देवी",
      description: "पीला रंग प्रिय होने के कारण यह नाम",
      icon: "💛",
    },
    {
      title: "शत्रु विजय",
      description: "शत्रुओं पर विजय और बुरी शक्तियों से सुरक्षा",
      icon: "🏆",
    },
  ];

  return (
    <section className="sacred-section bg-gradient-divine">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">परिचय</span>
          <h2 className="font-hindi text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            माँ बगलामुखी देवी
          </h2>
          <p className="font-hindi text-muted-foreground text-lg">
            दस महाविद्याओं में से आठवीं महाविद्या - शक्ति, बुद्धि और विजय की देवी
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-sacred rounded-3xl blur-2xl opacity-20" />
              <img
                src={deityImage}
                alt="माँ बगलामुखी"
                className="relative w-72 md:w-80 rounded-2xl shadow-card border-2 border-gold/20"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:order-1">
            <p className="font-hindi text-foreground/90 text-base md:text-lg leading-relaxed mb-6">
              माँ बगलामुखी दस महाविद्याओं में से आठवीं महाविद्या हैं, जिन्हें शक्ति, बुद्धि और विजय की देवी माना जाता है। इन्हें पीताम्बरा या ब्रह्मास्त्र रूपिणी के नाम से भी जाना जाता है, और इन्हें शत्रुओं को वश में करने और सभी प्रकार की बाधाओं को दूर करने वाली देवी के रूप में पूजा जाता है।
            </p>
            <p className="font-hindi text-foreground/90 text-base md:text-lg leading-relaxed mb-8">
              देवी बगलामुखी का संबंध "स्तंभन" (स्तंभित करने या पंगु बनाने की शक्ति) से है, और उनकी पूजा अक्सर वाणी, मन और शत्रुओं पर नियंत्रण पाने के लिए की जाती है।
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="temple-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="font-hindi font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="font-hindi text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
