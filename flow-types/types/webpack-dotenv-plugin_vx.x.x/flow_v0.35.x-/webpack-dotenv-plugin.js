declare module 'webpack-dotenv-plugin' {
        import typeof * as webpack from 'webpack';

	declare interface WebpackDotenvPlugin$Options {
path?: string,
sample?: string,
silent?: boolean,
encoding?: string,
allowEmptyValues?: boolean
} 
	declare class WebpackDotenvPlugin mixins webpack.Plugin {
constructor(options?: WebpackDotenvPlugin$WebpackDotenvPlugin$Options): this
}
	declare module.exports: typeof WebpackDotenvPlugin

    }
