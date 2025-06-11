
import { Brain, Database, Cog, Users, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Brain,
    title: "AI Assistants & Agents",
    description: "Deploy powerful AI assistants that understand your business context and automate complex workflows with intelligent agents.",
    iconColor: "text-blue-400"
  },
  {
    icon: Database,
    title: "Connect All Data",
    description: "Integrate structured and unstructured data from any source. Build knowledge bases that power informed AI decisions.",
    iconColor: "text-green-400"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Complete data sovereignty with on-premise deployment. No data leaves your network, ensuring compliance and privacy.",
    iconColor: "text-red-400"
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Automate repetitive tasks with AI agents that handle data analysis, scheduling, and intelligent process orchestration.",
    iconColor: "text-purple-400"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share knowledge seamlessly across teams with centralized AI-powered insights and collaborative workspaces.",
    iconColor: "text-yellow-400"
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Turnkey solution ready out-of-the-box. Deploy on any hardware from workstations to enterprise data centers.",
    iconColor: "text-orange-400"
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
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> AI transformation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Co-mind provides a complete AI platform that puts your enterprise in control of artificial intelligence.
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
