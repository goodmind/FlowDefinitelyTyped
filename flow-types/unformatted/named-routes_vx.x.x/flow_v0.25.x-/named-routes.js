declare module 'named-routes' {
        import typeof * as express from 'express';

	declare module 'express-serve-static-core' {
        declare interface Application {
namedRoutes: NamedRouter
} 
	declare interface IRouterMatcher<T> {
(path: PathParams, name: string, ...handlers: RequestHandler[]): T,
(path: PathParams, name: string, ...handlers: RequestHandlerParams[]): T
} 
    }

	declare interface RouterOptions {
caseSensitive: boolean
} 
	declare interface RouteOptions {
name: string,
recursiveWildcard: boolean,
caseSensitive: boolean,
wildcardInPairs: boolean
} 
	declare interface RouteParams {
[key: string]: string
| string[]
| number
| number[]
| boolean
| boolean[]
| null
} 
	declare class NamedRouter  {
constructor(options?: $Shape<RouterOptions>): this;
match(req: express.Request): boolean | {[key: string]: any};
add(
method: string,
path: string,
callbacks: express.RequestHandler | express.RequestHandler[],
options?: $Shape<RouteOptions>): void;
build(name: string, params?: RouteParams, method?: string): string;
registerAppHelpers(app: express.Express): NamedRouter;
param(name: string, callback: express.RequestHandler): NamedRouter;
param(callback: express.RequestHandler): NamedRouter;
dispatch(
req: express.Request,
res?: express.Response,
next?: express.NextFunction): void;
extendExpress(app: express.Express | express.Router): NamedRouter
}
	declare module.exports: typeof NamedRouter

    }
