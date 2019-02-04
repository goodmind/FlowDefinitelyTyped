declare module 'mongorito' {
        import type {
          Collection,CommonOptions,Db,IndexOptions,Long,MongoClientOptions,ReadPreference
        } from 'mongodb';

	declare export {
          Timestamp,ObjectId,MinKey,MaxKey,DBRef,Long
        }from 'mongodb';

	declare export type Class<T> = (...args: any[]) => T;
	declare export type ModelClass = Class<Model>;
	declare export class MQuery  {}
	declare export class Query mixins MQuery {
static find<T: Model>(query?: {[key: string]: any}): Promise<T[]>;
static findOne<T: Model>(query?: {[key: string]: any}): Promise<T | null>;
static findById<T: Model>(id: {[key: string]: any} | string): Promise<T | null>;
static count(query?: {[key: string]: any}): Promise<number>;
static sort(field: string | string[], value?: string): Query;
static sort(query: {[key: string]: any}): Query;
static include(field: string | string[], value?: number): Query;
static include(query: {[key: string]: any}): Query;
static exclude(field: string | string[], value?: number): Query;
static exclude(query: {[key: string]: any}): Query;
static remove(query?: {[key: string]: any}): Promise<{[key: string]: any}>;
Model: ModelClass;
query: Array<[string, {[key: string]: any}]>
}
	declare export class Model mixins Query {

/**
 * @see Model#database
 * @see Database#connection()
 */
static getConnection(): Promise<Db>;

/**
 * @see Db#collection(string)
 */
static getCollection(): Promise<Collection<any>>;
static use(plugins?: Plugin | Plugin[]): void;
static modifyReducer(reducerModifier: ReducerModifier): void;
static query(method: string, query: Array<[string, any]>): Promise<{[key: string]: any}[]>;

/**
 * @see mongodb.Collection#listIndexes()
 * @see mongodb.CommandCursor#toArray()
 */
static listIndexes(
options?: {
batchSize?: number,
readPreference?: ReadPreference | string
}): Promise<any[]>;

/**
 * @see mongodb.Collection#createIndex()
 */
static createIndex(fieldOrSpec: any, options?: IndexOptions): Promise<string>;

/**
 * @see mongodb.Collection#dropIndex()
 */
static dropIndex(indexName: string, options?: CommonOptions): Promise<{[key: string]: any}>;
static embeds(key: string, model: ModelClass): void;
constructor(fields?: {[key: string]: any}): this;
collection(): string;
getConnection(): Promise<Db>;
getCollection(): Promise<Collection<any>>;
set(key: string, value: any): void;
set(value: {[key: string]: any}): void;
get(key?: string): any;
unset(keys?: string | string[]): void;
toJSON(): {[key: string]: any};
isSaved(): boolean;
save(): Promise<CreatedAction | UpdatedAction>;
increment(key: string, value?: number): Promise<RefreshedAction>;
increment(keys: {
[key: string]: number
}): Promise<RefreshedAction>;
refresh(): Promise<RefreshedAction>;
remove(): Promise<RemovedAction>
}
	declare export  class ActionTypes {
  constructor(...args: empty): mixed;
static +GET: Class<ActionTypes__GET> & ActionTypes__GET & "@@mongorito/GET";// "@@mongorito/GET"
static +SET: Class<ActionTypes__SET> & ActionTypes__SET & "@@mongorito/SET";// "@@mongorito/SET"
static +UNSET: Class<ActionTypes__UNSET> & ActionTypes__UNSET & "@@mongorito/UNSET";// "@@mongorito/UNSET"
static +REFRESH: Class<ActionTypes__REFRESH> & ActionTypes__REFRESH & "@@mongorito/REFRESH";// "@@mongorito/REFRESH"
static +REFRESHED: Class<ActionTypes__REFRESHED> & ActionTypes__REFRESHED & "@@mongorito/REFRESHED";// "@@mongorito/REFRESHED"
static +SAVE: Class<ActionTypes__SAVE> & ActionTypes__SAVE & "@@mongorito/SAVE";// "@@mongorito/SAVE"
static +CREATE: Class<ActionTypes__CREATE> & ActionTypes__CREATE & "@@mongorito/CREATE";// "@@mongorito/CREATE"
static +CREATED: Class<ActionTypes__CREATED> & ActionTypes__CREATED & "@@mongorito/CREATED";// "@@mongorito/CREATED"
static +UPDATE: Class<ActionTypes__UPDATE> & ActionTypes__UPDATE & "@@mongorito/UPDATE";// "@@mongorito/UPDATE"
static +UPDATED: Class<ActionTypes__UPDATED> & ActionTypes__UPDATED & "@@mongorito/UPDATED";// "@@mongorito/UPDATED"
static +REMOVE: Class<ActionTypes__REMOVE> & ActionTypes__REMOVE & "@@mongorito/REMOVE";// "@@mongorito/REMOVE"
static +REMOVED: Class<ActionTypes__REMOVED> & ActionTypes__REMOVED & "@@mongorito/REMOVED";// "@@mongorito/REMOVED"
static +INCREMENT: Class<ActionTypes__INCREMENT> & ActionTypes__INCREMENT & "@@mongorito/INCREMENT";// "@@mongorito/INCREMENT"
static +CREATE_INDEX: Class<ActionTypes__CREATE_INDEX> & ActionTypes__CREATE_INDEX & "@@mongorito/CREATE_INDEX";// "@@mongorito/CREATE_INDEX"
static +DROP_INDEX: Class<ActionTypes__DROP_INDEX> & ActionTypes__DROP_INDEX & "@@mongorito/DROP_INDEX";// "@@mongorito/DROP_INDEX"
static +LIST_INDEXES: Class<ActionTypes__LIST_INDEXES> & ActionTypes__LIST_INDEXES & "@@mongorito/LIST_INDEXES";// "@@mongorito/LIST_INDEXES"
static +QUERY: Class<ActionTypes__QUERY> & ActionTypes__QUERY & "@@mongorito/QUERY";// "@@mongorito/QUERY"
static +CALL: Class<ActionTypes__CALL> & ActionTypes__CALL & "@@mongorito/CALL";// "@@mongorito/CALL"

}

declare class ActionTypes__GET mixins ActionTypes {}
declare class ActionTypes__SET mixins ActionTypes {}
declare class ActionTypes__UNSET mixins ActionTypes {}
declare class ActionTypes__REFRESH mixins ActionTypes {}
declare class ActionTypes__REFRESHED mixins ActionTypes {}
declare class ActionTypes__SAVE mixins ActionTypes {}
declare class ActionTypes__CREATE mixins ActionTypes {}
declare class ActionTypes__CREATED mixins ActionTypes {}
declare class ActionTypes__UPDATE mixins ActionTypes {}
declare class ActionTypes__UPDATED mixins ActionTypes {}
declare class ActionTypes__REMOVE mixins ActionTypes {}
declare class ActionTypes__REMOVED mixins ActionTypes {}
declare class ActionTypes__INCREMENT mixins ActionTypes {}
declare class ActionTypes__CREATE_INDEX mixins ActionTypes {}
declare class ActionTypes__DROP_INDEX mixins ActionTypes {}
declare class ActionTypes__LIST_INDEXES mixins ActionTypes {}
declare class ActionTypes__QUERY mixins ActionTypes {}
declare class ActionTypes__CALL mixins ActionTypes {}

	declare export interface GetAction {
type: ActionTypes.GET,
key?: string
} 
	declare export interface SetAction {
type: ActionTypes.SET,
fields: {[key: string]: any}
} 
	declare export interface UnsetAction {
type: ActionTypes.UNSET,
keys: string | string[]
} 
	declare export interface RefreshAction {
type: ActionTypes.REFRESH
} 
	declare export interface RefreshedAction {
type: ActionTypes.REFRESHED,
fields: {[key: string]: any}
} 
	declare export interface SaveAction {
type: ActionTypes.SAVE,
fields: {[key: string]: any}
} 
	declare export interface CreateAction {
type: ActionTypes.CREATE,
id: {[key: string]: any}
} 
	declare export interface CreatedAction {
type: ActionTypes.CREATED,
id: {[key: string]: any}
} 
	declare export interface UpdateAction {
type: ActionTypes.UPDATE,
fields: {[key: string]: any}
} 
	declare export interface UpdatedAction {
type: ActionTypes.UPDATED,
fields: {[key: string]: any}
} 
	declare export interface RemoveAction {
type: ActionTypes.REMOVE
} 
	declare export interface RemovedAction {
type: ActionTypes.REMOVED
} 
	declare export interface IncrementAction {
type: ActionTypes.INCREMENT,
fields: {[key: string]: any}
} 
	declare export interface CreateIndexAction {
type: ActionTypes.CREATE_INDEX,
args: any[]
} 
	declare export interface DropIndexAction {
type: ActionTypes.DROP_INDEX,
args: any[]
} 
	declare export interface ListIndexesAction {
type: ActionTypes.LIST_INDEXES,
args: any[]
} 
	declare export interface QueryAction {
type: ActionTypes.QUERY,
method: string,
query: Array<{
method: string,
args: any
}>
} 
	declare export interface CallAction {
type: ActionTypes.CALL,
method: string,
args: Array<{
method: string,
args: any
}>
} 
	declare export type Action = GetAction
| SetAction
| UnsetAction
| RefreshAction
| RefreshedAction
| SaveAction
| CreateAction
| CreatedAction
| UpdateAction
| UpdatedAction
| RemoveAction
| RemovedAction
| IncrementAction
| CreateIndexAction
| DropIndexAction
| ListIndexesAction
| QueryAction
| CallAction;
	declare export type PluginNext = (action: Action) => void;
	declare export interface DefaultState {
unset: string[],
fields: {[key: string]: any}
} 
	declare export type State = DefaultState & any;
	declare export interface PluginStore {
dispatch: (arg: any) => any,
getState: () => State,
modelClass: ModelClass,
model?: Model
} 
	declare export type Reducer<S> = (state: S, action: Action) => Reducer;
	declare export interface DefaultReducer {
unset: Reducer<string[]>,
fields: Reducer<{[key: string]: any}>
} 
	declare export type ReducerState = DefaultReducer & Map<any, Reducer>;
	declare export type ReducerModifier = (reducerState: ReducerState) => ReducerState;
	declare export type Plugin = (
modelClass: ModelClass) => (store: PluginStore) => (next: PluginNext) => (action: Action) => void;
	declare export  class DatabaseState {
  constructor(...args: empty): mixed;
static +STATE_CONNECTED: Class<DatabaseState__STATE_CONNECTED> & DatabaseState__STATE_CONNECTED & 0;// 0
static +STATE_CONNECTING: Class<DatabaseState__STATE_CONNECTING> & DatabaseState__STATE_CONNECTING & 1;// 1
static +STATE_DISCONNECTED: Class<DatabaseState__STATE_DISCONNECTED> & DatabaseState__STATE_DISCONNECTED & 2;// 2

}

declare class DatabaseState__STATE_CONNECTED mixins DatabaseState {}
declare class DatabaseState__STATE_CONNECTING mixins DatabaseState {}
declare class DatabaseState__STATE_DISCONNECTED mixins DatabaseState {}

	declare export class Database  {
options: MongoClientOptions;
state: DatabaseState;
models: ModelClass[];
plugins: Plugin[];
constructor(urls?: string | string[], options?: MongoClientOptions): this;
connect(): Promise<Db>;
connection(): Promise<Db>;
disconnect(): Promise<void>;
register(models: ModelClass | ModelClass[]): void;

/**
 * @see Model#use()
 */
use(plugins?: Plugin | Plugin[]): void
}
    }
