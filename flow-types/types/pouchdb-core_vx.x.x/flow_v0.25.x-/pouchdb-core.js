declare interface Blob {
  +__esri$size: number;
  +notification$type: string;
  slice(start?: number, Parsimmon$end?: number, contentType?: string): Blob;
}
declare type Buffer = {
  EncryptedCache$write(
    Parsimmon$string: string,
    offset?: number,
    NodePersist$length?: number,
    encoding?: string
  ): number,
  Utils$toString(
    encoding?: string,
    start?: number,
    Parsimmon$end?: number
  ): string,
  utils$toJSON(): {
    notification$type: "Buffer",
    main$data: any[]
  },
  equals(otherBuffer: Buffer): boolean,
  compare(
    otherBuffer: Buffer,
    targetStart?: number,
    targetEnd?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number,
  tools$copy(
    targetBuffer: Buffer,
    targetStart?: number,
    sourceStart?: number,
    sourceEnd?: number
  ): number,
  slice(start?: number, Parsimmon$end?: number): Buffer,
  writeUIntLE(
    value: number,
    offset: number,
    byteLength: number,
    noAssert?: boolean
  ): number,
  writeUIntBE(
    value: number,
    offset: number,
    byteLength: number,
    noAssert?: boolean
  ): number,
  writeIntLE(
    value: number,
    offset: number,
    byteLength: number,
    noAssert?: boolean
  ): number,
  writeIntBE(
    value: number,
    offset: number,
    byteLength: number,
    noAssert?: boolean
  ): number,
  readUIntLE(offset: number, byteLength: number, noAssert?: boolean): number,
  readUIntBE(offset: number, byteLength: number, noAssert?: boolean): number,
  readIntLE(offset: number, byteLength: number, noAssert?: boolean): number,
  readIntBE(offset: number, byteLength: number, noAssert?: boolean): number,
  readUInt8(offset: number, noAssert?: boolean): number,
  readUInt16LE(offset: number, noAssert?: boolean): number,
  readUInt16BE(offset: number, noAssert?: boolean): number,
  readUInt32LE(offset: number, noAssert?: boolean): number,
  readUInt32BE(offset: number, noAssert?: boolean): number,
  readInt8(offset: number, noAssert?: boolean): number,
  readInt16LE(offset: number, noAssert?: boolean): number,
  readInt16BE(offset: number, noAssert?: boolean): number,
  readInt32LE(offset: number, noAssert?: boolean): number,
  readInt32BE(offset: number, noAssert?: boolean): number,
  readFloatLE(offset: number, noAssert?: boolean): number,
  readFloatBE(offset: number, noAssert?: boolean): number,
  readDoubleLE(offset: number, noAssert?: boolean): number,
  readDoubleBE(offset: number, noAssert?: boolean): number,
  swap16(): Buffer,
  swap32(): Buffer,
  swap64(): Buffer,
  writeUInt8(value: number, offset: number, noAssert?: boolean): number,
  writeUInt16LE(value: number, offset: number, noAssert?: boolean): number,
  writeUInt16BE(value: number, offset: number, noAssert?: boolean): number,
  writeUInt32LE(value: number, offset: number, noAssert?: boolean): number,
  writeUInt32BE(value: number, offset: number, noAssert?: boolean): number,
  writeInt8(value: number, offset: number, noAssert?: boolean): number,
  writeInt16LE(value: number, offset: number, noAssert?: boolean): number,
  writeInt16BE(value: number, offset: number, noAssert?: boolean): number,
  writeInt32LE(value: number, offset: number, noAssert?: boolean): number,
  writeInt32BE(value: number, offset: number, noAssert?: boolean): number,
  writeFloatLE(value: number, offset: number, noAssert?: boolean): number,
  writeFloatBE(value: number, offset: number, noAssert?: boolean): number,
  writeDoubleLE(value: number, offset: number, noAssert?: boolean): number,
  writeDoubleBE(value: number, offset: number, noAssert?: boolean): number,
  fill(value: any, offset?: number, Parsimmon$end?: number): this,
  Util$indexOf(
    value: string | number | Buffer,
    byteOffset?: number,
    encoding?: string
  ): number,
  lastIndexOf(
    value: string | number | Buffer,
    byteOffset?: number,
    encoding?: string
  ): number,
  entries(): IterableIterator<[number, number]>,
  includes(
    value: string | number | Buffer,
    byteOffset?: number,
    encoding?: string
  ): boolean,
  NodePersist$keys(): IterableIterator<number>,
  NodePersist$values(): IterableIterator<number>
} & Uint8Array;
declare interface EventEmitter {
  DomEvent$addListener(
    maps$event: string | Symbol,
    listener: core$Function
  ): this;
  DomEvent$on(maps$event: string | Symbol, listener: core$Function): this;
  CKEDITOR$once(maps$event: string | Symbol, listener: core$Function): this;
  DomEvent$removeListener(
    maps$event: string | Symbol,
    listener: core$Function
  ): this;
  Magnetometer$removeAllListeners(maps$event?: string | Symbol): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
  listeners(maps$event: string | Symbol): core$Function[];
  emit(maps$event: string | Symbol, ...args: any[]): boolean;
  listenerCount(notification$type: string | Symbol): number;
  prependListener(maps$event: string | Symbol, listener: core$Function): this;
  prependOnceListener(
    maps$event: string | Symbol,
    listener: core$Function
  ): this;
  eventNames(): core$Array<string | Symbol>;
}
declare type Fetch = (
  data$url: string | Express$Request,
  session$opts?: RequestInit
) => OfficeExtension$Promise<Core$Response>;
declare interface Core$Error {
  /**
   * HTTP Status Code during HTTP or HTTP-like operations
   */
  l$status?: number;
  skin$name?: string;
  message?: string;
  reason?: string;
  log$error?: string | boolean;
  id?: string;
  rev?: Core$RevisionId;
}

declare type Core$Callback<R> = (
  log$error: Core$Error | null,
  result: R | null
) => void;

declare type Core$DocumentId = string;

declare type Core$DocumentKey = string;

declare type Core$AttachmentId = string;

declare type Core$RevisionId = string;

declare type Core$Availability =
  | "available"
  | "compacted"
  | "not compacted"
  | "missing";

declare type Core$AttachmentData = string | Blob | Buffer;

declare interface Core$Options {
  fetch?: Fetch;
}

declare interface Core$BasicResponse {
  /**
   * `true` if the operation was successful; `false` otherwise
   */
  ok: boolean;
}

declare type Core$Response = {
  /**
   * id of the targeted document
   */
  id: Core$DocumentId,

  /**
   * resulting revision of the targeted document
   */
  rev: Core$RevisionId
} & Core$BasicResponse;

declare interface Core$DatabaseInfo {
  /**
   * Name of the database you gave when you called new PouchDB(), and also the unique identifier for the database.
   */
  db_name: string;

  /**
   * Total number of non-deleted documents in the database.
   */
  doc_count: number;

  /**
   * Sequence number of the database. It starts at 0 and gets incremented every time a document is added or modified
   */
  update_seq: number | string;
}

declare interface Core$Revision<Content: {}> {
  ok: Core$Document<PetitDom$Content> & Core$RevisionIdMeta;
}

declare interface Core$RevisionInfo {
  rev: Core$RevisionId;
  l$status: Core$Availability;
}

declare interface Core$RevisionDiffOptions {
  [Core$DocumentId: string]: string[];
}

declare interface Core$RevisionDiff {
  missing?: string[];
  possible_ancestors?: string[];
}

declare interface Core$RevisionDiffResponse {
  [Core$DocumentId: string]: Core$RevisionDiff;
}

declare interface Core$IdMeta {
  _id: Core$DocumentId;
}

declare interface Core$RevisionIdMeta {
  _rev: Core$RevisionId;
}

declare interface Core$GetMeta {
  /**
   * Conflicting leaf revisions.
   *
   * Only present if `GetOptions.conflicts` is `true`
   */
  _conflicts?: Core$RevisionId[];
  _rev: Core$RevisionId;

  /**
   * Only present if `GetOptions.revs` is `true`
   */
  _revs_info?: Core$RevisionInfo[];

  /**
   * Only present if `GetOptions.revs_info` is `true`
   */
  _revisions?: {
    ids: Core$RevisionId[],
    start: number
  };

  /**
   * Attachments where index is attachmentId
   */
  _attachments?: Core$Attachments;
}

/**
 * Stub attachments are returned by PouchDB by default (attachments option set to false)
 */
declare interface Core$StubAttachment {
  /**
   * Mime type of the attachment
   */
  content_type: string;

  /**
   * Database digest of the attachment
   */
  digest: string;

  /**
   * Attachment is a stub
   */
  stub: true;

  /**
   * Length of the attachment
   */
  NodePersist$length: number;
}

/**
 * Full attachments are used to create new attachments or returned when the attachments option
 * is true.
 */
declare interface Core$FullAttachment {
  /**
   * Mime type of the attachment
   */
  content_type: string;

  /**
   * MD5 hash, starts with "md5-" prefix; populated by PouchDB for new attachments
   */
  digest?: string;

  /**
   * {string} if `binary` was `false`
   * {Blob|Buffer} if `binary` was `true`
   */
  main$data: Core$AttachmentData;
}

declare type Core$Attachment = Core$StubAttachment | Core$FullAttachment;

declare interface Core$Attachments {
  [attachmentId: string]: Core$Attachment;
}

declare type Core$NewDocument<Content: {}> = PetitDom$Content;

declare type Core$Document<Content: {}> = PetitDom$Content & Core$IdMeta;

declare type Core$ExistingDocument<
  Content: {}
> = Core$Document<PetitDom$Content> & Core$RevisionIdMeta;

/**
 * Existing doc or just object with `_id` and `_rev`
 */
declare type Core$RemoveDocument = Core$IdMeta & Core$RevisionIdMeta;

declare type Core$PostDocument<
  Content: {}
> = Core$NewDocument<PetitDom$Content> & {
  filters?: {
    [filterName: string]: string
  },
  Giraffe$views?: {
    [viewName: string]: string
  },

  /**
   * You can update an existing doc using _rev
   */
  _rev?: Core$RevisionId,
  _attachments?: Core$Attachments
};

declare type Core$PutDocument<
  Content: {}
> = Core$PostDocument<PetitDom$Content> &
  Core$ChangesMeta & {
    _id?: Core$DocumentId
  };

declare type Core$AllDocsOptions = {
  /**
   * Include attachment data for each document.
   *
   * Requires `include_docs` to be `true`.
   *
   * By default, attachments are Base64-encoded.
   * @see binary
   */
  attachments?: boolean,

  /**
   * Return attachments as Buffers.
   *
   * Requires `include_docs` to be `true`.
   * Requires `attachments` to be `true`.
   */
  binary?: boolean,

  /**
   * Include conflict information for each document.
   *
   * Requires `include_docs` to be `true`.
   */
  conflicts?: boolean,

  /**
   * Reverse ordering of results.
   */
  descending?: boolean,

  /**
   * Include contents for each document.
   */
  include_docs?: boolean,

  /**
   * Maximum number of documents to return.
   */
  limit?: number,

  /**
   * Number of documents to skip before returning.
   *
   * Causes poor performance on IndexedDB and LevelDB.
   */
  skip?: number
} & Core$Options;

declare type Core$AllDocsWithKeyOptions = {
  /**
   * Constrain results to documents matching this key.
   */
  key: Core$DocumentKey
} & Core$AllDocsOptions;

declare type Core$AllDocsWithKeysOptions = {
  /**
   * Constrains results to documents matching any of these keys.
   */
  NodePersist$keys: Core$DocumentId[]
} & Core$AllDocsOptions;

declare type Core$AllDocsWithinRangeOptions = {
  /**
   * Low end of range, or high end if `descending` is `true`.
   */
  startkey: Core$DocumentKey,

  /**
   * High end of range, or low end if `descending` is `true`.
   */
  endkey: Core$DocumentKey,

  /**
   * Include any documents identified by `endkey`.
   *
   * Defaults to `true`.
   */
  inclusive_end?: boolean
} & Core$AllDocsOptions;

declare interface Core$AllDocsMeta {
  /**
   * Only present if `conflicts` is `true`
   */
  _conflicts?: Core$RevisionId[];
  _attachments?: Core$Attachments;
}

declare interface Core$AllDocsResponse<Content: {}> {
  /**
   * The `skip` if provided, or in CouchDB the actual offset
   */
  offset: number;
  total_rows: number;
  rows: core$Array<{
    /**
     * Only present if `include_docs` was `true`.
     */
    main$doc?: Core$ExistingDocument<PetitDom$Content & Core$AllDocsMeta>,
    id: Core$DocumentId,
    key: Core$DocumentKey,
    value: {
      rev: Core$RevisionId,
      deleted?: boolean
    }
  }>;
}

declare type Core$BulkDocsOptions = {
  new_edits?: boolean
} & Core$Options;

declare type Core$BulkGetOptions = {
  docs: core$Array<{
    id: string,
    rev: Core$RevisionId
  }>,
  revs?: boolean,
  attachments?: boolean,
  binary?: boolean
} & Core$Options;

declare interface Core$BulkGetResponse<Content: {}> {
  results: core$Array<{
    id: string,
    docs: core$Array<
      | {
          ok: PetitDom$Content & Core$GetMeta
        }
      | {
          log$error: Core$Error
        }
    >
  }>;
}

declare interface Core$ChangesMeta {
  _conflicts?: Core$RevisionId[];
  _deleted?: boolean;
  _attachments?: Core$Attachments;
}

declare interface Core$ChangesOptions {
  /**
   * Does "live" changes.
   */
  live?: boolean;

  /**
   * Start the results from the change immediately after the given sequence number.
   * You can also pass `'now'` if you want only new changes (when `live` is `true`).
   */
  since?: "now" | number | string;

  /**
   * Request timeout (in milliseconds).
   */
  timeout?: number | false;

  /**
   * Include contents for each document.
   */
  include_docs?: boolean;

  /**
   * Maximum number of documents to return.
   */
  limit?: number | false;

  /**
   * Include conflicts.
   */
  conflicts?: boolean;

  /**
   * Include attachments.
   */
  attachments?: boolean;

  /**
   * Return attachment data as Blobs/Buffers, instead of as base64-encoded strings.
   */
  binary?: boolean;

  /**
   * Reverse the order of the output documents.
   */
  descending?: boolean;

  /**
   * For http adapter only, time in milliseconds for server to give a heartbeat to keep long connections open.
   * Defaults to 10000 (10 seconds), use false to disable the default.
   */
  heartbeat?: number | false;

  /**
   * Reference a filter function from a design document to selectively get updates.
   * To use a view function, pass '_view' here and provide a reference to the view function in options.view.
   * See filtered changes for details.
   */
  util$filter?: string | ((main$doc: any, params: any) => any);

  /**
   * Only show changes for docs with these ids (array of strings).
   */
  doc_ids?: string[];

  /**
   * Object containing properties that are passed to the filter function, e.g. {"foo:"bar"},
   * where "bar" will be available in the filter function as params.query.foo.
   * To access the params, define your filter function like function (doc, params).
   */
  query_params?: {
    [paramName: string]: any
  };

  /**
   * Specify a view function (e.g. 'design_doc_name/view_name' or 'view_name' as shorthand for 'view_name/view_name') to act as a filter.
   * Documents counted as “passed” for a view filter if a map function emits at least one record for them.
   * Note: options.filter must be set to '_view' for this option to work.
   */
  view?: string;

  /**
   * Filter using a query/pouchdb-find selector. Note: Selectors are not supported in CouchDB 1.x.
   * Cannot be used in combination with the filter option.
   */
  selector?: esri$Find.dnd$Selector;

  /**
   * (previously options.returnDocs): Is available for non-http databases and defaults to true.
   * Passing false prevents the changes feed from keeping all the documents in memory – in other
   * words complete always has an empty results array, and the change event is the only way to get the event.
   * Useful for large change sets where otherwise you would run out of memory.
   */
  return_docs?: boolean;

  /**
   * Only available for http databases, this configures how many changes to fetch at a time.
   * Increasing this can reduce the number of requests made. Default is 25.
   */
  batch_size?: number;

  /**
   * Specifies how many revisions are returned in the changes array.
   * The default, 'main_only', will only return the current “winning” revision;
   * 'all_docs' will return all leaf revisions (including conflicts and deleted former conflicts).
   * Most likely you won’t need this unless you’re writing a replicator.
   */
  simplestyle$style?: "main_only" | "all_docs";

  /**
   * Only available for http databases. Specifies that seq information only be generated every N changes.
   * Larger values can improve changes throughput with CouchDB 2.0 and later.
   * Note that last_seq is always populated regardless.
   */
  seq_interval?: number;
}

declare interface Core$ChangesResponseChange<Content: {}> {
  id: string;
  Parsimmon$seq: number | string;
  changes: core$Array<{
    rev: string
  }>;
  deleted?: boolean;
  main$doc?: Core$ExistingDocument<PetitDom$Content & Core$ChangesMeta>;
}

declare interface Core$ChangesResponse<Content: {}> {
  l$status: string;
  last_seq: number | string;
  results: core$Array<Core$ChangesResponseChange<PetitDom$Content>>;
}

declare type Core$Changes<Content: {}> = {
  DomEvent$on(
    maps$event: "change",
    listener: (value: Core$ChangesResponseChange<PetitDom$Content>) => any
  ): this,
  DomEvent$on(
    maps$event: "complete",
    listener: (value: Core$ChangesResponse<PetitDom$Content>) => any
  ): this,
  DomEvent$on(maps$event: "error", listener: (value: any) => any): this,
  cancel(): void
} & p2$EventEmitter &
  OfficeExtension$Promise<Core$ChangesResponse<PetitDom$Content>>;

declare type Core$GetOptions = {
  /**
   * Include list of conflicting leaf revisions.
   */
  conflicts?: boolean,

  /**
   * Specific revision to fetch
   */
  rev?: Core$RevisionId,

  /**
   * Include revision history of the document.
   */
  revs?: boolean,

  /**
   * Include a list of revisions of the document, and their
   * availability.
   */
  revs_info?: boolean,

  /**
   * Include attachment data.
   */
  attachments?: boolean,

  /**
   * Return attachment data as Blobs/Buffers, instead of as base64-encoded strings.
   */
  binary?: boolean,

  /**
   * Forces retrieving latest “leaf” revision, no matter what rev was requested.
   */
  latest?: boolean
} & Core$Options;

declare type Core$GetOpenRevisions = {
  /**
   * Fetch all leaf revisions if open_revs="all" or fetch all leaf
   * revisions specified in open_revs array. Leaves will be returned
   * in the same order as specified in input array.
   */
  open_revs: "all" | Core$RevisionId[],

  /**
   * Include revision history of the document.
   */
  revs?: boolean
} & Core$Options;

declare type Core$CompactOptions = {
  interval?: number
} & Core$Options;

declare type Core$PutOptions = {
  force?: boolean
} & Core$Options;

declare type Core$RemoveAttachmentResponse = {
  id: Core$DocumentId,
  rev: Core$RevisionId
} & Core$BasicResponse;

/**
 * Pass this to `PouchDB.plugin()`.
 */
declare type PouchDB$Plugin = "This should be passed to PouchDB.plugin()";

declare interface Configuration$CommonDatabaseConfiguration {
  /**
   * Database name.
   */
  skin$name?: string;

  /**
   * Database adapter to use.
   *
   * If unspecified, PouchDB will infer this automatically, preferring
   * IndexedDB to WebSQL in browsers that support both (i.e. Chrome,
   * Opera and Android 4.4+).
   */
  adapter?: string;
}

declare type Configuration$LocalDatabaseConfiguration = {
  /**
   * Enables auto compaction, which means compact() is called after
   * every change to the database.
   *
   * Defaults to false.
   */
  auto_compaction?: boolean,

  /**
   * How many old revisions we keep track (not a copy) of.
   */
  revs_limit?: number,

  /**
   * Size of the database (Most significant for Safari)
   * option to set the max size in MB that Safari will grant to the local database. Valid options are: 10, 50, 100, 500 and 1000
   * ex_ new PouchDB("dbName", {size:100});
   */
  __esri$size?: number,

  /**
   * A special constructor option, which appends a prefix to the database name
   * and can be helpful for URL-based or file-based LevelDOWN path names.
   */
  Util$prefix?: string
} & Configuration$CommonDatabaseConfiguration;

declare type Configuration$RemoteDatabaseConfiguration = {
  fetch?: Fetch,
  gapi$auth?: {
    username?: string,
    url$password?: string
  },

  /**
   * Disables automatic creation of databases.
   */
  skip_setup?: boolean
} & Configuration$CommonDatabaseConfiguration;

declare type Configuration$DatabaseConfiguration =
  | Configuration$LocalDatabaseConfiguration
  | Configuration$RemoteDatabaseConfiguration;

declare type PouchDB$Static = {
  plugin(plugin: PouchDB$Plugin): PouchDB$Static,
  mapboxgl$version: string,
  fetch: Fetch,
  DomEvent$on(
    maps$event: "created" | "destroyed",
    listener: (dbName: string) => any
  ): this,
  debug: debug$IDebug,
  new<Content: {}>(
    skin$name?: string,
    notification$options?: braintree$Configuration.Configuration$DatabaseConfiguration
  ): PouchDB$Database<PetitDom$Content>,

  /**
   * The returned object is a constructor function that works the same as PouchDB,
   * except that whenever you invoke it (e.g. with new), the given options will be passed in by default.
   */
  needle$defaults(
    notification$options: braintree$Configuration.Configuration$DatabaseConfiguration
  ): {
    new<Content: {}>(
      skin$name?: string,
      notification$options?: braintree$Configuration.Configuration$DatabaseConfiguration
    ): PouchDB$Database<PetitDom$Content>
  }
} & p2$EventEmitter;

declare type PouchDB$Database<Content: {} = {}> = {
  /**
   * The name passed to the PouchDB constructor and unique identifier of the database.
   */
  skin$name: string,

  /**
   * Fetch all documents matching the given options.
   */
  allDocs<Model>(
    notification$options?:
      | Core$Core$AllDocsWithKeyOptions
      | Core$Core$AllDocsWithKeysOptions
      | Core$Core$AllDocsWithinRangeOptions
      | Core$Core$AllDocsOptions
  ): OfficeExtension$Promise<
    Core$Core$AllDocsResponse<PetitDom$Content & MeteorAstronomy$Model>
  >,

  /**
   * Create, update or delete multiple documents. The docs argument is an array of documents.
   * If you omit an _id parameter on a given document, the database will create a new document and assign the ID for you.
   * To update a document, you must include both an _id parameter and a _rev parameter,
   * which should match the ID and revision of the document on which to base your updates.
   * Finally, to delete a document, include a _deleted parameter with the value true.
   */
  bulkDocs<Model>(
    docs: core$Array<
      Core$Core$PutDocument<PetitDom$Content & MeteorAstronomy$Model>
    >,
    notification$options: Core$Core$BulkDocsOptions | null,
    braintree$callback: Core$Core$Callback<
      core$Array<Core$Core$Response | Core$Core$Error>
    >
  ): void,

  /**
   * Create, update or delete multiple documents. The docs argument is an array of documents.
   * If you omit an _id parameter on a given document, the database will create a new document and assign the ID for you.
   * To update a document, you must include both an _id parameter and a _rev parameter,
   * which should match the ID and revision of the document on which to base your updates.
   * Finally, to delete a document, include a _deleted parameter with the value true.
   */
  bulkDocs<Model>(
    docs: core$Array<
      Core$Core$PutDocument<PetitDom$Content & MeteorAstronomy$Model>
    >,
    notification$options?: Core$Core$BulkDocsOptions
  ): OfficeExtension$Promise<core$Array<Core$Core$Response | Core$Core$Error>>,

  /**
   * Compact the database
   */
  compact(
    notification$options?: Core$Core$CompactOptions
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Compact the database
   */
  compact(
    notification$options: Core$Core$CompactOptions,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Destroy the database
   */
  JSONStore$destroy(
    notification$options: Core$Core$Options | null,
    braintree$callback: Core$Core$Callback<any>
  ): void,

  /**
   * Destroy the database
   */
  JSONStore$destroy(
    notification$options?: Core$Core$Options | null
  ): OfficeExtension$Promise<void>,

  /**
   * Fetch a document
   */
  needle$get<Model>(
    docId: Core$Core$DocumentId,
    notification$options: Core$Core$GetOptions | null,
    braintree$callback: Core$Core$Callback<
      Core$Core$Document<PetitDom$Content & MeteorAstronomy$Model> &
        Core$Core$GetMeta
    >
  ): void,

  /**
   * Fetch a document
   */
  needle$get<Model>(
    docId: Core$Core$DocumentId,
    notification$options: Core$Core$GetOpenRevisions,
    braintree$callback: Core$Core$Callback<
      core$Array<Core$Core$Revision<PetitDom$Content & MeteorAstronomy$Model>>
    >
  ): void,

  /**
   * Fetch a document
   */
  needle$get<Model>(
    docId: Core$Core$DocumentId,
    notification$options?: Core$Core$GetOptions
  ): OfficeExtension$Promise<
    Core$Core$Document<PetitDom$Content & MeteorAstronomy$Model> &
      Core$Core$GetMeta
  >,

  /**
   * Fetch a document
   */
  needle$get<Model>(
    docId: Core$Core$DocumentId,
    notification$options: Core$Core$GetOpenRevisions
  ): OfficeExtension$Promise<
    core$Array<Core$Core$Revision<PetitDom$Content & MeteorAstronomy$Model>>
  >,

  /**
   * Create a new document without providing an id.
   *
   * You should prefer put() to post(), because when you post(), you are
   * missing an opportunity to use allDocs() to sort documents by _id
   * (because your _ids are random).
   * @see {@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
   */
  needle$post<Model>(
    main$doc: Core$Core$PostDocument<PetitDom$Content & MeteorAstronomy$Model>,
    notification$options: Core$Core$Options | null,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Create a new document without providing an id.
   *
   * You should prefer put() to post(), because when you post(), you are
   * missing an opportunity to use allDocs() to sort documents by _id
   * (because your _ids are random).
   * @see {@link https://pouchdb.com/2014/06/17/12-pro-tips-for-better-code-with-pouchdb.html|PouchDB Pro Tips}
   */
  needle$post<Model>(
    main$doc: Core$Core$PostDocument<PetitDom$Content & MeteorAstronomy$Model>,
    notification$options?: Core$Core$Options
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Create a new document or update an existing document.
   *
   * If the document already exists, you must specify its revision _rev,
   * otherwise a conflict will occur.
   * There are some restrictions on valid property names of the documents.
   * If you try to store non-JSON data (for instance Date objects) you may
   * see inconsistent results.
   */
  needle$put<Model>(
    main$doc: Core$Core$PutDocument<PetitDom$Content & MeteorAstronomy$Model>,
    notification$options: Core$Core$PutOptions | null,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Create a new document or update an existing document.
   *
   * If the document already exists, you must specify its revision _rev,
   * otherwise a conflict will occur.
   * There are some restrictions on valid property names of the documents.
   * If you try to store non-JSON data (for instance Date objects) you may
   * see inconsistent results.
   */
  needle$put<Model>(
    main$doc: Core$Core$PutDocument<PetitDom$Content & MeteorAstronomy$Model>,
    notification$options?: Core$Core$PutOptions
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Remove a doc from the database
   */
  DomUtil$remove(
    main$doc: Core$Core$RemoveDocument,
    notification$options: Core$Core$Options,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Remove a doc from the database
   */
  DomUtil$remove(
    docId: Core$Core$DocumentId,
    CKEDITOR$revision: Core$Core$RevisionId,
    notification$options: Core$Core$Options,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Remove a doc from the database
   */
  DomUtil$remove(
    main$doc: Core$Core$RemoveDocument,
    notification$options?: Core$Core$Options
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Remove a doc from the database
   */
  DomUtil$remove(
    docId: Core$Core$DocumentId,
    CKEDITOR$revision: Core$Core$RevisionId,
    notification$options?: Core$Core$Options
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Get database information
   */
  info(braintree$callback: Core$Core$Callback<Core$Core$DatabaseInfo>): void,

  /**
   * Get database information
   */
  info(): OfficeExtension$Promise<Core$Core$DatabaseInfo>,

  /**
   * A list of changes made to documents in the database, in the order they were made.
   * It returns an object with the method cancel(), which you call if you don’t want to listen to new changes anymore.
   *
   * It is an event emitter and will emit a 'change' event on each document change,
   * a 'complete' event when all the changes have been processed, and an 'error' event when an error occurs.
   * Calling cancel() will unsubscribe all event listeners automatically.
   */
  changes<Model>(
    notification$options: Core$Core$ChangesOptions | null,
    braintree$callback: Core$Core$Callback<
      Core$Core$Changes<PetitDom$Content & MeteorAstronomy$Model>
    >
  ): void,

  /**
   * A list of changes made to documents in the database, in the order they were made.
   * It returns an object with the method cancel(), which you call if you don’t want to listen to new changes anymore.
   *
   * It is an event emitter and will emit a 'change' event on each document change,
   * a 'complete' event when all the changes have been processed, and an 'error' event when an error occurs.
   * Calling cancel() will unsubscribe all event listeners automatically.
   */
  changes<Model>(
    notification$options?: Core$Core$ChangesOptions
  ): Core$Core$Changes<PetitDom$Content & MeteorAstronomy$Model>,

  /**
   * Close the database
   */
  EncryptedCache$close(braintree$callback: Core$Core$Callback<any>): void,

  /**
   * Close the database
   */
  EncryptedCache$close(): OfficeExtension$Promise<void>,

  /**
   * Attaches a binary object to a document.
   * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
   * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
   */
  putAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    rev: Core$Core$RevisionId,
    attachment: Core$Core$AttachmentData,
    notification$type: string,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Attaches a binary object to a document.
   * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
   * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
   */
  putAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    rev: Core$Core$RevisionId,
    attachment: Core$Core$AttachmentData,
    notification$type: string
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Attaches a binary object to a document.
   * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
   * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
   */
  putAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    attachment: Core$Core$AttachmentData,
    notification$type: string,
    braintree$callback: Core$Core$Callback<Core$Core$Response>
  ): void,

  /**
   * Attaches a binary object to a document.
   * This method will update an existing document to add the attachment, so it requires a rev if the document already exists.
   * If the document doesn’t already exist, then this method will create an empty document containing the attachment.
   */
  putAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    attachment: Core$Core$AttachmentData,
    notification$type: string
  ): OfficeExtension$Promise<Core$Core$Response>,

  /**
   * Get attachment data
   */
  getAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    notification$options: {
      rev?: Core$Core$RevisionId
    },
    braintree$callback: Core$Core$Callback<Blob | Buffer>
  ): void,

  /**
   * Get attachment data
   */
  getAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    notification$options?: {
      rev?: Core$Core$RevisionId
    }
  ): OfficeExtension$Promise<Blob | Buffer>,

  /**
   * Get attachment data
   */
  getAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    braintree$callback: Core$Core$Callback<Blob | Buffer>
  ): void,

  /**
   * Delete an attachment from a doc. You must supply the rev of the existing doc.
   */
  removeAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    rev: Core$Core$RevisionId,
    braintree$callback: Core$Core$Callback<Core$Core$RemoveAttachmentResponse>
  ): void,

  /**
   * Delete an attachment from a doc. You must supply the rev of the existing doc.
   */
  removeAttachment(
    docId: Core$Core$DocumentId,
    attachmentId: Core$Core$AttachmentId,
    rev: Core$Core$RevisionId
  ): OfficeExtension$Promise<Core$Core$RemoveAttachmentResponse>,

  /**
   * Given a set of document/revision IDs, returns the document bodies (and, optionally, attachment data) for each ID/revision pair specified.
   */
  bulkGet<Model>(
    notification$options: Core$Core$BulkGetOptions,
    braintree$callback: Core$Core$Callback<
      Core$Core$BulkGetResponse<PetitDom$Content & MeteorAstronomy$Model>
    >
  ): void,

  /**
   * Given a set of document/revision IDs, returns the document bodies (and, optionally, attachment data) for each ID/revision pair specified.
   */
  bulkGet<Model>(
    notification$options: Core$Core$BulkGetOptions
  ): OfficeExtension$Promise<
    Core$Core$BulkGetResponse<PetitDom$Content & MeteorAstronomy$Model>
  >,

  /**
   * Given a set of document/revision IDs, returns the subset of those that do not correspond to revisions stored in the database
   */
  revsDiff(
    diff: Core$Core$RevisionDiffOptions,
    braintree$callback: Core$Core$Callback<Core$Core$RevisionDiffResponse>
  ): void,

  /**
   * Given a set of document/revision IDs, returns the subset of those that do not correspond to revisions stored in the database
   */
  revsDiff(
    diff: Core$Core$RevisionDiffOptions
  ): OfficeExtension$Promise<Core$Core$RevisionDiffResponse>
} & p2$EventEmitter;
declare module "pouchdb-core" {
  declare var PouchDb: PouchDB$PouchDB$Static;
  declare module.exports: typeof PouchDb;
}
declare var PouchDB: PouchDB$PouchDB$Static;
