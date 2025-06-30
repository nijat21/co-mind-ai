
import { useEffect, useRef, useState } from "react";

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        
        if (iframeRef.current) {
          if (entry.isIntersecting) {
            // Start playing when visible with sound
            iframeRef.current.src = "https://www.youtube.com/embed/xcCeJkorFf4?autoplay=1";
          } else {
            // Stop playing when not visible
            iframeRef.current.src = "https://www.youtube.com/embed/xcCeJkorFf4?autoplay=0";
          }
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See Co-mind in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how easy it is to deploy and manage your private AI infrastructure with Co-mind's enterprise platform.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
            <div className="aspect-video w-full">
              <iframe
                ref={iframeRef}
                src="https://www.youtube.com/embed/xcCeJkorFf4"
                title="Co-mind Product Demo"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
