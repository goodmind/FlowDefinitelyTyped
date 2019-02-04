declare module 'gapi.client.compute' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        acceleratorTypes: typeof client$acceleratorTypes,
addresses: typeof client$addresses,
autoscalers: typeof client$autoscalers,
backendBuckets: typeof client$backendBuckets,
backendServices: typeof client$backendServices,
diskTypes: typeof client$diskTypes,
disks: typeof client$disks,
firewalls: typeof client$firewalls,
forwardingRules: typeof client$forwardingRules,
globalAddresses: typeof client$globalAddresses,
globalForwardingRules: typeof client$globalForwardingRules,
globalOperations: typeof client$globalOperations,
healthChecks: typeof client$healthChecks,
httpHealthChecks: typeof client$httpHealthChecks,
httpsHealthChecks: typeof client$httpsHealthChecks,
images: typeof client$images,
instanceGroupManagers: typeof client$instanceGroupManagers,
instanceGroups: typeof client$instanceGroups,
instanceTemplates: typeof client$instanceTemplates,
instances: typeof client$instances,
licenses: typeof client$licenses,
machineTypes: typeof client$machineTypes,
networks: typeof client$networks,
projects: typeof client$projects,
regionAutoscalers: typeof client$regionAutoscalers,
regionBackendServices: typeof client$regionBackendServices,
regionCommitments: typeof client$regionCommitments,
regionInstanceGroupManagers: typeof client$regionInstanceGroupManagers,
regionInstanceGroups: typeof client$regionInstanceGroups,
regionOperations: typeof client$regionOperations,
regions: typeof client$regions,
routers: typeof client$routers,
routes: typeof client$routes,
snapshots: typeof client$snapshots,
sslCertificates: typeof client$sslCertificates,
subnetworks: typeof client$subnetworks,
targetHttpProxies: typeof client$targetHttpProxies,
targetHttpsProxies: typeof client$targetHttpsProxies,
targetInstances: typeof client$targetInstances,
targetPools: typeof client$targetPools,
targetSslProxies: typeof client$targetSslProxies,
targetTcpProxies: typeof client$targetTcpProxies,
targetVpnGateways: typeof client$targetVpnGateways,
urlMaps: typeof client$urlMaps,
vpnTunnels: typeof client$vpnTunnels,
zoneOperations: typeof client$zoneOperations,
zones: typeof client$zones,
      }

/**
 * Load Compute Engine API v1
 */
declare function client$load(name: "compute", version: "v1"): PromiseLike<void>


declare function client$load(name: "compute", version: "v1", callback: () => any): void


declare var client$acceleratorTypes: compute$compute$AcceleratorTypesResource;

declare var client$addresses: compute$compute$AddressesResource;

declare var client$autoscalers: compute$compute$AutoscalersResource;

declare var client$backendBuckets: compute$compute$BackendBucketsResource;

declare var client$backendServices: compute$compute$BackendServicesResource;

declare var client$diskTypes: compute$compute$DiskTypesResource;

declare var client$disks: compute$compute$DisksResource;

declare var client$firewalls: compute$compute$FirewallsResource;

declare var client$forwardingRules: compute$compute$ForwardingRulesResource;

declare var client$globalAddresses: compute$compute$GlobalAddressesResource;

declare var client$globalForwardingRules: compute$compute$GlobalForwardingRulesResource;

declare var client$globalOperations: compute$compute$GlobalOperationsResource;

declare var client$healthChecks: compute$compute$HealthChecksResource;

declare var client$httpHealthChecks: compute$compute$HttpHealthChecksResource;

declare var client$httpsHealthChecks: compute$compute$HttpsHealthChecksResource;

declare var client$images: compute$compute$ImagesResource;

declare var client$instanceGroupManagers: compute$compute$InstanceGroupManagersResource;

declare var client$instanceGroups: compute$compute$InstanceGroupsResource;

declare var client$instanceTemplates: compute$compute$InstanceTemplatesResource;

declare var client$instances: compute$compute$InstancesResource;

declare var client$licenses: compute$compute$LicensesResource;

declare var client$machineTypes: compute$compute$MachineTypesResource;

declare var client$networks: compute$compute$NetworksResource;

declare var client$projects: compute$compute$ProjectsResource;

declare var client$regionAutoscalers: compute$compute$RegionAutoscalersResource;

declare var client$regionBackendServices: compute$compute$RegionBackendServicesResource;

declare var client$regionCommitments: compute$compute$RegionCommitmentsResource;

declare var client$regionInstanceGroupManagers: compute$compute$RegionInstanceGroupManagersResource;

declare var client$regionInstanceGroups: compute$compute$RegionInstanceGroupsResource;

declare var client$regionOperations: compute$compute$RegionOperationsResource;

declare var client$regions: compute$compute$RegionsResource;

declare var client$routers: compute$compute$RoutersResource;

declare var client$routes: compute$compute$RoutesResource;

declare var client$snapshots: compute$compute$SnapshotsResource;

declare var client$sslCertificates: compute$compute$SslCertificatesResource;

declare var client$subnetworks: compute$compute$SubnetworksResource;

declare var client$targetHttpProxies: compute$compute$TargetHttpProxiesResource;

declare var client$targetHttpsProxies: compute$compute$TargetHttpsProxiesResource;

declare var client$targetInstances: compute$compute$TargetInstancesResource;

declare var client$targetPools: compute$compute$TargetPoolsResource;

declare var client$targetSslProxies: compute$compute$TargetSslProxiesResource;

declare var client$targetTcpProxies: compute$compute$TargetTcpProxiesResource;

declare var client$targetVpnGateways: compute$compute$TargetVpnGatewaysResource;

declare var client$urlMaps: compute$compute$UrlMapsResource;

declare var client$vpnTunnels: compute$compute$VpnTunnelsResource;

declare var client$zoneOperations: compute$compute$ZoneOperationsResource;

declare var client$zones: compute$compute$ZonesResource;

declare interface compute$AcceleratorConfig {

/**
 * The number of the guest accelerator cards exposed to this instance.
 */
acceleratorCount?: number,

/**
 * Full or partial URL of the accelerator type resource to expose to this instance.
 */
acceleratorType?: string
} 

declare interface compute$AcceleratorType {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] The deprecation status associated with this accelerator type.
 */
deprecated?: compute$DeprecationStatus,

/**
 * [Output Only] An optional textual description of the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] The type of the resource. Always compute#acceleratorType for accelerator types.
 */
kind?: string,

/**
 * [Output Only] Maximum accelerator cards allowed per instance.
 */
maximumCardsPerInstance?: number,

/**
 * [Output Only] Name of the resource.
 */
name?: string,

/**
 * [Output Only] Server-defined fully-qualified URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] The name of the zone where the accelerator type resides, such as us-central1-a.
 */
zone?: string
} 

declare interface compute$AcceleratorTypeAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of AcceleratorTypesScopedList resources.
 */
items?: Record<string, compute$AcceleratorTypesScopedList>,

/**
 * [Output Only] Type of resource. Always compute#acceleratorTypeAggregatedList for aggregated lists of accelerator types.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AcceleratorTypeList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of AcceleratorType resources.
 */
items?: compute$AcceleratorType[],

/**
 * [Output Only] Type of resource. Always compute#acceleratorTypeList for lists of accelerator types.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AcceleratorTypesScopedList {

/**
 * [Output Only] List of accelerator types contained in this scope.
 */
client$acceleratorTypes?: compute$AcceleratorType[],

/**
 * [Output Only] An informational warning that appears when the accelerator types list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AccessConfig {

/**
 * [Output Only] Type of the resource. Always compute#accessConfig for access configs.
 */
kind?: string,

/**
 * The name of this access configuration. The default and recommended name is External NAT but you can use any arbitrary string you would like. For
 * example, My external IP or Network Access.
 */
name?: string,

/**
 * An external IP address associated with this instance. Specify an unused static external IP address available to the project or leave this field
 * undefined to use an IP from a shared ephemeral IP address pool. If you specify a static external IP address, it must live in the same region as the
 * zone of the instance.
 */
natIP?: string,

/**
 * The type of configuration. The default and only option is ONE_TO_ONE_NAT.
 */
type?: string
} 

declare interface compute$Address {

/**
 * The static IP address represented by this resource.
 */
address?: string,

/**
 * The type of address to reserve. If unspecified, defaults to EXTERNAL.
 */
addressType?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * The IP Version that will be used by this address. Valid options are IPV4 or IPV6. This can only be specified for a global address.
 */
ipVersion?: string,

/**
 * [Output Only] Type of the resource. Always compute#address for addresses.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] URL of the region where the regional address resides. This field is not applicable to global addresses.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] The status of the address, which can be one of RESERVING, RESERVED, or IN_USE. An address that is RESERVING is currently in the process
 * of being reserved. A RESERVED address is currently reserved and available to use. An IN_USE address is currently being used by another resource and is
 * not available.
 */
status?: string,

/**
 * For external addresses, this field should not be used.
 * 
 * The URL of the subnetwork in which to reserve the address. If an IP address is specified, it must be within the subnetwork's IP range.
 */
subnetwork?: string,

/**
 * [Output Only] The URLs of the resources that are using this address.
 */
users?: string[]
} 

declare interface compute$AddressAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of AddressesScopedList resources.
 */
items?: Record<string, compute$AddressesScopedList>,

/**
 * [Output Only] Type of resource. Always compute#addressAggregatedList for aggregated lists of addresses.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AddressList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Address resources.
 */
items?: compute$Address[],

/**
 * [Output Only] Type of resource. Always compute#addressList for lists of addresses.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AddressesScopedList {

/**
 * [Output Only] List of addresses contained in this scope.
 */
client$addresses?: compute$Address[],

/**
 * [Output Only] Informational warning which replaces the list of addresses when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AliasIpRange {

/**
 * The IP CIDR range represented by this alias IP range. This IP CIDR range must belong to the specified subnetwork and cannot contain IP addresses
 * reserved by system or used by other network interfaces. This range may be a single IP address (e.g. 10.2.3.4), a netmask (e.g. /24) or a CIDR format
 * string (e.g. 10.1.2.0/24).
 */
ipCidrRange?: string,

/**
 * Optional subnetwork secondary range name specifying the secondary range from which to allocate the IP CIDR range for this alias IP range. If left
 * unspecified, the primary range of the subnetwork will be used.
 */
subnetworkRangeName?: string
} 

declare interface compute$AttachedDisk {

/**
 * Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
 */
autoDelete?: boolean,

/**
 * Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
 */
boot?: boolean,

/**
 * Specifies a unique device name of your choice that is reflected into the /dev/disk/by-id/google-&#42; tree of a Linux operating system running within the
 * instance. This name can be used to reference the device for mounting, resizing, and so on, from within the instance.
 * 
 * If not specified, the server chooses a default device name to apply to this disk, in the form persistent-disks-x, where x is a number assigned by
 * Google Compute Engine. This field is only applicable for persistent disks.
 */
deviceName?: string,

/**
 * Encrypts or decrypts a disk using a customer-supplied encryption key.
 * 
 * If you are creating a new disk, this field encrypts the new disk using an encryption key that you provide. If you are attaching an existing disk that
 * is already encrypted, this field decrypts the disk using the customer-supplied encryption key.
 * 
 * If you encrypt a disk using a customer-supplied key, you must provide the same key again when you attempt to use this resource at a later time. For
 * example, you must provide the key when you create a snapshot or an image from the disk or when you attach the disk to a virtual machine instance.
 * 
 * If you do not provide an encryption key, then the disk will be encrypted using an automatically generated key and you do not need to provide a key to
 * use the disk later.
 * 
 * Instance templates do not store customer-supplied encryption keys, so you cannot use your own keys to encrypt disks in a managed instance group.
 */
diskEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] A zero-based index to this disk, where 0 is reserved for the boot disk. If you have many disks attached to an instance, each disk would
 * have a unique index number.
 */
index?: number,

/**
 * [Input Only] Specifies the parameters for a new disk that will be created alongside the new instance. Use initialization parameters to create boot
 * disks or local SSDs attached to the new instance.
 * 
 * This property is mutually exclusive with the source property; you can only define one or the other, but not both.
 */
initializeParams?: compute$AttachedDiskInitializeParams,

/**
 * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME. The default is SCSI. Persistent disks must always use SCSI
 * and the request will fail if you attempt to attach a persistent disk in any other format than SCSI. Local SSDs can use either NVME or SCSI. For
 * performance characteristics of SCSI over NVMe, see Local SSD performance.
 */
interface?: string,

/**
 * [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
 */
kind?: string,

/**
 * [Output Only] Any valid publicly visible licenses.
 */
client$licenses?: string[],

/**
 * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
 */
mode?: string,

/**
 * Specifies a valid partial or full URL to an existing Persistent Disk resource. When creating a new instance, one of initializeParams.sourceImage or
 * disks.source is required.
 * 
 * If desired, you can also attach existing non-root persistent disks using this property. This field is only applicable for persistent disks.
 * 
 * Note that for InstanceTemplate, specify the disk name, not the URL for the disk.
 */
source?: string,

/**
 * Specifies the type of the disk, either SCRATCH or PERSISTENT. If not specified, the default is PERSISTENT.
 */
type?: string
} 

declare interface compute$AttachedDiskInitializeParams {

/**
 * Specifies the disk name. If not specified, the default is to use the name of the instance.
 */
diskName?: string,

/**
 * Specifies the size of the disk in base-2 GB.
 */
diskSizeGb?: string,

/**
 * Specifies the disk type to use to create the instance. If not specified, the default is pd-standard, specified using the full URL. For example:
 * 
 * https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/pd-standard
 * 
 * Other values include pd-ssd and local-ssd. If you define this field, you can provide either the full or partial URL. For example, the following are
 * valid values:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone/diskTypes/diskType
 * - projects/project/zones/zone/diskTypes/diskType
 * - zones/zone/diskTypes/diskType  Note that for InstanceTemplate, this is the name of the disk type, not URL.
 */
diskType?: string,

/**
 * The source image to create this disk. When creating a new instance, one of initializeParams.sourceImage or disks.source is required.
 * 
 * To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-8 to use the
 * latest Debian 8 image:
 * 
 * projects/debian-cloud/global/images/family/debian-8
 * 
 * Alternatively, use a specific version of a public operating system image:
 * 
 * projects/debian-cloud/global/images/debian-8-jessie-vYYYYMMDD
 * 
 * To create a disk with a private image that you created, specify the image name in the following format:
 * 
 * global/images/my-private-image
 * 
 * You can also specify a private image by its image family, which returns the latest version of the image in that family. Replace the image name with
 * family/family-name:
 * 
 * global/images/family/my-private-family
 * 
 * If the source image is deleted later, this field will not be set.
 */
sourceImage?: string,

/**
 * The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
 * 
 * Instance templates do not store customer-supplied encryption keys, so you cannot create disks for instances in a managed instance group if the source
 * images are encrypted with your own keys.
 */
sourceImageEncryptionKey?: compute$CustomerEncryptionKey
} 

declare interface compute$Autoscaler {

/**
 * The configuration parameters for the autoscaling algorithm. You can define one or more of the policies for an autoscaler: cpuUtilization,
 * customMetricUtilizations, and loadBalancingUtilization.
 * 
 * If none of these are specified, the default will be to autoscale based on cpuUtilization to 0.6 or 60%.
 */
autoscalingPolicy?: compute$AutoscalingPolicy,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#autoscaler for autoscalers.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] URL of the region where the instance group resides (for autoscalers living in regional scope).
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] The status of the autoscaler configuration.
 */
status?: string,

/**
 * [Output Only] Human-readable details about the current state of the autoscaler. Read the documentation for Commonly returned status messages for
 * examples of status messages you might encounter.
 */
statusDetails?: compute$AutoscalerStatusDetails[],

/**
 * URL of the managed instance group that this autoscaler will scale.
 */
target?: string,

/**
 * [Output Only] URL of the zone where the instance group resides (for autoscalers living in zonal scope).
 */
zone?: string
} 

declare interface compute$AutoscalerAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of AutoscalersScopedList resources.
 */
items?: Record<string, compute$AutoscalersScopedList>,

/**
 * [Output Only] Type of resource. Always compute#autoscalerAggregatedList for aggregated lists of autoscalers.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AutoscalerList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Autoscaler resources.
 */
items?: compute$Autoscaler[],

/**
 * [Output Only] Type of resource. Always compute#autoscalerList for lists of autoscalers.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AutoscalerStatusDetails {

/**
 * The status message.
 */
message?: string,

/**
 * The type of error returned.
 */
type?: string
} 

declare interface compute$AutoscalersScopedList {

/**
 * [Output Only] List of autoscalers contained in this scope.
 */
client$autoscalers?: compute$Autoscaler[],

/**
 * [Output Only] Informational warning which replaces the list of autoscalers when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$AutoscalingPolicy {

/**
 * The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. This prevents the autoscaler from
 * collecting information when the instance is initializing, during which the collected usage would not be reliable. The default time autoscaler waits is
 * 60 seconds.
 * 
 * Virtual machine initialization times might vary because of numerous factors. We recommend that you test how long an instance may take to initialize. To
 * do this, create an instance and time the startup process.
 */
coolDownPeriodSec?: number,

/**
 * Defines the CPU utilization policy that allows the autoscaler to scale based on the average CPU utilization of a managed instance group.
 */
cpuUtilization?: compute$AutoscalingPolicyCpuUtilization,

/**
 * Configuration parameters of autoscaling based on a custom metric.
 */
customMetricUtilizations?: compute$AutoscalingPolicyCustomMetricUtilization[],

/**
 * Configuration parameters of autoscaling based on load balancer.
 */
loadBalancingUtilization?: compute$AutoscalingPolicyLoadBalancingUtilization,

/**
 * The maximum number of instances that the autoscaler can scale up to. This is required when creating or updating an autoscaler. The maximum number of
 * replicas should not be lower than minimal number of replicas.
 */
maxNumReplicas?: number,

/**
 * The minimum number of replicas that the autoscaler can scale down to. This cannot be less than 0. If not provided, autoscaler will choose a default
 * value depending on maximum number of instances allowed.
 */
minNumReplicas?: number
} 

declare interface compute$AutoscalingPolicyCpuUtilization {

/**
 * The target CPU utilization that the autoscaler should maintain. Must be a float value in the range (0, 1]. If not specified, the default is 0.6.
 * 
 * If the CPU level is below the target utilization, the autoscaler scales down the number of instances until it reaches the minimum number of instances
 * you specified or until the average CPU of your instances reaches the target utilization.
 * 
 * If the average CPU is above the target utilization, the autoscaler scales up until it reaches the maximum number of instances you specified or until
 * the average utilization reaches the target utilization.
 */
utilizationTarget?: number
} 

declare interface compute$AutoscalingPolicyCustomMetricUtilization {

/**
 * The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values and should be a utilization metric, which means that
 * the number of virtual machines handling requests should increase or decrease proportionally to the metric.
 * 
 * The metric must have a value type of INT64 or DOUBLE.
 */
metric?: string,

/**
 * The target value of the metric that autoscaler should maintain. This must be a positive value.
 * 
 * For example, a good metric to use as a utilization_target is compute.googleapis.com/instance/network/received_bytes_count. The autoscaler will work to
 * keep this value constant for each of the instances.
 */
utilizationTarget?: number,

/**
 * Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Either GAUGE, DELTA_PER_SECOND, or DELTA_PER_MINUTE. If not
 * specified, the default is GAUGE.
 */
utilizationTargetType?: string
} 

declare interface compute$AutoscalingPolicyLoadBalancingUtilization {

/**
 * Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. Must be a positive float value.
 * If not defined, the default is 0.8.
 */
utilizationTarget?: number
} 

