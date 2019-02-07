declare module "react-native-sqlite-storage" {
  declare export function DEBUG(isDebug: boolean): void;

  declare export function enablePromise(enablePromise: boolean): void;

  declare export function openDatabase(
    params: DatabaseParams
  ): Promise<SQLiteDatabase>;

  declare export function openDatabase(
    params: DatabaseParams,
    success?: () => void,
    error?: (e: SQLError) => void
  ): SQLiteDatabase;

  declare export function deleteDatabase(params: DatabaseParams): Promise<void>;

  declare export function deleteDatabase(
    params: DatabaseParams,
    success?: () => void,
    error?: (err: SQLError) => void
  ): void;

  declare export type Location = "default" | "Library" | "Documents";
  declare export interface DatabaseOptionalParams {
    createFromLocation?: number | string;
    key?: string;
    readOnly?: boolean;
  }
  declare export type DatabaseParams = {
    name: string,

    /**
     * Affects iOS database file location
     * 'default': Library/LocalDatabase subdirectory - NOT visible to iTunes and NOT backed up by iCloud
     * 'Library': Library subdirectory - backed up by iCloud, NOT visible to iTunes
     * 'Documents': Documents subdirectory - visible to iTunes and backed up by iCloud
     */
    location: Location
  } & DatabaseOptionalParams;

  declare export interface ResultSet {
    insertId: number;
    rowsAffected: number;
    rows: ResultSetRowList;
  }
  declare export interface ResultSetRowList {
    length: number;
    item(index: number): any;
  }
  declare export class SQLErrors {
    constructor(...args: empty): mixed;
    static +UNKNOWN_ERR: Class<SQLErrors__UNKNOWN_ERR> &
      SQLErrors__UNKNOWN_ERR &
      0; // 0
    static +DATABASE_ERR: Class<SQLErrors__DATABASE_ERR> &
      SQLErrors__DATABASE_ERR &
      1; // 1
    static +VERSION_ERR: Class<SQLErrors__VERSION_ERR> &
      SQLErrors__VERSION_ERR &
      2; // 2
    static +TOO_LARGE_ERR: Class<SQLErrors__TOO_LARGE_ERR> &
      SQLErrors__TOO_LARGE_ERR &
      3; // 3
    static +QUOTA_ERR: Class<SQLErrors__QUOTA_ERR> & SQLErrors__QUOTA_ERR & 4; // 4
    static +SYNTAX_ERR: Class<SQLErrors__SYNTAX_ERR> &
      SQLErrors__SYNTAX_ERR &
      5; // 5
    static +CONSTRAINT_ERR: Class<SQLErrors__CONSTRAINT_ERR> &
      SQLErrors__CONSTRAINT_ERR &
      6; // 6
    static +TIMEOUT_ERR: Class<SQLErrors__TIMEOUT_ERR> &
      SQLErrors__TIMEOUT_ERR &
      7; // 7
  }

  declare class SQLErrors__UNKNOWN_ERR mixins SQLErrors {}
  declare class SQLErrors__DATABASE_ERR mixins SQLErrors {}
  declare class SQLErrors__VERSION_ERR mixins SQLErrors {}
  declare class SQLErrors__TOO_LARGE_ERR mixins SQLErrors {}
  declare class SQLErrors__QUOTA_ERR mixins SQLErrors {}
  declare class SQLErrors__SYNTAX_ERR mixins SQLErrors {}
  declare class SQLErrors__CONSTRAINT_ERR mixins SQLErrors {}
  declare class SQLErrors__TIMEOUT_ERR mixins SQLErrors {}

  declare export interface SQLError {
    code: number;
    message: string;
  }
  declare export type StatementCallback = (
    transaction: Transaction,
    resultSet: ResultSet
  ) => void;
  declare export type StatementErrorCallback = (
    transaction: Transaction,
    error: SQLError
  ) => void;
  declare export interface Transaction {
    executeSql(
      sqlStatement: string,
      arguments?: any[]
    ): Promise<[Transaction, ResultSet]>;
    executeSql(
      sqlStatement: string,
      arguments?: any[],
      callback?: StatementCallback,
      errorCallback?: StatementErrorCallback
    ): void;
  }
  declare export type TransactionCallback = (transaction: Transaction) => void;
  declare export type TransactionErrorCallback = (error: SQLError) => void;
  declare export interface SQLiteDatabase {
    transaction(scope: (tx: Transaction) => void): Promise<Transaction>;
    transaction(
      scope: (tx: Transaction) => void,
      error?: TransactionErrorCallback,
      success?: TransactionCallback
    ): void;
    readTransaction(
      scope: (tx: Transaction) => void
    ): Promise<TransactionCallback>;
    readTransaction(
      scope: (tx: Transaction) => void,
      error?: TransactionErrorCallback,
      success?: TransactionCallback
    ): void;
    close(): Promise<void>;
    close(success: () => void, error: (err: SQLError) => void): void;
    executeSql(statement: string, params?: any[]): Promise<[ResultSet]>;
    executeSql(
      statement: string,
      params?: any[],
      success?: StatementCallback,
      error?: StatementErrorCallback
    ): void;
    attach(nameToAttach: string, alias: string): Promise<void>;
    attach(
      nameToAttach: string,
      alias: string,
      success?: () => void,
      error?: (err: SQLError) => void
    ): void;
    dettach(alias: string): Promise<void>;
    dettach(
      alias: string,
      success?: () => void,
      error?: (err: SQLError) => void
    ): void;
  }
}
