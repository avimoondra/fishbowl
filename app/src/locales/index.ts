import { ResourceLanguage } from "i18next"

/**
 * Resource language with empty namespaces.
 *
 * Leverages inlined, default strings in favor of English resource fetching via Locize CDN.
 */
export const EmptyResourceLanguage: ResourceLanguage = {
  translation: {},
}

export const SupportedLanguages = ["en", "fr", "de"] as const

export type SupportedLanguage = typeof SupportedLanguages[number]
