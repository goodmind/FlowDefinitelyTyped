declare module "decompress" {
  declare module.exports: typeof decompress;

  declare function decompress(
    input: string | Buffer,
    output?: string | decompress$decompress$DecompressOptions,
    opts?: decompress$decompress$DecompressOptions
  ): Promise<decompress$decompress$File[]>;

  declare interface decompress$File {
    data: Buffer;
    mode: number;
    mtime: string;
    path: string;
    type: string;
  }

  declare interface decompress$DecompressOptions {
    /**
     * Filter out files before extracting
     */
    filter?: (file: decompress$File) => boolean;

    /**
     * Map files before extracting
     */
    map?: (file: decompress$File) => decompress$File;

    /**
     * Array of plugins to use.
     * Default: [decompressTar(), decompressTarbz2(), decompressTargz(), decompressUnzip()]
     */
    plugins?: any[];

    /**
     * Remove leading directory components from extracted files.
     * Default: 0
     */
    strip?: number;
  }
}
