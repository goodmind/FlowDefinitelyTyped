declare module 'koa-joi-router' {
        import typeof * as Koa from 'koa';

	import typeof * as Joi from 'joi';

	import typeof * as KoaRouter from 'koa-router';

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
	declare type createRouter$PartialHandler = (ctx: Koa.Context) => any;

declare type createRouter$FullHandler = (ctx: Koa.Context, next: () => Promise<any>) => any;

declare type createRouter$NestedHandler = {} & $ReadOnlyArray<createRouter$PartialHandler | createRouter$FullHandler | createRouter$NestedHandler>


declare type createRouter$Handler = createRouter$PartialHandler | createRouter$FullHandler | createRouter$NestedHandler;

declare type createRouter$Method = (
path: string | RegExp,
handlerOrConfig: createRouter$Handler | {[key: string]: any},
...handlers: createRouter$Handler[]) => createRouter$Router;

declare interface createRouter$Spec {
method: string | string[],
path: string | RegExp,
handler: createRouter$Handler,
validate?: {
header?: Joi.AnySchema | {
[key: string]: Joi.AnySchema
},
query?: Joi.AnySchema | {
[key: string]: Joi.AnySchema
},
params?: Joi.AnySchema | {
[key: string]: Joi.AnySchema
},
body?: Joi.AnySchema | {
[key: string]: Joi.AnySchema
},
maxBody?: number,
failure?: number,
type?: "form" | "json" | "multipart",
output?: {
[status: number]: Joi.AnySchema
},
continueOnError?: boolean
}
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
