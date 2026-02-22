import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

import { STORAGE_KEYS } from '../constants/storageKeys';
import en from './translations/en.json';
import tr from './translations/tr.json';

const resources = {
  en: { translation: en },
  tr: { translation: tr },
};

type SupportedLanguage = keyof typeof resources;

const getDeviceLanguage = (): SupportedLanguage => {
  const locales = RNLocalize.getLocales();
  const deviceLang = locales[0]?.languageCode;
  if (deviceLang && deviceLang in resources) {
    return deviceLang as SupportedLanguage;
  }
  return 'en';
};

const languageDetector = {
  type: 'languageDetector' as const,
  async: true,
  init: () => {},
  detect: async (callback: (lang: string) => void) => {
    try {
      const savedLanguage = await AsyncStorage.getItem(STORAGE_KEYS.LANGUAGE);
      if (savedLanguage && savedLanguage in resources) {
        callback(savedLanguage);
        return;
      }
    } catch {
      // ignore and fall back to device language
    }
    callback(getDeviceLanguage());
  },
  cacheUserLanguage: async (language: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    } catch {
      // ignore storage errors
    }
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
