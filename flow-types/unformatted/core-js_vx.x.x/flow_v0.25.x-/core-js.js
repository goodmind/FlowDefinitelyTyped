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
 * The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
 * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
 */
every<T>(
array: ArrayLike<T>,
callbackfn: (value: T, index: number, array: T[]) => boolean,
thisArg?: any): boolean,

/**
 * Determines whether the specified callback function returns true for any element of an array.
 * @param callbackfn A function that accepts up to three arguments.
 * The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
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
 * The first call to the callbackfn function provides this value as an argument instead of an array value.
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
 * The first call to the callbackfn function provides this value as an argument instead of an array value.
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
 * The first call to the callbackfn function provides this value as an argument instead of an array value.
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
 * The first call to the callbackfn function provides this value as an argument instead of an array value.
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
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
find<T>(
array: ArrayLike<T>,
predicate: (value: T, index: number, obj: T[]) => boolean,
thisArg?: any): T,

/**
 * Returns the index of the first element in the array where predicate is true, and undefined
 * otherwise.
 * @param predicate find calls predicate once for each element of the array, in ascending
 * order, until it finds one where predicate returns true. If such an element is found, find
 * immediately returns that element value. Otherwise, find returns undefined.
 * @param thisArg If provided, it will be used as the this value for each invocation of
 * predicate. If it is not provided, undefined is used instead.
 */
findIndex<T>(
array: ArrayLike<T>,
predicate: (value: T) => boolean,
thisArg?: any): number,

/**
 * Returns the this object after filling the section identified by start and end with value
 * @param value value to fill array section with
 * @param start index to start filling the array at. If start is negative, it is treated as
 * length+start where length is the length of the array.
 * @param end index to stop filling the array at. If end is negative, it is treated as
 * length+end.
 */
fill<T>(array: ArrayLike<T>, value: T, start?: number, end?: number): T[],

/**
 * Returns the this object after copying a section of the array identified by start and end
 * to the same array starting at position target
 * @param target If target is negative, it is treated as length+target where length is the
 * length of the array.
 * @param start If start is negative, it is treated as length+start. If end is negative, it
 * is treated as length+end.
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
<T>(value?: Dict<T>): Dict<T>,
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
format(template: string, locale?: string): string,

/**
 * Non-standard.
 */
formatUTC(template: string, locale?: string): string
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
"NO PRINT IMPLEMENTED: ComputedPropertyName"(): IterableIterator<number>
} declare function delay(msec: number): Promise<void>
declare var core: typeof npm$namespace$core;

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
        
        
        Reflect: typeof npm$namespace$core$Reflect,
      }
declare var core$version: string;


      declare var npm$namespace$core$Reflect: {
        apply: typeof core$Reflect$apply,
construct: typeof core$Reflect$construct,
defineProperty: typeof core$Reflect$defineProperty,
deleteProperty: typeof core$Reflect$deleteProperty,
enumerate: typeof core$Reflect$enumerate,
get: typeof core$Reflect$get,
getOwnPropertyDescriptor: typeof core$Reflect$getOwnPropertyDescriptor,
getPrototypeOf: typeof core$Reflect$getPrototypeOf,
has: typeof core$Reflect$has,
isExtensible: typeof core$Reflect$isExtensible,
ownKeys: typeof core$Reflect$ownKeys,
preventExtensions: typeof core$Reflect$preventExtensions,
set: typeof core$Reflect$set,
setPrototypeOf: typeof core$Reflect$setPrototypeOf,
defineMetadata: typeof core$Reflect$defineMetadata,
deleteMetadata: typeof core$Reflect$deleteMetadata,
getMetadata: typeof core$Reflect$getMetadata,
getMetadataKeys: typeof core$Reflect$getMetadataKeys,
getOwnMetadata: typeof core$Reflect$getOwnMetadata,
getOwnMetadataKeys: typeof core$Reflect$getOwnMetadataKeys,
hasMetadata: typeof core$Reflect$hasMetadata,
hasOwnMetadata: typeof core$Reflect$hasOwnMetadata,
metadata: typeof core$Reflect$metadata,
        
        
        
        
      }
declare function core$Reflect$apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any


declare function core$Reflect$construct(target: Function, argumentsList: ArrayLike<any>): any


declare function core$Reflect$defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean


declare function core$Reflect$deleteProperty(target: any, propertyKey: PropertyKey): boolean


declare function core$Reflect$enumerate(target: any): IterableIterator<any>


declare function core$Reflect$get(target: any, propertyKey: PropertyKey, receiver?: any): any


declare function core$Reflect$getOwnPropertyDescriptor(target: any, propertyKey: PropertyKey): PropertyDescriptor


declare function core$Reflect$getPrototypeOf(target: any): any


declare function core$Reflect$has(target: any, propertyKey: string | Symbol): boolean


declare function core$Reflect$isExtensible(target: any): boolean


declare function core$Reflect$ownKeys(target: any): PropertyKey[]


declare function core$Reflect$preventExtensions(target: any): boolean


declare function core$Reflect$set(target: any, propertyKey: PropertyKey, value: any, receiver?: any): boolean


declare function core$Reflect$setPrototypeOf(target: any, proto: any): boolean



/**
 * Define a unique metadata entry on the target.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param metadataValue A value that contains attached metadata.
 * @param target The target object on which to define metadata.
 * @example ### Example
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  Reflect.defineMetadata("custom:annotation", options, Example);
 *          *
 *          *  // decorator factory as metadata-producing annotation.
 *          *  function MyAnnotation(options): ClassDecorator {
 *          *      return target => Reflect.defineMetadata("custom:annotation", options, target);
 *          *  }
 *          * ```
 */
declare function core$Reflect$defineMetadata(
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
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.deleteMetadata("custom:annotation", Example);
 *          * ```
 */
declare function core$Reflect$deleteMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): boolean



/**
 * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
 * @example ### Example
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.getMetadata("custom:annotation", Example);
 *          * ```
 */
declare function core$Reflect$getMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): any



/**
 * Gets the metadata keys defined on the target object or its prototype chain.
 * @param target The target object on which the metadata is defined.
 * @returns An array of unique metadata keys.
 * @example ### Example
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.getMetadataKeys(Example);
 *          * ```
 */
declare function core$Reflect$getMetadataKeys(target: Object, targetKey?: string | Symbol): any[]



/**
 * Gets the metadata value for the provided metadata key on the target object.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
 * @example ### Example
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.getOwnMetadata("custom:annotation", Example);
 *          * ```
 */
declare function core$Reflect$getOwnMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): any



/**
 * Gets the unique metadata keys defined on the target object.
 * @param target The target object on which the metadata is defined.
 * @returns An array of unique metadata keys.
 * @example ### Example
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.getOwnMetadataKeys(Example);
 *          * ```
 */
declare function core$Reflect$getOwnMetadataKeys(target: Object, targetKey?: string | Symbol): any[]



/**
 * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
 * @example ### Example
 * 
 * ```typescript
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.hasMetadata("custom:annotation", Example);
 *          * ```
 */
declare function core$Reflect$hasMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): boolean



/**
 * Gets a value indicating whether the target object has the provided metadata key defined.
 * @param metadataKey A key used to store and retrieve metadata.
 * @param target The target object on which the metadata is defined.
 * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
 * @example ### Example
 * 
 * ```typescript
 *          *
 *          *  class Example {
 *          *  }
 *          *
 *          *  // constructor
 *          *  result = Reflect.hasOwnMetadata("custom:annotation", Example);
 *          * ```
 */
declare function core$Reflect$hasOwnMetadata(metadataKey: any, target: Object, targetKey?: string | Symbol): boolean



