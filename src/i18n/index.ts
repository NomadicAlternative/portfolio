import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../data/en.json";
import es from "../data/es.json";

function syncLang(lng: string) {
  document.documentElement.lang = lng.split("-")[0];
}

i18n.on("languageChanged", syncLang);

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    ns: ["hero", "what-i-build", "about", "skills", "projects", "howIWork", "contact", "nav"],
    defaultNS: "hero",
    supportedLngs: ["en", "es"],

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },

    resources: {
      en,
      es,
    },
  })
  .then(() => syncLang(i18n.resolvedLanguage || "es"));

export default i18n;
