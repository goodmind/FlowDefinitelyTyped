declare module 'ember-test-helpers' {
        declare interface TestContext {
store: DS$Store
} 
    }
declare module '@ember/service' {
        declare interface Registry {
store: DS$Store
} 
    }
declare module '@ember/debug/data-adapter' {
        declare export default interface DataAdapter {
store: DS$Store
} 
    }
declare module '@ember/controller' {
        declare export default interface Controller {
store: DS$Store
} 
    }
declare module '@ember/routing/route' {
        declare export default interface Route {
store: DS$Store
} 
    }
declare module 'ember-data' {
        import typeof Ember from 'ember';

	import typeof Evented from '@ember/object/evented';

	import typeof ObjectProxy from '@ember/object/proxy';

	import typeof PromiseProxyMixin from '@ember/object/promise-proxy-mixin';

	import typeof RSVP from 'rsvp';

	import typeof TransformRegistry from 'ember-data/types/registries/transform';

	import typeof ModelRegistry from 'ember-data/types/registries/model';

	import typeof SerializerRegistry from 'ember-data/types/registries/serializer';

	import typeof AdapterRegistry from 'ember-data/types/registries/adapter';

	declare type AttributesFor<Model> = $Keys<DS$Model>;
	declare type RelationshipsFor<Model> = $Keys<DS$Model>;
	declare export interface ChangedAttributes {
[key: string]: [any, any] | void
} 
	declare interface AttributeMeta<Model: DS$Model> {
type: $Keys<TransformRegistry>,
options: {[key: string]: any},
name: AttributesFor<DS$Model>,
parentType: DS$Model,
isAttribute: true
} 
	declare interface RelationshipMeta<Model: DS$Model> {
key: RelationshipsFor<DS$Model>,
kind: "belongsTo" | "hasMany",
type: $Keys<ModelRegistry>,
options: {[key: string]: any},
name: string,
parentType: DS$Model,
isRelationship: true
} 
	declare var DS: typeof npm$namespace$DS;

