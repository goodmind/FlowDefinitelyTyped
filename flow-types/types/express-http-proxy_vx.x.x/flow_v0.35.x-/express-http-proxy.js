declare module 'express-http-proxy' {
        import type {
          RequestHandler,Request
        } from 'express';

	import type {
          RequestOptions,IncomingHttpHeaders,OutgoingHttpHeaders
        } from 'http';

	import type {
          Response
        } from 'express-serve-static-core';

	declare interface ProxyOptions {
proxyReqPathResolver?: (req: Request) => string,
proxyReqOptDecorator?: (proxyReqOpts: RequestOptions, srcReq: Request) => RequestOptions,
userResHeaderDecorator?: (
headers: IncomingHttpHeaders,
userReq: Request,
userRes: Response,
proxyReq: Request,
proxyRes: Response) => OutgoingHttpHeaders
} 
	declare function proxy(host: string, options?: ProxyOptions): RequestHandler

	declare module.exports: typeof proxy

    }
