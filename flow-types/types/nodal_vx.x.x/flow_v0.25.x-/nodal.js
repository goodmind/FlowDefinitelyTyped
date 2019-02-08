declare module "nodal" {
  import typeof * as fxn from "fxn";

  declare export class APIConstructor {
    format(
      obj: any,
      arrInterface?: string[]
    ): {
      meta: {
        total: number,
        count: number,
        offset: number,
        error: any,
        summary: string | null | void,
        resource: any
      },
      data: any
    };
    meta(
      total: number,
      count: number,
      offset: number,
      error: any,
      summary?: string | null,
      resource?: any
    ): {
      total: number,
      count: number,
      offset: number,
      error: any,
      summary: string | null | void,
      resource: any
    };
    error(
      message: string,
      details: string
    ): {
      meta: {
        total: number,
        count: number,
        offset: number,
        error: any,
        summary: string | null | void,
        resource: any
      },
      data: empty[]
    };
    spoof(
      obj: any,
      useResource?: boolean
    ): {
      meta: {
        total: number,
        count: number,
        offset: number,
        error: any,
        summary: string | null | void,
        resource: any
      },
      data: any
    };
    response(
      itemArray: any,
      arrInterface: any,
      useResource?: boolean
    ): {
      meta: {
        total: number,
        count: number,
        offset: number,
        error: any,
        summary: string | null | void,
        resource: any
      },
      data: any
    };
    resourceFromArray(
      arr: any[]
    ): {
      name: string,
      fields: any[]
    };
    resourceFromModelArray(modelArray: any, arrInterface: any): any;
  }
  declare export var API: APIConstructor;
  declare export var APIResource: any;
  declare export class Application mixins fxn.Application {
    constructor(): this;

    /**
     * HTTP Error
     */
    error(
      req: any,
      res: any,
      start: any,
      status: number,
      message: string,
      err: any
    ): void;
  }
  declare export class Controller mixins fxn.Controller {
    /**
     * Set HTTP status code for this response. If OPTIONS mode, default to 200.
     * @param {Number} code
     */
    status(value: number): boolean;

    /**
     * Using API formatting, send an http.ServerResponse indicating there was a Bad Request (400)
     * @param {string} msg
     * Error message to send
     * @param {Object} details
     * Any additional details for the error (must be serializable)
     * @return {boolean}
     */
    badRequest(msg: string, details: any): boolean;

    /**
     * Using API formatting, send an http.ServerResponse indicating there was an Unauthorized request (401)
     * @param {string} msg
     * Error message to send
     * @param {Object} details
     * Any additional details for the error (must be serializable)
     * @return {boolean}
     */
    unauthorized(msg: string, details: any): boolean;

    /**
     * Using API formatting, send an http.ServerResponse indicating the requested resource was Not Found (404)
     * @param {string} msg
     * Error message to send
     * @param {Object} details
     * Any additional details for the error (must be serializable)
     * @return {boolean}
     */
    notFound(msg: string, details: any): boolean;

    /**
     * Endpoint not implemented
     * @param {string} msg
     * Error message to send
     * @param {Object} details
     * Any additional details for the error (must be serializable)
     * @return {boolean}
     */
    notImplemented(msg: string, details: any): boolean;

    /**
     * Using API formatting, send an http.ServerResponse indicating there were Too Many Requests (429) (i.e. the client is being rate limited)
     * @param {string} msg
     * Error message to send
     * @param {Object} details
     * Any additional details for the error (must be serializable)
     * @return {boolean}
     */
    tooManyRequests(msg: string, details: any): boolean;

    /**
     * Using API formatting, send an http.ServerResponse indicating there was an Internal Server Error (500)
     * @param {string} msg
     * Error message to send
     * @param {Object} details
     * Any additional details for the error (must be serializable)
     * @return {boolean}
     */
    error(msg: string, details: any): boolean;

    /**
 * Using API formatting, generate an error or respond with model / object data.
 * @param {Error
| Object
| Array
| Nodal.Model
| Nodal.ModelArray} data
 * Object to be formatted for API response
 * @param {optional} Array
 * } The interface to use for the data being returned, if not an error.
 * @return {boolean}
 */
    respond(
      data: Error | Object | any[] | Model | ModelArray<Model>,
      arrInterface?: string[]
    ): boolean;
  }
  declare export interface IComparison {
    [item: string]: any;
    __order?: string;
    __offset?: number;
    __count?: number;
  }
  declare export class Composer<T: Model> {
    db: Database;
    Model: T;

    /**
     * Created by Model#query, used for composing SQL queries based on Models
     * @param {Nodal.Model} Model
     * The model class the composer is querying from
     * @param {Nodal.Composer} parent
     * The composer's parent (another composer instance)
     */
    constructor(modelConstructor: typeof Model, parent?: Composer<any>): this;

    /**
     * Add comparisons to SQL WHERE clause. Does not allow filtering if Model.hides() has been called.
     * @param {Object} comparisons
     * Comparisons object. {age__lte: 27}, for example.
     * @return {Nodal.Composer}
     * new Composer instance
     */
    safeWhere(...comparisonsArray: IComparison[]): this;

    /**
     * Join in a relationship. Filters out hidden fields from comparisons.
     * @param {string} joinName
     * The name of the joined relationship
     * @param {array} comparisonsArray
     * comparisons to perform on this join (can be overloaded)
     */
    safeJoin(joinName: string, ...comparisonsArray: IComparison[]): this;

    /**
     * Add comparisons to SQL WHERE clause.
     * @param {Object} comparisons
     * Comparisons object. {age__lte: 27}, for example.
     * @return {Nodal.Composer}
     * new Composer instance
     */
    where(...comparisonsArray: IComparison[]): this;

    /**
     * Order by field belonging to the current Composer instance's model.
     * @param {string} field
     * Field to order by
     * @param {string} direction
     * Must be 'ASC' or 'DESC'
     * @return {Nodal.Composer}
     * new Composer instance
     */
    orderBy(field: string, direction?: "ASC" | "DSC" | any): this;

    /**
     * Limit to an offset and count
     * @param {number} offset
     * The offset at which to set the limit. If this is the only argument provided, it will be the count instead.
     * @param {number} count
     * The number of results to be returned. Can be omitted, and if omitted, first argument is used for count.
     * @return {Nodal.Composer}
     * new Composer instance
     */
    limit(offset: number | string, count?: number | string): this;

    /**
     * Join in a relationship.
     * @param {string} joinName
     * The name of the joined relationship
     * @param {array} comparisonsArray
     * comparisons to perform on this join (can be overloaded)
     */
    join(
      joinName: string,
      comparisonsArray?: IComparison[] | IComparison,
      orderBy?: "ASC" | "DESC",
      count?: number,
      offset?: number
    ): this;

    /**
     * Groups by a specific field, or a transformation on a field
     * @param {String} column
     * The column to group by
     */
    groupBy(column: string): this;

    /**
     * Aggregates a field
     * @param {String} alias
     * The alias for the new aggregate field
     * @param {Function} transformation
     * The transformation to apply to create the aggregate
     */
    aggregate(alias: string, transformation?: Function): this;

    /**
     * Counts the results in the query
     * @param {function} callback
     * Supplied with an error and the integer value of the count
     */
    count(callback: (err: Error, count: number) => void): void;

    /**
     * Execute the query you've been composing.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"}
     * )} callback The method to execute when the query is complete
     */
    end(callback: (err: Error, modelArray: ModelArray<T>) => void): void;

    /**
     * Shortcut for .limit(1).end(callback) that only returns a model object or error if not found
     * @param {Function} callback
     * Callback to execute, provides an error and model parameter
     */
    first(callback: (err: Error, model: Model) => void): void;

    /**
     * Execute query as an update query, changed all fields specified.
     * @param {Object} fields
     * The object containing columns (keys) and associated values you'd like to update
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"}
     * )} callback The callback for the update query
     */
    update(
      fields: IAnyObject,
      callback: (err: Error, modelArray: ModelArray<T>) => void
    ): void;
  }
  declare export var CLI: any;
  declare export class Daemon mixins fxn.Daemon {
    constructor(): this;
    error(req: any, res: any, err: any): void;
  }
  declare export class Database {
    adapter: any;
    __logColorFuncs: Function[];
    constructor(): this;
    connect(cfg: any): boolean;
    close(callback: Function): boolean;
    log(sql: string, params?: any, time?: number): boolean;
    info(message: string): void;
    error(message: string): boolean;
    query(...args: any[]): void;
    transaction(...args: any[]): void;
    drop(): void;
    create(): void;
  }
  declare export class GraphQuery {
    identifier: string;
    name: string;
    Model: typeof Model;
    structure: any;
    joins: any;

    /**
     * Create a GraphQuery object
     * @param {String} str
     * The query to execute
     * @param {Number} maxDepth
     * The maximum depth of graph to traverse
     * @param {Nodal.Model} Model
     * The Model to base your query around (used for testing)
     */
    constructor(str: string, maxDepth: number, mModel?: typeof Model): this;

    /**
     * Create and execute a GraphQuery object
     * @param {String} str
     * The query to execute
     * @param {Number} maxDepth
     * The maximum depth of graph to traverse
     * @param {Function} callback
     * The function to execute upon completion
     */
    static query(str: string, maxDepth: number, callback: Function): boolean;

    /**
     * Parse syntax tree of a GraphQL query
     */
    static parseSyntaxTree(str: string, state?: string, arr?: any[]): any;

    /**
     * Fully parse a GraphQL query, get necessary joins to make in SQL
     */
    static parse(
      str: string,
      max: number
    ): {
      structure: any,
      joins: {}
    };

    /**
     * Format a parsed syntax tree in a way that the Composer expects
     */
    static formatTree(
      tree: any[],
      max: number,
      joins: any,
      parents?: any
    ): any[];

    /**
     * Query the GraphQuery object from the database
     * @param {Function} callback
     * The function to execute upon completion
     */
    query(callback: Function): this;
  }
  declare export interface IArrayMetadata {
    total?: number;
    offset?: number;
    [other: string]: any;
  }
  declare export class ItemArray<T> mixins Array<T> {
    constructor(): this;
    static from(arr: Object[]): ItemArray<{}>;
    setMeta(data: IArrayMetadata): IArrayMetadata;
    toObject(arrInterface: string[]): Object;
  }
  declare export class Migration {
    constructor(db: Database): this;
    up(): string[];
    down(): string[];
    executeUp(callback: (err: Error) => void): void;
    executeDown(callback: (err: Error) => void, prevId?: string): void;
    createTable(table: string, arrFieldData: Object[], modelName: string): any;
    dropTable(table: string): any;
    renameTable(
      table: string,
      newTableName: string,
      renameModel: string,
      newModelName: string
    ): any;
    alterColumn(
      table: string,
      column: string,
      type: DataType,
      properties: IColumnProperties
    ): any;
    addColumn(
      table: string,
      column: string,
      type: DataType,
      properties: IColumnProperties
    ): any;
    dropColumn(table: string, column: string): any;
    renameColumn(table: string, column: string, newColumn: string): any;
    createIndex(table: string, column: string, type: DataType): any;
    dropIndex(table: string, column: string): any;
    addForeignKey(table: string, referenceTable: string): any;
    dropForeignKey(table: string, referenceTable: string): any;
  }
  declare export var mime: any;

  /**
   * Model Stuff
   */
  declare export interface IErrorsObject {
    _query?: any;
    [field: string]: string[];
  }
  declare export interface ICalculation {
    fields: string[];
    calculate: Function;
  }
  declare export interface ICalculations {
    [calculations: string]: ICalculation;
  }
  declare export class Model {
    constructor: typeof Model;
    db: Database | any;
    schema: {
      table: string,
      columns: IColumn[]
    };
    data: any;
    externalInterface: string[];
    aggregateBy: {
      id: string,
      created_at: string,
      updated_at: string
    };
    formatters: IAnyObject;
    _inStorage: boolean;
    _calculations: ICalculations;
    _validations: IAnyObject;
    _validationsList: any[];
    _calculationsList: string[];
    _verificationsList: any;
    _hides: IAnyObject;
    _table: string;
    _columnLookup: {
      [key: string]: any
    };
    _columnNames: string[];
    _columns: IColumn[];
    _relationshipCache: IAnyObject;
    constructor(
      modelData: Object,
      fromStorage?: boolean,
      fromSeed?: boolean
    ): this;

    /**
     * Indicates whethere or not the model is currently represented in hard storage (db).
     * @return {boolean}
     */
    inStorage(): boolean;

    /**
     * Indicates whethere or not the model is being generated from a seed.
     * @return {boolean}
     */
    isSeeding(): boolean;

    /**
     * Tells us whether a model field has changed since we created it or loaded it from storage.
     * @param {string} field
     * The model field
     * @return {boolean}
     */
    hasChanged(field: string): boolean;

    /**
     * Provides an array of all changed fields since model was created / loaded from storage
     * @return {Array}
     */
    changedFields(): string[];

    /**
     * Creates an error object for the model if any validations have failed, returns null otherwise
     * @return {Error}
     */
    errorObject(): IExtendedError | null;

    /**
     * Tells us whether or not the model has errors (failed validations)
     * @return {boolean}
     */
    hasErrors(): boolean;

    /**
     * Gives us an error object with each errored field as a key, and each value
     * being an array of failure messages from the validators
     * @return {Object}
     */
    getErrors(): IErrorsObject;

    /**
     * Reads new data into the model.
     * @param {Object} data
     * Data to inject into the model
     * @return {this}
     */
    read(data: IAnyObject): this;

    /**
     * Converts a value to its intended format based on its field. Returns null if field not found.
     * @param {string} field
     * The field to use for conversion data
     * @param {any} value
     * The value to convert
     */
    convert(field: string, value: any): any;

    /**
     * Grabs the path of the given relationship from the RelationshipGraph
     * @param {string} name
     * the name of the relationship
     */
    relationship(name: string): RelationshipPath;

    /**
     * Sets specified field data for the model. Logs and validates the change.
     * @param {string} field
     * Field to set
     * @param {any} value
     * Value for the field
     */
    set(field: string, value: any): any;

    /**
     * Set a joined object (Model or ModelArray)
     * @param {string} field
     * The field (name of the join relationship)
     * @param {Model | ModelArray} value
     * The joined model or array of models
     */
    setJoined(
      field: string,
      value: ModelArray<this> | Model
    ): Model | ModelArray<this>;

    /**
     * Calculate field from calculations (assumes it exists)
     * @param {string} field
     * Name of the calculated field
     */
    calculate(field: string): void;

    /**
     * Retrieve field data for the model.
     * @param {string} field
     * Field for which you'd like to retrieve data.
     */
    get(field: string, ignoreFormat?: boolean): any;

    /**
     * Retrieves joined Model or ModelArray
     * @param {String} joinName
     * the name of the join (list of connectors separated by __)
     */
    joined(joinName: string): Model | ModelArray<this>;

    /**
     * Retrieve associated models joined this model from the database.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} model_1
     * , ... {Nodal.Model|Nodal.ModelArray} model_n)}
     * Pass in a function with named parameters corresponding the relationships you'd like to retrieve.
     * The first parameter is always an error callback.
     */
    include(
      callback: (err: Error, ...models: (Model | ModelArray<this>)[]) => void
    ): void;

    /**
     * Creates a plain object from the Model, with properties matching an optional interface
     * @param {Array} arrInterface
     * Interface to use for object creation
     */
    toObject(arrInterface?: any[]): any;

    /**
     * Get the table name for the model.
     * @return {string}
     */
    tableName(): string;

    /**
     * Determine if the model has a specified field.
     * @param {string} field
     * @return {boolean}
     */
    hasField(field: string): boolean;

    /**
     * Retrieve the schema field data for the specified field
     * @param {string} field
     * @return {Object}
     */
    getFieldData(field: string): any;

    /**
     * Retrieve the schema data type for the specified field
     * @param {string} field
     * @return {string}
     */
    getDataTypeOf(
      field: string
    ): {
      convert: Function
    };

    /**
     * Determine whether or not this field is an Array (PostgreSQL supports this)
     * @param {string} field
     * @return {boolean}
     */
    isFieldArray(field: string): boolean;

    /**
     * Determine whether or not this field is a primary key in our schema
     * @param {string} field
     * @return {boolean}
     */
    isFieldPrimaryKey(field: string): boolean;

    /**
     * Retrieve the defaultValue for this field from our schema
     * @param {string} field
     * @return {any}
     */
    fieldDefaultValue(field: string): any;

    /**
     * Retrieve an array of fields for our model
     * @return {Array}
     */
    fieldList(): string[];

    /**
     * Retrieve our field schema definitions
     * @return {Array}
     */
    fieldDefinitions(): IColumn[];

    /**
     * Set an error for a specified field (supports multiple errors)
     * @param {string} key
     * The specified field for which to create the error (or '*' for generic)
     * @param {string} message
     * The error message
     * @return {boolean}
     */
    setError(key: string, message: string): boolean;

    /**
     * Clears all errors for a specified field
     * @param {string} key
     * The specified field for which to create the error (or '*' for generic)
     * @return {boolean}
     */
    clearError(key: string): boolean;
    __generateSaveQuery__(): {
      sql: any,
      params: any
    };

    /**
     * Runs all verifications before saving
     * @param {function} callback
     * Method to execute upon completion. Returns true if OK, false if failed
     * @private
     */
    __verify__(callback: Function): any;

    /**
     * Destroys model and cascades all deletes.
     * @param {function} callback
     * method to run upon completion
     */
    destroyCascade(callback: Function): void;

    /**
     * Logic to execute before a model gets destroyed. Intended to be overwritten when inherited.
     * @param {Function} callback
     * Invoke with first argument as an error if failure.
     */
    beforeDestroy(callback: Function): void;

    /**
     * Logic to execute after a model is destroyed. Intended to be overwritten when inherited.
     * @param {Function} callback
     * Invoke with first argument as an error if failure.
     */
    afterDestroy(callback: Function): void;

    /**
     * Destroys model reference in database.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} model
     * )} callback
     * Method to execute upon completion, returns error if failed
     */
    destroy(callback: Function): void;

    /**
     * Logic to execute before a model saves. Intended to be overwritten when inherited.
     * @param {Function} callback
     * Invoke with first argument as an error if failure.
     */
    beforeSave(callback: Function): void;

    /**
     * Logic to execute after a model saves. Intended to be overwritten when inherited.
     * @param {Function} callback
     * Invoke with first argument as an error if failure.
     */
    afterSave(callback: Function): void;

    /**
     * Save a model (execute beforeSave and afterSave)
     * @param {Function} callback
     * Callback to execute upon completion
     */
    save(callback: Function): void;

    /**
     * Runs an update query for this specific model instance
     * @param {Object} fields
     * Key-value pairs of fields to update
     * @param {Function} callback
     * Callback to execute upon completion
     */
    update(fields: IAnyObject, callback: Function): void;
    static find(
      id: number,
      callback: (err: IExtendedError, model?: Model) => void
    ): void;
    static findBy(
      field: string,
      value: any,
      callback: (err: IExtendedError, model?: Model) => void
    ): void;

    /**
     * Creates a new model instance using the provided data.
     * @param {{[key: string]: any}} data
     * The data to load into the object.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} model
     * )} callback The callback to execute upon completion
     */
    static create(
      data: IAnyObject,
      callback: (err: IExtendedError, model?: Model) => void
    ): void;

    /**
     * Finds a model with a provided field, value pair. Returns the first found.
     * @param {string} field
     * Name of the field
     * @param {{[key: string]: any}} data
     * Key-value pairs of Model creation data. Will use appropriate value to query for based on "field" parametere.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} model
     * )} callback The callback to execute upon completion
     */
    static findOrCreateBy(
      field: string,
      data: IAnyObject,
      callback: (err: IExtendedError | null, model?: Model) => void
    ): void;

    /**
     * Finds and updates a model with a specified id. Return a notFound error if model does not exist.
     * @param {number} id
     * The id of the model you're looking for
     * @param {{[key: string]: any}} data
     * The data to load into the object.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} model
     * )} callback The callback to execute upon completion
     */
    static update(
      id: number,
      data: IAnyObject,
      callback: (err: IExtendedError, model?: Model) => void
    ): void;

    /**
     * Finds and destroys a model with a specified id. Return a notFound error if model does not exist.
     * @param {number} id
     * The id of the model you're looking for
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} model
     * )} callback The callback to execute upon completion
     */
    static destroy(
      id: number,
      callback: (err: IExtendedError, model?: Model) => void
    ): void;

    /**
     * Creates a new Composer (ORM) instance to begin a new query.
     * @param {optional}
     * } db Deprecated - provide a database to query from. Set the model's db in its constructor file, instead.
     * @return {Nodal.Composer}
     */
    static query<T: Model>(db?: Database): Composer<T>;

    /**
     * Get the model's table name
     * @return {string}
     */
    static table(): string;

    /**
     * Get the model's column data
     * @return {Array}
     */
    static columns(): IColumn[];

    /**
     * Get the model's column names (fields)
     * @return {Array}
     */
    static columnNames(): string[];

    /**
     * Get the model's column lookup data
     * @return {Object}
     */
    static columnLookup(): IAnyObject;

    /**
     * Check if the model has a column name in its schema
     * @param {string} columnName
     */
    static hasColumn(columnName: string): boolean;

    /**
     * Return the column schema data for a given name
     * @param {string} columnName
     */
    static column(columnName: string): any;

    /**
     * Set the database to be used for this model
     * @param {Nodal.Database} db
     */
    static setDatabase(db: Database): void;

    /**
     * Set the schema to be used for this model
     * @param {Object} schema
     */
    static setSchema(schema: {
      table: string,
      columns: IColumn[]
    }): void;

    /**
     * FIXME
     */
    static relationships(): RelationshipNode;

    /**
     * `
     *    * FIXME
     *    *
     */
    static relationship(name: string): RelationshipPath;

    /**
     * Sets a joins relationship for the Model. Sets joinedBy relationship for parent.
     * @param {class}
     * } Model The Model class which your current model belongs to
     * @param {Object} options
     * "name": The string name of the parent in the relationship (default to camelCase of Model name)
     * "via": Which field in current model represents this relationship, defaults to `${name}_id`
     * "as": What to display the name of the child as when joined to the parent (default to camelCase of child name)
     * "multiple": Whether the child exists in multiples for the parent (defaults to false)
     */
    static joinsTo(
      modelClass: typeof Model,
      options: {
        name?: string,
        via?: string,
        as?: string,
        multiple?: boolean
      }
    ): RelationshipEdge | null;

    /**
     * Create a validator. These run synchronously and check every time a field is set / cleared.
     * @param {string} field
     * The field you'd like to validate
     * @param {string} message
     * The error message shown if a validation fails.
     * @param {"NO PRINT IMPLEMENTED: JSDocFunctionType"} fnAction
     * the validation to run - first parameter is the value you're testing.
     */
    static validates(
      field: string,
      message: string,
      fnAction: (value: any) => void
    ): void;

    /**
     * Creates a verifier. These run asynchronously, support multiple fields, and check every time you try to save a Model.
     * @param {string} message
     * The error message shown if a validation fails.
     * @param {function} fnAction
     * The asynchronous verification method. The last argument passed is always a callback,
     * and field names are determined by the  argument names.
     */
    static verifies(message: string, fnAction: Function): void;

    /**
     * Create a calculated field (in JavaScript). Must be synchronous.
     * @param {string} calcField
     * The name of the calculated field
     * @param {function} fnCalculate
     * The synchronous method to perform a calculation for.
     * Pass the names of the (non-computed) fields you'd like to use as parameters.
     */
    static calculates(calcField: string, fnCompute: Function): void;

    /**
     * Hides fields from being output in .toObject() (i.e. API responses), even if asked for
     * @param {String} field
     */
    static hides(field: string): boolean;

    /**
     * Tells us if a field is hidden (i.e. from API queries)
     * @param {String} field
     */
    static isHidden(field: string): any;
    __load__(data: any, fromStorage?: boolean, fromSeed?: boolean): this;

    /**
     * Sets specified field data for the model, assuming data is safe and does not log changes
     * @param {string} field
     * Field to set
     * @param {any} value
     * Value for the field
     */
    __safeSet__(field: string, value: any): void;
  }
  declare export class ModelArray<T> mixins ItemArray<T> {
    Model: typeof Model;
    constructor(modelConstructor: typeof Model): this;
    static from<T>(arr: Model[]): ModelArray<T>;
    toObject(arrInterface?: string[]): any;
    has(model: Model): boolean;
    readAll(data: Object): boolean;
    setAll(field: string, value: string): boolean;
    destroyAll(callback: Function): void;
    destroyCascade(callback: Function): void;
    saveAll(callback: Function): Function | void;
  }
  declare export interface IModelData {
    [modelName: string]: any[];
  }

  /**
   * Factory for creating models
   * @class
   */
  declare export class ModelFactory {
    /**
     * Create the ModelFactory with a provided Model to use as a reference.
     * @param {Nodal.Model} modelConstructor
     * Must pass the constructor for the type of ModelFactory you wish to create.
     */
    constructor(modelConstructor: typeof Model): this;

    /**
     * Loads all model constructors in your ./app/models directory into an array
     * @return {Array}
     * Array of model Constructors
     */
    static loadModels(): any[];

    /**
     * Creates new factories from a supplied array of Models, loading in data keyed by Model name
     * @param {Array} Models
     * Array of model constructors you wish to reference
     * @param {Object} objModelData
     * Keys are model names, values are arrays of model data you wish to create
     * @param {Function} callback
     * What to execute upon completion
     */
    static createFromModels(
      Models: typeof Model[],
      objModelData: IModelData,
      callback: Function
    ): void;

    /**
     * Populates a large amount of model data from an Object.
     * @param {Array} Models
     * Array of Model constructors
     */
    static populate(objModelData: IModelData, callback: Function): void;

    /**
     * Creates models from an array of Objects containing the model data
     * @param {Array} arrModelData
     * Array of objects to create model data from
     */
    create(arrModelData: IModelData[], callback: Function): void;
  }
  declare export interface IOptions {
    name: string;
    multiple: boolean;
    as: string;
    via: string;
  }
  declare export class RelationshipPath {
    path: (RelationshipEdge | RelationshipNode)[];
    constructor(path: (RelationshipEdge | RelationshipNode)[]): this;
    toString(): string;
    joinName(reverse?: boolean): string;
    add(node: RelationshipNode, edge: RelationshipEdge): RelationshipPath;
    getModel(): typeof Model;
    multiple(): boolean;
    immediateMultiple(): boolean;
    joins(alias?: string | null, firstTable?: string): IJoin[];
  }
  declare export class RelationshipNode {
    Graph: RelationshipGraph;
    Model: typeof Model;
    edges: RelationshipEdge[];
    constructor(Graph: RelationshipGraph, mModel: typeof Model): this;
    toString(): string;
    joinsTo(mModel: typeof Model, options: IOptions): RelationshipEdge | null;
    childEdges(): RelationshipEdge[];
    cascade(): RelationshipPath[];
    findExplicit(pathname: string): RelationshipPath | null;
    find(name: string): RelationshipPath | null;
  }
  declare export class RelationshipEdge {
    id: number;
    parent: RelationshipNode;
    child: RelationshipNode;
    options: IOptions;
    constructor(
      parent: RelationshipNode,
      child: RelationshipNode,
      options: IOptions
    ): this;
    toString(): string;
    hasChild(child: RelationshipNode): boolean;
    hasParent(parent: RelationshipNode): boolean;
    opposite(node: RelationshipNode): RelationshipNode | null;
  }
  declare export class RelationshipGraph {
    nodes: RelationshipNode[];
    edges: RelationshipEdge[];
    constructor(): this;
    of(mModel: typeof Model): RelationshipNode;
  }
  declare export class Router mixins fxn.Router {}
  declare export class Scheduler mixins fxn.Scheduler {}

  /**
   * Random types used across multiple classes.
   */
  declare export interface IAnyObject {
    [prop: string]: any;
  }
  declare export type IExtendedError = {
    notFound?: boolean,
    details?: Object
  } & Error;

  declare export interface IColumn {
    name: string;
    type: DataType;
    properties: IColumnProperties;
  }
  declare export interface ISchema {
    table: string;
    columns: IColumn[];
  }
  declare export interface IJoin {
    prevColumn?: string;
    joinColumn?: string;
    joinTable: string;
    prevTable: string;
    name?: string;
    key?: string;
    multiple?: boolean;
    columns?: string[];
    columnsObject?: Object;
    cachedModel?: Model;
    joinAlias?: string;
    multiFilter?: any;
    prevAlias?: string;
    orderBy?: any;
    offset?: number;
    count?: number;
  }
  declare export type Query = any;
  declare export interface IColumnProperties {
    length?: number | null;
    nullable?: boolean;
    primary_key?: 0 | 1 | boolean;
    auto_increment?: boolean;
    unique?: 0 | 1 | boolean;
    array?: boolean;
    defaultValue?: any;
  }
  declare export interface IArrInterface {
    [item: string]: [string];
  }
  declare export type InterfaceType = IArrInterface | string;
  declare export type DataType =
    | "serial"
    | "int"
    | "currency"
    | "float"
    | "string"
    | "text"
    | "datetime"
    | "boolean"
    | "json";
  declare export var my: {
    Config?: any,
    Schema?: any,
    bootstrapper?: any
  };
  declare export var require: NodeRequire;
}
