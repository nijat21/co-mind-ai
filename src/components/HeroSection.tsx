import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

const partners = [
  { name: "NVIDIA", logo: "/lovable-uploads/ffe1be4c-ce36-46e5-9889-158ad919a30a.png" },
  { name: "Intel", logo: "/lovable-uploads/e546445f-0181-44f2-b37b-3b37f2565b75.png" },
  { name: "Microsoft Founders Hub", logo: "/lovable-uploads/91cb03fe-b2a1-4358-8d91-b006b14f0815.png" }
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
      {/* Enhanced Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-40"></div>

      {/* Balanced Hero Glow */}
      <div className="absolute inset-0 hero-glow"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/20 via-primary-600/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-accent-400/25 to-transparent rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-primary-900/60 border border-primary-700/60 rounded-full px-6 py-3 shadow-2xl backdrop-blur-sm">
              <Shield className="h-5 w-5 text-primary-300" />
              <span className="text-sm font-medium text-primary-200">
                Enterprise-Grade Security
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            <span className="block">Private AI Platform</span>
            <span className="block bg-gradient-to-r from-primary-300 via-primary-400 to-accent-300 bg-clip-text text-transparent drop-shadow-xl text-5xl md:text-7xl lg:text-8xl">
              for Enterprise
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
            Take control of AI with Co-mind's self-hosted platform. Keep your confidential data secure while unlocking enterprise-grade AI capabilities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 text-xl font-semibold shadow-xl transform hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open("https://app.co-mind.ai/register", "_blank")
              }
            >
              Start Free Trial
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-600 text-gray-200 hover:bg-gray-800 hover:border-gray-500 px-10 py-5 text-xl font-semibold shadow-lg backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
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

          <div className="text-center mb-12">
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

          {/* Bottom Motto */}
          <div className="pt-8 border-t border-gray-800/50">
            <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-accent-300 via-primary-300 to-accent-400 bg-clip-text text-transparent">
              Be the Hero. Own Your AI
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
