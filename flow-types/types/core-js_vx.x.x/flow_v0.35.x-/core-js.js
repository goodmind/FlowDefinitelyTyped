declare interface SymbolConstructor {

/**
 * Non-standard. Use simple mode for core-js symbols. See https://github.com/zloirock/core-js/#caveats-when-using-symbol-polyfill
 */
useSimple(): void,

/**
 * Non-standard. Use setter mode for core-js symbols. See https://github.com/zloirock/core-js/#caveats-when-using-symbol-polyfill
 */
userSetter(): void
} declare type $for<T> = {
of(callbackfn: (value: T, key: any) => void, thisArg?: any): void,
array(): T[],
array<U>(callbackfn: (value: T, key: any) => U, thisArg?: any): U[],
filter(callbackfn: (value: T, key: any) => boolean, thisArg?: any): core$$for<T>,
map<U>(callbackfn: (value: T, key: any) => U, thisArg?: any): core$$for<U>
} & IterableIterator<T>
declare function $for<T>(iterable: Iterable<T>): core$$for<T>
declare interface String {
at(index: number): string,
padStart(length: number, fillStr?: string): string,
padEnd(length: number, fillStr?: string): string,

/**
 * Non-standard.
 */
escapeHTML(): string,

/**
 * Non-standard.
 */
unescapeHTML(): string
} declare interface Object {
getOwnPropertyDescriptors(object: any): PropertyDescriptorMap
} declare interface RegExpConstructor {
escape(str: string): string
} declare interface Map<K, V> {
toJSON(): any
} declare interface Set<T> {
toJSON(): any
} declare interface ArrayConstructor {

/**
 * Appends new elements to an array, and returns the new length of the array.
 * @param items New elements of the Array.
 */
push<T>(array: ArrayLike<T>, ...items: T[]): number,

/**
 * Removes the last element from an array and returns it.
 */
pop<T>(array: ArrayLike<T>): T,

/**
 * Combines two or more arrays.
 * @param items Additional items to add to the end of array1.
 */
concat<T>(array: ArrayLike<T>, ...items: Array<T[] | T>): T[],

/**
 * Adds all the elements of an array separated by the specified separator string.
 * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
 */
join<T>(array: ArrayLike<T>, separator?: string): string,

/**
 * Reverses the elements in an Array.
 */
reverse<T>(array: ArrayLike<T>): T[],

/**
 * Removes the first element from an array and returns it.
 */
shift<T>(array: ArrayLike<T>): T,

/**
 * Returns a section of an array.
 * @param start The beginning of the specified portion of the array.
 * @param end The end of the specified portion of the array.
 */
slice<T>(array: ArrayLike<T>, start?: number, end?: number): T[],

/**
 * Sorts an array.
 * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
 */
sort<T>(array: ArrayLike<T>, compareFn?: (a: T, b: T) => number): T[],

/**
 * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
 * @param start The zero-based location in the array from which to start removing elements.
 * @param deleteCount The number of elements to remove.
 * @param items Elements to insert into the array in place of the deleted elements.
 */
splice<T>(
array: ArrayLike<T>,
start: number,
deleteCount?: number,
...items: T[]): T[],

/**
 * Inserts new elements at the start of an array.
 * @param items Elements to insert at the start of the Array.
 */
unshift<T>(array: ArrayLike<T>, ...items: T[]): number,

/**
 * Returns the index of the first occurrence of a value in an array.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
 */
indexOf<T>(array: ArrayLike<T>, searchElement: T, fromIndex?: number): number,

/**
 * Returns the index of the last occurrence of a specified value in an array.
 * @param searchElement The value to locate in the array.
 * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
 */
lastIndexOf<T>(array: ArrayLike<T>, earchElement: T, fromIndex?: number): number,

/**
 * Determines whether all the members of an array satisfy the specified test.
 * @param callbackfn A function that accepts up to three arguments.
The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
every<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): boolean,

/**
 * Determines whether the specified callback function returns true for any element of an array.
 * @param callbackfn A function that accepts up to three arguments.
The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
some<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): boolean,

/**
 * Performs the specified action for each element in an array.
 * @param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
forEach<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => void,
thisArg?: any): void,

/**
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
map<T, U>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => U,
thisArg?: any): U[],

/**
 * Returns the elements of an array that meet the condition specified in a callback function.
 * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
filter<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): T[],

/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation.
The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
reduce<T, U>(
array: ArrayLike<T>,
callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
initialValue: U): U,

/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation.
The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
reduce<T>(
array: ArrayLike<T>,
callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
initialValue?: T): T,

/**
 * Calls the specified callback function for all the elements in an array, in descending order.
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation.
The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
reduceRight<T, U>(
array: ArrayLike<T>,
callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
initialValue: U): U,

/**
 * Calls the specified callback function for all the elements in an array, in descending order.
 * The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
 * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
 * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation.
The first call to the callbackfn function provides this value as an argument instead of an array value.
 */
reduceRight<T>(
array: ArrayLike<T>,
callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
initialValue?: T): T,

/**
 * Returns an array of key, value pairs for every entry in the array
 */
entries<T>(array: ArrayLike<T>): IterableIterator<[number, T]>,

/**
 * Returns an list of keys in the array
 */
keys<T>(array: ArrayLike<T>): IterableIterator<number>,

/**
 * Returns an list of values in the array
 */
values<T>(array: ArrayLike<T>): IterableIterator<T>,

/**
 * Returns the value of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.
 */
find<T>(
array: ArrayLike<T>,
predicate: (value: T, index: number, obj: T[]) => boolean,
thisArg?: any): T,

/**
 * Returns the index of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.
 */
findIndex<T>(
array: ArrayLike<T>,
predicate: (value: T) => boolean,
thisArg?: any): number,

/**
 * Returns the this object after filling the section identified by start and end with value
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
length+end.
 */
fill<T>(array: ArrayLike<T>, value: T, start?: number, end?: number): T[],

/**
 * Returns the this object after copying a section of the array identified by start and end
 * to the same array starting at position target
 * @param target If target is negative, it is treated as length+target where length is the
length of the array.
 * @param start If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.
 * @param end If not specified, length of the this object is used as its default value.
 */
copyWithin<T>(array: ArrayLike<T>, target: number, start: number, end?: number): T[],
includes<T>(array: ArrayLike<T>, value: T, fromIndex?: number): boolean,
turn<T, U>(
array: ArrayLike<T>,
callbackfn: (memo: U, value: T, index: number, array: T[]) => void,
memo?: U): U,
turn<T>(
array: ArrayLike<T>,
callbackfn: (memo: T[], value: T, index: number, array: T[]) => void,
memo?: T[]): T[]
} declare interface ObjectConstructor {

/**
 * Non-standard.
 */
isObject(value: any): boolean,

/**
 * Non-standard.
 */
classof(value: any): string,

/**
 * Non-standard.
 */
define<T>(target: T, mixin: any): T,

/**
 * Non-standard.
 */
make<T>(proto: T, mixin?: any): T
} declare type Log = {
(message?: any, ...optionalParams: any[]): void,
enable(): void,
disable(): void
} & Console

/**
 * Non-standard.
 */
declare var log: Log;declare interface Dict<T> {
[key: string]: T,
[key: number]: T
} declare interface DictConstructor {
prototype: Dict<any>,
new <T>(value?: Dict<T>): Dict<T>,
new (value?: any): Dict<any>,
(value?: Dict<T>): Dict<T>,
(value?: any): Dict<any>,
isDict(value: any): boolean,
values<T>(object: Dict<T>): IterableIterator<T>,
keys<T>(object: Dict<T>): IterableIterator<PropertyKey>,
entries<T>(object: Dict<T>): IterableIterator<[PropertyKey, T]>,
has<T>(object: Dict<T>, key: PropertyKey): boolean,
get<T>(object: Dict<T>, key: PropertyKey): T,
set<T>(object: Dict<T>, key: PropertyKey, value: T): Dict<T>,
forEach<T>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => void,
thisArg?: any): void,
map<T, U>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => U,
thisArg?: any): Dict<U>,
mapPairs<T, U>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => [PropertyKey, U],
thisArg?: any): Dict<U>,
filter<T>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean,
thisArg?: any): Dict<T>,
some<T>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean,
thisArg?: any): boolean,
every<T>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean,
thisArg?: any): boolean,
find<T>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean,
thisArg?: any): T,
findKey<T>(
object: Dict<T>,
callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean,
thisArg?: any): PropertyKey,
keyOf<T>(object: Dict<T>, value: T): PropertyKey,
includes<T>(object: Dict<T>, value: T): boolean,
reduce<T, U>(
object: Dict<T>,
callbackfn: (previousValue: U, value: T, key: PropertyKey, dict: Dict<T>) => U,
initialValue: U): U,
reduce<T>(
object: Dict<T>,
callbackfn: (previousValue: T, value: T, key: PropertyKey, dict: Dict<T>) => T,
initialValue?: T): T,
turn<T, U>(
object: Dict<T>,
callbackfn: (memo: Dict<U>, value: T, key: PropertyKey, dict: Dict<T>) => void,
memo: Dict<U>): Dict<U>,
turn<T>(
object: Dict<T>,
callbackfn: (memo: Dict<T>, value: T, key: PropertyKey, dict: Dict<T>) => void,
memo?: Dict<T>): Dict<T>
} 
/**
 * Non-standard.
 */
