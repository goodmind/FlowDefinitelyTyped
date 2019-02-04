declare module 'elasticsearch' {
        declare export class Client  {
constructor(params: ConfigOptions): this;
cat: Cat;
cluster: Cluster;
indices: Indices;
ingest: Ingest;
nodes: Nodes;
snapshot: Snapshot;
tasks: Tasks;
bulk(
params: BulkIndexDocumentsParams,
callback: (error: any, response: any) => void): void;
bulk(params: BulkIndexDocumentsParams): Promise<any>;
clearScroll(params: ClearScrollParams, callback: (error: any, response: any) => void): void;
clearScroll(params: ClearScrollParams): Promise<any>;
count(
params: CountParams,
callback: (error: any, response: CountResponse) => void): void;
count(params: CountParams): Promise<CountResponse>;
create(
params: CreateDocumentParams,
callback: (err: any, response: CreateDocumentResponse, status: any) => void): void;
create(params: CreateDocumentParams): Promise<CreateDocumentResponse>;
delete(
params: DeleteDocumentParams,
callback: (error: any, response: DeleteDocumentResponse) => void): void;
delete(params: DeleteDocumentParams): Promise<DeleteDocumentResponse>;
deleteByQuery(
params: DeleteDocumentByQueryParams,
callback: (error: any, response: DeleteDocumentByQueryResponse) => void): void;
deleteByQuery(params: DeleteDocumentByQueryParams): Promise<DeleteDocumentByQueryResponse>;
deleteScript(
params: DeleteScriptParams,
callback: (error: any, response: any) => void): void;
deleteScript(params: DeleteScriptParams): Promise<any>;
deleteTemplate(
params: DeleteTemplateParams,
callback: (error: any, response: any) => void): void;
deleteTemplate(params: DeleteTemplateParams): Promise<any>;
exists(
params: ExistsParams,
callback: (error: any, response: boolean, status?: any) => void): void;
exists(params: ExistsParams): Promise<boolean>;
explain(
params: ExplainParams,
callback: (error: any, response: ExplainResponse) => void): void;
explain(params: ExplainParams): Promise<ExplainResponse>;
fieldStats(
params: FieldStatsParams,
callback: (error: any, response: FieldStatsResponse) => void): void;
fieldStats(params: FieldStatsParams): Promise<FieldStatsResponse>;
get<T>(
params: GetParams,
callback: (error: any, response: GetResponse<T>) => void): void;
get<T>(params: GetParams): Promise<GetResponse<T>>;
getScript(params: GetScriptParams, callback: (error: any, response: any) => void): void;
getScript(params: GetScriptParams): Promise<any>;
getSource(params: GetSourceParams, callback: (error: any, response: any) => void): void;
getSource(params: GetSourceParams): Promise<any>;
getTemplate(params: GetTemplateParams, callback: (error: any, response: any) => void): void;
getTemplate(params: GetTemplateParams): Promise<any>;
index<T>(
params: IndexDocumentParams<T>,
callback: (error: any, response: any) => void): void;
index<T>(params: IndexDocumentParams<T>): Promise<any>;
info(params: InfoParams, callback: (error: any, response: any) => void): void;
info(params: InfoParams): Promise<any>;
mget<T>(
params: MGetParams,
callback: (error: any, response: MGetResponse<T>) => void): void;
mget<T>(params: MGetParams): Promise<MGetResponse<T>>;
msearch<T>(
params: MSearchParams,
callback: (error: any, response: MSearchResponse<T>) => void): void;
msearch<T>(params: MSearchParams): Promise<MSearchResponse<T>>;
msearchTemplate<T>(
params: MSearchTemplateParams,
callback: (error: any, response: MSearchResponse<T>) => void): void;
msearchTemplate<T>(params: MSearchTemplateParams): Promise<MSearchResponse<T>>;
mtermvectors(
params: MTermVectorsParams,
callback: (error: any, response: any) => void): void;
mtermvectors(params: MTermVectorsParams): Promise<any>;
ping(
params: PingParams,
callback: (err: any, response: any, status: any) => void): void;
ping(params: PingParams): Promise<any>;
putScript(
params: PutScriptParams,
callback: (err: any, response: any, status: any) => void): void;
putScript(params: PutScriptParams): Promise<any>;
putTemplate(
params: PutTemplateParams,
callback: (err: any, response: any, status: any) => void): void;
putTemplate(params: PutTemplateParams): Promise<any>;
reindex(
params: ReindexParams,
callback: (error: any, response: ReindexResponse) => void): void;
reindex(params: ReindexParams): Promise<ReindexResponse>;
reindexRethrottle(
params: ReindexRethrottleParams,
callback: (error: any, response: any) => void): void;
reindexRethrottle(params: ReindexRethrottleParams): Promise<any>;
renderSearchTemplate(
params: RenderSearchTemplateParams,
callback: (error: any, response: any) => void): void;
renderSearchTemplate(params: RenderSearchTemplateParams): Promise<any>;
scroll<T>(
params: ScrollParams,
callback: (error: any, response: SearchResponse<T>) => void): void;
scroll<T>(params: ScrollParams): Promise<SearchResponse<T>>;
search<T>(
params: SearchParams,
callback: (error: any, response: SearchResponse<T>) => void): void;
search<T>(params: SearchParams): Promise<SearchResponse<T>>;
searchShards(
params: SearchShardsParams,
callback: (error: any, response: SearchShardsResponse) => void): void;
searchShards(params: SearchShardsParams): Promise<SearchShardsResponse>;
searchTemplate(
params: SearchTemplateParams,
callback: (error: any, response: any) => void): void;
searchTemplate(params: SearchTemplateParams): Promise<any>;
suggest(params: SuggestParams, callback: (error: any, response: any) => void): void;
suggest(params: SuggestParams): Promise<any>;
termvectors(params: TermvectorsParams, callback: (error: any, response: any) => void): void;
termvectors(params: TermvectorsParams): Promise<any>;
update(
params: UpdateDocumentParams,
callback: (error: any, response: any) => void): void;
update(params: UpdateDocumentParams): Promise<any>;
updateByQuery(
params: UpdateDocumentByQueryParams,
callback: (error: any, response: UpdateDocumentByQueryResponse) => void): void;
updateByQuery(params: UpdateDocumentByQueryParams): Promise<UpdateDocumentByQueryResponse>;
close(): void
}
	declare export interface ConfigOptions {
host?: any,
hosts?: any,
httpAuth?: string,
log?: any,
apiVersion?: string,
plugins?: any,
sniffOnStart?: boolean,
sniffInterval?: number,
sniffOnConnectionFault?: boolean,
maxRetries?: number,
requestTimeout?: number,
deadTimeout?: number,
pingTimeout?: number,
keepAlive?: boolean,
maxSockets?: number,
suggestCompression?: boolean,
connectionClass?: string | typeof HttpConnector,
sniffedNodesProtocol?: string,
ssl?: {[key: string]: any},
selector?: any,
defer?: () => void,
nodesToHostCallback?: any,
createNodeAgent?: any
} 
	declare export interface Explanation {
value: number,
description: string,
details: Explanation[]
} 
	declare export interface GenericParams {
requestTimeout?: number,
maxRetries?: number,
method?: string,
body?: any,
ignore?: number | number[],
filterPath?: string | string[]
} 
	declare export interface ShardsResponse {
total: number,
successful: number,
failed: number,
skipped: number
} 
	
/**
 * A string of a number and a time unit.  A time unit is one of
 * [d, h, m, s, ms, micros, nanos].  eg: "30s" for 30 seconds.
 * These are incorrectly identified as `Date | number` in the docs as of 2016-11-15.
 */
declare export type TimeSpan = string;
	declare export type NameList = string | string[] | boolean;
	declare export type Refresh = boolean
| "true"
| "false"
| "wait_for"
| "";
	declare export type VersionType = "internal" | "external" | "external_gte" | "force";
	declare export type ExpandWildcards = "open" | "closed" | "none" | "all";
	declare export type DefaultOperator = "AND" | "OR";
	declare export type Conflicts = "abort" | "proceed";
	declare export type BulkIndexDocumentsParams = {
waitForActiveShards?: string,
refresh?: Refresh,
routing?: string,
timeout?: TimeSpan,
type?: string,
fields?: NameList,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
pipeline?: string,
index?: string
} & GenericParams

	declare export type ClearScrollParams = {
scrollId: NameList
} & GenericParams

	declare export type CountParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
minScore?: number,
preference?: string,
routing?: string,
q?: string,
analyzer?: string,
analyzeWildcard?: boolean,
defaultOperator?: DefaultOperator,
df?: string,
lenient?: boolean,
lowercaseExpandedTerms?: boolean,
index?: NameList,
type?: NameList
} & GenericParams

	declare export interface CountResponse {
count: number,
_shards: ShardsResponse
} 
	declare export type CreateDocumentParams = {
waitForActiveShards?: string,
parent?: string,
refresh?: Refresh,
routing?: string,
timeout?: TimeSpan,
timestamp?: Date | number,
ttl?: TimeSpan,
version?: number,
versionType?: VersionType,
pipeline?: string,
id?: string,
index: string,
type: string
} & GenericParams

	declare export interface CreateDocumentResponse {
_shards: ShardsResponse,
_index: string,
_type: string,
_id: string,
_version: number,
created: boolean,
result: string
} 
	declare export type DeleteDocumentParams = {
waitForActiveShards?: string,
parent?: string,
refresh?: Refresh,
routing?: string,
timeout?: TimeSpan,
version?: number,
versionType?: VersionType,
index: string,
type: string,
id: string
} & GenericParams

	declare export interface DeleteDocumentResponse {
_shards: ShardsResponse,
found: boolean,
_index: string,
_type: string,
_id: string,
_version: number,
result: string
} 
	declare export type DeleteDocumentByQueryParams = {
analyzer?: string,
analyzeWildcard?: boolean,
defaultOperator?: DefaultOperator,
df?: string,
from?: number,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
conflicts?: Conflicts,
expandWildcards?: ExpandWildcards,
lenient?: boolean,
lowercaseExpandedTerms?: boolean,
preference?: string,
q?: string,
routing?: string | string[] | boolean,
scroll?: string,
searchType?: "query_then_fetch" | "dfs_query_then_fetch",
searchTimeout?: TimeSpan,
size?: number,
sort?: NameList,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
terminateAfter?: number,
stats?: string | string[] | boolean,
version?: number,
requestCache?: boolean,
refresh?: Refresh,
timeout?: TimeSpan,
waitForActiveShards?: string,
scrollSize?: number,
waitForCompletion?: boolean,
requestsPerSecond?: number,
slices?: number,
index?: string,
type?: string
} & GenericParams

	declare export type DeleteDocumentByQueryResponse = {} & ReindexResponse

	declare export type DeleteScriptParams = {
id: string,
lang: string
} & GenericParams

	declare export type DeleteTemplateParams = {
id: string
} & GenericParams

	declare export type ExistsParams = {
parent?: string,
preference?: string,
realtime?: boolean,
refresh?: boolean,
routing?: string,
id: string,
index: string,
type: string
} & GenericParams

	declare export type ExplainParams = {
analyzeWildcard?: boolean,
analyzer?: string,
defaultOperator?: DefaultOperator,
df?: string,
storedFields?: NameList,
lenient?: boolean,
lowercaseExpandedTerms?: boolean,
parent?: string,
preference?: string,
q?: string,
routing?: string,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
id?: string,
index?: string,
type?: string
} & GenericParams

	declare export interface ExplainResponse {
_index: string,
_type: string,
_id: string,
matched: boolean,
explanation: ExplainResponseDetails
} 
	declare export interface ExplainResponseDetails {
value: number,
description: string,
details: ExplainResponseDetails[]
} 
	declare export type FieldStatsParams = {
fields?: NameList,
level?: "indices" | "cluster",
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index?: NameList
} & GenericParams

	declare export interface FieldStatsResponse {
_shards: ShardsResponse,
indices: {
[indexName: string]: FieldStatsResponseIndex
},
conflicts?: {
[fieldName: string]: string
}
} 
	declare export interface FieldStatsResponseIndex {
fields: {
[fieldName: string]: FieldStatsResponseField
}
} 
	declare export interface FieldStatsResponseField {
max_doc: number,
doc_count: number,
density: number,
sum_doc_freq: number,
sum_total_term_freq: number,
min_value: any,
max_value: any,
is_searchable: string,
is_aggregatable: string
} 
	declare export type GetParams = {
storedFields?: NameList,
parent?: string,
preference?: string,
realtime?: boolean,
refresh?: boolean,
routing?: string,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
version?: number,
versionType?: VersionType,
id: string,
index: string,
type: string
} & GenericParams

	declare export interface GetResponse<T> {
_index: string,
_type: string,
_id: string,
_version: number,
_routing?: string,
found: boolean,
_source: T
} 
	declare export type GetScriptParams = {
id: string,
lang: string
} & GenericParams

	declare export type GetSourceParams = {
preference?: string,
realtime?: boolean,
refresh?: boolean,
routing?: string,
_source: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
version?: number,
versionType?: VersionType,
id: string,
index: string,
type: string
} & GenericParams

	declare export type GetTemplateParams = {
id: string
} & GenericParams

	declare export type IndexDocumentParams<T> = {
waitForActiveShards?: string,
opType?: "index" | "create",
parent?: string,
refresh?: Refresh,
routing?: string,
timeout?: TimeSpan,
timestamp?: Date | number,
ttl?: TimeSpan,
version?: number,
versionType?: VersionType,
pipeline?: string,
id?: string,
index: string,
type: string,
body: T
} & GenericParams

	declare export type InfoParams = {} & GenericParams

	declare export type MGetParams = {
storedFields?: NameList,
preference?: string,
realtime?: boolean,
refresh?: boolean,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
index?: string,
type?: string
} & GenericParams

	declare export interface MGetResponse<T> {
docs?: Array<GetResponse<T>>
} 
	declare export type MSearchParams = {
search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch",
maxConcurrentSearches?: number,
index?: NameList,
type?: NameList
} & GenericParams

	declare export interface MSearchResponse<T> {
responses?: Array<SearchResponse<T>>
} 
	declare export type MSearchTemplateParams = {
search_type?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch",
index?: NameList,
type?: NameList
} & GenericParams

	declare export type MTermVectorsParams = {
ids?: NameList,
termStatistics?: boolean,
fieldStatistics?: boolean,
fields?: NameList,
offsets?: boolean,
positions?: boolean,
payloads?: boolean,
preference?: string,
routing?: string,
parent?: string,
realtime?: boolean,
version?: number,
versionType?: VersionType,
index: string,
type: string
} & GenericParams

	declare export type PingParams = {} & GenericParams

	declare export type PutScriptParams = {
id: string,
lang: string,
body: any
} & GenericParams

	declare export type PutTemplateParams = {
id: string,
body: any
} & GenericParams

	declare export type ReindexParams = {
refresh?: boolean,
timeout?: TimeSpan,
waitForActiveShards?: string,
waitForCompletion?: boolean,
requestsPerSecond?: number,
slices?: number,
body: {
conflicts?: string,
source: {
index: string | string[],
type?: string | string[],
query?: any,
sort?: any,
size?: number,
remote?: {
host: string,
username?: string,
password?: string
}
},
dest: {
index: string,
version_type?: string,
op_type?: string,
routing?: string,
pipeline?: string
},
script?: {
inline: string,
lang: string
}
}
} & GenericParams

	declare export type ReindexRethrottleParams = {
requestsPerSecond: number,
taskId: string
} & GenericParams

	declare export type RenderSearchTemplateParams = {
id: string
} & GenericParams

	declare export type ScrollParams = {
scroll: TimeSpan,
scrollId: string
} & GenericParams

	declare export type SearchParams = {
analyzer?: string,
analyzeWildcard?: boolean,
defaultOperator?: DefaultOperator,
df?: string,
explain?: boolean,
storedFields?: NameList,
docvalueFields?: NameList,
fielddataFields?: NameList,
from?: number,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
lenient?: boolean,
lowercaseExpandedTerms?: boolean,
preference?: string,
q?: string,
routing?: NameList,
scroll?: TimeSpan,
searchType?: "query_then_fetch" | "dfs_query_then_fetch",
size?: number,
sort?: NameList,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
terminateAfter?: number,
stats?: NameList,
suggestField?: string,
suggestMode?: "missing" | "popular" | "always",
suggestSize?: number,
suggestText?: string,
timeout?: TimeSpan,
trackScores?: boolean,
version?: boolean,
requestCache?: boolean,
index?: NameList,
type?: NameList
} & GenericParams

	declare export interface SearchResponse<T> {
took: number,
timed_out: boolean,
_scroll_id?: string,
_shards: ShardsResponse,
hits: {
total: number,
max_score: number,
hits: Array<{
_index: string,
_type: string,
_id: string,
_score: number,
_source: T,
_version?: number,
_explanation?: Explanation,
fields?: any,
highlight?: any,
inner_hits?: any,
matched_queries?: string[],
sort?: string[]
}>
},
aggregations?: any
} 
	declare export type SearchShardsParams = {
preference?: string,
routing?: string,
local?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index: NameList,
type: NameList
} & GenericParams

	declare export interface SearchShardsResponse {
nodes: any,
shards: SearchShardsResponseShard[][]
} 
	declare export interface SearchShardsResponseShard {
index: string,
node: string,
primary: boolean,
share: number,
state: string,
allocation_id: {
id: string
},
relocating_node: any
} 
	declare export type SearchTemplateParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
