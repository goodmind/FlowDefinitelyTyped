declare module "stylelint-webpack-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof StylelintWebpackPlugin;

  declare class StylelintWebpackPlugin mixins Plugin {
    constructor(
      options?: StylelintWebpackPlugin$StylelintWebpackPlugin$Options
    ): this;
  }
  declare interface StylelintWebpackPlugin$Message {
    line: number;
    column: number;
    severity: string;
    text: string;
    rule: string;
  }

  declare type StylelintWebpackPlugin$Formatter = (
    messages: StylelintWebpackPlugin$Message[],
    source: string
  ) => string;

  declare interface StylelintWebpackPlugin$Options {
    configFile?: string;
    context?: string;
    emitErrors?: boolean;
    failOnError?: boolean;
    files?: string[];
    formatter?: StylelintWebpackPlugin$Formatter;
    lintDirtyModulesOnly?: boolean;
    syntax?: string;
    quiet?: boolean;
  }
}
