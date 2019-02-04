declare module 'koa-static-cache' {
        import type {
          Middleware
        } from 'koa';

	declare interface staticCache$Files {
[path: string]: staticCache$Options
} 

declare interface staticCache$Options {
dir?: string,
maxAge?: number,
cacheControl?: string,
buffer?: boolean,
gzip?: boolean,
usePrecompiledGzip?: boolean,
alias?: {},
prefix?: string,
dynamic?: boolean,
filter?: ((path: string) => boolean) | string[],
preload?: boolean,
files?: staticCache$Files
} 
	declare function staticCache(
dir: string | staticCache$staticCache$Options,
options?: staticCache$staticCache$Options | staticCache$staticCache$Files,
files?: staticCache$staticCache$Files): Middleware

	declare module.exports: typeof staticCache

    }
