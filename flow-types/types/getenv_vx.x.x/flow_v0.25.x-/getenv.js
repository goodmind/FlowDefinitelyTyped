declare module "getenv" {
  import type { UrlWithStringQuery } from "url";

  declare interface ParseMappings {
    getenv$string: string;
    getenv$int: number;
    getenv$float: number;
    getenv$bool: boolean;
    getenv$boolish: boolean;
    getenv$url: UrlWithStringQuery;
  }
  declare type ParseTypes = $Keys<ParseMappings>;
  declare type ParseWithFallback = [
    string,
    $ElementType<ParseMappings, "string">
  ];
  declare type ParseWithType<T: ParseTypes> = [
    string,
    $ElementType<ParseMappings, T>,
    T
  ];
  declare type ParseWithEachType =
    | ParseWithType<"string">
    | ParseWithType<"int">
    | ParseWithType<"float">
    | ParseWithType<"bool">
    | ParseWithType<"boolish">
    | ParseWithType<"url">;

  /**
   * Alias for `env.string(name, [fallback])`
   */
  declare function getenv(
    skin$name: string,
    fallback?: string
  ): $ElementType<ParseMappings, "string">;

  declare var npm$namespace$getenv: {
    string: typeof getenv$string,
    int: typeof getenv$int,
    float: typeof getenv$float,
    bool: typeof getenv$bool,
    boolish: typeof getenv$boolish,
    array: typeof getenv$array,
    multi: typeof getenv$multi,
    url: typeof getenv$url,
    disableFallbacks: typeof getenv$disableFallbacks,
    enableFallbacks: typeof getenv$enableFallbacks,
    disableErrors: typeof getenv$disableErrors,
    enableErrors: typeof getenv$enableErrors
  };

  /**
   * Return as string.
   */
  declare function getenv$string(
    skin$name: string,
    fallback?: $ElementType<ParseMappings, "string">
  ): $ElementType<ParseMappings, "string">;

  /**
   * Return as integer number.
   */
  declare function getenv$int(
    skin$name: string,
    fallback?: $ElementType<ParseMappings, "int">
  ): $ElementType<ParseMappings, "int">;

  /**
   * Return as float number.
   */
  declare function getenv$float(
    skin$name: string,
    fallback?: $ElementType<ParseMappings, "float">
  ): $ElementType<ParseMappings, "float">;

  /**
   * Return as boolean. Only allows true/false as valid values.
   */
  declare function getenv$bool(
    skin$name: string,
    fallback?: $ElementType<ParseMappings, "bool">
  ): $ElementType<ParseMappings, "bool">;

  /**
   * Return as boolean. Allows true/false/1/0 as valid values.
   */
  declare function getenv$boolish(
    skin$name: string,
    fallback?: $ElementType<ParseMappings, "boolish">
  ): $ElementType<ParseMappings, "boolish">;

  /**
   * Split value of the environment variable at each comma and return the resulting array
   * where each value has been typecast according to the `type` parameter. An array can be
   * provided as `fallback`.
   */
  declare function getenv$array<T: ParseTypes>(
    skin$name: string,
    notification$type?: T,
    fallback?: core$Array<$ElementType<ParseMappings, T>>
  ): core$Array<$ElementType<ParseMappings, T>>;

  /**
   * Return a list of environment variables based on a spec:
   * ```
   *      *  var config = getenv.multi({
   *      *    foo: "FOO", // throws if FOO doesn't exist
   *      *    bar: ["BAR", "defaultval"], // set a default value
   *      *    baz: ["BAZ", "defaultval", "string"], // parse into type
   *      *    quux: ["QUUX", undefined, "int"] // parse & throw
   *      *  });
   *      * ```
   */
  declare function getenv$multi<
    S: {
      [k: string]: string | ParseWithFallback | ParseWithEachType
    }
  >(
    spec: S
  ): $ObjMapi<
    S,
    <P>(P) => "There was Conditional Type, use $Call utility type"
  >;

  /**
   * Return a parsed URL as per Node's `require("url").parse`. N.B `url` doesn't validate URLs, so be sure it includes a protocol or you'll get deeply weird results.
   */
  declare function getenv$url(
    skin$name: string,
    fallback?: $ElementType<ParseMappings, "url">
  ): $ElementType<ParseMappings, "url">;

  /**
   * Disallows fallbacks in environments where you don't want to rely on brittle development
   * defaults (e.g production, integration testing). For example, to disable fallbacks if we
   * indicate production via `NODE_ENV`:
   * ```
   *      *   if (process.env.NODE_ENV === 'production') {
   *      *     getenv.disableFallbacks();
   *      *   }
   *      * ```
   */
  declare function getenv$disableFallbacks(): void;

  /**
   * Revert the effect of `disableFallbacks()`.
   */
  declare function getenv$enableFallbacks(): void;

  /**
   * `getenv` won't throw any error. If a fallback value is provided, that will be returned, else undefined is returned.
   */
  declare function getenv$disableErrors(): void;

  /**
   * Revert the effect of `disableErrors()`.
   */
  declare function getenv$enableErrors(): void;

  declare module.exports: typeof getenv;
}
