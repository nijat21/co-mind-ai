
import { Monitor, Server, Cloud } from "lucide-react";

const deploymentOptions = [
  {
    icon: Monitor,
    title: "AI Appliances",
    description: "Small form factor solutions for specialized teams. Deploy on workstations, servers, or dedicated AI PCs.",
    features: ["Plug & Play Setup", "GPU Accelerated", "Team-Scale Deployment"]
  },
  {
    icon: Server,
    title: "Data Center",
    description: "Enterprise-scale deployment on your existing infrastructure. Supports all compute platforms.",
    features: ["High Availability", "Scalable Architecture", "Enterprise Integration"]
  },
  {
    icon: Cloud,
    title: "Private Cloud",
    description: "Managed deployment on trusted private cloud providers with complete isolation.",
    features: ["Managed Service", "Cloud Native", "Isolated Tenancy"]
  }
];

export function DeploymentSection() {
  return (
    <section id="deployment" className="py-24 bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deploy anywhere,
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> your way</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Co-mind adapts to your infrastructure. Choose the deployment model that fits your security requirements and scale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deploymentOptions.map((option, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="p-3 bg-primary-500/20 rounded-lg w-fit mb-4">
                  <option.icon className="h-8 w-8 text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{option.title}</h3>
                <p className="text-gray-400">{option.description}</p>
              </div>
              
              <ul className="space-y-2">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