      declare var npm$namespace$DS: {
        errorsHashToArray: typeof DS$errorsHashToArray,
errorsArrayToHash: typeof DS$errorsArrayToHash,
belongsTo: typeof DS$belongsTo,
hasMany: typeof DS$hasMany,
normalizeModelName: typeof DS$normalizeModelName,
attr: typeof DS$attr,
        VERSION: typeof DS$VERSION,
        
        BuildURLMixin: typeof DS$BuildURLMixin,
AdapterError: typeof DS$AdapterError,
InvalidError: typeof DS$InvalidError,
TimeoutError: typeof DS$TimeoutError,
AbortError: typeof DS$AbortError,
UnauthorizedError: typeof DS$UnauthorizedError,
ForbiddenError: typeof DS$ForbiddenError,
NotFoundError: typeof DS$NotFoundError,
ConflictError: typeof DS$ConflictError,
ServerError: typeof DS$ServerError,
Errors: typeof DS$Errors,
Model: typeof DS$Model,
RootState: typeof DS$RootState,
AdapterPopulatedRecordArray: typeof DS$AdapterPopulatedRecordArray,
FilteredRecordArray: typeof DS$FilteredRecordArray,
RecordArray: typeof DS$RecordArray,
BelongsToReference: typeof DS$BelongsToReference,
HasManyReference: typeof DS$HasManyReference,
RecordReference: typeof DS$RecordReference,
ManyArray: typeof DS$ManyArray,
PromiseArray: typeof DS$PromiseArray,
PromiseObject: typeof DS$PromiseObject,
PromiseManyArray: typeof DS$PromiseManyArray,
SnapshotRecordArray: typeof DS$SnapshotRecordArray,
Snapshot: typeof DS$Snapshot,
Store: typeof DS$Store,
JSONAPIAdapter: typeof DS$JSONAPIAdapter,
RESTAdapter: typeof DS$RESTAdapter,
EmbeddedRecordsMixin: typeof DS$EmbeddedRecordsMixin,
JSONAPISerializer: typeof DS$JSONAPISerializer,
JSONSerializer: typeof DS$JSONSerializer,
RESTSerializer: typeof DS$RESTSerializer,
BooleanTransform: typeof DS$BooleanTransform,
DateTransform: typeof DS$DateTransform,
NumberTransform: typeof DS$NumberTransform,
StringTransform: typeof DS$StringTransform,
Transform: typeof DS$Transform,
Adapter: typeof DS$Adapter,
Serializer: typeof DS$Serializer,
        
      }

/**
 * Convert an hash of errors into an array with errors in JSON-API format.
 */
declare function DS$errorsHashToArray(errors: {}): any[]



/**
 * Convert an array of errors in JSON-API format into an object.
 */
declare function DS$errorsArrayToHash(errors: any[]): {}


declare interface DS$RelationshipOptions<Model> {
async?: boolean,
inverse?: RelationshipsFor<DS$Model> | null,
polymorphic?: boolean
} 

declare interface DS$Sync {
async: false
} 

declare interface DS$Async {
async?: true
} 


/**
 * `DS.belongsTo` is used to define One-To-One and One-To-Many
 * relationships on a [DS.Model](/api/data/classes/DS.Model.html).
 */
declare function DS$belongsTo<K: $Keys<ModelRegistry>>(
modelName: K,
options: DS$RelationshipOptions<$ElementType<ModelRegistry, K>> & DS$Sync): Ember.ComputedProperty<$ElementType<ModelRegistry, K>>


declare function DS$belongsTo<K: $Keys<ModelRegistry>>(
modelName: K,
options?: DS$RelationshipOptions<$ElementType<ModelRegistry, K>> & DS$Async): Ember.ComputedProperty<$ElementType<ModelRegistry, K> & DS$PromiseObject<$ElementType<ModelRegistry, K>>, $ElementType<ModelRegistry, K>>



/**
 * `DS.hasMany` is used to define One-To-Many and Many-To-Many
 * relationships on a [DS.Model](/api/data/classes/DS.Model.html).
 */
declare function DS$hasMany<K: $Keys<ModelRegistry>>(
type: K,
options: DS$RelationshipOptions<$ElementType<ModelRegistry, K>> & DS$Sync): Ember.ComputedProperty<DS$ManyArray<$ElementType<ModelRegistry, K>>>


declare function DS$hasMany<K: $Keys<ModelRegistry>>(
type: K,
options?: DS$RelationshipOptions<$ElementType<ModelRegistry, K>> & DS$Async): Ember.ComputedProperty<DS$PromiseManyArray<$ElementType<ModelRegistry, K>>, Ember.Array<$ElementType<ModelRegistry, K>>>



/**
 * This method normalizes a modelName into the format Ember Data uses
 * internally.
 */
declare function DS$normalizeModelName<K: $Keys<ModelRegistry>>(modelName: K): string


declare var DS$VERSION: string;

declare interface DS$AttrOptions<T= any> {
defaultValue?: T | (() => T),
allowNull?: boolean
} 


/**
 * `DS.attr` defines an attribute on a [DS.Model](/api/data/classes/DS.Model.html).
 * By default, attributes are passed through as-is, however you can specify an
 * optional type to have the value automatically transformed.
 * Ember Data ships with four basic transform types: `string`, `number`,
 * `boolean` and `date`. You can define your own transforms by subclassing
 * [DS.Transform](/api/data/classes/DS.Transform.html).
 */
declare function DS$attr<K: $Keys<TransformRegistry>>(
type: K,
options?: DS$AttrOptions<$ElementType<TransformRegistry, K>>): Ember.ComputedProperty<$ElementType<TransformRegistry, K>>


declare function DS$attr(options?: DS$AttrOptions<>): Ember.ComputedProperty<any>



/**
 * WARNING: This interface is likely to change in order to accomodate https://github.com/emberjs/rfcs/pull/4
 * ## Using BuildURLMixin
 * To use url building, include the mixin when extending an adapter, and call `buildURL` where needed.
 * The default behaviour is designed for RESTAdapter.
 * ### Example
 * ```javascript
 *      * export default DS.Adapter.extend(BuildURLMixin, {
 *      * findRecord: function(store, type, id, snapshot) {
 *      * var url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
 *      * return this.ajax(url, 'GET');
 *      * }
 *      * });
 *      * ```
 * ### Attributes
 * The `host` and `namespace` attributes will be used if defined, and are optional.
 */
declare class DS$BuildURLMixin  {

/**
 * Builds a URL for a given type and optional ID.
 */
buildURL<K: $Keys<ModelRegistry>>(
modelName?: K,
id?: string | any[] | {} | null,
snapshot?: DS$Snapshot<K> | any[] | null,
requestType?: string,
query?: {}): string;

/**
 * Builds a URL for a `store.findRecord(type, id)` call.
 */
urlForFindRecord<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `store.findAll(type)` call.
 */
urlForFindAll<K: $Keys<ModelRegistry>>(
modelName: K,
snapshot: DS$SnapshotRecordArray<K>): string;

/**
 * Builds a URL for a `store.query(type, query)` call.
 */
urlForQuery<K: $Keys<ModelRegistry>>(query: {}, modelName: K): string;

/**
 * Builds a URL for a `store.queryRecord(type, query)` call.
 */
urlForQueryRecord<K: $Keys<ModelRegistry>>(query: {}, modelName: K): string;

/**
 * Builds a URL for coalesceing multiple `store.findRecord(type, id)`
 * records into 1 request when the adapter's `coalesceFindRequests`
 * property is true.
 */
urlForFindMany<K: $Keys<ModelRegistry>>(ids: any[], modelName: K, snapshots: any[]): string;

/**
 * Builds a URL for fetching a async hasMany relationship when a url
 * is not provided by the server.
 */
urlForFindHasMany<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for fetching a async belongsTo relationship when a url
 * is not provided by the server.
 */
urlForFindBelongsTo<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `record.save()` call when the record was created
 * locally using `store.createRecord()`.
 */
urlForCreateRecord<K: $Keys<ModelRegistry>>(modelName: K, snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `record.save()` call when the record has been update locally.
 */
urlForUpdateRecord<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `record.save()` call when the record has been deleted locally.
 */
urlForDeleteRecord<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Determines the pathname for a given type.
 */
pathForType<K: $Keys<ModelRegistry>>(modelName: K): string
}


/**
 * A `DS.AdapterError` is used by an adapter to signal that an error occurred
 * during a request to an external API. It indicates a generic error, and
 * subclasses are used to indicate specific error states. The following
 * subclasses are provided:
 */
declare class DS$AdapterError mixins Ember.Object {}


/**
 * A `DS.InvalidError` is used by an adapter to signal the external API
 * was unable to process a request because the content was not
 * semantically correct or meaningful per the API. Usually this means a
 * record failed some form of server side validation. When a promise
 * from an adapter is rejected with a `DS.InvalidError` the record will
 * transition to the `invalid` state and the errors will be set to the
 * `errors` property on the record.
 */
declare class DS$InvalidError mixins DS$AdapterError {
constructor(errors: any[]): this
}


/**
 * A `DS.TimeoutError` is used by an adapter to signal that a request
 * to the external API has timed out. I.e. no response was received from
 * the external API within an allowed time period.
 */
declare class DS$TimeoutError mixins DS$AdapterError {}


/**
 * A `DS.AbortError` is used by an adapter to signal that a request to
 * the external API was aborted. For example, this can occur if the user
 * navigates away from the current page after a request to the external API
 * has been initiated but before a response has been received.
 */
declare class DS$AbortError mixins DS$AdapterError {}


/**
 * A `DS.UnauthorizedError` equates to a HTTP `401 Unauthorized` response
 * status. It is used by an adapter to signal that a request to the external
 * API was rejected because authorization is required and has failed or has not
 * yet been provided.
 */
declare class DS$UnauthorizedError mixins DS$AdapterError {}


/**
 * A `DS.ForbiddenError` equates to a HTTP `403 Forbidden` response status.
 * It is used by an adapter to signal that a request to the external API was
 * valid but the server is refusing to respond to it. If authorization was
 * provided and is valid, then the authenticated user does not have the
 * necessary permissions for the request.
 */
declare class DS$ForbiddenError mixins DS$AdapterError {}


/**
 * A `DS.NotFoundError` equates to a HTTP `404 Not Found` response status.
 * It is used by an adapter to signal that a request to the external API
 * was rejected because the resource could not be found on the API.
 */
declare class DS$NotFoundError mixins DS$AdapterError {}


/**
 * A `DS.ConflictError` equates to a HTTP `409 Conflict` response status.
 * It is used by an adapter to indicate that the request could not be processed
 * because of a conflict in the request. An example scenario would be when
 * creating a record with a client generated id but that id is already known
 * to the external API.
 */
declare class DS$ConflictError mixins DS$AdapterError {}


/**
 * A `DS.ServerError` equates to a HTTP `500 Internal Server Error` response
 * status. It is used by the adapter to indicate that a request has failed
 * because of an error in the external API.
 */
declare class DS$ServerError mixins DS$AdapterError {}

declare class DS$Errors mixins Ember.Object {

/**
 * DEPRECATED:
 * Register with target handler
 */
registerHandlers(target: {}, becameInvalid: Function, becameValid: Function): any;

/**
 * Returns errors for a given attribute
 */
errorsFor(attribute: string): any[];

/**
 * An array containing all of the error messages for this
 * record. This is useful for displaying all errors to the user.
 */
messages: Ember.ComputedProperty<any[]>;

/**
 * Total number of errors.
 */
length: Ember.ComputedProperty<number>;
isEmpty: Ember.ComputedProperty<boolean>;

/**
 * DEPRECATED:
 * Adds error messages to a given attribute and sends
 * `becameInvalid` event to the record.
 */
add(attribute: string, messages: any[] | string): any;

/**
 * DEPRECATED:
 * Removes all error messages from the given attribute and sends
 * `becameValid` event to the record if there no more errors left.
 */
remove(attribute: string): any;

/**
 * DEPRECATED:
 * Removes all error messages and sends `becameValid` event
 * to the record.
 */
clear(): any;

/**
 * Checks if there is error messages for the given attribute.
 */
has(attribute: string): boolean
}


/**
 * The model class that all Ember Data records descend from.
 * This is the public API of Ember Data models. If you are using Ember Data
 * in your application, this is the class you should use.
 * If you are working on Ember Data internals, you most likely want to be dealing
 * with `InternalModel`
 */
declare class DS$Model mixins Ember.Object {

/**
 * If this property is `true` the record is in the `empty`
 * state. Empty is the first state all records enter after they have
 * been created. Most records created by the store will quickly
 * transition to the `loading` state if data needs to be fetched from
 * the server or the `created` state if the record is created on the
 * client. A record can also enter the empty state if the adapter is
 * unable to locate the record.
 */
isEmpty: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `loading` state. A
 * record enters this state when the store asks the adapter for its
 * data. It remains in this state until the adapter provides the
 * requested data.
 */
isLoading: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `loaded` state. A
 * record enters this state when its data is populated. Most of a
 * record's lifecycle is spent inside substates of the `loaded`
 * state.
 */
isLoaded: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `dirty` state. The
 * record has local changes that have not yet been saved by the
 * adapter. This includes records that have been created (but not yet
 * saved) or deleted.
 */
hasDirtyAttributes: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `saving` state. A
 * record enters the saving state when `save` is called, but the
 * adapter has not yet acknowledged that the changes have been
 * persisted to the backend.
 */
isSaving: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `deleted` state
 * and has been marked for deletion. When `isDeleted` is true and
 * `hasDirtyAttributes` is true, the record is deleted locally but the deletion
 * was not yet persisted. When `isSaving` is true, the change is
 * in-flight. When both `hasDirtyAttributes` and `isSaving` are false, the
 * change has persisted.
 */
isDeleted: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `new` state. A
 * record will be in the `new` state when it has been created on the
 * client and the adapter has not yet report that it was successfully
 * saved.
 */
isNew: Ember.ComputedProperty<boolean>;

/**
 * If this property is `true` the record is in the `valid` state.
 */
isValid: Ember.ComputedProperty<boolean>;

/**
 * If the record is in the dirty state this property will report what
 * kind of change has caused it to move into the dirty
 * state. Possible values are:
 */
dirtyType: Ember.ComputedProperty<string>;

/**
 * If `true` the adapter reported that it was unable to save local
 * changes to the backend for any reason other than a server-side
 * validation error.
 */
isError: boolean;

/**
 * If `true` the store is attempting to reload the record from the adapter.
 */
isReloading: boolean;

/**
 * All ember models have an id property. This is an identifier
 * managed by an external source. These are always coerced to be
 * strings before being used internally. Note when declaring the
 * attributes for a model it is an error to declare an id
 * attribute.
 */
id: string;

/**
 * When the record is in the `invalid` state this object will contain
 * any errors returned by the adapter. When present the errors hash
 * contains keys corresponding to the invalid property names
 * and values which are arrays of Javascript objects with two keys:
 */
errors: Ember.ComputedProperty<DS$Errors>;

/**
 * This property holds the `DS.AdapterError` object with which
 * last adapter operation was rejected.
 */
adapterError: DS$AdapterError;

/**
 * Create a JSON representation of the record, using the serialization
 * strategy of the store's adapter.
 */
serialize(options?: {
includeId?: boolean
}): {};

/**
 * Use [DS.JSONSerializer](DS.JSONSerializer.html) to
 * get the JSON representation of a record.
 */
toJSON(options: {}): {};

/**
 * Fired when the record is ready to be interacted with,
 * that is either loaded from the server or created locally.
 */
ready(): void;

/**
 * Fired when the record is loaded from the server.
 */
didLoad(): void;

/**
 * Fired when the record is updated.
 */
didUpdate(): void;

/**
 * Fired when a new record is commited to the server.
 */
didCreate(): void;

/**
 * Fired when the record is deleted.
 */
didDelete(): void;

/**
 * Fired when the record becomes invalid.
 */
becameInvalid(): void;

/**
 * Fired when the record enters the error state.
 */
becameError(): void;

/**
 * Fired when the record is rolled back.
 */
rolledBack(): void;

/**
 * Marks the record as deleted but does not save it. You must call
 * `save` afterwards if you want to persist it. You might use this
 * method if you want to allow the user to still `rollbackAttributes()`
 * after a delete was made.
 */
deleteRecord(): any;

/**
 * Same as `deleteRecord`, but saves the record immediately.
 */
destroyRecord(options?: {}): RSVP$Promise<any>;

/**
 * Unloads the record from the store. This will cause the record to be destroyed and freed up for garbage collection.
 */
unloadRecord(): any;

/**
 * Returns an object, whose keys are changed properties, and value is
 * an [oldProp, newProp] array.
 */
changedAttributes(): ChangedAttributes;

/**
 * If the model `hasDirtyAttributes` this function will discard any unsaved
 * changes. If the model `isNew` it will be removed from the store.
 */
rollbackAttributes(): any;

/**
 * Save the record and persist any changes to the record to an
 * external source via the adapter.
 */
save(options?: {}): RSVP$Promise<this>;

/**
 * Reload the record from the adapter.
 */
reload(): RSVP$Promise<any>;

/**
 * Get the reference for the specified belongsTo relationship.
 */
belongsTo(name: RelationshipsFor<this>): DS$BelongsToReference;

/**
 * Get the reference for the specified hasMany relationship.
 */
hasMany(name: RelationshipsFor<this>): DS$HasManyReference<any>;

/**
 * Given a callback, iterates over each of the relationships in the model,
 * invoking the callback with the name of each relationship and its relationship
 * descriptor.
 */
eachRelationship<T: DS$Model>(
callback: (name: string, details: RelationshipMeta<T>) => void,
binding?: any): any;

/**
 * Represents the model's class name as a string. This can be used to look up the model's class name through
 * `DS.Store`'s modelFor method.
 */
static modelName: $Keys<ModelRegistry>;

/**
 * For a given relationship name, returns the model type of the relationship.
 */
static typeForRelationship<K: $Keys<ModelRegistry>>(
name: K,
store: DS$Store): $ElementType<ModelRegistry, K>;

/**
 * Find the relationship which is the inverse of the one asked for.
 */
static inverseFor<K: $Keys<ModelRegistry>>(name: K, store: DS$Store): {};

/**
 * The model's relationships as a map, keyed on the type of the
 * relationship. The value of each entry is an array containing a descriptor
 * for each relationship with that type, describing the name of the relationship
 * as well as the type.
 */
static relationships: Ember.ComputedProperty<Ember.Map>;

/**
 * A hash containing lists of the model's relationships, grouped
 * by the relationship kind. For example, given a model with this
 * definition:
 */
static relationshipNames: Ember.ComputedProperty<{}>;

/**
 * An array of types directly related to a model. Each type will be
 * included once, regardless of the number of relationships it has with
 * the model.
 */
static relatedTypes: Ember.ComputedProperty<Ember.NativeArray<string>>;

/**
 * A map whose keys are the relationships of a model and whose values are
 * relationship descriptors.
 */
static relationshipsByName: Ember.ComputedProperty<Ember.Map>;

/**
 * A map whose keys are the fields of the model and whose values are strings
 * describing the kind of the field. A model's fields are the union of all of its
 * attributes and relationships.
 */
static fields: Ember.ComputedProperty<Ember.Map>;

/**
 * Given a callback, iterates over each of the relationships in the model,
 * invoking the callback with the name of each relationship and its relationship
 * descriptor.
 */
static eachRelationship<M: DS$Model>(
callback: (name: string, details: RelationshipMeta<M>) => void,
binding?: any): any;

/**
 * Given a callback, iterates over each of the types related to a model,
 * invoking the callback with the related type's class. Each type will be
 * returned just once, regardless of how many different relationships it has
 * with a model.
 */
static eachRelatedType(callback: Function, binding: any): any;

/**
 * A map whose keys are the attributes of the model (properties
 * described by DS.attr) and whose values are the meta object for the
 * property.
 */
static attributes: Ember.ComputedProperty<Ember.Map>;

/**
 * A map whose keys are the attributes of the model (properties
 * described by DS.attr) and whose values are type of transformation
 * applied to each attribute. This map does not include any
 * attributes that do not have an transformation type.
 */
static transformedAttributes: Ember.ComputedProperty<Ember.Map>;

/**
 * Iterates through the attributes of the model, calling the passed function on each
 * attribute.
 */
static eachAttribute(callback: Function, binding: {}): any;

/**
 * Iterates through the transformedAttributes of the model, calling
 * the passed function on each attribute. Note the callback will not be
 * called for any attributes that do not have an transformation type.
 */
static eachTransformedAttribute(callback: Function, binding: {}): any;

/**
 * Discards any unsaved changes to the given attribute. This feature is not enabled by default. You must enable `ds-rollback-attribute` and be running a canary build.
 */
rollbackAttribute(): any;

/**
 * This Ember.js hook allows an object to be notified when a property
 * is defined.
 */
didDefineProperty(proto: {}, key: string, value: Ember.ComputedProperty<any>): any
}


/**
 * ### State
 */
declare class DS$RootState  {}


/**
 * Represents an ordered list of records whose order and membership is
 * determined by the adapter. For example, a query sent to the adapter
 * may trigger a search on the server, whose results would be loaded
 * into an instance of the `AdapterPopulatedRecordArray`.
 */
declare class DS$AdapterPopulatedRecordArray<T> mixins DS$RecordArray<T> {}


/**
 * Represents a list of records whose membership is determined by the
 * store. As records are created, loaded, or modified, the store
 * evaluates them to determine if they should be part of the record
 * array.
 */
declare class DS$FilteredRecordArray<T> mixins DS$RecordArray<T> {

/**
 * The filterFunction is a function used to test records from the store to
 * determine if they should be part of the record array.
 */
filterFunction(record: DS$Model): boolean
}

declare class DS$RecordArray<T>  {

/**
 * The flag to signal a `RecordArray` is finished loading data.
 */
isLoaded: boolean;

/**
 * The flag to signal a `RecordArray` is currently loading data.
 */
isUpdating: boolean;

/**
 * The modelClass represented by this record array.
 */
type: Ember.ComputedProperty<DS$Model>;

/**
 * Used to get the latest version of all of the records in this array
 * from the adapter.
 */
update(): any;

/**
 * Saves all of the records in the `RecordArray`.
 */
save(): DS$PromiseArray<T>
}


/**
 * A BelongsToReference is a low level API that allows users and
 * addon author to perform meta-operations on a belongs-to
 * relationship.
 */
declare class DS$BelongsToReference  {

/**
 * This returns a string that represents how the reference will be
 * looked up when it is loaded. If the relationship has a link it will
 * use the "link" otherwise it defaults to "id".
 */
remoteType(): string;

/**
 * The `id` of the record that this reference refers to. Together, the
 * `type()` and `id()` methods form a composite key for the identity
 * map. This can be used to access the id of an async relationship
 * without triggering a fetch that would normally happen if you
 * attempted to use `record.get('relationship.id')`.
 */
id(): string;

/**
 * The link Ember Data will use to fetch or reload this belongs-to
 * relationship.
 */
link(): string;

/**
 * The meta data for the belongs-to relationship.
 */
meta(): {};

/**
 * `push` can be used to update the data in the relationship and Ember
 * Data will treat the new data as the conanical value of this
 * relationship on the backend.
 */
push(objectOrPromise: {} | RSVP$Promise<any>): RSVP$Promise<any>;

/**
 * `value()` synchronously returns the current value of the belongs-to
 * relationship. Unlike `record.get('relationshipName')`, calling
 * `value()` on a reference does not trigger a fetch if the async
 * relationship is not yet loaded. If the relationship is not loaded
 * it will always return `null`.
 */
value(): DS$Model | null;

/**
 * Loads a record in a belongs to relationship if it is not already
 * loaded. If the relationship is already loaded this method does not
 * trigger a new load.
 */
load(): RSVP$Promise<any>;

/**
 * Triggers a reload of the value in this relationship. If the
 * remoteType is `"link"` Ember Data will use the relationship link to
 * reload the relationship. Otherwise it will reload the record by its
 * id.
 */
reload(): RSVP$Promise<any>
}


/**
 * A HasManyReference is a low level API that allows users and addon
 * author to perform meta-operations on a has-many relationship.
 */
declare class DS$HasManyReference<T>  {

/**
 * This returns a string that represents how the reference will be
 * looked up when it is loaded. If the relationship has a link it will
 * use the "link" otherwise it defaults to "id".
 */
remoteType(): string;

/**
 * The link Ember Data will use to fetch or reload this has-many
 * relationship.
 */
link(): string;

/**
 * `ids()` returns an array of the record ids in this relationship.
 */
ids(): any[];

/**
 * The meta data for the has-many relationship.
 */
meta(): {};

/**
 * `push` can be used to update the data in the relationship and Ember
 * Data will treat the new data as the canonical value of this
 * relationship on the backend.
 */
push(objectOrPromise: T[] | RSVP$Promise<T[]>): DS$ManyArray<T>;

/**
 * `value()` synchronously returns the current value of the has-many
 * relationship. Unlike `record.get('relationshipName')`, calling
 * `value()` on a reference does not trigger a fetch if the async
 * relationship is not yet loaded. If the relationship is not loaded
 * it will always return `null`.
 */
value(): DS$ManyArray<T> | null;

/**
 * Loads the relationship if it is not already loaded.  If the
 * relationship is already loaded this method does not trigger a new
 * load.
 */
load(): RSVP$Promise<any>;

/**
 * Reloads this has-many relationship.
 */
reload(): RSVP$Promise<any>
}


/**
 * An RecordReference is a low level API that allows users and
 * addon author to perform meta-operations on a record.
 */
declare class DS$RecordReference<T: DS$Model>  {

/**
 * The `id` of the record that this reference refers to.
 */
id(): string;

/**
 * How the reference will be looked up when it is loaded: Currently
 * this always return `identity` to signifying that a record will be
 * loaded by the `type` and `id`.
 */
remoteType(): string;

/**
 * This API allows you to provide a reference with new data. The
 * simplest usage of this API is similar to `store.push`: you provide a
 * normalized hash of data and the object represented by the reference
 * will update.
 */
push(payload: RSVP$Promise<any> | {}): DS$PromiseObject<T> & T;

/**
 * If the entity referred to by the reference is already loaded, it is
 * present as `reference.value`. Otherwise the value returned by this function
 * is `null`.
 */
value(): T | null;

/**
 * Triggers a fetch for the backing entity based on its `remoteType`
 * (see `remoteType` definitions per reference type).
 */
load(): DS$PromiseObject<T> & T;

/**
 * Reloads the record if it is already loaded. If the record is not
 * loaded it will load the record via `store.findRecord`
 */
reload(): DS$PromiseObject<T> & T
}

declare class DS$ManyArray<T> mixins "NO PRINT IMPLEMENTED: CallExpression" {

/**
 * The loading state of this array
 */
isLoaded: boolean;

/**
 * Metadata associated with the request for async hasMany relationships.
 */
meta: {};

/**
 * Reloads all of the records in the manyArray. If the manyArray
 * holds a relationship that was originally fetched using a links url
 * Ember Data will revisit the original links url to repopulate the
 * relationship.
 */
reload(): DS$PromiseArray<T>;

/**
 * Saves all of the records in the `ManyArray`.
 */
save(): DS$PromiseArray<T>;

/**
 * Create a child record within the owner
 */
createRecord(inputProperties?: {}): T
}

declare class DS$PromiseArray<T>  {}

declare class DS$PromiseObject<T>  {}


/**
 * A PromiseManyArray is a PromiseArray that also proxies certain method calls
 * to the underlying manyArray.
 * Right now we proxy:
 */
declare class DS$PromiseManyArray<T: DS$Model> mixins DS$PromiseArray<T> {

/**
 * Reloads all of the records in the manyArray. If the manyArray
 * holds a relationship that was originally fetched using a links url
 * Ember Data will revisit the original links url to repopulate the
 * relationship.
 */
reload(): DS$PromiseManyArray<T>;

/**
 * Create a child record within the owner
 */
createRecord(inputProperties?: {}): T
}

declare class DS$SnapshotRecordArray<K: $Keys<ModelRegistry>>  {

/**
 * Number of records in the array
 */
length: number;

/**
 * Meta objects for the record array.
 */
meta: {};

/**
 * A hash of adapter options passed into the store method for this request.
 */
adapterOptions: {};

/**
 * The relationships to include for this request.
 */
include: string | any[];

/**
 * The type of the underlying records for the snapshots in the array, as a DS.Model
 */
type: $ElementType<ModelRegistry, K>;

/**
 * Get snapshots of the underlying record array
 */
snapshots(): any[]
}

declare class DS$Snapshot<K: $Keys<ModelRegistry>= any>  {

/**
 * The underlying record for this snapshot. Can be used to access methods and
 * properties defined on the record.
 */
record: $ElementType<ModelRegistry, K>;

/**
 * The id of the snapshot's underlying record
 */
id: string;

/**
 * A hash of adapter options
 */
adapterOptions: {};

/**
 * The name of the type of the underlying record for this snapshot, as a string.
 */
modelName: K;

/**
 * The type of the underlying record for this snapshot, as a DS.Model.
 */
type: $ElementType<ModelRegistry, K>;

/**
 * Returns the value of an attribute.
 */
attr<L: AttributesFor<$ElementType<ModelRegistry, K>>>(
keyName: L): $ElementType<$ElementType<ModelRegistry, K>, L>;

/**
 * Returns all attributes and their corresponding values.
 */
attributes(
): $ObjMapi<$ElementType<ModelRegistry, K>, <L>(L) => $ElementType<$ElementType<ModelRegistry, K>, L>>;

/**
 * Returns all changed attributes and their old and new values.
 */
changedAttributes(
): $Shape<$ObjMapi<$ElementType<ModelRegistry, K>, <L>(L) => $ElementType<$ElementType<ModelRegistry, K>, L>>>;

/**
 * Returns the current value of a belongsTo relationship.
 */
belongsTo<L: RelationshipsFor<$ElementType<ModelRegistry, K>>>(
keyName: L,
options?: {}): $ElementType<$PropertyType<DS$Snapshot<K>, "record">, L> | string | null | void;

/**
 * Returns the current value of a hasMany relationship.
 */
hasMany<L: RelationshipsFor<$ElementType<ModelRegistry, K>>>(
keyName: L,
options?: {
ids: false
}): Array<$ElementType<$PropertyType<DS$Snapshot<K>, "record">, L>> | void;
hasMany<L: RelationshipsFor<$ElementType<ModelRegistry, K>>>(
keyName: L,
options: {
ids: true
}): string[] | void;

/**
 * Iterates through all the attributes of the model, calling the passed
 * function on each attribute.
 */
eachAttribute<M: $ElementType<ModelRegistry, K>>(
callback: (key: $Keys<M>, meta: AttributeMeta<M>) => void,
binding?: {}): any;

/**
 * Iterates through all the relationships of the model, calling the passed
 * function on each relationship.
 */
eachRelationship<M: $ElementType<ModelRegistry, K>>(
callback: (key: $Keys<M>, meta: RelationshipMeta<M>) => void,
binding?: {}): any;

/**
 * Serializes the snapshot using the serializer for the model.
 */
serialize(options: {}): {}
}


/**
 * The store contains all of the data for records loaded from the server.
 * It is also responsible for creating instances of `DS.Model` that wrap
 * the individual data for a record, so that they can be bound to in your
 * Handlebars templates.
 */
declare class DS$Store  {

/**
 * The default adapter to use to communicate to a backend server or
 * other persistence layer. This will be overridden by an application
 * adapter if present.
 */
adapter: string;

/**
 * Create a new record in the current store. The properties passed
 * to this method are set on the newly created record.
 */
createRecord<K: $Keys<ModelRegistry>>(
modelName: K,
inputProperties?: {}): $ElementType<ModelRegistry, K>;

/**
 * For symmetry, a record can be deleted via the store.
 */
deleteRecord(record: DS$Model): void;

/**
 * For symmetry, a record can be unloaded via the store.
 * This will cause the record to be destroyed and freed up for garbage collection.
 */
unloadRecord(record: DS$Model): void;

/**
 * This method returns a record for a given type and id combination.
 */
findRecord<K: $Keys<ModelRegistry>>(
modelName: K,
id: string | number,
options?: {}): DS$PromiseObject<$ElementType<ModelRegistry, K>> & $ElementType<ModelRegistry, K>;

/**
 * Get the reference for the specified record.
 */
getReference<K: $Keys<ModelRegistry>>(
modelName: K,
id: string | number): DS$RecordReference<$ElementType<ModelRegistry, K>>;

/**
 * Get a record by a given type and ID without triggering a fetch.
 */
peekRecord<K: $Keys<ModelRegistry>>(
modelName: K,
id: string | number): $ElementType<ModelRegistry, K> | null;

/**
 * This method returns true if a record for a given modelName and id is already
 * loaded in the store. Use this function to know beforehand if a findRecord()
 * will result in a request or that it will be a cache hit.
 */
hasRecordForId<K: $Keys<ModelRegistry>>(modelName: K, id: string | number): boolean;

/**
 * This method delegates a query to the adapter. This is the one place where
 * adapter-level semantics are exposed to the application.
 */
query<K: $Keys<ModelRegistry>>(
modelName: K,
query: any): DS$AdapterPopulatedRecordArray<$ElementType<ModelRegistry, K>> & DS$PromiseArray<$ElementType<ModelRegistry, K>>;

/**
 * This method makes a request for one record, where the `id` is not known
 * beforehand (if the `id` is known, use [`findRecord`](#method_findRecord)
 * instead).
 */
queryRecord<K: $Keys<ModelRegistry>>(
modelName: K,
query: any): RSVP$Promise<$ElementType<ModelRegistry, K>>;

/**
 * `findAll` asks the adapter's `findAll` method to find the records for the
 * given type, and returns a promise which will resolve with all records of
 * this type present in the store, even if the adapter only returns a subset
 * of them.
 */
findAll<K: $Keys<ModelRegistry>>(
modelName: K,
options?: {
reload?: boolean,
backgroundReload?: boolean,
include?: string,
adapterOptions?: any
}): DS$PromiseArray<$ElementType<ModelRegistry, K>>;

/**
 * This method returns a filtered array that contains all of the
 * known records for a given type in the store.
 */
peekAll<K: $Keys<ModelRegistry>>(
modelName: K): DS$RecordArray<$ElementType<ModelRegistry, K>>;

/**
 * This method unloads all records in the store.
 * It schedules unloading to happen during the next run loop.
 */
unloadAll<K: $Keys<ModelRegistry>>(modelName?: K): void;

/**
 * DEPRECATED:
 * This method has been deprecated and is an alias for store.hasRecordForId, which should
 * be used instead.
 */
recordIsLoaded<K: $Keys<ModelRegistry>>(modelName: K, id: string): boolean;

/**
 * Returns the model class for the particular `modelName`.
 */
modelFor<K: $Keys<ModelRegistry>>(modelName: K): $ElementType<ModelRegistry, K>;

/**
 * Push some data for a given type into the store.
 */
push(data: {}): DS$Model | any[];

/**
 * Push some raw data into the store.
 */
pushPayload<K: $Keys<ModelRegistry>>(modelName: K, inputPayload: {}): any;
pushPayload(inputPayload: {}): any;

/**
 * `normalize` converts a json payload into the normalized form that
 * [push](#method_push) expects.
 */
normalize<K: $Keys<ModelRegistry>>(modelName: K, payload: {}): {};

/**
 * Returns an instance of the adapter for a given type. For
 * example, `adapterFor('person')` will return an instance of
 * `App.PersonAdapter`.
 */
adapterFor<K: $Keys<AdapterRegistry>>(modelName: K): $ElementType<AdapterRegistry, K>;

/**
 * Returns an instance of the serializer for a given type. For
 * example, `serializerFor('person')` will return an instance of
 * `App.PersonSerializer`.
 */
serializerFor<K: $Keys<SerializerRegistry>>(
modelName: K): $ElementType<SerializerRegistry, K>
}


/**
 * The `JSONAPIAdapter` is the default adapter used by Ember Data. It
 * is responsible for transforming the store's requests into HTTP
 * requests that follow the [JSON API](http://jsonapi.org/format/)
 * format.
 */
declare class DS$JSONAPIAdapter mixins DS$RESTAdapter {

/**
 * By default the JSONAPIAdapter will send each find request coming from a `store.find`
 * or from accessing a relationship separately to the server. If your server supports passing
 * ids as a query string, you can set coalesceFindRequests to true to coalesce all find requests
 * within a single runloop.
 */
coalesceFindRequests: boolean
}


/**
 * The REST adapter allows your store to communicate with an HTTP server by
 * transmitting JSON via XHR. Most Ember.js apps that consume a JSON API
 * should use the REST adapter.
 */
declare class DS$RESTAdapter mixins DS$Adapter, DS$BuildURLMixin {

/**
 * Takes a URL, an HTTP method and a hash of data, and makes an HTTP request.
 */
ajax(url: string, type: string, options?: {[key: string]: any}): RSVP$Promise<any>;

/**
 * Generate ajax options
 */
ajaxOptions(
url: string,
type: string,
options?: {[key: string]: any}): {[key: string]: any};

/**
 * By default, the RESTAdapter will send the query params sorted alphabetically to the
 * server.
 */
sortQueryParams(obj: {}): {};

/**
 * By default the RESTAdapter will send each find request coming from a `store.find`
 * or from accessing a relationship separately to the server. If your server supports passing
 * ids as a query string, you can set coalesceFindRequests to true to coalesce all find requests
 * within a single runloop.
 */
coalesceFindRequests: boolean;

/**
 * Endpoint paths can be prefixed with a `namespace` by setting the namespace
 * property on the adapter:
 */
namespace: string;

/**
 * An adapter can target other hosts by setting the `host` property.
 */
host: string;

/**
 * Some APIs require HTTP headers, e.g. to provide an API
 * key. Arbitrary headers can be set as key/value pairs on the
 * `RESTAdapter`'s `headers` object and Ember Data will send them
 * along with each ajax request. For dynamic headers see [headers
 * customization](/api/data/classes/DS.RESTAdapter.html#toc_headers-customization).
 */
headers: {};

/**
 * Called by the store in order to fetch the JSON for a given
 * type and ID.
 */
findRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
id: string,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * Called by the store in order to fetch a JSON array for all
 * of the records for a given type.
 */
findAll<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
sinceToken: string,
snapshotRecordArray: DS$SnapshotRecordArray<K>): RSVP$Promise<any>;

/**
 * Called by the store in order to fetch a JSON array for
 * the records that match a particular query.
 */
query<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
query: {}): RSVP$Promise<any>;

/**
 * Called by the store in order to fetch a JSON object for
 * the record that matches a particular query.
 */
queryRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
query: {}): RSVP$Promise<any>;

