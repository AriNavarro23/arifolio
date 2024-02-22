import i18next from "i18next";
import en from "./dictionaries/en.json";
import es from "./dictionaries/es.json";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: { global: es },
    en: { global: en },
  },
  lng: "en",
});

export default i18next;
