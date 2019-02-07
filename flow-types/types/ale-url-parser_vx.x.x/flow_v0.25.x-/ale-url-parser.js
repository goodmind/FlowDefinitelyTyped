declare module "ale-url-parser" {
  declare export interface QueryParams {
    [key: string]: any;
  }
  declare export interface UrlObject {
    protocol?: string;
    host?: string;
    path?: string[];
    query?: QueryParams;
    hash?: string;
  }

  /**
   * Parse url string into url object.
   * @return UrlObject
   */
  declare export function parse(url: string): UrlObject;

  /**
   * Stringify url object into url string.
   * @return string
   */
  declare export function stringify(urlObject: UrlObject): string;
}
