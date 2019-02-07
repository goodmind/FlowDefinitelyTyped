declare module "typpy" {
  declare module.exports: typeof Typpy;

  declare var Typpy: Typpy$Typpy$TyppyFn;
  declare type Typpy$TyppyFn = Typpy$IsFn &
    Typpy$CompareFn & {
      is: Typpy$CompareFn,
      get: Typpy$GetFn
    };

  declare interface Typpy$IsFn {
    (input?: void): "undefined";
    (input: null): "null";
    (input: string): "string";
    (input: boolean): "boolean";
    (input: any[]): "array";
    (input: RegExp): "regexp";
    (input: Function): "function";
    (input: number): "number" | "nan";
    (input: any): string;
  }

  declare interface Typpy$CompareFn {
    (input: void, compareTo: "undefined" | void): true;
    (input: null, compareTo: "null" | null): true;
    (input: string, compareTo: "string" | StringConstructor): true;
    (input: boolean, compareTo: "boolean" | BooleanConstructor): true;
    (input: any[], compareTo: "array" | ArrayConstructor): true;
    (input: RegExp, compareTo: "regexp" | RegExpConstructor): true;
    (input: Function, compareTo: "function" | FunctionConstructor): true;
    (
      input: number,
      compareTo: "number" | "nan" | NumberConstructor | number
    ): boolean;
    (
      input: { [key: string]: any },
      compareTo: "object" | ObjectConstructor
    ): boolean;
    (input: any, compareTo: any): boolean;
  }

  declare interface Typpy$GetFn {
    (input?: void, asString?: false): void;
    (input: null, asString?: false): null;
    (input: string, asString?: false): StringConstructor;
    (input: number, asString?: false): NumberConstructor | number;
    (input: boolean, asString?: false): BooleanConstructor;
    (input: any[], asString?: false): ArrayConstructor;
    (input: RegExp, asString?: false): RegExpConstructor;
    (input: Function, asString?: false): FunctionConstructor;
    (input: any, asString?: false): Typpy$ConstructorFn;
    (input: void, asString: true): "undefined";
    (input: null, asString: true): "null";
    (input: string, asString: true): "string";
    (input: number, asString: true): "number" | "nan";
    (input: boolean, asString: true): "boolean";
    (input: any[], asString: true): "array";
    (input: RegExp, asString: true): "regexp";
    (input: Function, asString: true): "function";
    (input: any, asString: true): string;
  }

  declare interface Typpy$ConstructorFn {
    new(...args: any[]): any;
  }
}