declare interface compute$Backend {

/**
 * Specifies the balancing mode for this backend. For global HTTP(S) or TCP/SSL load balancing, the default is UTILIZATION. Valid values are UTILIZATION,
 * RATE (for HTTP(S)) and CONNECTION (for TCP/SSL).
 * 
 * For Internal Load Balancing, the default and only supported mode is CONNECTION.
 */
balancingMode?: string,

/**
 * A multiplier applied to the group's maximum servicing capacity (based on UTILIZATION, RATE or CONNECTION). Default value is 1, which means the group
 * will serve up to 100% of its configured capacity (depending on balancingMode). A setting of 0 means the group is completely drained, offering 0% of its
 * available Capacity. Valid range is [0.0,1.0].
 * 
 * This cannot be used for internal load balancing.
 */
capacityScaler?: number,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * The fully-qualified URL of a Instance Group resource. This instance group defines the list of instances that serve traffic. Member virtual machine
 * instances from each instance group must live in the same zone as the instance group itself. No two backends in a backend service are allowed to use
 * same Instance Group resource.
 * 
 * Note that you must specify an Instance Group resource using the fully-qualified URL, rather than a partial URL.
 * 
 * When the BackendService has load balancing scheme INTERNAL, the instance group must be within the same region as the BackendService.
 */
group?: string,

/**
 * The max number of simultaneous connections for the group. Can be used with either CONNECTION or UTILIZATION balancing modes. For CONNECTION mode,
 * either maxConnections or maxConnectionsPerInstance must be set.
 * 
 * This cannot be used for internal load balancing.
 */
maxConnections?: number,

/**
 * The max number of simultaneous connections that a single backend instance can handle. This is used to calculate the capacity of the group. Can be used
 * in either CONNECTION or UTILIZATION balancing modes. For CONNECTION mode, either maxConnections or maxConnectionsPerInstance must be set.
 * 
 * This cannot be used for internal load balancing.
 */
maxConnectionsPerInstance?: number,

/**
 * The max requests per second (RPS) of the group. Can be used with either RATE or UTILIZATION balancing modes, but required if RATE mode. For RATE mode,
 * either maxRate or maxRatePerInstance must be set.
 * 
 * This cannot be used for internal load balancing.
 */
maxRate?: number,

/**
 * The max requests per second (RPS) that a single backend instance can handle. This is used to calculate the capacity of the group. Can be used in either
 * balancing mode. For RATE mode, either maxRate or maxRatePerInstance must be set.
 * 
 * This cannot be used for internal load balancing.
 */
maxRatePerInstance?: number,

/**
 * Used when balancingMode is UTILIZATION. This ratio defines the CPU utilization target for the group. The default is 0.8. Valid range is [0.0, 1.0].
 * 
 * This cannot be used for internal load balancing.
 */
maxUtilization?: number
} 

declare interface compute$BackendBucket {

/**
 * Cloud Storage bucket name.
 */
bucketName?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional textual description of the resource; provided by the client when the resource is created.
 */
description?: string,

/**
 * If true, enable Cloud CDN for this BackendBucket.
 */
enableCdn?: boolean,

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * Type of the resource.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string
} 

declare interface compute$BackendBucketList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of BackendBucket resources.
 */
items?: compute$BackendBucket[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$BackendService {

/**
 * Lifetime of cookies in seconds if session_affinity is GENERATED_COOKIE. If set to 0, the cookie is non-persistent and lasts only until the end of the
 * browser session (or equivalent). The maximum allowed value for TTL is one day.
 * 
 * When the load balancing scheme is INTERNAL, this field is not used.
 */
affinityCookieTtlSec?: number,

/**
 * The list of backends that serve this BackendService.
 */
backends?: compute$Backend[],

/**
 * Cloud CDN configuration for this BackendService.
 */
cdnPolicy?: compute$BackendServiceCdnPolicy,
connectionDraining?: compute$ConnectionDraining,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * If true, enable Cloud CDN for this BackendService.
 * 
 * When the load balancing scheme is INTERNAL, this field is not used.
 */
enableCDN?: boolean,

/**
 * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when
 * inserting a BackendService. An up-to-date fingerprint must be provided in order to update the BackendService.
 */
fingerprint?: string,

/**
 * The list of URLs to the HttpHealthCheck or HttpsHealthCheck resource for health checking this BackendService. Currently at most one health check can be
 * specified, and a health check is required for Compute Engine backend services. A health check must not be specified for App Engine backend and Cloud
 * Function backend.
 * 
 * For internal load balancing, a URL to a HealthCheck resource must be specified instead.
 */
client$healthChecks?: string[],
iap?: compute$BackendServiceIAP,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of resource. Always compute#backendService for backend services.
 */
kind?: string,

/**
 * Indicates whether the backend service will be used with internal or external load balancing. A backend service created for one type of load balancing
 * cannot be used with the other. Possible values are INTERNAL and EXTERNAL.
 */
loadBalancingScheme?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * Deprecated in favor of portName. The TCP port to connect on the backend. The default value is 80.
 * 
 * This cannot be used for internal load balancing.
 */
port?: number,

/**
 * Name of backend port. The same name should appear in the instance groups referenced by this service. Required when the load balancing scheme is
 * EXTERNAL.
 * 
 * When the load balancing scheme is INTERNAL, this field is not used.
 */
portName?: string,

/**
 * The protocol this BackendService uses to communicate with backends.
 * 
 * Possible values are HTTP, HTTPS, TCP, and SSL. The default is HTTP.
 * 
 * For internal load balancing, the possible values are TCP and UDP, and the default is TCP.
 */
protocol?: string,

/**
 * [Output Only] URL of the region where the regional backend service resides. This field is not applicable to global backend services.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * Type of session affinity to use. The default is NONE.
 * 
 * When the load balancing scheme is EXTERNAL, can be NONE, CLIENT_IP, or GENERATED_COOKIE.
 * 
 * When the load balancing scheme is INTERNAL, can be NONE, CLIENT_IP, CLIENT_IP_PROTO, or CLIENT_IP_PORT_PROTO.
 * 
 * When the protocol is UDP, this field is not used.
 */
sessionAffinity?: string,

/**
 * How many seconds to wait for the backend before considering it a failed request. Default is 30 seconds.
 */
timeoutSec?: number
} 

declare interface compute$BackendServiceAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of BackendServicesScopedList resources.
 */
items?: Record<string, compute$BackendServicesScopedList>,

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$BackendServiceCdnPolicy {

/**
 * The CacheKeyPolicy for this CdnPolicy.
 */
cacheKeyPolicy?: compute$CacheKeyPolicy
} 

declare interface compute$BackendServiceGroupHealth {
healthStatus?: compute$HealthStatus[],

/**
 * [Output Only] Type of resource. Always compute#backendServiceGroupHealth for the health of backend services.
 */
kind?: string
} 

declare interface compute$BackendServiceIAP {
enabled?: boolean,
oauth2ClientId?: string,
oauth2ClientSecret?: string,

/**
 * [Output Only] SHA256 hash value for the field oauth2_client_secret above.
 */
oauth2ClientSecretSha256?: string
} 

declare interface compute$BackendServiceList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of BackendService resources.
 */
items?: compute$BackendService[],

/**
 * [Output Only] Type of resource. Always compute#backendServiceList for lists of backend services.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$BackendServicesScopedList {

/**
 * List of BackendServices contained in this scope.
 */
client$backendServices?: compute$BackendService[],

/**
 * Informational warning which replaces the list of backend services when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$CacheInvalidationRule {

/**
 * If set, this invalidation rule will only apply to requests with a Host header matching host.
 */
host?: string,
path?: string
} 

declare interface compute$CacheKeyPolicy {

/**
 * If true, requests to different hosts will be cached separately.
 */
includeHost?: boolean,

/**
 * If true, http and https requests will be cached separately.
 */
includeProtocol?: boolean,

/**
 * If true, include query string parameters in the cache key according to query_string_whitelist and query_string_blacklist. If neither is set, the entire
 * query string will be included. If false, the query string will be excluded from the cache key entirely.
 */
includeQueryString?: boolean,

/**
 * Names of query string parameters to exclude in cache keys. All other parameters will be included. Either specify query_string_whitelist or
 * query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
 */
queryStringBlacklist?: string[],

/**
 * Names of query string parameters to include in cache keys. All other parameters will be excluded. Either specify query_string_whitelist or
 * query_string_blacklist, not both. '&' and '=' will be percent encoded and not treated as delimiters.
 */
queryStringWhitelist?: string[]
} 

declare interface compute$Commitment {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] Commitment end time in RFC3339 text format.
 */
endTimestamp?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#commitment for commitments.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The plan for this commitment, which determines duration and discount rate. The currently supported plans are TWELVE_MONTH (1 year), and
 * THIRTY_SIX_MONTH (3 years).
 */
plan?: string,

/**
 * [Output Only] URL of the region where this commitment may be used.
 */
region?: string,

/**
 * List of commitment amounts for particular resources. Note that VCPU and MEMORY resource commitments must occur together.
 */
resources?: compute$ResourceCommitment[],

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] Commitment start time in RFC3339 text format.
 */
startTimestamp?: string,

/**
 * [Output Only] Status of the commitment with regards to eventual expiration (each commitment has an end date defined). One of the following values:
 * NOT_YET_ACTIVE, ACTIVE, EXPIRED.
 */
status?: string,

/**
 * [Output Only] An optional, human-readable explanation of the status.
 */
statusMessage?: string
} 

declare interface compute$CommitmentAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of CommitmentsScopedList resources.
 */
items?: Record<string, compute$CommitmentsScopedList>,

/**
 * [Output Only] Type of resource. Always compute#commitmentAggregatedList for aggregated lists of commitments.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$CommitmentList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Commitment resources.
 */
items?: compute$Commitment[],

/**
 * [Output Only] Type of resource. Always compute#commitmentList for lists of commitments.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$CommitmentsScopedList {

/**
 * [Output Only] List of commitments contained in this scope.
 */
commitments?: compute$Commitment[],

/**
 * [Output Only] Informational warning which replaces the list of commitments when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ConnectionDraining {

/**
 * Time for which instance will be drained (not accept new connections, but still work to finish started).
 */
drainingTimeoutSec?: number
} 

declare interface compute$CustomerEncryptionKey {

/**
 * Specifies a 256-bit customer-supplied encryption key, encoded in RFC 4648 base64 to either encrypt or decrypt this resource.
 */
rawKey?: string,

/**
 * [Output only] The RFC 4648 base64 encoded SHA-256 hash of the customer-supplied encryption key that protects this resource.
 */
sha256?: string
} 

declare interface compute$CustomerEncryptionKeyProtectedDisk {

/**
 * Decrypts data associated with the disk with a customer-supplied encryption key.
 */
diskEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * Specifies a valid partial or full URL to an existing Persistent Disk resource. This field is only applicable for persistent disks.
 */
source?: string
} 

declare interface compute$DeprecationStatus {

/**
 * An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DELETED. This is only informational and the status
 * will not change unless the client explicitly changes it.
 */
deleted?: string,

/**
 * An optional RFC3339 timestamp on or after which the state of this resource is intended to change to DEPRECATED. This is only informational and the
 * status will not change unless the client explicitly changes it.
 */
deprecated?: string,

/**
 * An optional RFC3339 timestamp on or after which the state of this resource is intended to change to OBSOLETE. This is only informational and the status
 * will not change unless the client explicitly changes it.
 */
obsolete?: string,

/**
 * The URL of the suggested replacement for a deprecated resource. The suggested replacement resource must be the same kind of resource as the deprecated
 * resource.
 */
replacement?: string,

/**
 * The deprecation state of this resource. This can be DEPRECATED, OBSOLETE, or DELETED. Operations which create a new resource using a DEPRECATED
 * resource will return successfully, but with a warning indicating the deprecated resource and recommending its replacement. Operations which use
 * OBSOLETE or DELETED resources will be rejected and result in an error.
 */
state?: string
} 

declare interface compute$Disk {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * Encrypts the disk using a customer-supplied encryption key.
 * 
 * After you encrypt a disk with a customer-supplied key, you must provide the same key if you use the disk later (e.g. to create a disk snapshot or an
 * image, or to attach the disk to a virtual machine).
 * 
 * Customer-supplied encryption keys do not protect access to metadata of the disk.
 * 
 * If you do not provide an encryption key when creating the disk, then the disk will be encrypted using an automatically generated key and you do not
 * need to provide a key to use the disk later.
 */
diskEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#disk for disks.
 */
kind?: string,

/**
 * A fingerprint for the labels being applied to this disk, which is essentially a hash of the labels set used for optimistic locking. The fingerprint is
 * initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint
 * hash in order to update or change labels.
 * 
 * To see the latest fingerprint, make a get() request to retrieve a disk.
 */
labelFingerprint?: string,

/**
 * Labels to apply to this disk. These can be later modified by the setLabels method.
 */
labels?: Record<string, string>,

/**
 * [Output Only] Last attach timestamp in RFC3339 text format.
 */
lastAttachTimestamp?: string,

/**
 * [Output Only] Last detach timestamp in RFC3339 text format.
 */
lastDetachTimestamp?: string,

/**
 * Any applicable publicly visible licenses.
 */
client$licenses?: string[],

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * Internal use only.
 */
options?: string,

/**
 * [Output Only] Server-defined fully-qualified URL for this resource.
 */
selfLink?: string,

/**
 * Size of the persistent disk, specified in GB. You can specify this field when creating a persistent disk using the sourceImage or sourceSnapshot
 * parameter, or specify it alone to create an empty persistent disk.
 * 
 * If you specify this field along with sourceImage or sourceSnapshot, the value of sizeGb must not be less than the size of the sourceImage or the size
 * of the snapshot. Acceptable values are 1 to 65536, inclusive.
 */
sizeGb?: string,

/**
 * The source image used to create this disk. If the source image is deleted, this field will not be set.
 * 
 * To create a disk with one of the public operating system images, specify the image by its family name. For example, specify family/debian-8 to use the
 * latest Debian 8 image:
 * 
 * projects/debian-cloud/global/images/family/debian-8
 * 
 * Alternatively, use a specific version of a public operating system image:
 * 
 * projects/debian-cloud/global/images/debian-8-jessie-vYYYYMMDD
 * 
 * To create a disk with a private image that you created, specify the image name in the following format:
 * 
 * global/images/my-private-image
 * 
 * You can also specify a private image by its image family, which returns the latest version of the image in that family. Replace the image name with
 * family/family-name:
 * 
 * global/images/family/my-private-family
 */
sourceImage?: string,

/**
 * The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
 */
sourceImageEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] The ID value of the image used to create this disk. This value identifies the exact image that was used to create this persistent disk.
 * For example, if you created the persistent disk from an image that was later deleted and recreated under the same name, the source image ID would
 * identify the exact version of the image that was used.
 */
sourceImageId?: string,

/**
 * The source snapshot used to create this disk. You can provide this as a partial or full URL to the resource. For example, the following are valid
 * values:
 * - https://www.googleapis.com/compute/v1/projects/project/global/snapshots/snapshot
 * - projects/project/global/snapshots/snapshot
 * - global/snapshots/snapshot
 */
sourceSnapshot?: string,

/**
 * The customer-supplied encryption key of the source snapshot. Required if the source snapshot is protected by a customer-supplied encryption key.
 */
sourceSnapshotEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] The unique ID of the snapshot used to create this disk. This value identifies the exact snapshot that was used to create this persistent
 * disk. For example, if you created the persistent disk from a snapshot that was later deleted and recreated under the same name, the source snapshot ID
 * would identify the exact version of the snapshot that was used.
 */
sourceSnapshotId?: string,

/**
 * [Output Only] The status of disk creation.
 */
status?: string,

/**
 * URL of the disk type resource describing which disk type to use to create the disk. Provide this when creating the disk.
 */
type?: string,

/**
 * [Output Only] Links to the users of the disk (attached instances) in form: project/zones/zone/instances/instance
 */
users?: string[],

/**
 * [Output Only] URL of the zone where the disk resides.
 */
zone?: string
} 

declare interface compute$DiskAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of DisksScopedList resources.
 */
items?: Record<string, compute$DisksScopedList>,

/**
 * [Output Only] Type of resource. Always compute#diskAggregatedList for aggregated lists of persistent disks.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$DiskList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Disk resources.
 */
items?: compute$Disk[],

/**
 * [Output Only] Type of resource. Always compute#diskList for lists of disks.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$DiskMoveRequest {

/**
 * The URL of the destination zone to move the disk. This can be a full or partial URL. For example, the following are all valid URLs to a zone:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone
 * - projects/project/zones/zone
 * - zones/zone
 */
destinationZone?: string,

/**
 * The URL of the target disk to move. This can be a full or partial URL. For example, the following are all valid URLs to a disk:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone/disks/disk
 * - projects/project/zones/zone/disks/disk
 * - zones/zone/disks/disk
 */
targetDisk?: string
} 

declare interface compute$DiskType {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] Server-defined default disk size in GB.
 */
defaultDiskSizeGb?: string,

/**
 * [Output Only] The deprecation status associated with this disk type.
 */
deprecated?: compute$DeprecationStatus,

/**
 * [Output Only] An optional description of this resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#diskType for disk types.
 */
kind?: string,

/**
 * [Output Only] Name of the resource.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] An optional textual description of the valid disk size, such as "10GB-10TB".
 */
validDiskSize?: string,

/**
 * [Output Only] URL of the zone where the disk type resides.
 */
zone?: string
} 

declare interface compute$DiskTypeAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of DiskTypesScopedList resources.
 */
items?: Record<string, compute$DiskTypesScopedList>,

/**
 * [Output Only] Type of resource. Always compute#diskTypeAggregatedList.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$DiskTypeList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of DiskType resources.
 */
items?: compute$DiskType[],

/**
 * [Output Only] Type of resource. Always compute#diskTypeList for disk types.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$DiskTypesScopedList {

/**
 * [Output Only] List of disk types contained in this scope.
 */
client$diskTypes?: compute$DiskType[],

/**
 * [Output Only] Informational warning which replaces the list of disk types when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$DisksResizeRequest {

/**
 * The new size of the persistent disk, which is specified in GB.
 */
sizeGb?: string
} 

declare interface compute$DisksScopedList {

/**
 * [Output Only] List of disks contained in this scope.
 */
client$disks?: compute$Disk[],

/**
 * [Output Only] Informational warning which replaces the list of disks when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$Firewall {

/**
 * The list of ALLOW rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
 */
allowed?: Array<{

/**
 * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following
 * well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.
 */
IPProtocol?: string,

/**
 * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a
 * range. If not specified, this rule applies to connections through any port.
 * 
 * Example inputs include: ["22"], ["80","443"], and ["12345-12349"].
 */
ports?: string[]
}>,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * The list of DENY rules specified by this firewall. Each rule specifies a protocol and port-range tuple that describes a permitted connection.
 */
denied?: Array<{

/**
 * The IP protocol to which this rule applies. The protocol type is required when creating a firewall rule. This value can either be one of the following
 * well known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp), or the IP protocol number.
 */
IPProtocol?: string,

/**
 * An optional list of ports to which this rule applies. This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a
 * range. If not specified, this rule applies to connections through any port.
 * 
 * Example inputs include: ["22"], ["80","443"], and ["12345-12349"].
 */
ports?: string[]
}>,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * If destination ranges are specified, the firewall will apply only to traffic that has destination IP address in these ranges. These ranges must be
 * expressed in CIDR format. Only IPv4 is supported.
 */
destinationRanges?: string[],

/**
 * Direction of traffic to which this firewall applies; default is INGRESS. Note: For INGRESS traffic, it is NOT supported to specify destinationRanges;
 * For EGRESS traffic, it is NOT supported to specify sourceRanges OR sourceTags.
 */
direction?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#firewall for firewall rules.
 */
kind?: string,

/**
 * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * URL of the network resource for this firewall rule. If not specified when creating a firewall rule, the default network is used:
 * global/networks/default
 * If you choose to specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:
 * - https://www.googleapis.com/compute/v1/projects/myproject/global/networks/my-network
 * - projects/myproject/global/networks/my-network
 * - global/networks/default
 */
network?: string,

/**
 * Priority for this rule. This is an integer between 0 and 65535, both inclusive. When not specified, the value assumed is 1000. Relative priorities
 * determine precedence of conflicting rules. Lower value of priority implies higher precedence (eg, a rule with priority 0 has higher precedence than a
 * rule with priority 1). DENY rules take precedence over ALLOW rules having equal priority.
 */
priority?: number,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * If source ranges are specified, the firewall will apply only to traffic that has source IP address in these ranges. These ranges must be expressed in
 * CIDR format. One or both of sourceRanges and sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP
 * address within sourceRanges OR the source IP that belongs to a tag listed in the sourceTags property. The connection does not need to match both
 * properties for the firewall to apply. Only IPv4 is supported.
 */
sourceRanges?: string[],

/**
 * If source tags are specified, the firewall rule applies only to traffic with source IPs that match the primary network interfaces of VM instances that
 * have the tag and are in the same VPC network. Source tags cannot be used to control traffic to an instance's external IP address, it only applies to
 * traffic between instances in the same virtual network. Because tags are associated with instances, not IP addresses. One or both of sourceRanges and
 * sourceTags may be set. If both properties are set, the firewall will apply to traffic that has source IP address within sourceRanges OR the source IP
 * that belongs to a tag listed in the sourceTags property. The connection does not need to match both properties for the firewall to apply.
 */
sourceTags?: string[],

/**
 * A list of instance tags indicating sets of instances located in the network that may make network connections as specified in allowed[]. If no
 * targetTags are specified, the firewall rule applies to all instances on the specified network.
 */
targetTags?: string[]
} 

declare interface compute$FirewallList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Firewall resources.
 */
items?: compute$Firewall[],

