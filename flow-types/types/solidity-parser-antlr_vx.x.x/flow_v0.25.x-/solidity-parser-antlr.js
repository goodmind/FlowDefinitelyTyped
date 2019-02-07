declare module "solidity-parser-antlr" {
  declare export interface LineColumn {
    line: number;
    column: number;
  }
  declare export interface Location {
    start: LineColumn;
    end: LineColumn;
  }
  declare export interface BaseASTNode {
    type: string;
    range?: [number, number];
    loc?: Location;
  }
  declare export type SourceUnit = {} & BaseASTNode;

  declare export type PragmaDirective = {} & BaseASTNode;

  declare export type PragmaName = {} & BaseASTNode;

  declare export type PragmaValue = {} & BaseASTNode;

  declare export type Version = {} & BaseASTNode;

  declare export type VersionOperator = {} & BaseASTNode;

  declare export type VersionConstraint = {} & BaseASTNode;

  declare export type ImportDeclaration = {} & BaseASTNode;

  declare export type ImportDirective = {} & BaseASTNode;

  declare export type ContractDefinition = {
    name: string
  } & BaseASTNode;

  declare export type InheritanceSpecifier = {} & BaseASTNode;

  declare export type ContractPart = {} & BaseASTNode;

  declare export type StateVariableDeclaration = {
    variables: VariableDeclaration[]
  } & BaseASTNode;

  declare export type UsingForDeclaration = {} & BaseASTNode;

  declare export type StructDefinition = {} & BaseASTNode;

  declare export type ModifierDefinition = {
    name: string
  } & BaseASTNode;

  declare export type ModifierInvocation = {
    name: string
  } & BaseASTNode;

  declare export type FunctionDefinition = {
    name: string
  } & BaseASTNode;

  declare export type ReturnParameters = {} & BaseASTNode;

  declare export type ModifierList = {} & BaseASTNode;

  declare export type EventDefinition = {} & BaseASTNode;

  declare export type EnumValue = {} & BaseASTNode;

  declare export type EnumDefinition = {} & BaseASTNode;

  declare export type ParameterList = {} & BaseASTNode;

  declare export type Parameter = {} & BaseASTNode;

  declare export type EventParameterList = {} & BaseASTNode;

  declare export type EventParameter = {} & BaseASTNode;

  declare export type FunctionTypeParameterList = {} & BaseASTNode;

  declare export type FunctionTypeParameter = {} & BaseASTNode;

  declare export type VariableDeclaration = {
    visibility: "public" | "private",
    isStateVar: boolean
  } & BaseASTNode;

  declare export type TypeName = {} & BaseASTNode;

  declare export type UserDefinedTypeName = {} & BaseASTNode;

  declare export type Mapping = {} & BaseASTNode;

  declare export type FunctionTypeName = {} & BaseASTNode;

  declare export type StorageLocation = {} & BaseASTNode;

  declare export type StateMutability = {} & BaseASTNode;

  declare export type Block = {} & BaseASTNode;

  declare export type Statement = {} & BaseASTNode;

  declare export type ExpressionStatement = {
    expression: ASTNode
  } & BaseASTNode;

  declare export type IfStatement = {
    trueBody: ASTNode,
    falseBody: ASTNode
  } & BaseASTNode;

  declare export type WhileStatement = {} & BaseASTNode;

  declare export type SimpleStatement = {} & BaseASTNode;

  declare export type ForStatement = {} & BaseASTNode;

  declare export type InlineAssemblyStatement = {} & BaseASTNode;

  declare export type DoWhileStatement = {} & BaseASTNode;

  declare export type ContinueStatement = {} & BaseASTNode;

  declare export type BreakStatement = {} & BaseASTNode;

  declare export type ReturnStatement = {} & BaseASTNode;

  declare export type ThrowStatement = {} & BaseASTNode;

  declare export type VariableDeclarationStatement = {} & BaseASTNode;

  declare export type IdentifierList = {} & BaseASTNode;

  declare export type ElementaryTypeName = {} & BaseASTNode;

  declare export type Expression = {} & BaseASTNode;

  declare export type PrimaryExpression = {} & BaseASTNode;

  declare export type ExpressionList = {} & BaseASTNode;

  declare export type NameValueList = {} & BaseASTNode;

  declare export type NameValue = {} & BaseASTNode;

  declare export type FunctionCallArguments = {} & BaseASTNode;

  declare export type AssemblyBlock = {} & BaseASTNode;

  declare export type AssemblyItem = {} & BaseASTNode;

  declare export type AssemblyExpression = {} & BaseASTNode;

  declare export type AssemblyCall = {} & BaseASTNode;

  declare export type AssemblyLocalDefinition = {} & BaseASTNode;

  declare export type AssemblyAssignment = {} & BaseASTNode;

  declare export type AssemblyIdentifierOrList = {} & BaseASTNode;

  declare export type AssemblyIdentifierList = {} & BaseASTNode;

  declare export type AssemblyStackAssignment = {} & BaseASTNode;

  declare export type LabelDefinition = {} & BaseASTNode;

  declare export type AssemblySwitch = {} & BaseASTNode;

  declare export type AssemblyCase = {} & BaseASTNode;

  declare export type AssemblyFunctionDefinition = {} & BaseASTNode;

  declare export type AssemblyFunctionReturns = {} & BaseASTNode;

  declare export type AssemblyFor = {} & BaseASTNode;

  declare export type AssemblyIf = {} & BaseASTNode;

  declare export type AssemblyLiteral = {} & BaseASTNode;

  declare export type SubAssembly = {} & BaseASTNode;

  declare export type TupleExpression = {} & BaseASTNode;

  declare export type ElementaryTypeNameExpression = {} & BaseASTNode;

  declare export type NumberLiteral = {} & BaseASTNode;

  declare export type Identifier = {} & BaseASTNode;

  declare export type BinOp =
    | "+"
    | "-"
    | "*"
    | "/"
    | "**"
    | "%"
    | "<<"
    | ">>"
    | "&&"
    | "||"
    | "&"
    | "|"
    | "^"
    | "<"
    | ">"
    | "<="
    | ">="
    | "=="
    | "!="
    | "="
    | "|="
    | "^="
    | "&="
    | "<<="
    | ">>="
    | "+="
    | "-="
    | "*="
    | "/="
    | "%=";
  declare export type BinaryOperation = {
    left: ASTNode,
    right: ASTNode,
    operator: BinOp
  } & BaseASTNode;

  declare export type Conditional = {
    trueExpression: ASTNode,
    falseExpression: ASTNode
  } & BaseASTNode;

  declare export type ASTNode =
    | SourceUnit
    | PragmaDirective
    | PragmaName
    | PragmaValue
    | Version
    | VersionOperator
    | VersionConstraint
    | ImportDeclaration
    | ImportDirective
    | ContractDefinition
    | InheritanceSpecifier
    | ContractPart
    | StateVariableDeclaration
    | UsingForDeclaration
    | StructDefinition
    | ModifierDefinition
    | ModifierInvocation
    | FunctionDefinition
    | ReturnParameters
    | ModifierList
    | EventDefinition
    | EnumValue
    | EnumDefinition
    | ParameterList
    | Parameter
    | EventParameterList
    | EventParameter
    | FunctionTypeParameterList
    | FunctionTypeParameter
    | VariableDeclaration
    | TypeName
    | UserDefinedTypeName
    | Mapping
    | FunctionTypeName
    | StorageLocation
    | StateMutability
    | Block
    | Statement
    | ExpressionStatement
    | IfStatement
    | WhileStatement
    | SimpleStatement
    | ForStatement
    | InlineAssemblyStatement
    | DoWhileStatement
    | ContinueStatement
    | BreakStatement
    | ReturnStatement
    | ThrowStatement
    | VariableDeclarationStatement
    | IdentifierList
    | ElementaryTypeName
    | Expression
    | PrimaryExpression
    | ExpressionList
    | NameValueList
    | NameValue
    | FunctionCallArguments
    | AssemblyBlock
    | AssemblyItem
    | AssemblyExpression
    | AssemblyCall
    | AssemblyLocalDefinition
    | AssemblyAssignment
    | AssemblyIdentifierOrList
    | AssemblyIdentifierList
    | AssemblyStackAssignment
    | LabelDefinition
    | AssemblySwitch
    | AssemblyCase
    | AssemblyFunctionDefinition
    | AssemblyFunctionReturns
    | AssemblyFor
    | AssemblyIf
    | AssemblyLiteral
    | SubAssembly
    | TupleExpression
    | ElementaryTypeNameExpression
    | NumberLiteral
    | Identifier
    | BinaryOperation
    | Conditional;
  declare export interface Visitor {
    SourceUnit?: (node: SourceUnit) => void;
    PragmaDirective?: (node: PragmaDirective) => void;
    PragmaName?: (node: PragmaName) => void;
    PragmaValue?: (node: PragmaValue) => void;
    Version?: (node: Version) => void;
    VersionOperator?: (node: VersionOperator) => void;
    VersionConstraint?: (node: VersionConstraint) => void;
    ImportDeclaration?: (node: ImportDeclaration) => void;
    ImportDirective?: (node: ImportDirective) => void;
    ContractDefinition?: (node: ContractDefinition) => void;
    InheritanceSpecifier?: (node: InheritanceSpecifier) => void;
    ContractPart?: (node: ContractPart) => void;
    StateVariableDeclaration?: (node: StateVariableDeclaration) => void;
    UsingForDeclaration?: (node: UsingForDeclaration) => void;
    StructDefinition?: (node: StructDefinition) => void;
    ModifierDefinition?: (node: ModifierDefinition) => void;
    ModifierInvocation?: (node: ModifierInvocation) => void;
    FunctionDefinition?: (node: FunctionDefinition) => void;
    ReturnParameters?: (node: ReturnParameters) => void;
    ModifierList?: (node: ModifierList) => void;
    EventDefinition?: (node: EventDefinition) => void;
    EnumValue?: (node: EnumValue) => void;
    EnumDefinition?: (node: EnumDefinition) => void;
    ParameterList?: (node: ParameterList) => void;
    Parameter?: (node: Parameter) => void;
    EventParameterList?: (node: EventParameterList) => void;
    EventParameter?: (node: EventParameter) => void;
    FunctionTypeParameterList?: (node: FunctionTypeParameterList) => void;
    FunctionTypeParameter?: (node: FunctionTypeParameter) => void;
    VariableDeclaration?: (node: VariableDeclaration) => void;
    TypeName?: (node: TypeName) => void;
    UserDefinedTypeName?: (node: UserDefinedTypeName) => void;
    Mapping?: (node: Mapping) => void;
    FunctionTypeName?: (node: FunctionTypeName) => void;
    StorageLocation?: (node: StorageLocation) => void;
    StateMutability?: (node: StateMutability) => void;
    Block?: (node: Block) => void;
    Statement?: (node: Statement) => void;
    ExpressionStatement?: (node: ExpressionStatement) => void;
    IfStatement?: (node: IfStatement) => void;
    WhileStatement?: (node: WhileStatement) => void;
    SimpleStatement?: (node: SimpleStatement) => void;
    ForStatement?: (node: ForStatement) => void;
    InlineAssemblyStatement?: (node: InlineAssemblyStatement) => void;
    DoWhileStatement?: (node: DoWhileStatement) => void;
    ContinueStatement?: (node: ContinueStatement) => void;
    BreakStatement?: (node: BreakStatement) => void;
    ReturnStatement?: (node: ReturnStatement) => void;
    ThrowStatement?: (node: ThrowStatement) => void;
    VariableDeclarationStatement?: (node: VariableDeclarationStatement) => void;
    IdentifierList?: (node: IdentifierList) => void;
    ElementaryTypeName?: (node: ElementaryTypeName) => void;
    Expression?: (node: Expression) => void;
    PrimaryExpression?: (node: PrimaryExpression) => void;
    ExpressionList?: (node: ExpressionList) => void;
    NameValueList?: (node: NameValueList) => void;
    NameValue?: (node: NameValue) => void;
    FunctionCallArguments?: (node: FunctionCallArguments) => void;
    AssemblyBlock?: (node: AssemblyBlock) => void;
    AssemblyItem?: (node: AssemblyItem) => void;
    AssemblyExpression?: (node: AssemblyExpression) => void;
    AssemblyCall?: (node: AssemblyCall) => void;
    AssemblyLocalDefinition?: (node: AssemblyLocalDefinition) => void;
    AssemblyAssignment?: (node: AssemblyAssignment) => void;
    AssemblyIdentifierOrList?: (node: AssemblyIdentifierOrList) => void;
    AssemblyIdentifierList?: (node: AssemblyIdentifierList) => void;
    AssemblyStackAssignment?: (node: AssemblyStackAssignment) => void;
    LabelDefinition?: (node: LabelDefinition) => void;
    AssemblySwitch?: (node: AssemblySwitch) => void;
    AssemblyCase?: (node: AssemblyCase) => void;
    AssemblyFunctionDefinition?: (node: AssemblyFunctionDefinition) => void;
    AssemblyFunctionReturns?: (node: AssemblyFunctionReturns) => void;
    AssemblyFor?: (node: AssemblyFor) => void;
    AssemblyIf?: (node: AssemblyIf) => void;
    AssemblyLiteral?: (node: AssemblyLiteral) => void;
    SubAssembly?: (node: SubAssembly) => void;
    TupleExpression?: (node: TupleExpression) => void;
    ElementaryTypeNameExpression?: (node: ElementaryTypeNameExpression) => void;
    NumberLiteral?: (node: NumberLiteral) => void;
    Identifier?: (node: Identifier) => void;
    BinaryOperation?: (node: BinaryOperation) => void;
    Conditional?: (node: Conditional) => void;
  }
  declare export interface ParserOpts {
    tolerant?: boolean;
    range?: boolean;
    loc?: boolean;
  }
  declare export function parse(
    sourceCode: string,
    parserOpts: ParserOpts
  ): ASTNode;

  declare export function visit(ast: ASTNode, visitor: Visitor): void;
}
