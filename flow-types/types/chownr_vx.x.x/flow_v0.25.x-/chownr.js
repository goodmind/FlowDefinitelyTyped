declare module "chownr" {
  import type { URL } from "url";

  declare export default typeof chownr;

  declare function chownr(
    path: chownr$PathLike,
    uid: number,
    gid: number,
    callback: (err: NodeJS.ErrnoException) => void
  ): void;

  declare var npm$namespace$chownr: {
    sync: typeof chownr$sync
  };
  declare function chownr$sync(
    path: chownr$PathLike,
    uid: number,
    gid: number
  ): void;

  declare type chownr$PathLike = string | Buffer | URL;
}