/**
 * [Output Only] Type of resource. Always compute#firewallList for lists of firewalls.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ForwardingRule {

/**
 * The IP address that this forwarding rule is serving on behalf of.
 * 
 * For global forwarding rules, the address must be a global IP. For regional forwarding rules, the address must live in the same region as the forwarding
 * rule. By default, this field is empty and an ephemeral IPv4 address from the same scope (global or regional) will be assigned. A regional forwarding
 * rule supports IPv4 only. A global forwarding rule supports either IPv4 or IPv6.
 * 
 * When the load balancing scheme is INTERNAL, this can only be an RFC 1918 IP address belonging to the network/subnetwork configured for the forwarding
 * rule. A reserved address cannot be used. If the field is empty, the IP address will be automatically allocated from the internal IP range of the
 * subnetwork or network configured for this forwarding rule.
 */
IPAddress?: string,

/**
 * The IP protocol to which this rule applies. Valid options are TCP, UDP, ESP, AH, SCTP or ICMP.
 * 
 * When the load balancing scheme is INTERNAL, only TCP and UDP are valid.
 */
IPProtocol?: string,

/**
 * This field is not used for external load balancing.
 * 
 * For internal load balancing, this field identifies the BackendService resource to receive the matched traffic.
 */
backendService?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * The IP Version that will be used by this forwarding rule. Valid options are IPV4 or IPV6. This can only be specified for a global forwarding rule.
 */
ipVersion?: string,

/**
 * [Output Only] Type of the resource. Always compute#forwardingRule for Forwarding Rule resources.
 */
kind?: string,

/**
 * This signifies what the ForwardingRule will be used for and can only take the following values: INTERNAL, EXTERNAL The value of INTERNAL means that
 * this will be used for Internal Network Load Balancing (TCP, UDP). The value of EXTERNAL means that this will be used for External Load Balancing
 * (HTTP(S) LB, External TCP/UDP LB, SSL Proxy)
 */
loadBalancingScheme?: string,

/**
 * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * This field is not used for external load balancing.
 * 
 * For internal load balancing, this field identifies the network that the load balanced IP should belong to for this Forwarding Rule. If this field is
 * not specified, the default network will be used.
 */
network?: string,

/**
 * This field is used along with the target field for TargetHttpProxy, TargetHttpsProxy, TargetSslProxy, TargetTcpProxy, TargetVpnGateway, TargetPool,
 * TargetInstance.
 * 
 * Applicable only when IPProtocol is TCP, UDP, or SCTP, only packets addressed to ports in the specified range will be forwarded to target. Forwarding
 * rules with the same [IPAddress, IPProtocol] pair must have disjoint port ranges.
 * 
 * Some types of forwarding target have constraints on the acceptable ports:
 * - TargetHttpProxy: 80, 8080
 * - TargetHttpsProxy: 443
 * - TargetTcpProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222
 * - TargetSslProxy: 25, 43, 110, 143, 195, 443, 465, 587, 700, 993, 995, 1883, 5222
 * - TargetVpnGateway: 500, 4500
 * -
 */
portRange?: string,

/**
 * This field is used along with the backend_service field for internal load balancing.
 * 
 * When the load balancing scheme is INTERNAL, a single port or a comma separated list of ports can be configured. Only packets addressed to these ports
 * will be forwarded to the backends configured with this forwarding rule.
 * 
 * You may specify a maximum of up to 5 ports.
 */
ports?: string[],

/**
 * [Output Only] URL of the region where the regional forwarding rule resides. This field is not applicable to global forwarding rules.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * This field is not used for external load balancing.
 * 
 * For internal load balancing, this field identifies the subnetwork that the load balanced IP should belong to for this Forwarding Rule.
 * 
 * If the network specified is in auto subnet mode, this field is optional. However, if the network is in custom subnet mode, a subnetwork must be
 * specified.
 */
subnetwork?: string,

/**
 * The URL of the target resource to receive the matched traffic. For regional forwarding rules, this target must live in the same region as the
 * forwarding rule. For global forwarding rules, this target must be a global load balancing resource. The forwarded traffic must be of a type appropriate
 * to the target object.
 * 
 * This field is not used for internal load balancing.
 */
target?: string
} 

declare interface compute$ForwardingRuleAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of ForwardingRulesScopedList resources.
 */
items?: Record<string, compute$ForwardingRulesScopedList>,

/**
 * [Output Only] Type of resource. Always compute#forwardingRuleAggregatedList for lists of forwarding rules.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ForwardingRuleList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of ForwardingRule resources.
 */
items?: compute$ForwardingRule[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ForwardingRulesScopedList {

/**
 * List of forwarding rules contained in this scope.
 */
client$forwardingRules?: compute$ForwardingRule[],

/**
 * Informational warning which replaces the list of forwarding rules when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$GlobalSetLabelsRequest {

/**
 * The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Compute Engine and
 * changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash when updating or changing labels. Make a
 * get() request to the resource to get the latest fingerprint.
 */
labelFingerprint?: string,

/**
 * A list of labels to apply for this resource. Each label key & value must comply with RFC1035. Specifically, the name must be 1-63 characters long and
 * match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be a lowercase letter, and all following characters must
 * be a dash, lowercase letter, or digit, except the last character, which cannot be a dash. For example, "webserver-frontend": "images". A label value
 * can also be empty (e.g. "my-label": "").
 */
labels?: Record<string, string>
} 

declare interface compute$GuestOsFeature {

/**
 * The type of supported feature. Currently only VIRTIO_SCSI_MULTIQUEUE is supported. For newer Windows images, the server might also populate this
 * property with the value WINDOWS to indicate that this is a Windows image.
 */
type?: string
} 

declare interface compute$HTTPHealthCheck {

/**
 * The value of the host header in the HTTP health check request. If left empty (default value), the IP on behalf of which this health check is performed
 * will be used.
 */
host?: string,

/**
 * The TCP port number for the health check request. The default value is 80. Valid values are 1 through 65535.
 */
port?: number,

/**
 * Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
 */
portName?: string,

/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
proxyHeader?: string,

/**
 * The request path of the HTTP health check request. The default value is /.
 */
requestPath?: string
} 

declare interface compute$HTTPSHealthCheck {

/**
 * The value of the host header in the HTTPS health check request. If left empty (default value), the IP on behalf of which this health check is performed
 * will be used.
 */
host?: string,

/**
 * The TCP port number for the health check request. The default value is 443. Valid values are 1 through 65535.
 */
port?: number,

/**
 * Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
 */
portName?: string,

/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
proxyHeader?: string,

/**
 * The request path of the HTTPS health check request. The default value is /.
 */
requestPath?: string
} 

declare interface compute$HealthCheck {

/**
 * How often (in seconds) to send a health check. The default value is 5 seconds.
 */
checkIntervalSec?: number,

/**
 * [Output Only] Creation timestamp in 3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
 */
healthyThreshold?: number,
httpHealthCheck?: compute$HTTPHealthCheck,
httpsHealthCheck?: compute$HTTPSHealthCheck,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * Type of the resource.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,
sslHealthCheck?: compute$SSLHealthCheck,
tcpHealthCheck?: compute$TCPHealthCheck,

/**
 * How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than
 * checkIntervalSec.
 */
timeoutSec?: number,

/**
 * Specifies the type of the healthCheck, either TCP, SSL, HTTP or HTTPS. If not specified, the default is TCP. Exactly one of the protocol-specific
 * health check field must be specified, which must match type field.
 */
type?: string,

/**
 * A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
 */
unhealthyThreshold?: number
} 

declare interface compute$HealthCheckList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of HealthCheck resources.
 */
items?: compute$HealthCheck[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$HealthCheckReference {
healthCheck?: string
} 

declare interface compute$HealthStatus {

/**
 * Health state of the instance.
 */
healthState?: string,

/**
 * URL of the instance resource.
 */
instance?: string,

/**
 * The IP address represented by this resource.
 */
ipAddress?: string,

/**
 * The port on the instance.
 */
port?: number
} 

declare interface compute$HostRule {

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * The list of host patterns to match. They must be valid hostnames, except &#42; will match any string of ([a-z0-9-.]&#42;). In that case, &#42; must be the first
 * character and must be followed in the pattern by either - or ..
 */
hosts?: string[],

/**
 * The name of the PathMatcher to use to match the path portion of the URL if the hostRule matches the URL's host portion.
 */
pathMatcher?: string
} 

declare interface compute$HttpHealthCheck {

/**
 * How often (in seconds) to send a health check. The default value is 5 seconds.
 */
checkIntervalSec?: number,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
 */
healthyThreshold?: number,

/**
 * The value of the host header in the HTTP health check request. If left empty (default value), the public IP on behalf of which this health check is
 * performed will be used.
 */
host?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#httpHealthCheck for HTTP health checks.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The TCP port number for the HTTP health check request. The default value is 80.
 */
port?: number,

/**
 * The request path of the HTTP health check request. The default value is /.
 */
requestPath?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have greater value than
 * checkIntervalSec.
 */
timeoutSec?: number,

/**
 * A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
 */
unhealthyThreshold?: number
} 

declare interface compute$HttpHealthCheckList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of HttpHealthCheck resources.
 */
items?: compute$HttpHealthCheck[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$HttpsHealthCheck {

/**
 * How often (in seconds) to send a health check. The default value is 5 seconds.
 */
checkIntervalSec?: number,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.
 */
healthyThreshold?: number,

/**
 * The value of the host header in the HTTPS health check request. If left empty (default value), the public IP on behalf of which this health check is
 * performed will be used.
 */
host?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * Type of the resource.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The TCP port number for the HTTPS health check request. The default value is 443.
 */
port?: number,

/**
 * The request path of the HTTPS health check request. The default value is "/".
 */
requestPath?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * How long (in seconds) to wait before claiming failure. The default value is 5 seconds. It is invalid for timeoutSec to have a greater value than
 * checkIntervalSec.
 */
timeoutSec?: number,

/**
 * A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.
 */
unhealthyThreshold?: number
} 

declare interface compute$HttpsHealthCheckList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of HttpsHealthCheck resources.
 */
items?: compute$HttpsHealthCheck[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$Image {

/**
 * Size of the image tar.gz archive stored in Google Cloud Storage (in bytes).
 */
archiveSizeBytes?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * The deprecation status associated with this image.
 */
deprecated?: compute$DeprecationStatus,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * Size of the image when restored onto a persistent disk (in GB).
 */
diskSizeGb?: string,

/**
 * The name of the image family to which this image belongs. You can create disks by specifying an image family instead of a specific image name. The
 * image family always returns its latest image that is not deprecated. The name of the image family must comply with RFC1035.
 */
family?: string,

/**
 * A list of features to enable on the guest OS. Applicable for bootable images only. Currently, only one feature can be enabled, VIRTIO_SCSI_MULTIQUEUE,
 * which allows each virtual CPU to have its own queue. For Windows images, you can only enable VIRTIO_SCSI_MULTIQUEUE on images with driver version
 * 1.2.0.1621 or higher. Linux images with kernel versions 3.17 and higher will support VIRTIO_SCSI_MULTIQUEUE.
 * 
 * For newer Windows images, the server might also populate this property with the value WINDOWS to indicate that this is a Windows image.
 */
guestOsFeatures?: compute$GuestOsFeature[],

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * Encrypts the image using a customer-supplied encryption key.
 * 
 * After you encrypt an image with a customer-supplied key, you must provide the same key if you use the image later (e.g. to create a disk from the
 * image).
 * 
 * Customer-supplied encryption keys do not protect access to metadata of the disk.
 * 
 * If you do not provide an encryption key when creating the image, then the disk will be encrypted using an automatically generated key and you do not
 * need to provide a key to use the image later.
 */
imageEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] Type of the resource. Always compute#image for images.
 */
kind?: string,

/**
 * A fingerprint for the labels being applied to this image, which is essentially a hash of the labels used for optimistic locking. The fingerprint is
 * initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint
 * hash in order to update or change labels.
 * 
 * To see the latest fingerprint, make a get() request to retrieve an image.
 */
labelFingerprint?: string,

/**
 * Labels to apply to this image. These can be later modified by the setLabels method.
 */
labels?: Record<string, string>,

/**
 * Any applicable license URI.
 */
client$licenses?: string[],

/**
 * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The parameters of the raw disk image.
 */
rawDisk?: {

/**
 * The format used to encode and transmit the block device, which should be TAR. This is just a container and transmission format and not a runtime
 * format. Provided by the client when the disk image is created.
 */
containerType?: string,

/**
 * An optional SHA1 checksum of the disk image before unpackaging; provided by the client when the disk image is created.
 */
sha1Checksum?: string,

/**
 * The full Google Cloud Storage URL where the disk image is stored. You must provide either this property or the sourceDisk property but not both.
 */
source?: string
},

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * URL of the source disk used to create this image. This can be a full or valid partial URL. You must provide either this property or the rawDisk.source
 * property but not both to create an image. For example, the following are valid values:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone/disks/disk
 * - projects/project/zones/zone/disks/disk
 * - zones/zone/disks/disk
 */
sourceDisk?: string,

/**
 * The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
 */
sourceDiskEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * The ID value of the disk used to create this image. This value may be used to determine whether the image was taken from the current or a previous
 * instance of a given disk name.
 */
sourceDiskId?: string,

/**
 * URL of the source image used to create this image. This can be a full or valid partial URL. You must provide exactly one of:
 * - this property, or
 * - the rawDisk.source property, or
 * - the sourceDisk property   in order to create an image.
 */
sourceImage?: string,

/**
 * The customer-supplied encryption key of the source image. Required if the source image is protected by a customer-supplied encryption key.
 */
sourceImageEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] The ID value of the image used to create this image. This value may be used to determine whether the image was taken from the current or
 * a previous instance of a given image name.
 */
sourceImageId?: string,

/**
 * The type of the image used to create this disk. The default and only value is RAW
 */
sourceType?: string,

/**
 * [Output Only] The status of the image. An image can be used to create other resources, such as instances, only after the image has been successfully
 * created and the status is set to READY. Possible values are FAILED, PENDING, or READY.
 */
status?: string
} 

declare interface compute$ImageList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Image resources.
 */
items?: compute$Image[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$Instance {

/**
 * Allows this instance to send and receive packets with non-matching destination or source IPs. This is required if you plan to use this instance to
 * forward routes. For more information, see Enabling IP Forwarding.
 */
canIpForward?: boolean,

/**
 * [Output Only] The CPU platform used by this instance.
 */
cpuPlatform?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * Array of disks associated with this instance. Persistent disks must be created before you can assign them.
 */
client$disks?: compute$AttachedDisk[],

/**
 * List of the type and count of accelerator cards attached to the instance.
 */
guestAccelerators?: compute$AcceleratorConfig[],

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#instance for instances.
 */
kind?: string,

/**
 * A fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is initially
 * generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint hash in
 * order to update or change metadata.
 * 
 * To see the latest fingerprint, make get() request to the instance.
 */
labelFingerprint?: string,

/**
 * Labels to apply to this instance. These can be later modified by the setLabels method.
 */
labels?: Record<string, string>,

/**
 * Full or partial URL of the machine type resource to use for this instance, in the format: zones/zone/machineTypes/machine-type. This is provided by the
 * client when the instance is created. For example, the following is a valid partial url to a predefined machine type:
 * 
 * zones/us-central1-f/machineTypes/n1-standard-1
 * 
 * To create a custom machine type, provide a URL to a machine type in the following format, where CPUS is 1 or an even number up to 32 (2, 4, 6, ... 24,
 * etc), and MEMORY is the total memory for this instance. Memory must be a multiple of 256 MB and must be supplied in MB (e.g. 5 GB of memory is 5120
 * MB):
 * 
 * zones/zone/machineTypes/custom-CPUS-MEMORY
 * 
 * For example: zones/us-central1-f/machineTypes/custom-4-5120
 * 
 * For a full list of restrictions, read the Specifications for custom machine types.
 */
machineType?: string,

/**
 * The metadata key/value pairs assigned to this instance. This includes custom metadata and predefined keys.
 */
metadata?: compute$Metadata,

/**
 * Specifies a minimum CPU platform for the VM instance. Applicable values are the friendly names of CPU platforms, such as minCpuPlatform: "Intel
 * Haswell" or minCpuPlatform: "Intel Sandy Bridge".
 */
minCpuPlatform?: string,

/**
 * The name of the resource, provided by the client when initially creating the resource. The resource name must be 1-63 characters long, and comply with
 * RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first
 * character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot
 * be a dash.
 */
name?: string,

/**
 * An array of network configurations for this instance. These specify how interfaces are configured to interact with other network services, such as
 * connecting to the internet. Multiple interfaces are supported per instance.
 */
networkInterfaces?: compute$NetworkInterface[],

/**
 * Sets the scheduling options for this instance.
 */
scheduling?: compute$Scheduling,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * A list of service accounts, with their specified scopes, authorized for this instance. Only one service account per VM instance is supported.
 * 
 * Service accounts generate access tokens that can be accessed through the metadata server and used to authenticate applications on the instance. See
 * Service Accounts for more information.
 */
serviceAccounts?: compute$ServiceAccount[],

/**
 * [Output Only] Whether a VM has been restricted for start because Compute Engine has detected suspicious activity.
 */
startRestricted?: boolean,

/**
 * [Output Only] The status of the instance. One of the following values: PROVISIONING, STAGING, RUNNING, STOPPING, STOPPED, SUSPENDING, SUSPENDED, and
 * TERMINATED.
 */
status?: string,

/**
 * [Output Only] An optional, human-readable explanation of the status.
 */
statusMessage?: string,

/**
 * A list of tags to apply to this instance. Tags are used to identify valid sources or targets for network firewalls and are specified by the client
 * during instance creation. The tags can be later modified by the setTags method. Each tag within the list must comply with RFC1035.
 */
tags?: compute$Tags,

/**
 * [Output Only] URL of the zone where the instance resides.
 */
zone?: string
} 

declare interface compute$InstanceAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstancesScopedList resources.
 */
items?: Record<string, compute$InstancesScopedList>,

/**
 * [Output Only] Type of resource. Always compute#instanceAggregatedList for aggregated lists of Instance resources.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroup {

/**
 * [Output Only] The creation timestamp for this instance group in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The fingerprint of the named ports. The system uses this fingerprint to detect conflicts when multiple users change the named ports
 * concurrently.
 */
fingerprint?: string,

/**
 * [Output Only] A unique identifier for this instance group, generated by the server.
 */
id?: string,

/**
 * [Output Only] The resource type, which is always compute#instanceGroup for instance groups.
 */
kind?: string,

/**
 * The name of the instance group. The name must be 1-63 characters long, and comply with RFC1035.
 */
name?: string,

/**
 * Assigns a name to a port number. For example: {name: "http", port: 80}
 * 
 * This allows the system to reference ports by the assigned name instead of a port number. Named ports can also contain multiple ports. For example:
 * [{name: "http", port: 80},{name: "http", port: 8080}]
 * 
 * Named ports apply to all instances in this instance group.
 */
namedPorts?: compute$NamedPort[],

/**
 * The URL of the network to which all instances in the instance group belong.
 */
network?: string,

/**
 * The URL of the region where the instance group is located (for regional resources).
 */
region?: string,

/**
 * [Output Only] The URL for this instance group. The server generates this URL.
 */
selfLink?: string,

/**
 * [Output Only] The total number of instances in the instance group.
 */
size?: number,

/**
 * The URL of the subnetwork to which all instances in the instance group belong.
 */
subnetwork?: string,

/**
 * [Output Only] The URL of the zone where the instance group is located (for zonal resources).
 */
zone?: string
} 

declare interface compute$InstanceGroupAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceGroupsScopedList resources.
 */
items?: Record<string, compute$InstanceGroupsScopedList>,

/**
 * [Output Only] The resource type, which is always compute#instanceGroupAggregatedList for aggregated lists of instance groups.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceGroup resources.
 */
items?: compute$InstanceGroup[],

/**
 * [Output Only] The resource type, which is always compute#instanceGroupList for instance group lists.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupManager {

/**
 * The base instance name to use for instances in this group. The value must be 1-58 characters long. Instances are named by appending a hyphen and a
 * random four-character string to the base instance name. The base instance name must comply with RFC1035.
 */
baseInstanceName?: string,

/**
 * [Output Only] The creation timestamp for this managed instance group in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] The list of instance actions and the number of instances in this managed instance group that are scheduled for each of those actions.
 */
currentActions?: compute$InstanceGroupManagerActionsSummary,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The fingerprint of the resource data. You can use this optional field for optimistic locking when you update the resource.
 */
fingerprint?: string,

/**
 * [Output Only] A unique identifier for this resource type. The server generates this identifier.
 */
id?: string,

/**
 * [Output Only] The URL of the Instance Group resource.
 */
instanceGroup?: string,

/**
 * The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the
 * managed instance group.
 */
instanceTemplate?: string,

/**
 * [Output Only] The resource type, which is always compute#instanceGroupManager for managed instance groups.
 */
kind?: string,

/**
 * The name of the managed instance group. The name must be 1-63 characters long, and comply with RFC1035.
 */
name?: string,

/**
 * Named ports configured for the Instance Groups complementary to this Instance Group Manager.
 */
namedPorts?: compute$NamedPort[],

/**
 * [Output Only] The URL of the region where the managed instance group resides (for regional resources).
 */
region?: string,

/**
 * [Output Only] The URL for this managed instance group. The server defines this URL.
 */
selfLink?: string,

/**
 * The URLs for all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the
 * instances in the managed instance group.
 */
client$targetPools?: string[],

/**
 * The target number of running instances for this managed instance group. Deleting or abandoning instances reduces this number. Resizing the group
 * changes this number.
 */
targetSize?: number,

/**
 * [Output Only] The URL of the zone where the managed instance group is located (for zonal resources).
 */
zone?: string
} 

declare interface compute$InstanceGroupManagerActionsSummary {

/**
 * [Output Only] The total number of instances in the managed instance group that are scheduled to be abandoned. Abandoning an instance removes it from
 * the managed instance group without deleting it.
 */
abandoning?: number,

/**
 * [Output Only] The number of instances in the managed instance group that are scheduled to be created or are currently being created. If the group fails
 * to create any of these instances, it tries again until it creates the instance successfully.
 * 
 * If you have disabled creation retries, this field will not be populated; instead, the creatingWithoutRetries field will be populated.
 */
creating?: number,

/**
 * [Output Only] The number of instances that the managed instance group will attempt to create. The group attempts to create each instance only once. If
 * the group fails to create any of these instances, it decreases the group's targetSize value accordingly.
 */
creatingWithoutRetries?: number,

/**
 * [Output Only] The number of instances in the managed instance group that are scheduled to be deleted or are currently being deleted.
 */
deleting?: number,

/**
 * [Output Only] The number of instances in the managed instance group that are running and have no scheduled actions.
 */
none?: number,

/**
 * [Output Only] The number of instances in the managed instance group that are scheduled to be recreated or are currently being being recreated.
 * Recreating an instance deletes the existing root persistent disk and creates a new disk from the image that is defined in the instance template.
 */
recreating?: number,

/**
 * [Output Only] The number of instances in the managed instance group that are being reconfigured with properties that do not require a restart or a
 * recreate action. For example, setting or removing target pools for the instance.
 */
refreshing?: number,

/**
 * [Output Only] The number of instances in the managed instance group that are scheduled to be restarted or are currently being restarted.
 */
restarting?: number
} 

declare interface compute$InstanceGroupManagerAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceGroupManagersScopedList resources.
 */
items?: Record<string, compute$InstanceGroupManagersScopedList>,

/**
 * [Output Only] The resource type, which is always compute#instanceGroupManagerAggregatedList for an aggregated list of managed instance groups.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupManagerList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceGroupManager resources.
 */
items?: compute$InstanceGroupManager[],

/**
 * [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupManagersAbandonInstancesRequest {

/**
 * The URLs of one or more instances to abandon. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
 */
client$instances?: string[]
} 

