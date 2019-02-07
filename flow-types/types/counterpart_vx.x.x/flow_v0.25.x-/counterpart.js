declare module "counterpart" {
  declare type NotFoundHandler = (
    locale: string,
    key: string,
    fallback: string,
    scope: string
  ) => void;
  declare type LocaleChangeHandler = (
    newLocale: string,
    oldLocale: string
  ) => void;
  declare interface Counterpart {
    (key: string | string[], options?: { [key: string]: any }): string;
    setSeparator(value: string): string;
    onTranslationNotFound(callback: NotFoundHandler): void;
    offTranslationNotFound(callback: NotFoundHandler): void;
    setMissingEntryGenerator(callback: (value: string) => void): void;
    getLocale(): string;
    setLocale(value: string): string;
    onLocaleChange(callback: LocaleChangeHandler): void;
    offLocaleChange(callback: LocaleChangeHandler): void;
    setFallbackLocale(value: string | string[]): void;
    registerTranslations(locale: string, data: { [key: string]: any }): void;
    registerInterpolations(data: { [key: string]: any }): void;
    setKeyTransformer(
      callback: (value: string, options: { [key: string]: any }) => string
    ): string;
    localize(date: Date, options: { [key: string]: any }): string;
    Instance: Counterpart;
    Translator: Counterpart;
  }
  declare var counterpart: Counterpart;
  declare module.exports: typeof counterpart;
}
