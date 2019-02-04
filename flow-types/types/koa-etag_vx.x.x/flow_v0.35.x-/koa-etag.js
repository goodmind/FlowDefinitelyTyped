declare module 'koa-etag' {
        import typeof * as koa from 'koa';

	import typeof * as etag from 'etag';

	declare function koaEtag(options?: etag.Options): koa.Middleware

	declare module.exports: typeof koaEtag

    }
