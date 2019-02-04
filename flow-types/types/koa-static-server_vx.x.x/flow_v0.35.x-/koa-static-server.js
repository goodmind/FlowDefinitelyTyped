declare module 'koa-static-server' {
        import type {
          Middleware
        } from 'koa';

	declare function KoaStaticServer(options: KoaStaticServer$KoaStaticServer$Options): Middleware

	declare interface KoaStaticServer$Options {

/**
 * directory that is to be served
 */
rootDir?: string,

/**
 * optional rewrite path
 */
rootPath?: string,

/**
 * optional default file to serve if requested static is missing
 */
notFoundFile?: string,

/**
 * request access log to console
 */
log?: boolean,

/**
 * don't execute any downstream middleware. defaults to true
 */
last?: boolean,

/**
 * Browser cache max-age in milliseconds. defaults to 0
 */
maxage?: number,

/**
 * Allow transfer of hidden files. defaults to false
 */
hidden?: boolean,

/**
 * Try to serve the gzipped version of a file automatically when gzip is supported by a client and if the requested
 */
gzip?: boolean,
index?: string
} 
	declare module.exports: typeof KoaStaticServer

    }
