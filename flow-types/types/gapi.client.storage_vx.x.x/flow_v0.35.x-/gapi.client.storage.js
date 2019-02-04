declare module 'gapi.client.storage' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        bucketAccessControls: typeof client$bucketAccessControls,
buckets: typeof client$buckets,
channels: typeof client$channels,
defaultObjectAccessControls: typeof client$defaultObjectAccessControls,
notifications: typeof client$notifications,
objectAccessControls: typeof client$objectAccessControls,
objects: typeof client$objects,
projects: typeof client$projects,
      }

/**
 * Load Cloud Storage JSON API v1
 */
declare function client$load(name: "storage", version: "v1"): PromiseLike<void>


declare function client$load(name: "storage", version: "v1", callback: () => any): void


declare var client$bucketAccessControls: storage$storage$BucketAccessControlsResource;

declare var client$buckets: storage$storage$BucketsResource;

declare var client$channels: storage$storage$ChannelsResource;

declare var client$defaultObjectAccessControls: storage$storage$DefaultObjectAccessControlsResource;

declare var client$notifications: storage$storage$NotificationsResource;

declare var client$objectAccessControls: storage$storage$ObjectAccessControlsResource;

declare var client$objects: storage$storage$ObjectsResource;

declare var client$projects: storage$storage$ProjectsResource;

declare interface storage$Bucket {

/**
 * Access controls on the bucket.
 */
acl?: storage$BucketAccessControl[],

/**
 * The bucket's billing configuration.
 */
billing?: {

/**
 * When set to true, bucket is requester pays.
 */
requesterPays?: boolean
},

/**
 * The bucket's Cross-Origin Resource Sharing (CORS) configuration.
 */
cors?: Array<{

/**
 * The value, in seconds, to return in the  Access-Control-Max-Age header used in preflight responses.
 */
maxAgeSeconds?: number,

/**
 * The list of HTTP methods on which to include CORS response headers, (GET, OPTIONS, POST, etc) Note: "&#42;" is permitted in the list of methods, and means
 * "any method".
 */
method?: string[],

/**
 * The list of Origins eligible to receive CORS response headers. Note: "&#42;" is permitted in the list of origins, and means "any Origin".
 */
origin?: string[],

/**
 * The list of HTTP headers other than the simple response headers to give permission for the user-agent to share across domains.
 */
responseHeader?: string[]
}>,

/**
 * Default access controls to apply to new objects when no ACL is provided.
 */
defaultObjectAcl?: storage$ObjectAccessControl[],

/**
 * Encryption configuration used by default for newly inserted objects, when no encryption config is specified.
 */
encryption?: {
defaultKmsKeyName?: string
},

/**
 * HTTP 1.1 Entity tag for the bucket.
 */
etag?: string,

/**
 * The ID of the bucket. For buckets, the id and name properities are the same.
 */
id?: string,

/**
 * The kind of item this is. For buckets, this is always storage#bucket.
 */
kind?: string,

/**
 * User-provided labels, in key/value pairs.
 */
labels?: Record<string, string>,

/**
 * The bucket's lifecycle configuration. See lifecycle management for more information.
 */
lifecycle?: {

/**
 * A lifecycle management rule, which is made of an action to take and the condition(s) under which the action will be taken.
 */
rule?: Array<{

/**
 * The action to take.
 */
action?: {

/**
 * Target storage class. Required iff the type of the action is SetStorageClass.
 */
storageClass?: string,

/**
 * Type of the action. Currently, only Delete and SetStorageClass are supported.
 */
type?: string
},

/**
 * The condition(s) under which the action will be taken.
 */
condition?: {

/**
 * Age of an object (in days). This condition is satisfied when an object reaches the specified age.
 */
age?: number,

/**
 * A date in RFC 3339 format with only the date part (for instance, "2013-01-15"). This condition is satisfied when an object is created before midnight
 * of the specified date in UTC.
 */
createdBefore?: string,

/**
 * Relevant only for versioned objects. If the value is true, this condition matches live objects; if the value is false, it matches archived objects.
 */
isLive?: boolean,

/**
 * Objects having any of the storage classes specified by this condition will be matched. Values include MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE,
 * STANDARD, and DURABLE_REDUCED_AVAILABILITY.
 */
matchesStorageClass?: string[],

/**
 * Relevant only for versioned objects. If the value is N, this condition is satisfied when there are at least N versions (including the live version)
 * newer than this version of the object.
 */
numNewerVersions?: number
}
}>
},

/**
 * The location of the bucket. Object data for objects in the bucket resides in physical storage within this region. Defaults to US. See the developer's
 * guide for the authoritative list.
 */
location?: string,

/**
 * The bucket's logging configuration, which defines the destination bucket and optional name prefix for the current bucket's logs.
 */
logging?: {

/**
 * The destination bucket where the current bucket's logs should be placed.
 */
logBucket?: string,

/**
 * A prefix for log object names.
 */
logObjectPrefix?: string
},

/**
 * The metadata generation of this bucket.
 */
metageneration?: string,

/**
 * The name of the bucket.
 */
name?: string,

/**
 * The owner of the bucket. This is always the project team's owner group.
 */
owner?: {

/**
 * The entity, in the form project-owner-projectId.
 */
entity?: string,

/**
 * The ID for the entity.
 */
entityId?: string
},

/**
 * The project number of the project the bucket belongs to.
 */
projectNumber?: string,

/**
 * The URI of this bucket.
 */
selfLink?: string,

/**
 * The bucket's default storage class, used whenever no storageClass is specified for a newly-created object. This defines how objects in the bucket are
 * stored and determines the SLA and the cost of storage. Values include MULTI_REGIONAL, REGIONAL, STANDARD, NEARLINE, COLDLINE, and
 * DURABLE_REDUCED_AVAILABILITY. If this value is not specified when the bucket is created, it will default to STANDARD. For more information, see storage
 * classes.
 */
storageClass?: string,

/**
 * The creation time of the bucket in RFC 3339 format.
 */
timeCreated?: string,

/**
 * The modification time of the bucket in RFC 3339 format.
 */
updated?: string,

/**
 * The bucket's versioning configuration.
 */
versioning?: {

/**
 * While set to true, versioning is fully enabled for this bucket.
 */
enabled?: boolean
},

/**
 * The bucket's website configuration, controlling how the service behaves when accessing bucket contents as a web site. See the Static Website Examples
 * for more information.
 */
website?: {

/**
 * If the requested object path is missing, the service will ensure the path has a trailing '/', append this suffix, and attempt to retrieve the resulting
 * object. This allows the creation of index.html objects to represent directory pages.
 */
mainPageSuffix?: string,

/**
 * If the requested object path is missing, and any mainPageSuffix object is missing, if applicable, the service will return the named object from this
 * bucket as the content for a 404 Not Found result.
 */
notFoundPage?: string
}
} 

