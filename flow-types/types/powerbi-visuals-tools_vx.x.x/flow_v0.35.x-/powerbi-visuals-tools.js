declare module 'powerbi-visuals-tools' {
        declare  class powerbi$VisualDataRoleKind {
  constructor(...args: empty): mixed;
static +Grouping: Class<powerbi$VisualDataRoleKind__Grouping> & powerbi$VisualDataRoleKind__Grouping & 0;// 0
static +Measure: Class<powerbi$VisualDataRoleKind__Measure> & powerbi$VisualDataRoleKind__Measure & 1;// 1
static +GroupingOrMeasure: Class<powerbi$VisualDataRoleKind__GroupingOrMeasure> & powerbi$VisualDataRoleKind__GroupingOrMeasure & 2;// 2

}

declare class powerbi$VisualDataRoleKind__Grouping mixins powerbi$VisualDataRoleKind {}
declare class powerbi$VisualDataRoleKind__Measure mixins powerbi$VisualDataRoleKind {}
declare class powerbi$VisualDataRoleKind__GroupingOrMeasure mixins powerbi$VisualDataRoleKind {}


declare  class powerbi$VisualDataChangeOperationKind {
  constructor(...args: empty): mixed;
static +Create: Class<powerbi$VisualDataChangeOperationKind__Create> & powerbi$VisualDataChangeOperationKind__Create & 0;// 0
static +Append: Class<powerbi$VisualDataChangeOperationKind__Append> & powerbi$VisualDataChangeOperationKind__Append & 1;// 1

}

declare class powerbi$VisualDataChangeOperationKind__Create mixins powerbi$VisualDataChangeOperationKind {}
declare class powerbi$VisualDataChangeOperationKind__Append mixins powerbi$VisualDataChangeOperationKind {}


declare  class powerbi$VisualUpdateType {
  constructor(...args: empty): mixed;
static +Data: Class<powerbi$VisualUpdateType__Data> & powerbi$VisualUpdateType__Data & 2;// 2
static +Resize: Class<powerbi$VisualUpdateType__Resize> & powerbi$VisualUpdateType__Resize & 4;// 4
static +ViewMode: Class<powerbi$VisualUpdateType__ViewMode> & powerbi$VisualUpdateType__ViewMode & 8;// 8
static +Style: Class<powerbi$VisualUpdateType__Style> & powerbi$VisualUpdateType__Style & 16;// 16
static +ResizeEnd: Class<powerbi$VisualUpdateType__ResizeEnd> & powerbi$VisualUpdateType__ResizeEnd & 32;// 32
static +All: Class<powerbi$VisualUpdateType__All> & powerbi$VisualUpdateType__All & 62;// 62

}

declare class powerbi$VisualUpdateType__Data mixins powerbi$VisualUpdateType {}
declare class powerbi$VisualUpdateType__Resize mixins powerbi$VisualUpdateType {}
declare class powerbi$VisualUpdateType__ViewMode mixins powerbi$VisualUpdateType {}
declare class powerbi$VisualUpdateType__Style mixins powerbi$VisualUpdateType {}
declare class powerbi$VisualUpdateType__ResizeEnd mixins powerbi$VisualUpdateType {}
declare class powerbi$VisualUpdateType__All mixins powerbi$VisualUpdateType {}


declare  class powerbi$CartesianRoleKind {
  constructor(...args: empty): mixed;
static +X: Class<powerbi$CartesianRoleKind__X> & powerbi$CartesianRoleKind__X & 0;// 0
static +Y: Class<powerbi$CartesianRoleKind__Y> & powerbi$CartesianRoleKind__Y & 1;// 1

}

declare class powerbi$CartesianRoleKind__X mixins powerbi$CartesianRoleKind {}
declare class powerbi$CartesianRoleKind__Y mixins powerbi$CartesianRoleKind {}


declare  class powerbi$ViewMode {
  constructor(...args: empty): mixed;
static +View: Class<powerbi$ViewMode__View> & powerbi$ViewMode__View & 0;// 0
static +Edit: Class<powerbi$ViewMode__Edit> & powerbi$ViewMode__Edit & 1;// 1
static +InFocusEdit: Class<powerbi$ViewMode__InFocusEdit> & powerbi$ViewMode__InFocusEdit & 2;// 2

}

declare class powerbi$ViewMode__View mixins powerbi$ViewMode {}
declare class powerbi$ViewMode__Edit mixins powerbi$ViewMode {}
declare class powerbi$ViewMode__InFocusEdit mixins powerbi$ViewMode {}


declare  class powerbi$EditMode {
  constructor(...args: empty): mixed;
static +Default: Class<powerbi$EditMode__Default> & powerbi$EditMode__Default & 0;// 0
static +Advanced: Class<powerbi$EditMode__Advanced> & powerbi$EditMode__Advanced & 1;// 1

}

declare class powerbi$EditMode__Default mixins powerbi$EditMode {}
declare class powerbi$EditMode__Advanced mixins powerbi$EditMode {}


declare  class powerbi$AdvancedEditModeSupport {
  constructor(...args: empty): mixed;
static +NotSupported: Class<powerbi$AdvancedEditModeSupport__NotSupported> & powerbi$AdvancedEditModeSupport__NotSupported & 0;// 0
static +SupportedNoAction: Class<powerbi$AdvancedEditModeSupport__SupportedNoAction> & powerbi$AdvancedEditModeSupport__SupportedNoAction & 1;// 1
static +SupportedInFocus: Class<powerbi$AdvancedEditModeSupport__SupportedInFocus> & powerbi$AdvancedEditModeSupport__SupportedInFocus & 2;// 2

}

declare class powerbi$AdvancedEditModeSupport__NotSupported mixins powerbi$AdvancedEditModeSupport {}
declare class powerbi$AdvancedEditModeSupport__SupportedNoAction mixins powerbi$AdvancedEditModeSupport {}
declare class powerbi$AdvancedEditModeSupport__SupportedInFocus mixins powerbi$AdvancedEditModeSupport {}


declare  class powerbi$ResizeMode {
  constructor(...args: empty): mixed;
static +Resizing: Class<powerbi$ResizeMode__Resizing> & powerbi$ResizeMode__Resizing & 1;// 1
static +Resized: Class<powerbi$ResizeMode__Resized> & powerbi$ResizeMode__Resized & 2;// 2

}

declare class powerbi$ResizeMode__Resizing mixins powerbi$ResizeMode {}
declare class powerbi$ResizeMode__Resized mixins powerbi$ResizeMode {}


declare  class powerbi$JoinPredicateBehavior {
  constructor(...args: empty): mixed;
static +None: Class<powerbi$JoinPredicateBehavior__None> & powerbi$JoinPredicateBehavior__None & 0;// 0

}

declare class powerbi$JoinPredicateBehavior__None mixins powerbi$JoinPredicateBehavior {}


declare  class powerbi$PromiseResultType {
  constructor(...args: empty): mixed;
static +Success: Class<powerbi$PromiseResultType__Success> & powerbi$PromiseResultType__Success & 0;// 0
static +Failure: Class<powerbi$PromiseResultType__Failure> & powerbi$PromiseResultType__Failure & 1;// 1

}

declare class powerbi$PromiseResultType__Success mixins powerbi$PromiseResultType {}
declare class powerbi$PromiseResultType__Failure mixins powerbi$PromiseResultType {}



/**
 * Defines actions to be taken by the visual in response to a selection.
 * 
 * An undefined/null VisualInteractivityAction should be treated as Selection,
 * as that is the default action.
 */
declare  class powerbi$VisualInteractivityAction {
  constructor(...args: empty): mixed;
static +Selection: Class<powerbi$VisualInteractivityAction__Selection> & powerbi$VisualInteractivityAction__Selection & 0;// 0
static +None: Class<powerbi$VisualInteractivityAction__None> & powerbi$VisualInteractivityAction__None & 1;// 1

}

declare class powerbi$VisualInteractivityAction__Selection mixins powerbi$VisualInteractivityAction {}
declare class powerbi$VisualInteractivityAction__None mixins powerbi$VisualInteractivityAction {}



/**
 * Defines various events Visuals can notify the host on.
 */
declare  class powerbi$VisualEventType {
  constructor(...args: empty): mixed;
static +RenderStarted: Class<powerbi$VisualEventType__RenderStarted> & powerbi$VisualEventType__RenderStarted & 0;// 0
static +RenderCompleted: Class<powerbi$VisualEventType__RenderCompleted> & powerbi$VisualEventType__RenderCompleted & 1;// 1
static +Trace: Class<powerbi$VisualEventType__Trace> & powerbi$VisualEventType__Trace & 2;// 2
static +Error: Class<powerbi$VisualEventType__Error> & powerbi$VisualEventType__Error & 3;// 3

}

declare class powerbi$VisualEventType__RenderStarted mixins powerbi$VisualEventType {}
declare class powerbi$VisualEventType__RenderCompleted mixins powerbi$VisualEventType {}
declare class powerbi$VisualEventType__Trace mixins powerbi$VisualEventType {}
declare class powerbi$VisualEventType__Error mixins powerbi$VisualEventType {}


declare  class powerbi$FilterAction {
  constructor(...args: empty): mixed;
static +merge: Class<powerbi$FilterAction__merge> & powerbi$FilterAction__merge & 0;// 0
static +remove: Class<powerbi$FilterAction__remove> & powerbi$FilterAction__remove & 1;// 1

}

declare class powerbi$FilterAction__merge mixins powerbi$FilterAction {}
declare class powerbi$FilterAction__remove mixins powerbi$FilterAction {}


declare interface visuals$ISelectionIdBuilder {
withCategory(categoryColumn: powerbi$DataViewCategoryColumn, index: number): this,
withSeries(
seriesColumn: powerbi$DataViewValueColumns,
valueColumn: powerbi$DataViewValueColumn | powerbi$DataViewValueColumnGroup): this,
withMeasure(measureId: string): this,
createSelectionId(): visuals$ISelectionId,
withCategory(categoryColumn: powerbi$DataViewCategoryColumn, index: number): this,
withSeries(
seriesColumn: powerbi$DataViewValueColumns,
valueColumn: powerbi$DataViewValueColumn | powerbi$DataViewValueColumnGroup): this,
withMeasure(measureId: string): this,
createSelectionId(): powerbi$visuals.visuals$ISelectionId
} 

declare interface visuals$ISelectionId {
equals(other: visuals$ISelectionId): boolean,
includes(other: visuals$ISelectionId, ignoreHighlight?: boolean): boolean,
getKey(): string,
getSelector(): data$Selector,
getSelectorsByColumn(): data$SelectorsByColumn,
hasIdentity(): boolean
} 


/**
 * An interface to promise/deferred,
 * which abstracts away the underlying mechanism (e.g., Angular, jQuery, etc.).
 */
declare interface powerbi$IPromiseFactory {

/**
 * Creates a Deferred object which represents a task which will finish in the future.
 */
defer<T>(): powerbi$IDeferred<T>,

/**
 * Creates a Deferred object which represents a task which will finish in the future.
 */
defer<TSuccess, TError>(): powerbi$IDeferred2<TSuccess, TError>,

/**
 * Creates a promise that is resolved as rejected with the specified reason.
 * This api should be used to forward rejection in a chain of promises.
 * If you are dealing with the last promise in a promise chain, you don't need to worry about it.
 * When comparing deferreds/promises to the familiar behavior of try/catch/throw,
 * think of reject as the throw keyword in JavaScript.
 * This also means that if you "catch" an error via a promise error callback and you want
 * to forward the error to the promise derived from the current promise,
 * you have to "rethrow" the error by returning a rejection constructed via reject.
 * @param reason Constant, message, exception or an object representing the rejection reason.
 */
reject<TError>(reason?: TError): powerbi$IPromise2<any, TError>,

/**
 * Creates a promise that is resolved with the specified value.
 * This api should be used to forward rejection in a chain of promises.
 * If you are dealing with the last promise in a promise chain, you don't need to worry about it.
 * @param value Object representing the promise result.
 */
resolve<TSuccess>(value?: TSuccess): powerbi$IPromise2<TSuccess, any>,

/**
 * Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.
 * Rejects immediately if any of the promises fail
 */
all(promises: Array<powerbi$IPromise2<any, any>>): powerbi$IPromise<any[]>,

/**
 * Combines multiple promises into a single promise that is resolved when all of the input promises are resolved.
 * Does not resolve until all promises finish (success or failure).
 */
allSettled<T>(
promises: Array<powerbi$IPromise2<any, any>>): powerbi$IPromise<Array<powerbi$IPromiseResult<T>>>,

/**
 * Wraps an object that might be a value or a then-able promise into a promise.
 * This is useful when you are dealing with an object that might or might not be a promise
 */
when<T>(value: T | powerbi$IPromise<T>): powerbi$IPromise<T>
} 


/**
 * Represents an operation, to be completed (resolve/rejected) in the future.
 */
declare type powerbi$IPromise<T> = {} & powerbi$IPromise2<T, T>



/**
 * Represents an operation, to be completed (resolve/rejected) in the future.
 * Success and failure types can be set independently.
 */
declare interface powerbi$IPromise2<TSuccess, TError> {

/**
 * Regardless of when the promise was or will be resolved or rejected,
 * then calls one of the success or error callbacks asynchronously as soon as the result is available.
 * The callbacks are called with a single argument: the result or rejection reason.
 * Additionally, the notify callback may be called zero or more times to provide a progress indication,
 * before the promise is resolved or rejected.
 * This method returns a new promise which is resolved or rejected via
 * the return value of the successCallback, errorCallback.
 */
then<TSuccessResult, TErrorResult>(
successCallback: (
promiseValue: TSuccess) => TSuccessResult | powerbi$IPromise2<TSuccessResult, TErrorResult>,
errorCallback?: (reason: TError) => TErrorResult): powerbi$IPromise2<TSuccessResult, TErrorResult>,

/**
 * Shorthand for promise.then(null, errorCallback).
 */
catch<TErrorResult>(
onRejected: (reason: any) => powerbi$IPromise2<TSuccess, TErrorResult>): powerbi$IPromise2<TSuccess, TErrorResult>,

/**
 * Shorthand for promise.then(null, errorCallback).
 */
catch<TErrorResult>(
onRejected: (reason: any) => TErrorResult): powerbi$IPromise2<TSuccess, TErrorResult>,

/**
 * Allows you to observe either the fulfillment or rejection of a promise,
 * but to do so without modifying the final value.
 * This is useful to release resources or do some clean-up that needs to be done
 * whether the promise was rejected or resolved.
 * See the full specification for more information.
 * Because finally is a reserved word in JavaScript and reserved keywords
 * are not supported as property names by ES3, you'll need to invoke
 * the method like promise['finally'](callback) to make your code IE8 and Android 2.x compatible.
 */
finally<T, U>(finallyCallback: () => any): powerbi$IPromise2<T, U>
} 

declare type powerbi$IDeferred<T> = {} & powerbi$IDeferred2<T, T>


declare interface powerbi$IDeferred2<TSuccess, TError> {
resolve(value: TSuccess): void,
reject(reason?: TError): void,
promise: powerbi$IPromise2<TSuccess, TError>
} 

declare type powerbi$RejectablePromise2<T, E> = {
reject(reason?: E): void,
resolved(): boolean,
rejected(): boolean,
pending(): boolean
} & powerbi$IPromise2<T, E>


declare type powerbi$RejectablePromise<T> = {} & powerbi$RejectablePromise2<T, T>


declare interface powerbi$IResultCallback<T> {
(result: T, done: boolean): void
} 

declare interface powerbi$IPromiseResult<T> {
type: powerbi$PromiseResultType,
value: T
} 

declare  class powerbi$SortDirection {
  constructor(...args: empty): mixed;
static +Ascending: Class<powerbi$SortDirection__Ascending> & powerbi$SortDirection__Ascending & 1;// 1
static +Descending: Class<powerbi$SortDirection__Descending> & powerbi$SortDirection__Descending & 2;// 2

}

declare class powerbi$SortDirection__Ascending mixins powerbi$SortDirection {}
declare class powerbi$SortDirection__Descending mixins powerbi$SortDirection {}



/**
 * Represents views of a data set.
 */
declare interface powerbi$DataView {
metadata: powerbi$DataViewMetadata,
categorical?: powerbi$DataViewCategorical,
single?: powerbi$DataViewSingle,
tree?: powerbi$DataViewTree,
table?: powerbi$DataViewTable,
matrix?: powerbi$DataViewMatrix,
scriptResult?: powerbi$DataViewScriptResultData
} 

declare interface powerbi$DataViewMetadata {
columns: powerbi$DataViewMetadataColumn[],

/**
 * The metadata repetition objects.
 */
objects?: powerbi$DataViewObjects,

/**
 * When defined, describes whether the DataView contains just a segment of the complete data set.
 */
segment?: {},

/**
 * Describes the data reduction applied to this data set when limits are exceeded.
 */
dataReduction?: powerbi$DataViewReductionMetadata
} 

declare interface powerbi$DataViewMetadataColumn {

/**
 * The user-facing display name of the column.
 */
displayName: string,

/**
 * The query name the source column in the query.
 */
queryName?: string,

/**
 * The format string of the column.
 */
format?: string,

/**
 * Data type information for the column.
 */
type?: powerbi$ValueTypeDescriptor,

/**
 * Indicates that this column is a measure (aggregate) value.
 */
isMeasure?: boolean,

/**
 * The position of the column in the select statement.
 */
index?: number,

/**
 * The properties that this column provides to the visualization.
 */
roles?: {
[name: string]: boolean
},

/**
 * The metadata repetition objects.
 */
objects?: powerbi$DataViewObjects,

/**
 * The name of the containing group.
 */
groupName?: powerbi$PrimitiveValue,

/**
 * The sort direction of this column.
 */
sort?: powerbi$SortDirection,

/**
 * The order sorts are applied. Lower values are applied first. Undefined indicates no sort was done on this column.
 */
sortOrder?: number,

/**
 * The KPI metadata to use to convert a numeric status value into its visual representation.
 */
kpi?: powerbi$DataViewKpiColumnMetadata,

/**
 * Indicates that aggregates should not be computed across groups with different values of this column.
 */
discourageAggregationAcrossGroups?: boolean,

/**
 * The aggregates computed for this column, if any.
 */
aggregates?: powerbi$DataViewColumnAggregates,

/**
 * The SQExpr this column represents.
 */
expr?: powerbi$data.data$ISQExpr,

/**
 * The set of expressions that define the identity for instances of this grouping field.
 * This must be a subset of the items in the DataViewScopeIdentity in the grouped items result.
 * This property is undefined for measure fields, as well as for grouping fields in DSR generated prior to the CY16SU08 or SU09 timeframe.
 */
identityExprs?: powerbi$data.data$ISQExpr[],
parameter?: {}
} 

declare interface powerbi$DataViewReductionMetadata {
categorical?: powerbi$DataViewCategoricalReductionMetadata
} 

declare interface powerbi$DataViewCategoricalReductionMetadata {
categories?: powerbi$DataViewReductionAlgorithmMetadata,
values?: powerbi$DataViewReductionAlgorithmMetadata,
metadata?: powerbi$DataViewReductionAlgorithmMetadata
} 

declare interface powerbi$DataViewReductionAlgorithmMetadata {
binnedLineSample?: {}
} 

declare interface powerbi$DataViewColumnAggregates {
subtotal?: powerbi$PrimitiveValue,
max?: powerbi$PrimitiveValue,
min?: powerbi$PrimitiveValue,
average?: powerbi$PrimitiveValue,
median?: powerbi$PrimitiveValue,
count?: number,
percentiles?: powerbi$DataViewColumnPercentileAggregate[],

/**
 * Represents a single value evaluation, similar to a total.
 */
single?: powerbi$PrimitiveValue,

/**
 * Client-computed maximum value for a column.
 */
maxLocal?: powerbi$PrimitiveValue,

/**
 * Client-computed maximum value for a column.
 */
minLocal?: powerbi$PrimitiveValue
} 

declare interface powerbi$DataViewColumnPercentileAggregate {
exclusive?: boolean,
k: number,
value: powerbi$PrimitiveValue
} 

declare interface powerbi$DataViewCategorical {
categories?: powerbi$DataViewCategoryColumn[],
values?: powerbi$DataViewValueColumns
} 

declare interface powerbi$DataViewCategoricalColumn {
source: powerbi$DataViewMetadataColumn,

/**
 * The data repetition objects.
 */
objects?: powerbi$DataViewObjects[]
} 

declare type powerbi$DataViewValueColumns = {

/**
 * Returns an array that groups the columns in this group together.
 */
grouped(): powerbi$DataViewValueColumnGroup[],

/**
 * The set of expressions that define the identity for instances of the value group.  This must match items in the DataViewScopeIdentity in the grouped items result.
 */
identityFields?: powerbi$data.data$ISQExpr[],
source?: powerbi$DataViewMetadataColumn
} & Array<powerbi$DataViewValueColumn>


declare interface powerbi$DataViewValueColumnGroup {
values: powerbi$DataViewValueColumn[],
identity?: powerbi$DataViewScopeIdentity,

/**
 * The data repetition objects.
 */
objects?: powerbi$DataViewObjects,
name?: powerbi$PrimitiveValue
} 

declare type powerbi$DataViewValueColumn = {
values: powerbi$PrimitiveValue[],
highlights?: powerbi$PrimitiveValue[],
identity?: powerbi$DataViewScopeIdentity
} & powerbi$DataViewCategoricalColumn


declare type powerbi$DataViewCategoryColumn = {
values: powerbi$PrimitiveValue[],
identity?: powerbi$DataViewScopeIdentity[],

/**
 * The set of expressions that define the identity for instances of the category.  This must match items in the DataViewScopeIdentity in the identity.
 */
identityFields?: powerbi$data.data$ISQExpr[]
} & powerbi$DataViewCategoricalColumn


declare interface powerbi$DataViewSingle {
value: powerbi$PrimitiveValue
} 

declare interface powerbi$DataViewTree {
root: powerbi$DataViewTreeNode
} 

declare interface powerbi$DataViewTreeNode {
name?: powerbi$PrimitiveValue,

/**
 * When used under the context of DataView.tree, this value is one of the elements in the values property.
 * 
 * When used under the context of DataView.matrix, this property is the value of the particular
 * group instance represented by this node (e.g. In a grouping on Year, a node can have value == 2016).
 * 
 * DEPRECATED for usage under the context of DataView.matrix: This property is deprecated for objects
 * that conform to the DataViewMatrixNode interface (which extends DataViewTreeNode).
 * New visuals code should consume the new property levelValues on DataViewMatrixNode instead.
 * If this node represents a composite group node in matrix, this property will be undefined.
 */
value?: powerbi$PrimitiveValue,

/**
 * This property contains all the values in this node.
 * The key of each of the key-value-pair in this dictionary is the position of the column in the
 * select statement to which the value belongs.
 */
values?: {
[id: number]: powerbi$DataViewTreeNodeValue
},
children?: powerbi$DataViewTreeNode[],
identity?: powerbi$DataViewScopeIdentity,

/**
 * The data repetition objects.
 */
objects?: powerbi$DataViewObjects,

/**
 * The set of expressions that define the identity for the child nodes.  This must match items in the DataViewScopeIdentity of those nodes.
 */
childIdentityFields?: powerbi$data.data$ISQExpr[]
} 

declare interface powerbi$DataViewTreeNodeValue {
value?: powerbi$PrimitiveValue
} 

declare type powerbi$DataViewTreeNodeMeasureValue = {
highlight?: powerbi$PrimitiveValue
} & powerbi$DataViewTreeNodeValue & powerbi$DataViewColumnAggregates


declare type powerbi$DataViewTreeNodeGroupValue = {
count?: powerbi$PrimitiveValue
} & powerbi$DataViewTreeNodeValue


declare interface powerbi$DataViewTable {
columns: powerbi$DataViewMetadataColumn[],
identity?: powerbi$DataViewScopeIdentity[],

/**
 * The set of expressions that define the identity for rows of the table.  This must match items in the DataViewScopeIdentity in the identity.
 */
identityFields?: powerbi$data.data$ISQExpr[],
rows?: powerbi$DataViewTableRow[],
totals?: powerbi$PrimitiveValue[]
} 

declare type powerbi$DataViewTableRow = {

/**
 * The data repetition objects.
 */
objects?: powerbi$DataViewObjects[]
} & Array<powerbi$PrimitiveValue>


declare interface powerbi$DataViewMatrix {
rows: powerbi$DataViewHierarchy,
columns: powerbi$DataViewHierarchy,

/**
 * The metadata columns of the measure values.
 * In visual DataView, this array is sorted in projection order.
 */
valueSources: powerbi$DataViewMetadataColumn[]
} 

declare type powerbi$DataViewMatrixNode = {

/**
 * Indicates the level this node is on. Zero indicates the outermost children (root node level is undefined).
 */
level?: number,
children?: powerbi$DataViewMatrixNode[],
values?: {
[id: number]: powerbi$DataViewMatrixNodeValue
},

/**
 * Indicates the source metadata index on the node's level. Its value is 0 if omitted.
 * 
 * DEPRECATED: This property is deprecated and exists for backward-compatibility only.
 * New visuals code should consume the new property levelSourceIndex on DataViewMatrixGroupValue instead.
 */
levelSourceIndex?: number,

/**
 * The values of the particular group instance represented by this node.
 * This array property would contain more than one element in a composite group
 * (e.g. Year == 2016 and Month == 'January').
 */
levelValues?: powerbi$DataViewMatrixGroupValue[],

/**
 * Indicates whether or not the node is a subtotal node. Its value is false if omitted.
 */
isSubtotal?: boolean
} & powerbi$DataViewTreeNode



/**
 * Represents a value at a particular level of a matrix's rows or columns hierarchy.
 * In the hierarchy level node is an instance of a composite group, this object will
 * be one of multiple values
 */
declare type powerbi$DataViewMatrixGroupValue = {

/**
 * Indicates the index of the corresponding column for this group level value
 * (held by DataViewHierarchyLevel.sources).
 * @example // For example, to get the source column metadata of each level value at a particular row hierarchy node:
let matrixRowsHierarchy: DataViewHierarchy = dataView.matrix.rows;
let targetRowsHierarchyNode = <DataViewMatrixNode>matrixRowsHierarchy.root.children[0];
// Use the DataViewMatrixNode.level property to get the corresponding DataViewHierarchyLevel...
let targetRowsHierarchyLevel: DataViewHierarchyLevel = matrixRows.levels[targetRowsHierarchyNode.level];
for (let levelValue in rowsRootNode.levelValues) {
// columnMetadata is the source column for the particular levelValue.value in this loop iteration
let columnMetadata: DataViewMetadataColumn =
targetRowsHierarchyLevel.sources[levelValue.levelSourceIndex];
}
 */
levelSourceIndex: number
} & powerbi$DataViewTreeNodeValue



/**
 * Represents a value at the matrix intersection, used in the values property on DataViewMatrixNode (inherited from DataViewTreeNode).
 */
declare type powerbi$DataViewMatrixNodeValue = {
highlight?: powerbi$PrimitiveValue,

/**
 * The data repetition objects.
 */
objects?: powerbi$DataViewObjects,

/**
 * Indicates the index of the corresponding measure (held by DataViewMatrix.valueSources). Its value is 0 if omitted.
 */
valueSourceIndex?: number
} & powerbi$DataViewTreeNodeValue


declare interface powerbi$DataViewHierarchy {
root: powerbi$DataViewMatrixNode,
levels: powerbi$DataViewHierarchyLevel[]
} 

declare interface powerbi$DataViewHierarchyLevel {

/**
 * The metadata columns of this hierarchy level.
 * In visual DataView, this array is sorted in projection order.
 */
sources: powerbi$DataViewMetadataColumn[]
} 

declare interface powerbi$DataViewKpiColumnMetadata {
graphic: string,
normalizedFiveStateKpiRange?: boolean
} 

declare interface powerbi$DataViewScriptResultData {
payloadBase64: string
} 

declare interface powerbi$ValueRange<T> {
min?: T,
max?: T
} 


/**
 * Defines the acceptable values of a number.
 */
declare type powerbi$NumberRange = powerbi$ValueRange<number>;


/**
 * Defines the PrimitiveValue range.
 */
declare type powerbi$PrimitiveValueRange = powerbi$ValueRange<powerbi$PrimitiveValue>;


/**
 * Represents evaluated, named, custom objects in a DataView.
 */
declare interface powerbi$DataViewObjects {
[name: string]: powerbi$DataViewObject
} 


/**
 * Represents an object (name-value pairs) in a DataView.
 */
declare interface powerbi$DataViewObject {

/**
 * Map of property name to property value.
 */
[propertyName: string]: powerbi$DataViewPropertyValue | powerbi$DataViewObjectMap
} 

declare interface powerbi$DataViewObjectWithId {
id: string,
object: powerbi$DataViewObject
} 

declare interface powerbi$DataViewObjectPropertyIdentifier {
objectName: string,
propertyName: string
} 

declare interface powerbi$DataViewObjectMap {
[id: string]: powerbi$DataViewObject
} 

declare type powerbi$DataViewPropertyValue = powerbi$PrimitiveValue | powerbi$StructuralObjectValue;


/**
 * Defines a match against any Total within a given DataView scope.
 */
declare interface data$DataViewScopeTotal {
kind: powerbi$DataRepetitionKind.ScopeTotal,
exprs: data$ISQExpr[],
key: string
} 


/**
 * Encapsulates the identity of a data scope in a DataView.
 */
declare interface powerbi$DataViewScopeIdentity {
kind: powerbi$DataRepetitionKind.ScopeIdentity,

/**
 * Predicate expression that identifies the scope.
 */
expr: powerbi$data.data$ISQExpr,

/**
 * Key string that identifies the DataViewScopeIdentity to a string, which can be used for equality comparison.
 */
key: string
} 


/**
 * Kind of the Data Repetition Selector
 */
declare  class powerbi$DataRepetitionKind {
  constructor(...args: empty): mixed;
static +RoleWildcard: Class<powerbi$DataRepetitionKind__RoleWildcard> & powerbi$DataRepetitionKind__RoleWildcard & 0;// 0
static +ScopeIdentity: Class<powerbi$DataRepetitionKind__ScopeIdentity> & powerbi$DataRepetitionKind__ScopeIdentity & 1;// 1
static +ScopeTotal: Class<powerbi$DataRepetitionKind__ScopeTotal> & powerbi$DataRepetitionKind__ScopeTotal & 2;// 2
static +ScopeWildcard: Class<powerbi$DataRepetitionKind__ScopeWildcard> & powerbi$DataRepetitionKind__ScopeWildcard & 3;// 3

}

declare class powerbi$DataRepetitionKind__RoleWildcard mixins powerbi$DataRepetitionKind {}
declare class powerbi$DataRepetitionKind__ScopeIdentity mixins powerbi$DataRepetitionKind {}
declare class powerbi$DataRepetitionKind__ScopeTotal mixins powerbi$DataRepetitionKind {}
declare class powerbi$DataRepetitionKind__ScopeWildcard mixins powerbi$DataRepetitionKind {}


declare interface powerbi$DefaultValueDefinition {
value: powerbi$data.data$ISQConstantExpr,
identityFieldsValues?: powerbi$data.data$ISQConstantExpr[]
} 

declare interface powerbi$DefaultValueTypeDescriptor {
defaultValue: boolean
} 

declare type powerbi$EnumMemberValue = string | number;

declare interface powerbi$IEnumMember {
value: powerbi$EnumMemberValue,
displayName: data$DisplayNameGetter
} 


/**
 * Defines a custom enumeration data type, and its values.
 */
declare interface powerbi$IEnumType {

/**
 * Gets the members of the enumeration, limited to the validMembers, if appropriate.
 */
members(validMembers?: powerbi$EnumMemberValue[]): powerbi$IEnumMember[]
} 

declare interface powerbi$Fill {
solid?: {
color?: string
},
gradient?: {
startColor?: string,
endColor?: string
},
pattern?: {
patternKind?: string,
color?: string
}
} 

declare interface powerbi$FillTypeDescriptor {
solid?: {
color?: powerbi$FillSolidColorTypeDescriptor
},
gradient?: {
startColor?: boolean,
endColor?: boolean
},
pattern?: {
patternKind?: boolean,
color?: boolean
}
} 

declare type powerbi$FillSolidColorTypeDescriptor = boolean | powerbi$FillSolidColorAdvancedTypeDescriptor;

declare interface powerbi$FillSolidColorAdvancedTypeDescriptor {

/**
 * Indicates whether the color value may be nullable, and a 'no fill' option is appropriate.
 */
nullable: boolean
} 

declare type powerbi$FillRule = {} & powerbi$FillRuleGeneric<string, number, string>


declare interface powerbi$FillRuleGeneric<TColor, TValue, TStrategy> {
linearGradient2?: powerbi$LinearGradient2Generic<TColor, TValue, TStrategy>,
linearGradient3?: powerbi$LinearGradient3Generic<TColor, TValue, TStrategy>
} 

declare interface powerbi$LinearGradient2Generic<TColor, TValue, TStrategy> {
max: powerbi$RuleColorStopGeneric<TColor, TValue>,
min: powerbi$RuleColorStopGeneric<TColor, TValue>,
nullColoringStrategy?: powerbi$NullColoringStrategyGeneric<TStrategy, TColor>
} 

declare interface powerbi$LinearGradient3Generic<TColor, TValue, TStrategy> {
max: powerbi$RuleColorStopGeneric<TColor, TValue>,
mid: powerbi$RuleColorStopGeneric<TColor, TValue>,
min: powerbi$RuleColorStopGeneric<TColor, TValue>,
nullColoringStrategy?: powerbi$NullColoringStrategyGeneric<TStrategy, TColor>
} 

declare interface powerbi$RuleColorStopGeneric<TColor, TValue> {
color: TColor,
value?: TValue
} 

declare interface powerbi$NullColoringStrategyGeneric<TStrategy, TColor> {
strategy: TStrategy,

/**
 * Only used if strategy is specificColor
 */
color?: TColor
} 

declare interface powerbi$FilterTypeDescriptor {
selfFilter?: boolean
} 

declare type powerbi$GeoJson = powerbi$GeoJsonDefinitionGeneric<string>;

declare interface powerbi$GeoJsonDefinitionGeneric<T> {
type: T,
name: T,
content: T
} 

declare type powerbi$ImageValue = powerbi$ImageDefinitionGeneric<string>;

declare interface powerbi$ImageDefinitionGeneric<T> {
name: T,
url: T,
scaling?: T
} 

declare type powerbi$Paragraphs = powerbi$Paragraph[];

declare interface powerbi$Paragraph {
horizontalTextAlignment?: string,
textRuns: powerbi$TextRun[]
} 

declare interface powerbi$TextRunStyle {
fontFamily?: string,
fontSize?: string,
fontStyle?: string,
fontWeight?: string,
color?: string,
textDecoration?: string
} 

declare interface powerbi$TextRun {
textStyle?: powerbi$TextRunStyle,
url?: string,
value: string,
valueExpr?: data$ISQExpr
} 


/**
 * Defines instances of structural types.
 */
declare type powerbi$StructuralObjectValue = powerbi$Fill
| powerbi$FillRule
| SemanticFilter
| powerbi$DefaultValueDefinition
| powerbi$ImageValue
| powerbi$Paragraphs
| powerbi$GeoJson
| powerbi$DataBars;


/**
 * Describes a structural type in the client type system. Leaf properties should use ValueType.
 */
declare interface powerbi$StructuralTypeDescriptor {
fill?: powerbi$FillTypeDescriptor,
fillRule?: {},
filter?: powerbi$FilterTypeDescriptor,
expression?: powerbi$DefaultValueTypeDescriptor,
image?: {},
paragraphs?: {},
geoJson?: {},
queryTransform?: {},
dataBars?: {}
} 


/**
 * Describes a data value type in the client type system. Can be used to get a concrete ValueType instance.
 */
declare interface powerbi$ValueTypeDescriptor {
+text?: boolean,
+numeric?: boolean,
+integer?: boolean,
+bool?: boolean,
+dateTime?: boolean,
+duration?: boolean,
+binary?: boolean,
+none?: boolean,
+temporal?: powerbi$TemporalTypeDescriptor,
+geography?: powerbi$GeographyTypeDescriptor,
+misc?: powerbi$MiscellaneousTypeDescriptor,
+formatting?: powerbi$FormattingTypeDescriptor,
enumeration?: powerbi$IEnumType,
+scripting?: powerbi$ScriptTypeDescriptor,
+operations?: powerbi$OperationalTypeDescriptor,
+variant?: powerbi$ValueTypeDescriptor[]
} 

declare interface powerbi$ScriptTypeDescriptor {
+source?: boolean
} 

declare interface powerbi$TemporalTypeDescriptor {
+year?: boolean,
+quarter?: boolean,
+month?: boolean,
+day?: boolean,
+paddedDateTableDate?: boolean
} 

declare interface powerbi$GeographyTypeDescriptor {
+address?: boolean,
+city?: boolean,
+continent?: boolean,
+country?: boolean,
+county?: boolean,
+region?: boolean,
+postalCode?: boolean,
+stateOrProvince?: boolean,
+place?: boolean,
+latitude?: boolean,
+longitude?: boolean
} 

declare interface powerbi$MiscellaneousTypeDescriptor {
+image?: boolean,
+imageUrl?: boolean,
+webUrl?: boolean,
+barcode?: boolean
} 

declare interface powerbi$FormattingTypeDescriptor {
+color?: boolean,
+formatString?: boolean,
+alignment?: boolean,
+labelDisplayUnits?: boolean,
+fontSize?: boolean,
+fontFamily?: boolean,
+labelDensity?: boolean,
+bubbleSize?: boolean,
+altText?: boolean
} 

declare interface powerbi$OperationalTypeDescriptor {
+searchEnabled?: boolean
} 


/**
 * Describes instances of value type objects.
 */
declare type powerbi$PrimitiveValue = string | number | boolean | Date;

declare interface powerbi$DataBars {
minValue?: number,
maxValue?: number,
positiveColor: powerbi$Fill,
negativeColor: powerbi$Fill,
axisColor: powerbi$Fill,
reverseDirection: boolean,
hideText: boolean
} 

declare interface powerbi$IViewport {
height: number,
width: number
} 

declare type powerbi$ScaledViewport = {
scale: number
} & powerbi$IViewport


declare interface powerbi$VisualObjectInstance {

/**
 * The name of the object (as defined in VisualCapabilities).
 */
objectName: string,

/**
 * A display name for the object instance.
 */
displayName?: string,

/**
 * The set of property values for this object.  Some of these properties may be defaults provided by the IVisual.
 */
properties: {
[propertyName: string]: powerbi$DataViewPropertyValue
},

/**
 * The selector that identifies this object.
 */
selector: data$Selector,

/**
 * (Optional) Defines the constrained set of valid values for a property.
 */
validValues?: {
[propertyName: string]: string[] | powerbi$ValidationOptions
},

/**
 * (Optional) VisualObjectInstanceEnumeration category index.
 */
containerIdx?: number,

/**
 * (Optional) Set the required type for particular properties that support variant types.
 */
propertyTypes?: {
[propertyName: string]: powerbi$ValueTypeDescriptor
}
} 

declare type powerbi$VisualObjectInstanceEnumeration = powerbi$VisualObjectInstance[] | powerbi$VisualObjectInstanceEnumerationObject;

declare interface powerbi$ValidationOptions {
numberRange?: powerbi$NumberRange
} 

declare interface powerbi$VisualObjectInstanceEnumerationObject {

/**
 * The visual object instances.
 */
instances: powerbi$VisualObjectInstance[],

/**
 * Defines a set of containers for related object instances.
 */
containers?: powerbi$VisualObjectInstanceContainer[]
} 

declare interface powerbi$VisualObjectInstanceContainer {
displayName: powerbi$data.data$DisplayNameGetter
} 

declare interface powerbi$VisualObjectInstancesToPersist {

/**
 * Instances which should be merged with existing instances.
 */
merge?: powerbi$VisualObjectInstance[],

/**
 * Instances which should replace existing instances.
 */
replace?: powerbi$VisualObjectInstance[],

/**
 * Instances which should be deleted from the existing instances.
 */
remove?: powerbi$VisualObjectInstance[],

/**
 * Instances which should be deleted from the existing objects.
 */
removeObject?: powerbi$VisualObjectInstance[]
} 

declare interface powerbi$EnumerateVisualObjectInstancesOptions {
objectName: string
} 

declare interface powerbi$VisualObjectRepetition {

/**
 * The selector that identifies the objects.
 */
selector: data$Selector,

/**
 * Used to group differernt repetitions into containers. That will be used as the container displayName in the PropertyPane
 */
containerName?: string,

/**
 * The set of repetition descriptors for this object.
 */
objects: {
[objectName: string]: powerbi$DataViewRepetitionObjectDescriptor
}
} 

declare interface powerbi$DataViewRepetitionObjectDescriptor {

/**
 * Properties used for formatting (e.g., Conditional Formatting).
 */
formattingProperties?: string[]
} 

declare interface visual$IVisual {

/**
 * Notifies the visual that it is being destroyed, and to do any cleanup necessary (such as unsubscribing event handlers).
 */
destroy(): void,

/**
 * Notifies the IVisual of an update (data, viewmode, size change).
 */
update<T>(options: visual$VisualUpdateOptions, viewModel?: T): void,

/**
 * Gets the set of objects that the visual is currently displaying.
 */
enumerateObjectInstances(
options: powerbi$EnumerateVisualObjectInstancesOptions): powerbi$VisualObjectInstanceEnumeration
} 

declare interface visual$IVisualHost {
instanceId: string,
createSelectionIdBuilder: () => powerbi$visuals.visuals$ISelectionIdBuilder,
createSelectionManager: () => extensibility$ISelectionManager,
colorPalette: extensibility$IColorPalette,
persistProperties: (changes: powerbi$VisualObjectInstancesToPersist) => void,
applyJsonFilter: (
filter: powerbi$IFilter,
objectName: string,
propertyName: string,
action: powerbi$FilterAction) => void,
tooltipService: extensibility$ITooltipService,
telemetry: extensibility$ITelemetryService,
authenticationService: extensibility$IAuthenticationService,
locale: string,
allowInteractions: boolean,
launchUrl: (url: string) => void,
refreshHostData: () => void,
createLocalizationManager: () => extensibility$ILocalizationManager
} 

declare interface visual$VisualUpdateOptions {
type: powerbi$VisualUpdateType,
viewport: powerbi$IViewport,
dataViews: powerbi$DataView[],
viewMode?: powerbi$ViewMode,
editMode?: powerbi$EditMode
} 

declare interface visual$VisualConstructorOptions {

/**
 * The loaded module, if any, defined by the IVisualPlugin.module.
 */
module?: any,
element: HTMLElement,
host: visual$IVisualHost
} 

declare type powerbi$IColorInfo = {
value: string
} & powerbi$IStyleInfo


declare interface powerbi$IStyleInfo {
className?: string
} 

declare interface powerbi$IFilter {
conditions?: any
} 
	declare interface jsCommon$IStringResourceProvider {
get(id: string): string,
getOptional(id: string): string
} 
	declare export default typeof powerbi

    }