/**
 * Called by the store in order to fetch several records together if `coalesceFindRequests` is true
 */
findMany<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
ids: any[],
snapshots: any[]): RSVP$Promise<any>;

/**
 * Called by the store in order to fetch a JSON array for
 * the unloaded records in a has-many relationship that were originally
 * specified as a URL (inside of `links`).
 */
findHasMany<K: $Keys<ModelRegistry>>(
store: DS$Store,
snapshot: DS$Snapshot<K>,
url: string,
relationship: {}): RSVP$Promise<any>;

/**
 * Called by the store in order to fetch the JSON for the unloaded record in a
 * belongs-to relationship that was originally specified as a URL (inside of
 * `links`).
 */
findBelongsTo<K: $Keys<ModelRegistry>>(
store: DS$Store,
snapshot: DS$Snapshot<K>,
url: string): RSVP$Promise<any>;

/**
 * Called by the store when a newly created record is
 * saved via the `save` method on a model record instance.
 */
createRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * Called by the store when an existing record is saved
 * via the `save` method on a model record instance.
 */
updateRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * Called by the store when a record is deleted.
 */
deleteRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * Organize records into groups, each of which is to be passed to separate
 * calls to `findMany`.
 */
groupRecordsForFindMany(store: DS$Store, snapshots: any[]): any[];

