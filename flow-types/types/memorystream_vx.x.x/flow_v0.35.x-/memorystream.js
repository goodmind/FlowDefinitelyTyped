declare module 'memorystream' {
        import type {
          Stream,Duplex
        } from 'stream';

	declare type DataType = string | Buffer | Stream;
	declare interface Options {
readable: boolean,
writeable: boolean,
maxbufsize: number,
bufoverflow: number,
frequence: number
} 
	declare class MemoryStream mixins Duplex {
constructor(data?: DataType | DataType[], options?: Options): this
}
	declare module.exports: typeof MemoryStream

    }
