declare module "cassanknex" {
  import type { EventEmitter } from "events";

  import type {
    Client,
    ClientOptions,
    types,
    ResultCallback
  } from "cassandra-driver";

  import typeof * as Long from "long";

  import type { Readable } from "stream";

  declare function CassanKnex(
    options?: CassanKnex$DriverOptions
  ): CassanKnex$CassanKnex;

  declare export default typeof CassanKnex;

  declare interface CassanKnex$DriverOptions {
    debug?: boolean;
    connection?: Client | ClientOptions;
  }

  /**
   * Will return the `never` type if `T[K]` is not a member of `Type`, for all `T[K]`.
   */
  declare type CassanKnex$TypeMatchedValue<
    T,
    K: $Keys<T>,
    Type,
    This
  > = /* Flow doesn't support conditional types, use $Call utility type */ any;

  declare interface CassanKnex$MappedDict<B> {
    [key: string]: B;
  }

  declare type CassanKnex$InRestriction = "in" | "IN";

  declare type CassanKnex$ComparisonRestriction = "=" | "<" | ">" | "<=" | ">=";

  declare type CassanKnex$SelectAsClause<T> = $ObjMapi<T, <P>(P) => string>;

  declare type CassanKnex$CassanKnex = {
    (keyspace?: string): CassanKnex$QueryBuilderRoot
  } & EventEmitter;

  declare interface CassanKnex$StreamParams {
    readable: () => any;
    end: () => any;
    error: (err: Error) => any;
  }

  declare interface CassanKnex$QueryBuilderRoot {
    insert<T>(values: $Shape<T> | T): CassanKnex$InsertQueryBuilder;
    select<T>(...columns: Array<$Keys<T>>): CassanKnex$SelectQueryBuilder<T>;
    select<T>(
      values: CassanKnex$SelectAsClause<T>
    ): CassanKnex$SelectQueryBuilder<T>;
    update<T>(table: string): CassanKnex$UpdateQueryBuilder<T>;
    delete<T>(): CassanKnex$DeleteQueryBuilder<T>;
    alterColumnFamily<T>(
      columnFamily: string
    ): CassanKnex$AlterColumnFamilyQueryBuilder<T>;
    createColumnFamily<T>(
      columnFamily: string
    ): CassanKnex$CreateColumnFamilyQueryBuilder<T>;
    createColumnFamilyIfNotExists<T>(
      columnFamily: string
    ): CassanKnex$CreateColumnFamilyQueryBuilder<T>;
    createIndex<T>(
      columnFamily: string,
      indexName: string,
      column: $Keys<T>
    ): CassanKnex$QueryBuilder;
    createIndexCustom<T>(
      columnFamily: string,
      indexName: string,
      column: $Keys<T>
    ): CassanKnex$QueryBuilder & CassanKnex$CreateableIndexBuilder;
    createType<T>(typeName: string): CassanKnex$CreateTypeQueryBuilder<T>;
    createTypeIfNotExists<T>(
      typeName: string
    ): CassanKnex$CreateTypeQueryBuilder<T>;
    dropColumnFamily(columnFamily: string): CassanKnex$QueryBuilder;
    dropColumnFamilyIfExists(columnFamily: string): CassanKnex$QueryBuilder;
    dropType(): CassanKnex$QueryBuilder;
    dropTypeIfExists(): CassanKnex$QueryBuilder;
    truncate(columnFamily: string): CassanKnex$QueryBuilder;
    alterKeyspace(keyspace: string): CassanKnex$KeyspaceQueryBuilder;
    createKeyspace(keyspace: string): CassanKnex$KeyspaceQueryBuilder;
    createKeyspaceIfNotExists(
      keyspace: string
    ): CassanKnex$KeyspaceQueryBuilder;
    dropKeyspace(): CassanKnex$QueryBuilder;
    dropKeyspaceIfExists(): CassanKnex$QueryBuilder;
  }

  declare interface CassanKnex$QueryBuilder {
    cql(): string;
    bindings(): any[];
    exec(cb: ResultCallback): void;
    eachRow(
      onEachRow: (n: number, row: types$Row) => any,
      onError: (err: Error) => any
    ): void;
    stream(params: CassanKnex$StreamParams): void;
  }

  declare interface CassanKnex$FieldValueQueryBuilder<T> {
    decimal<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, types$BigDecimal, this>;
    boolean<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, boolean, this>;
    blob<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, Buffer, this>;
    timestamp<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, Date, this>;
    date<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, types$LocalDate, this>;
    inet<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, types$InetAddress, this>;
    bigint<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, Long, this>;
    counter<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, Long, this>;
    double<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, Long, this>;
    int<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, number, this>;
    float<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, number, this>;
    map<K: $Keys<T>, A: string, B>(
      columnName: K,
      a: A,
      b: B
    ): CassanKnex$TypeMatchedValue<T, K, Map<A, B>, this>;
    ascii<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, string, this>;
    text<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, string, this>;
    timeuuid<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, types$TimeUuid, this>;
    uuid<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, types$Uuid, this>;
    varchar<K: $Keys<T>>(
      columnName: K
    ): CassanKnex$TypeMatchedValue<T, K, string, this>;
    list<K: $Keys<T>>(
      columnName: K,
      typeName: string
    ): CassanKnex$TypeMatchedValue<T, K, any[], this>;
    primary(primaryKey: string): this;
    set<K: $Keys<T>, A: string>(
      columnName: K,
      a: A
    ): CassanKnex$TypeMatchedValue<T, K, Set<$ElementType<T, K>>, this>;
  }

