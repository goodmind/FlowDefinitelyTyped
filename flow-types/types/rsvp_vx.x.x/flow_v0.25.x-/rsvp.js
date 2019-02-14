declare module "rsvp" {
  declare var npm$namespace$RSVP: {
    rethrow: typeof RSVP$rethrow,
    denodeify: typeof RSVP$denodeify,
    hash: typeof RSVP$hash,
    hashSettled: typeof RSVP$hashSettled,
    allSettled: typeof RSVP$allSettled,
    map: typeof RSVP$map,
    filter: typeof RSVP$filter,
    defer: typeof RSVP$defer,
    configure: typeof RSVP$configure,
    asap: typeof RSVP$asap,
    all: typeof RSVP$all,
    race: typeof RSVP$race,
    reject: typeof RSVP$reject,
    resolve: typeof RSVP$resolve,
    cast: typeof RSVP$cast,
    on: typeof RSVP$on,
    off: typeof RSVP$off,
    async: typeof RSVP$async,
    State: typeof RSVP$State,
    EventTarget: typeof RSVP$EventTarget,
    Promise: typeof RSVP$Promise
  };
  declare type RSVP$Arg<T> = T | PromiseLike<T>;

  declare var RSVP$State: {|
    +fulfilled: "fulfilled", // "fulfilled"
    +rejected: "rejected", // "rejected"
    +pending: "pending" // "pending"
  |};

  declare type RSVP$Resolved<T> = {
    state: State.fulfilled,
    value: T
  };

  declare type RSVP$Rejected<T = any> = {
    state: State.rejected,
    reason: T
  };

  declare type RSVP$Pending = {
    state: State.pending
  };

  declare type RSVP$PromiseState<T> =
    | RSVP$Resolved<T>
    | RSVP$Rejected
    | RSVP$Pending;

  declare type RSVP$Deferred<T> = {
    promise: RSVP$Promise<T>,
    resolve: (value?: RSVP$Arg<T>) => void,
    reject: (reason?: any) => void
  };

  declare interface RSVP$InstrumentEvent {
    guid: string;
    childGuid: string;
    eventName: string;
    detail: any;
    label: string;
    timeStamp: number;
  }

  declare interface RSVP$ObjectWithEventMixins {
    on(
      eventName: "created" | "chained" | "fulfilled" | "rejected",
      listener: (event: RSVP$InstrumentEvent) => void
    ): void;
    on(eventName: "error", errorHandler: (reason: any) => void): void;
    on(eventName: string, callback: (value: any) => void): void;
    off(eventName: string, callback?: (value: any) => void): void;
    trigger(eventName: string, options?: any, label?: string): void;
  }

  declare class RSVP$EventTarget {
    /**
     * `RSVP.EventTarget.mixin` extends an object with EventTarget methods.
     */
    static mixin(object: { [key: string]: any }): RSVP$ObjectWithEventMixins;

    /**
     * Registers a callback to be executed when `eventName` is triggered
     */
    static on(
      eventName: "created" | "chained" | "fulfilled" | "rejected",
      listener: (event: RSVP$InstrumentEvent) => void
    ): void;
    static on(eventName: "error", errorHandler: (reason: any) => void): void;
    static on(eventName: string, callback: (value: any) => void): void;

    /**
     * You can use `off` to stop firing a particular callback for an event.
     *
     * If you don't pass a `callback` argument to `off`, ALL callbacks for the
     * event will not be executed when the event fires.
     */
    static off(eventName: string, callback?: (value: any) => void): void;

    /**
     * Use `trigger` to fire custom events.
     *
     * You can also pass a value as a second argument to `trigger` that will be
     * passed as an argument to all event listeners for the event
     */
    static trigger(eventName: string, options?: any, label?: string): void;
  }

  declare class RSVP$Promise<T> mixins PromiseLike<T> {
    constructor(
      executor: (
        resolve: (value?: RSVP$Arg<T>) => void,
        reject: (reason?: any) => void
      ) => void,
      label?: string
    ): this;
    new<T>(
      executor: (
        resolve: (value?: RSVP$Arg<T>) => void,
        reject: (reason?: any) => void
      ) => void
    ): RSVP$Promise<T>;
    then<TResult1, TResult2>(
      onFulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | void
        | null,
      onRejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | void
        | null,
      label?: string
    ): RSVP$Promise<TResult1 | TResult2>;
    catch<TResult>(
      onRejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | void
        | null,
      label?: string
    ): RSVP$Promise<T | TResult>;
    finally<U>(onFinally?: U | PromiseLike<U>): RSVP$Promise<T>;
    "NO PRINT IMPLEMENTED: ComputedPropertyName": "Promise";
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>,
        RSVP$Arg<T8>,
        RSVP$Arg<T9>,
        RSVP$Arg<T10>
      ],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>,
        RSVP$Arg<T8>,
        RSVP$Arg<T9>
      ],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>;
    static all<T1, T2, T3, T4, T5, T6, T7, T8>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>,
        RSVP$Arg<T8>
      ],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>;
    static all<T1, T2, T3, T4, T5, T6, T7>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>
      ],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4, T5, T6, T7]>;
    static all<T1, T2, T3, T4, T5, T6>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>
      ],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4, T5, T6]>;
    static all<T1, T2, T3, T4, T5>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>
      ],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4, T5]>;
    static all<T1, T2, T3, T4>(
      values: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>, RSVP$Arg<T4>],
      label?: string
    ): RSVP$Promise<[T1, T2, T3, T4]>;
    static all<T1, T2, T3>(
      values: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>],
      label?: string
    ): RSVP$Promise<[T1, T2, T3]>;
    static all<T1, T2>(
      values: [RSVP$Arg<T1>, RSVP$Arg<T2>],
      label?: string
    ): RSVP$Promise<[T1, T2]>;
    static all<T>(values: RSVP$Arg<T>[], label?: string): RSVP$Promise<T[]>;
    static race<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>,
        RSVP$Arg<T8>,
        RSVP$Arg<T9>,
        T10 | PromiseLike<T10>
      ],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>;
    static race<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>,
        RSVP$Arg<T8>,
        RSVP$Arg<T9>
      ],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
    static race<T1, T2, T3, T4, T5, T6, T7, T8>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>,
        RSVP$Arg<T8>
      ],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
    static race<T1, T2, T3, T4, T5, T6, T7>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>,
        RSVP$Arg<T7>
      ],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4 | T5 | T6 | T7>;
    static race<T1, T2, T3, T4, T5, T6>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>,
        RSVP$Arg<T6>
      ],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4 | T5 | T6>;
    static race<T1, T2, T3, T4, T5>(
      values: [
        RSVP$Arg<T1>,
        RSVP$Arg<T2>,
        RSVP$Arg<T3>,
        RSVP$Arg<T4>,
        RSVP$Arg<T5>
      ],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4 | T5>;
    static race<T1, T2, T3, T4>(
      values: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>, RSVP$Arg<T4>],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3 | T4>;
    static race<T1, T2, T3>(
      values: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>],
      label?: string
    ): RSVP$Promise<T1 | T2 | T3>;
    static race<T1, T2>(
      values: [RSVP$Arg<T1>, RSVP$Arg<T2>],
      label?: string
    ): RSVP$Promise<T1 | T2>;
    static race<T>(values: RSVP$Arg<T>[], label?: string): RSVP$Promise<T>;
    static reject(reason?: any, label?: string): RSVP$Promise<empty>;
    static resolve<T>(value?: RSVP$Arg<T>, label?: string): RSVP$Promise<T>;
    static resolve(): RSVP$Promise<void>;

    /**
     * @deprecated
     */
    static cast: typeof RSVP$Promiseresolve;
  }

  declare var RSVP$all: typeof Promise.all;

  declare var RSVP$race: typeof Promise.race;

  declare var RSVP$reject: typeof Promise.reject;

  declare var RSVP$resolve: typeof Promise.resolve;

  declare function RSVP$rethrow(reason: any): void;

  declare var RSVP$cast: typeof Promise.cast;

  declare var RSVP$on: typeof EventTarget.on;

  declare var RSVP$off: typeof EventTarget.off;

  declare function RSVP$denodeify<T1, T2, T3, A>(
    nodeFunc: (
      arg1: A,
      callback: (err: any, data1: T1, data2: T2, data3: T3) => void
    ) => void,
    options?: false
  ): (arg1: A) => RSVP$Promise<T1>;

  declare function RSVP$denodeify<T1, T2, A>(
    nodeFunc: (
      arg1: A,
      callback: (err: any, data1: T1, data2: T2) => void
    ) => void,
    options?: false
  ): (arg1: A) => RSVP$Promise<T1>;

  declare function RSVP$denodeify<T, A>(
    nodeFunc: (arg1: A, callback: (err: any, data: T) => void) => void,
    options?: false
  ): (arg1: A) => RSVP$Promise<T>;

  declare function RSVP$denodeify<T1, T2, T3, A>(
    nodeFunc: (
      arg1: A,
      callback: (err: any, data1: T1, data2: T2, data3: T3) => void
    ) => void,
    options: true
  ): (arg1: A) => RSVP$Promise<[T1, T2, T3]>;

  declare function RSVP$denodeify<T1, T2, A>(
    nodeFunc: (
      arg1: A,
      callback: (err: any, data1: T1, data2: T2) => void
    ) => void,
    options: true
  ): (arg1: A) => RSVP$Promise<[T1, T2]>;

  declare function RSVP$denodeify<T, A>(
    nodeFunc: (arg1: A, callback: (err: any, data: T) => void) => void,
    options: true
  ): (arg1: A) => RSVP$Promise<[T]>;

  declare function RSVP$denodeify<
    T1,
    T2,
    T3,
    A,
    K1: string,
    K2: string,
    K3: string
  >(
    nodeFunc: (
      arg1: A,
      callback: (err: any, data1: T1, data2: T2, data3: T3) => void
    ) => void,
    options: [K1, K2, K3]
  ): (
    arg1: A
  ) => RSVP$Promise<
    $ObjMapi<{ [k: K1]: any }, <K>(K) => T1> &
      $ObjMapi<{ [k: K2]: any }, <K>(K) => T2> &
      $ObjMapi<{ [k: K3]: any }, <K>(K) => T3>
  >;

  declare function RSVP$denodeify<T1, T2, A, K1: string, K2: string>(
    nodeFunc: (
      arg1: A,
      callback: (err: any, data1: T1, data2: T2) => void
    ) => void,
    options: [K1, K2]
  ): (
    arg1: A
  ) => RSVP$Promise<
    $ObjMapi<{ [k: K1]: any }, <K>(K) => T1> &
      $ObjMapi<{ [k: K2]: any }, <K>(K) => T2>
  >;

  declare function RSVP$denodeify<T, A, K1: string>(
    nodeFunc: (arg1: A, callback: (err: any, data: T) => void) => void,
    options: [K1]
  ): (arg1: A) => RSVP$Promise<$ObjMapi<{ [k: K1]: any }, <K>(K) => T>>;

  declare function RSVP$hash<T>(
    object: $ObjMapi<T, <P>(P) => RSVP$Arg<$ElementType<T, P>>>,
    label?: string
  ): RSVP$Promise<T>;

  declare function RSVP$hashSettled<T>(
    object: $ObjMapi<T, <P>(P) => RSVP$Arg<$ElementType<T, P>>>,
    label?: string
  ): RSVP$Promise<$ObjMapi<T, <P>(P) => RSVP$PromiseState<$ElementType<T, P>>>>;

  declare function RSVP$allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>,
      RSVP$Arg<T9>,
      RSVP$Arg<T10>
    ],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>,
      RSVP$PromiseState<T5>,
      RSVP$PromiseState<T6>,
      RSVP$PromiseState<T7>,
      RSVP$PromiseState<T8>,
      RSVP$PromiseState<T9>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>,
      RSVP$Arg<T9>
    ],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>,
      RSVP$PromiseState<T5>,
      RSVP$PromiseState<T6>,
      RSVP$PromiseState<T7>,
      RSVP$PromiseState<T8>,
      RSVP$PromiseState<T9>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3, T4, T5, T6, T7, T8>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>
    ],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>,
      RSVP$PromiseState<T5>,
      RSVP$PromiseState<T6>,
      RSVP$PromiseState<T7>,
      RSVP$PromiseState<T8>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3, T4, T5, T6, T7>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>
    ],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>,
      RSVP$PromiseState<T5>,
      RSVP$PromiseState<T6>,
      RSVP$PromiseState<T7>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3, T4, T5, T6>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>
    ],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>,
      RSVP$PromiseState<T5>,
      RSVP$PromiseState<T6>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3, T4, T5>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>
    ],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>,
      RSVP$PromiseState<T5>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3, T4>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>, RSVP$Arg<T4>],
    label?: string
  ): RSVP$Promise<
    [
      RSVP$PromiseState<T1>,
      RSVP$PromiseState<T2>,
      RSVP$PromiseState<T3>,
      RSVP$PromiseState<T4>
    ]
  >;

  declare function RSVP$allSettled<T1, T2, T3>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>],
    label?: string
  ): RSVP$Promise<
    [RSVP$PromiseState<T1>, RSVP$PromiseState<T2>, RSVP$PromiseState<T3>]
  >;

  declare function RSVP$allSettled<T1, T2>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>],
    label?: string
  ): RSVP$Promise<[RSVP$PromiseState<T1>, RSVP$PromiseState<T2>]>;

  declare function RSVP$allSettled<T>(
    entries: RSVP$Arg<T>[],
    label?: string
  ): RSVP$Promise<[RSVP$PromiseState<T>]>;

  declare function RSVP$map<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, U>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>,
      RSVP$Arg<T9>,
      RSVP$Arg<T10>
    ],
    mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 10
    }
  >;

  declare function RSVP$map<T1, T2, T3, T4, T5, T6, T7, T8, T9, U>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>,
      RSVP$Arg<T9>
    ],
    mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 9
    }
  >;

  declare function RSVP$map<T1, T2, T3, T4, T5, T6, T7, T8, U>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>
    ],
    mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 8
    }
  >;

  declare function RSVP$map<T1, T2, T3, T4, T5, T6, T7, U>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>
    ],
    mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 7
    }
  >;

  declare function RSVP$map<T1, T2, T3, T4, T5, T6, U>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>
    ],
    mapFn: (item: T1 | T2 | T3 | T4 | T5 | T6) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 6
    }
  >;

  declare function RSVP$map<T1, T2, T3, T4, T5, U>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>
    ],
    mapFn: (item: T1 | T2 | T3 | T4 | T5) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 5
    }
  >;

  declare function RSVP$map<T1, T2, T3, T4, U>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>, RSVP$Arg<T4>],
    mapFn: (item: T1 | T2 | T3 | T4) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 4
    }
  >;

  declare function RSVP$map<T1, T2, T3, U>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>],
    mapFn: (item: T1 | T2 | T3) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 3
    }
  >;

  declare function RSVP$map<T1, T2, U>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>],
    mapFn: (item: T1 | T2) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 2
    }
  >;

  declare function RSVP$map<T, U>(
    entries: RSVP$Arg<T>[],
    mapFn: (item: T) => U,
    label?: string
  ): RSVP$Promise<
    Array<U> & {
      length: 1
    }
  >;

  declare function RSVP$filter<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>,
      RSVP$Arg<T9>,
      RSVP$Arg<T10>
    ],
    filterFn: (
      item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10
    ) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9 | T10>>;

  declare function RSVP$filter<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>,
      RSVP$Arg<T9>
    ],
    filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>>;

  declare function RSVP$filter<T1, T2, T3, T4, T5, T6, T7, T8>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>,
      RSVP$Arg<T8>
    ],
    filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7 | T8>>;

  declare function RSVP$filter<T1, T2, T3, T4, T5, T6, T7>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>,
      RSVP$Arg<T7>
    ],
    filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6 | T7) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3 | T4 | T5 | T6 | T7>>;

  declare function RSVP$filter<T1, T2, T3, T4, T5, T6>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>,
      RSVP$Arg<T6>
    ],
    filterFn: (item: T1 | T2 | T3 | T4 | T5 | T6) => boolean,
    label?: string
  ): RSVP$Promise<
    Array<T1 | T2 | T3 | T4 | T5 | T6> & {
      length: 6
    }
  >;

  declare function RSVP$filter<T1, T2, T3, T4, T5>(
    entries: [
      RSVP$Arg<T1>,
      RSVP$Arg<T2>,
      RSVP$Arg<T3>,
      RSVP$Arg<T4>,
      RSVP$Arg<T5>
    ],
    filterFn: (item: T1 | T2 | T3 | T4 | T5) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3 | T4 | T5>>;

  declare function RSVP$filter<T1, T2, T3, T4>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>, RSVP$Arg<T4>],
    filterFn: (item: T1 | T2 | T3 | T4) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3 | T4>>;

  declare function RSVP$filter<T1, T2, T3>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>, RSVP$Arg<T3>],
    filterFn: (item: T1 | T2 | T3) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2 | T3>>;

  declare function RSVP$filter<T1, T2>(
    entries: [RSVP$Arg<T1>, RSVP$Arg<T2>],
    filterFn: (item: T1 | T2) => boolean,
    label?: string
  ): RSVP$Promise<Array<T1 | T2>>;

  declare function RSVP$filter<T>(
    entries: RSVP$Arg<T>[],
    filterFn: (item: T) => boolean,
    label?: string
  ): RSVP$Promise<Array<T>>;

  declare function RSVP$defer<T>(label?: string): RSVP$Deferred<T>;

  declare function RSVP$configure<T>(name: string): T;

  declare function RSVP$configure<T>(name: string, value: T): void;

  declare function RSVP$asap<T, U>(
    callback: (callbackArg: T) => U,
    arg: T
  ): void;

  declare var RSVP$async: typeof asap;
  declare export default typeof RSVP;

  declare export var RSVP$asap: typeof RSVP$asap;
  declare export var RSVP$cast: typeof RSVP$cast;
  declare export var RSVP$Promise: typeof RSVP$Promise;
  declare export var RSVP$EventTarget: typeof RSVP$EventTarget;
  declare export var RSVP$all: typeof RSVP$all;
  declare export var RSVP$allSettled: typeof RSVP$allSettled;
  declare export var RSVP$race: typeof RSVP$race;
  declare export var RSVP$hash: typeof RSVP$hash;
  declare export var RSVP$hashSettled: typeof RSVP$hashSettled;
  declare export var RSVP$rethrow: typeof RSVP$rethrow;
  declare export var RSVP$defer: typeof RSVP$defer;
  declare export var RSVP$denodeify: typeof RSVP$denodeify;
  declare export var RSVP$configure: typeof RSVP$configure;
  declare export var RSVP$on: typeof RSVP$on;
  declare export var RSVP$off: typeof RSVP$off;
  declare export var RSVP$resolve: typeof RSVP$resolve;
  declare export var RSVP$reject: typeof RSVP$reject;
  declare export var RSVP$map: typeof RSVP$map;
  declare export var RSVP$async: typeof RSVP$async;
  declare export var RSVP$filter: typeof RSVP$filter;
}
