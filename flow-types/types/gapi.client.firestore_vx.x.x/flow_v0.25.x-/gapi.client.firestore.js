declare module "gapi.client.firestore" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    projects: typeof client$projects
  };

  /**
   * Load Google Cloud Firestore API v1beta1
   */
  declare function client$load(
    name: "firestore",
    version: "v1beta1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "firestore",
    version: "v1beta1",
    callback: () => any
  ): void;

  declare var client$projects: firestore$firestore$ProjectsResource;

  declare interface firestore$ArrayValue {
    /**
     * Values in the array.
     */
    values?: firestore$Value[];
  }

  declare interface firestore$BatchGetDocumentsRequest {
    /**
     * The names of the documents to retrieve. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * The request will fail if any of the document is not a child resource of the
     * given `database`. Duplicate names will be elided.
     */
    documents?: string[];

    /**
     * The fields to return. If not set, returns all fields.
     *
     * If a document has a field that is not present in this mask, that field will
     * not be returned in the response.
     */
    mask?: firestore$DocumentMask;

    /**
     * Starts a new transaction and reads the documents.
     * Defaults to a read-only transaction.
     * The new transaction ID will be returned as the first response in the
     * stream.
     */
    newTransaction?: firestore$TransactionOptions;

    /**
     * Reads documents as they were at the given time.
     * This may not be older than 60 seconds.
     */
    readTime?: string;

    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
  }

  declare interface firestore$BatchGetDocumentsResponse {
    /**
     * A document that was requested.
     */
    found?: firestore$Document;

    /**
     * A document name that was requested but does not exist. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    missing?: string;

    /**
     * The time at which the document was read.
     * This may be monotically increasing, in this case the previous documents in
     * the result stream are guaranteed not to have changed between their
     * read_time and this one.
     */
    readTime?: string;

    /**
     * The transaction that was started as part of this request.
     * Will only be set in the first response, and only if
     * BatchGetDocumentsRequest.new_transaction was set in the request.
     */
    transaction?: string;
  }

  declare interface firestore$BeginTransactionRequest {
    /**
     * The options for the transaction.
     * Defaults to a read-write transaction.
     */
    options?: firestore$TransactionOptions;
  }

  declare interface firestore$BeginTransactionResponse {
    /**
     * The transaction that was started.
     */
    transaction?: string;
  }

  declare interface firestore$CollectionSelector {
    /**
     * When false, selects only collections that are immediate children of
     * the `parent` specified in the containing `RunQueryRequest`.
     * When true, selects all descendant collections.
     */
    allDescendants?: boolean;

    /**
     * The collection ID.
     * When set, selects only collections with this ID.
     */
    collectionId?: string;
  }

  declare interface firestore$CommitRequest {
    /**
     * If non-empty, applies all writes in this transaction, and commits it.
     * Otherwise, applies the writes as if they were in their own transaction.
     */
    transaction?: string;

    /**
     * The writes to apply.
     *
     * Always executed atomically and in order.
     */
    writes?: firestore$Write[];
  }

  declare interface firestore$CommitResponse {
    /**
     * The time at which the commit occurred.
     */
    commitTime?: string;

    /**
     * The result of applying the writes.
     *
     * This i-th write result corresponds to the i-th write in the
     * request.
     */
    writeResults?: firestore$WriteResult[];
  }

  declare interface firestore$CompositeFilter {
    /**
     * The list of filters to combine.
     * Must contain at least one filter.
     */
    filters?: firestore$Filter[];

    /**
     * The operator for combining multiple filters.
     */
    op?: string;
  }

  declare interface firestore$Cursor {
    /**
     * If the position is just before or just after the given values, relative
     * to the sort order defined by the query.
     */
    before?: boolean;

    /**
     * The values that represent a position, in the order they appear in
     * the order by clause of a query.
     *
     * Can contain fewer values than specified in the order by clause.
     */
    values?: firestore$Value[];
  }

  declare interface firestore$Document {
    /**
     * Output only. The time at which the document was created.
     *
     * This value increases monotonically when a document is deleted then
     * recreated. It can also be compared to values from other documents and
     * the `read_time` of a query.
     */
    createTime?: string;

    /**
     * The document's fields.
     *
     * The map keys represent field names.
     *
     * A simple field name contains only characters `a` to `z`, `A` to `Z`,
     * `0` to `9`, or `_`, and must not start with `0` to `9` or `_`. For example,
     * `foo_bar_17`.
     *
     * Field names matching the regular expression `__.&#42;__` are reserved. Reserved
     * field names are forbidden except in certain documented contexts. The map
     * keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be
     * empty.
     *
     * Field paths may be used in other contexts to refer to structured fields
     * defined here. For `map_value`, the field path is represented by the simple
     * or quoted field names of the containing fields, delimited by `.`. For
     * example, the structured field
     * `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be
     * represented by the field path `foo.x&y`.
     *
     * Within a field path, a quoted field name starts and ends with `` ` `` and
     *              * may contain any character. Some characters, including `` ` ``, must be
     * escaped using a `\`. For example, `` `x&y` `` represents `x&y` and
     * `` `bak\`tik` `` represents `` bak`tik ``.
     */
    fields?: Record<string, firestore$Value>;

    /**
     * The resource name of the document, for example
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    name?: string;

    /**
     * Output only. The time at which the document was last changed.
     *
     * This value is initally set to the `create_time` then increases
     * monotonically with each change to the document. It can also be
     * compared to values from other documents and the `read_time` of a query.
     */
    updateTime?: string;
  }

  declare interface firestore$DocumentChange {
    /**
     * The new state of the Document.
     *
     * If `mask` is set, contains only fields that were updated or added.
     */
    document?: firestore$Document;

    /**
     * A set of target IDs for targets that no longer match this document.
     */
    removedTargetIds?: number[];

    /**
     * A set of target IDs of targets that match this document.
     */
    targetIds?: number[];
  }

  declare interface firestore$DocumentDelete {
    /**
     * The resource name of the Document that was deleted.
     */
    document?: string;

    /**
     * The read timestamp at which the delete was observed.
     *
     * Greater or equal to the `commit_time` of the delete.
     */
    readTime?: string;

    /**
     * A set of target IDs for targets that previously matched this entity.
     */
    removedTargetIds?: number[];
  }

  declare interface firestore$DocumentMask {
    /**
     * The list of field paths in the mask. See Document.fields for a field
     * path syntax reference.
     */
    fieldPaths?: string[];
  }

  declare interface firestore$DocumentRemove {
    /**
     * The resource name of the Document that has gone out of view.
     */
    document?: string;

    /**
     * The read timestamp at which the remove was observed.
     *
     * Greater or equal to the `commit_time` of the change/delete/remove.
     */
    readTime?: string;

    /**
     * A set of target IDs for targets that previously matched this document.
     */
    removedTargetIds?: number[];
  }

  declare interface firestore$DocumentTransform {
    /**
     * The name of the document to transform.
     */
    document?: string;

    /**
     * The list of transformations to apply to the fields of the document, in
     * order.
     */
    fieldTransforms?: firestore$FieldTransform[];
  }

  declare interface firestore$DocumentsTarget {
    /**
     * The names of the documents to retrieve. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * The request will fail if any of the document is not a child resource of
     * the given `database`. Duplicate names will be elided.
     */
    documents?: string[];
  }

  declare interface firestore$ExistenceFilter {
    /**
     * The total count of documents that match target_id.
     *
     * If different from the count of documents in the client that match, the
     * client must manually determine which documents no longer match the target.
     */
    count?: number;

    /**
     * The target ID to which this filter applies.
     */
    targetId?: number;
  }

  declare interface firestore$FieldFilter {
    /**
     * The field to filter by.
     */
    field?: firestore$FieldReference;

    /**
     * The operator to filter by.
     */
    op?: string;

    /**
     * The value to compare to.
     */
    value?: firestore$Value;
  }

  declare interface firestore$FieldReference {
    fieldPath?: string;
  }

  declare interface firestore$FieldTransform {
    /**
     * The path of the field. See Document.fields for the field path syntax
     * reference.
     */
    fieldPath?: string;

    /**
     * Sets the field to the given server value.
     */
    setToServerValue?: string;
  }

  declare interface firestore$Filter {
    /**
     * A composite filter.
     */
    compositeFilter?: firestore$CompositeFilter;

    /**
     * A filter on a document field.
     */
    fieldFilter?: firestore$FieldFilter;

    /**
     * A filter that takes exactly one argument.
     */
    unaryFilter?: firestore$UnaryFilter;
  }

  declare interface firestore$Index {
    /**
     * The collection ID to which this index applies. Required.
     */
    collectionId?: string;

    /**
     * The fields to index.
     */
    fields?: firestore$IndexField[];

    /**
     * The resource name of the index.
     */
    name?: string;

    /**
     * The state of the index.
     * The state is read-only.
     * @OutputOnly
     */
    state?: string;
  }

  declare interface firestore$IndexField {
    /**
     * The path of the field. Must match the field path specification described
     * by google.firestore.v1beta1.Document.fields.
     * Special field path `__name__` may be used by itself or at the end of a
     * path. `__type__` may be used only at the end of path.
     */
    fieldPath?: string;

    /**
     * The field's mode.
     */
    mode?: string;
  }

  declare interface firestore$IndexOperationMetadata {
    /**
     * True if the [google.longrunning.Operation] was cancelled. If the
     * cancellation is in progress, cancelled will be true but
     * google.longrunning.Operation.done will be false.
     */
    cancelled?: boolean;

    /**
     * Progress of the existing operation, measured in number of documents.
     */
    documentProgress?: firestore$Progress;

    /**
     * The time the operation ended, either successfully or otherwise. Unset if
     * the operation is still active.
     */
    endTime?: string;

    /**
     * The index resource that this operation is acting on. For example:
     * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     */
    index?: string;

    /**
     * The type of index operation.
     */
    operationType?: string;

    /**
     * The time that work began on the operation.
     */
    startTime?: string;
  }

  declare interface firestore$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;

    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }

  declare interface firestore$ListCollectionIdsResponse {
    /**
     * The collection ids.
     */
    collectionIds?: string[];

    /**
     * A page token that may be used to continue the list.
     */
    nextPageToken?: string;
  }

  declare interface firestore$ListDocumentsResponse {
    /**
     * The Documents found.
     */
    documents?: firestore$Document[];

    /**
     * The next page token.
     */
    nextPageToken?: string;
  }

  declare interface firestore$ListIndexesResponse {
    /**
     * The indexes.
     */
    indexes?: firestore$Index[];

    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }

  declare interface firestore$ListenRequest {
    /**
     * A target to add to this stream.
     */
    addTarget?: firestore$Target;

    /**
     * Labels associated with this target change.
     */
    labels?: Record<string, string>;

    /**
     * The ID of a target to remove from this stream.
     */
    removeTarget?: number;
  }

  declare interface firestore$ListenResponse {
    /**
     * A Document has changed.
     */
    documentChange?: firestore$DocumentChange;

    /**
     * A Document has been deleted.
     */
    documentDelete?: firestore$DocumentDelete;

    /**
     * A Document has been removed from a target (because it is no longer
     * relevant to that target).
     */
    documentRemove?: firestore$DocumentRemove;

    /**
     * A filter to apply to the set of documents previously returned for the
     * given target.
     *
     * Returned when documents may have been removed from the given target, but
     * the exact documents are unknown.
     */
    filter?: firestore$ExistenceFilter;

    /**
     * Targets have changed.
     */
    targetChange?: firestore$TargetChange;
  }

  declare interface firestore$MapValue {
    /**
     * The map's fields.
     *
     * The map keys represent field names. Field names matching the regular
     * expression `__.&#42;__` are reserved. Reserved field names are forbidden except
     * in certain documented contexts. The map keys, represented as UTF-8, must
     * not exceed 1,500 bytes and cannot be empty.
     */
    fields?: Record<string, firestore$Value>;
  }

  declare interface firestore$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: firestore$Status;

    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: Record<string, any>;

    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;

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
    response?: Record<string, any>;
  }

  declare interface firestore$Order {
    /**
     * The direction to order by. Defaults to `ASCENDING`.
     */
    direction?: string;

    /**
     * The field to order by.
     */
    field?: firestore$FieldReference;
  }

  declare interface firestore$Precondition {
    /**
     * When set to `true`, the target document must exist.
     * When set to `false`, the target document must not exist.
     */
    exists?: boolean;

    /**
     * When set, the target document must exist and have been last updated at
     * that time.
     */
    updateTime?: string;
  }

  declare interface firestore$Progress {
    /**
     * An estimate of how much work has been completed. Note that this may be
     * greater than `work_estimated`.
     */
    workCompleted?: string;

    /**
     * An estimate of how much work needs to be performed. Zero if the
     * work estimate is unavailable. May change as work progresses.
     */
    workEstimated?: string;
  }

  declare interface firestore$Projection {
    /**
     * The fields to return.
     *
     * If empty, all fields are returned. To only return the name
     * of the document, use `['__name__']`.
     */
    fields?: firestore$FieldReference[];
  }

  declare interface firestore$QueryTarget {
    /**
     * The parent resource name. In the format:
     * `projects/{project_id}/databases/{database_id}/documents` or
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * For example:
     * `projects/my-project/databases/my-database/documents` or
     * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     */
    parent?: string;

    /**
     * A structured query.
     */
    structuredQuery?: firestore$StructuredQuery;
  }

  declare interface firestore$ReadOnly {
    /**
     * Reads documents at the given time.
     * This may not be older than 60 seconds.
     */
    readTime?: string;
  }

  declare interface firestore$ReadWrite {
    /**
     * An optional transaction to retry.
     */
    retryTransaction?: string;
  }

  declare interface firestore$RollbackRequest {
    /**
     * The transaction to roll back.
     */
    transaction?: string;
  }

  declare interface firestore$RunQueryRequest {
    /**
     * Starts a new transaction and reads the documents.
     * Defaults to a read-only transaction.
     * The new transaction ID will be returned as the first response in the
     * stream.
     */
    newTransaction?: firestore$TransactionOptions;

    /**
     * Reads documents as they were at the given time.
     * This may not be older than 60 seconds.
     */
    readTime?: string;

    /**
     * A structured query.
     */
    structuredQuery?: firestore$StructuredQuery;

    /**
     * Reads documents in a transaction.
     */
    transaction?: string;
  }

  declare interface firestore$RunQueryResponse {
    /**
     * A query result.
     * Not set when reporting partial progress.
     */
    document?: firestore$Document;

    /**
     * The time at which the document was read. This may be monotonically
     * increasing; in this case, the previous documents in the result stream are
     * guaranteed not to have changed between their `read_time` and this one.
     *
     * If the query returns no results, a response with `read_time` and no
     * `document` will be sent, and this represents the time at which the query
     * was run.
     */
    readTime?: string;

    /**
     * The number of results that have been skipped due to an offset between
     * the last response and the current response.
     */
    skippedResults?: number;

    /**
     * The transaction that was started as part of this request.
     * Can only be set in the first response, and only if
     * RunQueryRequest.new_transaction was set in the request.
     * If set, no other fields will be set in this response.
     */
    transaction?: string;
  }

  declare interface firestore$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface firestore$StructuredQuery {
    /**
     * A end point for the query results.
     */
    endAt?: firestore$Cursor;

    /**
     * The collections to query.
     */
    from?: firestore$CollectionSelector[];

    /**
     * The maximum number of results to return.
     *
     * Applies after all other constraints.
     * Must be >= 0 if specified.
     */
    limit?: number;

    /**
     * The number of results to skip.
     *
     * Applies before limit, but after all other constraints. Must be >= 0 if
     * specified.
     */
    offset?: number;

    /**
     * The order to apply to the query results.
     *
     * Firestore guarantees a stable ordering through the following rules:
     *
     * &#42; Any field required to appear in `order_by`, that is not already
     * specified in `order_by`, is appended to the order in field name order
     * by default.
     * &#42; If an order on `__name__` is not specified, it is appended by default.
     *
     * Fields are appended with the same sort direction as the last order
     * specified, or 'ASCENDING' if no order was specified. For example:
     *
     * &#42; `SELECT &#42; FROM Foo ORDER BY A` becomes
     * `SELECT &#42; FROM Foo ORDER BY A, __name__`
     * &#42; `SELECT &#42; FROM Foo ORDER BY A DESC` becomes
     * `SELECT &#42; FROM Foo ORDER BY A DESC, __name__ DESC`
     * &#42; `SELECT &#42; FROM Foo WHERE A > 1` becomes
     * `SELECT &#42; FROM Foo WHERE A > 1 ORDER BY A, __name__`
     */
    orderBy?: firestore$Order[];

    /**
     * The projection to return.
     */
    select?: firestore$Projection;

    /**
     * A starting point for the query results.
     */
    startAt?: firestore$Cursor;

    /**
     * The filter to apply.
     */
    where?: firestore$Filter;
  }

  declare interface firestore$Target {
    /**
     * A target specified by a set of document names.
     */
    documents?: firestore$DocumentsTarget;

    /**
     * If the target should be removed once it is current and consistent.
     */
    once?: boolean;

    /**
     * A target specified by a query.
     */
    query?: firestore$QueryTarget;

    /**
     * Start listening after a specific `read_time`.
     *
     * The client must know the state of matching documents at this time.
     */
    readTime?: string;

    /**
     * A resume token from a prior TargetChange for an identical target.
     *
     * Using a resume token with a different target is unsupported and may fail.
     */
    resumeToken?: string;

    /**
     * A client provided target ID.
     *
     * If not set, the server will assign an ID for the target.
     *
     * Used for resuming a target without changing IDs. The IDs can either be
     * client-assigned or be server-assigned in a previous stream. All targets
     * with client provided IDs must be added before adding a target that needs
     * a server-assigned id.
     */
    targetId?: number;
  }

  declare interface firestore$TargetChange {
    /**
     * The error that resulted in this change, if applicable.
     */
    cause?: firestore$Status;

    /**
     * The consistent `read_time` for the given `target_ids` (omitted when the
     * target_ids are not at a consistent snapshot).
     *
     * The stream is guaranteed to send a `read_time` with `target_ids` empty
     * whenever the entire stream reaches a new consistent snapshot. ADD,
     * CURRENT, and RESET messages are guaranteed to (eventually) result in a
     * new consistent snapshot (while NO_CHANGE and REMOVE messages are not).
     *
     * For a given stream, `read_time` is guaranteed to be monotonically
     * increasing.
     */
    readTime?: string;

    /**
     * A token that can be used to resume the stream for the given `target_ids`,
     * or all targets if `target_ids` is empty.
     *
     * Not set on every target change.
     */
    resumeToken?: string;

    /**
     * The type of change that occurred.
     */
    targetChangeType?: string;

    /**
     * The target IDs of targets that have changed.
     *
     * If empty, the change applies to all targets.
     *
     * For `target_change_type=ADD`, the order of the target IDs matches the order
     * of the requests to add the targets. This allows clients to unambiguously
     * associate server-assigned target IDs with added targets.
     *
     * For other states, the order of the target IDs is not defined.
     */
    targetIds?: number[];
  }

  declare interface firestore$TransactionOptions {
    /**
     * The transaction can only be used for read operations.
     */
    readOnly?: firestore$ReadOnly;

    /**
     * The transaction can be used for both read and write operations.
     */
    readWrite?: firestore$ReadWrite;
  }

  declare interface firestore$UnaryFilter {
    /**
     * The field to which to apply the operator.
     */
    field?: firestore$FieldReference;

    /**
     * The unary operator to apply.
     */
    op?: string;
  }

  declare interface firestore$Value {
    /**
     * An array value.
     *
     * Cannot contain another array value.
     */
    arrayValue?: firestore$ArrayValue;

    /**
     * A boolean value.
     */
    booleanValue?: boolean;

    /**
     * A bytes value.
     *
     * Must not exceed 1 MiB - 89 bytes.
     * Only the first 1,500 bytes are considered by queries.
     */
    bytesValue?: string;

    /**
     * A double value.
     */
    doubleValue?: number;

    /**
     * A geo point value representing a point on the surface of Earth.
     */
    geoPointValue?: firestore$LatLng;

    /**
     * An integer value.
     */
    integerValue?: string;

    /**
     * A map value.
     */
    mapValue?: firestore$MapValue;

    /**
     * A null value.
     */
    nullValue?: string;

    /**
     * A reference to a document. For example:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    referenceValue?: string;

    /**
     * A string value.
     *
     * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
     * Only the first 1,500 bytes of the UTF-8 representation are considered by
     * queries.
     */
    stringValue?: string;

    /**
     * A timestamp value.
     *
     * Precise only to microseconds. When stored, any additional precision is
     * rounded down.
     */
    timestampValue?: string;
  }

  declare interface firestore$Write {
    /**
     * An optional precondition on the document.
     *
     * The write will fail if this is set and not met by the target document.
     */
    currentDocument?: firestore$Precondition;

    /**
     * A document name to delete. In the format:
     * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     */
    delete?: string;

    /**
     * Applies a tranformation to a document.
     * At most one `transform` per document is allowed in a given request.
     * An `update` cannot follow a `transform` on the same document in a given
     * request.
     */
    transform?: firestore$DocumentTransform;

    /**
     * A document to write.
     */
    update?: firestore$Document;

    /**
     * The fields to update in this write.
     *
     * This field can be set only when the operation is `update`.
     * None of the field paths in the mask may contain a reserved name.
     * If the document exists on the server and has fields not referenced in the
     * mask, they are left unchanged.
     * Fields referenced in the mask, but not present in the input document, are
     * deleted from the document on the server.
     * The field paths in this mask must not contain a reserved field name.
     */
    updateMask?: firestore$DocumentMask;
  }

  declare interface firestore$WriteRequest {
    /**
     * Labels associated with this write request.
     */
    labels?: Record<string, string>;

    /**
     * The ID of the write stream to resume.
     * This may only be set in the first message. When left empty, a new write
     * stream will be created.
     */
    streamId?: string;

    /**
     * A stream token that was previously sent by the server.
     *
     * The client should set this field to the token from the most recent
     * WriteResponse it has received. This acknowledges that the client has
     * received responses up to this token. After sending this token, earlier
     * tokens may not be used anymore.
     *
     * The server may close the stream if there are too many unacknowledged
     * responses.
     *
     * Leave this field unset when creating a new stream. To resume a stream at
     * a specific point, set this field and the `stream_id` field.
     *
     * Leave this field unset when creating a new stream.
     */
    streamToken?: string;

    /**
     * The writes to apply.
     *
     * Always executed atomically and in order.
     * This must be empty on the first request.
     * This may be empty on the last request.
     * This must not be empty on all other requests.
     */
    writes?: firestore$Write[];
  }

  declare interface firestore$WriteResponse {
    /**
     * The time at which the commit occurred.
     */
    commitTime?: string;

    /**
     * The ID of the stream.
     * Only set on the first message, when a new stream was created.
     */
    streamId?: string;

    /**
     * A token that represents the position of this response in the stream.
     * This can be used by a client to resume the stream at this point.
     *
     * This field is always set.
     */
    streamToken?: string;

    /**
     * The result of applying the writes.
     *
     * This i-th write result corresponds to the i-th write in the
     * request.
     */
    writeResults?: firestore$WriteResult[];
  }

  declare interface firestore$WriteResult {
    /**
     * The results of applying each DocumentTransform.FieldTransform, in the
     * same order.
     */
    transformResults?: firestore$Value[];

    /**
     * The last update time of the document after applying the write. Not set
     * after a `delete`.
     *
     * If the write did not actually change the document, this will be the
     * previous update_time.
     */
    updateTime?: string;
  }

  declare interface firestore$DocumentsResource {
    /**
     * Gets multiple documents.
     *
     * Documents returned by this method are not guaranteed to be returned in the
     * same order that they were requested.
     */
    batchGet(request: {
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
       * The database name. In the format:
       * `projects/{project_id}/databases/{database_id}`.
       */
      database: string,

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
    }): Request<firestore$BatchGetDocumentsResponse>;

    /**
     * Starts a new transaction.
     */
    beginTransaction(request: {
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
       * The database name. In the format:
       * `projects/{project_id}/databases/{database_id}`.
       */
      database: string,

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
    }): Request<firestore$BeginTransactionResponse>;

    /**
     * Commits a transaction, while optionally updating documents.
     */
    commit(request: {
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
       * The database name. In the format:
       * `projects/{project_id}/databases/{database_id}`.
       */
      database: string,

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
    }): Request<firestore$CommitResponse>;

    /**
     * Creates a new document.
     */
    createDocument(request: {
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
       * The collection ID, relative to `parent`, to list. For example: `chatrooms`.
       */
      collectionId: string,

      /**
       * The client-assigned document ID to use for this document.
       *
       * Optional. If not specified, an ID will be assigned by the service.
       */
      documentId?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The list of field paths in the mask. See Document.fields for a field
       * path syntax reference.
       */
      "mask.fieldPaths"?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The parent resource. For example:
       * `projects/{project_id}/databases/{database_id}/documents` or
       * `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
       */
      parent: string,

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
    }): Request<firestore$Document>;

    /**
     * Deletes a document.
     */
    delete(request: {
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
       * When set to `true`, the target document must exist.
       * When set to `false`, the target document must not exist.
       */
      "currentDocument.exists"?: boolean,

      /**
       * When set, the target document must exist and have been last updated at
       * that time.
       */
      "currentDocument.updateTime"?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The resource name of the Document to delete. In the format:
       * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
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
    }): Request<{}>;

    /**
     * Gets a single document.
     */
    get(request: {
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
       * The list of field paths in the mask. See Document.fields for a field
       * path syntax reference.
       */
      "mask.fieldPaths"?: string,

      /**
       * The resource name of the Document to get. In the format:
       * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
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
       * Reads the version of the document at the given time.
       * This may not be older than 60 seconds.
       */
      readTime?: string,

      /**
       * Reads the document in a transaction.
       */
      transaction?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<firestore$Document>;

    /**
     * Lists documents.
     */
    list(request: {
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
       * The collection ID, relative to `parent`, to list. For example: `chatrooms`
       * or `messages`.
       */
      collectionId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The list of field paths in the mask. See Document.fields for a field
       * path syntax reference.
       */
      "mask.fieldPaths"?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The order to sort results by. For example: `priority desc, name`.
       */
      orderBy?: string,

      /**
       * The maximum number of documents to return.
       */
      pageSize?: number,

      /**
       * The `next_page_token` value returned from a previous List request, if any.
       */
      pageToken?: string,

      /**
       * The parent resource name. In the format:
       * `projects/{project_id}/databases/{database_id}/documents` or
       * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
       * For example:
       * `projects/my-project/databases/my-database/documents` or
       * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
       */
      parent: string,

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
       * Reads documents as they were at the given time.
       * This may not be older than 60 seconds.
       */
      readTime?: string,

      /**
       * If the list should show missing documents. A missing document is a
       * document that does not exist but has sub-documents. These documents will
       * be returned with a key but will not have fields, Document.create_time,
       * or Document.update_time set.
       *
       * Requests with `show_missing` may not specify `where` or
       * `order_by`.
       */
      showMissing?: boolean,

      /**
       * Reads documents in a transaction.
       */
      transaction?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<firestore$ListDocumentsResponse>;

    /**
     * Lists all the collection IDs underneath a document.
     */
    listCollectionIds(request: {
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
       * The maximum number of results to return.
       */
      pageSize?: number,

      /**
       * A page token. Must be a value from
       * ListCollectionIdsResponse.
       */
      pageToken?: string,

      /**
       * The parent document. In the format:
       * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
       * For example:
       * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
       */
      parent: string,

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
    }): Request<firestore$ListCollectionIdsResponse>;

    /**
     * Listens to changes.
     */
    listen(request: {
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
       * The database name. In the format:
       * `projects/{project_id}/databases/{database_id}`.
       */
      database: string,

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
    }): Request<firestore$ListenResponse>;

    /**
     * Updates or inserts a document.
     */
    patch(request: {
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
       * When set to `true`, the target document must exist.
       * When set to `false`, the target document must not exist.
       */
      "currentDocument.exists"?: boolean,

      /**
       * When set, the target document must exist and have been last updated at
       * that time.
       */
      "currentDocument.updateTime"?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The list of field paths in the mask. See Document.fields for a field
       * path syntax reference.
       */
      "mask.fieldPaths"?: string,

      /**
       * The resource name of the document, for example
       * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
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
       * The list of field paths in the mask. See Document.fields for a field
       * path syntax reference.
       */
      "updateMask.fieldPaths"?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<firestore$Document>;

    /**
     * Rolls back a transaction.
     */
    rollback(request: {
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
       * The database name. In the format:
       * `projects/{project_id}/databases/{database_id}`.
       */
      database: string,

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
    }): Request<{}>;

    /**
     * Runs a query.
     */
    runQuery(request: {
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
       * The parent resource name. In the format:
       * `projects/{project_id}/databases/{database_id}/documents` or
       * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
       * For example:
       * `projects/my-project/databases/my-database/documents` or
       * `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
       */
      parent: string,

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
    }): Request<firestore$RunQueryResponse>;

    /**
     * Streams batches of document updates and deletes, in order.
     */
    write(request: {
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
       * The database name. In the format:
       * `projects/{project_id}/databases/{database_id}`.
       * This is only required in the first message.
       */
      database: string,

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
    }): Request<firestore$WriteResponse>;
  }

  declare interface firestore$IndexesResource {
    /**
     * Creates the specified index.
     * A newly created index's initial state is `CREATING`. On completion of the
     * returned google.longrunning.Operation, the state will be `READY`.
     * If the index already exists, the call will return an `ALREADY_EXISTS`
     * status.
     *
     * During creation, the process could result in an error, in which case the
     * index will move to the `ERROR` state. The process can be recovered by
     * fixing the data that caused the error, removing the index with
     * delete, then re-creating the index with
     * create.
     *
     * Indexes with a single field cannot be created.
     */
    create(request: {
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
       * The name of the database this index will apply to. For example:
       * `projects/{project_id}/databases/{database_id}`
       */
      parent: string,

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
    }): Request<firestore$Operation>;

    /**
     * Deletes an index.
     */
    delete(request: {
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
       * The index name. For example:
       * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
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
    }): Request<{}>;

    /**
     * Gets an index.
     */
    get(request: {
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
       * The name of the index. For example:
       * `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
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
    }): Request<firestore$Index>;

    /**
     * Lists the indexes that match the specified filters.
     */
    list(request: {
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
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The standard List page size.
       */
      pageSize?: number,

      /**
       * The standard List page token.
       */
      pageToken?: string,

      /**
       * The database name. For example:
       * `projects/{project_id}/databases/{database_id}`
       */
      parent: string,

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
    }): Request<firestore$ListIndexesResponse>;
  }

  declare interface firestore$DatabasesResource {
    documents: firestore$DocumentsResource;
    indexes: firestore$IndexesResource;
  }

  declare interface firestore$ProjectsResource {
    databases: firestore$DatabasesResource;
  }
}
