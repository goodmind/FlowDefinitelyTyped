declare module 'scrypt-js' {
        declare function scrypt(
password: Buffer,
salt: Buffer,
N: number,
r: number,
p: number,
dklen: number,
callback: (
error: Error | void | null,
progress: number,
key?: $ReadOnlyArray<number>) => void): void

	declare module.exports: typeof scrypt

    }
