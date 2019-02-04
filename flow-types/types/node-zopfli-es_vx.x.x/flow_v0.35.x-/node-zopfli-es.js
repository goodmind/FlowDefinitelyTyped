declare module 'node-zopfli-es' {
        import type {
          Transform
        } from 'stream';

	declare class Zopfli mixins Transform {
constructor(format?: Zopfli$Zopfli$Format, options?: Zopfli$Zopfli$Options): this;
static createGzip(options?: Zopfli$Zopfli$Options): Zopfli;
static createDeflate(options?: Zopfli$Zopfli$Options): Zopfli;
static createZlib(options?: Zopfli$Zopfli$Options): Zopfli;
static gzipSync(options?: Zopfli$Zopfli$Options): Buffer;
static deflateSync(options?: Zopfli$Zopfli$Options): Buffer;
static zlibSync(options?: Zopfli$Zopfli$Options): Buffer;
static deflate(
input: Buffer,
options: Zopfli$Zopfli$Options,
cb: (err: Error, out: Buffer) => void): void;
static deflate(input: Buffer, cb: (err: Error, out: Buffer) => void): void;
static deflate(input: Buffer, options?: Zopfli$Zopfli$Options): Promise<Buffer>;
static gzip(
input: Buffer,
options: Zopfli$Zopfli$Options,
cb: (err: Error, out: Buffer) => void): void;
static gzip(input: Buffer, cb: (err: Error, out: Buffer) => void): void;
static gzip(input: Buffer, options?: Zopfli$Zopfli$Options): Promise<Buffer>;
static zlib(
input: Buffer,
options: Zopfli$Zopfli$Options,
cb: (err: Error, out: Buffer) => void): void;
static zlib(input: Buffer, cb: (err: Error, out: Buffer) => void): void;
static zlib(input: Buffer, options?: Zopfli$Zopfli$Options): Promise<Buffer>;
static compress(
input: Buffer,
format: Zopfli$Zopfli$Format,
options: Zopfli$Zopfli$Options,
cb: (err: Error, out: Buffer) => void): void;
static compress(
input: Buffer,
format: Zopfli$Zopfli$Format,
cb: (err: Error, out: Buffer) => void): void;
static compress(
input: Buffer,
format: Zopfli$Zopfli$Format,
options?: Zopfli$Zopfli$Options): Promise<Buffer>
}
	declare type Zopfli$Format = "deflate" | "gzip" | "zlib";

declare interface Zopfli$Options {
verbose?: boolean,
verbose_more?: boolean,

/**
 * Maximum amount of times to rerun forward and backward pass to optimize LZ77 compression cost.
 * Good values: 10, 15 for small files, 5 for files over several MB in size or it will be too slow.
 */
numiterations?: number,

/**
 * If true, splits the data in multiple deflate blocks with optimal choice for the block boundaries.
 * Block splitting gives better compression.
 */
blocksplitting?: boolean,

/**
 * If true, chooses the optimal block split points only after doing the iterative LZ77 compression.
 * If false, chooses the block split points first, then does iterative LZ77 on each individual block.
 * Depending on the file, either first or last gives the best compression.
 */
blocksplittinglast?: boolean,

/**
 * Maximum amount of blocks to split into (0 for unlimited,
 * but this can give extreme results that hurt compression on some files).
 */
blocksplittingmax?: number
} 
	declare module.exports: typeof Zopfli

    }
