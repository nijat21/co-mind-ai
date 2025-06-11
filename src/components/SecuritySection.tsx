
import { Shield, Lock, Server, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function SecuritySection() {
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
    <section ref={sectionRef} id="security" className="py-24 bg-gray-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              AI peace of mind with
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> zero data leaks</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Unlike cloud-based AI tools, Co-mind ensures your sensitive data never leaves your network. Complete control, complete privacy.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Complete Data Sovereignty",
                  description: "Your data stays within your infrastructure. No external API calls, no data collection.",
                  iconColor: "text-blue-400"
                },
                {
                  icon: Lock,
                  title: "Self-Hosted Models",
                  description: "Latest AI models run entirely on your hardware. No dependency on external services.",
                  iconColor: "text-green-400"
                },
                {
                  icon: Server,
                  title: "On-Premise Deployment",
                  description: "Deploy on your data center, private cloud, or dedicated appliances.",
                  iconColor: "text-purple-400"
                },
                {
                  icon: Eye,
                  title: "No Shadow AI",
                  description: "Eliminate unauthorized AI usage with a controlled, enterprise-approved platform.",
                  iconColor: "text-red-400"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
                  style={{ transitionDelay: `${(index + 2) * 0.1}s` }}
                >
                  <div className="p-2 bg-gray-700/50 rounded-lg border border-gray-600/50">
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <div className="space-y-4">
                {[
                  { label: "Data Location", value: "Your Infrastructure", color: "text-green-400" },
                  { label: "External API Calls", value: "Zero", color: "text-red-400" },
                  { label: "Data Collection", value: "None", color: "text-red-400" },
                  { label: "Model Access", value: "Local Only", color: "text-green-400" }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-center justify-between p-4 bg-gray-800/60 rounded-lg border border-gray-700/30 hover:border-primary-500/30 transition-all duration-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ transitionDelay: `${(idx + 6) * 0.1}s` }}
                  >
                    <span className="text-gray-300">{item.label}</span>
                    <span className={`${item.color} font-semibold`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
