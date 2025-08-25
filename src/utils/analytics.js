// Google Analytics 4 Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track product views
export const trackProductView = (productId, productName, category) => {
  trackEvent('view_item', 'ecommerce', productName, {
    item_id: productId,
    item_category: category,
  });
};

// Track contact form submissions
export const trackContactForm = () => {
  trackEvent('form_submit', 'engagement', 'contact_form');
};

// Track language changes
export const trackLanguageChange = (language) => {
  trackEvent('language_change', 'user_preference', language);
};

// Track search queries
export const trackSearch = (searchTerm) => {
  trackEvent('search', 'engagement', searchTerm);
};
