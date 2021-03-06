declare module "gapi.client.sqladmin" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    backupRuns: typeof gapi$client$backupRuns,
    databases: typeof gapi$client$databases,
    flags: typeof gapi$client$flags,
    instances: typeof gapi$client$instances,
    operations: typeof gapi$client$operations,
    sslCerts: typeof gapi$client$sslCerts,
    tiers: typeof gapi$client$tiers,
    users: typeof gapi$client$users
  };

  /**
   * Load Cloud SQL Administration API v1beta4
   */
  declare function gapi$client$load(
    name: "sqladmin",
    version: "v1beta4"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "sqladmin",
    version: "v1beta4",
    callback: () => any
  ): void;

  declare var gapi$client$backupRuns: sqladmin$BackupRunsResource;

  declare var gapi$client$databases: sqladmin$DatabasesResource;

  declare var gapi$client$flags: sqladmin$FlagsResource;

  declare var gapi$client$instances: sqladmin$InstancesResource;

  declare var gapi$client$operations: sqladmin$OperationsResource;

  declare var gapi$client$sslCerts: sqladmin$SslCertsResource;

  declare var gapi$client$tiers: sqladmin$TiersResource;

  declare var gapi$client$users: sqladmin$UsersResource;

  declare interface gapi$client$sqladmin$AclEntry {
    /**
     * The time when this access control entry expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    expirationTime?: string;

    /**
     * This is always sql#aclEntry.
     */
    kind?: string;

    /**
     * An optional label to identify this entry.
     */
    name?: string;

    /**
     * The whitelisted value for the access control list.
     */
    value?: string;
  }

  declare interface gapi$client$sqladmin$BackupConfiguration {
    /**
     * Whether binary log is enabled. If backup configuration is disabled, binary log must be disabled as well.
     */
    binaryLogEnabled?: boolean;

    /**
     * Whether this configuration is enabled.
     */
    enabled?: boolean;

    /**
     * This is always sql#backupConfiguration.
     */
    kind?: string;

    /**
     * Start time for the daily backup configuration in UTC timezone in the 24 hour format - HH:MM.
     */
    startTime?: string;
  }

  declare interface gapi$client$sqladmin$BackupRun {
    /**
     * The description of this run, only applicable to on-demand backups.
     */
    description?: string;

    /**
     * The time the backup operation completed in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    endTime?: string;

    /**
     * The time the run was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    enqueuedTime?: string;

    /**
     * Information about why the backup operation failed. This is only present if the run has the FAILED status.
     */
    error?: sqladmin$OperationError;

    /**
     * A unique identifier for this backup run. Note that this is unique only within the scope of a particular Cloud SQL instance.
     */
    id?: string;

    /**
     * Name of the database instance.
     */
    instance?: string;

    /**
     * This is always sql#backupRun.
     */
    kind?: string;

    /**
     * The URI of this resource.
     */
    selfLink?: string;

    /**
     * The time the backup operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    startTime?: string;

    /**
     * The status of this run.
     */
    status?: string;

    /**
     * The type of this run; can be either "AUTOMATED" or "ON_DEMAND".
     */
    type?: string;

    /**
     * The start time of the backup window during which this the backup was attempted in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    windowStartTime?: string;
  }

  declare interface gapi$client$sqladmin$BackupRunsListResponse {
    /**
     * A list of backup runs in reverse chronological order of the enqueued time.
     */
    items?: gapi$client$sqladmin$BackupRun[];

    /**
     * This is always sql#backupRunsList.
     */
    kind?: string;

    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$sqladmin$BinLogCoordinates {
    /**
     * Name of the binary log file for a Cloud SQL instance.
     */
    binLogFileName?: string;

    /**
     * Position (offset) within the binary log file.
     */
    binLogPosition?: string;

    /**
     * This is always sql#binLogCoordinates.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$CloneContext {
    /**
     * Binary log coordinates, if specified, indentify the the position up to which the source instance should be cloned. If not specified, the source
     * instance is cloned up to the most recent binary log coordintes.
     */
    binLogCoordinates?: gapi$client$sqladmin$BinLogCoordinates;

    /**
     * Name of the Cloud SQL instance to be created as a clone.
     */
    destinationInstanceName?: string;

    /**
     * This is always sql#cloneContext.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$Database {
    /**
     * The MySQL charset value.
     */
    charset?: string;

    /**
     * The MySQL collation value.
     */
    collation?: string;

    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag?: string;

    /**
     * The name of the Cloud SQL instance. This does not include the project ID.
     */
    instance?: string;

    /**
     * This is always sql#database.
     */
    kind?: string;

    /**
     * The name of the database in the Cloud SQL instance. This does not include the project ID or instance name.
     */
    name?: string;

    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable.
     */
    project?: string;

    /**
     * The URI of this resource.
     */
    selfLink?: string;
  }

  declare interface gapi$client$sqladmin$DatabaseFlags {
    /**
     * The name of the flag. These flags are passed at instance startup, so include both MySQL server options and MySQL system variables. Flags should be
     * specified with underscores, not hyphens. For more information, see Configuring MySQL Flags in the Google Cloud SQL documentation, as well as the
     * official MySQL documentation for server options and system variables.
     */
    name?: string;

    /**
     * The value of the flag. Booleans should be set to on for true and off for false. This field must be omitted if the flag doesn't take a value.
     */
    value?: string;
  }

  declare interface gapi$client$sqladmin$DatabaseInstance {
    /**
     * FIRST_GEN: Basic Cloud SQL instance that runs in a Google-managed container.
     * SECOND_GEN: A newer Cloud SQL backend that runs in a Compute Engine VM.
     * EXTERNAL: A MySQL server that is not managed by Google.
     */
    backendType?: string;

    /**
     * Connection name of the Cloud SQL instance used in connection strings.
     */
    connectionName?: string;

    /**
     * The current disk usage of the instance in bytes. This property has been deprecated. Users should use the
     * "cloudsql.googleapis.com/database/disk/bytes_used" metric in Cloud Monitoring API instead. Please see
     * https://groups.google.com/d/msg/google-cloud-sql-announce/I_7-F9EBhT0/BtvFtdFeAgAJ for details.
     */
    currentDiskSize?: string;

    /**
     * The database engine type and version. The databaseVersion field can not be changed after instance creation. MySQL Second Generation instances:
     * MYSQL_5_7 (default) or MYSQL_5_6. PostgreSQL instances: POSTGRES_9_6 MySQL First Generation instances: MYSQL_5_6 (default) or MYSQL_5_5
     */
    databaseVersion?: string;

    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag?: string;

    /**
     * The name and status of the failover replica. This property is applicable only to Second Generation instances.
     */
    failoverReplica?: {
      /**
       * The availability status of the failover replica. A false status indicates that the failover replica is out of sync. The master can only failover to the
       * falover replica when the status is true.
       */
      available?: boolean,

      /**
       * The name of the failover replica. If specified at instance creation, a failover replica is created for the instance. The name doesn't include the
       * project ID. This property is applicable only to Second Generation instances.
       */
      name?: string
    };

    /**
     * The GCE zone that the instance is serving from. In case when the instance is failed over to standby zone, this value may be different with what user
     * specified in the settings.
     */
    gceZone?: string;

    /**
     * The instance type. This can be one of the following.
     * CLOUD_SQL_INSTANCE: A Cloud SQL instance that is not replicating from a master.
     * ON_PREMISES_INSTANCE: An instance running on the customer's premises.
     * READ_REPLICA_INSTANCE: A Cloud SQL instance configured as a read-replica.
     */
    instanceType?: string;

    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: sqladmin$IpMapping[];

    /**
     * The IPv6 address assigned to the instance. This property is applicable only to First Generation instances.
     */
    ipv6Address?: string;

    /**
     * This is always sql#instance.
     */
    kind?: string;

    /**
     * The name of the instance which will act as master in the replication setup.
     */
    masterInstanceName?: string;

    /**
     * The maximum disk size of the instance in bytes.
     */
    maxDiskSize?: string;

    /**
     * Name of the Cloud SQL instance. This does not include the project ID.
     */
    name?: string;

    /**
     * Configuration specific to on-premises instances.
     */
    onPremisesConfiguration?: sqladmin$OnPremisesConfiguration;

    /**
     * The project ID of the project containing the Cloud SQL instance. The Google apps domain is prefixed if applicable.
     */
    project?: string;

    /**
     * The geographical region. Can be us-central (FIRST_GEN instances only), us-central1 (SECOND_GEN instances only), asia-east1 or europe-west1. Defaults to
     * us-central or us-central1 depending on the instance type (First Generation or Second Generation). The region can not be changed after instance
     * creation.
     */
    region?: string;

    /**
     * Configuration specific to read-replicas replicating from on-premises masters.
     */
    replicaConfiguration?: sqladmin$ReplicaConfiguration;

    /**
     * The replicas of the instance.
     */
    replicaNames?: string[];

    /**
     * The URI of this resource.
     */
    selfLink?: string;

    /**
     * SSL configuration.
     */
    serverCaCert?: sqladmin$SslCert;

    /**
     * The service account email address assigned to the instance. This property is applicable only to Second Generation instances.
     */
    serviceAccountEmailAddress?: string;

    /**
     * The user settings.
     */
    settings?: sqladmin$Settings;

    /**
     * The current serving state of the Cloud SQL instance. This can be one of the following.
     * RUNNABLE: The instance is running, or is ready to run when accessed.
     * SUSPENDED: The instance is not available, for example due to problems with billing.
     * PENDING_CREATE: The instance is being created.
     * MAINTENANCE: The instance is down for maintenance.
     * FAILED: The instance creation failed.
     * UNKNOWN_STATE: The state of the instance is unknown.
     */
    state?: string;

    /**
     * If the instance state is SUSPENDED, the reason for the suspension.
     */
    suspensionReason?: string[];
  }

  declare interface gapi$client$sqladmin$DatabasesListResponse {
    /**
     * List of database resources in the instance.
     */
    items?: gapi$client$sqladmin$Database[];

    /**
     * This is always sql#databasesList.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$ExportContext {
    /**
     * Options for exporting data as CSV.
     */
    csvExportOptions?: {
      /**
       * The select query used to extract the data.
       */
      selectQuery?: string
    };

    /**
     * Databases (for example, guestbook) from which the export is made. If fileType is SQL and no database is specified, all databases are exported. If
     * fileType is CSV, you can optionally specify at most one database to export. If csvExportOptions.selectQuery also specifies the database, this field
     * will be ignored.
     */
    databases?: string[];

    /**
     * The file type for the specified uri.
     * SQL: The file contains SQL statements.
     * CSV: The file contains CSV data.
     */
    fileType?: string;

    /**
     * This is always sql#exportContext.
     */
    kind?: string;

    /**
     * Options for exporting data as SQL statements.
     */
    sqlExportOptions?: {
      /**
       * Export only schemas.
       */
      schemaOnly?: boolean,

      /**
       * Tables to export, or that were exported, from the specified database. If you specify tables, specify one and only one database.
       */
      tables?: string[]
    };

    /**
     * The path to the file in Google Cloud Storage where the export will be stored. The URI is in the form gs://bucketName/fileName. If the file already
     * exists, the operation fails. If fileType is SQL and the filename ends with .gz, the contents are compressed.
     */
    uri?: string;
  }

  declare interface gapi$client$sqladmin$FailoverContext {
    /**
     * This is always sql#failoverContext.
     */
    kind?: string;

    /**
     * The current settings version of this instance. Request will be rejected if this version doesn't match the current settings version.
     */
    settingsVersion?: string;
  }

  declare interface gapi$client$sqladmin$Flag {
    /**
     * For STRING flags, a list of strings that the value can be set to.
     */
    allowedStringValues?: string[];

    /**
     * The database version this flag applies to. Can be MYSQL_5_5, MYSQL_5_6, or MYSQL_5_7. MYSQL_5_7 is applicable only to Second Generation instances.
     */
    appliesTo?: string[];

    /**
     * This is always sql#flag.
     */
    kind?: string;

    /**
     * For INTEGER flags, the maximum allowed value.
     */
    maxValue?: string;

    /**
     * For INTEGER flags, the minimum allowed value.
     */
    minValue?: string;

    /**
     * This is the name of the flag. Flag names always use underscores, not hyphens, e.g. max_allowed_packet
     */
    name?: string;

    /**
     * Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.
     */
    requiresRestart?: boolean;

    /**
     * The type of the flag. Flags are typed to being BOOLEAN, STRING, INTEGER or NONE. NONE is used for flags which do not take a value, such as
     * skip_grant_tables.
     */
    type?: string;
  }

  declare interface gapi$client$sqladmin$FlagsListResponse {
    /**
     * List of flags.
     */
    items?: gapi$client$sqladmin$Flag[];

    /**
     * This is always sql#flagsList.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$ImportContext {
    /**
     * Options for importing data as CSV.
     */
    csvImportOptions?: {
      /**
       * The columns to which CSV data is imported. If not specified, all columns of the database table are loaded with CSV data.
       */
      columns?: string[],

      /**
       * The table to which CSV data is imported.
       */
      table?: string
    };

    /**
     * The database (for example, guestbook) to which the import is made. If fileType is SQL and no database is specified, it is assumed that the database is
     * specified in the file to be imported. If fileType is CSV, it must be specified.
     */
    database?: string;

    /**
     * The file type for the specified uri.
     * SQL: The file contains SQL statements.
     * CSV: The file contains CSV data.
     */
    fileType?: string;

    /**
     * The PostgreSQL user for this import operation. Defaults to cloudsqlsuperuser. Used only for PostgreSQL instances.
     */
    importUser?: string;

    /**
     * This is always sql#importContext.
     */
    kind?: string;

    /**
     * A path to the file in Google Cloud Storage from which the import is made. The URI is in the form gs://bucketName/fileName. Compressed gzip files (.gz)
     * are supported when fileType is SQL.
     */
    uri?: string;
  }

  declare interface gapi$client$sqladmin$InstancesCloneRequest {
    /**
     * Contains details about the clone operation.
     */
    cloneContext?: gapi$client$sqladmin$CloneContext;
  }

  declare interface gapi$client$sqladmin$InstancesExportRequest {
    /**
     * Contains details about the export operation.
     */
    exportContext?: gapi$client$sqladmin$ExportContext;
  }

  declare interface gapi$client$sqladmin$InstancesFailoverRequest {
    /**
     * Failover Context.
     */
    failoverContext?: gapi$client$sqladmin$FailoverContext;
  }

  declare interface gapi$client$sqladmin$InstancesImportRequest {
    /**
     * Contains details about the import operation.
     */
    importContext?: gapi$client$sqladmin$ImportContext;
  }

  declare interface gapi$client$sqladmin$InstancesListResponse {
    /**
     * List of database instance resources.
     */
    items?: gapi$client$sqladmin$DatabaseInstance[];

    /**
     * This is always sql#instancesList.
     */
    kind?: string;

    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$sqladmin$InstancesRestoreBackupRequest {
    /**
     * Parameters required to perform the restore backup operation.
     */
    restoreBackupContext?: sqladmin$RestoreBackupContext;
  }

  declare interface gapi$client$sqladmin$InstancesTruncateLogRequest {
    /**
     * Contains details about the truncate log operation.
     */
    truncateLogContext?: sqladmin$TruncateLogContext;
  }

  declare interface gapi$client$sqladmin$IpConfiguration {
    /**
     * The list of external networks that are allowed to connect to the instance using the IP. In CIDR notation, also known as 'slash' notation (e.g.
     * 192.168.100.0/24).
     */
    authorizedNetworks?: gapi$client$sqladmin$AclEntry[];

    /**
     * Whether the instance should be assigned an IP address or not.
     */
    ipv4Enabled?: boolean;

    /**
     * Whether SSL connections over IP should be enforced or not.
     */
    requireSsl?: boolean;
  }

  declare interface gapi$client$sqladmin$IpMapping {
    /**
     * The IP address assigned.
     */
    ipAddress?: string;

    /**
     * The due time for this IP to be retired in RFC 3339 format, for example 2012-11-15T16:19:00.094Z. This field is only available when the IP is scheduled
     * to be retired.
     */
    timeToRetire?: string;

    /**
     * The type of this IP address. A PRIMARY address is an address that can accept incoming connections. An OUTGOING address is the source address of
     * connections originating from the instance, if supported.
     */
    type?: string;
  }

  declare interface gapi$client$sqladmin$LocationPreference {
    /**
     * The AppEngine application to follow, it must be in the same region as the Cloud SQL instance.
     */
    followGaeApplication?: string;

    /**
     * This is always sql#locationPreference.
     */
    kind?: string;

    /**
     * The preferred Compute Engine zone (e.g. us-centra1-a, us-central1-b, etc.).
     */
    zone?: string;
  }

  declare interface gapi$client$sqladmin$MaintenanceWindow {
    /**
     * day of week (1-7), starting on Monday.
     */
    day?: number;

    /**
     * hour of day - 0 to 23.
     */
    hour?: number;

    /**
     * This is always sql#maintenanceWindow.
     */
    kind?: string;
    updateTrack?: string;
  }

  declare interface gapi$client$sqladmin$MySqlReplicaConfiguration {
    /**
     * PEM representation of the trusted CA's x509 certificate.
     */
    caCertificate?: string;

    /**
     * PEM representation of the slave's x509 certificate.
     */
    clientCertificate?: string;

    /**
     * PEM representation of the slave's private key. The corresponsing public key is encoded in the client's certificate.
     */
    clientKey?: string;

    /**
     * Seconds to wait between connect retries. MySQL's default is 60 seconds.
     */
    connectRetryInterval?: number;

    /**
     * Path to a SQL dump file in Google Cloud Storage from which the slave instance is to be created. The URI is in the form gs://bucketName/fileName.
     * Compressed gzip files (.gz) are also supported. Dumps should have the binlog co-ordinates from which replication should begin. This can be accomplished
     * by setting --master-data to 1 when using mysqldump.
     */
    dumpFilePath?: string;

    /**
     * This is always sql#mysqlReplicaConfiguration.
     */
    kind?: string;

    /**
     * Interval in milliseconds between replication heartbeats.
     */
    masterHeartbeatPeriod?: string;

    /**
     * The password for the replication connection.
     */
    password?: string;

    /**
     * A list of permissible ciphers to use for SSL encryption.
     */
    sslCipher?: string;

    /**
     * The username for the replication connection.
     */
    username?: string;

    /**
     * Whether or not to check the master's Common Name value in the certificate that it sends during the SSL handshake.
     */
    verifyServerCertificate?: boolean;
  }

  declare interface gapi$client$sqladmin$OnPremisesConfiguration {
    /**
     * The host and port of the on-premises instance in host:port format
     */
    hostPort?: string;

    /**
     * This is always sql#onPremisesConfiguration.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$Operation {
    /**
     * The time this operation finished in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    endTime?: string;

    /**
     * If errors occurred during processing of this operation, this field will be populated.
     */
    error?: sqladmin$OperationErrors;

    /**
     * The context for export operation, if applicable.
     */
    exportContext?: gapi$client$sqladmin$ExportContext;

    /**
     * The context for import operation, if applicable.
     */
    importContext?: gapi$client$sqladmin$ImportContext;

    /**
     * The time this operation was enqueued in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    insertTime?: string;

    /**
     * This is always sql#operation.
     */
    kind?: string;

    /**
     * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the
     * operation.
     */
    name?: string;

    /**
     * The type of the operation. Valid values are CREATE, DELETE, UPDATE, RESTART, IMPORT, EXPORT, BACKUP_VOLUME, RESTORE_VOLUME, CREATE_USER, DELETE_USER,
     * CREATE_DATABASE, DELETE_DATABASE .
     */
    operationType?: string;

    /**
     * The URI of this resource.
     */
    selfLink?: string;

    /**
     * The time this operation actually started in UTC timezone in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    startTime?: string;

    /**
     * The status of an operation. Valid values are PENDING, RUNNING, DONE, UNKNOWN.
     */
    status?: string;

    /**
     * Name of the database instance related to this operation.
     */
    targetId?: string;
    targetLink?: string;

    /**
     * The project ID of the target instance related to this operation.
     */
    targetProject?: string;

    /**
     * The email address of the user who initiated this operation.
     */
    user?: string;
  }

  declare interface gapi$client$sqladmin$OperationError {
    /**
     * Identifies the specific error that occurred.
     */
    code?: string;

    /**
     * This is always sql#operationError.
     */
    kind?: string;

    /**
     * Additional information about the error encountered.
     */
    message?: string;
  }

  declare interface gapi$client$sqladmin$OperationErrors {
    /**
     * The list of errors encountered while processing this operation.
     */
    errors?: gapi$client$sqladmin$OperationError[];

    /**
     * This is always sql#operationErrors.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$OperationsListResponse {
    /**
     * List of operation resources.
     */
    items?: gapi$client$sqladmin$Operation[];

    /**
     * This is always sql#operationsList.
     */
    kind?: string;

    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$sqladmin$ReplicaConfiguration {
    /**
     * Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. In case the master
     * instance fails, the replica instance will be promoted as the new master instance.
     * Only one replica can be specified as failover target, and the replica has to be in different zone with the master instance.
     */
    failoverTarget?: boolean;

    /**
     * This is always sql#replicaConfiguration.
     */
    kind?: string;

    /**
     * MySQL specific configuration when replicating from a MySQL on-premises master. Replication configuration information such as the username, password,
     * certificates, and keys are not stored in the instance metadata. The configuration information is used only to set up the replication connection and is
     * stored by MySQL in a file named master.info in the data directory.
     */
    mysqlReplicaConfiguration?: gapi$client$sqladmin$MySqlReplicaConfiguration;
  }

  declare interface gapi$client$sqladmin$RestoreBackupContext {
    /**
     * The ID of the backup run to restore from.
     */
    backupRunId?: string;

    /**
     * The ID of the instance that the backup was taken from.
     */
    instanceId?: string;

    /**
     * This is always sql#restoreBackupContext.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$Settings {
    /**
     * The activation policy specifies when the instance is activated; it is applicable only when the instance state is RUNNABLE. The activation policy cannot
     * be updated together with other settings for Second Generation instances. Valid values:
     * ALWAYS: The instance is on; it is not deactivated by inactivity.
     * NEVER: The instance is off; it is not activated, even if a connection request arrives.
     * ON_DEMAND: The instance responds to incoming requests, and turns itself off when not in use. Instances with PER_USE pricing turn off after 15 minutes
     * of inactivity. Instances with PER_PACKAGE pricing turn off after 12 hours of inactivity.
     */
    activationPolicy?: string;

    /**
     * The App Engine app IDs that can access this instance. This property is only applicable to First Generation instances.
     */
    authorizedGaeApplications?: string[];

    /**
     * Reserved for future use.
     */
    availabilityType?: string;

    /**
     * The daily backup configuration for the instance.
     */
    backupConfiguration?: gapi$client$sqladmin$BackupConfiguration;

    /**
     * Configuration specific to read replica instances. Indicates whether database flags for crash-safe replication are enabled. This property is only
     * applicable to First Generation instances.
     */
    crashSafeReplicationEnabled?: boolean;

    /**
     * The size of data disk, in GB. The data disk size minimum is 10GB. Applies only to Second Generation instances.
     */
    dataDiskSizeGb?: string;

    /**
     * The type of data disk. Only supported for Second Generation instances. The default type is PD_SSD. Applies only to Second Generation instances.
     */
    dataDiskType?: string;

    /**
     * The database flags passed to the instance at startup.
     */
    databaseFlags?: gapi$client$sqladmin$DatabaseFlags[];

    /**
     * Configuration specific to read replica instances. Indicates whether replication is enabled or not.
     */
    databaseReplicationEnabled?: boolean;

    /**
     * The settings for IP Management. This allows to enable or disable the instance IP and manage which external networks can connect to the instance. The
     * IPv4 address cannot be disabled for Second Generation instances.
     */
    ipConfiguration?: gapi$client$sqladmin$IpConfiguration;

    /**
     * This is always sql#settings.
     */
    kind?: string;

    /**
     * The location preference settings. This allows the instance to be located as near as possible to either an App Engine app or GCE zone for better
     * performance. App Engine co-location is only applicable to First Generation instances.
     */
    locationPreference?: gapi$client$sqladmin$LocationPreference;

    /**
     * The maintenance window for this instance. This specifies when the instance may be restarted for maintenance purposes. Applies only to Second Generation
     * instances.
     */
    maintenanceWindow?: gapi$client$sqladmin$MaintenanceWindow;

    /**
     * The pricing plan for this instance. This can be either PER_USE or PACKAGE. Only PER_USE is supported for Second Generation instances.
     */
    pricingPlan?: string;

    /**
     * The type of replication this instance uses. This can be either ASYNCHRONOUS or SYNCHRONOUS. This property is only applicable to First Generation
     * instances.
     */
    replicationType?: string;

    /**
     * The version of instance settings. This is a required field for update method to make sure concurrent updates are handled properly. During update, use
     * the most recent settingsVersion value for this instance and do not try to update this value.
     */
    settingsVersion?: string;

    /**
     * Configuration to increase storage size automatically. The default value is true. Applies only to Second Generation instances.
     */
    storageAutoResize?: boolean;

    /**
     * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit. Applies only
     * to Second Generation instances.
     */
    storageAutoResizeLimit?: string;

    /**
     * The tier of service for this instance, for example D1, D2. For more information, see pricing.
     */
    tier?: string;

    /**
     * User-provided labels, represented as a dictionary where each label is a single key value pair.
     */
    userLabels?: Record<string, string>;
  }

  declare interface gapi$client$sqladmin$SslCert {
    /**
     * PEM representation.
     */
    cert?: string;

    /**
     * Serial number, as extracted from the certificate.
     */
    certSerialNumber?: string;

    /**
     * User supplied name. Constrained to [a-zA-Z.-_ ]+.
     */
    commonName?: string;

    /**
     * The time when the certificate was created in RFC 3339 format, for example 2012-11-15T16:19:00.094Z
     */
    createTime?: string;

    /**
     * The time when the certificate expires in RFC 3339 format, for example 2012-11-15T16:19:00.094Z.
     */
    expirationTime?: string;

    /**
     * Name of the database instance.
     */
    instance?: string;

    /**
     * This is always sql#sslCert.
     */
    kind?: string;

    /**
     * The URI of this resource.
     */
    selfLink?: string;

    /**
     * Sha1 Fingerprint.
     */
    sha1Fingerprint?: string;
  }

  declare interface gapi$client$sqladmin$SslCertDetail {
    /**
     * The public information about the cert.
     */
    certInfo?: gapi$client$sqladmin$SslCert;

    /**
     * The private key for the client cert, in pem format. Keep private in order to protect your security.
     */
    certPrivateKey?: string;
  }

  declare interface gapi$client$sqladmin$SslCertsCreateEphemeralRequest {
    /**
     * PEM encoded public key to include in the signed certificate.
     */
    public_key?: string;
  }

  declare interface gapi$client$sqladmin$SslCertsInsertRequest {
    /**
     * User supplied name. Must be a distinct name from the other certificates for this instance. New certificates will not be usable until the instance is
     * restarted.
     */
    commonName?: string;
  }

  declare interface gapi$client$sqladmin$SslCertsInsertResponse {
    /**
     * The new client certificate and private key. The new certificate will not work until the instance is restarted for First Generation instances.
     */
    clientCert?: gapi$client$sqladmin$SslCertDetail;

    /**
     * This is always sql#sslCertsInsert.
     */
    kind?: string;

    /**
     * The operation to track the ssl certs insert request.
     */
    operation?: gapi$client$sqladmin$Operation;

    /**
     * The server Certificate Authority's certificate. If this is missing you can force a new one to be generated by calling resetSslConfig method on
     * instances resource.
     */
    serverCaCert?: gapi$client$sqladmin$SslCert;
  }

  declare interface gapi$client$sqladmin$SslCertsListResponse {
    /**
     * List of client certificates for the instance.
     */
    items?: gapi$client$sqladmin$SslCert[];

    /**
     * This is always sql#sslCertsList.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$Tier {
    /**
     * The maximum disk size of this tier in bytes.
     */
    DiskQuota?: string;

    /**
     * The maximum RAM usage of this tier in bytes.
     */
    RAM?: string;

    /**
     * This is always sql#tier.
     */
    kind?: string;

    /**
     * The applicable regions for this tier.
     */
    region?: string[];

    /**
     * An identifier for the service tier, for example D1, D2 etc. For related information, see Pricing.
     */
    tier?: string;
  }

  declare interface gapi$client$sqladmin$TiersListResponse {
    /**
     * List of tiers.
     */
    items?: gapi$client$sqladmin$Tier[];

    /**
     * This is always sql#tiersList.
     */
    kind?: string;
  }

  declare interface gapi$client$sqladmin$TruncateLogContext {
    /**
     * This is always sql#truncateLogContext.
     */
    kind?: string;

    /**
     * The type of log to truncate. Valid values are MYSQL_GENERAL_TABLE and MYSQL_SLOW_TABLE.
     */
    logType?: string;
  }

  declare interface gapi$client$sqladmin$User {
    /**
     * HTTP 1.1 Entity tag for the resource.
     */
    etag?: string;

    /**
     * The host name from which the user can connect. For insert operations, host defaults to an empty string. For update operations, host is specified as
     * part of the request URL. The host name cannot be updated after insertion.
     */
    host?: string;

    /**
     * The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for update since it is already specified on the URL.
     */
    instance?: string;

    /**
     * This is always sql#user.
     */
    kind?: string;

    /**
     * The name of the user in the Cloud SQL instance. Can be omitted for update since it is already specified on the URL.
     */
    name?: string;

    /**
     * The password for the user.
     */
    password?: string;

    /**
     * The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for update since it
     * is already specified on the URL.
     */
    project?: string;
  }

  declare interface gapi$client$sqladmin$UsersListResponse {
    /**
     * List of user resources in the instance.
     */
    items?: gapi$client$sqladmin$User[];

    /**
     * This is always sql#usersList.
     */
    kind?: string;

    /**
     * An identifier that uniquely identifies the operation. You can use this identifier to retrieve the Operations resource that has information about the
     * operation.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$sqladmin$BackupRunsResource {
    /**
     * Deletes the backup taken by a backup run.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the Backup Run to delete. To find a Backup Run ID, use the list method.
       */
      id: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Retrieves a resource containing information about a backup run.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of this Backup Run.
       */
      id: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$BackupRun>;

    /**
     * Creates a new backup run on demand. This method is applicable only to Second Generation instances.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Lists all backup runs associated with a given instance and configuration in the reverse chronological order of the enqueued time.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of backup runs per response.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A previously-returned page token representing part of the larger set of results to view.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$BackupRunsListResponse>;
  }

  declare interface gapi$client$sqladmin$DatabasesResource {
    /**
     * Deletes a database from a Cloud SQL instance.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Name of the database to be deleted in the instance.
       */
      database: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Retrieves a resource containing information about a database inside a Cloud SQL instance.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Name of the database in the instance.
       */
      database: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Database>;

    /**
     * Inserts a resource containing information about a database inside a Cloud SQL instance.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Lists databases in the specified Cloud SQL instance.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project for which to list Cloud SQL instances.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$DatabasesListResponse>;

    /**
     * Updates a resource containing information about a database inside a Cloud SQL instance. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Name of the database to be updated in the instance.
       */
      database: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Updates a resource containing information about a database inside a Cloud SQL instance.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Name of the database to be updated in the instance.
       */
      database: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;
  }

  declare interface gapi$client$sqladmin$FlagsResource {
    /**
     * List all available database flags for Google Cloud SQL instances.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Database version for flag retrieval. Flags are specific to the database version.
       */
      databaseVersion?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$FlagsListResponse>;
  }

  declare interface gapi$client$sqladmin$InstancesResource {
    /**
     * Creates a Cloud SQL instance as a clone of the source instance. The API is not ready for Second Generation instances yet.
     */
    clone(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * The ID of the Cloud SQL instance to be cloned (source). This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the source as well as the clone Cloud SQL instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Deletes a Cloud SQL instance.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance to be deleted.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Exports data from a Cloud SQL instance to a Google Cloud Storage bucket as a MySQL dump file.
     */
    export(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance to be exported.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Failover the instance to its failover replica instance.
     */
    failover(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project that contains the read replica.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Retrieves a resource containing information about a Cloud SQL instance.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$DatabaseInstance>;

    /**
     * Imports data into a Cloud SQL instance from a MySQL dump file in Google Cloud Storage.
     */
    import(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Creates a new Cloud SQL instance.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project to which the newly created Cloud SQL instances should belong.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Lists instances under a given project in the alphabetical order of the instance name.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * An expression for filtering the results of the request, such as by name or label.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of results to return per response.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A previously-returned page token representing part of the larger set of results to view.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project for which to list Cloud SQL instances.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$InstancesListResponse>;

    /**
     * Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to
     * retain. For partial updates, use patch.. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Promotes the read replica instance to be a stand-alone Cloud SQL instance.
     */
    promoteReplica(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL read replica instance name.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project that contains the read replica.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Deletes all client certificates and generates a new server SSL certificate for the instance. The changes will not take effect until the instance is
     * restarted. Existing instances without a server certificate will need to call this once to set a server certificate.
     */
    resetSslConfig(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Restarts a Cloud SQL instance.
     */
    restart(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance to be restarted.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Restores a backup of a Cloud SQL instance.
     */
    restoreBackup(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Starts the replication in the read replica instance.
     */
    startReplica(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL read replica instance name.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project that contains the read replica.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Stops the replication in the read replica instance.
     */
    stopReplica(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL read replica instance name.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project that contains the read replica.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Truncate MySQL general and slow query log tables
     */
    truncateLog(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the Cloud SQL project.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Updates settings of a Cloud SQL instance. Caution: This is not a partial update, so you must include values for all the settings that you want to
     * retain. For partial updates, use patch.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;
  }

  declare interface gapi$client$sqladmin$OperationsResource {
    /**
     * Retrieves an instance operation that has been performed on an instance.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Instance operation ID.
       */
      operation: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Lists all instance operations that have been performed on the given Cloud SQL instance in the reverse chronological order of the start time.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of operations per response.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A previously-returned page token representing part of the larger set of results to view.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$OperationsListResponse>;
  }

  declare interface gapi$client$sqladmin$SslCertsResource {
    /**
     * Generates a short-lived X509 certificate containing the provided public key and signed by a private key specific to the target instance. Users may use
     * the certificate to authenticate as themselves when connecting to the database.
     */
    createEphemeral(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the Cloud SQL project.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$SslCert>;

    /**
     * Deletes the SSL certificate. The change will not take effect until the instance is restarted.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance to be deleted.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Sha1 FingerPrint.
       */
      sha1Fingerprint: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Retrieves a particular SSL certificate. Does not include the private key (required for usage). The private key must be saved from the response to
     * initial creation.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Sha1 FingerPrint.
       */
      sha1Fingerprint: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$SslCert>;

    /**
     * Creates an SSL certificate and returns it along with the private key and server certificate authority. The new certificate will not be usable until the
     * instance is restarted.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project to which the newly created Cloud SQL instances should belong.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$SslCertsInsertResponse>;

    /**
     * Lists all of the current SSL certificates for the instance.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Cloud SQL instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project for which to list Cloud SQL instances.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$SslCertsListResponse>;
  }

  declare interface gapi$client$sqladmin$TiersResource {
    /**
     * Lists all available service tiers for Google Cloud SQL, for example D1, D2. For related information, see Pricing.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project for which to list tiers.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$TiersListResponse>;
  }

  declare interface gapi$client$sqladmin$UsersResource {
    /**
     * Deletes a user from a Cloud SQL instance.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Host of the user in the instance.
       */
      host: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Name of the user in the instance.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Creates a new user in a Cloud SQL instance.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;

    /**
     * Lists users in the specified Cloud SQL instance.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$UsersListResponse>;

    /**
     * Updates an existing user in a Cloud SQL instance.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Host of the user in the instance.
       */
      host: string,

      /**
       * Database instance ID. This does not include the project ID.
       */
      instance: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Name of the user in the instance.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Project ID of the project that contains the instance.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$sqladmin$Operation>;
  }
}
