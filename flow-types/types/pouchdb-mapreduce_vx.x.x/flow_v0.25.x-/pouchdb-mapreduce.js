declare type PouchDB$BuiltInReducers = "_sum" | "_count" | "_stats";

/**
 * CouchDB-style Map function
 * @param emit CouchDB does not support emit as an argument and maps defined this way will always run locally
 */
declare type PouchDB$Map<Content: {}, Result> = (
  main$doc: PetitDom$Content,
  emit?: (key: any, value: PetitDom$Content | Parsimmon$Result) => void
) => void;

/**
 * CouchDB-style Reduction function
 * @param keys From CouchDB documentation: Array of pairs of docid-key for related map function results;
PouchDB may pass a simple array and also supports complex keys.
 */
declare type PouchDB$Reducer<Content: {}, Reduction> = (
  NodePersist$keys: any | null,
  NodePersist$values: PetitDom$Content[] | Reduction[],
  rereduce: boolean
) => Reduction[] | Reduction;

declare interface PouchDB$Filter<Content: {}, Reduction> {
  mapbox$map: PouchDB$Map<PetitDom$Content, Reduction>;
  array$reduce?:
    | PouchDB$Reducer<PetitDom$Content, Reduction>
    | PouchDB$BuiltInReducers
    | string;
}

declare interface Query$Options<Content: {}, Reduction> {
  /**
   * Reduce function, or the string name of a built-in function: '_sum', '_count', or '_stats'.
   */
  array$reduce?:
    | PouchDB$Reducer<PetitDom$Content, Reduction>
    | PouchDB$BuiltInReducers
    | boolean;

  /**
   * Include the document in each row in the doc field.
   */
  include_docs?: boolean;

  /**
   * Include conflicts in the _conflicts field of a doc.
   */
  conflicts?: boolean;

  /**
   * Include attachment data.
   */
  attachments?: boolean;

  /**
   * Return attachment data as Blobs/Buffers, instead of as base64-encoded strings.
   */
  binary?: boolean;

  /**
   * Get rows with keys in a certain range (inclusive/inclusive).
   */
  startkey?: any;

  /**
   * Get rows with keys in a certain range (inclusive/inclusive).
   */
  endkey?: any;

  /**
   * Include rows having a key equal to the given options.endkey.
   */
  inclusive_end?: boolean;

  /**
   * Maximum number of rows to return.
   */
  limit?: number;

  /**
   * Number of rows to skip before returning (warning: poor performance on IndexedDB/LevelDB!).
   */
  skip?: number;

  /**
   * Reverse the order of the output rows.
   */
  descending?: boolean;

  /**
   * Only return rows matching this key.
   */
  key?: any;

  /**
   * Array of keys to fetch in a single shot.
   */
  NodePersist$keys?: any[];

  /**
   * True if you want the reduce function to group results by keys, rather than returning a single result.
   */
  group?: boolean;

  /**
   * Number of elements in a key to group by, assuming the keys are arrays.
   * Defaults to the full length of the array.
   */
  group_level?: number;

  /**
   * unspecified (default): Returns the latest results, waiting for the view to build if necessary.
   * 'ok': Returns results immediately, even if they’re out-of-date.
   * 'update_after': Returns results immediately, but kicks off a build afterwards.
   */
  stale?: "ok" | "update_after";
}

declare interface Query$Response<Content: {}> {
  total_rows: number;
  offset: number;
  rows: core$Array<{
    id: any,
    key: any,
    value: any,
    main$doc?: Core$Core$ExistingDocument<
      PetitDom$Content & Core$Core$AllDocsMeta
    >
  }>;
}

declare interface PouchDB$Database<Content: {} = {}> {
  /**
   * Cleans up any stale map/reduce indexes.
   *
   * As design docs are deleted or modified, their associated index
   * files(in CouchDB) or companion databases (in local PouchDBs) continue
   * to take up space on disk. viewCleanup() removes these unnecessary
   * index files.
   */
  viewCleanup(
    braintree$callback: Core$Core$Callback<Core$Core$BasicResponse>
  ): void;

  /**
   * Cleans up any stale map/reduce indexes.
   *
   * As design docs are deleted or modified, their associated index
   * files(in CouchDB) or companion databases (in local PouchDBs) continue
   * to take up space on disk. viewCleanup() removes these unnecessary
   * index files.
   */
  viewCleanup(): OfficeExtension$Promise<Core$Core$BasicResponse>;

  /**
   * Invoke a map/reduce function, which allows you to perform more complex queries
   * on PouchDB than what you get with allDocs().
   */
  esri$query<Result, Model>(
    fun:
      | string
      | PouchDB$Map<MeteorAstronomy$Model, Parsimmon$Result>
      | PouchDB$Filter<MeteorAstronomy$Model, Parsimmon$Result>,
    session$opts: orientjs$Query.Query$Options<
      MeteorAstronomy$Model,
      Parsimmon$Result
    >,
    braintree$callback: Core$Core$Callback<
      orientjs$Query.Query$Response<Parsimmon$Result>
    >
  ): void;

  /**
   * Invoke a map/reduce function, which allows you to perform more complex queries
   * on PouchDB than what you get with allDocs().
   */
  esri$query<Result, Model>(
    fun:
      | string
      | PouchDB$Map<MeteorAstronomy$Model, Parsimmon$Result>
      | PouchDB$Filter<MeteorAstronomy$Model, Parsimmon$Result>,
    braintree$callback: Core$Core$Callback<
      orientjs$Query.Query$Response<Parsimmon$Result>
    >
  ): void;

  /**
   * Invoke a map/reduce function, which allows you to perform more complex queries
   * on PouchDB than what you get with allDocs().
   */
  esri$query<Result, Model>(
    fun:
      | string
      | PouchDB$Map<MeteorAstronomy$Model, Parsimmon$Result>
      | PouchDB$Filter<MeteorAstronomy$Model, Parsimmon$Result>,
    session$opts?: orientjs$Query.Query$Options<
      MeteorAstronomy$Model,
      Parsimmon$Result
    >
  ): OfficeExtension$Promise<orientjs$Query.Query$Response<Parsimmon$Result>>;
}
declare module "pouchdb-mapreduce" {
  declare var plugin: PouchDB$PouchDB$Plugin;
  declare module.exports: typeof plugin;
}