/**
 * A default metadata decorator factory that can be used on a class, class member, or parameter.
 * @param metadataKey The key for the metadata entry.
 * @param metadataValue The value for the metadata entry.
 * @returns A decorator function.
 * @remarks If `metadataKey` is already defined for the target and target key, the
 * metadataValue for that key will be overwritten.
 * @example ### Example
 * 
 * ```typescript
 *          *  // constructor
 *          *  @Reflect.metadata(key, value)
 *          *  class Example {
 *          *  }
 *          *
 *          *  // property (on constructor, TypeScript only)
 *          *  class Example {
 *          *      @Reflect.metadata(key, value)
 *          *      static staticProperty;
 *          *  }
 *          *
 *          *  // property (on prototype, TypeScript only)
 *          *  class Example {
 *          *      @Reflect.metadata(key, value)
 *          *      property;
 *          *  }
 *          *
 *          *  // method (on constructor)
 *          *  class Example {
 *          *      @Reflect.metadata(key, value)
 *          *      static staticMethod() { }
 *          *  }
 *          *
 *          *  // method (on prototype)
 *          *  class Example {
 *          *      @Reflect.metadata(key, value)
 *          *      method() { }
 *          *  }
 *          * ```
 */
declare function core$Reflect$metadata(
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
format(date: core$Date, template: string, locale?: string): string,
formatUTC(date: core$Date, template: string, locale?: string): string
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

declare function core$addLocale(lang: string, locale: core$Locale): typeof core


declare function core$locale(lang?: string): string


declare function core$delay(msec: number): core$Promise<void>
declare module 'core-js' {
        declare export default typeof core

    }
declare module 'core-js/shim' {
        declare export default typeof core

    }
declare module 'core-js/core' {
        declare export default typeof core

    }
declare module 'core-js/core/$for' {
        declare var $for: typeof core$$for;
	declare export default typeof $for

    }
declare module 'core-js/core/_' {
        declare var _: typeof core$_;
	declare export default typeof _

    }
declare module 'core-js/core/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/core/date' {
        declare var Date: typeof core$Date;
	declare export default typeof Date

    }
declare module 'core-js/core/delay' {
        declare var delay: typeof core$delay;
	declare export default typeof delay

    }
declare module 'core-js/core/dict' {
        declare var Dict: typeof core$Dict;
	declare export default typeof Dict

    }
declare module 'core-js/core/function' {
        declare var Function: typeof core$Function;
	declare export default typeof Function

    }
declare module 'core-js/core/global' {
        declare var global: typeof core$global;
	declare export default typeof global

    }
declare module 'core-js/core/log' {
        declare var log: typeof core$log;
	declare export default typeof log

    }
declare module 'core-js/core/number' {
        declare var Number: typeof core$Number;
	declare export default typeof Number

    }
declare module 'core-js/core/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/core/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/fn/$for' {
        declare var $for: typeof core$$for;
	declare export default typeof $for

    }
declare module 'core-js/fn/_' {
        declare var _: typeof core$_;
	declare export default typeof _

    }
declare module 'core-js/fn/clear-immediate' {
        declare var clearImmediate: typeof core$clearImmediate;
	declare export default typeof clearImmediate

    }
declare module 'core-js/fn/delay' {
        declare var delay: typeof core$delay;
	declare export default typeof delay

    }
declare module 'core-js/fn/dict' {
        declare var Dict: typeof core$Dict;
	declare export default typeof Dict

    }
declare module 'core-js/fn/get-iterator' {
        declare var getIterator: typeof core$getIterator;
	declare export default typeof getIterator

    }
declare module 'core-js/fn/global' {
        declare var global: typeof core$global;
	declare export default typeof global

    }
declare module 'core-js/fn/is-iterable' {
        declare var isIterable: typeof core$isIterable;
	declare export default typeof isIterable

    }
declare module 'core-js/fn/log' {
        declare var log: typeof core$log;
	declare export default typeof log

    }
declare module 'core-js/fn/map' {
        declare var Map: typeof core$Map;
	declare export default typeof Map

    }
declare module 'core-js/fn/promise' {
        declare var Promise: typeof core$Promise;
	declare export default typeof Promise

    }
declare module 'core-js/fn/set' {
        declare var Set: typeof core$Set;
	declare export default typeof Set

    }
declare module 'core-js/fn/set-immediate' {
        declare var setImmediate: typeof core$setImmediate;
	declare export default typeof setImmediate

    }
declare module 'core-js/fn/set-interval' {
        declare var setInterval: typeof core$setInterval;
	declare export default typeof setInterval

    }
declare module 'core-js/fn/set-timeout' {
        declare var setTimeout: typeof core$setTimeout;
	declare export default typeof setTimeout

    }
declare module 'core-js/fn/weak-map' {
        declare var WeakMap: typeof core$WeakMap;
	declare export default typeof WeakMap

    }
declare module 'core-js/fn/weak-set' {
        declare var WeakSet: typeof core$WeakSet;
	declare export default typeof WeakSet

    }
declare module 'core-js/fn/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/fn/array/concat' {
        declare var concat: typeof core$Array.concat;
	declare export default typeof concat

    }
declare module 'core-js/fn/array/copy-within' {
        declare var copyWithin: typeof core$Array.copyWithin;
	declare export default typeof copyWithin

    }
declare module 'core-js/fn/array/entries' {
        declare var entries: typeof core$Array.entries;
	declare export default typeof entries

    }
declare module 'core-js/fn/array/every' {
        declare var every: typeof core$Array.every;
	declare export default typeof every

    }
declare module 'core-js/fn/array/fill' {
        declare var fill: typeof core$Array.fill;
	declare export default typeof fill

    }
declare module 'core-js/fn/array/filter' {
        declare var filter: typeof core$Array.filter;
	declare export default typeof filter

    }
declare module 'core-js/fn/array/find' {
        declare var find: typeof core$Array.find;
	declare export default typeof find

    }
declare module 'core-js/fn/array/find-index' {
        declare var findIndex: typeof core$Array.findIndex;
	declare export default typeof findIndex

    }
declare module 'core-js/fn/array/for-each' {
        declare var forEach: typeof core$Array.forEach;
	declare export default typeof forEach

    }
declare module 'core-js/fn/array/from' {
        declare var from: typeof core$Array.from;
	declare export default typeof from

    }
declare module 'core-js/fn/array/includes' {
        declare var includes: typeof core$Array.includes;
	declare export default typeof includes

    }
declare module 'core-js/fn/array/index-of' {
        declare var indexOf: typeof core$Array.indexOf;
	declare export default typeof indexOf

    }
declare module 'core-js/fn/array/is-array' {
        declare var isArray: typeof core$Array.isArray;
	declare export default typeof isArray

    }
declare module 'core-js/fn/array/join' {
        declare var join: typeof core$Array.join;
	declare export default typeof join

    }
declare module 'core-js/fn/array/keys' {
        declare var keys: typeof core$Array.keys;
	declare export default typeof keys

    }
declare module 'core-js/fn/array/last-index-of' {
        declare var lastIndexOf: typeof core$Array.lastIndexOf;
	declare export default typeof lastIndexOf

    }
declare module 'core-js/fn/array/map' {
        declare var map: typeof core$Array.map;
	declare export default typeof map

    }
declare module 'core-js/fn/array/of' {
        declare var of: typeof core$Array.of;
	declare export default typeof of

    }
declare module 'core-js/fn/array/pop' {
        declare var pop: typeof core$Array.pop;
	declare export default typeof pop

    }
declare module 'core-js/fn/array/push' {
        declare var push: typeof core$Array.push;
	declare export default typeof push

    }
declare module 'core-js/fn/array/reduce' {
        declare var reduce: typeof core$Array.reduce;
	declare export default typeof reduce

    }
declare module 'core-js/fn/array/reduce-right' {
        declare var reduceRight: typeof core$Array.reduceRight;
	declare export default typeof reduceRight

    }
declare module 'core-js/fn/array/reverse' {
        declare var reverse: typeof core$Array.reverse;
	declare export default typeof reverse

    }
declare module 'core-js/fn/array/shift' {
        declare var shift: typeof core$Array.shift;
	declare export default typeof shift

    }
declare module 'core-js/fn/array/slice' {
        declare var slice: typeof core$Array.slice;
	declare export default typeof slice

    }
declare module 'core-js/fn/array/some' {
        declare var some: typeof core$Array.some;
	declare export default typeof some

    }
declare module 'core-js/fn/array/sort' {
        declare var sort: typeof core$Array.sort;
	declare export default typeof sort

    }
declare module 'core-js/fn/array/splice' {
        declare var splice: typeof core$Array.splice;
	declare export default typeof splice

    }
declare module 'core-js/fn/array/turn' {
        declare var turn: typeof core$Array.turn;
	declare export default typeof turn

    }
declare module 'core-js/fn/array/unshift' {
        declare var unshift: typeof core$Array.unshift;
	declare export default typeof unshift

    }
declare module 'core-js/fn/array/values' {
        declare var values: typeof core$Array.values;
	declare export default typeof values

    }
declare module 'core-js/fn/date' {
        declare var Date: typeof core$Date;
	declare export default typeof Date

    }
declare module 'core-js/fn/date/add-locale' {
        declare var addLocale: typeof core$addLocale;
	declare export default typeof addLocale

    }
declare module 'core-js/fn/date/format' {
        declare var format: typeof core$Date.format;
	declare export default typeof format

    }
declare module 'core-js/fn/date/formatUTC' {
        declare var formatUTC: typeof core$Date.formatUTC;
	declare export default typeof formatUTC

    }
declare module 'core-js/fn/function' {
        declare var Function: typeof core$Function;
	declare export default typeof Function

    }
declare module 'core-js/fn/function/has-instance' {
        declare function hasInstance(value: any): boolean

	declare export default typeof hasInstance

    }
declare module 'core-js/fn/function/name' {
        
    }
declare module 'core-js/fn/function/part' {
        declare var part: typeof core$Function.part;
	declare export default typeof part

    }
declare module 'core-js/fn/math' {
        declare var Math: typeof core$Math;
	declare export default typeof Math

    }
declare module 'core-js/fn/math/acosh' {
        declare var acosh: typeof core$Math.acosh;
	declare export default typeof acosh

    }
declare module 'core-js/fn/math/asinh' {
        declare var asinh: typeof core$Math.asinh;
	declare export default typeof asinh

    }
declare module 'core-js/fn/math/atanh' {
        declare var atanh: typeof core$Math.atanh;
	declare export default typeof atanh

    }
declare module 'core-js/fn/math/cbrt' {
        declare var cbrt: typeof core$Math.cbrt;
	declare export default typeof cbrt

    }
declare module 'core-js/fn/math/clz32' {
        declare var clz32: typeof core$Math.clz32;
	declare export default typeof clz32

    }
declare module 'core-js/fn/math/cosh' {
        declare var cosh: typeof core$Math.cosh;
	declare export default typeof cosh

    }
declare module 'core-js/fn/math/expm1' {
        declare var expm1: typeof core$Math.expm1;
	declare export default typeof expm1

    }
declare module 'core-js/fn/math/fround' {
        declare var fround: typeof core$Math.fround;
	declare export default typeof fround

    }
declare module 'core-js/fn/math/hypot' {
        declare var hypot: typeof core$Math.hypot;
	declare export default typeof hypot

    }
declare module 'core-js/fn/math/imul' {
        declare var imul: typeof core$Math.imul;
	declare export default typeof imul

    }
declare module 'core-js/fn/math/log10' {
        declare var log10: typeof core$Math.log10;
	declare export default typeof log10

    }
declare module 'core-js/fn/math/log1p' {
        declare var log1p: typeof core$Math.log1p;
	declare export default typeof log1p

    }
declare module 'core-js/fn/math/log2' {
        declare var log2: typeof core$Math.log2;
	declare export default typeof log2

    }
declare module 'core-js/fn/math/sign' {
        declare var sign: typeof core$Math.sign;
	declare export default typeof sign

    }
declare module 'core-js/fn/math/sinh' {
        declare var sinh: typeof core$Math.sinh;
	declare export default typeof sinh

    }
declare module 'core-js/fn/math/tanh' {
        declare var tanh: typeof core$Math.tanh;
	declare export default typeof tanh

    }
declare module 'core-js/fn/math/trunc' {
        declare var trunc: typeof core$Math.trunc;
	declare export default typeof trunc

    }
declare module 'core-js/fn/number' {
        declare var Number: typeof core$Number;
	declare export default typeof Number

    }
declare module 'core-js/fn/number/epsilon' {
        declare var EPSILON: typeof core$Number.EPSILON;
	declare export default typeof EPSILON

    }
declare module 'core-js/fn/number/is-finite' {
        declare var isFinite: typeof core$Number.isFinite;
	declare export default typeof isFinite

    }
declare module 'core-js/fn/number/is-integer' {
        declare var isInteger: typeof core$Number.isInteger;
	declare export default typeof isInteger

    }
declare module 'core-js/fn/number/is-nan' {
        declare var isNaN: typeof core$Number.isNaN;
	declare export default typeof isNaN

    }
declare module 'core-js/fn/number/is-safe-integer' {
        declare var isSafeInteger: typeof core$Number.isSafeInteger;
	declare export default typeof isSafeInteger

    }
declare module 'core-js/fn/number/max-safe-integer' {
        declare var MAX_SAFE_INTEGER: typeof core$Number.MAX_SAFE_INTEGER;
	declare export default typeof MAX_SAFE_INTEGER

    }
declare module 'core-js/fn/number/min-safe-integer' {
        declare var MIN_SAFE_INTEGER: typeof core$Number.MIN_SAFE_INTEGER;
	declare export default typeof MIN_SAFE_INTEGER

    }
declare module 'core-js/fn/number/parse-float' {
        declare var parseFloat: typeof core$Number.parseFloat;
	declare export default typeof parseFloat

    }
declare module 'core-js/fn/number/parse-int' {
        declare var parseInt: typeof core$Number.parseInt;
	declare export default typeof parseInt

    }
declare module 'core-js/fn/number/random' {
        declare var random: typeof core$Number.random;
	declare export default typeof random

    }
declare module 'core-js/fn/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/fn/object/assign' {
        declare var assign: typeof core$Object.assign;
	declare export default typeof assign

    }
declare module 'core-js/fn/object/classof' {
        declare var classof: typeof core$Object.classof;
	declare export default typeof classof

    }
declare module 'core-js/fn/object/create' {
        declare var create: typeof core$Object.create;
	declare export default typeof create

    }
declare module 'core-js/fn/object/define' {
        declare var define: typeof core$Object.define;
	declare export default typeof define

    }
declare module 'core-js/fn/object/define-properties' {
        declare var defineProperties: typeof core$Object.defineProperties;
	declare export default typeof defineProperties

    }
declare module 'core-js/fn/object/define-property' {
        declare var defineProperty: typeof core$Object.defineProperty;
	declare export default typeof defineProperty

    }
declare module 'core-js/fn/object/entries' {
        declare var entries: typeof core$Object.entries;
	declare export default typeof entries

    }
declare module 'core-js/fn/object/freeze' {
        declare var freeze: typeof core$Object.freeze;
	declare export default typeof freeze

    }
declare module 'core-js/fn/object/get-own-property-descriptor' {
        declare var getOwnPropertyDescriptor: typeof core$Object.getOwnPropertyDescriptor;
	declare export default typeof getOwnPropertyDescriptor

    }
declare module 'core-js/fn/object/get-own-property-descriptors' {
        declare var getOwnPropertyDescriptors: typeof core$Object.getOwnPropertyDescriptors;
	declare export default typeof getOwnPropertyDescriptors

    }
declare module 'core-js/fn/object/get-own-property-names' {
        declare var getOwnPropertyNames: typeof core$Object.getOwnPropertyNames;
	declare export default typeof getOwnPropertyNames

    }
declare module 'core-js/fn/object/get-own-property-symbols' {
        declare var getOwnPropertySymbols: typeof core$Object.getOwnPropertySymbols;
	declare export default typeof getOwnPropertySymbols

    }
declare module 'core-js/fn/object/get-prototype-of' {
        declare var getPrototypeOf: typeof core$Object.getPrototypeOf;
	declare export default typeof getPrototypeOf

    }
declare module 'core-js/fn/object/is' {
        declare var is: typeof core$Object.is;
	declare export default typeof is

    }
declare module 'core-js/fn/object/is-extensible' {
        declare var isExtensible: typeof core$Object.isExtensible;
	declare export default typeof isExtensible

    }
declare module 'core-js/fn/object/is-frozen' {
        declare var isFrozen: typeof core$Object.isFrozen;
	declare export default typeof isFrozen

    }
declare module 'core-js/fn/object/is-object' {
        declare var isObject: typeof core$Object.isObject;
	declare export default typeof isObject

    }
declare module 'core-js/fn/object/is-sealed' {
        declare var isSealed: typeof core$Object.isSealed;
	declare export default typeof isSealed

    }
declare module 'core-js/fn/object/keys' {
        declare var keys: typeof core$Object.keys;
	declare export default typeof keys

    }
declare module 'core-js/fn/object/make' {
        declare var make: typeof core$Object.make;
	declare export default typeof make

    }
declare module 'core-js/fn/object/prevent-extensions' {
        declare var preventExtensions: typeof core$Object.preventExtensions;
	declare export default typeof preventExtensions

    }
declare module 'core-js/fn/object/seal' {
        declare var seal: typeof core$Object.seal;
	declare export default typeof seal

    }
declare module 'core-js/fn/object/set-prototype-of' {
        declare var setPrototypeOf: typeof core$Object.setPrototypeOf;
	declare export default typeof setPrototypeOf

    }
declare module 'core-js/fn/object/values' {
        declare var values: typeof core$Object.values;
	declare export default typeof values

    }
declare module 'core-js/fn/reflect' {
        declare var Reflect: typeof core$Reflect;
	declare export default typeof Reflect

    }
declare module 'core-js/fn/reflect/apply' {
        declare var apply: typeof core$Reflect$apply;
	declare export default typeof apply

    }
declare module 'core-js/fn/reflect/construct' {
        declare var construct: typeof core$Reflect$construct;
	declare export default typeof construct

    }
declare module 'core-js/fn/reflect/define-property' {
        declare var defineProperty: typeof core$Reflect$defineProperty;
	declare export default typeof defineProperty

    }
declare module 'core-js/fn/reflect/delete-property' {
        declare var deleteProperty: typeof core$Reflect$deleteProperty;
	declare export default typeof deleteProperty

    }
declare module 'core-js/fn/reflect/enumerate' {
        declare var enumerate: typeof core$Reflect$enumerate;
	declare export default typeof enumerate

    }
declare module 'core-js/fn/reflect/get' {
        declare var get: typeof core$Reflect$get;
	declare export default typeof get

    }
declare module 'core-js/fn/reflect/get-own-property-descriptor' {
        declare var getOwnPropertyDescriptor: typeof core$Reflect$getOwnPropertyDescriptor;
	declare export default typeof getOwnPropertyDescriptor

    }
declare module 'core-js/fn/reflect/get-prototype-of' {
        declare var getPrototypeOf: typeof core$Reflect$getPrototypeOf;
	declare export default typeof getPrototypeOf

    }
declare module 'core-js/fn/reflect/has' {
        declare var has: typeof core$Reflect$has;
	declare export default typeof has

    }
declare module 'core-js/fn/reflect/is-extensible' {
        declare var isExtensible: typeof core$Reflect$isExtensible;
	declare export default typeof isExtensible

    }
declare module 'core-js/fn/reflect/own-keys' {
        declare var ownKeys: typeof core$Reflect$ownKeys;
	declare export default typeof ownKeys

    }
declare module 'core-js/fn/reflect/prevent-extensions' {
        declare var preventExtensions: typeof core$Reflect$preventExtensions;
	declare export default typeof preventExtensions

    }
declare module 'core-js/fn/reflect/set' {
        declare var set: typeof core$Reflect$set;
	declare export default typeof set

    }
declare module 'core-js/fn/reflect/set-prototype-of' {
        declare var setPrototypeOf: typeof core$Reflect$setPrototypeOf;
	declare export default typeof setPrototypeOf

    }
declare module 'core-js/fn/regexp' {
        declare var RegExp: typeof core$RegExp;
	declare export default typeof RegExp

    }
declare module 'core-js/fn/regexp/escape' {
        declare var escape: typeof core$RegExp.escape;
	declare export default typeof escape

    }
declare module 'core-js/fn/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/fn/string/at' {
        declare var at: typeof core$String.at;
	declare export default typeof at

    }
declare module 'core-js/fn/string/code-point-at' {
        declare var codePointAt: typeof core$String.codePointAt;
	declare export default typeof codePointAt

    }
declare module 'core-js/fn/string/ends-with' {
        declare var endsWith: typeof core$String.endsWith;
	declare export default typeof endsWith

    }
declare module 'core-js/fn/string/escape-html' {
        declare var escapeHTML: typeof core$String.escapeHTML;
	declare export default typeof escapeHTML

    }
declare module 'core-js/fn/string/from-code-point' {
        declare var fromCodePoint: typeof core$String.fromCodePoint;
	declare export default typeof fromCodePoint

    }
declare module 'core-js/fn/string/includes' {
        declare var includes: typeof core$String.includes;
	declare export default typeof includes

    }
declare module 'core-js/fn/string/pad-end' {
        declare var padEnd: typeof core$String.padEnd;
	declare export default typeof padEnd

    }
declare module 'core-js/fn/string/pad-start' {
        declare var padStart: typeof core$String.padStart;
	declare export default typeof padStart

    }
declare module 'core-js/fn/string/raw' {
        declare var raw: typeof core$String.raw;
	declare export default typeof raw

    }
declare module 'core-js/fn/string/repeat' {
        declare var repeat: typeof core$String.repeat;
	declare export default typeof repeat

    }
declare module 'core-js/fn/string/starts-with' {
        declare var startsWith: typeof core$String.startsWith;
	declare export default typeof startsWith

    }
declare module 'core-js/fn/string/unescape-html' {
        declare var unescapeHTML: typeof core$String.unescapeHTML;
	declare export default typeof unescapeHTML

    }
declare module 'core-js/fn/symbol' {
        declare var Symbol: typeof core$Symbol;
	declare export default typeof Symbol

    }
declare module 'core-js/fn/symbol/for' {
        declare var _for: typeof core$Symbol.for;
	declare export default typeof _for

    }
declare module 'core-js/fn/symbol/has-instance' {
        declare var hasInstance: typeof core$Symbol.hasInstance;
	declare export default typeof hasInstance

    }
declare module 'core-js/fn/symbol/is-concat-spreadable' {
        declare var isConcatSpreadable: typeof core$Symbol.isConcatSpreadable;
	declare export default typeof isConcatSpreadable

    }
declare module 'core-js/fn/symbol/iterator' {
        declare var iterator: typeof SymbolConstructor$iterator;
	declare export default typeof iterator

    }
declare module 'core-js/fn/symbol/key-for' {
        declare var keyFor: typeof core$Symbol.keyFor;
	declare export default typeof keyFor

    }
declare module 'core-js/fn/symbol/match' {
        declare var match: typeof core$Symbol.match;
	declare export default typeof match

    }
declare module 'core-js/fn/symbol/replace' {
        declare var replace: typeof core$Symbol.replace;
	declare export default typeof replace

    }
declare module 'core-js/fn/symbol/search' {
        declare var search: typeof core$Symbol.search;
	declare export default typeof search

    }
declare module 'core-js/fn/symbol/species' {
        declare var species: typeof core$Symbol.species;
	declare export default typeof species

    }
declare module 'core-js/fn/symbol/split' {
        declare var split: typeof core$Symbol.split;
	declare export default typeof split

    }
declare module 'core-js/fn/symbol/to-primitive' {
        declare var toPrimitive: typeof core$Symbol.toPrimitive;
	declare export default typeof toPrimitive

    }
declare module 'core-js/fn/symbol/to-string-tag' {
        declare var toStringTag: typeof core$Symbol.toStringTag;
	declare export default typeof toStringTag

    }
declare module 'core-js/fn/symbol/unscopables' {
        declare var unscopables: typeof core$Symbol.unscopables;
	declare export default typeof unscopables

    }
declare module 'core-js/es5' {
        declare export default typeof core

    }
declare module 'core-js/es6' {
        declare export default typeof core

    }
declare module 'core-js/es6/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/es6/function' {
        declare var Function: typeof core$Function;
	declare export default typeof Function

    }
declare module 'core-js/es6/map' {
        declare var Map: typeof core$Map;
	declare export default typeof Map

    }
declare module 'core-js/es6/math' {
        declare var Math: typeof core$Math;
	declare export default typeof Math

    }
declare module 'core-js/es6/number' {
        declare var Number: typeof core$Number;
	declare export default typeof Number

    }
declare module 'core-js/es6/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/es6/promise' {
        declare var Promise: typeof core$Promise;
	declare export default typeof Promise

    }
declare module 'core-js/es6/reflect' {
        declare var Reflect: typeof core$Reflect;
	declare export default typeof Reflect

    }
declare module 'core-js/es6/regexp' {
        declare var RegExp: typeof core$RegExp;
	declare export default typeof RegExp

    }
declare module 'core-js/es6/set' {
        declare var Set: typeof core$Set;
	declare export default typeof Set

    }
declare module 'core-js/es6/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/es6/symbol' {
        declare var Symbol: typeof core$Symbol;
	declare export default typeof Symbol

    }
declare module 'core-js/es6/weak-map' {
        declare var WeakMap: typeof core$WeakMap;
	declare export default typeof WeakMap

    }
declare module 'core-js/es6/weak-set' {
        declare var WeakSet: typeof core$WeakSet;
	declare export default typeof WeakSet

    }
declare module 'core-js/es7' {
        declare export default typeof core

    }
declare module 'core-js/es7/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/es7/map' {
        declare var Map: typeof core$Map;
	declare export default typeof Map

    }
declare module 'core-js/es7/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/es7/regexp' {
        declare var RegExp: typeof core$RegExp;
	declare export default typeof RegExp

    }
declare module 'core-js/es7/set' {
        declare var Set: typeof core$Set;
	declare export default typeof Set

    }
declare module 'core-js/es7/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/js' {
        declare export default typeof core

    }
declare module 'core-js/js/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/web' {
        declare export default typeof core

    }
declare module 'core-js/web/dom' {
        declare export default typeof core

    }
declare module 'core-js/web/immediate' {
        declare export default typeof core

    }
declare module 'core-js/web/timers' {
        declare export default typeof core

    }
declare module 'core-js/library' {
        declare export default typeof core

    }
declare module 'core-js/library/shim' {
        declare export default typeof core

    }
declare module 'core-js/library/core' {
        declare export default typeof core

    }
declare module 'core-js/library/core/$for' {
        declare var $for: typeof core$$for;
	declare export default typeof $for

    }
declare module 'core-js/library/core/_' {
        declare var _: typeof core$_;
	declare export default typeof _

    }
declare module 'core-js/library/core/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/library/core/date' {
        declare var Date: typeof core$Date;
	declare export default typeof Date

    }
declare module 'core-js/library/core/delay' {
        declare var delay: typeof core$delay;
	declare export default typeof delay

    }
declare module 'core-js/library/core/dict' {
        declare var Dict: typeof core$Dict;
	declare export default typeof Dict

    }
declare module 'core-js/library/core/function' {
        declare var Function: typeof core$Function;
	declare export default typeof Function

    }
declare module 'core-js/library/core/global' {
        declare var global: typeof core$global;
	declare export default typeof global

    }
declare module 'core-js/library/core/log' {
        declare var log: typeof core$log;
	declare export default typeof log

    }
declare module 'core-js/library/core/number' {
        declare var Number: typeof core$Number;
	declare export default typeof Number

    }
declare module 'core-js/library/core/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/library/core/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/library/fn/$for' {
        declare var $for: typeof core$$for;
	declare export default typeof $for

    }
declare module 'core-js/library/fn/_' {
        declare var _: typeof core$_;
	declare export default typeof _

    }
declare module 'core-js/library/fn/clear-immediate' {
        declare var clearImmediate: typeof core$clearImmediate;
	declare export default typeof clearImmediate

    }
declare module 'core-js/library/fn/delay' {
        declare var delay: typeof core$delay;
	declare export default typeof delay

    }
declare module 'core-js/library/fn/dict' {
        declare var Dict: typeof core$Dict;
	declare export default typeof Dict

    }
declare module 'core-js/library/fn/get-iterator' {
        declare var getIterator: typeof core$getIterator;
	declare export default typeof getIterator

    }
declare module 'core-js/library/fn/global' {
        declare var global: typeof core$global;
	declare export default typeof global

    }
declare module 'core-js/library/fn/is-iterable' {
        declare var isIterable: typeof core$isIterable;
	declare export default typeof isIterable

    }
declare module 'core-js/library/fn/log' {
        declare var log: typeof core$log;
	declare export default typeof log

    }
declare module 'core-js/library/fn/map' {
        declare var Map: typeof core$Map;
	declare export default typeof Map

    }
declare module 'core-js/library/fn/promise' {
        declare var Promise: typeof core$Promise;
	declare export default typeof Promise

    }
declare module 'core-js/library/fn/set' {
        declare var Set: typeof core$Set;
	declare export default typeof Set

    }
declare module 'core-js/library/fn/set-immediate' {
        declare var setImmediate: typeof core$setImmediate;
	declare export default typeof setImmediate

    }
declare module 'core-js/library/fn/set-interval' {
        declare var setInterval: typeof core$setInterval;
	declare export default typeof setInterval

    }
declare module 'core-js/library/fn/set-timeout' {
        declare var setTimeout: typeof core$setTimeout;
	declare export default typeof setTimeout

    }
declare module 'core-js/library/fn/weak-map' {
        declare var WeakMap: typeof core$WeakMap;
	declare export default typeof WeakMap

    }
declare module 'core-js/library/fn/weak-set' {
        declare var WeakSet: typeof core$WeakSet;
	declare export default typeof WeakSet

    }
declare module 'core-js/library/fn/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/library/fn/array/concat' {
        declare var concat: typeof core$Array.concat;
	declare export default typeof concat

    }
declare module 'core-js/library/fn/array/copy-within' {
        declare var copyWithin: typeof core$Array.copyWithin;
	declare export default typeof copyWithin

    }
declare module 'core-js/library/fn/array/entries' {
        declare var entries: typeof core$Array.entries;
	declare export default typeof entries

    }
declare module 'core-js/library/fn/array/every' {
        declare var every: typeof core$Array.every;
	declare export default typeof every

    }
declare module 'core-js/library/fn/array/fill' {
        declare var fill: typeof core$Array.fill;
	declare export default typeof fill

    }
declare module 'core-js/library/fn/array/filter' {
        declare var filter: typeof core$Array.filter;
	declare export default typeof filter

    }
declare module 'core-js/library/fn/array/find' {
        declare var find: typeof core$Array.find;
	declare export default typeof find

    }
declare module 'core-js/library/fn/array/find-index' {
        declare var findIndex: typeof core$Array.findIndex;
	declare export default typeof findIndex

    }
declare module 'core-js/library/fn/array/for-each' {
        declare var forEach: typeof core$Array.forEach;
	declare export default typeof forEach

    }
declare module 'core-js/library/fn/array/from' {
        declare var from: typeof core$Array.from;
	declare export default typeof from

    }
declare module 'core-js/library/fn/array/includes' {
        declare var includes: typeof core$Array.includes;
	declare export default typeof includes

    }
declare module 'core-js/library/fn/array/index-of' {
        declare var indexOf: typeof core$Array.indexOf;
	declare export default typeof indexOf

    }
declare module 'core-js/library/fn/array/is-array' {
        declare var isArray: typeof core$Array.isArray;
	declare export default typeof isArray

    }
declare module 'core-js/library/fn/array/join' {
        declare var join: typeof core$Array.join;
	declare export default typeof join

    }
declare module 'core-js/library/fn/array/keys' {
        declare var keys: typeof core$Array.keys;
	declare export default typeof keys

    }
declare module 'core-js/library/fn/array/last-index-of' {
        declare var lastIndexOf: typeof core$Array.lastIndexOf;
	declare export default typeof lastIndexOf

    }
declare module 'core-js/library/fn/array/map' {
        declare var map: typeof core$Array.map;
	declare export default typeof map

    }
declare module 'core-js/library/fn/array/of' {
        declare var of: typeof core$Array.of;
	declare export default typeof of

    }
declare module 'core-js/library/fn/array/pop' {
        declare var pop: typeof core$Array.pop;
	declare export default typeof pop

    }
declare module 'core-js/library/fn/array/push' {
        declare var push: typeof core$Array.push;
	declare export default typeof push

    }
declare module 'core-js/library/fn/array/reduce' {
        declare var reduce: typeof core$Array.reduce;
	declare export default typeof reduce

    }
declare module 'core-js/library/fn/array/reduce-right' {
        declare var reduceRight: typeof core$Array.reduceRight;
	declare export default typeof reduceRight

    }
declare module 'core-js/library/fn/array/reverse' {
        declare var reverse: typeof core$Array.reverse;
	declare export default typeof reverse

    }
declare module 'core-js/library/fn/array/shift' {
        declare var shift: typeof core$Array.shift;
	declare export default typeof shift

    }
declare module 'core-js/library/fn/array/slice' {
        declare var slice: typeof core$Array.slice;
	declare export default typeof slice

    }
declare module 'core-js/library/fn/array/some' {
        declare var some: typeof core$Array.some;
	declare export default typeof some

    }
declare module 'core-js/library/fn/array/sort' {
        declare var sort: typeof core$Array.sort;
	declare export default typeof sort

    }
declare module 'core-js/library/fn/array/splice' {
        declare var splice: typeof core$Array.splice;
	declare export default typeof splice

    }
declare module 'core-js/library/fn/array/turn' {
        declare var turn: typeof core$Array.turn;
	declare export default typeof turn

    }
declare module 'core-js/library/fn/array/unshift' {
        declare var unshift: typeof core$Array.unshift;
	declare export default typeof unshift

    }
declare module 'core-js/library/fn/array/values' {
        declare var values: typeof core$Array.values;
	declare export default typeof values

    }
declare module 'core-js/library/fn/date' {
        declare var Date: typeof core$Date;
	declare export default typeof Date

    }
declare module 'core-js/library/fn/date/add-locale' {
        declare var addLocale: typeof core$addLocale;
	declare export default typeof addLocale

    }
declare module 'core-js/library/fn/date/format' {
        declare var format: typeof core$Date.format;
	declare export default typeof format

    }
declare module 'core-js/library/fn/date/formatUTC' {
        declare var formatUTC: typeof core$Date.formatUTC;
	declare export default typeof formatUTC

    }
declare module 'core-js/library/fn/function' {
        declare var Function: typeof core$Function;
	declare export default typeof Function

    }
declare module 'core-js/library/fn/function/has-instance' {
        declare function hasInstance(value: any): boolean

	declare export default typeof hasInstance

    }
declare module 'core-js/library/fn/function/name' {
        
    }
declare module 'core-js/library/fn/function/part' {
        declare var part: typeof core$Function.part;
	declare export default typeof part

    }
declare module 'core-js/library/fn/math' {
        declare var Math: typeof core$Math;
	declare export default typeof Math

    }
declare module 'core-js/library/fn/math/acosh' {
        declare var acosh: typeof core$Math.acosh;
	declare export default typeof acosh

    }
declare module 'core-js/library/fn/math/asinh' {
        declare var asinh: typeof core$Math.asinh;
	declare export default typeof asinh

    }
declare module 'core-js/library/fn/math/atanh' {
        declare var atanh: typeof core$Math.atanh;
	declare export default typeof atanh

    }
declare module 'core-js/library/fn/math/cbrt' {
        declare var cbrt: typeof core$Math.cbrt;
	declare export default typeof cbrt

    }
declare module 'core-js/library/fn/math/clz32' {
        declare var clz32: typeof core$Math.clz32;
	declare export default typeof clz32

    }
declare module 'core-js/library/fn/math/cosh' {
        declare var cosh: typeof core$Math.cosh;
	declare export default typeof cosh

    }
declare module 'core-js/library/fn/math/expm1' {
        declare var expm1: typeof core$Math.expm1;
	declare export default typeof expm1

    }
declare module 'core-js/library/fn/math/fround' {
        declare var fround: typeof core$Math.fround;
	declare export default typeof fround

    }
declare module 'core-js/library/fn/math/hypot' {
        declare var hypot: typeof core$Math.hypot;
	declare export default typeof hypot

    }
declare module 'core-js/library/fn/math/imul' {
        declare var imul: typeof core$Math.imul;
	declare export default typeof imul

    }
declare module 'core-js/library/fn/math/log10' {
        declare var log10: typeof core$Math.log10;
	declare export default typeof log10

    }
declare module 'core-js/library/fn/math/log1p' {
        declare var log1p: typeof core$Math.log1p;
	declare export default typeof log1p

    }
declare module 'core-js/library/fn/math/log2' {
        declare var log2: typeof core$Math.log2;
	declare export default typeof log2

    }
declare module 'core-js/library/fn/math/sign' {
        declare var sign: typeof core$Math.sign;
	declare export default typeof sign

    }
declare module 'core-js/library/fn/math/sinh' {
        declare var sinh: typeof core$Math.sinh;
	declare export default typeof sinh

    }
declare module 'core-js/library/fn/math/tanh' {
        declare var tanh: typeof core$Math.tanh;
	declare export default typeof tanh

    }
declare module 'core-js/library/fn/math/trunc' {
        declare var trunc: typeof core$Math.trunc;
	declare export default typeof trunc

    }
declare module 'core-js/library/fn/number' {
        declare var Number: typeof core$Number;
	declare export default typeof Number

    }
declare module 'core-js/library/fn/number/epsilon' {
        declare var EPSILON: typeof core$Number.EPSILON;
	declare export default typeof EPSILON

    }
declare module 'core-js/library/fn/number/is-finite' {
        declare var isFinite: typeof core$Number.isFinite;
	declare export default typeof isFinite

    }
declare module 'core-js/library/fn/number/is-integer' {
        declare var isInteger: typeof core$Number.isInteger;
	declare export default typeof isInteger

    }
declare module 'core-js/library/fn/number/is-nan' {
        declare var isNaN: typeof core$Number.isNaN;
	declare export default typeof isNaN

    }
declare module 'core-js/library/fn/number/is-safe-integer' {
        declare var isSafeInteger: typeof core$Number.isSafeInteger;
	declare export default typeof isSafeInteger

    }
declare module 'core-js/library/fn/number/max-safe-integer' {
        declare var MAX_SAFE_INTEGER: typeof core$Number.MAX_SAFE_INTEGER;
	declare export default typeof MAX_SAFE_INTEGER

    }
declare module 'core-js/library/fn/number/min-safe-integer' {
        declare var MIN_SAFE_INTEGER: typeof core$Number.MIN_SAFE_INTEGER;
	declare export default typeof MIN_SAFE_INTEGER

    }
declare module 'core-js/library/fn/number/parse-float' {
        declare var parseFloat: typeof core$Number.parseFloat;
	declare export default typeof parseFloat

    }
declare module 'core-js/library/fn/number/parse-int' {
        declare var parseInt: typeof core$Number.parseInt;
	declare export default typeof parseInt

    }
declare module 'core-js/library/fn/number/random' {
        declare var random: typeof core$Number.random;
	declare export default typeof random

    }
declare module 'core-js/library/fn/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/library/fn/object/assign' {
        declare var assign: typeof core$Object.assign;
	declare export default typeof assign

    }
declare module 'core-js/library/fn/object/classof' {
        declare var classof: typeof core$Object.classof;
	declare export default typeof classof

    }
declare module 'core-js/library/fn/object/create' {
        declare var create: typeof core$Object.create;
	declare export default typeof create

    }
declare module 'core-js/library/fn/object/define' {
        declare var define: typeof core$Object.define;
	declare export default typeof define

    }
declare module 'core-js/library/fn/object/define-properties' {
        declare var defineProperties: typeof core$Object.defineProperties;
	declare export default typeof defineProperties

    }
declare module 'core-js/library/fn/object/define-property' {
        declare var defineProperty: typeof core$Object.defineProperty;
	declare export default typeof defineProperty

    }
declare module 'core-js/library/fn/object/entries' {
        declare var entries: typeof core$Object.entries;
	declare export default typeof entries

    }
declare module 'core-js/library/fn/object/freeze' {
        declare var freeze: typeof core$Object.freeze;
	declare export default typeof freeze

    }
declare module 'core-js/library/fn/object/get-own-property-descriptor' {
        declare var getOwnPropertyDescriptor: typeof core$Object.getOwnPropertyDescriptor;
	declare export default typeof getOwnPropertyDescriptor

    }
declare module 'core-js/library/fn/object/get-own-property-descriptors' {
        declare var getOwnPropertyDescriptors: typeof core$Object.getOwnPropertyDescriptors;
	declare export default typeof getOwnPropertyDescriptors

    }
declare module 'core-js/library/fn/object/get-own-property-names' {
        declare var getOwnPropertyNames: typeof core$Object.getOwnPropertyNames;
	declare export default typeof getOwnPropertyNames

    }
declare module 'core-js/library/fn/object/get-own-property-symbols' {
        declare var getOwnPropertySymbols: typeof core$Object.getOwnPropertySymbols;
	declare export default typeof getOwnPropertySymbols

    }
declare module 'core-js/library/fn/object/get-prototype-of' {
        declare var getPrototypeOf: typeof core$Object.getPrototypeOf;
	declare export default typeof getPrototypeOf

    }
declare module 'core-js/library/fn/object/is' {
        declare var is: typeof core$Object.is;
	declare export default typeof is

    }
declare module 'core-js/library/fn/object/is-extensible' {
        declare var isExtensible: typeof core$Object.isExtensible;
	declare export default typeof isExtensible

    }
declare module 'core-js/library/fn/object/is-frozen' {
        declare var isFrozen: typeof core$Object.isFrozen;
	declare export default typeof isFrozen

    }
declare module 'core-js/library/fn/object/is-object' {
        declare var isObject: typeof core$Object.isObject;
	declare export default typeof isObject

    }
declare module 'core-js/library/fn/object/is-sealed' {
        declare var isSealed: typeof core$Object.isSealed;
	declare export default typeof isSealed

    }
declare module 'core-js/library/fn/object/keys' {
        declare var keys: typeof core$Object.keys;
	declare export default typeof keys

    }
declare module 'core-js/library/fn/object/make' {
        declare var make: typeof core$Object.make;
	declare export default typeof make

    }
declare module 'core-js/library/fn/object/prevent-extensions' {
        declare var preventExtensions: typeof core$Object.preventExtensions;
	declare export default typeof preventExtensions

    }
declare module 'core-js/library/fn/object/seal' {
        declare var seal: typeof core$Object.seal;
	declare export default typeof seal

    }
declare module 'core-js/library/fn/object/set-prototype-of' {
        declare var setPrototypeOf: typeof core$Object.setPrototypeOf;
	declare export default typeof setPrototypeOf

    }
declare module 'core-js/library/fn/object/values' {
        declare var values: typeof core$Object.values;
	declare export default typeof values

    }
declare module 'core-js/library/fn/reflect' {
        declare var Reflect: typeof core$Reflect;
	declare export default typeof Reflect

    }
declare module 'core-js/library/fn/reflect/apply' {
        declare var apply: typeof core$Reflect$apply;
	declare export default typeof apply

    }
declare module 'core-js/library/fn/reflect/construct' {
        declare var construct: typeof core$Reflect$construct;
	declare export default typeof construct

    }
declare module 'core-js/library/fn/reflect/define-property' {
        declare var defineProperty: typeof core$Reflect$defineProperty;
	declare export default typeof defineProperty

    }
declare module 'core-js/library/fn/reflect/delete-property' {
        declare var deleteProperty: typeof core$Reflect$deleteProperty;
	declare export default typeof deleteProperty

    }
declare module 'core-js/library/fn/reflect/enumerate' {
        declare var enumerate: typeof core$Reflect$enumerate;
	declare export default typeof enumerate

    }
declare module 'core-js/library/fn/reflect/get' {
        declare var get: typeof core$Reflect$get;
	declare export default typeof get

    }
declare module 'core-js/library/fn/reflect/get-own-property-descriptor' {
        declare var getOwnPropertyDescriptor: typeof core$Reflect$getOwnPropertyDescriptor;
	declare export default typeof getOwnPropertyDescriptor

    }
declare module 'core-js/library/fn/reflect/get-prototype-of' {
        declare var getPrototypeOf: typeof core$Reflect$getPrototypeOf;
	declare export default typeof getPrototypeOf

    }
declare module 'core-js/library/fn/reflect/has' {
        declare var has: typeof core$Reflect$has;
	declare export default typeof has

    }
declare module 'core-js/library/fn/reflect/is-extensible' {
        declare var isExtensible: typeof core$Reflect$isExtensible;
	declare export default typeof isExtensible

    }
declare module 'core-js/library/fn/reflect/own-keys' {
        declare var ownKeys: typeof core$Reflect$ownKeys;
	declare export default typeof ownKeys

    }
declare module 'core-js/library/fn/reflect/prevent-extensions' {
        declare var preventExtensions: typeof core$Reflect$preventExtensions;
	declare export default typeof preventExtensions

    }
declare module 'core-js/library/fn/reflect/set' {
        declare var set: typeof core$Reflect$set;
	declare export default typeof set

    }
declare module 'core-js/library/fn/reflect/set-prototype-of' {
        declare var setPrototypeOf: typeof core$Reflect$setPrototypeOf;
	declare export default typeof setPrototypeOf

    }
declare module 'core-js/library/fn/reflect/es7/define-metadata' {
        declare var defineMetadata: typeof core$Reflect$defineMetadata;
	declare export default typeof defineMetadata

    }
declare module 'core-js/library/fn/reflect/es7/delete-metadata' {
        declare var deleteMetadata: typeof core$Reflect$deleteMetadata;
	declare export default typeof deleteMetadata

    }
declare module 'core-js/library/fn/reflect/es7/get-metadata' {
        declare var getMetadata: typeof core$Reflect$getMetadata;
	declare export default typeof getMetadata

    }
declare module 'core-js/library/fn/reflect/es7/get-metadata-keys' {
        declare var getMetadataKeys: typeof core$Reflect$getMetadataKeys;
	declare export default typeof getMetadataKeys

    }
declare module 'core-js/library/fn/reflect/es7/get-own-metadata' {
        declare var getOwnMetadata: typeof core$Reflect$getOwnMetadata;
	declare export default typeof getOwnMetadata

    }
declare module 'core-js/library/fn/reflect/es7/get-own-metadata-keys'' {
        declare var getOwnMetadataKeys: typeof core$Reflect$getOwnMetadataKeys;
	declare export default typeof getOwnMetadataKeys

    }
