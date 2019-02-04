declare module 'connect-mongodb-session' {
        import typeof * as express from 'express';

	import type {
          MongoClient,MongoClientOptions
        } from 'mongodb';

	declare function connect(
fn: (options?: session.SessionOptions) => express.RequestHandler): connectMongodbSession$connectMongodbSession$MongoDBStore

	declare export type connectMongodbSession$MongoDBStore = {
client: MongoClient,
new (
connection?: connectMongodbSession$ConnectionInfo,
callback?: (error: Error) => void): connectMongodbSession$MongoDBStore
} & session.Store


declare export interface connectMongodbSession$ConnectionInfo {
idField?: string,
collection: string,
connectionOptions?: MongoClientOptions,
databaseName?: string,
expires?: number,
uri: string
} 
	declare module.exports: typeof connect

    }
