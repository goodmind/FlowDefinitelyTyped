declare module "replace-string" {
  declare module.exports: typeof replaceString;

  declare function replaceString(
    input: string,
    needle: string,
    replacement: string | replaceString$replaceString$ReplacementFn,
    options?: replaceString$replaceString$Options
  ): string;

  declare type replaceString$ReplacementFn = (
    needle: string,
    matchCount: number,
    input: string,
    matchIndex: number
  ) => string;

  declare interface replaceString$Options {
    fromIndex?: number;
  }
}
