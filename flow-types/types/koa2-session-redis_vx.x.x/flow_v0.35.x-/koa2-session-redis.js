declare module 'koa2-session-redis' {
        import typeof * as Redis from 'redis';

	import typeof * as session from 'koa-session';

	declare module.exports: typeof RedisStore

	declare class RedisStore mixins session.stores {
constructor(config?: Redis.ClientOpts): this;

/**
 * get session object by key
 */
get(key: string): any;

/**
 * set session object for key, with a maxAge (in ms)
 */
set(
key: string,
sess: $Shape<session.Session> & {
_expire?: number,
_maxAge?: number
},
maxAge: $ElementType<session.opts, "maxAge">): any;

/**
 * destroy session for key
 */
destroy(key: string): any;

/**
 * sends the quit command to the redis server and ends cleanly right after all running commands were properly handled
 */
quit(): void
}
    }
