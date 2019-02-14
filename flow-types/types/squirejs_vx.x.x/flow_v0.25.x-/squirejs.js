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

  declare var npm$namespace$Squire: {
    Helpers: typeof npm$namespace$Squire$Helpers
  };

  declare var npm$namespace$Squire$Helpers: {
    returns: typeof Squire$Helpers$returns,
    constructs: typeof Squire$Helpers$constructs
  };
  declare export function Squire$Helpers$returns<T>(what: T): () => T;

  declare export function Squire$Helpers$constructs<T>(what: T): () => () => T;

  declare export default typeof Squire;
}
