declare module "gapi.client.spanner" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Cloud Spanner API v1
   */
  declare function gapi$client$load(
    name: "spanner",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "spanner",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: spanner$ProjectsResource;

  declare interface gapi$client$spanner$BeginTransactionRequest {
    /**
     * Required. Options for the new transaction.
     */
    options?: spanner$TransactionOptions;
  }

  declare interface gapi$client$spanner$Binding {
    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:
     *
     * &#42; `allUsers`: A special identifier that represents anyone who is
     * on the internet; with or without a Google account.
     *
     * &#42; `allAuthenticatedUsers`: A special identifier that represents anyone
     * who is authenticated with a Google account or a service account.
     *
     * &#42; `user:{emailid}`: An email address that represents a specific Google
     * account. For example, `alice@gmail.com` or `joe@example.com`.
     *
     *
     * &#42; `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.
     *
     * &#42; `group:{emailid}`: An email address that represents a Google group.
     * For example, `admins@example.com`.
     *
     *
     * &#42; `domain:{domain}`: A Google Apps domain name that represents all the
     * users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];

    /**
     * Role that is assigned to `members`.
     * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     * Required
     */
    role?: string;
  }

  declare interface gapi$client$spanner$ChildLink {
    /**
     * The node to which the link points.
     */
    childIndex?: number;

    /**
     * The type of the link. For example, in Hash Joins this could be used to
     * distinguish between the build child and the probe child, or in the case
     * of the child being an output variable, to represent the tag associated
     * with the output variable.
     */
    type?: string;

    /**
     * Only present if the child node is SCALAR and corresponds
     * to an output variable of the parent node. The field carries the name of
     * the output variable.
     * For example, a `TableScan` operator that reads rows from a table will
     * have child links to the `SCALAR` nodes representing the output variables
     * created for each column that is read by the operator. The corresponding
     * `variable` fields will be set to the variable names assigned to the
     * columns.
     */
    variable?: string;
  }

  declare interface gapi$client$spanner$CommitRequest {
    /**
     * The mutations to be executed when this transaction commits. All
     * mutations are applied atomically, in the order they appear in
     * this list.
     */
    mutations?: spanner$Mutation[];

    /**
     * Execute mutations in a temporary transaction. Note that unlike
     * commit of a previously-started transaction, commit with a
     * temporary transaction is non-idempotent. That is, if the
     * `CommitRequest` is sent to Cloud Spanner more than once (for
     * instance, due to retries in the application, or in the
     * transport library), it is possible that the mutations are
     * executed more than once. If this is undesirable, use
     * BeginTransaction and
     * Commit instead.
     */
    singleUseTransaction?: spanner$TransactionOptions;

    /**
     * Commit a previously-started transaction.
     */
    transactionId?: string;
  }

  declare interface gapi$client$spanner$CommitResponse {
    /**
     * The Cloud Spanner timestamp at which the transaction committed.
     */
    commitTimestamp?: string;
  }

  declare interface gapi$client$spanner$CreateDatabaseMetadata {
    /**
     * The database being created.
     */
    database?: string;
  }

  declare interface gapi$client$spanner$CreateDatabaseRequest {
    /**
     * Required. A `CREATE DATABASE` statement, which specifies the ID of the
     * new database.  The database ID must conform to the regular expression
     * `a-z&#42;[a-z0-9]` and be between 2 and 30 characters in length.
     * If the database ID is a reserved word or if it contains a hyphen, the
     * database ID must be enclosed in backticks (`` ` ``).
     *              *
     */
    createStatement?: string;

    /**
     * An optional list of DDL statements to run inside the newly created
     * database. Statements can create tables, indexes, etc. These
     * statements execute atomically with the creation of the database:
     * if there is an error in any statement, the database is not created.
     */
    extraStatements?: string[];
  }

  declare interface gapi$client$spanner$CreateInstanceMetadata {
    /**
     * The time at which this operation was cancelled. If set, this operation is
     * in the process of undoing itself (which is guaranteed to succeed) and
     * cannot be cancelled again.
     */
    cancelTime?: string;

    /**
     * The time at which this operation failed or was completed successfully.
     */
    endTime?: string;

    /**
     * The instance being created.
     */
    instance?: spanner$Instance;

    /**
     * The time at which the
     * CreateInstance request was
     * received.
     */
    startTime?: string;
  }

  declare interface gapi$client$spanner$CreateInstanceRequest {
    /**
     * Required. The instance to create.  The name may be omitted, but if
     * specified must be `<parent>/instances/<instance_id>`.
     */
    instance?: spanner$Instance;

    /**
     * Required. The ID of the instance to create.  Valid identifiers are of the
     * form `a-z&#42;[a-z0-9]` and must be between 6 and 30 characters in
     * length.
     */
    instanceId?: string;
  }

  declare interface gapi$client$spanner$CreateSessionRequest {
    /**
     * The session to create.
     */
    session?: spanner$Session;
  }

  declare interface gapi$client$spanner$Database {
    /**
     * Required. The name of the database. Values are of the form
     * `projects/<project>/instances/<instance>/databases/<database>`,
     * where `<database>` is as specified in the `CREATE DATABASE`
     * statement. This name can be passed to other API methods to
     * identify the database.
     */
    name?: string;

    /**
     * Output only. The current database state.
     */
    state?: string;
  }

  declare interface gapi$client$spanner$Delete {
    /**
     * Required. The primary keys of the rows within table to delete.
     */
    keySet?: spanner$KeySet;

    /**
     * Required. The table whose rows will be deleted.
     */
    table?: string;
  }

  declare interface gapi$client$spanner$ExecuteSqlRequest {
    /**
     * It is not always possible for Cloud Spanner to infer the right SQL type
     * from a JSON value.  For example, values of type `BYTES` and values
     * of type `STRING` both appear in params as JSON strings.
     *
     * In these cases, `param_types` can be used to specify the exact
     * SQL type for some or all of the SQL query parameters. See the
     * definition of Type for more information
     * about SQL types.
     */
    paramTypes?: Record<string, spanner$Type>;

    /**
     * The SQL query string can contain parameter placeholders. A parameter
     * placeholder consists of `'@'` followed by the parameter
     * name. Parameter names consist of any combination of letters,
     * numbers, and underscores.
     *
     * Parameters can appear anywhere that a literal value is expected.  The same
     * parameter name can be used more than once, for example:
     * `"WHERE id > @msg_id AND id < @msg_id + 100"`
     *
     * It is an error to execute an SQL query with unbound parameters.
     *
     * Parameter values are specified using `params`, which is a JSON
     * object whose keys are parameter names, and whose values are the
     * corresponding parameter values.
     */
    params?: Record<string, any>;

    /**
     * Used to control the amount of debugging information returned in
     * ResultSetStats.
     */
    queryMode?: string;

    /**
     * If this request is resuming a previously interrupted SQL query
     * execution, `resume_token` should be copied from the last
     * PartialResultSet yielded before the interruption. Doing this
     * enables the new SQL query execution to resume where the last one left
     * off. The rest of the request parameters must exactly match the
     * request that yielded this token.
     */
    resumeToken?: string;

    /**
     * Required. The SQL query string.
     */
    sql?: string;

    /**
     * The transaction to use. If none is provided, the default is a
     * temporary read-only transaction with strong concurrency.
     */
    transaction?: spanner$TransactionSelector;
  }

  declare interface gapi$client$spanner$Field {
    /**
     * The name of the field. For reads, this is the column name. For
     * SQL queries, it is the column alias (e.g., `"Word"` in the
     * query `"SELECT 'hello' AS Word"`), or the column name (e.g.,
     * `"ColName"` in the query `"SELECT ColName FROM Table"`). Some
     * columns might have an empty name (e.g., !"SELECT
     * UPPER(ColName)"`). Note that a query result can contain
     *              * multiple fields with the same name.
     *              *
     */
    name?: string;

    /**
     * The type of the field.
     */
    type?: spanner$Type;
  }

  declare interface gapi$client$spanner$GetDatabaseDdlResponse {
    /**
     * A list of formatted DDL statements defining the schema of the database
     * specified in the request.
     */
    statements?: string[];
  }

  declare interface gapi$client$spanner$Instance {
    /**
     * Required. The name of the instance's configuration. Values are of the form
     * `projects/<project>/instanceConfigs/<configuration>`. See
     * also InstanceConfig and
     * ListInstanceConfigs.
     */
    config?: string;

    /**
     * Required. The descriptive name for this instance as it appears in UIs.
     * Must be unique per project and between 4 and 30 characters in length.
     */
    displayName?: string;

    /**
     * Cloud Labels are a flexible and lightweight mechanism for organizing cloud
     * resources into groups that reflect a customer's organizational needs and
     * deployment strategies. Cloud Labels can be used to filter collections of
     * resources. They can be used to control how resource metrics are aggregated.
     * And they can be used as arguments to policy management rules (e.g. route,
     * firewall, load balancing, etc.).
     *
     * &#42; Label keys must be between 1 and 63 characters long and must conform to
     * the following regular expression: `[a-z]([-a-z0-9]&#42;[a-z0-9])?`.
     * &#42; Label values must be between 0 and 63 characters long and must conform
     * to the regular expression `([a-z]([-a-z0-9]&#42;[a-z0-9])?)?`.
     * &#42; No more than 64 labels can be associated with a given resource.
     *
     * See https://goo.gl/xmQnxf for more information on and examples of labels.
     *
     * If you plan to use labels in your own code, please note that additional
     * characters may be allowed in the future. And so you are advised to use an
     * internal label representation, such as JSON, which doesn't rely upon
     * specific characters being disallowed.  For example, representing labels
     * as the string:  name + "_" + value  would prove problematic if we were to
     * allow "_" in a future release.
     */
    labels?: Record<string, string>;

    /**
     * Required. A unique identifier for the instance, which cannot be changed
     * after the instance is created. Values are of the form
     * `projects/<project>/instances/a-z&#42;[a-z0-9]`. The final
     * segment of the name must be between 6 and 30 characters in length.
     */
    name?: string;

    /**
     * Required. The number of nodes allocated to this instance. This may be zero
     * in API responses for instances that are not yet in state `READY`.
     *
     * Each Spanner node can provide up to 10,000 QPS of reads or 2000 QPS of
     * writes (writing single rows at 1KB data per row), and 2 TiB storage.
     *
     * For optimal performance, we recommend provisioning enough nodes to keep
     * overall CPU utilization under 75%.
     *
     * A minimum of 3 nodes is recommended for production environments.  This
     * minimum is required for SLAs to apply to your instance.
     *
     * Note that Cloud Spanner performance is highly dependent on workload, schema
     * design, and dataset characteristics. The performance numbers above are
     * estimates, and assume [best practices](https://cloud.google.com/spanner/docs/bulk-loading)
     * are followed.
     */
    nodeCount?: number;

    /**
     * Output only. The current instance state. For
     * CreateInstance, the state must be
     * either omitted or set to `CREATING`. For
     * UpdateInstance, the state must be
     * either omitted or set to `READY`.
     */
    state?: string;
  }

  declare interface gapi$client$spanner$InstanceConfig {
    /**
     * The name of this instance configuration as it appears in UIs.
     */
    displayName?: string;

    /**
     * A unique identifier for the instance configuration.  Values
     * are of the form
     * `projects/<project>/instanceConfigs/a-z&#42;`
     */
    name?: string;
  }

  declare interface gapi$client$spanner$KeyRange {
    /**
     * If the end is closed, then the range includes all rows whose
     * first `len(end_closed)` key columns exactly match `end_closed`.
     */
    endClosed?: any[];

    /**
     * If the end is open, then the range excludes rows whose first
     * `len(end_open)` key columns exactly match `end_open`.
     */
    endOpen?: any[];

    /**
     * If the start is closed, then the range includes all rows whose
     * first `len(start_closed)` key columns exactly match `start_closed`.
     */
    startClosed?: any[];

    /**
     * If the start is open, then the range excludes rows whose first
     * `len(start_open)` key columns exactly match `start_open`.
     */
    startOpen?: any[];
  }

  declare interface gapi$client$spanner$KeySet {
    /**
     * For convenience `all` can be set to `true` to indicate that this
     * `KeySet` matches all keys in the table or index. Note that any keys
     * specified in `keys` or `ranges` are only yielded once.
     */
    all?: boolean;

    /**
     * A list of specific keys. Entries in `keys` should have exactly as
     * many elements as there are columns in the primary or index key
     * with which this `KeySet` is used.  Individual key values are
     * encoded as described here.
     */
    keys?: any[][];

    /**
     * A list of key ranges. See KeyRange for more information about
     * key range specifications.
     */
    ranges?: gapi$client$spanner$KeyRange[];
  }

  declare interface gapi$client$spanner$ListDatabasesResponse {
    /**
     * Databases that matched the request.
     */
    databases?: gapi$client$spanner$Database[];

    /**
     * `next_page_token` can be sent in a subsequent
     * ListDatabases call to fetch more
     * of the matching databases.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$spanner$ListInstanceConfigsResponse {
    /**
     * The list of requested instance configurations.
     */
    instanceConfigs?: gapi$client$spanner$InstanceConfig[];

    /**
     * `next_page_token` can be sent in a subsequent
     * ListInstanceConfigs call to
     * fetch more of the matching instance configurations.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$spanner$ListInstancesResponse {
    /**
     * The list of requested instances.
     */
    instances?: gapi$client$spanner$Instance[];

    /**
     * `next_page_token` can be sent in a subsequent
     * ListInstances call to fetch more
     * of the matching instances.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$spanner$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;

    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: spanner$Operation[];
  }

  declare interface gapi$client$spanner$ListSessionsResponse {
    /**
     * `next_page_token` can be sent in a subsequent
     * ListSessions call to fetch more of the matching
     * sessions.
     */
    nextPageToken?: string;

    /**
     * The list of requested sessions.
     */
    sessions?: spanner$Session[];
  }

  declare interface gapi$client$spanner$Mutation {
    /**
     * Delete rows from a table. Succeeds whether or not the named
     * rows were present.
     */
    delete?: gapi$client$spanner$Delete;

    /**
     * Insert new rows in a table. If any of the rows already exist,
     * the write or transaction fails with error `ALREADY_EXISTS`.
     */
    insert?: spanner$Write;

    /**
     * Like insert, except that if the row already exists, then
     * its column values are overwritten with the ones provided. Any
     * column values not explicitly written are preserved.
     */
    insertOrUpdate?: spanner$Write;

    /**
     * Like insert, except that if the row already exists, it is
     * deleted, and the column values provided are inserted
     * instead. Unlike insert_or_update, this means any values not
     * explicitly written become `NULL`.
     */
    replace?: spanner$Write;

    /**
     * Update existing rows in a table. If any of the rows does not
     * already exist, the transaction fails with error `NOT_FOUND`.
     */
    update?: spanner$Write;
  }

  declare interface gapi$client$spanner$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: spanner$Status;

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

  declare interface gapi$client$spanner$PartialResultSet {
    /**
     * If true, then the final value in values is chunked, and must
     * be combined with more values from subsequent `PartialResultSet`s
     * to obtain a complete field value.
     */
    chunkedValue?: boolean;

    /**
     * Metadata about the result set, such as row type information.
     * Only present in the first response.
     */
    metadata?: spanner$ResultSetMetadata;

    /**
     * Streaming calls might be interrupted for a variety of reasons, such
     * as TCP connection loss. If this occurs, the stream of results can
     * be resumed by re-sending the original request and including
     * `resume_token`. Note that executing any other transaction in the
     * same session invalidates the token.
     */
    resumeToken?: string;

    /**
     * Query plan and execution statistics for the query that produced this
     * streaming result set. These can be requested by setting
     * ExecuteSqlRequest.query_mode and are sent
     * only once with the last response in the stream.
     */
    stats?: spanner$ResultSetStats;

    /**
     * A streamed result set consists of a stream of values, which might
     * be split into many `PartialResultSet` messages to accommodate
     * large rows and/or large values. Every N complete values defines a
     * row, where N is equal to the number of entries in
     * metadata.row_type.fields.
     *
     * Most values are encoded based on type as described
     * here.
     *
     * It is possible that the last value in values is "chunked",
     * meaning that the rest of the value is sent in subsequent
     * `PartialResultSet`(s). This is denoted by the chunked_value
     * field. Two or more chunked values can be merged to form a
     * complete value as follows:
     *
     * &#42; `bool/number/null`: cannot be chunked
     * &#42; `string`: concatenate the strings
     * &#42; `list`: concatenate the lists. If the last element in a list is a
     * `string`, `list`, or `object`, merge it with the first element in
     * the next list by applying these rules recursively.
     * &#42; `object`: concatenate the (field name, field value) pairs. If a
     * field name is duplicated, then apply these rules recursively
     * to merge the field values.
     *
     * Some examples of merging:
     *
     * # Strings are concatenated.
     * "foo", "bar" => "foobar"
     *
     * # Lists of non-strings are concatenated.
     * [2, 3], [4] => [2, 3, 4]
     *
     * # Lists are concatenated, but the last and first elements are merged
     * # because they are strings.
     * ["a", "b"], ["c", "d"] => ["a", "bc", "d"]
     *
     * # Lists are concatenated, but the last and first elements are merged
     * # because they are lists. Recursively, the last and first elements
     * # of the inner lists are merged because they are strings.
     * ["a", ["b", "c"]], [["d"], "e"] => ["a", ["b", "cd"], "e"]
     *
     * # Non-overlapping object fields are combined.
     * {"a": "1"}, {"b": "2"} => {"a": "1", "b": 2"}
     *
     * # Overlapping object fields are merged.
     * {"a": "1"}, {"a": "2"} => {"a": "12"}
     *
     * # Examples of merging objects containing lists of strings.
     * {"a": ["1"]}, {"a": ["2"]} => {"a": ["12"]}
     *
     * For a more complete example, suppose a streaming SQL query is
     * yielding a result set whose rows contain a single string
     * field. The following `PartialResultSet`s might be yielded:
     *
     * {
     * "metadata": { ... }
     * "values": ["Hello", "W"]
     * "chunked_value": true
     * "resume_token": "Af65..."
     * }
     * {
     * "values": ["orl"]
     * "chunked_value": true
     * "resume_token": "Bqp2..."
     * }
     * {
     * "values": ["d"]
     * "resume_token": "Zx1B..."
     * }
     *
     * This sequence of `PartialResultSet`s encodes two rows, one
     * containing the field value `"Hello"`, and a second containing the
     * field value `"World" = "W" + "orl" + "d"`.
     */
    values?: any[];
  }

  declare interface gapi$client$spanner$PlanNode {
    /**
     * List of child node `index`es and their relationship to this parent.
     */
    childLinks?: gapi$client$spanner$ChildLink[];

    /**
     * The display name for the node.
     */
    displayName?: string;

    /**
     * The execution statistics associated with the node, contained in a group of
     * key-value pairs. Only present if the plan was returned as a result of a
     * profile query. For example, number of executions, number of rows/time per
     * execution etc.
     */
    executionStats?: Record<string, any>;

    /**
     * The `PlanNode`'s index in node list.
     */
    index?: number;

    /**
     * Used to determine the type of node. May be needed for visualizing
     * different kinds of nodes differently. For example, If the node is a
     * SCALAR node, it will have a condensed representation
     * which can be used to directly embed a description of the node in its
     * parent.
     */
    kind?: string;

    /**
     * Attributes relevant to the node contained in a group of key-value pairs.
     * For example, a Parameter Reference node could have the following
     * information in its metadata:
     *
     * {
     * "parameter_reference": "param1",
     * "parameter_type": "array"
     * }
     */
    metadata?: Record<string, any>;

    /**
     * Condensed representation for SCALAR nodes.
     */
    shortRepresentation?: spanner$ShortRepresentation;
  }

  declare interface gapi$client$spanner$Policy {
    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$spanner$Binding[];

    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other.
     * It is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the policy.
     *
     * If no `etag` is provided in the call to `setIamPolicy`, then the existing
     * policy is overwritten blindly.
     */
    etag?: string;

    /**
     * Version of the `Policy`. The default version is 0.
     */
    version?: number;
  }

  declare interface gapi$client$spanner$QueryPlan {
    /**
     * The nodes in the query plan. Plan nodes are returned in pre-order starting
     * with the plan root. Each PlanNode's `id` corresponds to its index in
     * `plan_nodes`.
     */
    planNodes?: gapi$client$spanner$PlanNode[];
  }

  declare interface gapi$client$spanner$ReadOnly {
    /**
     * Executes all reads at a timestamp that is `exact_staleness`
     * old. The timestamp is chosen soon after the read is started.
     *
     * Guarantees that all writes that have committed more than the
     * specified number of seconds ago are visible. Because Cloud Spanner
     * chooses the exact timestamp, this mode works even if the client's
     * local clock is substantially skewed from Cloud Spanner commit
     * timestamps.
     *
     * Useful for reading at nearby replicas without the distributed
     * timestamp negotiation overhead of `max_staleness`.
     */
    exactStaleness?: string;

    /**
     * Read data at a timestamp >= `NOW - max_staleness`
     * seconds. Guarantees that all writes that have committed more
     * than the specified number of seconds ago are visible. Because
     * Cloud Spanner chooses the exact timestamp, this mode works even if
     * the client's local clock is substantially skewed from Cloud Spanner
     * commit timestamps.
     *
     * Useful for reading the freshest data available at a nearby
     * replica, while bounding the possible staleness if the local
     * replica has fallen behind.
     *
     * Note that this option can only be used in single-use
     * transactions.
     */
    maxStaleness?: string;

    /**
     * Executes all reads at a timestamp >= `min_read_timestamp`.
     *
     * This is useful for requesting fresher data than some previous
     * read, or data that is fresh enough to observe the effects of some
     * previously committed transaction whose timestamp is known.
     *
     * Note that this option can only be used in single-use transactions.
     */
    minReadTimestamp?: string;

    /**
     * Executes all reads at the given timestamp. Unlike other modes,
     * reads at a specific timestamp are repeatable; the same read at
     * the same timestamp always returns the same data. If the
     * timestamp is in the future, the read will block until the
     * specified timestamp, modulo the read's deadline.
     *
     * Useful for large scale consistent reads such as mapreduces, or
     * for coordinating many reads against a consistent snapshot of the
     * data.
     */
    readTimestamp?: string;

    /**
     * If true, the Cloud Spanner-selected read timestamp is included in
     * the Transaction message that describes the transaction.
     */
    returnReadTimestamp?: boolean;

    /**
     * Read at a timestamp where all previously committed transactions
     * are visible.
     */
    strong?: boolean;
  }

  declare interface gapi$client$spanner$ReadRequest {
    /**
     * The columns of table to be returned for each row matching
     * this request.
     */
    columns?: string[];

    /**
     * If non-empty, the name of an index on table. This index is
     * used instead of the table primary key when interpreting key_set
     * and sorting result rows. See key_set for further information.
     */
    index?: string;

    /**
     * Required. `key_set` identifies the rows to be yielded. `key_set` names the
     * primary keys of the rows in table to be yielded, unless index
     * is present. If index is present, then key_set instead names
     * index keys in index.
     *
     * Rows are yielded in table primary key order (if index is empty)
     * or index key order (if index is non-empty).
     *
     * It is not an error for the `key_set` to name rows that do not
     * exist in the database. Read yields nothing for nonexistent rows.
     */
    keySet?: gapi$client$spanner$KeySet;

    /**
     * If greater than zero, only the first `limit` rows are yielded. If `limit`
     * is zero, the default is no limit.
     * A limit cannot be specified if partition_token is set.
     */
    limit?: string;

    /**
     * If this request is resuming a previously interrupted read,
     * `resume_token` should be copied from the last
     * PartialResultSet yielded before the interruption. Doing this
     * enables the new read to resume where the last read left off. The
     * rest of the request parameters must exactly match the request
     * that yielded this token.
     */
    resumeToken?: string;

    /**
     * Required. The name of the table in the database to be read.
     */
    table?: string;

    /**
     * The transaction to use. If none is provided, the default is a
     * temporary read-only transaction with strong concurrency.
     */
    transaction?: spanner$TransactionSelector;
  }

  declare interface gapi$client$spanner$ResultSet {
    /**
     * Metadata about the result set, such as row type information.
     */
    metadata?: spanner$ResultSetMetadata;

    /**
     * Each element in `rows` is a row whose format is defined by
     * metadata.row_type. The ith element
     * in each row matches the ith field in
     * metadata.row_type. Elements are
     * encoded based on type as described
     * here.
     */
    rows?: any[][];

    /**
     * Query plan and execution statistics for the query that produced this
     * result set. These can be requested by setting
     * ExecuteSqlRequest.query_mode.
     */
    stats?: spanner$ResultSetStats;
  }

  declare interface gapi$client$spanner$ResultSetMetadata {
    /**
     * Indicates the field names and types for the rows in the result
     * set.  For example, a SQL query like `"SELECT UserId, UserName FROM
     *              * Users"` could return a `row_type` value like:
     *
     * "fields": [
     * { "name": "UserId", "type": { "code": "INT64" } },
     * { "name": "UserName", "type": { "code": "STRING" } },
     * ]
     */
    rowType?: spanner$StructType;

    /**
     * If the read or SQL query began a transaction as a side-effect, the
     * information about the new transaction is yielded here.
     */
    transaction?: spanner$Transaction;
  }

  declare interface gapi$client$spanner$ResultSetStats {
    /**
     * QueryPlan for the query associated with this result.
     */
    queryPlan?: gapi$client$spanner$QueryPlan;

    /**
     * Aggregated statistics from the execution of the query. Only present when
     * the query is profiled. For example, a query could return the statistics as
     * follows:
     *
     * {
     * "rows_returned": "3",
     * "elapsed_time": "1.22 secs",
     * "cpu_time": "1.19 secs"
     * }
     */
    queryStats?: Record<string, any>;
  }

  declare interface gapi$client$spanner$RollbackRequest {
    /**
     * Required. The transaction to roll back.
     */
    transactionId?: string;
  }

  declare interface gapi$client$spanner$Session {
    /**
     * Output only. The approximate timestamp when the session is last used. It is
     * typically earlier than the actual last use time.
     */
    approximateLastUseTime?: string;

    /**
     * Output only. The timestamp when the session is created.
     */
    createTime?: string;

    /**
     * The labels for the session.
     *
     * &#42; Label keys must be between 1 and 63 characters long and must conform to
     * the following regular expression: `[a-z]([-a-z0-9]&#42;[a-z0-9])?`.
     * &#42; Label values must be between 0 and 63 characters long and must conform
     * to the regular expression `([a-z]([-a-z0-9]&#42;[a-z0-9])?)?`.
     * &#42; No more than 20 labels can be associated with a given session.
     */
    labels?: Record<string, string>;

    /**
     * The name of the session.
     */
    name?: string;
  }

  declare interface gapi$client$spanner$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: gapi$client$spanner$Policy;
  }

  declare interface gapi$client$spanner$ShortRepresentation {
    /**
     * A string representation of the expression subtree rooted at this node.
     */
    description?: string;

    /**
     * A mapping of (subquery variable name) -> (subquery node id) for cases
     * where the `description` string of this node references a `SCALAR`
     * subquery contained in the expression subtree rooted at this node. The
     * referenced `SCALAR` subquery may not necessarily be a direct child of
     * this node.
     */
    subqueries?: Record<string, number>;
  }

  declare interface gapi$client$spanner$Status {
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

  declare interface gapi$client$spanner$StructType {
    /**
     * The list of fields that make up this struct. Order is
     * significant, because values of this struct type are represented as
     * lists, where the order of field values matches the order of
     * fields in the StructType. In turn, the order of fields
     * matches the order of columns in a read request, or the order of
     * fields in the `SELECT` clause of a query.
     */
    fields?: gapi$client$spanner$Field[];
  }

  declare interface gapi$client$spanner$TestIamPermissionsRequest {
    /**
     * REQUIRED: The set of permissions to check for 'resource'.
     * Permissions with wildcards (such as '&#42;', 'spanner.&#42;', 'spanner.instances.&#42;') are not allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$spanner$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$spanner$Transaction {
    /**
     * `id` may be used to identify the transaction in subsequent
     * Read,
     * ExecuteSql,
     * Commit, or
     * Rollback calls.
     *
     * Single-use read-only transactions do not have IDs, because
     * single-use transactions do not support multiple requests.
     */
    id?: string;

    /**
     * For snapshot read-only transactions, the read timestamp chosen
     * for the transaction. Not returned by default: see
     * TransactionOptions.ReadOnly.return_read_timestamp.
     */
    readTimestamp?: string;
  }

  declare interface gapi$client$spanner$TransactionOptions {
    /**
     * Transaction will not write.
     *
     * Authorization to begin a read-only transaction requires
     * `spanner.databases.beginReadOnlyTransaction` permission
     * on the `session` resource.
     */
    readOnly?: gapi$client$spanner$ReadOnly;

    /**
     * Transaction may write.
     *
     * Authorization to begin a read-write transaction requires
     * `spanner.databases.beginOrRollbackReadWriteTransaction` permission
     * on the `session` resource.
     */
    readWrite?: any;
  }

  declare interface gapi$client$spanner$TransactionSelector {
    /**
     * Begin a new transaction and execute this read or SQL query in
     * it. The transaction ID of the new transaction is returned in
     * ResultSetMetadata.transaction, which is a Transaction.
     */
    begin?: gapi$client$spanner$TransactionOptions;

    /**
     * Execute the read or SQL query in a previously-started transaction.
     */
    id?: string;

    /**
     * Execute the read or SQL query in a temporary transaction.
     * This is the most efficient way to execute a transaction that
     * consists of a single SQL query.
     */
    singleUse?: gapi$client$spanner$TransactionOptions;
  }

  declare interface gapi$client$spanner$Type {
    /**
     * If code == ARRAY, then `array_element_type`
     * is the type of the array elements.
     */
    arrayElementType?: gapi$client$spanner$Type;

    /**
     * Required. The TypeCode for this type.
     */
    code?: string;

    /**
     * If code == STRUCT, then `struct_type`
     * provides type information for the struct's fields.
     */
    structType?: gapi$client$spanner$StructType;
  }

  declare interface gapi$client$spanner$UpdateDatabaseDdlMetadata {
    /**
     * Reports the commit timestamps of all statements that have
     * succeeded so far, where `commit_timestamps[i]` is the commit
     * timestamp for the statement `statements[i]`.
     */
    commitTimestamps?: string[];

    /**
     * The database being modified.
     */
    database?: string;

    /**
     * For an update this list contains all the statements. For an
     * individual statement, this list contains only that statement.
     */
    statements?: string[];
  }

  declare interface gapi$client$spanner$UpdateDatabaseDdlRequest {
    /**
     * If empty, the new update request is assigned an
     * automatically-generated operation ID. Otherwise, `operation_id`
     * is used to construct the name of the resulting
     * Operation.
     *
     * Specifying an explicit operation ID simplifies determining
     * whether the statements were executed in the event that the
     * UpdateDatabaseDdl call is replayed,
     * or the return value is otherwise lost: the database and
     * `operation_id` fields can be combined to form the
     * name of the resulting
     * longrunning.Operation: `<database>/operations/<operation_id>`.
     *
     * `operation_id` should be unique within the database, and must be
     * a valid identifier: `a-z&#42;`. Note that
     * automatically-generated operation IDs always begin with an
     * underscore. If the named operation already exists,
     * UpdateDatabaseDdl returns
     * `ALREADY_EXISTS`.
     */
    operationId?: string;

    /**
     * DDL statements to be applied to the database.
     */
    statements?: string[];
  }

  declare interface gapi$client$spanner$UpdateInstanceMetadata {
    /**
     * The time at which this operation was cancelled. If set, this operation is
     * in the process of undoing itself (which is guaranteed to succeed) and
     * cannot be cancelled again.
     */
    cancelTime?: string;

    /**
     * The time at which this operation failed or was completed successfully.
     */
    endTime?: string;

    /**
     * The desired end state of the update.
     */
    instance?: gapi$client$spanner$Instance;

    /**
     * The time at which UpdateInstance
     * request was received.
     */
    startTime?: string;
  }

  declare interface gapi$client$spanner$UpdateInstanceRequest {
    /**
     * Required. A mask specifying which fields in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.instance] should be updated.
     * The field mask must always be specified; this prevents any future fields in
     * [][google.spanner.admin.instance.v1.Instance] from being erased accidentally by clients that do not know
     * about them.
     */
    fieldMask?: string;

    /**
     * Required. The instance to update, which must always include the instance
     * name.  Otherwise, only fields mentioned in [][google.spanner.admin.instance.v1.UpdateInstanceRequest.field_mask] need be included.
     */
    instance?: gapi$client$spanner$Instance;
  }

  declare interface gapi$client$spanner$Write {
    /**
     * The names of the columns in table to be written.
     *
     * The list of columns must contain enough columns to allow
     * Cloud Spanner to derive values for all primary key columns in the
     * row(s) to be modified.
     */
    columns?: string[];

    /**
     * Required. The table whose rows will be written.
     */
    table?: string;

    /**
     * The values to be written. `values` can contain more than one
     * list of values. If it does, then multiple rows are written, one
     * for each entry in `values`. Each list in `values` must have
     * exactly as many entries as there are entries in columns
     * above. Sending multiple lists is equivalent to sending multiple
     * `Mutation`s, each containing one `values` entry and repeating
     * table and columns. Individual values in each list are
     * encoded as described here.
     */
    values?: any[][];
  }

  declare interface gapi$client$spanner$InstanceConfigsResource {
    /**
     * Gets information about a particular instance configuration.
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
       * Required. The name of the requested instance configuration. Values are of
       * the form `projects/<project>/instanceConfigs/<config>`.
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
    }): Request<gapi$client$spanner$InstanceConfig>;

    /**
     * Lists the supported instance configurations for a given project.
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

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Number of instance configurations to be returned in the response. If 0 or
       * less, defaults to the server's maximum allowed page size.
       */
      pageSize?: number,

      /**
       * If non-empty, `page_token` should contain a
       * next_page_token
       * from a previous ListInstanceConfigsResponse.
       */
      pageToken?: string,

      /**
       * Required. The name of the project for which a list of supported instance
       * configurations is requested. Values are of the form
       * `projects/<project>`.
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
    }): Request<gapi$client$spanner$ListInstanceConfigsResponse>;
  }

  declare interface gapi$client$spanner$OperationsResource {
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
    cancel(request: {
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
    }): Request<{}>;

    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
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
    }): Request<{}>;

    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
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
    }): Request<gapi$client$spanner$Operation>;

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
    }): Request<gapi$client$spanner$ListOperationsResponse>;

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
    cancel(request: {
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
    }): Request<{}>;

    /**
     * Deletes a long-running operation. This method indicates that the client is
     * no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.
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
    }): Request<{}>;

    /**
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
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
    }): Request<gapi$client$spanner$Operation>;

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
    }): Request<gapi$client$spanner$ListOperationsResponse>;
  }

  declare interface gapi$client$spanner$SessionsResource {
    /**
     * Begins a new transaction. This step can often be skipped:
     * Read, ExecuteSql and
     * Commit can begin a new transaction as a
     * side-effect.
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
       * Required. The session in which the transaction runs.
       */
      session: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$Transaction>;

    /**
     * Commits a transaction. The request includes the mutations to be
     * applied to rows in the database.
     *
     * `Commit` might return an `ABORTED` error. This can occur at any time;
     * commonly, the cause is conflicts with concurrent
     * transactions. However, it can also happen for a variety of other
     * reasons. If `Commit` returns `ABORTED`, the caller should re-attempt
     * the transaction from the beginning, re-using the same session.
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
       * Required. The session in which the transaction to be committed is running.
       */
      session: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$CommitResponse>;

    /**
     * Creates a new session. A session can be used to perform
     * transactions that read and/or modify data in a Cloud Spanner database.
     * Sessions are meant to be reused for many consecutive
     * transactions.
     *
     * Sessions can only execute one transaction at a time. To execute
     * multiple concurrent read-write/write-only transactions, create
     * multiple sessions. Note that standalone reads and queries use a
     * transaction internally, and count toward the one transaction
     * limit.
     *
     * Cloud Spanner limits the number of sessions that can exist at any given
     * time; thus, it is a good idea to delete idle and/or unneeded sessions.
     * Aside from explicit deletes, Cloud Spanner can delete sessions for which no
     * operations are sent for more than an hour. If a session is deleted,
     * requests to it return `NOT_FOUND`.
     *
     * Idle sessions can be kept alive by sending a trivial SQL query
     * periodically, e.g., `"SELECT 1"`.
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
       * Required. The database in which the new session is created.
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
    }): Request<gapi$client$spanner$Session>;

    /**
     * Ends a session, releasing server resources associated with it.
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
       * Required. The name of the session to delete.
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
     * Executes an SQL query, returning all rows in a single reply. This
     * method cannot be used to return a result set larger than 10 MiB;
     * if the query yields more data than that, the query fails with
     * a `FAILED_PRECONDITION` error.
     *
     * Queries inside read-write transactions might return `ABORTED`. If
     * this occurs, the application should restart the transaction from
     * the beginning. See Transaction for more details.
     *
     * Larger result sets can be fetched in streaming fashion by calling
     * ExecuteStreamingSql instead.
     */
    executeSql(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The session in which the SQL query should be performed.
       */
      session: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$ResultSet>;

    /**
     * Like ExecuteSql, except returns the result
     * set as a stream. Unlike ExecuteSql, there
     * is no limit on the size of the returned result set. However, no
     * individual row in the result set can exceed 100 MiB, and no
     * column value can exceed 10 MiB.
     */
    executeStreamingSql(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The session in which the SQL query should be performed.
       */
      session: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$PartialResultSet>;

    /**
     * Gets a session. Returns `NOT_FOUND` if the session does not exist.
     * This is mainly useful for determining whether a session is still
     * alive.
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
       * Required. The name of the session to retrieve.
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
    }): Request<gapi$client$spanner$Session>;

    /**
     * Lists all sessions in a given database.
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
       * Required. The database in which to list sessions.
       */
      database: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * An expression for filtering the results of the request. Filter rules are
       * case insensitive. The fields eligible for filtering are:
       *
       * &#42; labels.key where key is the name of a label
       *
       * Some examples of using filters are:
       *
       * &#42; labels.env:&#42; --> The session has the label "env".
       * &#42; labels.env:dev --> The session has the label "env" and the value of
       * the label contains the string "dev".
       */
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
       * Number of sessions to be returned in the response. If 0 or less, defaults
       * to the server's maximum allowed page size.
       */
      pageSize?: number,

      /**
       * If non-empty, `page_token` should contain a
       * next_page_token from a previous
       * ListSessionsResponse.
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
    }): Request<gapi$client$spanner$ListSessionsResponse>;

    /**
     * Reads rows from the database using key lookups and scans, as a
     * simple key/value style alternative to
     * ExecuteSql.  This method cannot be used to
     * return a result set larger than 10 MiB; if the read matches more
     * data than that, the read fails with a `FAILED_PRECONDITION`
     * error.
     *
     * Reads inside read-write transactions might return `ABORTED`. If
     * this occurs, the application should restart the transaction from
     * the beginning. See Transaction for more details.
     *
     * Larger result sets can be yielded in streaming fashion by calling
     * StreamingRead instead.
     */
    read(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The session in which the read should be performed.
       */
      session: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$ResultSet>;

    /**
     * Rolls back a transaction, releasing any locks it holds. It is a good
     * idea to call this for any transaction that includes one or more
     * Read or ExecuteSql requests and
     * ultimately decides not to commit.
     *
     * `Rollback` returns `OK` if it successfully aborts the transaction, the
     * transaction was already aborted, or the transaction is not
     * found. `Rollback` never returns `ABORTED`.
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
       * Required. The session in which the transaction to roll back is running.
       */
      session: string,

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
     * Like Read, except returns the result set as a
     * stream. Unlike Read, there is no limit on the
     * size of the returned result set. However, no individual row in
     * the result set can exceed 100 MiB, and no column value can exceed
     * 10 MiB.
     */
    streamingRead(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The session in which the read should be performed.
       */
      session: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$PartialResultSet>;
  }

  declare interface gapi$client$spanner$DatabasesResource {
    /**
     * Creates a new Cloud Spanner database and starts to prepare it for serving.
     * The returned long-running operation will
     * have a name of the format `<database_name>/operations/<operation_id>` and
     * can be used to track preparation of the database. The
     * metadata field type is
     * CreateDatabaseMetadata. The
     * response field type is
     * Database, if successful.
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
       * Required. The name of the instance that will serve the new database.
       * Values are of the form `projects/<project>/instances/<instance>`.
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
    }): Request<gapi$client$spanner$Operation>;

    /**
     * Drops (aka deletes) a Cloud Spanner database.
     */
    dropDatabase(request: {
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
       * Required. The database to be dropped.
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
     * Gets the state of a Cloud Spanner database.
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
       * Required. The name of the requested database. Values are of the form
       * `projects/<project>/instances/<instance>/databases/<database>`.
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
    }): Request<gapi$client$spanner$Database>;

    /**
     * Returns the schema of a Cloud Spanner database as a list of formatted
     * DDL statements. This method does not show pending schema updates, those may
     * be queried using the Operations API.
     */
    getDdl(request: {
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
       * Required. The database whose schema we wish to get.
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
    }): Request<gapi$client$spanner$GetDatabaseDdlResponse>;

    /**
     * Gets the access control policy for a database resource. Returns an empty
     * policy if a database exists but does not have a policy set.
     *
     * Authorization requires `spanner.databases.getIamPolicy` permission on
     * resource.
     */
    getIamPolicy(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for
       * instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$Policy>;

    /**
     * Lists Cloud Spanner databases.
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

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Number of databases to be returned in the response. If 0 or less,
       * defaults to the server's maximum allowed page size.
       */
      pageSize?: number,

      /**
       * If non-empty, `page_token` should contain a
       * next_page_token from a
       * previous ListDatabasesResponse.
       */
      pageToken?: string,

      /**
       * Required. The instance whose databases should be listed.
       * Values are of the form `projects/<project>/instances/<instance>`.
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
    }): Request<gapi$client$spanner$ListDatabasesResponse>;

    /**
     * Sets the access control policy on a database resource. Replaces any
     * existing policy.
     *
     * Authorization requires `spanner.databases.setIamPolicy` permission on
     * resource.
     */
    setIamPolicy(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance
       * resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$Policy>;

    /**
     * Returns permissions that the caller has on the specified database resource.
     *
     * Attempting this RPC on a non-existent Cloud Spanner database will result in
     * a NOT_FOUND error if the user has `spanner.databases.list` permission on
     * the containing Cloud Spanner instance. Otherwise returns an empty set of
     * permissions.
     */
    testIamPermissions(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance
       * resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$TestIamPermissionsResponse>;

    /**
     * Updates the schema of a Cloud Spanner database by
     * creating/altering/dropping tables, columns, indexes, etc. The returned
     * long-running operation will have a name of
     * the format `<database_name>/operations/<operation_id>` and can be used to
     * track execution of the schema change(s). The
     * metadata field type is
     * UpdateDatabaseDdlMetadata.  The operation has no response.
     */
    updateDdl(request: {
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
       * Required. The database to update.
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
    }): Request<gapi$client$spanner$Operation>;
    operations: gapi$client$spanner$OperationsResource;
    sessions: gapi$client$spanner$SessionsResource;
  }

  declare interface gapi$client$spanner$InstancesResource {
    /**
     * Creates an instance and begins preparing it to begin serving. The
     * returned long-running operation
     * can be used to track the progress of preparing the new
     * instance. The instance name is assigned by the caller. If the
     * named instance already exists, `CreateInstance` returns
     * `ALREADY_EXISTS`.
     *
     * Immediately upon completion of this request:
     *
     * &#42; The instance is readable via the API, with all requested attributes
     * but no allocated resources. Its state is `CREATING`.
     *
     * Until completion of the returned operation:
     *
     * &#42; Cancelling the operation renders the instance immediately unreadable
     * via the API.
     * &#42; The instance can be deleted.
     * &#42; All other attempts to modify the instance are rejected.
     *
     * Upon completion of the returned operation:
     *
     * &#42; Billing for all successfully-allocated resources begins (some types
     * may have lower than the requested levels).
     * &#42; Databases can be created in the instance.
     * &#42; The instance's allocated resource levels are readable via the API.
     * &#42; The instance's state becomes `READY`.
     *
     * The returned long-running operation will
     * have a name of the format `<instance_name>/operations/<operation_id>` and
     * can be used to track creation of the instance.  The
     * metadata field type is
     * CreateInstanceMetadata.
     * The response field type is
     * Instance, if successful.
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
       * Required. The name of the project in which to create the instance. Values
       * are of the form `projects/<project>`.
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
    }): Request<gapi$client$spanner$Operation>;

    /**
     * Deletes an instance.
     *
     * Immediately upon completion of the request:
     *
     * &#42; Billing ceases for all of the instance's reserved resources.
     *
     * Soon afterward:
     *
     * &#42; The instance and &#42;all of its databases&#42; immediately and
     * irrevocably disappear from the API. All data in the databases
     * is permanently deleted.
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
       * Required. The name of the instance to be deleted. Values are of the form
       * `projects/<project>/instances/<instance>`
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
     * Gets information about a particular instance.
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
       * Required. The name of the requested instance. Values are of the form
       * `projects/<project>/instances/<instance>`.
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
    }): Request<gapi$client$spanner$Instance>;

    /**
     * Gets the access control policy for an instance resource. Returns an empty
     * policy if an instance exists but does not have a policy set.
     *
     * Authorization requires `spanner.instances.getIamPolicy` on
     * resource.
     */
    getIamPolicy(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The Cloud Spanner resource for which the policy is being retrieved. The format is `projects/<project ID>/instances/<instance ID>` for
       * instance resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$Policy>;

    /**
     * Lists all instances in the given project.
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

      /**
       * An expression for filtering the results of the request. Filter rules are
       * case insensitive. The fields eligible for filtering are:
       *
       * &#42; name
       * &#42; display_name
       * &#42; labels.key where key is the name of a label
       *
       * Some examples of using filters are:
       *
       * &#42; name:&#42; --> The instance has a name.
       * &#42; name:Howl --> The instance's name contains the string "howl".
       * &#42; name:HOWL --> Equivalent to above.
       * &#42; NAME:howl --> Equivalent to above.
       * &#42; labels.env:&#42; --> The instance has the label "env".
       * &#42; labels.env:dev --> The instance has the label "env" and the value of
       * the label contains the string "dev".
       * &#42; name:howl labels.env:dev --> The instance's name contains "howl" and
       * it has the label "env" with its value
       * containing "dev".
       */
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
       * Number of instances to be returned in the response. If 0 or less, defaults
       * to the server's maximum allowed page size.
       */
      pageSize?: number,

      /**
       * If non-empty, `page_token` should contain a
       * next_page_token from a
       * previous ListInstancesResponse.
       */
      pageToken?: string,

      /**
       * Required. The name of the project for which a list of instances is
       * requested. Values are of the form `projects/<project>`.
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
    }): Request<gapi$client$spanner$ListInstancesResponse>;

    /**
     * Updates an instance, and begins allocating or releasing resources
     * as requested. The returned long-running
     * operation can be used to track the
     * progress of updating the instance. If the named instance does not
     * exist, returns `NOT_FOUND`.
     *
     * Immediately upon completion of this request:
     *
     * &#42; For resource types for which a decrease in the instance's allocation
     * has been requested, billing is based on the newly-requested level.
     *
     * Until completion of the returned operation:
     *
     * &#42; Cancelling the operation sets its metadata's
     * cancel_time, and begins
     * restoring resources to their pre-request values. The operation
     * is guaranteed to succeed at undoing all resource changes,
     * after which point it terminates with a `CANCELLED` status.
     * &#42; All other attempts to modify the instance are rejected.
     * &#42; Reading the instance via the API continues to give the pre-request
     * resource levels.
     *
     * Upon completion of the returned operation:
     *
     * &#42; Billing begins for all successfully-allocated resources (some types
     * may have lower than the requested levels).
     * &#42; All newly-reserved resources are available for serving the instance's
     * tables.
     * &#42; The instance's new resource levels are readable via the API.
     *
     * The returned long-running operation will
     * have a name of the format `<instance_name>/operations/<operation_id>` and
     * can be used to track the instance modification.  The
     * metadata field type is
     * UpdateInstanceMetadata.
     * The response field type is
     * Instance, if successful.
     *
     * Authorization requires `spanner.instances.update` permission on
     * resource name.
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
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Required. A unique identifier for the instance, which cannot be changed
       * after the instance is created. Values are of the form
       * `projects/<project>/instances/a-z&#42;[a-z0-9]`. The final
       * segment of the name must be between 6 and 30 characters in length.
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
    }): Request<gapi$client$spanner$Operation>;

    /**
     * Sets the access control policy on an instance resource. Replaces any
     * existing policy.
     *
     * Authorization requires `spanner.instances.setIamPolicy` on
     * resource.
     */
    setIamPolicy(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The Cloud Spanner resource for which the policy is being set. The format is `projects/<project ID>/instances/<instance ID>` for instance
       * resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for databases resources.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$Policy>;

    /**
     * Returns permissions that the caller has on the specified instance resource.
     *
     * Attempting this RPC on a non-existent Cloud Spanner instance resource will
     * result in a NOT_FOUND error if the user has `spanner.instances.list`
     * permission on the containing Google Cloud Project. Otherwise returns an
     * empty set of permissions.
     */
    testIamPermissions(request: {
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * REQUIRED: The Cloud Spanner resource for which permissions are being tested. The format is `projects/<project ID>/instances/<instance ID>` for instance
       * resources and `projects/<project ID>/instances/<instance ID>/databases/<database ID>` for database resources.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$spanner$TestIamPermissionsResponse>;
    databases: gapi$client$spanner$DatabasesResource;
    operations: gapi$client$spanner$OperationsResource;
  }

  declare interface gapi$client$spanner$ProjectsResource {
    instanceConfigs: gapi$client$spanner$InstanceConfigsResource;
    instances: gapi$client$spanner$InstancesResource;
  }
}
