
      declare var npm$namespace$breeze: {
        
        DataType: typeof breeze$DataType,
EntityAction: typeof breeze$EntityAction,
EntityState: typeof breeze$EntityState,
FetchStrategy: typeof breeze$FetchStrategy,
FilterQueryOp: typeof breeze$FilterQueryOp,
MergeStrategy: typeof breeze$MergeStrategy,
metadataVersion: typeof breeze$metadataVersion,
remoteAccess_odata: typeof breeze$remoteAccess_odata,
remoteAccess_webApi: typeof breeze$remoteAccess_webApi,
version: typeof breeze$version,
      }

      declare var npm$namespace$core: {
        objectForEach: typeof core$objectForEach,
extend: typeof core$extend,
propEq: typeof core$propEq,
pluck: typeof core$pluck,
arrayEquals: typeof core$arrayEquals,
arrayFirst: typeof core$arrayFirst,
arrayIndexOf: typeof core$arrayIndexOf,
arrayRemoveItem: typeof core$arrayRemoveItem,
arrayZip: typeof core$arrayZip,
requireLib: typeof core$requireLib,
using: typeof core$using,
memoize: typeof core$memoize,
getUuid: typeof core$getUuid,
durationToSeconds: typeof core$durationToSeconds,
isDate: typeof core$isDate,
isGuid: typeof core$isGuid,
isDuration: typeof core$isDuration,
isFunction: typeof core$isFunction,
isEmpty: typeof core$isEmpty,
isNumeric: typeof core$isNumeric,
stringStartsWith: typeof core$stringStartsWith,
stringEndsWith: typeof core$stringEndsWith,
formatString: typeof core$formatString,
titleCase: typeof core$titleCase,
getPropertyDescriptor: typeof core$getPropertyDescriptor,
toJSONSafe: typeof core$toJSONSafe,
toJSONSafeReplacer: typeof core$toJSONSafeReplacer,
        
      }
declare export interface core$ErrorCallback {
(error: Error): void
} 

declare export interface core$IEnum {
contains(object: any): boolean,
fromName(name: string): core$EnumSymbol,
getNames(): string[],
getSymbols(): core$EnumSymbol[]
} 

declare export class core$Enum mixins core$IEnum {
constructor(name: string, methodObj?: any): this;
addSymbol(propertiesObj?: any): core$EnumSymbol;
contains(object: any): boolean;
fromName(name: string): core$EnumSymbol;
getNames(): string[];
getSymbols(): core$EnumSymbol[];
static isSymbol(object: any): boolean;
resolveSymbols(): void
}

declare export class core$EnumSymbol  {
parentEnum: core$IEnum;
getName(): string;
toString(): string
}

declare export class core$Event  {
constructor(name: string, publisher: any, defaultErrorCallback?: core$ErrorCallback): this;
static enable(eventName: string, target: any): void;
static enable(eventName: string, target: any, isEnabled: boolean): void;
static enable(eventName: string, target: any, isEnabled: Function): void;
static isEnabled(eventName: string, target: any): boolean;
publish(data: any, publishAsync?: boolean, errorCallback?: core$ErrorCallback): void;
publishAsync(data: any, errorCallback?: core$ErrorCallback): void;
subscribe(callback?: (data: any) => void): number;
unsubscribe(unsubKey: number): boolean;
clear(): void
}

declare export function core$objectForEach(obj: Object, kvfn: (key: string, value: any) => void): void


declare export function core$extend(target: Object, source: Object): Object


declare export function core$propEq(propertyName: string, value: any): (obj: Object) => boolean


declare export function core$pluck(propertyName: string): (obj: Object) => any


declare export function core$arrayEquals(a1: any[], a2: any[], equalsFn: (e1: any, e2: any) => boolean): boolean


declare export function core$arrayFirst(a1: any[], predicate: (e: any) => boolean): any


declare export function core$arrayIndexOf(a1: any[], predicate: (e: any) => boolean): number


declare export function core$arrayRemoveItem(array: any[], item: any, shouldRemoveMultiple: boolean): any


declare export function core$arrayRemoveItem(
array: any[],
predicate: (e: any) => boolean,
shouldRemoveMultiple: boolean): any


declare export function core$arrayZip(a1: any[], a2: any[], callback: (e1: any, e2: any) => any): any[]


declare export function core$requireLib(libnames: string, errMessage: string): Object


declare export function core$using(obj: Object, property: string, tempValue: any, fn: () => any): any


declare export function core$memoize(fn: (...any: any[]) => any): any


declare export function core$getUuid(): string


declare export function core$durationToSeconds(duration: string): number


declare export function core$isDate(o: any): boolean


declare export function core$isGuid(o: any): boolean


declare export function core$isDuration(o: any): boolean


declare export function core$isFunction(o: any): boolean


declare export function core$isEmpty(o: any): boolean


declare export function core$isNumeric(o: any): boolean


declare export function core$stringStartsWith(str: string, prefix: string): boolean


declare export function core$stringEndsWith(str: string, suffix: string): boolean


declare export function core$formatString(format: string, ...args: any[]): string



/**
 * Change text to title case with spaces, e.g. 'myPropertyName12' to 'My Property Name 12'
 */
declare export function core$titleCase(str: string): string



/**
 * Return the ES5 property descriptor for the property, which may be on a prototype of the object
 */
declare export function core$getPropertyDescriptor(obj: any, propertyName: string): PropertyDescriptor



/**
 * safely perform toJSON logic on objects with cycles.  Replacer function can map or exclude properties.
 */
declare export function core$toJSONSafe(obj: any, replacer: (prop: string, val: any) => any): any



/**
 * Default value replacer for toJSONSafe.  Replaces entityAspect and other internal properties with undefined.
 */
declare export function core$toJSONSafeReplacer(prop: string, val: any): any


declare export interface breeze$Entity {
entityAspect: breeze$EntityAspect,
entityType: breeze$EntityType
} 

declare export interface breeze$ComplexObject {
complexAspect: breeze$ComplexAspect,
complexType: breeze$ComplexType
} 

declare export interface breeze$IProperty {
name: string,
nameOnServer: string,
displayName: string,
parentType: breeze$IStructuralType,
validators: breeze$Validator[],
isDataProperty: boolean,
isNavigationProperty: boolean
} 

declare export interface breeze$IStructuralType {
complexProperties: breeze$DataProperty[],
dataProperties: breeze$DataProperty[],
name: string,
namespace: string,
shortName: string,
unmappedProperties: breeze$DataProperty[],
validators: breeze$Validator[]
} 

