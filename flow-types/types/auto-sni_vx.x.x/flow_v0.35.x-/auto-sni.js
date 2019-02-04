declare module 'auto-sni' {
        import type {
          Server
        } from 'https';

	declare interface createServer$Options {
email: string,
agreeTos: boolean,
domains: Array<string | string[]>,
ports?: {
http?: number,
https?: number
},
debug?: boolean
} 
	declare function createServer(opts: createServer$createServer$Options, app?: any): Server

	declare module.exports: typeof createServer

    }