declare var Dict: DictConstructor;declare interface Function {

/**
 * Non-standard.
 */
part(...args: any[]): any
} declare interface Date {

/**
 * Non-standard.
 */
format(template: string, core$locale?: string): string,

/**
 * Non-standard.
 */
formatUTC(template: string, core$locale?: string): string
} declare interface Array<T> {

/**
 * Non-standard.
 */
turn<U>(
callbackfn: (memo: U, value: T, index: number, array: T[]) => void,
memo?: U): U,

/**
 * Non-standard.
 */
turn(
callbackfn: (memo: T[], value: T, index: number, array: T[]) => void,
memo?: T[]): T[]
} declare interface Number {

/**
 * Non-standard.
 */
undefined(): IterableIterator<number>
} declare function delay(msec: number): Promise<void>

      declare var npm$namespace$core: {
        setTimeout: typeof core$setTimeout,
setInterval: typeof core$setInterval,
setImmediate: typeof core$setImmediate,
clearImmediate: typeof core$clearImmediate,
$for: typeof core$$for,
isIterable: typeof core$isIterable,
getIterator: typeof core$getIterator,
addLocale: typeof core$addLocale,
locale: typeof core$locale,
delay: typeof core$delay,
        version: typeof core$version,
Object: typeof core$Object,
Function: typeof core$Function,
Array: typeof core$Array,
String: typeof core$String,
Date: typeof core$Date,
Number: typeof core$Number,
Math: typeof core$Math,
RegExp: typeof core$RegExp,
Map: typeof core$Map,
Set: typeof core$Set,
WeakMap: typeof core$WeakMap,
WeakSet: typeof core$WeakSet,
Promise: typeof core$Promise,
Symbol: typeof core$Symbol,
Dict: typeof core$Dict,
global: typeof core$global,
log: typeof core$log,
_: typeof core$_,
      }
declare var core$version: string;


      declare var npm$namespace$Reflect: {
        apply: typeof Reflect$apply,
construct: typeof Reflect$construct,
defineProperty: typeof Reflect$defineProperty,
deleteProperty: typeof Reflect$deleteProperty,
enumerate: typeof Reflect$enumerate,
get: typeof Reflect$get,
getOwnPropertyDescriptor: typeof Reflect$getOwnPropertyDescriptor,
getPrototypeOf: typeof Reflect$getPrototypeOf,
has: typeof Reflect$has,
isExtensible: typeof Reflect$isExtensible,
ownKeys: typeof Reflect$ownKeys,
preventExtensions: typeof Reflect$preventExtensions,
set: typeof Reflect$set,
setPrototypeOf: typeof Reflect$setPrototypeOf,
defineMetadata: typeof Reflect$defineMetadata,
deleteMetadata: typeof Reflect$deleteMetadata,
getMetadata: typeof Reflect$getMetadata,
getMetadataKeys: typeof Reflect$getMetadataKeys,
getOwnMetadata: typeof Reflect$getOwnMetadata,
getOwnMetadataKeys: typeof Reflect$getOwnMetadataKeys,
hasMetadata: typeof Reflect$hasMetadata,
hasOwnMetadata: typeof Reflect$hasOwnMetadata,
metadata: typeof Reflect$metadata,
        
      }
declare function Reflect$apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any


declare function Reflect$construct(target: Function, argumentsList: ArrayLike<any>): any


declare function Reflect$defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean


declare function Reflect$deleteProperty(target: any, propertyKey: PropertyKey): boolean


declare function Reflect$enumerate(target: any): IterableIterator<any>


declare function Reflect$get(target: any, propertyKey: PropertyKey, receiver?: any): any


declare function Reflect$getOwnPropertyDescriptor(target: any, propertyKey: PropertyKey): PropertyDescriptor


declare function Reflect$getPrototypeOf(target: any): any


declare function Reflect$has(target: any, propertyKey: string | Symbol): boolean


declare function Reflect$isExtensible(target: any): boolean


declare function Reflect$ownKeys(target: any): PropertyKey[]


declare function Reflect$preventExtensions(target: any): boolean


declare function Reflect$set(target: any, propertyKey: PropertyKey, value: any, receiver?: any): boolean


declare function Reflect$setPrototypeOf(target: any, proto: any): boolean



/**
 * Define a unique metadata entry on the target.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param metadataValue A value that contains attached metadata.
 * @param target The target object on which to define metadata.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *  // decorator factory as metadata-producing annotation.
         *  function MyAnnotation(options): ClassDecorator {
         *      return target => Reflect.defineMetadata("custom:annotation", options, target);
         *  }
         * ```
 */
declare function Reflect$defineMetadata(
metadataKey: any,
metadataValue: any,
target: Object,
targetKey?: string | Symbol): void



/**
 * Deletes the metadata entry from the target object with the provided key.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns `true` if the metadata entry was found and deleted; otherwise, false.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.deleteMetadata("custom:annotation", Example);
         * ```
 */
declare function Reflect$deleteMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): boolean



/**
 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.getMetadata("custom:annotation", Example);
         * ```
 */
declare function Reflect$getMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): any



/**
 * Gets the metadata keys defined on the target object or its prototype chain.
 * @param target The target object on which the metadata is defined.
 * @returns An array of unique metadata keys.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.getMetadataKeys(Example);
         * ```
 */
declare function Reflect$getMetadataKeys(target: Object, targetKey?: string | Symbol): any[]



/**
 * Gets the metadata value for the provided metadata key on the target object.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.getOwnMetadata("custom:annotation", Example);
         * ```
 */
declare function Reflect$getOwnMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): any



/**
 * Gets the unique metadata keys defined on the target object.
 * @param target The target object on which the metadata is defined.
 * @returns An array of unique metadata keys.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.getOwnMetadataKeys(Example);
         * ```
 */
declare function Reflect$getOwnMetadataKeys(target: Object, targetKey?: string | Symbol): any[]



/**
 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
 * @example ### Example

```typescript
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.hasMetadata("custom:annotation", Example);
         * ```
 */
declare function Reflect$hasMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): boolean



/**
 * Gets a value indicating whether the target object has the provided metadata key defined.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
 * @example ### Example

```typescript
         *
         *  class Example {
         *  }
         *
         *  // constructor
         *  result = Reflect.hasOwnMetadata("custom:annotation", Example);
         * ```
 */
declare function Reflect$hasOwnMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): boolean



/**
 * A default metadata decorator factory that can be used on a class, class member, or parameter.
 * @param metadataKey The key for the metadata entry.
 * @param metadataValue The value for the metadata entry.
 * @returns A decorator function.
 * @remarks If `metadataKey` is already defined for the target and target key, the
metadataValue for that key will be overwritten.
 * @example ### Example

```typescript
         *  // constructor
         *  @Reflect.metadata(key, value)
         *  class Example {
         *  }
         *
         *  // property (on constructor, TypeScript only)
         *  class Example {
         *      @Reflect.metadata(key, value)
         *      static staticProperty;
         *  }
         *
         *  // property (on prototype, TypeScript only)
         *  class Example {
         *      @Reflect.metadata(key, value)
         *      property;
         *  }
         *
         *  // method (on constructor)
         *  class Example {
         *      @Reflect.metadata(key, value)
         *      static staticMethod() { }
         *  }
         *
         *  // method (on prototype)
         *  class Example {
         *      @Reflect.metadata(key, value)
         *      method() { }
         *  }
         * ```
 */
declare function Reflect$metadata(
metadataKey: any,
metadataValue: any): {
(target: Function): void,
(target: Object, targetKey: string | Symbol): void
}


declare var core$Object: {
getPrototypeOf(o: any): any,
getOwnPropertyNames(o: any): string[],
create(o: any, properties?: PropertyDescriptorMap): any,
defineProperties(o: any, properties: PropertyDescriptorMap): any,
seal<T>(o: T): T,
freeze<T>(o: T): T,
preventExtensions<T>(o: T): T,
isSealed(o: any): boolean,
isFrozen(o: any): boolean,
isExtensible(o: any): boolean,
keys(o: any): string[],
assign(target: any, ...sources: any[]): any,
is(value1: any, value2: any): boolean,
setPrototypeOf(o: any, proto: any): any,
getOwnPropertySymbols(o: any): Symbol[],
getOwnPropertyDescriptor(o: any, propertyKey: PropertyKey): PropertyDescriptor,
defineProperty(o: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): any,
values(object: any): any[],
entries(object: any): any[],
getOwnPropertyDescriptors(object: any): PropertyDescriptorMap,
isObject(value: any): boolean,
classof(value: any): string,
define<T>(target: T, mixin: any): T,
make<T>(proto: T, mixin?: any): T
};

declare var core$Function: {
bind(target: core$Function, thisArg: any, ...argArray: any[]): any,
part(target: core$Function, ...args: any[]): any
};

