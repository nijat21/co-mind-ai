
import { Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();

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
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/lovable-uploads/0a06e271-99fd-49e1-b84d-2e3a166cbbc2.png"
                alt="Co-mind Logo"
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Co-mind</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Secure AI platform for enterprise. Deploy private AI assistants
              and agents on your infrastructure with complete data control.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => handleSectionClick("features")}
                  className="hover:text-white transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("privacy")}
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick("deployment")}
                  className="hover:text-white transition-colors"
                >
                  Deployment
                </button>
              </li>
              <li>
                <a
                  href="https://app.co-mind.ai/register"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <p className="text-gray-400 text-sm">
              © 2025 Co-mind. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              Secure AI • Private Deployment • Enterprise Ready
            </p>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500">
            <Link
              to="/legal-notice"
              className="hover:text-gray-300 transition-colors"
            >
              Legal Notice
            </Link>
            <Link
              to="/privacy-notice"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Notice
            </Link>
            <Link
              to="/cookie-policy"
              className="hover:text-gray-300 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
