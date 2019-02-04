declare module 'auto-bind' {
        declare interface autoBind$AutoBindOptions {
include?: Array<string | RegExp>,
exclude?: Array<string | RegExp>
} 

declare type autoBind$AutoBindFunction<selfT> = (self: selfT, options?: autoBind$AutoBindOptions) => selfT;
	declare type AutoBindModule<selfT> = {
react: autoBind$autoBind$AutoBindFunction<selfT>
} & autoBind$autoBind$AutoBindFunction<selfT>

	declare var autoBind: AutoBindModule;
	declare module.exports: typeof autoBind

    }