declare export class breeze$AutoGeneratedKeyType  {
static Identity: breeze$AutoGeneratedKeyType;
static KeyGenerator: breeze$AutoGeneratedKeyType;
static None: breeze$AutoGeneratedKeyType
}

declare export class breeze$ComplexAspect  {
complexObject: breeze$ComplexObject;
getEntityAspect(): breeze$EntityAspect;
parent: Object;
parentProperty: breeze$DataProperty;
getPropertyPath(propName: string): string;
originalValues: Object
}

declare export class breeze$ComplexType mixins breeze$IStructuralType {
complexProperties: breeze$DataProperty[];
dataProperties: breeze$DataProperty[];
name: string;
namespace: string;
shortName: string;
unmappedProperties: breeze$DataProperty[];
validators: breeze$Validator[];
addProperty(dataProperty: breeze$DataProperty): breeze$ComplexType;
getProperties(): breeze$DataProperty[]
}

declare export class breeze$DataProperty mixins breeze$IProperty {
complexTypeName: string;
concurrencyMode: string;
dataType: breeze$DataTypeSymbol;
defaultValue: any;
isComplexProperty: boolean;
isDataProperty: boolean;
isInherited: boolean;
isNavigationProperty: boolean;
isNullable: boolean;
isPartOfKey: boolean;
isUnmapped: boolean;
maxLength: number;
name: string;
nameOnServer: string;
displayName: string;
parentType: breeze$IStructuralType;
relatedNavigationProperty: breeze$NavigationProperty;
validators: breeze$Validator[];
constructor(breeze$config: breeze$DataPropertyOptions): this
}

declare export interface breeze$DataPropertyOptions {
complexTypeName?: string,
concurrencyMode?: string,
custom?: any,
dataType?: breeze$DataTypeSymbol,
defaultValue?: any,
displayName?: string,
isNullable?: boolean,
isPartOfKey?: boolean,
isScalar?: boolean,
isUnmapped?: boolean,
maxLength?: number,
name?: string,
nameOnServer?: string,
validators?: breeze$Validator[]
} 

declare export class breeze$DataService  {
adapterInstance: breeze$DataServiceAdapter;
adapterName: string;
hasServerMetadata: boolean;
serviceName: string;
uriBuilderName: string;
jsonResultsAdapter: breeze$JsonResultsAdapter;
useJsonp: boolean;
constructor(breeze$config: breeze$DataServiceOptions): this;
using(breeze$config: breeze$DataServiceOptions): breeze$DataService
}

declare export interface breeze$DataServiceOptions {
serviceName?: string,
adapterName?: string,
uriBuilderName?: string,
hasServerMetadata?: boolean,
jsonResultsAdapter?: breeze$JsonResultsAdapter,
useJsonp?: boolean
} 

declare export class breeze$DataServiceAdapter  {
checkForRecomposition(interfaceInitializedArgs: {
interfaceName: string,
isDefault: boolean
}): void;
initialize(): void;
fetchMetadata(
metadataStore: breeze$MetadataStore,
dataService: breeze$DataService): Promise<any>;
executeQuery(
mappingContext: {
getUrl: () => string,
query: breeze$EntityQuery,
dataService: breeze$DataService
}): Promise<any>;
saveChanges(
saveContext: {
resourceName: string,
dataService: breeze$DataService
},
saveBundle: Object): Promise<breeze$SaveResult>;
breeze$JsonResultsAdapter: breeze$JsonResultsAdapter
}

declare export class breeze$JsonResultsAdapter  {
name: string;
extractResults: (data: {}) => {};
extractSaveResults: (data: {}) => any[];
extractKeyMappings: (data: {}) => breeze$KeyMapping[];
visitNode: (
node: {},
queryContext: breeze$QueryContext,
nodeContext: breeze$NodeContext) => {
entityType?: breeze$EntityType,
nodeId?: any,
nodeRefId?: any,
ignore?: boolean
};
constructor(breeze$config: {
name: string,
extractResults?: (data: {}) => {},
extractSaveResults?: (data: {}) => any[],
extractKeyMappings?: (data: {}) => breeze$KeyMapping[],
visitNode: (
node: {},
queryContext: breeze$QueryContext,
nodeContext: breeze$NodeContext) => {
entityType?: breeze$EntityType,
nodeId?: any,
nodeRefId?: any,
ignore?: boolean
}
}): this
}

declare export interface breeze$QueryContext {
url: string,
query: breeze$EntityQuery | string,
entityManager: breeze$EntityManager,
dataService: breeze$DataService,
queryOptions: breeze$QueryOptions
} 

declare export interface breeze$NodeContext {
nodeType: string,
propertyName: string
} 

declare export class breeze$DataTypeSymbol mixins undefined.core$EnumSymbol {
defaultValue: any;
core$isDate: boolean;
isFloat: boolean;
isInteger: boolean;
core$isNumeric: boolean;
quoteJsonOData: boolean;
validatorCtor: (context: any) => breeze$Validator;

/**
 * Function to convert a value from string to this DataType.  Note that this will be called each time a property is changed, so make it fast.
 */
parse: (val: any, sourceTypeName?: string) => any;

/**
 * Function to format this DataType for OData queries.
 */
fmtOData: (val: any) => any;

/**
 * Optional function to get the next value for key generation, if this datatype is used as a key.  Uses an internal table of previous values.
 */
getNext: () => any;

/**
 * Optional function to normalize a data value for comparison, if its value cannot be used directly.  Note that this will be called each time a property is changed, so make it fast.
 */
normalize: (val: any) => any;

/**
 * Optional function to get the next value when the datatype is used as a concurrency property.
 */
getConcurrencyValue: (val: any) => any;

/**
 * Optional function to convert a raw (server) value from string to this DataType.
 */
parseRawValue: (val: any) => any
}

declare export type breeze$DataType = {
Binary: breeze$DataTypeSymbol,
Boolean: breeze$DataTypeSymbol,
Byte: breeze$DataTypeSymbol,
DateTime: breeze$DataTypeSymbol,
DateTimeOffset: breeze$DataTypeSymbol,
Decimal: breeze$DataTypeSymbol,
Double: breeze$DataTypeSymbol,
Guid: breeze$DataTypeSymbol,
Int16: breeze$DataTypeSymbol,
Int32: breeze$DataTypeSymbol,
Int64: breeze$DataTypeSymbol,
Single: breeze$DataTypeSymbol,
String: breeze$DataTypeSymbol,
Time: breeze$DataTypeSymbol,
Undefined: breeze$DataTypeSymbol,
constants: {
nextNumber: number,
nextNumberIncrement: number,
stringPrefix: string
},
fromEdmDataType(typeName: string): breeze$DataTypeSymbol,
fromValue(val: any): breeze$DataTypeSymbol,
getComparableFn(dataType: breeze$DataTypeSymbol): (value: any) => any,
parseDateAsUTC(source: any): Date,
parseDateFromServer(date: any): Date,
parseRawValue(val: any, dataType?: breeze$DataTypeSymbol): any,
parseTimeFromServer(source: any): string
} & undefined.core$IEnum


