declare module "p-some" {
  declare export default typeof pSome;

  declare function pSome<T>(
    values: Array<Value<T>> | Iterable<Value<T>>,
    options: pSome$Options<T>
  ): Promise<T[]>;

  declare type Value<T> = T | PromiseLike<T>;

  declare var npm$namespace$pSome: {
    AggregateError: typeof pSome$AggregateError
  };
  declare interface pSome$Options<T> {
    count: number;
    filter?: (value: T) => boolean;
  }

  declare var pSome$AggregateError: typeof AggregateErrorModule;
}
