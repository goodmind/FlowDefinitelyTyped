declare module "global" {
  declare interface Loop {
    begin?: number;
    end?: number;
    step?: number;
  }
  declare interface ConnectOption {
    target: any;
    args?: any[];
    ok?: number;
    ng?: number;
  }
  declare interface RetryOption {
    wait: number;
  }
  declare interface DeferredizedFunction {
    (...arg: any[]): Deferred;
  }
  declare interface DeferredizedFunctionWithNumber {
    (n: number): Deferred;
  }
  declare interface FunctionWithNumber {
    (i: number, o?: any): any;
  }
  declare interface ErrorCallback {
    (d: Deferred, ...args: any[]): any;
  }
  declare class Deferred {
    static methods: string[];
    static isDeferred(obj: any): boolean;
    static next(fun: Function): Deferred;
    static chain(...args: any[]): Deferred;
    static wait(n: number): Deferred;
    static call(fun?: Function, ...args: any[]): Deferred;
    static parallel(dl: any): Deferred;
    static earlier(dl: any): Deferred;
    static loop(n: number, fun: FunctionWithNumber): Deferred;
    static loop(n: Loop, fun: FunctionWithNumber): Deferred;
    static repeat(n: number, fun: FunctionWithNumber): Deferred;
    static register(name: string, fun: DeferredizedFunction): void;
    static connect(funo: any, options: string): DeferredizedFunction;
    static connect(
      funo: Function,
      options?: ConnectOption
    ): DeferredizedFunction;
    static retry(
      retryCount: number,
      funcDeferred: DeferredizedFunctionWithNumber,
      options?: RetryOption
    ): Deferred;
    static define(obj?: any, list?: string[]): any;
    constructor(): this;
    next(fun: Function): Deferred;
    wait(n: number): Deferred;
    error(fun: ErrorCallback): Deferred;
    call(val?: any): Deferred;
    fail(err: any): Deferred;
    cancel(): Deferred;
    parallel(dl: any): Deferred;
    loop(n: number, fun: FunctionWithNumber): Deferred;
    loop(n: Loop, fun: FunctionWithNumber): Deferred;
  }
  declare interface JQueryXHR {
    next(fun: Function): Deferred;
  }
  declare function chain(...args: any[]): Deferred;

  declare function wait(n: number): Deferred;

  declare function call(fun?: Function, ...args: any[]): Deferred;

  declare function parallel(dl: any): Deferred;

  declare function earlier(dl: any): Deferred;

  declare function loop(n: number, fun: FunctionWithNumber): Deferred;

  declare function loop(n: Loop, fun: FunctionWithNumber): Deferred;

  declare function repeat(n: number, fun: FunctionWithNumber): Deferred;

  declare function next(fun: Function): Deferred;
}
declare module "jsdeferred" {
}