declare var core$Array: {
from<T, U>(
arrayLike: ArrayLike<T> | Iterable<T>,
mapfn: (v: T, k: number) => U,
thisArg?: any): U[],
from<T>(arrayLike: ArrayLike<T> | Iterable<T>): T[],
of<T>(...items: T[]): T[],
isArray(arg: any): boolean,
push<T>(array: ArrayLike<T>, ...items: T[]): number,
pop<T>(array: ArrayLike<T>): T,
concat<T>(array: ArrayLike<T>, ...items: core$Array<T[] | T>): T[],
join<T>(array: ArrayLike<T>, separator?: string): string,
reverse<T>(array: ArrayLike<T>): T[],
shift<T>(array: ArrayLike<T>): T,
slice<T>(array: ArrayLike<T>, start?: number, end?: number): T[],
sort<T>(array: ArrayLike<T>, compareFn?: (a: T, b: T) => number): T[],
splice<T>(
array: ArrayLike<T>,
start: number,
deleteCount?: number,
...items: T[]): T[],
unshift<T>(array: ArrayLike<T>, ...items: T[]): number,
indexOf<T>(array: ArrayLike<T>, searchElement: T, fromIndex?: number): number,
lastIndexOf<T>(array: ArrayLike<T>, earchElement: T, fromIndex?: number): number,
every<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): boolean,
some<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): boolean,
forEach<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => void,
thisArg?: any): void,
map<T, U>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => U,
thisArg?: any): U[],
filter<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): T[],
reduce<T>(
array: ArrayLike<T>,
callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
initialValue?: T): T,
reduce<T, U>(
array: ArrayLike<T>,
callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
initialValue: U): U,
reduceRight<T>(
array: ArrayLike<T>,
callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
initialValue?: T): T,
reduceRight<T, U>(
array: ArrayLike<T>,
callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U,
initialValue: U): U,
entries<T>(array: ArrayLike<T>): IterableIterator<[number, T]>,
keys<T>(array: ArrayLike<T>): IterableIterator<number>,
values<T>(array: ArrayLike<T>): IterableIterator<T>,
find<T>(
array: ArrayLike<T>,
predicate: (value: T, index: number, obj: T[]) => boolean,
thisArg?: any): T,
findIndex<T>(
array: ArrayLike<T>,
predicate: (value: T) => boolean,
thisArg?: any): number,
fill<T>(array: ArrayLike<T>, value: T, start?: number, end?: number): T[],
copyWithin<T>(array: ArrayLike<T>, target: number, start: number, end?: number): T[],
includes<T>(array: ArrayLike<T>, value: T, fromIndex?: number): boolean,
turn<T>(
array: ArrayLike<T>,
callbackfn: (memo: T[], value: T, index: number, array: T[]) => void,
memo?: T[]): T[],
turn<T, U>(
array: ArrayLike<T>,
callbackfn: (memo: U, value: T, index: number, array: T[]) => void,
memo?: U): U
};

declare var core$String: {
codePointAt(text: string, pos: number): number,
includes(text: string, searchString: string, position?: number): boolean,
endsWith(text: string, searchString: string, endPosition?: number): boolean,
repeat(text: string, count: number): string,
fromCodePoint(...codePoints: number[]): string,
raw(template: TemplateStringsArray, ...substitutions: any[]): string,
startsWith(text: string, searchString: string, position?: number): boolean,
at(text: string, index: number): string,
padStart(text: string, length: number, fillStr?: string): string,
padEnd(text: string, length: number, fillStr?: string): string,
escapeHTML(text: string): string,
unescapeHTML(text: string): string
};

declare var core$Date: {
now(): number,
toISOString(date: core$Date): string,
format(date: core$Date, template: string, core$locale?: string): string,
formatUTC(date: core$Date, template: string, core$locale?: string): string
};

declare var core$Number: {
EPSILON: number,
isFinite(number: number): boolean,
isInteger(number: number): boolean,
isNaN(number: number): boolean,
isSafeInteger(number: number): boolean,
MAX_SAFE_INTEGER: number,
MIN_SAFE_INTEGER: number,
parseFloat(string: string): number,
parseInt(string: string, radix?: number): number,
clz32(x: number): number,
imul(x: number, y: number): number,
sign(x: number): number,
log10(x: number): number,
log2(x: number): number,
log1p(x: number): number,
expm1(x: number): number,
cosh(x: number): number,
sinh(x: number): number,
tanh(x: number): number,
acosh(x: number): number,
asinh(x: number): number,
atanh(x: number): number,
hypot(...values: number[]): number,
trunc(x: number): number,
fround(x: number): number,
cbrt(x: number): number,
random(lim?: number): number
};

declare var core$Math: {
clz32(x: number): number,
imul(x: number, y: number): number,
sign(x: number): number,
log10(x: number): number,
log2(x: number): number,
log1p(x: number): number,
expm1(x: number): number,
cosh(x: number): number,
sinh(x: number): number,
tanh(x: number): number,
acosh(x: number): number,
asinh(x: number): number,
atanh(x: number): number,
hypot(...values: number[]): number,
trunc(x: number): number,
fround(x: number): number,
cbrt(x: number): number
};

declare var core$RegExp: {
escape(str: string): string
};

declare var core$Map: MapConstructor;

declare var core$Set: SetConstructor;

declare var core$WeakMap: WeakMapConstructor;

declare var core$WeakSet: WeakSetConstructor;

declare var core$Promise: PromiseConstructor;

declare var core$Symbol: SymbolConstructor;

declare var core$Dict: DictConstructor;

declare var core$global: any;

declare var core$log: Log;

declare var core$_: boolean;

declare function core$setTimeout(handler: any, timeout?: any, ...args: any[]): number


declare function core$setInterval(handler: any, timeout?: any, ...args: any[]): number


declare function core$setImmediate(expression: any, ...args: any[]): number


declare function core$clearImmediate(handle: number): void


declare function core$$for<T>(iterable: Iterable<T>): core$$for<T>


declare function core$isIterable(value: any): boolean


declare function core$getIterator<T>(iterable: Iterable<T>): Iterator<T>


declare interface core$Locale {
weekdays: string,
months: string
} 

declare function core$addLocale(lang: string, core$locale: core$Locale): typeof core


declare function core$locale(lang?: string): string


declare function core$delay(msec: number): core$Promise<void>
declare module 'core-js' {
        declare module.exports: typeof core

    }
declare module 'core-js/shim' {
        declare module.exports: typeof core

    }
declare module 'core-js/core' {
        declare module.exports: typeof core

    }
declare module 'core-js/core/$for' {
        declare module.exports: typeof core$$for

    }
declare module 'core-js/core/_' {
        declare var core$_: typeof undefined;
	declare module.exports: typeof core$_

    }
declare module 'core-js/core/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/core/date' {
        declare var core$Date: typeof undefined;
	declare module.exports: typeof core$Date

    }
declare module 'core-js/core/delay' {
        declare var core$delay: typeof undefined;
	declare module.exports: typeof core$delay

    }
declare module 'core-js/core/dict' {
        declare var core$Dict: typeof undefined;
	declare module.exports: typeof core$Dict

    }
declare module 'core-js/core/function' {
        declare var core$Function: typeof undefined;
	declare module.exports: typeof core$Function

    }
declare module 'core-js/core/global' {
        declare var core$global: typeof undefined;
	declare module.exports: typeof core$global

    }
declare module 'core-js/core/log' {
        declare var core$log: typeof undefined;
	declare module.exports: typeof core$log

    }
declare module 'core-js/core/number' {
        declare var core$Number: typeof undefined;
	declare module.exports: typeof core$Number

    }
declare module 'core-js/core/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/core/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/fn/$for' {
        declare module.exports: typeof core$$for

    }
declare module 'core-js/fn/_' {
        declare var core$_: typeof undefined;
	declare module.exports: typeof core$_

    }
declare module 'core-js/fn/clear-immediate' {
        declare var core$clearImmediate: typeof undefined;
	declare module.exports: typeof core$clearImmediate

    }
declare module 'core-js/fn/delay' {
        declare var core$delay: typeof undefined;
	declare module.exports: typeof core$delay

    }
declare module 'core-js/fn/dict' {
        declare var core$Dict: typeof undefined;
	declare module.exports: typeof core$Dict

    }
declare module 'core-js/fn/get-iterator' {
        declare var core$getIterator: typeof undefined;
	declare module.exports: typeof core$getIterator

    }
declare module 'core-js/fn/global' {
        declare var core$global: typeof undefined;
	declare module.exports: typeof core$global

    }
declare module 'core-js/fn/is-iterable' {
        declare var core$isIterable: typeof undefined;
	declare module.exports: typeof core$isIterable

    }
declare module 'core-js/fn/log' {
        declare var core$log: typeof undefined;
	declare module.exports: typeof core$log

    }
declare module 'core-js/fn/map' {
        declare var core$Map: typeof undefined;
	declare module.exports: typeof core$Map

    }
declare module 'core-js/fn/promise' {
        declare var core$Promise: typeof undefined;
	declare module.exports: typeof core$Promise

    }
declare module 'core-js/fn/set' {
        declare var core$Set: typeof undefined;
	declare module.exports: typeof core$Set

    }
declare module 'core-js/fn/set-immediate' {
        declare var core$setImmediate: typeof undefined;
	declare module.exports: typeof core$setImmediate

    }
declare module 'core-js/fn/set-interval' {
        declare var core$setInterval: typeof undefined;
	declare module.exports: typeof core$setInterval

    }
declare module 'core-js/fn/set-timeout' {
        declare var core$setTimeout: typeof undefined;
	declare module.exports: typeof core$setTimeout

    }
declare module 'core-js/fn/weak-map' {
        declare var core$WeakMap: typeof undefined;
	declare module.exports: typeof core$WeakMap

    }
declare module 'core-js/fn/weak-set' {
        declare var core$WeakSet: typeof undefined;
	declare module.exports: typeof core$WeakSet

    }
declare module 'core-js/fn/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/fn/array/concat' {
        declare var concat: typeof undefined;
	declare module.exports: typeof concat

    }
declare module 'core-js/fn/array/copy-within' {
        declare var copyWithin: typeof undefined;
	declare module.exports: typeof copyWithin

    }
declare module 'core-js/fn/array/entries' {
        declare var entries: typeof undefined;
	declare module.exports: typeof entries

    }
declare module 'core-js/fn/array/every' {
        declare var every: typeof undefined;
	declare module.exports: typeof every

    }
declare module 'core-js/fn/array/fill' {
        declare var fill: typeof undefined;
	declare module.exports: typeof fill

    }
declare module 'core-js/fn/array/filter' {
        declare var filter: typeof undefined;
	declare module.exports: typeof filter

    }
declare module 'core-js/fn/array/find' {
        declare var find: typeof undefined;
	declare module.exports: typeof find

    }
