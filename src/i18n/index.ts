import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './messages/en.json';
import ar from './messages/ar.json';

const isProd = import.meta.env.PROD;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    debug: !isProd,
    saveMissing: !isProd,

    detection: {
      order: ['cookie'],
      caches: ['cookie'],
      lookupCookie: 'i18next',
      cookieMinutes: 10080,
    },

    interpolation: {
      escapeValue: false,
    },

    parseMissingKeyHandler: isProd
      ? undefined
      : (key) => `[MISSING: ${key}]`,
  });

export default i18n;
