import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';
import ru from './locales/ru.json';

const language = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({
    resources: {
        en: { translations: en },
        ar: { translations: ar },
        ru: { translations: ru },
    },
    fallbackLng: ['en', 'ar', 'ru'],
    lng: language,
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ',',
    },
    react: {
        wait: true,
    },
});

export default i18n;
