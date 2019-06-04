declare module "@hapi/iron" {
  declare export interface SealOptionsSub {
    /**
     * the size of the salt (random buffer used to ensure that two identical objects will generate a different encrypted result.
     */
    saltBits: number;

    /**
     * the algorithm used ('aes-256-cbc' for encryption and 'sha256' for integrity are the only two supported at this time).
     */
    algorithm: $Keys<Algorithms>;

    /**
     * the number of iterations used to derive a key from the password. Set to 1 by default. The number of ideal iterations
     * to use is dependent on your application's performance requirements. More iterations means it takes longer to generate the key.
     */
    iterations: number;

    /**
     * minimum password size
     */
    minPasswordlength: number;
  }

  /**
   * iron provides a few options for customizing the key derivation algorithm used to generate encryption and
   * integrity verification keys as well as the algorithms and salt sizes used.
   * For context [See docs](https://github.com/hueniverse/iron#options)
   */
  declare export interface SealOptions {
    /**
     * defines the options used by the encryption process.
     */
    encryption: SealOptionsSub;

    /**
     * defines the options used by the HMAC integrity verification process.
     */
    integrity: SealOptionsSub;

    /**
     * sealed object lifetime in milliseconds where 0 means forever. Defaults to 0.
     */
    ttl: number;

    /**
     * number of seconds of permitted clock skew for incoming expirations. Defaults to 60 seconds.
     */
    timestampSkewSec: number;

    /**
     * local clock time offset, expressed in number of milliseconds (positive or negative). Defaults to 0.
     */
    localtimeOffsetMsec: number;
  }
  declare export interface Algorithms {
    "aes-128-ctr": {
      keyBits: number,
      ivBits: number
    };
    "aes-256-cbc": {
      keyBits: number,
      ivBits: number
    };
    sha256: {
      keyBits: number
    };
  }
  declare export type GenerateKeyOptions = {
    saltBits?: number,
    salt?: string,
    iv?: string
  } & Pick<SealOptionsSub, "algorithm" | "iterations" | "minPasswordlength">;

  declare export interface Key {
    key: Buffer;
    salt: string;
    iv: string;
  }
  declare export interface HMacResult {
    digest: string;
    salt: string;
  }
  declare export var defaults: SealOptions;
  declare export var algorithms: Algorithms;
  declare export var macFormatVersion: string;
  declare export var macPrefix: string;
  declare export function generateKey(
    password: string,
    options: GenerateKeyOptions
  ): Promise<Key>;

  declare export function encrypt(
    password: string,
    options: GenerateKeyOptions,
    data: string
  ): Promise<{
    data: Buffer,
    key: Key
  }>;

  declare export function decrypt(
    password: string,
    options: GenerateKeyOptions,
    data: string
  ): Promise<Buffer>;

  declare export function hmacWithPassword(
    password: string,
    options: GenerateKeyOptions,
    data: string
  ): Promise<HMacResult>;

  declare export function seal(
    obj: { [key: string]: any },
    password: string,
    options: SealOptions
  ): Promise<string>;

  declare export function unseal(
    data: string,
    password: string,
    options: SealOptions
  ): Promise<{ [key: string]: any }>;
}
