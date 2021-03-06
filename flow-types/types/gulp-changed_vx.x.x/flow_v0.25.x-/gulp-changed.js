declare module "gulp-changed" {
  import type { Transform } from "stream";

  declare interface IComparator {
    /**
     * @param stream Should be used to queue sourceFile if it passes some comparison
     * @param callback Should be called when done
     * @param sourceFile File to operate on
     * @param destPath Destination for sourceFile as an absolute path
     */
    (
      stream: Transform,
      callback: Function,
      sourceFile: File,
      destPath: string
    ): void;
  }
  declare interface IDestination {
    (file: string | Buffer): string;
  }
  declare interface IOptions {
    /**
     * The working directory the folder is relative to.
     * @default process.cwd()
     */
    cwd?: string;

    /**
     * Extension of the destination files.
     */
    extension?: string;

    /**
     * Function that determines whether the source file is different from the destination file.
     * @default changed.compareLastModifiedTime
     */
    hasChanged?: IComparator;
  }
  declare interface IGulpChanged {
    (
      destination: string | IDestination,
      options?: IOptions
    ): NodeJS.ReadWriteStream;
    compareLastModifiedTime: IComparator;
    compareSha1Digest: IComparator;
  }
  declare var changed: IGulpChanged;
  declare module.exports: typeof changed;
}
