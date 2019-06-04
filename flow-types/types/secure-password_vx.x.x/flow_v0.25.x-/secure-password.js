declare module "secure-password" {
  declare class SecurePassword {
    constructor(opts?: {
      memlimit?: number,
      opslimit?: number
    }): this;
    memlimit: number;
    opslimit: number;

    /**
     * Create a hash of the password.
     * @param passwordBuf
     */
    hash(passwordBuf: Buffer): Promise<Buffer>;
    hash(passwordBuf: Buffer, cb: (err: any, hash?: Buffer) => void): void;

    /**
     * Create a hash of the password buffer.
     * @param buff
     */
    hashSync(buff: Buffer): Buffer;

    /**
     * Verify password and hash match.
     * @param passwordBuf
     * @param hashBuf
     */
    verify(passwordBuf: Buffer, hashBuf: Buffer): Promise<Symbol>;
    verify(
      passwordBuf: Buffer,
      hashBuf: Buffer,
      cb: (err: any, result?: Symbol) => void
    ): void;

    /**
     * Verify password and hash match.
     * @param passwordBuf
     * @param hashBuf
     */
    verifySync(passwordBuf: Buffer, hashBuf: Buffer): Symbol;
    static HASH_BYTES: number;
    static INVALID: Symbol;
    static INVALID_UNRECOGNIZED_HASH: Symbol;
    static MEMLIMIT_DEFAULT: number;
    static MEMLIMIT_MAX: number;
    static MEMLIMIT_MIN: number;
    static OPSLIMIT_DEFAULT: number;
    static OPSLIMIT_MAX: number;
    static OPSLIMIT_MIN: number;
    static PASSWORD_BYTES_MAX: number;
    static PASSWORD_BYTES_MIN: number;
    static VALID: Symbol;
    static VALID_NEEDS_REHASH: Symbol;
  }
  declare export default typeof SecurePassword;
}
