declare interface LazyJS$LazyStatic {
(value: string): LazyJS$StringLikeSequence,
(value: T[]): LazyJS$ArrayLikeSequence<T>,
(value: any[]): LazyJS$ArrayLikeSequence<any>,
(value: any): LazyJS$ObjectLikeSequence<T>,
(value: any): LazyJS$ObjectLikeSequence<any>,
strict(): LazyJS$LazyStatic,
generate<T>(
generatorFn: LazyJS$GeneratorCallback<T>,
length?: number): LazyJS$GeneratedSequence<T>,
range(to: number): LazyJS$GeneratedSequence<number>,
range(from: number, to: number, step?: number): LazyJS$GeneratedSequence<number>,
repeat<T>(value: T, count?: number): LazyJS$GeneratedSequence<T>,
on<T>(eventType: string): LazyJS$Sequence<T>,
readFile(path: string): LazyJS$StringLikeSequence,
makeHttpRequest(path: string): LazyJS$StringLikeSequence
} 

declare interface LazyJS$ArrayLike<T> {
length: number,
[index: number]: T
} 

declare interface LazyJS$Callback {
(): void
} 

declare interface LazyJS$ErrorCallback {
(error: any): void
} 

declare interface LazyJS$ValueCallback<T> {
(value: T): void
} 

declare interface LazyJS$GetKeyCallback<T> {
(value: T): string
} 

declare interface LazyJS$TestCallback<T, U> {
(value: T, index: U): boolean
} 

declare interface LazyJS$MapCallback<T, U> {
(value: T): U
} 

declare interface LazyJS$MapStringCallback {
(value: string): string
} 

declare interface LazyJS$NumberCallback<T> {
(value: T): number
} 

declare interface LazyJS$MemoCallback<T, U> {
(memo: U, value: T): U
} 

declare interface LazyJS$GeneratorCallback<T> {
(index: number): T
} 

declare interface LazyJS$CompareCallback {
(x: any, y: any): number
} 

declare interface LazyJS$Iterator<T> {
new (sequence: LazyJS$Sequence<T>): LazyJS$Iterator<T>,
current(): T,
moveNext(): boolean
} 

declare type LazyJS$GeneratedSequence<T> = {
new (
generatorFn: LazyJS$GeneratorCallback<T>,
length: number): LazyJS$GeneratedSequence<T>,
length(): number
} & LazyJS$Sequence<T>


declare type LazyJS$AsyncSequence<T> = {
each(callback: LazyJS$ValueCallback<T>): LazyJS$AsyncHandle<T>
} & LazyJS$SequenceBase<T>


declare interface LazyJS$AsyncHandle<T> {
cancel(): void,
onComplete(callback: LazyJS$Callback): void,
onError(callback: LazyJS$ErrorCallback): void
} 


      declare var npm$namespace$Sequence: {
        define: typeof Sequence$define,
        
      }
declare function Sequence$define(methodName: string[], overrides: any): Function


declare type LazyJS$Sequence<T> = {
each(eachFn: LazyJS$ValueCallback<T>): LazyJS$Sequence<T>
} & LazyJS$SequenceBase<T>


declare type LazyJS$SequenceBase<T> = {
first(): any,
first(count: number): LazyJS$Sequence<T>,
indexOf(value: any, startIndex?: number): number,
last(): any,
last(count: number): LazyJS$Sequence<T>,
lastIndexOf(value: any): number,
reverse(): LazyJS$Sequence<T>
} & LazyJS$SequenceBaser<T>


