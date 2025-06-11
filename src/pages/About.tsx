
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Levent Akyil",
    role: "Co-founder",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Ralph de Wargny",
    role: "Co-founder",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Rene Bohnsack",
    role: "Co-founder & Strategic Advisor",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Daniel Barros",
    role: "Full Stack Developer",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Günter Fuhrmeister",
    role: "Co-founder & Strategic Advisor",
    image: "/api/placeholder/200/200"
  }
];

const About = () => {
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
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Co-mind</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team, spanning years of expertise, is united by a shared vision to deliver secure, private AI solutions for enterprises.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We are here to deliver Co-mind, an integrated generative AI solution that stands for its capabilities and for its commitment to privacy! With each founder bringing years of experience, we bring you a product that truly resonates with customers.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Customer obsession isn't just a buzzword; our guiding principle is to strive to understand and meet the evolving needs of our customers in a world where private and secure Generative AI solutions are required.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By prioritizing transparency, innovation, and customer trust, we are building Co-mind, an AI-in-a-box product that becomes the go-to choice for small- and medium-sized businesses. Every step of development reflects our unwavering commitment to delivering a superior, private AI experience tailored to our customers' expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={sectionRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">
              Experienced professionals dedicated to revolutionizing enterprise AI
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-primary-500/25
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-full border-2 border-primary-500/50 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-primary-400 font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
