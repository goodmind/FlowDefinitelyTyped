declare module "create-xpub" {
  declare export default typeof createXpub;

  /**
   * Creates a Base58 encoded extended public key (xpub) for use in a
   * [BIP32 hierarchical deterministic wallet](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki).
   *
   * Tip: If you're working with ledgerjs you can pass the output of
   * [`getWalletPublicKey()`](http://ledgerhq.github.io/ledgerjs/docs/#btcgetwalletpublickey) almost directly in.
   * @returns A Base58 encoded extended public key.
   */
  declare function createXpub(options: createXpub$Options): string;

  declare var npm$namespace$createXpub: {
    mainnet: typeof createXpub$mainnet,
    testnet: typeof createXpub$testnet
  };

  /**
   * Mainnet (xpub) version bytes.
   */
  declare var createXpub$mainnet: 76067358;

  /**
   * Testnet (tpub) version bytes.
   */
  declare var createXpub$testnet: 70617039;

  declare interface createXpub$Options {
    /**
     * Network version bytes.
     * @default 0x0488B21E
     */
    networkVersion?: number;

    /**
     * The depth of the derived key.
     */
    depth: number;

    /**
     * The child number.
     */
    childNumber: number;

    /**
     * The chain code.
     */
    chainCode: string;

    /**
     * The public key in compressed or uncompressed form.
     */
    publicKey: string;
  }
}
