declare module "@ronomon/crypto-async" {
  declare function cipher(
    algorithm: string,
    cipherDirection: $Values<typeof CipherDirection>,
    key: Buffer,
    iv: Buffer,
    plaintext: Buffer,
    cb: (error: Error | void, ciphertext: Buffer) => void
  ): void;

  declare function cipher(
    algorithm: string,
    cipherDirection: $Values<typeof CipherDirection>,
    key: Buffer,
    keyOffset: number,
    keySize: number,
    iv: Buffer,
    ivOffset: number,
    ivSize: number,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    cb: (error: Error | void, targetSize: number) => void
  ): void;

  declare function hash(
    algorithm: string,
    source: Buffer,
    cb: (error: Error | void, hash: Buffer) => void
  ): void;

  declare function hash(
    algorithm: string,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    cb: (error: Error | void, targetSize: number) => void
  ): void;

  declare function hmac(
    algorithm: string,
    key: Buffer,
    source: Buffer,
    cb: (error: Error | void, hmac: Buffer) => void
  ): void;

  declare function hmac(
    algorithm: string,
    key: Buffer,
    keyOffset: number,
    keySize: number,
    source: Buffer,
    sourceOffset: number,
    sourceSize: number,
    target: Buffer,
    targetOffset: number,
    cb: (error: Error | void, targetSize: number) => void
  ): void;

  declare var CipherDirection: {|
    +Decrypt: 0, // 0
    +Encrypt: 1 // 1
  |};
}
