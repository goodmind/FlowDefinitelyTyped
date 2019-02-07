declare module "wu" {
  declare function wu<T>(iterable: Iterable<T>): wu$wu$WuIterable<T>;

  declare module.exports: typeof wu;

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
    wu$asyncEach(
      fn: wu$Consumer<any>,
      maxBlock?: number,
      timeout?: number
    ): any,
    wu$drop(n: number): wu$WuIterable<T>,
    wu$dropWhile(fn: wu$Filter<T>): wu$WuIterable<T>,
    wu$cycle(): wu$WuIterable<T>,
    wu$chunk(n: number): wu$WuIterable<T[]>,
    wu$concatMap<U>(fn: (t: T) => Iterable<U>): wu$WuIterable<U>,
    wu$enumerate(): wu$WuIterable<[T, number]>,
    wu$every(fn: wu$Filter<T>): boolean,
    wu$filter(fn: wu$Filter<T>): wu$WuIterable<T>,
    wu$find(fn: wu$Filter<T>): T | void,
    wu$flatten(shallow?: boolean): wu$WuIterable<any>,
    wu$forEach(fn: wu$Consumer<T>): void,
    wu$has(t: T): boolean,
    wu$invoke: any,
    wu$map<U>(fn: (t: T) => U): wu$WuIterable<U>,
    wu$pluck(attribute: string): wu$WuIterable<any>,
    wu$reduce(fn: (a: T, b: T) => T, initial?: T): T,
    wu$reduce<U>(fn: (a: U, b: T) => U, initial?: U): U,
    wu$reductions(fn: (a: T, b: T) => T, initial?: T): wu$WuIterable<T>,
    wu$reductions<U>(fn: (a: U, b: T) => U, initial?: U): wu$WuIterable<U>,
    wu$reject(fn: wu$Filter<T>): wu$WuIterable<T>,
    wu$slice(start?: number, stop?: number): wu$WuIterable<T>,
    wu$some(fn: wu$Filter<T>): boolean,
    wu$spreadMap(
      fn: (...x: any[]) => T,
      iter: Iterable<any[]>
    ): wu$WuIterable<T>,
    wu$take(n: number): wu$WuIterable<T>,
    wu$takeWhile(fn: wu$Filter<T>): wu$WuIterable<T>,
    wu$tap(fn: wu$Consumer<T>): wu$WuIterable<T>,
    wu$unique(): wu$WuIterable<T>,
    wu$zip<U>(iter2: Iterable<T>): wu$WuIterable<[T, U]>,
    wu$zipLongest<U>(iter2: Iterable<T>): wu$WuIterable<[T, U]>,
    wu$zipWith: any,
    wu$unzip: any,
    wu$tee(n?: number): Array<wu$WuIterable<T>>
  } & IterableIterator<T>;
}
