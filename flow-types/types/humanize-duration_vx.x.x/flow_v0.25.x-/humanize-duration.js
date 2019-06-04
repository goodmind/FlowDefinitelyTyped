declare module "humanize-duration" {
  declare export default typeof HumanizeDuration;

  declare function HumanizeDuration(
    ms: number,
    options?: HumanizeDuration$Options
  ): string;

  declare var HumanizeDuration: typeof npm$namespace$HumanizeDuration;

  declare var npm$namespace$HumanizeDuration: {
    humanizer: typeof HumanizeDuration$humanizer,
    getSupportedLanguages: typeof HumanizeDuration$getSupportedLanguages
  };
  declare type HumanizeDuration$LanguageCode =
    | "ar"
    | "bg"
    | "ca"
    | "zh_CN"
    | "zh_TW"
    | "hr"
    | "cs"
    | "da"
    | "nl"
    | "en"
    | "fa"
    | "fi"
    | "fr"
    | "de"
    | "el"
    | "hu"
    | "is"
    | "id"
    | "it"
    | "ja"
    | "ko"
    | "lo"
    | "lt"
    | "ms"
    | "no"
    | "pl"
    | "pt"
    | "ro"
    | "ru"
    | "sk"
    | "es"
    | "sv"
    | "tr"
    | "th"
    | "uk"
    | "ur"
    | "vi";

  declare type HumanizeDuration$Unit =
    | "y"
    | "mo"
    | "w"
    | "d"
    | "h"
    | "m"
    | "s"
    | "ms";

  declare interface HumanizeDuration$UnitMeasuresOptions {
    y?: number;
    mo?: number;
    w?: number;
    d?: number;
    h?: number;
    m?: number;
    s?: number;
    ms?: number;
  }

  declare interface HumanizeDuration$UnitTranslationOptions {
    y?: () => string;
    mo?: () => string;
    w?: () => string;
    d?: () => string;
    h?: () => string;
    m?: () => string;
    s?: () => string;
    ms?: () => string;
  }

  declare interface HumanizeDuration$Options {
    /**
     * Language for unit display (accepts an ISO 639-1 code from one of the supported languages).
     */
    language?: string;

    /**
     * Fallback languages if the provided language cannot be found (accepts an ISO 639-1 code from one of the supported languages). It works from left to right.
     */
    fallbacks?: string[];

    /**
     * String to display between the previous unit and the next value.
     */
    delimiter?: string;

    /**
     * String to display between each value and unit.
     */
    spacer?: string;

    /**
     * Number representing the maximum number of units to display for the duration.
     */
    largest?: number;

    /**
     * Array of strings to define which units are used to display the duration (if needed).
     */
    units?: HumanizeDuration$Unit[];

    /**
     * Boolean value. Use true to round the smallest unit displayed (can be combined with largest and units).
     */
    round?: boolean;

    /**
     * String to substitute for the decimal point in a decimal fraction.
     */
    decimal?: string;

    /**
     * String to include before the final unit. You can also set serialComma to false to eliminate the final comma.
     */
    conjunction?: string;
    serialComma?: boolean;

    /**
     * Number that defines a maximal decimal points for float values.
     */
    maxDecimalPoints?: number;

    /**
     * Customize the value used to calculate each unit of time.
     */
    unitMeasures?: HumanizeDuration$UnitMeasuresOptions;
  }

  declare type HumanizeDuration$HumanizerOptions = {
    languages?: {
      [key: string]: HumanizeDuration$UnitTranslationOptions
    }
  } & HumanizeDuration$Options;

  declare interface HumanizeDuration$Humanizer {
    (ms: number, options?: HumanizeDuration$Options): string;
    languages: {
      [x: string]: HumanizeDuration$UnitTranslationOptions
    };
  }

  declare function HumanizeDuration$humanizer(
    options?: HumanizeDuration$HumanizerOptions
  ): HumanizeDuration$Humanizer;

  /**
   * This function won't return any new languages you define; it will only return the defaults supported by the library.
   */
  declare function HumanizeDuration$getSupportedLanguages(): HumanizeDuration$LanguageCode[];
}
