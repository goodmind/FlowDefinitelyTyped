declare module "jsonwebtoken-promisified" {
  declare export class JsonWebTokenError mixins Error {
    inner: Error;
    constructor(message: string, error?: Error): this;
  }
  declare export class TokenExpiredError mixins JsonWebTokenError {
    expiredAt: number;
    constructor(message: string, expiredAt: number): this;
  }
  declare export class NotBeforeError mixins JsonWebTokenError {
    date: Date;
    constructor(message: string, date: Date): this;
  }
  declare export interface SignOptions {
    /**
     * Signature algorithm. Could be one of these values :
     * - HS256:    HMAC using SHA-256 hash algorithm (default)
     * - HS384:    HMAC using SHA-384 hash algorithm
     * - HS512:    HMAC using SHA-512 hash algorithm
     * - RS256:    RSASSA using SHA-256 hash algorithm
     * - RS384:    RSASSA using SHA-384 hash algorithm
     * - RS512:    RSASSA using SHA-512 hash algorithm
     * - ES256:    ECDSA using P-256 curve and SHA-256 hash algorithm
     * - ES384:    ECDSA using P-384 curve and SHA-384 hash algorithm
     * - ES512:    ECDSA using P-521 curve and SHA-512 hash algorithm
     * - none:     No digital signature or MAC value included
     */
    algorithm?: string;
    keyid?: string;

    /**
     * {string} - expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d"
     */
    expiresIn?: string | number;

    /**
     * {string} - expressed in seconds or a string describing a time span [zeit/ms](https://github.com/zeit/ms.js).  Eg: 60, "2 days", "10h", "7d"
     */
    notBefore?: string | number;
    audience?: string | string[];
    subject?: string;
    issuer?: string;
    jwtid?: string;
    noTimestamp?: boolean;
    header?: { [key: string]: any };
    encoding?: string;
  }
  declare export interface VerifyOptions {
    algorithms?: string[];
    audience?: string | string[];
    clockTimestamp?: number;
    clockTolerance?: number;
    issuer?: string | string[];
    ignoreExpiration?: boolean;
    ignoreNotBefore?: boolean;
    jwtid?: string;
    subject?: string;

    /**
     * @deprecated {string} - Max age of token
     */
    maxAge?: string;
  }
  declare export interface DecodeOptions {
    complete?: boolean;
    json?: boolean;
  }
  declare export type VerifyCallback = (
    err: JsonWebTokenError | NotBeforeError | TokenExpiredError,
    decoded: { [key: string]: any } | string
  ) => void;
  declare export type SignCallback = (err: Error, encoded: string) => void;
  declare export type Secret =
    | string
    | Buffer
    | {
        key: string,
        passphrase: string
      };

  /**
   * Synchronously sign the given payload into a JSON Web Token string
   * @param payload - Payload to sign, could be an literal, buffer or string
   * @param secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
   * @param options - Options for the signature
   * @returns The JSON Web Token string
   */
  declare export function sign(
    payload: string | Buffer | { [key: string]: any },
    secretOrPrivateKey: Secret,
    options?: SignOptions
  ): string;

  /**
   * Sign the given payload into a JSON Web Token string
   * @param payload - Payload to sign, could be an literal, buffer or string
   * @param secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
   * @param options - Options for the signature
   * @param callback - Callback to get the encoded token on
   */
  declare export function sign(
    payload: string | Buffer | { [key: string]: any },
    secretOrPrivateKey: Secret,
    callback: SignCallback
  ): void;

  declare export function sign(
    payload: string | Buffer | { [key: string]: any },
    secretOrPrivateKey: Secret,
    options: SignOptions,
    callback: SignCallback
  ): void;

  /**
   * Sign the given payload asynchronously into a JSON Web Token String
   * @param payload - Payload to sign, could be an literal, buffer or string
   * @param secretOrPrivateKey - Either the secret for HMAC algorithms, or the PEM encoded private key for RSA and ECDSA.
   * @param options - Options for the signature
   * @returns A promise providing JSON Web Token string
   */
  declare export function signAsync(
    payload: string | Buffer | { [key: string]: any },
    secretOrPrivateKey: Secret,
    options?: SignOptions
  ): Promise<string>;

  /**
   * Synchronously verify given token using a secret or a public key to get a decoded token
   * @param token - JWT string to verify
   * @param secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
   * @param options - Options for the verification
   * @returns The decoded token.
   */
  declare export function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions
  ): { [key: string]: any } | string;

  /**
   * Asynchronously verify given token using a secret or a public key to get a decoded token
   * @param token - JWT string to verify
   * @param secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
   * @param options - Options for the verification
   * @param callback - Callback to get the decoded token on
   */
  declare export function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    callback?: VerifyCallback
  ): void;

  declare export function verify(
    token: string,
    secretOrPublicKey: string | Buffer,
    options: VerifyOptions,
    callback?: VerifyCallback
  ): void;

  /**
   * Asynchronously verify given token using a secret or a public key to get a decoded token
   * @param token - the JWT string to verify
   * @param secretOrPublicKey - Either the secret for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA.
   * @returns - Promise returning the decoded token
   */
  declare export function verifyAsync(
    token: string,
    secretOrPublicKey: string | Buffer,
    options?: VerifyOptions
  ): Promise<{ [key: string]: any } | string>;

  /**
   * Returns the decoded payload without verifying if the signature is valid.
   * @param token - JWT string to decode
   * @param options - Options for decoding
   * @returns The decoded Token
   */
  declare export function decode(
    token: string,
    options?: DecodeOptions
  ):
    | null
    | {
        [key: string]: any
      }
    | string;
}