declare module 'core-js/fn/array/find-index' {
        declare var findIndex: typeof undefined;
	declare module.exports: typeof findIndex

    }
declare module 'core-js/fn/array/for-each' {
        declare var forEach: typeof undefined;
	declare module.exports: typeof forEach

    }
declare module 'core-js/fn/array/from' {
        declare var from: typeof undefined;
	declare module.exports: typeof from

    }
declare module 'core-js/fn/array/includes' {
        declare var includes: typeof undefined;
	declare module.exports: typeof includes

    }
declare module 'core-js/fn/array/index-of' {
        declare var indexOf: typeof undefined;
	declare module.exports: typeof indexOf

    }
declare module 'core-js/fn/array/is-array' {
        declare var isArray: typeof undefined;
	declare module.exports: typeof isArray

    }
declare module 'core-js/fn/array/join' {
        declare var join: typeof undefined;
	declare module.exports: typeof join

    }
declare module 'core-js/fn/array/keys' {
        declare var keys: typeof undefined;
	declare module.exports: typeof keys

    }
declare module 'core-js/fn/array/last-index-of' {
        declare var lastIndexOf: typeof undefined;
	declare module.exports: typeof lastIndexOf

    }
declare module 'core-js/fn/array/map' {
        declare var map: typeof undefined;
	declare module.exports: typeof map

    }
declare module 'core-js/fn/array/of' {
        declare var of: typeof undefined;
	declare module.exports: typeof of

    }
declare module 'core-js/fn/array/pop' {
        declare var pop: typeof undefined;
	declare module.exports: typeof pop

    }
declare module 'core-js/fn/array/push' {
        declare var push: typeof undefined;
	declare module.exports: typeof push

    }
declare module 'core-js/fn/array/reduce' {
        declare var reduce: typeof undefined;
	declare module.exports: typeof reduce

    }
declare module 'core-js/fn/array/reduce-right' {
        declare var reduceRight: typeof undefined;
	declare module.exports: typeof reduceRight

    }
declare module 'core-js/fn/array/reverse' {
        declare var reverse: typeof undefined;
	declare module.exports: typeof reverse

    }
declare module 'core-js/fn/array/shift' {
        declare var shift: typeof undefined;
	declare module.exports: typeof shift

    }
declare module 'core-js/fn/array/slice' {
        declare var slice: typeof undefined;
	declare module.exports: typeof slice

    }
declare module 'core-js/fn/array/some' {
        declare var some: typeof undefined;
	declare module.exports: typeof some

    }
declare module 'core-js/fn/array/sort' {
        declare var sort: typeof undefined;
	declare module.exports: typeof sort

    }
declare module 'core-js/fn/array/splice' {
        declare var splice: typeof undefined;
	declare module.exports: typeof splice

    }
declare module 'core-js/fn/array/turn' {
        declare var turn: typeof undefined;
	declare module.exports: typeof turn

    }
declare module 'core-js/fn/array/unshift' {
        declare var unshift: typeof undefined;
	declare module.exports: typeof unshift

    }
declare module 'core-js/fn/array/values' {
        declare var values: typeof undefined;
	declare module.exports: typeof values

    }
declare module 'core-js/fn/date' {
        declare var core$Date: typeof undefined;
	declare module.exports: typeof core$Date

    }
declare module 'core-js/fn/date/add-locale' {
        declare var core$addLocale: typeof undefined;
	declare module.exports: typeof core$addLocale

    }
declare module 'core-js/fn/date/format' {
        declare var format: typeof undefined;
	declare module.exports: typeof format

    }
declare module 'core-js/fn/date/formatUTC' {
        declare var formatUTC: typeof undefined;
	declare module.exports: typeof formatUTC

    }
declare module 'core-js/fn/function' {
        declare var core$Function: typeof undefined;
	declare module.exports: typeof core$Function

    }
declare module 'core-js/fn/function/has-instance' {
        declare function hasInstance(value: any): boolean

	declare module.exports: typeof hasInstance

    }
declare module 'core-js/fn/function/name' {
        
    }
declare module 'core-js/fn/function/part' {
        declare var part: typeof undefined;
	declare module.exports: typeof part

    }
declare module 'core-js/fn/math' {
        declare var core$Math: typeof undefined;
	declare module.exports: typeof core$Math

    }
declare module 'core-js/fn/math/acosh' {
        declare var acosh: typeof undefined;
	declare module.exports: typeof acosh

    }
declare module 'core-js/fn/math/asinh' {
        declare var asinh: typeof undefined;
	declare module.exports: typeof asinh

    }
declare module 'core-js/fn/math/atanh' {
        declare var atanh: typeof undefined;
	declare module.exports: typeof atanh

    }
declare module 'core-js/fn/math/cbrt' {
        declare var cbrt: typeof undefined;
	declare module.exports: typeof cbrt

    }
declare module 'core-js/fn/math/clz32' {
        declare var clz32: typeof undefined;
	declare module.exports: typeof clz32

    }
declare module 'core-js/fn/math/cosh' {
        declare var cosh: typeof undefined;
	declare module.exports: typeof cosh

    }
declare module 'core-js/fn/math/expm1' {
        declare var expm1: typeof undefined;
	declare module.exports: typeof expm1

    }
declare module 'core-js/fn/math/fround' {
        declare var fround: typeof undefined;
	declare module.exports: typeof fround

    }
declare module 'core-js/fn/math/hypot' {
        declare var hypot: typeof undefined;
	declare module.exports: typeof hypot

    }
declare module 'core-js/fn/math/imul' {
        declare var imul: typeof undefined;
	declare module.exports: typeof imul

    }
declare module 'core-js/fn/math/log10' {
        declare var log10: typeof undefined;
	declare module.exports: typeof log10

    }
declare module 'core-js/fn/math/log1p' {
        declare var log1p: typeof undefined;
	declare module.exports: typeof log1p

    }
declare module 'core-js/fn/math/log2' {
        declare var log2: typeof undefined;
	declare module.exports: typeof log2

    }
declare module 'core-js/fn/math/sign' {
        declare var sign: typeof undefined;
	declare module.exports: typeof sign

    }
declare module 'core-js/fn/math/sinh' {
        declare var sinh: typeof undefined;
	declare module.exports: typeof sinh

    }
declare module 'core-js/fn/math/tanh' {
        declare var tanh: typeof undefined;
	declare module.exports: typeof tanh

    }
declare module 'core-js/fn/math/trunc' {
        declare var trunc: typeof undefined;
	declare module.exports: typeof trunc

    }
declare module 'core-js/fn/number' {
        declare var core$Number: typeof undefined;
	declare module.exports: typeof core$Number

    }
declare module 'core-js/fn/number/epsilon' {
        declare var EPSILON: typeof undefined;
	declare module.exports: typeof EPSILON

    }
declare module 'core-js/fn/number/is-finite' {
        declare var isFinite: typeof undefined;
	declare module.exports: typeof isFinite

    }
declare module 'core-js/fn/number/is-integer' {
        declare var isInteger: typeof undefined;
	declare module.exports: typeof isInteger

    }
declare module 'core-js/fn/number/is-nan' {
        declare var isNaN: typeof undefined;
	declare module.exports: typeof isNaN

    }
declare module 'core-js/fn/number/is-safe-integer' {
        declare var isSafeInteger: typeof undefined;
	declare module.exports: typeof isSafeInteger

    }
declare module 'core-js/fn/number/max-safe-integer' {
        declare var MAX_SAFE_INTEGER: typeof undefined;
	declare module.exports: typeof MAX_SAFE_INTEGER

    }
declare module 'core-js/fn/number/min-safe-integer' {
        declare var MIN_SAFE_INTEGER: typeof undefined;
	declare module.exports: typeof MIN_SAFE_INTEGER

    }
declare module 'core-js/fn/number/parse-float' {
        declare var parseFloat: typeof undefined;
	declare module.exports: typeof parseFloat

    }
declare module 'core-js/fn/number/parse-int' {
        declare var parseInt: typeof undefined;
	declare module.exports: typeof parseInt

    }
declare module 'core-js/fn/number/random' {
        declare var random: typeof undefined;
	declare module.exports: typeof random

    }
declare module 'core-js/fn/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/fn/object/assign' {
        declare var assign: typeof undefined;
	declare module.exports: typeof assign

    }
declare module 'core-js/fn/object/classof' {
        declare var classof: typeof undefined;
	declare module.exports: typeof classof

    }
declare module 'core-js/fn/object/create' {
        declare var create: typeof undefined;
	declare module.exports: typeof create

    }
declare module 'core-js/fn/object/define' {
        declare var define: typeof undefined;
	declare module.exports: typeof define

    }
declare module 'core-js/fn/object/define-properties' {
        declare var defineProperties: typeof undefined;
	declare module.exports: typeof defineProperties

    }
declare module 'core-js/fn/object/define-property' {
        declare var Reflect$defineProperty: typeof undefined;
	declare module.exports: typeof Reflect$defineProperty

    }
declare module 'core-js/fn/object/entries' {
        declare var entries: typeof undefined;
	declare module.exports: typeof entries

    }
declare module 'core-js/fn/object/freeze' {
        declare var freeze: typeof undefined;
	declare module.exports: typeof freeze

    }
declare module 'core-js/fn/object/get-own-property-descriptor' {
        declare var Reflect$getOwnPropertyDescriptor: typeof undefined;
	declare module.exports: typeof Reflect$getOwnPropertyDescriptor

    }
declare module 'core-js/fn/object/get-own-property-descriptors' {
        declare var getOwnPropertyDescriptors: typeof undefined;
	declare module.exports: typeof getOwnPropertyDescriptors

    }
