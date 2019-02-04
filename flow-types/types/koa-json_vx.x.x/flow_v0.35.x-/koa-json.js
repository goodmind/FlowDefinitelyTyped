declare module 'koa-json' {
        import typeof * as Koa from 'koa';

	declare function json(
opts?: {

/**
 * default to pretty response [true]
 */
pretty?: boolean,

/**
 * optional query-string param for pretty responses [none]
 */
param?: string,

/**
 * JSON spaces [2]
 */
spaces?: number
}): Koa.Middleware

	
	declare module.exports: typeof json

    }
