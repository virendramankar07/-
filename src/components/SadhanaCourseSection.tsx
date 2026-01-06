import { BookOpen, Shield, Flame, Eye, Heart, Star, Phone, CheckCircle, Users, Award, Clock, Gift } from "lucide-react";
import { Button } from "./ui/button";

const courseFeatures = [
  {
    number: "1",
    title: "माँ बगलामुखी देवी का रहस्य",
    description: "बगलामुखी देवी की प्राप्ति का मार्ग, मंत्र का वैज्ञानिक रहस्य, मंत्र जागृति फायदे और नुकसान"
  },
  {
    number: "2",
    title: "मंत्र जप की पूर्ण पद्धति",
    description: "जप की सही गति, स्वर, नियम, माला कैसे घुमाएँ, जप के प्रकार – मंद, मध्यम, तीव्र"
  },
  {
    number: "3",
    title: "संकल्प लेकर साधना का शुभारंभ",
    description: "नित्य पूजा उपासना विधान, क्रमदीक्षा से निरन्तर आत्मीय उन्नति, मंत्र सिद्धि प्राप्ति"
  },
  {
    number: "4",
    title: "साधक की सुरक्षा प्रक्रिया",
    description: "श्रींहरिद्रा गणपति साधना, 64 योगिनियों की कृपा, श्रींबटुक मंत्र सुरक्षा घेरा"
  },
  {
    number: "5",
    title: "पूजा कक्ष (Sadhana Room Setup)",
    description: "पीताम्बरा देवी के अनुकूल दिशा, यंत्र, विग्रह, आसन, दीप, धूप, साधक का वस्त्र"
  },
  {
    number: "6",
    title: "बीज मंत्र एवं उसकी शक्ति",
    description: "बीज मंत्र का रहस्य, मंत्र कार्यप्रणाली, धर्म अर्थ काम और मोक्ष लाभ"
  },
  {
    number: "7",
    title: "साधना के संकेत",
    description: "ऊर्जा के अनुभव, स्वप्न संकेत का भावार्थ, बाधाएँ व समाधान"
  },
  {
    number: "8",
    title: "अष्टांग योग से साधना विधान",
    description: "यम, नियम, आसन, प्राणायाम, प्रत्याहार, धारणा, ध्यान और समाधि रहस्य"
  },
  {
    number: "9",
    title: "इन्द्रियों से मंत्र जागृति",
    description: "त्राटक ध्यान, अनहद नाद, खेचरी मुद्रा, प्राणायाम, मूलबंध, देवी ध्यान"
  },
  {
    number: "10",
    title: "दीक्षा पूर्व परामर्श",
    description: "भाग्य कुण्डली, प्रारब्ध दोष, ग्रह दोष, वास्तु दोष, पितृदोष निवारण"
  }
];

const coursePricing = [
  { duration: "9 दिन", mantrajap: "11,000", havan: "₹1,100", dakshina: "₹6,000" },
  { duration: "11 दिन", mantrajap: "21,000", havan: "₹2,100", dakshina: "₹11,000" },
  { duration: "21 दिन", mantrajap: "36,000", havan: "₹3,600", dakshina: "₹16,000" },
  { duration: "21 दिन (विशेष)", mantrajap: "41,000", havan: "₹4,100", dakshina: "₹21,000" },
  { duration: "41 दिन", mantrajap: "1,25,000", havan: "₹12,500", dakshina: "₹36,000" }
];

const eligiblePeople = [
  "शत्रु, बाधा, कोर्ट केस से परेशान",
  "नजर-बाधा व तांत्रिक समस्या",
  "स्वास्थ्य व मानसिक समस्या",
  "व्यापार/नौकरी में रुकावट",
  "कर्ज व आर्थिक समस्या",
  "पारिवारिक कलह व रिश्तों में खराबी",
  "पितृदोष व कालसर्प दोष",
  "शनि साढ़े साती से परेशान",
  "आध्यात्मिक उन्नति इच्छुक",
  "कुण्डलिनी जागरण साधक"
];

const courseRules = [
  "साधना पूर्व प्रशिक्षण Google Meet के माध्यम से मिलेगा",
  "जीवन में हर जगह देवी को उच्च स्थान देना होगा",
  "मार्गदर्शन वीडियो सार्वजनिक होंगे",
  "एक बार संकल्प लेने के बाद बीच में साधना न छोड़ें",
  "माँ बगलामुखी पर श्रद्धा व विश्वास आवश्यक",
  "गुरु मार्गदर्शन में ही साधना करें"
];

const offerings = [
  { icon: Shield, text: "ब्रम्हास्त्र सिद्ध अभिमंत्रित रक्षा कवच" },
  { icon: Star, text: "माँ बगलामुखी मूर्ति विग्रह" },
  { icon: Flame, text: "श्रीं बगलामुखी यंत्र" },
  { icon: Heart, text: "रुद्राक्ष माला" },
  { icon: Award, text: "नवग्रहों के सिद्ध रत्न" }
];

