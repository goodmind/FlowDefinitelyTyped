declare module '@google-cloud/datastore' {
        declare module.exports: typeof Datastore

	import type {
          DatastoreKey,KEY_SYMBOL,DatastoreInt,DatastoreDouble,DatastoreGeopoint,DatastoreKeyPath,DatastoreKeyOptions,DatastoreCoords,OneOrMany
        } from '@google-cloud/datastore/entity';

	import type {
          DatastoreRequest_,CommitCallback,CommitResult
        } from '@google-cloud/datastore/request';

	import type {
          DatastoreQuery,MoreResultsAfterCursor,MoreResultsAfterLimit,NoMoreResults
        } from '@google-cloud/datastore/query';

	import type {
          DatastoreTransaction
        } from '@google-cloud/datastore/transaction';

	declare class Datastore mixins DatastoreRequest_ {
static KEY: "NO PRINT IMPLEMENTED: TypeOperator UniqueKeyword";
static MORE_RESULTS_AFTER_CURSOR: MoreResultsAfterCursor;
static MORE_RESULTS_AFTER_LIMIT: MoreResultsAfterLimit;
static NO_MORE_RESULTS: NoMoreResults;
static Query: typeof DatastoreQuery;
static DatastoreRequest: typeof DatastoreRequest_;
static Transaction: typeof DatastoreTransaction;
constructor(options?: InitOptions): this;
KEY: typeof undefined;
MORE_RESULTS_AFTER_CURSOR: MoreResultsAfterCursor;
MORE_RESULTS_AFTER_LIMIT: MoreResultsAfterLimit;
NO_MORE_RESULTS: NoMoreResults;
createQuery(namespace: string, kind: string): DatastoreQuery;
createQuery(kind: string): DatastoreQuery;
save(entities: OneOrMany<{[key: string]: any}>, callback: CommitCallback): void;
save(entities: OneOrMany<{[key: string]: any}>): Promise<CommitResult>;
delete(
keyOrKeys: DatastoreKey | $ReadOnlyArray<DatastoreKey>,
callback: CommitCallback): void;
delete(keyOrKeys: DatastoreKey | $ReadOnlyArray<DatastoreKey>): Promise<CommitResult>;
transaction(): DatastoreTransaction;
int(value: string | number): DatastoreInt;
isInt(value: any): boolean;
double(value: string | number): DatastoreDouble;
isDouble(value: any): boolean;
geoPoint(coordinates: DatastoreCoords): DatastoreGeopoint;
isGeoPoint(value: any): boolean;
key(pathOrOptions: DatastoreKeyPath | DatastoreKeyOptions): DatastoreKey;
isKey(value: any): boolean;
determineBaseUrl_(customApiEndpoint?: string): void
}
	declare interface InitOptions {
apiEndpoint?: string,
namespace?: string,
projectId?: string,
keyFilename?: string,
credentials?: {[key: string]: any}
} 
    }
declare module '@google-cloud/datastore/entity' {
        declare interface DatastoreInt {
value: string
} 
	declare interface DatastoreDouble {
value: string
} 
	declare interface DatastoreCoords {
latitude: number,
longitude: number
} 
	declare interface DatastoreGeopoint {
value: DatastoreCoords
} 
	declare type PathElement = string | number | DatastoreInt;
	
/**
 * DatastoreKeyPath is structured as [kind, identifier, kind, identifier, ...]
 * `kind` must be a string, `identifier` is a PathElement
 */
declare type DatastoreKeyPath = PathElement[];
	declare interface DatastoreKeyOptions {
namespace?: string,
path: DatastoreKeyPath
} 
	declare interface DatastoreKey {
kind: string,
id?: string,
name?: string,
+path: DatastoreKeyPath,
parent?: DatastoreKey
} 
	declare type KEY_SYMBOL = typeof undefined;
	declare interface DatastorePayload<T> {
key: DatastoreKey,
data: T | {[key: string]: any},
excludeFromIndexes?: string[]
} 
	
/**
 * NB: TS does not support computed symbol keys (yet: https://github.com/Microsoft/TypeScript/pull/15473)
 * If using a raw T object, it MUST have a {@link Datastore_#KEY} symbol property of type {@link DatastoreKey}.
 */
declare type ObjOrPayload<T> = T | DatastorePayload<T>;
	declare type OneOrMany<T> = ObjOrPayload<T> | Array<ObjOrPayload<T>>;
    }
declare module '@google-cloud/datastore/query' {
        import type {
          DatastoreKey
        } from '@google-cloud/datastore/entity';

	declare type MoreResultsAfterCursor = "MORE_RESULTS_AFTER_CURSOR";
	declare type MoreResultsAfterLimit = "MORE_RESULTS_AFTER_LIMIT";
	declare type NoMoreResults = "NO_MORE_RESULTS";
	declare class Query  {
constructor(scope: string, kinds: string, namespace: string): this;
filter(property: string, operator: QueryFilterOperator, value: any): this;
filter(property: string, value: any): this;
hasAncestor(key: DatastoreKey): this;
order(property: string, options?: OrderOptions): this;
groupBy(properties: string | $ReadOnlyArray<string>): this;
select(properties: string | $ReadOnlyArray<string>): this;
start(cursorToken: string): this;
end(cursorToken: string): this;
limit(n: number): this;
offset(n: number): this;
run(callback: QueryCallback): void;
run(options: QueryOptions, callback: QueryCallback): void;
run(options?: QueryOptions): Promise<QueryResult>;
runStream(): NodeJS.ReadableStream
}
	declare type QueryFilterOperator = "<"
| "<="
| "="
| ">="
| ">";
	declare interface OrderOptions {
descending: boolean
} 
	declare interface QueryOptions {
consistency?: "strong" | "eventual",
maxApiCalls?: number
} 
	declare interface QueryInfo {
endCursor?: string,
+moreResults: MoreResultsAfterCursor | MoreResultsAfterLimit | NoMoreResults
} 
	declare type QueryCallback = (err: Error, entities: {[key: string]: any}[], info: QueryInfo) => void;
	declare type QueryResult = [{[key: string]: any}[], QueryInfo];
    }
