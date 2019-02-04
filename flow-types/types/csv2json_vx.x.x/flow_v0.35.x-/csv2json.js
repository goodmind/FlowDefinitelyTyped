declare module 'csv2json' {
        import type {
          Writable
        } from 'stream';

	declare interface csv2json$Options {
dynamicTyping?: boolean,
separator?: string
} 
	declare function csv2json(options?: csv2json$csv2json$Options): Writable

	declare module.exports: typeof csv2json

    }
