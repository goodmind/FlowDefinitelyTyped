declare var npm$namespace$Helpers: {
  returns: typeof Helpers$returns,
  constructs: typeof Helpers$constructs
};
declare export function Helpers$returns<T>(what: T): () => T;

declare export function Helpers$constructs<T>(what: T): () => () => T;
declare module "squirejs" {
  declare class Squire {
    constructor(): this;
    constructor(context: string): this;
    mock(name: string, mock: any): Squire;
    mock(mocks: {
      [name: string]: any
    }): Squire;
    require(
      dependencies: string[],
      callback: Function,
      errback?: Function
    ): Squire;
    store(name: string | string[]): Squire;
    clean(): Squire;
    clean(name: string | string[]): Squire;
    remove(): String;
    run(dependencies: string[], test: Function): (done: Function) => void;
  }
  declare module.exports: typeof Squire;
}
