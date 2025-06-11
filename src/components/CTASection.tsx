
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to transform your enterprise with
          <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> secure AI?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join leading enterprises who trust Co-mind for their AI transformation. Deploy in minutes, not months.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg"
            onClick={() => window.open('https://app.co-mind.ai/register', '_blank')}
          >
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-700 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg"
            onClick={() => window.open('https://co-mind.ai/contact/', '_blank')}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book Demo
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          No credit card required • Deploy in your infrastructure • 30-day trial
        </p>
      </div>
    </section>
  );
}
