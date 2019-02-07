declare module 'yallist' {
        declare module.exports: typeof Yallist

	declare class Yallist<T> mixins Iterable<T> {
static create<T>(): Yallist<T>;
static create<T>(list: Yallist$Yallist$ForEachIterable<T>): Yallist<T>;
static create<T>(...items: T[]): Yallist<T>;
static Yallist$Node: Yallist$Yallist$NodeConstructor;
head: Yallist$Yallist$Node<T> | null;
tail: Yallist$Yallist$Node<T> | null;
length: number;
constructor(): this;
constructor(list: Yallist$Yallist$ForEachIterable<T>): this;
constructor(...items: T[]): this;
forEach<U= this>(
callbackFn: (value: T, index: number, list: this) => void,
thisArg?: U): void;
forEachReverse<U= this>(
callbackFn: (value: T, index: number, list: this) => void,
thisArg?: U): void;
get(n: number): T | void;
getReverse(n: number): T | void;
map<U= this, R= T>(
callbackFn: (value: T, list: this) => R,
thisArg?: U): Yallist<R>;
mapReverse<U= this, R= T>(
callbackFn: (value: T, list: this) => R,
thisArg?: U): Yallist<R>;
pop(): T | void;
push(...items: T[]): number;
pushNode(node: Yallist$Yallist$Node<T>): void;
reduce<U= T>(
fn: (previousValue: U, currentValue: T, index: number) => U,
initialValue?: U): U;
reduceReverse<U= T>(
fn: (previousValue: U, currentValue: T, index: number) => U,
initialValue?: U): U;
removeNode(node: Yallist$Yallist$Node<T>): void;
reverse(): this;
shift(): T | void;
slice(from?: number, to?: number): Yallist<T>;
sliceReverse(from?: number, to?: number): Yallist<T>;
toArray(): T[];
toArrayReverse(): T[];
unshift(...items: T[]): number;
unshiftNode(node: Yallist$Yallist$Node<T>): void;
undefined(): Iterator<T>
}
	declare interface Yallist$ForEachIterable<T> {
forEach(callbackFn: (item: T) => void): void
} 

declare interface Yallist$NodeConstructor {
<T>(value: T, prev?: Yallist$Node<T>, next?: Yallist$Node<T>, list?: Yallist<T>): Yallist$Node<T>,
new <T>(
value: T,
prev?: Yallist$Node<T>,
next?: Yallist$Node<T>,
list?: Yallist<T>): Yallist$Node<T>
} 

declare interface Yallist$Node<T> {
prev: Yallist$Node<T> | null,
next: Yallist$Node<T> | null,
value: T,
list?: Yallist<T>
} 
    }
