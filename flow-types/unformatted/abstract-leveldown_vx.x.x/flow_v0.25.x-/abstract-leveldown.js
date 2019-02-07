declare module 'abstract-leveldown' {
        declare export interface AbstractOptions {
[k: string]: any
} 
	declare export type ErrorCallback = (err: Error | void) => void;
	declare export type ErrorValueCallback<V> = (err: Error | void, value: V) => void;
	declare export type ErrorKeyValueCallback<K, V> = (err: Error | void, key: K, value: V) => void;
	declare export type AbstractOpenOptions = {
createIfMissing?: boolean,
errorIfExists?: boolean
} & AbstractOptions

	declare export type AbstractGetOptions = {
asBuffer?: boolean
} & AbstractOptions

	declare export type AbstractLevelDOWN<K= any, V= any> = {
open(cb: ErrorCallback): void,
open(options: AbstractOpenOptions, cb: ErrorCallback): void,
close(cb: ErrorCallback): void,
get(key: K, cb: ErrorValueCallback<V>): void,
get(key: K, options: AbstractGetOptions, cb: ErrorValueCallback<V>): void,
put(key: K, value: V, cb: ErrorCallback): void,
put(key: K, value: V, options: AbstractOptions, cb: ErrorCallback): void,
del(key: K, cb: ErrorCallback): void,
del(key: K, options: AbstractOptions, cb: ErrorCallback): void,
batch(): AbstractChainedBatch<K, V>,
batch(
array: $ReadOnlyArray<AbstractBatch<K, V>>,
cb: ErrorCallback): AbstractChainedBatch<K, V>,
batch(
array: $ReadOnlyArray<AbstractBatch<K, V>>,
options: AbstractOptions,
cb: ErrorCallback): AbstractChainedBatch<K, V>,
iterator(options?: AbstractIteratorOptions<K>): AbstractIterator<K, V>
} & AbstractOptions

	declare export interface AbstractLevelDOWNConstructor {
new <K= any, V= any>(location: string): AbstractLevelDOWN<K, V>,
<K= any, V= any>(location: string): AbstractLevelDOWN<K, V>
} 
	declare export type AbstractIteratorOptions<K= any> = {
gt?: K,
gte?: K,
lt?: K,
lte?: K,
reverse?: boolean,
limit?: number,
keys?: boolean,
values?: boolean,
keyAsBuffer?: boolean,
valueAsBuffer?: boolean
} & AbstractOptions

	declare export type AbstractBatch<K= any, V= any> = PutBatch<K, V> | DelBatch<K, V>;
	declare export interface PutBatch<K= any, V= any> {
+type: "put",
+key: K,
+value: V
} 
	declare export interface DelBatch<K= any, V= any> {
+type: "del",
+key: K
} 
	declare export type AbstractChainedBatch<K= any, V= any> = {
put: (key: K, value: V) => this,
del: (key: K) => this,
clear: () => this,
write(cb: ErrorCallback): any,
write(options: any, cb: ErrorCallback): any
} & AbstractOptions

	declare export interface AbstractChainedBatchConstructor {
new <K= any, V= any>(db: any): AbstractChainedBatch<K, V>,
<K= any, V= any>(db: any): AbstractChainedBatch<K, V>
} 
	declare export type AbstractIterator<K, V> = {
db: AbstractLevelDOWN<K, V>,
next(cb: ErrorKeyValueCallback<K, V>): this,
end(cb: ErrorCallback): void
} & AbstractOptions

	declare export interface AbstractIteratorConstructor {
new <K= any, V= any>(db: any): AbstractIterator<K, V>,
<K= any, V= any>(db: any): AbstractIterator<K, V>
} 
	declare export var AbstractLevelDOWN: AbstractLevelDOWNConstructor;
	declare export var AbstractIterator: AbstractIteratorConstructor;
	declare export var AbstractChainedBatch: AbstractChainedBatchConstructor;
    }
