declare module 'koa-pug' {
        import typeof * as koa from 'koa';

	declare module.exports: typeof Pug

	
/**
 * main module
 */
declare class Pug  {
locals: {
[key: string]: any
};
constructor(options?: Pug$Pug$PugOptions): this;
use(app: koa): void
}
	declare interface Pug$PugOptions {
viewPath?: string,
pretty?: boolean,
compileDebug?: boolean,
debug?: boolean,
locals?: Pug$PugLocals,
noCache?: boolean,
helperPath?: string | Array<string | {
[str: string]: any
}>,
basedir?: string,
app?: koa
} 

declare type Pug$PugCtxOptions = {
fromString: boolean
} & Pug$PugOptions


declare interface Pug$PugLocals {
[str: string]: any
} 
	declare module 'koa' {
        declare interface Context {
render(
viewPath: string,
locals?: Pug$Pug$PugLocals,
overrideOpts?: Pug$Pug$PugCtxOptions,
noCache?: boolean): void,
render(viewPath: string, locals?: Pug$Pug$PugLocals, overrideOpts?: boolean): void
} 
    }

    }
