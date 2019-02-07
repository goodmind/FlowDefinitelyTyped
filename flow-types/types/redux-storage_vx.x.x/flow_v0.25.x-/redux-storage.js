declare module "redux-storage" {
  import type { Reducer, Store, Middleware } from "redux";

  /**
   * Action constants
   */
  declare export var LOAD: string;
  declare export var SAVE: string;

  /**
   * Storage engine interface
   */
  declare export interface StorageEngine {
    /**
     * Load
     */
    load(): PromiseLike<any>;

    /**
     * Save
     * @param state
     */
    save(state: any): PromiseLike<any>;
  }
  declare export interface StateMerger {
    (oldState: any, newState: any): any;
  }

  /**
   * Storage reducer
   * @param reducer
   * @param merger
   */
  declare export function reducer<TState>(
    reducer: Reducer<TState>,
    merger?: StateMerger
  ): Reducer<TState>;

  /**
   * Create storage middleware
   * @param engine
   * @param actionBlacklist
   * @param actionWhitelist
   */
  declare export function createMiddleware(
    engine: StorageEngine,
    actionBlacklist?: string[],
    actionWhitelist?: string[]
  ): Middleware;

  /**
   * Loader interface
   */
  declare interface Loader<TState> {
    (store: Store<TState>): PromiseLike<any>;
  }

  /**
   * Create state loader
   * @param engine
   */
  declare export function createLoader<TState>(
    engine: StorageEngine
  ): Loader<TState>;
}
declare module "redux-storage-decorator-filter" {
  import type { StorageEngine } from "redux-storage";

  declare interface FilterList {
    [key: number]: string | string[];
  }

  /**
 * Filter decorator for redux-storage to only store a subset of the whole state tree.
 * @param {StorageEngine} engine the redux storage engine
 * @param {FilterList} whitelist keys that will be stored.
 * @param {FilterList} blacklist keys that won't be stored.
 * @example import filter from 'redux-storage-decorator-filter';
engine = filter(engine, [
'whitelisted-key',
['nested', 'key'],
['another', 'very', 'nested', 'key']
], [
'blacklisted-key',
['nested', 'blacklisted-key']
]);
 */
  declare export default function StorageEngine(
    engine: StorageEngine,
    whitelist?: FilterList,
    blacklist?: FilterList
  ): StorageEngine;
}
declare module "redux-storage-engine-reactnativeasyncstorage" {
  import type { StorageEngine } from "redux-storage";

  declare export type ReactNativeAsyncStorageEngine = {} & StorageEngine;

  /**
   * Create React Native Async Storage
   * @param key React Native Async Storage key
   */
  declare export default function createEngine(
    key: string
  ): ReactNativeAsyncStorageEngine;
}
declare module "redux-storage-merger-immutablejs" {
  import type { StateMerger } from "redux-storage";

  declare var immutableStateMerger: StateMerger;
  declare export default typeof immutableStateMerger;
}
