declare module "file-exists" {
  declare module.exports: typeof fileExists;

  declare function fileExists(
    filepath: string,
    callback?: (err: Error | null, exists: boolean) => void
  ): void;

  declare function fileExists(
    filepath: string,
    options?: fileExists$fileExists$Options,
    callback?: (err: Error | null, exists: boolean) => void
  ): void;

  declare var npm$namespace$fileExists: {
    sync: typeof fileExists$sync
  };
  declare function fileExists$sync(
    filepath: string,
    options?: fileExists$Options
  ): boolean;

  declare interface fileExists$Options {
    root?: string;
  }
}