declare module 'core-js/library/fn/reflect/es7/has-metadata'' {
        declare var hasMetadata: typeof core$Reflect$hasMetadata;
	declare export default typeof hasMetadata

    }
declare module 'core-js/library/fn/reflect/es7/has-own-metadata'' {
        declare var hasOwnMetadata: typeof core$Reflect$hasOwnMetadata;
	declare export default typeof hasOwnMetadata

    }
declare module 'core-js/library/fn/reflect/es7/metadata'' {
        declare var metadata: typeof core$Reflect$metadata;
	declare export default typeof metadata

    }
declare module 'core-js/library/fn/regexp' {
        declare var RegExp: typeof core$RegExp;
	declare export default typeof RegExp

    }
declare module 'core-js/library/fn/regexp/escape' {
        declare var escape: typeof core$RegExp.escape;
	declare export default typeof escape

    }
declare module 'core-js/library/fn/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/library/fn/string/at' {
        declare var at: typeof core$String.at;
	declare export default typeof at

    }
declare module 'core-js/library/fn/string/code-point-at' {
        declare var codePointAt: typeof core$String.codePointAt;
	declare export default typeof codePointAt

    }
declare module 'core-js/library/fn/string/ends-with' {
        declare var endsWith: typeof core$String.endsWith;
	declare export default typeof endsWith

    }
