declare module "markdownlint" {
  declare function markdownlint(
    options: markdownlint$MarkdownlintOptions,
    callback: (
      err: Error | null,
      result: markdownlint$MarkdownlintResults
    ) => any
  ): void;

  declare var npm$namespace$markdownlint: {
    sync: typeof markdownlint$sync,
    readConfig: typeof markdownlint$readConfig,
    readConfigSync: typeof markdownlint$readConfigSync
  };
  declare function markdownlint$sync(
    options: markdownlint$MarkdownlintOptions
  ): markdownlint$MarkdownlintResults;

  declare function markdownlint$readConfig(
    file: string,
    callback: (
      err: Error | null,
      result: markdownlint$MarkdownlintConfig
    ) => any
  ): void;

  declare function markdownlint$readConfigSync(
    file: string
  ): markdownlint$MarkdownlintConfig;

  declare interface markdownlint$MarkdownlintConfig {
    [rule: string]:
      | boolean
      | {
          [key: string]: any
        };
  }

  declare interface markdownlint$MarkdownlintOptions {
    files?: $ReadOnlyArray<string> | string;
    strings?: {
      [identifier: string]: string
    };
    config?: markdownlint$MarkdownlintConfig;
    frontMatter?: RegExp;
    noInlineConfig?: boolean;
    resultVersion?: number;
  }

  declare interface markdownlint$MarkdownlintResult {
    lineNumber: number;
    ruleName: string;
    ruleAlias: string;
    ruleDescription: string;
    errorDetail?: string;
    errorContext: string;
    errorRange?: [number, number];
  }

  declare interface markdownlint$MarkdownlintResults {
    [source: string]:
      | markdownlint$MarkdownlintResult[]
      | ((useAlias?: boolean) => string);
    toString(useAlias?: boolean): string;
  }
  declare export default typeof markdownlint;
}