/**
 * Takes an ajax response, and returns the json payload or an error.
 */
handleResponse(status: number, headers: {}, payload: {}, requestData: {}): {};

/**
 * Default `handleResponse` implementation uses this hook to decide if the
 * response is a success.
 */
isSuccess(status: number, headers: {}, payload: {}): boolean;

/**
 * Default `handleResponse` implementation uses this hook to decide if the
 * response is an invalid error.
 */
isInvalid(status: number, headers: {}, payload: {}): boolean;

/**
 * Get the data (body or query params) for a request.
 */
dataForRequest(params: {}): {};

/**
 * Get the HTTP method for a request.
 */
methodForRequest(params: {}): string;

/**
 * Get the URL for a request.
 */
urlForRequest(params: {}): string;

/**
 * Get the headers for a request.
 */
headersForRequest(params: {}): {};

/**
 * Builds a URL for a given type and optional ID.
 */
buildURL<K: $Keys<ModelRegistry>>(
modelName?: K,
id?: string | any[] | {} | null,
snapshot?: DS$Snapshot<K> | any[] | null,
requestType?: string,
query?: {}): string;

/**
 * Builds a URL for a `store.findRecord(type, id)` call.
 */
urlForFindRecord<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `store.findAll(type)` call.
 */
urlForFindAll<K: $Keys<ModelRegistry>>(
modelName: K,
snapshot: DS$SnapshotRecordArray<K>): string;

