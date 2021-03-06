declare module "gapi.client.dataproc" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Google Cloud Dataproc API v1
   */
  declare function gapi$client$load(
    name: "dataproc",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "dataproc",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: dataproc$ProjectsResource;

  declare interface gapi$client$dataproc$AcceleratorConfig {
    /**
     * The number of the accelerator cards of this type exposed to this instance.
     */
    acceleratorCount?: number;

    /**
     * Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See Google Compute Engine AcceleratorTypes(
     * /compute/docs/reference/beta/acceleratorTypes)Examples &#42;
     * https://www.googleapis.com/compute/beta/projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 &#42;
     * projects/[project_id]/zones/us-east1-a/acceleratorTypes/nvidia-tesla-k80 &#42; nvidia-tesla-k80
     */
    acceleratorTypeUri?: string;
  }

  declare interface gapi$client$dataproc$Cluster {
    /**
     * Required. The cluster name. Cluster names within a project must be unique. Names of deleted clusters can be reused.
     */
    clusterName?: string;

    /**
     * Output-only. A cluster UUID (Unique Universal Identifier). Cloud Dataproc generates this value when it creates the cluster.
     */
    clusterUuid?: string;

    /**
     * Required. The cluster config. Note that Cloud Dataproc may set default values, and values may change when clusters are updated.
     */
    config?: dataproc$ClusterConfig;

    /**
     * Optional. The labels to associate with this cluster. Label keys must contain 1 to 63 characters, and must conform to RFC 1035
     * (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
     * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a cluster.
     */
    labels?: Record<string, string>;

    /**
     * Contains cluster daemon metrics such as HDFS and YARN stats.Beta Feature: This report is available for testing purposes only. It may be changed before
     * final release.
     */
    metrics?: dataproc$ClusterMetrics;

    /**
     * Required. The Google Cloud Platform project ID that the cluster belongs to.
     */
    projectId?: string;

    /**
     * Output-only. Cluster status.
     */
    status?: dataproc$ClusterStatus;

    /**
     * Output-only. The previous cluster status.
     */
    statusHistory?: dataproc$ClusterStatus[];
  }

  declare interface gapi$client$dataproc$ClusterConfig {
    /**
     * Optional. A Google Cloud Storage staging bucket used for sharing generated SSH keys and config. If you do not specify a staging bucket, Cloud Dataproc
     * will determine an appropriate Cloud Storage location (US, ASIA, or EU) for your cluster's staging bucket according to the Google Compute Engine zone
     * where your cluster is deployed, and then it will create and manage this project-level, per-location bucket for you.
     */
    configBucket?: string;

    /**
     * Required. The shared Google Compute Engine config settings for all instances in a cluster.
     */
    gceClusterConfig?: dataproc$GceClusterConfig;

    /**
     * Optional. Commands to execute on each node after config is completed. By default, executables are run on master and all worker nodes. You can test a
     * node's role metadata to run an executable on a master or worker node, as shown below using curl (you can also use wget):
     * ROLE=$(curl -H Metadata-Flavor:Google http://metadata/computeMetadata/v1/instance/attributes/dataproc-role)
     * if [[ "${ROLE}" == 'Master' ]]; then
     * ... master specific actions ...
     * else
     * ... worker specific actions ...
     * fi
     */
    initializationActions?: dataproc$NodeInitializationAction[];

    /**
     * Optional. The Google Compute Engine config settings for the master instance in a cluster.
     */
    masterConfig?: dataproc$InstanceGroupConfig;

    /**
     * Optional. The Google Compute Engine config settings for additional worker instances in a cluster.
     */
    secondaryWorkerConfig?: dataproc$InstanceGroupConfig;

    /**
     * Optional. The config settings for software inside the cluster.
     */
    softwareConfig?: dataproc$SoftwareConfig;

    /**
     * Optional. The Google Compute Engine config settings for worker instances in a cluster.
     */
    workerConfig?: dataproc$InstanceGroupConfig;
  }

  declare interface gapi$client$dataproc$ClusterMetrics {
    /**
     * The HDFS metrics.
     */
    hdfsMetrics?: Record<string, string>;

    /**
     * The YARN metrics.
     */
    yarnMetrics?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$ClusterOperationMetadata {
    /**
     * Output-only. Name of the cluster for the operation.
     */
    clusterName?: string;

    /**
     * Output-only. Cluster UUID for the operation.
     */
    clusterUuid?: string;

    /**
     * Output-only. Short description of operation.
     */
    description?: string;

    /**
     * Output-only. Labels associated with the operation
     */
    labels?: Record<string, string>;

    /**
     * Output-only. The operation type.
     */
    operationType?: string;

    /**
     * Output-only. Current operation status.
     */
    status?: dataproc$ClusterOperationStatus;

    /**
     * Output-only. The previous operation status.
     */
    statusHistory?: dataproc$ClusterOperationStatus[];

    /**
     * Output-only. Errors encountered during operation execution.
     */
    warnings?: string[];
  }

  declare interface gapi$client$dataproc$ClusterOperationStatus {
    /**
     * Output-only.A message containing any operation metadata details.
     */
    details?: string;

    /**
     * Output-only. A message containing the detailed operation state.
     */
    innerState?: string;

    /**
     * Output-only. A message containing the operation state.
     */
    state?: string;

    /**
     * Output-only. The time this state was entered.
     */
    stateStartTime?: string;
  }

  declare interface gapi$client$dataproc$ClusterStatus {
    /**
     * Output-only. Optional details of cluster's state.
     */
    detail?: string;

    /**
     * Output-only. The cluster's state.
     */
    state?: string;

    /**
     * Output-only. Time when this state was entered.
     */
    stateStartTime?: string;

    /**
     * Output-only. Additional state information that includes status reported by the agent.
     */
    substate?: string;
  }

  declare interface gapi$client$dataproc$DiagnoseClusterResults {
    /**
     * Output-only. The Google Cloud Storage URI of the diagnostic output. The output report is a plain text file with a summary of collected diagnostics.
     */
    outputUri?: string;
  }

  declare interface gapi$client$dataproc$DiskConfig {
    /**
     * Optional. Size in GB of the boot disk (default is 500GB).
     */
    bootDiskSizeGb?: number;

    /**
     * Optional. Number of attached SSDs, from 0 to 4 (default is 0). If SSDs are not attached, the boot disk is used to store runtime logs and HDFS
     * (https://hadoop.apache.org/docs/r1.2.1/hdfs_user_guide.html) data. If one or more SSDs are attached, this runtime bulk data is spread across them, and
     * the boot disk contains only basic config and installed binaries.
     */
    numLocalSsds?: number;
  }

  declare interface gapi$client$dataproc$GceClusterConfig {
    /**
     * Optional. If true, all instances in the cluster will only have internal IP addresses. By default, clusters are not restricted to internal IP addresses,
     * and will have ephemeral external IP addresses assigned to each instance. This internal_ip_only restriction can only be enabled for subnetwork enabled
     * networks, and all off-cluster dependencies must be configured to be accessible without external IP addresses.
     */
    internalIpOnly?: boolean;

    /**
     * The Google Compute Engine metadata entries to add to all instances (see Project and instance metadata
     * (https://cloud.google.com/compute/docs/storing-retrieving-metadata#project_and_instance_metadata)).
     */
    metadata?: Record<string, string>;

    /**
     * Optional. The Google Compute Engine network to be used for machine communications. Cannot be specified with subnetwork_uri. If neither network_uri nor
     * subnetwork_uri is specified, the "default" network of the project is used, if it exists. Cannot be a "Custom Subnet Network" (see Using Subnetworks for
     * more information).A full URL, partial URI, or short name are valid. Examples:
     * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/global/default
     * projects/[project_id]/regions/global/default
     * default
     */
    networkUri?: string;

    /**
     * Optional. The service account of the instances. Defaults to the default Google Compute Engine service account. Custom service accounts need permissions
     * equivalent to the folloing IAM roles:
     * roles/logging.logWriter
     * roles/storage.objectAdmin(see https://cloud.google.com/compute/docs/access/service-accounts#custom_service_accounts for more information). Example:
     * [account_id]@[project_id].iam.gserviceaccount.com
     */
    serviceAccount?: string;

    /**
     * Optional. The URIs of service account scopes to be included in Google Compute Engine instances. The following base set of scopes is always included:
     * https://www.googleapis.com/auth/cloud.useraccounts.readonly
     * https://www.googleapis.com/auth/devstorage.read_write
     * https://www.googleapis.com/auth/logging.writeIf no scopes are specified, the following defaults are also provided:
     * https://www.googleapis.com/auth/bigquery
     * https://www.googleapis.com/auth/bigtable.admin.table
     * https://www.googleapis.com/auth/bigtable.data
     * https://www.googleapis.com/auth/devstorage.full_control
     */
    serviceAccountScopes?: string[];

    /**
     * Optional. The Google Compute Engine subnetwork to be used for machine communications. Cannot be specified with network_uri.A full URL, partial URI, or
     * short name are valid. Examples:
     * https://www.googleapis.com/compute/v1/projects/[project_id]/regions/us-east1/sub0
     * projects/[project_id]/regions/us-east1/sub0
     * sub0
     */
    subnetworkUri?: string;

    /**
     * The Google Compute Engine tags to add to all instances (see Tagging instances).
     */
    tags?: string[];

    /**
     * Optional. The zone where the Google Compute Engine cluster will be located. On a create request, it is required in the "global" region. If omitted in a
     * non-global Cloud Dataproc region, the service will pick a zone in the corresponding Compute Engine region. On a get request, zone will always be
     * present.A full URL, partial URI, or short name are valid. Examples:
     * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/[zone]
     * projects/[project_id]/zones/[zone]
     * us-central1-f
     */
    zoneUri?: string;
  }

  declare interface gapi$client$dataproc$HadoopJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of Hadoop drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz,
     * or .zip.
     */
    archiveUris?: string[];

    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as -libjars or -Dfoo=bar, that can be set as job properties, since a
     * collision may occur that causes an incorrect job submission.
     */
    args?: string[];

    /**
     * Optional. HCFS (Hadoop Compatible Filesystem) URIs of files to be copied to the working directory of Hadoop drivers and distributed tasks. Useful for
     * naively parallel tasks.
     */
    fileUris?: string[];

    /**
     * Optional. Jar file URIs to add to the CLASSPATHs of the Hadoop driver and tasks.
     */
    jarFileUris?: string[];

    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: dataproc$LoggingConfig;

    /**
     * The name of the driver's main class. The jar file containing the class must be in the default CLASSPATH or specified in jar_file_uris.
     */
    mainClass?: string;

    /**
     * The HCFS URI of the jar file containing the main class. Examples:  'gs://foo-bucket/analytics-binaries/extract-useful-metrics-mr.jar'
     * 'hdfs:/tmp/test-samples/custom-wordcount.jar'  'file:///home/usr/lib/hadoop-mapreduce/hadoop-mapreduce-examples.jar'
     */
    mainJarFileUri?: string;

    /**
     * Optional. A mapping of property names to values, used to configure Hadoop. Properties that conflict with values set by the Cloud Dataproc API may be
     * overwritten. Can include properties set in /etc/hadoop/conf/&#42;-site and classes in user code.
     */
    properties?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$HiveJob {
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent
     * parallel queries.
     */
    continueOnFailure?: boolean;

    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Hive server and Hadoop MapReduce (MR) tasks. Can contain Hive SerDes and UDFs.
     */
    jarFileUris?: string[];

    /**
     * Optional. A mapping of property names and values, used to configure Hive. Properties that conflict with values set by the Cloud Dataproc API may be
     * overwritten. Can include properties set in /etc/hadoop/conf/&#42;-site.xml, /etc/hive/conf/hive-site.xml, and classes in user code.
     */
    properties?: Record<string, string>;

    /**
     * The HCFS URI of the script that contains Hive queries.
     */
    queryFileUri?: string;

    /**
     * A list of queries.
     */
    queryList?: dataproc$QueryList;

    /**
     * Optional. Mapping of query variable names to values (equivalent to the Hive command: SET name="value";).
     */
    scriptVariables?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$InstanceGroupConfig {
    /**
     * Optional. The Google Compute Engine accelerator configuration for these instances.Beta Feature: This feature is still under development. It may be
     * changed before final release.
     */
    accelerators?: gapi$client$dataproc$AcceleratorConfig[];

    /**
     * Optional. Disk option config settings.
     */
    diskConfig?: gapi$client$dataproc$DiskConfig;

    /**
     * Output-only. The Google Compute Engine image resource used for cluster instances. Inferred from SoftwareConfig.image_version.
     */
    imageUri?: string;

    /**
     * Optional. The list of instance names. Cloud Dataproc derives the names from cluster_name, num_instances, and the instance group if not set by user
     * (recommended practice is to let Cloud Dataproc derive the name).
     */
    instanceNames?: string[];

    /**
     * Optional. Specifies that this instance group contains preemptible instances.
     */
    isPreemptible?: boolean;

    /**
     * Optional. The Google Compute Engine machine type used for cluster instances.A full URL, partial URI, or short name are valid. Examples:
     * https://www.googleapis.com/compute/v1/projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
     * projects/[project_id]/zones/us-east1-a/machineTypes/n1-standard-2
     * n1-standard-2
     */
    machineTypeUri?: string;

    /**
     * Output-only. The config for Google Compute Engine Instance Group Manager that manages this group. This is only used for preemptible instance groups.
     */
    managedGroupConfig?: dataproc$ManagedGroupConfig;

    /**
     * Optional. The number of VM instances in the instance group. For master instance groups, must be set to 1.
     */
    numInstances?: number;
  }

  declare interface gapi$client$dataproc$Job {
    /**
     * Output-only. If present, the location of miscellaneous control files which may be used as part of job setup and handling. If not present, control files
     * may be placed in the same location as driver_output_uri.
     */
    driverControlFilesUri?: string;

    /**
     * Output-only. A URI pointing to the location of the stdout of the job's driver program.
     */
    driverOutputResourceUri?: string;

    /**
     * Job is a Hadoop job.
     */
    hadoopJob?: gapi$client$dataproc$HadoopJob;

    /**
     * Job is a Hive job.
     */
    hiveJob?: gapi$client$dataproc$HiveJob;

    /**
     * Optional. The labels to associate with this job. Label keys must contain 1 to 63 characters, and must conform to RFC 1035
     * (https://www.ietf.org/rfc/rfc1035.txt). Label values may be empty, but, if present, must contain 1 to 63 characters, and must conform to RFC 1035
     * (https://www.ietf.org/rfc/rfc1035.txt). No more than 32 labels can be associated with a job.
     */
    labels?: Record<string, string>;

    /**
     * Job is a Pig job.
     */
    pigJob?: dataproc$PigJob;

    /**
     * Required. Job information, including how, when, and where to run the job.
     */
    placement?: dataproc$JobPlacement;

    /**
     * Job is a Pyspark job.
     */
    pysparkJob?: dataproc$PySparkJob;

    /**
     * Optional. The fully qualified reference to the job, which can be used to obtain the equivalent REST path of the job resource. If this property is not
     * specified when a job is created, the server generates a <code>job_id</code>.
     */
    reference?: dataproc$JobReference;

    /**
     * Optional. Job scheduling configuration.
     */
    scheduling?: dataproc$JobScheduling;

    /**
     * Job is a Spark job.
     */
    sparkJob?: dataproc$SparkJob;

    /**
     * Job is a SparkSql job.
     */
    sparkSqlJob?: dataproc$SparkSqlJob;

    /**
     * Output-only. The job status. Additional application-specific status information may be contained in the <code>type_job</code> and
     * <code>yarn_applications</code> fields.
     */
    status?: dataproc$JobStatus;

    /**
     * Output-only. The previous job status.
     */
    statusHistory?: dataproc$JobStatus[];

    /**
     * Output-only. The collection of YARN applications spun up by this job.Beta Feature: This report is available for testing purposes only. It may be
     * changed before final release.
     */
    yarnApplications?: dataproc$YarnApplication[];
  }

  declare interface gapi$client$dataproc$JobPlacement {
    /**
     * Required. The name of the cluster where the job will be submitted.
     */
    clusterName?: string;

    /**
     * Output-only. A cluster UUID generated by the Cloud Dataproc service when the job is submitted.
     */
    clusterUuid?: string;
  }

  declare interface gapi$client$dataproc$JobReference {
    /**
     * Optional. The job ID, which must be unique within the project. The job ID is generated by the server upon job submission or provided by the user as a
     * means to perform retries without creating duplicate jobs. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or hyphens (-).
     * The maximum length is 100 characters.
     */
    jobId?: string;

    /**
     * Required. The ID of the Google Cloud Platform project that the job belongs to.
     */
    projectId?: string;
  }

  declare interface gapi$client$dataproc$JobScheduling {
    /**
     * Optional. Maximum number of times per hour a driver may be restarted as a result of driver terminating with non-zero code before job is reported
     * failed.A job may be reported as thrashing if driver exits with non-zero code 4 times within 10 minute window.Maximum value is 10.
     */
    maxFailuresPerHour?: number;
  }

  declare interface gapi$client$dataproc$JobStatus {
    /**
     * Output-only. Optional job state details, such as an error description if the state is <code>ERROR</code>.
     */
    details?: string;

    /**
     * Output-only. A state message specifying the overall job state.
     */
    state?: string;

    /**
     * Output-only. The time when this state was entered.
     */
    stateStartTime?: string;

    /**
     * Output-only. Additional state information, which includes status reported by the agent.
     */
    substate?: string;
  }

  declare interface gapi$client$dataproc$ListClustersResponse {
    /**
     * Output-only. The clusters in the project.
     */
    clusters?: gapi$client$dataproc$Cluster[];

    /**
     * Output-only. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the
     * page_token in a subsequent ListClustersRequest.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$dataproc$ListJobsResponse {
    /**
     * Output-only. Jobs list.
     */
    jobs?: gapi$client$dataproc$Job[];

    /**
     * Optional. This token is included in the response if there are more results to fetch. To fetch additional results, provide this value as the page_token
     * in a subsequent <code>ListJobsRequest</code>.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$dataproc$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;

    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: dataproc$Operation[];
  }

  declare interface gapi$client$dataproc$LoggingConfig {
    /**
     * The per-package log levels for the driver. This may include "root" package name to configure rootLogger. Examples:  'com.google = FATAL', 'root =
     * INFO', 'org.apache = DEBUG'
     */
    driverLogLevels?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$ManagedGroupConfig {
    /**
     * Output-only. The name of the Instance Group Manager for this group.
     */
    instanceGroupManagerName?: string;

    /**
     * Output-only. The name of the Instance Template used for the Managed Instance Group.
     */
    instanceTemplateName?: string;
  }

  declare interface gapi$client$dataproc$NodeInitializationAction {
    /**
     * Required. Google Cloud Storage URI of executable file.
     */
    executableFile?: string;

    /**
     * Optional. Amount of time executable has to complete. Default is 10 minutes. Cluster creation fails with an explanatory error message (the name of the
     * executable that caused the error and the exceeded timeout period) if the executable is not completed at end of the timeout period.
     */
    executionTimeout?: string;
  }

  declare interface gapi$client$dataproc$Operation {
    /**
     * If the value is false, it means the operation is still in progress. If true, the operation is completed, and either error or response is available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: dataproc$Status;

    /**
     * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some
     * services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
     */
    metadata?: Record<string, any>;

    /**
     * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the name should
     * have the format of operations/some/unique/name.
     */
    name?: string;

    /**
     * The normal response of the operation in case of success. If the original method returns no data on success, such as Delete, the response is
     * google.protobuf.Empty. If the original method is standard Get/Create/Update, the response should be the resource. For other methods, the response
     * should have the type XxxResponse, where Xxx is the original method name. For example, if the original method name is TakeSnapshot(), the inferred
     * response type is TakeSnapshotResponse.
     */
    response?: Record<string, any>;
  }

  declare interface gapi$client$dataproc$PigJob {
    /**
     * Optional. Whether to continue executing queries if a query fails. The default value is false. Setting to true can be useful when executing independent
     * parallel queries.
     */
    continueOnFailure?: boolean;

    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATH of the Pig Client and Hadoop MapReduce (MR) tasks. Can contain Pig UDFs.
     */
    jarFileUris?: string[];

    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: gapi$client$dataproc$LoggingConfig;

    /**
     * Optional. A mapping of property names to values, used to configure Pig. Properties that conflict with values set by the Cloud Dataproc API may be
     * overwritten. Can include properties set in /etc/hadoop/conf/&#42;-site.xml, /etc/pig/conf/pig.properties, and classes in user code.
     */
    properties?: Record<string, string>;

    /**
     * The HCFS URI of the script that contains the Pig queries.
     */
    queryFileUri?: string;

    /**
     * A list of queries.
     */
    queryList?: dataproc$QueryList;

    /**
     * Optional. Mapping of query variable names to values (equivalent to the Pig command: name=[value]).
     */
    scriptVariables?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$PySparkJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of .jar, .tar, .tar.gz, .tgz, and .zip.
     */
    archiveUris?: string[];

    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur
     * that causes an incorrect job submission.
     */
    args?: string[];

    /**
     * Optional. HCFS URIs of files to be copied to the working directory of Python drivers and distributed tasks. Useful for naively parallel tasks.
     */
    fileUris?: string[];

    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Python driver and tasks.
     */
    jarFileUris?: string[];

    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: gapi$client$dataproc$LoggingConfig;

    /**
     * Required. The HCFS URI of the main Python file to use as the driver. Must be a .py file.
     */
    mainPythonFileUri?: string;

    /**
     * Optional. A mapping of property names to values, used to configure PySpark. Properties that conflict with values set by the Cloud Dataproc API may be
     * overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
     */
    properties?: Record<string, string>;

    /**
     * Optional. HCFS file URIs of Python files to pass to the PySpark framework. Supported file types: .py, .egg, and .zip.
     */
    pythonFileUris?: string[];
  }

  declare interface gapi$client$dataproc$QueryList {
    /**
     * Required. The queries to execute. You do not need to terminate a query with a semicolon. Multiple queries can be specified in one string by separating
     * each with a semicolon. Here is an example of an Cloud Dataproc API snippet that uses a QueryList to specify a HiveJob:
     * "hiveJob": {
     * "queryList": {
     * "queries": [
     * "query1",
     * "query2",
     * "query3;query4",
     * ]
     * }
     * }
     */
    queries?: string[];
  }

  declare interface gapi$client$dataproc$SoftwareConfig {
    /**
     * Optional. The version of software inside the cluster. It must match the regular expression [0-9]+\.[0-9]+. If unspecified, it defaults to the latest
     * version (see Cloud Dataproc Versioning).
     */
    imageVersion?: string;

    /**
     * Optional. The properties to set on daemon config files.Property keys are specified in prefix:property format, such as core:fs.defaultFS. The following
     * are supported prefixes and their mappings:
     * capacity-scheduler: capacity-scheduler.xml
     * core: core-site.xml
     * distcp: distcp-default.xml
     * hdfs: hdfs-site.xml
     * hive: hive-site.xml
     * mapred: mapred-site.xml
     * pig: pig.properties
     * spark: spark-defaults.conf
     * yarn: yarn-site.xmlFor more information, see Cluster properties.
     */
    properties?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$SparkJob {
    /**
     * Optional. HCFS URIs of archives to be extracted in the working directory of Spark drivers and tasks. Supported file types: .jar, .tar, .tar.gz, .tgz,
     * and .zip.
     */
    archiveUris?: string[];

    /**
     * Optional. The arguments to pass to the driver. Do not include arguments, such as --conf, that can be set as job properties, since a collision may occur
     * that causes an incorrect job submission.
     */
    args?: string[];

    /**
     * Optional. HCFS URIs of files to be copied to the working directory of Spark drivers and distributed tasks. Useful for naively parallel tasks.
     */
    fileUris?: string[];

    /**
     * Optional. HCFS URIs of jar files to add to the CLASSPATHs of the Spark driver and tasks.
     */
    jarFileUris?: string[];

    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: gapi$client$dataproc$LoggingConfig;

    /**
     * The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris.
     */
    mainClass?: string;

    /**
     * The HCFS URI of the jar file that contains the main class.
     */
    mainJarFileUri?: string;

    /**
     * Optional. A mapping of property names to values, used to configure Spark. Properties that conflict with values set by the Cloud Dataproc API may be
     * overwritten. Can include properties set in /etc/spark/conf/spark-defaults.conf and classes in user code.
     */
    properties?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$SparkSqlJob {
    /**
     * Optional. HCFS URIs of jar files to be added to the Spark CLASSPATH.
     */
    jarFileUris?: string[];

    /**
     * Optional. The runtime log config for job execution.
     */
    loggingConfig?: gapi$client$dataproc$LoggingConfig;

    /**
     * Optional. A mapping of property names to values, used to configure Spark SQL's SparkConf. Properties that conflict with values set by the Cloud
     * Dataproc API may be overwritten.
     */
    properties?: Record<string, string>;

    /**
     * The HCFS URI of the script that contains SQL queries.
     */
    queryFileUri?: string;

    /**
     * A list of queries.
     */
    queryList?: gapi$client$dataproc$QueryList;

    /**
     * Optional. Mapping of query variable names to values (equivalent to the Spark SQL command: SET name="value";).
     */
    scriptVariables?: Record<string, string>;
  }

  declare interface gapi$client$dataproc$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface gapi$client$dataproc$SubmitJobRequest {
    /**
     * Required. The job resource.
     */
    job?: gapi$client$dataproc$Job;
  }

  declare interface gapi$client$dataproc$YarnApplication {
    /**
     * Required. The application name.
     */
    name?: string;

    /**
     * Required. The numerical progress of the application, from 1 to 100.
     */
    progress?: number;

    /**
     * Required. The application state.
     */
    state?: string;

    /**
     * Optional. The HTTP URL of the ApplicationMaster, HistoryServer, or TimelineServer that provides application-specific information. The URL uses the
     * internal hostname, and requires a proxy server for resolution and, possibly, access.
     */
    trackingUrl?: string;
  }

  declare interface gapi$client$dataproc$ClustersResource {
    /**
     * Creates a cluster in a project.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Operation>;

    /**
     * Deletes a cluster in a project.
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
       * Required. The cluster name.
       */
      clusterName: string,

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
       * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Operation>;

    /**
     * Gets cluster diagnostic information. After the operation completes, the Operation.response field contains DiagnoseClusterOutputLocation.
     */
    diagnose(request: {
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
       * Required. The cluster name.
       */
      clusterName: string,

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
       * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Operation>;

    /**
     * Gets the resource representation for a cluster in a project.
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
       * Required. The cluster name.
       */
      clusterName: string,

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
       * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Cluster>;

    /**
     * Lists all regions/{region}/clusters in a project.
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
       * Optional. A filter constraining the clusters to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where
       * field is one of status.state, clusterName, or labels.[KEY], and [KEY] is a label key. value can be &#42; to match all values. status.state can be one of
       * the following: ACTIVE, INACTIVE, CREATING, RUNNING, ERROR, DELETING, or UPDATING. ACTIVE contains the CREATING, UPDATING, and RUNNING states. INACTIVE
       * contains the DELETING and ERROR states. clusterName is the name of the cluster provided at creation time. Only the logical AND operator is supported;
       * space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE AND clusterName = mycluster AND labels.env =
       * staging AND labels.starred = &#42;
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
       * Optional. The standard List page size.
       */
      pageSize?: number,

      /**
       * Optional. The standard List page token.
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
       * Required. The ID of the Google Cloud Platform project that the cluster belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$ListClustersResponse>;

    /**
     * Updates a cluster in a project.
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
       * Required. The cluster name.
       */
      clusterName: string,

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
       * Required. The ID of the Google Cloud Platform project the cluster belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Required. Specifies the path, relative to Cluster, of the field to update. For example, to change the number of workers in a cluster to 5, the
       * update_mask parameter would be specified as config.worker_config.num_instances, and the PATCH request body would specify the new value, as follows:
       * {
       * "config":{
       * "workerConfig":{
       * "numInstances":"5"
       * }
       * }
       * }
       * Similarly, to change the number of preemptible workers in a cluster to 5, the update_mask parameter would be
       * config.secondary_worker_config.num_instances, and the PATCH request body would be set as follows:
       * {
       * "config":{
       * "secondaryWorkerConfig":{
       * "numInstances":"5"
       * }
       * }
       * }
       * <strong>Note:</strong> Currently, only the following fields can be updated:<table>  <tbody>  <tr>  <td><strong>Mask</strong></td>
       * <td><strong>Purpose</strong></td>  </tr>  <tr>  <td><strong><em>labels</em></strong></td>  <td>Update labels</td>  </tr>  <tr>
       * <td><strong><em>config.worker_config.num_instances</em></strong></td>  <td>Resize primary worker group</td>  </tr>  <tr>
       * <td><strong><em>config.secondary_worker_config.num_instances</em></strong></td>  <td>Resize secondary worker group</td>  </tr>  </tbody>  </table>
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Operation>;
  }

  declare interface gapi$client$dataproc$JobsResource {
    /**
     * Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list or regions/{region}/jobs.get.
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
       * Required. The job ID.
       */
      jobId: string,

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
       * Required. The ID of the Google Cloud Platform project that the job belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Job>;

    /**
     * Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
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
       * Required. The job ID.
       */
      jobId: string,

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
       * Required. The ID of the Google Cloud Platform project that the job belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

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
     * Gets the resource representation for a job in a project.
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
       * Required. The job ID.
       */
      jobId: string,

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
       * Required. The ID of the Google Cloud Platform project that the job belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Job>;

    /**
     * Lists regions/{region}/jobs in a project.
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
       * Optional. If set, the returned jobs list includes only jobs that were submitted to the named cluster.
       */
      clusterName?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Optional. A filter constraining the jobs to list. Filters are case-sensitive and have the following syntax:field = value AND field = value ...where
       * field is status.state or labels.[KEY], and [KEY] is a label key. value can be &#42; to match all values. status.state can be either ACTIVE or INACTIVE.
       * Only the logical AND operator is supported; space-separated items are treated as having an implicit AND operator.Example filter:status.state = ACTIVE
       * AND labels.env = staging AND labels.starred = &#42;
       */
      filter?: string,

      /**
       * Optional. Specifies enumerated categories of jobs to list (default = match ALL jobs).
       */
      jobStateMatcher?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Optional. The number of results to return in each response.
       */
      pageSize?: number,

      /**
       * Optional. The page token, returned by a previous call, to request the next page of results.
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
       * Required. The ID of the Google Cloud Platform project that the job belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$ListJobsResponse>;

    /**
     * Updates a job in a project.
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
       * Required. The job ID.
       */
      jobId: string,

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
       * Required. The ID of the Google Cloud Platform project that the job belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Required. Specifies the path, relative to <code>Job</code>, of the field to update. For example, to update the labels of a Job the
       * <code>update_mask</code> parameter would be specified as <code>labels</code>, and the PATCH request body would specify the new value.
       * <strong>Note:</strong> Currently, <code>labels</code> is the only field that can be updated.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Job>;

    /**
     * Submits a job to a cluster.
     */
    submit(request: {
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
       * Required. The ID of the Google Cloud Platform project that the job belongs to.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Required. The Cloud Dataproc region in which to handle the request.
       */
      region: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$dataproc$Job>;
  }

  declare interface gapi$client$dataproc$OperationsResource {
    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If
     * the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check
     * whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted;
     * instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
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
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the
     * operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
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
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API
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
    }): Request<gapi$client$dataproc$Operation>;

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name
     * binding allows API services to override the binding to use different resource name schemes, such as users/&#42;/operations. To override the binding, API
     * services can add a binding such as "/v1/{name=users/&#42;}/operations" to their service configuration. For backwards compatibility, the default name
     * includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection
     * id.
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
    }): Request<gapi$client$dataproc$ListOperationsResponse>;
  }

  declare interface gapi$client$dataproc$RegionsResource {
    clusters: gapi$client$dataproc$ClustersResource;
    jobs: gapi$client$dataproc$JobsResource;
    operations: gapi$client$dataproc$OperationsResource;
  }

  declare interface gapi$client$dataproc$ProjectsResource {
    regions: gapi$client$dataproc$RegionsResource;
  }
}
