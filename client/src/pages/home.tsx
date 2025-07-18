import Navigation from "@/components/navigation";
import CurtainHero from "@/components/curtain-hero";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import AmphitheaterSection from "@/components/amphitheater-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-rich-black text-white">
      <Navigation />
      <CurtainHero />
      <ServicesSection />
      <AboutSection />
      <AmphitheaterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
