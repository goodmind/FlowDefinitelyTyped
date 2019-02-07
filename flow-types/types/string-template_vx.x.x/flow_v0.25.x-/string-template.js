/**
 * Format
 */
declare interface StringTemplate$Format {
  (string: string, object: any): string;
  (string: string, array: Array<any>): string;
  (string: string, ...array: Array<any>): string;
  (string: string): string;
}

/**
 * Compile
 */
declare interface StringTemplate$Compile {
  (string: string, inline?: boolean): StringTemplate$Template;
}

declare interface StringTemplate$Template {
  (object: any): string;
  (array: Array<any>): string;
  (...array: Array<any>): string;
}
declare module "string-template" {
  declare var format: StringTemplate$StringTemplate$Format;
  declare module.exports: typeof format;
}
declare module "string-template/compile" {
  declare var comile: StringTemplate$StringTemplate$Compile;
  declare module.exports: typeof comile;
}
