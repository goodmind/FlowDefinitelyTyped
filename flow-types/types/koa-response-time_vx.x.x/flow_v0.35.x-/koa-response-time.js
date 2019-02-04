declare module 'koa-response-time' {
        import type {
          Middleware
        } from 'koa';

	declare function koa_response_time(): Middleware

	declare module.exports: typeof koa_response_time

    }
