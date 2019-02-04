declare module 'gapi.client.dlp' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        content: typeof client$content,
dataSource: typeof client$dataSource,
inspect: typeof client$inspect,
riskAnalysis: typeof client$riskAnalysis,
rootCategories: typeof client$rootCategories,
      }

/**
 * Load DLP API v2beta1
 */
declare function client$load(name: "dlp", version: "v2beta1"): PromiseLike<void>


declare function client$load(name: "dlp", version: "v2beta1", callback: () => any): void


declare var client$content: dlp$dlp$ContentResource;

declare var client$dataSource: dlp$dlp$DataSourceResource;

declare var client$inspect: dlp$dlp$InspectResource;

declare var client$riskAnalysis: dlp$dlp$RiskAnalysisResource;

declare var client$rootCategories: dlp$dlp$RootCategoriesResource;

declare interface dlp$GoogleLongrunningListOperationsResponse {

/**
 * The standard List next-page token.
 */
nextPageToken?: string,

/**
 * A list of operations that matches the specified filter in the request.
 */
operations?: dlp$GoogleLongrunningOperation[]
} 

declare interface dlp$GoogleLongrunningOperation {

/**
 * If the value is `false`, it means the operation is still in progress.
 * If `true`, the operation is completed, and either `error` or `response` is
 * available.
 */
done?: boolean,

/**
 * The error result of the operation in case of failure or cancellation.
 */
error?: dlp$GoogleRpcStatus,

/**
 * This field will contain an InspectOperationMetadata object for `inspect.operations.create` or a RiskAnalysisOperationMetadata object for
 * `dataSource.analyze`.  This will always be returned with the Operation.
 */
metadata?: Record<string, any>,

/**
 * The server-assigned name. The `name` should have the format of `inspect/operations/<identifier>`.
 */
name?: string,

/**
 * This field will contain an InspectOperationResult object for `inspect.operations.create` or a RiskAnalysisOperationResult object for
 * `dataSource.analyze`.
 */
response?: Record<string, any>
} 

declare interface dlp$GooglePrivacyDlpV2beta1AnalyzeDataSourceRiskRequest {

/**
 * Privacy metric to compute.
 */
privacyMetric?: dlp$GooglePrivacyDlpV2beta1PrivacyMetric,

/**
 * Input dataset to compute metrics over.
 */
sourceTable?: dlp$GooglePrivacyDlpV2beta1BigQueryTable
} 

declare interface dlp$GooglePrivacyDlpV2beta1BigQueryOptions {

/**
 * References to fields uniquely identifying rows within the table.
 * Nested fields in the format, like `person.birthdate.year`, are allowed.
 */
identifyingFields?: dlp$GooglePrivacyDlpV2beta1FieldId[],

/**
 * Complete BigQuery table reference.
 */
tableReference?: dlp$GooglePrivacyDlpV2beta1BigQueryTable
} 