declare module 'core-js/fn/object/get-own-property-names' {
        declare var getOwnPropertyNames: typeof undefined;
	declare module.exports: typeof getOwnPropertyNames

    }
declare module 'core-js/fn/object/get-own-property-symbols' {
        declare var getOwnPropertySymbols: typeof undefined;
	declare module.exports: typeof getOwnPropertySymbols

    }
declare module 'core-js/fn/object/get-prototype-of' {
        declare var Reflect$getPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$getPrototypeOf

    }
declare module 'core-js/fn/object/is' {
        declare var is: typeof undefined;
	declare module.exports: typeof is

    }
declare module 'core-js/fn/object/is-extensible' {
        declare var Reflect$isExtensible: typeof undefined;
	declare module.exports: typeof Reflect$isExtensible

    }
declare module 'core-js/fn/object/is-frozen' {
        declare var isFrozen: typeof undefined;
	declare module.exports: typeof isFrozen

    }
declare module 'core-js/fn/object/is-object' {
        declare var isObject: typeof undefined;
	declare module.exports: typeof isObject

    }
declare module 'core-js/fn/object/is-sealed' {
        declare var isSealed: typeof undefined;
	declare module.exports: typeof isSealed

    }
declare module 'core-js/fn/object/keys' {
        declare var keys: typeof undefined;
	declare module.exports: typeof keys

    }
declare module 'core-js/fn/object/make' {
        declare var make: typeof undefined;
	declare module.exports: typeof make

    }
declare module 'core-js/fn/object/prevent-extensions' {
        declare var Reflect$preventExtensions: typeof undefined;
	declare module.exports: typeof Reflect$preventExtensions

    }
declare module 'core-js/fn/object/seal' {
        declare var seal: typeof undefined;
	declare module.exports: typeof seal

    }
declare module 'core-js/fn/object/set-prototype-of' {
        declare var Reflect$setPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$setPrototypeOf

    }
declare module 'core-js/fn/object/values' {
        declare var values: typeof undefined;
	declare module.exports: typeof values

    }
declare module 'core-js/fn/reflect' {
        declare var Reflect: typeof undefined;
	declare module.exports: typeof Reflect

    }
declare module 'core-js/fn/reflect/apply' {
        declare var Reflect$apply: typeof undefined;
	declare module.exports: typeof Reflect$apply

    }
declare module 'core-js/fn/reflect/construct' {
        declare var Reflect$construct: typeof undefined;
	declare module.exports: typeof Reflect$construct

    }
declare module 'core-js/fn/reflect/define-property' {
        declare var Reflect$defineProperty: typeof undefined;
	declare module.exports: typeof Reflect$defineProperty

    }
declare module 'core-js/fn/reflect/delete-property' {
        declare var Reflect$deleteProperty: typeof undefined;
	declare module.exports: typeof Reflect$deleteProperty

    }
declare module 'core-js/fn/reflect/enumerate' {
        declare var Reflect$enumerate: typeof undefined;
	declare module.exports: typeof Reflect$enumerate

    }
declare module 'core-js/fn/reflect/get' {
        declare var Reflect$get: typeof undefined;
	declare module.exports: typeof Reflect$get

    }
declare module 'core-js/fn/reflect/get-own-property-descriptor' {
        declare var Reflect$getOwnPropertyDescriptor: typeof undefined;
	declare module.exports: typeof Reflect$getOwnPropertyDescriptor

    }
declare module 'core-js/fn/reflect/get-prototype-of' {
        declare var Reflect$getPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$getPrototypeOf

    }
declare module 'core-js/fn/reflect/has' {
        declare var Reflect$has: typeof undefined;
	declare module.exports: typeof Reflect$has

    }
declare module 'core-js/fn/reflect/is-extensible' {
        declare var Reflect$isExtensible: typeof undefined;
	declare module.exports: typeof Reflect$isExtensible

    }
declare module 'core-js/fn/reflect/own-keys' {
        declare var Reflect$ownKeys: typeof undefined;
	declare module.exports: typeof Reflect$ownKeys

    }
declare module 'core-js/fn/reflect/prevent-extensions' {
        declare var Reflect$preventExtensions: typeof undefined;
	declare module.exports: typeof Reflect$preventExtensions

    }
declare module 'core-js/fn/reflect/set' {
        declare var Reflect$set: typeof undefined;
	declare module.exports: typeof Reflect$set

    }
declare module 'core-js/fn/reflect/set-prototype-of' {
        declare var Reflect$setPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$setPrototypeOf

    }
declare module 'core-js/fn/regexp' {
        declare var core$RegExp: typeof undefined;
	declare module.exports: typeof core$RegExp

    }
declare module 'core-js/fn/regexp/escape' {
        declare var escape: typeof undefined;
	declare module.exports: typeof escape

    }
declare module 'core-js/fn/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/fn/string/at' {
        declare var at: typeof undefined;
	declare module.exports: typeof at

    }
declare module 'core-js/fn/string/code-point-at' {
        declare var codePointAt: typeof undefined;
	declare module.exports: typeof codePointAt

    }
declare module 'core-js/fn/string/ends-with' {
        declare var endsWith: typeof undefined;
	declare module.exports: typeof endsWith

    }
declare module 'core-js/fn/string/escape-html' {
        declare var escapeHTML: typeof undefined;
	declare module.exports: typeof escapeHTML

    }
declare module 'core-js/fn/string/from-code-point' {
        declare var fromCodePoint: typeof undefined;
	declare module.exports: typeof fromCodePoint

    }
declare module 'core-js/fn/string/includes' {
        declare var includes: typeof undefined;
	declare module.exports: typeof includes

    }
declare module 'core-js/fn/string/pad-end' {
        declare var padEnd: typeof undefined;
	declare module.exports: typeof padEnd

    }
declare module 'core-js/fn/string/pad-start' {
        declare var padStart: typeof undefined;
	declare module.exports: typeof padStart

    }
declare module 'core-js/fn/string/raw' {
        declare var raw: typeof undefined;
	declare module.exports: typeof raw

    }
declare module 'core-js/fn/string/repeat' {
        declare var repeat: typeof undefined;
	declare module.exports: typeof repeat

    }
declare module 'core-js/fn/string/starts-with' {
        declare var startsWith: typeof undefined;
	declare module.exports: typeof startsWith

    }
declare module 'core-js/fn/string/unescape-html' {
        declare var unescapeHTML: typeof undefined;
	declare module.exports: typeof unescapeHTML

    }
declare module 'core-js/fn/symbol' {
        declare var core$Symbol: typeof undefined;
	declare module.exports: typeof core$Symbol

    }
declare module 'core-js/fn/symbol/for' {
        declare var _for: typeof undefined;
	declare module.exports: typeof _for

    }
declare module 'core-js/fn/symbol/has-instance' {
        declare var hasInstance: typeof undefined;
	declare module.exports: typeof hasInstance

    }
declare module 'core-js/fn/symbol/is-concat-spreadable' {
        declare var isConcatSpreadable: typeof undefined;
	declare module.exports: typeof isConcatSpreadable

    }
declare module 'core-js/fn/symbol/iterator' {
        declare var iterator: typeof undefined;
	declare module.exports: typeof iterator

    }
declare module 'core-js/fn/symbol/key-for' {
        declare var keyFor: typeof undefined;
	declare module.exports: typeof keyFor

    }
declare module 'core-js/fn/symbol/match' {
        declare var match: typeof undefined;
	declare module.exports: typeof match

    }
declare module 'core-js/fn/symbol/replace' {
        declare var replace: typeof undefined;
	declare module.exports: typeof replace

    }
declare module 'core-js/fn/symbol/search' {
        declare var search: typeof undefined;
	declare module.exports: typeof search

    }
declare module 'core-js/fn/symbol/species' {
        declare var species: typeof undefined;
	declare module.exports: typeof species

    }
declare module 'core-js/fn/symbol/split' {
        declare var split: typeof undefined;
	declare module.exports: typeof split

    }
declare module 'core-js/fn/symbol/to-primitive' {
        declare var toPrimitive: typeof undefined;
	declare module.exports: typeof toPrimitive

    }
declare module 'core-js/fn/symbol/to-string-tag' {
        declare var toStringTag: typeof undefined;
	declare module.exports: typeof toStringTag

    }
declare module 'core-js/fn/symbol/unscopables' {
        declare var unscopables: typeof undefined;
	declare module.exports: typeof unscopables

    }
declare module 'core-js/es5' {
        declare module.exports: typeof core

    }
declare module 'core-js/es6' {
        declare module.exports: typeof core

    }
declare module 'core-js/es6/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/es6/function' {
        declare var core$Function: typeof undefined;
	declare module.exports: typeof core$Function

    }
declare module 'core-js/es6/map' {
        declare var core$Map: typeof undefined;
	declare module.exports: typeof core$Map

    }
declare module 'core-js/es6/math' {
        declare var core$Math: typeof undefined;
	declare module.exports: typeof core$Math

    }
declare module 'core-js/es6/number' {
        declare var core$Number: typeof undefined;
	declare module.exports: typeof core$Number

    }
declare module 'core-js/es6/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/es6/promise' {
        declare var core$Promise: typeof undefined;
	declare module.exports: typeof core$Promise

    }
declare module 'core-js/es6/reflect' {
        declare var Reflect: typeof undefined;
	declare module.exports: typeof Reflect

    }
declare module 'core-js/es6/regexp' {
        declare var core$RegExp: typeof undefined;
	declare module.exports: typeof core$RegExp

    }
declare module 'core-js/es6/set' {
        declare var core$Set: typeof undefined;
	declare module.exports: typeof core$Set

    }
declare module 'core-js/es6/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/es6/symbol' {
        declare var core$Symbol: typeof undefined;
	declare module.exports: typeof core$Symbol

    }
