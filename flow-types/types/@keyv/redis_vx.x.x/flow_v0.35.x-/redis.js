declare module '@keyv/redis' {
        import type {
          Store
        } from 'keyv';

	import type {
          ClientOpts
        } from 'redis';

	import type {
          EventEmitter
        } from 'events';

	declare module.exports: typeof KeyvRedis

	declare class KeyvRedis mixins EventEmitter, Store<string | void> {
ttlSupport: true;
namespace: string;
constructor(options?: KeyvRedis$KeyvRedis$Options): this;
constructor(uri: string, options?: KeyvRedis$KeyvRedis$Options): this;
get(key: string): Promise<string | void>;
set(key: string, value: string | void, ttl?: number): Promise<number>;
delete(key: string): Promise<boolean>;
clear(): Promise<void>
}
	declare type KeyvRedis$Options = {
uri?: string
} & ClientOpts

    }
