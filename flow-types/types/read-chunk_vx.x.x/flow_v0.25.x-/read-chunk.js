declare module "read-chunk" {
  declare module.exports: typeof ReadChunk;

  /**
   * Asynchronous: Reads a chunk from a file. Returns a Promise<Buffer>.
   * @param {string} filePath The path to the file.
   * @param {number} startingPosition Position to start reading.
   * @param {number} length Number of bytes to read.
   * @return {Promise<Buffer>} Returns a Promise<Buffer>.
   */
  declare function ReadChunk(
    filePath: string,
    startingPosition: number,
    length: number
  ): Promise<Buffer>;

  declare var npm$namespace$ReadChunk: {
    sync: typeof ReadChunk$sync
  };

  /**
   * Synchronous: Reads a chunk from a file. Returns a Buffer.
   * @param {string} filePath The path to the file.
   * @param {number} startingPosition Position to start reading.
   * @param {number} length Number of bytes to read.
   * @return {Buffer} Returns a Buffer.
   */
  declare function ReadChunk$sync(
    filePath: string,
    startingPosition: number,
    length: number
  ): Buffer;
}