declare export var breeze$DataType: breeze$DataType;

declare export class breeze$EntityActionSymbol mixins undefined.core$EnumSymbol {}

declare export type breeze$EntityAction = {
AcceptChanges: breeze$EntityActionSymbol,
Attach: breeze$EntityActionSymbol,
AttachOnImport: breeze$EntityActionSymbol,
AttachOnQuery: breeze$EntityActionSymbol,
Clear: breeze$EntityActionSymbol,
Detach: breeze$EntityActionSymbol,
EntityStateChange: breeze$EntityActionSymbol,
MergeOnImport: breeze$EntityActionSymbol,
MergeOnSave: breeze$EntityActionSymbol,
MergeOnQuery: breeze$EntityActionSymbol,
PropertyChange: breeze$EntityActionSymbol,
RejectChanges: breeze$EntityActionSymbol
} & undefined.core$IEnum


declare export var breeze$EntityAction: breeze$EntityAction;

declare export class breeze$EntityAspect  {
entity: breeze$Entity;
entityManager: breeze$EntityManager;
entityState: breeze$EntityStateSymbol;
isBeingSaved: boolean;
originalValues: Object;
extraMetadata: Object;
propertyChanged: breeze$PropertyChangedEvent;
validationErrorsChanged: breeze$ValidationErrorsChangedEvent;
acceptChanges(): void;
addValidationError(validationError: breeze$ValidationError): void;
clearValidationErrors(): void;
getKey(forceRefresh?: boolean): breeze$EntityKey;
getValidationErrors(): breeze$ValidationError[];
getValidationErrors(property: string): breeze$ValidationError[];
getValidationErrors(property: breeze$IProperty): breeze$ValidationError[];
hasValidationErrors: boolean;
isNavigationPropertyLoaded(navigationProperty: string): boolean;
isNavigationPropertyLoaded(navigationProperty: breeze$NavigationProperty): boolean;
loadNavigationProperty(
navigationProperty: string,
callback?: Function,
errorCallback?: Function): Promise<breeze$QueryResult>;
loadNavigationProperty(
navigationProperty: breeze$NavigationProperty,
callback?: Function,
errorCallback?: Function): Promise<breeze$QueryResult>;
rejectChanges(): void;
removeValidationError(validator: breeze$Validator): void;
removeValidationError(validator: breeze$Validator, property: breeze$DataProperty): void;
removeValidationError(validator: breeze$Validator, property: breeze$NavigationProperty): void;
removeValidationError(validationError: breeze$ValidationError): void;
setAdded(): void;
setDeleted(): void;
setDetached(): void;
setModified(): void;
setUnchanged(): void;
setEntityState(entityState: breeze$EntityStateSymbol): void;
validateEntity(): boolean;
validateProperty(property: string, context?: any): boolean;
validateProperty(property: breeze$DataProperty, context?: any): boolean;
validateProperty(property: breeze$NavigationProperty, context?: any): boolean
}

declare export class breeze$PropertyChangedEventArgs  {
entity: breeze$Entity;
property: breeze$IProperty;
propertyName: string;
oldValue: any;
newValue: any;
parent: any
}

declare export class breeze$PropertyChangedEvent mixins undefined.core$Event {
subscribe(callback?: (data: breeze$PropertyChangedEventArgs) => void): number
}

declare export class breeze$ValidationErrorsChangedEventArgs  {
entity: breeze$Entity;
added: breeze$ValidationError[];
removed: breeze$ValidationError[]
}

declare export class breeze$ValidationErrorsChangedEvent mixins undefined.core$Event {
subscribe(callback?: (data: breeze$ValidationErrorsChangedEventArgs) => void): number
}

declare export class breeze$EntityKey  {
constructor(entityType: breeze$EntityType, keyValue: any): this;
constructor(entityType: breeze$EntityType, keyValues: any[]): this;
equals(entityKey: breeze$EntityKey): boolean;
static equals(k1: breeze$EntityKey, k2: breeze$EntityKey): boolean;
entityType: breeze$EntityType;
values: any[]
}

declare export interface breeze$EntityByKeyResult {
entity: breeze$Entity,
entityKey: breeze$EntityKey,
fromCache: boolean
} 

declare export interface breeze$ExportEntitiesOptions {
asString: boolean,
includeMetadata: boolean
} 

