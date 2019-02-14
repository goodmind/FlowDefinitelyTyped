declare module "touch" {
  declare function touch<T>(
    filename: string,
    cb?: (err?: NodeJS.ErrnoException) => T
  ): Promise<T>;

  declare function touch<T>(
    filename: string,
    options?: touch$Options,
    cb?: (err?: NodeJS.ErrnoException) => T
  ): Promise<T>;

  declare var npm$namespace$touch: {
    sync: typeof touch$sync,
    ftouch: typeof touch$ftouch,
    ftouchSync: typeof touch$ftouchSync
  };
  declare interface touch$Options {
    force?: boolean;
    time?: Date | string | number;
    atime?: boolean | Date;
    mtime?: boolean | Date;
    ref?: string;
    nocreate?: boolean;
    closeAfter?: boolean;
  }

  declare function touch$sync(filename: string, options?: touch$Options): void;

  declare function touch$ftouch<T>(
    fd: number,
    cb?: (err?: NodeJS.ErrnoException) => T
  ): Promise<T>;

  declare function touch$ftouch<T>(
    fd: number,
    options?: touch$Options,
    cb?: (err?: NodeJS.ErrnoException) => T
  ): Promise<T>;

  declare function touch$ftouchSync(fd: number, options?: touch$Options): void;

  declare export default typeof touch;
}
