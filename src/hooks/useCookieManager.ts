
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export const useCookieManager = () => {
  const { acceptedCookies } = useCookieConsent();

  const isClient = typeof window !== 'undefined';

  const setCookie = (name: string, value: string, days: number = 365) => {
    if (!isClient) {
      console.warn('setCookie called on server-side, skipping');
      return;
    }
    
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
  };

  const getCookie = (name: string): string | null => {
    if (!isClient) {
      console.warn('getCookie called on server-side, returning null');
      return null;
    }
    
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const deleteCookie = (name: string) => {
    if (!isClient) {
      console.warn('deleteCookie called on server-side, skipping');
      return;
    }
    
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax;Secure`;
  };

  const setAnalyticsCookie = (name: string, value: string, days?: number) => {
    if (!isClient) {
      console.warn('setAnalyticsCookie called on server-side, skipping');
      return;
    }
    
    if (acceptedCookies) {
      setCookie(name, value, days);
      console.log(`Analytics cookie '${name}' set`);
    } else {
      console.log(`Analytics cookie '${name}' blocked - user has not consented`);
    }
  };

  const setFunctionalCookie = (name: string, value: string, days?: number) => {
    if (!isClient) {
      console.warn('setFunctionalCookie called on server-side, skipping');
      return;
    }
    
    // Functional cookies are always allowed
    setCookie(name, value, days);
    console.log(`Functional cookie '${name}' set`);
  };

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!isClient || !acceptedCookies) {
      console.log(`Event tracking blocked: ${eventName}`);
      return;
    }
    
    // Track with Google Analytics if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, parameters);
      console.log(`Event tracked: ${eventName}`, parameters);
    } else {
      console.log(`Analytics not loaded, event not tracked: ${eventName}`);
    }
  };

  const clearAllAnalyticsCookies = () => {
    if (!isClient) return;
    
    // Clear common analytics cookies
    const analyticsCookies = ['_ga', '_ga_*', '_gid', '_gat', '_fbp', '_fbc'];
    analyticsCookies.forEach(cookieName => {
      if (cookieName.includes('*')) {
        // Handle wildcard cookies like _ga_*
        const prefix = cookieName.replace('*', '');
        document.cookie.split(';').forEach(cookie => {
          const name = cookie.split('=')[0].trim();
          if (name.startsWith(prefix)) {
            deleteCookie(name);
          }
        });
      } else {
        deleteCookie(cookieName);
      }
    });
    console.log('Analytics cookies cleared');
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
    setAnalyticsCookie,
    setFunctionalCookie,
    trackEvent,
    clearAllAnalyticsCookies,
    acceptedCookies,
    isClient
  };
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
