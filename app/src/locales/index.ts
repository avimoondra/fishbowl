import { ResourceLanguage } from "i18next"

export const Namespaces = [
  "translation",
  "common",
  "home",
  "lobby",
  "cardSubmission",
  "teams",
  "play",
  "end",
  "error",
] as const

/**
 * Resource language with empty namespaces.
 *
 * Leverages inlined, default strings in favor of English resource fetching via Locize CDN.
 */
export const EmptyResourceLanguage: ResourceLanguage = Namespaces.reduce<
  ResourceLanguage
>((resource, namespace) => {
  resource[namespace] = {}

  return resource
}, {})

export const SupportedLanguages = ["en", "es"] as const

export type SupportedLanguage = typeof SupportedLanguages[number]