declare interface LazyJS$SequenceBaser<T> {
async(interval: number): LazyJS$AsyncSequence<T>,
chunk(size: number): LazyJS$Sequence<T>,
compact(): LazyJS$Sequence<T>,
concat(var_args: T[]): LazyJS$Sequence<T>,
consecutive(length: number): LazyJS$Sequence<T>,
contains(value: T): boolean,
countBy(keyFn: LazyJS$GetKeyCallback<T>): LazyJS$ObjectLikeSequence<T>,
countBy(propertyName: string): LazyJS$ObjectLikeSequence<T>,
dropWhile(predicateFn: LazyJS$TestCallback<T, string | number>): LazyJS$Sequence<T>,
every(predicateFn: LazyJS$TestCallback<T, string | number>): boolean,
filter(predicateFn: LazyJS$TestCallback<T, string | number>): LazyJS$Sequence<T>,
find(predicateFn: LazyJS$TestCallback<T, string | number>): T,
findWhere(properties: any): T,
flatten(): LazyJS$Sequence<T>,
groupBy(keyFn: LazyJS$GetKeyCallback<T>): LazyJS$ObjectLikeSequence<T>,
initial(count?: number): LazyJS$Sequence<T>,
intersection(var_args: T[]): LazyJS$Sequence<T>,
invoke(methodName: string): LazyJS$Sequence<T>,
isEmpty(): boolean,
join(delimiter?: string): string,
map<U>(mapFn: LazyJS$MapCallback<T, U>): LazyJS$Sequence<U>,
max(valueFn?: LazyJS$NumberCallback<T>): T,
min(valueFn?: LazyJS$NumberCallback<T>): T,
none(valueFn?: LazyJS$TestCallback<T, string | number>): boolean,
pluck(propertyName: string): LazyJS$Sequence<any>,
reduce<U>(aggregatorFn: LazyJS$MemoCallback<T, U>, memo?: U): U,
reduceRight<U>(aggregatorFn: LazyJS$MemoCallback<T, U>, memo: U): U,
reject(predicateFn: LazyJS$TestCallback<T, string | number>): LazyJS$Sequence<T>,
rest(count?: number): LazyJS$Sequence<T>,
shuffle(): LazyJS$Sequence<T>,
size(): number,
some(predicateFn?: LazyJS$TestCallback<T, string | number>): boolean,
sort(sortFn?: LazyJS$CompareCallback, descending?: boolean): LazyJS$Sequence<T>,
sortBy(sortFn: LazyJS$NumberCallback<T>, descending?: boolean): LazyJS$Sequence<T>,
sortBy(sortFn: string, descending?: boolean): LazyJS$Sequence<T>,
sortedIndex(value: T): number,
sum(valueFn?: LazyJS$NumberCallback<T>): T,
takeWhile(predicateFn: LazyJS$TestCallback<T, string | number>): LazyJS$Sequence<T>,
toArray(): T[],
toObject(): any,
union(var_args: T[]): LazyJS$Sequence<T>,
uniq(): LazyJS$Sequence<T>,
where(properties: any): LazyJS$Sequence<T>,
without(...var_args: T[]): LazyJS$Sequence<T>,
without(var_args: T[]): LazyJS$Sequence<T>,
zip(var_args: T[]): LazyJS$Sequence<T>
} 


      declare var npm$namespace$ArrayLikeSequence: {
        define: typeof ArrayLikeSequence$define,
        
      }
declare function ArrayLikeSequence$define(methodName: string[], overrides: any): Function


declare type LazyJS$ArrayLikeSequence<T> = {
concat(var_args: T[]): LazyJS$ArrayLikeSequence<T>,
first(): T,
first(count?: number): LazyJS$ArrayLikeSequence<T>,
get(index: number): T,
length(): number,
map<U>(mapFn: LazyJS$MapCallback<T, U>): LazyJS$ArrayLikeSequence<U>,
pop(): LazyJS$ArrayLikeSequence<T>,
push(value: T): LazyJS$ArrayLikeSequence<T>,
rest(count?: number): LazyJS$ArrayLikeSequence<T>,
reverse(): LazyJS$ArrayLikeSequence<T>,
shift(): LazyJS$ArrayLikeSequence<T>,
slice(begin: number, end?: number): LazyJS$ArrayLikeSequence<T>,
unshift(value: T): LazyJS$ArrayLikeSequence<T>,
dropWhile(predicateFn: LazyJS$TestCallback<T, number>): LazyJS$Sequence<T>,
every(predicateFn: LazyJS$TestCallback<T, number>): boolean,
filter(predicateFn: LazyJS$TestCallback<T, number>): LazyJS$Sequence<T>,
find(predicateFn: LazyJS$TestCallback<T, number>): T,
none(valueFn?: LazyJS$TestCallback<T, number>): boolean,
reject(predicateFn: LazyJS$TestCallback<T, number>): LazyJS$Sequence<T>,
some(predicateFn?: LazyJS$TestCallback<T, number>): boolean,
takeWhile(predicateFn: LazyJS$TestCallback<T, number>): LazyJS$Sequence<T>
} & LazyJS$Sequence<T>



      declare var npm$namespace$ObjectLikeSequence: {
        define: typeof ObjectLikeSequence$define,
        
      }
