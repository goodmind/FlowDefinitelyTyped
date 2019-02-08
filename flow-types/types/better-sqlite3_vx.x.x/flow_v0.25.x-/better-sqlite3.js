declare interface Database$RunResult {
  changes: number;
  lastInsertRowid: Database$Integer.IntLike;
}

declare interface Database$Options {
  memory?: boolean;
  readonly?: boolean;
  fileMustExist?: boolean;
  timeout?: number;
}

declare interface Database$PragmaOptions {
  simple?: boolean;
}

declare interface Database$RegistrationOptions {
  varargs?: boolean;
  deterministic?: boolean;
  safeIntegers?: boolean;
}

declare type Database$AggregateOptions = {
  start?: any,
  step: (total: any, next: any) => any,
  inverse?: (total: any, dropped: any) => any,
  result?: (total: any) => any
} & Database$RegistrationOptions;

declare type Database$Integer = typeof Integer;

declare type Database$SqliteError = typeof SqliteError;

declare type Database$Statement = BetterSqlite3$Database$Statement;

declare type Database$ColumnDefinition = BetterSqlite3$Database$ColumnDefinition;

declare type Database$Transaction = BetterSqlite3$Database$Transaction<VariableArgFunction>;

declare type Database$Database = BetterSqlite3$Database$Database;
declare type BetterSqlite3$Statement = BetterSqlite3$BetterSqlite3$Statement;

declare type BetterSqlite3$ColumnDefinition = BetterSqlite3$BetterSqlite3$ColumnDefinition;

declare type BetterSqlite3$Transaction = BetterSqlite3$BetterSqlite3$Transaction<VariableArgFunction>;

declare type BetterSqlite3$Database = BetterSqlite3$BetterSqlite3$Database;

declare interface BetterSqlite3$DatabaseConstructor {
  new(
    filename: string,
    options?: BetterSqlite3$Database.Database$Options
  ): BetterSqlite3$Database;
  (
    filename: string,
    options?: BetterSqlite3$Database.Database$Options
  ): BetterSqlite3$Database;
  prototype: BetterSqlite3$Database;
  Database$Integer: typeof Integer;
  Database$SqliteError: typeof SqliteError;
}
declare module "better-sqlite3" {
  declare type VariableArgFunction = (...params: any[]) => any;
  declare type ArgumentTypes<F: VariableArgFunction> =
    "There was Conditional Type, use $Call utility type";
  declare class SqliteError mixins Error {
    name: string;
    message: string;
    code: string;
    constructor(message: string, code: string): this;
  }
  declare var BetterSqlite3$Database: BetterSqlite3$BetterSqlite3$DatabaseConstructor;
  declare module.exports: typeof BetterSqlite3$Database;
}
