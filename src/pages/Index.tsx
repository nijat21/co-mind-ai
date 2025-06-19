
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
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <div className="bg-gray-800">
        <VideoSection />
        <SecuritySection />
      </div>
      <DeploymentSection />
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600">
        <TestimonialSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
