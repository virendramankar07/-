import { useState } from "react";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using available images and some placeholders
  const galleryImages = [
    "/gallery/maa-baglamukhi_1.jpg",
    "/gallery/maa-baglamukhi_2.jpg",
    "/gallery/maa-baglamukhi_3.jpg",
    "/gallery/maa-baglamukhi_4.jpg", 
    "/gallery/maa-baglamukhi_5.jpg",
    "/gallery/maa-baglamukhi_6.jpg",
    "/gallery/maa-baglamukhi_7.jpg",
    "/gallery/maa-baglamukhi_8.jpg",
    "/gallery/maa-baglamukhi_9.jpg",
    "/gallery/maa-baglamukhi_10.jpg",
    "/gallery/maa-baglamukhi_11.jpg",
    "/gallery/maa-baglamukhi_12.jpg",
    "/gallery/maa-baglamukhi_13.jpg",
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
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
