declare module 'encoding-down' {
        import type {
          AbstractLevelDOWN,AbstractIteratorOptions,AbstractIterator,AbstractOpenOptions,AbstractGetOptions,ErrorCallback,ErrorValueCallback,AbstractChainedBatch,AbstractBatch,AbstractOptions
        } from 'abstract-leveldown';

	import type {
          CodecOptions,CodecEncoder
        } from 'level-codec';

	declare type EncodingDown<K, V> = {
get(key: K, cb: ErrorValueCallback<V>): void,
get(
key: K,
options: EncodingDown$EncodingDown$GetOptions,
cb: ErrorValueCallback<V>): void,
put(key: K, value: V, cb: ErrorCallback): void,
put(
key: K,
value: V,
options: EncodingDown$EncodingDown$PutOptions,
cb: ErrorCallback): void,
del(key: K, cb: ErrorCallback): void,
del(key: K, options: EncodingDown$EncodingDown$DelOptions, cb: ErrorCallback): void,
batch(): EncodingDown$EncodingDown$ChainedBatch,
batch(
array: AbstractBatch[],
cb: ErrorCallback): EncodingDown$EncodingDown$ChainedBatch,
batch(
array: AbstractBatch[],
options: EncodingDown$EncodingDown$BatchOptions,
cb: ErrorCallback): EncodingDown$EncodingDown$ChainedBatch,
iterator(
options?: EncodingDown$EncodingDown$IteratorOptions): AbstractIterator<any, any>
} & AbstractLevelDOWN<K, V>

	declare type EncodingDown$GetOptions = {} & AbstractGetOptions & CodecOptions


declare type EncodingDown$PutOptions = {} & AbstractOptions & CodecOptions


declare type EncodingDown$DelOptions = {} & AbstractOptions & CodecOptions


declare type EncodingDown$BatchOptions = {} & AbstractOptions & CodecOptions


declare type EncodingDown$IteratorOptions = {} & AbstractIteratorOptions & CodecOptions


declare type EncodingDown$ChainedBatch<K, V> = {
write(cb: any): any,
write(options: CodecOptions & AbstractOptions, cb: any): any
} & AbstractChainedBatch<K, V>


declare interface EncodingDown$Constructor {
(db: AbstractLevelDOWN, options?: CodecOptions): EncodingDown<K, V>,
new <K, V>(db: AbstractLevelDOWN, options?: CodecOptions): EncodingDown<K, V>
} 
	declare var EncodingDown: EncodingDown$EncodingDown$Constructor;
	declare export default typeof EncodingDown

    }
