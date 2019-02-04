declare module 'base-x' {
        import type {
          Buffer
        } from 'buffer';

	declare module.exports: typeof baseX

	declare function baseX(ALPHABET: string): baseX$baseX$BaseConverter

	declare interface baseX$BaseConverter {
encode(buffer: Buffer): string,
decodeUnsafe(string: string): Buffer | void,
decode(string: string): Buffer
} 
    }
