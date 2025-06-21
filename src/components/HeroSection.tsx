
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Lock, Brain, Server, Users } from "lucide-react";
import { useEffect, useState } from "react";

const partners = [
  { name: "NVIDIA", logo: "/lovable-uploads/d6f17c4a-455b-43c0-a2e2-57989baef211.png" },
  { name: "Intel", logo: "/lovable-uploads/8b67e1b2-2852-4bd9-9a35-19ddb3116b8e.png" },
  { name: "Microsoft Founders Hub", logo: "/lovable-uploads/b5dfab8c-6b7c-49bf-81bc-9e836e953dd7.png" }
];

const floatingIcons = [
  { icon: Brain, delay: 0, x: "10%", y: "20%" },
  { icon: Shield, delay: 0.5, x: "85%", y: "15%" },
  { icon: Server, delay: 1, x: "15%", y: "70%" },
  { icon: Users, delay: 1.5, x: "80%", y: "75%" },
  { icon: Lock, delay: 2, x: "5%", y: "45%" },
  { icon: Zap, delay: 2.5, x: "90%", y: "45%" },
];

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookDemo = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/comind-ai-social/30min",
      });
    } else {
      window.location.href = "/contact";
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>

      {/* Central AI Core Visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative transition-all duration-2000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          {/* Central AI Brain */}
          <div className="relative w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full backdrop-blur-sm border border-primary-400/30 flex items-center justify-center">
            <Brain className="w-16 h-16 text-primary-400 animate-pulse" />
            
            {/* Pulsing Rings */}
            <div className="absolute inset-0 rounded-full border border-primary-400/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full border border-accent-400/20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute inset-0 rounded-full border border-primary-400/10 animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Data Streams */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              const radius = 100;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-primary-400 rounded-full transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animationDelay: `${i * 0.2}s`,
                    animation: 'pulse 2s infinite'
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Security Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-1000 ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'} hero-float`}
          style={{
            left: item.x,
            top: item.y,
            transitionDelay: `${item.delay}s`,
            animationDelay: `${item.delay}s`
          }}
        >
          <div className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-lg flex items-center justify-center hover:border-primary-500/50 transition-colors">
            <item.icon className="w-6 h-6 text-gray-400" />
          </div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 bg-primary-900/50 border border-primary-700/50 rounded-full px-6 py-3 backdrop-blur-sm">
              <Shield className="h-5 w-5 text-primary-400" />
              <span className="text-primary-300 font-medium">
                Enterprise-Grade AI Security
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="block mb-2">Private</span>
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent animate-pulse">
              AI Platform
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-4">
              for Enterprise
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Deploy secure, self-hosted AI that keeps your confidential data private while unlocking 
            enterprise-grade capabilities. Complete control, zero compromise.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-10 py-5 text-lg font-semibold shadow-2xl shadow-primary-500/25 transform hover:scale-105 transition-all duration-200"
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
              className="border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-primary-500 px-10 py-5 text-lg font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
              onClick={handleBookDemo}
            >
              Watch Demo
            </Button>
          </div>

          {/* Security Features */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 mb-20">
            <div className="flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
              <Lock className="h-5 w-5 text-green-400" />
              <span className="font-medium">100% Private</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="font-medium">Self-Hosted</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="font-medium">Deploy in Minutes</span>
            </div>
          </div>

          {/* Partners */}
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-8 tracking-wider uppercase">
              Trusted by Industry Leaders
            </h3>
            <div className="flex justify-center items-center gap-16 max-w-4xl mx-auto flex-wrap">
              {partners.map((partner, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 transform hover:scale-110 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${2 + index * 0.2}s` }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-16 w-auto object-contain filter grayscale brightness-75 opacity-60 hover:opacity-90 transition-opacity duration-300"
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
