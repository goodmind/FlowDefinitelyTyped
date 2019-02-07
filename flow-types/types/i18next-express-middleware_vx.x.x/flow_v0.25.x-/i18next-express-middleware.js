declare type I18next$I18nextOptions = {
  detection?: i18nextExpressMiddleware$LanguageDetectorOptions
} & i18nextExpressMiddleware$I18next$I18nextOptions;

/**
 * @summary Interface for Language detector options.
 * @interface
 */
declare interface i18nextExpressMiddleware$LanguageDetectorOptions {
  caches?: Array<string> | boolean;
  cookieDomain?: string;
  cookieExpirationDate?: Date;
  lookupCookie?: string;
  lookupFromPathIndex?: number;
  lookupQuerystring?: string;
  lookupSession?: string;
  order?: Array<string>;
}

declare type i18nextExpressMiddleware$I18nextOptions = {
  detection?: i18nextExpressMiddleware$LanguageDetectorOptions
} & i18nextExpressMiddleware$i18nextExpressMiddleware$I18nextOptions;
declare module "i18next-express-middleware" {
  /**
   * @summary Interface for middleware to use i18next in express.js.
   * @interface
   */
  declare export interface i18nextExpressMiddleware {
    LanguageDetector(): express.Handler;
    missingKeyHandler(): express.Handler;
  }

  /**
   * @summary Interface for own detection functionality.
   */
  declare export interface i18nextCustomDetection {
    name: string;
    lookup: (
      req: express.Request,
      res: express.Response,
      options?: Object
    ) => void;
    cacheUserLanguage: (
      req: express.Request,
      res: express.Response,
      lng?: any,
      options?: Object
    ) => void;
  }

  /**
   * @summary Detects user language from current request.
   * @class
   */
  declare export class LanguageDetector {
    /**
     * @summary Constructor.
     * @constructor
     * @param {any} services The services.
     * @param {Object} options The options.
     * @param {Object} allOptions The all options.
     */
    constructor(services?: any, options?: Object, allOptions?: Object): this;

    /**
     * @summary Adds detector.
     * @param {i18nextCustomDetection} detector The detector to add.
     */
    addDetector(detector: i18nextCustomDetection): void;
    cacheUserLanguage(
      req: express.Request,
      res: express.Response,
      detectionOrder: any
    ): void;

    /**
     * @summary Detects the language.
     * @param {Request} req The HTTP request.
     * @param {Response} res The HTTP response.
     * @param {detectionOrder} detectionOrder The detection order.
     */
    detect(
      req: express.Request,
      res: express.Response,
      detectionOrder: any
    ): void;

    /**
     * @summary Initializes class.
     * @param {any} services The services.
     * @param {Object} options The options.
     * @param {Object} allOptions The all options.
     */
    init(services: any, options?: Object, allOptions?: Object): void;
  }
  declare export function getResourcesHandler(
    i18next: i18next.i18n,
    options: Object
  ): express.Handler;

  declare export function handle(
    i18next: i18next.i18n,
    options?: Object
  ): express.Handler;

  /**
   * @summary Gets handler for missing key.
   * @param {I18nextStatic} i18next The i18next.
   * @param {Object} options The options.
   * @return {express.Handler} The express handler.
   */
  declare export function missingKeyHandler(
    i18next: i18next.i18n,
    options?: Object
  ): express.Handler;
}
