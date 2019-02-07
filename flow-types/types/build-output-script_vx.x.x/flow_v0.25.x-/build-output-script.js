declare module "build-output-script" {
  declare module.exports: typeof buildOutputScript;

  /**
   * Builds a P2PKH Bitcoin transaction output script from an array of P2PKH addresses and amounts.
   * Will also work with any Bitcoin derived cryptocurrencies with a single byte pubkey hash address prefix.
   *
   * The output script is returned as a hex string and can be passed directly in to ledgerjs.
   * @param outputs An array of one or more output objects.
   * @returns A (hex string) P2PKH transaction output script.
   */
  declare function buildOutputScript(
    outputs: [
      buildOutputScript$buildOutputScript$Output,
      "NO PRINT IMPLEMENTED: RestType"
    ]
  ): string;

  declare interface buildOutputScript$Output {
    /**
     * A valid P2PKH address.
     */
    address: string;

    /**
     * Value to send to `address` in satoshis.
     */
    value: number;
  }
}
