declare module "@sindresorhus/string-hash" {
  declare module.exports: typeof stringHash;

  declare function stringHash(input: string): number;
}
