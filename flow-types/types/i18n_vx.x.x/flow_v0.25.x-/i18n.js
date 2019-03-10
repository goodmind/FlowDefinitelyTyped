declare var i18n: typeof npm$namespace$i18n;

declare var npm$namespace$i18n: {
  configure: typeof i18n$configure,
  init: typeof i18n$init,
  __: typeof i18n$__,
  __n: typeof i18n$__n,
  __mf: typeof i18n$__mf,
  __l: typeof i18n$__l,
  __h: typeof i18n$__h,
  setLocale: typeof i18n$setLocale,
  getLocale: typeof i18n$getLocale,
  getLocales: typeof i18n$getLocales,
  getCatalog: typeof i18n$getCatalog,
  overrideLocaleFromQuery: typeof i18n$overrideLocaleFromQuery,
  version: typeof i18n$version
};
declare interface i18n$ConfigurationOptions {
  /**
   * Setup some locales - other locales default to en silently
   * @default []
   */
  locales?: string[];

  /**
   * Language fallback map
   * @default {}
   */
  fallbacks?: {
    [locale: string]: string
  };

  /**
   * Alter a site wide default locale
   * @default "en"
   */
  defaultLocale?: string;

  /**
   * Sets a custom cookie name to parse locale settings from
   * @default null
   */
  cookie?: string;

  /**
   * Query parameter to switch locale (ie. /home?lang=ch)
   * @default null
   */
  queryParameter?: string;

  /**
   * Where to store json files, relative to modules directory
   * @default "./locales"
   */
  directory?: string;

  /**
   * Control mode on directory creation. Setting has no effect on win.
   * @default null
   */
  directoryPermissions?: string;

  /**
   * Watch for changes in json files to reload locale on updates
   * @default false
   */
  autoReload?: boolean;

  /**
   * Whether to write new locale information to disk
   * @default true
   */
  updateFiles?: boolean;

  /**
   * Sync locale information across all files
   * @default false
   */
  syncFiles?: boolean;

  /**
   * What to use as the indentation unit
   * @default "\t"
   */
  indent?: string;

  /**
   * Setting extension of json files (you might want to set this to '.js' according to webtranslateit)
   * @default ".json"
   */
  extension?: string;

  /**
   * Setting prefix of json files name (in case you use different locale files naming scheme (webapp-en.json), rather then just en.json)
   * @default ""
   */
  prefix?: string;

  /**
   * Enable object notation
   * @default false
   */
  objectNotation?: boolean;

  /**
   * Setting of log level DEBUG
   * @default require("debug")("i18n:debug")
   */
  logDebugFn?: (msg: string) => void;

  /**
   * Setting of log level WARN
   * @default require("debug")("i18n:warn")
   */
  logWarnFn?: (msg: string) => void;

  /**
   * Setting of log level ERROR
   * @default require("debug")("i18n:error")
   */
  logErrorFn?: (msg: string) => void;

  /**
   * object or [obj1, obj2] to bind the i18n api and current locale to
   * @default null
   */
  register?: any;

  /**
   * Hash to specify different aliases for i18n's internal methods to apply on the request/response objects (method -> alias).
   * Note that this will *not* overwrite existing properties with the same name.
   * @default undefined
   */
  api?: {
    [method: string]: string
  };

  /**
   * Downcase locale when passed on queryParam; e.g. lang=en-US becomes en-us.
   * When set to false, the queryParam value will be used as passed; e.g. lang=en-US remains en-US.
   * @default true
   */
  preserveLegacyCase?: boolean;
}

declare interface i18n$TranslateOptions {
  phrase: string;
  locale?: string;
}

declare interface i18n$PluralOptions {
  singular: string;
  plural: string;
  count?: number;
  locale?: string;
}

declare interface i18n$Replacements {
  [key: string]: string;
}

declare interface i18n$LocaleCatalog {
  [key: string]: string;
}

