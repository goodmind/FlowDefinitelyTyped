declare module "mongorito" {
  import type {
    Collection,
    CommonOptions,
    Db,
    IndexOptions,
    Long,
    MongoClientOptions,
    ReadPreference
  } from "mongodb";

  declare export {
    Timestamp,
    ObjectId,
    MinKey,
    MaxKey,
    DBRef,
    Long
  } from "mongodb";

  declare export type Class<T> = (...args: any[]) => T;
  declare export type ModelClass = Class<Model>;
  declare export class MQuery {}
  declare export class Query mixins MQuery {
    static find<T: Model>(query?: { [key: string]: any }): Promise<T[]>;
    static findOne<T: Model>(query?: { [key: string]: any }): Promise<T | null>;
    static findById<T: Model>(
      id: { [key: string]: any } | string
    ): Promise<T | null>;
    static count(query?: { [key: string]: any }): Promise<number>;
    static sort(field: string | string[], value?: string): Query;
    static sort(query: { [key: string]: any }): Query;
    static include(field: string | string[], value?: number): Query;
    static include(query: { [key: string]: any }): Query;
    static exclude(field: string | string[], value?: number): Query;
    static exclude(query: { [key: string]: any }): Query;
    static remove(query?: { [key: string]: any }): Promise<{
      [key: string]: any
    }>;
    Model: ModelClass;
    query: Array<[string, { [key: string]: any }]>;
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
    static query(
      method: string,
      query: Array<[string, any]>
    ): Promise<{ [key: string]: any }[]>;

    /**
     * @see mongodb.Collection#listIndexes()
     * @see mongodb.CommandCursor#toArray()
     */
    static listIndexes(options?: {
      batchSize?: number,
      readPreference?: ReadPreference | string
    }): Promise<any[]>;

    /**
     * @see mongodb.Collection#createIndex()
     */
    static createIndex(
      fieldOrSpec: any,
      options?: IndexOptions
    ): Promise<string>;

    /**
     * @see mongodb.Collection#dropIndex()
     */
    static dropIndex(
      indexName: string,
      options?: CommonOptions
    ): Promise<{ [key: string]: any }>;
    static embeds(key: string, model: ModelClass): void;
    constructor(fields?: { [key: string]: any }): this;
    collection(): string;
    getConnection(): Promise<Db>;
    getCollection(): Promise<Collection<any>>;
    set(key: string, value: any): void;
    set(value: { [key: string]: any }): void;
    get(key?: string): any;
    unset(keys?: string | string[]): void;
    toJSON(): { [key: string]: any };
    isSaved(): boolean;
    save(): Promise<CreatedAction | UpdatedAction>;
    increment(key: string, value?: number): Promise<RefreshedAction>;
    increment(keys: {
      [key: string]: number
    }): Promise<RefreshedAction>;
    refresh(): Promise<RefreshedAction>;
    remove(): Promise<RemovedAction>;
  }

  declare export var ActionTypes: {|
    +GET: "@@mongorito/GET", // "@@mongorito/GET"
    +SET: "@@mongorito/SET", // "@@mongorito/SET"
    +UNSET: "@@mongorito/UNSET", // "@@mongorito/UNSET"
    +REFRESH: "@@mongorito/REFRESH", // "@@mongorito/REFRESH"
    +REFRESHED: "@@mongorito/REFRESHED", // "@@mongorito/REFRESHED"
    +SAVE: "@@mongorito/SAVE", // "@@mongorito/SAVE"
    +CREATE: "@@mongorito/CREATE", // "@@mongorito/CREATE"
    +CREATED: "@@mongorito/CREATED", // "@@mongorito/CREATED"
    +UPDATE: "@@mongorito/UPDATE", // "@@mongorito/UPDATE"
    +UPDATED: "@@mongorito/UPDATED", // "@@mongorito/UPDATED"
    +REMOVE: "@@mongorito/REMOVE", // "@@mongorito/REMOVE"
    +REMOVED: "@@mongorito/REMOVED", // "@@mongorito/REMOVED"
    +INCREMENT: "@@mongorito/INCREMENT", // "@@mongorito/INCREMENT"
    +CREATE_INDEX: "@@mongorito/CREATE_INDEX", // "@@mongorito/CREATE_INDEX"
    +DROP_INDEX: "@@mongorito/DROP_INDEX", // "@@mongorito/DROP_INDEX"
    +LIST_INDEXES: "@@mongorito/LIST_INDEXES", // "@@mongorito/LIST_INDEXES"
    +QUERY: "@@mongorito/QUERY", // "@@mongorito/QUERY"
    +CALL: "@@mongorito/CALL" // "@@mongorito/CALL"
  |};

  declare export interface GetAction {
    type: typeof ActionTypes.GET;
    key?: string;
  }
  declare export interface SetAction {
    type: typeof ActionTypes.SET;
    fields: { [key: string]: any };
  }
  declare export interface UnsetAction {
    type: typeof ActionTypes.UNSET;
    keys: string | string[];
  }
  declare export interface RefreshAction {
    type: typeof ActionTypes.REFRESH;
  }
  declare export interface RefreshedAction {
    type: typeof ActionTypes.REFRESHED;
    fields: { [key: string]: any };
  }
  declare export interface SaveAction {
    type: typeof ActionTypes.SAVE;
    fields: { [key: string]: any };
  }
  declare export interface CreateAction {
    type: typeof ActionTypes.CREATE;
    id: { [key: string]: any };
  }
  declare export interface CreatedAction {
    type: typeof ActionTypes.CREATED;
    id: { [key: string]: any };
  }
  declare export interface UpdateAction {
    type: typeof ActionTypes.UPDATE;
    fields: { [key: string]: any };
  }
  declare export interface UpdatedAction {
    type: typeof ActionTypes.UPDATED;
    fields: { [key: string]: any };
  }
  declare export interface RemoveAction {
    type: typeof ActionTypes.REMOVE;
  }
  declare export interface RemovedAction {
    type: typeof ActionTypes.REMOVED;
  }
  declare export interface IncrementAction {
    type: typeof ActionTypes.INCREMENT;
    fields: { [key: string]: any };
  }
  declare export interface CreateIndexAction {
    type: typeof ActionTypes.CREATE_INDEX;
    args: any[];
  }
  declare export interface DropIndexAction {
    type: typeof ActionTypes.DROP_INDEX;
    args: any[];
  }
  declare export interface ListIndexesAction {
    type: typeof ActionTypes.LIST_INDEXES;
    args: any[];
  }
  declare export interface QueryAction {
    type: typeof ActionTypes.QUERY;
    method: string;
    query: Array<{
      method: string,
      args: any
    }>;
  }
  declare export interface CallAction {
    type: typeof ActionTypes.CALL;
    method: string;
    args: Array<{
      method: string,
      args: any
    }>;
  }
  declare export type Action =
    | GetAction
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
    unset: string[];
    fields: { [key: string]: any };
  }
  declare export type State = DefaultState & any;
  declare export interface PluginStore {
    dispatch: (arg: any) => any;
    getState: () => State;
    modelClass: ModelClass;
    model?: Model;
  }
  declare export type Reducer<S = any> = (
    state: S,
    action: Action
  ) => Reducer<>;
  declare export interface DefaultReducer {
    unset: Reducer<string[]>;
    fields: Reducer<{ [key: string]: any }>;
  }
  declare export type ReducerState = DefaultReducer & Map<any, Reducer<>>;
  declare export type ReducerModifier = (
    reducerState: ReducerState
  ) => ReducerState;
  declare export type Plugin = (
    modelClass: ModelClass
  ) => (store: PluginStore) => (next: PluginNext) => (action: Action) => void;

  declare export var DatabaseState: {|
    +STATE_CONNECTED: 0, // 0
    +STATE_CONNECTING: 1, // 1
    +STATE_DISCONNECTED: 2 // 2
  |};

  declare export class Database {
    options: MongoClientOptions;
    state: $Values<typeof DatabaseState>;
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
    use(plugins?: Plugin | Plugin[]): void;
  }
}
