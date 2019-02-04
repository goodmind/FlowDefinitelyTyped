declare module 'koa-session-minimal' {
        import typeof * as Koa from 'koa';

	import typeof * as cookies from 'cookies';

	declare module 'koa' {
        declare interface Context {
session: any,
sessionHandler: {
regenerateId: () => void
}
} 
    }

	declare function session(
opts?: {

/**
 * session cookie name and store key prefix. Default is 'koa:sess'
 */
key?: string,

/**
 * cookie options
 */
cookie?: cookies.IOptions | {
(ctx?: Koa.Context): cookies.IOptions
},

/**
 * session store
 */
store?: any
}): Koa.Middleware

	
	declare module.exports: typeof session

    }
