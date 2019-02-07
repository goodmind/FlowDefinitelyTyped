declare module "pbkdf2" {
  declare export function pbkdf2(
    password: string | Buffer,
    salt: string | Buffer,
    iterations: number,
    keylen: number,
    callback: (err: Error, derivedKey: Buffer) => void
  ): void;

  declare export function pbkdf2(
    password: string | Buffer,
    salt: string | Buffer,
    iterations: number,
    keylen: number,
    digest: string,
    callback: (err: Error, derivedKey: Buffer) => void
  ): void;

  declare export function pbkdf2Sync(
    password: string | Buffer,
    salt: string | Buffer,
    iterations: number,
    keylen: number,
    digest?: string
  ): Buffer;
}