preference?: string,
routing?: NameList,
scroll?: TimeSpan,
searchType?: "query_then_fetch" | "query_and_fetch" | "dfs_query_then_fetch" | "dfs_query_and_fetch",
index: NameList,
type: NameList
} & GenericParams

	declare export type SuggestParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
preference?: string,
routing?: string,
index: NameList
} & GenericParams

	declare export type TermvectorsParams = {
termStatistics?: boolean,
fieldStatistics?: boolean,
fields?: NameList,
offsets?: boolean,
positions?: boolean,
payloads?: boolean,
preference?: string,
routing?: string,
parent?: string,
realtime?: boolean,
version?: number,
versionType?: VersionType,
index: string,
type: string,
id?: string
} & GenericParams

	declare export type UpdateDocumentParams = {
waitForActiveShards?: string,
fields?: NameList,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
lang?: string,
parent?: string,
refresh?: Refresh,
retryOnConflict?: number,
routing?: string,
timeout?: TimeSpan,
timestamp?: Date | number,
ttl?: TimeSpan,
version?: number,
versionType?: "internal" | "force",
id: string,
index: string,
type: string
} & GenericParams

	declare export type UpdateDocumentByQueryParams = {
analyzer?: string,
analyzeWildcard?: boolean,
defaultOperator?: DefaultOperator,
df?: string,
explain?: boolean,
storedFields?: NameList,
docvalueFields?: NameList,
fielddataFields?: NameList,
from?: number,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
conflicts?: Conflicts,
expandWildcards?: ExpandWildcards,
lenient?: boolean,
lowercaseExpandedTerms?: boolean,
pipeline?: string,
preference?: string,
q?: string,
routing?: NameList,
scroll?: TimeSpan,
searchType?: "query_then_fetch" | "dfs_query_then_fetch",
searchTimeout?: TimeSpan,
size?: number,
sort?: NameList,
_source?: NameList,
_sourceExclude?: NameList,
_sourceInclude?: NameList,
terminateAfter?: number,
stats?: NameList,
suggestField?: string,
suggestMode?: "missing" | "popular" | "always",
suggestSize?: number,
suggestText?: string,
timeout?: TimeSpan,
trackScores?: boolean,
version?: boolean,
versionType?: boolean,
requestCache?: boolean,
refresh?: boolean,
waitForActiveShards?: string,
scrollSize?: number,
waitForCompletion?: boolean,
requestsPerSecond?: number,
slices?: number,
index: NameList,
type: NameList
} & GenericParams

	declare export type UpdateDocumentByQueryResponse = {} & ReindexResponse

	declare export type ReindexResponse = {
took: number,
timed_out: boolean,
failures: any[],
slices?: ReindexOrByQueryResponseSlice[]
} & ReindexResponseBase

	declare export type ReindexOrByQueryResponseSlice = {
slice_id: number
} & ReindexResponseBase

	declare export interface ReindexResponseBase {
total: number,
updated: number,
deleted: number,
batches: number,
version_conflicts: number,
noops: number,
retries: {
bulk: number,
search: number
},
throttled_millis: number,
requests_per_second: number,
throttled_until_millis: number
} 
	declare export interface Cat {
aliases(params: CatAliasesParams, callback: (error: any, response: any) => void): void,
aliases(params: CatAliasesParams): Promise<any>,
allocation(
params: CatAllocationParams,
callback: (error: any, response: any) => void): void,
allocation(params: CatAllocationParams): Promise<any>,
count(params: CatCountParams, callback: (error: any, response: any) => void): void,
count(params: CatAllocationParams): Promise<any>,
fielddata(
params: CatFielddataParams,
callback: (error: any, response: any) => void): void,
fielddata(params: CatFielddataParams): Promise<any>,
health(params: CatHealthParams, callback: (error: any, response: any) => void): void,
health(params: CatHealthParams): Promise<any>,
help(params: CatHelpParams, callback: (error: any, response: any) => void): void,
help(params: CatHelpParams): Promise<any>,
indices(params: CatIndicesParams, callback: (error: any, response: any) => void): void,
indices(params: CatIndicesParams): Promise<any>,
master(params: CatCommonParams, callback: (error: any, response: any) => void): void,
master(params: CatCommonParams): Promise<any>,
nodeattrs(params: CatCommonParams, callback: (error: any, response: any) => void): void,
nodeattrs(params: CatCommonParams): Promise<any>,
nodes(params: CatCommonParams, callback: (error: any, response: any) => void): void,
nodes(params: CatCommonParams): Promise<any>,
pendingTasks(params: CatCommonParams, callback: (error: any, response: any) => void): void,
pendingTasks(params: CatCommonParams): Promise<any>,
plugins(params: CatCommonParams, callback: (error: any, response: any) => void): void,
plugins(params: CatCommonParams): Promise<any>,
recovery(params: CatRecoveryParams, callback: (error: any, response: any) => void): void,
recovery(params: CatRecoveryParams): Promise<any>,
repositories(params: CatCommonParams, callback: (error: any, response: any) => void): void,
repositories(params: CatCommonParams): Promise<any>,
segments(params: CatSegmentsParams, callback: (error: any, response: any) => void): void,
segments(params: CatSegmentsParams): Promise<any>,
shards(params: CatShardsParams, callback: (error: any, response: any) => void): void,
shards(params: CatShardsParams): Promise<any>,
snapshots(
params: CatSnapshotsParams,
callback: (error: any, response: any) => void): void,
snapshots(params: CatSnapshotsParams): Promise<any>,
tasks(params: CatTasksParams, callback: (error: any, response: any) => void): void,
tasks(params: CatTasksParams): Promise<any>,
threadPool(
params: CatThreadPoolParams,
callback: (error: any, response: any) => void): void,
threadPool(params: CatThreadPoolParams): Promise<any>
} 
	declare export type CatBytes = "b"