declare export class breeze$EntityManager  {
dataService: breeze$DataService;
keyGeneratorCtor: Function;
metadataStore: breeze$MetadataStore;
queryOptions: breeze$QueryOptions;
saveOptions: breeze$SaveOptions;
serviceName: string;
validationOptions: breeze$ValidationOptions;
entityChanged: breeze$EntityChangedEvent;
hasChangesChanged: breeze$HasChangesChangedEvent;
validationErrorsChanged: breeze$ValidationErrorsChangedEvent;
constructor(breeze$config?: breeze$EntityManagerOptions): this;
constructor(breeze$config?: string): this;
acceptChanges(): void;
addEntity(entity: breeze$Entity): breeze$Entity;
attachEntity(
entity: breeze$Entity,
entityState?: breeze$EntityStateSymbol,
mergeStrategy?: breeze$MergeStrategySymbol): breeze$Entity;
clear(): void;
createEmptyCopy(): breeze$EntityManager;
createEntity(
typeName: string,
breeze$config?: {},
entityState?: breeze$EntityStateSymbol,
mergeStrategy?: breeze$MergeStrategySymbol): breeze$Entity;
createEntity(
entityType: breeze$EntityType,
breeze$config?: {},
entityState?: breeze$EntityStateSymbol,
mergeStrategy?: breeze$MergeStrategySymbol): breeze$Entity;
detachEntity(entity: breeze$Entity): boolean;
executeQuery(
query: string,
callback?: breeze$ExecuteQuerySuccessCallback,
errorCallback?: breeze$ExecuteQueryErrorCallback): Promise<breeze$QueryResult>;
executeQuery(
query: breeze$EntityQuery,
callback?: breeze$ExecuteQuerySuccessCallback,
errorCallback?: breeze$ExecuteQueryErrorCallback): Promise<breeze$QueryResult>;
executeQueryLocally(query: breeze$EntityQuery): breeze$Entity[];
exportEntities(entities?: breeze$Entity[], includeMetadata?: boolean): string;
exportEntities(entities?: breeze$Entity[], options?: breeze$ExportEntitiesOptions): any;
fetchEntityByKey(
typeName: string,
keyValue: any,
checkLocalCacheFirst?: boolean): Promise<breeze$EntityByKeyResult>;
fetchEntityByKey(
typeName: string,
keyValues: any[],
checkLocalCacheFirst?: boolean): Promise<breeze$EntityByKeyResult>;
fetchEntityByKey(entityKey: breeze$EntityKey): Promise<breeze$EntityByKeyResult>;
fetchMetadata(
callback?: (schema: any) => void,
errorCallback?: breeze$core.core$ErrorCallback): Promise<any>;
generateTempKeyValue(entity: breeze$Entity): any;
getChanges(): breeze$Entity[];
getChanges(entityTypeName: string): breeze$Entity[];
getChanges(entityTypeNames: string[]): breeze$Entity[];
getChanges(entityType: breeze$EntityType): breeze$Entity[];
getChanges(entityTypes: breeze$EntityType[]): breeze$Entity[];
getEntities(
entityTypeName: string,
entityState?: breeze$EntityStateSymbol): breeze$Entity[];
getEntities(
entityTypeNames?: string[],
entityState?: breeze$EntityStateSymbol): breeze$Entity[];
getEntities(
entityTypeName?: string,
entityStates?: breeze$EntityStateSymbol[]): breeze$Entity[];
getEntities(
entityTypeNames?: string[],
entityStates?: breeze$EntityStateSymbol[]): breeze$Entity[];
getEntities(
entityType: breeze$EntityType,
entityState?: breeze$EntityStateSymbol): breeze$Entity[];
getEntities(
entityTypes?: breeze$EntityType[],
entityState?: breeze$EntityStateSymbol): breeze$Entity[];
getEntities(
entityType?: breeze$EntityType,
entityStates?: breeze$EntityStateSymbol[]): breeze$Entity[];
getEntities(
entityTypes?: breeze$EntityType[],
entityStates?: breeze$EntityStateSymbol[]): breeze$Entity[];
getEntityByKey(typeName: string, keyValue: any): breeze$Entity;
getEntityByKey(typeName: string, keyValues: any[]): breeze$Entity;
getEntityByKey(entityKey: breeze$EntityKey): breeze$Entity;
hasChanges(): boolean;
hasChanges(entityTypeName: string): boolean;
hasChanges(entityTypeNames: string[]): boolean;
hasChanges(entityType: breeze$EntityType): boolean;
hasChanges(entityTypes: breeze$EntityType[]): boolean;
static importEntities(
exportedString: string,
breeze$config?: {
mergeStrategy?: breeze$MergeStrategySymbol,
metadataVersionFn?: (any: any) => void
}): breeze$EntityManager;
static importEntities(
exportedData: Object,
breeze$config?: {
mergeStrategy?: breeze$MergeStrategySymbol,
metadataVersionFn?: (any: any) => void
}): breeze$EntityManager;
importEntities(
exportedString: string,
breeze$config?: {
mergeStrategy?: breeze$MergeStrategySymbol,
metadataVersionFn?: (any: any) => void
}): {
entities: breeze$Entity[],
tempKeyMapping: {
[key: string]: breeze$EntityKey
}
};
importEntities(
exportedData: Object,
breeze$config?: {
mergeStrategy?: breeze$MergeStrategySymbol,
metadataVersionFn?: (any: any) => void
}): {
entities: breeze$Entity[],
tempKeyMapping: {
[key: string]: breeze$EntityKey
}
};
rejectChanges(): breeze$Entity[];
saveChanges(
entities?: breeze$Entity[],
saveOptions?: breeze$SaveOptions,
callback?: breeze$SaveChangesSuccessCallback,
errorCallback?: breeze$SaveChangesErrorCallback): Promise<breeze$SaveResult>;
setProperties(breeze$config: breeze$EntityManagerProperties): void
}

declare export interface breeze$EntityManagerOptions {
serviceName?: string,
dataService?: breeze$DataService,
metadataStore?: breeze$MetadataStore,
queryOptions?: breeze$QueryOptions,
saveOptions?: breeze$SaveOptions,
validationOptions?: breeze$ValidationOptions,
keyGeneratorCtor?: Function
} 

declare export interface breeze$EntityManagerProperties {
serviceName?: string,
dataService?: breeze$DataService,
metadataStore?: breeze$MetadataStore,
queryOptions?: breeze$QueryOptions,
saveOptions?: breeze$SaveOptions,
validationOptions?: breeze$ValidationOptions,
keyGeneratorCtor?: Function
} 

declare export interface breeze$ExecuteQuerySuccessCallback {
(data: breeze$QueryResult): void
} 

declare export interface breeze$ExecuteQueryErrorCallback {
(error: {
query: breeze$EntityQuery,
httpResponse: breeze$HttpResponse,
entityManager: breeze$EntityManager,
message?: string,
stack?: string
}): void
} 

declare export interface breeze$SaveChangesSuccessCallback {
(saveResult: breeze$SaveResult): void
} 

declare export interface breeze$EntityError {
entity: breeze$Entity,
errorMessage: string,
errorName: string,
isServerError: boolean,
propertyName: string
} 

declare export interface breeze$SaveChangesErrorCallback {
(error: {
entityErrors: breeze$EntityError[],
httpResponse: breeze$HttpResponse,
message: string,
stack?: string,
status?: number
}): void
} 

declare export class breeze$EntityChangedEventArgs  {
entity: breeze$Entity;
entityAction: breeze$EntityActionSymbol;
args: Object
}

declare export class breeze$EntityChangedEvent mixins undefined.core$Event {
subscribe(callback?: (data: breeze$EntityChangedEventArgs) => void): number
}

declare export class breeze$HasChangesChangedEventArgs  {
entityManager: breeze$EntityManager;
hasChanges: boolean
}

declare export class breeze$HasChangesChangedEvent mixins undefined.core$Event {
subscribe(callback?: (data: breeze$HasChangesChangedEventArgs) => void): number
}

