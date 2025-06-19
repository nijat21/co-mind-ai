
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function TestimonialSection() {
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

  return (
    <section ref={sectionRef} className="py-24 bg-gray-950/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Quote className="h-12 w-12 text-primary-400 mx-auto mb-6" />
          <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed">
            "Co-mind revolutionizes how we interact with data and documents. A private GPT to multiply ERA's productivity, with advanced collaboration and knowledge-sharing across our network using AI assistants and agents deployed with a secure and reliable turnkey solution."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <img 
              src="/lovable-uploads/4a160400-5104-41c2-a9da-c46bdaddc38a.png" 
              alt="João Costa"
              className="w-12 h-12 rounded-full object-cover border border-primary-500/50"
            />
            <div className="text-left">
              <p className="text-white font-medium">João Costa</p>
              <p className="text-gray-400 text-sm">Country Manager, ERA Group Portugal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
