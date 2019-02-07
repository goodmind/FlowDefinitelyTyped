declare module 'koa-xml-body' {
        import typeof * as Koa from 'koa';

	import type {
          Options as Xml2jsOptions
        } from 'xml2js';

	declare module 'koa' {
        declare interface Request {
body: any
} 
    }

	declare function bodyParser(
opts?: {
encoding?: string,
limit?: number,
length?: number,
onerror?: (err: Error, ctx: Koa.Context) => void,
xmlOptions?: Xml2jsOptions
}): Koa.Middleware

	
	declare module.exports: typeof bodyParser

    }
