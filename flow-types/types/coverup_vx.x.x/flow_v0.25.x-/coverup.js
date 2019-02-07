declare module "coverup" {
  declare module.exports: typeof coverup;

  declare function coverup(
    value: string,
    options?: coverup$coverup$Options
  ): string;

  declare interface coverup$Options {
    char?: string;
    keepLeft?: number;
    keepRight?: number;
    compactTo?: number;
    keepSymbols?: boolean;
  }
}
