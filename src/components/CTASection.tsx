import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleBookDemo = () => {
    // Open Calendly popup
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/co-mind/demo'
      });
    } else {
      // Fallback to contact page
      window.open('https://co-mind.ai/contact/', '_blank');
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
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
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-lg shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              onClick={() => window.open('https://app.co-mind.ai/register', '_blank')}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-primary-500 px-8 py-4 text-lg transition-all duration-300"
              onClick={handleBookDemo}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Demo
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No credit card required • Deploy in your infrastructure • 30-day trial
          </p>
        </div>
      </div>
    </section>
  );
}
