
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
