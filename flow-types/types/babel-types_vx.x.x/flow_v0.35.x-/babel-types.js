declare module 'babel-types' {
        declare export interface Comment {
value: string,
start: number,
end: number,
loc: SourceLocation
} 
	declare export type CommentBlock = {
type: "CommentBlock"
} & Comment

	declare export type CommentLine = {
type: "CommentLine"
} & Comment

	declare export interface SourceLocation {
start: {
line: number,
column: number
},
end: {
line: number,
column: number
}
} 
	declare export interface Node {
type: string,
leadingComments?: Comment[],
innerComments?: Comment[],
trailingComments?: Comment[],
start: number,
end: number,
loc: SourceLocation
} 
	declare export type ArrayExpression = {
type: "ArrayExpression",
elements: Array<null | Expression | SpreadElement>
} & Node

	declare export type AssignmentExpression = {
type: "AssignmentExpression",
operator: "="
| "+="
| "-="
| "*="
| "/="
| "%="
| "<<="
| ">>="
| ">>>="
| "|="
| "^="
| "&=",
left: LVal,
right: Expression
} & Node

	declare export type BinaryExpression = {
type: "BinaryExpression",
operator: "+"
| "-"
| "/"
| "%"
| "*"
| "**"
| "&"
| "|"
| ">>"
| ">>>"
| "<<"
| "^"
| "=="
| "==="
| "!="
| "!=="
| "in"
| "instanceof"
| ">"
| "<"
| ">="
| "<=",
left: Expression,
right: Expression
} & Node

	declare export type Directive = {
type: "Directive",
value: DirectiveLiteral
} & Node

	declare export type DirectiveLiteral = {
type: "DirectiveLiteral",
value: string
} & Node

	declare export type BlockStatement = {
type: "BlockStatement",
directives?: Directive[],
body: Statement[]
} & Node

	declare export type BreakStatement = {
type: "BreakStatement",
label: Identifier
} & Node

	declare export type CallExpression = {
type: "CallExpression",
callee: Expression | Super,
arguments: Array<Expression | SpreadElement>
} & Node

	declare export type CatchClause = {
type: "CatchClause",
param: Identifier,
body: BlockStatement
} & Node

	declare export type ConditionalExpression = {
type: "ConditionalExpression",
test: Expression,
consequent: Expression,
alternate: Expression
} & Node

	declare export type ContinueStatement = {
type: "ContinueStatement",
label: Identifier
} & Node

	declare export type DebuggerStatement = {
type: "DebuggerStatement"
} & Node

	declare export type DoWhileStatement = {
type: "DoWhileStatement",
test: Expression,
body: Statement
} & Node

	declare export type EmptyStatement = {
type: "EmptyStatement"
} & Node

	declare export type ExpressionStatement = {
type: "ExpressionStatement",
expression: Expression
} & Node

	declare export type File = {
type: "File",
program: Program,
comments: Comment[],
tokens: any[]
} & Node

	declare export type ForInStatement = {
type: "ForInStatement",
left: VariableDeclaration | LVal,
right: Expression,
body: Statement
} & Node

	declare export type ForStatement = {
type: "ForStatement",
init: VariableDeclaration | Expression,
test: Expression,
update: Expression,
body: Statement
} & Node

	declare export type FunctionDeclaration = {
type: "FunctionDeclaration",
id: Identifier,
params: LVal[],
body: BlockStatement,
generator: boolean,
async: boolean,
returnType?: TypeAnnotation,
typeParameters?: TypeParameterDeclaration
} & Node

	declare export type FunctionExpression = {
type: "FunctionExpression",
id: Identifier,
params: LVal[],
body: BlockStatement,
generator: boolean,
async: boolean,
returnType?: TypeAnnotation,
typeParameters?: TypeParameterDeclaration
} & Node

	declare export type Identifier = {
type: "Identifier",
name: string,
typeAnnotation?: TypeAnnotation
} & Node

	declare export type IfStatement = {
type: "IfStatement",
test: Expression,
consequent: Statement,
alternate: Statement
} & Node

	declare export type LabeledStatement = {
type: "LabeledStatement",
label: Identifier,
body: Statement
} & Node

	declare export type StringLiteral = {
type: "StringLiteral",
value: string
} & Node

	declare export type NumericLiteral = {
type: "NumericLiteral",
value: number
} & Node

	declare export type NullLiteral = {
type: "NullLiteral"
} & Node

	declare export type BooleanLiteral = {
type: "BooleanLiteral",
value: boolean
} & Node

	declare export type RegExpLiteral = {
type: "RegExpLiteral",
pattern: string,
flags?: string
} & Node

	declare export type LogicalExpression = {
type: "LogicalExpression",
operator: "||" | "&&",
left: Expression,
right: Expression
} & Node

	declare export type MemberExpression = {
type: "MemberExpression",
object: Expression | Super,
property: Expression,
computed: boolean
} & Node

	declare export type NewExpression = {
type: "NewExpression",
callee: Expression | Super,
arguments: Array<Expression | SpreadElement>
} & Node

	declare export type Program = {
type: "Program",
sourceType: "script" | "module",
directives?: Directive[],
body: Array<Statement | ModuleDeclaration>
} & Node

	declare export type ObjectExpression = {
type: "ObjectExpression",
properties: Array<ObjectProperty | ObjectMethod | SpreadProperty>
} & Node

	declare export type ObjectMethod = {
type: "ObjectMethod",
key: Expression,
kind: "get" | "set" | "method",
shorthand: boolean,
computed: boolean,
value: Expression,
decorators?: Decorator[],
id: Identifier,
params: LVal[],
body: BlockStatement,
generator: boolean,
async: boolean,
returnType?: TypeAnnotation,
typeParameters?: TypeParameterDeclaration
} & Node

	declare export type ObjectProperty = {
type: "ObjectProperty",
key: Expression,
computed: boolean,
value: Expression,
decorators?: Decorator[],
shorthand: boolean
} & Node

	declare export type RestElement = {
type: "RestElement",
argument: LVal,
typeAnnotation?: TypeAnnotation
} & Node

	declare export type ReturnStatement = {
type: "ReturnStatement",
argument: Expression
} & Node

	declare export type SequenceExpression = {
type: "SequenceExpression",
expressions: Expression[]
} & Node

	declare export type SwitchCase = {
type: "SwitchCase",
test: Expression,
consequent: Statement[]
} & Node

	declare export type SwitchStatement = {
type: "SwitchStatement",
discriminant: Expression,
cases: SwitchCase[]
} & Node

	declare export type ThisExpression = {
type: "ThisExpression"
} & Node

	declare export type ThrowStatement = {
type: "ThrowStatement",
argument: Expression
} & Node

	declare export type TryStatement = {
type: "TryStatement",
block: BlockStatement,
handler: CatchClause,
finalizer: BlockStatement
} & Node

	declare export type UnaryExpression = {
type: "UnaryExpression",
operator: "-"
| "+"
| "!"
| "~"
| "typeof"
| "void"
| "delete",
prefix: boolean,
argument: Expression
} & Node

	declare export type UpdateExpression = {
type: "UpdateExpression",
operator: "++" | "--",
prefix: boolean,
argument: Expression
} & Node

	declare export type VariableDeclaration = {
type: "VariableDeclaration",
declarations: VariableDeclarator[],
kind: "var" | "let" | "const"
} & Node

	declare export type VariableDeclarator = {
type: "VariableDeclarator",
id: LVal,
init: Expression
} & Node

	declare export type WhileStatement = {
type: "WhileStatement",
test: Expression,
body: Statement
} & Node

	declare export type WithStatement = {
type: "WithStatement",
object: Expression,
body: BlockStatement | Statement
} & Node

	declare export type AssignmentPattern = {
type: "AssignmentPattern",
left: Identifier,
right: Expression
} & Node

	declare export type ArrayPattern = {
type: "ArrayPattern",
elements: Expression[],
typeAnnotation?: TypeAnnotation
} & Node

	declare export type ArrowFunctionExpression = {
type: "ArrowFunctionExpression",
id: Identifier,
params: LVal[],
body: BlockStatement | Expression,
generator: boolean,
async: boolean,
expression: boolean,
returnType?: TypeAnnotation,
typeParameters?: TypeParameterDeclaration
} & Node

	declare export type ClassBody = {
type: "ClassBody",
body: Array<ClassMethod | ClassProperty>
} & Node

	declare export type ClassDeclaration = {
type: "ClassDeclaration",
id: Identifier,
superClass: Expression,
body: ClassBody,
decorators?: Decorator[],
implements?: ClassImplements[],
mixins?: any[],
typeParameters?: TypeParameterDeclaration,
superTypeParameters?: TypeParameterInstantiation
} & Node

	declare export type ClassExpression = {
type: "ClassExpression",
id: Identifier,
superClass: Expression,
body: ClassBody,
decorators?: Decorator[],
implements?: ClassImplements[],
mixins?: any[],
typeParameters?: TypeParameterDeclaration,
superTypeParameters?: TypeParameterInstantiation
} & Node

	declare export type ExportAllDeclaration = {
type: "ExportAllDeclaration",
source: StringLiteral
} & Node

	declare export type ExportDefaultDeclaration = {
type: "ExportDefaultDeclaration",
declaration: Declaration | Expression
} & Node

	declare export type ExportNamedDeclaration = {
type: "ExportNamedDeclaration",
declaration: Declaration,
specifiers: ExportSpecifier[],
source: StringLiteral | null
} & Node

	declare export type ExportSpecifier = {
type: "ExportSpecifier",
local: Identifier,
imported: Identifier,
exported: Identifier
} & Node

	declare export type ForOfStatement = {
type: "ForOfStatement",
left: VariableDeclaration | LVal,
right: Expression,
body: Statement
} & Node

	declare export type ImportDeclaration = {
type: "ImportDeclaration",
specifiers: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>,
source: StringLiteral
} & Node

	declare export type ImportDefaultSpecifier = {
type: "ImportDefaultSpecifier",
local: Identifier
} & Node

	declare export type ImportNamespaceSpecifier = {
type: "ImportNamespaceSpecifier",
local: Identifier
} & Node

	declare export type ImportSpecifier = {
type: "ImportSpecifier",
local: Identifier,
imported: Identifier
} & Node

	declare export type MetaProperty = {
type: "MetaProperty",
meta: Identifier,
property: Identifier
} & Node

	declare export type ClassMethod = {
type: "ClassMethod",
key: Expression,
value?: FunctionExpression,
kind: "constructor" | "method" | "get" | "set",
computed: boolean,
static: boolean,
decorators?: Decorator[],
id: Identifier,
params: LVal[],
body: BlockStatement,
generator: boolean,
async: boolean,
expression: boolean,
returnType?: TypeAnnotation,
typeParameters?: TypeParameterDeclaration
} & Node

	declare export type AssignmentProperty = {
type: "ObjectProperty",
key: Expression,
computed: boolean,
value: Pattern,
decorators?: Decorator[],
shorthand: boolean
} & Node

	declare export type ObjectPattern = {
type: "ObjectPattern",
properties: Array<AssignmentProperty | RestProperty>,
typeAnnotation?: TypeAnnotation
} & Node

	declare export type SpreadElement = {
type: "SpreadElement",
argument: Expression
} & Node

	declare export type Super = {
type: "Super"
} & Node

	declare export type TaggedTemplateExpression = {
type: "TaggedTemplateExpression",
tag: Expression,
quasi: TemplateLiteral
} & Node

	declare export type TemplateElement = {
type: "TemplateElement",
tail: boolean,
value: {
cooked: string,
raw: string
}
} & Node

	declare export type TemplateLiteral = {
type: "TemplateLiteral",
quasis: TemplateElement[],
expressions: Expression[]
} & Node

	declare export type YieldExpression = {
type: "YieldExpression",
argument: Expression,
delegate: boolean
} & Node

	declare export type AnyTypeAnnotation = {
type: "AnyTypeAnnotation"
} & Node

	declare export type ArrayTypeAnnotation = {
type: "ArrayTypeAnnotation",
elementType: FlowTypeAnnotation
} & Node

	declare export type BooleanTypeAnnotation = {
type: "BooleanTypeAnnotation"
} & Node

	declare export type BooleanLiteralTypeAnnotation = {
type: "BooleanLiteralTypeAnnotation"
} & Node

	declare export type NullLiteralTypeAnnotation = {
type: "NullLiteralTypeAnnotation"
} & Node

	declare export type ClassImplements = {
type: "ClassImplements",
id: Identifier,
typeParameters: TypeParameterInstantiation
} & Node

	declare export type ClassProperty = {
type: "ClassProperty",
key: Identifier,
value: Expression,
decorators?: Decorator[],
typeAnnotation?: TypeAnnotation
} & Node

	declare export type DeclareClass = {
type: "DeclareClass",
id: Identifier,
typeParameters: TypeParameterDeclaration,
extends: InterfaceExtends[],
body: ObjectTypeAnnotation
} & Node

	declare export type DeclareFunction = {
type: "DeclareFunction",
id: Identifier
} & Node

	declare export type DeclareInterface = {
type: "DeclareInterface",
id: Identifier,
typeParameters: TypeParameterDeclaration,
extends: InterfaceExtends[],
body: ObjectTypeAnnotation
} & Node

	declare export type DeclareModule = {
type: "DeclareModule",
id: StringLiteral | Identifier,
body: BlockStatement
} & Node

	declare export type DeclareTypeAlias = {
type: "DeclareTypeAlias",
id: Identifier,
typeParameters: TypeParameterDeclaration,
right: FlowTypeAnnotation
} & Node

	declare export type DeclareVariable = {
type: "DeclareVariable",
id: Identifier
} & Node

	declare export type ExistentialTypeParam = {
type: "ExistentialTypeParam"
} & Node

	declare export type FunctionTypeAnnotation = {
type: "FunctionTypeAnnotation",
typeParameters: TypeParameterDeclaration,
params: FunctionTypeParam[],
rest: FunctionTypeParam,
returnType: FlowTypeAnnotation
} & Node

	declare export type FunctionTypeParam = {
type: "FunctionTypeParam",
name: Identifier,
typeAnnotation: FlowTypeAnnotation
} & Node

	declare export type GenericTypeAnnotation = {
type: "GenericTypeAnnotation",
id: Identifier,
typeParameters: TypeParameterInstantiation
} & Node

	declare export type InterfaceExtends = {
type: "InterfaceExtends",
id: Identifier,
typeParameters: TypeParameterInstantiation
} & Node

	declare export type InterfaceDeclaration = {
type: "InterfaceDeclaration",
id: Identifier,
typeParameters: TypeParameterDeclaration,
extends: InterfaceExtends[],
mixins?: any[],
body: ObjectTypeAnnotation
} & Node

	declare export type IntersectionTypeAnnotation = {
type: "IntersectionTypeAnnotation",
types: FlowTypeAnnotation[]
} & Node

	declare export type MixedTypeAnnotation = {
type: "MixedTypeAnnotation"
} & Node

	declare export type NullableTypeAnnotation = {
type: "NullableTypeAnnotation",
typeAnnotation: FlowTypeAnnotation
} & Node

	declare export type NumericLiteralTypeAnnotation = {
type: "NumericLiteralTypeAnnotation"
} & Node

	declare export type NumberTypeAnnotation = {
type: "NumberTypeAnnotation"
} & Node

	declare export type StringLiteralTypeAnnotation = {
type: "StringLiteralTypeAnnotation"
} & Node

	declare export type StringTypeAnnotation = {
type: "StringTypeAnnotation"
} & Node

	declare export type ThisTypeAnnotation = {
type: "ThisTypeAnnotation"
} & Node

	declare export type TupleTypeAnnotation = {
type: "TupleTypeAnnotation",
types: FlowTypeAnnotation[]
} & Node

	declare export type TypeofTypeAnnotation = {
type: "TypeofTypeAnnotation",
argument: FlowTypeAnnotation
} & Node

	declare export type TypeAlias = {
type: "TypeAlias",
id: Identifier,
typeParameters: TypeParameterDeclaration,
right: FlowTypeAnnotation
} & Node

	declare export type TypeAnnotation = {
type: "TypeAnnotation",
typeAnnotation: FlowTypeAnnotation
} & Node

	declare export type TypeCastExpression = {
type: "TypeCastExpression",
expression: Expression,
typeAnnotation: FlowTypeAnnotation
} & Node

	declare export type TypeParameter = {
type: "TypeParameterDeclaration",
bound: TypeAnnotation | null,
default: Flow | null,
name: string | null
} & Node

	declare export type TypeParameterDeclaration = {
type: "TypeParameterDeclaration",
params: Identifier[]
} & Node

	declare export type TypeParameterInstantiation = {
type: "TypeParameterInstantiation",
params: FlowTypeAnnotation[]
} & Node

	declare export type ObjectTypeAnnotation = {
type: "ObjectTypeAnnotation",
properties: ObjectTypeProperty[],
indexers: ObjectTypeIndexer[],
callProperties: ObjectTypeCallProperty[]
} & Node

	declare export type ObjectTypeCallProperty = {
type: "ObjectTypeCallProperty",
value: FlowTypeAnnotation
} & Node

	declare export type ObjectTypeIndexer = {
type: "ObjectTypeIndexer",
id: Expression,
key: FlowTypeAnnotation,
value: FlowTypeAnnotation
} & Node

	declare export type ObjectTypeProperty = {
type: "ObjectTypeProperty",
key: Expression,
value: FlowTypeAnnotation
} & Node

	declare export type QualifiedTypeIdentifier = {
type: "QualifiedTypeIdentifier",
id: Identifier,
qualification: Identifier | QualifiedTypeIdentifier
} & Node

	declare export type UnionTypeAnnotation = {
type: "UnionTypeAnnotation",
types: FlowTypeAnnotation[]
} & Node

	declare export type VoidTypeAnnotation = {
type: "VoidTypeAnnotation"
} & Node

	declare export type JSXAttribute = {
type: "JSXAttribute",
name: JSXIdentifier | JSXNamespacedName,
value: JSXElement | StringLiteral | JSXExpressionContainer | null
} & Node

	declare export type JSXClosingElement = {
type: "JSXClosingElement",
name: JSXIdentifier | JSXMemberExpression
} & Node

	declare export type JSXElement = {
type: "JSXElement",
openingElement: JSXOpeningElement,
closingElement: JSXClosingElement,
children: Array<JSXElement | JSXExpressionContainer | JSXText>,
selfClosing?: boolean
} & Node

	declare export type JSXEmptyExpression = {
type: "JSXEmptyExpression"
} & Node

	declare export type JSXExpressionContainer = {
type: "JSXExpressionContainer",
expression: Expression
} & Node

	declare export type JSXIdentifier = {
type: "JSXIdentifier",
name: string
} & Node

	declare export type JSXMemberExpression = {
type: "JSXMemberExpression",
object: JSXMemberExpression | JSXIdentifier,
property: JSXIdentifier
} & Node

	declare export type JSXNamespacedName = {
type: "JSXNamespacedName",
namespace: JSXIdentifier,
name: JSXIdentifier
} & Node

	declare export type JSXOpeningElement = {
type: "JSXOpeningElement",
name: JSXIdentifier | JSXMemberExpression,
selfClosing: boolean,
attributes: JSXAttribute[]
} & Node

	declare export type JSXSpreadAttribute = {
type: "JSXSpreadAttribute",
argument: Expression
} & Node

	declare export type JSXText = {
type: "JSXText",
value: string
} & Node

	declare export type Noop = {
type: "Noop"
} & Node

	declare export type ParenthesizedExpression = {
type: "ParenthesizedExpression",
expression: Expression
} & Node

	declare export type AwaitExpression = {
type: "AwaitExpression",
argument: Expression
} & Node

	declare export type BindExpression = {
type: "BindExpression",
object: Expression,
callee: Expression
} & Node

	declare export type Decorator = {
type: "Decorator",
expression: Expression
} & Node

	declare export type DoExpression = {
type: "DoExpression",
body: BlockStatement
} & Node

	declare export type ExportDefaultSpecifier = {
type: "ExportDefaultSpecifier",
exported: Identifier
} & Node

	declare export type ExportNamespaceSpecifier = {
type: "ExportNamespaceSpecifier",
exported: Identifier
} & Node

	declare export type RestProperty = {
type: "RestProperty",
argument: LVal
} & Node

	declare export type SpreadProperty = {
type: "SpreadProperty",
argument: Expression
} & Node

	declare export type TSAnyKeyword = {
type: "TSAnyKeyword"
} & Node

	declare export type TSArrayType = {
type: "TSArrayType",
elementType: TSType
} & Node

	declare export type TSAsExpression = {
type: "TSAsExpression",
expression: Expression,
typeAnnotation: TSType
} & Node

	declare export type TSBooleanKeyword = {
type: "TSBooleanKeyword"
} & Node

	declare export type TSCallSignatureDeclaration = {
type: "TSCallSignatureDeclaration",
typeParameters: TypeParameterDeclaration | null,
parameters: Array<Identifier | RestElement> | null,
typeAnnotation: TSTypeAnnotation | null
} & Node

	declare export type TSConstructSignatureDeclaration = {
type: "TSConstructSignatureDeclaration",
typeParameters: TypeParameterDeclaration | null,
parameters: Array<Identifier | RestElement> | null,
typeAnnotation: TSTypeAnnotation | null
} & Node

	declare export type TSConstructorType = {
type: "TSConstructorType",
typeParameters: TypeParameterDeclaration | null,
typeAnnotation: TSTypeAnnotation | null,
parameters: Array<Identifier | RestElement> | null
} & Node

	declare export type TSDeclareFunction = {
type: "TSDeclareFunction",
id: Identifier | null,
typeParameters: TypeParameterDeclaration | Noop | null,
params: LVal[],
returnType: TypeAnnotation | TSTypeAnnotation | Noop | null,
async: boolean,
declare: boolean | null,
generator: boolean
} & Node

	declare export type TSDeclareMethod = {
type: "TSDeclareMethod",
decorators: Decorator[] | null,
key: Expression,
typeParameters: TypeParameterDeclaration | Noop | null,
params: LVal[],
returnType: TypeAnnotation | TSTypeAnnotation | Noop | null,
abstract: boolean | null,
access: "public" | "private" | "protected" | null,
accessibility: "public" | "private" | "protected" | null,
async: boolean,
computed: boolean,
generator: boolean,
kind: "get" | "set" | "method" | "constructor",
optional: boolean | null,
static: boolean | null
} & Node

	declare export type TSEnumDeclaration = {
type: "TSEnumDeclaration",
id: Identifier,
members: TSEnumMember[],
const: boolean | null,
declare: boolean | null,
initializer: Expression | null
} & Node

	declare export type TSEnumMember = {
type: "TSEnumMember",
id: Identifier | StringLiteral,
initializer: Expression | null
} & Node

	declare export type TSExportAssignment = {
type: "TSExportAssignment",
expression: Expression
} & Node

	declare export type TSExpressionWithTypeArguments = {
type: "TSExpressionWithTypeArguments",
expression: TSEntityName,
typeParameters: TypeParameterInstantiation | null
} & Node

	declare export type TSExternalModuleReference = {
type: "TSExternalModuleReference",
expression: StringLiteral
} & Node

	declare export type TSFunctionType = {
type: "TSFunctionType",
typeParameters: TypeParameterDeclaration | null,
typeAnnotation: TSTypeAnnotation | null,
parameters: Array<Identifier | RestElement> | null
} & Node

	declare export type TSImportEqualsDeclaration = {
type: "TSImportEqualsDeclaration",
id: Identifier,
moduleReference: TSEntityName | TSExternalModuleReference,
isExport: boolean | null
} & Node

	declare export type TSIndexSignature = {
type: "TSIndexSignature",
parameters: Identifier[],
typeAnnotation: TSTypeAnnotation | null,
readonly: boolean | null
} & Node

	declare export type TSIndexedAccessType = {
type: "TSIndexedAccessType",
objectType: TSType,
indexType: TSType
} & Node

	declare export type TSInterfaceBody = {
type: "TSInterfaceBody",
body: TSTypeElement[]
} & Node

	declare export type TSInterfaceDeclaration = {
type: "TSInterfaceDeclaration",
id: Identifier,
typeParameters: TypeParameterDeclaration | null,
extends: TSExpressionWithTypeArguments[] | null,
body: TSInterfaceBody,
declare: boolean | null
} & Node

	declare export type TSIntersectionType = {
type: "TSIntersectionType",
types: TSType[]
} & Node

	declare export type TSLiteralType = {
type: "TSLiteralType",
literal: NumericLiteral | StringLiteral | BooleanLiteral
} & Node

	declare export type TSMappedType = {
type: "TSMappedType",
typeParameter: TypeParameter,
typeAnnotation: TSType | null,
optional: boolean | null,
readonly: boolean | null
} & Node

	declare export type TSMethodSignature = {
type: "TSMethodSignature",
key: Expression,
typeParameters: TypeParameterDeclaration | null,
parameters: Array<Identifier | RestElement> | null,
typeAnnotation: TSTypeAnnotation | null,
computed: boolean | null,
optional: boolean | null
} & Node

	declare export type TSModuleBlock = {
type: "TSModuleBlock",
body: Statement[]
} & Node

	declare export type TSModuleDeclaration = {
type: "TSModuleDeclaration",
id: Identifier | StringLiteral,
body: TSModuleBlock | TSModuleDeclaration,
declare: boolean | null,
global: boolean | null
} & Node

	declare export type TSNamespaceExportDeclaration = {
type: "TSNamespaceExportDeclaration",
id: Identifier
} & Node

	declare export type TSNeverKeyword = {
type: "TSNeverKeyword"
} & Node

	declare export type TSNonNullExpression = {
type: "TSNonNullExpression",
expression: Expression
} & Node

	declare export type TSNullKeyword = {
type: "TSNullKeyword"
} & Node

	declare export type TSNumberKeyword = {
type: "TSNumberKeyword"
} & Node

	declare export type TSObjectKeyword = {
type: "TSObjectKeyword"
} & Node

	declare export type TSParameterProperty = {
type: "TSParameterProperty",
parameter: Identifier | AssignmentPattern,
accessibility: "public" | "private" | "protected" | null,
readonly: boolean | null
} & Node

	declare export type TSParenthesizedType = {
type: "TSParenthesizedType",
typeAnnotation: TSType
} & Node

	declare export type TSPropertySignature = {
type: "TSPropertySignature",
key: Expression,
typeAnnotation: TSTypeAnnotation | null,
initializer: Expression | null,
computed: boolean | null,
optional: boolean | null,
readonly: boolean | null
} & Node

	declare export type TSQualifiedName = {
type: "TSQualifiedName",
left: TSEntityName,
right: Identifier
} & Node

	declare export type TSStringKeyword = {
type: "TSStringKeyword"
} & Node

	declare export type TSSymbolKeyword = {
type: "TSSymbolKeyword"
} & Node

	declare export type TSThisType = {
type: "TSThisType"
} & Node

	declare export type TSTupleType = {
type: "TSTupleType",
elementTypes: TSType[]
} & Node

	declare export type TSTypeAliasDeclaration = {
type: "TSTypeAliasDeclaration",
id: Identifier,
typeParameters: TypeParameterDeclaration | null,
typeAnnotation: TSType,
declare: boolean | null
} & Node

	declare export type TSTypeAnnotation = {
type: "TSTypeAnnotation",
typeAnnotation: TSType
} & Node

	declare export type TSTypeAssertion = {
type: "TSTypeAssertion",
typeAnnotation: TSType,
expression: Expression
} & Node

	declare export type TSTypeLiteral = {
type: "TSTypeLiteral",
members: TSTypeElement[]
} & Node

	declare export type TSTypeOperator = {
type: "TSTypeOperator",
typeAnnotation: TSType,
operator: string | null
} & Node

	declare export type TSTypeParameter = {
type: "TSTypeParameter",
constraint: TSType | null,
default: TSType | null,
name: string | null
} & Node

	declare export type TSTypeParameterDeclaration = {
type: "TSTypeParameterDeclaration",
params: TSTypeParameter[]
} & Node

	declare export type TSTypeParameterInstantiation = {
type: "TSTypeParameterInstantiation",
params: TSType[]
} & Node

	declare export type TSTypePredicate = {
type: "TSTypePredicate",
parameterName: Identifier | TSThisType,
typeAnnotation: TSTypeAnnotation
} & Node

	declare export type TSTypeQuery = {
type: "TSTypeQuery",
exprName: TSEntityName
} & Node

	declare export type TSTypeReference = {
type: "TSTypeReference",
typeName: TSEntityName,
typeParameters: TypeParameterInstantiation | null
} & Node

	declare export type TSUndefinedKeyword = {
type: "TSUndefinedKeyword"
} & Node

	declare export type TSUnionType = {
type: "TSUnionType",
types: TSType[]
} & Node

	declare export type TSVoidKeyword = {
type: "TSVoidKeyword"
} & Node

	declare export type Expression = ArrayExpression
| AssignmentExpression
| BinaryExpression
| CallExpression
| ConditionalExpression
| FunctionExpression
| Identifier
| StringLiteral
| NumericLiteral
| BooleanLiteral
| NullLiteral
| RegExpLiteral
| LogicalExpression
| MemberExpression
| NewExpression
| ObjectExpression
| SequenceExpression
| ThisExpression
| UnaryExpression
| UpdateExpression
| ArrowFunctionExpression
| ClassExpression
| MetaProperty
| Super
| TaggedTemplateExpression
| TemplateLiteral
| YieldExpression
| TypeCastExpression
| JSXElement
| JSXEmptyExpression
| JSXIdentifier
| JSXMemberExpression
| ParenthesizedExpression
| AwaitExpression
| BindExpression
| DoExpression
| TSAsExpression
| TSNonNullExpression
| TSTypeAssertion;
	declare export type Binary = BinaryExpression | LogicalExpression;
	declare export type Scopable = BlockStatement
| CatchClause
| DoWhileStatement
| ForInStatement
| ForStatement
| FunctionDeclaration
| FunctionExpression
| Program
| ObjectMethod
| SwitchStatement
| WhileStatement
| ArrowFunctionExpression
| ClassDeclaration
| ClassExpression
| ForOfStatement
| ClassMethod;
	declare export type BlockParent = BlockStatement
| DoWhileStatement
| ForInStatement
| ForStatement
| FunctionDeclaration
| FunctionExpression
| Program
| ObjectMethod
| SwitchStatement
| WhileStatement
| ArrowFunctionExpression
| ForOfStatement
| ClassMethod;
	declare export type Block = BlockStatement | Program;
	declare export type Statement = BlockStatement
| BreakStatement
| ContinueStatement
| DebuggerStatement
| DoWhileStatement
| EmptyStatement
| ExpressionStatement
| ForInStatement
| ForStatement
| FunctionDeclaration
| IfStatement
| LabeledStatement
| ReturnStatement
| SwitchStatement
| ThrowStatement
| TryStatement
| VariableDeclaration
| WhileStatement
| WithStatement
| ClassDeclaration
| ExportAllDeclaration
| ExportDefaultDeclaration
| ExportNamedDeclaration
| ForOfStatement
| ImportDeclaration
| DeclareClass
| DeclareFunction
| DeclareInterface
| DeclareModule
| DeclareTypeAlias
| DeclareVariable
| InterfaceDeclaration
| TypeAlias
| TSDeclareFunction
| TSEnumDeclaration
| TSExportAssignment
| TSImportEqualsDeclaration
| TSInterfaceDeclaration
| TSModuleDeclaration
| TSNamespaceExportDeclaration
| TSTypeAliasDeclaration;
	declare export type Terminatorless = BreakStatement
| ContinueStatement
| ReturnStatement
| ThrowStatement
| YieldExpression
| AwaitExpression;
	declare export type CompletionStatement = BreakStatement | ContinueStatement | ReturnStatement | ThrowStatement;
	declare export type Conditional = ConditionalExpression | IfStatement;
	declare export type Loop = DoWhileStatement
| ForInStatement
| ForStatement
| WhileStatement
| ForOfStatement;
	declare export type While = DoWhileStatement | WhileStatement;
	declare export type ExpressionWrapper = ExpressionStatement | TypeCastExpression | ParenthesizedExpression;
	declare export type For = ForInStatement | ForStatement | ForOfStatement;
	declare export type ForXStatement = ForInStatement | ForOfStatement;
	declare export type Function = FunctionDeclaration
| FunctionExpression
| ObjectMethod
| ArrowFunctionExpression
| ClassMethod;
	declare export type FunctionParent = FunctionDeclaration
| FunctionExpression
| Program
| ObjectMethod
| ArrowFunctionExpression
| ClassMethod;
	declare export type Pureish = FunctionDeclaration
| FunctionExpression
| StringLiteral
| NumericLiteral
| BooleanLiteral
| NullLiteral
| ArrowFunctionExpression
| ClassDeclaration
| ClassExpression;
	declare export type Declaration = FunctionDeclaration
| VariableDeclaration
| ClassDeclaration
| ExportAllDeclaration
| ExportDefaultDeclaration
| ExportNamedDeclaration
| ImportDeclaration
| DeclareClass
| DeclareFunction
| DeclareInterface
| DeclareModule
| DeclareTypeAlias
| DeclareVariable
| InterfaceDeclaration
| TypeAlias
| TSDeclareFunction
| TSEnumDeclaration
| TSInterfaceDeclaration
| TSModuleDeclaration
| TSTypeAliasDeclaration;
	declare export type LVal = Identifier
| MemberExpression
| RestElement
| AssignmentPattern
| ArrayPattern
| ObjectPattern
| TSParameterProperty;
	declare export type Literal = StringLiteral
| NumericLiteral
| BooleanLiteral
| NullLiteral
| RegExpLiteral
| TemplateLiteral;
	declare export type Immutable = StringLiteral
| NumericLiteral
| BooleanLiteral
| NullLiteral
| JSXAttribute
| JSXClosingElement
| JSXElement
| JSXExpressionContainer
| JSXOpeningElement;
	declare export type UserWhitespacable = ObjectMethod
| ObjectProperty
| ObjectTypeCallProperty
| ObjectTypeIndexer
| ObjectTypeProperty;
	declare export type Method = ObjectMethod | ClassMethod;
	declare export type ObjectMember = ObjectMethod | ObjectProperty;
	declare export type Property = ObjectProperty | ClassProperty;
	declare export type UnaryLike = UnaryExpression | SpreadElement | RestProperty | SpreadProperty;
	declare export type Pattern = AssignmentPattern | ArrayPattern | ObjectPattern;
	declare export type Class = ClassDeclaration | ClassExpression;
	declare export type ModuleDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration | ImportDeclaration;
	declare export type ExportDeclaration = ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration;
	declare export type ModuleSpecifier = ExportSpecifier
| ImportDefaultSpecifier
| ImportNamespaceSpecifier
| ImportSpecifier
| ExportDefaultSpecifier
| ExportNamespaceSpecifier;
	declare export type Flow = AnyTypeAnnotation
| ArrayTypeAnnotation
| BooleanTypeAnnotation
| BooleanLiteralTypeAnnotation
| ClassImplements
| ClassProperty
| DeclareClass
| DeclareFunction
| DeclareInterface
| DeclareModule
| DeclareTypeAlias
| DeclareVariable
| ExistentialTypeParam
| FunctionTypeAnnotation
| FunctionTypeParam
| GenericTypeAnnotation
| InterfaceExtends
| InterfaceDeclaration
| IntersectionTypeAnnotation
| MixedTypeAnnotation
| NullableTypeAnnotation
| NumericLiteralTypeAnnotation
| NumberTypeAnnotation
| StringLiteralTypeAnnotation
| StringTypeAnnotation
| ThisTypeAnnotation
| TupleTypeAnnotation
| TypeofTypeAnnotation
| TypeAlias
| TypeAnnotation
| TypeCastExpression
| TypeParameterDeclaration
| TypeParameterInstantiation
| ObjectTypeAnnotation
| ObjectTypeCallProperty
| ObjectTypeIndexer
| ObjectTypeProperty
| QualifiedTypeIdentifier
| UnionTypeAnnotation
| VoidTypeAnnotation;
	declare export type FlowTypeAnnotation = AnyTypeAnnotation
| ArrayTypeAnnotation
| BooleanTypeAnnotation
| BooleanLiteralTypeAnnotation
| FunctionTypeAnnotation
| GenericTypeAnnotation
| IntersectionTypeAnnotation
| MixedTypeAnnotation
| NullableTypeAnnotation
| NumericLiteralTypeAnnotation
| NumberTypeAnnotation
| StringLiteralTypeAnnotation
| StringTypeAnnotation
| ThisTypeAnnotation
| TupleTypeAnnotation
| TypeofTypeAnnotation
| TypeAnnotation
| ObjectTypeAnnotation
| UnionTypeAnnotation
| VoidTypeAnnotation;
	declare export type FlowBaseAnnotation = AnyTypeAnnotation
| BooleanTypeAnnotation
| MixedTypeAnnotation
| NumberTypeAnnotation
| StringTypeAnnotation
| ThisTypeAnnotation
| VoidTypeAnnotation;
	declare export type FlowDeclaration = DeclareClass
| DeclareFunction
| DeclareInterface
| DeclareModule
| DeclareTypeAlias
| DeclareVariable
| InterfaceDeclaration
| TypeAlias;
	declare export type JSX = JSXAttribute
| JSXClosingElement
| JSXElement
| JSXEmptyExpression
| JSXExpressionContainer
| JSXIdentifier
| JSXMemberExpression
| JSXNamespacedName
| JSXOpeningElement
| JSXSpreadAttribute
| JSXText;
	declare export type TSType = TSAnyKeyword
| TSArrayType
| TSBooleanKeyword
| TSConstructorType
| TSExpressionWithTypeArguments
| TSFunctionType
| TSIndexedAccessType
| TSIntersectionType
| TSLiteralType
| TSMappedType
| TSNeverKeyword
| TSNullKeyword
| TSNumberKeyword
| TSObjectKeyword
| TSParenthesizedType
| TSStringKeyword
| TSSymbolKeyword
| TSThisType
| TSTupleType
| TSTypeLiteral
| TSTypeOperator
| TSTypePredicate
| TSTypeQuery
| TSTypeReference
| TSUndefinedKeyword
| TSUnionType
| TSVoidKeyword;
	declare export type TSEntityName = Identifier | TSQualifiedName;
	declare export type TSTypeElement = TSCallSignatureDeclaration
| TSConstructSignatureDeclaration
| TSIndexSignature
| TSMethodSignature
| TSPropertySignature;
	declare export function arrayExpression(elements?: Array<null | Expression | SpreadElement>): ArrayExpression

	declare export function assignmentExpression(operator?: string, left?: LVal, right?: Expression): AssignmentExpression

	declare export function binaryExpression(
operator?: "+"
| "-"
| "/"
| "%"
| "*"
| "**"
| "&"
| "|"
| ">>"
| ">>>"
| "<<"
| "^"
| "=="
| "==="
| "!="
| "!=="
| "in"
| "instanceof"
| ">"
| "<"
| ">="
| "<=",
left?: Expression,
right?: Expression): BinaryExpression

	declare export function directive(value?: DirectiveLiteral): Directive

	declare export function directiveLiteral(value?: string): DirectiveLiteral

	declare export function blockStatement(body?: Statement[], directives?: Directive[]): BlockStatement

	declare export function breakStatement(label?: Identifier): BreakStatement

	declare export function callExpression(
callee?: Expression,
_arguments?: Array<Expression | SpreadElement>): CallExpression

	declare export function catchClause(param?: Identifier, body?: BlockStatement): CatchClause

	declare export function conditionalExpression(
test?: Expression,
consequent?: Expression,
alternate?: Expression): ConditionalExpression

	declare export function continueStatement(label?: Identifier): ContinueStatement

	declare export function debuggerStatement(): DebuggerStatement

	declare export function doWhileStatement(test?: Expression, body?: Statement): DoWhileStatement

	declare export function emptyStatement(): EmptyStatement

	declare export function expressionStatement(expression?: Expression): ExpressionStatement

	declare export function file(program?: Program, comments?: Comment[], tokens?: any[]): File

	declare export function forInStatement(
left?: VariableDeclaration | LVal,
right?: Expression,
body?: Statement): ForInStatement

	declare export function forStatement(
init?: VariableDeclaration | Expression,
test?: Expression,
update?: Expression,
body?: Statement): ForStatement

	declare export function functionDeclaration(
id?: Identifier,
params?: LVal[],
body?: BlockStatement,
generator?: boolean,
async?: boolean): FunctionDeclaration

	declare export function functionExpression(
id?: Identifier,
params?: LVal[],
body?: BlockStatement,
generator?: boolean,
async?: boolean): FunctionExpression

	declare export function identifier(name?: string): Identifier

	declare export function ifStatement(test?: Expression, consequent?: Statement, alternate?: Statement): IfStatement

	declare export function labeledStatement(label?: Identifier, body?: Statement): LabeledStatement

	declare export function stringLiteral(value?: string): StringLiteral

	declare export function numericLiteral(value?: number): NumericLiteral

	declare export function nullLiteral(): NullLiteral

	declare export function booleanLiteral(value?: boolean): BooleanLiteral

	declare export function regExpLiteral(pattern?: string, flags?: string): RegExpLiteral

	declare export function logicalExpression(
operator?: "||" | "&&",
left?: Expression,
right?: Expression): LogicalExpression

	declare export function memberExpression(
object?: Expression | Super,
property?: Expression,
computed?: boolean): MemberExpression

	declare export function newExpression(
callee?: Expression | Super,
_arguments?: Array<Expression | SpreadElement>): NewExpression

	declare export function program(body?: Array<Statement | ModuleDeclaration>, directives?: Directive[]): Program

	declare export function objectExpression(
properties?: Array<ObjectProperty | ObjectMethod | SpreadProperty>): ObjectExpression

	declare export function objectMethod(
kind?: "get" | "set" | "method",
key?: Expression,
params?: LVal[],
body?: BlockStatement,
computed?: boolean): ObjectMethod

	declare export function objectProperty(
key?: Expression,
value?: Expression,
computed?: boolean,
shorthand?: boolean,
decorators?: Decorator[]): ObjectProperty

	declare export function restElement(argument?: LVal, typeAnnotation?: TypeAnnotation): RestElement

	declare export function returnStatement(argument?: Expression): ReturnStatement

	declare export function sequenceExpression(expressions?: Expression[]): SequenceExpression

	declare export function switchCase(test?: Expression, consequent?: Statement[]): SwitchCase

	declare export function switchStatement(discriminant?: Expression, cases?: SwitchCase[]): SwitchStatement

	declare export function thisExpression(): ThisExpression

	declare export function throwStatement(argument?: Expression): ThrowStatement

	declare export function tryStatement(
block?: BlockStatement,
handler?: CatchClause,
finalizer?: BlockStatement): TryStatement

	declare export function unaryExpression(
operator?: "void"
| "delete"
| "!"
| "+"
| "-"
| "++"
| "--"
| "~"
| "typeof",
argument?: Expression,
prefix?: boolean): UnaryExpression

	declare export function updateExpression(
operator?: "++" | "--",
argument?: Expression,
prefix?: boolean): UpdateExpression

	declare export function variableDeclaration(
kind?: "var" | "let" | "const",
declarations?: VariableDeclarator[]): VariableDeclaration

	declare export function variableDeclarator(id?: LVal, init?: Expression): VariableDeclarator

	declare export function whileStatement(test?: Expression, body?: BlockStatement | Statement): WhileStatement

	declare export function withStatement(object?: Expression, body?: BlockStatement | Statement): WithStatement

	declare export function assignmentPattern(left?: Identifier, right?: Expression): AssignmentPattern

	declare export function arrayPattern(elements?: Expression[], typeAnnotation?: TypeAnnotation): ArrayPattern

	declare export function arrowFunctionExpression(
params?: LVal[],
body?: BlockStatement | Expression,
async?: boolean): ArrowFunctionExpression

	declare export function classBody(body?: Array<ClassMethod | ClassProperty>): ClassBody

	declare export function classDeclaration(
id?: Identifier,
superClass?: Expression,
body?: ClassBody,
decorators?: Decorator[]): ClassDeclaration

	declare export function classExpression(
id?: Identifier,
superClass?: Expression,
body?: ClassBody,
decorators?: Decorator[]): ClassExpression

	declare export function exportAllDeclaration(source?: StringLiteral): ExportAllDeclaration

	declare export function exportDefaultDeclaration(
declaration?: FunctionDeclaration | ClassDeclaration | Expression): ExportDefaultDeclaration

	declare export function exportNamedDeclaration(
declaration?: Declaration,
specifiers?: ExportSpecifier[],
source?: StringLiteral): ExportNamedDeclaration

	declare export function exportSpecifier(local?: Identifier, exported?: Identifier): ExportSpecifier

	declare export function forOfStatement(
left?: VariableDeclaration | LVal,
right?: Expression,
body?: Statement): ForOfStatement

	declare export function importDeclaration(
specifiers?: Array<ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier>,
source?: StringLiteral): ImportDeclaration

	declare export function importDefaultSpecifier(local?: Identifier): ImportDefaultSpecifier

	declare export function importNamespaceSpecifier(local?: Identifier): ImportNamespaceSpecifier

	declare export function importSpecifier(local?: Identifier, imported?: Identifier): ImportSpecifier

	declare export function metaProperty(meta?: string, property?: string): MetaProperty

	declare export function classMethod(
kind?: "constructor" | "method" | "get" | "set",
key?: Expression,
params?: LVal[],
body?: BlockStatement,
computed?: boolean,
_static?: boolean): ClassMethod

	declare export function objectPattern(
properties?: Array<AssignmentProperty | RestProperty>,
typeAnnotation?: TypeAnnotation): ObjectPattern

	declare export function spreadElement(argument?: Expression): SpreadElement

	declare export function taggedTemplateExpression(tag?: Expression, quasi?: TemplateLiteral): TaggedTemplateExpression

	declare export function templateElement(value?: {
cooked?: string,
raw?: string
}, tail?: boolean): TemplateElement

	declare export function templateLiteral(quasis?: TemplateElement[], expressions?: Expression[]): TemplateLiteral

	declare export function yieldExpression(argument?: Expression, delegate?: boolean): YieldExpression

	declare export function anyTypeAnnotation(): AnyTypeAnnotation

	declare export function arrayTypeAnnotation(elementType?: FlowTypeAnnotation): ArrayTypeAnnotation

	declare export function booleanTypeAnnotation(): BooleanTypeAnnotation

	declare export function booleanLiteralTypeAnnotation(): BooleanLiteralTypeAnnotation

	declare export function nullLiteralTypeAnnotation(): NullLiteralTypeAnnotation

	declare export function classImplements(id?: Identifier, typeParameters?: TypeParameterInstantiation): ClassImplements

	declare export function classProperty(
key?: Identifier,
value?: Expression,
typeAnnotation?: TypeAnnotation,
decorators?: Decorator[]): ClassProperty

	declare export function declareClass(
id?: Identifier,
typeParameters?: TypeParameterDeclaration,
_extends?: InterfaceExtends[],
body?: ObjectTypeAnnotation): DeclareClass

	declare export function declareFunction(id?: Identifier): DeclareFunction

	declare export function declareInterface(
id?: Identifier,
typeParameters?: TypeParameterDeclaration,
_extends?: InterfaceExtends[],
body?: ObjectTypeAnnotation): DeclareInterface

	declare export function declareModule(id?: StringLiteral | Identifier, body?: BlockStatement): DeclareModule

	declare export function declareTypeAlias(
id?: Identifier,
typeParameters?: TypeParameterDeclaration,
right?: FlowTypeAnnotation): DeclareTypeAlias

	declare export function declareVariable(id?: Identifier): DeclareVariable

	declare export function existentialTypeParam(): ExistentialTypeParam

	declare export function functionTypeAnnotation(
typeParameters?: TypeParameterDeclaration,
params?: FunctionTypeParam[],
rest?: FunctionTypeParam,
returnType?: FlowTypeAnnotation): FunctionTypeAnnotation

	declare export function functionTypeParam(name?: Identifier, typeAnnotation?: FlowTypeAnnotation): FunctionTypeParam

	declare export function genericTypeAnnotation(
id?: Identifier,
typeParameters?: TypeParameterInstantiation): GenericTypeAnnotation

	declare export function interfaceExtends(id?: Identifier, typeParameters?: TypeParameterInstantiation): InterfaceExtends

	declare export function interfaceDeclaration(
id?: Identifier,
typeParameters?: TypeParameterDeclaration,
_extends?: InterfaceExtends[],
body?: ObjectTypeAnnotation): InterfaceDeclaration

	declare export function intersectionTypeAnnotation(types?: FlowTypeAnnotation[]): IntersectionTypeAnnotation

	declare export function mixedTypeAnnotation(): MixedTypeAnnotation

	declare export function nullableTypeAnnotation(typeAnnotation?: FlowTypeAnnotation): NullableTypeAnnotation

	declare export function numericLiteralTypeAnnotation(): NumericLiteralTypeAnnotation

	declare export function numberTypeAnnotation(): NumberTypeAnnotation

	declare export function stringLiteralTypeAnnotation(): StringLiteralTypeAnnotation

	declare export function stringTypeAnnotation(): StringTypeAnnotation

	declare export function thisTypeAnnotation(): ThisTypeAnnotation

	declare export function tupleTypeAnnotation(types?: FlowTypeAnnotation[]): TupleTypeAnnotation

	declare export function typeofTypeAnnotation(argument?: FlowTypeAnnotation): TypeofTypeAnnotation

	declare export function typeAlias(
id?: Identifier,
typeParameters?: TypeParameterDeclaration,
right?: FlowTypeAnnotation): TypeAlias

	declare export function typeAnnotation(typeAnnotation?: FlowTypeAnnotation): TypeAnnotation

	declare export function typeCastExpression(
expression?: Expression,
typeAnnotation?: FlowTypeAnnotation): TypeCastExpression

	declare export function typeParameter(bound?: TypeAnnotation, default_?: Flow): TypeParameter

	declare export function typeParameterDeclaration(params?: Identifier[]): TypeParameterDeclaration

	declare export function typeParameterInstantiation(params?: FlowTypeAnnotation[]): TypeParameterInstantiation

	declare export function objectTypeAnnotation(
properties?: ObjectTypeProperty[],
indexers?: ObjectTypeIndexer[],
callProperties?: ObjectTypeCallProperty[]): ObjectTypeAnnotation

	declare export function objectTypeCallProperty(value?: FlowTypeAnnotation): ObjectTypeCallProperty

	declare export function objectTypeIndexer(
id?: Expression,
key?: FlowTypeAnnotation,
value?: FlowTypeAnnotation): ObjectTypeIndexer

	declare export function objectTypeProperty(key?: Expression, value?: FlowTypeAnnotation): ObjectTypeProperty

	declare export function qualifiedTypeIdentifier(
id?: Identifier,
qualification?: Identifier | QualifiedTypeIdentifier): QualifiedTypeIdentifier

	declare export function unionTypeAnnotation(types?: FlowTypeAnnotation[]): UnionTypeAnnotation

	declare export function voidTypeAnnotation(): VoidTypeAnnotation

	declare export function jSXAttribute(
name?: JSXIdentifier | JSXNamespacedName,
value?: JSXElement | StringLiteral | JSXExpressionContainer | null): JSXAttribute

	declare export function jSXClosingElement(name?: JSXIdentifier | JSXMemberExpression): JSXClosingElement

	declare export function jSXElement(
openingElement?: JSXOpeningElement,
closingElement?: JSXClosingElement,
children?: Array<JSXElement | JSXExpressionContainer | JSXText>,
selfClosing?: boolean): JSXElement

	declare export function jSXEmptyExpression(): JSXEmptyExpression

	declare export function jSXExpressionContainer(expression?: Expression): JSXExpressionContainer

	declare export function jSXIdentifier(name?: string): JSXIdentifier

	declare export function jSXMemberExpression(
object?: JSXMemberExpression | JSXIdentifier,
property?: JSXIdentifier): JSXMemberExpression

	declare export function jSXNamespacedName(namespace?: JSXIdentifier, name?: JSXIdentifier): JSXNamespacedName

	declare export function jSXOpeningElement(
name?: JSXIdentifier | JSXMemberExpression,
attributes?: JSXAttribute[],
selfClosing?: boolean): JSXOpeningElement

	declare export function jSXSpreadAttribute(argument?: Expression): JSXSpreadAttribute

	declare export function jSXText(value?: string): JSXText

	declare export function noop(): Noop

	declare export function parenthesizedExpression(expression?: Expression): ParenthesizedExpression

	declare export function awaitExpression(argument?: Expression): AwaitExpression

	declare export function bindExpression(object?: Expression, callee?: Expression): BindExpression

	declare export function decorator(expression?: Expression): Decorator

	declare export function doExpression(body?: BlockStatement): DoExpression

	declare export function exportDefaultSpecifier(exported?: Identifier): ExportDefaultSpecifier

	declare export function exportNamespaceSpecifier(exported?: Identifier): ExportNamespaceSpecifier

	declare export function restProperty(argument?: LVal): RestProperty

	declare export function spreadProperty(argument?: Expression): SpreadProperty

	declare export function TSAnyKeyword(): TSAnyKeyword

	declare export function TSArrayType(elementType: TSType): TSArrayType

	declare export function TSAsExpression(expression: Expression, typeAnnotation: TSType): TSAsExpression

	declare export function TSBooleanKeyword(): TSBooleanKeyword

	declare export function TSCallSignatureDeclaration(
typeParameters?: TypeParameterDeclaration,
parameters?: Array<Identifier | RestElement>,
typeAnnotation?: TSTypeAnnotation): TSCallSignatureDeclaration

	declare export function TSConstructSignatureDeclaration(
typeParameters?: TypeParameterDeclaration,
parameters?: Array<Identifier | RestElement>,
typeAnnotation?: TSTypeAnnotation): TSTypeElement

	declare export function TSConstructorType(
typeParameters?: TypeParameterDeclaration,
typeAnnotation?: TSTypeAnnotation): TSConstructorType

	declare export function TSDeclareFunction(
id: Identifier | void | null,
typeParameters: TypeParameterDeclaration | Noop | void | null,
params: LVal[],
returnType: TypeAnnotation
| TSTypeAnnotation
| Noop
| void
| null): TSDeclareFunction

	declare export function TSDeclareMethod(
decorators: Decorator[] | void | null,
key: Expression,
typeParameters: TypeParameterDeclaration | Noop | void | null,
params: LVal[],
returnType?: TypeAnnotation | TSTypeAnnotation | Noop): TSDeclareMethod

	declare export function TSEnumDeclaration(id: Identifier, members: TSEnumMember[]): TSEnumDeclaration

	declare export function TSEnumMember(id: Identifier | StringLiteral, initializer?: Expression): TSEnumMember

	declare export function TSExportAssignment(expression: Expression): TSExportAssignment

	declare export function TSExpressionWithTypeArguments(
expression: TSEntityName,
typeParameters?: TypeParameterInstantiation): TSExpressionWithTypeArguments

	declare export function TSExternalModuleReference(expression: StringLiteral): TSExternalModuleReference

	declare export function TSFunctionType(
typeParameters?: TypeParameterDeclaration,
typeAnnotation?: TSTypeAnnotation): TSFunctionType

	declare export function TSImportEqualsDeclaration(
id: Identifier,
moduleReference: TSEntityName | TSExternalModuleReference): TSImportEqualsDeclaration

	declare export function TSIndexSignature(parameters: Identifier[], typeAnnotation?: TSTypeAnnotation): TSIndexSignature

	declare export function TSIndexedAccessType(objectType: TSType, indexType: TSType): TSIndexedAccessType

	declare export function TSInterfaceBody(body: TSTypeElement[]): TSInterfaceBody

	declare export function TSInterfaceDeclaration(
id: Identifier,
typeParameters: TypeParameterDeclaration | void | null,
extends_: TSExpressionWithTypeArguments[] | void | null,
body: TSInterfaceBody): TSInterfaceDeclaration

	declare export function TSIntersectionType(types: TSType[]): TSIntersectionType

	declare export function TSLiteralType(literal: NumericLiteral | StringLiteral | BooleanLiteral): TSLiteralType

	declare export function TSMappedType(typeParameter: TypeParameter, typeAnnotation?: TSType): TSMappedType

	declare export function TSMethodSignature(
key: Expression,
typeParameters?: TypeParameterDeclaration,
parameters?: Array<Identifier | RestElement>,
typeAnnotation?: TSTypeAnnotation): TSMethodSignature

	declare export function TSModuleBlock(body: Statement[]): TSModuleBlock

	declare export function TSModuleDeclaration(
id: Identifier | StringLiteral,
body: TSModuleBlock | TSModuleDeclaration): TSModuleDeclaration

	declare export function TSNamespaceExportDeclaration(id: Identifier): TSNamespaceExportDeclaration

	declare export function TSNeverKeyword(): TSNeverKeyword

	declare export function TSNonNullExpression(expression: Expression): TSNonNullExpression

	declare export function TSNullKeyword(): TSNullKeyword

	declare export function TSNumberKeyword(): TSNumberKeyword

	declare export function TSObjectKeyword(): TSObjectKeyword

	declare export function TSParameterProperty(parameter: Identifier | AssignmentPattern): TSParameterProperty

	declare export function TSParenthesizedType(typeAnnotation: TSType): TSParenthesizedType

	declare export function TSPropertySignature(
key: Expression,
typeAnnotation?: TSTypeAnnotation,
initializer?: Expression): TSPropertySignature

	declare export function TSQualifiedName(left: TSEntityName, right: Identifier): TSQualifiedName

	declare export function TSStringKeyword(): TSStringKeyword

	declare export function TSSymbolKeyword(): TSSymbolKeyword

	declare export function TSThisType(): TSThisType

	declare export function TSTupleType(elementTypes: TSType[]): TSTupleType

	declare export function TSTypeAliasDeclaration(
id: Identifier,
typeParameters: TypeParameterDeclaration | void | null,
typeAnnotation: TSType): TSTypeAliasDeclaration

	declare export function TSTypeAnnotation(typeAnnotation: TSType): TSTypeAnnotation

	declare export function TSTypeAssertion(typeAnnotation: TSType, expression: Expression): TSTypeAssertion

	declare export function TSTypeLiteral(members: TSTypeElement[]): TSTypeLiteral

	declare export function TSTypeOperator(typeAnnotation: TSType): TSTypeOperator

	declare export function TSTypeParameter(constraint?: TSType, default_?: TSType): TSTypeParameter

	declare export function TSTypeParameterDeclaration(params: TSTypeParameter[]): TSTypeParameterDeclaration

	declare export function TSTypeParameterInstantiation(params: TSType[]): TSTypeParameterInstantiation

	declare export function TSTypePredicate(
parameterName: Identifier | TSThisType,
typeAnnotation: TSTypeAnnotation): TSTypePredicate

	declare export function TSTypeQuery(exprName: TSEntityName): TSTypeQuery

	declare export function TSTypeReference(
typeName: TSEntityName,
typeParameters?: TypeParameterInstantiation): TSTypeReference

	declare export function TSUndefinedKeyword(): TSUndefinedKeyword

	declare export function TSUnionType(types: TSType[]): TSUnionType

	declare export function TSVoidKeyword(): TSVoidKeyword

	declare export function isArrayExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isAssignmentExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBinaryExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDirective(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDirectiveLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBlockStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBreakStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isCallExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isCatchClause(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isConditionalExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isContinueStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDebuggerStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDoWhileStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isEmptyStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExpressionStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFile(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isForInStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isForStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFunctionDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFunctionExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isIfStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isLabeledStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isStringLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNumericLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNullLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBooleanLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isRegExpLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isLogicalExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isMemberExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNewExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isProgram(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isRestElement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isReturnStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isSequenceExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isSwitchCase(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isSwitchStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isThisExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isThrowStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTryStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isUnaryExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isUpdateExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isVariableDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isVariableDeclarator(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isWhileStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isWithStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isAssignmentPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isArrayPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isArrowFunctionExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClassBody(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClassDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClassExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportAllDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportDefaultDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportNamedDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isForOfStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isImportDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isImportDefaultSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isImportNamespaceSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isImportSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isMetaProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClassMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isSpreadElement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isSuper(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTaggedTemplateExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTemplateElement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTemplateLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isYieldExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isAnyTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isArrayTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBooleanTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBooleanLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNullLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClassImplements(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClassProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclareClass(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclareFunction(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclareInterface(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclareModule(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclareTypeAlias(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclareVariable(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExistentialTypeParam(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFunctionTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFunctionTypeParam(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isGenericTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isInterfaceExtends(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isInterfaceDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isIntersectionTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isMixedTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNullableTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNumericLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNumberTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isStringLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isStringTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isThisTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTupleTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeofTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeAlias(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeCastExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeParameter(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeParameterDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTypeParameterInstantiation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectTypeCallProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectTypeIndexer(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectTypeProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isQualifiedTypeIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isUnionTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isVoidTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXAttribute(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXClosingElement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXElement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXEmptyExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXExpressionContainer(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXMemberExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXNamespacedName(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXOpeningElement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXSpreadAttribute(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSXText(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNoop(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isParenthesizedExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isAwaitExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBindExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDecorator(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDoExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportDefaultSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportNamespaceSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isRestProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isSpreadProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBinary(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isScopable(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBlockParent(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBlock(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTerminatorless(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isCompletionStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isConditional(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isLoop(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isWhile(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExpressionWrapper(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFor(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isForXStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFunction(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFunctionParent(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isPureish(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isLVal(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isImmutable(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isUserWhitespacable(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isObjectMember(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isUnaryLike(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isClass(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isModuleDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isExportDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isModuleSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFlow(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFlowBaseAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isFlowDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isJSX(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isNumberLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isRegexLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isReferencedIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isReferencedMemberExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBindingIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isScope(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isReferenced(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isBlockScoped(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isVar(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isUser(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isGenerated(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isPure(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSAnyKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSArrayType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSAsExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSBooleanKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSCallSignatureDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSConstructSignatureDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSConstructorType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSDeclareFunction(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSDeclareMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSEnumDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSEnumMember(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSExportAssignment(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSExpressionWithTypeArguments(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSExternalModuleReference(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSFunctionType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSImportEqualsDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSIndexSignature(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSIndexedAccessType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSInterfaceBody(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSInterfaceDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSIntersectionType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSLiteralType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSMappedType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSMethodSignature(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSModuleBlock(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSModuleDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSNamespaceExportDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSNeverKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSNonNullExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSNullKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSNumberKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSObjectKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSParameterProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSParenthesizedType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSPropertySignature(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSQualifiedName(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSStringKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSSymbolKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSThisType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTupleType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeAliasDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeAssertion(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeOperator(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeParameter(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeParameterDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeParameterInstantiation(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypePredicate(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeQuery(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSTypeReference(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSUndefinedKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSUnionType(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export function isTSVoidKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): boolean

	declare export interface ReactHelpers {
isCompatTag(tagName?: string): boolean,
buildChildren(node: {[key: string]: any}): Node[]
} 
	declare export var react: ReactHelpers;
	declare export function assertArrayExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertAssignmentExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBinaryExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDirective(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDirectiveLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBlockStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBreakStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertCallExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertCatchClause(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertConditionalExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertContinueStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDebuggerStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDoWhileStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertEmptyStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExpressionStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFile(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertForInStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertForStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFunctionDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFunctionExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertIfStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertLabeledStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertStringLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNumericLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNullLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBooleanLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertRegExpLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertLogicalExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertMemberExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNewExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertProgram(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertRestElement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertReturnStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertSequenceExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertSwitchCase(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertSwitchStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertThisExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertThrowStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTryStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertUnaryExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertUpdateExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertVariableDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertVariableDeclarator(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertWhileStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertWithStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertAssignmentPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertArrayPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertArrowFunctionExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClassBody(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClassDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClassExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportAllDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportDefaultDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportNamedDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertForOfStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertImportDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertImportDefaultSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertImportNamespaceSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertImportSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertMetaProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClassMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertSpreadElement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertSuper(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTaggedTemplateExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTemplateElement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTemplateLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertYieldExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertAnyTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertArrayTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBooleanTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBooleanLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNullLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClassImplements(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClassProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclareClass(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclareFunction(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclareInterface(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclareModule(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclareTypeAlias(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclareVariable(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExistentialTypeParam(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFunctionTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFunctionTypeParam(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertGenericTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertInterfaceExtends(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertInterfaceDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertIntersectionTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertMixedTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNullableTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNumericLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNumberTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertStringLiteralTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertStringTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertThisTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTupleTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeofTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeAlias(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeCastExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeParameter(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeParameterDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTypeParameterInstantiation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectTypeCallProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectTypeIndexer(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectTypeProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertQualifiedTypeIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertUnionTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertVoidTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXAttribute(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXClosingElement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXElement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXEmptyExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXExpressionContainer(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXIdentifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXMemberExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXNamespacedName(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXOpeningElement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXSpreadAttribute(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSXText(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNoop(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertParenthesizedExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertAwaitExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBindExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDecorator(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDoExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportDefaultSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportNamespaceSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertRestProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertSpreadProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBinary(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertScopable(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBlockParent(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertBlock(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTerminatorless(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertCompletionStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertConditional(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertLoop(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertWhile(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExpressionWrapper(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFor(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertForXStatement(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFunction(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFunctionParent(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertPureish(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertLVal(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertImmutable(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertUserWhitespacable(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertObjectMember(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertUnaryLike(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertPattern(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertClass(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertModuleDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertExportDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertModuleSpecifier(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFlow(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFlowBaseAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertFlowDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertJSX(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertNumberLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertRegexLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSAnyKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSArrayType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSAsExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSBooleanKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSCallSignatureDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSConstructSignatureDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSConstructorType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSDeclareFunction(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSDeclareMethod(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSEnumDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSEnumMember(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSExportAssignment(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSExpressionWithTypeArguments(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSExternalModuleReference(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSFunctionType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSImportEqualsDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSIndexSignature(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSIndexedAccessType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSInterfaceBody(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSInterfaceDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSIntersectionType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSLiteralType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSMappedType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSMethodSignature(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSModuleBlock(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSModuleDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSNamespaceExportDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSNeverKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSNonNullExpression(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSNullKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSNumberKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSObjectKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSParameterProperty(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSParenthesizedType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSPropertySignature(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSQualifiedName(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSStringKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSSymbolKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSThisType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTupleType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeAliasDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeAnnotation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeAssertion(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeLiteral(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeOperator(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeParameter(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeParameterDeclaration(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeParameterInstantiation(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypePredicate(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeQuery(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSTypeReference(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSUndefinedKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSUnionType(node: {[key: string]: any}, opts?: {[key: string]: any}): void

	declare export function assertTSVoidKeyword(node: {[key: string]: any}, opts?: {[key: string]: any}): void

    }
