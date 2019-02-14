declare module "matcher" {
  declare export default typeof matcher;

  declare function matcher(
    inputs: string[],
    patterns: string[],
    options?: matcher$Options
  ): string[];

  declare var npm$namespace$matcher: {
    isMatch: typeof matcher$isMatch
  };
  declare function matcher$isMatch(
    input: string,
    pattern: string,
    options?: matcher$Options
  ): boolean;

  declare interface matcher$Options {
    caseSensitive?: boolean;
  }
}