const SadhanaCourseSection = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919806284177?text=नमस्कार, मुझे माँ बगलामुखी ऑनलाइन साधना कोर्स के बारे में जानकारी चाहिए।", "_blank");
  };

  const handleCall = () => {
    window.open("tel:+919806284177", "_blank");
  };

  return (
    <section id="sadhana-course" className="py-20 bg-gradient-to-b from-background via-saffron/5 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-saffron/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-gold/20 via-saffron/20 to-gold/20 px-6 py-2 rounded-full mb-4">
            <span className="text-gold font-semibold">🌼 ऑनलाइन साधना कोर्स</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            माँ बगलामुखी ऑनलाइन साधना कोर्स
          </h2>
          <p className="font-hindi text-xl text-saffron font-semibold mb-2">
            सनातन धर्म प्रचार प्रसार पीताम्बरा संस्थान (म.प्र)
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold via-saffron to-gold mx-auto rounded-full" />
        </div>

        {/* Course Features Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-gold" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              🔱 कोर्स विशेषताएँ — क्या सीखेंगे?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courseFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-card/50 backdrop-blur-sm border border-gold/20 rounded-xl p-5 hover:border-gold/40 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold to-saffron rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {feature.number}
                  </div>
                  <div>
                    <h4 className="font-hindi font-bold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {feature.title}
                    </h4>
                    <p className="font-hindi text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Table */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Clock className="w-6 h-6 text-gold" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              कोर्स अवधि एवं दक्षिणा
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm border border-gold/30 rounded-2xl overflow-hidden shadow-xl">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gradient-to-r from-maroon to-maroon/90 text-white">
                <div className="p-4 font-hindi font-bold text-center border-r border-white/20">अवधि</div>
                <div className="p-4 font-hindi font-bold text-center border-r border-white/20">मंत्र जाप</div>
                <div className="p-4 font-hindi font-bold text-center border-r border-white/20">हवन दशांश</div>
                <div className="p-4 font-hindi font-bold text-center">दक्षिणा</div>
              </div>
              
              {/* Table Rows */}
              {coursePricing.map((price, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-saffron/5' : 'bg-transparent'} hover:bg-gold/10 transition-colors`}
                >
                  <div className="p-4 font-hindi text-center border-r border-gold/10 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-gold" />
                    <span className="font-semibold text-foreground">{price.duration}</span>
                  </div>
                  <div className="p-4 font-hindi text-center border-r border-gold/10 text-muted-foreground">{price.mantrajap}</div>
                  <div className="p-4 font-hindi text-center border-r border-gold/10 text-muted-foreground">{price.havan}</div>
                  <div className="p-4 font-hindi text-center font-bold text-gold">{price.dakshina}</div>
                </div>
              ))}
            </div>
            
            <p className="text-center mt-4 font-hindi text-sm text-muted-foreground">
              न्यौछावर राशि (कुण्डली परामर्श): <span className="text-gold font-bold">₹1,100</span>
            </p>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Who Can Join */}
          <div className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-saffron" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                🕉 कौन लोग जुड़ सकते हैं?
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {eligiblePeople.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="font-hindi text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Course Rules */}
          <div className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-saffron" />
              <h3 className="font-heading text-xl font-bold text-foreground">
                📋 कोर्स के नियम
              </h3>
            </div>
            <div className="space-y-3">
              {courseRules.map((rule, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-gold text-sm font-bold">{index + 1}</span>
                  </div>
                  <span className="font-hindi text-muted-foreground">{rule}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-maroon/10 border border-maroon/30 rounded-xl">
              <p className="font-hindi text-sm text-maroon">
                ⚠️ गलत विधि, अधूरी जानकारी या बिना गुरु के की गई साधना हानिकारक हो सकती है।
              </p>
            </div>
          </div>
        </div>

        {/* What You'll Receive */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Gift className="w-6 h-6 text-gold" />
            <h3 className="font-heading text-2xl font-bold text-foreground">
              बगलामुखी धाम से प्राप्ति
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {offerings.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gradient-to-r from-gold/10 to-saffron/10 border border-gold/30 rounded-full px-6 py-3"
              >
                <item.icon className="w-5 h-5 text-gold" />
                <span className="font-hindi text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Guru Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-maroon/10 via-gold/5 to-saffron/10 border border-gold/30 rounded-2xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-gold to-saffron rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Eye className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">
              गुरुदेव आचार्य रविन्द्र मानकर जी
            </h3>
            <p className="font-hindi text-gold font-semibold mb-4">
              परम पूज्य बालयोगी आचार्य
            </p>
            
            <div className="space-y-2 font-hindi text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
              <p>माँ बगलामुखी एवं दस महाविद्या के सिद्ध साधक</p>
              <p>सवा लाख बीज मंत्र के 36 पुरश्चरणकर्ता</p>
              <p>माता पीताम्बरा के वरदपुत्र, दो दिव्य संतों से शक्तिपात दीक्षित</p>
              <p className="text-xs text-muted-foreground/70 mt-4">
                (आदिगुरू शंकराचार्य महाराज द्वारा प्रदत्त गिरी गोस्वामी संप्रदाय से जुड़ी है हमारी परम्परा)
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-6">
            📞 साधना कोर्स जॉइन करने हेतु संपर्क करें
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp करें
            </Button>
            
            <Button 
              onClick={handleCall}
              variant="sacred"
              className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-6 h-6 mr-2" />
              📲 9806284177
            </Button>
          </div>
          
          <p className="font-hindi text-sm text-muted-foreground mt-6">
            मां बगलामुखी मन्दिर सावंगी — तह. आठनेर, जिला बैतूल (म.प्र)
          </p>
        </div>
      </div>
    </section>
  );
};

export default SadhanaCourseSection;
