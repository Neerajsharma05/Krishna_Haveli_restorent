import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import TrustBar from "@/components/TrustBar.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import PopularDishes from "@/components/PopularDishes.jsx";
import WhyChooseUs from "@/components/WhyChooseUs.jsx";
import Reviews from "@/components/Reviews.jsx";
import Gallery from "@/components/Gallery.jsx";
import LocationSection from "@/components/LocationSection.jsx";
import FinalCTA from "@/components/FinalCTA.jsx";
import Footer from "@/components/Footer.jsx";
import MobileActionBar from "@/components/MobileActionBar.jsx";

const Index = () => {
  return (
    <div className="min-h-screen pb-16 md:pb-0">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <PopularDishes />
      <WhyChooseUs />
      <Reviews />
      <Gallery />
      <LocationSection />
      <FinalCTA />
      <Footer />
      <MobileActionBar />
    </div>
  );
};

export default Index;