declare module 'core-js/es6/weak-map' {
        declare var core$WeakMap: typeof undefined;
	declare module.exports: typeof core$WeakMap

    }
declare module 'core-js/es6/weak-set' {
        declare var core$WeakSet: typeof undefined;
	declare module.exports: typeof core$WeakSet

    }
declare module 'core-js/es7' {
        declare module.exports: typeof core

    }
declare module 'core-js/es7/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/es7/map' {
        declare var core$Map: typeof undefined;
	declare module.exports: typeof core$Map

    }
declare module 'core-js/es7/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/es7/regexp' {
        declare var core$RegExp: typeof undefined;
	declare module.exports: typeof core$RegExp

    }
declare module 'core-js/es7/set' {
        declare var core$Set: typeof undefined;
	declare module.exports: typeof core$Set

    }
declare module 'core-js/es7/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/js' {
        declare module.exports: typeof core

    }
declare module 'core-js/js/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/web' {
        declare module.exports: typeof core

    }
declare module 'core-js/web/dom' {
        declare module.exports: typeof core

    }
declare module 'core-js/web/immediate' {
        declare module.exports: typeof core

    }
declare module 'core-js/web/timers' {
        declare module.exports: typeof core

    }
declare module 'core-js/library' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/shim' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/core' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/core/$for' {
        declare module.exports: typeof core$$for

    }
declare module 'core-js/library/core/_' {
        declare var core$_: typeof undefined;
	declare module.exports: typeof core$_

    }
declare module 'core-js/library/core/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/library/core/date' {
        declare var core$Date: typeof undefined;
	declare module.exports: typeof core$Date

    }
declare module 'core-js/library/core/delay' {
        declare var core$delay: typeof undefined;
	declare module.exports: typeof core$delay

    }
declare module 'core-js/library/core/dict' {
        declare var core$Dict: typeof undefined;
	declare module.exports: typeof core$Dict

    }
declare module 'core-js/library/core/function' {
        declare var core$Function: typeof undefined;
	declare module.exports: typeof core$Function

    }
declare module 'core-js/library/core/global' {
        declare var core$global: typeof undefined;
	declare module.exports: typeof core$global

    }
declare module 'core-js/library/core/log' {
        declare var core$log: typeof undefined;
	declare module.exports: typeof core$log

    }
declare module 'core-js/library/core/number' {
        declare var core$Number: typeof undefined;
	declare module.exports: typeof core$Number

    }
declare module 'core-js/library/core/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/library/core/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/library/fn/$for' {
        declare module.exports: typeof core$$for

    }
declare module 'core-js/library/fn/_' {
        declare var core$_: typeof undefined;
	declare module.exports: typeof core$_

    }
declare module 'core-js/library/fn/clear-immediate' {
        declare var core$clearImmediate: typeof undefined;
	declare module.exports: typeof core$clearImmediate

    }
declare module 'core-js/library/fn/delay' {
        declare var core$delay: typeof undefined;
	declare module.exports: typeof core$delay

    }
declare module 'core-js/library/fn/dict' {
        declare var core$Dict: typeof undefined;
	declare module.exports: typeof core$Dict

    }
declare module 'core-js/library/fn/get-iterator' {
        declare var core$getIterator: typeof undefined;
	declare module.exports: typeof core$getIterator

    }
declare module 'core-js/library/fn/global' {
        declare var core$global: typeof undefined;
	declare module.exports: typeof core$global

    }
declare module 'core-js/library/fn/is-iterable' {
        declare var core$isIterable: typeof undefined;
	declare module.exports: typeof core$isIterable

    }
declare module 'core-js/library/fn/log' {
        declare var core$log: typeof undefined;
	declare module.exports: typeof core$log

    }
declare module 'core-js/library/fn/map' {
        declare var core$Map: typeof undefined;
	declare module.exports: typeof core$Map

    }
declare module 'core-js/library/fn/promise' {
        declare var core$Promise: typeof undefined;
	declare module.exports: typeof core$Promise

    }
declare module 'core-js/library/fn/set' {
        declare var core$Set: typeof undefined;
	declare module.exports: typeof core$Set

    }
declare module 'core-js/library/fn/set-immediate' {
        declare var core$setImmediate: typeof undefined;
	declare module.exports: typeof core$setImmediate

    }
declare module 'core-js/library/fn/set-interval' {
        declare var core$setInterval: typeof undefined;
	declare module.exports: typeof core$setInterval

    }
declare module 'core-js/library/fn/set-timeout' {
        declare var core$setTimeout: typeof undefined;
	declare module.exports: typeof core$setTimeout

    }
declare module 'core-js/library/fn/weak-map' {
        declare var core$WeakMap: typeof undefined;
	declare module.exports: typeof core$WeakMap

    }
declare module 'core-js/library/fn/weak-set' {
        declare var core$WeakSet: typeof undefined;
	declare module.exports: typeof core$WeakSet

    }
declare module 'core-js/library/fn/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/library/fn/array/concat' {
        declare var concat: typeof undefined;
	declare module.exports: typeof concat

    }
declare module 'core-js/library/fn/array/copy-within' {
        declare var copyWithin: typeof undefined;
	declare module.exports: typeof copyWithin

    }
declare module 'core-js/library/fn/array/entries' {
        declare var entries: typeof undefined;
	declare module.exports: typeof entries

    }
declare module 'core-js/library/fn/array/every' {
        declare var every: typeof undefined;
	declare module.exports: typeof every

    }
declare module 'core-js/library/fn/array/fill' {
        declare var fill: typeof undefined;
	declare module.exports: typeof fill

    }
declare module 'core-js/library/fn/array/filter' {
        declare var filter: typeof undefined;
	declare module.exports: typeof filter

    }
declare module 'core-js/library/fn/array/find' {
        declare var find: typeof undefined;
	declare module.exports: typeof find

    }
declare module 'core-js/library/fn/array/find-index' {
        declare var findIndex: typeof undefined;
	declare module.exports: typeof findIndex

    }
declare module 'core-js/library/fn/array/for-each' {
        declare var forEach: typeof undefined;
	declare module.exports: typeof forEach

    }
declare module 'core-js/library/fn/array/from' {
        declare var from: typeof undefined;
	declare module.exports: typeof from

    }
declare module 'core-js/library/fn/array/includes' {
        declare var includes: typeof undefined;
	declare module.exports: typeof includes

    }
declare module 'core-js/library/fn/array/index-of' {
        declare var indexOf: typeof undefined;
	declare module.exports: typeof indexOf

    }
declare module 'core-js/library/fn/array/is-array' {
        declare var isArray: typeof undefined;
	declare module.exports: typeof isArray

    }
declare module 'core-js/library/fn/array/join' {
        declare var join: typeof undefined;
	declare module.exports: typeof join

    }
declare module 'core-js/library/fn/array/keys' {
        declare var keys: typeof undefined;
	declare module.exports: typeof keys

    }
declare module 'core-js/library/fn/array/last-index-of' {
        declare var lastIndexOf: typeof undefined;
	declare module.exports: typeof lastIndexOf

    }
declare module 'core-js/library/fn/array/map' {
        declare var map: typeof undefined;
	declare module.exports: typeof map

    }
declare module 'core-js/library/fn/array/of' {
        declare var of: typeof undefined;
	declare module.exports: typeof of

    }
declare module 'core-js/library/fn/array/pop' {
        declare var pop: typeof undefined;
	declare module.exports: typeof pop

    }
declare module 'core-js/library/fn/array/push' {
        declare var push: typeof undefined;
	declare module.exports: typeof push

    }
declare module 'core-js/library/fn/array/reduce' {
        declare var reduce: typeof undefined;
	declare module.exports: typeof reduce

    }
declare module 'core-js/library/fn/array/reduce-right' {
        declare var reduceRight: typeof undefined;
	declare module.exports: typeof reduceRight

    }
declare module 'core-js/library/fn/array/reverse' {
        declare var reverse: typeof undefined;
	declare module.exports: typeof reverse

    }
declare module 'core-js/library/fn/array/shift' {
        declare var shift: typeof undefined;
	declare module.exports: typeof shift

    }
declare module 'core-js/library/fn/array/slice' {
        declare var slice: typeof undefined;
	declare module.exports: typeof slice

    }
declare module 'core-js/library/fn/array/some' {
        declare var some: typeof undefined;
	declare module.exports: typeof some

    }
declare module 'core-js/library/fn/array/sort' {
        declare var sort: typeof undefined;
	declare module.exports: typeof sort

    }
declare module 'core-js/library/fn/array/splice' {
        declare var splice: typeof undefined;
	declare module.exports: typeof splice

    }
declare module 'core-js/library/fn/array/turn' {
        declare var turn: typeof undefined;
	declare module.exports: typeof turn

    }
declare module 'core-js/library/fn/array/unshift' {
        declare var unshift: typeof undefined;
	declare module.exports: typeof unshift

    }
declare module 'core-js/library/fn/array/values' {
        declare var values: typeof undefined;
	declare module.exports: typeof values

    }
declare module 'core-js/library/fn/date' {
        declare var core$Date: typeof undefined;
	declare module.exports: typeof core$Date

    }
declare module 'core-js/library/fn/date/add-locale' {
        declare var core$addLocale: typeof undefined;
	declare module.exports: typeof core$addLocale

    }
declare module 'core-js/library/fn/date/format' {
        declare var format: typeof undefined;
	declare module.exports: typeof format

    }
declare module 'core-js/library/fn/date/formatUTC' {
        declare var formatUTC: typeof undefined;
	declare module.exports: typeof formatUTC

    }
declare module 'core-js/library/fn/function' {
        declare var core$Function: typeof undefined;
	declare module.exports: typeof core$Function

    }
