declare module 'cryptr' {
        declare class Cryptr  {

/**
 * Cryptr provides a mechanism for aes-256-ctr encryption/decryption.
 * @param secret key used for encryption/decryption
 */
constructor(secret: string): this;

/**
 * Encrypt a string.
 */
encrypt(value: string): string;

/**
 * Decrypt a string.
 */
decrypt(value: string): string
}
	declare module.exports: typeof Cryptr

    }
