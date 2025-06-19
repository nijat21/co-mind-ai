
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { VideoSection } from "@/components/VideoSection";
import { SecuritySection } from "@/components/SecuritySection";
import { DeploymentSection } from "@/components/DeploymentSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 relative">
      {/* Global background grid and glow effects */}
      <div className="fixed inset-0 grid-bg opacity-20"></div>
      <div className="fixed inset-0 hero-glow opacity-60"></div>
      
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <VideoSection />
      <SecuritySection />
      <DeploymentSection />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
