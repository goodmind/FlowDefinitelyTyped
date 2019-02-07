declare module 'levelup' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          AbstractLevelDOWN,AbstractIteratorOptions,AbstractBatch,ErrorCallback,AbstractOptions,ErrorValueCallback,AbstractGetOptions
        } from 'abstract-leveldown';

	declare type LevelUpPut<K, V, O> = ((key: K, value: V, callback: ErrorCallback) => void) & ((key: K, value: V, options: O, callback: ErrorCallback) => void) & ((key: K, value: V, options?: O) => Promise<void>);
	declare type LevelUpGet<K, V, O> = ((key: K, callback: ErrorValueCallback<V>) => void) & ((key: K, options: O, callback: ErrorValueCallback<V>) => void) & ((key: K, options?: O) => Promise<V>);
	declare type LevelUpDel<K, O> = ((key: K, callback: ErrorCallback) => void) & ((key: K, options: O, callback: ErrorCallback) => void) & ((key: K, options?: O) => Promise<void>);
	declare type LevelUpBatch<K, O> = ((key: K, callback: ErrorCallback) => void) & ((key: K, options: O, callback: ErrorCallback) => void) & ((key: K, options?: O) => Promise<void>);
	declare type InferDBPut<DB> = "There was Conditional Type, use $Call utility type";
	declare type InferDBGet<DB> = "There was Conditional Type, use $Call utility type";
	declare type InferDBDel<DB> = "There was Conditional Type, use $Call utility type";
	declare export type LevelUp<DB= AbstractLevelDOWN> = {
open(): Promise<void>,
open(callback?: ErrorCallback): void,
close(): Promise<void>,
close(callback?: ErrorCallback): void,
put: InferDBPut<DB>,
get: InferDBGet<DB>,
del: InferDBDel<DB>,
batch(array: AbstractBatch[], options?: any): Promise<void>,
batch(array: AbstractBatch[], options: any, callback: (err?: any) => any): void,
batch(array: AbstractBatch[], callback: (err?: any) => any): void,
batch(): LevelUpChain,
isOpen(): boolean,
isClosed(): boolean,
createReadStream(options?: AbstractIteratorOptions): NodeJS.ReadableStream,
createKeyStream(options?: AbstractIteratorOptions): NodeJS.ReadableStream,
createValueStream(options?: AbstractIteratorOptions): NodeJS.ReadableStream,
on(event: "put", cb: (key: any, value: any) => void): this,
on(event: "del", cb: (key: any) => void): this,
on(event: "batch", cb: (ary: any[]) => void): this,
on(
event: "open"
| "ready"
| "closed"
| "opening"
| "closing",
cb: () => void): this
} & EventEmitter

	declare interface LevelUpConstructor {
<DB: AbstractLevelDOWN= AbstractLevelDOWN>(db: DB, options: any, cb?: ErrorCallback): LevelUp<DB>,
<DB: AbstractLevelDOWN= AbstractLevelDOWN>(db: DB, cb?: ErrorCallback): LevelUp<DB>,
new <DB: AbstractLevelDOWN= AbstractLevelDOWN>(
db: DB,
options: any,
cb?: ErrorCallback): LevelUp<DB>,
new <DB: AbstractLevelDOWN= AbstractLevelDOWN>(
db: DB,
cb?: ErrorCallback): LevelUp<DB>,
errors: any
} 
	declare export interface LevelUpChain<K= any, V= any> {
+length: number,
put(key: K, value: V): this,
del(key: K): this,
clear(): this,
write(callback: ErrorCallback): this,
write(): Promise<this>
} 
	declare export var errors: any;
	declare var LevelUp: LevelUpConstructor;
	declare export default typeof LevelUp

    }
