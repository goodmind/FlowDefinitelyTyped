declare module "seamless-immutable" {
  declare export default typeof SeamlessImmutable;

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
    set<TValue>(
      property: string,
      value: TValue
    ): SeamlessImmutable$Immutable<T>;
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
      value: $ElementType<
        $ElementType<$ElementType<$ElementType<T, K>, L>, M>,
        N
      >
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
    replace<S>(
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
    SeamlessImmutable$ImmutableArray$Remaining<T> &
      SeamlessImmutable$ImmutableArray$Additions<T> &
      SeamlessImmutable$ImmutableArray$Overrides<T>
  >;

  /**
   * New methods added by seamless-immutable.
   */
  declare interface SeamlessImmutable$ImmutableArray$Additions<T> {
    asMutable(opts?: SeamlessImmutable$AsMutableOptions): T[];
    asObject<U: { [key: string]: any }, K: $Keys<U>>(
      toKeyValue: (item: T) => [K, $ElementType<U, K>]
    ): SeamlessImmutable$Immutable<U>;
    flatMap<TTarget>(
      mapFunction: (item: T) => TTarget
    ): SeamlessImmutable$Immutable<
      "Flow doesn't support conditional types, use $Call utility type"
    >;
  }

  /**
   * Custom implementation of the array functions, which return Immutable.
   */
  declare interface SeamlessImmutable$ImmutableArray$Overrides<T> {
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
  declare type SeamlessImmutable$ImmutableArray$MutatingArrayMethods = Extract<
    $Keys<any[]>,
    "push" | "pop" | "sort" | "splice" | "shift" | "unshift" | "reverse"
  >;

  /**
   * NOTE: These methods mutate data, but seamless-immutable does not ban them. We will ban them in our type definitions.
   */
  declare type SeamlessImmutable$ImmutableArray$AdditionalMutatingArrayMethods = Extract<
    $Keys<any[]>,
    "copyWithin" | "fill"
  >;

  /**
   * The remaining properties on Array<T>, after we remove the mutating functions and the wrapped non-mutating functions.
   */
  declare type SeamlessImmutable$ImmutableArray$Remaining<
    T
  > = SeamlessImmutable$Omit<
    T[],
    | SeamlessImmutable$ImmutableArray$MutatingArrayMethods
    | SeamlessImmutable$ImmutableArray$AdditionalMutatingArrayMethods
    | $Keys<SeamlessImmutable$ImmutableArray$Overrides<any>>
  >;

  /**
   * An ImmutableDate disables the use of mutating functions like `setDate` and `setFullYear`.
   */
  declare type SeamlessImmutable$ImmutableDate = SeamlessImmutable$ImmutableDate$Remaining &
    SeamlessImmutable$ImmutableDate$Additions;

  /**
   * New functions added by seamless-immutable.
   */
  declare interface SeamlessImmutable$ImmutableDate$Additions {
    asMutable(): Date;
  }

  declare type SeamlessImmutable$ImmutableDate$MutatingDateMethods = Extract<
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
  declare type SeamlessImmutable$ImmutableDate$Remaining = SeamlessImmutable$Omit<
    Date,
    SeamlessImmutable$ImmutableDate$MutatingDateMethods
  >;

  declare type SeamlessImmutable$Immutable<T, O: { [key: string]: any } = {}> =
    "Flow doesn't support conditional types, use $Call utility type";

  declare type SeamlessImmutable$Immutable$AnyFunction = (
    ...args: any[]
  ) => any;

  declare type SeamlessImmutable$Immutable$AlreadyImmutable<
    O: { [key: string]: any } = {}
  > =
    | SeamlessImmutable$ImmutableObject<O>
    | SeamlessImmutable$ImmutableArray<any>
    | SeamlessImmutable$ImmutableDate;

  declare type SeamlessImmutable$Immutable$Primitive =
    | boolean
    | number
    | string
    | Symbol
    | SeamlessImmutable$Immutable$AnyFunction
    | void
    | null;

  declare type SeamlessImmutable$Immutable$CannotMakeImmutable<
    O: { [key: string]: any } = {}
  > =
    | SeamlessImmutable$Immutable$AlreadyImmutable<O>
    | SeamlessImmutable$Immutable$Primitive;

  declare type SeamlessImmutable$Immutable$MakeImmutable<
    T,
    O: { [key: string]: any } = {}
  > = "Flow doesn't support conditional types, use $Call utility type";

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

  declare function SeamlessImmutable<T>(
    obj: T,
    options?: SeamlessImmutable$Options
  ): SeamlessImmutable$Immutable<T>;
}
