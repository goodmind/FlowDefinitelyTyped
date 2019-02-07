declare module "os-name" {
  declare module.exports: typeof osName;

  declare function osName(): string;

  declare function osName(platform: NodeJS.Platform, release: string): string;
}
