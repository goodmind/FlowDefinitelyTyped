declare module "rollup-plugin-buble" {
  import type { Plugin } from "rollup";

  import type { TransformOptions } from "buble";

  declare export type Options = {
    include?: Array<string | RegExp> | string | RegExp | null,
    exclude?: Array<string | RegExp> | string | RegExp | null
  } & TransformOptions;

  declare export default function buble(options?: Options): Plugin;
}
