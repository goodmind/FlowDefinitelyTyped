declare module "url-regex" {
  /**
   * Regular expression for matching URLs.
   */
  declare function urlRegex(options?: {
    /**
     * Only match an exact string. Useful with RegExp#test to check if a string is a URL.
     */
    exact?: boolean,

    /**
     * Force URLs to start with a valid protocol or www. If set to false it'll match the TLD against a list of valid TLDs(https://github.com/stephenmathieson/node-tlds).
     */
    strict?: boolean
  }): RegExp;

  declare module.exports: typeof urlRegex;
}
