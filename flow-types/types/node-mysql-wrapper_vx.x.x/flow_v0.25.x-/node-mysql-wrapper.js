declare module "node-mysql-wrapper" {
  import typeof * as Mysql from "mysql";

  import typeof * as Promise from "bluebird";

  import type { EventEmitter } from "events";

  declare var EQUAL_TO_PROPERTY_SYMBOL: string;
  declare var TABLE_RULES_PROPERTY: string;
  declare type DeleteAnswer = {
    affectedRows: number,
    table: string
  };
  declare type RawRules = {
    table: string,
    begin: string,
    orderBy: string,
    orderByDesc: string,
    groupBy: string,
    limit: number,
    limitStart: number,
    limitEnd: number,
    end: string
  };
  declare type TableToSearchPart = {
    tableName: string,
    propertyName: string
  };
  declare type PropertyChangedCallback = (args: PropertyChangedArgs) => any;
  declare interface Map<T> {
    [index: string]: T;
  }
  declare interface IQuery<T> {
    _table: Table<T>;
    execute(rawCriteria: any, callback?: (_results: any) => any): Promise<any>;
  }
  declare interface IQueryConstructor<T> {
    new(_table: Table<T>): IQuery<T>;
  }
  declare class Helper {
    /**
     * Callback like forEach
     * @name valueCallback
     * @function
     * @param {T} the value of the object's key
     * @returnTye {U}
     * @return {U}
     * CallbaforEach
     * @name keyCallback
     * @function
     * @param {string} the name of the object's key
     * @returnTye {U}
     * @return {U}
     */
    constructor(): this;

    /**
     * Create and return a copy of an object.
     * @param {T} object the object you want to copy.
     * @returnType {T}
     * @return {T}
     */
    static copyObject<T>(object: T): T;

    /**
     * Converts any_string to anyString and returns it.
     * @param {string} columnKey the string you want to convert.
     * @returnType {string}
     * @return {string}
     */
    static toObjectProperty(columnKey: string): string;

    /**
     * Converts anyString to any_string and returns it.
     * @param {string} objectKey the string you want to convert.
     * @returnType {string}
     * @return {string}
     */
    static toRowProperty(objectKey: string): string;

    /**
     * Iterate object's keys and return their values to the callback.
     * @param {<T>() => } map the object.
     * @param {valueCallback}
     * @returnType {U}
     * @return {U}
     */
    static forEachValue<T, U>(map: T, callback: (value: T) => U): U;

    /**
     * Iterate object's keys and return their names to the callback.
     * @param {Map<T>} map the object.
     * @param {keyCallback}
     * @returnType {U}
     * @return {U}
     */
    static forEachKey<T, U>(map: Map<T>, callback: (key: string) => U): U;

    /**
     * Checks if anything is a function.
     * @param {functionToCheck} the object or function to pass
     * @return boolean
     */
    static isFunction(functionToCheck: any): boolean;

    /**
     * Checks if an object has 'tableRules' property.
     * @param {obj} the object to pass
     * @return boolean
     */
    static hasRules(obj: any): boolean;
  }
  declare interface ICriteriaParts {
    rawCriteriaObject: any;
    tables: TableToSearchPart[];
    noDatabaseProperties: string[];
    whereClause: string;
    selectFromClause<T>(_table: Table<T>): string;
  }
  declare class CriteriaParts mixins ICriteriaParts {
    /**
     * The raw format of the criteria eg: {yearsOld:22}.
     */
    rawCriteriaObject: any;

    /**
     * Which tables to search after the find method of the proto table finish.
     */
    tables: TableToSearchPart[];

    /**
     * The properties of the criteria which don't belong to the database's table.
     */
    noDatabaseProperties: string[];

    /**
     * The converted/exported where clause.
     */
    whereClause: string;
    constructor(
      rawCriteriaObject: any,
      tables: TableToSearchPart[],
      noDatabaseProperties: string[],
      whereClause: string
    ): this;
    selectFromClause<T>(_table: Table<T>): string;
  }
  declare class CriteriaDivider<T> {
    constructor(table: Table<T>): this;

    /**
     * Builds the criteria raw object to Criteria object.
     * @param {any} rawCriteriaObject the criteria at raw format you pass eg: {yearsOld:18}.
     * @returnType {Criteria}
     * @return {Criteria}
     */
    build(rawCriteriaObject: any): CriteriaParts;
  }
  declare class SelectQueryRules {
    manuallyEndClause: string;
    manuallyBeginClause: string;
    exceptColumns: string[];
    orderByColumn: string;
    orderByDescColumn: string;
    groupByColumn: string;
    limitStart: number;
    limitEnd: number;
    tableName: string;
    static build(): SelectQueryRules;
    except(...columns: string[]): SelectQueryRules;

    /**
     * Same as .except(...columns)
     */
    exclude(...columns: string[]): SelectQueryRules;
    orderBy(columnKey: string, descending?: boolean): SelectQueryRules;
    groupBy(columnKey: string): SelectQueryRules;
    limit(limitRowsOrStart: number, limitEnd?: number): SelectQueryRules;
    appendToBegin(manualAfterWhereString: string): SelectQueryRules;
    appendToEnd(manualAfterWhereString: string): SelectQueryRules;
    append(appendToCurrent: string): SelectQueryRules;
    clearOrderBy(): SelectQueryRules;
    clearGroupBy(): SelectQueryRules;
    clearLimit(): SelectQueryRules;
    clearEndClause(): SelectQueryRules;
    clearBeginClause(): SelectQueryRules;
    clear(): SelectQueryRules;
    from(parentRule: SelectQueryRules): SelectQueryRules;
    isEmpty(): boolean;
    toString(): string;
    toRawObject(): RawRules;
    static toString(rules: SelectQueryRules): string;
    static toRawObject(rules: SelectQueryRules): RawRules;
    static fromRawObject(obj: RawRules): SelectQueryRules;
  }
  declare class CriteriaBuilder<T> {
    constructor(primaryTable: Table<T>): this;
    constructor(
      primaryTable: Table<T>,
      tableName: string,
      parentBuilder: CriteriaBuilder<any>
    ): this;
    constructor(
      primaryTable: Table<T>,
      tablePropertyName?: string,
      parentBuilder?: CriteriaBuilder<any>
    ): this;
    except(...columns: string[]): CriteriaBuilder<T>;

    /**
     * Same as .except(...columns)
     */
    exclude(...columns: string[]): CriteriaBuilder<T>;
    where(key: string, value: any): CriteriaBuilder<T>;
    orderBy(column: string, desceding?: boolean): CriteriaBuilder<T>;
    limit(start: number, end?: number): CriteriaBuilder<T>;
    join(realTableName: string, foreignColumnName: string): CriteriaBuilder<T>;
    joinAs(
      tableNameProperty: string,
      realTableName: string,
      foreignColumnName: string
    ): CriteriaBuilder<T>;
    at(tableNameProperty: string): CriteriaBuilder<T>;
    parent(): CriteriaBuilder<T>;
    original(): CriteriaBuilder<T>;

    /**
     * Auto kanei kuklous mexri na paei sto primary table kai ekei na epistrepsei to sunoliko raw criteria gia execute i kati allo.
     */
    build(): any;
    static from<T>(table: Table<T>): CriteriaBuilder<T>;
  }
  declare class SelectQuery<T> mixins IQuery<T> {
    _table: Table<T>;
    constructor(_table: Table<T>): this;

    /**
     * Executes the select and returns the Promise.
     */
    promise(rawCriteria: any, callback?: (_results: T[]) => any): Promise<T[]>;

    /**
     * Exactly the same thing as promise().
     * Executes the select and returns the Promise.
     */
    execute(rawCriteria: any, callback?: (_results: T[]) => any): Promise<T[]>;
  }
  declare class SaveQuery<T> mixins IQuery<T> {
    _table: Table<T>;
    constructor(_table: Table<T>): this;
    execute(
      criteriaRawJsObject: any,
      callback?: (_result: T | any) => any
    ): Promise<T | any>;
  }
  declare class DeleteQuery<T> mixins IQuery<T> {
    _table: Table<T>;
    constructor(_table: Table<T>): this;
    execute(
      criteriaOrID: any | number | string,
      callback?: (_result: DeleteAnswer) => any
    ): Promise<DeleteAnswer>;
  }
  declare class PropertyChangedArgs {
    propertyName: string;
    oldValue: any;
    constructor(propertyName: string, oldValue: any): this;
  }
  declare class ObservableObject {
    /**
     * Property names that your row couldn't have:
     * "propertyChangedListeners", "notifyPropertyChanged", "onPropertyChanged", "toJSON", "makeObservable", "_forget"
     */
    static RESERVED_PROPERTY_NAMES: string[];
    constructor(): this;
    constructor(obj?: any): this;

    /**
     * Add a listener/observer to watch for changes in this object's properties
     */
    onPropertyChanged(listener: PropertyChangedCallback): void;

    /**
     * If developer wants manualy notify for property changed
     */
    notifyPropertyChanged(propertyName: string, oldValue: any): void;

    /**
     * Remove property changed listeners
     */
    _forget(): void;
    toJSON(...excludeProperties: string[]): any;
  }
  declare class CollectionChangedAction {
    constructor(...args: empty): mixed;
    static +INSERT: Class<CollectionChangedAction__INSERT> &
      CollectionChangedAction__INSERT &
      0; // 0
    static +DELETE: Class<CollectionChangedAction__DELETE> &
      CollectionChangedAction__DELETE &
      1; // 1
    static +RESET: Class<CollectionChangedAction__RESET> &
      CollectionChangedAction__RESET &
      2; // 2
  }

  declare class CollectionChangedAction__INSERT
    mixins CollectionChangedAction {}
  declare class CollectionChangedAction__DELETE
    mixins CollectionChangedAction {}
  declare class CollectionChangedAction__RESET mixins CollectionChangedAction {}

  declare class CollectionChangedEventArgs<T> {
    action: CollectionChangedAction;
    oldItems: (T | (T & ObservableObject))[];
    newItems: (T | (T & ObservableObject))[];
    oldStartingIndex: number;
    newStartingIndex: number;
    constructor(
      action: CollectionChangedAction,
      oldItems?: (T | (T & ObservableObject))[],
      newItems?: (T | (T & ObservableObject))[],
      oldStartingIndex?: number,
      newStartingIndex?: number
    ): this;
  }
  declare class BaseCollection<T> {
    listeners: ((eventArgs: CollectionChangedEventArgs<T>) => void)[];
    constructor(table: Table<T>): this;
    length: number;
    items: (T | (T & ObservableObject))[];
    indexOf(item: T | string | number): number;
    findItem(itemId: string | number): T;
    getItem(index: number): T;
    getItemObservable(index: number): T & ObservableObject;
    addItem(
      ...items: (T | (T & ObservableObject))[]
    ): T | (T & ObservableObject);
    removeItem(...items: (T | (T & ObservableObject))[]): BaseCollection<T>;
    removeItemById(id: number | string): BaseCollection<T>;
    forgetItem(...items: (T | (T & ObservableObject))[]): BaseCollection<T>;
    reset(): BaseCollection<T>;
    notifyCollectionChanged(evtArgs: CollectionChangedEventArgs<T>): void;
    onCollectionChanged(
      callback: (eventArgs: CollectionChangedEventArgs<T>) => void
    ): void;
  }
  declare class ObservableCollection<T> {
    local: BaseCollection<T>;
    constructor(
      table: Table<T>,
      fetchAllFromDatabase?: boolean,
      callbackWhenReady?: Function
    ): this;
    items: (T & ObservableObject)[];
    onCollectionChanged(
      callback: (eventArgs: CollectionChangedEventArgs<T>) => void
    ): void;
    startListeningToDatabase(): void;
    find(
      criteriaRawJsObject?: any,
      callback?: (_results: T[]) => any
    ): Promise<T[]>;
    findOne(
      criteriaRawJsObject: any,
      callback?: (_result: T) => any
    ): Promise<T>;
    findById(id: number | string, callback?: (result: T) => any): Promise<T>;
    findAll(
      tableRules?: RawRules,
      callback?: (_results: T[]) => any
    ): Promise<T[]>;

    /**
     * .insert() and .update() do the same thing:  .save();
     */
    insert(
      criteriaRawJsObject: any,
      callback?: (_result: any) => any
    ): Promise<T | any>;
    update(
      criteriaRawJsObject: any,
      callback?: (_result: any) => any
    ): Promise<T | any>;
    save(
      criteriaRawJsObject: any,
      callback?: (_result: any) => any
    ): Promise<T | any>;
    remove(
      criteriaOrID: any | number | string,
      callback?: (_result: DeleteAnswer) => any
    ): Promise<DeleteAnswer>;

    /**
     * same thing as .remove();
     */
    delete(
      criteriaOrID: any | number | string,
      callback?: (_result: DeleteAnswer) => any
    ): Promise<DeleteAnswer>;
  }
  declare class MeteorCollection<T> {
    table: Table<T>;
    constructor(table: Table<T>, name?: string): this;
    startListeningToDatabase(): void;
    rawCollection: Mongo.Collection<T>;
    fill(criteriaRawJsObject: any): void;
    fillAll(): void;
    fillOne(criteriaRawJsObject: any): void;
    allow(options: {
      insert?: (userId: string, doc: T) => boolean,
      update?: (
        userId: string,
        doc: T,
        fieldNames: string[],
        modifier: any
      ) => boolean,
      remove?: (userId: string, doc: T) => boolean,
      fetch?: string[],
      transform?: Function
    }): boolean;
    deny(options: {
      insert?: (userId: string, doc: T) => boolean,
      update?: (
        userId: string,
        doc: T,
        fieldNames: string[],
        modifier: any
      ) => boolean,
      remove?: (userId: string, doc: T) => boolean,
      fetch?: string[],
      transform?: Function
    }): boolean;
    find(
      selector?: any,
      options?: {
        sort?: any,
        skip?: number,
        limit?: number,
        fields?: any,
        reactive?: boolean,
        transform?: Function
      }
    ): Mongo.Cursor<T>;
    findOne(
      selector?: any,
      options?: {
        sort?: any,
        skip?: number,
        fields?: any,
        reactive?: boolean,
        transform?: Function
      }
    ): T;
  }
  declare class Connection mixins EventEmitter {
    /**
     * The real database connection socket.
     */
    connection: Mysql.Connection;

    /**
     * Collection of the supported event types for the tables.
     */
    eventTypes: string[];

    /**
     * Force to fetch ONLY these Database table names {array of string}.
     */
    tableNamesToUseOnly: any[];

    /**
     * All tables {MysqlTable} inside this connection's database.
     */
    tables: Table<any>[];
    constructor(
      connection: string | Mysql.Connection | Mysql.ConnectionConfig
    ): this;

    /**
     * Creates the MysqlConnection from the connection url or the real connection object.
     * @param {string | Mysql.Connection | Mysql.ConnectionConfig} connection the connection url or the real connection object.
     * @returnType {nothing}
     * @return {nothing}
     */
    create(
      connection: string | Mysql.Connection | Mysql.ConnectionConfig
    ): void;

    /**
     * Attach a real connection.
     * @param {Mysql.Connection} connection the real connection object.
     * @returnType {nothing}
     * @return {nothing}
     */
    attach(connection: Mysql.Connection): void;

    /**
     * Close the entire real connection and remove all event's listeners (if exist).
     * @param {function} callback If error occurs when closing the connection, this callback has the responsibility to catch it.
     * @returnType {nothing}
     * @return {nothing}
     */
    end(callback?: (error: any) => void): void;

    /**
     * Close the entire real connection and remove all event's listeners (if exist).
     * the difference from the 'end' is that this method doesn't care about errors so no callback passing here.
     */
    destroy(): void;

    /**
     * Clear all binary logs from the whole database.
     * When finish returns a promise, use it with .then(function(){});
     * @return Promise
     */
    clearBinaryLogs(): Promise<void>;

    /**
     * Link the real connection with this MysqlConnection object.
     * @param {function} readyCallback when the link operation is done this callback is executed.
     * @returnType {Promise}
     * @return {Promise}
     */
    link(readyCallback?: () => void): Promise<void>;

    /**
     * Force to use/fetch information from only certain of database's tables, otherwise all database's tables information will be fetched.
     * @param {Array} tables the array of the tables  {string}
     * @returnType {nothing}
     * @return {nothing}
     */
    useOnly(...tables: any[]): void;

    /**
     * This method has the resposibility of fetching the correct tables from the database ( table = columns' names, primary key name).
     * @returnType {Promise}
     * @return {Promise}
     */
    fetchDatabaseInformation(): Promise<void>;

    /**
     * Escape the query column's value  and return it.
     * @param {string} val the value which will be escaped.
     * @returnType {string}
     * @return {string}
     */
    escape(val: string): string;

    /**
     * Call when must notify the Database events, SAVE(INSERT,UPDATE), REMOVE(DELETE).
     * @param {string} tableWhichCalled the table name which event is coming from.
     * @param {string} queryStr the full parsed query string which used to determinate the type of event to notify.
     * @param {any[]} rawRows the raw rows results (results before a method parse/edit/export them as objects), these are passing to the watch listener(s).
     * @returnType {nothing}
     * @return {nothing}
     */
    notice(tableWhichCalled: string, queryStr: string, rawRows: any[]): void;

    /**
     * Adds an event listener/watcher on a table for a 'database event'.
     * @param {string} tableName the table name which you want to add the event listener.
     * @param {string} or string[]} evtType the event(s) type you want to watch, one of these(string) or an array of them(string[]): ["INSERT", "UPDATE", "REMOVE", "SAVE"].
     * @param {function} callback Callback which has one parameter(typeof any[]) which filled by the rawRows (results after query executed and before parsed to object(s)).
     * @returnType {nothing}
     * @return {nothing}
     */
    watch(
      tableName: string,
      evtType: any,
      callback: (rawRows: any[]) => void
    ): void;

    /**
     * Removes an event listener/watcher from a table for a specific event type.
     * @param {string} tableName the table name which you want to remove the event listener.
     * @param {string} evtType the Event type you want to remove, one of these: "INSERT", "UPDATE", "REMOVE", "SAVE".
     * @param {function} callbackToRemove the callback that you were used for watch this event type.
     * @returnType {nothing}
     * @return {nothing}
     */
    unwatch(
      tableName: string,
      evtType: string,
      callbackToRemove: (rawResults: any[]) => void
    ): void;

    /**
     * Executes a database query.
     * @param {string} queryStr the query text/string to be executed.
     * @param {function} callback the function will be called and fill the one and only parameter when an errors occurs.
     * @param {any[]} queryArguments (optional) the query arguments you want to pass into query. ['arg1','arg2']...
     * @returnType {nothing}
     * @return {nothing}
     */
    query(
      queryStr: string,
      callback: (err: Mysql.MysqlError, results: any) => any,
      queryArguments?: any[]
    ): void;

    /**
     * Returns a MysqlTable object from the database factory. (Note: this method doesn't create anything, just finds and returns the correct table, you don't have to create anything at all. Tables are fetched by the library itself.)
     * If you are using typescript you can pass a class (generic<T>) in order to use the auto completion assistance on table's results methods(find,findById,findAll,save,remove,safeRemove).
     * @param {string} tableName the table name which you want to get, on the form of: 'anyDatabaseTable' OR 'any_database_table' (possible your real table name into your database).
     * @returnType {MysqlTable}
     * @return {MysqlTable}
     */
    table<T>(tableName: string): Table<T>;
  }
  declare class Table<T> {
    constructor(tableName: string, connection: Connection): this;

    /**
     * An array of all columns' names inside this table.
     */
    columns: string[];

    /**
     * The name of the primary key column which this table is using.
     */
    primaryKey: string;

    /**
     * The MysqlConnection object which this MysqlTable belongs.
     */
    connection: Connection;

    /**
     * The real database name of the table. Autofilled by library.
     */
    name: string;

    /**
     * Set of the query rules that will be applied after the 'where clause' on each select query executed by this table.
     * @return {SelectQueryRules}
     */
    rules: SelectQueryRules;

    /**
     * Returns this table's criteria divider class.
     * @return {CriteriaDivider}
     */
    criteriaDivider: CriteriaDivider<T>;

    /**
     * Returns new Criteria Builder each time.
     * Helps you  to make criteria raw js objects ready to use in find,remove and save methods.
     * @return {CriteriaBuilder}
     */
    criteria: CriteriaBuilder<T>;

    /**
     * Adds or turn on an event listener/watcher on a table for a 'database event'.
     * @param {string} evtType the event type you want to watch, one of these: ["INSERT", "UPDATE", "REMOVE", "SAVE"].
     * @param {function} callback Callback which has one parameter(typeof any[]) which filled by the rawResults (results after query executed and before exports to object(s)).
     * @returnType {nothing}
     * @return {nothing}
     */
    on(evtType: string, callback: (rawResults: any[]) => void): void;

    /**
     * Removes or turn off an event listener/watcher from a table for a specific event type.
     * @param {string} evtType the Event type you want to remove, one of these: "INSERT", "UPDATE", "REMOVE", "SAVE".
     * @param {function} callbackToRemove the callback that you were used for watch this event type.
     * @returnType {nothing}
     * @return {nothing}
     */
    off(evtType: string, callbackToRemove: (rawResults: any[]) => void): void;

    /**
     * Use it when you want to check if extended function is exists here.
     * @param {string} extendedFunctionName the name of the function you want to check.
     * @returnType {boolean}
     * @return {boolean}
     */
    has(extendedFunctionName: string): boolean;

    /**
     * Extends this table's capabilities with a function.
     * @param {string} functionName the function name you want to use, this is used when you want to call this function later.
     * @param {function} theFunction the function with any optional parameters you want to pass along.
     * @returnType {nothing}
     * @return {nothing}
     */
    extend(functionName: string, theFunction: (...args: any[]) => any): void;

    /**
     * Converts and returns an object from this form: { a_property:'dsda', other_property:something, any_property_name:true } to { aProperty:..., otherProperty...,anyPropertyName...}
     * @param {any} row the raw row object.
     * @returnType {any}
     * @return {any}
     */
    objectFromRow(row: any): any;

    /**
     * Converts and returns an object from this form: { aProperty:'dsda', otherProperty:something, anyPropertyName:true } to { a_property:..., other_property...,any_property_name...}
     * @param {any} row the raw row object.
     * @returnType {any}
     * @return {any}
     */
    rowFromObject(obj: any): any;

    /**
     * Returns and array of [columns[],values[]]
     * @param {any} jsObject the raw row object.
     * @returnType {array}
     * @return {array}
     */
    getRowAsArray(jsObject: any): Array<any>;

    /**
     * Returns the primary key's value from an object.
     * @param {any} jsObject the object which you want to find and return the value of the primary key.
     * @returnType {number | string}
     * @return {number | string}
     */
    getPrimaryKeyValue(jsObject: any): number | string;

    /**
     */
    find(criteriaRawJsObject: any): Promise<T[]>;
    find(
      criteriaRawJsObject: any,
      callback: (_results: T[]) => any
    ): Promise<T[]>;
    find(
      criteriaRawJsObject: any,
      callback?: (_results: T[]) => any
    ): Promise<T[]>;
    findSingle(
      criteriaRawJsObject: any,
      callback?: (_result: T) => any
    ): Promise<T>;
    findById(id: number | string): Promise<T>;
    findById(id: number | string, callback?: (result: T) => any): Promise<T>;
    findAll(): Promise<T[]>;
    findAll(tableRules: RawRules): Promise<T[]>;
    findAll(
      tableRules?: RawRules,
      callback?: (_results: T[]) => any
    ): Promise<T[]>;
    save(criteriaRawJsObject: any): Promise<any>;
    save(
      criteriaRawJsObject: any,
      callback?: (_result: any) => any
    ): Promise<any>;
    remove(id: number | string): Promise<DeleteAnswer>;
    remove(criteriaRawObject: any): Promise<DeleteAnswer>;
    remove(
      criteriaOrID: any | number | string,
      callback?: (_result: DeleteAnswer) => any
    ): Promise<DeleteAnswer>;
  }
  declare class MeteorTable<T> {
    table: Table<T>;
    constructor(table: Table<T>): this;
    insert(doc: T, callback?: (_result: T) => void): T;
    remove(selector: any, callback?: () => DeleteAnswer): DeleteAnswer;
    update(
      selector: any,
      modifier: any,
      options?: {
        multi?: boolean,
        upsert?: boolean
      },
      callback?: (result: T) => any
    ): number;
    collection(
      nameOfCollection?: string,
      fillWithCriteria?: any
    ): Mongo.Collection<T>;
  }
  declare class Database {
    connection: Connection;
    isReady: boolean;
    readyListenerCallbacks: Function[];
    constructor(connection?: Connection): this;
    static when(..._promises: Promise<any>[]): Promise<any>;
    setConnection(connection: Connection): void;

    /**
     * Force to use/fetch information from only certain of database's tables, otherwise all database's tables information will be fetched.
     * @param {Array} tables the array of the tables  {string}
     * @returnType {nothing}
     * @return {nothing}
     */
    useOnly(...useTables: any[]): void;
    has(tableName: string, functionName?: string): boolean;
    ready(callback?: () => void): void;
    table<T>(tableName: string): Table<T>;
    noticeReady(): void;
    removeReadyListener(callback: () => void): void;
    query(
      queryStr: string,
      callback: (err: Mysql.MysqlError, results: any) => any,
      queryArguments?: any[]
    ): void;

    /**
     * Close the entire real connection and remove all event's listeners (if exist).
     * the difference from the 'end' is that this method doesn't care about errors so no callback passing here.
     */
    destroy(): void;

    /**
     * Close the entire real connection and remove all event's listeners (if exist).
     * @param {function} maybeAcallbackError If error occurs when closing the connection, this callback has the responsibility to catch it.
     * @returnType {nothing}
     * @return {nothing}
     */
    end(maybeAcallbackError: (err: any) => void): void;
    newTableRules(tableName: string): SelectQueryRules;
    buildRules(): SelectQueryRules;
    buildRules(parentRules?: SelectQueryRules): SelectQueryRules;
    collection<T>(
      tableName: string,
      callbackWhenReady?: Function
    ): ObservableCollection<T>;

    /**
     * Meteor js feature only: Returns a table which it's collection can make synchronization with the client
     */
    meteorTable<T>(tableName: string): MeteorTable<T>;
  }
  declare function wrap(
    mysqlUrlOrObjectOrMysqlAlreadyConnection: Mysql.Connection | string,
    ...useTables: any[]
  ): Database;

  /**
   * For meteor js only
   * Same as wrap but it's sync mode - autoconnect to the database without need to use database.ready(callback).
   */
  declare function connect(
    mysqlUrlOrObjectOrMysqlAlreadyConnection: Mysql.Connection | string,
    ...useTables: any[]
  ): Database;

  declare function observable<T>(obj: T): T & ObservableObject;
}
