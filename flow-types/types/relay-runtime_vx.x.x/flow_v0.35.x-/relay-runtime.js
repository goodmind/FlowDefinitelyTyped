declare module 'relay-runtime' {
        
/**
 * SOURCE:
 * Relay 1.3.0
 * https://github.com/facebook/relay/blob/b85a1d69bb72be4ace67179f55c2a54a8d761c8b/packages/react-relay/classic/environment/RelayCombinedEnvironmentTypes.js
 */
declare export type RelayConcreteNode = any;
	declare export type RelayMutationTransaction = any;
	declare export type RelayMutationRequest = any;
	declare export type RelayQueryRequest = any;
	declare export type ConcreteFragmentDefinition = {[key: string]: any};
	declare export type ConcreteOperationDefinition = {[key: string]: any};
	declare export type ReaderFragment = {[key: string]: any};
	
/**
 * FIXME: RelayContainer used to be typed with ReactClass<any>, but
 * ReactClass is broken and allows for access to any property. For example
 * ReactClass<any>.getFragment('foo') is valid even though ReactClass has no
 * such getFragment() type definition. When ReactClass is fixed this causes a
 * lot of errors in Relay code since methods like getFragment() are used often
 * but have no definition in Relay's types. Suppressing for now.
 */
declare export type RelayContainer = any;
	declare export type ConcreteFragment = any;
	declare export type ConcreteRequest = any;
	declare export type ConcreteBatchRequest = any;
	declare export type RequestNode = ConcreteRequest | ConcreteBatchRequest;
	declare export  class FragmentReference {
  constructor(...args: empty): mixed;

}


	declare export interface OperationBase {
variables: {[key: string]: any},
response: {[key: string]: any}
} 
	declare export interface OperationDefaults {
variables: Variables,
response: Variables
} 
	declare export var ROOT_ID: string;
	declare export type RelayQL = (strings: string[], ...substitutions: any[]) => RelayConcreteNode;
	declare export interface GeneratedNodeMap {
[key: string]: GraphQLTaggedNode
} 
	declare export type GraphQLTaggedNode = (() => ConcreteFragment | RequestNode) | {
modern(): ConcreteFragment | RequestNode,
classic(relayQL: RelayQL): ConcreteFragmentDefinition | ConcreteOperationDefinition
};
	declare export type DataID = string;
	declare export interface Variables {
[name: string]: any
} 
	declare export type Uploadable = File | Blob;
	declare export interface UploadableMap {
[key: string]: Uploadable
} 
	declare export interface LegacyObserver<T> {
onCompleted(): void,
onError(error: Error): void,
onNext(data: T): void
} 
	declare export interface PayloadError {
message: string,
locations?: Array<{
line: number,
column: number
}>
} 
	
/**
 * A function that executes a GraphQL operation with request/response semantics.
 * 
 * May return an Observable or Promise of a raw server response.
 */
declare export type FetchFunction = (
operation: RequestNode,
variables: Variables,
cacheConfig: CacheConfig,
uploadables?: UploadableMap) => ObservableFromValue<QueryPayload>;
	
/**
 * A function that executes a GraphQL subscription operation, returning one or
 * more raw server responses over time.
 * 
 * May return an Observable, otherwise must call the callbacks found in the
 * fourth parameter.
 */
declare export type SubscribeFunction = (
operation: RequestNode,
variables: Variables,
cacheConfig: CacheConfig,
observer: LegacyObserver<QueryPayload>) => RelayObservable<QueryPayload> | Disposable;
	
/**
 * A cache for storing query responses, featuring:
 * - `get` with TTL
 * - cache size limiting, with least-recently *updated* entries purged first
 */
declare export class QueryResponseCache  {
constructor(options: {
size: number,
ttl: number
}): this;
clear(): void;
get(queryID: string, variables: Variables): QueryPayload | null;
set(queryID: string, variables: Variables, payload: QueryPayload): void
}
	
/**
 * A function that receives a proxy over the store and may trigger side-effects
 * (indirectly) by calling `set*` methods on the store or its record proxies.
 */
declare export type StoreUpdater = (store: RecordSourceProxy) => void;
	
/**
 * Similar to StoreUpdater, but accepts a proxy tied to a specific selector in
 * order to easily access the root fields of a query/mutation as well as a
 * second argument of the response object of the mutation.
 */
declare export type SelectorStoreUpdater<T> = (store: RecordSourceSelectorProxy, data: T) => void;
	
/**
 * Extends the RecordSourceProxy interface with methods for accessing the root
 * fields of a Selector.
 */
declare export interface RecordSourceSelectorProxy {
create(dataID: DataID, typeName: string): RecordProxy,
delete(dataID: DataID): void,
get(dataID: DataID): RecordProxy | null,
getRoot(): RecordProxy,
getRootField(fieldName: string): RecordProxy | null,
getPluralRootField(fieldName: string): RecordProxy[] | null
} 
	declare export interface RecordProxy {
copyFieldsFrom(source: RecordProxy): void,
getDataID(): DataID,
getLinkedRecord(name: string, args?: Variables): RecordProxy | null,
getLinkedRecords(name: string, args?: Variables): $ReadOnlyArray<RecordProxy | null> | null,
getOrCreateLinkedRecord(name: string, typeName: string, args?: Variables): RecordProxy,
getType(): string,
getValue(name: string, args?: Variables): any,
setLinkedRecord(record: RecordProxy, name: string, args?: Variables): RecordProxy,
setLinkedRecords(
records: Array<RecordProxy | null> | void | null,
name: string,
args?: Variables): RecordProxy,
setValue(value: any, name: string, args?: Variables): RecordProxy
} 
	declare export interface RecordSourceProxy {
create(dataID: DataID, typeName: string): RecordProxy,
delete(dataID: DataID): void,
get(dataID: DataID): RecordProxy | null,
getRoot(): RecordProxy
} 
	declare export interface HandleFieldPayload {
args: Variables,
dataID: DataID,
fieldKey: string,
handle: string,
handleKey: string
} 
	declare export interface HandlerInterface {
update(store: RecordSourceProxy, fieldPayload: HandleFieldPayload): void,
[functionName: string]: (...args: any[]) => any
} 
	declare export var ConnectionHandler: HandlerInterface;
	declare export var ViewerHandler: HandlerInterface;
	
/**
 * Settings for how a query response may be cached.
 * 
 * - `force`: causes a query to be issued unconditionally, irrespective of the
 *    state of any configured response cache.
 * - `poll`: causes a query to live update by polling at the specified interval
 *    in milliseconds. (This value will be passed to setTimeout.)
 */
declare export interface CacheConfig {
force?: boolean,
poll?: number
} 
	
/**
 * Represents any resource that must be explicitly disposed of. The most common
 * use-case is as a return value for subscriptions, where calling `dispose()`
 * would cancel the subscription.
 */
declare export interface Disposable {
dispose(): void
} 
	
/**
 * Arbitrary data e.g. received by a container as props.
 */
declare export interface Props {
[key: string]: any
} 
	
/**
 * A selector defines the starting point for a traversal into the graph for the
 * purposes of targeting a subgraph.
 */
declare export interface CSelector<TNode> {
dataID: DataID,
node: TNode,
variables: Variables
} 
	
/**
 * A representation of a selector and its results at a particular point in time.
 */
declare export type CSnapshot<TNode> = CSelector<TNode> & {
data: SelectorData | null | void,
seenRecords: RecordMap
};
	
/**
 * The results of a selector given a store/RecordSource.
 */
declare export interface SelectorData {
[key: string]: any
} 
	
/**
 * The results of reading the results of a FragmentMap given some input
 * `Props`.
 */
declare export interface FragmentSpecResults {
[key: string]: any
} 
	
/**
 * A utility for resolving and subscribing to the results of a fragment spec
 * (key -> fragment mapping) given some "props" that determine the root ID
 * and variables to use when reading each fragment. When props are changed via
 * `setProps()`, the resolver will update its results and subscriptions
 * accordingly. Internally, the resolver:
 * - Converts the fragment map & props map into a map of `Selector`s.
 * - Removes any resolvers for any props that became null.
 * - Creates resolvers for any props that became non-null.
 * - Updates resolvers with the latest props.
 */
declare export interface FragmentSpecResolver {

/**
 * Stop watching for changes to the results of the fragments.
 */
dispose(): void,

/**
 * Get the current results.
 */
resolve(): FragmentSpecResults,

/**
 * Update the resolver with new inputs. Call `resolve()` to get the updated
 * results.
 */
setProps(props: Props): void,

/**
 * Override the variables used to read the results of the fragments. Call
 * `resolve()` to get the updated results.
 */
setVariables(variables: Variables): void
} 
	declare export interface CFragmentMap<TFragment> {
[key: string]: TFragment
} 
	
/**
 * An operation selector describes a specific instance of a GraphQL operation
 * with variables applied.
 * 
 * - `root`: a selector intended for processing server results or retaining
 *    response data in the store.
 * - `fragment`: a selector intended for use in reading or subscribing to
 *    the results of the the operation.
 */
declare export interface COperationSelector<TNode, TOperation> {
fragment: CSelector<TNode>,
node: TOperation,
root: CSelector<TNode>,
variables: Variables
} 
	
/**
 * The public API of Relay core. Represents an encapsulated environment with its
 * own in-memory cache.
 */
declare export interface CEnvironment<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation, TPayload> {

/**
 * Read the results of a selector from in-memory records in the store.
 */
lookup(selector: CSelector<TNode>): CSnapshot<TNode>,

/**
 * Subscribe to changes to the results of a selector. The callback is called
 * when data has been committed to the store that would cause the results of
 * the snapshot's selector to change.
 */
subscribe(
snapshot: CSnapshot<TNode>,
callback: (snapshot: CSnapshot<TNode>) => void): Disposable,

/**
 * Ensure that all the records necessary to fulfill the given selector are
 * retained in-memory. The records will not be eligible for garbage collection
 * until the returned reference is disposed.
 * 
 * Note: This is a no-op in the classic core.
 */
retain(selector: CSelector<TNode>): Disposable,

/**
 * Send a query to the server with request/response semantics: the query will
 * either complete successfully (calling `onNext` and `onCompleted`) or fail
 * (calling `onError`).
 * 
 * Note: Most applications should use `streamQuery` in order to
 * optionally receive updated information over time, should that feature be
 * supported by the network/server. A good rule of thumb is to use this method
 * if you would otherwise immediately dispose the `streamQuery()`
 * after receving the first `onNext` result.
 */
sendQuery(
config: {
cacheConfig?: CacheConfig,
onCompleted(): void,
onError(error: Error): void,
onNext(payload: TPayload): void,
operation: COperationSelector<TNode, TOperation>
}): Disposable,

/**
 * Send a query to the server with request/subscription semantics: one or more
 * responses may be returned (via `onNext`) over time followed by either
 * the request completing (`onCompleted`) or an error (`onError`).
 * 
 * Networks/servers that support subscriptions may choose to hold the
 * subscription open indefinitely such that `onCompleted` is not called.
 */
streamQuery(
config: {
cacheConfig?: CacheConfig,
onCompleted(): void,
onError(error: Error): void,
onNext(payload: TPayload): void,
operation: COperationSelector<TNode, TOperation>
}): Disposable,
unstable_internal: CUnstableEnvironmentCore<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation>
} 
	declare export interface CUnstableEnvironmentCore<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation> {

/**
 * Create an instance of a FragmentSpecResolver.
 * 
 * TODO: The FragmentSpecResolver *can* be implemented via the other methods
 * defined here, so this could be moved out of core. It's convenient to have
 * separate implementations until the experimental core is in OSS.
 */
createFragmentSpecResolver(
context: CRelayContext<TEnvironment>,
containerName: string,
fragments: CFragmentMap<TFragment>,
props: Props,
callback: () => void): FragmentSpecResolver,

/**
 * Creates an instance of an OperationSelector given an operation definition
 * (see `getOperation`) and the variables to apply. The input variables are
 * filtered to exclude variables that do not matche defined arguments on the
 * operation, and default values are populated for null values.
 */
createOperationSelector(
operation: TOperation,
variables: Variables): COperationSelector<TNode, TOperation>,

/**
 * Given a graphql`...` tagged template, extract a fragment definition usable
 * by this version of Relay core. Throws if the value is not a fragment.
 */
getFragment(node: TGraphQLTaggedNode): TFragment,

/**
 * Given a graphql`...` tagged template, extract an operation definition
 * usable by this version of Relay core. Throws if the value is not an
 * operation.
 */
getOperation(node: TGraphQLTaggedNode): TOperation,

/**
 * Determine if two selectors are equal (represent the same selection). Note
 * that this function returns `false` when the two queries/fragments are
 * different objects, even if they select the same fields.
 */
areEqualSelectors(a: CSelector<TNode>, b: CSelector<TNode>): boolean,

/**
 * Given the result `item` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment for that item.
 * 
 * Example:
 * 
 * Given two fragments as follows:
 * 
 * ```
 *      * fragment Parent on User {
 *      *   id
 *      *   ...Child
 *      * }
 *      * fragment Child on User {
 *      *   name
 *      * }
 *      * ```
 * 
 * And given some object `parent` that is the results of `Parent` for id "4",
 * the results of `Child` can be accessed by first getting a selector and then
 * using that selector to `lookup()` the results against the environment:
 * 
 * ```
 *      * const childSelector = getSelector(queryVariables, Child, parent);
 *      * const childData = environment.lookup(childSelector).data;
 *      * ```
 */
getSelector(
operationVariables: Variables,
fragment: TFragment,
prop: any): CSelector<TNode> | null,

/**
 * Given the result `items` from a parent that fetched `fragment`, creates a
 * selector that can be used to read the results of that fragment on those
 * items. This is similar to `getSelector` but for "plural" fragments that
 * expect an array of results and therefore return an array of selectors.
 */
getSelectorList(
operationVariables: Variables,
fragment: TFragment,
props: any[]): Array<CSelector<TNode>> | null,

/**
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the selectors for those fragments from the results.
 * 
 * The canonical use-case for this function are Relay Containers, which
 * use this function to convert (props, fragments) into selectors so that they
 * can read the results to pass to the inner component.
 */
getSelectorsFromObject(
operationVariables: Variables,
fragments: CFragmentMap<TFragment>,
props: Props): {
[key: string]: CSelector<TNode> | Array<CSelector<TNode>> | null | void
},

/**
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts a mapping of keys -> id(s) of the results.
 * 
 * Similar to `getSelectorsFromObject()`, this function can be useful in
 * determining the "identity" of the props passed to a component.
 */
getDataIDsFromObject(
fragments: CFragmentMap<TFragment>,
props: Props): {
[key: string]: DataID | DataID[] | null | void
},

/**
 * Given a mapping of keys -> results and a mapping of keys -> fragments,
 * extracts the merged variables that would be in scope for those
 * fragments/results.
 * 
 * This can be useful in determing what varaibles were used to fetch the data
 * for a Relay container, for example.
 */
getVariablesFromObject(
operationVariables: Variables,
fragments: CFragmentMap<TFragment>,
props: Props): Variables
} 
	
/**
 * The type of the `relay` property set on React context by the React/Relay
 * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
 */
declare export interface CRelayContext<TEnvironment> {
environment: TEnvironment,
variables: Variables
} 
	
/**
 * Version: Relay 1.3.0
 * File:
 * https://github.com/facebook/relay/blob/fa9f48ea209ee2402d433b59a84d1cbc046574e2/packages/react-relay/classic/tools/RelayTypes.js
 */
declare export interface RerunParam {
param: string,
import: string,
max_runs: number
} 
	declare export interface FIELDS_CHANGE {
type: "FIELDS_CHANGE",
fieldIDs: {
[fieldName: string]: DataID | DataID[]
}
} 
	declare export interface RANGE_ADD {
type: "RANGE_ADD",
parentName?: string,
parentID?: string,
connectionInfo?: Array<{
key: string,
filters?: Variables,
rangeBehavior: string
}>,
connectionName?: string,
edgeName: string,
rangeBehaviors?: RangeBehaviors
} 
	declare export interface NODE_DELETE {
type: "NODE_DELETE",
parentName?: string,
parentID?: string,
connectionName?: string,
deletedIDFieldName: string
} 
	declare export interface RANGE_DELETE {
type: "RANGE_DELETE",
parentName?: string,
parentID?: string,
connectionKeys?: Array<{
key: string,
filters?: Variables
}>,
connectionName?: string,
deletedIDFieldName: string | string[],
pathToConnection: string[]
} 
	declare export interface REQUIRED_CHILDREN {
type: "REQUIRED_CHILDREN",
children: RelayConcreteNode[]
} 
	declare export type RelayMutationConfig = FIELDS_CHANGE
| RANGE_ADD
| NODE_DELETE
| RANGE_DELETE
| REQUIRED_CHILDREN;
	declare export interface RelayMutationTransactionCommitCallbacks {
onFailure?: RelayMutationTransactionCommitFailureCallback,
onSuccess?: RelayMutationTransactionCommitSuccessCallback
} 
	declare export type RelayMutationTransactionCommitFailureCallback = (transaction: RelayMutationTransaction, preventAutoRollback: () => void) => void;
	declare export type RelayMutationTransactionCommitSuccessCallback = (response: {
[key: string]: any
}) => void;
	declare export interface NetworkLayer {
sendMutation(request: RelayMutationRequest): Promise<any> | null,
sendQueries(requests: RelayQueryRequest[]): Promise<any> | null,
supports(...options: string[]): boolean
} 
	declare export interface QueryResult {
error?: Error,
ref_params?: {
[name: string]: any
},
response: QueryPayload
} 
	declare export interface ReadyState {
aborted: boolean,
done: boolean,
error: Error | null,
events: ReadyStateEvent[],
ready: boolean,
stale: boolean
} 
	declare export type RelayContainerErrorEventType = "CACHE_RESTORE_FAILED" | "NETWORK_QUERY_ERROR";
	declare export type RelayContainerLoadingEventType = "ABORT"
| "CACHE_RESTORED_REQUIRED"
| "CACHE_RESTORE_START"
| "NETWORK_QUERY_RECEIVED_ALL"
| "NETWORK_QUERY_RECEIVED_REQUIRED"
| "NETWORK_QUERY_START"
| "STORE_FOUND_ALL"
| "STORE_FOUND_REQUIRED";
	declare export type ReadyStateChangeCallback = (readyState: ReadyState) => void;
	declare export interface ReadyStateEvent {
type: RelayContainerLoadingEventType | RelayContainerErrorEventType,
error?: Error
} 
	declare export interface Abortable {
abort(): void
} 
	
/**
 * Version: Relay 1.3.0
 * File:
 * https://github.com/facebook/relay/blob/master/packages/react-relay/classic/tools/RelayInternalTypes.js
 */
declare export interface QueryPayload {
[key: string]: any
} 
	declare export interface RelayQuerySet {
[queryName: string]: any
} 
	declare export type RangeBehaviorsFunction = (
connectionArgs: {
[argName: string]: any
}) => "APPEND"
| "IGNORE"
| "PREPEND"
| "REFETCH"
| "REMOVE";
	declare export interface RangeBehaviorsObject {
[key: string]: "APPEND"
| "IGNORE"
| "PREPEND"
| "REFETCH"
| "REMOVE"
} 
	declare export type RangeBehaviors = RangeBehaviorsFunction | RangeBehaviorsObject;
	declare export type RelayDebugger = any;
	declare export type OptimisticUpdate = any;
	declare export type OperationSelector = COperationSelector<any, any>;
	declare export type Selector = CSelector<any>;
	declare export type PayloadData = any;
	declare export type Snapshot = CSnapshot<any>;
	declare export type RelayResponsePayload = any;
	declare export type MutableRecordSource = RecordSource;
	
/**
 * A function that returns an Observable representing the response of executing
 * a GraphQL operation.
 */
declare export type ExecuteFunction = (
operation: {[key: string]: any},
variables: Variables,
cacheConfig: CacheConfig,
uploadables?: UploadableMap) => Promise<any>;
	declare export interface RelayNetwork {
execute: ExecuteFunction
} 
	declare export type HandlerProvider = (name: string) => HandlerInterface | null;
	declare export interface EnvironmentConfig {
configName?: string,
handlerProvider?: HandlerProvider,
network: Network,
store: Store
} 
	declare export class Environment  {
constructor(config: EnvironmentConfig): this;
getStore(): Store;
getDebugger(): RelayDebugger;
applyUpdate(optimisticUpdate: OptimisticUpdate): Disposable;
revertUpdate(update: OptimisticUpdate): void;
replaceUpdate(update: OptimisticUpdate, newUpdate: OptimisticUpdate): void;
applyMutation(
config: {
operation: OperationSelector,
optimisticUpdater?: SelectorStoreUpdater,
optimisticResponse?: {[key: string]: any}
}): Disposable;
check(readSelector: Selector): boolean;
commitPayload(operationSelector: OperationSelector, payload: PayloadData): void;
commitUpdate(updater: StoreUpdater): void;
lookup(readSelector: Selector): Snapshot;
subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
retain(selector: Selector): Disposable;
execute(
config: {
operation: OperationSelector,
cacheConfig?: CacheConfig,
updater?: SelectorStoreUpdater
}): RelayObservable<RelayResponsePayload>;
executeMutation(
config: {
operation: OperationSelector,
optimisticUpdater?: SelectorStoreUpdater,
optimisticResponse?: {[key: string]: any},
updater?: SelectorStoreUpdater,
uploadables?: UploadableMap
}): RelayObservable<RelayResponsePayload>
}
	declare export interface RelayInMemoryRecordSource {
[key: string]: any
} 
	declare export interface RecordMap {
[dataID: string]: RelayInMemoryRecordSource | null | void
} 
	declare export class Network  {

/**
 * Creates an implementation of the `Network` interface defined in
 * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
 */
static create(fetchFn: FetchFunction, subscribeFn?: SubscribeFunction): RelayNetwork
}
	declare export class RecordSource  {
constructor(records?: RecordMap): this;
clear(): void;
delete(dataID: DataID): void;
get(dataID: DataID): RelayInMemoryRecordSource | null;
getRecordIDs(): DataID[];
getStatus(dataID: DataID): "EXISTENT" | "NONEXISTENT" | "UNKNOWN";
has(dataID: DataID): boolean;
load(
dataID: DataID,
callback: (error: Error | null, record: RelayInMemoryRecordSource | null) => void): void;
remove(dataID: DataID): void;
set(dataID: DataID, record: RelayInMemoryRecordSource): void;
size(): number;
toJSON(): RecordMap
}
	declare export class Store  {
constructor(source: RecordSource): this;
getSource(): MutableRecordSource;
check(selector: Selector): boolean;
retain(selector: Selector): Disposable;
lookup(selector: Selector): Snapshot;
notify(): void;
publish(source: RecordSource): void;
subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable
}
	
/**
 * An internal class to provide a console-friendly string representation of a
 * RelayInMemoryRecordSource.
 */
declare export class RecordSummary  {
id: DataID;
type: string | null | void;
static createFromRecord(id: DataID, record: any): RecordSummary;
constructor(id: DataID, type: string | null | void): this;
toString(): string
}
	
/**
 * Internal class for inspecting a single RelayInMemoryRecordSource.
 */
declare export class RecordInspector  {
constructor(sourceInspector: RelayRecordSourceInspector, record: RelayInMemoryRecordSource): this;

/**
 * Get the cache id of the given record. For types that implement the `Node`
 * interface (or that have an `id`) this will be `id`, for other types it will be
 * a synthesized identifier based on the field path from the nearest ancestor
 * record that does have an `id`.
 */
getDataID(): DataID;

/**
 * Returns a list of the fields that have been fetched on the current record.
 */
getFields(): string[];

/**
 * Returns the type of the record.
 */
getType(): string;

/**
 * Returns a copy of the internal representation of the record.
 */
inspect(): any;

/**
 * Returns the value of a scalar field. May throw if the given field is
 * present but not actually scalar.
 */
getValue(name: string, args?: Variables): any;

/**
 * Returns an inspector for the given scalar "linked" field (a field whose
 * value is another RelayInMemoryRecordSource instead of a scalar). May throw if the field is
 * present but not a scalar linked record.
 */
getLinkedRecord(name: string, args?: Variables): RecordInspector | null;

/**
 * Returns an array of inspectors for the given plural "linked" field (a field
 * whose value is an array of Records instead of a scalar). May throw if the
 * field is  present but not a plural linked record.
 */
getLinkedRecords(name: string, args?: Variables): RecordInspector[] | null
}
	declare export class RelayRecordSourceInspector  {
constructor(source: RecordSource): this;
static getForEnvironment(environment: Environment): RelayRecordSourceInspector;

/**
 * Returns an inspector for the record with the given id, or null/undefined if
 * that record is deleted/unfetched.
 */
get(dataID: DataID): RecordInspector | null;

/**
 * Returns a list of "<id>: <type>" for each record in the store that has an
 * `id`.
 */
getNodes(): RecordSummary[];

/**
 * Returns a list of "<id>: <type>" for all records in the store including
 * those that do not have an `id`.
 */
getRecords(): RecordSummary[];

/**
 * Returns an inspector for the synthesized "root" object, allowing access to
 * e.g. the `viewer` object or the results of other fields on the "Query"
 * type.
 */
getRoot(): RecordInspector
}
	declare export class RecordSourceInspector mixins RelayRecordSourceInspector {}
	declare export interface Subscription {
unsubscribe(): void,
+closed: boolean
} 
	declare export interface Observer<T> {
start(subscription: Subscription): any,
next(nextThing: T): any,
error(error: Error): any,
complete(): any,
unsubscribe(subscription: Subscription): any
} 
	declare export type Source<T> = <T>() => any;
	declare export interface Subscribable<T> {
subscribe(observer: Observer<T>): Subscription
} 
	declare export type ObservableFromValue<T> = RelayObservable<T> | Promise<T> | T;
	declare export class RelayObservable<T> mixins Subscribable<T> {
_source: Source<T>;
constructor(source: Source<T>): this;

/**
 * When an unhandled error is detected, it is reported to the host environment
 * (the ESObservable spec refers to this method as "HostReportErrors()").
 * 
 * The default implementation in development builds re-throws errors in a
 * separate frame, and from production builds does nothing (swallowing
 * uncaught errors).
 * 
 * Called during application initialization, this method allows
 * application-specific handling of uncaught errors. Allowing, for example,
 * integration with error logging or developer tools.
 */
static onUnhandledError(callback: (error: Error) => any): void;

/**
 * Accepts various kinds of data sources, and always returns a RelayObservable
 * useful for accepting the result of a user-provided FetchFunction.
 */
static from<V>(obj: ObservableFromValue<V>): RelayObservable<V>;

/**
 * Creates a RelayObservable, given a function which expects a legacy
 * Relay Observer as the last argument and which returns a Disposable.
 * 
 * To support migration to Observable, the function may ignore the
 * legacy Relay observer and directly return an Observable instead.
 */
static fromLegacy<V>(
callback: (legacyObserver: LegacyObserver<V>) => Disposable | RelayObservable<V>): RelayObservable<V>;

/**
 * Returns a new Observable which returns the same values as this one, but
 * modified so that the provided Observer is called to perform a side-effects
 * for all events emitted by the source.
 * 
 * Any errors that are thrown in the side-effect Observer are unhandled, and
 * do not affect the source Observable or its Observer.
 * 
 * This is useful for when debugging your Observables or performing other
 * side-effects such as logging or performance monitoring.
 */
do(observer: Observer<T>): RelayObservable<T>;

/**
 * Returns a new Observable which returns the same values as this one, but
 * modified so that the finally callback is performed after completion,
 * whether normal or due to error or unsubscription.
 * 
 * This is useful for cleanup such as resource finalization.
 */
finally(fn: () => any): RelayObservable<T>;

/**
 * Returns a new Observable which is identical to this one, unless this
 * Observable completes before yielding any values, in which case the new
 * Observable will yield the values from the alternate Observable.
 * 
 * If this Observable does yield values, the alternate is never subscribed to.
 * 
 * This is useful for scenarios where values may come from multiple sources
 * which should be tried in order, i.e. from a cache before a network.
 */
ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U>;

/**
 * Observable's primary API: returns an unsubscribable Subscription to the
 * source of this Observable.
 */
subscribe(observer: Observer<T>): Subscription;

/**
 * Supports subscription of a legacy Relay Observer, returning a Disposable.
 */
subscribeLegacy(legacyObserver: LegacyObserver<T>): Disposable;

/**
 * Returns a new Observerable where each value has been transformed by
 * the mapping function.
 */
map<U>(fn: (thing: T) => U): RelayObservable<U>;

/**
 * Returns a new Observable where each value is replaced with a new Observable
 * by the mapping function, the results of which returned as a single
 * concattenated Observable.
 */
concatMap<U>(fn: (thing: T) => ObservableFromValue<U>): RelayObservable<U>;

/**
 * Returns a new Observable which first mirrors this Observable, then when it
 * completes, waits for `pollInterval` milliseconds before re-subscribing to
 * this Observable again, looping in this manner until unsubscribed.
 * 
 * The returned Observable never completes.
 */
poll(pollInterval: number): RelayObservable<T>;

/**
 * Returns a Promise which resolves when this Observable yields a first value
 * or when it completes with no value.
 */
toPromise(): Promise<T | null | void>
}
	declare export type Observable<T> = RelayObservable<T>;
	declare export function commitLocalUpdate(environment: Environment, updater: StoreUpdater): void

	declare export interface MutationConfig<T: OperationBase> {
configs?: RelayMutationConfig[],
mutation: GraphQLTaggedNode,
variables: $ElementType<T, "variables">,
uploadables?: UploadableMap,
onCompleted(
response: $ElementType<T, "response">,
errors: PayloadError[] | null | void): void,
onError(error?: Error): void,
optimisticUpdater?: SelectorStoreUpdater<$ElementType<T, "response">>,
optimisticResponse?: $ElementType<T, "response">,
updater?: SelectorStoreUpdater<$ElementType<T, "response">>
} 
	declare export function commitRelayModernMutation<T: OperationBase>(
environment: Environment,
config: MutationConfig<T>): Disposable

	declare export interface OptimisticMutationConfig {
configs?: RelayMutationConfig[],
mutation: GraphQLTaggedNode,
variables: Variables,
optimisticUpdater?: SelectorStoreUpdater,
optimisticResponse?: {[key: string]: any}
} 
	
/**
 * A helper function to fetch the results of a query. Note that results for
 * fragment spreads are masked: fields must be explicitly listed in the query in
 * order to be accessible in the result object.
 * 
 * NOTE: This module is primarily intended for integrating with classic APIs.
 * Most product code should use a Renderer or Container.
 * 
 * TODO(t16875667): The return type should be `Promise<?SelectorData>`, but
 * that's not really helpful as `SelectorData` is essentially just `mixed`. We
 * can probably leverage generated flow types here to return the real expected
 * shape.
 */
declare export function fetchRelayModernQuery(
environment: any,
taggedNode: GraphQLTaggedNode,
variables: Variables,
cacheConfig?: CacheConfig): Promise<any>

	declare export interface GraphQLSubscriptionConfig {
configs?: RelayMutationConfig[],
subscription: GraphQLTaggedNode,
variables: Variables,
onCompleted(): void,
onError(error: Error): void,
onNext(response: {[key: string]: any} | null | void): void,
updater(store: RecordSourceSelectorProxy): void
} 
	declare export function requestRelaySubscription(environment: Environment, config: GraphQLSubscriptionConfig): Disposable

    }
