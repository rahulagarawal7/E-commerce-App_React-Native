import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, fr, hi } from "./translations";
import AsyncStorage from '@react-native-async-storage/async-storage';

const resources = {
  en: {
    translation: en,
  },
  hi: {
    translation: hi,
  },
  fr: {
    translation: fr,
  }
}

const loadLanguage = async () => {
  const lang = await AsyncStorage.getItem('selectedLanguage');
  return lang || 'en'; // Return 'en' if no language is saved
};

const initI18n = async () => {
  const defaultLang = await loadLanguage();

  i18next
    .use(initReactI18next)
    .init({
      debug: false,
      lng: defaultLang,
      fallbackLng: 'en', // Use 'en' if the selected language is not available
      resources,
      compatibilityJSON: 'v3',
    });
   
};

initI18n();

export default i18next;