declare interface compute$InstanceGroupManagersDeleteInstancesRequest {

/**
 * The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
 */
client$instances?: string[]
} 

declare interface compute$InstanceGroupManagersListManagedInstancesResponse {

/**
 * [Output Only] The list of instances in the managed instance group.
 */
managedInstances?: compute$ManagedInstance[]
} 

declare interface compute$InstanceGroupManagersRecreateInstancesRequest {

/**
 * The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
 */
client$instances?: string[]
} 

declare interface compute$InstanceGroupManagersScopedList {

/**
 * [Output Only] The list of managed instance groups that are contained in the specified project and zone.
 */
client$instanceGroupManagers?: compute$InstanceGroupManager[],

/**
 * [Output Only] The warning that replaces the list of managed instance groups when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupManagersSetInstanceTemplateRequest {

/**
 * The URL of the instance template that is specified for this managed instance group. The group uses this template to create all new instances in the
 * managed instance group.
 */
instanceTemplate?: string
} 

declare interface compute$InstanceGroupManagersSetTargetPoolsRequest {

/**
 * The fingerprint of the target pools information. Use this optional property to prevent conflicts when multiple users change the target pools settings
 * concurrently. Obtain the fingerprint with the instanceGroupManagers.get method. Then, include the fingerprint in your request to ensure that you do not
 * overwrite changes that were applied from another concurrent request.
 */
fingerprint?: string,

/**
 * The list of target pool URLs that instances in this managed instance group belong to. The managed instance group applies these target pools to all of
 * the instances in the group. Existing instances and new instances in the group all receive these target pool settings.
 */
client$targetPools?: string[]
} 

declare interface compute$InstanceGroupsAddInstancesRequest {

/**
 * The list of instances to add to the instance group.
 */
client$instances?: compute$InstanceReference[]
} 

declare interface compute$InstanceGroupsListInstances {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceWithNamedPorts resources.
 */
items?: compute$InstanceWithNamedPorts[],

/**
 * [Output Only] The resource type, which is always compute#instanceGroupsListInstances for the list of instances in the specified instance group.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupsListInstancesRequest {

/**
 * A filter for the state of the instances in the instance group. Valid options are ALL or RUNNING. If you do not specify this parameter the list includes
 * all instances regardless of their state.
 */
instanceState?: string
} 

declare interface compute$InstanceGroupsRemoveInstancesRequest {

/**
 * The list of instances to remove from the instance group.
 */
client$instances?: compute$InstanceReference[]
} 

declare interface compute$InstanceGroupsScopedList {

/**
 * [Output Only] The list of instance groups that are contained in this scope.
 */
client$instanceGroups?: compute$InstanceGroup[],

/**
 * [Output Only] An informational warning that replaces the list of instance groups when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceGroupsSetNamedPortsRequest {

/**
 * The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the
 * named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure
 * that you do not overwrite changes that were applied from another concurrent request.
 */
fingerprint?: string,

/**
 * The list of named ports to set for this instance group.
 */
namedPorts?: compute$NamedPort[]
} 

declare interface compute$InstanceList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Instance resources.
 */
items?: compute$Instance[],

/**
 * [Output Only] Type of resource. Always compute#instanceList for lists of Instance resources.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceMoveRequest {

/**
 * The URL of the destination zone to move the instance. This can be a full or partial URL. For example, the following are all valid URLs to a zone:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone
 * - projects/project/zones/zone
 * - zones/zone
 */
destinationZone?: string,

/**
 * The URL of the target instance to move. This can be a full or partial URL. For example, the following are all valid URLs to an instance:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance
 * - projects/project/zones/zone/instances/instance
 * - zones/zone/instances/instance
 */
targetInstance?: string
} 

declare interface compute$InstanceProperties {

/**
 * Enables instances created based on this template to send packets with source IP addresses other than their own and receive packets with destination IP
 * addresses other than their own. If these instances will be used as an IP gateway or it will be set as the next-hop in a Route resource, specify true.
 * If unsure, leave this set to false. See the Enable IP forwarding documentation for more information.
 */
canIpForward?: boolean,

/**
 * An optional text description for the instances that are created from this instance template.
 */
description?: string,

/**
 * An array of disks that are associated with the instances that are created from this template.
 */
client$disks?: compute$AttachedDisk[],

/**
 * A list of guest accelerator cards' type and count to use for instances created from the instance template.
 */
guestAccelerators?: compute$AcceleratorConfig[],

/**
 * Labels to apply to instances that are created from this template.
 */
labels?: Record<string, string>,

/**
 * The machine type to use for instances that are created from this template.
 */
machineType?: string,

/**
 * The metadata key/value pairs to assign to instances that are created from this template. These pairs can consist of custom metadata or predefined keys.
 * See Project and instance metadata for more information.
 */
metadata?: compute$Metadata,

/**
 * Minimum cpu/platform to be used by this instance. The instance may be scheduled on the specified or newer cpu/platform. Applicable values are the
 * friendly names of CPU platforms, such as minCpuPlatform: "Intel Haswell" or minCpuPlatform: "Intel Sandy Bridge". For more information, read Specifying
 * a Minimum CPU Platform.
 */
minCpuPlatform?: string,

/**
 * An array of network access configurations for this interface.
 */
networkInterfaces?: compute$NetworkInterface[],

/**
 * Specifies the scheduling options for the instances that are created from this template.
 */
scheduling?: compute$Scheduling,

/**
 * A list of service accounts with specified scopes. Access tokens for these service accounts are available to the instances that are created from this
 * template. Use metadata queries to obtain the access tokens for these instances.
 */
serviceAccounts?: compute$ServiceAccount[],

/**
 * A list of tags to apply to the instances that are created from this template. The tags identify valid sources or targets for network firewalls. The
 * setTags method can modify this list of tags. Each tag within the list must comply with RFC1035.
 */
tags?: compute$Tags
} 

declare interface compute$InstanceReference {

/**
 * The URL for a specific instance.
 */
instance?: string
} 

declare interface compute$InstanceTemplate {

/**
 * [Output Only] The creation timestamp for this instance template in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] A unique identifier for this instance template. The server defines this identifier.
 */
id?: string,

/**
 * [Output Only] The resource type, which is always compute#instanceTemplate for instance templates.
 */
kind?: string,

/**
 * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The instance properties for this instance template.
 */
properties?: compute$InstanceProperties,

/**
 * [Output Only] The URL for this instance template. The server defines this URL.
 */
selfLink?: string
} 

declare interface compute$InstanceTemplateList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceTemplate resources.
 */
items?: compute$InstanceTemplate[],

/**
 * [Output Only] The resource type, which is always compute#instanceTemplatesListResponse for instance template lists.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstanceWithNamedPorts {

/**
 * [Output Only] The URL of the instance.
 */
instance?: string,

/**
 * [Output Only] The named ports that belong to this instance group.
 */
namedPorts?: compute$NamedPort[],

/**
 * [Output Only] The status of the instance.
 */
status?: string
} 

declare interface compute$InstancesScopedList {

/**
 * [Output Only] List of instances contained in this scope.
 */
client$instances?: compute$Instance[],

/**
 * [Output Only] Informational warning which replaces the list of instances when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$InstancesSetLabelsRequest {

/**
 * Fingerprint of the previous set of labels for this resource, used to prevent conflicts. Provide the latest fingerprint value when making a request to
 * add or change labels.
 */
labelFingerprint?: string,
labels?: Record<string, string>
} 

declare interface compute$InstancesSetMachineResourcesRequest {

/**
 * List of the type and count of accelerator cards attached to the instance.
 */
guestAccelerators?: compute$AcceleratorConfig[]
} 

declare interface compute$InstancesSetMachineTypeRequest {

/**
 * Full or partial URL of the machine type resource. See Machine Types for a full list of machine types. For example:
 * zones/us-central1-f/machineTypes/n1-standard-1
 */
machineType?: string
} 

declare interface compute$InstancesSetMinCpuPlatformRequest {

/**
 * Minimum cpu/platform this instance should be started at.
 */
minCpuPlatform?: string
} 

declare interface compute$InstancesSetServiceAccountRequest {

/**
 * Email address of the service account.
 */
email?: string,

/**
 * The list of scopes to be made available for this service account.
 */
scopes?: string[]
} 

declare interface compute$InstancesStartWithEncryptionKeyRequest {

/**
 * Array of disks associated with this instance that are protected with a customer-supplied encryption key.
 * 
 * In order to start the instance, the disk url and its corresponding key must be provided.
 * 
 * If the disk is not protected with a customer-supplied encryption key it should not be specified.
 */
client$disks?: compute$CustomerEncryptionKeyProtectedDisk[]
} 

declare interface compute$License {

/**
 * [Output Only] Deprecated. This field no longer reflects whether a license charges a usage fee.
 */
chargesUseFee?: boolean,

/**
 * [Output Only] Type of resource. Always compute#license for licenses.
 */
kind?: string,

/**
 * [Output Only] Name of the resource. The name is 1-63 characters long and complies with RFC1035.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string
} 

declare interface compute$MachineType {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] The deprecation status associated with this machine type.
 */
deprecated?: compute$DeprecationStatus,

/**
 * [Output Only] An optional textual description of the resource.
 */
description?: string,

/**
 * [Output Only] The number of virtual CPUs that are available to the instance.
 */
guestCpus?: number,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Deprecated] This property is deprecated and will never be populated with any relevant values.
 */
imageSpaceGb?: number,

/**
 * [Output Only] Whether this machine type has a shared CPU. See Shared-core machine types for more information.
 */
isSharedCpu?: boolean,

/**
 * [Output Only] The type of the resource. Always compute#machineType for machine types.
 */
kind?: string,

/**
 * [Output Only] Maximum persistent disks allowed.
 */
maximumPersistentDisks?: number,

/**
 * [Output Only] Maximum total persistent disks size (GB) allowed.
 */
maximumPersistentDisksSizeGb?: string,

/**
 * [Output Only] The amount of physical memory available to the instance, defined in MB.
 */
memoryMb?: number,

/**
 * [Output Only] Name of the resource.
 */
name?: string,

/**
 * [Output Only] List of extended scratch disks assigned to the instance.
 */
scratchDisks?: Array<{

/**
 * Size of the scratch disk, defined in GB.
 */
diskGb?: number
}>,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] The name of the zone where the machine type resides, such as us-central1-a.
 */
zone?: string
} 

declare interface compute$MachineTypeAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of MachineTypesScopedList resources.
 */
items?: Record<string, compute$MachineTypesScopedList>,

/**
 * [Output Only] Type of resource. Always compute#machineTypeAggregatedList for aggregated lists of machine types.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$MachineTypeList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of MachineType resources.
 */
items?: compute$MachineType[],

/**
 * [Output Only] Type of resource. Always compute#machineTypeList for lists of machine types.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$MachineTypesScopedList {

/**
 * [Output Only] List of machine types contained in this scope.
 */
client$machineTypes?: compute$MachineType[],

/**
 * [Output Only] An informational warning that appears when the machine types list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ManagedInstance {

/**
 * [Output Only] The current action that the managed instance group has scheduled for the instance. Possible values:
 * - NONE The instance is running, and the managed instance group does not have any scheduled actions for this instance.
 * - CREATING The managed instance group is creating this instance. If the group fails to create this instance, it will try again until it is successful.
 * - CREATING_WITHOUT_RETRIES The managed instance group is attempting to create this instance only once. If the group fails to create this instance, it
 * does not try again and the group's targetSize value is decreased instead.
 * - RECREATING The managed instance group is recreating this instance.
 * - DELETING The managed instance group is permanently deleting this instance.
 * - ABANDONING The managed instance group is abandoning this instance. The instance will be removed from the instance group and from any target pools
 * that are associated with this group.
 * - RESTARTING The managed instance group is restarting the instance.
 * - REFRESHING The managed instance group is applying configuration changes to the instance without stopping it. For example, the group can update the
 * target pool list for an instance without stopping that instance.
 */
currentAction?: string,

/**
 * [Output only] The unique identifier for this resource. This field is empty when instance does not exist.
 */
id?: string,

/**
 * [Output Only] The URL of the instance. The URL can exist even if the instance has not yet been created.
 */
instance?: string,

/**
 * [Output Only] The status of the instance. This field is empty when the instance does not exist.
 */
instanceStatus?: string,

/**
 * [Output Only] Information about the last attempt to create or delete the instance.
 */
lastAttempt?: compute$ManagedInstanceLastAttempt
} 

declare interface compute$ManagedInstanceLastAttempt {

/**
 * [Output Only] Encountered errors during the last attempt to create or delete the instance.
 */
errors?: {

/**
 * [Output Only] The array of errors encountered while processing this operation.
 */
errors?: Array<{

/**
 * [Output Only] The error type identifier for this error.
 */
code?: string,

/**
 * [Output Only] Indicates the field in the request that caused the error. This property is optional.
 */
location?: string,

/**
 * [Output Only] An optional, human-readable error message.
 */
message?: string
}>
}
} 

declare interface compute$Metadata {

/**
 * Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is
 * initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint
 * hash in order to update or change metadata.
 */
fingerprint?: string,

/**
 * Array of key/value pairs. The total size of all keys and values must be less than 512 KB.
 */
items?: Array<{

/**
 * Key for the metadata entry. Keys must conform to the following regexp: [a-zA-Z0-9-_]+, and be less than 128 bytes in length. This is reflected as part
 * of a URL in the metadata server. Additionally, to avoid ambiguity, keys must not conflict with any other metadata keys for the project.
 */
key?: string,

/**
 * Value for the metadata entry. These are free-form strings, and only have meaning as interpreted by the image running in the instance. The only
 * restriction placed on values is that their size must be less than or equal to 262144 bytes (256 KiB).
 */
value?: string
}>,

/**
 * [Output Only] Type of the resource. Always compute#metadata for metadata.
 */
kind?: string
} 

declare interface compute$NamedPort {

/**
 * The name for this named port. The name must be 1-63 characters long, and comply with RFC1035.
 */
name?: string,

/**
 * The port number, which can be a value between 1 and 65535.
 */
port?: number
} 

declare interface compute$Network {

/**
 * The range of internal addresses that are legal on this network. This range is a CIDR specification, for example: 192.168.0.0/16. Provided by the client
 * when the network is created.
 */
IPv4Range?: string,

/**
 * When set to true, the network is created in "auto subnet mode". When set to false, the network is in "custom subnet mode".
 * 
 * In "auto subnet mode", a newly created network is assigned the default CIDR of 10.128.0.0/9 and it automatically creates one subnetwork per region.
 */
autoCreateSubnetworks?: boolean,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * A gateway address for default routing to other networks. This value is read only and is selected by the Google Compute Engine, typically as the first
 * usable address in the IPv4Range.
 */
gatewayIPv4?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#network for networks.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] List of network peerings for the resource.
 */
peerings?: compute$NetworkPeering[],

/**
 * The network-level routing configuration for this network. Used by Cloud Router to determine what type of network-wide routing behavior to enforce.
 */
routingConfig?: compute$NetworkRoutingConfig,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] Server-defined fully-qualified URLs for all subnetworks in this network.
 */
client$subnetworks?: string[]
} 

declare interface compute$NetworkInterface {

/**
 * An array of configurations for this interface. Currently, only one access config, ONE_TO_ONE_NAT, is supported. If there are no accessConfigs
 * specified, then this instance will have no external internet access.
 */
accessConfigs?: compute$AccessConfig[],

/**
 * An array of alias IP ranges for this network interface. Can only be specified for network interfaces on subnet-mode networks.
 */
aliasIpRanges?: compute$AliasIpRange[],

/**
 * [Output Only] Type of the resource. Always compute#networkInterface for network interfaces.
 */
kind?: string,

/**
 * [Output Only] The name of the network interface, generated by the server. For network devices, these are eth0, eth1, etc.
 */
name?: string,

/**
 * URL of the network resource for this instance. When creating an instance, if neither the network nor the subnetwork is specified, the default network
 * global/networks/default is used; if the network is not specified but the subnetwork is specified, the network is inferred.
 * 
 * This field is optional when creating a firewall rule. If not specified when creating a firewall rule, the default network global/networks/default is
 * used.
 * 
 * If you specify this property, you can specify the network as a full or partial URL. For example, the following are all valid URLs:
 * - https://www.googleapis.com/compute/v1/projects/project/global/networks/network
 * - projects/project/global/networks/network
 * - global/networks/default
 */
network?: string,

/**
 * An IPv4 internal network address to assign to the instance for this network interface. If not specified by the user, an unused internal IP is assigned
 * by the system.
 */
networkIP?: string,

/**
 * The URL of the Subnetwork resource for this instance. If the network resource is in legacy mode, do not provide this property. If the network is in
 * auto subnet mode, providing the subnetwork is optional. If the network is in custom subnet mode, then this field should be specified. If you specify
 * this property, you can specify the subnetwork as a full or partial URL. For example, the following are all valid URLs:
 * - https://www.googleapis.com/compute/v1/projects/project/regions/region/subnetworks/subnetwork
 * - regions/region/subnetworks/subnetwork
 */
subnetwork?: string
} 

declare interface compute$NetworkList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Network resources.
 */
items?: compute$Network[],

/**
 * [Output Only] Type of resource. Always compute#networkList for lists of networks.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$NetworkPeering {

/**
 * Whether full mesh connectivity is created and managed automatically. When it is set to true, Google Compute Engine will automatically create and manage
 * the routes between two networks when the state is ACTIVE. Otherwise, user needs to create routes manually to route packets to peer network.
 */
autoCreateRoutes?: boolean,

/**
 * Name of this peering. Provided by the client when the peering is created. The name must comply with RFC1035. Specifically, the name must be 1-63
 * characters long and match regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be a lowercase letter, and all the
 * following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not
 * contain project, it is assumed that the peer network is in the same project as the current network.
 */
network?: string,

/**
 * [Output Only] State for the peering.
 */
state?: string,

/**
 * [Output Only] Details about the current state of the peering.
 */
stateDetails?: string
} 

declare interface compute$NetworkRoutingConfig {

/**
 * The network-wide routing mode to use. If set to REGIONAL, this network's cloud routers will only advertise routes with subnetworks of this network in
 * the same region as the router. If set to GLOBAL, this network's cloud routers will advertise routes with all subnetworks of this network, across
 * regions.
 */
routingMode?: string
} 