declare module 'core-js/library/fn/string/escape-html' {
        declare var escapeHTML: typeof core$String.escapeHTML;
	declare export default typeof escapeHTML

    }
declare module 'core-js/library/fn/string/from-code-point' {
        declare var fromCodePoint: typeof core$String.fromCodePoint;
	declare export default typeof fromCodePoint

    }
declare module 'core-js/library/fn/string/includes' {
        declare var includes: typeof core$String.includes;
	declare export default typeof includes

    }
declare module 'core-js/library/fn/string/pad-end' {
        declare var padEnd: typeof core$String.padEnd;
	declare export default typeof padEnd

    }
declare module 'core-js/library/fn/string/pad-start' {
        declare var padStart: typeof core$String.padStart;
	declare export default typeof padStart

    }
declare module 'core-js/library/fn/string/raw' {
        declare var raw: typeof core$String.raw;
	declare export default typeof raw

    }
declare module 'core-js/library/fn/string/repeat' {
        declare var repeat: typeof core$String.repeat;
	declare export default typeof repeat

    }
declare module 'core-js/library/fn/string/starts-with' {
        declare var startsWith: typeof core$String.startsWith;
	declare export default typeof startsWith

    }
declare module 'core-js/library/fn/string/unescape-html' {
        declare var unescapeHTML: typeof core$String.unescapeHTML;
	declare export default typeof unescapeHTML

    }
