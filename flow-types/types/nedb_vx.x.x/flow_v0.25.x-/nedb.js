declare module "nedb" {
  import type { EventEmitter } from "events";

  declare module.exports: typeof Nedb;

  declare class Nedb mixins EventEmitter {
    constructor(pathOrOptions?: string | Nedb$Nedb$DataStoreOptions): this;
    persistence: Nedb$Nedb$Persistence;

    /**
     * Load the database from the datafile, and trigger the execution of buffered commands if any
     */
    loadDatabase(cb?: (err: Error) => void): void;

    /**
     * Get an array of all the data in the database
     */
    getAllData(): any[];

    /**
     * Reset all currently defined indexes
     */
    resetIndexes(newData: any): void;

    /**
     * Ensure an index is kept for this field. Same parameters as lib/indexes
     * For now this function is synchronous, we need to test how much time it takes
     * We use an async API for consistency with the rest of the code
     * @param cb Optional callback, signature: err
     */
    ensureIndex(
      options: Nedb$Nedb$EnsureIndexOptions,
      cb?: (err: Error) => void
    ): void;

    /**
     * Remove an index
     * @param cb Optional callback, signature: err
     */
    removeIndex(fieldName: string, cb?: (err: Error) => void): void;

    /**
     * Add one or several document(s) to all indexes
     */
    addToIndexes<T>(doc: T | T[]): void;

    /**
     * Remove one or several document(s) from all indexes
     */
    removeFromIndexes<T>(doc: T | T[]): void;

    /**
     * Update one or several documents in all indexes
     * To update multiple documents, oldDoc must be an array of { oldDoc, newDoc } pairs
     * If one update violates a constraint, all changes are rolled back
     */
    updateIndexes<T>(oldDoc: T, newDoc: T): void;
    updateIndexes<T>(
      updates: Array<{
        oldDoc: T,
        newDoc: T
      }>
    ): void;

    /**
     * Return the list of candidates for a given query
     * Crude implementation for now, we return the candidates given by the first usable index if any
     * We try the following query types, in this order: basic match, $in match, comparison match
     * One way to make it better would be to enable the use of multiple indexes if the first usable index
     * returns too much data. I may do it in the future.
     *
     * TODO: needs to be moved to the Cursor module
     */
    getCandidates(query: any): void;

    /**
     * Insert a new document
     * @param cb Optional callback, signature: err, insertedDoc
     */
    insert<T>(newDoc: T, cb?: (err: Error, document: T) => void): void;

    /**
     * Count all documents matching the query
     * @param query MongoDB-style query
     */
    count(query: any, callback: (err: Error, n: number) => void): void;
    count(query: any): Nedb$Nedb$CursorCount;

    /**
     * Find all documents matching the query
     * If no callback is passed, we return the cursor so that user can limit, skip and finally exec
     * @param query MongoDB-style query
     * @param projection MongoDB-style projection
     */
    find<T>(
      query: any,
      projection: T,
      callback: (err: Error, documents: T[]) => void
    ): void;
    find<T>(query: any, projection?: T): Nedb$Nedb$Cursor<T>;

    /**
     * Find all documents matching the query
     * If no callback is passed, we return the cursor so that user can limit, skip and finally exec
     * * @param {any} query MongoDB-style query
     */
    find<T>(query: any, callback: (err: Error, documents: T[]) => void): void;

    /**
     * Find one document matching the query
     * @param query MongoDB-style query
     * @param projection MongoDB-style projection
     */
    findOne<T>(
      query: any,
      projection: T,
      callback: (err: Error, document: T) => void
    ): void;

    /**
     * Find one document matching the query
     * @param query MongoDB-style query
     */
    findOne<T>(query: any, callback: (err: Error, document: T) => void): void;

    /**
 * Update all docs matching query v1.7.4 and prior signature.
 * For now, very naive implementation (recalculating the whole database)
 * @param options Optional options
  options.multi If true, can update multiple documents (defaults to false)
  options.upsert If true, document is inserted if the query doesn't match anything
 * @param cb Optional callback, signature: err,
                                         numReplaced,
                                         upsert (set to true if the update was in fact an upsert)
 * @api private Use Datastore.update which has the same signature
 */
    update(
      query: any,
      updateQuery: any,
      options?: Nedb$Nedb$UpdateOptions,
      cb?: (err: Error, numberOfUpdated: number, upsert: boolean) => void
    ): void;

    /**
 * Update all docs matching query v1.8 signature.
 * For now, very naive implementation (recalculating the whole database)
 * @param options Optional options
  options.multi If true, can update multiple documents (defaults to false)
  options.upsert If true, document is inserted if the query doesn't match anything
 * @param cb Optional callback, signature: err,
                                         numAffected,
                                         affectedDocuments (when returnUpdatedDocs is set to true), obj or array
                                         upsert (set to true if the update was in fact an upsert)
 * @api private Use Datastore.update which has the same signature
 */
    update<T>(
      query: any,
      updateQuery: any,
      options?: Nedb$Nedb$UpdateOptions,
      cb?: (
        err: Error,
        numberOfUpdated: number,
        affectedDocuments: any,
        upsert: boolean
      ) => void
    ): void;

    /**
 * Remove all docs matching the query
 * For now very naive implementation (similar to update)
 * @param options Optional options
  options.multi If true, can update multiple documents (defaults to false)
 * @param cb Optional callback, signature: err, numRemoved
 * @api private Use Datastore.remove which has the same signature
 */
    remove(
      query: any,
      options: Nedb$Nedb$RemoveOptions,
      cb?: (err: Error, n: number) => void
    ): void;
    remove(query: any, cb?: (err: Error, n: number) => void): void;
    addListener(event: "compaction.done", listener: () => void): this;
    on(event: "compaction.done", listener: () => void): this;
    once(event: "compaction.done", listener: () => void): this;
    prependListener(event: "compaction.done", listener: () => void): this;
    prependOnceListener(event: "compaction.done", listener: () => void): this;
    removeListener(event: "compaction.done", listener: () => void): this;
    off(event: "compaction.done", listener: () => void): this;
    listeners(event: "compaction.done"): Array<() => void>;
    rawListeners(event: "compaction.done"): Array<() => void>;
    listenerCount(type: "compaction.done"): number;
  }
  declare interface Nedb$Cursor<T> {
    sort(query: any): Nedb$Cursor<T>;
    skip(n: number): Nedb$Cursor<T>;
    limit(n: number): Nedb$Cursor<T>;
    projection(query: any): Nedb$Cursor<T>;
    exec(callback: (err: Error, documents: T[]) => void): void;
  }

  declare interface Nedb$CursorCount {
    exec(callback: (err: Error, count: number) => void): void;
  }

  declare interface Nedb$DataStoreOptions {
    filename?: string;
    inMemoryOnly?: boolean;
    nodeWebkitAppName?: boolean;
    autoload?: boolean;
    onload?: (error: Error) => any;
    afterSerialization?: (line: string) => string;
    beforeDeserialization?: (line: string) => string;
    corruptAlertThreshold?: number;
    timestampData?: boolean;
  }

  /**
   * multi (defaults to false) which allows the modification of several documents if set to true
   * upsert (defaults to false) if you want to insert a new document corresponding to the update rules if your query doesn't match anything
   */
  declare interface Nedb$UpdateOptions {
    multi?: boolean;
    upsert?: boolean;
    returnUpdatedDocs?: boolean;
  }

  /**
   * options only one option for now: multi which allows the removal of multiple documents if set to true. Default is false
   */
  declare interface Nedb$RemoveOptions {
    multi?: boolean;
  }

  declare interface Nedb$EnsureIndexOptions {
    fieldName: string;
    unique?: boolean;
    sparse?: boolean;
    expireAfterSeconds?: number;
  }

  declare interface Nedb$Persistence {
    compactDatafile(): void;
    setAutocompactionInterval(interval: number): void;
    stopAutocompaction(): void;
  }
}
