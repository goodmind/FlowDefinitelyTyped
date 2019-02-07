declare module "sparqljs" {
  declare export var Parser: {
    new(
      prefixes?: {
        [prefix: string]: string
      },
      baseIRI?: string
    ): SparqlParser
  };
  declare export var Generator: {
    new(options?: GeneratorOptions): SparqlGenerator
  };
  declare export interface GeneratorOptions {
    allPrefixes?: boolean;
  }
  declare export interface SparqlParser {
    parse(query: string): SparqlQuery;
  }
  declare export interface SparqlGenerator {
    stringify(query: SparqlQuery): string;
  }
  declare export type SparqlQuery = Query | Update;
  declare export type Query =
    | SelectQuery
    | ConstructQuery
    | AskQuery
    | DescribeQuery;
  declare export interface BaseQuery {
    type: "query";
    base?: string;
    prefixes: {
      [prefix: string]: string
    };
    where?: Pattern[];
    values?: ValuePatternRow[];
  }
  declare export type SelectQuery = {
    queryType: "SELECT",
    variables: Variable[] | ["*"],
    distinct?: boolean,
    from?: {
      default: string[],
      named: string[]
    },
    reduced?: boolean,
    group?: Grouping[],
    having?: Expression[],
    order?: Ordering[],
    limit?: number,
    offset?: number
  } & BaseQuery;

  declare export interface Grouping {
    expression: Expression;
  }
  declare export interface Ordering {
    expression: Expression;
    descending?: boolean;
  }
  declare export type ConstructQuery = {
    queryType: "CONSTRUCT",
    template?: Triple[]
  } & BaseQuery;

  declare export type AskQuery = {
    queryType: "ASK"
  } & BaseQuery;

  declare export type DescribeQuery = {
    queryType: "DESCRIBE",
    variables: Variable[] | ["*"]
  } & BaseQuery;

  declare export interface Update {
    type: "update";
    prefixes: {
      [prefix: string]: string
    };
    updates: UpdateOperation[];
  }
  declare export type UpdateOperation =
    | InsertDeleteOperation
    | ManagementOperation;
  declare export interface InsertDeleteOperation {
    updateType: "insert" | "delete" | "deletewhere" | "insertdelete";
    graph?: string;
    insert?: Quads[];
    delete?: Quads[];
    where?: Pattern[];
  }
  declare export type Quads = BgpPattern | GraphQuads;
  declare export type ManagementOperation =
    | CopyMoveAddOperation
    | LoadOperation
    | CreateOperation
    | ClearDropOperation;
  declare export interface CopyMoveAddOperation {
    type: "copy" | "move" | "add";
    silent: boolean;
    source: GraphOrDefault;
    destination: GraphOrDefault;
  }
  declare export interface LoadOperation {
    type: "load";
    silent: boolean;
    source: string;
    destination: string | false;
  }
  declare export interface CreateOperation {
    type: "create";
    silent: boolean;
    graph: string;
  }
  declare export interface ClearDropOperation {
    type: "clear" | "drop";
    silent: boolean;
    graph: GraphReference;
  }
  declare export interface GraphOrDefault {
    type: "graph";
    name?: string;
    default?: boolean;
  }
  declare export type GraphReference = {
    named?: boolean,
    all?: boolean
  } & GraphOrDefault;

  /**
   * Examples: '?var', '*',
   *    SELECT (?a as ?b) ... ==> { expression: '?a', variable: '?b' }
   */
  declare export type Variable = VariableExpression | Term;
  declare export interface VariableExpression {
    expression: Expression;
    variable: Term;
  }
  declare export type Pattern =
    | BgpPattern
    | BlockPattern
    | GraphPattern
    | ServicePattern
    | FilterPattern
    | BindPattern
    | ValuesPattern
    | SelectQuery;

  /**
   * Basic Graph Pattern
   */
  declare export interface BgpPattern {
    type: "bgp";
    triples: Triple[];
  }
  declare export interface GraphQuads {
    type: "graph";
    name: Term;
    triples: Triple[];
  }
  declare export interface BlockPattern {
    type: "optional" | "union" | "group" | "minus" | "graph" | "service";
    patterns: Pattern[];
  }
  declare export type GroupPattern = {
    type: "group"
  } & BlockPattern;

  declare export type GraphPattern = {
    type: "graph",
    name: Term
  } & BlockPattern;

  declare export type ServicePattern = {
    type: "service",
    name: Term,
    silent: boolean
  } & BlockPattern;

  declare export interface FilterPattern {
    type: "filter";
    expression: Expression;
  }
  declare export interface BindPattern {
    type: "bind";
    expression: Expression;
    variable: Term;
  }
  declare export interface ValuesPattern {
    type: "values";
    values: ValuePatternRow[];
  }
  declare export interface ValuePatternRow {
    [variable: string]: Term;
  }

  /**
   * Either '?var', 'schema:iri', '_:blankNode',
   * '"literal"^^<schema:datatype>' or '{undefined}'.
   *
   * Term is a nominal type based on string.
   */
  declare export type Term = string & {
    __termBrand: string
  };
  declare export interface Triple {
    subject: Term;
    predicate: PropertyPath | Term;
    object: Term;
  }
  declare export interface PropertyPath {
    type: "path";
    pathType: "|" | "/" | "^" | "+" | "*" | "!";
    items: Array<PropertyPath | Term>;
  }
  declare export type Expression =
    | OperationExpression
    | FunctionCallExpression
    | AggregateExpression
    | BgpPattern
    | GroupPattern
    | Tuple
    | Term;
  declare export type Tuple = {} & Array<Expression>;

  declare export interface BaseExpression {
    type: string;
    distinct?: boolean;
  }
  declare export type OperationExpression = {
    type: "operation",
    operator: string,
    args: Expression[]
  } & BaseExpression;

  declare export type FunctionCallExpression = {
    type: "functionCall",
    function: string,
    args: Expression[]
  } & BaseExpression;

  declare export type AggregateExpression = {
    type: "aggregate",
    expression: Expression,
    aggregation: string,
    separator?: string
  } & BaseExpression;
}
