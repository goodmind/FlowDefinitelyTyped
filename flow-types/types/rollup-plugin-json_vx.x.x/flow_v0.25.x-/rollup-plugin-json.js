declare module "rollup-plugin-json" {
  import type { Plugin } from "rollup";

  declare export interface Options {
    /**
     * All JSON files will be parsed by default, but you can also specifically include/exclude files
     */
    include?: string | string[];
    exclude?: string | string[];

    /**
     * for tree-shaking, properties will be declared as variables, using either `var` or `const`
     * @default false
     */
    preferConst?: boolean;

    /**
     * specify indentation for the generated default export — defaults to '\t'
     * @default '\t'
     */
    indent?: string;
  }
  declare export default function json(options?: Options): Plugin;
}
