declare module "node-sql-parser" {
  declare export interface With {
    name: string;
    stmt: any[];
    columns?: any[];
  }
  declare export type WhilteListCheckMode = "table" | "column";
  declare export interface TableColumnAst {
    tableList: string[];
    columnsList: string[];
    ast: AST[] | AST;
  }
  declare export interface From {
    db: string | null;
    table: string;
    as: string | null;
  }
  declare export interface Dual {
    type: "dual";
  }
  declare export interface Limit {
    type: string;
    value: number;
  }
  declare export interface OrderBy {
    type: "ASC" | "DESC";
    expr: any;
  }
  declare export interface ColumnRef {
    type: "column_ref";
    table: string | null;
    column: string;
  }
  declare export interface SetList {
    column: string;
    value: any;
    table: string | null;
  }
  declare export interface InsertReplaceValue {
    type: "expr_list";
    value: any[];
  }
  declare export interface Select {
    with: With | null;
    type: "select";
    options: any[] | null;
    distinct: "DISTINCT" | null;
    columns: any[] | "*";
    from: Array<From | Dual> | null;
    where: any;
    groupby: ColumnRef[] | null;
    having: any[] | null;
    orderby: OrderBy[] | null;
    limit: Limit[] | null;
  }
  declare export interface Insert_Replace {
    type: "replace" | "insert";
    db: string | null;
    table: string;
    columns: string[] | null;
    values: InsertReplaceValue[];
  }
  declare export interface Update {
    type: "udpate";
    db: string | null;
    table: string;
    set: SetList[];
    where: any;
  }
  declare export interface Delete {
    type: "delete";
    tables: any;
    from: Array<From | Dual>;
    where: any;
  }
  declare export type AST = Select | Insert_Replace | Update | Delete;
  declare export class Parser {
    constructor(): this;
    parse(sql: string): TableColumnAst;
    astify(sql: string): AST[] | AST;
    sqlify(ast: AST[] | AST): string;
    whiteListCheck(
      sql: string,
      whiteList: string[],
      type?: WhilteListCheckMode
    ): Error | void;
    tableList(sql: string): string[];
    columnList(sql: string): string[];
  }
}
