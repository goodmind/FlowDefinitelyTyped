declare module "streamjs" {
  declare class Stream<T> {
    static from<T>(elems: T[]): Stream<T>;
    static from(str: string): Stream<string>;
    static of<T>(...elems: T[]): Stream<T>;
    static range(startInclusive: number, endExclusive: number): Stream<number>;
    static rangeClosed(
      startInclusive: number,
      endInclusive: number
    ): Stream<number>;
    static generate<T>(supplier: Stream$Stream$Supplier<T>): Stream<T>;
    static iterate<T>(seed: T, fn: Stream$Stream$Function<T, T>): Stream<T>;
    anyMatch(predicate: Stream$Stream$Predicate<T>): boolean;
    anyMatch(regexp: RegExp): boolean;
    anyMatch(sample: Stream$Stream$Sample): boolean;
    allMatch(predicate: Stream$Stream$Predicate<T>): boolean;
    allMatch(regexp: RegExp): boolean;
    allMatch(sample: Stream$Stream$Sample): boolean;
    average(): number;
    average(path: string): number;
    avg(): number;
    avg(path: string): number;
    collect(collector: Stream$Stream$Collector<T>): T;
    count(): number;
    distinct(): Stream<T>;
    dropWhile(predicate: Stream$Stream$Predicate<T>): Stream<T>;
    dropWhile(regexp: RegExp): Stream<string>;
    dropWhile(sample: Stream$Stream$Sample): Stream<T>;
    each(consumer: Stream$Stream$Consumer<T>): void;
    filter(predicate: Stream$Stream$Predicate<T>): Stream<T>;
    filter(regexp: RegExp): Stream<string>;
    filter(sample: Stream$Stream$Sample): Stream<T>;
    findAny(): Stream$Stream$Optional<T>;
    findFirst(): Stream$Stream$Optional<T>;
    forEach(consumer: Stream$Stream$Consumer<T>): void;
    groupBy(
      mapper: Stream$Stream$Function<T, string>
    ): Stream$Stream$GroupingResult<T>;
    groupBy(path: string): Stream$Stream$GroupingResult<T>;
    groupingBy(
      mapper: Stream$Stream$Function<T, string>
    ): Stream$Stream$GroupingResult<T>;
    groupingBy(path: string): Stream$Stream$GroupingResult<T>;
    indexBy(
      keyMapper: Stream$Stream$Function<T, string>,
      mergeFunction?: Stream$Stream$Accumulator<T>
    ): Stream$Stream$Map<T>;
    map<U>(mapper: Stream$Stream$Function<T, U>): Stream<U>;
    max(): Stream$Stream$Optional<T>;
    max(comparator: Stream$Stream$Comparator<T>): Stream$Stream$Optional<T>;
    max(path: string): Stream$Stream$Optional<T>;
    min(): Stream$Stream$Optional<T>;
    min(comparator: Stream$Stream$Comparator<T>): Stream$Stream$Optional<T>;
    min(path: string): Stream$Stream$Optional<T>;
    noneMatch(predicate: (elem: T) => boolean): boolean;
    noneMatch(regexp: RegExp): boolean;
    flatMap<U>(mapper: Stream$Stream$Function<T, U[]>): Stream<U>;
    iterator(): Stream$Stream$Iterator<T>;
    joining(): string;
    joining(delimiter: string): string;
    joining(options: Stream$Stream$JoinOptions): string;
    join(): string;
    join(delimiter: string): string;
    join(options: Stream$Stream$JoinOptions): string;
    limit(limit: number): Stream<T>;
    partitioningBy(predicate: Stream$Stream$Predicate<T>): T[][];
    partitionBy(predicate: Stream$Stream$Predicate<T>): T[][];
    partitionBy(sample: Stream$Stream$Sample): T[][];
    partitioningBy(regexp: RegExp): T[][];
    partitionBy(regexp: RegExp): T[][];
    partitioningBy(size: number): T[][];
    partitionBy(size: number): T[][];
    partitioningBy(sample: Stream$Stream$Sample): T[][];
    peek(consumer: Stream$Stream$Consumer<T>): Stream<T>;
    reduce(identity: T, accumulator: Stream$Stream$Accumulator<T>): T;
    reduce(
      accumulator: Stream$Stream$Accumulator<T>
    ): Stream$Stream$Optional<T>;
    reverse(): Stream<T>;
    size(): number;
    sorted(): Stream<T>;
    sorted(comparator: Stream$Stream$Comparator<T>): Stream<T>;
    sorted(path: string): Stream<T>;
    sort(): Stream<T>;
    sort(comparator: Stream$Stream$Comparator<T>): Stream<T>;
    sort(path: string): Stream<T>;
    shuffle(): Stream<T>;
    skip(n: number): Stream<T>;
    slice(begin: number, end: number): Stream<T>;
    sum(): number;
    sum(path: string): number;
    takeWhile(predicate: Stream$Stream$Predicate<T>): Stream<T>;
    takeWhile(regexp: RegExp): Stream<string>;
    takeWhile(sample: Stream$Stream$Sample): Stream<T>;
    toArray(): T[];
    toList(): T[];
    toMap(
      keyMapper: Stream$Stream$Function<T, string>,
      mergeFunction?: Stream$Stream$Accumulator<T>
    ): Stream$Stream$Map<T>;
    toMap(
      path: string,
      mergeFunction?: Stream$Stream$Accumulator<T>
    ): Stream$Stream$Map<T>;
  }
  declare export interface Stream$Map<T> {
    [index: string]: T;
  }

  declare export interface Stream$Sample {
    [index: string]: any;
  }

  declare export interface Stream$Accumulator<T> {
    (e1: T, e2: T): T;
  }

  declare export interface Stream$Collector<T> {
    supplier: Stream$Supplier<T>;
    accumulator: Stream$Stream$Accumulator<T>;
    finisher: Stream$Function<T, T>;
  }

  declare export interface Stream$Comparator<T> {
    (e1: T, e2: T): number;
  }

  declare export interface Stream$Consumer<T> {
    (elem: T): void;
  }

  declare export interface Stream$Function<T, U> {
    (elem: T): U;
  }

  declare export interface Stream$GroupingResult<T> {
    [index: string]: T[];
  }

  declare export interface Stream$Iterator<T> {
    next(): T;
    done: boolean;
  }

  declare export interface Stream$JoinOptions {
    prefix: string;
    delimiter: string;
    suffix: string;
  }

  declare export interface Stream$Predicate<T> {
    (elem: T): boolean;
  }

  declare export interface Stream$Supplier<T> {
    (): T;
  }

  declare export class Stream$Optional<T> {
    static of<T>(elem: T): Stream$Optional<T>;
    static ofNullable<T>(elem: T): Stream$Optional<T>;
    filter(predicate: (elem: T) => boolean): Stream$Optional<T>;
    map<U>(mapper: (elem: T) => U): Stream$Optional<U>;
    flatMap<U>(
      mapper: (elem: T) => Stream$Stream$Optional<U>
    ): Stream$Optional<U>;
    isPresent(): boolean;
    get(): T;
    ifPresent(consumer: (elem: T) => void): void;
    orElse(other: T): T;
    orElseGet(supplier: Stream$Stream$Supplier<T>): T;
    orElseThrow(error: any): T;
  }
}
