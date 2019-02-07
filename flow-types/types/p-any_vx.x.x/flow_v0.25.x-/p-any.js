declare module "p-any" {
  declare module.exports: typeof pAny;

  declare function pAny<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    values: [
      Value<T1>,
      Value<T2>,
      Value<T3>,
      Value<T4>,
      Value<T5>,
      Value<T6>,
      Value<T7>,
      Value<T8>,
      Value<T9>,
      Value<T10>
    ],
    options?: pAny$pAny$Options<
      T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10
    >
  ): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;

  declare function pAny<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    values: [
      Value<T1>,
      Value<T2>,
      Value<T3>,
      Value<T4>,
      Value<T5>,
      Value<T6>,
      Value<T7>,
      Value<T8>,
      Value<T9>
    ],
    options?: pAny$pAny$Options<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>
  ): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;

  declare function pAny<T1, T2, T3, T4, T5, T6, T7, T8>(
    values: [
      Value<T1>,
      Value<T2>,
      Value<T3>,
      Value<T4>,
      Value<T5>,
      Value<T6>,
      Value<T7>,
      Value<T8>
    ],
    options?: pAny$pAny$Options<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>
  ): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;

  declare function pAny<T1, T2, T3, T4, T5, T6, T7>(
    values: [
      Value<T1>,
      Value<T2>,
      Value<T3>,
      Value<T4>,
      Value<T5>,
      Value<T6>,
      Value<T7>
    ],
    options?: pAny$pAny$Options<T1 | T2 | T3 | T4 | T5 | T6 | T7>
  ): Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7>;

  declare function pAny<T1, T2, T3, T4, T5, T6>(
    values: [Value<T1>, Value<T2>, Value<T3>, Value<T4>, Value<T5>, Value<T6>],
    options?: pAny$pAny$Options<T1 | T2 | T3 | T4 | T5 | T6>
  ): Promise<T1 | T2 | T3 | T4 | T5 | T6>;

  declare function pAny<T1, T2, T3, T4, T5>(
    values: [Value<T1>, Value<T2>, Value<T3>, Value<T4>, Value<T5>],
    options?: pAny$pAny$Options<T1 | T2 | T3 | T4 | T5>
  ): Promise<T1 | T2 | T3 | T4 | T5>;

  declare function pAny<T1, T2, T3, T4>(
    values: [Value<T1>, Value<T2>, Value<T3>, Value<T4>],
    options?: pAny$pAny$Options<T1 | T2 | T3 | T4>
  ): Promise<T1 | T2 | T3 | T4>;

  declare function pAny<T1, T2, T3>(
    values: [Value<T1>, Value<T2>, Value<T3>],
    options?: pAny$pAny$Options<T1 | T2 | T3>
  ): Promise<T1 | T2 | T3>;

  declare function pAny<T1, T2>(
    values: [Value<T1>, Value<T2>],
    options?: pAny$pAny$Options<T1 | T2>
  ): Promise<T1 | T2>;

  declare function pAny<T>(
    values: Iterable<Value<T>> | Array<Value<T>>,
    options?: pAny$pAny$Options<T>
  ): Promise<T>;

  declare type Value<T> = T | PromiseLike<T>;

  declare var npm$namespace$pAny: {
    AggregateError: typeof pAny$AggregateError
  };
  declare interface pAny$Options<T> {
    filter?: (value: T) => boolean;
  }

  declare var pAny$AggregateError: typeof AggregateErrorModule;
}
