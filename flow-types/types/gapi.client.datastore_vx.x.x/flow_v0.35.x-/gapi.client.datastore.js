declare module 'gapi.client.datastore' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        projects: typeof client$projects,
      }

/**
 * Load Google Cloud Datastore API v1
 */
declare function client$load(name: "datastore", version: "v1"): PromiseLike<void>


declare function client$load(name: "datastore", version: "v1", callback: () => any): void


declare var client$projects: datastore$datastore$ProjectsResource;

declare interface datastore$AllocateIdsRequest {

/**
 * A list of keys with incomplete key paths for which to allocate IDs.
 * No key may be reserved/read-only.
 */
keys?: datastore$Key[]
} 

declare interface datastore$AllocateIdsResponse {

/**
 * The keys specified in the request (in the same order), each with
 * its key path completed with a newly allocated ID.
 */
keys?: datastore$Key[]
} 

declare interface datastore$ArrayValue {

/**
 * Values in the array.
 * The order of this array may not be preserved if it contains a mix of
 * indexed and unindexed values.
 */
values?: datastore$Value[]
} 

declare interface datastore$BeginTransactionRequest {

/**
 * Options for a new transaction.
 */
transactionOptions?: datastore$TransactionOptions
} 

declare interface datastore$BeginTransactionResponse {

/**
 * The transaction identifier (always present).
 */
transaction?: string
} 

declare interface datastore$CommitRequest {

/**
 * The type of commit to perform. Defaults to `TRANSACTIONAL`.
 */
mode?: string,

/**
 * The mutations to perform.
 * 
 * When mode is `TRANSACTIONAL`, mutations affecting a single entity are
 * applied in order. The following sequences of mutations affecting a single
 * entity are not permitted in a single `Commit` request:
 * 
 * - `insert` followed by `insert`
 * - `update` followed by `insert`
 * - `upsert` followed by `insert`
 * - `delete` followed by `update`
 * 
 * When mode is `NON_TRANSACTIONAL`, no two mutations may affect a single
 * entity.
 */
mutations?: datastore$Mutation[],

/**
 * The identifier of the transaction associated with the commit. A
 * transaction identifier is returned by a call to
 * Datastore.BeginTransaction.
 */
transaction?: string
} 

declare interface datastore$CommitResponse {

/**
 * The number of index entries updated during the commit, or zero if none were
 * updated.
 */
indexUpdates?: number,

/**
 * The result of performing the mutations.
 * The i-th mutation result corresponds to the i-th mutation in the request.
 */
mutationResults?: datastore$MutationResult[]
} 

declare interface datastore$CompositeFilter {

/**
 * The list of filters to combine.
 * Must contain at least one filter.
 */
filters?: datastore$Filter[],

/**
 * The operator for combining multiple filters.
 */
op?: string
} 

declare interface datastore$Entity {

/**
 * The entity's key.
 * 
 * An entity must have a key, unless otherwise documented (for example,
 * an entity in `Value.entity_value` may have no key).
 * An entity's kind is its key path's last element's kind,
 * or null if it has no key.
 */
key?: datastore$Key,

/**
 * The entity's properties.
 * The map's keys are property names.
 * A property name matching regex `__.&#42;__` is reserved.
 * A reserved property name is forbidden in certain documented contexts.
 * The name must not contain more than 500 characters.
 * The name cannot be `""`.
 */
properties?: Record<string, datastore$Value>
} 

declare interface datastore$EntityResult {

/**
 * A cursor that points to the position after the result entity.
 * Set only when the `EntityResult` is part of a `QueryResultBatch` message.
 */
cursor?: string,

/**
 * The resulting entity.
 */
entity?: datastore$Entity,

/**
 * The version of the entity, a strictly positive number that monotonically
 * increases with changes to the entity.
 * 
 * This field is set for `FULL` entity
 * results.
 * 
 * For missing entities in `LookupResponse`, this
 * is the version of the snapshot that was used to look up the entity, and it
 * is always set except for eventually consistent reads.
 */
version?: string
} 

declare interface datastore$Filter {

/**
 * A composite filter.
 */
compositeFilter?: datastore$CompositeFilter,

/**
 * A filter on a property.
 */
propertyFilter?: datastore$PropertyFilter
} 

