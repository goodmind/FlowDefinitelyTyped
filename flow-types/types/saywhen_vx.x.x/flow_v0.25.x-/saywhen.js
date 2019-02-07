declare module "saywhen" {
  declare type Func = (...args: any[]) => any;
  declare function when<T: Func>(spy: T & jasmine.Spy): CallHandler<T>;

  declare var npm$namespace$when: {
    captor: typeof when$captor,
    noConflict: typeof when$noConflict,
    is: typeof when$is
  };
  declare function when$captor<T>(val?: T): MatcherProxy<T>;

  declare function when$noConflict(): void;

  declare function when$is<T>(val: T): boolean;

  declare interface CallHandler<T: Func> {
    +isCalled: Proxy<T>;
    isCalledWith(...args: any[]): Proxy<T>;
  }
  declare interface Proxy<T: Func> {
    then(fn: T): Proxy<T>;
    thenReturn(val: any): Proxy<T>;
    thenThrow(err: Error): Proxy<T>;
  }
  declare interface MatcherProxy<T> {
    (arg: T): boolean;
    +latest: T;
    values(): T[];
  }
  declare module.exports: typeof when;
}