declare export class breeze$EntityQuery  {
entityManager: breeze$EntityManager;
orderByClause: breeze$OrderByClause;
parameters: Object;
queryOptions: breeze$QueryOptions;
resourceName: string;
resultEntityType: breeze$EntityType;
skipCount: number;
takeCount: number;
wherePredicate: breeze$Predicate;
constructor(resourceName?: string): this;

/**
 * Create query from an expression tree
 */
constructor(tree: Object): this;
execute(
callback?: breeze$ExecuteQuerySuccessCallback,
errorCallback?: breeze$ExecuteQueryErrorCallback): Promise<breeze$QueryResult>;
executeLocally(): breeze$Entity[];
expand(propertyPaths: string[]): breeze$EntityQuery;
expand(propertyPaths: string): breeze$EntityQuery;
static from(resourceName: string): breeze$EntityQuery;
from(resourceName: string): breeze$EntityQuery;
static fromEntities(entity: breeze$Entity): breeze$EntityQuery;
static fromEntities(entities: breeze$Entity[]): breeze$EntityQuery;
static fromEntityKey(entityKey: breeze$EntityKey): breeze$EntityQuery;
static fromEntityNavigation(
entity: breeze$Entity,
navigationProperty: breeze$NavigationProperty): breeze$EntityQuery;
inlineCount(enabled?: boolean): breeze$EntityQuery;
noTracking(enabled?: boolean): breeze$EntityQuery;
orderBy(propertyPaths: string, isDescending?: boolean): breeze$EntityQuery;
orderBy(propertyPaths: string[], isDescending?: boolean): breeze$EntityQuery;
orderByDesc(propertyPaths: string): breeze$EntityQuery;
orderByDesc(propertyPaths: string[]): breeze$EntityQuery;
select(propertyPaths: string): breeze$EntityQuery;
select(propertyPaths: string[]): breeze$EntityQuery;
skip(count: number): breeze$EntityQuery;
take(count: number): breeze$EntityQuery;
top(count: number): breeze$EntityQuery;
toType(typeName: string): breeze$EntityQuery;
toType(type: breeze$EntityType): breeze$EntityQuery;
using(obj: breeze$EntityManager): breeze$EntityQuery;
using(obj: breeze$DataService): breeze$EntityQuery;
using(obj: breeze$JsonResultsAdapter): breeze$EntityQuery;
using(obj: breeze$QueryOptions): breeze$EntityQuery;
using(obj: breeze$MergeStrategySymbol): breeze$EntityQuery;
using(obj: breeze$FetchStrategySymbol): breeze$EntityQuery;
where(predicate: breeze$Predicate): breeze$EntityQuery;
where(property: string, operator: string, value: any): breeze$EntityQuery;
where(
property: string,
operator: breeze$FilterQueryOpSymbol,
value: any): breeze$EntityQuery;
where(
property: string,
filterop: breeze$FilterQueryOpSymbol,
property2: string,
filterop2: breeze$FilterQueryOpSymbol,
value: any): breeze$EntityQuery;
where(
property: string,
filterop: string,
property2: string,
filterop2: string,
value: any): breeze$EntityQuery;
where(predicate: breeze$FilterQueryOpSymbol): breeze$EntityQuery;
where(
anArray: breeze$IRecursiveArray<string | number | breeze$FilterQueryOpSymbol | breeze$Predicate>): breeze$EntityQuery;
withParameters(params: Object): breeze$EntityQuery;
toJSON(): string
}

declare export interface breeze$OrderByClause {} 

declare export class breeze$EntityStateSymbol mixins undefined.core$EnumSymbol {
isAdded(): boolean;
isAddedModifiedOrDeleted(): boolean;
isDeleted(): boolean;
isDetached(): boolean;
isModified(): boolean;
isUnchanged(): boolean;
isUnchangedOrModified(): boolean
}

declare export type breeze$EntityState = {
Added: breeze$EntityStateSymbol,
Deleted: breeze$EntityStateSymbol,
Detached: breeze$EntityStateSymbol,
Modified: breeze$EntityStateSymbol,
Unchanged: breeze$EntityStateSymbol
} & undefined.core$IEnum


declare export var breeze$EntityState: breeze$EntityState;

declare export class breeze$EntityType mixins breeze$IStructuralType {
autoGeneratedKeyType: breeze$AutoGeneratedKeyType;
baseEntityType: breeze$EntityType;
complexProperties: breeze$DataProperty[];
concurrencyProperties: breeze$DataProperty[];
dataProperties: breeze$DataProperty[];
defaultResourceName: string;
foreignKeyProperties: breeze$DataProperty[];
isAbstract: boolean;
keyProperties: breeze$DataProperty[];
metadataStore: breeze$MetadataStore;
name: string;
namespace: string;
navigationProperties: breeze$NavigationProperty[];
shortName: string;
unmappedProperties: breeze$DataProperty[];
validators: breeze$Validator[];
constructor(breeze$config: breeze$MetadataStore): this;
constructor(breeze$config: breeze$EntityTypeOptions): this;
addProperty(property: breeze$IProperty): void;
addValidator(validator: breeze$Validator, property?: breeze$IProperty): void;
createEntity(initialValues?: Object): breeze$Entity;
getCtor(): Function;
getDataProperty(propertyName: string): breeze$DataProperty;
getNavigationProperty(propertyName: string): breeze$NavigationProperty;
getProperties(): breeze$IProperty[];
getProperty(propertyPath: string, throwIfNotFound?: boolean): breeze$IProperty;
getPropertyNames(): string[];
getSelfAndSubtypes(): breeze$EntityType[];
isSubtypeOf(entityType: breeze$EntityType): boolean;
setProperties(breeze$config: breeze$EntityTypeProperties): void;
toString(): string
}

declare export interface breeze$EntityTypeOptions {
shortName?: string,
namespace?: string,
autoGeneratedKeyType?: breeze$AutoGeneratedKeyType,
defaultResourceName?: string,
dataProperties?: breeze$DataProperty[],
navigationProperties?: breeze$NavigationProperty[]
} 

declare export interface breeze$EntityTypeProperties {
autoGeneratedKeyType?: breeze$AutoGeneratedKeyType,
defaultResourceName?: string,
serializerFn?: (dataProperty: breeze$DataProperty, value: any) => any
} 

declare export class breeze$FetchStrategySymbol mixins undefined.core$EnumSymbol {}

declare export type breeze$FetchStrategy = {
FromLocalCache: breeze$FetchStrategySymbol,
FromServer: breeze$FetchStrategySymbol
} & undefined.core$IEnum