declare interface storage$BucketAccessControl {

/**
 * The name of the bucket.
 */
bucket?: string,

/**
 * The domain associated with the entity, if any.
 */
domain?: string,

/**
 * The email address associated with the entity, if any.
 */
email?: string,

/**
 * The entity holding the permission, in one of the following forms:
 * - user-userId
 * - user-email
 * - group-groupId
 * - group-email
 * - domain-domain
 * - project-team-projectId
 * - allUsers
 * - allAuthenticatedUsers Examples:
 * - The user liz@example.com would be user-liz@example.com.
 * - The group example@googlegroups.com would be group-example@googlegroups.com.
 * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
 */
entity?: string,

/**
 * The ID for the entity, if any.
 */
entityId?: string,

/**
 * HTTP 1.1 Entity tag for the access-control entry.
 */
etag?: string,

/**
 * The ID of the access-control entry.
 */
id?: string,

/**
 * The kind of item this is. For bucket access control entries, this is always storage#bucketAccessControl.
 */
kind?: string,

/**
 * The project team associated with the entity, if any.
 */
projectTeam?: {

/**
 * The project number.
 */
projectNumber?: string,

/**
 * The team.
 */
team?: string
},

/**
 * The access permission for the entity.
 */
role?: string,

/**
 * The link to this access-control entry.
 */
selfLink?: string
} 

