declare type Immutable$AnyFunction = (...args: any[]) => any;

declare type Immutable$AlreadyImmutable<O: { [key: string]: any } = {}> =
  | SeamlessImmutable$ImmutableObject<O>
  | SeamlessImmutable$ImmutableArray<any>
  | SeamlessImmutable$ImmutableDate;

declare type Immutable$Primitive =
  | boolean
  | number
  | string
  | Symbol
  | Immutable$AnyFunction
  | void
  | null;

declare type Immutable$CannotMakeImmutable<O: { [key: string]: any } = {}> =
  | Immutable$AlreadyImmutable<O>
  | Immutable$Primitive;

declare type Immutable$MakeImmutable<T, O: { [key: string]: any } = {}> =
  "There was Conditional Type, use $Call utility type";
/**
 * New functions added by seamless-immutable.
 */
declare interface ImmutableDate$Additions {
  asMutable(): Date;
  asMutable(opts?: SeamlessImmutable$AsMutableOptions): T[];
  asObject<U: { [key: string]: any }, K: $Keys<U>>(
    toKeyValue: (item: T) => [K, $ElementType<U, K>]
  ): SeamlessImmutable$Immutable<U>;
  flatMap<TTarget>(
    mapFunction: (item: T) => TTarget
  ): SeamlessImmutable$Immutable<
    "There was Conditional Type, use $Call utility type"
  >;
}

declare type ImmutableDate$MutatingDateMethods = Extract<
  $Keys<Date>,
  | "setDate"
  | "setFullYear"
  | "setHours"
  | "setMilliseconds"
  | "setMinutes"
  | "setMonth"
  | "setSeconds"
  | "setTime"
  | "setUTCDate"
  | "setUTCFullYear"
  | "setUTCHours"
  | "setUTCMilliseconds"
  | "setUTCMinutes"
  | "setUTCMonth"
  | "setUTCSeconds"
  | "setYear"
>;

/**
 * Only allows Date methods, which are the getters.
 */
declare type ImmutableDate$Remaining = SeamlessImmutable$Omit<
  Date,
  ImmutableDate$MutatingDateMethods
>;
/**
 * New functions added by seamless-immutable.
 */
declare interface ImmutableArray$Additions {
  asMutable(): Date;
  asMutable(opts?: SeamlessImmutable$AsMutableOptions): T[];
  asObject<U: { [key: string]: any }, K: $Keys<U>>(
    toKeyValue: (item: T) => [K, $ElementType<U, K>]
  ): SeamlessImmutable$Immutable<U>;
  flatMap<TTarget>(
    mapFunction: (item: T) => TTarget
  ): SeamlessImmutable$Immutable<
    "There was Conditional Type, use $Call utility type"
  >;
}

/**
 * Custom implementation of the array functions, which return Immutable.
 */
declare interface ImmutableArray$Overrides<T> {
  map<TTarget>(
    mapFuction: (item: T) => TTarget
  ): SeamlessImmutable$Immutable<TTarget[]>;
  filter(
    filterFunction: (item: T) => boolean
  ): SeamlessImmutable$Immutable<T[]>;
  slice(start?: number, end?: number): SeamlessImmutable$Immutable<T[]>;
  concat(...arr: T[]): SeamlessImmutable$Immutable<T[]>;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): SeamlessImmutable$Immutable<T>;
  reduce<TTarget>(
    callbackfn: (
      previousValue: TTarget,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => TTarget,
    initialValue?: TTarget
  ): SeamlessImmutable$Immutable<TTarget>;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => T
  ): SeamlessImmutable$Immutable<T>;
  reduceRight<TTarget>(
    callbackfn: (
      previousValue: TTarget,
      currentValue: T,
      currentIndex: number,
      array: T[]
    ) => TTarget,
    initialValue?: TTarget
  ): SeamlessImmutable$Immutable<TTarget>;
}

/**
 * These methods are banned by seamless-immutable.
 */
declare type ImmutableArray$MutatingArrayMethods = Extract<
  $Keys<any[]>,
  "push" | "pop" | "sort" | "splice" | "shift" | "unshift" | "reverse"
>;

/**
 * NOTE: These methods mutate data, but seamless-immutable does not ban them. We will ban them in our type definitions.
 */
declare type ImmutableArray$AdditionalMutatingArrayMethods = Extract<
  $Keys<any[]>,
  "copyWithin" | "fill"
>;

/**
 * Only allows Date methods, which are the getters.
 */
declare type ImmutableArray$Remaining = SeamlessImmutable$Omit<
  Date,
  ImmutableDate$MutatingDateMethods
