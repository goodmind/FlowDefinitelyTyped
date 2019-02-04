declare module 'node-sass-middleware' {
        import typeof * as sass from 'node-sass';

	import typeof * as express from 'express';

	declare type Options = {

/**
 */
src: string,

/**
 */
dest?: string,

/**
 */
root?: string,

/**
 */
prefix?: string,

/**
 */
force?: boolean,

/**
 */
debug?: boolean,

/**
 */
indentedSyntax?: boolean,

/**
 */
response?: boolean,

/**
 */
error?: () => void
} & sass.Options

	
/**
 */
declare function nodeSassMiddleware(options: Options): express.RequestHandler

	
	declare module.exports: typeof nodeSassMiddleware

    }
