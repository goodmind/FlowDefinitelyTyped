declare module "umd" {
  /**
   * Universal Module Definition for use in automated build systems
   * - simple synchronous wrapping of a string
   * - return style module support
   * - CommonJS support
   * - prevents internal UMDs from conflicting
   */
  declare function Umd(
    name: string,
    src: string,
    options?: boolean | Umd$Umd$Options
  ): string;

  declare var npm$namespace$Umd: {
    prelude: typeof Umd$prelude,
    postlude: typeof Umd$postlude
  };
  declare interface Umd$Options {
    commonJS?: boolean;
  }

  declare function Umd$prelude(
    moduleName: string,
    options?: boolean | Umd$Options
  ): string;

  declare function Umd$postlude(
    moduleName: string,
    options?: boolean | Umd$Options
  ): string;

  declare module.exports: typeof Umd;
}