| "k"
| "kb"
| "m"
| "mb"
| "g"
| "gb"
| "t"
| "tb"
| "p"
| "pb";
	declare export type CatCommonParams = {
format: string,
local?: boolean,
masterTimeout?: TimeSpan,
h?: NameList,
help?: boolean,
v?: boolean
} & GenericParams

	declare export type CatAliasesParams = {
name?: NameList
} & CatCommonParams

	declare export type CatAllocationParams = {
bytes?: CatBytes,
nodeId?: NameList
} & CatCommonParams

	declare export type CatCountParams = {
index?: NameList
} & CatCommonParams

	declare export type CatFielddataParams = {
bytes?: CatBytes,
fields?: NameList
} & CatCommonParams

	declare export type CatHealthParams = {
ts?: boolean
} & CatCommonParams

	declare export type CatHelpParams = {
help?: boolean
} & GenericParams

	declare export type CatIndicesParams = {
bytes?: CatBytes,
health?: "green" | "yellow" | "red",
pri?: boolean,
index?: NameList
} & CatCommonParams

	declare export type CatRecoveryParams = {
format: string,
bytes?: CatBytes,
masterTimeout?: TimeSpan,
h?: NameList,
help?: boolean,
v?: boolean
} & GenericParams

	declare export type CatSegmentsParams = {
format: string,
h?: NameList,
help?: boolean,
v?: boolean,
index?: NameList
} & GenericParams

	declare export type CatShardsParams = {
index?: NameList
} & CatCommonParams

	declare export type CatSnapshotsParams = {
format: string,
ignoreUnavailable?: boolean,
masterTimeout?: TimeSpan,
h?: NameList,
help?: boolean,
v?: boolean,
repository?: NameList
} & GenericParams

	declare export type CatTasksParams = {
format: string,
nodeId?: NameList,
actions?: NameList,
detailed?: boolean,
parentNode?: string,
parentTask?: number,
h?: NameList,
help?: boolean,
v?: boolean
} & GenericParams

	declare export type CatThreadPoolParams = {
size?: ""
| "k"
| "m"
| "g"
| "t"
| "p",
threadPoolPatterns?: NameList
} & CatCommonParams

	declare export interface Cluster {
allocationExplain(
params: ClusterAllocationExplainParams,
callback: (error: any, response: any) => void): void,
allocationExplain(params: ClusterAllocationExplainParams): Promise<any>,
getSettings(
params: ClusterGetSettingsParams,
callback: (error: any, response: any) => void): void,
getSettings(params: ClusterGetSettingsParams): Promise<any>,
health(
params: ClusterHealthParams,
callback: (error: any, response: any) => void): void,
health(params: ClusterHealthParams): Promise<any>,
pendingTasks(
params: ClusterPendingTasksParams,
callback: (error: any, response: any) => void): void,
pendingTasks(params: ClusterPendingTasksParams): Promise<any>,
putSettings(
params: ClusterPutSettingsParams,
callback: (error: any, response: any) => void): void,
putSettings(params: ClusterPutSettingsParams): Promise<any>,
reroute(
params: ClusterRerouteParams,
callback: (error: any, response: any) => void): void,
reroute(params: ClusterRerouteParams): Promise<any>,
state(
params: ClusterStateParams,
callback: (error: any, response: any) => void): void,
state(params: ClusterStateParams): Promise<any>,
stats(
params: ClusterStatsParams,
callback: (error: any, response: any) => void): void,
stats(params: ClusterStatsParams): Promise<any>
} 
	declare export type ClusterAllocationExplainParams = {
includeYesDecisions?: boolean,
includeDiskInfo?: boolean
} & GenericParams

	declare export type ClusterGetSettingsParams = {
flatSettings?: boolean,
masterTimeout?: TimeSpan,
timeout?: TimeSpan,
includeDefaults?: boolean
} & GenericParams

	declare export type ClusterHealthParams = {
level?: "cluster" | "indices" | "shards",
local?: boolean,
masterTimeout?: TimeSpan,
waitForActiveShards?: string,
waitForNodes?: string,
waitForEvents?: "immediate"
| "urgent"
| "high"
| "normal"
| "low"
| "languid",
waitForRelocatingShards?: boolean,
waitForStatus?: "green" | "yellow" | "red",
index?: NameList
} & GenericParams

	declare export type ClusterPendingTasksParams = {
local?: boolean,
masterTimeout?: TimeSpan
} & GenericParams

	declare export type ClusterPutSettingsParams = {
flatSettings?: boolean,
masterTimeout?: TimeSpan,
timeout?: TimeSpan
} & GenericParams

	declare export type ClusterRerouteParams = {
dryRun?: boolean,
explain?: boolean,
retryFailed?: boolean,
metric?: NameList,
masterTimeout?: TimeSpan,
timeout?: TimeSpan
} & GenericParams

	declare export type ClusterStateParams = {
local?: boolean,
masterTimeout?: TimeSpan,
flatSettings?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index?: NameList,
metric?: NameList
} & GenericParams

	declare export type ClusterStatsParams = {
flatSettings?: boolean,
human?: boolean,
timeout?: TimeSpan,
nodeId?: NameList
} & GenericParams

	declare export class Indices  {
analyze(
params: IndicesAnalyzeParams,
callback: (error: any, response: any, status: any) => void): void;
analyze(params: IndicesAnalyzeParams): Promise<any>;
clearCache(
params: IndicesClearCacheParams,
callback: (error: any, response: any, status: any) => void): void;
clearCache(params: IndicesClearCacheParams): Promise<any>;
close(
params: IndicesCloseParams,
callback: (error: any, response: any, status: any) => void): void;
close(params: IndicesCloseParams): Promise<any>;
create(
params: IndicesCreateParams,
callback: (error: any, response: any, status: any) => void): void;
create(params: IndicesCreateParams): Promise<any>;
delete(
params: IndicesDeleteParams,
callback: (error: any, response: any, status: any) => void): void;
delete(params: IndicesDeleteParams): Promise<any>;
deleteAlias(
params: IndicesDeleteAliasParams,
callback: (error: any, response: any, status: any) => void): void;
deleteAlias(params: IndicesDeleteAliasParams): Promise<any>;
deleteTemplate(
params: IndicesDeleteTemplateParams,
callback: (error: any, response: any, status: any) => void): void;
deleteTemplate(params: IndicesDeleteTemplateParams): Promise<any>;
exists(
params: IndicesExistsParams,
callback: (error: any, response: boolean, status: any) => void): void;
exists(params: IndicesExistsParams): Promise<boolean>;
existsAlias(
params: IndicesExistsAliasParams,
callback: (error: any, response: boolean, status: any) => void): void;
existsAlias(params: IndicesExistsAliasParams): Promise<boolean>;
existsTemplate(
params: IndicesExistsTemplateParams,
callback: (error: any, response: boolean, status: any) => void): void;
existsTemplate(params: IndicesExistsTemplateParams): Promise<boolean>;
existsType(
params: IndicesExistsTypeParams,
callback: (error: any, response: boolean, status: any) => void): void;
existsType(params: IndicesExistsTypeParams): Promise<boolean>;
flush(
params: IndicesFlushParams,
callback: (error: any, response: any, status: any) => void): void;
flush(params: IndicesFlushParams): Promise<any>;
flushSynced(
params: IndicesFlushSyncedParams,
callback: (error: any, response: any, status: any) => void): void;
flushSynced(params: IndicesFlushSyncedParams): Promise<any>;
forcemerge(
params: IndicesForcemergeParams,
callback: (error: any, response: any, status: any) => void): void;
forcemerge(params: IndicesForcemergeParams): Promise<any>;
get(
params: IndicesGetParams,
callback: (error: any, response: any, status: any) => void): void;
get(params: IndicesGetParams): Promise<any>;
getAlias(
params: IndicesGetAliasParams,
callback: (error: any, response: any, status: any) => void): void;
getAlias(params: IndicesGetAliasParams): Promise<any>;
getFieldMapping(
params: IndicesGetFieldMappingParams,
callback: (error: any, response: any, status: any) => void): void;
getFieldMapping(params: IndicesGetFieldMappingParams): Promise<any>;
getMapping(
params: IndicesGetMappingParams,
callback: (error: any, response: any, status: any) => void): void;
getMapping(params: IndicesGetMappingParams): Promise<any>;
getSettings(
params: IndicesGetSettingsParams,
callback: (error: any, response: any, status: any) => void): void;
getSettings(params: IndicesGetSettingsParams): Promise<any>;
getTemplate(
params: IndicesGetTemplateParams,
callback: (error: any, response: any, status: any) => void): void;
getTemplate(params: IndicesGetTemplateParams): Promise<any>;
getUpgrade(
params: IndicesGetUpgradeParams,
callback: (error: any, response: any, status: any) => void): void;
getUpgrade(params: IndicesGetUpgradeParams): Promise<any>;
open(
params: IndicesOpenParams,
callback: (error: any, response: any, status: any) => void): void;
open(params: IndicesOpenParams): Promise<any>;
putAlias(
params: IndicesPutAliasParams,
callback: (error: any, response: any, status: any) => void): void;
putAlias(params: IndicesPutAliasParams): Promise<any>;
putMapping(
params: IndicesPutMappingParams,
callback: (error: any, response: any, status: any) => void): void;
putMapping(params: IndicesPutMappingParams): Promise<any>;
putSettings(
params: IndicesPutSettingsParams,
callback: (error: any, response: any, status: any) => void): void;
putSettings(params: IndicesPutSettingsParams): Promise<any>;
putTemplate(
params: IndicesPutTemplateParams,
callback: (error: any, response: any) => void): void;
putTemplate(params: IndicesPutTemplateParams): Promise<any>;
recovery(
params: IndicesRecoveryParams,
callback: (error: any, response: any) => void): void;
recovery(params: IndicesRecoveryParams): Promise<any>;
refresh(
params: IndicesRefreshParams,
callback: (error: any, response: any) => void): void;
refresh(params: IndicesRefreshParams): Promise<any>;
rollover(
params: IndicesRolloverParams,
callback: (error: any, response: IndicesRolloverResponse) => void): void;
rollover(params: IndicesRolloverParams): Promise<IndicesRolloverResponse>;
segments(
params: IndicesSegmentsParams,
callback: (error: any, response: any) => void): void;
segments(params: IndicesSegmentsParams): Promise<any>;
shardStores(
params: IndicesShardStoresParams,
callback: (error: any, response: any) => void): void;
shardStores(params: IndicesShardStoresParams): Promise<any>;
shrink(
params: IndicesShrinkParams,
callback: (error: any, response: any) => void): void;
shrink(params: IndicesShrinkParams): Promise<any>;
stats(
params: IndicesStatsParams,
callback: (error: any, response: any) => void): void;
stats(params: IndicesStatsParams): Promise<any>;
updateAliases(
params: IndicesUpdateAliasesParams,
callback: (error: any, response: any) => void): void;
updateAliases(params: IndicesUpdateAliasesParams): Promise<any>;
upgrade(
params: IndicesUpgradeParams,
callback: (error: any, response: any) => void): void;
upgrade(params: IndicesUpgradeParams): Promise<any>;
validateQuery(
params: IndicesValidateQueryParams,
callback: (error: any, response: any) => void): void;
validateQuery(params: IndicesValidateQueryParams): Promise<any>
}
	declare export type IndicesAnalyzeParams = {
analyzer?: string,
charFilter?: NameList,
field?: string,
filter?: NameList,
index?: string,
perferLocal?: boolean,
text?: NameList,
tokenizer?: string,
explain?: boolean,
attributes?: NameList,
format?: ""
} & GenericParams

	declare export type IndicesClearCacheParams = {
fieldData?: boolean,
fielddata?: boolean,
fields?: NameList,
query?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index?: NameList,
recycler?: boolean,
request?: boolean
} & GenericParams

	declare export type IndicesCloseParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index: NameList
} & GenericParams

	declare export type IndicesCreateParams = {
waitForActiveShards?: string,
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
updateAllTypes?: boolean,
index: string
} & GenericParams

	declare export type IndicesDeleteParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
