declare module "latest-version" {
  declare module.exports: typeof latestVersion;

  declare function latestVersion(
    name: string,
    options?: latestVersion$latestVersion$Options
  ): Promise<string>;

  declare interface latestVersion$Options {
    version?: string;
  }
}
