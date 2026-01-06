import { useState } from "react";
import deityImage from "@/assets/maa-baglamukhi.jpg";
import heroImage from "@/assets/temple-hero.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using available images and some placeholders
  const galleryImages = [
    { src: deityImage, caption: "माँ बगलामुखी दिव्य स्वरूप" },
    { src: heroImage, caption: "मंदिर का दिव्य दृश्य" },
    { src: "src/assets/maa-baglamukhi_1.jpg"},
    { src: "src/assets/maa-baglamukhi_2.jpg",},
    { src: "src/assets/maa-baglamukhi_3.jpg",},
    { src: "src/assets/maa-baglamukhi_4.jpg",},
    { src: "src/assets/maa-baglamukhi_5.jpg",},
    { src: "src/assets/maa-baglamukhi_6.jpg",},
    { src: "src/assets/maa-baglamukhi_7.jpg",},
    { src: "src/assets/maa-baglamukhi_8.jpg",},
    { src: "src/assets/maa-baglamukhi_9.jpg",},
    { src: "src/assets/maa-baglamukhi_10.jpg",},
    { src: "src/assets/maa-baglamukhi_11.jpg",},
    { src: "src/assets/maa-baglamukhi_12.jpg",},
    { src: "src/assets/maa-baglamukhi_13.jpg",},
  ];

  return (
    <section id="gallery" className="sacred-section bg-gradient-divine">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">गैलरी</span>
          <h2 className="font-hindi text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            📸 मंदिर गैलरी
          </h2>
          <p className="font-hindi text-muted-foreground text-lg">
            माँ बगलामुखी की दिव्य तस्वीरें और मंदिर के खूबसूरत दृश्य
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer temple-card p-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-hindi text-sm text-primary-foreground font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <button
                className="absolute -top-4 -right-4 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
