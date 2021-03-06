declare module "scalike" {
  declare export default typeof scalike;

  declare var npm$namespace$scalike: {
    Right: typeof scalike$Right,
    Left: typeof scalike$Left,
    Optional: typeof scalike$Optional,
    Some: typeof scalike$Some,
    Try: typeof scalike$Try,
    Success: typeof scalike$Success,
    Failure: typeof scalike$Failure,
    Future: typeof scalike$Future,
    None: typeof scalike$None,

    LeftProjection: typeof scalike$LeftProjection,
    RightProjection: typeof scalike$RightProjection,
    OptionalBuilder1: typeof scalike$OptionalBuilder1,
    OptionalBuilder2: typeof scalike$OptionalBuilder2,
    OptionalBuilder3: typeof scalike$OptionalBuilder3,
    OptionalBuilder4: typeof scalike$OptionalBuilder4,
    OptionalBuilder5: typeof scalike$OptionalBuilder5,
    TryBuilder1: typeof scalike$TryBuilder1,
    TryBuilder2: typeof scalike$TryBuilder2,
    TryBuilder3: typeof scalike$TryBuilder3,
    TryBuilder4: typeof scalike$TryBuilder4,
    TryBuilder5: typeof scalike$TryBuilder5,
    FutureBuilder1: typeof scalike$FutureBuilder1,
    FutureBuilder2: typeof scalike$FutureBuilder2,
    FutureBuilder3: typeof scalike$FutureBuilder3,
    FutureBuilder4: typeof scalike$FutureBuilder4,
    FutureBuilder5: typeof scalike$FutureBuilder5,
    Future: typeof npm$namespace$scalike$Future
  };
  declare export interface scalike$Either<A, B> {
    value: A | B;
    isLeft: boolean;
    isRight: boolean;
    left(): scalike$LeftProjection<A, B>;
    right(): scalike$RightProjection<A, B>;
    fold<X>(fa: (a: A) => X, fb: (b: B) => X): X;
    swap(): scalike$Either<B, A>;
  }

  declare export function scalike$Right<A, B>(b: B): scalike$Either<A, B>;

  declare export function scalike$Left<A, B>(a: A): scalike$Either<A, B>;

  declare export class scalike$LeftProjection<A, B> {
    constructor(self: scalike$Either<A, B>): this;
    toString(): string;
    get(): A;
    foreach(f: (a: A) => void): void;
    getOrElse<X: A>(x: X): A;
    forall(f: (a: A) => boolean): boolean;
    exists(f: (a: A) => boolean): boolean;
    filter(f: (a: A) => boolean): scalike$Optional<scalike$Either<A, B>>;
    map<X>(f: (a: A) => X): scalike$Either<X | A, B>;
    flatMap<X>(f: (a: A) => scalike$Either<X, B>): scalike$Either<X | A, B>;
    toOptional(): scalike$Optional<A>;
  }

  declare export class scalike$RightProjection<A, B> {
    constructor(self: scalike$Either<A, B>): this;
    toString(): string;
    get(): B;
    foreach(f: (b: B) => void): void;
    getOrElse<X: B>(x: X): B;
    forall(f: (b: B) => boolean): boolean;
    exists(f: (b: B) => boolean): boolean;
    filter(f: (b: B) => boolean): scalike$Optional<scalike$Either<A, B>>;
    map<X>(f: (b: B) => X): scalike$Either<A, X | B>;
    flatMap<X>(f: (a: B) => scalike$Either<A, X>): scalike$Either<A, X | B>;
    toOptional(): scalike$Optional<B>;
  }

  declare export interface scalike$Optional<A> {
    isEmpty: boolean;
    nonEmpty: boolean;
    get(): A;
    getOrElse<B: A>(a: B): A;
    map<B>(f: (a: A) => B): scalike$Optional<B>;
    fold<B>(ifEmpty: B, f: (a: A) => B): B;
    flatten(): scalike$Optional<A>;
    filter(f: (a: A) => boolean): scalike$Optional<A>;
    contains<B: A>(b: B): boolean;
    exists(f: (a: A) => boolean): boolean;
    forall(f: (a: A) => boolean): boolean;
    flatMap<B>(f: (a: A) => scalike$Optional<B>): scalike$Optional<B>;
    foreach(f: (a: A) => void): void;
    orElse<B: A>(ob: scalike$Optional<B>): scalike$Optional<A>;
    apply1<B, C>(
      ob: scalike$Optional<B>,
      f: (a: A, b: B) => C
    ): scalike$Optional<C>;
    apply2<B, C, D>(
      ob: scalike$Optional<B>,
      oc: scalike$Optional<C>,
      f: (a: A, b: B, c: C) => D
    ): scalike$Optional<D>;
    chain<B>(ob: scalike$Optional<B>): scalike$OptionalBuilder1<A, B>;
  }

  declare export var scalike$None: scalike$Optional<any>;

  declare export function scalike$Optional<A>(a: A): scalike$Optional<A>;

  declare export function scalike$Some<A>(a: A): scalike$Optional<A>;

  declare export class scalike$OptionalBuilder1<A, B> {
    constructor(oa: scalike$Optional<A>, ob: scalike$Optional<B>): this;
    run<C>(f: (a: A, b: B) => C): scalike$Optional<C>;
    chain<C>(oc: scalike$Optional<C>): scalike$OptionalBuilder2<A, B, C>;
  }

  declare export class scalike$OptionalBuilder2<A, B, C> {
    constructor(
      oa: scalike$Optional<A>,
      ob: scalike$Optional<B>,
      oc: scalike$Optional<C>
    ): this;
    run<D>(f: (a: A, b: B, c: C) => D): scalike$Optional<D>;
    chain<D>(od: scalike$Optional<D>): scalike$OptionalBuilder3<A, B, C, D>;
  }

  declare export class scalike$OptionalBuilder3<A, B, C, D> {
    constructor(
      oa: scalike$Optional<A>,
      ob: scalike$Optional<B>,
      oc: scalike$Optional<C>,
      od: scalike$Optional<D>
    ): this;
    run<E>(f: (a: A, b: B, c: C, d: D) => E): scalike$Optional<E>;
    chain<E>(oe: scalike$Optional<E>): scalike$OptionalBuilder4<A, B, C, D, E>;
  }

  declare export class scalike$OptionalBuilder4<A, B, C, D, E> {
    constructor(
      oa: scalike$Optional<A>,
      ob: scalike$Optional<B>,
      oc: scalike$Optional<C>,
      od: scalike$Optional<D>,
      oe: scalike$Optional<E>
    ): this;
    run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): scalike$Optional<F>;
    chain<F>(
      of: scalike$Optional<F>
    ): scalike$OptionalBuilder5<A, B, C, D, E, F>;
  }

  declare export class scalike$OptionalBuilder5<A, B, C, D, E, F> {
    constructor(
      oa: scalike$Optional<A>,
      ob: scalike$Optional<B>,
      oc: scalike$Optional<C>,
      od: scalike$Optional<D>,
      oe: scalike$Optional<E>,
      of: scalike$Optional<F>
    ): this;
    run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): scalike$Optional<G>;
  }

  declare export interface scalike$Try<A> {
    isSuccess: boolean;
    isFailure: boolean;
    get(): A;
    getError(): Error;
    fold<B>(fe: (e: Error) => B, ff: (a: A) => B): B;
    getOrElse<B: A>(a: B): A;
    orElse<B: A>(a: scalike$Try<B>): scalike$Try<A>;
    foreach<B>(f: (a: A) => void): void;
    flatMap<B>(f: (a: A) => scalike$Try<B>): scalike$Try<B>;
    map<B>(f: (a: A) => B): scalike$Try<B>;
    filter(f: (a: A) => boolean): scalike$Try<A>;
    toOptional(): scalike$Optional<A>;
    failed(): scalike$Try<A>;
    transform<B>(
      fs: (a: A) => scalike$Try<B>,
      ff: (e: Error) => scalike$Try<B>
    ): scalike$Try<B>;
    recover<B: A>(
      f: (e: Error) => scalike$Optional<scalike$Try<B>>
    ): scalike$Try<A>;
    apply1<B, C>(ob: scalike$Try<B>, f: (a: A, b: B) => C): scalike$Try<C>;
    apply2<B, C, D>(
      ob: scalike$Try<B>,
      oc: scalike$Try<C>,
      f: (a: A, b: B, c: C) => D
    ): scalike$Try<D>;
    chain<B>(ob: scalike$Try<B>): scalike$TryBuilder1<A, B>;
  }

  declare export function scalike$Try<A>(f: () => A): scalike$Try<A>;

  declare export function scalike$Success<A>(a: A): scalike$Try<A>;

  declare export function scalike$Failure<A>(e: Error): scalike$Try<A>;

  declare export class scalike$TryBuilder1<A, B> {
    constructor(oa: scalike$Try<A>, ob: scalike$Try<B>): this;
    run<C>(f: (a: A, b: B) => C): scalike$Try<C>;
    chain<C>(oc: scalike$Try<C>): scalike$TryBuilder2<A, B, C>;
  }

  declare export class scalike$TryBuilder2<A, B, C> {
    constructor(
      oa: scalike$Try<A>,
      ob: scalike$Try<B>,
      oc: scalike$Try<C>
    ): this;
    run<D>(f: (a: A, b: B, c: C) => D): scalike$Try<D>;
    chain<D>(od: scalike$Try<D>): scalike$TryBuilder3<A, B, C, D>;
  }

  declare export class scalike$TryBuilder3<A, B, C, D> {
    constructor(
      oa: scalike$Try<A>,
      ob: scalike$Try<B>,
      oc: scalike$Try<C>,
      od: scalike$Try<D>
    ): this;
    run<E>(f: (a: A, b: B, c: C, d: D) => E): scalike$Try<E>;
    chain<E>(oe: scalike$Try<E>): scalike$TryBuilder4<A, B, C, D, E>;
  }

  declare export class scalike$TryBuilder4<A, B, C, D, E> {
    constructor(
      oa: scalike$Try<A>,
      ob: scalike$Try<B>,
      oc: scalike$Try<C>,
      od: scalike$Try<D>,
      oe: scalike$Try<E>
    ): this;
    run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): scalike$Try<F>;
    chain<F>(of: scalike$Try<F>): scalike$TryBuilder5<A, B, C, D, E, F>;
  }

  declare export class scalike$TryBuilder5<A, B, C, D, E, F> {
    constructor(
      oa: scalike$Try<A>,
      ob: scalike$Try<B>,
      oc: scalike$Try<C>,
      od: scalike$Try<D>,
      oe: scalike$Try<E>,
      of: scalike$Try<F>
    ): this;
    run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): scalike$Try<G>;
  }

  declare export interface scalike$Future<A> {
    getPromise(): Promise<A>;
    onComplete<B>(f: (t: scalike$Try<A>) => B): void;
    isCompleted(): boolean;
    value(): scalike$Optional<scalike$Try<A>>;
    failed(): scalike$Future<Error>;
    foreach<B>(f: (a: A) => B): void;
    transform<B>(f: (t: scalike$Try<A>) => scalike$Try<B>): scalike$Future<B>;
    transform1<B>(fs: (a: A) => B, ff: (e: Error) => Error): scalike$Future<B>;
    transformWith<B>(
      f: (t: scalike$Try<A>) => scalike$Future<B>
    ): scalike$Future<B>;
    map<B>(f: (a: A) => B): scalike$Future<B>;
    flatMap<B>(f: (a: A) => scalike$Future<B>): scalike$Future<B>;
    filter(f: (a: A) => boolean): scalike$Future<A>;
    recover<B: A>(f: (e: Error) => scalike$Optional<B>): scalike$Future<A>;
    recoverWith<B: A>(
      f: (e: Error) => scalike$Optional<scalike$Future<B>>
    ): scalike$Future<A>;
    zip<B>(fu: scalike$Future<B>): scalike$Future<[A, B]>;
    zipWith<B, C>(
      fu: scalike$Future<B>,
      f: (a: A, b: B) => C
    ): scalike$Future<C>;
    fallbackTo<B: A>(fu: scalike$Future<B>): scalike$Future<A>;
    andThen<B>(f: (t: scalike$Try<A>) => B): scalike$Future<A>;
    apply1<B, C>(
      ob: scalike$Future<B>,
      f: (a: A, b: B) => C
    ): scalike$Future<C>;
    apply2<B, C, D>(
      ob: scalike$Future<B>,
      oc: scalike$Future<C>,
      f: (a: A, b: B, c: C) => D
    ): scalike$Future<D>;
    chain<B>(ob: scalike$Future<B>): scalike$FutureBuilder1<A, B>;
  }

  declare export function scalike$Future<A>(
    f: Promise<A> | (() => A)
  ): scalike$Future<A>;

  declare var npm$namespace$scalike$Future: {
    fromPromise: typeof scalike$Future$fromPromise,
    unit: typeof scalike$Future$unit,
    failed: typeof scalike$Future$failed,
    successful: typeof scalike$Future$successful,
    fromTry: typeof scalike$Future$fromTry,
    sequence: typeof scalike$Future$sequence,
    firstCompletedOf: typeof scalike$Future$firstCompletedOf,
    find: typeof scalike$Future$find,
    foldLeft: typeof scalike$Future$foldLeft,
    reduceLeft: typeof scalike$Future$reduceLeft,
    traverse: typeof scalike$Future$traverse
  };
  declare function scalike$Future$fromPromise<A>(
    p: Promise<A>
  ): scalike$Future<A>;

  declare function scalike$Future$unit(): scalike$Future<void>;

  declare function scalike$Future$failed<A>(e: Error): scalike$Future<A>;

  declare function scalike$Future$successful<A>(a: A): scalike$Future<A>;

  declare function scalike$Future$fromTry<A>(
    t: scalike$Try<A>
  ): scalike$Future<A>;

  declare function scalike$Future$sequence<A>(
    fus: Array<scalike$Future<A>>
  ): scalike$Future<Array<A>>;

  declare function scalike$Future$firstCompletedOf<A>(
    fus: Array<scalike$Future<A>>
  ): scalike$Future<A>;

  declare function scalike$Future$find<A>(
    fus: Array<scalike$Future<A>>,
    f: (a: A) => boolean
  ): scalike$Future<scalike$Optional<A>>;

  declare function scalike$Future$foldLeft<A, B>(
    fu: Array<scalike$Future<A>>,
    zero: B,
    f: (b: B, a: A) => B
  ): scalike$Future<B>;

  declare function scalike$Future$reduceLeft<A, B>(
    fu: Array<scalike$Future<A>>,
    f: (b: B, a: A) => B
  ): scalike$Future<B>;

  declare function scalike$Future$traverse<A, B>(
    fu: Array<A>,
    f: (a: A) => scalike$Future<B>
  ): scalike$Future<Array<B>>;

  declare export class scalike$FutureBuilder1<A, B> {
    constructor(oa: scalike$Future<A>, ob: scalike$Future<B>): this;
    run<C>(f: (a: A, b: B) => C): scalike$Future<C>;
    chain<C>(oc: scalike$Future<C>): scalike$FutureBuilder2<A, B, C>;
  }

  declare export class scalike$FutureBuilder2<A, B, C> {
    constructor(
      oa: scalike$Future<A>,
      ob: scalike$Future<B>,
      oc: scalike$Future<C>
    ): this;
    run<D>(f: (a: A, b: B, c: C) => D): scalike$Future<D>;
    chain<D>(od: scalike$Future<D>): scalike$FutureBuilder3<A, B, C, D>;
  }

  declare export class scalike$FutureBuilder3<A, B, C, D> {
    constructor(
      oa: scalike$Future<A>,
      ob: scalike$Future<B>,
      oc: scalike$Future<C>,
      od: scalike$Future<D>
    ): this;
    run<E>(f: (a: A, b: B, c: C, d: D) => E): scalike$Future<E>;
    chain<E>(oe: scalike$Future<E>): scalike$FutureBuilder4<A, B, C, D, E>;
  }

  declare export class scalike$FutureBuilder4<A, B, C, D, E> {
    constructor(
      oa: scalike$Future<A>,
      ob: scalike$Future<B>,
      oc: scalike$Future<C>,
      od: scalike$Future<D>,
      oe: scalike$Future<E>
    ): this;
    run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): scalike$Future<F>;
    chain<F>(of: scalike$Future<F>): scalike$FutureBuilder5<A, B, C, D, E, F>;
  }

  declare export class scalike$FutureBuilder5<A, B, C, D, E, F> {
    constructor(
      oa: scalike$Future<A>,
      ob: scalike$Future<B>,
      oc: scalike$Future<C>,
      od: scalike$Future<D>,
      oe: scalike$Future<E>,
      of: scalike$Future<F>
    ): this;
    run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): scalike$Future<G>;
  }
}
