import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import Locize from "i18next-locize-backend"
import { EmptyResourceLanguage, SupportedLanguages } from "locales"
import { locizePlugin } from "locize"
import queryString from "query-string"
import { initReactI18next } from "react-i18next"

const development = "development" === process.env.NODE_ENV
const locizeApiKey = development
  ? process.env.REACT_APP_FISHBOWL_LOCIZE_API_KEY
  : undefined
const saveMissing = Boolean(development && locizeApiKey)

if ("1" === queryString.parse(window.location.search).locize) {
  i18n.use(locizePlugin)
}

i18n
  .use(Locize)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: development,

    // @see https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    fallbackLng: "en",
    supportedLngs: SupportedLanguages as any,
    partialBundledLanguages: true,
    resources: saveMissing ? undefined : { en: EmptyResourceLanguage },
    interpolation: {
      escapeValue: false, // React already safe from XSS
    },

    // @see https://www.i18next.com/overview/configuration-options#missing-keys
    saveMissing,
    updateMissing: saveMissing,
    saveMissingTo: "all",

    // @see https://github.com/locize/i18next-locize-backend#backend-options
    backend: {
      projectId: "3ff96254-e310-4d55-8076-f0cc49f57a8f",
      apiKey: locizeApiKey,
      referenceLng: "en",
      // @see https://docs.locize.com/guides-tips-and-tricks/going-production#versions-and-caching
      version: development ? "latest" : "production",
    },
  })

export default i18n