declare interface datastore$GoogleDatastoreAdminV1beta1CommonMetadata {

/**
 * The time the operation ended, either successfully or otherwise.
 */
endTime?: string,

/**
 * The client-assigned labels which were provided when the operation was
 * created. May also include additional labels.
 */
labels?: Record<string, string>,

/**
 * The type of the operation. Can be used as a filter in
 * ListOperationsRequest.
 */
operationType?: string,

/**
 * The time that work began on the operation.
 */
startTime?: string,

/**
 * The current state of the Operation.
 */
state?: string
} 

declare interface datastore$GoogleDatastoreAdminV1beta1EntityFilter {

/**
 * If empty, then this represents all kinds.
 */
kinds?: string[],

/**
 * An empty list represents all namespaces. This is the preferred
 * usage for projects that don't use namespaces.
 * 
 * An empty string element represents the default namespace. This should be
 * used if the project has data in non-default namespaces, but doesn't want to
 * include them.
 * Each namespace in this list must be unique.
 */
namespaceIds?: string[]
} 

declare interface datastore$GoogleDatastoreAdminV1beta1ExportEntitiesMetadata {

/**
 * Metadata common to all Datastore Admin operations.
 */
common?: datastore$GoogleDatastoreAdminV1beta1CommonMetadata,

/**
 * Description of which entities are being exported.
 */
entityFilter?: datastore$GoogleDatastoreAdminV1beta1EntityFilter,

/**
 * Location for the export metadata and data files. This will be the same
 * value as the
 * google.datastore.admin.v1beta1.ExportEntitiesRequest.output_url_prefix
 * field. The final output location is provided in
 * google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url.
 */
outputUrlPrefix?: string,

/**
 * An estimate of the number of bytes processed.
 */
progressBytes?: datastore$GoogleDatastoreAdminV1beta1Progress,

/**
 * An estimate of the number of entities processed.
 */
progressEntities?: datastore$GoogleDatastoreAdminV1beta1Progress
} 

declare interface datastore$GoogleDatastoreAdminV1beta1ExportEntitiesResponse {

/**
 * Location of the output metadata file. This can be used to begin an import
 * into Cloud Datastore (this project or another project). See
 * google.datastore.admin.v1beta1.ImportEntitiesRequest.input_url.
 * Only present if the operation completed successfully.
 */
outputUrl?: string
} 

declare interface datastore$GoogleDatastoreAdminV1beta1ImportEntitiesMetadata {

/**
 * Metadata common to all Datastore Admin operations.
 */
common?: datastore$GoogleDatastoreAdminV1beta1CommonMetadata,

/**
 * Description of which entities are being imported.
 */
entityFilter?: datastore$GoogleDatastoreAdminV1beta1EntityFilter,

/**
 * The location of the import metadata file. This will be the same value as
 * the google.datastore.admin.v1beta1.ExportEntitiesResponse.output_url
 * field.
 */
inputUrl?: string,

/**
 * An estimate of the number of bytes processed.
 */
progressBytes?: datastore$GoogleDatastoreAdminV1beta1Progress,

/**
 * An estimate of the number of entities processed.
 */
progressEntities?: datastore$GoogleDatastoreAdminV1beta1Progress
} 

declare interface datastore$GoogleDatastoreAdminV1beta1Progress {

/**
 * The amount of work that has been completed. Note that this may be greater
 * than work_estimated.
 */
workCompleted?: string,

/**
 * An estimate of how much work needs to be performed. May be zero if the
 * work estimate is unavailable.
 */
workEstimated?: string
} 

declare interface datastore$GoogleLongrunningListOperationsResponse {

/**
 * The standard List next-page token.
 */
nextPageToken?: string,

/**
 * A list of operations that matches the specified filter in the request.
 */
operations?: datastore$GoogleLongrunningOperation[]
} 

