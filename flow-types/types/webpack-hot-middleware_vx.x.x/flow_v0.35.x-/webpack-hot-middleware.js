declare module 'webpack-hot-middleware' {
        import type {
          NextHandleFunction
        } from 'connect';

	import typeof * as webpack from 'webpack';

	declare module.exports: typeof WebpackHotMiddleware

	declare function WebpackHotMiddleware(
compiler: webpack.ICompiler,
options?: WebpackHotMiddleware$WebpackHotMiddleware$Options): NextHandleFunction & WebpackHotMiddleware$WebpackHotMiddleware$EventStream

	declare interface WebpackHotMiddleware$Options {
log?: false | WebpackHotMiddleware$Logger,
path?: string,
heartbeat?: number,
reload?: boolean
} 

declare type WebpackHotMiddleware$Logger = (message?: any, ...optionalParams: any[]) => void;

declare interface WebpackHotMiddleware$EventStream {
publish(payload: any): void
} 
    }
