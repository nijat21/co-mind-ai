
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll to section
      window.location.href = `/#${sectionId}`;
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logos/logo.png"
              alt="Co-mind Logo"
              className="h-8 w-8 brightness-0 saturate-100 invert-[0.4] sepia-[1] hue-rotate-[200deg] brightness-[1.2]"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(40%) sepia(100%) saturate(500%) hue-rotate(200deg) brightness(120%)",
              }}
            />
            <span className="text-xl font-bold text-white">Co-mind</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleSectionClick("features")}
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive("/") ? "text-white" : ""
              }`}
            >
              Features
            </button>
            <button
              onClick={() => handleSectionClick("privacy")}
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive("/") ? "text-white" : ""
              }`}
            >
              Privacy
            </button>
            <button
              onClick={() => handleSectionClick("deployment")}
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive("/") ? "text-white" : ""
              }`}
            >
              Deployment
            </button>
            <Link
              to="/about"
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive("/about")
                  ? "text-white border-b border-primary-400"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-gray-300 hover:text-white transition-colors ${
                isActive("/contact")
                  ? "text-white border-b border-primary-400"
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-white"
              onClick={() => window.open("https://app.co-mind.ai/login", "_blank")}
            >
              Sign In
            </Button>
            <Button
              className="bg-primary-500 hover:bg-primary-600 text-white"
              onClick={() =>
                window.open("https://app.co-mind.ai/register", "_blank")
              }
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              <button
                onClick={() => handleSectionClick("features")}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                Features
              </button>
              <button
                onClick={() => handleSectionClick("privacy")}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                Privacy
              </button>
              <button
                onClick={() => handleSectionClick("deployment")}
                className="block px-3 py-2 text-gray-300 hover:text-white w-full text-left"
              >
                Deployment
              </button>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white"
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button
                  variant="ghost"
                  className="justify-start text-gray-300 hover:text-white"
                  onClick={() => window.open("https://app.co-mind.ai/login", "_blank")}
                >
                  Sign In
                </Button>
                <Button
                  className="justify-start bg-primary-500 hover:bg-primary-600 text-white"
                  onClick={() =>
                    window.open("https://app.co-mind.ai/register", "_blank")
                  }
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

