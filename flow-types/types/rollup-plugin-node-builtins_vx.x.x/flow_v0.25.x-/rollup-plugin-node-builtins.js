declare module "rollup-plugin-node-builtins" {
  import type { Plugin } from "rollup";

  declare export interface Options {
    crypto?: boolean;
    fs?: boolean;
  }
  declare export default function builtins(options?: Options): Plugin;
}