index: NameList,
ignoreUnavailable?: boolean
} & GenericParams

	declare export type IndicesDeleteAliasParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
index: NameList,
name: NameList
} & GenericParams

	declare export type IndicesDeleteTemplateParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
name: string
} & GenericParams

	declare export type IndicesExistsParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
local?: boolean,
index: NameList
} & GenericParams

	declare export type IndicesExistsAliasParams = {
name: NameList
} & IndicesExistsParams

	declare export type IndicesExistsTemplateParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
name: NameList
} & GenericParams

	declare export type IndicesExistsTypeParams = {
type: NameList
} & IndicesExistsParams

	declare export type IndicesFlushParams = {
force?: boolean,
waitIfOngoing?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index: NameList
} & GenericParams

	declare export type IndicesFlushSyncedParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index: NameList
} & GenericParams

	declare export type IndicesForcemergeParams = {
flush?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
maxNumSegments?: number,
onlyExpungeDeletes?: boolean,
operationThreading?: any,
waitForMerge?: boolean,
index: NameList
} & GenericParams

	declare export type IndicesGetParams = {
local?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
flatSettings?: boolean,
human?: boolean,
includeDefaults?: boolean,
index?: NameList,
feature?: NameList
} & GenericParams

	declare export type IndicesGetAliasParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
