declare module "gapi.client.translate" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    detections: typeof client$detections,
    languages: typeof client$languages,
    translations: typeof client$translations
  };

  /**
   * Load Google Cloud Translation API v2
   */
  declare function client$load(
    name: "translate",
    version: "v2"
  ): PromiseLike<void>;

  declare function client$load(
    name: "translate",
    version: "v2",
    callback: () => any
  ): void;

  declare var client$detections: translate$translate$DetectionsResource;

  declare var client$languages: translate$translate$LanguagesResource;

  declare var client$translations: translate$translate$TranslationsResource;

  declare interface translate$DetectLanguageRequest {
    /**
     * The input text upon which to perform language detection. Repeat this
     * parameter to perform language detection on multiple text inputs.
     */
    q?: string[];
  }

  declare interface translate$DetectionsListResponse {
    /**
     * A detections contains detection results of several text
     */
    client$detections?: any[];
  }

  declare interface translate$GetSupportedLanguagesRequest {
    /**
     * The language to use to return localized, human readable names of supported
     * languages.
     */
    target?: string;
  }

  declare interface translate$LanguagesListResponse {
    /**
     * List of source/target languages supported by the translation API. If target parameter is unspecified, the list is sorted by the ASCII code point order
     * of the language code. If target parameter is specified, the list is sorted by the collation order of the language name in the target language.
     */
    client$languages?: translate$LanguagesResource[];
  }

  declare interface translate$LanguagesResource {
    /**
     * Supported language code, generally consisting of its ISO 639-1
     * identifier. (E.g. 'en', 'ja'). In certain cases, BCP-47 codes including
     * language + region identifiers are returned (e.g. 'zh-TW' and 'zh-CH')
     */
    language?: string;

    /**
     * Human readable name of the language localized to the target language.
     */
    name?: string;

    /**
     * Returns a list of supported languages for translation.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The model type for which supported languages should be returned.
       */
      model?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The language to use to return localized, human readable names of supported
       * languages.
       */
      target?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<translate$LanguagesListResponse>;
  }

  declare interface translate$TranslateTextRequest {
    /**
     * The format of the source text, in either HTML (default) or plain-text. A
     * value of "html" indicates HTML and a value of "text" indicates plain-text.
     */
    format?: string;

    /**
     * The `model` type requested for this translation. Valid values are
     * listed in public documentation.
     */
    model?: string;

    /**
     * The input text to translate. Repeat this parameter to perform translation
     * operations on multiple text inputs.
     */
    q?: string[];

    /**
     * The language of the source text, set to one of the language codes listed in
     * Language Support. If the source language is not specified, the API will
     * attempt to identify the source language automatically and return it within
     * the response.
     */
    source?: string;

    /**
     * The language to use for translation of the input text, set to one of the
     * language codes listed in Language Support.
     */
    target?: string;
  }

  declare interface translate$TranslationsListResponse {
    /**
     * Translations contains list of translation results of given text
     */
    client$translations?: translate$TranslationsResource[];
  }

  declare interface translate$TranslationsResource {
    /**
     * The source language of the initial request, detected automatically, if
     * no source language was passed within the initial request. If the
     * source language was passed, auto-detection of the language will not
     * occur and this field will be empty.
     */
    detectedSourceLanguage?: string;

    /**
     * The `model` type used for this translation. Valid values are
     * listed in public documentation. Can be different from requested `model`.
     * Present only if specific model type was explicitly requested.
     */
    model?: string;

    /**
     * Text translated into the target language.
     */
    translatedText?: string;

    /**
     * Translates input text, returning translated text.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * The customization id for translate
       */
      cid?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The format of the source text, in either HTML (default) or plain-text. A
       * value of "html" indicates HTML and a value of "text" indicates plain-text.
       */
      format?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The `model` type requested for this translation. Valid values are
       * listed in public documentation.
       */
      model?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The input text to translate. Repeat this parameter to perform translation
       * operations on multiple text inputs.
       */
      q: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The language of the source text, set to one of the language codes listed in
       * Language Support. If the source language is not specified, the API will
       * attempt to identify the source language automatically and return it within
       * the response.
       */
      source?: string,

      /**
       * The language to use for translation of the input text, set to one of the
       * language codes listed in Language Support.
       */
      target: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<translate$TranslationsListResponse>;

    /**
     * Translates input text, returning translated text.
     */
    translate(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<translate$TranslationsListResponse>;
  }

  declare interface translate$DetectionsResource {
    /**
     * Detects the language of text within a request.
     */
    detect(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<translate$DetectionsListResponse>;

    /**
     * Detects the language of text within a request.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The input text upon which to perform language detection. Repeat this
       * parameter to perform language detection on multiple text inputs.
       */
      q: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<translate$DetectionsListResponse>;
  }
}
