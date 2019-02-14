declare module "empty-dir" {
  declare export default typeof emptyDir;

  declare function emptyDir(
    dir: string,
    cb: (err: NodeJS.ErrnoException, isEmpty: boolean) => void
  ): void;

  declare function emptyDir(
    dir: string,
    filter: (path: string) => boolean,
    cb: (err: NodeJS.ErrnoException, isEmpty: boolean) => void
  ): void;

  declare var npm$namespace$emptyDir: {
    sync: typeof emptyDir$sync
  };
  declare function emptyDir$sync(
    dir: string,
    filter?: (path: string) => boolean
  ): boolean;
}
