declare module '@keyv/postgres' {
        import type {
          Store
        } from 'keyv';

	import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof KeyvPostgres

	declare class KeyvPostgres mixins EventEmitter, Store<string | void> {
ttlSupport: false;
namespace: string;
constructor(options?: KeyvPostgres$KeyvPostgres$Options): this;
get(key: string): Promise<string | void>;
set(key: string, value: string | void): Promise<any>;
delete(key: string): Promise<boolean>;
clear(): Promise<void>
}
	declare interface KeyvPostgres$Options {
uri?: string,
table?: string,
keySize?: number
} 
    }
