
import { useEffect } from 'react';
import { useCookieManager } from '@/hooks/useCookieManager';

export const AnalyticsTracker = () => {
  const { trackEvent, setAnalyticsCookie, acceptedCookies } = useCookieManager();

  useEffect(() => {
    // Track page view when component mounts
    if (acceptedCookies) {
      trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, [trackEvent, acceptedCookies]);

  // Set session tracking cookie
  useEffect(() => {
    if (acceptedCookies) {
      const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setAnalyticsCookie('session_id', sessionId, 1); // 1 day expiry
    }
  }, [setAnalyticsCookie, acceptedCookies]);

  return null; // This component doesn't render anything
};
