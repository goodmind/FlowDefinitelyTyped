declare module 'camo' {
        
/**
 * Connect function
 * @export
 * @param {string} uri Connection URI
 * @returns {Promise<any>}
 */
declare export function connect(uri: string): Promise<any>

	declare type TypeOrArrayOfType<Type> = Type | Type[];
	
/**
 * Supported type constructors for document properties
 */
declare export type SchemaTypeConstructor = TypeOrArrayOfType<StringConstructor>
| TypeOrArrayOfType<NumberConstructor>
| TypeOrArrayOfType<BooleanConstructor>
| TypeOrArrayOfType<ArrayBufferConstructor>
| TypeOrArrayOfType<DateConstructor>
| TypeOrArrayOfType<ObjectConstructor>
| TypeOrArrayOfType<ArrayConstructor>;
	
/**
 * Supported types for document properties
 */
declare export type SchemaType = TypeOrArrayOfType<string
| number
| boolean
| Date
| Object>;
	
/**
 * Document property with options
 */
declare export interface SchemaTypeOptions<Type> {

/**
 * Type of data
 */
type: SchemaTypeConstructor,

/**
 * Default value
 */
default?: Type,

/**
 * Min value (only with Number)
 */
min?: number,

/**
 * Max value (only with Number)
 */
max?: number,

/**
 * Posible options
 */
choices?: Type[],

/**
 * RegEx to match value
 */
match?: RegExp,

/**
 * Validation function.
 * @param {Type} value Value taken.
 * @returns {boolean} true (validation ok) or false (validation wrong).
 */
validate(value: Type): boolean,

/**
 * Unique value (like ids)
 */
unique?: boolean,

/**
 * Required field
 */
required?: boolean
} 
	
/**
 * Document property type or options
 */
declare export type SchemaTypeExtended = SchemaTypeConstructor | SchemaTypeOptions<SchemaType>;
	
/**
 * Schema passed to Document.create()
 */
declare export interface DocumentSchema {

/**
 * Index signature
 */
[property: string]: SchemaType,

/**
 * Document id
 */
_id?: string
} 
	
/**
 * findOneAndUpdate method options.
 * @interface findOneAndUpdateOptions
 */
declare export interface FindOneAndUpdateOptions {

/**
 * Return a new document if one is not found with the given query.
 * @type {boolean}
 */
upsert?: boolean
} 
	
/**
 * findOne method options.
 * @interface FindOneOptions
 */
declare export interface FindOneOptions {

/**
 * Find all or no references.
 * Pass an array of field names to only populate the specified references.
 * @type {(boolean | string[])}
 */
populate?: boolean | string[]
} 
	
/**
 * find method options.
 * @interface FindOptions
 */
declare export interface FindOptions {

/**
 * Find all or no references.
 * Pass an array of field names to only populate the specified references.
 * @type {(boolean | string[])}
 */
populate?: boolean | string[],

/**
 * Sort the documents by the given field(s).
 * @type {TypeOrArrayOfType<string>}
 */
sort?: TypeOrArrayOfType<string>,

/**
 * Limits the number of documents returned.
 * @type {number}
 */
limit?: number,

/**
 * Skips the given number of documents and returns the rest.
 * @type {number}
 */
skip?: number
} 
	
/**
 * Camo document
 */
declare export class Document<Schema: DocumentSchema>  {

/**
 * Index signature
 */
[property: string]: SchemaTypeExtended | string | Document<any> | Function;

/**
 * Static method to define the collection name.
 * @protected
 * @static
 * @returns {string} The collection name.
 */
static collectionName(): string;

/**
 * Sets the schema (to be used on the constructor).
 * @protected
 * @template
 * @param {Schema} schema
 */
schema<Schema>(schema: Schema): void;

/**
 * Creates a camo document instance.
 * @static
 * @template
 * @param {StaticSchema} schema Base schema to create a document.
 * @returns {DocumentInstance<StaticSchema>} A camo document instance.
 */
static create<StaticSchema: DocumentSchema>(schema: StaticSchema): Document<StaticSchema>;

/**
 * Saves the document instance to the database.
 * @returns {Promise<Schema>}
 */
save(): Promise<Schema>;

/**
 * Return the first document found, even if multiple documents match the query.
 * @static
 * @template
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Find query.
 * @param {FindOneOptions} options findOne method options.
 * @returns {Promise<StaticSchema>}
 */
static findOne<StaticSchema: DocumentSchema>(
query: any,
options?: FindOneOptions): Promise<StaticSchema>;

/**
 * Return all documents matching the query.
 * @static
 * @template
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Find query.
 * @param {FindOptions} options
 * @returns {Promise<StaticSchema>}
 */
static find<StaticSchema: DocumentSchema>(
query: any,
options?: FindOptions): Promise<StaticSchema[]>;

/**
 * Find and update (or insert) a document in one atomic operation (atomic for MongoDB only).
 * @static
 * @template
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Find query.
 * @param {Schema} values Values to set.
 * @param {FindOneAndUpdateOptions} options findOneAndUpdate method options.
 * @returns {Promise<StaticSchema>}
 */
static findOneAndUpdate<StaticSchema: DocumentSchema>(
query: any,
values: StaticSchema,
options?: FindOneAndUpdateOptions): Promise<StaticSchema>;

/**
 * Removes documents from the database.
 * Should only be used on an instantiated document with a valid id.
 * @returns {Promise<number>} Number of deleted documents.
 */
delete(): Promise<number>;

/**
 * Removes the first document found, even if multiple documents match the query.
 * @static
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Delete query.
 * @returns {Promise<number>} Number of deleted documents.
 */
static deleteOne(query: any): Promise<number>;

/**
 * Removes all documents matching the query.
 * @static
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Delete query.
 * @returns {Promise<number>} Number of deleted documents.
 */
static deleteMany(query: any): Promise<number>;

/**
 * Find the first document and delete it.
 * @static
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Delete query.
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} options Database Options for findOneAndDelete method.
 * @returns {Promise<number>} Number of deleted documents.
 */
static findOneAndDelete(query: any, options?: any): Promise<number>;

/**
 * Number of matching documents without retrieving all the data.
 * @static
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} query Count query.
 * @returns {Promise<number>}
 */
static count(query: any): Promise<number>;

/**
 * pre-validate hook.
 * @protected
 * @returns {Promise<any>}
 */
preValidate(): Promise<any>;

/**
 * post-validate hook.
 * @protected
 * @returns {Promise<any>}
 */
postValidate(): Promise<any>;

/**
 * pre-save hook.
 * @protected
 * @returns {Promise<any>}
 */
preSave(): Promise<any>;

/**
 * post-save hook.
 * @protected
 * @returns {Promise<any>}
 */
postSave(): Promise<any>;

/**
 * pre-delete hook.
 * @protected
 * @returns {Promise<any>}
 */
preDelete(): Promise<any>;

/**
 * post-delete hook.
 * @protected
 * @returns {Promise<any>}
 */
postDelete(): Promise<any>;

/**
 * Serialized document to just the data, which includes nested and referenced data.
 * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
 */
toJSON(): any
}
    }
