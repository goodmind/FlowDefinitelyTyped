declare module "rollup-plugin-delete" {
  import type { Plugin } from "rollup";

  declare export type Options = {
    /**
     * Patterns of files and folders to be deleted.
     * @default []
     */
    +targets: $ReadOnlyArray<string> | string,

    /**
     * Outputs removed files and folders to console.
     * @default false
     */
    +verbose?: boolean
  } & del.Options;

  declare export default function Plugin(options?: Options): Plugin;
}