  declare interface CassanKnex$CreateableColumnFamilyBuilder<T> {
    withCaching(): this;
    withCompression(): this;
    withCompaction(): this;
    withClusteringOrderBy<K: $Keys<T>>(
      value: K,
      direction: "desc" | "asc"
    ): this;
  }

  declare interface CassanKnex$CreateableIndexBuilder {
    withOptions(opts: CassanKnex$MappedDict<string>): this;
  }

  declare interface CassanKnex$KeyspaceableQueryBuilder {
    withNetworkTopologyStrategy(strategy: CassanKnex$MappedDict<number>): this;
    withSimpleStrategy(replicas: number): this;
    withDurableWrites(durableWrites: boolean): this;
  }

  declare interface CassanKnex$InsertableQueryBuilder {
    into(table: string): this;
    ifNotExists(): this;
  }

  declare interface CassanKnex$TtlableQueryBuilder {
    usingTimestamp(timestamp: number): this;
    usingTTL(ttl: number): this;
  }

  declare interface CassanKnex$WhereableQueryBuilder<T> {
    where<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$InRestriction,
      rhs: Array<$ElementType<T, K>>
    ): this;
    where<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$ComparisonRestriction,
      rhs: $ElementType<T, K>
    ): this;
    orWhere<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$InRestriction,
      rhs: Array<$ElementType<T, K>>
    ): this;
    orWhere<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$ComparisonRestriction,
      rhs: $ElementType<T, K>
    ): this;
    andWhere<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$InRestriction,
      rhs: Array<$ElementType<T, K>>
    ): this;
    andWhere<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$ComparisonRestriction,
      rhs: $ElementType<T, K>
    ): this;
    tokenWhere<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$InRestriction,
      rhs: Array<$ElementType<T, K>>
    ): this;
    tokenWhere<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$ComparisonRestriction,
      rhs: $ElementType<T, K>
    ): this;
    ttl<K: $Keys<T>>(columnName: K): this;
  }

  declare interface CassanKnex$IfableQueryBuilder<T> {
    if<K: $Keys<T>>(
      lhs: K,
      comparison: CassanKnex$ComparisonRestriction,
      rhs: $ElementType<T, K> | null
    ): this;
  }

  declare interface CassanKnex$LimitableQueryBuilder {
    limit(limit: number): this;
    limitPerPartition(limit: number): this;
  }

  declare interface CassanKnex$FromableQueryBuilder {
    from(table: string): this;
  }

  declare interface CassanKnex$UpdateableQueryBuilder<T> {
    set<K: $Keys<T>>(key: K, value: $ElementType<T, K>): this;
    set(object: $Shape<T>): this;
    add<K: $Keys<T>>(
      key: K,
      value: {
        [str: string]: $ElementType<T, K>
      }
    ): CassanKnex$TypeMatchedValue<T, K, Map<string, $ElementType<T, K>>, this>;
    add<K: $Keys<T>>(
      key: K,
      value: Array<$ElementType<T, K>>
    ): CassanKnex$TypeMatchedValue<T, K, any[] | Set<any>, this>;
    add(object: $Shape<T>): this;
    remove<K: $Keys<T>>(key: K, value: Array<$ElementType<T, K>>): this;
    remove(object: $Shape<T>): this;
    increment(column: $Keys<T>, amount: number): this;
    increment(object: $Shape<T>): this;
    decrement(column: $Keys<T>, amount: number): this;
    decrement(object: $Shape<T>): this;
  }

  declare interface CassanKnex$AlterableQueryBuilder<T> {
    drop<K: $Keys<T>>(...columns: K[]): this;
    rename<K: $Keys<T>>(column: K, newColumn: K): this;
    alter<K: $Keys<T>>(column: K, newType: string): this;
  }

  declare type CassanKnex$InsertQueryBuilder = CassanKnex$QueryBuilder &
    CassanKnex$InsertableQueryBuilder &
    CassanKnex$TtlableQueryBuilder;

  declare type CassanKnex$SelectQueryBuilder<T> = CassanKnex$QueryBuilder &
    CassanKnex$WhereableQueryBuilder<T> &
    CassanKnex$LimitableQueryBuilder &
    CassanKnex$FromableQueryBuilder;

  declare type CassanKnex$UpdateQueryBuilder<T> = CassanKnex$QueryBuilder &
    CassanKnex$WhereableQueryBuilder<T> &
    CassanKnex$UpdateableQueryBuilder<T> &
    CassanKnex$IfableQueryBuilder<T> &
    CassanKnex$TtlableQueryBuilder;

  declare type CassanKnex$DeleteQueryBuilder<T> = CassanKnex$QueryBuilder &
    CassanKnex$WhereableQueryBuilder<T> &
    CassanKnex$FromableQueryBuilder;

  declare type CassanKnex$CreateColumnFamilyQueryBuilder<
    T
  > = CassanKnex$QueryBuilder &
    CassanKnex$FieldValueQueryBuilder<T> &
    CassanKnex$CreateableColumnFamilyBuilder<T>;

  declare type CassanKnex$KeyspaceQueryBuilder = CassanKnex$QueryBuilder &
    CassanKnex$KeyspaceableQueryBuilder;

  declare type CassanKnex$CreateTypeQueryBuilder<T> = CassanKnex$QueryBuilder &
    CassanKnex$FieldValueQueryBuilder<T>;

  declare type CassanKnex$AlterColumnFamilyQueryBuilder<
    T
  > = CassanKnex$QueryBuilder &
    CassanKnex$AlterableQueryBuilder<T> &
    CassanKnex$FieldValueQueryBuilder<T>;
}
