declare module "gulp-newer" {
  declare interface IOptions {
    /**
     * Path to destination directory or file.
     */
    dest: string;

    /**
     * Source files will be matched to destination files with the provided extension.
     */
    ext?: string;

    /**
     * Map relative source paths to relative destination paths.
     */
    map?: (relativePath: string) => string;
  }
  declare interface IGulpNewer {
    /**
     * Create a transform stream that passes through files whose modification time
     * is more recent than the corresponding destination file's modification time.
     * @param dest Path to destination directory or file.
     */
    (dest: string): NodeJS.ReadWriteStream;

    /**
     * Create a transform stream that passes through files whose modification time
     * is more recent than the corresponding destination file's modification time.
     */
    (options: IOptions): NodeJS.ReadWriteStream;
  }
  declare var newer: IGulpNewer;
  declare module.exports: typeof newer;
}