declare export var breeze$FetchStrategy: breeze$FetchStrategy;

declare export class breeze$FilterQueryOpSymbol mixins undefined.core$EnumSymbol {}

declare export type breeze$FilterQueryOp = {
Contains: breeze$FilterQueryOpSymbol,
EndsWith: breeze$FilterQueryOpSymbol,
Equals: breeze$FilterQueryOpSymbol,
GreaterThan: breeze$FilterQueryOpSymbol,
GreaterThanOrEqual: breeze$FilterQueryOpSymbol,
IsTypeOf: breeze$FilterQueryOpSymbol,
LessThan: breeze$FilterQueryOpSymbol,
LessThanOrEqual: breeze$FilterQueryOpSymbol,
NotEquals: breeze$FilterQueryOpSymbol,
StartsWith: breeze$FilterQueryOpSymbol,
Any: breeze$FilterQueryOpSymbol,
All: breeze$FilterQueryOpSymbol
} & undefined.core$IEnum


declare export var breeze$FilterQueryOp: breeze$FilterQueryOp;

declare export class breeze$LocalQueryComparisonOptions  {
static caseInsensitiveSQL: breeze$LocalQueryComparisonOptions;
static defaultInstance: breeze$LocalQueryComparisonOptions;
constructor(breeze$config: {
name?: string,
isCaseSensitive?: boolean,
usesSql92CompliantStringComparison?: boolean
}): this;
setAsDefault(): void
}

declare export class breeze$MergeStrategySymbol mixins undefined.core$EnumSymbol {}

declare export type breeze$MergeStrategy = {
OverwriteChanges: breeze$MergeStrategySymbol,
PreserveChanges: breeze$MergeStrategySymbol,
SkipMerge: breeze$MergeStrategySymbol,
Disallowed: breeze$MergeStrategySymbol
} & undefined.core$IEnum


declare export var breeze$MergeStrategy: breeze$MergeStrategy;

declare export class breeze$MetadataStore  {
constructor(): this;
constructor(breeze$config?: breeze$MetadataStoreOptions): this;
namingConvention: breeze$NamingConvention;
addDataService(dataService: breeze$DataService, shouldOverwrite?: boolean): void;
addEntityType(structuralType: breeze$IStructuralType): void;
exportMetadata(): string;
fetchMetadata(
dataService: string,
callback?: (data: any) => void,
errorCallback?: breeze$core.core$ErrorCallback): Promise<any>;
fetchMetadata(
dataService: breeze$DataService,
callback?: (data: any) => void,
errorCallback?: breeze$core.core$ErrorCallback): Promise<any>;
getDataService(serviceName: string): breeze$DataService;
getEntityType(entityTypeName: string, okIfNotFound?: boolean): breeze$IStructuralType;
getEntityTypes(): breeze$IStructuralType[];
hasMetadataFor(serviceName: string): boolean;
static importMetadata(exportedString: string): breeze$MetadataStore;
static normalizeTypeName(typeName: string): string;
importMetadata(exportedString: string, allowMerge?: boolean): breeze$MetadataStore;
isEmpty(): boolean;
registerEntityTypeCtor(
entityTypeName: string,
entityCtor: Function,
initializationFn?: (entity: breeze$Entity) => void,
noTrackingFn?: (node: Object, entityType: breeze$EntityType) => Object): void;
trackUnmappedType(entityCtor: Function, interceptor?: Function): void;
setEntityTypeForResourceName(resourceName: string, entityType: breeze$EntityType): void;
setEntityTypeForResourceName(resourceName: string, entityTypeName: string): void;
getEntityTypeNameForResourceName(resourceName: string): string;
setProperties(breeze$config: {
name?: string,
serializerFn?: Function
}): void
}

declare export interface breeze$MetadataStoreOptions {
namingConvention?: breeze$NamingConvention,
localQueryComparisonOptions?: breeze$LocalQueryComparisonOptions
} 

declare export class breeze$NamingConvention  {
static camelCase: breeze$NamingConvention;
static defaultInstance: breeze$NamingConvention;
static none: breeze$NamingConvention;
constructor(breeze$config: breeze$NamingConventionOptions): this;
clientPropertyNameToServer(clientPropertyName: string): string;
clientPropertyNameToServer(clientPropertyName: string, property: breeze$IProperty): string;
serverPropertyNameToClient(serverPropertyName: string): string;
serverPropertyNameToClient(serverPropertyName: string, property: breeze$IProperty): string;
setAsDefault(): breeze$NamingConvention
}

declare export interface breeze$NamingConventionOptions {
serverPropertyNameToClient?: (name: string) => string,
clientPropertyNameToServer?: (name: string) => string
} 

declare export class breeze$NavigationProperty mixins breeze$IProperty {
associationName: string;
entityType: breeze$EntityType;
foreignKeyNames: string[];
inverse: breeze$NavigationProperty;
isDataProperty: boolean;
isNavigationProperty: boolean;
isScalar: boolean;
name: string;
nameOnServer: string;
displayName: string;
parentType: breeze$IStructuralType;
relatedDataProperties: breeze$DataProperty[];
validators: breeze$Validator[];
constructor(breeze$config: breeze$NavigationPropertyOptions): this
}

declare export interface breeze$NavigationPropertyOptions {
name?: string,
nameOnServer?: string,
entityTypeName: string,
isScalar?: boolean,
associationName?: string,
foreignKeyNames?: string[],
foreignKeyNamesOnServer?: string[],
validators?: breeze$Validator[]
} 

declare export interface breeze$IRecursiveArray<T> {
[i: number]: T | breeze$IRecursiveArray<T>
} 

declare export class breeze$Predicate  {
constructor(): this;
constructor(property: string, operator: string, value: any): this;
constructor(property: string, operator: breeze$FilterQueryOpSymbol, value: any): this;
constructor(property: string, operator: string, value: {
value: any,
isLiteral?: boolean,
dataType?: breeze$breeze$DataType
}): this;
constructor(property: string, operator: breeze$FilterQueryOpSymbol, value: {
value: any,
isLiteral?: boolean,
dataType?: breeze$breeze$DataType
}): this;
constructor(property: string, filterop: breeze$FilterQueryOpSymbol, property2: string, filterop2: breeze$FilterQueryOpSymbol, value: any): this;
constructor(property: string, filterop: string, property2: string, filterop2: string, value: any): this;
constructor(passthru: string): this;
constructor(predicate: breeze$Predicate): this;
constructor(anArray: breeze$IRecursiveArray<string | number | breeze$FilterQueryOpSymbol | breeze$Predicate>): this;
and: breeze$PredicateMethod;
static and: breeze$PredicateMethod;
static create: breeze$PredicateMethod;
static isPredicate(o: any): boolean;
static not(predicate: breeze$Predicate): breeze$Predicate;
not(): breeze$Predicate;
static or: breeze$PredicateMethod;
or: breeze$PredicateMethod;
toFunction(): Function;
toString(): string;
validate(entityType: breeze$EntityType): void;
toJSON(): string
}

