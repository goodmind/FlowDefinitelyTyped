declare module "bip32" {
  declare export interface NetworkType {
    wif: number;
    bip32: {
      public: number,
      private: number
    };
  }
  declare export class BIP32 {
    constructor(
      d: Buffer,
      Q: Buffer,
      chainCode: Buffer,
      network: NetworkType
    ): this;
    identifier: Buffer;
    fingerprint: Buffer;
    chainCode: Buffer;
    privateKey: Buffer;
    publicKey: Buffer;
    isNeutered(): boolean;
    neutered(): BIP32;
    toBase58(): string;
    toWIF(): string;
    derive(index: number): BIP32;
    deriveHardened(index: number): BIP32;
    derivePath(path: string): BIP32;
    sign(hash: Buffer): Buffer;
    verify(hash: Buffer, signature: Buffer): boolean;
  }

  /**
   * Returns a node
   * @param string base58 encoded string
   * @param network network type of the node
   */
  declare export function fromBase58(
    string: string,
    network?: NetworkType
  ): BIP32;

  /**
   * Returns a hardened node
   * @param privateKey node private key
   * @param chainCode 256-bits entropy extension
   * @param network network type of the node
   */
  declare export function fromPrivateKey(
    privateKey: Buffer,
    chainCode: Buffer,
    network?: NetworkType
  ): BIP32;

  /**
   * Returns a non-hardened node
   * @param publicKey node public key
   * @param chainCode 256-bits entropy extension
   * @param network network type of the node
   */
  declare export function fromPublicKey(
    publicKey: Buffer,
    chainCode: Buffer,
    network?: NetworkType
  ): BIP32;

  /**
   * Returns a hardened node
   * @param seed seed encoding node info
   * @param network network type of the node
   */
  declare export function fromSeed(seed: Buffer, network?: NetworkType): BIP32;
}