>;
declare var npm$namespace$SeamlessImmutable: {
  from: typeof SeamlessImmutable$from,
  isImmutable: typeof SeamlessImmutable$isImmutable,
  ImmutableError: typeof SeamlessImmutable$ImmutableError,
  replace: typeof SeamlessImmutable$replace
};

/**
 * From type T, take all properties except those specified by K.
 */
declare type SeamlessImmutable$Omit<T, K: $Keys<T>> = Pick<
  T,
  Exclude<$Keys<T>, K>
>;

declare type SeamlessImmutable$DeepPartial<T> = $ObjMapi<
  T,
  <P>(P) => SeamlessImmutable$DeepPartial<$ElementType<T, P>>
>;

declare interface SeamlessImmutable$MergeConfig {
  deep?: boolean;
  mode?: "replace" | "merge";
  merger?: (a: any, b: any, config: any) => any;
}

declare interface SeamlessImmutable$ReplaceConfig {
  deep: boolean;
}

declare interface SeamlessImmutable$Options {
  prototype?: any;
}

declare interface SeamlessImmutable$AsMutableOptions {
  deep: boolean;
}

declare interface SeamlessImmutable$ImmutableObjectMixin<T> {
  set<K: $Keys<T>>(
    property: K,
    value: $ElementType<T, K>
  ): SeamlessImmutable$Immutable<T>;
  set<TValue>(property: string, value: TValue): SeamlessImmutable$Immutable<T>;
  setIn<K: $Keys<T>>(
    propertyPath: [K],
    value: $ElementType<T, K>
  ): SeamlessImmutable$Immutable<T>;
  setIn<K: $Keys<T>, L: $Keys<$ElementType<T, K>>>(
    propertyPath: [K, L],
    value: $ElementType<$ElementType<T, K>, L>
  ): SeamlessImmutable$Immutable<T>;
  setIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>
  >(
    propertyPath: [K, L, M],
    value: $ElementType<$ElementType<$ElementType<T, K>, L>, M>
  ): SeamlessImmutable$Immutable<T>;
  setIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>
  >(
    propertyPath: [K, L, M, N],
    value: $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
  ): SeamlessImmutable$Immutable<T>;
  setIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>,
    O: $Keys<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
    >
  >(
    propertyPath: [K, L, M, N, O],
    value: $ElementType<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>,
      O
    >
  ): SeamlessImmutable$Immutable<T>;
  setIn<TValue>(
    propertyPath: string[],
    value: TValue
  ): SeamlessImmutable$Immutable<T>;
  getIn<K: $Keys<T>>(
    propertyPath: [K]
  ): SeamlessImmutable$Immutable<$ElementType<T, K>>;
  getIn<K: $Keys<T>>(
    propertyPath: [K],
    defaultValue: $ElementType<T, K>
  ): SeamlessImmutable$Immutable<$ElementType<T, K>>;
  getIn<K: $Keys<T>, L: $Keys<$ElementType<T, K>>>(
    propertyPath: [K, L]
  ): SeamlessImmutable$Immutable<$ElementType<$ElementType<T, K>, L>>;
  getIn<K: $Keys<T>, L: $Keys<$ElementType<T, K>>>(
    propertyPath: [K, L],
    defaultValue: $ElementType<$ElementType<T, K>, L>
  ): SeamlessImmutable$Immutable<$ElementType<$ElementType<T, K>, L>>;
  getIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>
  >(
    propertyPath: [K, L, M]
  ): SeamlessImmutable$Immutable<
    $ElementType<$ElementType<$ElementType<T, K>, L>, M>
  >;
  getIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>
  >(
    propertyPath: [K, L, M, N]
  ): SeamlessImmutable$Immutable<
    $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
  >;
  getIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>
  >(
    propertyPath: [K, L, M, N],
    defaultValue: $ElementType<
      $ElementType<$ElementType<$ElementType<T, K>, L>, M>,
      N
    >
  ): SeamlessImmutable$Immutable<
    $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
  >;
  getIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>,
    O: $Keys<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
    >
  >(
    propertyPath: [K, L, M, N, O]
  ): SeamlessImmutable$Immutable<
    $ElementType<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>,
      O
    >
  >;
  getIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>,
    O: $Keys<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
    >
  >(
    propertyPath: [K, L, M, N, O],
    defaultValue: $ElementType<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>,
      O
    >
  ): SeamlessImmutable$Immutable<
    $ElementType<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>,
      O
    >
  >;
  getIn(propertyPath: string[]): SeamlessImmutable$Immutable<any>;
  getIn<TValue>(
    propertyPath: string[],
    defaultValue: TValue
  ): SeamlessImmutable$Immutable<TValue>;
  asMutable(opts?: SeamlessImmutable$AsMutableOptions): T;
  merge(
    part: SeamlessImmutable$DeepPartial<T>,
    config?: SeamlessImmutable$MergeConfig
  ): SeamlessImmutable$Immutable<T>;
  update<K: $Keys<T>>(
    property: K,
    updaterFunction: (
      value: $ElementType<T, K>,
      ...additionalParameters: any[]
    ) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  update<TValue>(
    property: string,
    updaterFunction: (value: TValue, ...additionalParameters: any[]) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  updateIn<K: $Keys<T>>(
    propertyPath: [K],
    updaterFunction: (
      value: $ElementType<T, K>,
      ...additionalParameters: any[]
    ) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  updateIn<K: $Keys<T>, L: $Keys<$ElementType<T, K>>>(
    propertyPath: [K, L],
    updaterFunction: (
      value: $ElementType<$ElementType<T, K>, L>,
      ...additionalParameters: any[]
    ) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  updateIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>
  >(
    propertyPath: [K, L, M],
    updaterFunction: (
      value: $ElementType<$ElementType<$ElementType<T, K>, L>, M>,
      ...additionalParameters: any[]
    ) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  updateIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>
  >(
    propertyPath: [K, L, M, N],
    updaterFunction: (
      value: $ElementType<
        $ElementType<$ElementType<$ElementType<T, K>, L>, M>,
        N
      >,
      ...additionalParameters: any[]
    ) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  updateIn<
    K: $Keys<T>,
    L: $Keys<$ElementType<T, K>>,
    M: $Keys<$ElementType<$ElementType<T, K>, L>>,
    N: $Keys<$ElementType<$ElementType<$ElementType<T, K>, L>, M>>,
    O: $Keys<
      $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>
    >
  >(
    propertyPath: [K, L, M, N, O],
    updaterFunction: (
      value: $ElementType<
        $ElementType<$ElementType<$ElementType<$ElementType<T, K>, L>, M>, N>,
        O
      >,
      ...additionalParameters: any[]
    ) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  updateIn<TValue>(
    propertyPath: string[],
    updaterFunction: (value: TValue, ...additionalParameters: any[]) => any,
    ...additionalArguments: any[]
  ): SeamlessImmutable$Immutable<T>;
  without<K: $Keys<T>>(property: K): SeamlessImmutable$Immutable<T>;
  without<K: $Keys<T>>(...properties: K[]): SeamlessImmutable$Immutable<T>;
  without<K: $Keys<T>>(
    filter: (value: $ElementType<T, K>, key: K) => boolean
  ): SeamlessImmutable$Immutable<T>;
  SeamlessImmutable$replace<S>(
    valueObj: S,
    options?: SeamlessImmutable$ReplaceConfig
  ): SeamlessImmutable$Immutable<S>;
}

declare type SeamlessImmutable$ImmutableObject<
  T
> = SeamlessImmutable$ImmutableObjectMixin<T> &
  $ObjMapi<T, <P>(P) => SeamlessImmutable$Immutable<$ElementType<T, P>>>;

/**
 * An ImmutableArray provides read-only access to the array elements, and provides functions (such as `map()`) that return immutable data structures.
 */
declare type SeamlessImmutable$ImmutableArray<T> = $ReadOnly<
  SeamlessImmutable$ImmutableArray.ImmutableArray$Remaining<T> &
    SeamlessImmutable$ImmutableArray.ImmutableArray$Additions<T> &
    SeamlessImmutable$ImmutableArray.ImmutableArray$Overrides<T>
>;

/**
 * An ImmutableDate disables the use of mutating functions like `setDate` and `setFullYear`.
 */
declare type SeamlessImmutable$ImmutableDate = SeamlessImmutable$ImmutableDate.ImmutableArray$Remaining &
  SeamlessImmutable$ImmutableDate.ImmutableArray$Additions;

declare type SeamlessImmutable$Immutable<T, O: { [key: string]: any } = {}> =
  "There was Conditional Type, use $Call utility type";

declare function SeamlessImmutable$from<T>(
  obj: T,
  options?: SeamlessImmutable$Options
): SeamlessImmutable$Immutable<T>;

declare function SeamlessImmutable$isImmutable(target: any): boolean;

declare function SeamlessImmutable$ImmutableError(message: string): Error;

declare function SeamlessImmutable$replace<T, S>(
  obj: SeamlessImmutable$Immutable<T>,
  valueObj: S,
  options?: SeamlessImmutable$ReplaceConfig
): SeamlessImmutable$Immutable<S>;
declare module "seamless-immutable" {
  declare module.exports: typeof SeamlessImmutable;

  declare function SeamlessImmutable<T>(
    obj: T,
    options?: SeamlessImmutable$SeamlessImmutable$Options
  ): SeamlessImmutable$SeamlessImmutable$Immutable<T>;
}
