declare module 'fastify-static' {
        import type {
          Server,IncomingMessage,ServerResponse
        } from 'http';

	declare module 'fastify' {
        declare interface FastifyReply<HttpResponse> {
sendFile(filename: string): FastifyReply<HttpResponse>
} 
    }

	declare function fastifyStatic(): void

	declare interface fastifyStatic$FastifyStaticOptions {
root: string,
prefix?: string,
serve?: boolean,
decorateReply?: boolean,
schemaHide?: boolean,
setHeaders?: () => void,
acceptRanges?: boolean,
cacheControl?: boolean,
dotfiles?: boolean,
etag?: boolean,
extensions?: string[],
immutable?: boolean,
index?: string[],
lastModified?: boolean,
maxAge?: string | number
} 
	declare module.exports: typeof fastifyStatic

    }