declare module 'core-js/library/fn/symbol' {
        declare var Symbol: typeof core$Symbol;
	declare export default typeof Symbol

    }
declare module 'core-js/library/fn/symbol/for' {
        declare var _for: typeof core$Symbol.for;
	declare export default typeof _for

    }
declare module 'core-js/library/fn/symbol/has-instance' {
        declare var hasInstance: typeof core$Symbol.hasInstance;
	declare export default typeof hasInstance

    }
declare module 'core-js/library/fn/symbol/is-concat-spreadable' {
        declare var isConcatSpreadable: typeof core$Symbol.isConcatSpreadable;
	declare export default typeof isConcatSpreadable

    }
declare module 'core-js/library/fn/symbol/iterator' {
        declare var iterator: typeof SymbolConstructor$iterator;
	declare export default typeof iterator

    }
declare module 'core-js/library/fn/symbol/key-for' {
        declare var keyFor: typeof core$Symbol.keyFor;
	declare export default typeof keyFor

    }
declare module 'core-js/library/fn/symbol/match' {
        declare var match: typeof core$Symbol.match;
	declare export default typeof match

    }
declare module 'core-js/library/fn/symbol/replace' {
        declare var replace: typeof core$Symbol.replace;
	declare export default typeof replace

    }
declare module 'core-js/library/fn/symbol/search' {
        declare var search: typeof core$Symbol.search;
	declare export default typeof search

    }
