
import { Shield, Lock, Server, Eye } from "lucide-react";

export function SecuritySection() {
  return (
    <section id="security" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
                  description: "Your data stays within your infrastructure. No external API calls, no data collection."
                },
                {
                  icon: Lock,
                  title: "Self-Hosted Models",
                  description: "Latest AI models run entirely on your hardware. No dependency on external services."
                },
                {
                  icon: Server,
                  title: "On-Premise Deployment",
                  description: "Deploy on your data center, private cloud, or dedicated appliances."
                },
                {
                  icon: Eye,
                  title: "No Shadow AI",
                  description: "Eliminate unauthorized AI usage with a controlled, enterprise-approved platform."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-primary-500/20 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-500/30">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-300">Data Location</span>
                  <span className="text-green-400 font-semibold">Your Infrastructure</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-300">External API Calls</span>
                  <span className="text-red-400 font-semibold">Zero</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-300">Data Collection</span>
                  <span className="text-red-400 font-semibold">None</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-lg">
                  <span className="text-gray-300">Model Access</span>
                  <span className="text-green-400 font-semibold">Local Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