declare interface i18n$GlobalCatalog {
  [key: string]: i18n$LocaleCatalog;
}

declare interface i18n$HashedList {
  [key: string]: string;
}

/**
 * Configure current i18n instance
 * @param options - configuration options for i18n
 */
declare function i18n$configure(options: i18n$ConfigurationOptions): void;

/**
 * Initialize i18n middleware for express
 * @param request - Current express request
 * @param response - Current express response
 * @param next - Callback to continue process
 */
declare function i18n$init(
  request: Express$Request,
  response: Express$Response,
  next?: () => void
): void;

/**
 * Translate the given phrase using locale configuration
 * @param phraseOrOptions - The phrase to translate or options for translation
 * @returns The translated phrase
 */
declare function i18n$__(
  phraseOrOptions: string | i18n$TranslateOptions,
  ...replace: string[]
): string;

/**
 * Translate the given phrase using locale configuration
 * @param phraseOrOptions - The phrase to translate or options for translation
 * @param replacements - An object containing replacements
 * @returns The translated phrase
 */
declare function i18n$__(
  phraseOrOptions: string | i18n$TranslateOptions,
  replacements: i18n$Replacements
): string;

/**
 * Translate with plural condition the given phrase and count using locale configuration
 * @param options - Options for plural translate
 * @param count - The number which allow to select from plural to singular
 * @returns The translated phrase
 */
declare function i18n$__n(options: i18n$PluralOptions, count?: number): string;

/**
 * Translate with plural condition the given phrase and count using locale configuration
 * @param singular - The singular phrase to translate if count is <= 1
 * @param plural - The plural phrase to translate if count is > 1
 * @param count - The number which allow to select from plural to singular
 * @returns The translated phrase
 */
declare function i18n$__n(
  singular: string,
  plural: string,
  count: number | string
): string;

/**
 * Translate the given phrase using locale configuration and MessageFormat
 * @param phraseOrOptions - The phrase to translate or options for translation
 * @returns The translated phrase
 */
declare function i18n$__mf(
  phraseOrOptions: string | i18n$TranslateOptions,
  ...replace: any[]
): string;

/**
 * Translate the given phrase using locale configuration and MessageFormat
 * @param phraseOrOptions - The phrase to translate or options for translation
 * @param replacements - An object containing replacements
 * @returns The translated phrase
 */
declare function i18n$__mf(
  phraseOrOptions: string | i18n$TranslateOptions,
  replacements: i18n$Replacements
): string;

/**
 * Returns a list of translations for a given phrase in each language.
 * @param phrase - The phrase to get translations in each language
 * @returns The phrase in each language
 */
declare function i18n$__l(phrase: string): string[];

/**
 * Returns a hashed list of translations for a given phrase in each language.
 * @param phrase - The phrase to get translations in each language
 * @returns The phrase in each language
 */
declare function i18n$__h(phrase: string): i18n$HashedList[];

/**
 * Change the current active locale
 * @param locale - The locale to set as default
 */
declare function i18n$setLocale(locale: string): void;

/**
 * Change the current active locale for specified response
 * @param response - The request or response to change locale on
 * @param locale - The locale to set as default
 * @param inheritance - Disables inheritance if true
 */
declare function i18n$setLocale(
  requestOrResponse: Express$Request | Express$Response,
  locale: string,
  inheritance?: boolean
): void;

/**
 * Change the current active locale for specified response
 * @param objects - The object(s) to change locale on
 * @param locale - The locale to set as default
 * @param inheritance - Disables inheritance if true
 */
declare function i18n$setLocale(
  objects: any | any[],
  locale: string,
  inheritance?: boolean
): void;

/**
 * Get the current active locale for specified request
 * @param request - The request to get locale for
 * @returns The current locale in request
 */
declare function i18n$getLocale(request?: Express$Request): string;

/**
 * Get a list with all configured locales
 */
declare function i18n$getLocales(): string[];

/**
 * Get the current global catalog
 * @returns The current global catalog
 */
