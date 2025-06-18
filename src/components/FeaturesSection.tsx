
import { MessageSquare, Shield, Server, Users, Database, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Open source LLM logos using the uploaded model icons
const openSourceLLMs = [
  { name: "DeepSeek R1", icon: "/lovable-uploads/8b88f045-0005-45ce-ae8e-cf8cef058e1a.png" },
  { name: "Llama 3.3", icon: "/lovable-uploads/d483298f-7036-43b9-b11b-d2d432cbc5ca.png" },
  { name: "Mistral Small", icon: "/lovable-uploads/d8a5e414-2f88-43bf-925c-7c1734b05a74.png" },
  { name: "Qwen 2.5", icon: "/lovable-uploads/ffcadfaa-1235-4c0b-ba02-8f1e70cf2874.png" },
  { name: "Nomic Embed", icon: "/lovable-uploads/8dab4a8a-b6dd-4f29-a1a6-5b9200dcb169.png" },
  { name: "Kokoro", icon: "/lovable-uploads/3dc16c41-d8a8-4757-81a7-67c556dc53a5.png" },
  { name: "Whisper Turbo", icon: "/lovable-uploads/c5a7c7b6-4a5a-4b53-b45c-2a8d8c8e8f8f.png" }
];

const solutionFeatures = [
  {
    icon: MessageSquare,
    title: "Private AI Chat",
    description: "Secure chat interface where you interact with AI models that never leave your infrastructure. Ask questions, get insights, and collaborate with AI assistants.",
    iconColor: "text-blue-400"
  },
  {
    icon: Server,
    title: "Your Infrastructure",
    description: "Deploy on your private cloud, data centers, or AI appliances. Complete control over where your AI runs and how your data is processed.",
    iconColor: "text-green-400"
  }
];

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-24 bg-gray-900/30 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure AI Chat with
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Open Source Models</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
            Chat with powerful AI models that run entirely on your infrastructure. Choose from any open source LLM and deploy on your private servers - no data ever leaves your environment.
          </p>
          
          {/* Supports Leading AI Models Section */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">Supports Leading AI Models</h3>
            <div className="overflow-x-auto">
              <div className="flex gap-6 justify-center min-w-max px-4">
                {openSourceLLMs.map((llm, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col items-center space-y-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 px-6 py-4 rounded-xl transition-all duration-500 hover:border-primary-500/50 hover:scale-105 flex-shrink-0
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <img src={llm.icon} alt={llm.name} className="w-8 h-8 object-contain" />
                    <span className="text-gray-300 text-sm font-medium text-center whitespace-nowrap">{llm.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Visual Solution Diagram */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="relative max-w-4xl mx-auto">
            {/* Chat Interface Visual */}
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 mb-8">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Private AI Chat</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-gray-700/50 rounded-lg p-3 max-w-xs">
                      <p className="text-gray-300 text-sm">How can I analyze our Q3 sales data?</p>
                    </div>
                    <div className="bg-primary-600/20 rounded-lg p-3 max-w-md ml-auto">
                      <p className="text-gray-300 text-sm">I'll analyze your sales data securely. Based on the uploaded documents...</p>
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="mx-8">
                  <div className="flex items-center text-primary-400">
                    <div className="h-0.5 w-12 bg-primary-400"></div>
                    <Zap className="h-6 w-6 ml-2" />
                  </div>
                </div>
                
                {/* Private Server Visual */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <Server className="h-8 w-8 text-green-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Your Private Server</h3>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4 border border-green-400/30 mb-4">
                    <div className="flex items-center justify-center space-x-4">
                      <Shield className="h-12 w-12 text-green-400" />
                      <div>
                        <p className="text-green-400 font-semibold">100% Private</p>
                        <p className="text-gray-400 text-sm">Your infrastructure</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Open Source Models on Private Server */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 px-2 py-1 rounded text-xs">
                      <span>🦙</span>
                      <span className="text-gray-300">Llama</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 px-2 py-1 rounded text-xs">
                      <span>🌪️</span>
                      <span className="text-gray-300">Mistral</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 px-2 py-1 rounded text-xs">
                      <span>🦅</span>
                      <span className="text-gray-300">Falcon</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 px-2 py-1 rounded text-xs">
                      <span>💻</span>
                      <span className="text-gray-300">CodeLlama</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {solutionFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${0.6 + index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl mb-6">
                <feature.icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
