declare module 'split' {
        import type {
          ThroughStream
        } from 'through';

	declare interface SplitOptions {
maxLength: number
} 
	declare function split(matcher?: any, mapper?: any, options?: SplitOptions): ThroughStream

	declare module.exports: typeof split

    }
