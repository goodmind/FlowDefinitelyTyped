declare module 'minimal-bit-array' {
        declare interface BitArray$BitArrayJSON {
bits: number[],
length: number
} 
	declare class BitArray  {
static fromJSON(bitArrayJSON: BitArray$BitArray$BitArrayJSON): BitArray;
length: number;
bits: Uint32Array;
constructor(length: number): this;
get(index: number): boolean;
set(index: number, value: any): boolean;
toJSON(): BitArray$BitArray$BitArrayJSON
}
	declare module.exports: typeof BitArray

    }
