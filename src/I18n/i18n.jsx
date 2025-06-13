import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Til fayllarini import qilamiz
import translationUz from '../Local/Eng/translation.json';
import translationRu from '../LocalL/Ru/ruTranslation.json';

const Lang = localStorage.getItem('language') || 'uz';

const resources = {
  uz: {
    translation: translationUz,
  },
  ru: {
    translation: translationRu,
  },
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: Lang, 
    fallbackLng: 'uz', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