declare interface datastore$GoogleLongrunningOperation {

/**
 * If the value is `false`, it means the operation is still in progress.
 * If `true`, the operation is completed, and either `error` or `response` is
 * available.
 */
done?: boolean,

/**
 * The error result of the operation in case of failure or cancellation.
 */
error?: datastore$Status,

/**
 * Service-specific metadata associated with the operation.  It typically
 * contains progress information and common metadata such as create time.
 * Some services might not provide such metadata.  Any method that returns a
 * long-running operation should document the metadata type, if any.
 */
metadata?: Record<string, any>,

/**
 * The server-assigned name, which is only unique within the same service that
 * originally returns it. If you use the default HTTP mapping, the
 * `name` should have the format of `operations/some/unique/name`.
 */
name?: string,

/**
 * The normal response of the operation in case of success.  If the original
 * method returns no data on success, such as `Delete`, the response is
 * `google.protobuf.Empty`.  If the original method is standard
 * `Get`/`Create`/`Update`, the response should be the resource.  For other
 * methods, the response should have the type `XxxResponse`, where `Xxx`
 * is the original method name.  For example, if the original method name
 * is `TakeSnapshot()`, the inferred response type is
 * `TakeSnapshotResponse`.
 */
response?: Record<string, any>
} 

declare interface datastore$GqlQuery {

/**
 * When false, the query string must not contain any literals and instead must
 * bind all values. For example,
 * `SELECT &#42; FROM Kind WHERE a = 'string literal'` is not allowed, while
 * `SELECT &#42; FROM Kind WHERE a = @value` is.
 */
allowLiterals?: boolean,

/**
 * For each non-reserved named binding site in the query string, there must be
 * a named parameter with that name, but not necessarily the inverse.
 * 
 * Key must match regex `A-Za-z_$&#42;`, must not match regex
 * `__.&#42;__`, and must not be `""`.
 */
namedBindings?: Record<string, datastore$GqlQueryParameter>,

/**
 * Numbered binding site @1 references the first numbered parameter,
 * effectively using 1-based indexing, rather than the usual 0.
 * 
 * For each binding site numbered i in `query_string`, there must be an i-th
 * numbered parameter. The inverse must also be true.
 */
positionalBindings?: datastore$GqlQueryParameter[],

/**
 * A string of the format described
 * [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
 */
queryString?: string
} 

declare interface datastore$GqlQueryParameter {

/**
 * A query cursor. Query cursors are returned in query
 * result batches.
 */
cursor?: string,

/**
 * A value parameter.
 */
value?: datastore$Value
} 

declare interface datastore$Key {

/**
 * Entities are partitioned into subsets, currently identified by a project
 * ID and namespace ID.
 * Queries are scoped to a single partition.
 */
partitionId?: datastore$PartitionId,

/**
 * The entity path.
 * An entity path consists of one or more elements composed of a kind and a
 * string or numerical identifier, which identify entities. The first
 * element identifies a _root entity_, the second element identifies
 * a _child_ of the root entity, the third element identifies a child of the
 * second entity, and so forth. The entities identified by all prefixes of
 * the path are called the element's _ancestors_.
 * 
 * An entity path is always fully complete: &#42;all&#42; of the entity's ancestors
 * are required to be in the path along with the entity identifier itself.
 * The only exception is that in some documented cases, the identifier in the
 * last path element (for the entity) itself may be omitted. For example,
 * the last path element of the key of `Mutation.insert` may have no
 * identifier.
 * 
 * A path can never be empty, and a path can have at most 100 elements.
 */
path?: datastore$PathElement[]
} 

declare interface datastore$KindExpression {

/**
 * The name of the kind.
 */
name?: string
} 

declare interface datastore$LatLng {

/**
 * The latitude in degrees. It must be in the range [-90.0, +90.0].
 */
latitude?: number,

/**
 * The longitude in degrees. It must be in the range [-180.0, +180.0].
 */
longitude?: number
} 

declare interface datastore$LookupRequest {

/**
 * Keys of entities to look up.
 */
keys?: datastore$Key[],

/**
 * The options for this lookup request.
 */
readOptions?: datastore$ReadOptions
} 

