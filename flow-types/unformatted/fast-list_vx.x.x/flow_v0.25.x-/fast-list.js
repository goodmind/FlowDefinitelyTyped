declare module 'fast-list' {
        declare module.exports: typeof FastList

	declare var FastList: FastListFactory;
	declare interface FastListFactory {
<T>(): FastList$FastList$List<T>,
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
map<U= T, V= this>(
callbackfn: (value: T, index: number, list: this) => U,
thisArg?: V): FastList$List<U>,
reduce<U= T, V= this>(
callbackfn: (acc: U, value: T, index: number, list: this) => U,
initialValue?: U,
thisArg?: V): U,
forEach<U= this>(
callbackfn: (value: T, index: number, list: this) => void,
thisArg?: U): void,
filter<U= this>(
callbackfn: (value: T, index: number, list: this) => boolean,
thisArg?: U): FastList$List<T>,
slice(start?: number, end?: number): T[]
} 
    }
