declare module "get-folder-size" {
  declare module.exports: typeof getFolderSize;

  declare function getFolderSize(
    folder: string,
    callback: (err: Error | null, size: number) => void
  ): void;

  declare function getFolderSize(
    folder: string,
    regexIgnorePattern: RegExp,
    callback: (err: Error | null, size: number) => void
  ): void;
}
