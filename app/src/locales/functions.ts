import { SupportedLanguage } from "locales"

export function languageNameFromCode(code: SupportedLanguage): string {
  switch (code) {
    case "en":
      return "English"
    case "fr":
      return "Français"
    default:
      return assertNever(code)
  }
}

function assertNever(code: never): never {
  throw new Error(`Unexpected language code: ${code}`)
}