declare interface compute$NetworksAddPeeringRequest {

/**
 * Whether Google Compute Engine manages the routes automatically.
 */
autoCreateRoutes?: boolean,

/**
 * Name of the peering, which should conform to RFC1035.
 */
name?: string,

/**
 * URL of the peer network. It can be either full URL or partial URL. The peer network may belong to a different project. If the partial URL does not
 * contain project, it is assumed that the peer network is in the same project as the current network.
 */
peerNetwork?: string
} 

declare interface compute$NetworksRemovePeeringRequest {

/**
 * Name of the peering, which should conform to RFC1035.
 */
name?: string
} 

declare interface compute$Operation {

/**
 * [Output Only] Reserved for future use.
 */
clientOperationId?: string,

/**
 * [Deprecated] This field is deprecated.
 */
creationTimestamp?: string,

/**
 * [Output Only] A textual description of the operation, which is set when the operation is created.
 */
description?: string,

/**
 * [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
 */
endTime?: string,

/**
 * [Output Only] If errors are generated during processing of the operation, this field will be populated.
 */
error?: {

/**
 * [Output Only] The array of errors encountered while processing this operation.
 */
errors?: Array<{

/**
 * [Output Only] The error type identifier for this error.
 */
code?: string,

/**
 * [Output Only] Indicates the field in the request that caused the error. This property is optional.
 */
location?: string,

/**
 * [Output Only] An optional, human-readable error message.
 */
message?: string
}>
},

/**
 * [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
 */
httpErrorMessage?: string,

/**
 * [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not
 * found.
 */
httpErrorStatusCode?: number,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
 */
insertTime?: string,

/**
 * [Output Only] Type of the resource. Always compute#operation for Operation resources.
 */
kind?: string,

/**
 * [Output Only] Name of the resource.
 */
name?: string,

/**
 * [Output Only] The type of operation, such as insert, update, or delete, and so on.
 */
operationType?: string,

/**
 * [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of
 * operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation
 * progresses.
 */
progress?: number,

/**
 * [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
 */
startTime?: string,

/**
 * [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
 */
status?: string,

/**
 * [Output Only] An optional textual description of the current status of the operation.
 */
statusMessage?: string,

/**
 * [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
 */
targetId?: string,

/**
 * [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk
 * that the snapshot was created from.
 */
targetLink?: string,

/**
 * [Output Only] User who requested the operation, for example: user@example.com.
 */
user?: string,

/**
 * [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
 */
warnings?: Array<{

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}>,

/**
 * [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
 */
zone?: string
} 

declare interface compute$OperationAggregatedList {

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] A map of scoped operation lists.
 */
items?: Record<string, compute$OperationsScopedList>,

/**
 * [Output Only] Type of resource. Always compute#operationAggregatedList for aggregated lists of operations.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$OperationList {

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] A list of Operation resources.
 */
items?: compute$Operation[],

/**
 * [Output Only] Type of resource. Always compute#operations for Operations resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$OperationsScopedList {

/**
 * [Output Only] List of operations contained in this scope.
 */
operations?: compute$Operation[],

/**
 * [Output Only] Informational warning which replaces the list of operations when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$PathMatcher {

/**
 * The full or partial URL to the BackendService resource. This will be used if none of the pathRules defined by this PathMatcher is matched by the URL's
 * path portion. For example, the following are all valid URLs to a BackendService resource:
 * - https://www.googleapis.com/compute/v1/projects/project/global/backendServices/backendService
 * - compute/v1/projects/project/global/backendServices/backendService
 * - global/backendServices/backendService
 */
defaultService?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * The name to which this PathMatcher is referred by the HostRule.
 */
name?: string,

/**
 * The list of path rules.
 */
pathRules?: compute$PathRule[]
} 

declare interface compute$PathRule {

/**
 * The list of path patterns to match. Each must start with / and the only place a &#42; is allowed is at the end following a /. The string fed to the path
 * matcher does not include any text after the first ? or #, and those chars are not allowed here.
 */
paths?: string[],

/**
 * The URL of the BackendService resource if this rule is matched.
 */
service?: string
} 

declare interface compute$Project {

/**
 * Metadata key/value pairs available to all instances contained in this project. See Custom metadata for more information.
 */
commonInstanceMetadata?: compute$Metadata,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] Default service account used by VMs running in this project.
 */
defaultServiceAccount?: string,

/**
 * An optional textual description of the resource.
 */
description?: string,

/**
 * Restricted features enabled for use on this project.
 */
enabledFeatures?: string[],

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server. This is not the project ID, and is just a unique ID
 * used by Compute Engine to identify resources.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#project for projects.
 */
kind?: string,

/**
 * The project ID. For example: my-example-project. Use the project ID to make requests to Compute Engine.
 */
name?: string,

/**
 * [Output Only] Quotas assigned to this project.
 */
quotas?: compute$Quota[],

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * The naming prefix for daily usage reports and the Google Cloud Storage bucket where they are stored.
 */
usageExportLocation?: compute$UsageExportLocation,

/**
 * [Output Only] The role this project has in a shared VPC configuration. Currently only HOST projects are differentiated.
 */
xpnProjectStatus?: string
} 

declare interface compute$ProjectsDisableXpnResourceRequest {

/**
 * Service resource (a.k.a service project) ID.
 */
xpnResource?: compute$XpnResourceId
} 

declare interface compute$ProjectsEnableXpnResourceRequest {

/**
 * Service resource (a.k.a service project) ID.
 */
xpnResource?: compute$XpnResourceId
} 

declare interface compute$ProjectsGetXpnResources {

/**
 * [Output Only] Type of resource. Always compute#projectsGetXpnResources for lists of service resources (a.k.a service projects)
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * Service resources (a.k.a service projects) attached to this project as their shared VPC host.
 */
resources?: compute$XpnResourceId[]
} 

declare interface compute$ProjectsListXpnHostsRequest {

/**
 * Optional organization ID managed by Cloud Resource Manager, for which to list shared VPC host projects. If not specified, the organization will be
 * inferred from the project.
 */
organization?: string
} 

declare interface compute$Quota {

/**
 * [Output Only] Quota limit for this metric.
 */
limit?: number,

/**
 * [Output Only] Name of the quota metric.
 */
metric?: string,

/**
 * [Output Only] Current usage of this metric.
 */
usage?: number
} 

declare interface compute$Region {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] The deprecation status associated with this region.
 */
deprecated?: compute$DeprecationStatus,

/**
 * [Output Only] Textual description of the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#region for regions.
 */
kind?: string,

/**
 * [Output Only] Name of the resource.
 */
name?: string,

/**
 * [Output Only] Quotas assigned to this region.
 */
quotas?: compute$Quota[],

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] Status of the region, either UP or DOWN.
 */
status?: string,

/**
 * [Output Only] A list of zones available in this region, in the form of resource URLs.
 */
client$zones?: string[]
} 

declare interface compute$RegionAutoscalerList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Autoscaler resources.
 */
items?: compute$Autoscaler[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$RegionInstanceGroupList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceGroup resources.
 */
items?: compute$InstanceGroup[],

/**
 * The resource type.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$RegionInstanceGroupManagerList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceGroupManager resources.
 */
items?: compute$InstanceGroupManager[],

/**
 * [Output Only] The resource type, which is always compute#instanceGroupManagerList for a list of managed instance groups that exist in th regional
 * scope.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$RegionInstanceGroupManagersAbandonInstancesRequest {

/**
 * The URLs of one or more instances to abandon. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
 */
client$instances?: string[]
} 

declare interface compute$RegionInstanceGroupManagersDeleteInstancesRequest {

/**
 * The URLs of one or more instances to delete. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
 */
client$instances?: string[]
} 

declare interface compute$RegionInstanceGroupManagersListInstancesResponse {

/**
 * List of managed instances.
 */
managedInstances?: compute$ManagedInstance[]
} 

declare interface compute$RegionInstanceGroupManagersRecreateRequest {

/**
 * The URLs of one or more instances to recreate. This can be a full URL or a partial URL, such as zones/[ZONE]/instances/[INSTANCE_NAME].
 */
client$instances?: string[]
} 

declare interface compute$RegionInstanceGroupManagersSetTargetPoolsRequest {

/**
 * Fingerprint of the target pools information, which is a hash of the contents. This field is used for optimistic locking when you update the target pool
 * entries. This field is optional.
 */
fingerprint?: string,

/**
 * The URL of all TargetPool resources to which instances in the instanceGroup field are added. The target pools automatically apply to all of the
 * instances in the managed instance group.
 */
client$targetPools?: string[]
} 

declare interface compute$RegionInstanceGroupManagersSetTemplateRequest {

/**
 * URL of the InstanceTemplate resource from which all new instances will be created.
 */
instanceTemplate?: string
} 

declare interface compute$RegionInstanceGroupsListInstances {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of InstanceWithNamedPorts resources.
 */
items?: compute$InstanceWithNamedPorts[],

/**
 * The resource type.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$RegionInstanceGroupsListInstancesRequest {

/**
 * Instances in which state should be returned. Valid options are: 'ALL', 'RUNNING'. By default, it lists all instances.
 */
instanceState?: string,

/**
 * Name of port user is interested in. It is optional. If it is set, only information about this ports will be returned. If it is not set, all the named
 * ports will be returned. Always lists all instances.
 */
portName?: string
} 

declare interface compute$RegionInstanceGroupsSetNamedPortsRequest {

/**
 * The fingerprint of the named ports information for this instance group. Use this optional property to prevent conflicts when multiple users change the
 * named ports settings concurrently. Obtain the fingerprint with the instanceGroups.get method. Then, include the fingerprint in your request to ensure
 * that you do not overwrite changes that were applied from another concurrent request.
 */
fingerprint?: string,

/**
 * The list of named ports to set for this instance group.
 */
namedPorts?: compute$NamedPort[]
} 

declare interface compute$RegionList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Region resources.
 */
items?: compute$Region[],

/**
 * [Output Only] Type of resource. Always compute#regionList for lists of regions.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ResourceCommitment {

/**
 * The amount of the resource purchased (in a type-dependent unit, such as bytes). For vCPUs, this can just be an integer. For memory, this must be
 * provided in MB. Memory must be a multiple of 256 MB, with up to 6.5GB of memory per every vCPU.
 */
amount?: string,

/**
 * Type of resource for which this commitment applies. Possible values are VCPU and MEMORY
 */
type?: string
} 

declare interface compute$ResourceGroupReference {

/**
 * A URI referencing one of the instance groups listed in the backend service.
 */
group?: string
} 

declare interface compute$Route {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * The destination range of outgoing packets that this route applies to. Only IPv4 is supported.
 */
destRange?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of this resource. Always compute#routes for Route resources.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * Fully-qualified URL of the network that this route applies to.
 */
network?: string,

/**
 * The URL to a gateway that should handle matching packets. You can only specify the internet gateway using a full or partial valid URL:
 * projects/<project-id>/global/gateways/default-internet-gateway
 */
nextHopGateway?: string,

/**
 * The URL to an instance that should handle matching packets. You can specify this as a full or partial URL. For example:
 * https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/
 */
nextHopInstance?: string,

/**
 * The network IP address of an instance that should handle matching packets. Only IPv4 is supported.
 */
nextHopIp?: string,

/**
 * The URL of the local network if it should handle matching packets.
 */
nextHopNetwork?: string,

/**
 * [Output Only] The network peering name that should handle matching packets, which should conform to RFC1035.
 */
nextHopPeering?: string,

/**
 * The URL to a VpnTunnel that should handle matching packets.
 */
nextHopVpnTunnel?: string,

/**
 * The priority of this route. Priority is used to break ties in cases where there is more than one matching route of equal prefix length. In the case of
 * two routes with equal prefix length, the one with the lowest-numbered priority value wins. Default value is 1000. Valid range is 0 through 65535.
 */
priority?: number,

/**
 * [Output Only] Server-defined fully-qualified URL for this resource.
 */
selfLink?: string,

/**
 * A list of instance tags to which this route applies.
 */
tags?: string[],

/**
 * [Output Only] If potential misconfigurations are detected for this route, this field will be populated with warning messages.
 */
warnings?: Array<{

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}>
} 

declare interface compute$RouteList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Route resources.
 */
items?: compute$Route[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$Router {

/**
 * BGP information specific to this router.
 */
bgp?: compute$RouterBgp,

/**
 * BGP information that needs to be configured into the routing stack to establish the BGP peering. It must specify peer ASN and either interface name,
 * IP, or peer IP. Please refer to RFC4273.
 */
bgpPeers?: compute$RouterBgpPeer[],

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * Router interfaces. Each interface requires either one linked resource (e.g. linkedVpnTunnel), or IP address and IP address range (e.g. ipRange), or
 * both.
 */
interfaces?: compute$RouterInterface[],

/**
 * [Output Only] Type of resource. Always compute#router for routers.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * URI of the network to which this router belongs.
 */
network?: string,

/**
 * [Output Only] URI of the region where the router resides.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string
} 

declare interface compute$RouterAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Router resources.
 */
items?: Record<string, compute$RoutersScopedList>,

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$RouterBgp {

/**
 * Local BGP Autonomous System Number (ASN). Must be an RFC6996 private ASN, either 16-bit or 32-bit. The value will be fixed for this router resource.
 * All VPN tunnels that link to this router will have the same local ASN.
 */
asn?: number
} 

declare interface compute$RouterBgpPeer {

/**
 * The priority of routes advertised to this BGP peer. In the case where there is more than one matching route of maximum length, the routes with lowest
 * priority value win.
 */
advertisedRoutePriority?: number,

/**
 * Name of the interface the BGP peer is associated with.
 */
interfaceName?: string,

/**
 * IP address of the interface inside Google Cloud Platform. Only IPv4 is supported.
 */
ipAddress?: string,

/**
 * Name of this BGP peer. The name must be 1-63 characters long and comply with RFC1035.
 */
name?: string,

/**
 * Peer BGP Autonomous System Number (ASN). For VPN use case, this value can be different for every tunnel.
 */
peerAsn?: number,

/**
 * IP address of the BGP interface outside Google cloud. Only IPv4 is supported.
 */
peerIpAddress?: string
} 

declare interface compute$RouterInterface {

/**
 * IP address and range of the interface. The IP range must be in the RFC3927 link-local IP space. The value must be a CIDR-formatted string, for example:
 * 169.254.0.1/30. NOTE: Do not truncate the address as it represents the IP address of the interface.
 */
ipRange?: string,

/**
 * URI of the linked VPN tunnel. It must be in the same region as the router. Each interface can have at most one linked resource and it could either be a
 * VPN Tunnel or an interconnect attachment.
 */
linkedVpnTunnel?: string,

/**
 * Name of this interface entry. The name must be 1-63 characters long and comply with RFC1035.
 */
name?: string
} 

declare interface compute$RouterList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Router resources.
 */
items?: compute$Router[],

/**
 * [Output Only] Type of resource. Always compute#router for routers.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$RouterStatus {

/**
 * Best routes for this router's network.
 */
bestRoutes?: compute$Route[],

/**
 * Best routes learned by this router.
 */
bestRoutesForRouter?: compute$Route[],
bgpPeerStatus?: compute$RouterStatusBgpPeerStatus[],

/**
 * URI of the network to which this router belongs.
 */
network?: string
} 

declare interface compute$RouterStatusBgpPeerStatus {

/**
 * Routes that were advertised to the remote BGP peer
 */
advertisedRoutes?: compute$Route[],

/**
 * IP address of the local BGP interface.
 */
ipAddress?: string,

/**
 * URL of the VPN tunnel that this BGP peer controls.
 */
linkedVpnTunnel?: string,

/**
 * Name of this BGP peer. Unique within the Routers resource.
 */
name?: string,

/**
 * Number of routes learned from the remote BGP Peer.
 */
numLearnedRoutes?: number,

/**
 * IP address of the remote BGP interface.
 */
peerIpAddress?: string,

/**
 * BGP state as specified in RFC1771.
 */
state?: string,

/**
 * Status of the BGP peer: {UP, DOWN}
 */
status?: string,

/**
 * Time this session has been up. Format: 14 years, 51 weeks, 6 days, 23 hours, 59 minutes, 59 seconds
 */
uptime?: string,

/**
 * Time this session has been up, in seconds. Format: 145
 */
uptimeSeconds?: string
} 

declare interface compute$RouterStatusResponse {

/**
 * Type of resource.
 */
kind?: string,
result?: compute$RouterStatus
} 

declare interface compute$RoutersPreviewResponse {

/**
 * Preview of given router.
 */
resource?: compute$Router
} 

declare interface compute$RoutersScopedList {

/**
 * List of routers contained in this scope.
 */
client$routers?: compute$Router[],

/**
 * Informational warning which replaces the list of routers when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$SSLHealthCheck {

/**
 * The TCP port number for the health check request. The default value is 443. Valid values are 1 through 65535.
 */
port?: number,

/**
 * Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
 */
portName?: string,

/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
proxyHeader?: string,

/**
 * The application data to send once the SSL connection has been established (default value is empty). If both request and response are empty, the
 * connection establishment alone will indicate health. The request data can only be ASCII.
 */
request?: string,

/**
 * The bytes to match against the beginning of the response data. If left empty (the default value), any response will indicate health. The response data
 * can only be ASCII.
 */
response?: string
} 

declare interface compute$Scheduling {

/**
 * Specifies whether the instance should be automatically restarted if it is terminated by Compute Engine (not terminated by a user). You can only set the
 * automatic restart option for standard instances. Preemptible instances cannot be automatically restarted.
 * 
 * By default, this is set to true so an instance is automatically restarted if it is terminated by Compute Engine.
 */
automaticRestart?: boolean,

/**
 * Defines the maintenance behavior for this instance. For standard instances, the default behavior is MIGRATE. For preemptible instances, the default and
 * only possible behavior is TERMINATE. For more information, see Setting Instance Scheduling Options.
 */
onHostMaintenance?: string,

/**
 * Defines whether the instance is preemptible. This can only be set during instance creation, it cannot be set or changed after the instance has been
 * created.
 */
preemptible?: boolean
} 

declare interface compute$SerialPortOutput {

/**
 * [Output Only] The contents of the console output.
 */
contents?: string,

/**
 * [Output Only] Type of the resource. Always compute#serialPortOutput for serial port output.
 */
kind?: string,

/**
 * [Output Only] The position of the next byte of content from the serial console output. Use this value in the next request as the start parameter.
 */
next?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * The starting byte position of the output that was returned. This should match the start parameter sent with the request. If the serial console output
 * exceeds the size of the buffer, older output will be overwritten by newer content and the start values will be mismatched.
 */
start?: string
} 

declare interface compute$ServiceAccount {

/**
 * Email address of the service account.
 */
email?: string,

/**
 * The list of scopes to be made available for this service account.
 */
scopes?: string[]
} 

declare interface compute$Snapshot {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] Size of the snapshot, specified in GB.
 */
diskSizeGb?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#snapshot for Snapshot resources.
 */
kind?: string,

/**
 * A fingerprint for the labels being applied to this snapshot, which is essentially a hash of the labels set used for optimistic locking. The fingerprint
 * is initially generated by Compute Engine and changes after every request to modify or update labels. You must always provide an up-to-date fingerprint
 * hash in order to update or change labels.
 * 
 * To see the latest fingerprint, make a get() request to retrieve a snapshot.
 */
labelFingerprint?: string,

/**
 * Labels to apply to this snapshot. These can be later modified by the setLabels method. Label values may be empty.
 */
labels?: Record<string, string>,

/**
 * [Output Only] A list of public visible licenses that apply to this snapshot. This can be because the original image had licenses attached (such as a
 * Windows image).
 */
client$licenses?: string[],

/**
 * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * Encrypts the snapshot using a customer-supplied encryption key.
 * 
 * After you encrypt a snapshot using a customer-supplied key, you must provide the same key if you use the image later For example, you must provide the
 * encryption key when you create a disk from the encrypted snapshot in a future request.
 * 
 * Customer-supplied encryption keys do not protect access to metadata of the disk.
 * 
 * If you do not provide an encryption key when creating the snapshot, then the snapshot will be encrypted using an automatically generated key and you do
 * not need to provide a key to use the snapshot later.
 */
snapshotEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] The source disk used to create this snapshot.
 */
sourceDisk?: string,

/**
 * The customer-supplied encryption key of the source disk. Required if the source disk is protected by a customer-supplied encryption key.
 */
sourceDiskEncryptionKey?: compute$CustomerEncryptionKey,

/**
 * [Output Only] The ID value of the disk used to create this snapshot. This value may be used to determine whether the snapshot was taken from the
 * current or a previous instance of a given disk name.
 */
sourceDiskId?: string,

/**
 * [Output Only] The status of the snapshot. This can be CREATING, DELETING, FAILED, READY, or UPLOADING.
 */
status?: string,

