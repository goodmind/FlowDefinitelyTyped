declare var npm$namespace$i18n: {
  createComponent: typeof i18n$createComponent,
  createTranslator: typeof i18n$createTranslator,
  createReactiveTranslator: typeof i18n$createReactiveTranslator,
  addTranslation: typeof i18n$addTranslation,
  addTranslations: typeof i18n$addTranslations,
  getTranslation: typeof i18n$getTranslation,
  __: typeof i18n$__,
  getTranslations: typeof i18n$getTranslations,
  setOptions: typeof i18n$setOptions,
  parseNumber: typeof i18n$parseNumber,
  setLocale: typeof i18n$setLocale,
  setLocaleOnConnection: typeof i18n$setLocaleOnConnection,
  getLocale: typeof i18n$getLocale,
  loadLocale: typeof i18n$loadLocale,
  runWithLocale: typeof i18n$runWithLocale,
  getLanguages: typeof i18n$getLanguages,
  getLanguageName: typeof i18n$getLanguageName,
  getLanguageNativeName: typeof i18n$getLanguageNativeName,
  getCurrencySymbol: typeof i18n$getCurrencySymbol,
  getCurrencyCodes: typeof i18n$getCurrencyCodes,
  isRTL: typeof i18n$isRTL,
  getAllKeysForLocale: typeof i18n$getAllKeysForLocale,
  onChangeLocale: typeof i18n$onChangeLocale
};
declare function i18n$createComponent(
  translator?: Translator,
  locale?: string,
  reactjs?: React.ReactInstance,
  type?: any
): () => React.Component<ReactComponentProps>;

declare function i18n$createTranslator(
  namespace: string,
  options?: TranslaterOptions
): Translator;

declare function i18n$createReactiveTranslator(
  namespace: string,
  locale: string
): () => React.Component;

declare function i18n$addTranslation(
  locale: string,
  namespace: string,
  translation: string
): void;

declare function i18n$addTranslation(
  locale: string,
  namespace: string,
  key: string,
  translation: string
): void;

declare function i18n$addTranslations(
  locale: string,
  translationsMap: {}
): void;

declare function i18n$addTranslations(
  locale: string,
  namespace: string,
  translationsMap: {}
): void;

declare function i18n$getTranslation(
  key: string,
  params?: GetTranslationParams
): string;

declare function i18n$getTranslation(
  namespace: string,
  key: string,
  params: GetTranslationParams
): string;

declare function i18n$getTranslation(...key: string[]): string;

declare function i18n$__(key: string, params?: GetTranslationParams): string;

declare function i18n$__(
  namespace: string,
  key: string,
  params: GetTranslationParams
): string;

declare function i18n$__(...key: string[]): string;

declare function i18n$getTranslations(
  namespace: string,
  locale?: string
): string[];

declare function i18n$setOptions(options: i18nOptions): void;

declare function i18n$parseNumber(number: string, locale?: string): string;

declare function i18n$setLocale(
  locale: string,
  params?: LocateParams
): Promise<void>;

declare function i18n$setLocaleOnConnection(
  locale: string,
  connectionId?: number
): void;

declare function i18n$getLocale(): string;

declare function i18n$loadLocale(
  locale: string,
  params?: LoadLocaleParams
): void;

declare function i18n$runWithLocale(
  locale: string,
  func: (...keys: any[]) => void
): void;

declare function i18n$getLanguages(
  type?: "code" | "name" | "nativeNames"
): string[];

declare function i18n$getLanguageName(locale?: string): string;

declare function i18n$getLanguageNativeName(locale?: string): string;

declare function i18n$getCurrencySymbol(locale?: string): string | void;

declare function i18n$getCurrencyCodes(locale?: string): string[];

declare function i18n$isRTL(locale?: string): boolean;

declare function i18n$getAllKeysForLocale(
  locale?: string,
  excactlyThis?: boolean
): string[];

declare function i18n$onChangeLocale(callback: (locale: string) => void): void;
declare module "meteor/universe:i18n" {
  import type { OutgoingHttpHeaders } from "http";

  declare interface ReactComponentProps {
    _locale?: string;
    _tagType?: string;
    _namespace?: string;
    _props?: React.HTMLAttributes<React.Component>;
    _translateProps?: string[];
    _containerType?: string;
  }
  declare interface i18nOptions {
    defaultLocale?: string;
    open?: string;
    close?: string;
    purify?: () => void;
    hideMissing?: boolean;
    hostUrl?: string;
    translationsHeaders?: OutgoingHttpHeaders;
    sameLocaleOnServerConnection?: boolean;
  }
  declare interface GetTranslationParams {
    _locale?: string;
    _namespace?: string;
    [key: string]: any;
  }
  declare interface TranslaterOptions {
    _locale?: string;
    _purify?: boolean;
  }
  declare interface LoadLocaleParams {
    fresh?: boolean;
    async?: boolean;
    silent?: boolean;
    host?: string;
    pathOnHost?: string;
  }
  declare interface LocateParams {
    noDownload?: boolean;
    silent?: boolean;
    async?: boolean;
    fresh?: boolean;
  }
  declare type Translator = (...args: any[]) => string;
}
declare module "meteor-universe-i18n" {
}