declare interface storage$BucketAccessControls {

/**
 * The list of items.
 */
items?: storage$BucketAccessControl[],

/**
 * The kind of item this is. For lists of bucket access control entries, this is always storage#bucketAccessControls.
 */
kind?: string
} 

declare interface storage$Buckets {

/**
 * The list of items.
 */
items?: storage$Bucket[],

/**
 * The kind of item this is. For lists of buckets, this is always storage#buckets.
 */
kind?: string,

/**
 * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
 */
nextPageToken?: string
} 

declare interface storage$Channel {

/**
 * The address where notifications are delivered for this channel.
 */
address?: string,

/**
 * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
 */
expiration?: string,

/**
 * A UUID or similar unique string that identifies this channel.
 */
id?: string,

/**
 * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
 */
kind?: string,

/**
 * Additional parameters controlling delivery channel behavior. Optional.
 */
params?: Record<string, string>,

/**
 * A Boolean value to indicate whether payload is wanted. Optional.
 */
payload?: boolean,

/**
 * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
 */
resourceId?: string,

/**
 * A version-specific identifier for the watched resource.
 */
resourceUri?: string,

/**
 * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
 */
token?: string,

/**
 * The type of delivery mechanism used for this channel.
 */
type?: string
} 

declare interface storage$ComposeRequest {

/**
 * Properties of the resulting object.
 */
destination?: storage$Object,

/**
 * The kind of item this is.
 */
kind?: string,

/**
 * The list of source objects that will be concatenated into a single object.
 */
sourceObjects?: Array<{

/**
 * The generation of this object to use as the source.
 */
generation?: string,

/**
 * The source object's name. The source object's bucket is implicitly the destination bucket.
 */
name?: string,

/**
 * Conditions that must be met for this operation to execute.
 */
objectPreconditions?: {

/**
 * Only perform the composition if the generation of the source object that would be used matches this value. If this value and a generation are both
 * specified, they must be the same value or the call will fail.
 */
ifGenerationMatch?: string
}
}>
} 

declare interface storage$Notification {

/**
 * An optional list of additional attributes to attach to each Cloud PubSub message published for this notification subscription.
 */
custom_attributes?: Record<string, string>,

/**
 * HTTP 1.1 Entity tag for this subscription notification.
 */
etag?: string,

/**
 * If present, only send notifications about listed event types. If empty, sent notifications for all event types.
 */
event_types?: string[],

/**
 * The ID of the notification.
 */
id?: string,

/**
 * The kind of item this is. For notifications, this is always storage#notification.
 */
kind?: string,

/**
 * If present, only apply this notification configuration to object names that begin with this prefix.
 */
object_name_prefix?: string,

/**
 * The desired content of the Payload.
 */
payload_format?: string,

/**
 * The canonical URL of this notification.
 */
selfLink?: string,

/**
 * The Cloud PubSub topic to which this subscription publishes. Formatted as: '//pubsub.googleapis.com/projects/{project-identifier}/topics/{my-topic}'
 */
topic?: string
} 

declare interface storage$Notifications {

/**
 * The list of items.
 */
items?: storage$Notification[],

/**
 * The kind of item this is. For lists of notifications, this is always storage#notifications.
 */
kind?: string
} 

