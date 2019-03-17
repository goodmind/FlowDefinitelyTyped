declare module "cssesc" {
  declare export default typeof cssesc;

  declare function cssesc(
    string: string,
    options?: $ReadOnly<$Shape<cssesc$Options>>
  ): string;

  declare var cssesc: typeof npm$namespace$cssesc;

  declare var npm$namespace$cssesc: {
    options: typeof cssesc$options,
    version: typeof cssesc$version
  };
  declare interface cssesc$Options {
    escapeEverything: boolean;
    isIdentifier: boolean;
    quotes: string;
    wrap: boolean;
  }

  declare var cssesc$options: cssesc$Options;

  declare var cssesc$version: string;
}
