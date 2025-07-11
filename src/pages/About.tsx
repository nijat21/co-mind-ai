import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import SvgWrapper, { SvgId } from "@/components/General/SvgWrapper/SvgWrapper";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  about: string;
  linkedinUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Levent Akyil",
    role: "Co-founder | CTO",
    image: "../../public/images/team/Levent.jpg",
    about:
      "Ex Intel, Intel Germany SW Leader, Senior Director of AI SW Libraries. Expert in computing, software architecture and development.",
    linkedinUrl: "https://www.linkedin.com/in/leventakyil/",
  },
  {
    name: "Ralph de Wargny",
    role: "Co-founder | COO",
    image: "../../public/images/team/Ralph.jpg",
    about:
      "Ex Intel, Founder & Director of the global AI startup program Intel Liftoff. Wine entrepreneur.",
    linkedinUrl: "https://www.linkedin.com/in/ralphdw/",
  },
  {
    name: "Daniel Barros",
    role: "Software Engineer",
    image: "../../public/images/team/Daniel.jpg",
    about:
      "Daniel is a seasoned fullstack software engineer focused on AI applications, chatbots, and client-specific automation. \
    Previously, he built e-commerce platforms, payment systems, API integrations and complex backend systems.",
    linkedinUrl: "https://www.linkedin.com/in/luisdanielbarros/",
  },
  {
    name: "Samir Nasibli",
    role: "AI Software Engineer",
    image: "/lovable-uploads/ba68b790-af17-40c4-8121-8261e6b270c0.png",
    about: "Samir is a dedicated AI Frameworks Engineer, specializing in machine learning and AI framework development. Previously, he served as a Machine Learning Engineer, contributing to advanced data-driven solutions.",
    linkedinUrl: "https://www.linkedin.com/in/samir-nasibli/",
  },
  {
    name: "Nijat Ismayilov",
    role: "Software Engineer | GTM Execution",
    image: "../../public/images/team/Nijat.jpg",
    about:
      "Nijat is a well-rounded generalist with international experience across diverse industries and roles. He is also a competent software \
      engineer working on web applications and early-stage product development.",
    linkedinUrl: "https://www.linkedin.com/in/nijat-ismayilov/",
  },
];

const advisors: TeamMember[] = [
  {
    name: "Rene Bohnsack",
    role: "Strategic Advisor",
    image: "../../public/images/team/Rene.jpg",
    about:
      "Serial entrepreneur.Professor for business model innovation, digital transformation and AI at Católica Lisbon School of Business & Economics \
    and at Univ. St-Gallen, Switzerland.",
    linkedinUrl: "https://www.linkedin.com/in/renebohnsack/",
  },
  {
    name: "Günter Fuhrmeister",
    role: "Strategic Advisor",
    image: "../../public/images/team/Gunter.jpg",
    about:
      "Serial entrepreneur. Formerly CEO at SIGS Datacom (acquired by Heyse Medien). Expert in B2B technology sales and marketing.",
    linkedinUrl: "https://www.linkedin.com/in/g%C3%BCnter-fuhrmeister-bb9684/",
  },
];

const About = () => {
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isAdvisorsVisible, setIsAdvisorsVisible] = useState(false);
  const teamSectionRef = useRef<HTMLElement>(null);
  const advisorsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const teamObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTeamVisible(true);
          // Start advisors animation after the last team member starts animating
          setTimeout(() => {
            setIsAdvisorsVisible(true);
          }, teamMembers.length * 100);
        }
      },
      { threshold: 0.2 }
    );

    if (teamSectionRef.current) {
      teamObserver.observe(teamSectionRef.current);
    }

    return () => teamObserver.disconnect();
  }, []);

  const renderMembers = (
    members: TeamMember[],
    isVisible: boolean,
    startDelay: number = 0
  ) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm 
              rounded-2xl p-6 border border-gray-700/50 shadow-lg
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${startDelay + index * 0.1}s` }}
            
          >
            <div className="text-left">
              <div className="w-32 h-32  mb-4 border-2 flex items-center justify-center rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-xl w-full h-full"
                />
              </div>
              <div className="flex gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {member.name}
                </h3>
                <SvgWrapper
                  id={SvgId.Linkedin}
                  fill="white"
                  className="cursor-pointer"
                  style={{ width: "30px", height: "30px" }}
                  onClick={() => {
              window.open(member.linkedinUrl, "_blank");
            }}
                />
              </div>
              <p className="text-primary-400 font-medium mb-2">{member.role}</p>
              <p className="text-neutral-200 text-sm">{member.about}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              {" "}
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team, spanning years of expertise, is united by a shared vision
            to deliver secure, private AI solutions for enterprises.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamSectionRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderMembers(teamMembers, isTeamVisible)}
          <div ref={advisorsSectionRef} className="py-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">
              Advisors
            </h2>
            {renderMembers(advisors, isAdvisorsVisible, 0.5)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
