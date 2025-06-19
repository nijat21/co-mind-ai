
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyNotice = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Notice</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Your privacy is important to us. This privacy notice explains how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 space-y-8">
            
            <div className="text-center">
              <p className="text-gray-400 text-lg">
                Privacy Notice content will be provided soon. Please contact us at{" "}
                <a href="mailto:contact@nproxima.ai" className="text-primary-400 hover:text-primary-300">
                  contact@nproxima.ai
                </a>{" "}
                for any privacy-related questions.
              </p>
            </div>

            <div className="text-gray-300 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                <p>
                  nproxima UG (haftungsbeschränkt)<br />
                  Sudetenstrasse 32<br />
                  85622 Feldkirchen<br />
                  Deutschland
                </p>
                <p className="mt-3">
                  Email: <a href="mailto:contact@nproxima.ai" className="text-primary-400 hover:text-primary-300">contact@nproxima.ai</a><br />
                  Phone: +491738649000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyNotice;
