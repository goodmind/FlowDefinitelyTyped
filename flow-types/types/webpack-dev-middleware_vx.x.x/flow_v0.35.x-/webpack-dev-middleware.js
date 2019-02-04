declare module 'webpack-dev-middleware' {
        import typeof * as webpack from 'webpack';

	import typeof * as loglevel from 'loglevel';

	import type {
          NextHandleFunction
        } from 'connect';

	declare module.exports: typeof WebpackDevMiddleware$WebpackDevMiddleware

	declare function WebpackDevMiddleware(
compiler: webpack.ICompiler,
options?: WebpackDevMiddleware$WebpackDevMiddleware.WebpackDevMiddleware$Options): WebpackDevMiddleware$WebpackDevMiddleware.WebpackDevMiddleware$WebpackDevMiddleware & NextHandleFunction

	declare interface WebpackDevMiddleware$Options {
logLevel?: string,
lazy?: boolean,
watchOptions?: webpack.WebpackDevMiddleware$Options.WatchOptions,
publicPath: string,
index?: string | boolean,
headers?: {
[name: string]: string
},
stats?: webpack.WebpackDevMiddleware$Options.Stats,
reporter?: WebpackDevMiddleware$Reporter | null,
serverSideRender?: boolean,
logger?: WebpackDevMiddleware$Logger,
filename?: string,
writeToDisk?: boolean | ((filename: string) => boolean)
} 

declare interface WebpackDevMiddleware$ReporterOptions {
state: boolean,
stats?: webpack.Stats,
log: WebpackDevMiddleware$Logger
} 

declare type WebpackDevMiddleware$Logger = loglevel.WebpackDevMiddleware$Logger;

declare type WebpackDevMiddleware$Reporter = (
middlewareOptions: WebpackDevMiddleware$Options,
reporterOptions: WebpackDevMiddleware$ReporterOptions) => void;

declare interface WebpackDevMiddleware$WebpackDevMiddleware {
close(callback?: () => void): void,
invalidate(callback?: (stats: webpack.Stats) => void): void,
waitUntilValid(callback?: (stats: webpack.Stats) => void): void,
getFilenameFromUrl: (url: string) => string | false,
fileSystem: MemoryFileSystem
} 
    }
