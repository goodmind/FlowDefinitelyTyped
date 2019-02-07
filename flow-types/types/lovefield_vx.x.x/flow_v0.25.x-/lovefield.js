declare module "lovefield" {
  declare var npm$namespace$lf: {
    bind: typeof lf$bind
  };
  declare class lf$Order {
    constructor(...args: empty): mixed;
    static +ASC: Class<lf$Order__ASC> & lf$Order__ASC & 0; // 0
    static +DESC: Class<lf$Order__DESC> & lf$Order__DESC & 1; // 1
  }

  declare class lf$Order__ASC mixins lf$Order {}
  declare class lf$Order__DESC mixins lf$Order {}

  declare class lf$Type {
    constructor(...args: empty): mixed;
    static +ARRAY_BUFFER: Class<lf$Type__ARRAY_BUFFER> &
      lf$Type__ARRAY_BUFFER &
      0; // 0
    static +BOOLEAN: Class<lf$Type__BOOLEAN> & lf$Type__BOOLEAN & 1; // 1
    static +DATE_TIME: Class<lf$Type__DATE_TIME> & lf$Type__DATE_TIME & 2; // 2
    static +INTEGER: Class<lf$Type__INTEGER> & lf$Type__INTEGER & 3; // 3
    static +NUMBER: Class<lf$Type__NUMBER> & lf$Type__NUMBER & 4; // 4
    static +OBJECT: Class<lf$Type__OBJECT> & lf$Type__OBJECT & 5; // 5
    static +STRING: Class<lf$Type__STRING> & lf$Type__STRING & 6; // 6
  }

  declare class lf$Type__ARRAY_BUFFER mixins lf$Type {}
  declare class lf$Type__BOOLEAN mixins lf$Type {}
  declare class lf$Type__DATE_TIME mixins lf$Type {}
  declare class lf$Type__INTEGER mixins lf$Type {}
  declare class lf$Type__NUMBER mixins lf$Type {}
  declare class lf$Type__OBJECT mixins lf$Type {}
  declare class lf$Type__STRING mixins lf$Type {}

  declare class lf$ConstraintAction {
    constructor(...args: empty): mixed;
    static +RESTRICT: Class<lf$ConstraintAction__RESTRICT> &
      lf$ConstraintAction__RESTRICT &
      0; // 0
    static +CASCADE: Class<lf$ConstraintAction__CASCADE> &
      lf$ConstraintAction__CASCADE &
      1; // 1
  }

  declare class lf$ConstraintAction__RESTRICT mixins lf$ConstraintAction {}
  declare class lf$ConstraintAction__CASCADE mixins lf$ConstraintAction {}

  declare class lf$ConstraintTiming {
    constructor(...args: empty): mixed;
    static +IMMEDIATE: Class<lf$ConstraintTiming__IMMEDIATE> &
      lf$ConstraintTiming__IMMEDIATE &
      0; // 0
    static +DEFERRABLE: Class<lf$ConstraintTiming__DEFERRABLE> &
      lf$ConstraintTiming__DEFERRABLE &
      1; // 1
  }

  declare class lf$ConstraintTiming__IMMEDIATE mixins lf$ConstraintTiming {}
  declare class lf$ConstraintTiming__DEFERRABLE mixins lf$ConstraintTiming {}

  declare interface lf$Binder {
    getIndex(): number;
  }

  declare interface lf$Predicate {}

  declare interface lf$Row {}

  declare type lf$ValueLiteral = string | number | boolean | Date;

  declare interface lf$PredicateProvider {
    eq(
      operand: lf$ValueLiteral | schema$schema$Column | lf$Binder
    ): lf$Predicate;
    neq(
      operand: lf$ValueLiteral | schema$schema$Column | lf$Binder
    ): lf$Predicate;
    lt(
      operand: lf$ValueLiteral | schema$schema$Column | lf$Binder
    ): lf$Predicate;
    lte(
      operand: lf$ValueLiteral | schema$schema$Column | lf$Binder
    ): lf$Predicate;
    gt(
      operand: lf$ValueLiteral | schema$schema$Column | lf$Binder
    ): lf$Predicate;
    gte(
      operand: lf$ValueLiteral | schema$schema$Column | lf$Binder
    ): lf$Predicate;
    match(operand: RegExp | lf$Binder): lf$Predicate;
    between(
      from: lf$ValueLiteral | lf$Binder,
      to: lf$ValueLiteral | lf$Binder
    ): lf$Predicate;
    in(values: lf$Binder | lf$ValueLiteral[]): lf$Predicate;
    isNull(): lf$Predicate;
    isNotNull(): lf$Predicate;
  }

  declare function lf$bind(index: number): lf$Binder;

  declare interface lf$TransactionStats {
    success(): boolean;
    insertedRowCount(): number;
    updatedRowCount(): number;
    deletedRowCount(): number;
    changedTableCount(): number;
  }

  declare interface lf$Transaction {
    attach(query: query$schema$Builder): Promise<{ [key: string]: any }[]>;
    begin(scope: schema$schema$Table[]): Promise<void>;
    commit(): Promise<void>;
    exec(queries: query$schema$Builder[]): Promise<{ [key: string]: any }[][]>;
    rollback(): Promise<void>;
    stats(): lf$TransactionStats;
  }

  declare class lf$TransactionType {
    constructor(...args: empty): mixed;
    static +READ_ONLY: Class<lf$TransactionType__READ_ONLY> &
      lf$TransactionType__READ_ONLY &
      0; // 0
    static +READ_WRITE: Class<lf$TransactionType__READ_WRITE> &
      lf$TransactionType__READ_WRITE &
      1; // 1
  }

  declare class lf$TransactionType__READ_ONLY mixins lf$TransactionType {}
  declare class lf$TransactionType__READ_WRITE mixins lf$TransactionType {}

  declare interface lf$Database {
    close(): void;
    createTransaction(type?: lf$TransactionType): lf$Transaction;
    delete(): query$query$Delete;
    export(): Promise<{ [key: string]: any }>;
    getSchema(): schema$lf$Database;
    import(data: { [key: string]: any }): Promise<void>;
    insertOrReplace(): query$query$Insert;
    insert(): query$query$Insert;
    observe(query: query$query$Select, callback: Function): void;
    select(...columns: schema$schema$Column[]): query$query$Select;
    unobserve(query: query$query$Select, callback: Function): void;
    update(table: schema$schema$Table): query$query$Update;
    name(): string;
    pragma(): schema$DatabasePragma;
    tables(): schema$Table[];
    table(tableName: string): schema$Table;
    version(): number;
  }

  declare interface query$Builder {
    lf$bind(...values: any[]): query$Builder;
    exec(): Promise<{ [key: string]: any }[]>;
    explain(): string;
    toSql(): string;
    connect(options?: schema$ConnectOptions): Promise<lf$lf$Database>;
    createTable(tableName: string): schema$TableBuilder;
    getSchema(): lf$Database;
    setPragma(pragma: schema$DatabasePragma): void;
  }

  declare type query$Delete = {
    from(table: schema$schema$Table): query$Delete,
    where(predicate: lf$Predicate): query$Delete
  } & query$Builder;

  declare type query$Insert = {
    into(table: schema$schema$Table): query$Insert,
    values(rows: lf$Row[] | lf$Binder | lf$Binder[]): query$Insert
  } & query$Builder;

  declare type query$Select = {
    from(...tables: schema$schema$Table[]): query$Select,
    groupBy(...columns: schema$schema$Column[]): query$Select,
    innerJoin(
      table: schema$schema$Table,
      predicate: lf$Predicate
    ): query$Select,
    leftOuterJoin(
      table: schema$schema$Table,
      predicate: lf$Predicate
    ): query$Select,
    limit(numberOfRows: lf$Binder | number): query$Select,
    orderBy(column: schema$schema$Column, order?: lf$Order): query$Select,
    skip(numberOfRows: lf$Binder | number): query$Select,
    where(predicate: lf$Predicate): query$Select
  } & query$Builder;

  declare type query$Update = {
    set(column: schema$schema$Column, value: any): query$Update,
    where(predicate: lf$Predicate): query$Update
  } & query$Builder;

  declare interface raw$BackStore {
    getRawDBInstance(): any;
    getRawTransaction(): any;
    dropTable(tableName: string): Promise<void>;
    addTableColumn(
      tableName: string,
      columnName: string,
      defaultValue: string | boolean | number | Date | ArrayBuffer
    ): Promise<void>;
    dropTableColumn(tableName: string, columnName: string): Promise<void>;
    renameTableColumn(
      tableName: string,
      oldColumnName: string,
      newColumnName: string
    ): Promise<void>;
    createRow(payload: { [key: string]: any }): lf$Row;
    getVersion(): number;
    dump(): { [key: string]: any }[];
  }

  declare var npm$namespace$schema: {
    create: typeof schema$create
  };
  declare class schema$DataStoreType {
    constructor(...args: empty): mixed;
    static +INDEXED_DB: Class<schema$DataStoreType__INDEXED_DB> &
      schema$DataStoreType__INDEXED_DB &
      0; // 0
    static +MEMORY: Class<schema$DataStoreType__MEMORY> &
      schema$DataStoreType__MEMORY &
      1; // 1
    static +LOCAL_STORAGE: Class<schema$DataStoreType__LOCAL_STORAGE> &
      schema$DataStoreType__LOCAL_STORAGE &
      2; // 2
    static +FIREBASE: Class<schema$DataStoreType__FIREBASE> &
      schema$DataStoreType__FIREBASE &
      3; // 3
    static +WEB_SQL: Class<schema$DataStoreType__WEB_SQL> &
      schema$DataStoreType__WEB_SQL &
      4; // 4
  }

  declare class schema$DataStoreType__INDEXED_DB mixins schema$DataStoreType {}
  declare class schema$DataStoreType__MEMORY mixins schema$DataStoreType {}
  declare class schema$DataStoreType__LOCAL_STORAGE
    mixins schema$DataStoreType {}
  declare class schema$DataStoreType__FIREBASE mixins schema$DataStoreType {}
  declare class schema$DataStoreType__WEB_SQL mixins schema$DataStoreType {}

  declare interface schema$DatabasePragma {
    enableBundledMode: boolean;
  }

  declare interface schema$Database {
    close(): void;
    createTransaction(type?: lf$TransactionType): lf$Transaction;
    delete(): query$query$Delete;
    export(): Promise<{ [key: string]: any }>;
    getSchema(): schema$schema$Database;
    import(data: { [key: string]: any }): Promise<void>;
    insertOrReplace(): query$query$Insert;
    insert(): query$query$Insert;
    observe(query: query$query$Select, callback: Function): void;
    select(...columns: schema$schema$Column[]): query$query$Select;
    unobserve(query: query$query$Select, callback: Function): void;
    update(table: schema$schema$Table): query$query$Update;
    name(): string;
    pragma(): schema$DatabasePragma;
    tables(): schema$Table[];
    table(tableName: string): schema$Table;
    version(): number;
  }

  declare type schema$Column = {
    as(name: string): schema$Column,
    getName(): string,
    getNormalizedName(): string
  } & lf$PredicateProvider;

  declare interface schema$ITable {
    as(name: string): schema$Table;
    createRow(value: { [key: string]: any }): lf$Row;
    getName(): string;
  }

  declare type schema$Table = schema$ITable & {
    [index: string]: schema$Column
  };

  declare interface schema$ConnectOptions {
    onUpgrade?: (rawDb: raw$raw$BackStore) => Promise<void>;
    storeType?: schema$DataStoreType;
    webSqlDbSize?: number;
  }

  declare interface schema$Builder {
    lf$bind(...values: any[]): schema$Builder;
    exec(): Promise<{ [key: string]: any }[]>;
    explain(): string;
    toSql(): string;
    connect(options?: schema$ConnectOptions): Promise<lf$schema$Database>;
    createTable(tableName: string): schema$TableBuilder;
    getSchema(): schema$Database;
    setPragma(pragma: schema$DatabasePragma): void;
  }

  declare interface schema$IndexedColumn {
    autoIncrement: boolean;
    name: string;
    order: lf$Order;
  }

  declare type schema$RawForeignKeySpec = {
    local: string,
    ref: string,
    action?: lf$ConstraintAction,
    timing?: lf$ConstraintTiming
  };

  declare interface schema$TableBuilder {
    addColumn(name: string, type: lf$Type): schema$TableBuilder;
    addForeignKey(
      name: string,
      spec: schema$RawForeignKeySpec
    ): schema$TableBuilder;
    addIndex(
      name: string,
      columns: string[] | schema$IndexedColumn[],
      unique?: boolean,
      order?: lf$Order
    ): schema$TableBuilder;
    addNullable(columns: string[]): schema$TableBuilder;
    addPrimaryKey(
      columns: string[] | schema$IndexedColumn[],
      autoInc?: boolean
    ): schema$TableBuilder;
    addUnique(name: string, columns: string[]): schema$TableBuilder;
  }

  declare function schema$create(
    dbName: string,
    dbVersion: number
  ): schema$Builder;

  declare var npm$namespace$op: {
    and: typeof op$and,
    not: typeof op$not,
    or: typeof op$or
  };
  declare function op$and(...args: lf$Predicate[]): lf$Predicate;

  declare function op$not(operand: lf$Predicate): lf$Predicate;

  declare function op$or(...args: lf$Predicate[]): lf$Predicate;

  declare var npm$namespace$fn: {
    avg: typeof fn$avg,
    count: typeof fn$count,
    distinct: typeof fn$distinct,
    geomean: typeof fn$geomean,
    max: typeof fn$max,
    min: typeof fn$min,
    stddev: typeof fn$stddev,
    sum: typeof fn$sum
  };
  declare function fn$avg(column: schema$schema$Column): schema$schema$Column;

  declare function fn$count(
    column?: schema$schema$Column
  ): schema$schema$Column;

  declare function fn$distinct(
    column: schema$schema$Column
  ): schema$schema$Column;

  declare function fn$geomean(
    column: schema$schema$Column
  ): schema$schema$Column;

  declare function fn$max(column: schema$schema$Column): schema$schema$Column;

  declare function fn$min(column: schema$schema$Column): schema$schema$Column;

  declare function fn$stddev(
    column: schema$schema$Column
  ): schema$schema$Column;

  declare function fn$sum(column: schema$schema$Column): schema$schema$Column;

  declare module.exports: typeof lf;
}
