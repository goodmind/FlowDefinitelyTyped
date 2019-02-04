declare module 'bip38' {
        declare export interface ProgressStatus {
current: number,
total: number,
percent: number
} 
	declare export interface ScryptParams {
N: number,
r: number,
p: number
} 
	declare export function decrypt(
string: string,
passphrase: string,
progressCallback?: (status: ProgressStatus) => void,
scryptParams?: ScryptParams): {
privateKey: Buffer,
compressed: boolean
}

	declare export function decryptECMult(
buffer: Buffer,
passphrase: string,
progressCallback?: (status: ProgressStatus) => void,
scryptParams?: ScryptParams): {
privateKey: Buffer,
compressed: boolean
}

	declare export function decryptRaw(
buffer: Buffer,
passphrase: string,
progressCallback?: (status: ProgressStatus) => void,
scryptParams?: ScryptParams): {
privateKey: Buffer,
compressed: boolean
}

	declare export function encrypt(
buffer: Buffer,
compressed: boolean,
passphrase: string,
progressCallback?: (status: ProgressStatus) => void,
scryptParams?: ScryptParams): string

	declare export function encryptRaw(
buffer: Buffer,
compressed: boolean,
passphrase: string,
progressCallback?: (status: ProgressStatus) => void,
scryptParams?: ScryptParams): Buffer

	declare export function verify(string: string): boolean

    }
