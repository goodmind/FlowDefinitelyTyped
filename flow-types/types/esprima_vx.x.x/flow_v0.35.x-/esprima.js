declare module 'esprima' {
        import typeof * as ESTree from 'estree';

	declare export var version: string;
	declare export function parseScript(
input: string,
config?: ParseOptions,
delegate?: (node: ESTree.Node, meta: any) => void): Program

	declare export function parseModule(
input: string,
config?: ParseOptions,
delegate?: (node: ESTree.Node, meta: any) => void): Program

	declare export function tokenize(input: string, config?: TokenizeOptions): Token[]

	declare export type Program = {
tokens?: Token[]
} & ESTree.Program

	declare export interface Token {
type: string,
value: string
} 
	declare export interface ParseOptions {
jsx?: boolean,
range?: boolean,
loc?: boolean,
tolerant?: boolean,
tokens?: boolean,
comment?: boolean
} 
	declare export interface TokenizeOptions {
tolerant?: boolean,
range?: boolean,
loc?: boolean,
comment?: boolean
} 
	declare export var Syntax: {
ArrayExpression: "ArrayExpression",
ArrayPattern: "ArrayPattern",
ArrowFunctionExpression: "ArrowFunctionExpression",
AssignmentExpression: "AssignmentExpression",
AssignmentPattern: "AssignmentPattern",
AwaitExpression: "AwaitExpression",
BinaryExpression: "BinaryExpression",
BlockStatement: "BlockStatement",
BreakStatement: "BreakStatement",
CallExpression: "CallExpression",
CatchClause: "CatchClause",
ClassBody: "ClassBody",
ClassDeclaration: "ClassDeclaration",
ClassExpression: "ClassExpression",
ConditionalExpression: "ConditionalExpression",
ContinueStatement: "ContinueStatement",
DebuggerStatement: "DebuggerStatement",
DoWhileStatement: "DoWhileStatement",
EmptyStatement: "EmptyStatement",
ExportAllDeclaration: "ExportAllDeclaration",
ExportDefaultDeclaration: "ExportDefaultDeclaration",
ExportNamedDeclaration: "ExportNamedDeclaration",
ExportSpecifier: "ExportSpecifier",
ExpressionStatement: "ExpressionStatement",
ForInStatement: "ForInStatement",
ForOfStatement: "ForOfStatement",
ForStatement: "ForStatement",
FunctionDeclaration: "FunctionDeclaration",
FunctionExpression: "FunctionExpression",
Identifier: "Identifier",
IfStatement: "IfStatement",
Import: "Import",
ImportDeclaration: "ImportDeclaration",
ImportDefaultSpecifier: "ImportDefaultSpecifier",
ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
ImportSpecifier: "ImportSpecifier",
LabeledStatement: "LabeledStatement",
Literal: "Literal",
LogicalExpression: "LogicalExpression",
MemberExpression: "MemberExpression",
MetaProperty: "MetaProperty",
MethodDefinition: "MethodDefinition",
NewExpression: "NewExpression",
ObjectExpression: "ObjectExpression",
ObjectPattern: "ObjectPattern",
Program: "Program",
Property: "Property",
RestElement: "RestElement",
ReturnStatement: "ReturnStatement",
SequenceExpression: "SequenceExpression",
SpreadElement: "SpreadElement",
Super: "Super",
SwitchCase: "SwitchCase",
SwitchStatement: "SwitchStatement",
TaggedTemplateExpression: "TaggedTemplateExpression",
TemplateElement: "TemplateElement",
TemplateLiteral: "TemplateLiteral",
ThisExpression: "ThisExpression",
ThrowStatement: "ThrowStatement",
TryStatement: "TryStatement",
UnaryExpression: "UnaryExpression",
UpdateExpression: "UpdateExpression",
VariableDeclaration: "VariableDeclaration",
VariableDeclarator: "VariableDeclarator",
WhileStatement: "WhileStatement",
WithStatement: "WithStatement",
YieldExpression: "YieldExpression"
};
    }
