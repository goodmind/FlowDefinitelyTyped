declare module "rollup-plugin-sourcemaps" {
  import type { Plugin } from "rollup";

  declare export type ReadFileCallback = (
    err: NodeJS.ErrnoException,
    data: string
  ) => void;
  declare export type ReadFileFunction = (
    file: string | Buffer | number,
    encoding: string,
    callback: ReadFileCallback
  ) => void;
  declare export interface Options {
    include?: Array<string | RegExp> | string | RegExp | null;
    exclude?: Array<string | RegExp> | string | RegExp | null;
    readFile?: ReadFileFunction;
  }
  declare export default function sourcemaps(options?: Options): Plugin;
}