/**
 * Builds a URL for a `store.query(type, query)` call.
 */
urlForQuery<K: $Keys<ModelRegistry>>(query: {}, modelName: K): string;

/**
 * Builds a URL for a `store.queryRecord(type, query)` call.
 */
urlForQueryRecord<K: $Keys<ModelRegistry>>(query: {}, modelName: K): string;

/**
 * Builds a URL for coalesceing multiple `store.findRecord(type, id)`
 * records into 1 request when the adapter's `coalesceFindRequests`
 * property is true.
 */
urlForFindMany<K: $Keys<ModelRegistry>>(ids: any[], modelName: K, snapshots: any[]): string;

/**
 * Builds a URL for fetching a async hasMany relationship when a url
 * is not provided by the server.
 */
urlForFindHasMany<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for fetching a async belongsTo relationship when a url
 * is not provided by the server.
 */
urlForFindBelongsTo<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `record.save()` call when the record was created
 * locally using `store.createRecord()`.
 */
urlForCreateRecord<K: $Keys<ModelRegistry>>(modelName: K, snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `record.save()` call when the record has been update locally.
 */
urlForUpdateRecord<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Builds a URL for a `record.save()` call when the record has been deleted locally.
 */
urlForDeleteRecord<K: $Keys<ModelRegistry>>(
id: string,
modelName: K,
snapshot: DS$Snapshot<K>): string;

/**
 * Determines the pathname for a given type.
 */
pathForType<K: $Keys<ModelRegistry>>(modelName: K): string
}


