declare module "rollup-plugin-node-globals" {
  import type { Plugin } from "rollup";

  declare export interface Options {
    include?: Array<string | RegExp> | string | RegExp | null;
    exclude?: Array<string | RegExp> | string | RegExp | null;
    sourceMap?: boolean;
    process?: boolean;
    global?: boolean;
    buffer?: boolean;
    dirname?: boolean;
    filename?: boolean;
    baseDir?: string;
  }
  declare export default function globals(options?: Options): Plugin;
}
