declare module "cordova-sqlite-storage" {
  declare interface Window {
    sqlitePlugin: SQLitePlugin$SQLitePlugin$SQLite;
  }
  declare var sqlitePlugin: SQLitePlugin$SQLitePlugin$SQLite;
  declare type SQLitePlugin$TransactionFunction = (
    tx: SQLitePlugin$Transaction
  ) => void;

  declare type SQLitePlugin$SuccessCallback = () => void;

  declare type SQLitePlugin$DatabaseSuccessCallback = (
    db: SQLitePlugin$Database
  ) => void;

  declare type SQLitePlugin$StatementSuccessCallback = (
    results: SQLitePlugin$Results
  ) => void;

  declare type SQLitePlugin$TransactionStatementSuccessCallback = (
    tx: SQLitePlugin$Transaction,
    results: SQLitePlugin$Results
  ) => void;

  declare type SQLitePlugin$ErrorCallback = (err: Error) => void;

  declare type SQLitePlugin$TransactionStatementErrorCallback = (
    tx: SQLitePlugin$Transaction,
    err: Error
  ) => boolean | void;

  declare interface SQLitePlugin$OpenArgs {
    name: string;
    location?: string;
    iosDatabaseLocation?: string;
    androidDatabaseImplementation?: number;
    androidLockWorkaround?: number;
    createFromLocation?: number;
    [key: string]: any;
  }

  declare interface SQLitePlugin$DeleteArgs {
    name: string;
    location?: string;
    iosDatabaseLocation?: string;
  }

  declare interface SQLitePlugin$Results {
    rowsAffected: number;
    insertId?: number;
    rows: {
      length: number,
      item(i: number): any
    };
  }

  declare interface SQLitePlugin$Transaction {
    executeSql(
      statement: string,
      params?: any[],
      success?: SQLitePlugin$TransactionStatementSuccessCallback,
      error?: SQLitePlugin$TransactionStatementErrorCallback
    ): void;
  }

  declare interface SQLitePlugin$Database {
    transaction(
      fn: SQLitePlugin$TransactionFunction,
      error?: SQLitePlugin$ErrorCallback,
      success?: SQLitePlugin$SuccessCallback
    ): void;
    readTransaction(
      fn: SQLitePlugin$TransactionFunction,
      error?: SQLitePlugin$ErrorCallback,
      success?: SQLitePlugin$SuccessCallback
    ): void;
    executeSql(
      statement: string,
      params?: any[],
      success?: SQLitePlugin$StatementSuccessCallback,
      error?: SQLitePlugin$ErrorCallback
    ): void;
    sqlBatch(
      sqlStatements: Array<string | [string, any[]]>,
      success?: SQLitePlugin$SuccessCallback,
      error?: SQLitePlugin$ErrorCallback
    ): void;
    close(
      success?: SQLitePlugin$SuccessCallback,
      error?: SQLitePlugin$ErrorCallback
    ): void;
  }

  declare interface SQLitePlugin$SQLite {
    openDatabase(
      args: SQLitePlugin$OpenArgs,
      success?: SQLitePlugin$DatabaseSuccessCallback,
      error?: SQLitePlugin$ErrorCallback
    ): SQLitePlugin$Database;
    deleteDatabase(
      args: SQLitePlugin$DeleteArgs,
      success?: SQLitePlugin$SuccessCallback,
      error?: SQLitePlugin$ErrorCallback
    ): void;
    selfTest(
      success?: SQLitePlugin$SuccessCallback,
      error?: SQLitePlugin$ErrorCallback
    ): void;
    echoTest(ok?: (value: string) => void, error?: (msg: string) => void): void;
  }
}