declare module 'core-js/library/fn/function/has-instance' {
        declare function hasInstance(value: any): boolean

	declare module.exports: typeof hasInstance

    }
declare module 'core-js/library/fn/function/name' {
        
    }
declare module 'core-js/library/fn/function/part' {
        declare var part: typeof undefined;
	declare module.exports: typeof part

    }
declare module 'core-js/library/fn/math' {
        declare var core$Math: typeof undefined;
	declare module.exports: typeof core$Math

    }
declare module 'core-js/library/fn/math/acosh' {
        declare var acosh: typeof undefined;
	declare module.exports: typeof acosh

    }
declare module 'core-js/library/fn/math/asinh' {
        declare var asinh: typeof undefined;
	declare module.exports: typeof asinh

    }
declare module 'core-js/library/fn/math/atanh' {
        declare var atanh: typeof undefined;
	declare module.exports: typeof atanh

    }
declare module 'core-js/library/fn/math/cbrt' {
        declare var cbrt: typeof undefined;
	declare module.exports: typeof cbrt

    }
declare module 'core-js/library/fn/math/clz32' {
        declare var clz32: typeof undefined;
	declare module.exports: typeof clz32

    }
declare module 'core-js/library/fn/math/cosh' {
        declare var cosh: typeof undefined;
	declare module.exports: typeof cosh

    }
declare module 'core-js/library/fn/math/expm1' {
        declare var expm1: typeof undefined;
	declare module.exports: typeof expm1

    }
declare module 'core-js/library/fn/math/fround' {
        declare var fround: typeof undefined;
	declare module.exports: typeof fround

    }
declare module 'core-js/library/fn/math/hypot' {
        declare var hypot: typeof undefined;
	declare module.exports: typeof hypot

    }
declare module 'core-js/library/fn/math/imul' {
        declare var imul: typeof undefined;
	declare module.exports: typeof imul

    }
declare module 'core-js/library/fn/math/log10' {
        declare var log10: typeof undefined;
	declare module.exports: typeof log10

    }
declare module 'core-js/library/fn/math/log1p' {
        declare var log1p: typeof undefined;
	declare module.exports: typeof log1p

    }
declare module 'core-js/library/fn/math/log2' {
        declare var log2: typeof undefined;
	declare module.exports: typeof log2

    }
declare module 'core-js/library/fn/math/sign' {
        declare var sign: typeof undefined;
	declare module.exports: typeof sign

    }
declare module 'core-js/library/fn/math/sinh' {
        declare var sinh: typeof undefined;
	declare module.exports: typeof sinh

    }
declare module 'core-js/library/fn/math/tanh' {
        declare var tanh: typeof undefined;
	declare module.exports: typeof tanh

    }
declare module 'core-js/library/fn/math/trunc' {
        declare var trunc: typeof undefined;
	declare module.exports: typeof trunc

    }
declare module 'core-js/library/fn/number' {
        declare var core$Number: typeof undefined;
	declare module.exports: typeof core$Number

    }
declare module 'core-js/library/fn/number/epsilon' {
        declare var EPSILON: typeof undefined;
	declare module.exports: typeof EPSILON

    }
declare module 'core-js/library/fn/number/is-finite' {
        declare var isFinite: typeof undefined;
	declare module.exports: typeof isFinite

    }
declare module 'core-js/library/fn/number/is-integer' {
        declare var isInteger: typeof undefined;
	declare module.exports: typeof isInteger

    }
declare module 'core-js/library/fn/number/is-nan' {
        declare var isNaN: typeof undefined;
	declare module.exports: typeof isNaN

    }
declare module 'core-js/library/fn/number/is-safe-integer' {
        declare var isSafeInteger: typeof undefined;
	declare module.exports: typeof isSafeInteger

    }
declare module 'core-js/library/fn/number/max-safe-integer' {
        declare var MAX_SAFE_INTEGER: typeof undefined;
	declare module.exports: typeof MAX_SAFE_INTEGER

    }
declare module 'core-js/library/fn/number/min-safe-integer' {
        declare var MIN_SAFE_INTEGER: typeof undefined;
	declare module.exports: typeof MIN_SAFE_INTEGER

    }
declare module 'core-js/library/fn/number/parse-float' {
        declare var parseFloat: typeof undefined;
	declare module.exports: typeof parseFloat

    }
declare module 'core-js/library/fn/number/parse-int' {
        declare var parseInt: typeof undefined;
	declare module.exports: typeof parseInt

    }
declare module 'core-js/library/fn/number/random' {
        declare var random: typeof undefined;
	declare module.exports: typeof random

    }
declare module 'core-js/library/fn/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/library/fn/object/assign' {
        declare var assign: typeof undefined;
	declare module.exports: typeof assign

    }
declare module 'core-js/library/fn/object/classof' {
        declare var classof: typeof undefined;
	declare module.exports: typeof classof

    }
declare module 'core-js/library/fn/object/create' {
        declare var create: typeof undefined;
	declare module.exports: typeof create

    }
declare module 'core-js/library/fn/object/define' {
        declare var define: typeof undefined;
	declare module.exports: typeof define

    }
declare module 'core-js/library/fn/object/define-properties' {
        declare var defineProperties: typeof undefined;
	declare module.exports: typeof defineProperties

    }
declare module 'core-js/library/fn/object/define-property' {
        declare var Reflect$defineProperty: typeof undefined;
	declare module.exports: typeof Reflect$defineProperty

    }
declare module 'core-js/library/fn/object/entries' {
        declare var entries: typeof undefined;
	declare module.exports: typeof entries

    }
declare module 'core-js/library/fn/object/freeze' {
        declare var freeze: typeof undefined;
	declare module.exports: typeof freeze

    }
declare module 'core-js/library/fn/object/get-own-property-descriptor' {
        declare var Reflect$getOwnPropertyDescriptor: typeof undefined;
	declare module.exports: typeof Reflect$getOwnPropertyDescriptor

    }
declare module 'core-js/library/fn/object/get-own-property-descriptors' {
        declare var getOwnPropertyDescriptors: typeof undefined;
	declare module.exports: typeof getOwnPropertyDescriptors

    }
declare module 'core-js/library/fn/object/get-own-property-names' {
        declare var getOwnPropertyNames: typeof undefined;
	declare module.exports: typeof getOwnPropertyNames

    }
declare module 'core-js/library/fn/object/get-own-property-symbols' {
        declare var getOwnPropertySymbols: typeof undefined;
	declare module.exports: typeof getOwnPropertySymbols

    }
declare module 'core-js/library/fn/object/get-prototype-of' {
        declare var Reflect$getPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$getPrototypeOf

    }
declare module 'core-js/library/fn/object/is' {
        declare var is: typeof undefined;
	declare module.exports: typeof is

    }
declare module 'core-js/library/fn/object/is-extensible' {
        declare var Reflect$isExtensible: typeof undefined;
	declare module.exports: typeof Reflect$isExtensible

    }
declare module 'core-js/library/fn/object/is-frozen' {
        declare var isFrozen: typeof undefined;
	declare module.exports: typeof isFrozen

    }
declare module 'core-js/library/fn/object/is-object' {
        declare var isObject: typeof undefined;
	declare module.exports: typeof isObject

    }
declare module 'core-js/library/fn/object/is-sealed' {
        declare var isSealed: typeof undefined;
	declare module.exports: typeof isSealed

    }
declare module 'core-js/library/fn/object/keys' {
        declare var keys: typeof undefined;
	declare module.exports: typeof keys

    }
declare module 'core-js/library/fn/object/make' {
        declare var make: typeof undefined;
	declare module.exports: typeof make

    }
declare module 'core-js/library/fn/object/prevent-extensions' {
        declare var Reflect$preventExtensions: typeof undefined;
	declare module.exports: typeof Reflect$preventExtensions

    }
declare module 'core-js/library/fn/object/seal' {
        declare var seal: typeof undefined;
	declare module.exports: typeof seal

    }
declare module 'core-js/library/fn/object/set-prototype-of' {
        declare var Reflect$setPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$setPrototypeOf

    }
declare module 'core-js/library/fn/object/values' {
        declare var values: typeof undefined;
	declare module.exports: typeof values

    }
declare module 'core-js/library/fn/reflect' {
        declare var Reflect: typeof undefined;
	declare module.exports: typeof Reflect

    }
declare module 'core-js/library/fn/reflect/apply' {
        declare var Reflect$apply: typeof undefined;
	declare module.exports: typeof Reflect$apply

    }
declare module 'core-js/library/fn/reflect/construct' {
        declare var Reflect$construct: typeof undefined;
	declare module.exports: typeof Reflect$construct

    }
declare module 'core-js/library/fn/reflect/define-property' {
        declare var Reflect$defineProperty: typeof undefined;
	declare module.exports: typeof Reflect$defineProperty

    }
declare module 'core-js/library/fn/reflect/delete-property' {
        declare var Reflect$deleteProperty: typeof undefined;
	declare module.exports: typeof Reflect$deleteProperty

    }
declare module 'core-js/library/fn/reflect/enumerate' {
        declare var Reflect$enumerate: typeof undefined;
	declare module.exports: typeof Reflect$enumerate

    }
declare module 'core-js/library/fn/reflect/get' {
        declare var Reflect$get: typeof undefined;
	declare module.exports: typeof Reflect$get

    }
declare module 'core-js/library/fn/reflect/get-own-property-descriptor' {
        declare var Reflect$getOwnPropertyDescriptor: typeof undefined;
	declare module.exports: typeof Reflect$getOwnPropertyDescriptor

    }
declare module 'core-js/library/fn/reflect/get-prototype-of' {
        declare var Reflect$getPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$getPrototypeOf

    }
