declare module "i18n-js" {
  declare export default typeof I18n;

  declare var npm$namespace$I18n: {
    reset: typeof I18n$reset,
    currentLocale: typeof I18n$currentLocale,
    translate: typeof I18n$translate,
    t: typeof I18n$t,
    localize: typeof I18n$localize,
    l: typeof I18n$l,
    toNumber: typeof I18n$toNumber,
    toPercentage: typeof I18n$toPercentage,
    toCurrency: typeof I18n$toCurrency,
    toTime: typeof I18n$toTime,
    toHumanSize: typeof I18n$toHumanSize,
    strftime: typeof I18n$strftime,
    defaultLocale: typeof I18n$defaultLocale,
    locale: typeof I18n$locale,
    defaultSeparator: typeof I18n$defaultSeparator,
    placeholder: typeof I18n$placeholder,
    fallbacks: typeof I18n$fallbacks,
    missingBehaviour: typeof I18n$missingBehaviour,
    missingTranslationPrefix: typeof I18n$missingTranslationPrefix,
    missingTranslation: typeof I18n$missingTranslation,
    missingPlaceholder: typeof I18n$missingPlaceholder,
    nullPlaceholder: typeof I18n$nullPlaceholder,
    translations: typeof I18n$translations,
    locales: typeof I18n$locales,
    pluralization: typeof I18n$pluralization
  };
  declare type I18n$Scope = string | string[];

  declare var I18n$defaultLocale: string;

  declare var I18n$locale: string;

  declare var I18n$defaultSeparator: string;

  declare var I18n$placeholder: RegExp;

  declare var I18n$fallbacks: boolean;

  declare var I18n$missingBehaviour: "message" | "guess";

  declare var I18n$missingTranslationPrefix: string;

  declare var I18n$missingTranslation: (
    scope: string,
    options?: I18n$TranslateOptions
  ) => string | null | void;

  declare var I18n$missingPlaceholder: (
    placeholder: string,
    message: string,
    options?: I18n$InterpolateOptions
  ) => string | null | void;

  declare var I18n$nullPlaceholder: (
    placeholder: string,
    message: string,
    options?: I18n$InterpolateOptions
  ) => string | null | void;

  declare var I18n$translations: {
    [locale: string]: { [key: string]: any }
  };

  declare var I18n$locales: {
    [key: string]: string | string[] | ((locale: string) => string | string[])
  };

  declare var I18n$pluralization: {
    [locale: string]: (count: number) => string[]
  };

  declare function I18n$reset(): void;

  declare function I18n$currentLocale(): string;

  declare interface I18n$InterpolateOptions {
    [key: string]: any;
  }

  declare type I18n$TranslateOptions = {
    scope?: I18n$Scope,
    message?: string,
    defaults?: Array<
      | {
          message: string
        }
      | {
          scope: I18n$Scope
        }
    >,
    defaultValue?: string
  } & InterpolateOptions;

  declare function I18n$translate(
    scope: I18n$Scope,
    options?: I18n$TranslateOptions
  ): string;

  declare function I18n$t(
    scope: I18n$Scope,
    options?: I18n$TranslateOptions
  ): string;

  declare function I18n$localize(
    scope: "currency" | "number" | "percentage",
    value: number,
    options?: I18n$InterpolateOptions
  ): string;

  declare function I18n$localize(
    scope: I18n$Scope,
    value: string | number | Date,
    options?: I18n$InterpolateOptions
  ): string;

  declare function I18n$l(
    scope: "currency" | "number" | "percentage",
    value: number,
    options?: I18n$InterpolateOptions
  ): string;

  declare function I18n$l(
    scope: I18n$Scope,
    value: string | number | Date,
    options?: I18n$InterpolateOptions
  ): string;

  declare interface I18n$ToNumberOptions {
    precision?: number;
    separator?: string;
    delimiter?: string;
    strip_insignificant_zeros?: boolean;
  }

  declare function I18n$toNumber(
    num: number,
    options?: I18n$ToNumberOptions
  ): string;

  declare type I18n$ToPercentageOptions = I18n$ToNumberOptions;

  declare function I18n$toPercentage(
    num: number,
    options?: I18n$ToPercentageOptions
  ): string;

  declare type I18n$ToCurrencyOptions = {
    format?: string,
    unit?: string,
    sign_first?: boolean
  } & ToNumberOptions;

  declare function I18n$toCurrency(
    num: number,
    options?: I18n$ToCurrencyOptions
  ): string;

  declare function I18n$toTime(
    scope: I18n$Scope,
    value: string | number | Date
  ): string;

  declare type I18n$ToHumanSizeOptions = {
    format?: string
  } & ToNumberOptions;

  declare function I18n$toHumanSize(
    num: number,
    options?: I18n$ToHumanSizeOptions
  ): string;

  declare function I18n$strftime(date: Date, format: string): string;
}
