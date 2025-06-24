
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export const useCookieManager = () => {
  const { acceptedCookies } = useCookieConsent();

  const setCookie = (name: string, value: string, days: number = 365) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
  };

  const getCookie = (name: string): string | null => {
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
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  };

  const setAnalyticsCookie = (name: string, value: string, days?: number) => {
    if (acceptedCookies) {
      setCookie(name, value, days);
      console.log(`Analytics cookie '${name}' set`);
    } else {
      console.log(`Analytics cookie '${name}' blocked - user has not consented`);
    }
  };

  const setFunctionalCookie = (name: string, value: string, days?: number) => {
    // Functional cookies are always allowed
    setCookie(name, value, days);
    console.log(`Functional cookie '${name}' set`);
  };

  return {
    setCookie,
    getCookie,
    deleteCookie,
    setAnalyticsCookie,
    setFunctionalCookie,
    acceptedCookies
  };
};
