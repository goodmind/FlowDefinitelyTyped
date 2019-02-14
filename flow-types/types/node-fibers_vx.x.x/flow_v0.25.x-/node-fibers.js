declare module "fibers/future" {
  declare class Future {
    constructor(): this;
    detach(): void;
    get(): any;
    isResolved(): boolean;
    proxy(future: Future): void;
    proxyErrors(futureOrList: any): Future;
    resolver(): Function;
    resolve(fn: Function): void;
    resolveSuccess(fn: Function): void;
    return(result?: any): void;
    throw(error: any): void;
    wait(): void;
    static wait(future: Future): any;
    static wait(future_list: Future[]): any;
    static wrap(fn: Function): Future;
  }
  declare export default typeof Future;
}
declare module "fibers" {
  declare function Fiber(fn: Function): Fiber;

  declare var npm$namespace$Fiber: {
    yield: typeof Fiber$yield,
    current: typeof Fiber$current
  };
  declare export var Fiber$current: Fiber;

  declare export function Fiber$yield(value?: any): any;

  declare export default typeof Fiber;
}
declare module "node-fibers" {
  declare interface Fiber {
    reset: () => any;
    run: (param?: any) => any;
    throwInto: (ex: any) => any;
  }
}
