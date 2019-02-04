declare module 'rocksdb' {
        import type {
          AbstractLevelDOWN,AbstractIteratorOptions,AbstractIterator,AbstractOpenOptions,AbstractGetOptions,ErrorCallback,ErrorValueCallback,AbstractChainedBatch,AbstractBatch,AbstractOptions
        } from 'abstract-leveldown';

	declare type RocksDB = {
open(cb: ErrorCallback): void,
open(options: RocksDB$RocksDB$OpenOptions, cb: ErrorCallback): void,
get(
key: RocksDB$RocksDB$Bytes,
cb: ErrorValueCallback<RocksDB$RocksDB$Bytes>): void,
get(
key: RocksDB$RocksDB$Bytes,
options: RocksDB$RocksDB$GetOptions,
cb: ErrorValueCallback<RocksDB$RocksDB$Bytes>): void,
put(
key: RocksDB$RocksDB$Bytes,
value: RocksDB$RocksDB$Bytes,
cb: ErrorCallback): void,
put(
key: RocksDB$RocksDB$Bytes,
value: RocksDB$RocksDB$Bytes,
options: RocksDB$RocksDB$PutOptions,
cb: ErrorCallback): void,
del(key: RocksDB$RocksDB$Bytes, cb: ErrorCallback): void,
del(
key: RocksDB$RocksDB$Bytes,
options: RocksDB$RocksDB$DelOptions,
cb: ErrorCallback): void,
batch(): AbstractChainedBatch<RocksDB$RocksDB$Bytes, RocksDB$RocksDB$Bytes>,
batch(
array: AbstractBatch[],
cb: ErrorCallback): AbstractChainedBatch<RocksDB$RocksDB$Bytes, RocksDB$RocksDB$Bytes>,
batch(
array: AbstractBatch[],
options: RocksDB$RocksDB$BatchOptions,
cb: ErrorCallback): AbstractChainedBatch<RocksDB$RocksDB$Bytes, RocksDB$RocksDB$Bytes>,
approximateSize(
start: RocksDB$RocksDB$Bytes,
end: RocksDB$RocksDB$Bytes,
cb: RocksDB$RocksDB$ErrorSizeCallback): void,
compactRange(
start: RocksDB$RocksDB$Bytes,
end: RocksDB$RocksDB$Bytes,
cb: ErrorCallback): void,
getProperty(property: string): string,
destroy(location: string, cb: ErrorCallback): void,
repair(location: string, cb: ErrorCallback): void,
iterator(options?: RocksDB$RocksDB$IteratorOptions): RocksDB$RocksDB$Iterator
} & AbstractLevelDOWN<RocksDB$RocksDB$Bytes, RocksDB$RocksDB$Bytes>

	declare type RocksDB$Bytes = string | Buffer;

declare type RocksDB$ErrorSizeCallback = (err: Error | void, size: number) => void;

declare type RocksDB$OpenOptions = {} & AbstractOpenOptions


declare type RocksDB$GetOptions = {
fillCache?: boolean
} & AbstractGetOptions


declare type RocksDB$PutOptions = {
sync?: boolean
} & AbstractOptions


declare type RocksDB$DelOptions = {
sync?: boolean
} & AbstractOptions


declare type RocksDB$BatchOptions = {
sync?: boolean
} & AbstractOptions


declare type RocksDB$IteratorOptions = {
fillCache?: boolean
} & AbstractIteratorOptions<RocksDB$Bytes>


declare type RocksDB$Iterator = {
seek(key: RocksDB$Bytes): void,
binding: any,
cache: any,
finished: any,
fastFuture: any
} & AbstractIterator<RocksDB$Bytes, RocksDB$Bytes>


declare interface RocksDB$Constructor {
new (location: string): RocksDB,
(location: string): RocksDB
} 
	declare var RocksDB: RocksDB$RocksDB$Constructor;
	declare export default typeof RocksDB

    }