local?: boolean,
index?: NameList,
name?: NameList
} & GenericParams

	declare export type IndicesGetFieldMappingParams = {
includeDefaults?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
local?: boolean,
index?: NameList,
type?: NameList,
fields?: NameList
} & GenericParams

	declare export type IndicesGetMappingParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
local?: boolean,
index?: NameList,
type?: NameList
} & GenericParams

	declare export type IndicesGetSettingsParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
flatSettings?: boolean,
local?: boolean,
human?: boolean,
includeDefaults?: boolean,
index?: NameList,
name?: NameList
} & GenericParams

	declare export type IndicesGetTemplateParams = {
flatSettings?: boolean,
masterTimeout?: TimeSpan,
local?: boolean,
name?: NameList
} & GenericParams

	declare export type IndicesGetUpgradeParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
human?: boolean,
index?: NameList
} & GenericParams

	declare export type IndicesOpenParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
index?: NameList
} & GenericParams

	declare export type IndicesPutAliasParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
index?: NameList,
name: NameList
} & GenericParams

	declare export type IndicesPutMappingParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
updateAllTypes?: boolean,
index: NameList,
type: string,
body: any
} & GenericParams

	declare export type IndicesPutSettingsParams = {
masterTimeout?: TimeSpan,
preserveExisting?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
flatSettings?: boolean,
index: NameList,
body: any
} & GenericParams

	declare export type IndicesPutTemplateParams = {
order?: number,
create?: boolean,
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
flatSettings?: boolean,
name: string,
body: any
} & GenericParams

	declare export type IndicesRecoveryParams = {
detailed?: boolean,
activeOnly?: boolean,
human?: boolean,
index: NameList
} & GenericParams

	declare export type IndicesRefreshParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
