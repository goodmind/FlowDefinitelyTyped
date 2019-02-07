declare module "checksum" {
  declare var npm$namespace$checksum: {
    file: typeof checksum$file
  };

  /**
   * Options object for all functions
   */
  declare interface checksum$ChecksumOptions {
    /**
     * Algorithm to use, default 'sha1'
     * Can be 'sha1' or 'md5'  (see module 'crypto').
     */
    algorithm?: string;
  }

  /**
   * Generate the checksum for a file on disk
   * @param filename The file name
   * @param callback Callback which is called with the result or an error
   */
  declare function checksum$file(
    filename: string,
    callback: (error: Error, hash: string) => void
  ): void;

  /**
   * Generate the checksum for a file on disk
   * @param filename The file name
   * @param options Options object to indicate hash algo
   * @param callback Callback which is called with the result or an error
   */
  declare function checksum$file(
    filename: string,
    options: checksum$ChecksumOptions,
    callback: (error: Error, hash: string) => void
  ): void;

  /**
   * Generates a checksum for the given value
   * @param value Any value
   * @param options Allows to set the algorithm
   * @returns Checksum
   */
  declare function checksum(
    value: any,
    options?: checksum$checksum$ChecksumOptions
  ): string;

  declare module.exports: typeof checksum;
}
