declare module 'kcors' {
        import typeof * as Koa from 'koa';

	declare function cors(options?: cors$cors$Options): Koa.Middleware

	declare module.exports: typeof cors

	declare interface cors$Options {
origin?: ((ctx: Koa.Context) => string) | string,
allowMethods?: string[] | string,
exposeHeaders?: string[] | string,
allowHeaders?: string[] | string,
maxAge?: number | string,
credentials?: boolean,
keepHeadersOnError?: boolean
} 
    }
