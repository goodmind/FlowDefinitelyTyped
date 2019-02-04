declare module '@keyv/sqlite' {
        import type {
          Store
        } from 'keyv';

	import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof KeyvSqlite

	declare class KeyvSqlite mixins EventEmitter, Store<string | void> {
ttlSupport: false;
namespace: string;
constructor(options?: KeyvSqlite$KeyvSqlite$Options): this;
get(key: string): Promise<string | void>;
set(key: string, value: string | void): Promise<any>;
delete(key: string): Promise<boolean>;
clear(): Promise<void>
}
	declare interface KeyvSqlite$Options {
uri?: string,
busyTimeout?: number,
table?: string,
keySize?: number
} 
    }
