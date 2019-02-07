declare module "string-hash" {
  declare function stringHash(str: string): number;

  declare module.exports: typeof stringHash;
}
