declare module "string-replace-webpack-plugin" {
  import type { Plugin, RuleSetUse } from "webpack";

  declare module.exports: typeof StringReplacePlugin;

  declare class StringReplacePlugin mixins Plugin {
    static replace(
      options: StringReplacePlugin$StringReplacePlugin$Options,
      nextLoaders?: string
    ): RuleSetUse;
    static replace(
      prevLoaders: string,
      options: StringReplacePlugin$StringReplacePlugin$Options,
      nextLoaders?: string
    ): RuleSetUse;
  }
  declare interface StringReplacePlugin$Options {
    replacements: StringReplacePlugin$ReplacementItem[];
  }

  declare interface StringReplacePlugin$ReplacementItem {
    /**
     * a regex to match against the file contents
     */
    pattern: RegExp;

    /**
     * an ECMAScript string replacement function
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
     */
    replacement: (substring: string, ...args: any[]) => string;
  }
}
