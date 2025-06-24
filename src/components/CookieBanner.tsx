
import React from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie, Shield, BarChart3 } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export const CookieBanner = () => {
  const { showBanner, acceptCookies, declineCookies } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700/50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-center gap-3 flex-shrink-0">
            <Cookie className="h-6 w-6 text-primary-400" />
            <h3 className="text-lg font-semibold text-white">Cookie Preferences</h3>
          </div>
          
          <div className="flex-1">
            <p className="text-gray-300 text-sm leading-relaxed">
              We use cookies to enhance your experience on our website. This includes essential cookies for functionality, 
              analytics cookies to understand how you use our site, and performance cookies to improve our services. 
              You can choose to accept all cookies or decline non-essential ones.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400">
              <div className="flex items-center gap-1">
                <Shield className="h-3 w-3" />
                <span>Essential cookies (always active)</span>
              </div>
              <div className="flex items-center gap-1">
                <BarChart3 className="h-3 w-3" />
                <span>Analytics & performance cookies</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={declineCookies}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500"
            >
              Decline Optional
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              Accept All Cookies
            </Button>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-700/50">
          <p className="text-xs text-gray-500">
            Learn more about our cookie usage in our{' '}
            <a href="/cookie-policy" className="text-primary-400 hover:text-primary-300 underline">
              Cookie Policy
            </a>
            {' '}and{' '}
            <a href="/privacy-notice" className="text-primary-400 hover:text-primary-300 underline">
              Privacy Notice
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
