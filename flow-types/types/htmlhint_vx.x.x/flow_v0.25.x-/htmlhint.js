declare module "htmlhint" {
  declare export interface LintResult {
    evidence: string;
    line: number;
    col: number;
    message: string;
    rule: Rule;
  }
  declare export interface FormatOptions {
    indent?: number;
    colors?: boolean;
  }
  declare export interface Rule {
    id: string;
    description: string;
    link: string;
  }
  declare export interface RuleSet {
    [id: string]: boolean | string;
  }

  declare var npm$namespace$HTMLHint: {
    verify: typeof HTMLHint$verify,
    format: typeof HTMLHint$format
  };
  declare function HTMLHint$verify(
    fileContent: string,
    ruleSet?: RuleSet
  ): LintResult[];

  declare function HTMLHint$format(
    arrMessages: LintResult[],
    options?: FormatOptions
  ): string[];
}
