declare module 'koa-qs' {
        import typeof * as koa from 'koa';

	declare type koaQs$ParseMode = "extended" | "strict" | "first";
	declare function koaQs(app: koa, mode?: koaQs$koaQs$ParseMode): koa

	declare module.exports: typeof koaQs

    }
