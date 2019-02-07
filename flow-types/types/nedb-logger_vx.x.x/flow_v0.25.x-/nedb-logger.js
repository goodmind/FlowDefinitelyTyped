declare module "nedb-logger" {
  declare module.exports: typeof NeDBLoggerDataStore;

  declare class NeDBLoggerDataStore {
    constructor(
      path?:
        | string
        | {
            filename: string
          }
    ): this;

    /**
     * Insert a new document
     * @param cb Optional callback, signature: err, insertedDoc
     */
    insert<T>(newDoc: T, cb?: (err: Error, document: T) => void): void;
  }
}
