declare module "@sindresorhus/djb2a" {
  declare module.exports: typeof djb2a;

  declare function djb2a(string: string): number;
}
