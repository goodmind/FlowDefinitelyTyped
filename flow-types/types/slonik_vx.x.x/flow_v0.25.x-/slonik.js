declare module "slonik" {
  import typeof * as SlonikSymbol from "./symbols";

  declare export type LoggerType = (...args: string[]) => empty;
  declare export type MaybePromiseType<T> = T | Promise<T>;
  declare export type PrimitiveValueExpressionType =
    | string
    | number
    | boolean
    | null;
  declare export type ValueExpressionType =
    | PrimitiveValueExpressionType
    | IdentifierTokenType
    | RawSqlTokenType
    | SqlSqlTokenType
    | TupleListSqlTokenType
    | TupleSqlTokenType
    | UnnestSqlTokenType
    | ValueListSqlTokenType;
  declare export interface IdentifierTokenType {
    names: $ReadOnlyArray<string>;
    type: typeof SlonikSymbol.IdentifierTokenSymbol;
  }
  declare export interface SqlSqlTokenType {
    sql: string;
    type: typeof SlonikSymbol.SqlTokenSymbol;
    values: PrimitiveValueExpressionType[];
  }
  declare export interface RawSqlTokenType {
    sql: string;
    type: typeof SlonikSymbol.RawSqlTokenSymbol;
    values: PrimitiveValueExpressionType[];
  }
  declare export interface ValueListSqlTokenType {
    values: PrimitiveValueExpressionType[];
    type: typeof SlonikSymbol.ValueListTokenSymbol;
  }
  declare export interface TupleSqlTokenType {
    values: PrimitiveValueExpressionType[];
    type: typeof SlonikSymbol.TupleTokenSymbol;
  }
  declare export interface TupleListSqlTokenType {
    tuples: PrimitiveValueExpressionType[];
    type: typeof SlonikSymbol.TupleListTokenSymbol;
  }
  declare export interface UnnestSqlTokenType {
    columnTypes: string[];
    tuples: PrimitiveValueExpressionType[][];
    type: typeof SlonikSymbol.UnnestTokenSymbol;
  }
  declare export interface FieldType {
    columnID: number;
    dataTypeID: number;
    dataTypeModifier: number;
    dataTypeSize: number;
    format: string;
    name: string;
    tableID: number;
  }
  declare export type DatabaseTransactionConnectionType = CommonQueryMethodsType & {
    transaction: (handler: TransactionFunctionType) => Promise<mixed>
  };
  declare export type DatabasePoolConnectionType = CommonQueryMethodsType & {
    transaction: (handler: TransactionFunctionType) => Promise<mixed>
  };
  declare export type ConnectionRoutineType = (
    connection: DatabasePoolConnectionType
  ) => Promise<mixed>;
  declare export type DatabasePoolType = CommonQueryMethodsType & {
    connect: (connectionRoutine: ConnectionRoutineType) => Promise<mixed>,
    transaction: (handler: TransactionFunctionType) => Promise<mixed>
  };
  declare export type DatabaseConfigurationType =
    | string
    | {
        database?: string,
        host?: string,
        idleTimeoutMillis?: number,
        max?: number,
        password?: string,
        port?: number,
        user?: string
      };
  declare export type ConnectionTypeType =
    | "EXPLICIT"
    | "IMPLICIT_QUERY"
    | "IMPLICIT_TRANSACTION";
  declare export interface ConnectionContextType {
    /**
     * Unique connection ID
     */
    connectionId: string;
    connectionType: ConnectionTypeType;

    /**
     * Instance of Roarr logger with bound connection context parameters
     */
    log: LoggerType;

    /**
     * Unique connection pool ID
     */
    poolId: string;
  }
  declare export type DatabaseConnectionType = DatabasePoolConnectionType &
    DatabasePoolType;
  declare export type QueryIdType = string;
  declare export interface QueryType {
    sql: string;
    values?: $ReadOnlyArray<PrimitiveValueExpressionType>;
  }
  declare export type QueryMethodType<R> = (
    sql: TaggedTemplateLiteralInvocationType,
    values?: PrimitiveValueExpressionType[]
  ) => Promise<R>;
  declare export interface NoticeType {
    code: string;
    length: number;
    message: string;
    name: string;
    severity: string;
    where: string;
  }
  declare export type QueryResultType<T> = $ReadOnly<{
    command: "DELETE" | "INSERT" | "SELECT" | "UPDATE",
    fields: $ReadOnlyArray<FieldType>,
    notices: $ReadOnlyArray<NoticeType>,
    oid: number | null,
    rowAsArray: boolean,
    rowCount: number,
    rows: $ReadOnlyArray<T>
  }>;
  declare export type QueryResultRowColumnType = string | number;
  declare export type QueryResultRowType<
    ColumnName: string = string
  > = $ObjMapi<
    { [k: ColumnName]: any },
    <name>(name) => QueryResultRowColumnType
  >;
  declare export type QueryAnyFirstFunctionType = QueryMethodType<
    QueryResultRowColumnType[]
  >;
  declare export type QueryAnyFunctionType = QueryMethodType<
    QueryResultRowType<>[]
  >;
  declare export type QueryFunctionType = QueryMethodType<QueryResultRowType<>>;
  declare export type QueryManyFirstFunctionType = QueryMethodType<
    QueryResultRowColumnType[]
  >;
  declare export type QueryManyFunctionType = QueryMethodType<
    QueryResultRowType<>[]
  >;
  declare export type QueryMaybeOneFirstFunctionType = QueryMethodType<QueryResultRowColumnType>;
  declare export type QueryMaybeOneFunctionType = QueryMethodType<QueryResultRowType<> | null>;
  declare export type QueryOneFirstFunctionType = QueryMethodType<QueryResultRowColumnType>;
  declare export type QueryOneFunctionType = QueryMethodType<
    QueryResultRowType<>
  >;
  declare export interface CommonQueryMethodsType {
    any: QueryAnyFunctionType;
    anyFirst: QueryAnyFirstFunctionType;
    many: QueryManyFunctionType;
    manyFirst: QueryManyFirstFunctionType;
    maybeOne: QueryMaybeOneFunctionType;
    maybeOneFirst: QueryMaybeOneFirstFunctionType;
    one: QueryOneFunctionType;
    oneFirst: QueryOneFirstFunctionType;
    query: QueryFunctionType;
  }
  declare export interface CallSiteType {
    columnNumber: number;
    fileName: string | null;
    lineNumber: number;
  }
  declare export interface QueryContextType {
    /**
     * Unique connection ID
     */
    connectionId: string;

    /**
     * Instance of Roarr logger with bound query context parameters
     */
    log: LoggerType;

    /**
     * A copy of the query before `transformQuery` middleware
     */
    originalQuery: QueryType;

    /**
     * Unique connection pool ID
     */
    poolId: string;

    /**
     * Unique query ID
     */
    queryId: QueryIdType;
    stackTrace: CallSiteType[] | null;

    /**
     * `process.hrtime.bigint()` for when query was received.
     */
    queryInputTime: number;

    /**
     * Unique transaction ID
     */
    transactionId?: string;
  }
  declare export interface TaggedTemplateLiteralInvocationType {
    sql: string;
    type: typeof SlonikSymbol.SqlTokenSymbol;
    values: ValueExpressionType[];
  }
  declare export var sql: SqlTaggedTemplateType;
  declare export interface SqlTaggedTemplateType {
    (
      template: TemplateStringsArray,
      ...vals: ValueExpressionType[]
    ): SqlSqlTokenType;
    identifier: (names: string[]) => IdentifierTokenType;
    raw: (
      rawSql: string,
      values?: PrimitiveValueExpressionType[]
    ) => RawSqlTokenType;
    tuple: (values: PrimitiveValueExpressionType[]) => TupleSqlTokenType;
    tupleList: (
      tuples: PrimitiveValueExpressionType[][]
    ) => TupleListSqlTokenType;
    unnest: (
      tuples: PrimitiveValueExpressionType[][],
      columnTypes: string[]
    ) => UnnestSqlTokenType;
    valueList: (
      values: PrimitiveValueExpressionType[]
    ) => ValueListSqlTokenType;
  }
  declare export interface SqlFragmentType {
    parameters: PrimitiveValueExpressionType[];
    sql: string;
  }
  declare export interface PoolContextType {
    /**
     * Instance of Roarr logger with bound connection context parameters
     */
    log: LoggerType;

    /**
     * Unique connection pool ID
     */
    poolId: string;

    /**
     * The query that is initiating the connection
     */
    query: TaggedTemplateLiteralInvocationType | null;
  }
  declare export function createPool(
    connectionConfiguration: DatabaseConfigurationType,
    clientUserConfiguration?: ClientUserConfigurationType<>
  ): DatabasePoolType;

  declare export type TransactionFunctionType = (
    connection: DatabaseTransactionConnectionType
  ) => Promise<mixed>;
  declare export interface InterceptorType {
    afterPoolConnection?: (
      connectionContext: ConnectionContextType,
      connection: DatabasePoolConnectionType
    ) => MaybePromiseType<void>;
    afterQueryExecution?: (
      queryContext: QueryContextType,
      query: QueryType,
      result: QueryResultType<QueryResultRowType<>>
    ) => MaybePromiseType<QueryResultType<QueryResultRowType<>>>;
    beforePoolConnection?: (
      connectionContext: PoolContextType
    ) => MaybePromiseType<DatabasePoolType | null | void>;
    beforePoolConnectionRelease?: (
      connectionContext: ConnectionContextType,
      connection: DatabasePoolConnectionType
    ) => MaybePromiseType<void>;
    beforeQueryExecution?: (
      queryContext: QueryContextType,
      query: QueryType
    ) => MaybePromiseType<QueryResultType<QueryResultRowType<>> | void>;
    transformQuery?: (
      queryContext: QueryContextType,
      query: QueryType
    ) => MaybePromiseType<QueryType>;
  }

  /**
   * Default interceptors:
   * - [Field name transformation interceptor](https://github.com/gajus/slonik#field-name-transformation-interceptor)
   * - [Query normalization interceptor](https://github.com/gajus/slonik#query-normalization-interceptor)
   *
   * See official [readme](https://github.com/gajus/slonik#default-interceptors) for more information.
   */
  declare export function createInterceptorPreset(): InterceptorType[];

  declare export function createFieldNameTransformationInterceptor(configuration: {
    format: string,
    test?: (field: FieldType) => boolean
  }): InterceptorType;

  declare export function createQueryNormalizationInterceptor(configuration?: {
    stripComments?: boolean
  }): InterceptorType;

  declare export function createBenchmarkingInterceptor(): InterceptorType;

  declare export interface TypeParserType<T = mixed> {
    /**
     * Value of "pg_type"."typname" (e.g. "int8", "timestamp", "timestamptz")
     */
    name: string;
    parse: (value: string) => T;
  }
  declare export function createBigintTypeParser(): TypeParserType<number>;

  declare export function createTimestampTypeParser(): TypeParserType<
    number | null
  >;

  declare export function createTimestampWithTimeZoneTypeParser(): TypeParserType<
    number | null
  >;

  /**
   * Default type parsers.
   *
   * These interceptors are enabled by default:
   * - `int8`: Produces an integer.
   * - `timestamp`: Produces a unix timestamp (in milliseconds).
   * - `timestamptz`: Produces a unix timestamp (in milliseconds).
   */
  declare export function createTypeParserPreset(): TypeParserType<>[];

  declare export interface ClientConfigurationType {
    captureStackTrace?: boolean;

    /**
     * An array of [Slonik interceptors](https://github.com/gajus/slonik#slonik-interceptors)
     */
    interceptors?: InterceptorType[];

    /**
     * An array of [Slonik type parsers](https://github.com/gajus/slonik#slonik-type-parsers)
     */
    typeParsers?: TypeParserType<>[];
  }
  declare export interface ClientUserConfigurationType<T = mixed> {
    /**
     * An array of [Slonik interceptors](https://github.com/gajus/slonik#slonik-interceptors)
     */
    interceptors?: InterceptorType[];

    /**
     * An array of [Slonik type parsers](https://github.com/gajus/slonik#slonik-type-parsers)
     */
    typeParsers?: TypeParserType<>[];
  }
  declare export class SlonikError mixins Error {}
  declare export class NotFoundError mixins SlonikError {}
  declare export class DataIntegrityError mixins SlonikError {}
  declare export class IntegrityConstraintViolationError mixins SlonikError {}
  declare export class NotNullIntegrityConstraintViolationError
    mixins IntegrityConstraintViolationError {}
  declare export class ForeignKeyIntegrityConstraintViolationError
    mixins IntegrityConstraintViolationError {}
  declare export class UniqueIntegrityConstraintViolationError
    mixins IntegrityConstraintViolationError {}
  declare export class CheckIntegrityConstraintViolationError
    mixins IntegrityConstraintViolationError {}
}