/**
 * ## Using Embedded Records
 */
declare class DS$EmbeddedRecordsMixin  {

/**
 * Normalize the record and recursively normalize/extract all the embedded records
 * while pushing them into the store as they are encountered
 */
normalize(typeClass: DS$Model, hash: {}, prop: string): {};

/**
 * Serialize `belongsTo` relationship when it is configured as an embedded object.
 */
serializeBelongsTo<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
relationship: {}): any;

/**
 * Serializes `hasMany` relationships when it is configured as embedded objects.
 */
serializeHasMany<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
relationship: {}): any;

/**
 * When serializing an embedded record, modify the property (in the json payload)
 * that refers to the parent record (foreign key for relationship).
 */
removeEmbeddedForeignKey<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
embeddedSnapshot: DS$Snapshot<K>,
relationship: {},
json: {}): any
}


/**
 * Ember Data 2.0 Serializer:
 */
declare class DS$JSONAPISerializer mixins DS$JSONSerializer {
pushPayload(store: DS$Store, payload: {}): any;

/**
 * Dasherizes and singularizes the model name in the payload to match
 * the format Ember Data uses internally for the model name.
 */
modelNameFromPayloadKey(key: string): string;

/**
 * Converts the model name to a pluralized version of the model name.
 */
payloadKeyFromModelName<K: $Keys<ModelRegistry>>(modelName: K): string;

/**
 * `keyForAttribute` can be used to define rules for how to convert an
 * attribute name in your model to a key in your JSON.
 * By default `JSONAPISerializer` follows the format used on the examples of
 * http://jsonapi.org/format and uses dashes as the word separator in the JSON
 * attribute keys.
 */
keyForAttribute(key: string, method: string): string;

/**
 * `keyForRelationship` can be used to define a custom key when
 * serializing and deserializing relationship properties.
 * By default `JSONAPISerializer` follows the format used on the examples of
 * http://jsonapi.org/format and uses dashes as word separators in
 * relationship properties.
 */
keyForRelationship(key: string, typeClass: string, method: string): string;

/**
 * `modelNameFromPayloadType` can be used to change the mapping for a DS model
 * name, taken from the value in the payload.
 */
modelNameFromPayloadType(payloadType: string): string;

/**
 * `payloadTypeFromModelName` can be used to change the mapping for the type in
 * the payload, taken from the model name.
 */
payloadTypeFromModelName<K: $Keys<ModelRegistry>>(modelName: K): string
}


