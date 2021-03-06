declare module "ix" {
  declare export default typeof Ix;
}
declare module "ix.js" {
  declare export interface Ix$Observer<T> {
    onNext?: (value: T) => void;
    onError?: (error: Error) => void;
    onCompleted?: () => void;
  }

  declare export interface Ix$Enumerable<T> {
    isEmpty(): boolean;
    minBy<TKey>(
      keySelector: (item: T) => TKey,
      comparer: Comparer<TKey, TKey>
    ): Ix$Enumerable<T>;
    minBy(keySelector: (item: T) => number): Ix$Enumerable<T>;
    maxBy<TKey>(
      keySelector: (item: T) => TKey,
      comparer: Comparer<TKey, TKey>
    ): Ix$Enumerable<T>;
    maxBy(keySelector: (item: T) => number): Ix$Enumerable<T>;
    share<TResult>(
      selector: (source: Ix$Enumerable<T>) => Ix$Enumerable<TResult>
    ): Ix$Enumerable<TResult>;
    share(): Ix$Enumerable<T>;
    publish<TResult>(
      selector: (source: Ix$Enumerable<T>) => Ix$Enumerable<TResult>
    ): Ix$Enumerable<TResult>;
    publish(): Ix$Enumerable<T>;
    memoize(): Ix$Enumerable<T>;
    do(
      onNext: (value: T) => void,
      onError?: (error: Error) => void,
      onCompleted?: () => void
    ): Ix$Enumerable<T>;
    doAction(
      onNext: (value: T) => void,
      onError?: (error: Error) => void,
      onCompleted?: () => void
    ): Ix$Enumerable<T>;
    do(onbserver: Ix$Observer<T>): Ix$Enumerable<T>;
    doAction(onbserver: Ix$Observer<T>): Ix$Enumerable<T>;
    bufferWithCount(count: number, skip?: number): Ix$Enumerable<T>;
    ignoreElements(): Ix$Enumerable<T>;
    distinctBy<TKey>(
      keySelector: (item: T) => TKey,
      comparer?: EqualityComparer<TKey, TKey>
    ): Ix$Enumerable<T>;
    distinctUntilChanged<TKey>(
      keySelector: (item: T) => TKey,
      comparer?: EqualityComparer<TKey, TKey>
    ): Ix$Enumerable<T>;
    distinctUntilChanged(): Ix$Enumerable<T>;
    distinctUntilChanged(
      _: boolean,
      comparer: EqualityComparer<T, T>
    ): Ix$Enumerable<T>;
    expand(selector: (item: T) => Ix$Enumerable<T>): Ix$Enumerable<T>;
    startWith(...values: T[]): Ix$Enumerable<T>;
    scan<TAccumulate>(
      seed: TAccumulate,
      accumulate: (acc: TAccumulate, item: T) => TAccumulate
    ): Ix$Enumerable<TAccumulate>;
    scan(accumulate: (acc: T, item: T) => T): Ix$Enumerable<T>;
    takeLast(count: number): Ix$Enumerable<T>;
    skipLast(count: number): Ix$Enumerable<T>;
    repeat(count?: number): Ix$Enumerable<T>;
    catch(handler: (error: Error) => Ix$Enumerable<T>): Ix$Enumerable<T>;
    catchException(
      handler: (error: Error) => Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    catch(
      second: Ix$Enumerable<T>,
      ...other: Ix$Enumerable<T>[]
    ): Ix$Enumerable<T>;
    catchException(
      second: Ix$Enumerable<T>,
      ...other: Ix$Enumerable<T>[]
    ): Ix$Enumerable<T>;
    finally(finallyAction: () => void): Ix$Enumerable<T>;
    finallyDo(finallyAction: () => void): Ix$Enumerable<T>;
    onErrorResumeNext(second: Ix$Enumerable<T>): Ix$Enumerable<T>;
    retry(retryCount?: number): Ix$Enumerable<T>;
  }

  declare export interface Ix$EnumerableStatic {
    throw<T>(error: Error): Ix$Enumerable<T>;
    throwException<T>(error: Error): Ix$Enumerable<T>;
    defer<T>(enumerableFactory: () => Ix$Enumerable<T>): Ix$Enumerable<T>;
    generate<TState, TResult>(
      initialState: TState,
      condition: Predicate<TState>,
      iterate: (state: TState) => TState,
      resultSelector: (state: TState) => TResult
    ): Ix$Enumerable<TResult>;
    using<TResource: Disposable, T>(
      resourceFactory: () => TResource,
      enumerableFactory: (resource: TResource) => Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    catch<T>(...sources: Ix$Enumerable<T>[]): Ix$Enumerable<T>;
    catchException<T>(...sources: Ix$Enumerable<T>[]): Ix$Enumerable<T>;
    onErrorResumeNext<T>(...sources: Ix$Enumerable<T>[]): Ix$Enumerable<T>;
    while<T>(
      condition: EnumerablePredicate<Ix$Enumerable<T>>,
      source: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    whileDo<T>(
      condition: EnumerablePredicate<Ix$Enumerable<T>>,
      source: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    if<T>(
      condition: () => boolean,
      thenSource: Ix$Enumerable<T>,
      elseSource?: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    ifThen<T>(
      condition: () => boolean,
      thenSource: Ix$Enumerable<T>,
      elseSource?: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    doWhile<T>(
      source: Ix$Enumerable<T>,
      condition: EnumerablePredicate<Ix$Enumerable<T>>
    ): Ix$Enumerable<T>;
    case<T>(
      selector: () => number,
      sources: {
        [key: number]: Ix$Enumerable<T>
      },
      defaultSource?: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    case<T>(
      selector: () => string,
      sources: {
        [key: string]: Ix$Enumerable<T>
      },
      defaultSource?: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    switchCase<T>(
      selector: () => number,
      sources: {
        [key: number]: Ix$Enumerable<T>
      },
      defaultSource?: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    switchCase<T>(
      selector: () => string,
      sources: {
        [key: string]: Ix$Enumerable<T>
      },
      defaultSource?: Ix$Enumerable<T>
    ): Ix$Enumerable<T>;
    for<T, TResult>(
      source: Ix$Enumerable<T>,
      resultSelector: EnumerableFunc<T, TResult>
    ): Ix$Enumerable<TResult>;
    forIn<T, TResult>(
      source: Ix$Enumerable<T>,
      resultSelector: EnumerableFunc<T, TResult>
    ): Ix$Enumerable<TResult>;
  }
}
