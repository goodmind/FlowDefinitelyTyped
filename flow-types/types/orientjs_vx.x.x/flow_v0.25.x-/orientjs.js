declare module "orientjs" {
  /**
   * A lightweight definiton for orientjs module, Official node.js driver for OrientDB.
   * @description
   * Official node.js driver for OrientDB. Fast, lightweight, uses the binary protocol.
   * @author
   * Saeed Tabrizi (saeed a_t nowcando.com)
   * @version
   * 3.0.1
   * Make a orientdb server client in binary protocol  .
   * @param config
   * The configuration for server connection.
   */
  declare function orientjs(
    config: orientjs$orientjs$ServerConfig
  ): orientjs$orientjs$Server;

  declare type orientjs$Version = number | string;

  declare type orientjs$PropertyType =
    | "Boolean"
    | "Integer"
    | "Short"
    | "Long"
    | "Float"
    | "Double"
    | "DateTime"
    | "String"
    | "Binary"
    | "Embedded"
    | "EmbeddedList"
    | "EmbeddedSet"
    | "EmbeddedMap"
    | "Link"
    | "LinkList"
    | "LinkSet"
    | "LinkMap"
    | "Byte"
    | "Transient"
    | "Date"
    | "Custom"
    | "Decimal"
    | "LinkBag";

  declare class orientjs$DataTypes {
    constructor(...args: empty): mixed;
    static +Boolean: Class<orientjs$DataTypes__Boolean> &
      orientjs$DataTypes__Boolean &
      0; // 0
    static +Integer: Class<orientjs$DataTypes__Integer> &
      orientjs$DataTypes__Integer &
      1; // 1
    static +Short: Class<orientjs$DataTypes__Short> &
      orientjs$DataTypes__Short &
      2; // 2
    static +Long: Class<orientjs$DataTypes__Long> &
      orientjs$DataTypes__Long &
      3; // 3
    static +Float: Class<orientjs$DataTypes__Float> &
      orientjs$DataTypes__Float &
      4; // 4
    static +Double: Class<orientjs$DataTypes__Double> &
      orientjs$DataTypes__Double &
      5; // 5
    static +Datetime: Class<orientjs$DataTypes__Datetime> &
      orientjs$DataTypes__Datetime &
      6; // 6
    static +string: Class<orientjs$DataTypes__string> &
      orientjs$DataTypes__string &
      7; // 7
    static +Binary: Class<orientjs$DataTypes__Binary> &
      orientjs$DataTypes__Binary &
      8; // 8
    static +Embedded: Class<orientjs$DataTypes__Embedded> &
      orientjs$DataTypes__Embedded &
      9; // 9
    static +EmbeddedList: Class<orientjs$DataTypes__EmbeddedList> &
      orientjs$DataTypes__EmbeddedList &
      10; // 10
    static +EmbeddedSet: Class<orientjs$DataTypes__EmbeddedSet> &
      orientjs$DataTypes__EmbeddedSet &
      11; // 11
    static +EmbeddedMap: Class<orientjs$DataTypes__EmbeddedMap> &
      orientjs$DataTypes__EmbeddedMap &
      12; // 12
    static +Link: Class<orientjs$DataTypes__Link> &
      orientjs$DataTypes__Link &
      13; // 13
    static +LinkList: Class<orientjs$DataTypes__LinkList> &
      orientjs$DataTypes__LinkList &
      14; // 14
    static +LinkSet: Class<orientjs$DataTypes__LinkSet> &
      orientjs$DataTypes__LinkSet &
      15; // 15
    static +LinkMap: Class<orientjs$DataTypes__LinkMap> &
      orientjs$DataTypes__LinkMap &
      16; // 16
    static +Byte: Class<orientjs$DataTypes__Byte> &
      orientjs$DataTypes__Byte &
      17; // 17
    static +Transient: Class<orientjs$DataTypes__Transient> &
      orientjs$DataTypes__Transient &
      18; // 18
    static +Date: Class<orientjs$DataTypes__Date> &
      orientjs$DataTypes__Date &
      19; // 19
    static +Custom: Class<orientjs$DataTypes__Custom> &
      orientjs$DataTypes__Custom &
      20; // 20
    static +Decimal: Class<orientjs$DataTypes__Decimal> &
      orientjs$DataTypes__Decimal &
      21; // 21
    static +LinkBag: Class<orientjs$DataTypes__LinkBag> &
      orientjs$DataTypes__LinkBag &
      22; // 22
  }

  declare class orientjs$DataTypes__Boolean mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Integer mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Short mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Long mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Float mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Double mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Datetime mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__string mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Binary mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Embedded mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__EmbeddedList mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__EmbeddedSet mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__EmbeddedMap mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Link mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__LinkList mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__LinkSet mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__LinkMap mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Byte mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Transient mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Date mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Custom mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__Decimal mixins orientjs$DataTypes {}
  declare class orientjs$DataTypes__LinkBag mixins orientjs$DataTypes {}

  declare class errors$BaseError {
    name: string;
    init(name: string): void;
  }

  declare class errors$OperationError mixins errors$BaseError {
    message: string;
    date: any;
  }

  declare class errors$RequestError mixins errors$OperationError {}

  declare interface Migration$MigrationManagerConfig {
    name?: string;
    db?: orientjs$Db;
    dir?: string;
    className?: string;
  }

  declare class Migration$Manager mixins Migration$MigrationManager {
    constructor(config: Migration$MigrationManagerConfig): this;
  }

  declare class Migration$Migration {
    name: string;
    server: orientjs$Server;
    db: orientjs$Db;
    configure(config?: any): void;
    up(): Promise<any>;
    down(): Promise<any>;
  }

  declare class Migration$MigrationManager {
    /**
     * # Migration Manager
     * @param config
     * The configuration for the migration manager.
     */
    constructor(config?: Migration$MigrationManagerConfig): this;
    name: string;
    server: orientjs$Server;
    db: orientjs$Db;
    dir: string;
    className: string;

    /**
     * Create a new migration.
     * @param config
     * The name or configuration for the new migration.
     * @promise
     * {string}                The full path to the created migration.
     */
    create(param: string): Promise<string>;

    /**
     * Generate the content for a migration.
     * @param config
     * The configuration object.
     * @return
     * The generated JavaScript source code.
     */
    generateMigration(config: any): string;

    /**
     * List the migrations that have not yet been applied.
     * @promise
     * {string[]} An array of migration names
     */
    list(): Promise<string[]>;

    /**
     * List all the available migrations.
     * @promise
     * {string[]} The names of the available migrations.
     */
    listAvailable(): Promise<string[]>;

    /**
     * Ensure the migration class exists.
     * @promise
     * {MigrationManager}  The manager instance with intact structure.
     */
    ensureStructure: Promise<Migration$MigrationManager>;

    /**
     * Retrieve a list of applied migrations.
     * @promise
     * {Object[]} The applied migrations.
     */
    listApplied(): Promise<any[]>;

    /**
     * Perform the migration.
     * @param limit
     * The maximum number of migrations to apply, if any.
     * @promise
     * {Mixed} The result of the migration.
     */
    up(limit?: number): Promise<any>;

    /**
     * Revert the migration.
     * @param limit
     * The maximum number of migrations to revert, if any.
     * @promise
     * {Mixed} The result of the migration.
     */
    down(limit?: number): Promise<any>;

    /**
     * Load the migration with the given name.
     * @param name
     * The name of the migation.
     * @return
     * The loaded migration instance.
     */
    loadMigration(name: string): Migration$Migration;

    /**
     * Apply the migration with the given name.
     * @param name
     * The name of the migation.
     * @promise
     * {Mixed} The result of the migration.
     */
    applyMigration(name: string): Promise<any>;

    /**
     * Revert the migration with the given name.
     * @param name
     * The name of the migation.
     * @promise
     * {Mixed} The result of the migration.
     */
    revertMigration(name: string): Promise<any>;
  }

  declare interface orientjs$Logger {
    error(...args: any[]): void;
    log(...args: any[]): void;
    debug(...args: any[]): void;
  }

  declare class orientjs$RID mixins String {
    cluster: number;
    position: number;
    valueOf(): string;
    isValid(input?: string | orientjs$RID | any): boolean;
    equals(rid: string | orientjs$RID): boolean;
    parse(input: string): boolean;
    parse(input: string): orientjs$RID;
    parse(input: string): orientjs$RID[];
    toRid(cluster: number, position: number): any;
  }

  declare interface orientjs$CustomField {
    /**
     * Get the value of the given custom field.
     * @param key
     * The name of the field to get.
     * @return
     * The field value, or undefined if it doesn't exist.
     */
    get(key: string): orientjs$CustomField;

    /**
     * Set a custom field.
     * @param key
     * The key to set, or map of keys to values.
     * @param value
     * The value to set, if `key` is not an object.
     * @promise
     * {Object|null}         The new set of custom fields, or null if none are present.
     */
    set(key: string, value: any): orientjs$CustomField;

    /**
     * Unset the custom field with the given name,
     * @param key
     * The name of the custom field to remove.
     * @promise
     * {Object|null}     The new set of custom fields, or null if none are present.
     */
    unset(key: string): orientjs$CustomField;
  }

  declare interface orientjs$PropertyCreateConfig {
    name: string;
    type: orientjs$PropertyType;
    default?: any;
    ifnotexist?: boolean;
    unsafe?: boolean;
    mandatory?: boolean;
    readonly?: boolean;
    notNull?: boolean;
    collate?: string;
    linkedClass?: string;
    linkedType?: string;
    regexp?: RegExp | string;
    min?: number;
    max?: number;
    custom?: {
      fields?: orientjs$CustomField[]
    };
  }

  declare interface orientjs$PropertyUpdateConfig {
    name: string;
    type: orientjs$PropertyType;
    default?: any;
    mandatory?: boolean;
    readonly?: boolean;
    notNull?: boolean;
    collate?: string;
    linkedClass?: string;
    linkedType?: string;
    regexp?: RegExp | string;
    min?: number;
    max?: number;
    custom?: {
      fields?: orientjs$CustomField[]
    };
  }

  declare class orientjs$Property {
    class: orientjs$Class;
    name: string;
    originalName: string;
    type: orientjs$PropertyType;
    mandatory: boolean;
    readonly: boolean;
    notNull: boolean;
    collate: string;
    linkedClass: string;
    linkedType: orientjs$PropertyType;
    regexp: RegExp | string;
    min: number;
    max: number;
    custom: {
      fields?: orientjs$CustomField[]
    };
    configure(config?: any): void;
    reload(): Promise<orientjs$Property>;
    list(): Promise<orientjs$Property[]>;

    /**
     * Create a new property.
     * @param config
     * The property name or configuration.
     * @param reload
     * Whether to reload the property, default to true.
     * @promise
     * {Object}              The created property.
     */
    create(
      config?: orientjs$PropertyCreateConfig | string,
      reload?: boolean
    ): Promise<orientjs$Property>;
    create(
      config: orientjs$PropertyCreateConfig[],
      reload?: boolean
    ): Promise<orientjs$Property[]>;

    /**
     * Get the property with the given name.
     * @param name
     * The property to get.
     * @promise
     * {Object|null}   The retrieved property.
     */
    get(name: string): Promise<orientjs$Property>;

    /**
     * Update the given property.
     * @param property
     * The property settings.
     * @param reload
     * Whether to reload the property, default to true.
     * @promise
     * {Object}           The updated property.
     */
    update(
      config: orientjs$PropertyUpdateConfig,
      reload?: boolean
    ): Promise<orientjs$Property>;
    drop(
      name: string,
      config?: {
        ifexist?: boolean,
        force?: boolean
      }
    ): Promise<orientjs$Class>;
    alter(name: string, setting?: any): Promise<orientjs$Class>;
    rename(oldName: string, newName?: string): Promise<orientjs$Property>;
  }

  /**
   * The class constructor.
   * @param config
   * The configuration for the class
   */
  declare class orientjs$Class {
    db: orientjs$Db;
    name: string;
    shortName: string;
    defaultClusterId: any;
    superClass: string;
    originalName: string;
    clusterIds: number[];

    /**
     * Configure the class instance.
     * @param config
     * The configuration object.
     */
    configure(config?: any): void;

    /**
     * Retreive a list of classes from the database.
     * @param refresh
     * Whether to refresh the list or not.
     * @promise
     * {Object[]}       An array of class objects.
     */
    list(
      limit: number | boolean | any,
      offset?: number
    ): Promise<orientjs$Class[]>;

    /**
     * Find a list of records in the class.
     * @param attributes
     * The attributes to search with.
     * @param limit
     * The maximum number of records to return
     * @param offset
     * The offset to start returning records from.
     * @promise
     * {Object[]}          An array of records in the class.
     */
    find(
      attributes: any,
      limit?: number,
      offset?: number
    ): Promise<orientjs$Record[]>;

    /**
     * Create a record for this class.
     * @param record
     * The record to create.
     * @promise
     * {Object}        The created record.
     */
    create(record: orientjs$Record): Promise<orientjs$Record>;

    /**
     * Create a new class.
     * @param name
     * The name of the class to create.
     * @param parentName
     * The name of the parent to extend, if any.
     * @param cluster
     * The cluster name or id.
     * @param isAbstract
     * The flag for the abstract class
     * @param ifnotexist
     * The flag for the if not exist class
     * @promise
     * {Object}                The created class object
     */
    create(
      name: string,
      parentName?: string,
      cluster?: string,
      isAbstract?: boolean,
      ifnotexist?: boolean
    ): Promise<orientjs$Class>;

    /**
     * Update the given class.
     * @param class
     * The class settings.
     * @param reload
     * Whether to reload the class, default to true.
     * @promise
     * {Object}           The updated class.
     */
    update(cls: any, reload: boolean): Promise<orientjs$Class>;

    /**
     * Reload the class instance.
     * @promise
     * {Class} The class instance.
     */
    reload(): Promise<orientjs$Class[]>;

    /**
     * Delete a class.
     * @param name
     * The name of the class to delete.
     * @param config
     * The config.
     * @promise
     * {Db}         The database instance.
     */
    drop(
      name: string,
      config?: {
        ifexist?: boolean,
        force?: boolean
      }
    ): Promise<orientjs$Db>;

    /**
     * Get a class by name.
     * @param name
     * The name of the class.
     * @param refresh
     * Whether to refresh the data, defaults to false.
     * @promise
     * {Object}          The class object if it exists.
     */
    get(name: string, refresh?: boolean): Promise<orientjs$Class>;

    /**
     * Cache the given class data for fast lookup later.
     * @param classes
     * The class objects to cache.
     * @return
     * The db instance.
     */
    cacheData(classes: orientjs$Class[]): orientjs$Db;
    property: orientjs$Property;
  }

  declare class orientjs$Cluster {
    name: string;
    location: string;
    list(refresh?: boolean): Promise<any[]>;
    create(
      name: string,
      location?: string
    ): Promise<orientjs$Cluster> & Promise<any>;
    get(
      nameOrId: string,
      refresh?: boolean
    ): Promise<orientjs$Cluster> & Promise<any>;
    getByName(
      name: string,
      refresh?: boolean
    ): Promise<orientjs$Cluster> & Promise<any>;
    getById(
      id: string,
      refresh?: boolean
    ): Promise<orientjs$Cluster> & Promise<any>;
    drop(name: string): Promise<orientjs$Db>;
    count(name: string): Promise<number>;
    range(name: string): Promise<any>;
    cacheData(clusters: orientjs$Cluster[] & any[]): orientjs$Db;
  }

  /**
   * The sequence constructor.
   * @param config
   * The configuration for the sequence
   */
  declare class orientjs$Sequence {
    db: orientjs$Db;
    name: string;
    type: string;
    value: number;
    incr: number;
    start: number;
    cache: number;

    /**
     * Configure the sequence instance.
     * @param config
     * The configuration object.
     */
    configure(config?: any): void;

    /**
     * Retreive a list of sequences from the database.
     * @param refresh
     * Whether to refresh the list or not.
     * @promise
     * {Object[]}       An array of class objects.
     */
    list(refresh: boolean): Promise<orientjs$Sequence[]>;

    /**
     * Create a new sequence.
     * @param name
     * The name of the sequence to create.
     * @param type
     * The type of sequence.
     * @param start
     * The start number.
     * @param incerement
     * The increment number.
     * @param cache
     * The cache number
     * @promise
     * {Object}                The created sequence object
     */
    create(
      name: string,
      type: "ORDERED" | "CACHED",
      start?: number,
      incerement?: number,
      cache?: number
    ): Promise<orientjs$Sequence>;

    /**
     * update a  sequence.
     * @param name
     * The name of the sequence to create.
     * @param incerement
     * The increment number.
     * @param cache
     * The cache number
     * @param start
     * The start number.
     * @promise
     * {Object} The created sequence object
     */
    update(
      name: string,
      start?: number,
      incerement?: number,
      cache?: number
    ): Promise<orientjs$Sequence>;

    /**
     * Reload the sequence instance.
     * @promise
     * {Sequence} The class instance.
     */
    reload(): Promise<orientjs$Sequence[]>;

    /**
     * Delete a sequence.
     * @param name
     * The name of the sequence to delete.
     * @param config
     * The config.
     * @promise
     * {Db}         The database instance.
     */
    drop(name: string, config?: {}): Promise<orientjs$Db>;

    /**
     * Get a sequence by name.
     * @param name
     * The name of the sequence.
     * @param refresh
     * Whether to refresh the data, defaults to false.
     * @promise
     * {Object}          The sequence object if it exists.
     */
    get(name: string, refresh?: boolean): Promise<orientjs$Sequence>;

    /**
     * Cache the given class data for fast lookup later.
     * @param sequences
     * The sequence objects to cache.
     * @return
     * The db instance.
     */
    cacheData(sequences: orientjs$Sequence[]): orientjs$Db;
  }

  declare interface orientjs$RecordMeta {
    "@rid": orientjs$RID;
    "@version": orientjs$Version;
  }

  declare type orientjs$ODocument = orientjs$Record;

  declare type orientjs$BinaryRecord = orientjs$Record & Buffer;

  declare class orientjs$Record mixins Object {
    "@rid": orientjs$RID;
    "@type": "d" | "b";
    "@class": string;
    "@version": orientjs$Version;
    rid: orientjs$RID;

    /**
     * Insert the given record into the database.
     * @param record
     * The record to insert.
     * @param options
     * The command options.
     * @promise
     * {Object}        The inserted record.
     */
    create(
      record: orientjs$ODocument | orientjs$Record | orientjs$BinaryRecord,
      options?: any
    ): Promise<orientjs$Record>;

    /**
     * Insert the given record into the database.
     * @param record
     * The record to insert.
     * @param options
     * The command options.
     * @promise
     * {Object}        The inserted record.
     */
    create(
      records:
        | orientjs$ODocument[]
        | orientjs$Record[]
        | orientjs$BinaryRecord[],
      options?: any
    ): Promise<orientjs$Record[]>;

    /**
     * Read the given record.
     * @param record
     * The record to load.
     * @param options
     * The query options.
     * @promise
     * {Object}        The loaded record.
     */
    get(
      record: orientjs$Record | orientjs$RID,
      options?: any
    ): Promise<orientjs$Record | Buffer>;

    /**
     * Read the given record.
     * @param records
     * The record to load.
     * @param options
     * The query options.
     * @promise
     * {Object[]}        The loaded record.
     */
    get(
      records: orientjs$Record[] | orientjs$RID[],
      options?: any
    ): Promise<orientjs$Record[] | Buffer[]>;

    /**
     * Resolve all references within the given collection of records.
     * @param records
     * The records to resolve.
     * @return
     * The records with references replaced.
     */
    resolveReferences(records: orientjs$Record[]): orientjs$Record[];

    /**
     * Read the metadata for the given record.
     * @param record
     * The record to load.
     * @param options
     * The query options.
     * @promise
     * {Object}        The record object with loaded meta data.
     */
    meta(
      record: orientjs$Record | orientjs$RID | string,
      options?: any
    ): Promise<orientjs$RecordMeta>;

    /**
     * Read the metadata for the given record.
     * @param record
     * The record to load.
     * @param options
     * The query options.
     * @promise
     * {Object}        The record object with loaded meta data.
     */
    meta(
      records: orientjs$Record[] | orientjs$RID[],
      options?: any
    ): Promise<orientjs$RecordMeta[]>;

    /**
     * Update the given record.
     * @param record
     * The record to update.
     * @param options
     * The query options.
     * @promise
     * {Object}        The updated record.
     */
    update(
      record?: orientjs$Record | orientjs$RID,
      options?: any
    ): Promise<orientjs$Record>;
    delete(): Promise<orientjs$Record> & Promise<orientjs$Record>;

    /**
     * Delete the given record.
     * @param record
     * The record or record id to delete.
     * @param options
     * The query options.
     * @promise
     * {Object}                    The deleted record object.
     */
    delete(
      record: orientjs$Record | orientjs$RID,
      options?: any
    ): Promise<orientjs$Record>;
  }

  declare interface orientjs$IndexConfig {
    name: string;
    class?: string;
    properties?: string[];
    type:
      | "UNIQUE"
      | "NOTUNIQUE"
      | "FULLTEXT"
      | "DICTIONARY"
      | "UNIQUE_HASH_INDEX"
      | "NOTUNIQUE_HASH_INDEX"
      | "FULLTEXT_HASH_INDEX"
      | "DICTIONARY_HASH_INDEX"
      | "SPATIAL";
    keyType?: string;
    metadata?: any;
    engine?: "LUCENE" | "COLA" | string;
  }

  declare interface orientjs$IndexEntry {
    key: string;
    value: string | orientjs$RID;
  }

  declare interface orientjs$Index {
    cached: boolean;
    db: orientjs$Db;
    name: string;
    algorithm: string;
    clusters: orientjs$Cluster[];
    type: string;
    configure(config: any): void;
    add(
      idx: orientjs$IndexEntry | orientjs$IndexEntry[]
    ): Promise<orientjs$Index[]>;
    set(key: string, value: string | orientjs$RID): Promise<orientjs$Index>;
    delete(name: string): Promise<orientjs$Index>;
    select(): orientjs$Statement;
    list(refresh?: boolean): Promise<orientjs$Index[]>;
    create(
      config: orientjs$IndexConfig | orientjs$IndexConfig[]
    ): Promise<orientjs$Index>;
    drop(name: string): Promise<orientjs$Db>;
    get(name: string, refresh?: boolean): Promise<orientjs$Index>;
    cacheData(indices: any[]): Promise<orientjs$Db>;
  }

  declare type orientjs$SqlExpression =
    | string
    | orientjs$RawExpression
    | orientjs$SqlFunction;

  declare type orientjs$Statement = {
    select(param?: string | string[]): orientjs$Statement,
    traverse(param?: string | string[]): orientjs$Statement,
    strategy(param?: string): orientjs$Statement,
    insert(param?: string | string[]): orientjs$Statement,
    update(param?: string | string[]): orientjs$Statement,
    delete(param?: string | string[]): orientjs$Statement,
    into(param?: string): orientjs$Statement,
    create(paramtype?: string, paramname?: string): orientjs$Statement,
    from(param?: string | any): orientjs$Statement,
    to(param?: any): orientjs$Statement,
    set(param?: any): orientjs$Statement,
    content(param?: any): orientjs$Statement,
    increment(property?: string, value?: any): orientjs$Statement,
    add(property: string, value: any): orientjs$Statement,
    remove(property: string, value: any): orientjs$Statement,
    put(property: string, keysValues: any): orientjs$Statement,
    upsert(
      condition?: any,
      params?: any,
      comparisonOperator?: string
    ): orientjs$Statement,
    where(params: any): orientjs$Statement,
    while(param: any): orientjs$Statement,
    containsText(param: any): orientjs$Statement,
    and(param: any): orientjs$Statement,
    or(param: any): orientjs$Statement,
    group(param: any): orientjs$Statement,
    order(param: any): orientjs$Statement,
    skip(value: number): orientjs$Statement,
    offset(value?: number): orientjs$Statement,
    limit(value: number): orientjs$Statement,
    fetch(param?: any): orientjs$Statement,
    let(name: string, value: string | orientjs$Statement): orientjs$Statement,
    lock(param: any): orientjs$Statement,
    if(
      condition: orientjs$SqlExpression,
      statements: orientjs$Statement[]
    ): orientjs$Statement,
    if(
      condition: orientjs$SqlExpression,
      ...statements: orientjs$Statement[]
    ): orientjs$Statement,
    rollback(param?: any): orientjs$Statement,
    sleep(ms?: number): orientjs$Statement,
    commit(retryLimit?: number): orientjs$Statement,
    retry(retryLimit?: number): orientjs$Statement,
    wait(waitLimit: number): orientjs$Statement,
    return(value: orientjs$SqlExpression): orientjs$Statement,
    lucene(property: string | any, luceneQuery: string): orientjs$Statement,
    near(
      latitudeProperty: string | any,
      longitudeProperty: string | number,
      longitude: number,
      latitude?: number,
      maxDistanceInKms?: number
    ): orientjs$Statement,
    within(
      latitudeProperty: string,
      longitudeProperty: string,
      box: number[]
    ): orientjs$Statement,
    addParams(key: string, value: any): orientjs$Statement,
    addParams(value: any): orientjs$Statement,
    token(value: any): orientjs$Statement,
    buildStatement(): string
  } & orientjs$Query<any>;

  declare interface orientjs$Query<T> {
    transform<T>(transformer: (item: orientjs$Record) => T): orientjs$Query<T>;
    column(name: string): orientjs$Query<T>;
    defaults(defaults: any): orientjs$Query<T>;
    one<T>(params?: any): Promise<T>;
    all<T>(params?: any): Promise<T[]>;
    scalar<T>(params?: any): Promise<T>;
    exec<T>(params?: any): Promise<T>;
  }

  declare class orientjs$Transaction {
    db: orientjs$Db;
    id: number;
    commit(): Promise<any>;
    create(record: orientjs$Record): orientjs$Transaction;
    update(record: orientjs$Record): orientjs$Transaction;
    delete(record: orientjs$Record): orientjs$Transaction;
  }

  declare interface orientjs$DbConnectionConfig {
    useToken?: boolean;
    name?: string;
    username?: string;
    password?: string;
    sessionId?: number;
    forcePrepare?: boolean;
    server?: orientjs$Server;
    type?: string;
    storage?: string;
    token?: any;
    transformers?: Array<(item: orientjs$Record) => any>;
  }

  declare interface orientjs$RawExpression {
    db: orientjs$Db;
    value: string;
    as(alias: string): orientjs$RawExpression;
  }

  declare class orientjs$AbsSqlFunction {
    constructor(field: number | string): this;
  }

  declare class orientjs$AvgSqlFunction {
    constructor(field: string): this;
  }

  declare class orientjs$SequenceSqlFunction {
    constructor(name: string): this;
    next(): number;
    current(): number;
    reset(): number;
  }

  declare interface orientjs$SqlFunction {
    db: orientjs$Db;
    abs: orientjs$AbsSqlFunction;
    avg: orientjs$AbsSqlFunction;
    sequence: orientjs$SequenceSqlFunction;
  }

  declare interface orientjs$QueryOptions {
    params?: any;
    mode?: "s" | "a" | "l";
    fetchPlan?: any;
    limit?: number;
    token?: any;
    class?: string;
    language?: "SQL" | "Javascript";
  }

  declare class orientjs$Db mixins events.EventEmitter {
    sessionId: number;
    forcePrepare: boolean;
    name: string;
    server: orientjs$Server;
    type: "graph" | "document";
    storage: "plocal" | "memory";
    username: string;
    password: string;
    token: any;
    dataSegments: any[];
    transactionId: number;
    transformers: any;
    transformerFunctions: any;
    class: orientjs$Class;
    cluster: orientjs$Cluster;
    record: orientjs$Record;
    index: orientjs$Index;
    sequence: orientjs$Sequence;

    /**
     * Configure the database instance.
     * @param config
     * The configuration for the database.
     * @return
     * The configured database object.
     */
    configure(config: orientjs$DbConfig): orientjs$Db;

    /**
     * Initialize the database instance.
     */
    init(): void;

    /**
     * Open the database.
     * @promise
     * {Db} The open db instance.
     */
    open(): Promise<orientjs$Db>;

    /**
     * Close the database.
     * @promise
     * {Db} The now closed db instance.
     */
    close(): Promise<orientjs$Db>;

    /**
     * Send the given operation to the server, ensuring the
     * database is open first.
     * @param operation
     * The operation to send.
     * @param data
     * The data for the operation.
     * @promise
     * {Mixed}            The result of the operation.
     */
    send(operation: number, data: any): Promise<any>;

    /**
     * Reload the configuration for the database.
     * @promise
     * {Db}  The database with reloaded configuration.
     */
    reload(): Promise<orientjs$Db>;

    /**
     * Begin a new transaction.
     * @return
     * The transaction instance.
     */
    begin(): orientjs$Transaction;

    /**
     * Execute an SQL query against the database and retreive the raw, parsed response.
     * @param query
     * The query or command to execute.
     * @param options
     * The options for the query / command.
     * @promise
     * {Mixed}          The results of the query / command.
     */
    exec(query: string, options?: orientjs$QueryOptions): Promise<any>;

    /**
     * Execute an SQL query against the database and retreive the results
     * @param query
     * The query or command to execute.
     * @param options
     * The options for the query / command.
     * @promise
     * {Mixed}          The results of the query / command.
     */
    query(command: string, options?: orientjs$QueryOptions): Promise<any>;

    /**
     * Execute a live query against the database
     * @param query
     * The query or command to execute.
     * @param options
     * The options for the query / command.
     * @promise
     * {Mixed}          The token of the live query.
     */
    liveQuery(command: string, options?: orientjs$QueryOptions): Promise<any>;

    /**
     * Normalize a result, where possible.
     * @param result
     * The result to normalize.
     * @return
     * The normalized result.
     */
    normalizeResult(result: any): any;

    /**
     * Normalize the content for a result.
     * @param content
     * The content to normalize.
     * @return
     * The normalized content.
     */
    normalizeResultContent(content: any): any;

    /**
     * Register a transformer function for documents of the given class.
     * This function will be invoked for each document of the specified class
     * in all future result sets.
     * @param className
     * The name of the document class.
     * @param transformer
     * The transformer function.
     * @return
     * The database instance.
     */
    registerTransformer<T>(
      className: string,
      transformer: (item: orientjs$Record) => T
    ): orientjs$Db;

    /**
     * Transform a document according to its `@class` property, using the registered transformers.
     * @param document
     * The document to transform.
     * @return
     * The transformed document.
     */
    transformDocument(document: orientjs$ODocument): any;

    /**
     * Create a query instance for this database.
     * @return
     * The query instance.
     */
    createQuery(): orientjs$Statement;

    /**
     * Create a raw expression.
     * @return
     * The raw expression instance.
     */
    rawExpression(param: string): orientjs$RawExpression;

    /**
     * Create a sql Function.
     * @return
     * The sql function instance.
     */
    sqlFunction(options?: any): orientjs$SqlFunction;

    /**
     * Create a create query.
     * @return
     * The query instance.
     */
    create(params?: any): orientjs$Statement;
    create(paramtype: string, paramname: string): orientjs$Statement;

    /**
     * Create a select query.
     * @return
     * The query instance.
     */
    select(params?: any): orientjs$Statement;

    /**
     * Create a traverse query.
     * @return
     * The query instance.
     */
    traverse(params?: any): orientjs$Statement;

    /**
     * Create an insert query.
     * @return
     * The query instance.
     */
    insert(params?: any): orientjs$Statement;

    /**
     * Create an update query.
     * @return
     * The query instance.
     */
    update(params?: any): orientjs$Statement;

    /**
     * Create a delete query.
     * @return
     * The query instance.
     */
    delete(params?: any): orientjs$Statement;

    /**
     * Create a transactional query.
     * @return
     * The query instance.
     */
    let(params?: any): orientjs$Statement;
    let(name: string, value: string | orientjs$Statement): orientjs$Statement;

    /**
     * Create a transactional query with if.
     * @return
     * The query instance.
     */
    if(
      condition: orientjs$SqlExpression,
      statements: orientjs$Statement[]
    ): orientjs$Statement;

    /**
     * Create a transactional query with if.
     * @return
     * The query instance.
     */
    if(
      condition: orientjs$SqlExpression,
      ...statements: orientjs$Statement[]
    ): orientjs$Statement;

    /**
     * Escape the given input.
     * @param input
     * The input to escape.
     * @return
     * The escaped input.
     */
    escape(input: string): string;

    /**
     * Create a context for a user, using their authentication token.
     * The context includes the query builder methods, which will be executed
     * on behalf of the user.
     * @param token
     * The authentication token.
     * @return
     * The object containing the query builder methods.
     */
    createUserContext(token: any): any;

    /**
     * Create a orient function from a plain Javascript function
     * @param name
     * The name of the function
     * @param fn
     * Plain Javascript function to stringify
     * @param options
     * Not currently used but will be used for 'IDEMPOTENT' arg
     * @promise
     * {Mixed}           The results of the query / command.
     */
    createFn(
      name: string,
      fn: (...args: any[]) => any,
      options?: any
    ): Promise<any>;
    createFn(fn: (...args: any[]) => any, options?: any): Promise<any>;
  }

  declare interface orientjs$ServerConfiguration {
    get(name: string): string;
    set(key: string, value: string): string;
    list(): any;
  }

  /**
   * # Server
   * Represents a connection to an orientdb server.
   * @param options
   * The server URL, or configuration object
   */
  declare class orientjs$Server {
    constructor(options?: orientjs$ServerConfig): this;
    config: orientjs$ServerConfiguration;
    logger: orientjs$Logger;

    /**
     * Initialize the server instance.
     */
    init(): void;

    /**
     * Configure the server instance.
     * @param config
     * The configuration for the server.
     * @return
     * The configured server object.
     */
    configure(config: orientjs$ServerConfig): orientjs$Server;

    /**
     * Configure the transport for the server.
     * @param config
     * The server config.
     * @return
     * The configured server object.
     */
    configureTransport(config: any): orientjs$Server;

    /**
     * Configure the logger for the server.
     * @param config
     * The logger config
     * @return
     * The server instance with the configured logger.
     */
    configureLogger(logger: orientjs$Logger): orientjs$Server;

    /**
     * Send an operation to the server,
     * @param operation
     * The id of the operation to send.
     * @param options
     * The options for the operation.
     * @promise
     * {Mixed}            The result of the operation.
     */
    send(operation: number, options: any): any;

    /**
     * Close the connection to the server.
     * @return
     * the disconnected server instance
     */
    close(): orientjs$Server;

    /**
     * Use the database with the given name / config.
     * @param config
     * The database name, or configuration object.
     * @return
     * The database instance.
     */
    use(name: string | orientjs$DbConfig): orientjs$Db;

    /**
     * Create a database with the given name / config.
     * @param config
     * The database name or configuration object.
     * @promise
     * {Db}                  The database instance
     */
    create(name: string | orientjs$DbConfig): Promise<orientjs$Db>;

    /**
     * Destroy a database with the given name / config.
     * @param config
     * The database name or configuration object.
     * @promise
     * {Mixed}               The server response.
     */
    drop(name: string | orientjs$DbConfig): Promise<orientjs$Db>;

    /**
     * List all the databases on the server.
     * @return
     * An array of databases.
     */
    list(): Promise<orientjs$Db[]>;

    /**
     * Determine whether a database exists with the given name.
     * @param name
     * The database name.
     * @param storageType
     * The storage type, defaults to `plocal`.
     * @promise
     * {Boolean}            true if the database exists.
     */
    exists(name: string, storageType?: string): Promise<boolean>;

    /**
     * Freeze the database with the given name.
     * @param name
     * The database name.
     * @param storageType
     * The storage type, defaults to `plocal`.
     * @return
     * The response from the server.
     */
    freeze(name: string, storageType?: string): any;

    /**
     * Release the database with the given name.
     * @param name
     * The database name.
     * @param storageType
     * The storage type, defaults to `plocal`.
     * @return
     * The response from the server.
     */
    release(name: string, storageType?: string): any;
    shutdown(): Promise<any>;
  }

  declare class orientjs$ODatabase mixins orientjs$Db {
    constructor(config?: {
      host: string,
      port?: number,
      username?: string,
      password?: string,
      name: string
    }): this;
  }

  declare interface orientjs$ServerConfig {
    useToken?: boolean;
    host: string;
    port?: number;
    username?: string;
    password?: string;
    servers?: orientjs$ServerConfig[];
  }

  declare interface orientjs$DbConfig {
    name: string;
    type?: string;
    storage?: string;
    username?: string;
    password?: string;
  }
  declare export default typeof orientjs;
}
