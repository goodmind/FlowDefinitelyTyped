declare module "speakingurl" {
  declare interface Dictionary<T> {
    [x: string]: T;
  }
  declare interface SpeakingURLOptions {
    separator?: string;
    lang?: string | boolean;
    symbols?: boolean;
    maintainCase?: boolean;
    titleCase?: string[] | boolean;
    truncate?: number;
    uric?: boolean;
    uricNoSlash?: boolean;
    mark?: boolean;
    custom?: string[] | Dictionary<string>;
  }
  declare function getSlug(
    input: string,
    options?: SpeakingURLOptions | string
  ): string;

  declare var npm$namespace$getSlug: {
    createSlug: typeof getSlug$createSlug
  };
  declare function getSlug$createSlug(
    options: SpeakingURLOptions
  ): (input: string) => string;

  declare module.exports: typeof getSlug;
}