/**
 * [Output Only] A size of the storage used by the snapshot. As snapshots share storage, this number is expected to change with snapshot
 * creation/deletion.
 */
storageBytes?: string,

/**
 * [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status
 * can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
 */
storageBytesStatus?: string
} 

declare interface compute$SnapshotList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Snapshot resources.
 */
items?: compute$Snapshot[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$SslCertificate {

/**
 * A local certificate file. The certificate must be in PEM format. The certificate chain must be no greater than 5 certs long. The chain must include at
 * least one intermediate cert.
 */
certificate?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#sslCertificate for SSL certificates.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * A write-only private key in PEM format. Only insert requests will include this field.
 */
privateKey?: string,

/**
 * [Output only] Server-defined URL for the resource.
 */
selfLink?: string
} 

declare interface compute$SslCertificateList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of SslCertificate resources.
 */
items?: compute$SslCertificate[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$Subnetwork {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource. This field can be set only at resource creation time.
 */
description?: string,

/**
 * [Output Only] The gateway address for default routes to reach destination addresses outside this subnetwork. This field can be set only at resource
 * creation time.
 */
gatewayAddress?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * The range of internal addresses that are owned by this subnetwork. Provide this property when you create the subnetwork. For example, 10.0.0.0/8 or
 * 192.168.0.0/16. Ranges must be unique and non-overlapping within a network. Only IPv4 is supported. This field can be set only at resource creation
 * time.
 */
ipCidrRange?: string,

/**
 * [Output Only] Type of the resource. Always compute#subnetwork for Subnetwork resources.
 */
kind?: string,

/**
 * The name of the resource, provided by the client when initially creating the resource. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The URL of the network to which this subnetwork belongs, provided by the client when initially creating the subnetwork. Only networks that are in the
 * distributed mode can have subnetworks. This field can be set only at resource creation time.
 */
network?: string,

/**
 * Whether the VMs in this subnet can access Google services without assigned external IP addresses. This field can be both set at resource creation time
 * and updated using setPrivateIpGoogleAccess.
 */
privateIpGoogleAccess?: boolean,

/**
 * URL of the region where the Subnetwork resides. This field can be set only at resource creation time.
 */
region?: string,

/**
 * An array of configurations for secondary IP ranges for VM instances contained in this subnetwork. The primary IP of such VM must belong to the primary
 * ipCidrRange of the subnetwork. The alias IPs may belong to either primary or secondary ranges.
 */
secondaryIpRanges?: compute$SubnetworkSecondaryRange[],

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string
} 

declare interface compute$SubnetworkAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of SubnetworksScopedList resources.
 */
items?: Record<string, compute$SubnetworksScopedList>,

/**
 * [Output Only] Type of resource. Always compute#subnetworkAggregatedList for aggregated lists of subnetworks.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$SubnetworkList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Subnetwork resources.
 */
items?: compute$Subnetwork[],

/**
 * [Output Only] Type of resource. Always compute#subnetworkList for lists of subnetworks.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$SubnetworkSecondaryRange {

/**
 * The range of IP addresses belonging to this subnetwork secondary range. Provide this property when you create the subnetwork. Ranges must be unique and
 * non-overlapping with all primary and secondary IP ranges within a network. Only IPv4 is supported.
 */
ipCidrRange?: string,

/**
 * The name associated with this subnetwork secondary range, used when adding an alias IP range to a VM instance. The name must be 1-63 characters long,
 * and comply with RFC1035. The name must be unique within the subnetwork.
 */
rangeName?: string
} 

declare interface compute$SubnetworksExpandIpCidrRangeRequest {

/**
 * The IP (in CIDR format or netmask) of internal addresses that are legal on this Subnetwork. This range should be disjoint from other subnetworks within
 * this network. This range can only be larger than (i.e. a superset of) the range previously defined before the update.
 */
ipCidrRange?: string
} 

declare interface compute$SubnetworksScopedList {

/**
 * List of subnetworks contained in this scope.
 */
client$subnetworks?: compute$Subnetwork[],

/**
 * An informational warning that appears when the list of addresses is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$SubnetworksSetPrivateIpGoogleAccessRequest {
privateIpGoogleAccess?: boolean
} 

declare interface compute$TCPHealthCheck {

/**
 * The TCP port number for the health check request. The default value is 80. Valid values are 1 through 65535.
 */
port?: number,

/**
 * Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.
 */
portName?: string,

/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
proxyHeader?: string,

/**
 * The application data to send once the TCP connection has been established (default value is empty). If both request and response are empty, the
 * connection establishment alone will indicate health. The request data can only be ASCII.
 */
request?: string,

/**
 * The bytes to match against the beginning of the response data. If left empty (the default value), any response will indicate health. The response data
 * can only be ASCII.
 */
response?: string
} 

declare interface compute$Tags {

/**
 * Specifies a fingerprint for this request, which is essentially a hash of the metadata's contents and used for optimistic locking. The fingerprint is
 * initially generated by Compute Engine and changes after every request to modify or update metadata. You must always provide an up-to-date fingerprint
 * hash in order to update or change metadata.
 * 
 * To see the latest fingerprint, make get() request to the instance.
 */
fingerprint?: string,

/**
 * An array of tags. Each tag must be 1-63 characters long, and comply with RFC1035.
 */
items?: string[]
} 

declare interface compute$TargetHttpProxy {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of resource. Always compute#targetHttpProxy for target HTTP proxies.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * URL to the UrlMap resource that defines the mapping from URL to the BackendService.
 */
urlMap?: string
} 

declare interface compute$TargetHttpProxyList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetHttpProxy resources.
 */
items?: compute$TargetHttpProxy[],

/**
 * Type of resource. Always compute#targetHttpProxyList for lists of target HTTP proxies.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetHttpsProxiesSetSslCertificatesRequest {

/**
 * New set of SslCertificate resources to associate with this TargetHttpsProxy resource. Currently exactly one SslCertificate resource must be specified.
 */
client$sslCertificates?: string[]
} 

declare interface compute$TargetHttpsProxy {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of resource. Always compute#targetHttpsProxy for target HTTPS proxies.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer. Currently, exactly one SSL certificate
 * must be specified.
 */
client$sslCertificates?: string[],

/**
 * A fully-qualified or valid partial URL to the UrlMap resource that defines the mapping from URL to the BackendService. For example, the following are
 * all valid URLs for specifying a URL map:
 * - https://www.googleapis.compute/v1/projects/project/global/urlMaps/url-map
 * - projects/project/global/urlMaps/url-map
 * - global/urlMaps/url-map
 */
urlMap?: string
} 

declare interface compute$TargetHttpsProxyList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetHttpsProxy resources.
 */
items?: compute$TargetHttpsProxy[],

/**
 * Type of resource. Always compute#targetHttpsProxyList for lists of target HTTPS proxies.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetInstance {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * A URL to the virtual machine instance that handles traffic for this target instance. When creating a target instance, you can provide the
 * fully-qualified URL or a valid partial URL to the desired virtual machine. For example, the following are all valid URLs:
 * - https://www.googleapis.com/compute/v1/projects/project/zones/zone/instances/instance
 * - projects/project/zones/zone/instances/instance
 * - zones/zone/instances/instance
 */
instance?: string,

/**
 * [Output Only] The type of the resource. Always compute#targetInstance for target instances.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * NAT option controlling how IPs are NAT'ed to the instance. Currently only NO_NAT (default value) is supported.
 */
natPolicy?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] URL of the zone where the target instance resides.
 */
zone?: string
} 

declare interface compute$TargetInstanceAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetInstance resources.
 */
items?: Record<string, compute$TargetInstancesScopedList>,

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetInstanceList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetInstance resources.
 */
items?: compute$TargetInstance[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetInstancesScopedList {

/**
 * List of target instances contained in this scope.
 */
client$targetInstances?: compute$TargetInstance[],

/**
 * Informational warning which replaces the list of addresses when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetPool {

/**
 * This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool, and its failoverRatio field is properly
 * set to a value between [0, 1].
 * 
 * backupPool and failoverRatio together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in the primary
 * pool is at or below failoverRatio, traffic arriving at the load-balanced IP will be directed to the backup pool.
 * 
 * In case where failoverRatio and backupPool are not set, or all the instances in the backup pool are unhealthy, the traffic will be directed back to the
 * primary pool in the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is
 * healthy.
 */
backupPool?: string,

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * This field is applicable only when the containing target pool is serving a forwarding rule as the primary pool (i.e., not as a backup pool to some
 * other target pool). The value of the field must be in [0, 1].
 * 
 * If set, backupPool must also be set. They together define the fallback behavior of the primary target pool: if the ratio of the healthy instances in
 * the primary pool is at or below this number, traffic arriving at the load-balanced IP will be directed to the backup pool.
 * 
 * In case where failoverRatio is not set or all the instances in the backup pool are unhealthy, the traffic will be directed back to the primary pool in
 * the "force" mode, where traffic will be spread to the healthy instances with the best effort, or to all instances when no instance is healthy.
 */
failoverRatio?: number,

/**
 * The URL of the HttpHealthCheck resource. A member instance in this pool is considered healthy if and only if the health checks pass. An empty list
 * means all member instances will be considered healthy at all times. Only HttpHealthChecks are supported. Only one health check may be specified.
 */
client$healthChecks?: string[],

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * A list of resource URLs to the virtual machine instances serving this pool. They must live in zones contained in the same region as this pool.
 */
client$instances?: string[],

/**
 * [Output Only] Type of the resource. Always compute#targetPool for target pools.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * [Output Only] URL of the region where the target pool resides.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * Sesssion affinity option, must be one of the following values:
 * NONE: Connections from the same client IP may go to any instance in the pool.
 * CLIENT_IP: Connections from the same client IP will go to the same instance in the pool while that instance remains healthy.
 * CLIENT_IP_PROTO: Connections from the same client IP with the same IP protocol will go to the same instance in the pool while that instance remains
 * healthy.
 */
sessionAffinity?: string
} 

declare interface compute$TargetPoolAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetPool resources.
 */
items?: Record<string, compute$TargetPoolsScopedList>,

/**
 * [Output Only] Type of resource. Always compute#targetPoolAggregatedList for aggregated lists of target pools.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetPoolInstanceHealth {
healthStatus?: compute$HealthStatus[],

/**
 * [Output Only] Type of resource. Always compute#targetPoolInstanceHealth when checking the health of an instance.
 */
kind?: string
} 

declare interface compute$TargetPoolList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetPool resources.
 */
items?: compute$TargetPool[],

/**
 * [Output Only] Type of resource. Always compute#targetPoolList for lists of target pools.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetPoolsAddHealthCheckRequest {

/**
 * The HttpHealthCheck to add to the target pool.
 */
client$healthChecks?: compute$HealthCheckReference[]
} 

declare interface compute$TargetPoolsAddInstanceRequest {

/**
 * A full or partial URL to an instance to add to this target pool. This can be a full or partial URL. For example, the following are valid URLs:
 * - https://www.googleapis.com/compute/v1/projects/project-id/zones/zone/instances/instance-name
 * - projects/project-id/zones/zone/instances/instance-name
 * - zones/zone/instances/instance-name
 */
client$instances?: compute$InstanceReference[]
} 

declare interface compute$TargetPoolsRemoveHealthCheckRequest {

/**
 * Health check URL to be removed. This can be a full or valid partial URL. For example, the following are valid URLs:
 * - https://www.googleapis.com/compute/beta/projects/project/global/httpHealthChecks/health-check
 * - projects/project/global/httpHealthChecks/health-check
 * - global/httpHealthChecks/health-check
 */
client$healthChecks?: compute$HealthCheckReference[]
} 

declare interface compute$TargetPoolsRemoveInstanceRequest {

/**
 * URLs of the instances to be removed from target pool.
 */
client$instances?: compute$InstanceReference[]
} 

declare interface compute$TargetPoolsScopedList {

/**
 * List of target pools contained in this scope.
 */
client$targetPools?: compute$TargetPool[],

/**
 * Informational warning which replaces the list of addresses when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetReference {
target?: string
} 

declare interface compute$TargetSslProxiesSetBackendServiceRequest {

/**
 * The URL of the new BackendService resource for the targetSslProxy.
 */
service?: string
} 

declare interface compute$TargetSslProxiesSetProxyHeaderRequest {

/**
 * The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.
 */
proxyHeader?: string
} 

declare interface compute$TargetSslProxiesSetSslCertificatesRequest {

/**
 * New set of URLs to SslCertificate resources to associate with this TargetSslProxy. Currently exactly one ssl certificate must be specified.
 */
client$sslCertificates?: string[]
} 

declare interface compute$TargetSslProxy {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#targetSslProxy for target SSL proxies.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
proxyHeader?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * URL to the BackendService resource.
 */
service?: string,

/**
 * URLs to SslCertificate resources that are used to authenticate connections to Backends. Currently exactly one SSL certificate must be specified.
 */
client$sslCertificates?: string[]
} 

declare interface compute$TargetSslProxyList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetSslProxy resources.
 */
items?: compute$TargetSslProxy[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetTcpProxiesSetBackendServiceRequest {

/**
 * The URL of the new BackendService resource for the targetTcpProxy.
 */
service?: string
} 

declare interface compute$TargetTcpProxiesSetProxyHeaderRequest {

/**
 * The new type of proxy header to append before sending data to the backend. NONE or PROXY_V1 are allowed.
 */
proxyHeader?: string
} 

declare interface compute$TargetTcpProxy {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#targetTcpProxy for target TCP proxies.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * Specifies the type of proxy header to append before sending data to the backend, either NONE or PROXY_V1. The default is NONE.
 */
proxyHeader?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * URL to the BackendService resource.
 */
service?: string
} 

declare interface compute$TargetTcpProxyList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetTcpProxy resources.
 */
items?: compute$TargetTcpProxy[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetVpnGateway {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] A list of URLs to the ForwardingRule resources. ForwardingRules are created using compute.forwardingRules.insert and associated to a VPN
 * gateway.
 */
client$forwardingRules?: string[],

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * URL of the network to which this VPN gateway is attached. Provided by the client when the VPN gateway is created.
 */
network?: string,

/**
 * [Output Only] URL of the region where the target VPN gateway resides.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] The status of the VPN gateway.
 */
status?: string,

/**
 * [Output Only] A list of URLs to VpnTunnel resources. VpnTunnels are created using compute.vpntunnels.insert method and associated to a VPN gateway.
 */
tunnels?: string[]
} 

declare interface compute$TargetVpnGatewayAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetVpnGateway resources.
 */
items?: Record<string, compute$TargetVpnGatewaysScopedList>,

/**
 * [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetVpnGatewayList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of TargetVpnGateway resources.
 */
items?: compute$TargetVpnGateway[],

/**
 * [Output Only] Type of resource. Always compute#targetVpnGateway for target VPN gateways.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TargetVpnGatewaysScopedList {

/**
 * [Output Only] List of target vpn gateways contained in this scope.
 */
client$targetVpnGateways?: compute$TargetVpnGateway[],

/**
 * [Output Only] Informational warning which replaces the list of addresses when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$TestFailure {
actualService?: string,
expectedService?: string,
host?: string,
path?: string
} 

declare interface compute$UrlMap {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * The URL of the BackendService resource if none of the hostRules match.
 */
defaultService?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * Fingerprint of this resource. A hash of the contents stored in this object. This field is used in optimistic locking. This field will be ignored when
 * inserting a UrlMap. An up-to-date fingerprint must be provided in order to update the UrlMap.
 */
fingerprint?: string,

/**
 * The list of HostRules to use against the URL.
 */
hostRules?: compute$HostRule[],

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#urlMaps for url maps.
 */
kind?: string,

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * The list of named PathMatchers to use against the URL.
 */
pathMatchers?: compute$PathMatcher[],

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * The list of expected URL mappings. Request to update this UrlMap will succeed only if all of the test cases pass.
 */
tests?: compute$UrlMapTest[]
} 

declare interface compute$UrlMapList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of UrlMap resources.
 */
items?: compute$UrlMap[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$UrlMapReference {
urlMap?: string
} 

declare interface compute$UrlMapTest {

/**
 * Description of this test case.
 */
description?: string,

/**
 * Host portion of the URL.
 */
host?: string,

/**
 * Path portion of the URL.
 */
path?: string,

/**
 * Expected BackendService resource the given URL should be mapped to.
 */
service?: string
} 

declare interface compute$UrlMapValidationResult {
loadErrors?: string[],

/**
 * Whether the given UrlMap can be successfully loaded. If false, 'loadErrors' indicates the reasons.
 */
loadSucceeded?: boolean,
testFailures?: compute$TestFailure[],

/**
 * If successfully loaded, this field indicates whether the test passed. If false, 'testFailures's indicate the reason of failure.
 */
testPassed?: boolean
} 

declare interface compute$UrlMapsValidateRequest {

/**
 * Content of the UrlMap to be validated.
 */
resource?: compute$UrlMap
} 

declare interface compute$UrlMapsValidateResponse {
result?: compute$UrlMapValidationResult
} 

declare interface compute$UsageExportLocation {

/**
 * The name of an existing bucket in Cloud Storage where the usage report object is stored. The Google Service Account is granted write access to this
 * bucket. This can either be the bucket name by itself, such as example-bucket, or the bucket name with gs:// or https://storage.googleapis.com/ in front
 * of it, such as gs://example-bucket.
 */
bucketName?: string,

/**
 * An optional prefix for the name of the usage report object stored in bucketName. If not supplied, defaults to usage. The report is stored as a CSV file
 * named report_name_prefix_gce_YYYYMMDD.csv where YYYYMMDD is the day of the usage according to Pacific Time. If you supply a prefix, it should conform
 * to Cloud Storage object naming conventions.
 */
reportNamePrefix?: string
} 

declare interface compute$VpnTunnel {

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * An optional description of this resource. Provide this property when you create the resource.
 */
description?: string,

/**
 * [Output Only] Detailed status message for the VPN tunnel.
 */
detailedStatus?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. Acceptable IKE versions are 1 or 2. Default version is 2.
 */
ikeVersion?: number,

/**
 * [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
 */
kind?: string,

/**
 * Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example:
 * 192.168.0.0/16. The ranges should be disjoint. Only IPv4 is supported.
 */
localTrafficSelector?: string[],

/**
 * Name of the resource. Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
 * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
 * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
 */
name?: string,

/**
 * IP address of the peer VPN gateway. Only IPv4 is supported.
 */
peerIp?: string,

/**
 * [Output Only] URL of the region where the VPN tunnel resides.
 */
region?: string,

/**
 * Remote traffic selectors to use when establishing the VPN tunnel with peer VPN gateway. The value should be a CIDR formatted string, for example:
 * 192.168.0.0/16. The ranges should be disjoint. Only IPv4 is supported.
 */
remoteTrafficSelector?: string[],

/**
 * URL of router resource to be used for dynamic routing.
 */
router?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.
 */
sharedSecret?: string,

/**
 * Hash of the shared secret.
 */
sharedSecretHash?: string,

/**
 * [Output Only] The status of the VPN tunnel.
 */
status?: string,

/**
 * URL of the VPN gateway with which this VPN tunnel is associated. Provided by the client when the VPN tunnel is created.
 */
targetVpnGateway?: string
} 

declare interface compute$VpnTunnelAggregatedList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of VpnTunnelsScopedList resources.
 */
items?: Record<string, compute$VpnTunnelsScopedList>,

/**
 * [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$VpnTunnelList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of VpnTunnel resources.
 */
items?: compute$VpnTunnel[],

/**
 * [Output Only] Type of resource. Always compute#vpnTunnel for VPN tunnels.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$VpnTunnelsScopedList {

/**
 * List of vpn tunnels contained in this scope.
 */
client$vpnTunnels?: compute$VpnTunnel[],

/**
 * Informational warning which replaces the list of addresses when the list is empty.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$XpnHostList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * [Output Only] A list of shared VPC host project URLs.
 */
items?: compute$Project[],

/**
 * [Output Only] Type of resource. Always compute#xpnHostList for lists of shared VPC hosts.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$XpnResourceId {

/**
 * The ID of the service resource. In the case of projects, this field matches the project ID (e.g., my-project), not the project number (e.g., 12345678).
 */
id?: string,

/**
 * The type of the service resource.
 */
type?: string
} 

declare interface compute$Zone {

/**
 * [Output Only] Available cpu/platform selections for the zone.
 */
availableCpuPlatforms?: string[],

/**
 * [Output Only] Creation timestamp in RFC3339 text format.
 */
creationTimestamp?: string,

/**
 * [Output Only] The deprecation status associated with this zone.
 */
deprecated?: compute$DeprecationStatus,

/**
 * [Output Only] Textual description of the resource.
 */
description?: string,

/**
 * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
 */
id?: string,

/**
 * [Output Only] Type of the resource. Always compute#zone for zones.
 */
kind?: string,

/**
 * [Output Only] Name of the resource.
 */
name?: string,

/**
 * [Output Only] Full URL reference to the region which hosts the zone.
 */
region?: string,

/**
 * [Output Only] Server-defined URL for the resource.
 */
selfLink?: string,

/**
 * [Output Only] Status of the zone, either UP or DOWN.
 */
status?: string
} 

