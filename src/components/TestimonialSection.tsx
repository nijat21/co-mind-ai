
import { Quote } from "lucide-react";

export function TestimonialSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 md:p-12 border border-primary-500/20">
          <Quote className="h-12 w-12 text-primary-400 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
            "Co-mind revolutionizes how we interact with data and documents. A private GPT to multiply ERA's productivity, with advanced collaboration and knowledge-sharing across our network using AI assistants and agents deployed with a secure and reliable turnkey solution."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div className="text-left">
              <p className="text-white font-semibold">João Costa</p>
              <p className="text-gray-400">Country Manager, ERA Group Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