declare module 'core-js/library/fn/symbol/species' {
        declare var species: typeof core$Symbol.species;
	declare export default typeof species

    }
declare module 'core-js/library/fn/symbol/split' {
        declare var split: typeof core$Symbol.split;
	declare export default typeof split

    }
declare module 'core-js/library/fn/symbol/to-primitive' {
        declare var toPrimitive: typeof core$Symbol.toPrimitive;
	declare export default typeof toPrimitive

    }
declare module 'core-js/library/fn/symbol/to-string-tag' {
        declare var toStringTag: typeof core$Symbol.toStringTag;
	declare export default typeof toStringTag

    }
declare module 'core-js/library/fn/symbol/unscopables' {
        declare var unscopables: typeof core$Symbol.unscopables;
	declare export default typeof unscopables

    }
declare module 'core-js/library/es5' {
        declare export default typeof core

    }
declare module 'core-js/library/es6' {
        declare export default typeof core

    }
declare module 'core-js/library/es6/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/library/es6/function' {
        declare var Function: typeof core$Function;
	declare export default typeof Function

    }
declare module 'core-js/library/es6/map' {
        declare var Map: typeof core$Map;
	declare export default typeof Map

    }
declare module 'core-js/library/es6/math' {
        declare var Math: typeof core$Math;
	declare export default typeof Math

    }