declare interface datastore$LookupResponse {

/**
 * A list of keys that were not looked up due to resource constraints. The
 * order of results in this field is undefined and has no relation to the
 * order of the keys in the input.
 */
deferred?: datastore$Key[],

/**
 * Entities found as `ResultType.FULL` entities. The order of results in this
 * field is undefined and has no relation to the order of the keys in the
 * input.
 */
found?: datastore$EntityResult[],

/**
 * Entities not found as `ResultType.KEY_ONLY` entities. The order of results
 * in this field is undefined and has no relation to the order of the keys
 * in the input.
 */
missing?: datastore$EntityResult[]
} 

declare interface datastore$Mutation {

/**
 * The version of the entity that this mutation is being applied to. If this
 * does not match the current version on the server, the mutation conflicts.
 */
baseVersion?: string,

/**
 * The key of the entity to delete. The entity may or may not already exist.
 * Must have a complete key path and must not be reserved/read-only.
 */
delete?: datastore$Key,

/**
 * The entity to insert. The entity must not already exist.
 * The entity key's final path element may be incomplete.
 */
insert?: datastore$Entity,

/**
 * The entity to update. The entity must already exist.
 * Must have a complete key path.
 */
update?: datastore$Entity,

/**
 * The entity to upsert. The entity may or may not already exist.
 * The entity key's final path element may be incomplete.
 */
upsert?: datastore$Entity
} 

declare interface datastore$MutationResult {

/**
 * Whether a conflict was detected for this mutation. Always false when a
 * conflict detection strategy field is not set in the mutation.
 */
conflictDetected?: boolean,

/**
 * The automatically allocated key.
 * Set only when the mutation allocated a key.
 */
key?: datastore$Key,

/**
 * The version of the entity on the server after processing the mutation. If
 * the mutation doesn't change anything on the server, then the version will
 * be the version of the current entity or, if no entity is present, a version
 * that is strictly greater than the version of any previous entity and less
 * than the version of any possible future entity.
 */
version?: string
} 

declare interface datastore$PartitionId {

/**
 * If not empty, the ID of the namespace to which the entities belong.
 */
namespaceId?: string,

/**
 * The ID of the project to which the entities belong.
 */
projectId?: string
} 

declare interface datastore$PathElement {

/**
 * The auto-allocated ID of the entity.
 * Never equal to zero. Values less than zero are discouraged and may not
 * be supported in the future.
 */
id?: string,

/**
 * The kind of the entity.
 * A kind matching regex `__.&#42;__` is reserved/read-only.
 * A kind must not contain more than 1500 bytes when UTF-8 encoded.
 * Cannot be `""`.
 */
kind?: string,

/**
 * The name of the entity.
 * A name matching regex `__.&#42;__` is reserved/read-only.
 * A name must not be more than 1500 bytes when UTF-8 encoded.
 * Cannot be `""`.
 */
name?: string
} 

declare interface datastore$Projection {

/**
 * The property to project.
 */
property?: datastore$PropertyReference
} 

declare interface datastore$PropertyFilter {

/**
 * The operator to filter by.
 */
op?: string,

/**
 * The property to filter by.
 */
property?: datastore$PropertyReference,

/**
 * The value to compare the property to.
 */
value?: datastore$Value
} 

declare interface datastore$PropertyOrder {

/**
 * The direction to order by. Defaults to `ASCENDING`.
 */
direction?: string,

/**
 * The property to order by.
 */
property?: datastore$PropertyReference
} 

declare interface datastore$PropertyReference {

/**
 * The name of the property.
 * If name includes "."s, it may be interpreted as a property name path.
 */
name?: string
} 

declare interface datastore$Query {

/**
 * The properties to make distinct. The query results will contain the first
 * result for each distinct combination of values for the given properties
 * (if empty, all results are returned).
 */
distinctOn?: datastore$PropertyReference[],

/**
 * An ending point for the query results. Query cursors are
 * returned in query result batches and
 * [can only be used to limit the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
 */
endCursor?: string,

/**
 * The filter to apply.
 */
filter?: datastore$Filter,

/**
 * The kinds to query (if empty, returns entities of all kinds).
 * Currently at most 1 kind may be specified.
 */
kind?: datastore$KindExpression[],

/**
 * The maximum number of results to return. Applies after all other
 * constraints. Optional.
 * Unspecified is interpreted as no limit.
 * Must be >= 0 if specified.
 */
limit?: number,

/**
 * The number of results to skip. Applies before limit, but after all other
 * constraints. Optional. Must be >= 0 if specified.
 */
offset?: number,

/**
 * The order to apply to the query results (if empty, order is unspecified).
 */
order?: datastore$PropertyOrder[],

/**
 * The projection to return. Defaults to returning all properties.
 */
projection?: datastore$Projection[],

/**
 * A starting point for the query results. Query cursors are
 * returned in query result batches and
 * [can only be used to continue the same query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
 */
startCursor?: string
} 

