declare module "jsen" {
  declare export interface Jsen$JsenFormats {
    [key: string]: string | RegExp | Function;
  }

  declare export interface Jsen$JsenSettings {
    missing$Ref?: boolean;
    greedy?: boolean;
    formats?: Jsen$JsenFormats;
    schemas?: any;
  }

  declare export interface Jsen$JsenBuildSettings {
    copy?: boolean;
    additionalProperties?: boolean;
  }

  declare export interface Jsen$JsenValidator {
    (data?: any): boolean;
    build(initial?: any, options?: Jsen$JsenBuildSettings): any;
    errors: Jsen$JsenValidateError[];
  }

  declare export interface Jsen$JsenValidateError {
    path: string;
    keyword: string;
    message?: string;
  }

  declare export interface Jsen$JsenUnique {
    (array: any[]): boolean;
    findIndex(
      array: any[],
      value: any,
      comparator: (obj1: any, obj2: any) => boolean
    ): number;
  }

  declare export interface Jsen$JsenMain {
    (schema?: any, options?: Jsen$JsenSettings): Jsen$JsenValidator;
    clone(data: any): any;
    equal(a: any, b: any): boolean;
    unique: Jsen$JsenUnique;
  }
  declare var Jsen: Jsen$Jsen$JsenMain;
  declare module.exports: typeof Jsen;
}
