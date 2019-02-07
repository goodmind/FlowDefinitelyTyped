declare module "jws" {
  import typeof * as events from "events";

  import typeof * as stream from "stream";

  /**
   * (Synchronous) Return a JSON Web Signature for a header
   * and a payload.
   */
  declare export function sign(options: SignOptions): string;

  /**
 * (Synchronous) Returns true or false for whether a signature
 * matches a secret or key.
 * @param signature JWS Signature
 * @param algorithm Algorithm
 * @param secretOrKey string or buffer containing either the secret
for HMAC algorithms, or the PEM encoded public key for RSA and ECDSA
 */
  declare export function verify(
    signature: string,
    algorithm: Algorithm,
    secretOrKey: string | Buffer
  ): boolean;

  /**
   * (Synchronous) Returns the decoded header, decoded payload,
   * and signature parts of the JWS Signature.
   */
  declare export function decode(signature: string): Signature;

  /**
   * Returns a new SignStream object.
   */
  declare export function createSign(options: SignOptions): SignStream;

  /**
   * Returns a new VerifyStream object.
   */
  declare export function createVerify(options?: VerifyOptions): VerifyStream;

  /**
   * A Readable Stream that emits a single data event, the
   * calculated signature, when done.
   */
  declare export type SignStream = {
    /**
     * A Writable Stream that expects the JWS payload. Do not
     * use if you passed a payload option to the constructor.
     *
     *   Example: payloadStream.pipe(signer.payload);
     */
    payload: stream.Writable,

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    secret: any,

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    key: any,

    /**
     * A Writable Stream. Expects the JWS secret for HMAC, or
     * the privateKey for ECDSA and RSA. Do not use if you
     * passed a secret or key option to the constructor.
     *
     * Example: privateKeyStream.pipe(signer.privateKey);
     */
    privateKey: any
  } & stream.Readable;

  /**
   * This is a Readable Stream that emits a single data event,
   * the result of whether or not that signature was valid.
   */
  declare export type VerifyStream = {
    /**
     * A Writable Stream that expects a JWS Signature. Do not
     * use if you passed a signature option to the constructor.
     */
    signature: stream.Writable,

    /**
     * Secret.  Can be a string, buffer, or object.
     */
    secret: any,

    /**
     * Key.  Can be a string, buffer, or object.
     */
    key: any,

    /**
     * A Writable Stream that expects a public key or secret.
     * Do not use if you passed a key or secret option to the
     * constructor.
     */
    publicKey: stream.Writable
  } & events.EventEmitter;

  declare export interface Signature {
    header: Header;
    payload: any;
    signature: string;
  }
  declare export interface SignOptions {
    header: Header;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    payload?: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    key?: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    secret?: any;

    /**
     * Can be a string, Buffer, Readable stream, or object.
     */
    privateKey?: any;
    encoding?: string | Buffer | stream.Readable;
  }
  declare export interface VerifyOptions {
    signature?: string | Buffer | stream.Readable;
    algorithm?: Algorithm | Buffer | stream.Readable;
    key?: string | stream.Readable | Buffer;
    secret?: string | stream.Readable | Buffer;
    publicKey?: string | stream.Readable | Buffer;
    encoding?: string | Buffer | stream.Readable;
  }
  declare export type Algorithm =
    | "HS256"
    | "HS384"
    | "HS512"
    | "RS256"
    | "RS384"
    | "RS512"
    | "ES256"
    | "ES384"
    | "ES512"
    | "PS256"
    | "PS384"
    | "PS512"
    | "none";
  declare export interface Header {
    alg: Algorithm;
    [name: string]: string;
  }
}