declare interface datastore$QueryResultBatch {

/**
 * A cursor that points to the position after the last result in the batch.
 */
endCursor?: string,

/**
 * The result type for every entity in `entity_results`.
 */
entityResultType?: string,

/**
 * The results for this batch.
 */
entityResults?: datastore$EntityResult[],

/**
 * The state of the query after the current batch.
 */
moreResults?: string,

/**
 * A cursor that points to the position after the last skipped result.
 * Will be set when `skipped_results` != 0.
 */
skippedCursor?: string,

/**
 * The number of results skipped, typically because of an offset.
 */
skippedResults?: number,

/**
 * The version number of the snapshot this batch was returned from.
 * This applies to the range of results from the query's `start_cursor` (or
 * the beginning of the query if no cursor was given) to this batch's
 * `end_cursor` (not the query's `end_cursor`).
 * 
 * In a single transaction, subsequent query result batches for the same query
 * can have a greater snapshot version number. Each batch's snapshot version
 * is valid for all preceding batches.
 * The value will be zero for eventually consistent queries.
 */
snapshotVersion?: string
} 

declare interface datastore$ReadOptions {

/**
 * The non-transactional read consistency to use.
 * Cannot be set to `STRONG` for global queries.
 */
readConsistency?: string,

/**
 * The identifier of the transaction in which to read. A
 * transaction identifier is returned by a call to
 * Datastore.BeginTransaction.
 */
transaction?: string
} 

declare interface datastore$ReadWrite {

/**
 * The transaction identifier of the transaction being retried.
 */
previousTransaction?: string
} 

declare interface datastore$RollbackRequest {

/**
 * The transaction identifier, returned by a call to
 * Datastore.BeginTransaction.
 */
transaction?: string
} 

declare interface datastore$RunQueryRequest {

/**
 * The GQL query to run.
 */
gqlQuery?: datastore$GqlQuery,

/**
 * Entities are partitioned into subsets, identified by a partition ID.
 * Queries are scoped to a single partition.
 * This partition ID is normalized with the standard default context
 * partition ID.
 */
partitionId?: datastore$PartitionId,

/**
 * The query to run.
 */
query?: datastore$Query,

/**
 * The options for this query.
 */
readOptions?: datastore$ReadOptions
} 

declare interface datastore$RunQueryResponse {

/**
 * A batch of query results (always present).
 */
batch?: datastore$QueryResultBatch,

/**
 * The parsed form of the `GqlQuery` from the request, if it was set.
 */
query?: datastore$Query
} 

declare interface datastore$Status {

/**
 * The status code, which should be an enum value of google.rpc.Code.
 */
code?: number,

/**
 * A list of messages that carry the error details.  There is a common set of
 * message types for APIs to use.
 */
details?: Array<Record<string, any>>,

/**
 * A developer-facing error message, which should be in English. Any
 * user-facing error message should be localized and sent in the
 * google.rpc.Status.details field, or localized by the client.
 */
message?: string
} 

declare interface datastore$TransactionOptions {

/**
 * The transaction should only allow reads.
 */
readOnly?: any,

/**
 * The transaction should allow both reads and writes.
 */
readWrite?: datastore$ReadWrite
} 

