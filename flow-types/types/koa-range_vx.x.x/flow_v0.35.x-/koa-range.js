declare module 'koa-range' {
        import typeof * as Koa from 'koa';

	declare var KoaRange: Koa.Middleware;
	
	declare module.exports: typeof KoaRange

    }