declare interface storage$Object {

/**
 * Access controls on the object.
 */
acl?: storage$ObjectAccessControl[],

/**
 * The name of the bucket containing this object.
 */
bucket?: string,

/**
 * Cache-Control directive for the object data. If omitted, and the object is accessible to all anonymous users, the default will be public, max-age=3600.
 */
cacheControl?: string,

/**
 * Number of underlying components that make up this object. Components are accumulated by compose operations.
 */
componentCount?: number,

/**
 * Content-Disposition of the object data.
 */
contentDisposition?: string,

/**
 * Content-Encoding of the object data.
 */
contentEncoding?: string,

/**
 * Content-Language of the object data.
 */
contentLanguage?: string,

/**
 * Content-Type of the object data. If an object is stored without a Content-Type, it is served as application/octet-stream.
 */
contentType?: string,

/**
 * CRC32c checksum, as described in RFC 4960, Appendix B; encoded using base64 in big-endian byte order. For more information about using the CRC32c
 * checksum, see Hashes and ETags: Best Practices.
 */
crc32c?: string,

/**
 * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
 */
customerEncryption?: {

/**
 * The encryption algorithm.
 */
encryptionAlgorithm?: string,

/**
 * SHA256 hash value of the encryption key.
 */
keySha256?: string
},

/**
 * HTTP 1.1 Entity tag for the object.
 */
etag?: string,

/**
 * The content generation of this object. Used for object versioning.
 */
generation?: string,

/**
 * The ID of the object, including the bucket name, object name, and generation number.
 */
id?: string,

/**
 * The kind of item this is. For objects, this is always storage#object.
 */
kind?: string,

/**
 * Cloud KMS Key used to encrypt this object, if the object is encrypted by such a key.
 */
kmsKeyName?: string,

/**
 * MD5 hash of the data; encoded using base64. For more information about using the MD5 hash, see Hashes and ETags: Best Practices.
 */
md5Hash?: string,

/**
 * Media download link.
 */
mediaLink?: string,

/**
 * User-provided metadata, in key/value pairs.
 */
metadata?: Record<string, string>,

/**
 * The version of the metadata for this object at this generation. Used for preconditions and for detecting changes in metadata. A metageneration number
 * is only meaningful in the context of a particular generation of a particular object.
 */
metageneration?: string,

/**
 * The name of the object. Required if not specified by URL parameter.
 */
name?: string,

/**
 * The owner of the object. This will always be the uploader of the object.
 */
owner?: {

/**
 * The entity, in the form user-userId.
 */
entity?: string,

/**
 * The ID for the entity.
 */
entityId?: string
},

/**
 * The link to this object.
 */
selfLink?: string,

/**
 * Content-Length of the data in bytes.
 */
size?: string,

/**
 * Storage class of the object.
 */
storageClass?: string,

/**
 * The creation time of the object in RFC 3339 format.
 */
timeCreated?: string,

/**
 * The deletion time of the object in RFC 3339 format. Will be returned if and only if this version of the object has been deleted.
 */
timeDeleted?: string,

/**
 * The time at which the object's storage class was last changed. When the object is initially created, it will be set to timeCreated.
 */
timeStorageClassUpdated?: string,

/**
 * The modification time of the object metadata in RFC 3339 format.
 */
updated?: string
} 

declare interface storage$ObjectAccessControl {

/**
 * The name of the bucket.
 */
bucket?: string,

/**
 * The domain associated with the entity, if any.
 */
domain?: string,

/**
 * The email address associated with the entity, if any.
 */
email?: string,

/**
 * The entity holding the permission, in one of the following forms:
 * - user-userId
 * - user-email
 * - group-groupId
 * - group-email
 * - domain-domain
 * - project-team-projectId
 * - allUsers
 * - allAuthenticatedUsers Examples:
 * - The user liz@example.com would be user-liz@example.com.
 * - The group example@googlegroups.com would be group-example@googlegroups.com.
 * - To refer to all members of the Google Apps for Business domain example.com, the entity would be domain-example.com.
 */
entity?: string,

/**
 * The ID for the entity, if any.
 */
entityId?: string,

/**
 * HTTP 1.1 Entity tag for the access-control entry.
 */
etag?: string,

/**
 * The content generation of the object, if applied to an object.
 */
generation?: string,

/**
 * The ID of the access-control entry.
 */
id?: string,

/**
 * The kind of item this is. For object access control entries, this is always storage#objectAccessControl.
 */
kind?: string,

/**
 * The name of the object, if applied to an object.
 */
object?: string,

/**
 * The project team associated with the entity, if any.
 */
projectTeam?: {

/**
 * The project number.
 */
projectNumber?: string,

/**
 * The team.
 */
team?: string
},

/**
 * The access permission for the entity.
 */
role?: string,

/**
 * The link to this access-control entry.
 */
selfLink?: string
} 

declare interface storage$ObjectAccessControls {

/**
 * The list of items.
 */
items?: storage$ObjectAccessControl[],

/**
 * The kind of item this is. For lists of object access control entries, this is always storage#objectAccessControls.
 */
kind?: string
} 

