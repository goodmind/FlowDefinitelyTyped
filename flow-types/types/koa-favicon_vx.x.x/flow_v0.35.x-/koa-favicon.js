declare module 'koa-favicon' {
        import typeof * as Koa from 'koa';

	
/**
 * Returns a middleware serving the favicon found on the given path.
 */
declare function favicon(
path: string,
options?: {

/**
 * cache-control max-age directive in ms, defaulting to 1 day.
 */
maxage?: number
}): Koa.Middleware

	
	declare module.exports: typeof favicon

    }
