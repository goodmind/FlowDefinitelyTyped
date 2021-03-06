declare module "oauth.js" {
  declare var npm$namespace$OAuth: {
    percentEncode: typeof OAuth$percentEncode,
    decodePercent: typeof OAuth$decodePercent,
    getParameterList: typeof OAuth$getParameterList,
    getParameterMap: typeof OAuth$getParameterMap,
    getParameter: typeof OAuth$getParameter,
    formEncode: typeof OAuth$formEncode,
    decodeForm: typeof OAuth$decodeForm,
    setParameter: typeof OAuth$setParameter,
    setParameters: typeof OAuth$setParameters,
    completeRequest: typeof OAuth$completeRequest,
    setTimestampAndNonce: typeof OAuth$setTimestampAndNonce,
    addToURL: typeof OAuth$addToURL,
    getAuthorizationHeader: typeof OAuth$getAuthorizationHeader,
    correctTimestampFromSrc: typeof OAuth$correctTimestampFromSrc,
    correctTimestamp: typeof OAuth$correctTimestamp,
    timestamp: typeof OAuth$timestamp,
    nonce: typeof OAuth$nonce,
    timeCorrectionMsec: typeof OAuth$timeCorrectionMsec,
    SignatureMethod: typeof OAuth$SignatureMethod
  };

  /**
   * An Array of name-value pairs [[name, value], [name2, value2]].
   */
  declare type OAuth$ParameterList = [string, string][];

  /**
   * A map {name: value, name2: value2}.
   */
  declare type OAuth$ParameterMap = {
    [name: string]: string
  };

  declare type OAuth$ParameterListOrMap =
    | OAuth$ParameterList
    | OAuth$ParameterMap;

  /**
   * An OAuth message is represented as an object like this:
   *    { method: "GET", action: "http://server.com/path", parameters: ... }
   */
  declare interface OAuth$Message {
    action: string;
    method: string;
    parameters: OAuth$ParameterListOrMap;
  }

  /**
   * SignatureMethod expects an accessor object to be like this:
   *    {tokenSecret: "lakjsdflkj...", consumerSecret: "QOUEWRI..", accessorSecret: "xcmvzc..."}
   * The accessorSecret property is optional.
   */
  declare interface OAuth$Accessor {
    consumerKey: string;
    consumerSecret: string;
    accessorSecret?: string;
    token: string;
    tokenSecret: string;
  }

  /**
   * Encode text value according to OAuth Percent Encoding.
   * @see {@link https://tools.ietf.org/html/rfc5849#section-3.6}
   * @param s Target text value.
   */
  declare function OAuth$percentEncode(s: string): string;

  /**
   * Encode text values according to OAuth Percent Encoding.
   * Encoded values are joined with an ampersand character (&) in between them.
   * @see {@link https://tools.ietf.org/html/rfc5849#section-3.6}
   * @param s Target text values.
   */
  declare function OAuth$percentEncode(s: string[]): string;

  /**
   * Decode percent-encoded value.
   * @see {@link https://tools.ietf.org/html/rfc5849#section-3.6}
   * @param s Target percent-encoded value.
   */
  declare function OAuth$decodePercent(s: string): string;

  /**
   * Convert the given parameters to an Array of name-value pairs.
   */
  declare function OAuth$getParameterList(
    parameters: OAuth$ParameterListOrMap
  ): OAuth$ParameterList;

  /**
   * Convert the given parameters to an Array of name-value pairs.
   */
  declare function OAuth$getParameterList(
    parameters: string
  ): OAuth$ParameterList;

  /**
   * Convert the given parameters to a map from name to value.
   */
  declare function OAuth$getParameterMap(
    parameters: OAuth$ParameterListOrMap
  ): OAuth$ParameterMap;

  /**
   * Convert the given parameters to a map from name to value.
   */
  declare function OAuth$getParameterMap(
    parameters: string
  ): OAuth$ParameterMap;

  declare function OAuth$getParameter(
    parameters: OAuth$ParameterListOrMap,
    name: string
  ): string;

  declare function OAuth$getParameter(parameters: string, name: string): string;

  declare function OAuth$formEncode(
    parameters: OAuth$ParameterListOrMap
  ): string;

  declare function OAuth$decodeForm(form: string): OAuth$ParameterList;

  declare function OAuth$setParameter(
    message: OAuth$Message,
    name: string,
    value: string
  ): void;

  declare function OAuth$setParameters(
    message: OAuth$Message,
    parameters: OAuth$ParameterListOrMap
  ): void;

  declare function OAuth$setParameters(
    message: OAuth$Message,
    parameters: string
  ): void;

  /**
   * Fill in parameters to help construct a request message.
   * This function doesn't fill in every parameter.
   * @param message Target request message.
   * @param accessor Accessor object. The accessorSecret property is optional.
   */
  declare function OAuth$completeRequest(
    message: OAuth$Message,
    accessor: OAuth$Accessor
  ): void;

  declare function OAuth$setTimestampAndNonce(message: OAuth$Message): void;

  /**
   * Add specified parameters into URL as query parameters.
   * @param url URL that parameters added into.
   * @param parameters Parameters added into URL.
   * @return New URL string.
   */
  declare function OAuth$addToURL(
    url: string,
    parameters: OAuth$ParameterListOrMap
  ): string;

  /**
   * Construct the value of the Authorization header for an HTTP request.
   */
  declare function OAuth$getAuthorizationHeader(
    realm: string,
    parameters: OAuth$ParameterListOrMap
  ): string;

  declare function OAuth$getAuthorizationHeader(
    realm: string,
    parameters: string
  ): string;

  /**
   * Correct the time using a parameter from the URL from which the last script was loaded.
   */
  declare function OAuth$correctTimestampFromSrc(parameterName?: string): void;

  /**
   * Generate timestamps starting with the given value.
   */
  declare function OAuth$correctTimestamp(timestamp: number): void;

  /**
   * The difference between the correct time and my clock.
   */
  declare var OAuth$timeCorrectionMsec: number;

  declare function OAuth$timestamp(): number;

  declare function OAuth$nonce(length: number): string;

  declare interface OAuth$Uri {
    source: string;
    protocol: string;
    authority: string;
    userInfo: string;
    user: string;
    password: string;
    host: string;
    port: string;
    relative: string;
    path: string;
    directory: string;
    file: string;
    query: string;
    anchor: string;
  }

  declare interface OAuth$SignatureMethodStatic {
    sign(message: OAuth$Message, accessor: OAuth$Accessor): void;

    /**
     * Instantiate a SignatureMethod for the given method name.
     */
    newMethod(name: string, accessor: OAuth$Accessor): OAuth$SignatureMethod;

    /**
     * A map from signature method name to constructor.
     */
    REGISTERED: {
      [name: string]: {
        new(): OAuth$SignatureMethod
      }
    };

    /**
     * Subsequently, the given constructor will be used for the named methods.
     * The constructor will be called with no parameters.
     * The resulting object should usually implement getSignature(baseString).
     * You can easily define such a constructor by calling makeSubclass method.
     */
    registerMethodClass(
      names: string[],
      classConstructor: {
        new(): OAuth$SignatureMethod
      }
    ): void;

    /**
     * Create a subclass of OAuth.SignatureMethod, with the given getSignature function.
     * @param getSignatureFunction
     */
    makeSubclass(
      getSignatureFunction: (baseString: string) => string
    ): {
      new(): OAuth$SignatureMethod
    };

    /**
     * Generate a signature base string from a Message object.
     * @see {@link https://tools.ietf.org/html/rfc5849#section-3.4.1}
     * @param message Source of the signature base string.
     */
    getBaseString(message: OAuth$Message): string;
    normalizeUrl(url: string): string;
    parseUri(str: string): OAuth$Uri;
    normalizeParameters(parameters: OAuth$ParameterListOrMap): string;
  }

  declare interface OAuth$SignatureMethod {
    getSignature(baseString: string): string;
    key: string;

    /**
     * Add a signature to the message.
     */
    sign(message: OAuth$Message): string;

    /**
     * Set the key string for signing.
     */
    initialize(name: string, accessor: OAuth$Accessor): void;
  }

  declare var OAuth$SignatureMethod: OAuth$SignatureMethodStatic;
}
