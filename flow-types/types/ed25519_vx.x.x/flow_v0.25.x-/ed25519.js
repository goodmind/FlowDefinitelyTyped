declare module "ed25519" {
  /**
   * The key material returned from a call to MakeKeypair().
   */
  declare export interface CurveKeyPair {
    /**
     * A Buffer containing the public portion of the Curve25519 key.
     */
    publicKey: Buffer;

    /**
     * A Buffer containing the private, secret portion of the Curve25519 key.
     */
    privateKey: Buffer;
  }

  /**
   * Uses the crytpographically strong random seed to generate a
   * Curve25519 key pair.
   * @return The public and private key pair.
   */
  declare export function MakeKeypair(seed: Buffer): CurveKeyPair;

  /**
   * Signs a plaintext message buffer using the private key generated using
   * MakeKeypair().
   * @return The signature calculated on the plaintext.
   */
  declare export function Sign(
    message: Buffer,
    privateKeyOrKeyPair: Buffer | CurveKeyPair
  ): Buffer;

  /**
   * Verifies a signature for a message buffer using a
   * public key generated using MakeKeypair().
   * @return True if the signature validates correctly, false otherwise.
   */
  declare export function Verify(
    message: Buffer,
    signature: Buffer,
    publicKey: Buffer
  ): boolean;
}
