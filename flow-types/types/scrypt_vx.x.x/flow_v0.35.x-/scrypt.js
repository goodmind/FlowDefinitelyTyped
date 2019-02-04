declare module 'scrypt' {
        declare export interface Params {
N: number,
r: number,
p: number
} 
	declare export function params(maxtime: number, maxmem?: number, maxmemfrac?: number): Promise<Params>

	declare export function params(maxtime: number, cb: (err: Error | null, obj: Params) => void): void

	declare export function params(
maxtime: number,
maxmem: number,
cb: (err: Error | null, obj: Params) => void): void

	declare export function params(
maxtime: number,
maxmem: number,
maxmemfrac: number,
cb: (err: Error | null, obj: Params) => void): void

	declare export function paramsSync(maxtime: number, maxmem?: number, maxmemfrac?: number): Params

	declare export function kdf(key: string | Buffer, paramsObject: Params): Promise<Buffer>

	declare export function kdf(
key: string | Buffer,
paramsObject: Params,
cb: (err: Error | null, obj: Buffer) => void): void

	declare export function kdfSync(key: string | Buffer, paramsObject: Params): Buffer

	declare export function verifyKdf(kdf: Buffer, key: string | Buffer): Promise<boolean>

	declare export function verifyKdf(
kdf: Buffer,
key: string | Buffer,
cb: (err: Error | null, obj: boolean) => void): void

	declare export function verifyKdfSync(kdf: Buffer, key: string | Buffer): boolean

	declare export function hash(
key: string | Buffer,
params: Params,
outputLength: number,
salt: string | Buffer): Promise<Buffer>

	declare export function hash(
key: string | Buffer,
params: Params,
outputLength: number,
salt: string | Buffer,
cb: (err: Error | null, obj: Buffer) => void): void

	declare export function hashSync(
key: string | Buffer,
params: Params,
outputLength: number,
salt: string | Buffer): Buffer

    }