declare function ObjectLikeSequence$define(methodName: string[], overrides: any): Function


declare type LazyJS$ObjectLikeSequence<T> = {
assign(other: any): LazyJS$ObjectLikeSequence<T>,
defaults(defaults: any): LazyJS$ObjectLikeSequence<T>,
functions(): LazyJS$Sequence<T>,
get(property: string): any,
invert(): LazyJS$ObjectLikeSequence<T>,
keys(): LazyJS$Sequence<string>,
merge(
others: any | LazyJS$ObjectLikeSequence<T>,
mergeFn?: Function): LazyJS$ObjectLikeSequence<T>,
omit(properties: string[]): LazyJS$ObjectLikeSequence<T>,
pairs(): LazyJS$Sequence<T>,
pick(properties: string[]): LazyJS$ObjectLikeSequence<T>,
toArray(): T[],
toObject(): any,
values(): LazyJS$Sequence<T>,
watch(
propertyNames: string | string[]): LazyJS$Sequence<{
property: string,
value: any
}>,
dropWhile(predicateFn: LazyJS$TestCallback<T, string>): LazyJS$Sequence<T>,
every(predicateFn: LazyJS$TestCallback<T, string>): boolean,
filter(predicateFn: LazyJS$TestCallback<T, string>): LazyJS$Sequence<T>,
find(predicateFn: LazyJS$TestCallback<T, string>): T,
none(valueFn?: LazyJS$TestCallback<T, string>): boolean,
reject(predicateFn: LazyJS$TestCallback<T, string>): LazyJS$Sequence<T>,
some(predicateFn?: LazyJS$TestCallback<T, string>): boolean,
takeWhile(predicateFn: LazyJS$TestCallback<T, string>): LazyJS$Sequence<T>
} & LazyJS$Sequence<T>



      declare var npm$namespace$StringLikeSequence: {
        define: typeof StringLikeSequence$define,
        
      }
declare function StringLikeSequence$define(methodName: string[], overrides: any): Function


declare type LazyJS$StringLikeSequence = {
charAt(index: number): string,
charCodeAt(index: number): number,
contains(value: string): boolean,
endsWith(suffix: string): boolean,
first(): string,
first(count: number): LazyJS$StringLikeSequence,
indexOf(substring: string, startIndex?: number): number,
last(): string,
last(count: number): LazyJS$StringLikeSequence,
lastIndexOf(substring: string, startIndex?: number): number,
mapString(mapFn: LazyJS$MapStringCallback): LazyJS$StringLikeSequence,
match(pattern: RegExp): LazyJS$StringLikeSequence,
reverse(): LazyJS$StringLikeSequence,
split(delimiter: RegExp): LazyJS$StringLikeSequence,
split(delimiter: string): LazyJS$StringLikeSequence,
startsWith(prefix: string): boolean,
substring(start: number, stop?: number): LazyJS$StringLikeSequence,
toLowerCase(): LazyJS$StringLikeSequence,
toUpperCase(): LazyJS$StringLikeSequence,
dropWhile(predicateFn: LazyJS$TestCallback<string, number>): LazyJS$Sequence<string>,
every(predicateFn: LazyJS$TestCallback<string, number>): boolean,
filter(predicateFn: LazyJS$TestCallback<string, number>): LazyJS$Sequence<string>,
find(predicateFn: LazyJS$TestCallback<string, number>): string,
none(valueFn?: LazyJS$TestCallback<string, number>): boolean,
reject(predicateFn: LazyJS$TestCallback<string, number>): LazyJS$Sequence<string>,
some(predicateFn?: LazyJS$TestCallback<string, number>): boolean,
takeWhile(predicateFn: LazyJS$TestCallback<string, number>): LazyJS$Sequence<string>
} & LazyJS$SequenceBaser<string>
declare var Lazy: LazyJS$LazyJS$LazyStatic;declare module 'lazy.js' {
        declare module.exports: typeof Lazy

    }
