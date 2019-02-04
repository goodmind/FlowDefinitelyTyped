declare module 'collections' {
        declare module 'collections/sorted-set' {
        declare class internal$AbstractSet  {
union(...plus: any[]): any;
intersection(...plus: any[]): any;
difference(...plus: any[]): any;
symmetricDifference(...plus: any[]): any;
remove(...plus: any[]): any;
contains(...plus: any[]): any;
toggle(...plus: any[]): any;
addEach(...plus: any[]): any;
deleteEach(...plus: any[]): any;
deleteAll(...plus: any[]): any;
findValue(...plus: any[]): any;
iterator(...plus: any[]): any;
forEach(...plus: any[]): any;
map(...plus: any[]): any;
filter(...plus: any[]): any;
group(...plus: any[]): any;
some(...plus: any[]): any;
every(...plus: any[]): any;
any(...plus: any[]): any;
all(...plus: any[]): any;
only(...plus: any[]): any;
sorted(...plus: any[]): any;
reversed(...plus: any[]): any;
join(...plus: any[]): any;
sum(...plus: any[]): any;
average(...plus: any[]): any;
zip(...plus: any[]): any;
enumerate(...plus: any[]): any;
concat(...plus: any[]): any;
flatten(...plus: any[]): any;
toArray(...plus: any[]): any;
toObject(...plus: any[]): any;
toJSON(...plus: any[]): any;
equals(...plus: any[]): any;
clone(...plus: any[]): any;
contentCompare(...plus: any[]): any;
contentEquals(...plus: any[]): any;
sortedSetLog(...plus: any[]): any;
addRangeChangeListener(...plus: any[]): any;
removeRangeChangeListener(...plus: any[]): any;
dispatchRangeChange(...plus: any[]): any;
addBeforeRangeChangeListener(...plus: any[]): any;
removeBeforeRangeChangeListener(...plus: any[]): any;
dispatchBeforeRangeChange(...plus: any[]): any;
addOwnPropertyChangeListener(...plus: any[]): any;
addBeforeOwnPropertyChangeListener(...plus: any[]): any;
removeOwnPropertyChangeListener(...plus: any[]): any;
removeBeforeOwnPropertyChangeListener(...plus: any[]): any;
dispatchOwnPropertyChange(...plus: any[]): any;
dispatchBeforeOwnPropertyChange(...plus: any[]): any;
makePropertyObservable(...plus: any[]): any
}

declare class internal$Node<T>  {
reduce(
cb: (result?: any, val?: any, key?: any, collection?: any) => any,
basis: any,
index: number,
thisp: any,
tree: any,
depth: number): any;
touch(...plus: any[]): void;
checkIntegrity(...plus: any[]): number;
getNext(...plus: any[]): internal$Node<T> | void;
getPrevious(...plus: any[]): internal$Node<T> | void;
summary(...plus: any[]): string;
log(charmap: any, logNode: any, log: any, logAbove: any): any
}

declare class internal$Iterator<T>  {
next(): {
done: true,
value: T | null | void
}
}

declare export class internal$SortedSet<T> mixins internal$AbstractSet {
constructor(values?: T[], equals?: (a: T, b: T) => boolean, compare?: (a: T, b: T) => number, getDefault?: any): this;
constructClone(values?: T[]): internal$SortedSet<T>;
add(value: T): boolean;
clear(): void;
undefined(value: T): boolean;
find(value: T): internal$Node<T> | void;
findGreatest(n?: internal$Node<T> | void): internal$Node<T> | void;
findGreatestLessThan(value: T): internal$Node<T> | void;
findGreatestLessThanOrEqual(value: T): internal$Node<T> | void;
findLeast(n?: internal$Node<T> | void): internal$Node<T> | void;
findLeastGreaterThan(value: T): internal$Node<T> | void;
findLeastGreaterThanOrEqual(value: T): internal$Node<T> | void;
max(n?: internal$Node<T>): T | void;
min(n?: internal$Node<T>): T | void;
one(): T | void;
get(elt: T): T | void;
has(elt: T): boolean;
indexOf(value: T): number;
pop(): T | void;
push(...rest: T[]): void;
shift(): T | void;
unshift(...rest: T[]): void;
slice(start?: number, end?: number): T[];
splice(start: internal$Node<T>, length: number, ...values: T[]): T[];
swap(start: number, length: number, values?: T[]): T[];
splay(value: T): void;
splayIndex(index: number): boolean;
reduce(
callback: (result?: any, val?: any, key?: any, collection?: any) => any,
basis?: any,
thisp?: any): any;
reduceRight(
callback: (result?: any, val?: any, key?: any, collection?: any) => any,
basis?: any,
thisp?: any): any;
iterate(start: number, stop: number): internal$Iterator<T>
}
	declare module.exports: typeof internal$internal$SortedSet

    }

    }
