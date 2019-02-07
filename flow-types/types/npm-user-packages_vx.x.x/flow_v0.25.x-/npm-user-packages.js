declare module "npm-user-packages" {
  declare module.exports: typeof npmUserPackages;

  /**
   * Get packages by a npm user.
   * @param username User to fetch packages from.
   */
  declare function npmUserPackages(
    username: string
  ): Promise<npmUserPackages$npmUserPackages$PackageData[]>;

  declare interface npmUserPackages$PackageData {
    author: {
      email?: string,
      name: string,
      url?: string,
      username?: string
    };
    date: string;
    description: string;
    keywords: string[];
    links: {
      bugs?: string,
      homepage?: string,
      npm: string,
      repository?: string
    };
    maintainers: Array<{
      email: string,
      username: string
    }>;
    name: string;
    publisher: {
      email: string,
      username: string
    };
    scope: string;
    version: string;
  }
}
