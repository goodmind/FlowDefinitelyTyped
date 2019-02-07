declare module "original" {
  /**
   * Transform an URL to a valid origin value.
   * @param url URL to transform to it's origin.
   * @returns The origin.
   * @api public
   */
  declare function origin(
    url:
      | string
      | { [key: string]: any }
      | {
          protocol: string,
          host: string
        }
  ): string;

  declare var npm$namespace$origin: {
    same: typeof origin$same
  };

  /**
   * Check if the origins are the same.
   * @param a URL or origin of a.
   * @param b URL or origin of b.
   * @returns true if origins are the same, false otherwise
   * @api public
   */
  declare function origin$same(a: string, b: string): boolean;

  declare module.exports: typeof origin;
}
