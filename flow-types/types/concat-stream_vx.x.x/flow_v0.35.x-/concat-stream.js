declare module 'concat-stream' {
        import type {
          Writable
        } from 'stream';

	declare interface ConcatOpts {
encoding?: string
} 
	declare function concat(cb: (buf: Buffer) => void): Writable

	declare function concat(opts: ConcatOpts, cb: (buf: Buffer) => void): Writable

	declare module.exports: typeof concat

    }
