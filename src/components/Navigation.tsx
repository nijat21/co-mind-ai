
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/334588fd-a145-4826-a0df-6765f7dd80bc.png" 
              alt="Co-mind Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">Co-mind</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#security" className="text-gray-300 hover:text-white transition-colors">
              Security
            </a>
            <a href="#deployment" className="text-gray-300 hover:text-white transition-colors">
              Deployment
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
            <Button 
              className="bg-primary-500 hover:bg-primary-600 text-white"
              onClick={() => window.open('https://app.co-mind.ai/register', '_blank')}
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
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md">
              <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-white">
                Features
              </a>
              <a href="#security" className="block px-3 py-2 text-gray-300 hover:text-white">
                Security
              </a>
              <a href="#deployment" className="block px-3 py-2 text-gray-300 hover:text-white">
                Deployment
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-white">
                About
              </a>
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" className="justify-start text-gray-300 hover:text-white">
                  Sign In
                </Button>
                <Button 
                  className="justify-start bg-primary-500 hover:bg-primary-600 text-white"
                  onClick={() => window.open('https://app.co-mind.ai/register', '_blank')}
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