declare interface dlp$GooglePrivacyDlpV2beta1BigQueryTable {

/**
 * Dataset ID of the table.
 */
datasetId?: string,

/**
 * The Google Cloud Platform project ID of the project containing the table.
 * If omitted, project ID is inferred from the API call.
 */
projectId?: string,

/**
 * Name of the table.
 */
tableId?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1Bucket {

/**
 * Upper bound of the range, exclusive; type must match min.
 */
max?: dlp$GooglePrivacyDlpV2beta1Value,

/**
 * Lower bound of the range, inclusive. Type should be the same as max if
 * used.
 */
min?: dlp$GooglePrivacyDlpV2beta1Value,

/**
 * Replacement value for this bucket. If not provided
 * the default behavior will be to hyphenate the min-max range.
 */
replacementValue?: dlp$GooglePrivacyDlpV2beta1Value
} 

declare interface dlp$GooglePrivacyDlpV2beta1BucketingConfig {
buckets?: dlp$GooglePrivacyDlpV2beta1Bucket[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1CategoricalStatsConfig {

/**
 * Field to compute categorical stats on. All column types are
 * supported except for arrays and structs. However, it may be more
 * informative to use NumericalStats when the field type is supported,
 * depending on the data.
 */
field?: dlp$GooglePrivacyDlpV2beta1FieldId
} 

declare interface dlp$GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket {

/**
 * Total number of records in this bucket.
 */
bucketSize?: string,

/**
 * Sample of value frequencies in this bucket. The total number of
 * values returned per bucket is capped at 20.
 */
bucketValues?: dlp$GooglePrivacyDlpV2beta1ValueFrequency[],

/**
 * Lower bound on the value frequency of the values in this bucket.
 */
valueFrequencyLowerBound?: string,

/**
 * Upper bound on the value frequency of the values in this bucket.
 */
valueFrequencyUpperBound?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1CategoricalStatsResult {

/**
 * Histogram of value frequencies in the column.
 */
valueFrequencyHistogramBuckets?: dlp$GooglePrivacyDlpV2beta1CategoricalStatsHistogramBucket[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1CategoryDescription {

/**
 * Human readable form of the category name.
 */
displayName?: string,

/**
 * Internal name of the category.
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1CharacterMaskConfig {

/**
 * When masking a string, items in this list will be skipped when replacing.
 * For example, if your string is 555-555-5555 and you ask us to skip `-` and
 * mask 5 chars with &#42; we would produce &#42;&#42;&#42;-&#42;55-5555.
 */
charactersToIgnore?: dlp$GooglePrivacyDlpV2beta1CharsToIgnore[],

/**
 * Character to mask the sensitive values&mdash;for example, "&#42;" for an
 * alphabetic string such as name, or "0" for a numeric string such as ZIP
 * code or credit card number. String must have length 1. If not supplied, we
 * will default to "&#42;" for strings, 0 for digits.
 */
maskingCharacter?: string,

/**
 * Number of characters to mask. If not set, all matching chars will be
 * masked. Skipped characters do not count towards this tally.
 */
numberToMask?: number,

/**
 * Mask characters in reverse order. For example, if `masking_character` is
 * '0', number_to_mask is 14, and `reverse_order` is false, then
 * 1234-5678-9012-3456 -> 00000000000000-3456
 * If `masking_character` is '&#42;', `number_to_mask` is 3, and `reverse_order`
 * is true, then 12345 -> 12&#42;&#42;&#42;
 */
reverseOrder?: boolean
} 

declare interface dlp$GooglePrivacyDlpV2beta1CharsToIgnore {
charactersToSkip?: string,
commonCharactersToIgnore?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1CloudStorageKey {

/**
 * Path to the file.
 */
filePath?: string,

/**
 * Byte offset of the referenced data in the file.
 */
startOffset?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1CloudStorageOptions {
fileSet?: dlp$GooglePrivacyDlpV2beta1FileSet
} 

declare interface dlp$GooglePrivacyDlpV2beta1CloudStoragePath {

/**
 * The url, in the format of `gs://bucket/<path>`.
 */
path?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1Color {

/**
 * The amount of blue in the color as a value in the interval [0, 1].
 */
blue?: number,

/**
 * The amount of green in the color as a value in the interval [0, 1].
 */
green?: number,

/**
 * The amount of red in the color as a value in the interval [0, 1].
 */
red?: number
} 

declare interface dlp$GooglePrivacyDlpV2beta1Condition {

/**
 * Field within the record this condition is evaluated against. [required]
 */
field?: dlp$GooglePrivacyDlpV2beta1FieldId,

/**
 * Operator used to compare the field or info type to the value. [required]
 */
operator?: string,

/**
 * Value to compare against. [Required, except for `EXISTS` tests.]
 */
value?: dlp$GooglePrivacyDlpV2beta1Value
} 

declare interface dlp$GooglePrivacyDlpV2beta1Conditions {
conditions?: dlp$GooglePrivacyDlpV2beta1Condition[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1ContentItem {

/**
 * Content data to inspect or redact.
 */
data?: string,

/**
 * Structured content for inspection.
 */
table?: dlp$GooglePrivacyDlpV2beta1Table,

/**
 * Type of the content, as defined in Content-Type HTTP header.
 * Supported types are: all "text" types, octet streams, PNG images,
 * JPEG images.
 */
type?: string,

/**
 * String data to inspect or redact.
 */
value?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1CreateInspectOperationRequest {

/**
 * Configuration for the inspector.
 */
inspectConfig?: dlp$GooglePrivacyDlpV2beta1InspectConfig,

/**
 * Additional configuration settings for long running operations.
 */
operationConfig?: dlp$GooglePrivacyDlpV2beta1OperationConfig,

/**
 * Optional location to store findings.
 */
outputConfig?: dlp$GooglePrivacyDlpV2beta1OutputStorageConfig,

/**
 * Specification of the data set to process.
 */
storageConfig?: dlp$GooglePrivacyDlpV2beta1StorageConfig
} 

declare interface dlp$GooglePrivacyDlpV2beta1CryptoHashConfig {

/**
 * The key used by the hash function.
 */
cryptoKey?: dlp$GooglePrivacyDlpV2beta1CryptoKey
} 

declare interface dlp$GooglePrivacyDlpV2beta1CryptoKey {
kmsWrapped?: dlp$GooglePrivacyDlpV2beta1KmsWrappedCryptoKey,
transient?: dlp$GooglePrivacyDlpV2beta1TransientCryptoKey,
unwrapped?: dlp$GooglePrivacyDlpV2beta1UnwrappedCryptoKey
} 

declare interface dlp$GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig {
commonAlphabet?: string,

/**
 * A context may be used for higher security since the same
 * identifier in two different contexts likely will be given a distinct
 * surrogate. The principle is that the likeliness is inversely related
 * to the ratio of the number of distinct identifiers per context over the
 * number of possible surrogates: As long as this ratio is small, the
 * likehood is large.
 * 
 * If the context is not set, a default tweak will be used.
 * If the context is set but:
 * 
 * 1. there is no record present when transforming a given value or
 * 1. the field is not present when transforming a given value,
 * 
 * a default tweak will be used.
 * 
 * Note that case (1) is expected when an `InfoTypeTransformation` is
 * applied to both structured and non-structured `ContentItem`s.
 * Currently, the referenced field may be of value type integer or string.
 * 
 * The tweak is constructed as a sequence of bytes in big endian byte order
 * such that:
 * 
 * - a 64 bit integer is encoded followed by a single byte of value 1
 * - a string is encoded in UTF-8 format followed by a single byte of value 2
 * 
 * This is also known as the 'tweak', as in tweakable encryption.
 */
context?: dlp$GooglePrivacyDlpV2beta1FieldId,

/**
 * The key used by the encryption algorithm. [required]
 */
cryptoKey?: dlp$GooglePrivacyDlpV2beta1CryptoKey,

/**
 * This is supported by mapping these to the alphanumeric characters
 * that the FFX mode natively supports. This happens before/after
 * encryption/decryption.
 * Each character listed must appear only once.
 * Number of characters must be in the range [2, 62].
 * This must be encoded as ASCII.
 * The order of characters does not matter.
 */
customAlphabet?: string,

/**
 * The native way to select the alphabet. Must be in the range [2, 62].
 */
radix?: number
} 

declare interface dlp$GooglePrivacyDlpV2beta1DatastoreKey {

/**
 * Datastore entity key.
 */
entityKey?: dlp$GooglePrivacyDlpV2beta1Key
} 

declare interface dlp$GooglePrivacyDlpV2beta1DatastoreOptions {

/**
 * The kind to process.
 */
kind?: dlp$GooglePrivacyDlpV2beta1KindExpression,

/**
 * A partition ID identifies a grouping of entities. The grouping is always
 * by project and namespace, however the namespace ID may be empty.
 */
partitionId?: dlp$GooglePrivacyDlpV2beta1PartitionId,

/**
 * Properties to scan. If none are specified, all properties will be scanned
 * by default.
 */
projection?: dlp$GooglePrivacyDlpV2beta1Projection[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1DeidentificationSummary {

/**
 * Transformations applied to the dataset.
 */
transformationSummaries?: dlp$GooglePrivacyDlpV2beta1TransformationSummary[],

/**
 * Total size in bytes that were transformed in some way.
 */
transformedBytes?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1DeidentifyConfig {

/**
 * Treat the dataset as free-form text and apply the same free text
 * transformation everywhere.
 */
infoTypeTransformations?: dlp$GooglePrivacyDlpV2beta1InfoTypeTransformations,

/**
 * Treat the dataset as structured. Transformations can be applied to
 * specific locations within structured datasets, such as transforming
 * a column within a table.
 */
recordTransformations?: dlp$GooglePrivacyDlpV2beta1RecordTransformations
} 

declare interface dlp$GooglePrivacyDlpV2beta1DeidentifyContentRequest {

/**
 * Configuration for the de-identification of the list of content items.
 */
deidentifyConfig?: dlp$GooglePrivacyDlpV2beta1DeidentifyConfig,

/**
 * Configuration for the inspector.
 */
inspectConfig?: dlp$GooglePrivacyDlpV2beta1InspectConfig,

/**
 * The list of items to inspect. Up to 100 are allowed per request.
 * All items will be treated as text/&#42;.
 */
items?: dlp$GooglePrivacyDlpV2beta1ContentItem[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1DeidentifyContentResponse {
items?: dlp$GooglePrivacyDlpV2beta1ContentItem[],

/**
 * A review of the transformations that took place for each item.
 */
summaries?: dlp$GooglePrivacyDlpV2beta1DeidentificationSummary[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1EntityId {

/**
 * Composite key indicating which field contains the entity identifier.
 */
field?: dlp$GooglePrivacyDlpV2beta1FieldId
} 

declare interface dlp$GooglePrivacyDlpV2beta1Expressions {
conditions?: dlp$GooglePrivacyDlpV2beta1Conditions,

/**
 * The operator to apply to the result of conditions. Default and currently
 * only supported value is `AND`.
 */
logicalOperator?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1FieldId {

/**
 * Name describing the field.
 */
columnName?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1FieldTransformation {

/**
 * Only apply the transformation if the condition evaluates to true for the
 * given `RecordCondition`. The conditions are allowed to reference fields
 * that are not used in the actual transformation. [optional]
 * 
 * Example Use Cases:
 * 
 * - Apply a different bucket transformation to an age column if the zip code
 * column for the same record is within a specific range.
 * - Redact a field if the date of birth field is greater than 85.
 */
condition?: dlp$GooglePrivacyDlpV2beta1RecordCondition,

/**
 * Input field(s) to apply the transformation to. [required]
 */
fields?: dlp$GooglePrivacyDlpV2beta1FieldId[],

/**
 * Treat the contents of the field as free text, and selectively
 * transform content that matches an `InfoType`.
 */
infoTypeTransformations?: dlp$GooglePrivacyDlpV2beta1InfoTypeTransformations,

/**
 * Apply the transformation to the entire field.
 */
primitiveTransformation?: dlp$GooglePrivacyDlpV2beta1PrimitiveTransformation
} 

declare interface dlp$GooglePrivacyDlpV2beta1FileSet {

/**
 * The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the
 * path is allowed.
 */
url?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1Finding {

/**
 * Timestamp when finding was detected.
 */
createTime?: string,

/**
 * The specific type of info the string might be.
 */
infoType?: dlp$GooglePrivacyDlpV2beta1InfoType,

/**
 * Estimate of how likely it is that the info_type is correct.
 */
likelihood?: string,

/**
 * Location of the info found.
 */
location?: dlp$GooglePrivacyDlpV2beta1Location,

/**
 * The specific string that may be potentially sensitive info.
 */
quote?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1FixedSizeBucketingConfig {

/**
 * Size of each bucket (except for minimum and maximum buckets). So if
 * `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
 * following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
 * 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works. [Required].
 */
bucketSize?: number,

/**
 * Lower bound value of buckets. All values less than `lower_bound` are
 * grouped together into a single bucket; for example if `lower_bound` = 10,
 * then all values less than 10 are replaced with the value “-10”. [Required].
 */
lowerBound?: dlp$GooglePrivacyDlpV2beta1Value,

/**
 * Upper bound value of buckets. All values greater than upper_bound are
 * grouped together into a single bucket; for example if `upper_bound` = 89,
 * then all values greater than 89 are replaced with the value “89+”.
 * [Required].
 */
upperBound?: dlp$GooglePrivacyDlpV2beta1Value
} 

declare interface dlp$GooglePrivacyDlpV2beta1ImageLocation {

/**
 * Height of the bounding box in pixels.
 */
height?: number,

/**
 * Left coordinate of the bounding box. (0,0) is upper left.
 */
left?: number,

/**
 * Top coordinate of the bounding box. (0,0) is upper left.
 */
top?: number,

/**
 * Width of the bounding box in pixels.
 */
width?: number
} 

declare interface dlp$GooglePrivacyDlpV2beta1ImageRedactionConfig {

/**
 * Only one per info_type should be provided per request. If not
 * specified, and redact_all_text is false, the DLP API will redact all
 * text that it matches against all info_types that are found, but not
 * specified in another ImageRedactionConfig.
 */
infoType?: dlp$GooglePrivacyDlpV2beta1InfoType,

/**
 * If true, all text found in the image, regardless whether it matches an
 * info_type, is redacted.
 */
redactAllText?: boolean,

/**
 * The color to use when redacting content from an image. If not specified,
 * the default is black.
 */
redactionColor?: dlp$GooglePrivacyDlpV2beta1Color
} 

declare interface dlp$GooglePrivacyDlpV2beta1InfoType {

/**
 * Name of the information type.
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1InfoTypeDescription {

/**
 * List of categories this infoType belongs to.
 */
categories?: dlp$GooglePrivacyDlpV2beta1CategoryDescription[],

/**
 * Human readable form of the infoType name.
 */
displayName?: string,

/**
 * Internal name of the infoType.
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1InfoTypeLimit {

/**
 * Type of information the findings limit applies to. Only one limit per
 * info_type should be provided. If InfoTypeLimit does not have an
 * info_type, the DLP API applies the limit against all info_types that are
 * found but not specified in another InfoTypeLimit.
 */
infoType?: dlp$GooglePrivacyDlpV2beta1InfoType,

/**
 * Max findings limit for the given infoType.
 */
maxFindings?: number
} 

declare interface dlp$GooglePrivacyDlpV2beta1InfoTypeStatistics {

/**
 * Number of findings for this info type.
 */
count?: string,

/**
 * The type of finding this stat is for.
 */
infoType?: dlp$GooglePrivacyDlpV2beta1InfoType
} 

declare interface dlp$GooglePrivacyDlpV2beta1InfoTypeTransformation {

/**
 * Info types to apply the transformation to. Empty list will match all
 * available info types for this transformation.
 */
infoTypes?: dlp$GooglePrivacyDlpV2beta1InfoType[],

/**
 * Primitive transformation to apply to the info type. [required]
 */
primitiveTransformation?: dlp$GooglePrivacyDlpV2beta1PrimitiveTransformation
} 

declare interface dlp$GooglePrivacyDlpV2beta1InfoTypeTransformations {

/**
 * Transformation for each info type. Cannot specify more than one
 * for a given info type. [required]
 */
transformations?: dlp$GooglePrivacyDlpV2beta1InfoTypeTransformation[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1InspectConfig {

/**
 * When true, excludes type information of the findings.
 */
excludeTypes?: boolean,

/**
 * When true, a contextual quote from the data that triggered a finding is
 * included in the response; see Finding.quote.
 */
includeQuote?: boolean,

/**
 * Configuration of findings limit given for specified info types.
 */
infoTypeLimits?: dlp$GooglePrivacyDlpV2beta1InfoTypeLimit[],

/**
 * Restricts what info_types to look for. The values must correspond to
 * InfoType values returned by ListInfoTypes or found in documentation.
 * Empty info_types runs all enabled detectors.
 */
infoTypes?: dlp$GooglePrivacyDlpV2beta1InfoType[],

/**
 * Limits the number of findings per content item or long running operation.
 */
maxFindings?: number,

/**
 * Only returns findings equal or above this threshold.
 */
minLikelihood?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1InspectContentRequest {

/**
 * Configuration for the inspector.
 */
inspectConfig?: dlp$GooglePrivacyDlpV2beta1InspectConfig,

/**
 * The list of items to inspect. Items in a single request are
 * considered "related" unless inspect_config.independent_inputs is true.
 * Up to 100 are allowed per request.
 */
items?: dlp$GooglePrivacyDlpV2beta1ContentItem[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1InspectContentResponse {

/**
 * Each content_item from the request has a result in this list, in the
 * same order as the request.
 */
results?: dlp$GooglePrivacyDlpV2beta1InspectResult[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1InspectOperationMetadata {

/**
 * The time which this request was started.
 */
createTime?: string,
infoTypeStats?: dlp$GooglePrivacyDlpV2beta1InfoTypeStatistics[],

/**
 * Total size in bytes that were processed.
 */
processedBytes?: string,

/**
 * The inspect config used to create the Operation.
 */
requestInspectConfig?: dlp$GooglePrivacyDlpV2beta1InspectConfig,

/**
 * Optional location to store findings.
 */
requestOutputConfig?: dlp$GooglePrivacyDlpV2beta1OutputStorageConfig,

/**
 * The storage config used to create the Operation.
 */
requestStorageConfig?: dlp$GooglePrivacyDlpV2beta1StorageConfig,

/**
 * Estimate of the number of bytes to process.
 */
totalEstimatedBytes?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1InspectOperationResult {

/**
 * The server-assigned name, which is only unique within the same service that
 * originally returns it. If you use the default HTTP mapping, the
 * `name` should have the format of `inspect/results/{id}`.
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1InspectResult {

/**
 * List of findings for an item.
 */
findings?: dlp$GooglePrivacyDlpV2beta1Finding[],

/**
 * If true, then this item might have more findings than were returned,
 * and the findings returned are an arbitrary subset of all findings.
 * The findings list might be truncated because the input items were too
 * large, or because the server reached the maximum amount of resources
 * allowed for a single API call. For best results, divide the input into
 * smaller batches.
 */
findingsTruncated?: boolean
} 

declare interface dlp$GooglePrivacyDlpV2beta1KAnonymityConfig {

/**
 * Optional message indicating that each distinct `EntityId` should not
 * contribute to the k-anonymity count more than once per equivalence class.
 */
entityId?: dlp$GooglePrivacyDlpV2beta1EntityId,

/**
 * Set of fields to compute k-anonymity over. When multiple fields are
 * specified, they are considered a single composite key. Structs and
 * repeated data types are not supported; however, nested fields are
 * supported so long as they are not structs themselves or nested within
 * a repeated field.
 */
quasiIds?: dlp$GooglePrivacyDlpV2beta1FieldId[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass {

/**
 * Size of the equivalence class, for example number of rows with the
 * above set of values.
 */
equivalenceClassSize?: string,

/**
 * Set of values defining the equivalence class. One value per
 * quasi-identifier column in the original KAnonymity metric message.
 * The order is always the same as the original request.
 */
quasiIdsValues?: dlp$GooglePrivacyDlpV2beta1Value[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1KAnonymityHistogramBucket {

/**
 * Total number of records in this bucket.
 */
bucketSize?: string,

/**
 * Sample of equivalence classes in this bucket. The total number of
 * classes returned per bucket is capped at 20.
 */
bucketValues?: dlp$GooglePrivacyDlpV2beta1KAnonymityEquivalenceClass[],

/**
 * Lower bound on the size of the equivalence classes in this bucket.
 */
equivalenceClassSizeLowerBound?: string,

/**
 * Upper bound on the size of the equivalence classes in this bucket.
 */
equivalenceClassSizeUpperBound?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1KAnonymityResult {

/**
 * Histogram of k-anonymity equivalence classes.
 */
equivalenceClassHistogramBuckets?: dlp$GooglePrivacyDlpV2beta1KAnonymityHistogramBucket[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1Key {

/**
 * Entities are partitioned into subsets, currently identified by a project
 * ID and namespace ID.
 * Queries are scoped to a single partition.
 */
partitionId?: dlp$GooglePrivacyDlpV2beta1PartitionId,

/**
 * The entity path.
 * An entity path consists of one or more elements composed of a kind and a
 * string or numerical identifier, which identify entities. The first
 * element identifies a _root entity_, the second element identifies
 * a _child_ of the root entity, the third element identifies a child of the
 * second entity, and so forth. The entities identified by all prefixes of
 * the path are called the element's _ancestors_.
 * 
 * A path can never be empty, and a path can have at most 100 elements.
 */
path?: dlp$GooglePrivacyDlpV2beta1PathElement[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1KindExpression {

/**
 * The name of the kind.
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1KmsWrappedCryptoKey {

/**
 * The resource name of the KMS CryptoKey to use for unwrapping. [required]
 */
cryptoKeyName?: string,

/**
 * The wrapped data crypto key. [required]
 */
wrappedKey?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1LDiversityConfig {

/**
 * Set of quasi-identifiers indicating how equivalence classes are
 * defined for the l-diversity computation. When multiple fields are
 * specified, they are considered a single composite key.
 */
quasiIds?: dlp$GooglePrivacyDlpV2beta1FieldId[],

/**
 * Sensitive field for computing the l-value.
 */
sensitiveAttribute?: dlp$GooglePrivacyDlpV2beta1FieldId
} 

declare interface dlp$GooglePrivacyDlpV2beta1LDiversityEquivalenceClass {

/**
 * Size of the k-anonymity equivalence class.
 */
equivalenceClassSize?: string,

/**
 * Number of distinct sensitive values in this equivalence class.
 */
numDistinctSensitiveValues?: string,

/**
 * Quasi-identifier values defining the k-anonymity equivalence
 * class. The order is always the same as the original request.
 */
quasiIdsValues?: dlp$GooglePrivacyDlpV2beta1Value[],

/**
 * Estimated frequencies of top sensitive values.
 */
topSensitiveValues?: dlp$GooglePrivacyDlpV2beta1ValueFrequency[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1LDiversityHistogramBucket {

/**
 * Total number of records in this bucket.
 */
bucketSize?: string,

/**
 * Sample of equivalence classes in this bucket. The total number of
 * classes returned per bucket is capped at 20.
 */
bucketValues?: dlp$GooglePrivacyDlpV2beta1LDiversityEquivalenceClass[],

/**
 * Lower bound on the sensitive value frequencies of the equivalence
 * classes in this bucket.
 */
sensitiveValueFrequencyLowerBound?: string,

/**
 * Upper bound on the sensitive value frequencies of the equivalence
 * classes in this bucket.
 */
sensitiveValueFrequencyUpperBound?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1LDiversityResult {

/**
 * Histogram of l-diversity equivalence class sensitive value frequencies.
 */
sensitiveValueFrequencyHistogramBuckets?: dlp$GooglePrivacyDlpV2beta1LDiversityHistogramBucket[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1ListInfoTypesResponse {

/**
 * Set of sensitive info types belonging to a category.
 */
infoTypes?: dlp$GooglePrivacyDlpV2beta1InfoTypeDescription[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1ListInspectFindingsResponse {

/**
 * If not empty, indicates that there may be more results that match the
 * request; this value should be passed in a new `ListInspectFindingsRequest`.
 */
nextPageToken?: string,

/**
 * The results.
 */
result?: dlp$GooglePrivacyDlpV2beta1InspectResult
} 

declare interface dlp$GooglePrivacyDlpV2beta1ListRootCategoriesResponse {

/**
 * List of all into type categories supported by the API.
 */
categories?: dlp$GooglePrivacyDlpV2beta1CategoryDescription[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1Location {

/**
 * Zero-based byte offsets within a content item.
 */
byteRange?: dlp$GooglePrivacyDlpV2beta1Range,

/**
 * Character offsets within a content item, included when content type
 * is a text. Default charset assumed to be UTF-8.
 */
codepointRange?: dlp$GooglePrivacyDlpV2beta1Range,

/**
 * Field id of the field containing the finding.
 */
fieldId?: dlp$GooglePrivacyDlpV2beta1FieldId,

/**
 * Location within an image's pixels.
 */
imageBoxes?: dlp$GooglePrivacyDlpV2beta1ImageLocation[],

/**
 * Key of the finding.
 */
recordKey?: dlp$GooglePrivacyDlpV2beta1RecordKey,

/**
 * Location within a `ContentItem.Table`.
 */
tableLocation?: dlp$GooglePrivacyDlpV2beta1TableLocation
} 

declare interface dlp$GooglePrivacyDlpV2beta1NumericalStatsConfig {

/**
 * Field to compute numerical stats on. Supported types are
 * integer, float, date, datetime, timestamp, time.
 */
field?: dlp$GooglePrivacyDlpV2beta1FieldId
} 

declare interface dlp$GooglePrivacyDlpV2beta1NumericalStatsResult {

/**
 * Maximum value appearing in the column.
 */
maxValue?: dlp$GooglePrivacyDlpV2beta1Value,

/**
 * Minimum value appearing in the column.
 */
minValue?: dlp$GooglePrivacyDlpV2beta1Value,

/**
 * List of 99 values that partition the set of field values into 100 equal
 * sized buckets.
 */
quantileValues?: dlp$GooglePrivacyDlpV2beta1Value[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1OperationConfig {

/**
 * Max number of findings per file, Datastore entity, or database row.
 */
maxItemFindings?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1OutputStorageConfig {

/**
 * The path to a Google Cloud Storage location to store output.
 * The bucket must already exist and
 * the Google APIs service account for DLP must have write permission to
 * write to the given bucket.
 * Results are split over multiple csv files with each file name matching
 * the pattern "[operation_id]_[count].csv", for example
 * `3094877188788974909_1.csv`. The `operation_id` matches the
 * identifier for the Operation, and the `count` is a counter used for
 * tracking the number of files written.
 * 
 * The CSV file(s) contain the following columns regardless of storage type
 * scanned:
 * - id
 * - info_type
 * - likelihood
 * - byte size of finding
 * - quote
 * - timestamp
 * 
 * For Cloud Storage the next columns are:
 * 
 * - file_path
 * - start_offset
 * 
 * For Cloud Datastore the next columns are:
 * 
 * - project_id
 * - namespace_id
 * - path
 * - column_name
 * - offset
 * 
 * For BigQuery the next columns are:
 * 
 * - row_number
 * - project_id
 * - dataset_id
 * - table_id
 */
storagePath?: dlp$GooglePrivacyDlpV2beta1CloudStoragePath,

/**
 * Store findings in a new table in the dataset.
 */
table?: dlp$GooglePrivacyDlpV2beta1BigQueryTable
} 

declare interface dlp$GooglePrivacyDlpV2beta1PartitionId {

/**
 * If not empty, the ID of the namespace to which the entities belong.
 */
namespaceId?: string,

/**
 * The ID of the project to which the entities belong.
 */
projectId?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1PathElement {

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

declare interface dlp$GooglePrivacyDlpV2beta1PrimitiveTransformation {
bucketingConfig?: dlp$GooglePrivacyDlpV2beta1BucketingConfig,
characterMaskConfig?: dlp$GooglePrivacyDlpV2beta1CharacterMaskConfig,
cryptoHashConfig?: dlp$GooglePrivacyDlpV2beta1CryptoHashConfig,
cryptoReplaceFfxFpeConfig?: dlp$GooglePrivacyDlpV2beta1CryptoReplaceFfxFpeConfig,
fixedSizeBucketingConfig?: dlp$GooglePrivacyDlpV2beta1FixedSizeBucketingConfig,
redactConfig?: any,
replaceConfig?: dlp$GooglePrivacyDlpV2beta1ReplaceValueConfig,
replaceWithInfoTypeConfig?: any,
timePartConfig?: dlp$GooglePrivacyDlpV2beta1TimePartConfig
} 

declare interface dlp$GooglePrivacyDlpV2beta1PrivacyMetric {
categoricalStatsConfig?: dlp$GooglePrivacyDlpV2beta1CategoricalStatsConfig,
kAnonymityConfig?: dlp$GooglePrivacyDlpV2beta1KAnonymityConfig,
lDiversityConfig?: dlp$GooglePrivacyDlpV2beta1LDiversityConfig,
numericalStatsConfig?: dlp$GooglePrivacyDlpV2beta1NumericalStatsConfig
} 

declare interface dlp$GooglePrivacyDlpV2beta1Projection {

/**
 * The property to project.
 */
property?: dlp$GooglePrivacyDlpV2beta1PropertyReference
} 

declare interface dlp$GooglePrivacyDlpV2beta1PropertyReference {

/**
 * The name of the property.
 * If name includes "."s, it may be interpreted as a property name path.
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1Range {

/**
 * Index of the last character of the range (exclusive).
 */
end?: string,

/**
 * Index of the first character of the range (inclusive).
 */
start?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1RecordCondition {
expressions?: dlp$GooglePrivacyDlpV2beta1Expressions
} 

declare interface dlp$GooglePrivacyDlpV2beta1RecordKey {
cloudStorageKey?: dlp$GooglePrivacyDlpV2beta1CloudStorageKey,
datastoreKey?: dlp$GooglePrivacyDlpV2beta1DatastoreKey
} 

declare interface dlp$GooglePrivacyDlpV2beta1RecordSuppression {
condition?: dlp$GooglePrivacyDlpV2beta1RecordCondition
} 

declare interface dlp$GooglePrivacyDlpV2beta1RecordTransformations {

/**
 * Transform the record by applying various field transformations.
 */
fieldTransformations?: dlp$GooglePrivacyDlpV2beta1FieldTransformation[],

/**
 * Configuration defining which records get suppressed entirely. Records that
 * match any suppression rule are omitted from the output [optional].
 */
recordSuppressions?: dlp$GooglePrivacyDlpV2beta1RecordSuppression[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1RedactContentRequest {

/**
 * The configuration for specifying what content to redact from images.
 */
imageRedactionConfigs?: dlp$GooglePrivacyDlpV2beta1ImageRedactionConfig[],

/**
 * Configuration for the inspector.
 */
inspectConfig?: dlp$GooglePrivacyDlpV2beta1InspectConfig,

/**
 * The list of items to inspect. Up to 100 are allowed per request.
 */
items?: dlp$GooglePrivacyDlpV2beta1ContentItem[],

/**
 * The strings to replace findings text findings with. Must specify at least
 * one of these or one ImageRedactionConfig if redacting images.
 */
replaceConfigs?: dlp$GooglePrivacyDlpV2beta1ReplaceConfig[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1RedactContentResponse {

/**
 * The redacted content.
 */
items?: dlp$GooglePrivacyDlpV2beta1ContentItem[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1ReplaceConfig {

/**
 * Type of information to replace. Only one ReplaceConfig per info_type
 * should be provided. If ReplaceConfig does not have an info_type, the DLP
 * API matches it against all info_types that are found but not specified in
 * another ReplaceConfig.
 */
infoType?: dlp$GooglePrivacyDlpV2beta1InfoType,

/**
 * Content replacing sensitive information of given type. Max 256 chars.
 */
replaceWith?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1ReplaceValueConfig {

/**
 * Value to replace it with.
 */
newValue?: dlp$GooglePrivacyDlpV2beta1Value
} 

declare interface dlp$GooglePrivacyDlpV2beta1RiskAnalysisOperationMetadata {

/**
 * The time which this request was started.
 */
createTime?: string,

/**
 * Privacy metric to compute.
 */
requestedPrivacyMetric?: dlp$GooglePrivacyDlpV2beta1PrivacyMetric,

/**
 * Input dataset to compute metrics over.
 */
requestedSourceTable?: dlp$GooglePrivacyDlpV2beta1BigQueryTable
} 

declare interface dlp$GooglePrivacyDlpV2beta1RiskAnalysisOperationResult {
categoricalStatsResult?: dlp$GooglePrivacyDlpV2beta1CategoricalStatsResult,
kAnonymityResult?: dlp$GooglePrivacyDlpV2beta1KAnonymityResult,
lDiversityResult?: dlp$GooglePrivacyDlpV2beta1LDiversityResult,
numericalStatsResult?: dlp$GooglePrivacyDlpV2beta1NumericalStatsResult
} 

declare interface dlp$GooglePrivacyDlpV2beta1Row {
values?: dlp$GooglePrivacyDlpV2beta1Value[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1StorageConfig {

/**
 * BigQuery options specification.
 */
bigQueryOptions?: dlp$GooglePrivacyDlpV2beta1BigQueryOptions,

/**
 * Google Cloud Storage options specification.
 */
cloudStorageOptions?: dlp$GooglePrivacyDlpV2beta1CloudStorageOptions,

/**
 * Google Cloud Datastore options specification.
 */
datastoreOptions?: dlp$GooglePrivacyDlpV2beta1DatastoreOptions
} 

declare interface dlp$GooglePrivacyDlpV2beta1SummaryResult {
code?: string,
count?: string,

/**
 * A place for warnings or errors to show up if a transformation didn't
 * work as expected.
 */
details?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1Table {
headers?: dlp$GooglePrivacyDlpV2beta1FieldId[],
rows?: dlp$GooglePrivacyDlpV2beta1Row[]
} 

declare interface dlp$GooglePrivacyDlpV2beta1TableLocation {

/**
 * The zero-based index of the row where the finding is located.
 */
rowIndex?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1TimePartConfig {
partToExtract?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1TransformationSummary {

/**
 * Set if the transformation was limited to a specific FieldId.
 */
field?: dlp$GooglePrivacyDlpV2beta1FieldId,

/**
 * The field transformation that was applied. This list will contain
 * multiple only in the case of errors.
 */
fieldTransformations?: dlp$GooglePrivacyDlpV2beta1FieldTransformation[],

/**
 * Set if the transformation was limited to a specific info_type.
 */
infoType?: dlp$GooglePrivacyDlpV2beta1InfoType,

/**
 * The specific suppression option these stats apply to.
 */
recordSuppress?: dlp$GooglePrivacyDlpV2beta1RecordSuppression,
results?: dlp$GooglePrivacyDlpV2beta1SummaryResult[],

/**
 * The specific transformation these stats apply to.
 */
transformation?: dlp$GooglePrivacyDlpV2beta1PrimitiveTransformation
} 

declare interface dlp$GooglePrivacyDlpV2beta1TransientCryptoKey {

/**
 * Name of the key. [required]
 * This is an arbitrary string used to differentiate different keys.
 * A unique key is generated per name: two separate `TransientCryptoKey`
 * protos share the same generated key if their names are the same.
 * When the data crypto key is generated, this name is not used in any way
 * (repeating the api call will result in a different key being generated).
 */
name?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1UnwrappedCryptoKey {

/**
 * The AES 128/192/256 bit key. [required]
 */
key?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1Value {
booleanValue?: boolean,
dateValue?: dlp$GoogleTypeDate,
floatValue?: number,
integerValue?: string,
stringValue?: string,
timeValue?: dlp$GoogleTypeTimeOfDay,
timestampValue?: string
} 

declare interface dlp$GooglePrivacyDlpV2beta1ValueFrequency {

/**
 * How many times the value is contained in the field.
 */
count?: string,

/**
 * A value contained in the field in question.
 */
value?: dlp$GooglePrivacyDlpV2beta1Value
} 

declare interface dlp$GoogleRpcStatus {

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

declare interface dlp$GoogleTypeDate {

/**
 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
 * if specifying a year/month where the day is not significant.
 */
day?: number,

/**
 * Month of year. Must be from 1 to 12.
 */
month?: number,

/**
 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
 * a year.
 */
year?: number
} 

declare interface dlp$GoogleTypeTimeOfDay {

/**
 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
 * to allow the value "24:00:00" for scenarios like business closing time.
 */
hours?: number,

/**
 * Minutes of hour of day. Must be from 0 to 59.
 */
minutes?: number,

/**
 * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
 */
nanos?: number,

/**
 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
 * allow the value 60 if it allows leap-seconds.
 */
seconds?: number
} 

declare interface dlp$ContentResource {

/**
 * De-identifies potentially sensitive info from a list of strings.
 * This method has limits on input size and output size.
 */
deidentify(
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
}): Request<dlp$GooglePrivacyDlpV2beta1DeidentifyContentResponse>,

/**
 * Finds potentially sensitive info in a list of strings.
 * This method has limits on input size, processing time, and output size.
 */
inspect(
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
}): Request<dlp$GooglePrivacyDlpV2beta1InspectContentResponse>,

/**
 * Redacts potentially sensitive info from a list of strings.
 * This method has limits on input size, processing time, and output size.
 */
redact(
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
}): Request<dlp$GooglePrivacyDlpV2beta1RedactContentResponse>
} 

declare interface dlp$DataSourceResource {

/**
 * Schedules a job to compute risk analysis metrics over content in a Google
 * Cloud Platform repository.
 */
analyze(
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
}): Request<dlp$GoogleLongrunningOperation>
} 

declare interface dlp$OperationsResource {

/**
 * Cancels an operation. Use the `inspect.operations.get` to check whether the cancellation succeeded or the operation completed despite cancellation.
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
 * Schedules a job scanning content in a Google Cloud Platform data
 * repository.
 */
create(
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
}): Request<dlp$GoogleLongrunningOperation>,

/**
 * This method is not supported and the server returns `UNIMPLEMENTED`.
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
}): Request<dlp$GoogleLongrunningOperation>,

/**
 * Fetches the list of long running operations.
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
 * Filters by `done`. That is, `done=true` or `done=false`.
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
 * The list page size. The maximum allowed value is 256 and the default is 100.
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
}): Request<dlp$GoogleLongrunningListOperationsResponse>,

/**
 * Cancels an operation. Use the `inspect.operations.get` to check whether the cancellation succeeded or the operation completed despite cancellation.
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
 * This method is not supported and the server returns `UNIMPLEMENTED`.
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
}): Request<dlp$GoogleLongrunningOperation>,

/**
 * Fetches the list of long running operations.
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
 * Filters by `done`. That is, `done=true` or `done=false`.
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
 * The list page size. The maximum allowed value is 256 and the default is 100.
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
}): Request<dlp$GoogleLongrunningListOperationsResponse>
} 

declare interface dlp$FindingsResource {

/**
 * Returns list of results for given inspect operation result set id.
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
 * Restricts findings to items that match. Supports info_type and likelihood.
 * 
 * Examples:
 * 
 * - info_type=EMAIL_ADDRESS
 * - info_type=PHONE_NUMBER,EMAIL_ADDRESS
 * - likelihood=VERY_LIKELY
 * - likelihood=VERY_LIKELY,LIKELY
 * - info_type=EMAIL_ADDRESS,likelihood=VERY_LIKELY,LIKELY
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Identifier of the results set returned as metadata of
 * the longrunning operation created by a call to InspectDataSource.
 * Should be in the format of `inspect/results/{id}`.
 */
name: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Maximum number of results to return.
 * If 0, the implementation selects a reasonable value.
 */
pageSize?: number,

/**
 * The value returned by the last `ListInspectFindingsResponse`; indicates
 * that this is a continuation of a prior `ListInspectFindings` call, and that
 * the system should return the next page of data.
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
}): Request<dlp$GooglePrivacyDlpV2beta1ListInspectFindingsResponse>
} 

declare interface dlp$ResultsResource {
findings: dlp$FindingsResource
} 

declare interface dlp$InspectResource {
operations: dlp$OperationsResource,
results: dlp$ResultsResource
} 

declare interface dlp$RiskAnalysisResource {
operations: dlp$OperationsResource
} 

declare interface dlp$InfoTypesResource {

/**
 * Returns sensitive information types for given category.
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
 * Category name as returned by ListRootCategories.
 */
category: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Optional BCP-47 language code for localized info type friendly
 * names. If omitted, or if localized strings are not available,
 * en-US strings will be returned.
 */
languageCode?: string,

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
}): Request<dlp$GooglePrivacyDlpV2beta1ListInfoTypesResponse>
} 

declare interface dlp$RootCategoriesResource {

/**
 * Returns the list of root categories of sensitive information.
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
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Optional language code for localized friendly category names.
 * If omitted or if localized strings are not available,
 * en-US strings will be returned.
 */
languageCode?: string,

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
}): Request<dlp$GooglePrivacyDlpV2beta1ListRootCategoriesResponse>,
infoTypes: dlp$InfoTypesResource
} 
    }
