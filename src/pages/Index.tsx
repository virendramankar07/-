import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HistorySection from "@/components/HistorySection";
import YantraSectiond   from "@/components/YantraSection";
import EventsCalendar from "@/components/EventsCalendar"; 
import PromotionalGallery from "@/components/PromotionalGallery";
import SadhanaCourseSection from "@/components/SadhanaCourseSection";
import LiveDarshan from "@/components/LiveDarshan";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import YantraSection from "@/components/YantraSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Marquee />
      <Hero />
      <AboutSection />
      <HistorySection />
      <YantraSection />
      <EventsCalendar />
      <PromotionalGallery />
      <SadhanaCourseSection />
      <LiveDarshan />
      <Gallery />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
