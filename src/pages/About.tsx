
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
    name: "Daniel Barros",
    role: "Full Stack Developer",
    image: "/api/placeholder/200/200"
  }
];

const advisors = [
  {
    name: "Rene Bohnsack",
    role: "Co-founder & Strategic Advisor",
    image: "/api/placeholder/200/200"
  },
  {
    name: "Günter Fuhrmeister",
    role: "Co-founder & Strategic Advisor",
    image: "/api/placeholder/200/200"
  }
];

const About = () => {
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isAdvisorsVisible, setIsAdvisorsVisible] = useState(false);
  const teamSectionRef = useRef<HTMLElement>(null);
  const advisorsSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === teamSectionRef.current) {
            setIsTeamVisible(true);
          } else if (entry.target === advisorsSectionRef.current) {
            setIsAdvisorsVisible(true);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (teamSectionRef.current) {
      observer.observe(teamSectionRef.current);
    }
    if (advisorsSectionRef.current) {
      observer.observe(advisorsSectionRef.current);
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
            Meet Our
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Team</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team, spanning years of expertise, is united by a shared vision to deliver secure, private AI solutions for enterprises.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamSectionRef} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-primary-500/25
                  ${isTeamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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

      {/* Advisors Section */}
      <section ref={advisorsSectionRef} className="py-24 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isAdvisorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advisors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-primary-500/25
                  ${isAdvisorsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-accent-500/30 to-primary-500/30 rounded-full border-2 border-accent-500/50 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-300">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{advisor.name}</h3>
                  <p className="text-accent-400 font-medium">{advisor.role}</p>
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
