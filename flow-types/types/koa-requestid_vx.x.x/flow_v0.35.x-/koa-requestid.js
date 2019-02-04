declare module 'koa-requestid' {
        import type {
          Middleware
        } from 'koa';

	declare module.exports: typeof requestId

	declare function requestId(options?: {
expose?: string,
header?: string,
query?: string
}): Middleware

    }
