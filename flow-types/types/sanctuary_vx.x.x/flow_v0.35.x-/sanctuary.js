declare module 'sanctuary' {
        declare var S: Sanctuary$Sanctuary$Environment;
	declare module.exports: typeof S

	declare type Nullable<A> = A | null;
	declare type Pair<A, B> = [A, B];
	declare type Thunk<A> = () => A;
	declare type Fn<A, B> = (a: A) => B;
	declare type Fn2<A, B, C> = (a: A) => (b: B) => C;
	declare type Fn3<A, B, C, D> = (a: A) => (b: B) => (c: C) => D;
	declare type Fn4<A, B, C, D, E> = (a: A) => (b: B) => (c: C) => (d: D) => E;
	declare type Fn5<A, B, C, D, E, F> = (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => F;
	declare type Fn2_<A, B, C> = (a: A, b: B) => C;
	declare type Fn3_<A, B, C, D> = (a: A, b: B, c: C) => D;
	declare type Fn4_<A, B, C, D, E> = (a: A, b: B, c: C, d: D) => E;
	declare type Fn5_<A, B, C, D, E, F> = (a: A, b: B, c: C, d: D, e: E) => F;
	declare type Predicate<A> = (a: A) => boolean;
	declare interface StrMap<A> {
[k: string]: A
} 
	declare interface Maybe<A> {
function Object() { [native code] }: {
"@@type": "sanctuary/Maybe"
}
} 
	declare interface Either<A, B> {
function Object() { [native code] }: {
"@@type": "sanctuary/Either"
}
} 
	declare type ValidNumber = number;
	declare type FiniteNumber = number;
	declare type NonZeroFiniteNumber = number;
	declare type Integer = number;
	declare type NonNegativeInteger = number;
	declare interface TypeRep {} 
	declare interface Setoid<A> {} 
	declare type Ord<A> = {} & Setoid<A>

	declare interface Semigroupoid<A, B> {} 
	declare type Category<A> = {} & Semigroupoid<A, A>

	declare interface Semigroup<A> {} 
	declare type Monoid<A> = {} & Semigroup<A>

	declare interface Functor<A> {} 
	declare type Bifunctor<A, C> = {} & Functor<C>

	declare type Profunctor<B, C> = {} & Functor<C>

	declare type Apply<A> = {} & Functor<A>

	declare type Applicative<A> = {} & Apply<A>

	declare type Chain<A> = {} & Apply<A>

	declare type ChainRec<A> = {} & Chain<A>

	declare type Monad<A> = {} & Applicative<A> & Chain<A>

	declare type Alt<A> = {} & Functor<A>

	declare type Plus<A> = {} & Alt<A>

	declare type Alternative<A> = {} & Applicative<A> & Plus<A>

	declare interface Foldable<A> {} 
	declare type Traversable<A> = {} & Functor<A> & Foldable<A>

	declare type Extend<A> = {} & Functor<A>

	declare type Comonad<A> = {} & Extend<A>

	declare interface Contravariant<A> {} 
	declare interface ListToMaybeList {
(xs: string): Maybe<string>,
(xs: $ReadOnlyArray<A>): Maybe<A[]>
} 
	declare interface MatchObj {
match: string,
groups: $ReadOnlyArray<Maybe<string>>
} 
	declare interface Sanctuary$Static {
Maybe: TypeRep,
Nothing: Maybe<any>,
Just<A>(x: A): Maybe<A>,
Either: TypeRep,
Left<A>(x: A): Either<A, any>,
Right<A>(x: A): Either<any, A>,
type(
x: any): {
namespace: Maybe<string>,
name: string,
version: NonNegativeInteger
},
is(typeRep: TypeRep): (x: any) => boolean,
toString(x: any): string,
equals<A>(x: Setoid<A>): (y: Setoid<A>) => boolean,
lt<A>(x: Ord<A>): (y: Ord<A>) => boolean,
lte<A>(x: Ord<A>): (y: Ord<A>) => boolean,
gt<A>(x: Ord<A>): (y: Ord<A>) => boolean,
gte<A>(x: Ord<A>): (y: Ord<A>) => boolean,
min<A>(x: Ord<A>): (y: Ord<A>) => A,
max<A>(x: Ord<A>): (y: Ord<A>) => A,
id<A>(p: TypeRep): Fn<A, A> | Category<any>,
concat<A>(x: Semigroup<A>): (y: Semigroup<A>) => Semigroup<A>,
concat<A>(x: $ReadOnlyArray<A>): (y: $ReadOnlyArray<A>) => A[],
concat<A>(x: StrMap<A>): (y: StrMap<A>) => StrMap<A>,
concat(x: string): (y: string) => string,
empty(p: TypeRep): Monoid<any>,
map<A, B>(
p: Fn<A, B>): {
(q: Fn<C, A>): Fn<C, B>,
(q: $ReadOnlyArray<A>): B[],
(q: StrMap<A>): StrMap<B>,
(q: Functor<A>): Functor<B>
},
bimap<A, B>(
p: Fn<A, B>): <C, D>(q: Fn<C, D>) => (r: Bifunctor<A, C>) => Bifunctor<B, D>,
promap<A, B>(
p: Fn<A, B>): <C, D>(
q: Fn<C, D>) => {
(r: Fn<B, C>): Fn<A, D>,
(r: Profunctor<B, C>): Profunctor<A, D>
},
alt<A>(x: Alt<A>): (y: Alt<A>) => Alt<A>,
zero(p: TypeRep): Plus<any>,
reduce<A, B>(
p: Fn2<B, A, B>): (
q: B) => (
r: $ReadOnlyArray<A>
| StrMap<A>
| Maybe<A>
| Either<any, A>
| Foldable<A>) => B,
traverse(
typeRep: TypeRep): <A, B>(
f: Fn<A, Applicative<B>>) => (traversable: Traversable<A>) => Applicative<Traversable<B>>,
sequence(
typeRep: TypeRep): <A>(traversable: Traversable<Applicative<A>>) => Applicative<Traversable<A>>,
ap<A, B>(p: Apply<Fn<A, B>>): (q: Apply<A>) => Apply<B>,
lift2<A, B, C>(
f: Fn2<A, B, C>): {
(x: Fn<X, A>): (y: Fn<X, B>) => Fn<X, C>,
(x: Apply<A>): (y: Apply<B>) => Apply<C>
},
lift3<A, B, C, D>(
f: Fn3<A, B, C, D>): {
(x: Fn<X, A>): (y: Fn<X, B>) => (z: Fn<X, C>) => Fn<X, D>,
(x: Apply<A>): (y: Apply<B>) => (z: Apply<C>) => Apply<D>
},
apFirst<A>(x: Apply<A>): (y: Apply<any>) => Apply<A>,
apSecond(x: Apply<any>): <B>(y: Apply<B>) => Apply<B>,
of<A>(typeRep: TypeRep): (x: A) => Fn<any, A>,
of<A>(typeRep: TypeRep): (x: A) => Applicative<A>,
chain<A, B, X>(f: Fn2<A, X, B>): (chain_: Fn<X, A>) => Fn<X, B>,
chain<A, B>(f: Fn<A, Chain<B>>): (chain_: Chain<A>) => Chain<B>,
join<A, B>(chain_: Fn2<B, B, A>): Fn<B, A>,
join<A>(chain_: $ReadOnlyArray<$ReadOnlyArray<A>>): A[],
join<A>(chain_: Maybe<Maybe<A>>): Maybe<A>,
join<A>(chain_: Chain<Chain<A>>): Chain<A>,
chainRec(
typeRep: TypeRep): {
(f: Fn2<A, X, Either<A, B>>): (x: A) => Fn<X, B>,
(f: Fn<A, ChainRec<Either<A, B>>>): (x: A) => ChainRec<B>
},
extend<A, B>(f: Fn<Extend<A>, B>): (extend_: Extend<A>) => Extend<B>,
extract<A>(comonad: Comonad<A>): A,
contramap<A, B>(
f: Fn<B, A>): {
(contravariant: Fn<A, X>): Fn<B, X>,
(contravariant: Contravariant<A>): Contravariant<B>
},
filter<A>(
pred: Predicate<A>): {
(m: $ReadOnlyArray<A>): A[],
(m: Foldable<A>): Foldable<A>
},
filterM<A>(
pred: Predicate<A>): {
(m: $ReadOnlyArray<A>): A[],
(m: Foldable<A>): Foldable<A>
},
takeWhile<A>(pred: Predicate<A>): (foldable: Foldable<A>) => Foldable<A>,
dropWhile<A>(pred: Predicate<A>): (foldable: Foldable<A>) => Foldable<A>,
I<A>(x: A): A,
K<A>(x: A): (y: any) => A,
T<A>(x: A): <B>(f: Fn<A, B>) => B,
curry2<A, B, C>(f: Fn2_<A, B, C>): Fn2<A, B, C>,
curry3<A, B, C, D>(f: Fn3_<A, B, C, D>): Fn3<A, B, C, D>,
curry4<A, B, C, D, E>(f: Fn4_<A, B, C, D, E>): Fn4<A, B, C, D, E>,
curry5<A, B, C, D, E, F>(f: Fn5_<A, B, C, D, E, F>): Fn5<A, B, C, D, E, F>,
flip<A, B, C>(f: Fn2<A, B, C>): Fn2<B, A, C>,
compose<B, C>(f: Fn<B, C>): <A>(g: Fn<A, B>) => Fn<A, C>,
compose<B, C>(x: Semigroupoid<B, C>): <A>(y: Semigroupoid<A, B>) => Semigroupoid<A, C>,
pipe<A, B>(fs: [Fn<A, B>]): (x: A) => B,
pipe<A, B, C>(fs: [Fn<A, B>, Fn<B, C>]): (x: A) => C,
pipe<A, B, C, D>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>]): (x: A) => D,
pipe<A, B, C, D, E>(fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>]): (x: A) => E,
pipe<A, B, C, D, E, F>(
fs: [Fn<A, B>, Fn<B, C>, Fn<C, D>, Fn<D, E>, Fn<E, F>]): (x: A) => F,
pipe(fs: $ReadOnlyArray<Fn<any, any>>): (x: any) => any,
on<A, B, C>(p: Fn2<B, B, C>): (q: Fn<A, B>) => (r: A) => Fn<A, C>,
isNothing(p: Maybe<any>): boolean,
isJust(p: Maybe<any>): boolean,
fromMaybe<A>(p: A): (q: Maybe<A>) => A,
fromMaybe_<A>(p: Thunk<A>): (q: Maybe<A>) => A,
maybeToNullable<A>(p: Maybe<A>): Nullable<A>,
toMaybe<A>(p: A | null | void): Maybe<A>,
maybe<B>(p: B): <A>(q: Fn<A, B>) => (r: Maybe<A>) => B,
maybe_<B>(p: Thunk<B>): <A>(q: Fn<A, B>) => (r: Maybe<A>) => B,
justs<A>(p: $ReadOnlyArray<Maybe<A>>): A[],
mapMaybe<A>(p: Fn<A, Maybe<any>>): (q: A[]) => A[],
encase<A, B>(p: Fn<A, B>): Fn<A, Maybe<B>>,
encase2<A, B, C>(p: Fn2<A, B, C>): Fn2<A, B, Maybe<C>>,
encase3<A, B, C, D>(p: Fn3<A, B, C, D>): Fn3<A, B, C, Maybe<D>>,
maybeToEither<A>(p: A): <B>(q: Maybe<B>) => Either<A, B>,
isLeft(p: Either<any, any>): boolean,
isRight(p: Either<any, any>): boolean,
fromEither<B>(p: B): (q: Either<any, B>) => B,
toEither<A>(p: A): <B>(q: B | null | void) => Either<A, B>,
either<A, C>(p: Fn<A, C>): <B>(q: Fn<B, C>) => (r: Either<A, B>) => C,
lefts<A>(p: $ReadOnlyArray<Either<A, any>>): A[],
rights<B>(p: $ReadOnlyArray<Either<any, B>>): B[],
tagBy<A>(p: Predicate<A>): (q: A) => Either<A, A>,
encaseEither<L>(p: Fn<Error, L>): <A, R>(q: Fn<A, R>) => Fn<A, Either<L, R>>,
encaseEither2<L>(p: Fn<Error, L>): <A, B, R>(q: Fn2<A, B, R>) => Fn2<A, B, Either<L, R>>,
encaseEither3<L>(
p: Fn<Error, L>): <A, B, C, R>(q: Fn3<A, B, C, R>) => Fn3<A, B, C, Either<L, R>>,
eitherToMaybe<B>(p: Either<any, B>): Maybe<B>,
and(p: boolean): (q: boolean) => boolean,
or(p: boolean): (q: boolean) => boolean,
not(p: boolean): boolean,
complement<A>(p: Predicate<A>): Predicate<A>,
ifElse<A, B>(p: Predicate<A>): (q: Fn<A, B>) => (r: Fn<A, B>) => Fn<A, B>,
when<A>(p: Predicate<A>): (q: Fn<A, A>) => Fn<A, A>,
unless<A>(p: Predicate<A>): (q: Fn<A, A>) => Fn<A, A>,
allPass<A>(p: $ReadOnlyArray<Predicate<A>>): Predicate<A>,
anyPass<A>(p: $ReadOnlyArray<Predicate<A>>): Predicate<A>,
slice(p: Integer): (q: Integer) => ListToMaybeList,
at(p: Integer): {
(q: string): Maybe<string>,
(q: $ReadOnlyArray<A>): Maybe<A>
},
head(xs: string): Maybe<string>,
head<A>(xs: $ReadOnlyArray<A>): Maybe<A>,
last(xs: string): Maybe<string>,
last<A>(xs: $ReadOnlyArray<A>): Maybe<A>,
tail(xs: string): Maybe<string>,
tail<A>(xs: $ReadOnlyArray<A>): Maybe<A[]>,
init(xs: string): Maybe<string>,
init<A>(xs: $ReadOnlyArray<A>): Maybe<A[]>,
take(n: Integer): ListToMaybeList,
takeLast(n: Integer): ListToMaybeList,
drop(n: Integer): ListToMaybeList,
dropLast(n: Integer): ListToMaybeList,
append<A>(
x: A): {
(xs: $ReadOnlyArray<A>): A[],
(xs: Applicative<A>): Applicative<A>
},
prepend<A>(
x: A): {
(xs: $ReadOnlyArray<A>): A[],
(xs: Applicative<A>): Applicative<A>
},
joinWith(p: string): (q: $ReadOnlyArray<string>) => string,
elem<A>(p: A): (q: Foldable<A> | StrMap<A> | $ReadOnlyArray<A>) => boolean,
find<A>(
p: Predicate<A>): (q: $ReadOnlyArray<A> | StrMap<A> | Foldable<A>) => Maybe<A>,
pluck(key: string): (xs: Functor<any>) => Functor<any>,
unfoldr<A, B>(f: Fn<B, Maybe<Pair<A, B>>>): (x: B) => A[],
range(from: Integer): (to: Integer) => Integer[],
groupBy<A>(f: Fn2<A, A, boolean>): (xs: $ReadOnlyArray<A>) => A[][],
reverse<A>(foldable: $ReadOnlyArray<A>): A[],
reverse<A>(foldable: Foldable<A>): Foldable<A>,
sort<A>(foldable: $ReadOnlyArray<A>): A[],
sort<A>(foldable: Foldable<A>): Foldable<A>,
sortBy<A>(
f: Fn<A, Ord<any>>): {
(foldable: $ReadOnlyArray<A>): A[],
(foldable: Foldable<A>): Foldable<A>
},
prop(p: string): (q: any) => any,
props(p: $ReadOnlyArray<string>): (q: any) => any,
get(p: Predicate<any>): (q: string) => (r: any) => Maybe<any>,
gets(p: Predicate<any>): (q: $ReadOnlyArray<string>) => (r: any) => Maybe<any>,
keys(p: StrMap<any>): string[],
values<A>(p: StrMap<A>): A[],
pairs<A>(p: StrMap<A>): Array<Pair<string, A>>,
negate(n: ValidNumber): ValidNumber,
add(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber,
sum(p: Foldable<FiniteNumber> | $ReadOnlyArray<FiniteNumber>): FiniteNumber,
sub(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber,
mult(x: FiniteNumber): (q: FiniteNumber) => FiniteNumber,
product(p: Foldable<FiniteNumber> | $ReadOnlyArray<FiniteNumber>): FiniteNumber,
div(p: NonZeroFiniteNumber): (q: FiniteNumber) => FiniteNumber,
pow(p: FiniteNumber): (q: FiniteNumber) => FiniteNumber,
mean(p: Foldable<FiniteNumber> | $ReadOnlyArray<FiniteNumber>): Maybe<FiniteNumber>,
even(n: Integer): boolean,
odd(n: Integer): boolean,
parseDate(s: string): Maybe<Date>,
parseFloat(s: string): Maybe<number>,
parseInt(p: Integer): (q: string) => Maybe<Integer>,
parseJson(p: Predicate<any>): (q: string) => Maybe<any>,
regex(p: string): (q: string) => RegExp,
regexEscape(s: string): string,
test(pattern: RegExp): Predicate<string>,
match(pattern: RegExp): (q: string) => Array<Maybe<MatchObj>>,
matchAll(pattern: RegExp): (q: string) => MatchObj[],
toUpper(s: string): string,
toLower(s: string): string,
trim(s: string): string,
stripPrefix(prefix: string): (q: string) => Maybe<string>,
stripSuffix(suffix: string): (q: string) => Maybe<string>,
words(s: string): string[],
unwords(xs: $ReadOnlyArray<string>): string,
lines(s: string): string[],
unlines(xs: $ReadOnlyArray<string>): string,
splitOn(separator: string): (q: string) => string[],
splitOnRegex(pattern: RegExp): (q: string) => string[]
} 

declare type Sanctuary$Environment = {
env: $ReadOnlyArray<any>,
create(opts: {
checkTypes: boolean,
env: $ReadOnlyArray<any>
}): Sanctuary$Static
} & Sanctuary$Static

    }