/**
 * Ember Data 2.0 Serializer:
 */
declare class DS$JSONSerializer mixins DS$Serializer {

/**
 * The `primaryKey` is used when serializing and deserializing
 * data. Ember Data always uses the `id` property to store the id of
 * the record. The external source may not always follow this
 * convention. In these cases it is useful to override the
 * `primaryKey` property to match the `primaryKey` of your external
 * store.
 */
primaryKey: string;

/**
 * The `attrs` object can be used to declare a simple mapping between
 * property names on `DS.Model` records and payload keys in the
 * serialized JSON object representing the record. An object with the
 * property `key` can also be used to designate the attribute's key on
 * the response payload.
 */
attrs: {};

/**
 * The `normalizeResponse` method is used to normalize a payload from the
 * server to a JSON-API Document.
 */
normalizeResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeFindRecordResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeQueryRecordResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeFindAllResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeFindBelongsToResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeFindHasManyResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeFindManyResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeQueryResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeCreateRecordResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeDeleteRecordResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeUpdateRecordResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeSaveResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeSingleResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};
normalizeArrayResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};

/**
 * Normalizes a part of the JSON payload returned by
 * the server. You should override this method, munge the hash
 * and call super if you have generic normalization to do.
 */
normalize(typeClass: DS$Model, hash: {}): {};

/**
 * Returns the resource's ID.
 */
extractId(modelClass: {}, resourceHash: {}): string;

/**
 * Returns the resource's attributes formatted as a JSON-API "attributes object".
 */
extractAttributes(modelClass: {}, resourceHash: {}): {};

/**
 * Returns a relationship formatted as a JSON-API "relationship object".
 */
extractRelationship(relationshipModelName: {}, relationshipHash: {}): {};

/**
 * Returns a polymorphic relationship formatted as a JSON-API "relationship object".
 */
extractPolymorphicRelationship(relationshipModelName: {}, relationshipHash: {}, relationshipOptions: {}): {};

/**
 * Returns the resource's relationships formatted as a JSON-API "relationships object".
 */
extractRelationships(modelClass: {}, resourceHash: {}): {};
modelNameFromPayloadKey(key: string): string;

/**
 * Check if the given hasMany relationship should be serialized
 */
shouldSerializeHasMany<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
key: string,
relationshipType: string): boolean;

/**
 * Called when a record is saved in order to convert the
 * record into JSON.
 */
serialize<K: $Keys<ModelRegistry>>(snapshot: DS$Snapshot<K>, options: {}): {};

/**
 * You can use this method to customize how a serialized record is added to the complete
 * JSON hash to be sent to the server. By default the JSON Serializer does not namespace
 * the payload and just sends the raw serialized JSON object.
 * If your server expects namespaced keys, you should consider using the RESTSerializer.
 * Otherwise you can override this method to customize how the record is added to the hash.
 * The hash property should be modified by reference.
 */
serializeIntoHash<K: $Keys<ModelRegistry>>(
hash: {},
typeClass: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>,
options?: {}): any;

/**
 * `serializeAttribute` can be used to customize how `DS.attr`
 * properties are serialized
 */
serializeAttribute<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
key: string,
attribute: {}): any;

/**
 * `serializeBelongsTo` can be used to customize how `DS.belongsTo`
 * properties are serialized.
 */
serializeBelongsTo<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
relationship: {}): any;

/**
 * `serializeHasMany` can be used to customize how `DS.hasMany`
 * properties are serialized.
 */
serializeHasMany<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
relationship: {}): any;

/**
 * You can use this method to customize how polymorphic objects are
 * serialized. Objects are considered to be polymorphic if
 * `{ polymorphic: true }` is pass as the second argument to the
 * `DS.belongsTo` function.
 */
serializePolymorphicType<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
relationship: {}): any;

/**
 * `extractMeta` is used to deserialize any meta information in the
 * adapter payload. By default Ember Data expects meta information to
 * be located on the `meta` property of the payload object.
 */
extractMeta(store: DS$Store, modelClass: DS$Model, payload: {}): any;

/**
 * `extractErrors` is used to extract model errors when a call
 * to `DS.Model#save` fails with an `InvalidError`. By default
 * Ember Data expects error information to be located on the `errors`
 * property of the payload object.
 */
extractErrors(store: DS$Store, typeClass: DS$Model, payload: {}, id: string | number): {};

/**
 * `keyForAttribute` can be used to define rules for how to convert an
 * attribute name in your model to a key in your JSON.
 */
keyForAttribute(key: string, method: string): string;

/**
 * `keyForRelationship` can be used to define a custom key when
 * serializing and deserializing relationship properties. By default
 * `JSONSerializer` does not provide an implementation of this method.
 */
keyForRelationship(key: string, typeClass: string, method: string): string;

/**
 * `keyForLink` can be used to define a custom key when deserializing link
 * properties.
 */
keyForLink(key: string, kind: string): string;
modelNameFromPayloadType(type: string): string;

/**
 * serializeId can be used to customize how id is serialized
 * For example, your server may expect integer datatype of id
 */
serializeId<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
primaryKey: string): any
}


/**
 * Normally, applications will use the `RESTSerializer` by implementing
 * the `normalize` method.
 */
declare class DS$RESTSerializer mixins DS$JSONSerializer {

/**
 * `keyForPolymorphicType` can be used to define a custom key when
 * serializing and deserializing a polymorphic type. By default, the
 * returned key is `${key}Type`.
 */
keyForPolymorphicType(key: string, typeClass: string, method: string): string;

/**
 * Normalizes a part of the JSON payload returned by
 * the server. You should override this method, munge the hash
 * and call super if you have generic normalization to do.
 */
normalize(modelClass: DS$Model, resourceHash: {}, prop?: string): {};

/**
 * This method allows you to push a payload containing top-level
 * collections of records organized per type.
 */
pushPayload(store: DS$Store, payload: {}): any;

/**
 * This method is used to convert each JSON root key in the payload
 * into a modelName that it can use to look up the appropriate model for
 * that part of the payload.
 */
modelNameFromPayloadKey(key: string): string;

/**
 * Called when a record is saved in order to convert the
 * record into JSON.
 */
serialize<K: $Keys<ModelRegistry>>(snapshot: DS$Snapshot<K>, options: {}): {};

/**
 * You can use this method to customize the root keys serialized into the JSON.
 * The hash property should be modified by reference (possibly using something like _.extend)
 * By default the REST Serializer sends the modelName of a model, which is a camelized
 * version of the name.
 */
serializeIntoHash<K: $Keys<ModelRegistry>>(
hash: {},
typeClass: DS$Model,
snapshot: DS$Snapshot<K>,
options?: {}): any;

/**
 * You can use `payloadKeyFromModelName` to override the root key for an outgoing
 * request. By default, the RESTSerializer returns a camelized version of the
 * model's name.
 */
payloadKeyFromModelName<K: $Keys<ModelRegistry>>(modelName: K): string;

/**
 * You can use this method to customize how polymorphic objects are serialized.
 * By default the REST Serializer creates the key by appending `Type` to
 * the attribute and value from the model's camelcased model name.
 */
serializePolymorphicType<K: $Keys<ModelRegistry>>(
snapshot: DS$Snapshot<K>,
json: {},
relationship: {}): any;

/**
 * You can use this method to customize how a polymorphic relationship should
 * be extracted.
 */
extractPolymorphicRelationship(relationshipType: {}, relationshipHash: {}, relationshipOptions: {}): {};

/**
 * `modelNameFromPayloadType` can be used to change the mapping for a DS model
 * name, taken from the value in the payload.
 */
modelNameFromPayloadType(payloadType: string): string;

/**
 * `payloadTypeFromModelName` can be used to change the mapping for the type in
 * the payload, taken from the model name.
 */
payloadTypeFromModelName<K: $Keys<ModelRegistry>>(modelName: K): string
}