declare interface storage$Objects {

/**
 * The list of items.
 */
items?: storage$Object[],

/**
 * The kind of item this is. For lists of objects, this is always storage#objects.
 */
kind?: string,

/**
 * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
 */
nextPageToken?: string,

/**
 * The list of prefixes of objects matching-but-not-listed up to and including the requested delimiter.
 */
prefixes?: string[]
} 

declare interface storage$Policy {

/**
 * An association between a role, which comes with a set of permissions, and members who may assume that role.
 */
bindings?: Array<{
condition?: any,

/**
 * A collection of identifiers for members who may assume the provided role. Recognized identifiers are as follows:
 * - allUsers — A special identifier that represents anyone on the internet; with or without a Google account.
 * - allAuthenticatedUsers — A special identifier that represents anyone who is authenticated with a Google account or a service account.
 * - user:emailid — An email address that represents a specific account. For example, user:alice@gmail.com or user:joe@example.com.
 * - serviceAccount:emailid — An email address that represents a service account. For example,  serviceAccount:my-other-app@appspot.gserviceaccount.com .
 * 
 * - group:emailid — An email address that represents a Google group. For example, group:admins@example.com.
 * - domain:domain — A Google Apps domain name that represents all the users of that domain. For example, domain:google.com or domain:example.com.
 * - projectOwner:projectid — Owners of the given project. For example, projectOwner:my-example-project
 * - projectEditor:projectid — Editors of the given project. For example, projectEditor:my-example-project
 * - projectViewer:projectid — Viewers of the given project. For example, projectViewer:my-example-project
 */
members?: string[],

/**
 * The role to which members belong. Two types of roles are supported: new IAM roles, which grant permissions that do not map directly to those provided
 * by ACLs, and legacy IAM roles, which do map directly to ACL permissions. All roles are of the format roles/storage.specificRole.
 * The new IAM roles are:
 * - roles/storage.admin — Full control of Google Cloud Storage resources.
 * - roles/storage.objectViewer — Read-Only access to Google Cloud Storage objects.
 * - roles/storage.objectCreator — Access to create objects in Google Cloud Storage.
 * - roles/storage.objectAdmin — Full control of Google Cloud Storage objects.   The legacy IAM roles are:
 * - roles/storage.legacyObjectReader — Read-only access to objects without listing. Equivalent to an ACL entry on an object with the READER role.
 * - roles/storage.legacyObjectOwner — Read/write access to existing objects without listing. Equivalent to an ACL entry on an object with the OWNER role.
 * 
 * - roles/storage.legacyBucketReader — Read access to buckets with object listing. Equivalent to an ACL entry on a bucket with the READER role.
 * - roles/storage.legacyBucketWriter — Read access to buckets with object listing/creation/deletion. Equivalent to an ACL entry on a bucket with the
 * WRITER role.
 * - roles/storage.legacyBucketOwner — Read and write access to existing buckets with object listing/creation/deletion. Equivalent to an ACL entry on a
 * bucket with the OWNER role.
 */
role?: string
}>,

/**
 * HTTP 1.1  Entity tag for the policy.
 */
etag?: string,

/**
 * The kind of item this is. For policies, this is always storage#policy. This field is ignored on input.
 */
kind?: string,

/**
 * The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, and
 * projects/_/buckets/bucket/objects/object for objects. A specific generation may be specified by appending #generationNumber to the end of the object
 * name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input.
 */
resourceId?: string
} 

declare interface storage$RewriteResponse {

/**
 * true if the copy is finished; otherwise, false if the copy is in progress. This property is always present in the response.
 */
done?: boolean,

/**
 * The kind of item this is.
 */
kind?: string,

/**
 * The total size of the object being copied in bytes. This property is always present in the response.
 */
objectSize?: string,

/**
 * A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.
 */
resource?: storage$Object,

/**
 * A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.
 */
rewriteToken?: string,

/**
 * The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.
 */
totalBytesRewritten?: string
} 

declare interface storage$ServiceAccount {

/**
 * The ID of the notification.
 */
email_address?: string,

/**
 * The kind of item this is. For notifications, this is always storage#notification.
 */
kind?: string
} 

