declare module 'koa-joi-router' {
        import typeof * as Koa from 'koa';

	import typeof * as Joi from 'joi';

	import typeof * as KoaRouter from 'koa-router';

	import typeof * as CoBody from 'co-body';

	declare module 'koa' {
        declare interface Request {
body?: any,
params: {
[key: string]: string
}
} 
    }

	declare interface createRouter {
(): createRouter$createRouter$Router,
Joi: typeof Joi
} 
	declare type createRouter$FullHandler = (ctx: Koa.Context, next: () => Promise<any>) => any;

declare type createRouter$NestedHandler = {} & $ReadOnlyArray<createRouter$Handler>


declare type createRouter$Handler = createRouter$FullHandler | createRouter$NestedHandler;

declare type createRouter$Method = (
path: string | RegExp,
handlerOrConfig: createRouter$Handler | {[key: string]: any},
...handlers: createRouter$Handler[]) => createRouter$Router;

declare interface createRouter$Spec {
method: string | string[],
path: string | RegExp,
handler: createRouter$Handler,
pre?: createRouter$Handler,
validate?: {
header?: Joi.SchemaLike,
query?: Joi.SchemaLike,
params?: Joi.SchemaLike,
body?: Joi.SchemaLike,
maxBody?: number,
failure?: number,
type?: "form" | "json" | "multipart",
formOptions?: CoBody.Options,
jsonOptions?: CoBody.Options,
multipartOptions?: CoBody.Options,
output?: {
[status: string]: Joi.SchemaLike
},
continueOnError?: boolean
},
meta?: any
} 

declare interface createRouter$Router {
routes: createRouter$Spec[],
route(spec: createRouter$Spec | createRouter$Spec[]): createRouter$Router,
middleware(): Koa.Middleware,
prefix: $ElementType<KoaRouter, "prefix">,
use: $ElementType<KoaRouter, "use">,
param: $ElementType<KoaRouter, "param">,
head: createRouter$Method,
options: createRouter$Method,
get: createRouter$Method,
post: createRouter$Method,
put: createRouter$Method,
patch: createRouter$Method,
delete: createRouter$Method
} 
	declare var createRouter: createRouter;
	declare module.exports: typeof createRouter

    }
