declare module "rollup-plugin-commonjs" {
  import type { Plugin } from "rollup";

  declare export type IgnoreFunction = (id: string) => boolean;
  declare export interface Options {
    /**
     * Non-CommonJS modules will be ignored, but you can also
     * specifically include files.
     * @default undefined
     */
    include?: string | Array<string | RegExp>;

    /**
     * Non-CommonJS modules will be ignored, but you can also
     * specifically exclude files.
     * @default undefined
     */
    exclude?: string | Array<string | RegExp>;

    /**
     * Search for files other than .js files (must already
     * be transpiled by a previous plugin).
     * @default [ '.js' ]
     */
    extensions?: string[];

    /**
     * If `true`, then uses of `global` won't be dealt with by this plugin.
     * @default false
     */
    ignoreGlobal?: boolean;

    /**
     * If false, then skip sourceMap generation for CommonJS modules.
     * @default true
     */
    sourceMap?: boolean;

    /**
     * Explicitly specify unresolvable named exports.
     * @default undefined
     */
    namedExports?: {
      [key: string]: string[]
    };

    /**
     * Sometimes you have to leave require statements
     * unconverted. Pass an array containing the IDs
     * or a `id => boolean` function. Only use this
     * option if you know what you're doing!
     * @default undefined
     */
    ignore?: IgnoreFunction | string[];
  }
  declare export default function commonjs(options?: Options): Plugin;
}