declare function i18n$getCatalog(): i18n$GlobalCatalog;

/**
 * Get the catalog for the given locale
 * @param locale - The locale to get catalog for
 * @returns The specified locale catalog
 */
declare function i18n$getCatalog(locale: string): i18n$LocaleCatalog;

/**
 * Get the current active locale catalog for specified request
 * @param request - The request to get locale catalog for
 * @param locale - The locale to get catalog for
 * @returns The current locale catalog for the specified request
 */
declare function i18n$getCatalog(
  request: Express$Request,
  locale?: string
): i18n$LocaleCatalog;

/**
 * Override the current request locale by using the query param (?locale=en)
 * @param request - The request to override locale for
 */
declare function i18n$overrideLocaleFromQuery(request?: Express$Request): void;

/**
 * Get current i18n-node version
 */
declare var i18n$version: string;
declare interface i18nAPI {
  locale: string;

  /**
   * Translate the given phrase using locale configuration
   * @param phraseOrOptions - The phrase to translate or options for translation
   * @returns The translated phrase
   */
  __(
    phraseOrOptions: string | i18n$TranslateOptions,
    ...replace: string[]
  ): string;

  /**
   * Translate the given phrase using locale configuration
   * @param phraseOrOptions - The phrase to translate or options for translation
   * @param replacements - An object containing replacements
   * @returns The translated phrase
   */
  __(
    phraseOrOptions: string | i18n$TranslateOptions,
    replacements: i18n$Replacements
  ): string;

  /**
   * Translate with plural condition the given phrase and count using locale configuration
   * @param options - Options for plural translate
   * @param count - The number which allow to select from plural to singular
   * @returns The translated phrase
   */
  __n(options: i18n$PluralOptions, count?: number): string;

  /**
   * Translate with plural condition the given phrase and count using locale configuration
   * @param singular - The singular phrase to translate if count is <= 1
   * @param plural - The plural phrase to translate if count is > 1
   * @param count - The number which allow to select from plural to singular
   * @returns The translated phrase
   */
  __n(singular: string, plural: string, count: number | string): string;

  /**
   * Translate the given phrase using locale configuration and MessageFormat
   * @param phraseOrOptions - The phrase to translate or options for translation
   * @returns The translated phrase
   */
  __mf(
    phraseOrOptions: string | i18n$TranslateOptions,
    ...replace: any[]
  ): string;

  /**
   * Translate the given phrase using locale configuration and MessageFormat
   * @param phraseOrOptions - The phrase to translate or options for translation
   * @param replacements - An object containing replacements
   * @returns The translated phrase
   */
  __mf(
    phraseOrOptions: string | i18n$TranslateOptions,
    replacements: i18n$Replacements
  ): string;

  /**
   * Returns a list of translations for a given phrase in each language.
   * @param phrase - The phrase to get translations in each language
   * @returns The phrase in each language
   */
  __l(phrase: string): string[];

  /**
   * Returns a hashed list of translations for a given phrase in each language.
   * @param phrase - The phrase to get translations in each language
   * @returns The phrase in each language
   */
  __h(phrase: string): i18n$HashedList[];

  /**
   * Get the current active locale
   * @returns The current locale in request
   */
  getLocale(): string;

  /**
   * Change the current active locale
   * @param locale - The locale to set as default
   */
  setLocale(locale: string): void;

  /**
   * Get the current global catalog
   * @returns The current global catalog
   */
  getCatalog(): i18n$GlobalCatalog;

  /**
   * Get the catalog for the given locale
   * @param locale - The locale to get catalog for
   * @returns The specified locale catalog
   */
  getCatalog(locale?: string): i18n$LocaleCatalog;
}
declare module "i18n" {
  declare export default typeof i18n;
}
declare type Express$Request = {
  languages: string[],
  regions: string[],
  language: string,
  region: string
} & i18nAPI;

declare type Express$Response = {
  locals: i18nAPI
} & i18nAPI;