declare interface compute$ZoneList {

/**
 * [Output Only] Unique identifier for the resource; defined by the server.
 */
id?: string,

/**
 * A list of Zone resources.
 */
items?: compute$Zone[],

/**
 * Type of resource.
 */
kind?: string,

/**
 * [Output Only] This token allows you to get the next page of results for list requests. If the number of results is larger than maxResults, use the
 * nextPageToken as a value for the query parameter pageToken in the next list request. Subsequent list requests will have their own nextPageToken to
 * continue paging through the results.
 */
nextPageToken?: string,

/**
 * [Output Only] Server-defined URL for this resource.
 */
selfLink?: string,

/**
 * [Output Only] Informational warning message.
 */
warning?: {

/**
 * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
 */
code?: string,

/**
 * [Output Only] Metadata about this warning in key: value format. For example:
 * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
 */
data?: Array<{

/**
 * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
 * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
 * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
 * for IP forwarding).
 */
key?: string,

/**
 * [Output Only] A warning data value corresponding to the key.
 */
value?: string
}>,

/**
 * [Output Only] A human-readable description of the warning code.
 */
message?: string
}
} 

declare interface compute$ZoneSetLabelsRequest {

/**
 * The fingerprint of the previous set of labels for this resource, used to detect conflicts. The fingerprint is initially generated by Compute Engine and
 * changes after every request to modify or update labels. You must always provide an up-to-date fingerprint hash in order to update or change labels.
 * Make a get() request to the resource to get the latest fingerprint.
 */
labelFingerprint?: string,

/**
 * The labels to set for this resource.
 */
labels?: Record<string, string>
} 

