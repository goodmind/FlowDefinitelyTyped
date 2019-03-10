declare module "massive" {
  declare export default typeof massive;

  declare function massive(
    connection: massive$ConnectionInfo | string,
    loaderConfig?: massive$Loader,
    driverConfig?: { [key: string]: any }
  ): Promise<massive$Database>;

  declare var npm$namespace$massive: {
    Entity: typeof massive$Entity,
    Executable: typeof massive$Executable,
    Readable: typeof massive$Readable,
    Writable: typeof massive$Writable,
    Sequence: typeof massive$Sequence,
    SingleValueStream: typeof massive$SingleValueStream,
    Select: typeof massive$Select,
    Insert: typeof massive$Insert,
    Update: typeof massive$Update,
    Delete: typeof massive$Delete,
    Database: typeof massive$Database
  };
  declare type massive$UUID = string;

  declare interface massive$AnyObject<T = any> {
    [key: string]: T;
  }

  declare interface massive$Loader {
    blacklist?: string | string[];
    whitelist?: string | string[];
    functionBlacklist?: string | string[];
    functionWhitelist?: string | string[];
    allowedSchemas?: string | string[];
    exceptions?: string | string[];
    scripts?: string;
  }

  declare interface massive$DropOptions {
    cascade?: boolean;
  }

  declare interface massive$ConnectionInfo {
    user?: string;
    database?: string;
    password?: string | null;
    port?: number;
    host?: string;
    ssl?: boolean;
    application_name?: string;
    fallback_application_name?: boolean;
  }

  declare interface massive$RetrievalOptions {
    fields?: string[];
    exprs?: massive$AnyObject<string>;
    limit?: number;
    offset?: number;
    order?: massive$OrderingOptions[];
    pageLength?: number;
  }

  declare interface massive$OrderingOptions {
    field?: string;
    expr?: string;
    direction?: "ASC" | "asc" | "DESC" | "desc";
    nulls?: "FIRST" | "first" | "LAST" | "last";
    type?: string;
    last?: string;
  }

  declare interface massive$PersistenceInsertOptions {
    onConflictIgnore?: boolean;
    deepInsert?: boolean;
  }

  declare interface massive$PersistenceUpdateDocOptions {
    body?: string;
  }

  declare interface massive$InheritanceOptions {
    only?: boolean;
  }

  declare interface massive$ResultProcessingOptions {
    build?: boolean;
    document?: boolean;
    single?: boolean;
    stream?: boolean;
    decompose?: massive$DecomposeOptions;
  }

  declare interface massive$DecomposeOptions {
    pk: string;
    columns?: string[] | massive$AnyObject<string>;
    [foreignTable: string]: massive$DecomposeOptions | any;
  }

  declare interface massive$SearchDefinition {
    fields: string[];
    term: string;
    where: massive$AnyObject<>;
  }

  declare interface massive$SearchCriteria {
    fields: string[];
    term: string;
  }

  declare type massive$QueryParamTypes =
    | string
    | number
    | { [key: string]: any };

  declare type massive$QueryParams =
    | massive$QueryParamTypes[]
    | massive$QueryParamTypes;

  declare interface massive$EntitySpecification {
    /**
     * A Database.
     */
    db: massive$Database;

    /**
     * The entity's name.
     */
    name: string;

    /**
     * Path to the entity, if a file.
     */
    path: string;

    /**
     * Entity's owning schema, if a database object.
     */
    schema: string;

    /**
     * Name of the loader that discovered the entity.
     */
    loader: string;
  }

  declare class massive$Entity {
    constructor(spec: massive$EntitySpecification): this;
  }

  declare interface massive$ExecutableSpecification {
    /**
     * A Database.
     */
    db: massive$Database;

    /**
     * The table or view's name.
     */
    name: string;

    /**
     * The name of the schema owning the table or
     */
    schema: string;

    /**
     * A function invocation statement or a pg-promise QueryFile.
     */
    sql: any;

    /**
     * Number of parameters the executable expects.
     */
    paramCount: number;

    /**
     * Whether a database function accepts variable-length argument lists as the last parameter.
     */
    isVariadic: boolean;

    /**
     * True to enable single row/value results processing.
     */
    enhancedFunctions: boolean;

    /**
     * If true, return the first result row as an object (with enhancedFunctions).
     */
    singleRow: boolean;

    /**
     * If true, return results as a primitive or primitives (with enhancedFunctions).
     */
    singleValue: boolean;
  }

  declare class massive$Executable {
    constructor(spec: massive$ExecutableSpecification): this;

    /**
     * Invoke the function or script.
     */
    invoke(
      options?: massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<> | any[]>;
  }

  declare interface massive$ReadableSpecification {
    /**
     * A Database.
     */
    db: massive$Database;

    /**
     * The table or view's name.
     */
    name: string;

    /**
     * The name of the schema owning the table or view.
     */
    schema: string;

    /**
     * Whether the object is a materialized view (default false).
     */
    is_matview?: boolean;
  }

  declare class massive$Readable mixins massive$Entity {
    constructor(spec: massive$ReadableSpecification): this;

    /**
     * Count rows matching criteria.
     */
    count(conditions: massive$AnyObject<>): Promise<number>;
    count(conditions: string, params: any[]): Promise<number>;

    /**
     * Count documents matching criteria. Unlike count, this function only supports criteria objects.
     */
    countDoc(criteria: { [key: string]: any }): Promise<number>;

    /**
     * Find rows matching criteria.
     */
    find(
      criteria?: massive$AnyObject<> | number | massive$UUID,
      options?: massive$RetrievalOptions & massive$ResultProcessingOptions
    ): Promise<any>;

    /**
     * Find a document by searching in the body.
     */
    findDoc(
      criteria?: massive$AnyObject<> | number | massive$UUID,
      options?: massive$RetrievalOptions
    ): Promise<any>;

    /**
     * Return a single record.
     */
    findOne(
      criteria: massive$AnyObject<> | number | massive$UUID,
      options?: massive$RetrievalOptions & massive$ResultProcessingOptions
    ): Promise<any>;

    /**
     * Determine whether criteria represent a search by primary key.
     * If a number or uuid are passed, it is assumed to be a primary key value; if an object, it must have only one key, which must specify the primary key column.
     */
    isPkSearch(criteria: massive$AnyObject<> | massive$UUID | number): boolean;

    /**
     * Refresh a materialized view.
     */
    refresh(concurrently?: boolean): Promise<void>;

    /**
     * Perform a full-text search on queryable fields. If options.document is true, looks in the document body fields instead of the table columns.
     */
    search(
      plan: massive$SearchDefinition,
      options?: massive$RetrievalOptions
    ): Promise<any[]>;

    /**
     * Shortcut to perform a full text search on a document table.
     */
    searchDoc(
      plan: Pick<massive$SearchDefinition, "fields" | "term">,
      options?: massive$RetrievalOptions
    ): Promise<any[]>;

    /**
     * Run a query with a raw SQL predicate, eg: db.mytable.where('id=$1', [123]).then(...);
     */
    where(
      conditions: string,
      params?: any[],
      options?: massive$RetrievalOptions & massive$ResultProcessingOptions
    ): Promise<any[]>;
  }

  declare interface massive$WritableSpecification {
    /**
     * A Database.
     */
    db: massive$Database;

    /**
     * The table or view's name.
     */
    name: string;

    /**
     * The name of the schema owning the table.
     */
    schema: string;

    /**
     * The table's primary key.
     */
    pk: string;
  }

  declare class massive$Writable mixins massive$Readable {
    /**
     * A database table or other writable object
     */
    constructor(spec: massive$WritableSpecification): this;

    /**
     * Delete a record or records.
     */
    destroy(
      criteria: massive$AnyObject<>,
      options?: massive$ResultProcessingOptions
    ): Promise<any[]>;

    /**
     * Attempts to assemble primary key criteria for a record object representing a row in this table.
     * The criteria must include the full primary key, and must not invoke any operations.
     */
    getPkCriteria(record: massive$AnyObject<>): massive$AnyObject<>;

    /**
     * Insert a record or records into the table.
     */
    insert(
      data: massive$AnyObject<>,
      options?: massive$PersistenceInsertOptions &
        massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<>>;
    insert(
      data: massive$AnyObject<>[],
      options?: massive$PersistenceInsertOptions &
        massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<>[]>;

    /**
     * Saves an object.
     * If the object does not include a value for the table's primary key, this will emit an INSERT to create a new record.
     * if it does contain the primary key it will emit an UPDATE for the existing record.
     * Either way, the newest available version of the record will be returned.
     * This is not a true Postgres upsert! If you need the behavior of ON CONFLICT DO UPDATE, you'll need to use db.query or create an SQL script file.
     */
    save(
      record: massive$AnyObject<>,
      options?: massive$PersistenceInsertOptions &
        massive$PersistenceUpdateDocOptions &
        massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<>>;

    /**
     * Save a document to the database. This function will create or replace the entire document body.
     */
    saveDoc(doc: massive$AnyObject<>): Promise<massive$AnyObject<>>;

    /**
     * Update a record.
     */
    update(
      criteria: massive$UUID | number,
      changes: massive$AnyObject<>,
      options?: massive$PersistenceUpdateDocOptions &
        massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<>>;
    update(
      criteria: massive$AnyObject<>,
      changes: massive$AnyObject<>,
      options?: massive$PersistenceUpdateDocOptions &
        massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<>[]>;

    /**
     * Update a document, adding new information and changing existing information.
     * This function can be used with any JSON field, not just document tables; however, only document tables can use criteria objects which directly reference document fields.
     * If calling updateDoc with a criteria object for a non-document table, the criteria will be tested against the entire row (as opposed to the document body as it is for document tables).
     * To test elements of the JSON field in a non-document table with a criteria object, use a JSON path string.
     */
    updateDoc(
      criteria: massive$UUID | number | massive$AnyObject<>,
      changes: massive$AnyObject<>,
      options?: massive$PersistenceUpdateDocOptions &
        massive$ResultProcessingOptions
    ): Promise<massive$AnyObject<>>;
  }

  declare class massive$Sequence {
    /**
     * A database sequence.
     */
    constructor(db: massive$Database, name: string, schema: string): this;

    /**
     * Get the last value the sequence returned.
     * The return value will be a stringified number.
     */
    lastValue(): Promise<string>;

    /**
     * Increment the sequence counter and return the next value.
     * The return value will be a stringified number.
     */
    nextValue(): Promise<string>;

    /**
     * Reset the sequence.
     */
    reset(initialValue: number): Promise<void>;
  }

  declare class massive$SingleValueStream {
    /**
     * A stream which processes single-key results objects into their values for convenience on the client side.
     */
    constructor(options: massive$AnyObject<>): this;

    /**
     * Converts a single-key object into its value.
     */
    singleValue(obj: massive$AnyObject<>): any;
  }

  /**
   * Represents a SELECT query.
   */
  declare class massive$Select {
    /**
     * Represents an SELECT query.
     */
    constructor(
      source: massive$Readable,
      criteria: massive$AnyObject<> | massive$UUID,
      options?: massive$RetrievalOptions & massive$ResultProcessingOptions
    ): this;

    /**
     * Format this object into a SQL SELECT.
     */
    format(): string;
  }

  /**
   * Represents a INSERT query.
   */
  declare class massive$Insert {
    /**
     * Represents an INSERT query.
     */
    constructor(
      source: massive$Readable,
      record: massive$AnyObject<> | any[],
      options?: massive$ResultProcessingOptions &
        massive$PersistenceInsertOptions
    ): this;

    /**
     * Format this object into a SQL SELECT.
     */
    format(): string;
  }

  /**
   * Represents a UPDATE query.
   */
  declare class massive$Update {
    /**
     * Represents an UPDATE query.
     */
    constructor(
      source: massive$Readable,
      changes: massive$AnyObject<>,
      criteria: massive$AnyObject<>,
      options?: massive$ResultProcessingOptions &
        massive$PersistenceUpdateDocOptions
    ): this;

    /**
     * Format this object into a SQL SELECT.
     */
    format(): string;
  }

  /**
   * Represents a UPDATE query.
   */
  declare class massive$Delete {
    /**
     * Represents a DELETE query.
     */
    constructor(
      source: massive$Readable,
      criteria?: massive$AnyObject<> | massive$UUID | number,
      options?: massive$ResultProcessingOptions & massive$InheritanceOptions
    ): this;

    /**
     * Format this object into a SQL SELECT.
     */
    format(): string;
  }

  declare class massive$Database {
    /**
     * @param connection A connection object or connection string
     */
    constructor(
      connection: { [key: string]: any } | string,
      loader?: massive$Loader,
      driverConfig?: { [key: string]: any }
    ): this;

    /**
     * Attach an entity to the connected instance.
     */
    attach(entities: massive$AnyObject<> | any[]): Promise<any[]>;

    /**
     * Remove all attached entities from the instance, returning it to the pre- introspection state.
     */
    clean(): void;

    /**
     * Clones the database handle for a task or transaction, replacing the internal instance with a dedicated connection.
     */
    clone(conn: massive$ConnectionInfo): massive$Database;

    /**
     * Create a new document table and attach it to the Database for usage.
     */
    createDocumentTable(location: string): Promise<void>;

    /**
     * Create an extension.
     */
    createExtension(extensionName: string): Promise<void>;

    /**
     * Create a new schema in the database.
     */
    createSchema(schemaName: string): Promise<void>;

    /**
     * Forget an entity.
     */
    detach(entityPath: string): void;

    /**
     * Drop an extension.
     */
    dropExtension(extensionName: string): Promise<void>;

    /**
     * Drop a schema and remove it and its owned objects from the Database.
     */
    dropSchema(
      schemaName: string,
      options?: massive$DropOptions
    ): Promise<void>;

    /**
     * Drop a table and remove it from the Database.
     */
    dropTable(tablePath: string, options?: massive$DropOptions): Promise<void>;

    /**
     * List all the functions and scripts attached to the connected instance.
     */
    listFunctions(): Promise<any[]>;

    /**
     * List all the non-pk sequences attached to the connected instance.
     */
    listSequences(): Promise<any[]>;

    /**
     * List all the tables attached to the connected instance.
     */
    listTables(): Promise<any[]>;

    /**
     * List all the views attached to the connected instance.
     */
    listViews(): Promise<any[]>;

    /**
     * Execute a query.
     */
    query(
      query:
        | massive$Select
        | massive$Insert
        | massive$Update
        | massive$Delete
        | string,
      params?: massive$QueryParams,
      options?: massive$ResultProcessingOptions
    ): Promise<any>;

    /**
     * Synchronize the database API with the current state by scanning for tables, views, functions, and scripts.
     * Objects and files which no longer exist are cleared and new objects and files added.
     */
    reload(): Promise<massive$Database>;

    /**
     * Save a document.
     */
    saveDoc(collection: string, doc: massive$AnyObject<>): Promise<any>;

    /**
     * Begin a task, returning a copy of the connected instance which will route all queries made in the callback through the task scope.
     */
    withConnection(
      cb: (withTask: any) => any,
      options?: massive$AnyObject<>
    ): Promise<any>;

    /**
     * Begin a transaction, returning a copy of the connected instance which will route all queries made in the callback through the transaction scope.
     */
    withTransaction(
      cb: (withTx: any) => any,
      options?: massive$AnyObject<>
    ): Promise<any>;
    [tableName: string]: massive$Writable | any;
  }
}
