declare module "eslint-scope" {
  import typeof * as eslint from "eslint";

  import typeof * as estree from "estree";

  declare export var version: string;
  declare export class ScopeManager mixins undefined.ScopeManager {
    scopes: Scope[];
    globalScope: Scope;
    acquire(node: {}, inner?: boolean): Scope | null;
    getDeclaredVariables(node: {}): Variable[];
  }
  declare export class Scope mixins undefined.Scope {
    type:
      | "block"
      | "catch"
      | "class"
      | "for"
      | "function"
      | "function-expression-name"
      | "global"
      | "module"
      | "switch"
      | "with"
      | "TDZ";
    isStrict: boolean;
    upper: Scope | null;
    childScopes: Scope[];
    variableScope: Scope;
    block: estree.Node;
    variables: Variable[];
    set: Map<string, Variable>;
    references: Reference[];
    through: Reference[];
    functionExpressionScope: boolean;
  }
  declare export class Variable mixins undefined.Variable {
    name: string;
    identifiers: estree.Identifier[];
    references: Reference[];
    defs: eslint.Scope.Definition[];
  }
  declare export class Reference mixins undefined.Reference {
    identifier: estree.Identifier;
    from: Scope;
    resolved: Variable | null;
    writeExpr: estree.Node | null;
    init: boolean;
    isWrite(): boolean;
    isRead(): boolean;
    isWriteOnly(): boolean;
    isReadOnly(): boolean;
    isReadWrite(): boolean;
  }
  declare export interface AnalysisOptions {
    optimistic?: boolean;
    directive?: boolean;
    ignoreEval?: boolean;
    nodejsScope?: boolean;
    impliedStrict?: boolean;
    fallback?: string | ((node: {}) => string[]);
    sourceType?: "script" | "module";
    ecmaVersion?: number;
  }
  declare export function analyze(
    ast: {},
    options?: AnalysisOptions
  ): ScopeManager;
}
