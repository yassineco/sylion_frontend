/**
 * Google Analytics 4 utility functions
 * Provides pageview tracking and custom event tracking
 */

// GA4 Measurement ID from environment variable
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

/**
 * Tracks a pageview in GA4
 * @param url - The URL path to track
 */
export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  (window as any).gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * Parameters for GA4 custom events
 */
type GAEventParams = {
  action: string;
  category?: string;
  label?: string;
  value?: number;
};

/**
 * Tracks a custom event in GA4
 * @param params - Event parameters (action, category, label, value)
 */
export const trackEvent = ({ action, category, label, value }: GAEventParams) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return;
  (window as any).gtag?.('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
