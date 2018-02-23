import i18next from 'i18next';
import en from './locales/en';
import pt from './locales/pt';

const configI18n = {
  interpolation: {
    // React already does escaping
    escapeValue: false,
  },
  lng: navigator.language || navigator.userLanguage,
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
  },
};

i18next.init(configI18n);

export { configI18n };
export default i18next;
