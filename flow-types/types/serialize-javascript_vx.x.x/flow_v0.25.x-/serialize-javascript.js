declare module "serialize-javascript" {
  declare interface serializeJavascript$SerializeJSOptions {
    /**
     * This option is the same as the space argument that can be passed to JSON.stringify.
     * It can be used to add whitespace and indentation to the serialized output to make it more readable.
     */
    space?: string | number;

    /**
     * This option is a signal to serialize() that the object being serialized does not contain any function or regexps values.
     * This enables a hot-path that allows serialization to be over 3x faster.
     * If you're serializing a lot of data, and know its pure JSON, then you can enable this option for a speed-up.
     */
    isJSON?: boolean;

    /**
     * This option is to signal serialize() that we want to do a straight conversion, without the XSS protection.
     * This options needs to be explicitly set to true. HTML characters and JavaScript line terminators will not be escaped.
     * You will have to roll your own.
     */
    unsafe?: boolean;
  }

  /**
   * Serialize JavaScript to a superset of JSON that includes regular expressions and functions.
   * @param input data to serialize
   * @param options optional object
   * @returns serialized data
   */
  declare function serializeJavascript(
    input: any,
    options?: serializeJavascript$serializeJavascript$SerializeJSOptions
  ): string;

  declare module.exports: typeof serializeJavascript;
}
