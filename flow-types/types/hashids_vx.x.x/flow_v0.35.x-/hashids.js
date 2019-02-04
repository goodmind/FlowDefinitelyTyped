declare module 'hashids' {
        declare export default class Hashids  {
constructor(salt: string, minHashLength?: number, alphabet?: string): this;
decode(hash: string): number[];
encode(arg: number): string;
encode(arg: number[]): string;
encode(...args: number[]): string;
encodeHex(str: string): string;
decodeHex(hash: string): string;
hash(input: number, alphabet: string): string;
unhash(input: string[], alphabet: string): number
}
    }