/**
 * The `DS.BooleanTransform` class is used to serialize and deserialize
 * boolean attributes on Ember Data record objects. This transform is
 * used when `boolean` is passed as the type parameter to the
 * [DS.attr](../../data#method_attr) function.
 */
declare class DS$BooleanTransform mixins DS$Transform {}


/**
 * The `DS.DateTransform` class is used to serialize and deserialize
 * date attributes on Ember Data record objects. This transform is used
 * when `date` is passed as the type parameter to the
 * [DS.attr](../../data#method_attr) function. It uses the [`ISO 8601`](https://en.wikipedia.org/wiki/ISO_8601)
 * standard.
 */
declare class DS$DateTransform mixins DS$Transform {}


/**
 * The `DS.NumberTransform` class is used to serialize and deserialize
 * numeric attributes on Ember Data record objects. This transform is
 * used when `number` is passed as the type parameter to the
 * [DS.attr](../../data#method_attr) function.
 */
declare class DS$NumberTransform mixins DS$Transform {}


/**
 * The `DS.StringTransform` class is used to serialize and deserialize
 * string attributes on Ember Data record objects. This transform is
 * used when `string` is passed as the type parameter to the
 * [DS.attr](../../data#method_attr) function.
 */
declare class DS$StringTransform mixins DS$Transform {}


/**
 * The `DS.Transform` class is used to serialize and deserialize model
 * attributes when they are saved or loaded from an
 * adapter. Subclassing `DS.Transform` is useful for creating custom
 * attributes. All subclasses of `DS.Transform` must implement a
 * `serialize` and a `deserialize` method.
 */
declare class DS$Transform mixins Ember.Object {

/**
 * When given a deserialized value from a record attribute this
 * method must return the serialized value.
 */
serialize(deserialized: any, options: DS$AttrOptions<>): any;

/**
 * When given a serialize value from a JSON object this method must
 * return the deserialized value for the record attribute.
 */
deserialize(serialized: any, options: DS$AttrOptions<>): any
}


/**
 * An adapter is an object that receives requests from a store and
 * translates them into the appropriate action to take against your
 * persistence layer. The persistence layer is usually an HTTP API, but
 * may be anything, such as the browser's local storage. Typically the
 * adapter is not invoked directly instead its functionality is accessed
 * through the `store`.
 */
declare class DS$Adapter mixins Ember.Object {

/**
 * If you would like your adapter to use a custom serializer you can
 * set the `defaultSerializer` property to be the name of the custom
 * serializer.
 */
defaultSerializer: string;

/**
 * The `findRecord()` method is invoked when the store is asked for a record that
 * has not previously been loaded. In response to `findRecord()` being called, you
 * should query your persistence layer for a record with the given ID. The `findRecord`
 * method should return a promise that will resolve to a JavaScript object that will be
 * normalized by the serializer.
 */
findRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
id: string,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * The `findAll()` method is used to retrieve all records for a given type.
 */
findAll<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
sinceToken: string,
snapshotRecordArray: DS$SnapshotRecordArray<K>): RSVP$Promise<any>;

/**
 * This method is called when you call `query` on the store.
 */
query<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
query: {},
recordArray: DS$AdapterPopulatedRecordArray<any>): RSVP$Promise<any>;

/**
 * The `queryRecord()` method is invoked when the store is asked for a single
 * record through a query object.
 */
queryRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
query: {}): RSVP$Promise<any>;

/**
 * If the globally unique IDs for your records should be generated on the client,
 * implement the `generateIdForRecord()` method. This method will be invoked
 * each time you create a new record, and the value returned from it will be
 * assigned to the record's `primaryKey`.
 */
generateIdForRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
inputProperties: {}): string | number;

/**
 * Proxies to the serializer's `serialize` method.
 */
serialize<K: $Keys<ModelRegistry>>(snapshot: DS$Snapshot<K>, options: {}): {};

/**
 * Implement this method in a subclass to handle the creation of
 * new records.
 */
createRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * Implement this method in a subclass to handle the updating of
 * a record.
 */
updateRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * Implement this method in a subclass to handle the deletion of
 * a record.
 */
deleteRecord<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
snapshot: DS$Snapshot<K>): RSVP$Promise<any>;

/**
 * By default the store will try to coalesce all `fetchRecord` calls within the same runloop
 * into as few requests as possible by calling groupRecordsForFindMany and passing it into a findMany call.
 * You can opt out of this behaviour by either not implementing the findMany hook or by setting
 * coalesceFindRequests to false.
 */
coalesceFindRequests: boolean;

/**
 * The store will call `findMany` instead of multiple `findRecord`
 * requests to find multiple records at once if coalesceFindRequests
 * is true.
 */
findMany<K: $Keys<ModelRegistry>>(
store: DS$Store,
type: $ElementType<ModelRegistry, K>,
ids: any[],
snapshots: any[]): RSVP$Promise<any>;

/**
 * Organize records into groups, each of which is to be passed to separate
 * calls to `findMany`.
 */
groupRecordsForFindMany(store: DS$Store, snapshots: any[]): any[];

/**
 * This method is used by the store to determine if the store should
 * reload a record from the adapter when a record is requested by
 * `store.findRecord`.
 */
shouldReloadRecord<K: $Keys<ModelRegistry>>(store: DS$Store, snapshot: DS$Snapshot<K>): boolean;

/**
 * This method is used by the store to determine if the store should
 * reload all records from the adapter when records are requested by
 * `store.findAll`.
 */
shouldReloadAll<K: $Keys<ModelRegistry>>(
store: DS$Store,
snapshotRecordArray: DS$SnapshotRecordArray<K>): boolean;

/**
 * This method is used by the store to determine if the store should
 * reload a record after the `store.findRecord` method resolves a
 * cached record.
 */
shouldBackgroundReloadRecord<K: $Keys<ModelRegistry>>(store: DS$Store, snapshot: DS$Snapshot<K>): boolean;

/**
 * This method is used by the store to determine if the store should
 * reload a record array after the `store.findAll` method resolves
 * with a cached record array.
 */
shouldBackgroundReloadAll<K: $Keys<ModelRegistry>>(
store: DS$Store,
snapshotRecordArray: DS$SnapshotRecordArray<K>): boolean
}


/**
 * `DS.Serializer` is an abstract base class that you should override in your
 * application to customize it for your backend. The minimum set of methods
 * that you should implement is:
 */
declare class DS$Serializer mixins Ember.Object {

/**
 * The `store` property is the application's `store` that contains
 * all records. It can be used to look up serializers for other model
 * types that may be nested inside the payload response.
 */
store: DS$Store;

/**
 * The `normalizeResponse` method is used to normalize a payload from the
 * server to a JSON-API Document.
 */
normalizeResponse(
store: DS$Store,
primaryModelClass: DS$Model,
payload: {},
id: string | number,
requestType: string): {};

/**
 * The `serialize` method is used when a record is saved in order to convert
 * the record into the form that your external data source expects.
 */
serialize<K: $Keys<ModelRegistry>>(snapshot: DS$Snapshot<K>, options: {}): {};

/**
 * The `normalize` method is used to convert a payload received from your
 * external data source into the normalized form `store.push()` expects. You
 * should override this method, munge the hash and return the normalized
 * payload.
 */
normalize(typeClass: DS$Model, hash: {}): {}
}
	declare export default typeof DS

    }