declare interface storage$TestIamPermissionsResponse {

/**
 * The kind of item this is.
 */
kind?: string,

/**
 * The permissions held by the caller. Permissions are always of the format storage.resource.capability, where resource is one of buckets or objects. The
 * supported permissions are as follows:
 * - storage.buckets.delete — Delete bucket.
 * - storage.buckets.get — Read bucket metadata.
 * - storage.buckets.getIamPolicy — Read bucket IAM policy.
 * - storage.buckets.create — Create bucket.
 * - storage.buckets.list — List buckets.
 * - storage.buckets.setIamPolicy — Update bucket IAM policy.
 * - storage.buckets.update — Update bucket metadata.
 * - storage.objects.delete — Delete object.
 * - storage.objects.get — Read object data and metadata.
 * - storage.objects.getIamPolicy — Read object IAM policy.
 * - storage.objects.create — Create object.
 * - storage.objects.list — List objects.
 * - storage.objects.setIamPolicy — Update object IAM policy.
 * - storage.objects.update — Update object metadata.
 */
permissions?: string[]
} 

declare interface storage$BucketAccessControlsResource {

/**
 * Permanently deletes the ACL entry for the specified entity on the specified bucket.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<void>,

/**
 * Returns the ACL entry for the specified entity on the specified bucket.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$BucketAccessControl>,

/**
 * Creates a new ACL entry on the specified bucket.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$BucketAccessControl>,

/**
 * Retrieves ACL entries on the specified bucket.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$BucketAccessControls>,

/**
 * Updates an ACL entry on the specified bucket. This method supports patch semantics.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$BucketAccessControl>,

/**
 * Updates an ACL entry on the specified bucket.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$BucketAccessControl>
} 

declare interface storage$BucketsResource {

/**
 * Permanently deletes an empty bucket.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If set, only deletes the bucket if its metageneration matches this value.
 */
ifMetagenerationMatch?: string,

/**
 * If set, only deletes the bucket if its metageneration does not match this value.
 */
ifMetagenerationNotMatch?: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<void>,

/**
 * Returns metadata for the specified bucket.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

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
 * Set of properties to return. Defaults to noAcl.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Bucket>,

/**
 * Returns an IAM policy for the specified bucket.
 */
getIamPolicy(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Policy>,

/**
 * Creates a new bucket.
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
 * Apply a predefined set of access controls to this bucket.
 */
predefinedAcl?: string,

/**
 * Apply a predefined set of default object access controls to this bucket.
 */
predefinedDefaultObjectAcl?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * A valid API project identifier.
 */
project: string,

/**
 * Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Bucket>,

/**
 * Retrieves a list of buckets for a given project.
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
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
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
 * Filter results to buckets whose names begin with this prefix.
 */
prefix?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * A valid API project identifier.
 */
project: string,

/**
 * Set of properties to return. Defaults to noAcl.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Buckets>,

/**
 * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate. This method
 * supports patch semantics.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Apply a predefined set of access controls to this bucket.
 */
predefinedAcl?: string,

/**
 * Apply a predefined set of default object access controls to this bucket.
 */
predefinedDefaultObjectAcl?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to full.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Bucket>,

/**
 * Updates an IAM policy for the specified bucket.
 */
setIamPolicy(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Policy>,

/**
 * Tests a set of permissions on the given bucket to see which, if any, are held by the caller.
 */
testIamPermissions(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

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
 * Permissions to test.
 */
permissions: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$TestIamPermissionsResponse>,

/**
 * Updates a bucket. Changes to the bucket will be readable immediately after writing, but configuration changes may take time to propagate.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Apply a predefined set of access controls to this bucket.
 */
predefinedAcl?: string,

/**
 * Apply a predefined set of default object access controls to this bucket.
 */
predefinedDefaultObjectAcl?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to full.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Bucket>
} 

declare interface storage$ChannelsResource {

/**
 * Stop watching resources through this channel
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
}): Request<void>
} 

declare interface storage$DefaultObjectAccessControlsResource {

/**
 * Permanently deletes the default object ACL entry for the specified entity on the specified bucket.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<void>,

/**
 * Returns the default object ACL entry for the specified entity on the specified bucket.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>,

/**
 * Creates a new default object ACL entry on the specified bucket.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>,

/**
 * Retrieves default object ACL entries on the specified bucket.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, only return default ACL listing if the bucket's current metageneration matches this value.
 */
ifMetagenerationMatch?: string,

/**
 * If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControls>,

/**
 * Updates a default object ACL entry on the specified bucket. This method supports patch semantics.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>,

/**
 * Updates a default object ACL entry on the specified bucket.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>
} 

declare interface storage$NotificationsResource {

/**
 * Permanently deletes a notification subscription.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The parent bucket of the notification.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * ID of the notification to delete.
 */
notification: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<void>,

/**
 * View a notification configuration.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The parent bucket of the notification.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Notification ID
 */
notification: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Notification>,

/**
 * Creates a notification subscription for a given bucket.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The parent bucket of the notification.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Notification>,

/**
 * Retrieves a list of notification subscriptions for a given bucket.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a Google Cloud Storage bucket.
 */
bucket: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Notifications>
} 

declare interface storage$ObjectAccessControlsResource {

/**
 * Permanently deletes the ACL entry for the specified entity on the specified object.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<void>,

/**
 * Returns the ACL entry for the specified entity on the specified object.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>,

/**
 * Creates a new ACL entry on the specified object.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>,

/**
 * Retrieves ACL entries on the specified object.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControls>,

/**
 * Updates an ACL entry on the specified object. This method supports patch semantics.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>,

/**
 * Updates an ACL entry on the specified object.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of a bucket.
 */
bucket: string,

/**
 * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
 */
entity: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ObjectAccessControl>
} 

declare interface storage$ObjectsResource {

/**
 * Concatenates a list of existing objects into a new object in the same bucket.
 */
compose(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which to store the new object.
 */
destinationBucket: string,

/**
 * Name of the new object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
destinationObject: string,

/**
 * Apply a predefined set of access controls to the destination object.
 */
destinationPredefinedAcl?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the
 * object. Overrides the object metadata's kms_key_name value, if any.
 */
kmsKeyName?: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Object>,

/**
 * Copies a source object to a destination object. Optionally overrides metadata.
 */
copy(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.For information about how to URL
 * encode object names to be path safe, see Encoding URI Path Parts.
 */
destinationBucket: string,

/**
 * Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
 */
destinationObject: string,

/**
 * Apply a predefined set of access controls to the destination object.
 */
destinationPredefinedAcl?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the operation conditional on whether the destination object's current generation matches the given value. Setting to 0 makes the operation
 * succeed only if there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the destination object's current generation does not match the given value. If no live object exists, the
 * precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the destination object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current generation matches the given value.
 */
ifSourceGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current generation does not match the given value.
 */
ifSourceGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current metageneration matches the given value.
 */
ifSourceMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current metageneration does not match the given value.
 */
ifSourceMetagenerationNotMatch?: string,

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
 * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
 */
projection?: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Name of the bucket in which to find the source object.
 */
sourceBucket: string,

/**
 * If present, selects a specific revision of the source object (as opposed to the latest version, the default).
 */
sourceGeneration?: string,

/**
 * Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
sourceObject: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Object>,

/**
 * Deletes an object and its metadata. Deletions are permanent if versioning is not enabled for the bucket, or if the generation parameter is used.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, permanently deletes a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition
 * fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<void>,

/**
 * Retrieves an object or its metadata.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition
 * fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to noAcl.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Object>,

/**
 * Returns an IAM policy for the specified object.
 */
getIamPolicy(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Policy>,

/**
 * Stores a new object and metadata.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
 */
bucket: string,

/**
 * If set, sets the contentEncoding property of the final object to this value. Setting this parameter is equivalent to setting the contentEncoding
 * metadata property. This can be useful when uploading an object with uploadType=media to indicate the encoding of the content being uploaded.
 */
contentEncoding?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition
 * fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the
 * object. Overrides the object metadata's kms_key_name value, if any.
 */
kmsKeyName?: string,

/**
 * Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information
 * about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
name?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Apply a predefined set of access controls to this object.
 */
predefinedAcl?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Object>,

/**
 * Retrieves a list of objects matching the criteria.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which to look for objects.
 */
bucket: string,

/**
 * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose
 * names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are
 * omitted.
 */
delimiter?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned
 * than requested. The service will use this parameter or 1,000 items, whichever is smaller.
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
 * Filter results to objects whose names begin with this prefix.
 */
prefix?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to noAcl.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string,

/**
 * If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
 */
versions?: boolean
}): Request<storage$Objects>,

/**
 * Updates an object's metadata. This method supports patch semantics.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition
 * fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

/**
 * Apply a predefined set of access controls to this object.
 */
predefinedAcl?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to full.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Object>,

/**
 * Rewrites a source object to a destination object. Optionally overrides metadata.
 */
rewrite(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
 */
destinationBucket: string,

/**
 * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the
 * object. Overrides the object metadata's kms_key_name value, if any.
 */
destinationKmsKeyName?: string,

/**
 * Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For
 * information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
destinationObject: string,

/**
 * Apply a predefined set of access controls to the destination object.
 */
destinationPredefinedAcl?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition
 * fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the destination object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current generation matches the given value.
 */
ifSourceGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current generation does not match the given value.
 */
ifSourceGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current metageneration matches the given value.
 */
ifSourceMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the source object's current metageneration does not match the given value.
 */
ifSourceMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in
 * place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source
 * and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the
 * rewriteToken is invalid.
 */
maxBytesRewrittenPerCall?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
 */
projection?: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true.
 * Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite
 * request.
 */
rewriteToken?: string,

/**
 * Name of the bucket in which to find the source object.
 */
sourceBucket: string,

/**
 * If present, selects a specific revision of the source object (as opposed to the latest version, the default).
 */
sourceGeneration?: string,

/**
 * Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
sourceObject: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$RewriteResponse>,

/**
 * Updates an IAM policy for the specified object.
 */
setIamPolicy(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Policy>,

/**
 * Tests a set of permissions on the given object to see which, if any, are held by the caller.
 */
testIamPermissions(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

/**
 * Permissions to test.
 */
permissions: string,

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
userIp?: string,

/**
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$TestIamPermissionsResponse>,

/**
 * Updates an object's metadata.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which the object resides.
 */
bucket: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * If present, selects a specific revision of this object (as opposed to the latest version, the default).
 */
generation?: string,

/**
 * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if
 * there are no live versions of the object.
 */
ifGenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition
 * fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
 */
ifGenerationNotMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration matches the given value.
 */
ifMetagenerationMatch?: string,

/**
 * Makes the operation conditional on whether the object's current metageneration does not match the given value.
 */
ifMetagenerationNotMatch?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
 */
object: string,

/**
 * Apply a predefined set of access controls to this object.
 */
predefinedAcl?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to full.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$Object>,

/**
 * Watch for changes on all objects in a bucket.
 */
watchAll(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Name of the bucket in which to look for objects.
 */
bucket: string,

/**
 * Returns results in a directory-like mode. items will contain only objects whose names, aside from the prefix, do not contain delimiter. Objects whose
 * names, aside from the prefix, contain delimiter will have their name, truncated after the delimiter, returned in prefixes. Duplicate prefixes are
 * omitted.
 */
delimiter?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Maximum number of items plus prefixes to return in a single page of responses. As duplicate prefixes are omitted, fewer total results may be returned
 * than requested. The service will use this parameter or 1,000 items, whichever is smaller.
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
 * Filter results to objects whose names begin with this prefix.
 */
prefix?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Set of properties to return. Defaults to noAcl.
 */
projection?: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string,

/**
 * If true, lists all versions of an object as distinct results. The default is false. For more information, see Object Versioning.
 */
versions?: boolean
}): Request<storage$Channel>
} 

declare interface storage$ServiceAccountResource {

/**
 * Get the email address of this project's Google Cloud Storage service account.
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
 * Project ID
 */
projectId: string,

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
 * The project to be billed for this request, for Requester Pays buckets.
 */
userProject?: string
}): Request<storage$ServiceAccount>
} 

declare interface storage$ProjectsResource {
serviceAccount: storage$ServiceAccountResource
} 
    }
