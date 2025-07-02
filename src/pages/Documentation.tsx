
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Documentation = () => {
  const navigate = useNavigate();

  const videos = [
    {
      id: "getting-started",
      title: "Getting Started with Co-mind",
      description: "Learn the basics of setting up and using Co-mind for your organization.",
      thumbnail: "/lovable-uploads/518ea543-352e-42e7-bd29-e119990cff15.png",
      duration: "5:24"
    },
    {
      id: "organization-setup",
      title: "Setting Up Your Organization",
      description: "Create your organization, add teammates, and manage access controls.",
      thumbnail: "/lovable-uploads/66087509-cc2d-45b7-8ca7-855e6028ed2b.png",
      duration: "7:15"
    },
    {
      id: "knowledge-bases",
      title: "Building Knowledge Bases",
      description: "Upload documents and create searchable knowledge bases for your AI assistants.",
      thumbnail: "/lovable-uploads/8b67e1b2-2852-4bd9-9a35-19ddb3116b8e.png",
      duration: "6:42"
    },
    {
      id: "ai-models",
      title: "Configuring AI Models",
      description: "Set up and deploy both open-source and closed AI models like GPTs.",
      thumbnail: "/lovable-uploads/91cb03fe-b2a1-4358-8d91-b006b14f0815.png",
      duration: "8:30"
    }
  ];

  const handleBookDemo = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/comind-ai-social/30min",
      });
    } else {
      // Fallback to contact page
      navigate("/contact");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn how to get the most out of Co-mind with our comprehensive video tutorials
            </p>
          </div>
        </section>

        {/* Video Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer group"
                >
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary-500 rounded-full p-4">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-400">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-gray-300 mb-8">
              Our support team is here to help you succeed with Co-mind
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={handleBookDemo}
                className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Book Demo
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