force?: boolean,
operationThreading?: any,
index: NameList
} & GenericParams

	declare export type IndicesRolloverParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
waitForActiveShards?: number | string,
alias?: string,
newIndex?: string
} & GenericParams

	declare export interface IndicesRolloverResponse {
acknowledged: boolean,
shards_acknowledged: boolean,
old_index: string,
new_index: string,
rolled_over: boolean,
dry_run: boolean,
conditions: {
[condition: string]: boolean
}
} 
	declare export type IndicesSegmentsParams = {
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
human?: boolean,
operationThreading?: any,
verbose?: boolean,
index: NameList
} & GenericParams

	declare export type IndicesShardStoresParams = {
status?: NameList,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
operationThreading?: any,
index: NameList
} & GenericParams

	declare export type IndicesShrinkParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
waitForActiveShards?: string | number,
index: string,
target: string
} & GenericParams

	declare export type IndicesStatsParams = {
completionFields?: NameList,
fielddataFields?: NameList,
fields?: NameList,
groups?: NameList,
human?: boolean,
level?: "cluster" | "indices" | "shards",
types?: NameList,
index: NameList,
metric?: NameList
} & GenericParams

	declare export type IndicesUpdateAliasesParams = {
timeout?: TimeSpan,
masterTimeout?: TimeSpan,
body: {
actions: IndicesUpdateAliasesParamsAction[]
}
} & GenericParams

	declare export interface IndicesUpdateAliasesParamsAction {
add?: {
index?: string,
indices?: string[],
alias: string,
routing?: string,
filter?: {[key: string]: any}
},
remove?: {
index?: string,
indices?: string[],
alias: string
},
remove_index?: {
index: string
}
} 
	declare export type IndicesUpgradeParams = {
expandWildcards?: ExpandWildcards,
ignoreUnavailable?: boolean,
waitForCompletion?: boolean,
onlyAncientSegments?: boolean,
index: NameList
} & GenericParams

	declare export type IndicesValidateQueryParams = {
explain?: boolean,
ignoreUnavailable?: boolean,
allowNoIndices?: boolean,
expandWildcards?: ExpandWildcards,
operationThreading?: any,
q?: string,
analyzer?: string,
analyzeWildcard?: boolean,
defaultOperator?: DefaultOperator,
df?: string,
lenient?: boolean,
lowercaseExpandedTerms?: boolean,
rewrite?: boolean,
index: NameList,
type?: NameList
} & GenericParams

	declare export class Ingest  {
deletePipeline(
params: IngestDeletePipelineParams,
callback: (error: any, response: any, status: any) => void): void;
deletePipeline(params: IngestDeletePipelineParams): Promise<any>;
getPipeline(
params: IngestGetPipelineParams,
callback: (error: any, response: any, status: any) => void): void;
getPipeline(params: IngestGetPipelineParams): Promise<any>;
putPipeline(
params: IngestPutPipelineParams,
callback: (error: any, response: any, status: any) => void): void;
putPipeline(params: IngestPutPipelineParams): Promise<any>;
simulate(
params: IngestSimulateParams,
callback: (error: any, response: any, status: any) => void): void;
simulate(params: IngestSimulateParams): Promise<any>
}
	declare export type IngestDeletePipelineParams = {
masterTimeout?: number,
timeout?: number,
id: string
} & GenericParams

	declare export type IngestGetPipelineParams = {
masterTimeout?: number,
id: string
} & GenericParams

	declare export type IngestPutPipelineParams = {
masterTimeout?: number,
timeout?: number,
id: string,
body: any
} & GenericParams

	declare export type IngestSimulateParams = {
verbose?: boolean,
id: string
} & GenericParams

	declare export class Nodes  {
hotThreads(
params: NodesHotThreadsParams,
callback: (error: any, response: any, status: any) => void): void;
hotThreads(params: NodesHotThreadsParams): Promise<any>;
info(
params: NodesInfoParams,
callback: (error: any, response: any, status: any) => void): void;
info(params: NodesInfoParams): Promise<any>;
stats(
params: NodesStatsParams,
callback: (error: any, response: any, status: any) => void): void;
stats(params: NodesStatsParams): Promise<any>
}
	declare export type NodesHotThreadsParams = {
interval?: TimeSpan,
snapshots?: number,
threads?: number,
ignoreIdleThreads?: boolean,
type?: "cpu" | "wait" | "blocked",
timeout?: TimeSpan,
nodeId: NameList
} & GenericParams

	declare export type NodesInfoParams = {
flatSettings?: boolean,
human?: boolean,
timeout?: TimeSpan,
nodeId: NameList,
metric?: NameList
} & GenericParams

	declare export type NodesStatsParams = {
completionFields?: NameList,
fielddataFields?: NameList,
fields?: NameList,
groups?: boolean,
human?: boolean,
level?: "indices" | "node" | "shards",
types?: NameList,
timeout?: TimeSpan,
metric?: NameList,
indexMetric?: NameList,
nodeId?: NameList
} & GenericParams

	declare export class Snapshot  {
create(
params: SnapshotCreateParams,
callback: (error: any, response: any, status: any) => void): void;
create(params: SnapshotCreateParams): Promise<any>;
createRepository(
params: SnapshotCreateRepositoryParams,
callback: (error: any, response: any, status: any) => void): void;
createRepository(params: SnapshotCreateRepositoryParams): Promise<any>;
delete(
params: SnapshotDeleteParams,
callback: (error: any, response: any, status: any) => void): void;
delete(params: SnapshotDeleteParams): Promise<any>;
deleteRepository(
params: SnapshotDeleteRepositoryParams,
callback: (error: any, response: any, status: any) => void): void;
deleteRepository(params: SnapshotDeleteRepositoryParams): Promise<any>;
get(
params: SnapshotGetParams,
callback: (error: any, response: any, status: any) => void): void;
get(params: SnapshotGetParams): Promise<any>;
getRepository(
params: SnapshotGetRepositoryParams,
callback: (error: any, response: any, status: any) => void): void;
getRepository(params: SnapshotGetRepositoryParams): Promise<any>;
restore(
params: SnapshotRestoreParams,
callback: (error: any, response: any, status: any) => void): void;
restore(params: SnapshotRestoreParams): Promise<any>;
status(
params: SnapshotStatusParams,
callback: (error: any, response: any, status: any) => void): void;
status(params: SnapshotStatusParams): Promise<any>;
verifyRepository(
params: SnapshotVerifyRepositoryParams,
callback: (error: any, response: any, status: any) => void): void;
verifyRepository(params: SnapshotVerifyRepositoryParams): Promise<any>
}
	declare export type SnapshotCreateParams = {
masterTimeout?: TimeSpan,
waitForCompletion?: boolean,
repository: string,
snapshot: string
} & GenericParams

	declare export type SnapshotCreateRepositoryParams = {
masterTimeout?: TimeSpan,
timeout?: TimeSpan,
verify?: boolean,
repository: string
} & GenericParams

	declare export type SnapshotDeleteParams = {
masterTimeout?: TimeSpan,
repository: string,
snapshot: string
} & GenericParams

	declare export type SnapshotDeleteRepositoryParams = {
masterTimeout?: TimeSpan,
timeout?: TimeSpan,
repository: string
} & GenericParams

	declare export type SnapshotGetParams = {
masterTimeout?: TimeSpan,
ignoreUnavailable?: boolean,
repository: string,
snapshot: NameList
} & GenericParams

	declare export type SnapshotGetRepositoryParams = {
masterTimeout?: TimeSpan,
local?: boolean,
repository: NameList
} & GenericParams

	declare export type SnapshotRestoreParams = {
masterTimeout?: TimeSpan,
waitForCompletion?: boolean,
repository: string,
snapshot: string
} & GenericParams

	declare export type SnapshotStatusParams = {
masterTimeout?: TimeSpan,
ignoreUnavailable?: boolean,
repository: string,
snapshot: NameList
} & GenericParams

	declare export type SnapshotVerifyRepositoryParams = {
masterTimeout?: TimeSpan,
timeout?: TimeSpan,
repository: string
} & GenericParams

	declare export class Tasks  {
cancel(
params: TasksCancelParams,
callback: (error: any, response: any, status: any) => void): void;
cancel(params: TasksCancelParams): Promise<any>;
get(
params: TasksGetParams,
callback: (error: any, response: any, status: any) => void): void;
get(params: TasksGetParams): Promise<any>;
list(
params: TasksListParams,
callback: (error: any, response: any, status: any) => void): void;
list(params: TasksListParams): Promise<any>
}
	declare export type TasksCancelParams = {
nodeId?: NameList,
actions?: NameList,
parentNode?: string,
parentTask?: string,
taskId?: string
} & GenericParams

	declare export type TasksGetParams = {
waitForCompletion?: boolean,
taskId?: string
} & GenericParams

	declare export type TasksListParams = {
nodeId?: NameList,
actions?: NameList,
detailed?: boolean,
parentNode?: string,
parentTask?: string,
waitForCompletion?: boolean,
groupBy?: "nodes" | "parents"
} & GenericParams

	declare class errors$_Abstract mixins Error {}

