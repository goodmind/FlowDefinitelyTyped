declare module 'fast-list' {
        declare module.exports: typeof FastList

	declare var FastList: FastListFactory;
	declare interface FastListFactory {
(): FastList$FastList$List<T>,
new <T>(): FastList$FastList$List<T>
} 
	declare interface FastList$List<T> {
+length: number,
push(item: T): void,
pop(): T | void,
unshift(item: T): void,
shift(): T | void,
drop(): void,
item(index: number): T | void,
map<U, V>(
callbackfn: (value: T, index: number, list: this) => U,
thisArg?: V): FastList$List<U>,
reduce<U, V>(
callbackfn: (acc: U, value: T, index: number, list: this) => U,
initialValue?: U,
thisArg?: V): U,
forEach<U>(
callbackfn: (value: T, index: number, list: this) => void,
thisArg?: U): void,
filter<U>(
callbackfn: (value: T, index: number, list: this) => boolean,
thisArg?: U): FastList$List<T>,
slice(start?: number, end?: number): T[]
} 
    }