declare module 'core-js/library/fn/reflect/has' {
        declare var Reflect$has: typeof undefined;
	declare module.exports: typeof Reflect$has

    }
declare module 'core-js/library/fn/reflect/is-extensible' {
        declare var Reflect$isExtensible: typeof undefined;
	declare module.exports: typeof Reflect$isExtensible

    }
declare module 'core-js/library/fn/reflect/own-keys' {
        declare var Reflect$ownKeys: typeof undefined;
	declare module.exports: typeof Reflect$ownKeys

    }
declare module 'core-js/library/fn/reflect/prevent-extensions' {
        declare var Reflect$preventExtensions: typeof undefined;
	declare module.exports: typeof Reflect$preventExtensions

    }
declare module 'core-js/library/fn/reflect/set' {
        declare var Reflect$set: typeof undefined;
	declare module.exports: typeof Reflect$set

    }
declare module 'core-js/library/fn/reflect/set-prototype-of' {
        declare var Reflect$setPrototypeOf: typeof undefined;
	declare module.exports: typeof Reflect$setPrototypeOf

    }
declare module 'core-js/library/fn/reflect/es7/define-metadata' {
        declare var Reflect$defineMetadata: typeof undefined;
	declare module.exports: typeof Reflect$defineMetadata

    }
declare module 'core-js/library/fn/reflect/es7/delete-metadata' {
        declare var Reflect$deleteMetadata: typeof undefined;
	declare module.exports: typeof Reflect$deleteMetadata

    }
declare module 'core-js/library/fn/reflect/es7/get-metadata' {
        declare var Reflect$getMetadata: typeof undefined;
	declare module.exports: typeof Reflect$getMetadata

    }
declare module 'core-js/library/fn/reflect/es7/get-metadata-keys' {
        declare var Reflect$getMetadataKeys: typeof undefined;
	declare module.exports: typeof Reflect$getMetadataKeys

    }
declare module 'core-js/library/fn/reflect/es7/get-own-metadata' {
        declare var Reflect$getOwnMetadata: typeof undefined;
	declare module.exports: typeof Reflect$getOwnMetadata

    }
declare module 'core-js/library/fn/reflect/es7/get-own-metadata-keys'' {
        declare var Reflect$getOwnMetadataKeys: typeof undefined;
	declare module.exports: typeof Reflect$getOwnMetadataKeys

    }
declare module 'core-js/library/fn/reflect/es7/has-metadata'' {
        declare var Reflect$hasMetadata: typeof undefined;
	declare module.exports: typeof Reflect$hasMetadata

    }
declare module 'core-js/library/fn/reflect/es7/has-own-metadata'' {
        declare var Reflect$hasOwnMetadata: typeof undefined;
	declare module.exports: typeof Reflect$hasOwnMetadata

    }
declare module 'core-js/library/fn/reflect/es7/metadata'' {
        declare var Reflect$metadata: typeof undefined;
	declare module.exports: typeof Reflect$metadata

    }
declare module 'core-js/library/fn/regexp' {
        declare var core$RegExp: typeof undefined;
	declare module.exports: typeof core$RegExp

    }
declare module 'core-js/library/fn/regexp/escape' {
        declare var escape: typeof undefined;
	declare module.exports: typeof escape

    }
declare module 'core-js/library/fn/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/library/fn/string/at' {
        declare var at: typeof undefined;
	declare module.exports: typeof at

    }
declare module 'core-js/library/fn/string/code-point-at' {
        declare var codePointAt: typeof undefined;
	declare module.exports: typeof codePointAt

    }
declare module 'core-js/library/fn/string/ends-with' {
        declare var endsWith: typeof undefined;
	declare module.exports: typeof endsWith

    }
declare module 'core-js/library/fn/string/escape-html' {
        declare var escapeHTML: typeof undefined;
	declare module.exports: typeof escapeHTML

    }
declare module 'core-js/library/fn/string/from-code-point' {
        declare var fromCodePoint: typeof undefined;
	declare module.exports: typeof fromCodePoint

    }
declare module 'core-js/library/fn/string/includes' {
        declare var includes: typeof undefined;
	declare module.exports: typeof includes

    }
declare module 'core-js/library/fn/string/pad-end' {
        declare var padEnd: typeof undefined;
	declare module.exports: typeof padEnd

    }
declare module 'core-js/library/fn/string/pad-start' {
        declare var padStart: typeof undefined;
	declare module.exports: typeof padStart

    }
declare module 'core-js/library/fn/string/raw' {
        declare var raw: typeof undefined;
	declare module.exports: typeof raw

    }
declare module 'core-js/library/fn/string/repeat' {
        declare var repeat: typeof undefined;
	declare module.exports: typeof repeat

    }
declare module 'core-js/library/fn/string/starts-with' {
        declare var startsWith: typeof undefined;
	declare module.exports: typeof startsWith

    }
declare module 'core-js/library/fn/string/unescape-html' {
        declare var unescapeHTML: typeof undefined;
	declare module.exports: typeof unescapeHTML

    }
declare module 'core-js/library/fn/symbol' {
        declare var core$Symbol: typeof undefined;
	declare module.exports: typeof core$Symbol

    }
declare module 'core-js/library/fn/symbol/for' {
        declare var _for: typeof undefined;
	declare module.exports: typeof _for

    }
declare module 'core-js/library/fn/symbol/has-instance' {
        declare var hasInstance: typeof undefined;
	declare module.exports: typeof hasInstance

    }
declare module 'core-js/library/fn/symbol/is-concat-spreadable' {
        declare var isConcatSpreadable: typeof undefined;
	declare module.exports: typeof isConcatSpreadable

    }
declare module 'core-js/library/fn/symbol/iterator' {
        declare var iterator: typeof undefined;
	declare module.exports: typeof iterator

    }
declare module 'core-js/library/fn/symbol/key-for' {
        declare var keyFor: typeof undefined;
	declare module.exports: typeof keyFor

    }
declare module 'core-js/library/fn/symbol/match' {
        declare var match: typeof undefined;
	declare module.exports: typeof match

    }
declare module 'core-js/library/fn/symbol/replace' {
        declare var replace: typeof undefined;
	declare module.exports: typeof replace

    }
declare module 'core-js/library/fn/symbol/search' {
        declare var search: typeof undefined;
	declare module.exports: typeof search

    }
declare module 'core-js/library/fn/symbol/species' {
        declare var species: typeof undefined;
	declare module.exports: typeof species

    }
declare module 'core-js/library/fn/symbol/split' {
        declare var split: typeof undefined;
	declare module.exports: typeof split

    }
declare module 'core-js/library/fn/symbol/to-primitive' {
        declare var toPrimitive: typeof undefined;
	declare module.exports: typeof toPrimitive

    }
declare module 'core-js/library/fn/symbol/to-string-tag' {
        declare var toStringTag: typeof undefined;
	declare module.exports: typeof toStringTag

    }
declare module 'core-js/library/fn/symbol/unscopables' {
        declare var unscopables: typeof undefined;
	declare module.exports: typeof unscopables

    }
declare module 'core-js/library/es5' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/es6' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/es6/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/library/es6/function' {
        declare var core$Function: typeof undefined;
	declare module.exports: typeof core$Function

    }
declare module 'core-js/library/es6/map' {
        declare var core$Map: typeof undefined;
	declare module.exports: typeof core$Map

    }
declare module 'core-js/library/es6/math' {
        declare var core$Math: typeof undefined;
	declare module.exports: typeof core$Math

    }
declare module 'core-js/library/es6/number' {
        declare var core$Number: typeof undefined;
	declare module.exports: typeof core$Number

    }
declare module 'core-js/library/es6/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/library/es6/promise' {
        declare var core$Promise: typeof undefined;
	declare module.exports: typeof core$Promise

    }
declare module 'core-js/library/es6/reflect' {
        declare var Reflect: typeof undefined;
	declare module.exports: typeof Reflect

    }
declare module 'core-js/library/es6/regexp' {
        declare var core$RegExp: typeof undefined;
	declare module.exports: typeof core$RegExp

    }
declare module 'core-js/library/es6/set' {
        declare var core$Set: typeof undefined;
	declare module.exports: typeof core$Set

    }
declare module 'core-js/library/es6/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/library/es6/symbol' {
        declare var core$Symbol: typeof undefined;
	declare module.exports: typeof core$Symbol

    }
declare module 'core-js/library/es6/weak-map' {
        declare var core$WeakMap: typeof undefined;
	declare module.exports: typeof core$WeakMap

    }
declare module 'core-js/library/es6/weak-set' {
        declare var core$WeakSet: typeof undefined;
	declare module.exports: typeof core$WeakSet

    }
declare module 'core-js/library/es7' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/es7/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/library/es7/map' {
        declare var core$Map: typeof undefined;
	declare module.exports: typeof core$Map

    }
declare module 'core-js/library/es7/object' {
        declare var core$Object: typeof undefined;
	declare module.exports: typeof core$Object

    }
declare module 'core-js/library/es7/regexp' {
        declare var core$RegExp: typeof undefined;
	declare module.exports: typeof core$RegExp

    }
declare module 'core-js/library/es7/set' {
        declare var core$Set: typeof undefined;
	declare module.exports: typeof core$Set

    }
declare module 'core-js/library/es7/string' {
        declare var core$String: typeof undefined;
	declare module.exports: typeof core$String

    }
declare module 'core-js/library/js' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/js/array' {
        declare var core$Array: typeof undefined;
	declare module.exports: typeof core$Array

    }
declare module 'core-js/library/web' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/web/dom' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/web/immediate' {
        declare module.exports: typeof core

    }
declare module 'core-js/library/web/timers' {
        declare module.exports: typeof core

    }
