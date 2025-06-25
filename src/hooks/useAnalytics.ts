
import { useCookieManager } from './useCookieManager';

export const useAnalytics = () => {
  const { trackEvent, setFunctionalCookie } = useCookieManager();

  const trackButtonClick = (buttonName: string, section?: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      section: section || 'unknown'
    });
  };

  const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      form_name: formName,
      success: success
    });
  };

  const trackNavigation = (from: string, to: string) => {
    trackEvent('navigation', {
      from_page: from,
      to_page: to
    });
  };

  const setUserPreference = (key: string, value: string) => {
    setFunctionalCookie(`pref_${key}`, value, 365); // 1 year expiry for preferences
  };

  return {
    trackButtonClick,
    trackFormSubmission,
    trackNavigation,
    setUserPreference
  };
};