declare export interface breeze$PredicateMethod {
(predicates: breeze$Predicate[]): breeze$Predicate,
(...predicates: breeze$Predicate[]): breeze$Predicate,
(property: string, operator: string, value: any, valueIsLiteral?: boolean): breeze$Predicate,
(property: string, operator: breeze$FilterQueryOpSymbol, value: any, valueIsLiteral?: boolean): breeze$Predicate,
(property: string, filterop: breeze$FilterQueryOpSymbol, property2: string, filterop2: breeze$FilterQueryOpSymbol, value: any): breeze$Predicate,
(property: string, filterop: string, property2: string, filterop2: string, value: any): breeze$Predicate
} 

declare export class breeze$QueryOptions  {
static defaultInstance: breeze$QueryOptions;
fetchStrategy: breeze$FetchStrategySymbol;
mergeStrategy: breeze$MergeStrategySymbol;

/**
 * Whether query should return cached deleted entities (false by default)
 */
includeDeleted: boolean;
constructor(breeze$config?: breeze$QueryOptionsConfiguration): this;
setAsDefault(): void;
using(breeze$config: breeze$QueryOptionsConfiguration): breeze$QueryOptions;
using(breeze$config: breeze$MergeStrategySymbol): breeze$QueryOptions;
using(breeze$config: breeze$FetchStrategySymbol): breeze$QueryOptions
}

declare export interface breeze$QueryOptionsConfiguration {
fetchStrategy?: breeze$FetchStrategySymbol,
mergeStrategy?: breeze$MergeStrategySymbol
} 

declare export interface breeze$HttpResponse {
breeze$config: any,
data: breeze$Entity[],
error?: any,
saveContext?: any,
status: number,
getHeaders(headerName: string): string
} 

declare export interface breeze$QueryResult {

/**
 * Top level entities returned
 */
results: breeze$Entity[],

/**
 * Query that was executed
 */
query: breeze$EntityQuery,

/**
 * Raw response from the server
 */
httpResponse: breeze$HttpResponse,

/**
 * EntityManager that executed the query
 */
entityManager?: breeze$EntityManager,

/**
 * Total number of results available on the server
 */
inlineCount?: number,

/**
 * All entities returned by the query.  Differs from results when an expand is used.
 */
retrievedEntities?: breeze$Entity[]
} 

declare export class breeze$SaveOptions  {
allowConcurrentSaves: boolean;
resourceName: string;
dataService: breeze$DataService;
tag: Object;
static defaultInstance: breeze$SaveOptions;
constructor(breeze$config?: {
allowConcurrentSaves?: boolean,
resourceName?: string,
dataService?: breeze$DataService,
tag?: any
}): this;
setAsDefault(): breeze$SaveOptions;
using(breeze$config: breeze$SaveOptionsConfiguration): breeze$SaveOptions
}

declare export interface breeze$SaveOptionsConfiguration {
allowConcurrentSaves?: boolean,
resourceName?: string,
dataService?: breeze$DataService,
tag?: Object
} 

declare export interface breeze$SaveResult {
entities: breeze$Entity[],
keyMappings: breeze$KeyMapping[],
XHR: XMLHttpRequest
} 

declare export interface breeze$KeyMapping {
entityTypeName: string,
tempValue: any,
realValue: any
} 

declare export class breeze$ValidationError  {
key: string;
context: any;
errorMessage: string;
property: breeze$IProperty;
propertyName: string;
validator: breeze$Validator;
getKey: (validator: breeze$Validator, property: string) => string;
constructor(validator: breeze$Validator, context: any, errorMessage: string, key: string): this
}

declare export class breeze$ValidationOptions  {
static defaultInstance: breeze$ValidationOptions;
validateOnAttach: boolean;
validateOnPropertyChange: boolean;
validateOnQuery: boolean;
validateOnSave: boolean;
constructor(breeze$config?: breeze$ValidationOptionsConfiguration): this;
setAsDefault(): breeze$ValidationOptions;
using(breeze$config: breeze$ValidationOptionsConfiguration): breeze$ValidationOptions
}

declare export interface breeze$ValidationOptionsConfiguration {
validateOnAttach?: boolean,
validateOnSave?: boolean,
validateOnQuery?: boolean,
validateOnPropertyChange?: boolean
} 

