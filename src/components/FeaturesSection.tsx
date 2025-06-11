
import { Brain, Database, Cog, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Assistants & Agents",
    description: "Deploy powerful AI assistants that understand your business context and automate complex workflows with intelligent agents."
  },
  {
    icon: Database,
    title: "Connect All Data",
    description: "Integrate structured and unstructured data from any source. Build knowledge bases that power informed AI decisions."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Complete data sovereignty with on-premise deployment. No data leaves your network, ensuring compliance and privacy."
  },
  {
    icon: Cog,
    title: "Workflow Automation",
    description: "Automate repetitive tasks with AI agents that handle data analysis, scheduling, and intelligent process orchestration."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share knowledge seamlessly across teams with centralized AI-powered insights and collaborative workspaces."
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Turnkey solution ready out-of-the-box. Deploy on any hardware from workstations to enterprise data centers."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
              className="feature-card p-6 rounded-xl backdrop-blur-sm hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary-500/20 rounded-lg mr-4">
                  <feature.icon className="h-6 w-6 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
