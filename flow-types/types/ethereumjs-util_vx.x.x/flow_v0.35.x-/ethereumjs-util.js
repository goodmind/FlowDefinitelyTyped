declare module 'ethereumjs-util' {
        declare export var SHA3_NULL_S: string;
	declare export var SHA3_RLP_ARRAY_S: string;
	declare export var SHA3_RLP_S: string;
	declare export function addHexPrefix(str: string): string

	declare export function baToJSON(ba: Buffer | Uint8Array | string[]): Buffer | Uint8Array | string[] | null

	declare export function bufferToHex(buf: Buffer | Uint8Array): string

	declare export function bufferToInt(buf: Buffer | Uint8Array): number

	declare export function defineProperties(
self: {
[k: string]: any
},
fields: string[],
data: {
[k: string]: any
}): {
[k: string]: any
}

	declare export function ecrecover(
msgHash: Buffer | Uint8Array,
v: number,
r: Buffer | Uint8Array,
s: Buffer | Uint8Array): Buffer | Uint8Array

	declare export function ecsign(
msgHash: Buffer | Uint8Array,
privateKey: Buffer | Uint8Array): {
[k: string]: any
}

	declare export function fromRpcSig(sig: string): {
[k: string]: any
}

	declare export function fromSigned(num: Buffer | Uint8Array): BN

	declare export function generateAddress(from: Buffer | Uint8Array, nonce: Buffer | Uint8Array): Buffer | Uint8Array

	declare export function hashPersonalMessage(message: Buffer | Uint8Array | any[]): Buffer | Uint8Array

	declare export function importPublic(publicKey: Buffer | Uint8Array): Buffer | Uint8Array

	declare export function isPrecompiled(address: Buffer | Uint8Array): boolean

	declare export function isValidAddress(address: string): boolean

	declare export function isValidChecksumAddress(address: Buffer | Uint8Array): boolean

	declare export function isValidPrivate(privateKey: Buffer | Uint8Array): boolean

	declare export function isValidPublic(publicKey: Buffer | Uint8Array, sanitize?: boolean): any

	declare export function isValidSignature(
v: Buffer | Uint8Array,
r: Buffer | Uint8Array,
s: Buffer | Uint8Array,
homestead?: boolean): boolean

	declare export function isZeroAddress(address: string): boolean

	declare export function keccak(
a: Buffer
| Uint8Array
| any[]
| string
| number,
bits?: number): Buffer | Uint8Array

	declare export function keccak256(a: Buffer
| Uint8Array
| any[]
| string
| number): Buffer | Uint8Array

	declare export function privateToAddress(privateKey: Buffer | Uint8Array): Buffer | Uint8Array

	declare export function privateToPublic(privateKey: Buffer | Uint8Array): Buffer | Uint8Array

	declare export function pubToAddress(pubKey: Buffer | Uint8Array, sanitize?: boolean): Buffer | Uint8Array

	declare export function ripemd160(
a: Buffer
| Uint8Array
| any[]
| string
| number,
padded: boolean): Buffer | Uint8Array

	declare export function rlphash(a: Buffer
| Uint8Array
| any[]
| string
| number): Buffer | Uint8Array

	declare export function setLengthLeft(
msg: Buffer | Uint8Array | any[],
length: number,
right?: boolean): Buffer | Uint8Array | any[]

	declare export function setLengthRight(msg: Buffer | Uint8Array | any[], length: number): Buffer | Uint8Array | any[]

	declare export function sha256(a: Buffer
| Uint8Array
| any[]
| string
| number): Buffer | Uint8Array

	declare export function sha3(
a: Buffer
| Uint8Array
| any[]
| string
| number,
bits?: number): Buffer | Uint8Array

	declare export function toBuffer(v: any): Buffer | Uint8Array

	declare export function toChecksumAddress(address: string): string

	declare export function toRpcSig(v: number, r: Buffer | Uint8Array, s: Buffer | Uint8Array): string

	declare export function toUnsigned(num: BN): Buffer | Uint8Array

	declare export function unpad<T: Buffer | Uint8Array | any[] | string>(a: T): T

	declare export function zeros(bytes: number): Buffer | Uint8Array

	declare export function zeroAddress(): string

    }