declare class errors$Generic mixins errors$_Abstract {}

declare class errors$ConnectionFault mixins errors$_Abstract {}

declare class errors$NoConnections mixins errors$_Abstract {}

declare class errors$Serialization mixins errors$_Abstract {}

declare class errors$RequestTypeError mixins errors$_Abstract {}

declare class errors$AuthenticationException mixins errors$_Abstract {}

declare class errors$AuthorizationException mixins errors$_Abstract {}

declare class errors$BadGateway mixins errors$_Abstract {}

declare class errors$BadRequest mixins errors$_Abstract {}

declare class errors$BlockedByWindowsParentalControls mixins errors$_Abstract {}

declare class errors$ClientClosedRequest mixins errors$_Abstract {}

declare class errors$Conflict mixins errors$_Abstract {}

declare class errors$ExpectationFailed mixins errors$_Abstract {}

declare class errors$GatewayTimeout mixins errors$_Abstract {}

declare class errors$HTTPToHTTPS mixins errors$_Abstract {}

declare class errors$HTTPVersionNotSupported mixins errors$_Abstract {}

declare class errors$ImATeapot mixins errors$_Abstract {}

declare class errors$InternalServerError mixins errors$_Abstract {}

declare class errors$LengthRequired mixins errors$_Abstract {}

