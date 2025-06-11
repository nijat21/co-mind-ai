import { Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/334588fd-a145-4826-a0df-6765f7dd80bc.png" 
                alt="Co-mind Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Co-mind</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Secure AI platform for enterprise. Deploy private AI assistants and agents on your infrastructure with complete data control.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#deployment" className="hover:text-white transition-colors">Deployment</a></li>
              <li><a href="https://app.co-mind.ai/register" target="_blank" className="hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="https://co-mind.ai/contact/" target="_blank" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://co-mind.ai" target="_blank" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Co-mind. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            Secure AI • Private Deployment • Enterprise Ready
          </p>
        </div>
      </div>
    </footer>
  );
}
