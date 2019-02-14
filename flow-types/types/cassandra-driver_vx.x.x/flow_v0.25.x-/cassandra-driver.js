declare module "cassandra-driver" {
  declare export type Callback = Function;
  declare export type ResultCallback = (
    err: Error,
    result: types$ResultSet
  ) => void;
  import typeof * as events from "events";

  import typeof * as stream from "stream";

  import typeof * as tls from "tls";

  declare var npm$namespace$policies: {
    addressResolution: typeof npm$namespace$policies$addressResolution,
    loadBalancing: typeof npm$namespace$policies$loadBalancing,
    reconnection: typeof npm$namespace$policies$reconnection,
    retry: typeof npm$namespace$policies$retry,
    speculativeExecution: typeof npm$namespace$policies$speculativeExecution,
    timestampGeneration: typeof npm$namespace$policies$timestampGeneration
  };

  declare var npm$namespace$policies$addressResolution: {
    EC2MultiRegionTranslator: typeof policies$addressResolution$EC2MultiRegionTranslator
  };
  declare var policies$addressResolution$EC2MultiRegionTranslator: addressResolution$EC2MultiRegionTranslatorStatic;

  declare interface policies$addressResolution$AddressTranslator {
    translate(address: string, port: number, callback: Callback): void;
  }

  declare interface policies$addressResolution$EC2MultiRegionTranslatorStatic {
    new(): policies$addressResolution$EC2MultiRegionTranslator;
  }

  declare type policies$addressResolution$EC2MultiRegionTranslator = {
    logError(address: string, err: Error): void
  } & AddressTranslator;

  declare var npm$namespace$policies$loadBalancing: {
    DCAwareRoundRobinPolicy: typeof policies$loadBalancing$DCAwareRoundRobinPolicy,
    RoundRobinPolicy: typeof policies$loadBalancing$RoundRobinPolicy,
    TokenAwarePolicy: typeof policies$loadBalancing$TokenAwarePolicy,
    WhiteListPolicy: typeof policies$loadBalancing$WhiteListPolicy
  };
  declare var policies$loadBalancing$DCAwareRoundRobinPolicy: loadBalancing$DCAwareRoundRobinPolicyStatic;

  declare var policies$loadBalancing$RoundRobinPolicy: loadBalancing$RoundRobinPolicyStatic;

  declare var policies$loadBalancing$TokenAwarePolicy: loadBalancing$TokenAwarePolicyStatic;

  declare var policies$loadBalancing$WhiteListPolicy: loadBalancing$WhiteListPolicyStatic;

  declare interface policies$loadBalancing$LoadBalancingPolicy {
    init(client: Client, hosts: HostMap, callback: Callback): void;
    getDistance(host: Host): types$distance;
    newQueryPlan(
      keyspace: string,
      queryOptions: ExecutionOptions | null,
      callback: Callback
    ): void;
  }

  declare interface policies$loadBalancing$DCAwareRoundRobinPolicyStatic {
    new(localDc?: string): policies$loadBalancing$DCAwareRoundRobinPolicy;
  }

  declare type policies$loadBalancing$DCAwareRoundRobinPolicy = {
    localHostsArray: Host[],
    remoteHostsArray: Host[]
  } & LoadBalancingPolicy;

  declare interface policies$loadBalancing$RoundRobinPolicyStatic {
    new(): policies$loadBalancing$RoundRobinPolicy;
  }

  declare type policies$loadBalancing$RoundRobinPolicy = {} & LoadBalancingPolicy;

  declare interface policies$loadBalancing$TokenAwarePolicyStatic {
    new(
      childPolicy: policies$loadBalancing$LoadBalancingPolicy
    ): policies$loadBalancing$TokenAwarePolicy;
  }

  declare type policies$loadBalancing$TokenAwarePolicy = {} & LoadBalancingPolicy;

  declare interface policies$loadBalancing$WhiteListPolicyStatic {
    new(
      childPolicy: policies$loadBalancing$LoadBalancingPolicy,
      whiteList: string[]
    ): policies$loadBalancing$WhiteListPolicy;
  }

  declare type policies$loadBalancing$WhiteListPolicy = {} & LoadBalancingPolicy;

  declare var npm$namespace$policies$reconnection: {
    ConstantReconnectionPolicy: typeof policies$reconnection$ConstantReconnectionPolicy,
    ExponentialReconnectionPolicy: typeof policies$reconnection$ExponentialReconnectionPolicy
  };
  declare var policies$reconnection$ConstantReconnectionPolicy: reconnection$ConstantReconnectionPolicyStatic;

  declare var policies$reconnection$ExponentialReconnectionPolicy: reconnection$ExponentialReconnectionPolicyStatic;

  declare interface policies$reconnection$ReconnectionPolicy {
    newSchedule(): {
      next(): {
        delay: number,
        done: boolean
      }
    };
  }

  declare interface policies$reconnection$ConstantReconnectionPolicyStatic {
    new(delay: number): policies$reconnection$ConstantReconnectionPolicy;
  }

  declare type policies$reconnection$ConstantReconnectionPolicy = {} & ReconnectionPolicy;

  declare interface policies$reconnection$ExponentialReconnectionPolicyStatic {
    new(
      baseDelay: number,
      maxDelay: number,
      startWithNoDelay: boolean
    ): policies$reconnection$ExponentialReconnectionPolicy;
  }

  declare type policies$reconnection$ExponentialReconnectionPolicy = {} & ReconnectionPolicy;

  declare var npm$namespace$policies$retry: {
    RetryPolicy: typeof policies$retry$RetryPolicy,
    retryDecision: typeof policies$retry$retryDecision
  };
  declare var policies$retry$RetryPolicy: retry$RetryPolicyStatic;

  declare interface policies$retry$DecisionInfo {
    decision: number;
    consistency: number;
  }

  declare interface policies$retry$RequestInfo {
    request: any;
    nbRetry: number;
  }

  declare var policies$retry$retryDecision: {|
    +rethrow: 0, // 0
    +retry: 1, // 1
    +ignore: 2 // 2
  |};

  declare interface policies$retry$RetryPolicyStatic {
    new(): policies$retry$RetryPolicy;
    retryDecision: {
      rethrow: number,
      retry: number,
      ignore: number
    };
  }

  declare interface policies$retry$RetryPolicy {
    onReadTimeout(
      requestInfo: policies$retry$RequestInfo,
      consistency: types$consistencies,
      received: number,
      blockFor: number,
      isDataPresent: boolean
    ): policies$retry$DecisionInfo;
    onUnavailable(
      requestInfo: policies$retry$RequestInfo,
      consistency: types$consistencies,
      required: number,
      alive: number
    ): policies$retry$DecisionInfo;
    onWriteTimeout(
      requestInfo: policies$retry$RequestInfo,
      consistency: types$consistencies,
      received: number,
      blockFor: number,
      writeType: string
    ): policies$retry$DecisionInfo;
    rethrowResult(): {
      decision: policies$retry$retryDecision
    };
    retryResult(): {
      decision: policies$retry$retryDecision,
      consistency: types$consistencies,
      useCurrentHost: boolean
    };
  }

  declare var npm$namespace$policies$speculativeExecution: {
    NoSpeculativeExecutionPolicy: typeof policies$speculativeExecution$NoSpeculativeExecutionPolicy
  };
  declare var policies$speculativeExecution$NoSpeculativeExecutionPolicy: speculativeExecution$NoSpeculativeExecutionPolicyStatic;

  declare interface policies$speculativeExecution$SpeculativeExecutionPolicy {
    init(client: Client): void;
    newPlan(
      keyspace: string,
      queryInfo: string | string[]
    ): {
      nextExecution: () => number
    };
  }

  declare interface policies$speculativeExecution$NoSpeculativeExecutionPolicyStatic {
    new(): policies$speculativeExecution$NoSpeculativeExecutionPolicy;
  }

  declare type policies$speculativeExecution$NoSpeculativeExecutionPolicy = {} & SpeculativeExecutionPolicy;

  declare interface policies$speculativeExecution$ConstantSpeculativeExecutionPolicyStatic {
    new(
      delay: number,
      maxSpeculativeExecutions: number
    ): speculativeExecution$ConstantSpeculativeExecutionPolicy;
  }

  declare type policies$speculativeExecution$ConstantSpeculativeExecutionPolicy = {} & SpeculativeExecutionPolicy;

  declare var npm$namespace$policies$timestampGeneration: {
    MonotonicTimestampGenerator: typeof policies$timestampGeneration$MonotonicTimestampGenerator
  };
  declare var policies$timestampGeneration$MonotonicTimestampGenerator: timestampGeneration$MonotonicTimestampGeneratorStatic;

  declare interface policies$timestampGeneration$TimestampGenerator {
    next(client: Client): null | number | _Long;
  }

  declare interface policies$timestampGeneration$MonotonicTimestampGeneratorStatic {
    new(
      warningThreshold?: number,
      minLogInterval?: number
    ): policies$timestampGeneration$MonotonicTimestampGeneratorStatic;
  }

  declare type policies$timestampGeneration$MonotonicTimestampGenerator = {
    getDate(): number
  } & TimestampGenerator;

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
    Uuid: typeof types$Uuid,
    consistencies: typeof types$consistencies,
    dataTypes: typeof types$dataTypes,
    distance: typeof types$distance
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

  declare var types$consistencies: {|
    +any: 0, // 0
    +one: 1, // 1
    +two: 2, // 2
    +three: 3, // 3
    +quorum: 4, // 4
    +all: 5, // 5
    +localQuorum: 6, // 6
    +eachQuorum: 7, // 7
    +serial: 8, // 8
    +localSerial: 9, // 9
    +localOne: 10 // 10
  |};

  declare var types$dataTypes: {|
    +custom: 0, // 0
    +ascii: 1, // 1
    +bigint: 2, // 2
    +blob: 3, // 3
    +boolean: 4, // 4
    +counter: 5, // 5
    +decimal: 6, // 6
    +double: 7, // 7
    +float: 8, // 8
    +int: 9, // 9
    +text: 10, // 10
    +timestamp: 11, // 11
    +uuid: 12, // 12
    +varchar: 13, // 13
    +varint: 14, // 14
    +timeuuid: 15, // 15
    +inet: 16, // 16
    +date: 17, // 17
    +time: 18, // 18
    +smallint: 19, // 19
    +tinyint: 20, // 20
    +list: 21, // 21
    +map: 22, // 22
    +set: 23, // 23
    +udt: 24, // 24
    +tuple: 25 // 25
  |};

  declare var types$distance: {|
    +local: 0, // 0
    +remote: 1, // 1
    +ignored: 2 // 2
  |};

  declare interface types$responseErrorCodes {
    [key: string]: number;
  }

  declare interface types$unset {
    unset: boolean;
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
  } & Uuid;

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
    equals(other: types$Uuid): boolean;
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
      loadBalancing?: policies$loadBalancingLoadBalancingPolicy,
      retry?: policies$retryRetryPolicy,
      reconnection?: policies$reconnectionReconnectionPolicy,
      addressResolution?: policies$addressResolutionAddressTranslator,
      speculativeExecution?: policies$speculativeExecutionSpeculativeExecutionPolicy,
      timestampGeneration?: policies$timestampGenerationTimestampGenerator
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
    authProvider?: auth$AuthProvider;
    requestTracker?: tracker$RequestTracker;
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
    metrics?: metrics$ClientMetrics;
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
    retry?: policies$retryRetryPolicy;
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
    metadata: metadata$Metadata,
    metrics: metrics$ClientMetrics,
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
    ): Promise<types$ResultSet>,
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
    ): Promise<types$ResultSet>,
    getReplicas(keyspace: string, token: Buffer): any[],
    getState(): metadata$ClientState,
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
    loadBalancing: policies$loadBalancingLoadBalancingPolicy;
    name: string;
    readTimeout: number;
    retry: policies$retryRetryPolicy;
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
  } & AuthProvider;

  declare var npm$namespace$errors: {
    DriverError: typeof errors$DriverError,
    ArgumentError: typeof errors$ArgumentError,
    AuthenticationError: typeof errors$AuthenticationError,
    DriverInternalError: typeof errors$DriverInternalError,
    NoHostAvailableError: typeof errors$NoHostAvailableError,
    NotSupportedError: typeof errors$NotSupportedError,
    OperationTimedOutError: typeof errors$OperationTimedOutError,
    ResponseError: typeof errors$ResponseError,
    BusyConnectionError: typeof errors$BusyConnectionError
  };
  declare class errors$DriverError mixins Error {
    constructor(message: string, constructor?: any): this;
    info: string;
  }

  declare class errors$ArgumentError mixins DriverError {
    constructor(message: string): this;
  }

  declare class errors$AuthenticationError mixins DriverError {
    constructor(message: string): this;
  }

  declare class errors$DriverInternalError mixins DriverError {
    constructor(message: string): this;
  }

  declare class errors$NoHostAvailableError mixins DriverError {
    constructor(innerErrors: any, message?: string): this;
    innerErrors: any;
  }

  declare class errors$NotSupportedError mixins DriverError {
    constructor(message: string): this;
  }

  declare class errors$OperationTimedOutError mixins DriverError {
    constructor(message: string, host?: string): this;
    host: string;
  }

  declare class errors$ResponseError mixins DriverError {
    constructor(code: number, message: string): this;
    code: number;
  }

  declare class errors$BusyConnectionError mixins DriverError {
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
    TableMetadata: typeof metadata$TableMetadata,
    IndexType: typeof metadata$IndexType
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
    caching: metadata$caching;
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

  declare var metadata$IndexType: {|
    +custom: 0, // 0
    +keys: 1, // 1
    +composites: 2 // 2
  |};

  declare interface metadata$IndexStatic {
    new(
      name: string,
      target: string,
      kind: string | metadata$IndexType,
      options: { [key: string]: any }
    ): metadata$Index;
    fromRows(indexRows: types$Row[]): metadata$Index[];
    fromColumnRows(
      columnRows: types$Row[],
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

  declare type metadata$MaterializedView = {} & DataCollection;

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
    getTrace(traceId: types$Uuid, callback: Callback): void;
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
  } & DataCollection;

  declare export interface ExecutionOptionsStatic {
    new(): ExecutionOptions;
  }
  declare export interface ExecutionOptions {
    getCaptureStackTrace(): boolean;
    getConsistency(): types$consistencies;
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
    getLoadBalancingPolicy(): policies$loadBalancingLoadBalancingPolicy;
    getPageState(): Buffer;
    getRawQueryOptions(): QueryOptions;
    getReadTimeout(): number;
    getRetryPolicy(): policies$retryRetryPolicy;
    getRoutingKey(): Buffer | Buffer[];
    getSerialConsistency(): types$consistencies;
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
      rs: types$ResultSet,
      info: mapping$ModelMappingInfo,
      rowAdapter: (
        row: types$Row,
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

  declare type mapping$DefaultTableMappings = {} & TableMappings;

  declare interface mapping$UnderscoreCqlToCamelCaseMappingsStatic {
    new(): mapping$UnderscoreCqlToCamelCaseMappings;
  }

  declare type mapping$UnderscoreCqlToCamelCaseMappings = {} & TableMappings;

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

  declare type tracker$RequestLogger = {} & RequestTracker;

  declare var npm$namespace$metrics: {
    DefaultMetrics: typeof metrics$DefaultMetrics
  };
  declare var metrics$DefaultMetrics: metrics$DefaultMetricsStatic;

  declare interface metrics$ClientMetrics {
    onAuthenticationError(e: Error | errors$AuthenticationError): void;
    onClientTimeoutError(e: errors$OperationTimedOutError): void;
    onClientTimeoutRetry(e: Error): void;
    onConnectionError(e: Error): void;
    onIgnoreError(e: Error): void;
    onOtherError(e: Error): void;
    onOtherErrorRetry(e: Error): void;
    onReadTimeoutError(e: errors$ResponseError): void;
    onReadTimeoutRetry(e: Error): void;
    onResponse(latency: number[]): void;
    onSpeculativeExecution(): void;
    onSuccessfulResponse(latency: number[]): void;
    onUnavailableError(e: errors$ResponseError): void;
    onUnavailableRetry(e: Error): void;
    onWriteTimeoutError(e: errors$ResponseError): void;
    onWriteTimeoutRetry(e: Error): void;
  }

  declare interface metrics$DefaultMetricsStatic {
    new(): metrics$DefaultMetrics;
  }

  declare type metrics$DefaultMetrics = {} & ClientMetrics;
}
