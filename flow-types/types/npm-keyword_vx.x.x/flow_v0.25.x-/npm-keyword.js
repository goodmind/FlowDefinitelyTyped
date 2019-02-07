declare module "npm-keyword" {
  declare module.exports: typeof npmKeyword;

  /**
   * Get a list of npm packages with a certain keyword.
   * @param keyword One or more keywords. Only matches packages that have *all* the given keywords. Example: `['string', 'camelcase']`
   * @returns A promise for a list of packages having the specified keyword in their package.json `keyword` property.
   */
  declare function npmKeyword(
    keyword: string | string[],
    options?: npmKeyword$npmKeyword$Options
  ): Promise<npmKeyword$npmKeyword$PackageDescriptor[]>;

  declare var npm$namespace$npmKeyword: {
    names: typeof npmKeyword$names,
    count: typeof npmKeyword$count
  };

  /**
   * @param keyword One or more keywords. Only matches packages that have *all* the given keywords. Example: `['string', 'camelcase']`
   * @returns A promise for a list of package names. Use this if you don't need the description as it's faster.
   */
  declare function npmKeyword$names(
    keyword: string | string[],
    options?: npmKeyword$Options
  ): Promise<string[]>;

  /**
   * @param keyword One or more keywords. Only matches packages that have *all* the given keywords. Example: `['string', 'camelcase']`
   * @returns A promise for the count of packages.
   */
  declare function npmKeyword$count(
    keyword: string | string[]
  ): Promise<number>;

  declare interface npmKeyword$Options {
    /**
     * Limits the amount of results.
     * @default 250
     */
    size?: number;
  }

  declare interface npmKeyword$PackageDescriptor {
    name: string;
    description: string;
  }
}
