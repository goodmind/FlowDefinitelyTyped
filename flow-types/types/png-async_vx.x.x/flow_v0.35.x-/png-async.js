declare module 'png-async' {
        declare export interface IImageOptions {
width?: number,
height?: number,
fill?: boolean,
checkCRC?: boolean,
deflateChunkSize?: number,
deflateLevel?: number,
deflateStrategy?: EDeflateStrategy,
filterType?: EFilterType
} 
	declare export  class EDeflateStrategy {
  constructor(...args: empty): mixed;
static +DEFAULT_STRATEGY: Class<EDeflateStrategy__DEFAULT_STRATEGY> & EDeflateStrategy__DEFAULT_STRATEGY & 0;// 0
static +FILTERED: Class<EDeflateStrategy__FILTERED> & EDeflateStrategy__FILTERED & 1;// 1
static +HUFFMAN_ONLY: Class<EDeflateStrategy__HUFFMAN_ONLY> & EDeflateStrategy__HUFFMAN_ONLY & 2;// 2
static +RLE: Class<EDeflateStrategy__RLE> & EDeflateStrategy__RLE & 3;// 3
static +FIXED: Class<EDeflateStrategy__FIXED> & EDeflateStrategy__FIXED & 4;// 4

}

declare class EDeflateStrategy__DEFAULT_STRATEGY mixins EDeflateStrategy {}
declare class EDeflateStrategy__FILTERED mixins EDeflateStrategy {}
declare class EDeflateStrategy__HUFFMAN_ONLY mixins EDeflateStrategy {}
declare class EDeflateStrategy__RLE mixins EDeflateStrategy {}
declare class EDeflateStrategy__FIXED mixins EDeflateStrategy {}

	declare export  class EFilterType {
  constructor(...args: empty): mixed;
static +Auto: Class<EFilterType__Auto> & EFilterType__Auto & -1;// -1
static +None: Class<EFilterType__None> & EFilterType__None & 0;// 0
static +Sub: Class<EFilterType__Sub> & EFilterType__Sub & 1;// 1
static +Up: Class<EFilterType__Up> & EFilterType__Up & 2;// 2
static +Average: Class<EFilterType__Average> & EFilterType__Average & 3;// 3
static +Paeth: Class<EFilterType__Paeth> & EFilterType__Paeth & 4;// 4

}

declare class EFilterType__Auto mixins EFilterType {}
declare class EFilterType__None mixins EFilterType {}
declare class EFilterType__Sub mixins EFilterType {}
declare class EFilterType__Up mixins EFilterType {}
declare class EFilterType__Average mixins EFilterType {}
declare class EFilterType__Paeth mixins EFilterType {}

	declare export function createImage(option?: IImageOptions): Image

	declare export class Image mixins stream.Duplex {
width: number;
height: number;
gamma: number;
data: Buffer;
constructor(option?: IImageOptions): this;
pack(): Image;
parse(data: Buffer, callback?: (err: Error, image: Image) => void): Image;
write(data: any, cb?: any): boolean;
end(data?: any): void;
bitblt(
dst: Image,
sx: number,
sy: number,
w: number,
h: number,
dx: number,
dy: number): Image
}
    }
