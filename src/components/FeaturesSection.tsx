
import { MessageSquare, FileText, Database, Bot, Shield, Server } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Interface",
    description: "Intuitive chat interface to interact with your private AI models. Ask questions, get insights, and work with AI assistants securely.",
    iconColor: "text-blue-400"
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Upload and attach documents directly to your conversations. Your AI can analyze, summarize, and extract insights from your files.",
    iconColor: "text-green-400"
  },
  {
    icon: Database,
    title: "Knowledge Bases",
    description: "Build comprehensive knowledge bases from your data. Create searchable repositories that power intelligent AI responses.",
    iconColor: "text-purple-400"
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Deploy specialized AI agents for specific tasks and workflows. Automate processes while maintaining full control over your data.",
    iconColor: "text-orange-400"
  },
  {
    icon: Shield,
    title: "Private & Secure",
    description: "Everything runs on your infrastructure. No data leaves your environment, ensuring complete privacy and compliance.",
    iconColor: "text-red-400"
  },
  {
    icon: Server,
    title: "Any Open Source LLM",
    description: "Choose from any open source language model. Deploy on private cloud, data centers, or AI appliances - your choice.",
    iconColor: "text-yellow-400"
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
            Everything you need for
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> private AI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Complete AI platform that runs entirely on your infrastructure. Chat with AI, process documents, and deploy agents - all while keeping your data private.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 hover:border-primary-500/50 p-6 rounded-xl hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-primary-500/25
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ 
                transitionDelay: `${index * 0.1}s`,
                background: 'linear-gradient(135deg, rgba(31, 42, 68, 0.8) 0%, rgba(17, 24, 39, 0.9) 100%)'
              }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-700/50 rounded-lg mr-4 border border-gray-600/50">
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
