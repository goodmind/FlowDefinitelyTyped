declare module 'karma-webpack' {
        import 'karma';

	import typeof * as Webpack from 'webpack';

	import type {
          Reporter,Logger
        } from 'webpack-dev-middleware';

	declare module 'karma' {
        declare type Logger = (message?: any, ...optionalParams: any[]) => void;
	declare interface KarmaWebpackMiddlewareOptions {
noInfo?: boolean,
quiet?: boolean,
lazy?: boolean,
watchOptions?: Webpack.Options.WatchOptions,
publicPath?: string,
index?: string,
headers?: {
[name: string]: string
},
stats?: Webpack.Options.Stats,
reporter?: Reporter | null,
serverSideRender?: boolean,
log?: Logger,
warn?: Logger,
error?: Logger,
filename?: string
} 
	declare interface ConfigOptions {
webpack: Webpack.Configuration,
webpackMiddleware: KarmaWebpackMiddlewareOptions
} 
    }

    }
