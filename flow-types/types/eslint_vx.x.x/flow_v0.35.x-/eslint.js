declare module 'eslint' {
        import type {
          JSONSchema4
        } from 'json-schema';

	import typeof * as ESTree from 'estree';

	declare type AST$TokenType = "Boolean"
| "Null"
| "Identifier"
| "Keyword"
| "Punctuator"
| "JSXIdentifier"
| "JSXText"
| "Numeric"
| "String"
| "RegularExpression";

declare interface AST$Token {
type: AST$TokenType,
value: string,
range: AST$Range,
loc: AST$SourceLocation
} 

declare interface AST$SourceLocation {
start: ESTree.Position,
end: ESTree.Position
} 

declare type AST$Range = [number, number];

declare type AST$Program = {
comments: ESTree.Comment[],
tokens: AST$Token[],
loc: AST$SourceLocation,
range: AST$Range
} & ESTree.AST$Program

	declare interface Scope$ScopeManager {
scopes: Scope$Scope[],
globalScope: Scope$Scope | null,
acquire(node: ESTree.Node, inner?: boolean): Scope$Scope | null,
getDeclaredVariables(node: ESTree.Node): Scope$Variable[]
} 

declare interface Scope$Scope {
type: "block"
| "catch"
| "class"
| "for"
| "function"
| "function-expression-name"
| "global"
| "module"
| "switch"
| "with"
| "TDZ",
isStrict: boolean,
upper: Scope$Scope | null,
childScopes: Scope$Scope[],
variableScope: Scope$Scope,
block: ESTree.Node,
variables: Scope$Variable[],
set: Map<string, Scope$Variable>,
references: Scope$Reference[],
through: Scope$Reference[],
functionExpressionScope: boolean
} 

declare interface Scope$Variable {
name: string,
identifiers: ESTree.Identifier[],
references: Scope$Reference[],
defs: Scope$Definition[]
} 

declare interface Scope$Reference {
identifier: ESTree.Identifier,
from: Scope$Scope,
resolved: Scope$Variable | null,
writeExpr: ESTree.Node | null,
init: boolean,
isWrite(): boolean,
isRead(): boolean,
isWriteOnly(): boolean,
isReadOnly(): boolean,
isReadWrite(): boolean
} 

declare type Scope$DefinitionType = {
type: "CatchClause",
node: ESTree.CatchClause,
parent: null
}
| {
type: "ClassName",
node: ESTree.ClassDeclaration | ESTree.ClassExpression,
parent: null
}
| {
type: "FunctionName",
node: ESTree.FunctionDeclaration | ESTree.FunctionExpression,
parent: null
}
| {
type: "ImplicitGlobalVariable",
node: ESTree.AST$Program,
parent: null
}
| {
type: "ImportBinding",
node: ESTree.ImportSpecifier | ESTree.ImportDefaultSpecifier | ESTree.ImportNamespaceSpecifier,
parent: ESTree.ImportDeclaration
}
| {
type: "Parameter",
node: ESTree.FunctionDeclaration | ESTree.FunctionExpression | ESTree.ArrowFunctionExpression,
parent: null
}
| {
type: "TDZ",
node: any,
parent: null
}
| {
type: "Variable",
node: ESTree.VariableDeclarator,
parent: ESTree.VariableDeclaration
};

declare type Scope$Definition = Scope$DefinitionType & {
name: ESTree.Identifier
};
	declare export class SourceCode  {
text: string;
ast: AST$AST$Program;
lines: string[];
hasBOM: boolean;
parserServices: SourceCode$SourceCode$ParserServices;
scopeManager: Scope$Scope.Scope$ScopeManager;
visitorKeys: SourceCode$SourceCode$VisitorKeys;
constructor(text: string, ast: AST$AST$Program): this;
constructor(config: SourceCode$Linter$Config): this;
static splitLines(text: string): string[];
getText(node?: ESTree.Node, beforeCount?: number, afterCount?: number): string;
getLines(): string[];
getAllComments(): ESTree.Comment[];
getComments(node: ESTree.Node): {
leading: ESTree.Comment[],
trailing: ESTree.Comment[]
};
getJSDocComment(node: ESTree.Node): AST$AST$Token | null;
getNodeByRangeIndex(index: number): ESTree.Node | null;
isSpaceBetweenTokens(first: AST$AST$Token, second: AST$AST$Token): boolean;
getLocFromIndex(index: number): ESTree.Position;
getIndexFromLoc(location: ESTree.Position): number;
getTokenByRangeStart(offset: number, options?: {
includeComments?: boolean
}): AST$AST$Token | null;
getFirstToken(
node: ESTree.Node,
options?: SourceCode$SourceCode$CursorWithSkipOptions): AST$AST$Token | null;
getFirstTokens(
node: ESTree.Node,
options?: SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getLastToken(
node: ESTree.Node,
options?: SourceCode$SourceCode$CursorWithSkipOptions): AST$AST$Token | null;
getLastTokens(
node: ESTree.Node,
options?: SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getTokenBefore(
node: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithSkipOptions): AST$AST$Token | null;
getTokensBefore(
node: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getTokenAfter(
node: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithSkipOptions): AST$AST$Token | null;
getTokensAfter(
node: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getFirstTokenBetween(
left: ESTree.Node | AST$AST$Token | ESTree.Comment,
right: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithSkipOptions): AST$AST$Token | null;
getFirstTokensBetween(
left: ESTree.Node | AST$AST$Token | ESTree.Comment,
right: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getLastTokenBetween(
left: ESTree.Node | AST$AST$Token | ESTree.Comment,
right: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithSkipOptions): AST$AST$Token | null;
getLastTokensBetween(
left: ESTree.Node | AST$AST$Token | ESTree.Comment,
right: ESTree.Node | AST$AST$Token | ESTree.Comment,
options?: SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getTokensBetween(
left: ESTree.Node | AST$AST$Token | ESTree.Comment,
right: ESTree.Node | AST$AST$Token | ESTree.Comment,
padding?: number | SourceCode$SourceCode$FilterPredicate | SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
getTokens(node: ESTree.Node, beforeCount?: number, afterCount?: number): AST$AST$Token[];
getTokens(
node: ESTree.Node,
options: SourceCode$SourceCode$FilterPredicate | SourceCode$SourceCode$CursorWithCountOptions): AST$AST$Token[];
commentsExistBetween(left: ESTree.Node | AST$AST$Token, right: ESTree.Node | AST$AST$Token): boolean;
getCommentsBefore(nodeOrToken: ESTree.Node | AST$AST$Token): ESTree.Comment[];
getCommentsAfter(nodeOrToken: ESTree.Node | AST$AST$Token): ESTree.Comment[];
getCommentsInside(node: ESTree.Node): ESTree.Comment[]
}
	declare interface SourceCode$Config {
text: string,
ast: AST$AST$Program,
parserServices?: SourceCode$ParserServices,
scopeManager?: Scope$Scope.Scope$ScopeManager,
visitorKeys?: SourceCode$VisitorKeys,
rules?: {
[name: string]: Linter$RuleLevel | Linter$RuleLevelAndOptions
},
parser?: string,
parserOptions?: Linter$ParserOptions,
settings?: {
[name: string]: any
},
env?: {
[name: string]: boolean
},
globals?: {
[name: string]: boolean
}
} 

declare type SourceCode$ParserServices = any;

declare interface SourceCode$VisitorKeys {
[nodeType: string]: string[]
} 

declare type SourceCode$FilterPredicate = (tokenOrComment: AST$AST$Token | ESTree.Comment) => boolean;

declare type SourceCode$CursorWithSkipOptions = number | SourceCode$FilterPredicate | {
includeComments?: boolean,
filter?: SourceCode$FilterPredicate,
skip?: number
};

declare type SourceCode$CursorWithCountOptions = number | SourceCode$FilterPredicate | {
includeComments?: boolean,
filter?: SourceCode$FilterPredicate,
count?: number
};
	declare interface Rule$RuleModule {
create(context: Rule$RuleContext): Rule$RuleListener,
meta?: Rule$RuleMetaData
} 

declare type Rule$NodeTypes = $ElementType<ESTree.Node, "type">;

declare type Rule$NodeListener = $ObjMapi<{[k: Rule$NodeTypes]: any}, <T>(T) => (node: ESTree.Node) => void>;

declare type Rule$RuleListener = {
onCodePathStart(codePath: Rule$CodePath, node: ESTree.Node): void,
onCodePathEnd(codePath: Rule$CodePath, node: ESTree.Node): void,
onCodePathSegmentStart(segment: Rule$CodePathSegment, node: ESTree.Node): void,
onCodePathSegmentEnd(segment: Rule$CodePathSegment, node: ESTree.Node): void,
onCodePathSegmentLoop(
fromSegment: Rule$CodePathSegment,
toSegment: Rule$CodePathSegment,
node: ESTree.Node): void,
[key: string]: ((codePath: Rule$CodePath, node: ESTree.Node) => void)
| ((segment: Rule$CodePathSegment, node: ESTree.Node) => void)
| ((
fromSegment: Rule$CodePathSegment,
toSegment: Rule$CodePathSegment,
node: ESTree.Node) => void)
| ((node: ESTree.Node) => void)
| void
} & Rule$NodeListener


declare interface Rule$CodePath {
id: string,
initialSegment: Rule$CodePathSegment,
finalSegments: Rule$CodePathSegment[],
returnedSegments: Rule$CodePathSegment[],
thrownSegments: Rule$CodePathSegment[],
currentSegments: Rule$CodePathSegment[],
upper: Rule$CodePath | null,
childCodePaths: Rule$CodePath[]
} 

declare interface Rule$CodePathSegment {
id: string,
nextSegments: Rule$CodePathSegment[],
prevSegments: Rule$CodePathSegment[],
reachable: boolean
} 

declare interface Rule$RuleMetaData {
docs?: {
description?: string,
category?: string,
recommended?: boolean,
url?: string
},
messages?: {
[messageId: string]: string
},
fixable?: "code" | "whitespace",
schema?: JSONSchema4 | JSONSchema4[],
deprecated?: boolean
} 

declare interface Rule$RuleContext {
id: string,
options: any[],
settings: {
[name: string]: any
},
parserPath: string,
parserOptions: Linter$Linter$ParserOptions,
parserServices: SourceCode$SourceCode$ParserServices,
getAncestors(): ESTree.Node[],
getDeclaredVariables(node: ESTree.Node): Scope$Scope.Scope$Variable[],
getFilename(): string,
getScope(): Scope$Scope.Scope$Scope,
getSourceCode(): SourceCode,
markVariableAsUsed(name: string): boolean,
report(descriptor: Rule$ReportDescriptor): void
} 

declare type Rule$ReportDescriptor = Rule$ReportDescriptorMessage & Rule$ReportDescriptorLocation & Rule$ReportDescriptorOptions;

declare type Rule$ReportDescriptorMessage = {
message: string
} | {
messageId: string
};

declare type Rule$ReportDescriptorLocation = {
node: ESTree.Node
} | {
loc: AST$AST$SourceLocation | {
line: number,
column: number
}
};

declare interface Rule$ReportDescriptorOptions {
data?: {
[key: string]: string
},
fix(fixer: Rule$RuleFixer): null | Rule$Fix | IterableIterator<Rule$Fix>
} 

declare interface Rule$RuleFixer {
insertTextAfter(nodeOrToken: ESTree.Node | AST$AST$Token, text: string): Rule$Fix,
insertTextAfterRange(range: AST$AST$Range, text: string): Rule$Fix,
insertTextBefore(nodeOrToken: ESTree.Node | AST$AST$Token, text: string): Rule$Fix,
insertTextBeforeRange(range: AST$AST$Range, text: string): Rule$Fix,
remove(nodeOrToken: ESTree.Node | AST$AST$Token): Rule$Fix,
removeRange(range: AST$AST$Range): Rule$Fix,
replaceText(nodeOrToken: ESTree.Node | AST$AST$Token, text: string): Rule$Fix,
replaceTextRange(range: AST$AST$Range, text: string): Rule$Fix
} 

declare interface Rule$Fix {
range: AST$AST$Range,
text: string
} 
	declare export class Linter  {
version: string;
verify(
code: SourceCode | string,
config: Linter$SourceCode$Config,
filename?: string): Linter$Linter$LintMessage[];
verify(
code: SourceCode | string,
config: Linter$SourceCode$Config,
options: Linter$Linter$LintOptions): Linter$Linter$LintMessage[];
verifyAndFix(
code: string,
config: Linter$SourceCode$Config,
filename?: string): Linter$Linter$FixReport;
verifyAndFix(
code: string,
config: Linter$SourceCode$Config,
options: Linter$Linter$FixOptions): Linter$Linter$FixReport;
getSourceCode(): SourceCode;
defineRule(name: string, rule: Rule$Rule$RuleModule): void;
defineRules(rules: {
[name: string]: Rule$Rule$RuleModule
}): void;
getRules(): Map<string, Rule$Rule$RuleModule>;
defineParser(name: string, parser: Linter$Linter$ParserModule): void
}
	declare type Linter$Severity = 0 | 1 | 2;

declare type Linter$RuleLevel = Linter$Severity | "off" | "warn" | "error";

declare type Linter$RuleLevelAndOptions = {
0: Linter$RuleLevel
} & Array<any>


declare interface Linter$Config {
text: string,
ast: AST$AST$Program,
parserServices?: SourceCode$ParserServices,
scopeManager?: Scope$Scope.Scope$ScopeManager,
visitorKeys?: SourceCode$VisitorKeys,
rules?: {
[name: string]: Linter$RuleLevel | Linter$RuleLevelAndOptions
},
parser?: string,
parserOptions?: Linter$ParserOptions,
settings?: {
[name: string]: any
},
env?: {
[name: string]: boolean
},
globals?: {
[name: string]: boolean
}
} 

declare interface Linter$ParserOptions {
ecmaVersion?: 3
| 5
| 6
| 7
| 8
| 9
| 2015
| 2016
| 2017
| 2018,
sourceType?: "script" | "module",
ecmaFeatures?: {
globalReturn?: boolean,
impliedStrict?: boolean,
jsx?: boolean,
experimentalObjectRestSpread?: boolean,
[key: string]: any
},
[key: string]: any
} 

declare interface Linter$LintOptions {
filename?: string,
preprocess?: (code: string) => string[],
postprocess?: (problemLists: Linter$LintMessage[][]) => Linter$LintMessage[],
allowInlineConfig?: boolean,
reportUnusedDisableDirectives?: boolean
} 

declare interface Linter$LintMessage {
column: number,
line: number,
endColumn?: number,
endLine?: number,
ruleId: string | null,
message: string,
nodeType: string,
fatal?: true,
severity: Linter$Severity,
fix?: Rule$Rule$Fix,
source: string | null
} 

declare type Linter$FixOptions = {
fix?: boolean
} & Linter$LintOptions


declare interface Linter$FixReport {
fixed: boolean,
output: string,
messages: Linter$LintMessage[]
} 

declare type Linter$ParserModule = {
parse(text: string, options?: any): AST$AST$Program
} | {
parseForESLint(text: string, options?: any): Linter$ESLintParseResult
};

declare interface Linter$ESLintParseResult {
ast: AST$AST$Program,
parserServices?: SourceCode$SourceCode$ParserServices,
scopeManager?: Scope$Scope.Scope$ScopeManager,
visitorKeys?: SourceCode$SourceCode$VisitorKeys
} 
	declare export class CLIEngine  {
version: string;
constructor(options: CLIEngine$CLIEngine$Options): this;
executeOnFiles(patterns: string[]): CLIEngine$CLIEngine$LintReport;
resolveFileGlobPatterns(patterns: string[]): string[];
getConfigForFile(filePath: string): Linter$Linter$Config;
executeOnText(text: string, filename?: string): CLIEngine$CLIEngine$LintReport;
addPlugin(name: string, pluginObject: any): void;
isPathIgnored(filePath: string): boolean;
getFormatter(format?: string): CLIEngine$CLIEngine$Formatter;
getRules(): Map<string, Rule$Rule$RuleModule>;
static getErrorResults(results: CLIEngine$CLIEngine$LintResult[]): CLIEngine$CLIEngine$LintResult[];
static outputFixes(report: CLIEngine$CLIEngine$LintReport): void
}
	declare class CLIEngine$Options  {
allowInlineConfig: boolean;
baseConfig: false | {
[name: string]: any
};
cache: boolean;
cacheFile: string;
cacheLocation: string;
configFile: string;
cwd: string;
envs: string[];
extensions: string[];
fix: boolean;
globals: string[];
ignore: boolean;
ignorePath: string;
ignorePattern: string | string[];
useEslintrc: boolean;
parser: string;
parserOptions: Linter$Linter$ParserOptions;
plugins: string[];
rules: {
[name: string]: Linter$Linter$RuleLevel | Linter$Linter$RuleLevelAndOptions
};
rulePaths: string[];
reportUnusedDisableDirectives: boolean
}

declare interface CLIEngine$LintResult {
filePath: string,
messages: Linter$Linter$LintMessage[],
errorCount: number,
warningCount: number,
fixableErrorCount: number,
fixableWarningCount: number,
output?: string,
source?: string
} 

declare interface CLIEngine$LintReport {
results: CLIEngine$LintResult[],
errorCount: number,
warningCount: number,
fixableErrorCount: number,
fixableWarningCount: number
} 

declare type CLIEngine$Formatter = (results: CLIEngine$LintResult[]) => string;
	declare export class RuleTester  {
constructor(config?: any): this;
run(
name: string,
rule: Rule$Rule$RuleModule,
tests: {
valid?: Array<string | RuleTester$RuleTester$ValidTestCase>,
invalid?: RuleTester$RuleTester$InvalidTestCase[]
}): void
}
	declare interface RuleTester$ValidTestCase {
code: string,
options?: any,
filename?: string,
parserOptions?: Linter$Linter$ParserOptions,
settings?: {
[name: string]: any
},
parser?: string,
globals?: {
[name: string]: boolean
}
} 

declare type RuleTester$InvalidTestCase = {
errors: number | Array<RuleTester$TestCaseError | string>,
output?: string | null
} & RuleTester$ValidTestCase


declare interface RuleTester$TestCaseError {
message?: string | RegExp,
messageId?: string,
type?: string,
data?: any,
line?: number,
column?: number,
endLine?: number,
endColumn?: number
} 
    }
