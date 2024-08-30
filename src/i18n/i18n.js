import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../components/locales/en.json'; // Archivo de traducción en inglés
import translationES from '../components/locales/es.json'; // Archivo de traducción en español

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(initReactI18next) // inicializar react-i18next
  .init({
    resources,
    lng: 'es',// idioma predeterminado
    interpolation: {
      escapeValue: false // React ya maneja escapado de strings
    }
  });

export default i18n;