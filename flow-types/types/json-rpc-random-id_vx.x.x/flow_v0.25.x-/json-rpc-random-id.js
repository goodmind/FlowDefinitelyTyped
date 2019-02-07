declare module "json-rpc-random-id" {
  /**
   * Returns a function that generates a random number
   * This number is to be used with web3 rpc
   */
  declare function IdIterator(options?: {
    max?: number,
    start?: number
  }): () => number;

  declare module.exports: typeof IdIterator;
}
