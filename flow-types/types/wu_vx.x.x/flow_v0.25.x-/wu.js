declare module "wu" {
  declare function wu<T>(iterable: Iterable<T>): wu$WuIterable<T>;

  declare export default typeof wu;

  declare var npm$namespace$wu: {
    chain: typeof wu$chain,
    count: typeof wu$count,
    curryable: typeof wu$curryable,
    entries: typeof wu$entries,
    keys: typeof wu$keys,
    values: typeof wu$values,
    repeat: typeof wu$repeat,
    asyncEach: typeof wu$asyncEach,
    drop: typeof wu$drop,
    dropWhile: typeof wu$dropWhile,
    cycle: typeof wu$cycle,
    chunk: typeof wu$chunk,
    concatMap: typeof wu$concatMap,
    enumerate: typeof wu$enumerate,
    every: typeof wu$every,
    filter: typeof wu$filter,
    find: typeof wu$find,
    flatten: typeof wu$flatten,
    forEach: typeof wu$forEach,
    has: typeof wu$has,
    map: typeof wu$map,
    pluck: typeof wu$pluck,
    reduce: typeof wu$reduce,
    reductions: typeof wu$reductions,
    reject: typeof wu$reject,
    slice: typeof wu$slice,
    some: typeof wu$some,
    spreadMap: typeof wu$spreadMap,
    take: typeof wu$take,
    takeWhile: typeof wu$takeWhile,
    tap: typeof wu$tap,
    unique: typeof wu$unique,
    zip: typeof wu$zip,
    zipLongest: typeof wu$zipLongest,
    tee: typeof wu$tee,
    invoke: typeof wu$invoke,
    zipWith: typeof wu$zipWith,
    unzip: typeof wu$unzip
  };
  declare type wu$Consumer<T> = (t: T) => void;

  declare type wu$Filter<T> = (t: T) => boolean;

  declare function wu$chain<T>(...iters: Array<Iterable<T>>): wu$WuIterable<T>;

  declare function wu$count(
    start?: number,
    step?: number
  ): wu$WuIterable<number>;

  declare function wu$curryable(
    fun: (...x: any[]) => any,
    expected?: number
  ): any;

  declare function wu$entries<T>(obj: {
    [i: string]: T
  }): wu$WuIterable<[string, T]>;

  declare function wu$keys(obj: {
    [i: string]: any
  }): wu$WuIterable<string>;

  declare function wu$values<T>(obj: {
    [i: string]: T
  }): wu$WuIterable<T>;

  declare function wu$repeat<T>(obj: T, times?: number): wu$WuIterable<T>;

  declare function wu$asyncEach(
    fn: wu$Consumer<any>,
    maxBlock?: number,
    timeout?: number
  ): void;

  declare function wu$drop<T>(n: number, iter: Iterable<T>): wu$WuIterable<T>;

  declare function wu$dropWhile<T>(
    fn: wu$Filter<T>,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$cycle<T>(iter: Iterable<T>): wu$WuIterable<T>;

  declare function wu$chunk<T>(
    n: number,
    iter: Iterable<T>
  ): wu$WuIterable<T[]>;

  declare function wu$concatMap<T, U>(
    fn: (t: T) => Iterable<U>,
    iter: Iterable<T>
  ): wu$WuIterable<U>;

  declare function wu$enumerate<T>(
    iter: Iterable<T>
  ): wu$WuIterable<[T, number]>;

  declare function wu$every<T>(fn: wu$Filter<T>, iter: Iterable<T>): boolean;

  declare function wu$filter<T>(
    fn: wu$Filter<T>,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$find<T>(fn: wu$Filter<T>, iter: Iterable<T>): T | void;

  declare function wu$flatten(iter: Iterable<any>): wu$WuIterable<any>;

  declare function wu$flatten(
    shallow: boolean,
    iter: Iterable<any>
  ): wu$WuIterable<any>;

  declare function wu$forEach<T>(fn: wu$Consumer<T>, iter: Iterable<T>): void;

  declare function wu$has<T>(t: T, iter: Iterable<T>): boolean;

  declare var wu$invoke: any;

  declare function wu$map<T, U>(
    fn: (t: T) => U,
    iter: Iterable<T>
  ): wu$WuIterable<U>;

  declare function wu$pluck(
    attribute: string,
    iter: Iterable<any>
  ): wu$WuIterable<any>;

  declare function wu$reduce<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): T;

  declare function wu$reduce<T>(
    fn: (a: T, b: T) => T,
    initial: T,
    iter: Iterable<T>
  ): T;

  declare function wu$reduce<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): U;

  declare function wu$reduce<T, U>(
    fn: (a: U, b: T) => U,
    initial: U,
    iter: Iterable<T>
  ): U;

  declare function wu$reductions<T>(
    fn: (a: T, b: T) => T,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$reductions<T>(
    fn: (a: T, b: T) => T,
    initial: T,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$reductions<T, U>(
    fn: (a: U, b: T) => U,
    iter: Iterable<T>
  ): wu$WuIterable<U>;

  declare function wu$reductions<T, U>(
    fn: (a: U, b: T) => U,
    initial: U,
    iter: Iterable<T>
  ): wu$WuIterable<U>;

  declare function wu$reject<T>(
    fn: wu$Filter<T>,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$slice<T>(iter: Iterable<T>): wu$WuIterable<T>;

  declare function wu$slice<T>(
    start: number,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$slice<T>(
    start: number,
    stop: number,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$some<T>(fn: wu$Filter<T>, iter: Iterable<T>): boolean;

  declare function wu$spreadMap<T>(
    fn: (...x: any[]) => T,
    iter: Iterable<any[]>
  ): wu$WuIterable<T>;

  declare function wu$take<T>(n: number, iter: Iterable<T>): wu$WuIterable<T>;

  declare function wu$takeWhile<T>(
    fn: wu$Filter<T>,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$tap<T>(
    fn: wu$Consumer<T>,
    iter: Iterable<T>
  ): wu$WuIterable<T>;

  declare function wu$unique<T>(iter: Iterable<T>): wu$WuIterable<T>;

  declare function wu$zip<T, U>(
    iter2: Iterable<T>,
    iter: Iterable<U>
  ): wu$WuIterable<[T, U]>;

  declare function wu$zipLongest<T, U>(
    iter2: Iterable<T>,
    iter: Iterable<U>
  ): wu$WuIterable<[T, U]>;

  declare var wu$zipWith: any;

  declare var wu$unzip: any;

  declare function wu$tee<T>(iter: Iterable<T>): Array<wu$WuIterable<T>>;

  declare function wu$tee<T>(
    n: number,
    iter: Iterable<T>
  ): Array<wu$WuIterable<T>>;

  declare type wu$WuIterable<T> = {
    asyncEach(fn: wu$Consumer<any>, maxBlock?: number, timeout?: number): any,
    drop(n: number): wu$WuIterable<T>,
    dropWhile(fn: wu$Filter<T>): wu$WuIterable<T>,
    cycle(): wu$WuIterable<T>,
    chunk(n: number): wu$WuIterable<T[]>,
    concatMap<U>(fn: (t: T) => Iterable<U>): wu$WuIterable<U>,
    enumerate(): wu$WuIterable<[T, number]>,
    every(fn: wu$Filter<T>): boolean,
    filter(fn: wu$Filter<T>): wu$WuIterable<T>,
    find(fn: wu$Filter<T>): T | void,
    flatten(shallow?: boolean): wu$WuIterable<any>,
    forEach(fn: wu$Consumer<T>): void,
    has(t: T): boolean,
    invoke: any,
    map<U>(fn: (t: T) => U): wu$WuIterable<U>,
    pluck(attribute: string): wu$WuIterable<any>,
    reduce(fn: (a: T, b: T) => T, initial?: T): T,
    reduce<U>(fn: (a: U, b: T) => U, initial?: U): U,
    reductions(fn: (a: T, b: T) => T, initial?: T): wu$WuIterable<T>,
    reductions<U>(fn: (a: U, b: T) => U, initial?: U): wu$WuIterable<U>,
    reject(fn: wu$Filter<T>): wu$WuIterable<T>,
    slice(start?: number, stop?: number): wu$WuIterable<T>,
    some(fn: wu$Filter<T>): boolean,
    spreadMap(fn: (...x: any[]) => T, iter: Iterable<any[]>): wu$WuIterable<T>,
    take(n: number): wu$WuIterable<T>,
    takeWhile(fn: wu$Filter<T>): wu$WuIterable<T>,
    tap(fn: wu$Consumer<T>): wu$WuIterable<T>,
    unique(): wu$WuIterable<T>,
    zip<U>(iter2: Iterable<T>): wu$WuIterable<[T, U]>,
    zipLongest<U>(iter2: Iterable<T>): wu$WuIterable<[T, U]>,
    zipWith: any,
    unzip: any,
    tee(n?: number): Array<wu$WuIterable<T>>
  } & IterableIterator<T>;
}
