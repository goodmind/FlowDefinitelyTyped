declare module "cassandra-driver" {
  declare export type Callback = Function;
  declare export type ResultCallback = (
    err: Error,
    result: types$types$ResultSet
  ) => void;
  import typeof * as events from "events";

  import typeof * as stream from "stream";

  import typeof * as tls from "tls";

  declare var npm$namespace$addressResolution: {
    EC2MultiRegionTranslator: typeof addressResolution$EC2MultiRegionTranslator
  };
  declare var addressResolution$EC2MultiRegionTranslator: addressResolution$EC2MultiRegionTranslatorStatic;

  declare interface addressResolution$AddressTranslator {
    translate(address: string, port: number, callback: Callback): void;
  }

  declare interface addressResolution$EC2MultiRegionTranslatorStatic {
    new(): addressResolution$EC2MultiRegionTranslator;
  }

  declare type addressResolution$EC2MultiRegionTranslator = {
    logError(address: string, err: Error): void
  } & addressResolution$AddressTranslator;

  declare var npm$namespace$loadBalancing: {
    DCAwareRoundRobinPolicy: typeof loadBalancing$DCAwareRoundRobinPolicy,
    RoundRobinPolicy: typeof loadBalancing$RoundRobinPolicy,
    TokenAwarePolicy: typeof loadBalancing$TokenAwarePolicy,
    WhiteListPolicy: typeof loadBalancing$WhiteListPolicy
  };
  declare var loadBalancing$DCAwareRoundRobinPolicy: loadBalancing$DCAwareRoundRobinPolicyStatic;

  declare var loadBalancing$RoundRobinPolicy: loadBalancing$RoundRobinPolicyStatic;

  declare var loadBalancing$TokenAwarePolicy: loadBalancing$TokenAwarePolicyStatic;

  declare var loadBalancing$WhiteListPolicy: loadBalancing$WhiteListPolicyStatic;

  declare interface loadBalancing$LoadBalancingPolicy {
    init(client: Client, hosts: HostMap, callback: Callback): void;
    getDistance(host: Host): types$types$distance;
    newQueryPlan(
      keyspace: string,
      queryOptions: ExecutionOptions | null,
      callback: Callback
    ): void;
  }

  declare interface loadBalancing$DCAwareRoundRobinPolicyStatic {
    new(localDc?: string): loadBalancing$DCAwareRoundRobinPolicy;
  }

  declare type loadBalancing$DCAwareRoundRobinPolicy = {
    localHostsArray: Host[],
    remoteHostsArray: Host[]
  } & loadBalancing$LoadBalancingPolicy;

  declare interface loadBalancing$RoundRobinPolicyStatic {
    new(): loadBalancing$RoundRobinPolicy;
  }

  declare type loadBalancing$RoundRobinPolicy = {} & loadBalancing$LoadBalancingPolicy;

  declare interface loadBalancing$TokenAwarePolicyStatic {
    new(
      childPolicy: loadBalancing$LoadBalancingPolicy
    ): loadBalancing$TokenAwarePolicy;
  }

  declare type loadBalancing$TokenAwarePolicy = {} & loadBalancing$LoadBalancingPolicy;

  declare interface loadBalancing$WhiteListPolicyStatic {
    new(
      childPolicy: loadBalancing$LoadBalancingPolicy,
      whiteList: string[]
    ): loadBalancing$WhiteListPolicy;
  }

  declare type loadBalancing$WhiteListPolicy = {} & loadBalancing$LoadBalancingPolicy;

  declare var npm$namespace$reconnection: {
    ConstantReconnectionPolicy: typeof reconnection$ConstantReconnectionPolicy,
    ExponentialReconnectionPolicy: typeof reconnection$ExponentialReconnectionPolicy
  };
  declare var reconnection$ConstantReconnectionPolicy: reconnection$ConstantReconnectionPolicyStatic;

  declare var reconnection$ExponentialReconnectionPolicy: reconnection$ExponentialReconnectionPolicyStatic;

  declare interface reconnection$ReconnectionPolicy {
    newSchedule(): {
      next(): {
        delay: number,
        done: boolean
      }
    };
  }

  declare interface reconnection$ConstantReconnectionPolicyStatic {
    new(delay: number): reconnection$ConstantReconnectionPolicy;
  }

  declare type reconnection$ConstantReconnectionPolicy = {} & reconnection$ReconnectionPolicy;

  declare interface reconnection$ExponentialReconnectionPolicyStatic {
    new(
      baseDelay: number,
      maxDelay: number,
      startWithNoDelay: boolean
    ): reconnection$ExponentialReconnectionPolicy;
  }

  declare type reconnection$ExponentialReconnectionPolicy = {} & reconnection$ReconnectionPolicy;

  declare var npm$namespace$retry: {
    RetryPolicy: typeof retry$RetryPolicy
  };
  declare var retry$RetryPolicy: retry$RetryPolicyStatic;

  declare interface retry$DecisionInfo {
    decision: number;
    consistency: number;
  }

  declare interface retry$RequestInfo {
    request: any;
    nbRetry: number;
  }

  declare class retry$retryDecision {
    constructor(...args: empty): mixed;
    static +rethrow: Class<retry$retryDecision__rethrow> &
      retry$retryDecision__rethrow &
      0; // 0
    static +retry: Class<retry$retryDecision__retry> &
      retry$retryDecision__retry &
      1; // 1
    static +ignore: Class<retry$retryDecision__ignore> &
      retry$retryDecision__ignore &
      2; // 2
  }

  declare class retry$retryDecision__rethrow mixins retry$retryDecision {}
  declare class retry$retryDecision__retry mixins retry$retryDecision {}
  declare class retry$retryDecision__ignore mixins retry$retryDecision {}

  declare interface retry$RetryPolicyStatic {
    new(): retry$RetryPolicy;
    retry$retryDecision: {
      rethrow: number,
      retry: number,
      ignore: number
    };
  }

  declare interface retry$RetryPolicy {
    onReadTimeout(
      requestInfo: retry$RequestInfo,
      consistency: types$types$consistencies,
      received: number,
      blockFor: number,
      isDataPresent: boolean
    ): retry$DecisionInfo;
    onUnavailable(
      requestInfo: retry$RequestInfo,
      consistency: types$types$consistencies,
      required: number,
      alive: number
    ): retry$DecisionInfo;
    onWriteTimeout(
      requestInfo: retry$RequestInfo,
      consistency: types$types$consistencies,
      received: number,
      blockFor: number,
      writeType: string
    ): retry$DecisionInfo;
    rethrowResult(): {
      decision: retry$retryDecision
    };
    retryResult(): {
      decision: retry$retryDecision,
      consistency: types$types$consistencies,
      useCurrentHost: boolean
    };
  }

  declare var npm$namespace$speculativeExecution: {
    NoSpeculativeExecutionPolicy: typeof speculativeExecution$NoSpeculativeExecutionPolicy
  };
  declare var speculativeExecution$NoSpeculativeExecutionPolicy: speculativeExecution$NoSpeculativeExecutionPolicyStatic;

  declare interface speculativeExecution$SpeculativeExecutionPolicy {
    init(client: Client): void;
    newPlan(
      keyspace: string,
      queryInfo: string | string[]
    ): {
      nextExecution: () => number
    };
  }

  declare interface speculativeExecution$NoSpeculativeExecutionPolicyStatic {
    new(): speculativeExecution$NoSpeculativeExecutionPolicy;
  }

  declare type speculativeExecution$NoSpeculativeExecutionPolicy = {} & speculativeExecution$SpeculativeExecutionPolicy;

  declare interface speculativeExecution$ConstantSpeculativeExecutionPolicyStatic {
    new(
      delay: number,
      maxSpeculativeExecutions: number
    ): speculativeExecution$ConstantSpeculativeExecutionPolicy;
  }

  declare type speculativeExecution$ConstantSpeculativeExecutionPolicy = {} & speculativeExecution$SpeculativeExecutionPolicy;

  declare var npm$namespace$timestampGeneration: {
    MonotonicTimestampGenerator: typeof timestampGeneration$MonotonicTimestampGenerator
  };
  declare var timestampGeneration$MonotonicTimestampGenerator: timestampGeneration$MonotonicTimestampGeneratorStatic;

  declare interface timestampGeneration$TimestampGenerator {
    next(client: Client): null | number | _Long;
  }

  declare interface timestampGeneration$MonotonicTimestampGeneratorStatic {
    new(
      warningThreshold?: number,
      minLogInterval?: number
    ): timestampGeneration$MonotonicTimestampGeneratorStatic;
  }

  declare type timestampGeneration$MonotonicTimestampGenerator = {
    getDate(): number
  } & timestampGeneration$TimestampGenerator;

  declare var npm$namespace$types: {
    generateTimestamp: typeof types$generateTimestamp,
    timeuuid: typeof types$timeuuid,
    BigDecimal: typeof types$BigDecimal,
    Duration: typeof types$Duration,
    Long: typeof types$Long,
    InetAddress: typeof types$InetAddress,
    Integer: typeof types$Integer,
    LocalDate: typeof types$LocalDate,
    LocalTime: typeof types$LocalTime,
    ResultSet: typeof types$ResultSet,
    Row: typeof types$Row,
    TimeUuid: typeof types$TimeUuid,
    Tuple: typeof types$Tuple,
    Uuid: typeof types$Uuid
  };
  declare var types$BigDecimal: types$BigDecimalStatic;

  declare var types$Duration: types$DurationStatic;

  declare var types$Long: _Long;

  declare var types$InetAddress: types$InetAddressStatic;

  declare var types$Integer: types$IntegerStatic;

  declare var types$LocalDate: types$LocalDateStatic;

  declare var types$LocalTime: types$LocalTimeStatic;

  declare var types$ResultSet: types$ResultSetStatic;

  declare var types$Row: types$RowStatic;

  declare var types$TimeUuid: types$TimeUuidStatic;

  declare var types$Tuple: types$TupleStatic;

  declare var types$Uuid: types$UuidStatic;

  declare class types$consistencies {
    constructor(...args: empty): mixed;
    static +any: Class<types$consistencies__any> & types$consistencies__any & 0; // 0
    static +one: Class<types$consistencies__one> & types$consistencies__one & 1; // 1
    static +two: Class<types$consistencies__two> & types$consistencies__two & 2; // 2
    static +three: Class<types$consistencies__three> &
      types$consistencies__three &
      3; // 3
    static +quorum: Class<types$consistencies__quorum> &
      types$consistencies__quorum &
      4; // 4
    static +all: Class<types$consistencies__all> & types$consistencies__all & 5; // 5
    static +localQuorum: Class<types$consistencies__localQuorum> &
      types$consistencies__localQuorum &
      6; // 6
    static +eachQuorum: Class<types$consistencies__eachQuorum> &
      types$consistencies__eachQuorum &
      7; // 7
    static +serial: Class<types$consistencies__serial> &
      types$consistencies__serial &
      8; // 8
    static +localSerial: Class<types$consistencies__localSerial> &
      types$consistencies__localSerial &
      9; // 9
    static +localOne: Class<types$consistencies__localOne> &
      types$consistencies__localOne &
      10; // 10
  }

  declare class types$consistencies__any mixins types$consistencies {}
  declare class types$consistencies__one mixins types$consistencies {}
  declare class types$consistencies__two mixins types$consistencies {}
  declare class types$consistencies__three mixins types$consistencies {}
  declare class types$consistencies__quorum mixins types$consistencies {}
  declare class types$consistencies__all mixins types$consistencies {}
  declare class types$consistencies__localQuorum mixins types$consistencies {}
  declare class types$consistencies__eachQuorum mixins types$consistencies {}
  declare class types$consistencies__serial mixins types$consistencies {}
  declare class types$consistencies__localSerial mixins types$consistencies {}
  declare class types$consistencies__localOne mixins types$consistencies {}

  declare class types$dataTypes {
    constructor(...args: empty): mixed;
    static +custom: Class<types$dataTypes__custom> &
      types$dataTypes__custom &
      0; // 0
    static +ascii: Class<types$dataTypes__ascii> & types$dataTypes__ascii & 1; // 1
    static +bigint: Class<types$dataTypes__bigint> &
      types$dataTypes__bigint &
      2; // 2
    static +blob: Class<types$dataTypes__blob> & types$dataTypes__blob & 3; // 3
    static +boolean: Class<types$dataTypes__boolean> &
      types$dataTypes__boolean &
      4; // 4
    static +counter: Class<types$dataTypes__counter> &
      types$dataTypes__counter &
      5; // 5
    static +decimal: Class<types$dataTypes__decimal> &
      types$dataTypes__decimal &
      6; // 6
    static +double: Class<types$dataTypes__double> &
      types$dataTypes__double &
      7; // 7
    static +float: Class<types$dataTypes__float> & types$dataTypes__float & 8; // 8
    static +int: Class<types$dataTypes__int> & types$dataTypes__int & 9; // 9
    static +text: Class<types$dataTypes__text> & types$dataTypes__text & 10; // 10
    static +timestamp: Class<types$dataTypes__timestamp> &
      types$dataTypes__timestamp &
      11; // 11
    static +uuid: Class<types$dataTypes__uuid> & types$dataTypes__uuid & 12; // 12
    static +varchar: Class<types$dataTypes__varchar> &
      types$dataTypes__varchar &
      13; // 13
    static +varint: Class<types$dataTypes__varint> &
      types$dataTypes__varint &
      14; // 14
    static +timeuuid: Class<types$dataTypes__timeuuid> &
      types$dataTypes__timeuuid &
      15; // 15
    static +inet: Class<types$dataTypes__inet> & types$dataTypes__inet & 16; // 16
    static +date: Class<types$dataTypes__date> & types$dataTypes__date & 17; // 17
    static +time: Class<types$dataTypes__time> & types$dataTypes__time & 18; // 18
    static +smallint: Class<types$dataTypes__smallint> &
      types$dataTypes__smallint &
      19; // 19
    static +tinyint: Class<types$dataTypes__tinyint> &
      types$dataTypes__tinyint &
      20; // 20
    static +list: Class<types$dataTypes__list> & types$dataTypes__list & 21; // 21
    static +map: Class<types$dataTypes__map> & types$dataTypes__map & 22; // 22
    static +set: Class<types$dataTypes__set> & types$dataTypes__set & 23; // 23
    static +udt: Class<types$dataTypes__udt> & types$dataTypes__udt & 24; // 24
    static +tuple: Class<types$dataTypes__tuple> & types$dataTypes__tuple & 25; // 25
  }

  declare class types$dataTypes__custom mixins types$dataTypes {}
  declare class types$dataTypes__ascii mixins types$dataTypes {}
  declare class types$dataTypes__bigint mixins types$dataTypes {}
  declare class types$dataTypes__blob mixins types$dataTypes {}
  declare class types$dataTypes__boolean mixins types$dataTypes {}
  declare class types$dataTypes__counter mixins types$dataTypes {}
  declare class types$dataTypes__decimal mixins types$dataTypes {}
  declare class types$dataTypes__double mixins types$dataTypes {}
  declare class types$dataTypes__float mixins types$dataTypes {}
  declare class types$dataTypes__int mixins types$dataTypes {}
  declare class types$dataTypes__text mixins types$dataTypes {}
  declare class types$dataTypes__timestamp mixins types$dataTypes {}
  declare class types$dataTypes__uuid mixins types$dataTypes {}
  declare class types$dataTypes__varchar mixins types$dataTypes {}
  declare class types$dataTypes__varint mixins types$dataTypes {}
  declare class types$dataTypes__timeuuid mixins types$dataTypes {}
  declare class types$dataTypes__inet mixins types$dataTypes {}
  declare class types$dataTypes__date mixins types$dataTypes {}
  declare class types$dataTypes__time mixins types$dataTypes {}
  declare class types$dataTypes__smallint mixins types$dataTypes {}
  declare class types$dataTypes__tinyint mixins types$dataTypes {}
  declare class types$dataTypes__list mixins types$dataTypes {}
  declare class types$dataTypes__map mixins types$dataTypes {}
  declare class types$dataTypes__set mixins types$dataTypes {}
  declare class types$dataTypes__udt mixins types$dataTypes {}
  declare class types$dataTypes__tuple mixins types$dataTypes {}

  declare class types$distance {
    constructor(...args: empty): mixed;
    static +local: Class<types$distance__local> & types$distance__local & 0; // 0
    static +remote: Class<types$distance__remote> & types$distance__remote & 1; // 1
    static +ignored: Class<types$distance__ignored> &
      types$distance__ignored &
      2; // 2
  }

  declare class types$distance__local mixins types$distance {}
  declare class types$distance__remote mixins types$distance {}
  declare class types$distance__ignored mixins types$distance {}

  declare interface types$responseErrorCodes {
    [key: string]: number;
  }

  declare interface types$unset {
    types$unset: boolean;
  }

  declare function types$generateTimestamp(
    date?: Date,
    microseconds?: number
  ): _Long;

  declare function types$timeuuid(
    options?: {
      msecs: number | Date,
      node: Buffer,
      clockseq: number,
      nsecs: number
    },
    buffer?: Buffer,
    offset?: number
  ): string;

  declare interface types$BigDecimalStatic {
    new(unscaledValue: number, scale: number): types$BigDecimal;
    fromBuffer(buf: Buffer): types$BigDecimal;
    toBuffer(value: types$BigDecimal): Buffer;
    fromString(value: string): types$BigDecimal;
    fromNumber(value: number): types$BigDecimal;
  }

  declare interface types$BigDecimal {
    equals(other: types$BigDecimal): boolean;
    inspect(): string;
    notEquals(other: types$BigDecimal): boolean;
    compare(other: types$BigDecimal): number;
    subtract(other: types$BigDecimal): types$BigDecimal;
    add(other: types$BigDecimal): types$BigDecimal;
    greaterThan(other: types$BigDecimal): boolean;
    isNegative(): boolean;
    isZero(): boolean;
    toString(): string;
    toNumber(): number;
    toJSON(): string;
  }

  declare interface types$DurationStatic {
    new(
      month: number,
      days: number,
      nanoseconds: number | _Long
    ): types$Duration;
    fromBuffer(buffer: Buffer): types$Duration;
    fromString(input: string): types$Duration;
  }

  declare interface types$Duration {
    equals(other: types$Duration): boolean;
    toBuffer(): Buffer;
    toString(): string;
  }

  declare interface types$InetAddressStatic {
    new(buffer: Buffer): types$InetAddress;
    fromString(value: string): types$InetAddress;
  }

  declare interface types$InetAddress {
    equals(other: types$InetAddress): boolean;
    getBuffer(): Buffer;
    inspect(): string;
    toString(): string;
    toJSON(): string;
    length: number;
    version: number;
  }

  declare interface types$IntegerStatic {
    new(bits: number[], sign: number): types$Integer;
    fromInt(value: number): types$Integer;
    fromNumber(value: number): types$Integer;
    fromBits(bits: number[]): types$Integer;
    fromString(str: string, opt_radix?: number): types$Integer;
    fromBuffer(bits: Buffer): types$Integer;
    toBuffer(value: types$Integer): Buffer;
    ZERO: types$Integer;
    ONE: types$Integer;
  }

  declare interface types$Integer {
    toInt(): number;
    toNumber(): number;
    toString(opt_radix?: number): string;
    getBits(index: number): number;
    getBitsUnsigned(index: number): number;
    getSign(): number;
    isZero(): boolean;
    isNegative(): boolean;
    isOdd(): boolean;
    equals(other: types$Integer): boolean;
    notEquals(other: types$Integer): boolean;
    greaterThan(other: types$Integer): boolean;
    greaterThanOrEqual(other: types$Integer): boolean;
    lessThan(other: types$Integer): boolean;
    lessThanOrEqual(other: types$Integer): boolean;
    compare(other: types$Integer): number;
    shorten(numBits: number): types$Integer;
    negate(): types$Integer;
    add(other: types$Integer): types$Integer;
    subtract(other: types$Integer): types$Integer;
    multiply(other: types$Integer): types$Integer;
    divide(other: types$Integer): types$Integer;
    modulo(other: types$Integer): types$Integer;
    not(): types$Integer;
    and(other: types$Integer): types$Integer;
    or(other: types$Integer): types$Integer;
    xor(other: types$Integer): types$Integer;
    shiftLeft(numBits: number): types$Integer;
    shiftRight(numBits: number): types$Integer;
    inspect(): string;
    abs(): types$Integer;
    toJSON(): string;
  }

  declare interface types$LocalDateStatic {
    new(year: number, month: number, day: number): types$LocalDate;
    now(): types$LocalDate;
    utcNow(): types$LocalDate;
    fromDate(date: Date): types$LocalDate;
    fromString(value: string): types$LocalDate;
    fromBuffer(buffer: Buffer): types$LocalDate;
  }

  declare interface types$LocalDate {
    _value: number;
    year: number;
    month: number;
    day: number;
    equals(other: types$LocalDate): boolean;
    inspect(): string;
    toBuffer(): Buffer;
    toString(): string;
    toJSON(): string;
  }

  declare interface types$LocalTimeStatic {
    new(totalNanoseconds: _Long): types$LocalTime;
    fromString(value: string): types$LocalTime;
    now(nanoseconds?: number): types$LocalTime;
    fromDate(date: Date, nanoseconds: number): types$LocalTime;
    fromMilliseconds(
      milliseconds: number,
      nanoseconds?: number
    ): types$LocalTime;
    fromBuffer(value: Buffer): types$LocalTime;
  }

  declare interface types$LocalTime {
    hour: number;
    minute: number;
    second: number;
    nanosecond: number;
    compare(other: types$LocalTime): boolean;
    equals(other: types$LocalTime): boolean;
    getTotalNanoseconds(): _Long;
    inspect(): string;
    toBuffer(): Buffer;
    toString(): string;
    toJSON(): string;
  }

  declare interface types$ResultSetStatic {
    new(
      response: any,
      host: string,
      triedHost: {
        [key: string]: any
      },
      speculativeExecutions: number,
      consistency: types$consistencies
    ): types$ResultSet;
  }

  declare interface types$ResultSet {
    info: {
      queriedHost: Host,
      triedHosts: {
        [key: string]: string
      },
      speculativeExecutions: number,
      achievedConsistency: types$consistencies,
      traceId: types$Uuid,
      warnings: string[],
      customPayload: any
    };
    rows: types$Row[];
    rowLength: number;
    columns: Array<{
      [key: string]: string
    }>;
    pageState: string;
    nextPage: () => void;
    first(): types$Row | null;
    getPageState(): string;
    getColumns(): Array<{
      [key: string]: string
    }>;
    wasApplied(): boolean;
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<types$Row>;
  }

  declare interface types$ResultStreamStatic {
    new(opt: any): types$ResultSet;
  }

  declare type types$ResultStream = {
    buffer: Buffer,
    paused: boolean,
    _valve(readNext: () => void): void,
    add(chunk: Buffer): void
  } & stream.Readable;

  declare interface types$RowStatic {
    new(
      columns: Array<{
        [key: string]: string
      }>
    ): types$Row;
  }

  declare interface types$Row {
    get(
      columnName: string | number
    ): {
      [key: string]: any
    };
    values(): Array<{
      [key: string]: any
    }>;
    keys(): string[];
    forEach(callback: Callback): void;
    [key: string]: any;
  }

  declare interface types$TimeUuidStatic {
    new(
      value?: Date,
      ticks?: number,
      nodeId?: string | Buffer,
      clockId?: string | Buffer
    ): types$TimeUuid;
    fromDate(
      date: Date,
      ticks?: number,
      nodeId?: string | Buffer,
      clockId?: string | Buffer
    ): types$TimeUuid;
    fromString(value: string): types$TimeUuid;
    min(date: Date, ticks?: number): types$TimeUuid;
    max(date: Date, ticks?: number): types$TimeUuid;
    now(nodeId?: string | Buffer, clockId?: string | Buffer): types$TimeUuid;
  }

  declare type types$TimeUuid = {
    getDatePrecision(): {
      date: Date,
      ticks: number
    },
    getDate(): Date,
    getNodeId(): Buffer,
    getNodeIdString(): string
  } & types$Uuid;

  declare interface types$TupleStatic {
    new(...args: any[]): types$Tuple;
    fromArray(elements: any[]): types$Tuple;
  }

  declare interface types$Tuple {
    elements: any[];
    length: number;
    get(index: number): any;
    toString(): string;
    toJSON(): string;
    values(): any[];
  }

  declare interface types$UuidStatic {
    new(buffer: Buffer): types$Uuid;
    fromString(value: string): types$Uuid;
    random(): types$Uuid;
  }

  declare interface types$Uuid {
    buffer: Buffer;
    getBuffer(): Buffer;
    equals(other: types$types$Uuid): boolean;
    toString(): string;
    inspect(): string;
    toJSON(): string;
  }
  declare export var Client: ClientStatic;
  declare export var Host: HostStatic;
  declare export var HostMap: HostMapStatic;
  declare export var Encoder: EncoderStatic;
  declare export interface ClientOptions {
    contactPoints: string[];
    localDataCenter?: string;
    keyspace?: string;
    refreshSchemaDelay?: number;
    isMetadataSyncEnabled?: boolean;
    prepareOnAllHosts?: boolean;
    rePrepareOnUp?: boolean;
    maxPrepared?: number;
    policies?: {
      loadBalancing?: policies$loadBalancing.loadBalancing$LoadBalancingPolicy,
      retry?: policies$retry.retry$RetryPolicy,
      reconnection?: policies$reconnection.reconnection$ReconnectionPolicy,
      addressResolution?: policies$addressResolution.addressResolution$AddressTranslator,
      speculativeExecution?: policies$speculativeExecution.speculativeExecution$SpeculativeExecutionPolicy,
      timestampGeneration?: policies$timestampGeneration.timestampGeneration$TimestampGenerator
    };
    queryOptions?: QueryOptions;
    pooling?: {
      heartBeatInterval?: number,
      coreConnectionsPerHost?: {
        [key: number]: number
      },
      maxRequestsPerConnection?: number,
      warmup?: boolean
    };
    protocolOptions?: {
      port?: number,
      maxSchemaAgreementWaitSeconds?: number,
      maxVersion?: number,
      noCompact?: boolean
    };
    socketOptions?: {
      connectTimeout?: number,
      defunctReadTimeoutThreshold?: number,
      keepAlive?: boolean,
      keepAliveDelay?: number,
      readTimeout?: number,
      tcpNoDelay?: boolean,
      coalescingThreshold?: number
    };
    authProvider?: auth$auth$AuthProvider;
    requestTracker?: tracker$tracker$RequestTracker;
    sslOptions?: tls.ConnectionOptions;
    encoding?: {
      map?: typeof Map | ((...args: any[]) => any),
      set?: typeof Set | ((...args: any[]) => any),
      copyBuffer?: boolean,
      useUndefinedAsUnset?: boolean,
      useBigIntAsLong?: boolean,
      useBigIntAsVarint?: boolean
    };
    profiles?: ExecutionProfile[];
    promiseFactory?: (
      handler: (callback: (err?: any, result?: any) => void) => void
    ) => Promise<any>;
    metrics?: metrics$metrics$ClientMetrics;
  }
  declare export interface QueryOptions {
    autoPage?: boolean;
    captureStackTrace?: boolean;
    consistency?: number;
    customPayload?: any;
    executionProfile?: string | ExecutionProfile;
    fetchSize?: number;
    hints?: string[] | string[][];
    isIdempotent?: boolean;
    keyspace?: string;
    logged?: boolean;
    counter?: boolean;
    pageState?: Buffer | string;
    prepare?: boolean;
    readTimeout?: number;
    retry?: policies$retry.retry$RetryPolicy;
    routingIndexes?: number[];
    routingKey?: Buffer | Buffer[];
    routingNames?: string[];
    serialConsistency?: number;
    timestamp?: number | _Long;
    traceQuery?: boolean;
    host?: Host;
  }
  declare export interface ClientStatic {
    new(options?: ClientOptions): Client;
  }
  declare export type Client = {
    hosts: HostMap,
    keyspace: string,
    metadata: metadata$metadata$Metadata,
    metrics: metrics$metrics$ClientMetrics,
    batch(
      queries:
        | string[]
        | Array<{
            query: string,
            params?: any
          }>,
      options: QueryOptions,
      callback: ResultCallback
    ): void,
    batch(
      queries:
        | string[]
        | Array<{
            query: string,
            params?: any
          }>,
      callback: ResultCallback
    ): void,
    batch(
      queries:
        | string[]
        | Array<{
            query: string,
            params?: any
          }>,
      options?: QueryOptions
    ): Promise<types$types$ResultSet>,
    connect(callback: Callback): void,
    connect(): Promise<void>,
    eachRow(
      query: string,
      params?: any,
      options?: QueryOptions,
      rowCallback?: Callback,
      callback?: Callback
    ): void,
    execute(
      query: string,
      params: any,
      options: QueryOptions,
      callback: ResultCallback
    ): void,
    execute(query: string, params: any, callback: ResultCallback): void,
    execute(query: string, callback: ResultCallback): void,
    execute(
      query: string,
      params?: any,
      options?: QueryOptions
    ): Promise<types$types$ResultSet>,
    getReplicas(keyspace: string, token: Buffer): any[],
    getState(): metadata$metadata$ClientState,
    shutdown(callback?: Callback): void,
    shutdown(): Promise<void>,
    stream(
      query: string,
      params?: any,
      options?: QueryOptions,
      callback?: Callback
    ): NodeJS.ReadableStream
  } & events.EventEmitter;

  declare export interface HostStatic {
    new(address: string, protocolVersion: number, options: ClientOptions): Host;
  }
  declare export type Host = {
    address: string,
    cassandraVersion: string,
    dataCenter: string,
    rack: string,
    tokens: string[],
    canBeConsideredAsUp(): boolean,
    getCassandraVersion(): number[],
    isUp(): boolean
  } & events.EventEmitter;

  declare export interface HostMapStatic {
    new(): HostMap;
  }
  declare export type HostMap = {
    length: number,
    clear(): Host[],
    forEach(callback: Callback): void,
    get(key: string): Host,
    keys(): string[],
    remove(key: string): void,
    removeMultiple(keys: string[]): void,
    set(key: string, value: Host): void,
    values(): Host[]
  } & events.EventEmitter;

  declare export interface EncoderStatic {
    new(protocolVersion: number, options: ClientOptions): Encoder;
  }
  declare export interface Encoder {
    decode(
      buffer: Buffer,
      type: {
        code: number,
        info?: any
      }
    ): void;
    encode(
      value: any,
      typeInfo?:
        | string
        | number
        | {
            code: number,
            info?: any
          }
    ): Buffer;
  }
  declare export interface ExecutionProfileOptions {
    consistency: number;
    loadBalancing: policies$loadBalancing.loadBalancing$LoadBalancingPolicy;
    name: string;
    readTimeout: number;
    retry: policies$retry.retry$RetryPolicy;
    serialConsistency: number;
  }
  declare export interface ExecutionProfileStatic {
    new(name: string, options: ExecutionProfileOptions): ExecutionProfile;
  }
  declare export type ExecutionProfile = {} & ExecutionProfileOptions;

  declare var npm$namespace$auth: {
    Authenticator: typeof auth$Authenticator,
    PlainTextAuthProvider: typeof auth$PlainTextAuthProvider
  };
  declare var auth$Authenticator: auth$AuthenticatorStatic;

  declare var auth$PlainTextAuthProvider: auth$PlainTextAuthProviderStatic;

  declare interface auth$AuthenticatorStatic {
    new(): auth$Authenticator;
  }

  declare interface auth$Authenticator {
    evaluateChallenge(challenge: Buffer, callback: Callback): void;
    initialResponse(callback: Callback): void;
    onAuthenticationSuccess(token?: Buffer): void;
  }

  declare interface auth$AuthProvider {
    newAuthenticator(endpoint: string, name: string): void;
  }

  declare interface auth$PlainTextAuthProviderStatic {
    new(username: string, password: string): auth$PlainTextAuthProvider;
  }

  declare type auth$PlainTextAuthProvider = {
    newAuthenticator(endpoint: string, name: string): void
  } & auth$AuthProvider;

  declare class errors$DriverError mixins Error {
    constructor(message: string, constructor?: any): this;
    info: string;
  }

  declare class errors$ArgumentError mixins errors$DriverError {
    constructor(message: string): this;
  }

  declare class errors$AuthenticationError mixins errors$DriverError {
    constructor(message: string): this;
  }

  declare class errors$DriverInternalError mixins errors$DriverError {
    constructor(message: string): this;
  }

  declare class errors$NoHostAvailableError mixins errors$DriverError {
    constructor(innerErrors: any, message?: string): this;
    innerErrors: any;
  }

  declare class errors$NotSupportedError mixins errors$DriverError {
    constructor(message: string): this;
  }

  declare class errors$OperationTimedOutError mixins errors$DriverError {
    constructor(message: string, host?: string): this;
    host: string;
  }

  declare class errors$ResponseError mixins errors$DriverError {
    constructor(code: number, message: string): this;
    code: number;
  }

  declare class errors$BusyConnectionError mixins errors$DriverError {
    constructor(
      address: string,
      maxRequestsPerConnection: number,
      connectionLength: number
    ): this;
  }

  declare var npm$namespace$metadata: {
    Aggregate: typeof metadata$Aggregate,
    Index: typeof metadata$Index,
    MaterializedView: typeof metadata$MaterializedView,
    Metadata: typeof metadata$Metadata,
    SchemaFunction: typeof metadata$SchemaFunction,
    TableMetadata: typeof metadata$TableMetadata
  };
  declare var metadata$Aggregate: metadata$AggregateStatic;

  declare var metadata$Index: metadata$IndexStatic;

  declare var metadata$MaterializedView: metadata$MaterializedViewStatic;

  declare var metadata$Metadata: metadata$MetadataStatic;

  declare var metadata$SchemaFunction: metadata$SchemaFunctionStatic;

  declare var metadata$TableMetadata: metadata$TableMetadataStatic;

  declare type metadata$caching = "all" | "keys_only" | "rows_only" | "none";

  declare interface metadata$AggregateStatic {
    new(): metadata$Aggregate;
  }

  declare interface metadata$Aggregate {
    argumentTypes: Array<{
      code: number,
      info: any
    }>;
    finalFunction: string;
    initCondition: string;
    keyspaceName: string;
    returnType: string;
    signature: string[];
    stateFunction: string;
    stateType: string;
  }

  declare interface metadata$ClientStateStatic {
    new(): metadata$ClientState;
  }

  declare interface metadata$ClientState {
    getConnectedHosts(): Host[];
    getInFlightQueries(host: Host): number;
    getOpenConnections(host: Host): number;
    toString(): string;
  }

  declare interface metadata$DataTypeInfo {
    code: number;
    info: string | metadata$DataTypeInfo | metadata$DataTypeInfo[];
    options: {
      frozen: boolean,
      reversed: boolean
    };
  }

  declare interface metadata$ColumnInfo {
    name: string;
    type: metadata$DataTypeInfo;
  }

  declare interface metadata$DataCollection {
    bloomFilterFalsePositiveChance: number;
    metadata$caching: metadata$caching;
    clusterKeys: Array<{
      c: metadata$ColumnInfo,
      index: number,
      order: string
    }>;
    clusteringOrder: string[];
    columns: metadata$ColumnInfo[];
    columnsByName: {
      [key: string]: metadata$ColumnInfo
    };
    comment: string;
    compactionClass: string;
    compactionOptions: any;
    compression: any;
    crcCheckChange?: number;
    defaultTtl: number;
    extensions: any;
    gcGraceSeconds: number;
    localReadRepairChance: number;
    maxIndexInterval?: number;
    minIndexInterval?: number;
    name: string;
    partitionKeys: Array<{
      c: metadata$ColumnInfo,
      index: number
    }>;
    populateCacheOnFlush: boolean;
    readRepairChance: number;
    speculateRetry: string;
  }

  declare class metadata$IndexType {
    constructor(...args: empty): mixed;
    static +custom: Class<metadata$IndexType__custom> &
      metadata$IndexType__custom &
      0; // 0
    static +keys: Class<metadata$IndexType__keys> &
      metadata$IndexType__keys &
      1; // 1
    static +composites: Class<metadata$IndexType__composites> &
      metadata$IndexType__composites &
      2; // 2
  }

  declare class metadata$IndexType__custom mixins metadata$IndexType {}
  declare class metadata$IndexType__keys mixins metadata$IndexType {}
  declare class metadata$IndexType__composites mixins metadata$IndexType {}

  declare interface metadata$IndexStatic {
    new(
      name: string,
      target: string,
      kind: string | metadata$IndexType,
      options: { [key: string]: any }
    ): metadata$Index;
    fromRows(indexRows: types$types$Row[]): metadata$Index[];
    fromColumnRows(
      columnRows: types$types$Row[],
      columnsByName: {
        [key: string]: metadata$ColumnInfo
      }
    ): metadata$Index[];
  }

  declare interface metadata$Index {
    kind: metadata$IndexType;
    name: string;
    options: { [key: string]: any };
    target: string;
    isCompositesKind(): boolean;
    isCustomKind(): boolean;
    isKeysKind(): boolean;
  }

  declare interface metadata$MaterializedViewStatic {
    new(name: string): metadata$MaterializedView;
  }

  declare type metadata$MaterializedView = {} & metadata$DataCollection;

  declare interface metadata$MetadataStatic {
    new(options: ClientOptions, controlConnection: any): metadata$Metadata;
  }

  declare interface metadata$Metadata {
    clearPrepared(): void;
    getAggregate(
      keyspaceName: string,
      name: string,
      signature:
        | string[]
        | Array<{
            code: number,
            info: any
          }>,
      callback: Callback
    ): void;
    getAggregates(keyspaceName: string, name: string, callback: Callback): void;
    getFunction(
      keyspaceName: string,
      name: string,
      signature:
        | string[]
        | Array<{
            code: number,
            info: any
          }>,
      callback: Callback
    ): void;
    getFunctions(keyspaceName: string, name: string, callback: Callback): void;
    getMaterializedView(
      keyspaceName: string,
      name: string,
      callback: Callback
    ): void;
    getReplicas(keyspaceName: string, tokenBuffer: Buffer): any[];
    getTable(keyspaceName: string, name: string, callback: Callback): void;
    getTrace(traceId: types$types$Uuid, callback: Callback): void;
    getUdt(keyspaceName: string, name: string, callback: Callback): void;
    refreshKeyspace(name: string, callback?: Callback): void;
    refreshKeyspaces(callback?: Callback): void;
  }

  declare interface metadata$SchemaFunctionStatic {
    new(): metadata$SchemaFunction;
  }

  declare interface metadata$SchemaFunction {
    argumentNames: string[];
    argumentTypes: Array<{
      code: number,
      info: any
    }>;
    body: string;
    calledOnNullInput: boolean;
    keyspaceName: string;
    language: string;
    name: string;
    returnType: string;
    signature: string[];
  }

  declare interface metadata$TableMetadataStatic {
    new(name: string): metadata$TableMetadata;
  }

  declare type metadata$TableMetadata = {
    indexes: metadata$Index[],
    indexInterval?: number,
    isCompact: boolean,
    memtableFlushPeriod: number,
    replicateOnWrite: boolean,
    cdc?: boolean,
    virtual: boolean
  } & metadata$DataCollection;

  declare export interface ExecutionOptionsStatic {
    new(): ExecutionOptions;
  }
  declare export interface ExecutionOptions {
    getCaptureStackTrace(): boolean;
    getConsistency(): types$types$consistencies;
    getCustomPayload(): {
      [key: string]: any
    };
    getFetchSize(): number;
    getFixedHost(): Host;
    getHints(): string[] | string[][];
    isAutoPage(): boolean;
    isBatchCounter(): boolean;
    isBatchLogged(): boolean;
    isIdempotent(): boolean;
    isPrepared(): boolean;
    isQueryTracing(): boolean;
    getKeyspace(): string;
    getLoadBalancingPolicy(): policies$loadBalancing.loadBalancing$LoadBalancingPolicy;
    getPageState(): Buffer;
    getRawQueryOptions(): QueryOptions;
    getReadTimeout(): number;
    getRetryPolicy(): policies$retry.retry$RetryPolicy;
    getRoutingKey(): Buffer | Buffer[];
    getSerialConsistency(): types$types$consistencies;
    getTimestamp(): number | types$Long | void | null;
    setHints(hints: string[]): void;
  }
  declare export var ExecutionOptions: ExecutionOptionsStatic;

  declare var npm$namespace$mapping: {
    Mapper: typeof mapping$Mapper,
    ModelBatchItem: typeof mapping$ModelBatchItem,
    ModelMappingInfo: typeof mapping$ModelMappingInfo,
    ModelMapper: typeof mapping$ModelMapper,
    MappingHandler: typeof mapping$MappingHandler,
    Result: typeof mapping$Result,
    DefaultTableMappings: typeof mapping$DefaultTableMappings,
    UnderscoreCqlToCamelCaseMappings: typeof mapping$UnderscoreCqlToCamelCaseMappings
  };
  declare var mapping$Mapper: mapping$MapperStatic;

  declare var mapping$ModelBatchItem: mapping$ModelBatchItemStatic;

  declare var mapping$ModelMappingInfo: mapping$ModelMappingInfoStatic;

  declare var mapping$ModelMapper: mapping$ModelMapperStatic;

  declare var mapping$MappingHandler: mapping$MappingHandlerStatic;

  declare var mapping$Result: mapping$ResultStatic;

  declare var mapping$DefaultTableMappings: mapping$DefaultTableMappingsStatic;

  declare var mapping$UnderscoreCqlToCamelCaseMappings: mapping$UnderscoreCqlToCamelCaseMappingsStatic;

  declare interface mapping$MappingExecutionOptions {
    executionProfile?: string;
    isIdempotent?: boolean;
    logged?: boolean;
    timestamp?: number | types$Long;
    fetchSize?: number;
    pageState?: number;
  }

  declare interface mapping$ModelTables {
    name: string;
    isView: boolean;
  }

  declare interface mapping$MappingQuery {
    query: string;
    isIdempotent: boolean;
    isCounter: boolean;
  }

  declare interface mapping$MapperStatic {
    new(client: Client, options?: mapping$MappingOptions): mapping$Mapper;
  }

  declare interface mapping$Mapper {
    batch(
      items: mapping$ModelBatchItem[],
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    forModel(name: string): mapping$ModelMapper;
  }

  declare interface mapping$MappingOptions {
    models: {
      [key: string]: mapping$ModelOptions
    };
  }

  declare interface mapping$ModelOptions {
    tables?: string[] | mapping$ModelTables[];
    mappings?: mapping$TableMappings;
    columns?: {
      [key: string]: string
    };
    keyspace?: string;
  }

  declare interface mapping$ModelMappingInfoStatic {
    new(
      keyspace: string,
      tables: mapping$ModelTables[],
      mappings: mapping$TableMappings,
      columns: {
        [key: string]: string
      }
    ): mapping$ModelMappingInfo;
    parse(
      options: mapping$MappingOptions,
      currentKeyspace: string
    ): {
      [key: string]: mapping$ModelMappingInfo
    };
    createDefault(
      modelName: string,
      currentKeyspace: string
    ): mapping$ModelMappingInfo;
  }

  declare interface mapping$ModelMappingInfo {
    keyspace: string;
    tables: mapping$ModelTables[];
    getColumnName(propName: string): string;
    getPropertyName(columnName: string): string;
    newInstance(): mapping$TableMappings;
  }

  declare interface mapping$MappingDocInfo {
    fields?: string[];
    ttl?: number;
    ifNotExists?: boolean;
    when?: {
      [key: string]: string
    };
    orderBy?: {
      [key: string]: string
    };
    limit?: number;
    deleteOnlyColumns?: boolean;
  }

  declare interface mapping$ModelBatchItemStatic {
    new(
      queries: Promise<mapping$MappingQuery[]>,
      doc: {
        [key: string]: any
      },
      docInfo: mapping$MappingDocInfo,
      mappingInfo: mapping$ModelMappingInfo
    ): mapping$ModelBatchItem;
  }

  declare interface mapping$ModelBatchItem {}

  declare interface mapping$MappingHandlerStatic {
    new(
      client: Client,
      mappingInfo: mapping$ModelMappingInfo
    ): mapping$MappingHandler;
  }

  declare interface mapping$MappingHandler {}

  declare interface mapping$ModelBatchMapper {
    insert(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo
    ): mapping$ModelBatchItem;
    remove(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo
    ): mapping$ModelBatchItem;
    update(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo
    ): mapping$ModelBatchItem;
  }

  declare interface mapping$ModelMapperStatic {
    new(name: string, handler: mapping$MappingHandler): mapping$ModelMapper;
  }

  declare interface mapping$ModelMapper {
    name: string;
    batching: mapping$ModelBatchMapper;
    get(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    find(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    findAll(
      docInfo?: mapping$MappingDocInfo,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    insert(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    update(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    remove(
      doc: {
        [key: string]: any
      },
      docInfo?: mapping$MappingDocInfo,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): Promise<mapping$Result>;
    mapWithQuery(
      query: string,
      paramsHandler: (doc: {
        [key: string]: any
      }) => any,
      executionOptions?: string | mapping$MappingExecutionOptions
    ): (
      doc: {
        [key: string]: any
      },
      executionOptions?: string | mapping$MappingExecutionOptions
    ) => Promise<mapping$Result>;
  }

  declare interface mapping$ResultStatic {
    new(
      rs: types$types$ResultSet,
      info: mapping$ModelMappingInfo,
      rowAdapter: (
        row: types$types$Row,
        info: mapping$ModelMappingInfo
      ) => {
        [key: string]: any
      }
    ): mapping$Result;
  }

  declare interface mapping$Result {
    "NO PRINT IMPLEMENTED: ComputedPropertyName"(): Iterator<{
      [key: string]: any
    }>;
    wasApplied(): boolean;
    first(): {
      [key: string]: any
    };
    toArray(): Array<{
      [key: string]: any
    }>;
    forEach(
      callback: (
        currentValue: {
          [key: string]: any
        },
        index: number
      ) => void,
      thisArg?: any
    ): void;
  }

  declare interface mapping$TableMappings {
    getColumnName(propName: string): string;
    getPropertyName(columnName: string): string;
    newObjectInstance(): {
      [key: string]: any
    };
  }

  declare interface mapping$DefaultTableMappingsStatic {
    new(): mapping$DefaultTableMappings;
  }

  declare type mapping$DefaultTableMappings = {} & mapping$TableMappings;

  declare interface mapping$UnderscoreCqlToCamelCaseMappingsStatic {
    new(): mapping$UnderscoreCqlToCamelCaseMappings;
  }

  declare type mapping$UnderscoreCqlToCamelCaseMappings = {} & mapping$TableMappings;

  declare var npm$namespace$tracker: {
    RequestLogger: typeof tracker$RequestLogger
  };
  declare var tracker$RequestLogger: tracker$RequestLoggerStatic;

  declare interface tracker$RequestLoggerOptions {
    slowThreshold?: number;
    logNormalRequests?: boolean;
    logErroredRequests?: boolean;
    messageMaxQueryLength?: number;
    messageMaxParameterValueLength?: number;
    messageMaxErrorStackTraceLength?: number;
  }

  declare interface tracker$RequestTracker {
    onError(
      host: Host,
      query:
        | string
        | Array<{
            query: string,
            params?: any
          }>,
      parameters:
        | any[]
        | {
            [key: string]: any
          }
        | null,
      executionOptions: ExecutionOptions,
      requestLength: number,
      err: Error,
      latency: number[]
    ): void;
    onSuccess(
      host: Host,
      query:
        | string
        | Array<{
            query: string,
            params?: any
          }>,
      parameters:
        | any[]
        | {
            [key: string]: any
          }
        | null,
      executionOptions: ExecutionOptions,
      requestLength: number,
      responseLength: number,
      latency: number[]
    ): void;
    shutdown(): void;
  }

  declare interface tracker$RequestLoggerStatic {
    new(options: tracker$RequestLoggerOptions): tracker$RequestLogger;
  }

  declare type tracker$RequestLogger = {} & tracker$RequestTracker;

  declare var npm$namespace$metrics: {
    DefaultMetrics: typeof metrics$DefaultMetrics
  };
  declare var metrics$DefaultMetrics: metrics$DefaultMetricsStatic;

  declare interface metrics$ClientMetrics {
    onAuthenticationError(e: Error | errors$errors$AuthenticationError): void;
    onClientTimeoutError(e: errors$errors$OperationTimedOutError): void;
    onClientTimeoutRetry(e: Error): void;
    onConnectionError(e: Error): void;
    onIgnoreError(e: Error): void;
    onOtherError(e: Error): void;
    onOtherErrorRetry(e: Error): void;
    onReadTimeoutError(e: errors$errors$ResponseError): void;
    onReadTimeoutRetry(e: Error): void;
    onResponse(latency: number[]): void;
    onSpeculativeExecution(): void;
    onSuccessfulResponse(latency: number[]): void;
    onUnavailableError(e: errors$errors$ResponseError): void;
    onUnavailableRetry(e: Error): void;
    onWriteTimeoutError(e: errors$errors$ResponseError): void;
    onWriteTimeoutRetry(e: Error): void;
  }

  declare interface metrics$DefaultMetricsStatic {
    new(): metrics$DefaultMetrics;
  }

  declare type metrics$DefaultMetrics = {} & metrics$ClientMetrics;
}
