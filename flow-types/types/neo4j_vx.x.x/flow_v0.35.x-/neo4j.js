declare module 'neo4j' {
        import type {
          Request
        } from 'request';

	declare type ResultCallback = (error: any, result: any) => void;
	declare type DoneCallback = (error: any) => void;
	
/**
 * Authentication information.
 * @interface
 */
declare export interface Authentication {
password: string,
username: string
} 
	
/**
 * Password options.
 * @interface
 */
declare export interface ChangePasswordOptions {
password: string
} 
	
/**
 * Constraint options.
 * @interface
 */
declare export interface ConstraintOptions {
label?: any,
property?: any
} 
	
/**
 * Cypher request options.
 * @interface
 */
declare export interface CypherOptions {
commit?: {},
headers?: {},
lean?: {},
params?: {},
query?: {}
} 
	
/**
 * Database options.
 * @interface
 */
declare export interface GraphDatabaseOptions {

/**
 * HTTP agent.
 * @type {any}
 */
agent?: any,

/**
 * Authentication information.
 * @type {string | Authentication}
 */
auth: string | Authentication,

/**
 * HTTP headers.
 * @type {Object}
 */
headers?: {},

/**
 * Proxy address.
 * @type {string}
 */
proxy?: string,

/**
 * URL connection.
 * @type {string}
 */
url: string
} 
	
/**
 * HTTP options.
 * @interface
 */
declare export interface HttpOptions {
headers: {},
method: string,
path: string,
body: any,
raw: any
} 
	
/**
 * Index options.
 * @interface
 */
declare export interface IndexOptions {
label?: any,
property?: any
} 
	
/**
 * Transaction.
 * @interface
 */
declare export interface Transaction {
expiresAt: Date,
expiresIn: Date | number,
state: string,
commit(callback: DoneCallback): void,
cypher(options: CypherOptions, callback: ResultCallback): Request,
renew(callback: DoneCallback): void,
rollback(callback: DoneCallback): void
} 
	
/**
 * Database.
 * @class
 */
declare export class GraphDatabase  {

/**
 * Constructor.
 * @constructor
 * @param {string} url A URL connection.
 */
constructor(url: string): this;

/**
 * Constructor.
 * @constructor
 * @param {GraphDatabaseOptions} options Connection options.
 */
constructor(options: GraphDatabaseOptions): this;

/**
 * Agent.
 * @type {any}
 */
agent: any;

/**
 * Credentials.
 * @type {Authentication}
 */
auth: Authentication;

/**
 * Headers.
 * @type {Object}
 */
headers: {};

/**
 * Proxy.
 * @type {any}
 */
proxy: any;

/**
 * URL connection.
 * @type {string}
 */
url: string;

/**
 * Makes multiple queries, across multiple network requests, all within a single transaction.
 * @return {Transaction} The transaction.
 */
beginTransaction(): Transaction;

/**
 * Changes password.
 * @param {ChangePasswordOptions} options Options.
 * @param {DoneCallback} callback A callback.
 */
changePassword(options: ChangePasswordOptions, callback: DoneCallback): void;

/**
 * Checks if the password must be changed.
 * @param {Function} callback A callback.
 */
checkPasswordChangeNeeded(callback: (error: any, changed: boolean) => void): void;

/**
 * Creates a constraint.
 * @param {ConstraintOptions} options Options.
 * @param {ResultCallback} callback A callback.
 */
createConstraint(options: ConstraintOptions, callback: ResultCallback): void;

/**
 * Makes simple, parametrized Cypher queries.
 * @param {CypherOptions} options Options.
 * @param {ResultCallback} callback A callback.
 */
cypher(options: CypherOptions, callback: ResultCallback): Request;

/**
 * Drops a constraint.
 * @param {ConstraintOptions} options Options.
 * @param {DoneCallback} callback A callback.
 */
dropConstraint(options: ConstraintOptions, callback: DoneCallback): void;

/**
 * Drop an index.
 * @param {IndexOptions} options Options.
 * @param {DoneCallback} callback A callback.
 */
dropIndex(options: IndexOptions, callback: DoneCallback): void;

/**
 * Gets constraints.
 * @param {ConstraintOptions} options Options or callback.
 * @param {ResultCallback} callback A callback.
 */
getConstraints(options: ConstraintOptions, callback?: ResultCallback): void;

/**
 * Gets indexes.
 * @param {ResultCallback} callback A callback.
 */
getIndexes(callback?: ResultCallback): void;

/**
 * Gets indexes.
 * @param {IndexOptions} options Options.
 * @param {ResultCallback} callback A callback.
 */
getIndexes(options: IndexOptions, callback: ResultCallback): void;

/**
 * Get labels.
 * @param {ResultCallback} callback A callback.
 */
getLabels(callback: ResultCallback): void;

/**
 * Gets property keys.
 * @param {ResultCallback} callback A callback.
 */
getPropertyKeys(callback: ResultCallback): void;

/**
 * Gets relationship types.
 * @param {ResultCallback} callback A callback.
 */
getRelationshipTypes(callback: ResultCallback): void;

/**
 * Determines if a constraint exists.
 * @param {ConstraintOptions} options Options.
 * @param {Function} callback A callback.
 */
hasConstraint(
options: ConstraintOptions,
callback: (error: any, exists: boolean) => void): void;

/**
 * Determines if an index exists.
 * @param {IndexOptions} options Options.
 * @param {Function} callback A callback.
 */
hasIndex(options: IndexOptions, callback: (error: any, exists: boolean) => void): void;

/**
 * Makes arbitrary HTTP request to the REST API.
 * @param {HttpOptions} options Options.
 * @param {ResultCallback} callback A callback.
 * @return {Request} The HTTP request.
 */
http(options: HttpOptions, callback: ResultCallback): Request
}
    }
