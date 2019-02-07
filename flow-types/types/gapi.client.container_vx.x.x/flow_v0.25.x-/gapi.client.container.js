declare module "gapi.client.container" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    projects: typeof client$projects
  };

  /**
   * Load Google Container Engine API v1
   */
  declare function client$load(
    name: "container",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "container",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$projects: container$container$ProjectsResource;

  declare interface container$AcceleratorConfig {
    /**
     * The number of the accelerator cards exposed to an instance.
     */
    acceleratorCount?: string;

    /**
     * The accelerator type resource name. List of supported accelerators
     * [here](/compute/docs/gpus/#Introduction)
     */
    acceleratorType?: string;
  }

  declare interface container$AddonsConfig {
    /**
     * Configuration for the horizontal pod autoscaling feature, which
     * increases or decreases the number of replica pods a replication controller
     * has based on the resource usage of the existing pods.
     */
    horizontalPodAutoscaling?: container$HorizontalPodAutoscaling;

    /**
     * Configuration for the HTTP (L7) load balancing controller addon, which
     * makes it easy to set up HTTP load balancers for services in a cluster.
     */
    httpLoadBalancing?: container$HttpLoadBalancing;

    /**
     * Configuration for the Kubernetes Dashboard.
     */
    kubernetesDashboard?: container$KubernetesDashboard;

    /**
     * Configuration for NetworkPolicy. This only tracks whether the addon
     * is enabled or not on the Master, it does not track whether network policy
     * is enabled for the nodes.
     */
    networkPolicyConfig?: container$NetworkPolicyConfig;
  }

  declare interface container$AutoUpgradeOptions {
    /**
     * [Output only] This field is set when upgrades are about to commence
     * with the approximate start time for the upgrades, in
     * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    autoUpgradeStartTime?: string;

    /**
     * [Output only] This field is set when upgrades are about to commence
     * with the description of the upgrade.
     */
    description?: string;
  }

  declare interface container$CidrBlock {
    /**
     * cidr_block must be specified in CIDR notation.
     */
    cidrBlock?: string;

    /**
     * display_name is an optional field for users to identify CIDR blocks.
     */
    displayName?: string;
  }

  declare interface container$ClientCertificateConfig {
    /**
     * Issue a client certificate.
     */
    issueClientCertificate?: boolean;
  }

  declare interface container$Cluster {
    /**
     * Configurations for the various addons available to run in the cluster.
     */
    addonsConfig?: container$AddonsConfig;

    /**
     * The IP address range of the container pods in this cluster, in
     * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
     * notation (e.g. `10.96.0.0/14`). Leave blank to have
     * one automatically chosen or specify a `/14` block in `10.0.0.0/8`.
     */
    clusterIpv4Cidr?: string;

    /**
     * [Output only] The time the cluster was created, in
     * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    createTime?: string;

    /**
     * [Output only] The current software version of the master endpoint.
     */
    currentMasterVersion?: string;

    /**
     * [Output only] The number of nodes currently in the cluster.
     */
    currentNodeCount?: number;

    /**
     * [Output only] The current version of the node software components.
     * If they are currently at multiple versions because they're in the process
     * of being upgraded, this reflects the minimum version of all nodes.
     */
    currentNodeVersion?: string;

    /**
     * An optional description of this cluster.
     */
    description?: string;

    /**
     * Kubernetes alpha features are enabled on this cluster. This includes alpha
     * API groups (e.g. v1alpha1) and features that may not be production ready in
     * the kubernetes version of the master and nodes.
     * The cluster has no SLA for uptime and master/node upgrades are disabled.
     * Alpha enabled clusters are automatically deleted thirty days after
     * creation.
     */
    enableKubernetesAlpha?: boolean;

    /**
     * [Output only] The IP address of this cluster's master endpoint.
     * The endpoint can be accessed from the internet at
     * `https://username:password@endpoint/`.
     *
     * See the `masterAuth` property of this resource for username and
     * password information.
     */
    endpoint?: string;

    /**
     * [Output only] The time the cluster will be automatically
     * deleted in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    expireTime?: string;

    /**
     * The initial Kubernetes version for this cluster.  Valid versions are those
     * found in validMasterVersions returned by getServerConfig.  The version can
     * be upgraded over time; such upgrades are reflected in
     * currentMasterVersion and currentNodeVersion.
     */
    initialClusterVersion?: string;

    /**
     * The number of nodes to create in this cluster. You must ensure that your
     * Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
     * is sufficient for this number of instances. You must also have available
     * firewall and routes quota.
     * For requests, this field should only be used in lieu of a
     * "node_pool" object, since this configuration (along with the
     * "node_config") will be used to create a "NodePool" object with an
     * auto-generated name. Do not use this and a node_pool at the same time.
     */
    initialNodeCount?: number;

    /**
     * [Output only] The resource URLs of [instance
     * groups](/compute/docs/instance-groups/) associated with this
     * cluster.
     */
    instanceGroupUrls?: string[];

    /**
     * Configuration for cluster IP allocation.
     */
    ipAllocationPolicy?: container$IPAllocationPolicy;

    /**
     * The fingerprint of the set of labels for this cluster.
     */
    labelFingerprint?: string;

    /**
     * Configuration for the legacy ABAC authorization mode.
     */
    legacyAbac?: container$LegacyAbac;

    /**
     * The list of Google Compute Engine
     * [locations](/compute/docs/zones#available) in which the cluster's nodes
     * should be located.
     */
    locations?: string[];

    /**
     * The logging service the cluster should use to write logs.
     * Currently available options:
     *
     * &#42; `logging.googleapis.com` - the Google Cloud Logging service.
     * &#42; `none` - no logs will be exported from the cluster.
     * &#42; if left as an empty string,`logging.googleapis.com` will be used.
     */
    loggingService?: string;

    /**
     * Configure the maintenance policy for this cluster.
     */
    maintenancePolicy?: container$MaintenancePolicy;

    /**
     * The authentication information for accessing the master endpoint.
     */
    masterAuth?: container$MasterAuth;

    /**
     * Master authorized networks is a Beta feature.
     * The configuration options for master authorized networks feature.
     */
    masterAuthorizedNetworksConfig?: container$MasterAuthorizedNetworksConfig;

    /**
     * The monitoring service the cluster should use to write metrics.
     * Currently available options:
     *
     * &#42; `monitoring.googleapis.com` - the Google Cloud Monitoring service.
     * &#42; `none` - no metrics will be exported from the cluster.
     * &#42; if left as an empty string, `monitoring.googleapis.com` will be used.
     */
    monitoringService?: string;

    /**
     * The name of this cluster. The name must be unique within this project
     * and zone, and can be up to 40 characters with the following restrictions:
     *
     * &#42; Lowercase letters, numbers, and hyphens only.
     * &#42; Must start with a letter.
     * &#42; Must end with a number or a letter.
     */
    name?: string;

    /**
     * The name of the Google Compute Engine
     * [network](/compute/docs/networks-and-firewalls#networks) to which the
     * cluster is connected. If left unspecified, the `default` network
     * will be used.
     */
    network?: string;

    /**
     * Configuration options for the NetworkPolicy feature.
     */
    networkPolicy?: container$NetworkPolicy;

    /**
     * Parameters used in creating the cluster's nodes.
     * See `nodeConfig` for the description of its properties.
     * For requests, this field should only be used in lieu of a
     * "node_pool" object, since this configuration (along with the
     * "initial_node_count") will be used to create a "NodePool" object with an
     * auto-generated name. Do not use this and a node_pool at the same time.
     * For responses, this field will be populated with the node configuration of
     * the first node pool.
     *
     * If unspecified, the defaults are used.
     */
    nodeConfig?: container$NodeConfig;

    /**
     * [Output only] The size of the address space on each node for hosting
     * containers. This is provisioned from within the `container_ipv4_cidr`
     * range.
     */
    nodeIpv4CidrSize?: number;

    /**
     * The node pools associated with this cluster.
     * This field should not be set if "node_config" or "initial_node_count" are
     * specified.
     */
    nodePools?: container$NodePool[];

    /**
     * The resource labels for the cluster to use to annotate any related
     * Google Compute Engine resources.
     */
    resourceLabels?: Record<string, string>;

    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;

    /**
     * [Output only] The IP address range of the Kubernetes services in
     * this cluster, in
     * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
     * notation (e.g. `1.2.3.4/29`). Service addresses are
     * typically put in the last `/16` from the container CIDR.
     */
    servicesIpv4Cidr?: string;

    /**
     * [Output only] The current status of this cluster.
     */
    status?: string;

    /**
     * [Output only] Additional information about the current status of this
     * cluster, if available.
     */
    statusMessage?: string;

    /**
     * The name of the Google Compute Engine
     * [subnetwork](/compute/docs/subnetworks) to which the
     * cluster is connected.
     */
    subnetwork?: string;

    /**
     * [Output only] The name of the Google Compute Engine
     * [zone](/compute/docs/zones#available) in which the cluster
     * resides.
     */
    zone?: string;
  }

  declare interface container$ClusterUpdate {
    /**
     * Configurations for the various addons available to run in the cluster.
     */
    desiredAddonsConfig?: container$AddonsConfig;

    /**
     * The desired image type for the node pool.
     * NOTE: Set the "desired_node_pool" field as well.
     */
    desiredImageType?: string;

    /**
     * The desired list of Google Compute Engine
     * [locations](/compute/docs/zones#available) in which the cluster's nodes
     * should be located. Changing the locations a cluster is in will result
     * in nodes being either created or removed from the cluster, depending on
     * whether locations are being added or removed.
     *
     * This list must always include the cluster's primary zone.
     */
    desiredLocations?: string[];

    /**
     * Master authorized networks is a Beta feature.
     * The desired configuration options for master authorized networks feature.
     */
    desiredMasterAuthorizedNetworksConfig?: container$MasterAuthorizedNetworksConfig;

    /**
     * The Kubernetes version to change the master to. The only valid value is the
     * latest supported version. Use "-" to have the server automatically select
     * the latest version.
     */
    desiredMasterVersion?: string;

    /**
     * The monitoring service the cluster should use to write metrics.
     * Currently available options:
     *
     * &#42; "monitoring.googleapis.com" - the Google Cloud Monitoring service
     * &#42; "none" - no metrics will be exported from the cluster
     */
    desiredMonitoringService?: string;

    /**
     * Autoscaler configuration for the node pool specified in
     * desired_node_pool_id. If there is only one pool in the
     * cluster and desired_node_pool_id is not provided then
     * the change applies to that single node pool.
     */
    desiredNodePoolAutoscaling?: container$NodePoolAutoscaling;

    /**
     * The node pool to be upgraded. This field is mandatory if
     * "desired_node_version", "desired_image_family" or
     * "desired_node_pool_autoscaling" is specified and there is more than one
     * node pool on the cluster.
     */
    desiredNodePoolId?: string;

    /**
     * The Kubernetes version to change the nodes to (typically an
     * upgrade). Use `-` to upgrade to the latest version supported by
     * the server.
     */
    desiredNodeVersion?: string;
  }

  declare interface container$CreateClusterRequest {
    /**
     * A [cluster
     * resource](/container-engine/reference/rest/v1/projects.zones.clusters)
     */
    cluster?: container$Cluster;
  }

  declare interface container$CreateNodePoolRequest {
    /**
     * The node pool to create.
     */
    nodePool?: container$NodePool;
  }

  declare interface container$DailyMaintenanceWindow {
    /**
     * [Output only] Duration of the time window, automatically chosen to be
     * smallest possible in the given scenario.
     * Duration will be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
     * format "PTnHnMnS".
     */
    duration?: string;

    /**
     * Time within the maintenance window to start the maintenance operations.
     * Time format should be in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt)
     * format "HH:MM”, where HH : [00-23] and MM : [00-59] GMT.
     */
    startTime?: string;
  }

  declare interface container$HorizontalPodAutoscaling {
    /**
     * Whether the Horizontal Pod Autoscaling feature is enabled in the cluster.
     * When enabled, it ensures that a Heapster pod is running in the cluster,
     * which is also used by the Cloud Monitoring service.
     */
    disabled?: boolean;
  }

  declare interface container$HttpLoadBalancing {
    /**
     * Whether the HTTP Load Balancing controller is enabled in the cluster.
     * When enabled, it runs a small pod in the cluster that manages the load
     * balancers.
     */
    disabled?: boolean;
  }

  declare interface container$IPAllocationPolicy {
    /**
     * This field is deprecated, use cluster_ipv4_cidr_block.
     */
    clusterIpv4Cidr?: string;

    /**
     * The IP address range for the cluster pod IPs. If this field is set, then
     * `cluster.cluster_ipv4_cidr` must be left blank.
     *
     * This field is only applicable when `use_ip_aliases` is true.
     *
     * Set to blank to have a range chosen with the default size.
     *
     * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
     * netmask.
     *
     * Set to a
     * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
     * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
     * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
     * to use.
     */
    clusterIpv4CidrBlock?: string;

    /**
     * The name of the secondary range to be used for the cluster CIDR
     * block.  The secondary range will be used for pod IP
     * addresses. This must be an existing secondary range associated
     * with the cluster subnetwork.
     *
     * This field is only applicable with use_ip_aliases is true and
     * create_subnetwork is false.
     */
    clusterSecondaryRangeName?: string;

    /**
     * Whether a new subnetwork will be created automatically for the cluster.
     *
     * This field is only applicable when `use_ip_aliases` is true.
     */
    createSubnetwork?: boolean;

    /**
     * This field is deprecated, use node_ipv4_cidr_block.
     */
    nodeIpv4Cidr?: string;

    /**
     * The IP address range of the instance IPs in this cluster.
     *
     * This is applicable only if `create_subnetwork` is true.
     *
     * Set to blank to have a range chosen with the default size.
     *
     * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
     * netmask.
     *
     * Set to a
     * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
     * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
     * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
     * to use.
     */
    nodeIpv4CidrBlock?: string;

    /**
     * This field is deprecated, use services_ipv4_cidr_block.
     */
    servicesIpv4Cidr?: string;

    /**
     * The IP address range of the services IPs in this cluster. If blank, a range
     * will be automatically chosen with the default size.
     *
     * This field is only applicable when `use_ip_aliases` is true.
     *
     * Set to blank to have a range chosen with the default size.
     *
     * Set to /netmask (e.g. `/14`) to have a range chosen with a specific
     * netmask.
     *
     * Set to a
     * [CIDR](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)
     * notation (e.g. `10.96.0.0/14`) from the RFC-1918 private networks (e.g.
     * `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`) to pick a specific range
     * to use.
     */
    servicesIpv4CidrBlock?: string;

    /**
     * The name of the secondary range to be used as for the services
     * CIDR block.  The secondary range will be used for service
     * ClusterIPs. This must be an existing secondary range associated
     * with the cluster subnetwork.
     *
     * This field is only applicable with use_ip_aliases is true and
     * create_subnetwork is false.
     */
    servicesSecondaryRangeName?: string;

    /**
     * A custom subnetwork name to be used if `create_subnetwork` is true.  If
     * this field is empty, then an automatic name will be chosen for the new
     * subnetwork.
     */
    subnetworkName?: string;

    /**
     * Whether alias IPs will be used for pod IPs in the cluster.
     */
    useIpAliases?: boolean;
  }

  declare interface container$KubernetesDashboard {
    /**
     * Whether the Kubernetes Dashboard is enabled for this cluster.
     */
    disabled?: boolean;
  }

  declare interface container$LegacyAbac {
    /**
     * Whether the ABAC authorizer is enabled for this cluster. When enabled,
     * identities in the system, including service accounts, nodes, and
     * controllers, will have statically granted permissions beyond those
     * provided by the RBAC configuration or IAM.
     */
    enabled?: boolean;
  }

  declare interface container$ListClustersResponse {
    /**
     * A list of clusters in the project in the specified zone, or
     * across all ones.
     */
    clusters?: container$Cluster[];

    /**
     * If any zones are listed here, the list of clusters returned
     * may be missing those zones.
     */
    missingZones?: string[];
  }

  declare interface container$ListNodePoolsResponse {
    /**
     * A list of node pools for a cluster.
     */
    nodePools?: container$NodePool[];
  }

  declare interface container$ListOperationsResponse {
    /**
     * If any zones are listed here, the list of operations returned
     * may be missing the operations from those zones.
     */
    missingZones?: string[];

    /**
     * A list of operations in the project in the specified zone.
     */
    operations?: container$Operation[];
  }

  declare interface container$MaintenancePolicy {
    /**
     * Specifies the maintenance window in which maintenance may be performed.
     */
    window?: container$MaintenanceWindow;
  }

  declare interface container$MaintenanceWindow {
    /**
     * DailyMaintenanceWindow specifies a daily maintenance operation window.
     */
    dailyMaintenanceWindow?: container$DailyMaintenanceWindow;
  }

  declare interface container$MasterAuth {
    /**
     * [Output only] Base64-encoded public certificate used by clients to
     * authenticate to the cluster endpoint.
     */
    clientCertificate?: string;

    /**
     * Configuration for client certificate authentication on the cluster.  If no
     * configuration is specified, a client certificate is issued.
     */
    clientCertificateConfig?: container$ClientCertificateConfig;

    /**
     * [Output only] Base64-encoded private key used by clients to authenticate
     * to the cluster endpoint.
     */
    clientKey?: string;

    /**
     * [Output only] Base64-encoded public certificate that is the root of
     * trust for the cluster.
     */
    clusterCaCertificate?: string;

    /**
     * The password to use for HTTP basic authentication to the master endpoint.
     * Because the master endpoint is open to the Internet, you should create a
     * strong password.  If a password is provided for cluster creation, username
     * must be non-empty.
     */
    password?: string;

    /**
     * The username to use for HTTP basic authentication to the master endpoint.
     * For clusters v1.6.0 and later, you can disable basic authentication by
     * providing an empty username.
     */
    username?: string;
  }

  declare interface container$MasterAuthorizedNetworksConfig {
    /**
     * cidr_blocks define up to 10 external networks that could access
     * Kubernetes master through HTTPS.
     */
    cidrBlocks?: container$CidrBlock[];

    /**
     * Whether or not master authorized networks is enabled.
     */
    enabled?: boolean;
  }

  declare interface container$NetworkPolicy {
    /**
     * Whether network policy is enabled on the cluster.
     */
    enabled?: boolean;

    /**
     * The selected network policy provider.
     */
    provider?: string;
  }

  declare interface container$NetworkPolicyConfig {
    /**
     * Whether NetworkPolicy is enabled for this cluster.
     */
    disabled?: boolean;
  }

  declare interface container$NodeConfig {
    /**
     * A list of hardware accelerators to be attached to each node.
     * See https://cloud.google.com/compute/docs/gpus for more information about
     * support for GPUs.
     */
    accelerators?: container$AcceleratorConfig[];

    /**
     * Size of the disk attached to each node, specified in GB.
     * The smallest allowed disk size is 10GB.
     *
     * If unspecified, the default disk size is 100GB.
     */
    diskSizeGb?: number;

    /**
     * The image type to use for this node. Note that for a given image type,
     * the latest version of it will be used.
     */
    imageType?: string;

    /**
     * The map of Kubernetes labels (key/value pairs) to be applied to each node.
     * These will added in addition to any default label(s) that
     * Kubernetes may apply to the node.
     * In case of conflict in label keys, the applied set may differ depending on
     * the Kubernetes version -- it's best to assume the behavior is undefined
     * and conflicts should be avoided.
     * For more information, including usage and the valid values, see:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/
     */
    labels?: Record<string, string>;

    /**
     * The number of local SSD disks to be attached to the node.
     *
     * The limit for this value is dependant upon the maximum number of
     * disks available on a machine per zone. See:
     * https://cloud.google.com/compute/docs/disks/local-ssd#local_ssd_limits
     * for more information.
     */
    localSsdCount?: number;

    /**
     * The name of a Google Compute Engine [machine
     * type](/compute/docs/machine-types) (e.g.
     * `n1-standard-1`).
     *
     * If unspecified, the default machine type is
     * `n1-standard-1`.
     */
    machineType?: string;

    /**
     * The metadata key/value pairs assigned to instances in the cluster.
     *
     * Keys must conform to the regexp [a-zA-Z0-9-_]+ and be less than 128 bytes
     * in length. These are reflected as part of a URL in the metadata server.
     * Additionally, to avoid ambiguity, keys must not conflict with any other
     * metadata keys for the project or be one of the four reserved keys:
     * "instance-template", "kube-env", "startup-script", and "user-data"
     *
     * Values are free-form strings, and only have meaning as interpreted by
     * the image running in the instance. The only restriction placed on them is
     * that each value's size must be less than or equal to 32 KB.
     *
     * The total size of all keys and values must be less than 512 KB.
     */
    metadata?: Record<string, string>;

    /**
     * Minimum CPU platform to be used by this instance. The instance may be
     * scheduled on the specified or newer CPU platform. Applicable values are the
     * friendly names of CPU platforms, such as
     * <code>minCpuPlatform: &quot;Intel Haswell&quot;</code> or
     * <code>minCpuPlatform: &quot;Intel Sandy Bridge&quot;</code>. For more
     * information, read [how to specify min CPU platform](https://cloud.google.com/compute/docs/instances/specify-min-cpu-platform)
     */
    minCpuPlatform?: string;

    /**
     * The set of Google API scopes to be made available on all of the
     * node VMs under the "default" service account.
     *
     * The following scopes are recommended, but not required, and by default are
     * not included:
     *
     * &#42; `https://www.googleapis.com/auth/compute` is required for mounting
     * persistent storage on your nodes.
     * &#42; `https://www.googleapis.com/auth/devstorage.read_only` is required for
     * communicating with &#42;&#42;gcr.io&#42;&#42;
     * (the [Google Container Registry](/container-registry/)).
     *
     * If unspecified, no scopes are added, unless Cloud Logging or Cloud
     * Monitoring are enabled, in which case their required scopes will be added.
     */
    oauthScopes?: string[];

    /**
     * Whether the nodes are created as preemptible VM instances. See:
     * https://cloud.google.com/compute/docs/instances/preemptible for more
     * information about preemptible VM instances.
     */
    preemptible?: boolean;

    /**
     * The Google Cloud Platform Service Account to be used by the node VMs. If
     * no Service Account is specified, the "default" service account is used.
     */
    serviceAccount?: string;

    /**
     * The list of instance tags applied to all nodes. Tags are used to identify
     * valid sources or targets for network firewalls and are specified by
     * the client during cluster or node pool creation. Each tag within the list
     * must comply with RFC1035.
     */
    tags?: string[];
  }

  declare interface container$NodeManagement {
    /**
     * A flag that specifies whether the node auto-repair is enabled for the node
     * pool. If enabled, the nodes in this node pool will be monitored and, if
     * they fail health checks too many times, an automatic repair action will be
     * triggered.
     */
    autoRepair?: boolean;

    /**
     * A flag that specifies whether node auto-upgrade is enabled for the node
     * pool. If enabled, node auto-upgrade helps keep the nodes in your node pool
     * up to date with the latest release version of Kubernetes.
     */
    autoUpgrade?: boolean;

    /**
     * Specifies the Auto Upgrade knobs for the node pool.
     */
    upgradeOptions?: container$AutoUpgradeOptions;
  }

  declare interface container$NodePool {
    /**
     * Autoscaler configuration for this NodePool. Autoscaler is enabled
     * only if a valid configuration is present.
     */
    autoscaling?: container$NodePoolAutoscaling;

    /**
     * The node configuration of the pool.
     */
    config?: container$NodeConfig;

    /**
     * The initial node count for the pool. You must ensure that your
     * Compute Engine <a href="/compute/docs/resource-quotas">resource quota</a>
     * is sufficient for this number of instances. You must also have available
     * firewall and routes quota.
     */
    initialNodeCount?: number;

    /**
     * [Output only] The resource URLs of [instance
     * groups](/compute/docs/instance-groups/) associated with this
     * node pool.
     */
    instanceGroupUrls?: string[];

    /**
     * NodeManagement configuration for this NodePool.
     */
    management?: container$NodeManagement;

    /**
     * The name of the node pool.
     */
    name?: string;

    /**
     * [Output only] Server-defined URL for the resource.
     */
    selfLink?: string;

    /**
     * [Output only] The status of the nodes in this pool instance.
     */
    status?: string;

    /**
     * [Output only] Additional information about the current status of this
     * node pool instance, if available.
     */
    statusMessage?: string;

    /**
     * [Output only] The version of the Kubernetes of this node.
     */
    version?: string;
  }

  declare interface container$NodePoolAutoscaling {
    /**
     * Is autoscaling enabled for this node pool.
     */
    enabled?: boolean;

    /**
     * Maximum number of nodes in the NodePool. Must be >= min_node_count. There
     * has to enough quota to scale up the cluster.
     */
    maxNodeCount?: number;

    /**
     * Minimum number of nodes in the NodePool. Must be >= 1 and <=
     * max_node_count.
     */
    minNodeCount?: number;
  }

  declare interface container$Operation {
    /**
     * Detailed operation progress, if available.
     */
    detail?: string;

    /**
     * [Output only] The time the operation completed, in
     * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    endTime?: string;

    /**
     * The server-assigned ID for the operation.
     */
    name?: string;

    /**
     * The operation type.
     */
    operationType?: string;

    /**
     * Server-defined URL for the resource.
     */
    selfLink?: string;

    /**
     * [Output only] The time the operation started, in
     * [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format.
     */
    startTime?: string;

    /**
     * The current status of the operation.
     */
    status?: string;

    /**
     * If an error has occurred, a textual description of the error.
     */
    statusMessage?: string;

    /**
     * Server-defined URL for the target of the operation.
     */
    targetLink?: string;

    /**
     * The name of the Google Compute Engine
     * [zone](/compute/docs/zones#available) in which the operation
     * is taking place.
     */
    zone?: string;
  }

  declare interface container$ServerConfig {
    /**
     * Version of Kubernetes the service deploys by default.
     */
    defaultClusterVersion?: string;

    /**
     * Default image type.
     */
    defaultImageType?: string;

    /**
     * List of valid image types.
     */
    validImageTypes?: string[];

    /**
     * List of valid master versions.
     */
    validMasterVersions?: string[];

    /**
     * List of valid node upgrade target versions.
     */
    validNodeVersions?: string[];
  }

  declare interface container$SetAddonsConfigRequest {
    /**
     * The desired configurations for the various addons available to run in the
     * cluster.
     */
    addonsConfig?: container$AddonsConfig;
  }

  declare interface container$SetLabelsRequest {
    /**
     * The fingerprint of the previous set of labels for this resource,
     * used to detect conflicts. The fingerprint is initially generated by
     * Container Engine and changes after every request to modify or update
     * labels. You must always provide an up-to-date fingerprint hash when
     * updating or changing labels. Make a <code>get()</code> request to the
     * resource to get the latest fingerprint.
     */
    labelFingerprint?: string;

    /**
     * The labels to set for that cluster.
     */
    resourceLabels?: Record<string, string>;
  }

  declare interface container$SetLegacyAbacRequest {
    /**
     * Whether ABAC authorization will be enabled in the cluster.
     */
    enabled?: boolean;
  }

  declare interface container$SetLocationsRequest {
    /**
     * The desired list of Google Compute Engine
     * [locations](/compute/docs/zones#available) in which the cluster's nodes
     * should be located. Changing the locations a cluster is in will result
     * in nodes being either created or removed from the cluster, depending on
     * whether locations are being added or removed.
     *
     * This list must always include the cluster's primary zone.
     */
    locations?: string[];
  }

  declare interface container$SetLoggingServiceRequest {
    /**
     * The logging service the cluster should use to write metrics.
     * Currently available options:
     *
     * &#42; "logging.googleapis.com" - the Google Cloud Logging service
     * &#42; "none" - no metrics will be exported from the cluster
     */
    loggingService?: string;
  }

  declare interface container$SetMaintenancePolicyRequest {
    /**
     * The maintenance policy to be set for the cluster. An empty field
     * clears the existing maintenance policy.
     */
    maintenancePolicy?: container$MaintenancePolicy;
  }

  declare interface container$SetMasterAuthRequest {
    /**
     * The exact form of action to be taken on the master auth.
     */
    action?: string;

    /**
     * A description of the update.
     */
    update?: container$MasterAuth;
  }

  declare interface container$SetMonitoringServiceRequest {
    /**
     * The monitoring service the cluster should use to write metrics.
     * Currently available options:
     *
     * &#42; "monitoring.googleapis.com" - the Google Cloud Monitoring service
     * &#42; "none" - no metrics will be exported from the cluster
     */
    monitoringService?: string;
  }

  declare interface container$SetNetworkPolicyRequest {
    /**
     * Configuration options for the NetworkPolicy feature.
     */
    networkPolicy?: container$NetworkPolicy;
  }

  declare interface container$SetNodePoolAutoscalingRequest {
    /**
     * Autoscaling configuration for the node pool.
     */
    autoscaling?: container$NodePoolAutoscaling;
  }

  declare interface container$SetNodePoolManagementRequest {
    /**
     * NodeManagement configuration for the node pool.
     */
    management?: container$NodeManagement;
  }

  declare interface container$SetNodePoolSizeRequest {
    /**
     * The desired node count for the pool.
     */
    nodeCount?: number;
  }

  declare interface container$UpdateClusterRequest {
    /**
     * A description of the update.
     */
    update?: container$ClusterUpdate;
  }

  declare interface container$UpdateMasterRequest {
    /**
     * The Kubernetes version to change the master to. The only valid value is the
     * latest supported version. Use "-" to have the server automatically select
     * the latest version.
     */
    masterVersion?: string;
  }

  declare interface container$UpdateNodePoolRequest {
    /**
     * The desired image type for the node pool.
     */
    imageType?: string;

    /**
     * The Kubernetes version to change the nodes to (typically an
     * upgrade). Use `-` to upgrade to the latest version supported by
     * the server.
     */
    nodeVersion?: string;
  }

  declare interface container$NodePoolsResource {
    /**
     * Sets the autoscaling settings of a specific node pool.
     */
    autoscaling(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool to upgrade.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Creates a node pool for a cluster.
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
       * The name of the cluster.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Deletes a node pool from a cluster.
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
       * The name of the cluster.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool to delete.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Retrieves the node pool requested.
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
       * The name of the cluster.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$NodePool>;

    /**
     * Lists the node pools for a cluster.
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
       * The name of the cluster.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$ListNodePoolsResponse>;

    /**
     * Roll back the previously Aborted or Failed NodePool upgrade.
     * This will be an no-op if the last upgrade successfully completed.
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
       * The name of the cluster to rollback.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool to rollback.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Sets the NodeManagement options for a node pool.
     */
    setManagement(request: {
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
       * The name of the cluster to update.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool to update.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Sets the size of a specific node pool.
     */
    setSize(request: {
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
       * The name of the cluster to update.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool to update.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Updates the version and/or image type of a specific node pool.
     */
    update(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the node pool to upgrade.
       */
      nodePoolId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;
  }

  declare interface container$ClustersResource {
    /**
     * Sets the addons of a specific cluster.
     */
    addons(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Completes master IP rotation.
     */
    completeIpRotation(request: {
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
       * The name of the cluster.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Creates a cluster, consisting of the specified number and type of Google
     * Compute Engine instances.
     *
     * By default, the cluster is created in the project's
     * [default network](/compute/docs/networks-and-firewalls#networks).
     *
     * One firewall is added for the cluster. After cluster creation,
     * the cluster creates routes for each node to allow the containers
     * on that node to communicate with all other instances in the
     * cluster.
     *
     * Finally, an entry is added to the project's global metadata indicating
     * which CIDR range is being used by the cluster.
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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Deletes the cluster, including the Kubernetes endpoint and all worker
     * nodes.
     *
     * Firewalls and routes that were configured during cluster creation
     * are also deleted.
     *
     * Other Google Compute Engine resources that might be in use by the cluster
     * (e.g. load balancer resources) will not be deleted if they weren't present
     * at the initial create time.
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
       * The name of the cluster to delete.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Gets the details of a specific cluster.
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
       * The name of the cluster to retrieve.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Cluster>;

    /**
     * Enables or disables the ABAC authorization mechanism on a cluster.
     */
    legacyAbac(request: {
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
       * The name of the cluster to update.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Lists all clusters owned by a project in either the specified zone or all
     * zones.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides, or "-" for all zones.
       */
      zone: string
    }): Request<container$ListClustersResponse>;

    /**
     * Sets the locations of a specific cluster.
     */
    locations(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Sets the logging service of a specific cluster.
     */
    logging(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Updates the master of a specific cluster.
     */
    master(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Sets the monitoring service of a specific cluster.
     */
    monitoring(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Sets labels on a cluster.
     */
    resourceLabels(request: {
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
       * The name of the cluster.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Sets the maintenance policy for a cluster.
     */
    setMaintenancePolicy(request: {
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
       * The name of the cluster to update.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Used to set master auth materials. Currently supports :-
     * Changing the admin password of a specific cluster.
     * This can be either via password generation or explicitly set the password.
     */
    setMasterAuth(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Enables/Disables Network Policy for a cluster.
     */
    setNetworkPolicy(request: {
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
       * The name of the cluster.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Start master IP rotation.
     */
    startIpRotation(request: {
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
       * The name of the cluster.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://developers.google.com/console/help/new/#projectnumber).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Updates the settings of a specific cluster.
     */
    update(request: {
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
       * The name of the cluster to upgrade.
       */
      clusterId: string,

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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;
    nodePools: container$NodePoolsResource;
  }

  declare interface container$OperationsResource {
    /**
     * Cancels the specified operation.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The server-assigned `name` of the operation.
       */
      operationId: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the operation resides.
       */
      zone: string
    }): Request<{}>;

    /**
     * Gets the specified operation.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The server-assigned `name` of the operation.
       */
      operationId: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine
       * [zone](/compute/docs/zones#available) in which the cluster
       * resides.
       */
      zone: string
    }): Request<container$Operation>;

    /**
     * Lists all operations in a project in a specific zone or all zones.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine [zone](/compute/docs/zones#available)
       * to return operations for, or `-` for all zones.
       */
      zone: string
    }): Request<container$ListOperationsResponse>;
  }

  declare interface container$ZonesResource {
    /**
     * Returns configuration info about the Container Engine service.
     */
    getServerconfig(request: {
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
       * The Google Developers Console [project ID or project
       * number](https://support.google.com/cloud/answer/6158840).
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
      upload_protocol?: string,

      /**
       * The name of the Google Compute Engine [zone](/compute/docs/zones#available)
       * to return operations for.
       */
      zone: string
    }): Request<container$ServerConfig>;
    clusters: container$ClustersResource;
    operations: container$OperationsResource;
  }

  declare interface container$ProjectsResource {
    zones: container$ZonesResource;
  }
}
