declare module "gulp-gzip" {
  declare interface gzip$Gzip {
    (options?: gzip$Options): NodeJS.ReadWriteStream;
  }

  declare interface gzip$Options {
    /**
     * Appends .gz file extension if true.
     * @default true
     */
    append?: boolean;

    /**
     * Appends an arbitrary extension to the filename. Disables append and preExtension options.
     */
    extension?: string;

    /**
     * Appends an arbitrary pre-extension to the filename. Disables append and extension options.
     */
    preExtension?: string;

    /**
     * Minimum size required to compress a file.
     * @default false
     */
    threshold?: number | string | boolean;

    /**
     * Options object to pass through to zlib.Gzip.
     * See <a href='https://nodejs.org/api/zlib.html#zlib_options'>zlib</a> documentation for more information.
     */
    gzipOptions?: zlib.ZlibOptions;
  }
  declare var gzip: gzip$gzip$Gzip;
  declare module.exports: typeof gzip;
}
