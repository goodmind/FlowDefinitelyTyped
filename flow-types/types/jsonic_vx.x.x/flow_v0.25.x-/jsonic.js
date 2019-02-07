declare module "jsonic" {
  declare function jsonic(text: string): any;

  declare var npm$namespace$jsonic: {
    stringify: typeof jsonic$stringify
  };
  declare interface jsonic$Options {
    depth?: number;
    maxitems?: number;
    maxchars?: number;
    omit?: string[];
    exclude?: string[];
  }

  declare function jsonic$stringify(val: any, opts?: jsonic$Options): string;

  declare module.exports: typeof jsonic;
}