declare interface datastore$Value {

/**
 * An array value.
 * Cannot contain another array value.
 * A `Value` instance that sets field `array_value` must not set fields
 * `meaning` or `exclude_from_indexes`.
 */
arrayValue?: datastore$ArrayValue,

/**
 * A blob value.
 * May have at most 1,000,000 bytes.
 * When `exclude_from_indexes` is false, may have at most 1500 bytes.
 * In JSON requests, must be base64-encoded.
 */
blobValue?: string,

/**
 * A boolean value.
 */
booleanValue?: boolean,

/**
 * A double value.
 */
doubleValue?: number,

/**
 * An entity value.
 * 
 * - May have no key.
 * - May have a key with an incomplete key path.
 * - May have a reserved/read-only key.
 */
entityValue?: datastore$Entity,

/**
 * If the value should be excluded from all indexes including those defined
 * explicitly.
 */
excludeFromIndexes?: boolean,

/**
 * A geo point value representing a point on the surface of Earth.
 */
geoPointValue?: datastore$LatLng,

/**
 * An integer value.
 */
integerValue?: string,

/**
 * A key value.
 */
keyValue?: datastore$Key,

/**
 * The `meaning` field should only be populated for backwards compatibility.
 */
meaning?: number,

/**
 * A null value.
 */
nullValue?: string,

/**
 * A UTF-8 encoded string value.
 * When `exclude_from_indexes` is false (it is indexed) , may have at most 1500 bytes.
 * Otherwise, may be set to at least 1,000,000 bytes.
 */
stringValue?: string,

/**
 * A timestamp value.
 * When stored in the Datastore, precise only to microseconds;
 * any additional precision is rounded down.
 */
timestampValue?: string
} 

declare interface datastore$OperationsResource {

/**
 * Starts asynchronous cancellation on a long-running operation.  The server
 * makes a best effort to cancel the operation, but success is not
 * guaranteed.  If the server doesn't support this method, it returns
 * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
 * Operations.GetOperation or
 * other methods to check whether the cancellation succeeded or whether the
 * operation completed despite cancellation. On successful cancellation,
 * the operation is not deleted; instead, it becomes an operation with
 * an Operation.error value with a google.rpc.Status.code of 1,
 * corresponding to `Code.CANCELLED`.
 */
cancel(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The name of the operation resource to be cancelled.
 */
name: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,

/**
 * Deletes a long-running operation. This method indicates that the client is
 * no longer interested in the operation result. It does not cancel the
 * operation. If the server doesn't support this method, it returns
 * `google.rpc.Code.UNIMPLEMENTED`.
 */
delete(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The name of the operation resource to be deleted.
 */
name: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,

/**
 * Gets the latest state of a long-running operation.  Clients can use this
 * method to poll the operation result at intervals as recommended by the API
 * service.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The name of the operation resource.
 */
name: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$GoogleLongrunningOperation>,

/**
 * Lists operations that match the specified filter in the request. If the
 * server doesn't support this method, it returns `UNIMPLEMENTED`.
 * 
 * NOTE: the `name` binding allows API services to override the binding
 * to use different resource name schemes, such as `users/&#42;/operations`. To
 * override the binding, API services can add a binding such as
 * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
 * For backwards compatibility, the default name includes the operations
 * collection id, however overriding users must ensure the name binding
 * is the parent resource, without the operations collection id.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The standard list filter.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The name of the operation's parent resource.
 */
name: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The standard list page size.
 */
pageSize?: number,

/**
 * The standard list page token.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$GoogleLongrunningListOperationsResponse>
} 

declare interface datastore$ProjectsResource {

/**
 * Allocates IDs for the given keys, which is useful for referencing an entity
 * before it is inserted.
 */
allocateIds(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the project against which to make the request.
 */
projectId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$AllocateIdsResponse>,

/**
 * Begins a new transaction.
 */
beginTransaction(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the project against which to make the request.
 */
projectId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$BeginTransactionResponse>,

/**
 * Commits a transaction, optionally creating, deleting or modifying some
 * entities.
 */
commit(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the project against which to make the request.
 */
projectId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$CommitResponse>,

/**
 * Looks up entities by key.
 */
lookup(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the project against which to make the request.
 */
projectId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$LookupResponse>,

/**
 * Rolls back a transaction.
 */
rollback(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the project against which to make the request.
 */
projectId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,

/**
 * Queries for entities.
 */
runQuery(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the project against which to make the request.
 */
projectId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<datastore$RunQueryResponse>,
operations: datastore$OperationsResource
} 
    }
