declare module 'jdataview' {
        declare type jDataView = {} & DataView

	declare interface jDataView$Bytes {
length: number,
[index: number]: number
} 

declare type jDataView$Buffer = {
byteLength: number
} & jDataView$Bytes


declare class jDataView$Uint64  {
lo: number;
hi: number;
constructor(lo: number, hi: number): this;
valueOf(): number;
static fromNumber(number: number): jDataView$Uint64
}

declare class jDataView$Int64 mixins jDataView$Uint64 {
static fromNumber(number: number): jDataView$Int64
}
	declare module.exports: typeof jDataView

    }
