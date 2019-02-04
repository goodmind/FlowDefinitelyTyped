declare module 'koa-basic-auth' {
        import typeof * as Koa from 'koa';

	declare function auth(opts: {
name: string,
pass: string
}): Koa.Middleware

	declare module.exports: typeof auth

    }
