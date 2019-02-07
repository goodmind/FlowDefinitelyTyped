declare module "rev-hash" {
  /**
   * Create a hash for file revving
   * @param input Data to create a hash from.
   */
  declare function revHash(input: Buffer | string): string;

  declare module.exports: typeof revHash;
}
