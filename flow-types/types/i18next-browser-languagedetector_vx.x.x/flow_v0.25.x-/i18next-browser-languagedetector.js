declare module "i18next-browser-languagedetector" {
  declare interface i18nextBrowserLanguageDetector$DetectorOptions {
    /**
     * order and from where user language should be detected
     */
    order?: Array<
      | "querystring"
      | "cookie"
      | "localStorage"
      | "navigator"
      | "htmlTag"
      | string
    >;

    /**
     * keys or params to lookup language from
     */
    lookupQuerystring?: string;
    lookupCookie?: string;
    lookupLocalStorage?: string;

    /**
     * cache user language on
     */
    caches?: string[];

    /**
     * languages to not persist (cookie, localStorage)
     */
    excludeCacheFor?: string[];

    /**
     * optional expire and domain for set cookie
     * @default 10
     */
    cookieMinutes?: number;
    cookieDomain?: string;

    /**
     * optional htmlTag with lang attribute
     * @default document.documentElement
     */
    htmlTag?: HTMLElement;
  }

  declare interface i18nextBrowserLanguageDetector$CustomDetector {
    name: string;
    cacheUserLanguage?: (
      lng: string,
      options: i18nextBrowserLanguageDetector$DetectorOptions
    ) => void;
    lookup(
      options: i18nextBrowserLanguageDetector$DetectorOptions
    ): string | void;
  }
  declare class i18nextBrowserLanguageDetector {
    constructor(
      services?: any,
      options?: i18nextBrowserLanguageDetector$i18nextBrowserLanguageDetector$DetectorOptions
    ): this;

    /**
     * Adds detector.
     */
    addDetector(
      detector: i18nextBrowserLanguageDetector$i18nextBrowserLanguageDetector$CustomDetector
    ): i18nextBrowserLanguageDetector;

    /**
     * Initializes detector.
     */
    init(
      options?: i18nextBrowserLanguageDetector$i18nextBrowserLanguageDetector$DetectorOptions
    ): void;
  }
  declare module.exports: typeof i18nextBrowserLanguageDetector;
}
