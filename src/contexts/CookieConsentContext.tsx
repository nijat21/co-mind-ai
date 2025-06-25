
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieConsentContextType {
  showBanner: boolean;
  acceptedCookies: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
  loadAnalyticsScripts: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

export const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const loadAnalyticsScripts = () => {
    // Google Analytics 4 example
    if (typeof window !== 'undefined') {
      // Load Google Analytics
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(gaScript);

      // Initialize GA
      const gaConfigScript = document.createElement('script');
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `;
      document.head.appendChild(gaConfigScript);

      // Set functional cookie to track analytics loading
      document.cookie = `analytics_loaded=true;expires=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()};path=/;SameSite=Lax;Secure`;
      
      console.log('Analytics scripts loaded');
    }
  };

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      // Show banner if no choice has been made
      setShowBanner(true);
    } else {
      const accepted = cookieConsent === 'accepted';
      setAcceptedCookies(accepted);
      
      // Load analytics scripts if cookies were previously accepted
      if (accepted) {
        loadAnalyticsScripts();
      }
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setAcceptedCookies(true);
    setShowBanner(false);
    
    // Load analytics scripts when cookies are accepted
    loadAnalyticsScripts();
    
    console.log('Cookies accepted - Analytics and functional cookies enabled');
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setAcceptedCookies(false);
    setShowBanner(false);
    console.log('Cookies declined - Only essential cookies enabled');
  };

  return (
    <CookieConsentContext.Provider value={{
      showBanner,
      acceptedCookies,
      acceptCookies,
      declineCookies,
      loadAnalyticsScripts
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
