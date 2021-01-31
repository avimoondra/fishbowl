import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import * as resources from "./locales"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: "development" === process.env.NODE_ENV,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
