import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

const partners = [
  { name: "NVIDIA", logo: "/lovable-uploads/d6f17c4a-455b-43c0-a2e2-57989baef211.png" },
  { name: "Intel", logo: "/lovable-uploads/8b67e1b2-2852-4bd9-9a35-19ddb3116b8e.png" },
  { name: "Microsoft Founders Hub", logo: "/lovable-uploads/b5dfab8c-6b7c-49bf-81bc-9e836e953dd7.png" }
];

export function HeroSection() {
  const handleBookDemo = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/comind-ai-social/30min",
      });
    } else {
      // Fallback to contact page
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Hero Glow */}
      <div className="absolute inset-0 hero-glow"></div>

      {/* Sun Glow Effect - Upper Left */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-primary-400/20 via-primary-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-primary-900/50 border border-primary-700/50 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-primary-300">
                Enterprise-Grade Security
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Private AI Platform
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              for Enterprise
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Take control of AI with Co-mind's self-hosted platform. Keep your confidential data secure while unlocking enterprise-grade AI capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg"
              onClick={() =>
                window.open("https://app.co-mind.ai/register", "_blank")
              }
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
              onClick={handleBookDemo}
            >
              Book Demo
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-16">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Self-Hosted</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span>Deploy in Minutes</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-400 mb-8 tracking-wider uppercase">Our Partners and Advisors</h3>
            <div className="flex justify-center items-center gap-12 max-w-4xl mx-auto flex-wrap">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className="transition-all duration-300 transform"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-14 w-auto object-contain filter grayscale brightness-75 opacity-70"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
