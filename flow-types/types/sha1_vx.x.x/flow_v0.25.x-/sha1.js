declare module "sha1" {
  /**
   * js function for hashing messages with SHA1
   * @param message - a string or buffer to hash
   * @param options - an options object
   * @returns the resultant SHA1 hash of the given message
   */
  declare function main(
    message: string | Buffer,
    options?: Sha1Options
  ): string | Uint8Array;

  declare module.exports: typeof main;

  declare interface Sha1Options {
    asBytes?: boolean;
    asString?: boolean;
  }
}