declare export class breeze$Validator  {

/**
 * Map of standard error message templates keyed by validator name.
 */
static messageTemplates: any;
context: any;
name: string;
constructor(name: string, validatorFn: breeze$ValidatorFunction, context?: any): this;
static bool(): breeze$Validator;

/**
 * integer between 0 and 255 inclusive
 */
static byte(context?: {
messageTemplate?: string
}): breeze$Validator;
static date(): breeze$Validator;

/**
 * Returns a ISO 8601 duration string Validator.
 */
static duration(): breeze$Validator;

/**
 * Validators number, double, and single are all the same
 */
static number(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Validators number, double, and single are all the same
 */
static double(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Validators number, double, and single are all the same
 */
static single(context?: {
messageTemplate?: string
}): breeze$Validator;
static guid(): breeze$Validator;
static int16(context?: {
messageTemplate?: string
}): breeze$Validator;
static int32(context?: {
messageTemplate?: string
}): breeze$Validator;
static int64(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Same as int64
 */
static integer(context?: {
messageTemplate?: string
}): breeze$Validator;
static maxLength(context: {
maxLength: number,
messageTemplate?: string
}): breeze$Validator;
static required(context?: {
messageTemplate?: string
}): breeze$Validator;
static string(): breeze$Validator;
static stringLength(
context: {
maxLength: number,
minLength: number,
messageTemplate?: string
}): breeze$Validator;

/**
 * Returns a credit card number validator that performs a Luhn algorithm checksum test for plausability
 */
static creditCard(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Returns a regular expression validator; the expression must be specified in the context parameter
 */
static regularExpression(context: {
expression: RegExp,
messageTemplate?: string
}): breeze$Validator;

/**
 * Returns the email address validator
 */
static emailAddress(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Returns the phone validator, which handles prefix, country code, area code, and local number, with [-/. ] break characters.
 */
static phone(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Returns the URL (protocol required) validator
 */
static url(context?: {
messageTemplate?: string
}): breeze$Validator;

/**
 * Always returns true
 */
static none(): breeze$Validator;

/**
 * Creates a validator instance from a JSON object or an array of instances from an array of JSON objects.
 */
static fromJSON(json: string): breeze$Validator;

/**
 * Register a validator instance so that any deserialized metadata can reference it.
 */
static register(validator: breeze$Validator): void;

/**
 * Register a validator factory so that any deserialized metadata can reference it.
 */
static registerFactory(fn: () => breeze$Validator, name: string): void;

/**
 * Creates a regular expression validator with a fixed expression.
 */
static makeRegExpValidator(
validatorName: string,
expression: RegExp,
defaultMessage: string,
context?: any): breeze$Validator;

/**
 * Run this validator against the specified value.
 * @param {Object} value Value to validate
 * @param {Object} additionalContext Any additional contextual information that the Validator can make use of.
 * @return {breeze$ValidationError | null} A ValidationError if validation fails, null otherwise
 */
validate(value: any, context?: any): breeze$ValidationError;

/**
 * Returns the message generated by the most recent execution of this Validator.
 */
getMessage(): string
}

declare export interface breeze$ValidatorFunction {
(value: any, context: breeze$ValidatorFunctionContext): void
} 

declare export interface breeze$ValidatorFunctionContext {
value: any,
validatorName: string,
displayName: string,
messageTemplate: string,
message?: string
} 

declare export var breeze$metadataVersion: string;

declare export var breeze$remoteAccess_odata: string;

declare export var breeze$remoteAccess_webApi: string;

declare export var breeze$version: string;


      declare var npm$namespace$config: {
        getAdapter: typeof config$getAdapter,
getAdapterInstance: typeof config$getAdapterInstance,
initializeAdapterInstance: typeof config$initializeAdapterInstance,
initializeAdapterInstances: typeof config$initializeAdapterInstances,
registerAdapter: typeof config$registerAdapter,
registerFunction: typeof config$registerFunction,
registerType: typeof config$registerType,
setQ: typeof config$setQ,
        ajax: typeof config$ajax,
dataService: typeof config$dataService,
functionRegistry: typeof config$functionRegistry,
interfaceInitialized: typeof config$interfaceInitialized,
interfaceRegistry: typeof config$interfaceRegistry,
objectRegistry: typeof config$objectRegistry,
stringifyPad: typeof config$stringifyPad,
typeRegistry: typeof config$typeRegistry,
      }
declare export var config$ajax: string;

declare export var config$dataService: string;

declare export var config$functionRegistry: Object;


/**
 * Returns the ctor function used to implement a specific interface with a specific adapter name.
 * @param {String} interfaceName One of the following interface names "ajax", "dataService" or "modelLibrary"
 * @param {String} adapterName The name of any previously registered adapter. If this parameter is omitted then
this method returns the "default" adapter for this interface. If there is no default adapter, then a null is returned.
 * @returns {Function | null} Returns either a ctor function or null.
 */
declare export function config$getAdapter(interfaceName: string, adapterName?: string): Function



/**
 * Returns the adapter instance corresponding to the specified interface and adapter names.
 * @param {String} interfaceName The name of the interface.
 * @param {String} adapterName - The name of a previously registered adapter.  If this parameter is
omitted then the default implementation of the specified interface is returned. If there is
no defaultInstance of this interface, then the first registered instance of this interface is returned.
 * @return {an} instance of the specified adapter}
 */
declare export function config$getAdapterInstance(interfaceName: string, adapterName?: string): Object



/**
 * Initializes a single adapter implementation. Initialization means either newing a instance of the
 * specified interface and then calling "initialize" on it or simply calling "initialize" on the instance
 * if it already exists.
 * @param {String} interfaceName The name of the interface to which the adapter to initialize belongs.
 * @param {String} adapterName - The name of a previously registered adapter to initialize.
 * @param isDefault =true {Boolean} - Whether to make this the default "adapter" for this interface.
 * @return {an} instance of the specified adapter}
 */
declare export function config$initializeAdapterInstance(interfaceName: string, adapterName: string, isDefault?: boolean): Object


declare export interface config$AdapterInstancesConfig {

/**
 * the name of a previously registered "ajax" adapter
 */
config$ajax?: string,

/**
 * the name of a previously registered "dataService" adapter
 */
config$dataService?: string,

/**
 * the name of a previously registered "modelLibrary" adapter
 */
modelLibary?: string,

/**
 * the name of a previously registered "uriBuilder" adapter
 */
uriBuilder?: string
} 


/**
 * Initializes a collection of adapter implementations and makes each one the default for its corresponding interface.
 * @param {config$AdapterInstancesConfig} config
 * @return [array of instances]
 */
declare export function config$initializeAdapterInstances(breeze$config: config$AdapterInstancesConfig): Object[]


declare export var config$interfaceInitialized: core$Event;

declare export var config$interfaceRegistry: Object;

declare export var config$objectRegistry: Object;


/**
 * Method use to register implementations of standard breeze interfaces.  Calls to this method are usually
 * made as the last step within an adapter implementation.
 * @param {String} interfaceName - one of the following interface names "ajax", "dataService" or "modelLibrary"
 * @param {Function} adapterCtor - an ctor function that returns an instance of the specified interface.
 */
declare export function config$registerAdapter(interfaceName: string, adapterCtor: Function): void


declare export function config$registerFunction(fn: Function, fnName: string): void


declare export function config$registerType(ctor: Function, typeName: string): void



/**
 * Set the promise implementation, if Q.js is not found.
 * @param q - implementation of promise.
 * @see http://wiki.commonjs.org/wiki/Promises/A
 */
declare export function config$setQ(q: breeze$breeze$promises.promises$IPromiseService): void


declare export var config$stringifyPad: string;

declare export var config$typeRegistry: Object;

declare export interface promises$IDeferred<T> {
promise: Promise<T>,
resolve(value: T): void,
reject(reason: any): void
} 

declare export interface promises$IPromiseService {
defer<T>(): promises$IDeferred<T>,
reject(reason?: any): Promise<any>,
resolve<T>(object: T): Promise<T>,
resolve<T>(object: Promise<T>): Promise<T>
} declare module 'breeze' {
        declare module.exports: typeof breeze

    }
