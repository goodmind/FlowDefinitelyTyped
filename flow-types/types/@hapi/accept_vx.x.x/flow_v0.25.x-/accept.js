declare module "@hapi/accept" {
  declare export function charset(
    charsetHeader?: string,
    preferences?: string[]
  ): string;

  declare export function charsets(charsetHeader?: string): string[];

  declare export function encoding(
    encodingHeader?: string,
    preferences?: string[]
  ): string;

  declare export function encodings(encodingHeader?: string): string[];

  declare export function language(
    languageHeader?: string,
    preferences?: string[]
  ): string;

  declare export function languages(languageHeader?: string): string[];

  declare export function mediaType(
    mediaTypeHeader?: string,
    preferences?: string[]
  ): string;

  declare export function mediaTypes(mediaTypeHeader?: string): string[];

  declare export function parseAll(
    headers: Record<string, string | string[] | void>
  ): {
    charsets: string[],
    encodings: string[],
    languages: string[],
    mediaTypes: string[]
  };
}
