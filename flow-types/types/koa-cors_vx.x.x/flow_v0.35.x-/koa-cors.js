declare module 'koa-cors' {
        import type {
          Middleware,Request
        } from 'koa';

	declare function koaCors(options?: koaCors$koaCors$Options): Middleware

	declare interface koaCors$Options {
credentials?: true,
expose?: string | $ReadOnlyArray<string>,
headers?: string | $ReadOnlyArray<string>,
maxAge?: number,
methods?: string | $ReadOnlyArray<string>,
origin?: boolean | string | ((request: Request) => string)
} 
	declare module.exports: typeof koaCors

    }
