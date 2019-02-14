declare module "urlencode" {
  declare interface charsetParam {
    charset: string;
  }

  /**
   * Encode string
   * @param str The string for encoding.
   */
  declare function urlencode(str: string, charset?: string): string;

  declare var npm$namespace$urlencode: {
    encode: typeof urlencode$encode,
    decode: typeof urlencode$decode,
    parse: typeof urlencode$parse,
    stringify: typeof urlencode$stringify
  };

  /**
   * Encode string
   * @param str The string for encoding.
   */
  declare function urlencode$encode(str: string, charset?: string): string;

  /**
   * Decode string
   * @param encodedString The encoded string.
   */
  declare function urlencode$decode(
    encodedString: string,
    charset?: string
  ): string;

  /**
   * Parse querystring
   * @param queryString Querystring
   * @param charsetParam The charset for parsing
   */
  declare function urlencode$parse(
    queryString: string,
    charsetParam: urlencode$charsetParam
  ): any;

  declare interface urlencode$charsetParam {
    charset: string;
  }

  /**
   * Stringify object
   * @param obj Query Object
   * @param charsetParam The charset for parsing
   */
  declare function urlencode$stringify(
    obj: any,
    prefix?: urlencode$charsetParam,
    charsetParam?: urlencode$charsetParam
  ): string;

  declare export default typeof urlencode;
}