declare module '@google-cloud/datastore/request' {
        import type {
          DatastoreKey,OneOrMany
        } from '@google-cloud/datastore/entity';

	import type {
          Query,QueryCallback,QueryOptions,QueryResult
        } from '@google-cloud/datastore/query';

	
/**
 * Creates requests to the Datastore endpoint.
 * Designed to be inherited by {@link Datastore} & {@link DatastoreTransaction}
 */
declare class DatastoreRequest  {
allocateIds(incompleteKey: DatastoreKey, n: number, callback: AllocateIdsCallback): void;
allocateIds(incompleteKey: DatastoreKey, n: number): Promise<AllocateIdsResult>;
createReadStream(
keys: DatastoreKey | $ReadOnlyArray<DatastoreKey>,
options: QueryOptions): NodeJS.ReadableStream;
delete(
keyOrKeys: DatastoreKey | $ReadOnlyArray<DatastoreKey>,
callback: CommitCallback): void;
delete(
keyOrKeys: DatastoreKey | $ReadOnlyArray<DatastoreKey>): Promise<CommitResult> | void;
get(
key: DatastoreKey,
options: QueryOptions,
callback: GetCallback<{[key: string]: any}>): void;
get(
keys: $ReadOnlyArray<DatastoreKey>,
options: QueryOptions,
callback: GetCallback<{[key: string]: any}[]>): void;
get(key: DatastoreKey, callback: GetCallback<{[key: string]: any}>): void;
get(
keys: $ReadOnlyArray<DatastoreKey>,
callback: GetCallback<{[key: string]: any}[]>): void;
get(
key: DatastoreKey,
options?: QueryOptions): Promise<[{[key: string]: any} | void]>;
get(
keys: $ReadOnlyArray<DatastoreKey>,
options?: QueryOptions): Promise<[{[key: string]: any}[]]>;
runQuery(query: Query, options: QueryOptions, callback: QueryCallback): void;
runQuery(query: Query, callback: QueryCallback): void;
runQuery(query: Query, options?: QueryOptions): Promise<QueryResult>;
runQueryStream(query: Query, options?: QueryOptions): NodeJS.ReadableStream;
save(entities: OneOrMany<{[key: string]: any}>, callback: CommitCallback): void;
save(entities: OneOrMany<{[key: string]: any}>): Promise<CommitResult> | void;
insert(entities: OneOrMany<{[key: string]: any}>, callback: CommitCallback): void;
insert(entities: OneOrMany<{[key: string]: any}>): Promise<CommitResult>;
update(entities: OneOrMany<{[key: string]: any}>, callback: CommitCallback): void;
update(entities: OneOrMany<{[key: string]: any}>): Promise<CommitResult>;
upsert(entities: OneOrMany<{[key: string]: any}>, callback: CommitCallback): void;
upsert(entities: OneOrMany<{[key: string]: any}>): Promise<CommitResult>
}
	declare interface MutationResult {
key: DatastoreKey,
conflictDetected: boolean,
version: number
} 
	declare interface CommitResponse {
mutationResults: MutationResult[],
indexUpdates: number
} 
	declare type CommitCallback = (err: Error, result: CommitResponse) => void;
	declare type CommitResult = [CommitResponse];
	declare type GetCallback<T> = (err: Error, entity: T) => void;
	declare type AllocateIdsCallback = (err: Error, keys: DatastoreKey[]) => void;
	declare type AllocateIdsResult = [DatastoreKey[]];
    }
declare module '@google-cloud/datastore/transaction' {
        import type {
          DatastoreKey,OneOrMany
        } from '@google-cloud/datastore/entity';

	import type {
          Query
        } from '@google-cloud/datastore/query';

	import type {
          DatastoreRequest,CommitCallback,CommitResult
        } from '@google-cloud/datastore/request';

	declare class DatastoreTransaction mixins DatastoreRequest {
constructor(datastore: Datastore_): this;
createQuery(namespace: string, kind: string): Query;
createQuery(kind: string): Query;
save(entities: OneOrMany<{[key: string]: any}>): void;
delete(keyOrKeys: DatastoreKey | $ReadOnlyArray<DatastoreKey>): void;
commit(): Promise<CommitResult>;
commit(callback: CommitCallback): void;
rollback(): Promise<RollbackResult>;
rollback(callback: RollbackCallback): void;
run(callback: TransactionCallback): void;
run(): Promise<TransactionResult>
}
	declare interface BeginTransactionResponse {
transaction: string
} 
	declare type RollbackCallback = (err: Error, rollbackResponse: {}) => void;
	declare type RollbackResult = [{}];
	declare type TransactionCallback = (
err: Error,
tx: DatastoreTransaction,
beginTxResponse: BeginTransactionResponse) => void;
	declare type TransactionResult = [DatastoreTransaction, BeginTransactionResponse];
    }
