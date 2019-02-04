declare module 'falcor-router' {
        import typeof * as FalcorModel from 'falcor';

	import typeof * as FalcorJsonGraph from 'falcor-json-graph';

	declare class FalcorRouter mixins DataSource {
constructor(routes: Array<FalcorRouter$FalcorRouter$RouteDefinition>, options?: FalcorRouter$FalcorRouter$RouterOptions): this;

/**
 * When a route misses on a call, get, or set the unhandledDataSource will
 * have a chance to fulfill that request.
 */
routeUnhandledPathsTo(dataSource: DataSource): void;
static createClass(routes?: Array<FalcorRouter$FalcorRouter$RouteDefinition>): typeof undefined
}
	declare class FalcorRouter$CreatedRouter mixins FalcorRouter {
constructor(options?: FalcorRouter$RouterOptions): this
}

declare interface FalcorRouter$Route {
route: string
} 

declare type FalcorRouter$RoutePathSet = FalcorJsonGraph.PathSet;

declare type FalcorRouter$CallRoute = {
call(
callPath: FalcorRouter$RoutePathSet,
args: Array<any>): FalcorRouter$CallRouteResult | Promise<FalcorRouter$CallRouteResult>
} & FalcorRouter$Route


declare type FalcorRouter$GetRoute = {
get(
pathset: FalcorRouter$RoutePathSet): FalcorRouter$RouteResult | Promise<FalcorRouter$RouteResult>
} & FalcorRouter$Route


declare type FalcorRouter$SetRoute = {
set(
jsonGraph: FalcorJsonGraph.JSONGraph): FalcorRouter$RouteResult | Promise<FalcorRouter$RouteResult>
} & FalcorRouter$Route


declare type FalcorRouter$RouteDefinition = FalcorRouter$GetRoute | FalcorRouter$SetRoute | FalcorRouter$CallRoute;

declare type FalcorRouter$RouteResult = FalcorJsonGraph.PathValue | Array<FalcorJsonGraph.PathValue> | FalcorJsonGraph.JSONEnvelope<any>;

declare type FalcorRouter$CallRouteResult = FalcorJsonGraph.PathValue | FalcorJsonGraph.InvalidPath | Array<FalcorJsonGraph.PathValue | FalcorJsonGraph.InvalidPath> | FalcorJsonGraph.JSONGraphEnvelope;

declare interface FalcorRouter$RouterOptions {
debug?: boolean,
maxPaths?: number,
maxRefFollow?: number
} 
	declare module.exports: typeof FalcorRouter

    }
