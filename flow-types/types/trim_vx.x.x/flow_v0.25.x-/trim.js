declare module "trim" {
  declare function Trim(str: string): string;

  declare var npm$namespace$Trim: {
    left: typeof Trim$left,
    right: typeof Trim$right
  };
  declare function Trim$left(str: string): string;

  declare function Trim$right(str: string): string;

  declare module.exports: typeof Trim;
}
