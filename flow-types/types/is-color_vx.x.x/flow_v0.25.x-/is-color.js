declare module "is-color" {
  declare function isColor(str: string): boolean;

  declare var npm$namespace$isColor: {
    isRgb: typeof isColor$isRgb,
    isRgba: typeof isColor$isRgba,
    isHsl: typeof isColor$isHsl,
    isHsla: typeof isColor$isHsla,
    isHex: typeof isColor$isHex,
    isKeyword: typeof isColor$isKeyword,
    isInherit: typeof isColor$isInherit,
    isCurrentColor: typeof isColor$isCurrentColor,
    isTransparent: typeof isColor$isTransparent
  };
  declare function isColor$isRgb(str: string): boolean;

  declare function isColor$isRgba(str: string): boolean;

  declare function isColor$isHsl(str: string): boolean;

  declare function isColor$isHsla(str: string): boolean;

  declare function isColor$isHex(str: string): boolean;

  declare function isColor$isKeyword(str: string): boolean;

  declare function isColor$isInherit(str: string): boolean;

  declare function isColor$isCurrentColor(str: string): boolean;

  declare function isColor$isTransparent(str: string): boolean;

  declare export default typeof isColor;
}