declare module 'core-js/library/es6/number' {
        declare var Number: typeof core$Number;
	declare export default typeof Number

    }
declare module 'core-js/library/es6/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/library/es6/promise' {
        declare var Promise: typeof core$Promise;
	declare export default typeof Promise

    }
declare module 'core-js/library/es6/reflect' {
        declare var Reflect: typeof core$Reflect;
	declare export default typeof Reflect

    }
declare module 'core-js/library/es6/regexp' {
        declare var RegExp: typeof core$RegExp;
	declare export default typeof RegExp

    }
declare module 'core-js/library/es6/set' {
        declare var Set: typeof core$Set;
	declare export default typeof Set

    }
declare module 'core-js/library/es6/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/library/es6/symbol' {
        declare var Symbol: typeof core$Symbol;
	declare export default typeof Symbol

    }
declare module 'core-js/library/es6/weak-map' {
        declare var WeakMap: typeof core$WeakMap;
	declare export default typeof WeakMap

    }
declare module 'core-js/library/es6/weak-set' {
        declare var WeakSet: typeof core$WeakSet;
	declare export default typeof WeakSet

    }
declare module 'core-js/library/es7' {
        declare export default typeof core

    }
declare module 'core-js/library/es7/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/library/es7/map' {
        declare var Map: typeof core$Map;
	declare export default typeof Map

    }
declare module 'core-js/library/es7/object' {
        declare var Object: typeof core$Object;
	declare export default typeof Object

    }
declare module 'core-js/library/es7/regexp' {
        declare var RegExp: typeof core$RegExp;
	declare export default typeof RegExp

    }
declare module 'core-js/library/es7/set' {
        declare var Set: typeof core$Set;
	declare export default typeof Set

    }
declare module 'core-js/library/es7/string' {
        declare var String: typeof core$String;
	declare export default typeof String

    }
declare module 'core-js/library/js' {
        declare export default typeof core

    }
declare module 'core-js/library/js/array' {
        declare var Array: typeof core$Array;
	declare export default typeof Array

    }
declare module 'core-js/library/web' {
        declare export default typeof core

    }
declare module 'core-js/library/web/dom' {
        declare export default typeof core

    }
declare module 'core-js/library/web/immediate' {
        declare export default typeof core

    }
declare module 'core-js/library/web/timers' {
        declare export default typeof core

    }
