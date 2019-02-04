declare module 'express-redis-cache' {
        declare module 'express-serve-static-core' {
        declare interface Response {
express_redis_cache_name?: string,
use_express_redis_cache?: boolean
} 
    }

	declare function expressRedisCache(
options?: expressRedisCache$expressRedisCache$Options): expressRedisCache$expressRedisCache$ExpressRedisCache

	declare class expressRedisCache$ExpressRedisCache mixins events.EventEmitter {
constructor(options?: expressRedisCache$Options): this;
static init(options?: expressRedisCache$Options): expressRedisCache$ExpressRedisCache;
FOREVER: number;
options: expressRedisCache$Options;
host: string;
port: string | number;
prefix: string;
auth_pass: string;
connected: boolean;
expire: number;
client: redis.RedisClient;
add(
name: string,
body: string,
options: expressRedisCache$AddOptions,
callback: (error: any, added: expressRedisCache$Entry) => void): void;
add(
name: string,
body: string,
callback: (error: any, added: expressRedisCache$Entry) => void): void;
del(name: string, callback: (error: any, deleted: number) => void): void;
get(
name: string,
callback: (error: any, entries: expressRedisCache$Entry[]) => void): void;
get(callback: (error: any, entries: expressRedisCache$Entry[]) => void): void;
route(
nameOrOptions: string | expressRedisCache$RouteOptions,
expire?: expressRedisCache$ExpireOption): express.RequestHandler;
route(expire?: number): express.RequestHandler;
size(callback: (error: any, bytes: number) => void): void
}

declare interface expressRedisCache$AddOptions {
type?: string,
expire?: number
} 

declare interface expressRedisCache$Entry {
body: string,
touched: number,
expire: number,
type: string
} 

declare interface expressRedisCache$ExpirationConfig {
[statusCode: string]: number
} 

declare type expressRedisCache$ExpireOption = number | expressRedisCache$ExpirationConfig;

declare type expressRedisCache$ExpirationPolicy = (req: express.Request, res: express.Response) => number;

declare interface expressRedisCache$Options {
auth_pass?: string,
client?: redis.RedisClient,
expire?: number,
host?: string,
port?: string | number,
prefix?: string
} 

declare interface expressRedisCache$RouteOptions {
name?: string,
expire?: expressRedisCache$ExpireOption | expressRedisCache$ExpirationPolicy,
binary?: boolean
} 
	declare module.exports: typeof expressRedisCache

    }
