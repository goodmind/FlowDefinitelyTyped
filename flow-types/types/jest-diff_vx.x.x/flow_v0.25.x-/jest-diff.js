declare module "jest-diff" {
  declare interface diff$DiffOptions {
    aAnnotation?: string;
    bAnnotation?: string;
    expand?: boolean;
    contextLines?: number;
  }
  declare function diff(
    a: any,
    b: any,
    options?: diff$diff$DiffOptions
  ): string;

  declare module.exports: typeof diff;
}
