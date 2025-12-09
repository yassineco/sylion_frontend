/**
 * Analytics Listener Component
 * Automatically tracks page views when route changes using wouter
 */
import { useLocation } from 'wouter';
import { useEffect } from 'react';
import { pageview } from '@/lib/analytics';

export function AnalyticsListener() {
  const [location] = useLocation();

  useEffect(() => {
    if (!location) return;
    pageview(location);
  }, [location]);

  return null;
}
