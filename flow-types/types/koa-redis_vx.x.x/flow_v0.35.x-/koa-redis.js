declare module 'koa-redis' {
        import type {
          ClientOpts
        } from 'redis';

	import type {
          SessionStore
        } from 'koa-generic-session';

	declare type redisStore$RedisOptions = {
duplicate?: boolean,
client?: any
} & ClientOpts

	declare function redisStore(options: redisStore$redisStore$RedisOptions): SessionStore

	declare module.exports: typeof redisStore

    }
