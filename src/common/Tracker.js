import {
  GoogleAnalyticsTracker,
  GoogleAnalyticsSettings
} from 'react-native-google-analytics-bridge';

GoogleAnalyticsSettings.setDispatchInterval(30);

const tracker = new GoogleAnalyticsTracker('UA-97643759-1');

export const trackScreenView = (screenName) => {
  tracker.trackScreenView(screenName);
};

export const trackEvent = (category, action, optionalValues) => {
  tracker.trackEvent(category, action, optionalValues);
};
