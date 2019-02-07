declare module 'multer-gridfs-storage' {
        import type {
          EventEmitter
        } from 'events';

	import type {
          Express
        } from 'express';

	import typeof * as Multer from 'multer';

	import type {
          Db,MongoClient
        } from 'mongodb';

	import type {
          Connection,Mongoose
        } from 'mongoose';

	declare class Cache  {
initialize(opts: {[key: string]: any}): {[key: string]: any};
findUri(cacheName: string, url: string): string;
has(cacheIndex: {[key: string]: any}): boolean;
get(cacheIndex: {[key: string]: any}): {[key: string]: any};
set(cacheIndex: {[key: string]: any}, value: {[key: string]: any}): void;
isPending(cacheIndex: {[key: string]: any}): boolean;
isOpening(cacheIndex: {[key: string]: any}): boolean;
resolve(cacheIndex: {[key: string]: any}, db: Db, client: MongoClient): void;
reject(cacheIndex: {[key: string]: any}, err: Error): void;
waitFor(cacheIndex: {[key: string]: any}): Promise<{[key: string]: any}>;
connections(): number;
remove(cacheIndex: {[key: string]: any}): void;
clear(): void
}
	declare interface MulterGfsOptions {
file?: (req: Express$Request, file: Express$Multer.Multer$File) => any
} 
	declare class MulterGridfsStorage mixins EventEmitter, Multer$StorageEngine {
db: Db;
client: MongoClient;
connected: boolean;
connecting: boolean;
configuration: MulterGridfsStorage$MulterGridfsStorage$UrlStorageOptions | MulterGridfsStorage$MulterGridfsStorage$DbStorageOptions;
error: Error;
caching: boolean;
cacheName: string;
cacheIndex: {[key: string]: any};
constructor(configuration: MulterGridfsStorage$MulterGridfsStorage$UrlStorageOptions | MulterGridfsStorage$MulterGridfsStorage$DbStorageOptions): this;
_handleFile(
req: Express$Request,
file: Express$Multer.Multer$File,
callback: (error?: any, info?: Express$Multer.Multer$File) => void): void;
_removeFile(
req: Express$Request,
file: Express$Multer.Multer$File,
callback: (error: Error) => void): void;
static cache: Cache
}
	declare type MulterGridfsStorage$UrlStorageOptions = {
url: string,
options?: any,
cache?: boolean | string
} & MulterGfsOptions


declare type MulterGridfsStorage$DbStorageOptions = {
db: Mongoose
| Connection
| Db
| MongoClient
| Promise<Mongoose | Connection | Db | MongoClient>
} & MulterGfsOptions


declare interface MulterGridfsStorage$FileConfig {
filename?: string,
id?: any,
metadata?: {[key: string]: any},
chunkSize?: number,
bucketName?: string,
contentType?: string,
aliases?: string[],
disableMD5?: boolean
} 
	declare module 'global' {
        declare interface Multer$File {
id: any,
filename: string,
metadata: any,
contentType: string,
chunkSize: number,
bucketName: string,
uploadDate: Date,
md5: string,
size: number
} 
    }

	declare module.exports: typeof MulterGridfsStorage

    }
