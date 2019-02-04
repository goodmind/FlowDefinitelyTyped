declare module 'connect-mongo' {
        import typeof * as express from 'express';

	import typeof * as mongoose from 'mongoose';

	import typeof * as mongodb from 'mongodb';

	import typeof * as session from 'express-session';

	declare function connectMongo(
connect: (options?: session.SessionOptions) => express.RequestHandler): connectMongo$connectMongo$MongoStoreFactory

	declare export interface connectMongo$DefaultOptions {

/**
 * The hostname of the database you are connecting to.
 * (Default: '127.0.0.1')
 */
host?: string,

/**
 * The port number to connect to.
 * (Default: 27017)
 */
port?: string,

/**
 * (Default: false)
 */
autoReconnect?: boolean,

/**
 * (Default: true)
 */
ssl?: boolean,

/**
 * (Default: 1)
 */
w?: number,

/**
 * The colletion of the database you are connecting to.
 * (Default: sessions)
 */
collection?: string,

/**
 * Serialize sessions using JSON.stringify and deserialize them with JSON.parse.
 * (Default: true)
 */
stringify?: boolean,

/**
 * Default: false
 */
hash?: boolean,

/**
 * Default: 14 days (60 * 60 * 24 * 14)
 */
ttl?: number,

/**
 * Automatically remove expired sessions.
 * (Default: 'native')
 */
autoRemove?: string,

/**
 * (Default: 10)
 */
autoRemoveInterval?: number,

/**
 * don't save session if unmodified
 */
touchAfter?: number
} 

declare export type connectMongo$MongoUrlOptions = {
url: string,
mongoOptions?: mongoose.ConnectionOptions
} & connectMongo$DefaultOptions


declare export type connectMongo$MogooseConnectionOptions = {
mongooseConnection: mongoose.Connection
} & connectMongo$DefaultOptions


declare export type connectMongo$NativeMongoOptions = {
db: mongodb.Db
} & connectMongo$DefaultOptions


declare export type connectMongo$NativeMongoPromiseOptions = {
dbPromise: Promise<mongodb.Db>
} & connectMongo$DefaultOptions


declare export interface connectMongo$MongoStoreFactory {
new (
options: connectMongo$MongoUrlOptions | connectMongo$MogooseConnectionOptions | connectMongo$NativeMongoOptions | connectMongo$NativeMongoPromiseOptions): connectMongo$MongoStore
} 

declare export class connectMongo$MongoStore mixins session.Store {
get: (
sid: string,
callback: (err: any, session: Express.SessionData | null) => void) => void;
set: (
sid: string,
session: Express.SessionData,
callback?: (err: any) => void) => void;
destroy: (sid: string, callback?: (err: any) => void) => void;
length: (callback: (err: any, length: number) => void) => void;
clear: (callback?: (err?: any) => void) => void;
touch: (
sid: string,
session: Express.SessionData,
callback?: (err: any) => void) => void;
close: () => void
}
	declare module.exports: typeof connectMongo

    }