declare interface compute$AcceleratorTypesResource {

/**
 * Retrieves an aggregated list of accelerator types.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$AcceleratorTypeAggregatedList>,

/**
 * Returns the specified accelerator type. Get a list of available accelerator types by making a list() request.
 */
get(
request: {

/**
 * Name of the accelerator type to return.
 */
acceleratorType: string,

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
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$AcceleratorType>,

/**
 * Retrieves a list of accelerator types available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$AcceleratorTypeList>
} 

declare interface compute$AddressesResource {

/**
 * Retrieves an aggregated list of addresses.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$AddressAggregatedList>,

/**
 * Deletes the specified address resource.
 */
delete(
request: {

/**
 * Name of the address resource to delete.
 */
address: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified address resource.
 */
get(
request: {

/**
 * Name of the address resource to return.
 */
address: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Address>,

/**
 * Creates an address resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of addresses contained within the specified region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$AddressList>
} 

declare interface compute$AutoscalersResource {

/**
 * Retrieves an aggregated list of autoscalers.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$AutoscalerAggregatedList>,

/**
 * Deletes the specified autoscaler.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to delete.
 */
autoscaler: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Returns the specified autoscaler resource. Get a list of available autoscalers by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to return.
 */
autoscaler: string,

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
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$Autoscaler>,

/**
 * Creates an autoscaler in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of autoscalers contained within the specified zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$AutoscalerList>,

/**
 * Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge
 * patch format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to patch.
 */
autoscaler?: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Updates an autoscaler in the specified project using the data included in the request.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to update.
 */
autoscaler?: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>
} 

declare interface compute$BackendBucketsResource {

/**
 * Deletes the specified BackendBucket resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendBucket resource to delete.
 */
backendBucket: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified BackendBucket resource. Get a list of available backend buckets by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendBucket resource to return.
 */
backendBucket: string,

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
 * Project ID for this request.
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
}): Request<compute$BackendBucket>,

/**
 * Creates a BackendBucket resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of BackendBucket resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$BackendBucketList>,

/**
 * Updates the specified BackendBucket resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch
 * format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendBucket resource to patch.
 */
backendBucket: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates the specified BackendBucket resource with the data included in the request.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendBucket resource to update.
 */
backendBucket: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$BackendServicesResource {

/**
 * Retrieves the list of all BackendService resources, regional and global, available to the specified project.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Name of the project scoping this request.
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
}): Request<compute$BackendServiceAggregatedList>,

/**
 * Deletes the specified BackendService resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to delete.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified BackendService resource. Get a list of available backend services by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to return.
 */
backendService: string,

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
 * Project ID for this request.
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
}): Request<compute$BackendService>,

/**
 * Gets the most recent health check results for this BackendService.
 */
getHealth(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to which the queried instance belongs.
 */
backendService: string,

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
}): Request<compute$BackendServiceGroupHealth>,

/**
 * Creates a BackendService resource in the specified project using the data included in the request. There are several restrictions and guidelines to
 * keep in mind when creating a backend service. Read  Restrictions and Guidelines for more information.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of BackendService resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$BackendServiceList>,

/**
 * Patches the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when
 * updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON merge patch
 * format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to patch.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates the specified BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in mind when
 * updating a backend service. Read  Restrictions and Guidelines for more information.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to update.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$DiskTypesResource {

/**
 * Retrieves an aggregated list of disk types.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$DiskTypeAggregatedList>,

/**
 * Returns the specified disk type. Get a list of available disk types by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the disk type to return.
 */
diskType: string,

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
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$DiskType>,

/**
 * Retrieves a list of disk types available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$DiskTypeList>
} 

declare interface compute$DisksResource {

/**
 * Retrieves an aggregated list of persistent disks.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$DiskAggregatedList>,

/**
 * Creates a snapshot of a specified persistent disk.
 */
createSnapshot(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the persistent disk to snapshot.
 */
disk: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,
guestFlush?: boolean,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Deletes the specified persistent disk. Deleting a disk removes its data permanently and is irreversible. However, deleting a disk does not delete any
 * snapshots previously made from the disk. You must separately delete snapshots.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the persistent disk to delete.
 */
disk: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Returns a specified persistent disk. Get a list of available persistent disks by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the persistent disk to return.
 */
disk: string,

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
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Disk>,

/**
 * Creates a persistent disk in the specified project using the data in the request. You can create a disk with a sourceImage, a sourceSnapshot, or create
 * an empty 500 GB data disk by omitting all properties. You can also create a disk that is larger than the default size by specifying the sizeGb
 * property.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Optional. Source image to restore onto a disk.
 */
sourceImage?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of persistent disks contained within the specified zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$DiskList>,

/**
 * Resizes the specified persistent disk.
 */
resize(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The name of the persistent disk.
 */
disk: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets the labels on a disk. To learn more about labels, read the Labeling Resources documentation.
 */
setLabels(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the resource for this request.
 */
resource: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>
} 

declare interface compute$FirewallsResource {

/**
 * Deletes the specified firewall.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the firewall rule to delete.
 */
firewall: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified firewall.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the firewall rule to return.
 */
firewall: string,

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
 * Project ID for this request.
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
}): Request<compute$Firewall>,

/**
 * Creates a firewall rule in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of firewall rules available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$FirewallList>,

/**
 * Updates the specified firewall rule with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format
 * and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the firewall rule to patch.
 */
firewall: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates the specified firewall rule with the data included in the request. Using PUT method, can only update following fields of firewall rule:
 * allowed, description, sourceRanges, sourceTags, targetTags.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the firewall rule to update.
 */
firewall: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$ForwardingRulesResource {

/**
 * Retrieves an aggregated list of forwarding rules.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$ForwardingRuleAggregatedList>,

/**
 * Deletes the specified ForwardingRule resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the ForwardingRule resource to delete.
 */
forwardingRule: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified ForwardingRule resource.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the ForwardingRule resource to return.
 */
forwardingRule: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$ForwardingRule>,

/**
 * Creates a ForwardingRule resource in the specified project and region using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of ForwardingRule resources available to the specified project and region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$ForwardingRuleList>,

/**
 * Changes target URL for forwarding rule. The new target should be of the same type as the old target.
 */
setTarget(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the ForwardingRule resource in which target is to be set.
 */
forwardingRule: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$GlobalAddressesResource {

/**
 * Deletes the specified address resource.
 */
delete(
request: {

/**
 * Name of the address resource to delete.
 */
address: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified address resource. Get a list of available addresses by making a list() request.
 */
get(
request: {

/**
 * Name of the address resource to return.
 */
address: string,

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
 * Project ID for this request.
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
}): Request<compute$Address>,

/**
 * Creates an address resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of global addresses.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$AddressList>
} 

declare interface compute$GlobalForwardingRulesResource {

/**
 * Deletes the specified GlobalForwardingRule resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the ForwardingRule resource to delete.
 */
forwardingRule: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified GlobalForwardingRule resource. Get a list of available forwarding rules by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the ForwardingRule resource to return.
 */
forwardingRule: string,

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
 * Project ID for this request.
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
}): Request<compute$ForwardingRule>,

/**
 * Creates a GlobalForwardingRule resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of GlobalForwardingRule resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$ForwardingRuleList>,

/**
 * Changes target URL for the GlobalForwardingRule resource. The new target should be of the same type as the old target.
 */
setTarget(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the ForwardingRule resource in which target is to be set.
 */
forwardingRule: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$GlobalOperationsResource {

/**
 * Retrieves an aggregated list of all operations.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$OperationAggregatedList>,

/**
 * Deletes the specified Operations resource.
 */
delete(
request: {

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
 * Name of the Operations resource to delete.
 */
operation: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<void>,

/**
 * Retrieves the specified Operations resource. Get a list of operations by making a list() request.
 */
get(
request: {

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
 * Name of the Operations resource to return.
 */
operation: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$Operation>,

/**
 * Retrieves a list of Operation resources contained within the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$OperationList>
} 

declare interface compute$HealthChecksResource {

/**
 * Deletes the specified HealthCheck resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HealthCheck resource to delete.
 */
healthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified HealthCheck resource. Get a list of available health checks by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HealthCheck resource to return.
 */
healthCheck: string,

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
 * Project ID for this request.
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
}): Request<compute$HealthCheck>,

/**
 * Creates a HealthCheck resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of HealthCheck resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$HealthCheckList>,

/**
 * Updates a HealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON
 * merge patch format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HealthCheck resource to patch.
 */
healthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates a HealthCheck resource in the specified project using the data included in the request.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HealthCheck resource to update.
 */
healthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$HttpHealthChecksResource {

/**
 * Deletes the specified HttpHealthCheck resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpHealthCheck resource to delete.
 */
httpHealthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified HttpHealthCheck resource. Get a list of available HTTP health checks by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpHealthCheck resource to return.
 */
httpHealthCheck: string,

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
 * Project ID for this request.
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
}): Request<compute$HttpHealthCheck>,

/**
 * Creates a HttpHealthCheck resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of HttpHealthCheck resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$HttpHealthCheckList>,

/**
 * Updates a HttpHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the
 * JSON merge patch format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpHealthCheck resource to patch.
 */
httpHealthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates a HttpHealthCheck resource in the specified project using the data included in the request.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpHealthCheck resource to update.
 */
httpHealthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$HttpsHealthChecksResource {

/**
 * Deletes the specified HttpsHealthCheck resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpsHealthCheck resource to delete.
 */
httpsHealthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified HttpsHealthCheck resource. Get a list of available HTTPS health checks by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpsHealthCheck resource to return.
 */
httpsHealthCheck: string,

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
 * Project ID for this request.
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
}): Request<compute$HttpsHealthCheck>,

/**
 * Creates a HttpsHealthCheck resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of HttpsHealthCheck resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$HttpsHealthCheckList>,

/**
 * Updates a HttpsHealthCheck resource in the specified project using the data included in the request. This method supports PATCH semantics and uses the
 * JSON merge patch format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpsHealthCheck resource to patch.
 */
httpsHealthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates a HttpsHealthCheck resource in the specified project using the data included in the request.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the HttpsHealthCheck resource to update.
 */
httpsHealthCheck: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$ImagesResource {

/**
 * Deletes the specified image.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the image resource to delete.
 */
image: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Sets the deprecation status of an image.
 * 
 * If an empty request body is given, clears the deprecation status instead.
 */
deprecate(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Image name.
 */
image: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified image. Get a list of available images by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the image resource to return.
 */
image: string,

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
 * Project ID for this request.
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
}): Request<compute$Image>,

/**
 * Returns the latest image that is part of an image family and is not deprecated.
 */
getFromFamily(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the image family to search for.
 */
family: string,

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
 * Project ID for this request.
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
}): Request<compute$Image>,

/**
 * Creates an image in the specified project using the data included in the request.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Force image creation if true.
 */
forceCreate?: boolean,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of private images available to the specified project. Private images are images you create that belong to your project. This method
 * does not get any images that belong to other projects, including publicly-available images, like Debian 8. If you want to get a list of
 * publicly-available images, use this method to make a request to the respective image project, such as debian-cloud or windows-cloud.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$ImageList>,

/**
 * Sets the labels on an image. To learn more about labels, read the Labeling Resources documentation.
 */
setLabels(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the resource for this request.
 */
resource: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$InstanceGroupManagersResource {

/**
 * Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it
 * does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed
 * instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have
 * not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 * 
 * You can specify a maximum of 1000 instances with this method per request.
 */
abandonInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of managed instance groups and groups them by zone.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$InstanceGroupManagerAggregatedList>,

/**
 * Deletes the specified managed instance group and all of the instances in that group. Note that the instance group must not belong to a backend service.
 * Read  Deleting an instance group for more information.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group to delete.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which
 * they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is
 * marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action
 * with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 * 
 * You can specify a maximum of 1000 instances with this method per request.
 */
deleteInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Returns all of the details about the specified managed instance group. Get a list of available managed instance groups by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$InstanceGroupManager>,

/**
 * Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create
 * instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the
 * group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
 * 
 * A managed instance group can have up to 1000 VM instances per group. Please contact Cloud Support if you need an increase in this limit.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where you want to create the managed instance group.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of managed instance groups that are contained within the specified project and zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$InstanceGroupManagerList>,

/**
 * Lists all of the instances in the managed instance group. Each instance in the list has a currentAction, which indicates the action that the managed
 * instance group is performing on the instance. For example, if the group is still creating an instance, the currentAction is CREATING. If a previous
 * action failed, the list displays the errors for that failed action.
 */
listManagedInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,
filter?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,
order_by?: string,
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$InstanceGroupManagersListManagedInstancesResponse>,

/**
 * Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current
 * instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been
 * recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 * 
 * You can specify a maximum of 1000 instances with this method per request.
 */
recreateInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Resizes the managed instance group. If you increase the size, the group creates new instances using the current instance template. If you decrease the
 * size, the group deletes instances. The resize operation is marked DONE when the resize actions are scheduled even if the group has not yet added or
 * deleted any instances. You must separately verify the status of the creating or deleting actions with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 */
resize(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * The number of running instances that the managed instance group should maintain at any given time. The group automatically adds or removes instances to
 * maintain the number of instances specified by this parameter.
 */
size: number,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Specifies the instance template to use when creating new instances in this group. The templates for existing instances in the group do not change
 * unless you recreate them.
 */
setInstanceTemplate(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Modifies the target pools to which all instances in this managed instance group are assigned. The target pools automatically apply to all of the
 * instances in the managed instance group. This operation is marked DONE when you make the request even if the instances have not yet been added to their
 * target pools. The change might take some time to apply to all of the instances in the group depending on the size of the group.
 */
setTargetPools(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the managed instance group is located.
 */
zone: string
}): Request<compute$Operation>
} 

declare interface compute$InstanceGroupsResource {

/**
 * Adds a list of instances to the specified instance group. All of the instances in the instance group must be in the same network/subnetwork. Read
 * Adding instances for more information.
 */
addInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance group where you are adding instances.
 */
instanceGroup: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of instance groups and sorts them by zone.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$InstanceGroupAggregatedList>,

/**
 * Deletes the specified instance group. The instances in the group are not deleted. Note that instance group must not belong to a backend service. Read
 * Deleting an instance group for more information.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance group to delete.
 */
instanceGroup: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Returns the specified instance group. Get a list of available instance groups by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance group.
 */
instanceGroup: string,

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
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$InstanceGroup>,

/**
 * Creates an instance group in the specified project using the parameters that are included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where you want to create the instance group.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of instance groups that are located in the specified project and zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$InstanceGroupList>,

/**
 * Lists the instances in the specified instance group.
 */
listInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * The name of the instance group from which you want to generate a list of included instances.
 */
instanceGroup: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$InstanceGroupsListInstances>,

/**
 * Removes one or more instances from the specified instance group, but does not delete those instances.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration
 * before the VM instance is removed or deleted.
 */
removeInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance group where the specified instances will be removed.
 */
instanceGroup: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets the named ports for the specified instance group.
 */
setNamedPorts(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance group where the named ports are updated.
 */
instanceGroup: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone where the instance group is located.
 */
zone: string
}): Request<compute$Operation>
} 

declare interface compute$InstanceTemplatesResource {

/**
 * Deletes the specified instance template. If you delete an instance template that is being referenced from another instance group, the instance group
 * will not be able to create or recreate virtual machine instances. Deleting an instance template is permanent and cannot be undone.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance template to delete.
 */
instanceTemplate: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified instance template. Get a list of available instance templates by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the instance template.
 */
instanceTemplate: string,

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
 * Project ID for this request.
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
}): Request<compute$InstanceTemplate>,

/**
 * Creates an instance template in the specified project using the data that is included in the request. If you are creating a new template to update an
 * existing instance group, your new instance template must use the same network or, if applicable, the same subnetwork as the original template.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of instance templates that are contained within the specified project and zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$InstanceTemplateList>
} 

declare interface compute$InstancesResource {

/**
 * Adds an access config to an instance's network interface.
 */
addAccessConfig(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The instance name for this request.
 */
instance: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The name of the network interface to add to this instance.
 */
networkInterface: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves aggregated list of instances.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$InstanceAggregatedList>,

/**
 * Attaches an existing Disk resource to an instance. You must first create the disk before you can attach it. It is not possible to create and attach a
 * disk at the same time. For more information, read Adding a persistent disk to your instance.
 */
attachDisk(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The instance name for this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Deletes the specified Instance resource. For more information, see Stopping or Deleting an Instance.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance resource to delete.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Deletes an access config from an instance's network interface.
 */
deleteAccessConfig(
request: {

/**
 * The name of the access config to delete.
 */
accessConfig: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The instance name for this request.
 */
instance: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The name of the network interface.
 */
networkInterface: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Detaches a disk from an instance.
 */
detachDisk(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Disk device name to detach.
 */
deviceName: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Instance name.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Returns the specified Instance resource. Get a list of available instances by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance resource to return.
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
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Instance>,

/**
 * Returns the specified instance's serial port output.
 */
getSerialPortOutput(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Specifies which COM or serial port to retrieve data from.
 */
port?: number,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Returns output starting from a specific byte position. Use this to page through output when the output is too large to return in a single request. For
 * the initial request, leave this field unspecified. For subsequent calls, this field should be set to the next value returned in the previous call.
 */
start?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$SerialPortOutput>,

/**
 * Creates an instance resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of instances contained within the specified zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$InstanceList>,

/**
 * Performs a reset on the instance. For more information, see Resetting an instance.
 */
reset(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets the auto-delete flag for a disk attached to an instance.
 */
setDiskAutoDelete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Whether to auto-delete the disk when the instance is deleted.
 */
autoDelete: boolean,

/**
 * The device name of the disk to modify.
 */
deviceName: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The instance name.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets labels on an instance. To learn more about labels, read the Labeling Resources documentation.
 */
setLabels(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Changes the number and/or type of accelerator for a stopped instance to the values specified in the request.
 */
setMachineResources(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Changes the machine type for a stopped instance to the machine type specified in the request.
 */
setMachineType(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets metadata for the specified instance to the data included in the request.
 */
setMetadata(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Changes the minimum CPU platform that this instance should use. This method can only be called on a stopped instance. For more information, read
 * Specifying a Minimum CPU Platform.
 */
setMinCpuPlatform(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets an instance's scheduling options.
 */
setScheduling(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Instance name.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets the service account on the instance. For more information, read Changing the service account and access scopes for an instance.
 */
setServiceAccount(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance resource to start.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Sets tags for the specified instance to the data included in the request.
 */
setTags(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance scoping this request.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
 */
start(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance resource to start.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Starts an instance that was stopped using the using the instances().stop method. For more information, see Restart an instance.
 */
startWithEncryptionKey(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance resource to start.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Stops a running instance, shutting it down cleanly, and allows you to restart the instance at a later time. Stopped instances do not incur per-minute,
 * virtual machine usage charges while they are stopped, but any resources that the virtual machine is using, such as persistent disks and static IP
 * addresses, will continue to be charged until they are deleted. For more information, see Stopping an instance.
 */
stop(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance resource to stop.
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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>
} 

declare interface compute$LicensesResource {

/**
 * Returns the specified License resource.
 */
get(
request: {

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
 * Name of the License resource to return.
 */
license: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$License>
} 

declare interface compute$MachineTypesResource {

/**
 * Retrieves an aggregated list of machine types.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$MachineTypeAggregatedList>,

/**
 * Returns the specified machine type. Get a list of available machine types by making a list() request.
 */
get(
request: {

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
 * Name of the machine type to return.
 */
machineType: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$MachineType>,

/**
 * Retrieves a list of machine types available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * The name of the zone for this request.
 */
zone: string
}): Request<compute$MachineTypeList>
} 

declare interface compute$NetworksResource {

/**
 * Adds a peering to the specified network.
 */
addPeering(
request: {

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
 * Name of the network resource to add peering to.
 */
network: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Deletes the specified network.
 */
delete(
request: {

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
 * Name of the network to delete.
 */
network: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified network. Get a list of available networks by making a list() request.
 */
get(
request: {

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
 * Name of the network to return.
 */
network: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$Network>,

/**
 * Creates a network in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of networks available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$NetworkList>,

/**
 * Patches the specified network with the data included in the request.
 */
patch(
request: {

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
 * Name of the network to update.
 */
network: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Removes a peering from the specified network.
 */
removePeering(
request: {

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
 * Name of the network resource to remove peering from.
 */
network: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Switches the network mode from auto subnet mode to custom subnet mode.
 */
switchToCustomMode(
request: {

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
 * Name of the network to be updated.
 */
network: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$ProjectsResource {

/**
 * Disable this project as a shared VPC host project.
 */
disableXpnHost(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Disable a serivce resource (a.k.a service project) associated with this host project.
 */
disableXpnResource(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Enable this project as a shared VPC host project.
 */
enableXpnHost(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service
 * project.
 */
enableXpnResource(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified Project resource.
 */
get(
request: {

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
 * Project ID for this request.
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
}): Request<compute$Project>,

/**
 * Get the shared VPC host project that this project links to. May be empty if no link exists.
 */
getXpnHost(
request: {

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
 * Project ID for this request.
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
}): Request<compute$Project>,

/**
 * Get service resources (a.k.a service project) associated with this host project.
 */
getXpnResources(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,
order_by?: string,
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$ProjectsGetXpnResources>,

/**
 * List all shared VPC host projects visible to the user in an organization.
 */
listXpnHosts(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,
order_by?: string,
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$XpnHostList>,

/**
 * Moves a persistent disk from one zone to another.
 */
moveDisk(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Moves an instance and its attached persistent disks from one zone to another.
 */
moveInstance(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Sets metadata common to all instances within the specified project using the data included in the request.
 */
setCommonInstanceMetadata(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the
 * usage export feature will be disabled.
 */
setUsageExportBucket(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$RegionAutoscalersResource {

/**
 * Deletes the specified autoscaler.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to delete.
 */
autoscaler: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified autoscaler.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to return.
 */
autoscaler: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Autoscaler>,

/**
 * Creates an autoscaler in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of autoscalers contained within the specified region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RegionAutoscalerList>,

/**
 * Updates an autoscaler in the specified project using the data included in the request. This method supports PATCH semantics and uses the JSON merge
 * patch format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to patch.
 */
autoscaler?: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates an autoscaler in the specified project using the data included in the request.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the autoscaler to update.
 */
autoscaler?: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$RegionBackendServicesResource {

/**
 * Deletes the specified regional BackendService resource.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to delete.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified regional BackendService resource.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to return.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$BackendService>,

/**
 * Gets the most recent health check results for this regional BackendService.
 */
getHealth(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to which the queried instance belongs.
 */
backendService: string,

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
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$BackendServiceGroupHealth>,

/**
 * Creates a regional BackendService resource in the specified project using the data included in the request. There are several restrictions and
 * guidelines to keep in mind when creating a regional backend service. Read  Restrictions and Guidelines for more information.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of regional BackendService resources available to the specified project in the given region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$BackendServiceList>,

/**
 * Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in
 * mind when updating a backend service. Read  Restrictions and Guidelines for more information. This method supports PATCH semantics and uses the JSON
 * merge patch format and processing rules.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to patch.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates the specified regional BackendService resource with the data included in the request. There are several restrictions and guidelines to keep in
 * mind when updating a backend service. Read  Restrictions and Guidelines for more information.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the BackendService resource to update.
 */
backendService: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$RegionCommitmentsResource {

/**
 * Retrieves an aggregated list of commitments.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$CommitmentAggregatedList>,

/**
 * Returns the specified commitment resource. Get a list of available commitments by making a list() request.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the commitment to return.
 */
commitment: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Commitment>,

/**
 * Creates a commitment in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of commitments contained within the specified region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$CommitmentList>
} 

declare interface compute$RegionInstanceGroupManagersResource {

/**
 * Schedules a group action to remove the specified instances from the managed instance group. Abandoning an instance does not delete the instance, but it
 * does remove the instance from any target pools that are applied by the managed instance group. This method reduces the targetSize of the managed
 * instance group by the number of instances that you abandon. This operation is marked as DONE when the action is scheduled even if the instances have
 * not yet been removed from the group. You must separately verify the status of the abandoning action with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 * 
 * You can specify a maximum of 1000 instances with this method per request.
 */
abandonInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Deletes the specified managed instance group and all of the instances in that group.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group to delete.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Schedules a group action to delete the specified instances in the managed instance group. The instances are also removed from any target pools of which
 * they were a member. This method reduces the targetSize of the managed instance group by the number of instances that you delete. This operation is
 * marked as DONE when the action is scheduled even if the instances are still being deleted. You must separately verify the status of the deleting action
 * with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 * 
 * You can specify a maximum of 1000 instances with this method per request.
 */
deleteInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns all of the details about the specified managed instance group.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group to return.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$InstanceGroupManager>,

/**
 * Creates a managed instance group using the information that you specify in the request. After the group is created, it schedules an action to create
 * instances in the group using the specified instance template. This operation is marked as DONE when the group is created even if the instances in the
 * group have not yet been created. You must separately verify the status of the individual instances with the listmanagedinstances method.
 * 
 * A regional managed instance group can contain up to 2000 instances.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of managed instance groups that are contained within the specified region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RegionInstanceGroupManagerList>,

/**
 * Lists the instances in the managed instance group and instances that are scheduled to be created. The list includes any current actions that the group
 * has scheduled for its instances.
 */
listManagedInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,
filter?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,
order_by?: string,
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RegionInstanceGroupManagersListInstancesResponse>,

/**
 * Schedules a group action to recreate the specified instances in the managed instance group. The instances are deleted and recreated using the current
 * instance template for the managed instance group. This operation is marked as DONE when the action is scheduled even if the instances have not yet been
 * recreated. You must separately verify the status of the recreating action with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 * 
 * You can specify a maximum of 1000 instances with this method per request.
 */
recreateInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Changes the intended size for the managed instance group. If you increase the size, the group schedules actions to create new instances using the
 * current instance template. If you decrease the size, the group schedules delete actions on one or more instances. The resize operation is marked DONE
 * when the resize actions are scheduled even if the group has not yet added or deleted any instances. You must separately verify the status of the
 * creating or deleting actions with the listmanagedinstances method.
 * 
 * If the group is part of a backend service that has enabled connection draining, it can take up to 60 seconds after the connection draining duration has
 * elapsed before the VM instance is removed or deleted.
 */
resize(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Number of instances that should exist in this instance group manager.
 */
size: number,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Sets the instance template to use when creating new instances or recreating instances in this group. Existing instances are not affected.
 */
setInstanceTemplate(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Modifies the target pools to which all new instances in this group are assigned. Existing instances in the group are not affected.
 */
setTargetPools(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the managed instance group.
 */
instanceGroupManager: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$RegionInstanceGroupsResource {

/**
 * Returns the specified instance group resource.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Name of the instance group resource to return.
 */
instanceGroup: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$InstanceGroup>,

/**
 * Retrieves the list of instance group resources contained within the specified region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RegionInstanceGroupList>,

/**
 * Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can
 * list all instances or only the instances that are running.
 */
listInstances(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * Name of the regional instance group for which we want to list the instances.
 */
instanceGroup: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RegionInstanceGroupsListInstances>,

/**
 * Sets the named ports for the specified regional instance group.
 */
setNamedPorts(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The name of the regional instance group where the named ports are updated.
 */
instanceGroup: string,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$RegionOperationsResource {

/**
 * Deletes the specified region-specific Operations resource.
 */
delete(
request: {

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
 * Name of the Operations resource to delete.
 */
operation: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Retrieves the specified region-specific Operations resource.
 */
get(
request: {

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
 * Name of the Operations resource to return.
 */
operation: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of Operation resources contained within the specified region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$OperationList>
} 

declare interface compute$RegionsResource {

/**
 * Returns the specified Region resource. Get a list of available regions by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region resource to return.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Region>,

/**
 * Retrieves the list of region resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$RegionList>
} 

declare interface compute$RoutersResource {

/**
 * Retrieves an aggregated list of routers.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$RouterAggregatedList>,

/**
 * Deletes the specified Router resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Router resource to delete.
 */
router: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified Router resource. Get a list of available routers by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * Name of the Router resource to return.
 */
router: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Router>,

/**
 * Retrieves runtime information of the specified router.
 */
getRouterStatus(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * Name of the Router resource to query.
 */
router: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RouterStatusResponse>,

/**
 * Creates a Router resource in the specified project and region using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of Router resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RouterList>,

/**
 * Patches the specified Router resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and
 * processing rules.
 */
patch(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Router resource to patch.
 */
router: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Preview fields auto-generated during router create and update operations. Calling this method does NOT create or update the router.
 */
preview(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * Name of the Router resource to query.
 */
router: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$RoutersPreviewResponse>,

/**
 * Updates the specified Router resource with the data included in the request.
 */
update(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Router resource to update.
 */
router: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$RoutesResource {

/**
 * Deletes the specified Route resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Route resource to delete.
 */
route: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified Route resource. Get a list of available routes by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the Route resource to return.
 */
route: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Route>,

/**
 * Creates a Route resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of Route resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$RouteList>
} 

declare interface compute$SnapshotsResource {

/**
 * Deletes the specified Snapshot resource. Keep in mind that deleting a single snapshot might not necessarily delete all the data on that snapshot. If
 * any data on the snapshot that is marked for deletion is needed for subsequent snapshots, the data will be moved to the next corresponding snapshot.
 * 
 * For more information, see Deleting snaphots.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Snapshot resource to delete.
 */
snapshot: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified Snapshot resource. Get a list of available snapshots by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the Snapshot resource to return.
 */
snapshot: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Snapshot>,

/**
 * Retrieves the list of Snapshot resources contained within the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$SnapshotList>,

/**
 * Sets the labels on a snapshot. To learn more about labels, read the Labeling Resources documentation.
 */
setLabels(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the resource for this request.
 */
resource: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$SslCertificatesResource {

/**
 * Deletes the specified SslCertificate resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the SslCertificate resource to delete.
 */
sslCertificate: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified SslCertificate resource. Get a list of available SSL certificates by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the SslCertificate resource to return.
 */
sslCertificate: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$SslCertificate>,

/**
 * Creates a SslCertificate resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of SslCertificate resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$SslCertificateList>
} 

declare interface compute$SubnetworksResource {

/**
 * Retrieves an aggregated list of subnetworks.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$SubnetworkAggregatedList>,

/**
 * Deletes the specified subnetwork.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Subnetwork resource to delete.
 */
subnetwork: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Expands the IP CIDR range of the subnetwork to a specified value.
 */
expandIpCidrRange(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Subnetwork resource to update.
 */
subnetwork: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified subnetwork. Get a list of available subnetworks list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * Name of the Subnetwork resource to return.
 */
subnetwork: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Subnetwork>,

/**
 * Creates a subnetwork in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of subnetworks available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$SubnetworkList>,

/**
 * Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
 */
setPrivateIpGoogleAccess(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the Subnetwork resource.
 */
subnetwork: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$TargetHttpProxiesResource {

/**
 * Deletes the specified TargetHttpProxy resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetHttpProxy resource to delete.
 */
targetHttpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified TargetHttpProxy resource. Get a list of available target HTTP proxies by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the TargetHttpProxy resource to return.
 */
targetHttpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetHttpProxy>,

/**
 * Creates a TargetHttpProxy resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of TargetHttpProxy resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetHttpProxyList>,

/**
 * Changes the URL map for TargetHttpProxy.
 */
setUrlMap(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetHttpProxy to set a URL map for.
 */
targetHttpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$TargetHttpsProxiesResource {

/**
 * Deletes the specified TargetHttpsProxy resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetHttpsProxy resource to delete.
 */
targetHttpsProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified TargetHttpsProxy resource. Get a list of available target HTTPS proxies by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the TargetHttpsProxy resource to return.
 */
targetHttpsProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetHttpsProxy>,

/**
 * Creates a TargetHttpsProxy resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of TargetHttpsProxy resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetHttpsProxyList>,

/**
 * Replaces SslCertificates for TargetHttpsProxy.
 */
setSslCertificates(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetHttpsProxy resource to set an SslCertificates resource for.
 */
targetHttpsProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Changes the URL map for TargetHttpsProxy.
 */
setUrlMap(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetHttpsProxy resource whose URL map is to be set.
 */
targetHttpsProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$TargetInstancesResource {

/**
 * Retrieves an aggregated list of target instances.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetInstanceAggregatedList>,

/**
 * Deletes the specified TargetInstance resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetInstance resource to delete.
 */
targetInstance: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone scoping this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Returns the specified TargetInstance resource. Get a list of available target instances by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the TargetInstance resource to return.
 */
targetInstance: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone scoping this request.
 */
zone: string
}): Request<compute$TargetInstance>,

/**
 * Creates a TargetInstance resource in the specified project and zone using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the zone scoping this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of TargetInstance resources available to the specified project and zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone scoping this request.
 */
zone: string
}): Request<compute$TargetInstanceList>
} 

declare interface compute$TargetPoolsResource {

/**
 * Adds health check URLs to a target pool.
 */
addHealthCheck(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the target pool to add a health check to.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Adds an instance to a target pool.
 */
addInstance(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetPool resource to add instances to.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves an aggregated list of target pools.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetPoolAggregatedList>,

/**
 * Deletes the specified target pool.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetPool resource to delete.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified target pool. Get a list of available target pools by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * Name of the TargetPool resource to return.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetPool>,

/**
 * Gets the most recent health check results for each IP for the instance that is referenced by the given target pool.
 */
getHealth(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * Name of the TargetPool resource to which the queried instance belongs.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetPoolInstanceHealth>,

/**
 * Creates a target pool in the specified project and region using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of target pools available to the specified project and region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetPoolList>,

/**
 * Removes health check URL from a target pool.
 */
removeHealthCheck(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the target pool to remove health checks from.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Removes instance URL from a target pool.
 */
removeInstance(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetPool resource to remove instances from.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Changes a backup target pool's configurations.
 */
setBackup(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * New failoverRatio value for the target pool.
 */
failoverRatio?: number,

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region scoping this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetPool resource to set a backup pool for.
 */
targetPool: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$TargetSslProxiesResource {

/**
 * Deletes the specified TargetSslProxy resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetSslProxy resource to delete.
 */
targetSslProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified TargetSslProxy resource. Get a list of available target SSL proxies by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the TargetSslProxy resource to return.
 */
targetSslProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetSslProxy>,

/**
 * Creates a TargetSslProxy resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of TargetSslProxy resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetSslProxyList>,

/**
 * Changes the BackendService for TargetSslProxy.
 */
setBackendService(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetSslProxy resource whose BackendService resource is to be set.
 */
targetSslProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Changes the ProxyHeaderType for TargetSslProxy.
 */
setProxyHeader(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetSslProxy resource whose ProxyHeader is to be set.
 */
targetSslProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Changes SslCertificates for TargetSslProxy.
 */
setSslCertificates(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetSslProxy resource whose SslCertificate resource is to be set.
 */
targetSslProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$TargetTcpProxiesResource {

/**
 * Deletes the specified TargetTcpProxy resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetTcpProxy resource to delete.
 */
targetTcpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified TargetTcpProxy resource. Get a list of available target TCP proxies by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the TargetTcpProxy resource to return.
 */
targetTcpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetTcpProxy>,

/**
 * Creates a TargetTcpProxy resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of TargetTcpProxy resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetTcpProxyList>,

/**
 * Changes the BackendService for TargetTcpProxy.
 */
setBackendService(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetTcpProxy resource whose BackendService resource is to be set.
 */
targetTcpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Changes the ProxyHeaderType for TargetTcpProxy.
 */
setProxyHeader(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the TargetTcpProxy resource whose ProxyHeader is to be set.
 */
targetTcpProxy: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>
} 

declare interface compute$TargetVpnGatewaysResource {

/**
 * Retrieves an aggregated list of target VPN gateways.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$TargetVpnGatewayAggregatedList>,

/**
 * Deletes the specified target VPN gateway.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the target VPN gateway to delete.
 */
targetVpnGateway: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified target VPN gateway. Get a list of available target VPN gateways by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * Name of the target VPN gateway to return.
 */
targetVpnGateway: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetVpnGateway>,

/**
 * Creates a target VPN gateway in the specified project and region using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of target VPN gateways available to the specified project and region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$TargetVpnGatewayList>
} 

declare interface compute$UrlMapsResource {

/**
 * Deletes the specified UrlMap resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the UrlMap resource to delete.
 */
urlMap: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Returns the specified UrlMap resource. Get a list of available URL maps by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the UrlMap resource to return.
 */
urlMap: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$UrlMap>,

/**
 * Creates a UrlMap resource in the specified project using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Initiates a cache invalidation operation, invalidating the specified path, scoped to the specified UrlMap.
 */
invalidateCache(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the UrlMap scoping this request.
 */
urlMap: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves the list of UrlMap resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$UrlMapList>,

/**
 * Patches the specified UrlMap resource with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format
 * and processing rules.
 */
patch(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the UrlMap resource to patch.
 */
urlMap: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Updates the specified UrlMap resource with the data included in the request.
 */
update(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * Name of the UrlMap resource to update.
 */
urlMap: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Runs static validation for the UrlMap. In particular, the tests of the provided UrlMap will be run. Calling this method does NOT create the UrlMap.
 */
validate(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the UrlMap resource to be validated as.
 */
urlMap: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$UrlMapsValidateResponse>
} 

declare interface compute$VpnTunnelsResource {

/**
 * Retrieves an aggregated list of VPN tunnels.
 */
aggregatedList(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$VpnTunnelAggregatedList>,

/**
 * Deletes the specified VpnTunnel resource.
 */
delete(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the VpnTunnel resource to delete.
 */
vpnTunnel: string
}): Request<compute$Operation>,

/**
 * Returns the specified VpnTunnel resource. Get a list of available VPN tunnels by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * Name of the VpnTunnel resource to return.
 */
vpnTunnel: string
}): Request<compute$VpnTunnel>,

/**
 * Creates a VpnTunnel resource in the specified project and region using the data included in the request.
 */
insert(
request: {

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
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the
 * request if it has already been completed.
 * 
 * For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID,
 * the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from
 * accidentally creating duplicate commitments.
 * 
 * The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
 */
requestId?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of VpnTunnel resources contained in the specified project and region.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
 */
project: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the region for this request.
 */
region: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<compute$VpnTunnelList>
} 

declare interface compute$ZoneOperationsResource {

/**
 * Deletes the specified zone-specific Operations resource.
 */
delete(
request: {

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
 * Name of the Operations resource to delete.
 */
operation: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<void>,

/**
 * Retrieves the specified zone-specific Operations resource.
 */
get(
request: {

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
 * Name of the Operations resource to return.
 */
operation: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone for this request.
 */
zone: string
}): Request<compute$Operation>,

/**
 * Retrieves a list of Operation resources contained within the specified zone.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone for request.
 */
zone: string
}): Request<compute$OperationList>
} 

declare interface compute$ZonesResource {

/**
 * Returns the specified Zone resource. Get a list of available zones by making a list() request.
 */
get(
request: {

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
 * Project ID for this request.
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
userIp?: string,

/**
 * Name of the zone resource to return.
 */
zone: string
}): Request<compute$Zone>,

/**
 * Retrieves the list of Zone resources available to the specified project.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
 * 
 * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
 * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
 * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
 * literal value must match the entire field.
 * 
 * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
 * 
 * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
 * on nested fields to take advantage of labels to organize and search for results based on label values.
 * 
 * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
 * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
 * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
 * 
 * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
 * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
 * is returned first.
 * 
 * Currently, only sorting by name or creationTimestamp desc is supported.
 */
orderBy?: string,

/**
 * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Project ID for this request.
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
}): Request<compute$ZoneList>
} 
    }
