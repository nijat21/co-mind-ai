
import React, { createContext, useContext, useState, useEffect } from 'react';

interface CookieConsentContextType {
  showBanner: boolean;
  acceptedCookies: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
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

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === null) {
      // Show banner if no choice has been made
      setShowBanner(true);
    } else {
      setAcceptedCookies(cookieConsent === 'accepted');
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setAcceptedCookies(true);
    setShowBanner(false);
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
      declineCookies
    }}>
      {children}
    </CookieConsentContext.Provider>
  );
};
