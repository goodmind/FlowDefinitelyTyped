declare module 'stylelint' {
        declare export type FormatterType = "json" | "string" | "verbose" | "compact";
	declare export type SyntaxType = "scss" | "sass" | "less" | "sugarss";
	declare export interface LinterOptions {
code?: string,
codeFilename?: string,
config?: JSON,
configBasedir?: string,
configFile?: string,
configOverrides?: JSON,
cache?: boolean,
cacheLocation?: string,
files?: string | string[],
fix?: boolean,
formatter?: FormatterType,
ignoreDisables?: boolean,
reportNeedlessDisables?: boolean,
ignorePath?: boolean,
syntax?: SyntaxType,
customSyntax?: string
} 
	declare export interface LinterResult {
errored: boolean,
output: string,
postcssResults: any[],
results: LintResult[]
} 
	declare export interface LintResult {
source: string,
errored: boolean | void,
ignored: boolean | void,
warnings: string[],
deprecations: string[],
invalidOptionWarnings: any[]
} 
	
      declare var npm$namespace$formatters: {
        json: typeof formatters$json,
string: typeof formatters$string,
compact: typeof formatters$compact,
verbose: typeof formatters$verbose,
        
      }
declare function formatters$json(results: LintResult[]): string


declare function formatters$string(results: LintResult[]): string


declare function formatters$compact(results: LintResult[]): string


declare function formatters$verbose(results: LintResult[]): string

	declare export function lint(options?: LinterOptions): Promise<LinterResult>

	declare export type RuleOption = {
actual: any,
possible?: any,
optional?: false
} | {
actual?: any,
possible: any,
optional: true
};
	
      declare var npm$namespace$utils: {
        report: typeof utils$report,
ruleMessages: typeof utils$ruleMessages,
validateOptions: typeof utils$validateOptions,
checkAgainstRule: typeof utils$checkAgainstRule,
        
      }
declare function utils$report(
violation: {
ruleName: string,
result: LintResult,
message: string,
node: any,
index?: number,
word?: string,
line?: number
}): void


declare function utils$ruleMessages(ruleName: string, messages: {
[key: string]: any
}): typeof messages


declare function utils$validateOptions(result: LintResult, ruleName: string, ...options: RuleOption[]): boolean


declare function utils$checkAgainstRule(
options: {
ruleName: string,
ruleSettings: any,
root: any
},
callback: (warning: string) => void): void

	declare export function createPlugin(
ruleName: string,
plugin: (options: RuleOption[]) => (root: any, result: LintResult) => void): any

    }
