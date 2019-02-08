declare var npm$namespace$SRP: {
  computeVerifier: typeof SRP$computeVerifier,
  genKey: typeof SRP$genKey,
  params: typeof SRP$params
};
export interface SRP$Params {
  N_length_bits: number;
  N: BigNum;
  g: BigNum;
  hash: string;
}

declare export var SRP$params: {
  [bits: string]: SRP$Params
};

/**
 * The verifier is calculated as described in Section 3 of [SRP-RFC].
 * We give the algorithm here for convenience.
 *
 * The verifier (v) is computed based on the salt (s), user name (I),
 * password (P), and group parameters (N, g).
 *
 *          x = H(s | H(I | ":" | P))
 *          v = g^x % N
 * @param {SRP$Params} params group parameters, with .N, .g, .hash
 * @param {Buffer} salt salt
 * @param {Buffer} I user identity
 * @param {Buffer} P user password
 * @returns {Buffer}
 */
declare export function SRP$computeVerifier(
  SRP$params: SRP$Params,
  salt: Buffer,
  I: Buffer,
  P: Buffer
): Buffer;

/**
 * Generate a random key.
 * @param {number} bytes length of key (default=32)
 * @param {function} callback function to call with err,key
 */
declare export function SRP$genKey(
  bytes: number,
  callback: (error: Error, key: Buffer) => void
): void;

/**
 * Generate a random 32-byte key.
 * @param {function} callback function to call with err,key
 */
declare export function SRP$genKey(
  callback: (error: Error, key: Buffer) => void
): void;

declare export class SRP$Client {
  constructor(
    SRP$params: SRP$Params,
    salt: Buffer,
    identity: Buffer,
    password: Buffer,
    secret1: Buffer
  ): this;
  computeA(): Buffer;
  setB(B: Buffer): void;
  computeM1(): Buffer;
  checkM2(M2: Buffer): void;
  computeK(): Buffer;
}

declare export class SRP$Server {
  constructor(SRP$params: SRP$Params, verifier: Buffer, secret2: Buffer): this;
  computeB(): Buffer;
  setA(A: Buffer): void;
  checkM1(M1: Buffer): Buffer;
  computeK(): Buffer;
}
declare module "srp" {
  import typeof * as BigNum from "bignum";

  declare export default typeof SRP;
}
