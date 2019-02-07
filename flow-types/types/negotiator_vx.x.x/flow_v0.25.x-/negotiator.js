declare module "negotiator" {
  declare module.exports: typeof Negotiator;

  declare class Negotiator {
    /**
     * The negotiator constructor receives a request object
     */
    constructor(req: {
      headers: Negotiator$Negotiator$Headers
    }): this;

    /**
 * Returns the most preferred media type from the client.
 * @param availableMediaTypes When provided, returns the most preferred media type
from a list of available media types.
 */
    mediaType(availableMediaTypes?: string[]): string | void;

    /**
 * Returns an array of preferred media types ordered by the client preference
 * @param availableMediaTypes When provided, returns an array of preferred media
types ordered by priority from a list of available media types.
 */
    mediaTypes(availableMediaTypes?: string[]): string[];

    /**
 * Returns the most preferred language from the client.
 * @param availableLanguages When provided, returns the most preferred language
from a list of available languages.
 */
    language(availableLanguages?: string[]): string | void;

    /**
 * Returns an array of preferred languages ordered by the client preference.
 * @param availableLanguages When provided, returns an array of preferred languages
ordered by priority from a list of available languages.
 */
    languages(availableLanguages?: string[]): string[];

    /**
 * Returns the most preferred charset from the client.
 * @param availableCharsets When provided, returns the most preferred charset
from a list of available charsets.
 */
    charset(availableCharsets?: string[]): string | void;

    /**
 * Returns an array of preferred charsets ordered by the client preference.
 * @param availableCharsets When provided, returns an array of preferred charsets
ordered by priority from a list of available charsets.
 */
    charsets(availableCharsets?: string[]): string[];

    /**
 * Returns the most preferred encoding from the client.
 * @param availableEncodings When provided, returns the most preferred encoding
from a list of available encodings.
 */
    encoding(availableEncodings?: string[]): string | void;

    /**
 * Returns an array of preferred encodings ordered by the client preference.
 * @param availableEncodings When provided, returns an array of preferred encodings
ordered by priority from a list of available encodings.
 */
    encodings(availableEncodings?: string[]): string[];
  }
  declare interface Negotiator$Headers {
    [key: string]: string | string[] | void;
  }
}
