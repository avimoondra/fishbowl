import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Locize from "i18next-locize-backend"
import { initReactI18next } from "react-i18next"

const development = "development" === process.env.NODE_ENV

i18n
  .use(Locize)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: development,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },

    // @see https://www.i18next.com/overview/configuration-options#missing-keys
    saveMissing: development,
    updateMissing: development,
    saveMissingTo: "all",

    // @see https://github.com/locize/i18next-locize-backend#backend-options
    backend: {
      projectId: "3ff96254-e310-4d55-8076-f0cc49f57a8f",
      apiKey: development
        ? process.env.REACT_APP_FISHBOWL_LOCIZE_API_KEY
        : undefined,
      referenceLng: "en",
    },
  })

export default i18n
