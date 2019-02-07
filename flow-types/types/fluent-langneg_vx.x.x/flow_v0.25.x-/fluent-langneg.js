declare module "fluent-langneg" {
  declare export interface LanguageNegotiationOptions {
    strategy?: "filtering" | "matching" | "lookup";
    defaultLocale?: string;
  }
  declare export function negotiateLanguages(
    requestedLocales: $ReadOnlyArray<string>,
    availableLocales: $ReadOnlyArray<string>,
    options?: LanguageNegotiationOptions
  ): string[];
}
