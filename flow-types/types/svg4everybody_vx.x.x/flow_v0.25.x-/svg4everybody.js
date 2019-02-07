declare module "svg4everybody" {
  declare module.exports: typeof svg4everybody;

  declare function svg4everybody(
    options?: svg4everybody$svg4everybody$Svg4everybodyOpts
  ): void;

  declare interface svg4everybody$Svg4everybodyOpts {
    fallback?: (src: string, svg: SVGElement, use: SVGUseElement) => string;
    validate?: (src: string, svg: SVGElement, use: SVGUseElement) => boolean;
    nosvg?: boolean;
    polyfill?: boolean;
  }
}
