import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// languages
import english from "./locales/en/translation.json";
import spanish from "./locales/es/translation.json";
import mandarin from "./locales/zh/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translations: english,
      },
      es: {
        translations: spanish,
      },
      zh: {
        translations: mandarin,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

i18n.languages = ["en", "es", "zh"];

export { default } from "i18next";