declare class errors$MethodNotAllowed mixins errors$_Abstract {}

declare class errors$MovedPermanently mixins errors$_Abstract {}

declare class errors$MultipleChoices mixins errors$_Abstract {}

declare class errors$NotAcceptable mixins errors$_Abstract {}

declare class errors$NotExtended mixins errors$_Abstract {}

declare class errors$NotFound mixins errors$_Abstract {}

declare class errors$NotImplemented mixins errors$_Abstract {}

declare class errors$NotModified mixins errors$_Abstract {}

declare class errors$PaymentRequired mixins errors$_Abstract {}

declare class errors$PermanentRedirect mixins errors$_Abstract {}

declare class errors$PreconditionFailed mixins errors$_Abstract {}

declare class errors$ProxyAuthenticationRequired mixins errors$_Abstract {}

declare class errors$RequestedRangeNotSatisfiable mixins errors$_Abstract {}

declare class errors$RequestEntityTooLarge mixins errors$_Abstract {}

declare class errors$RequestHeaderTooLarge mixins errors$_Abstract {}

declare class errors$RequestTimeout mixins errors$_Abstract {}

declare class errors$RequestURITooLong mixins errors$_Abstract {}

declare class errors$SeeOther mixins errors$_Abstract {}

declare class errors$ServiceUnavailable mixins errors$_Abstract {}

declare class errors$TemporaryRedirect mixins errors$_Abstract {}

declare class errors$TooManyConnectionsFromThisIP mixins errors$_Abstract {}

declare class errors$TooManyRequests mixins errors$_Abstract {}

declare class errors$UnsupportedMediaType mixins errors$_Abstract {}

declare class errors$UpgradeRequired mixins errors$_Abstract {}

declare class errors$UseProxy mixins errors$_Abstract {}

declare class errors$VariantAlsoNegotiates mixins errors$_Abstract {}
    }
