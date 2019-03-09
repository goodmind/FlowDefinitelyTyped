declare module "@arangodb/locals" {
  declare var context: Foxx$Context;
}
declare module "@arangodb/general-graph" {
  declare interface EdgeDefinition {
    collection: string;
    from: string[];
    to: string[];
  }
  declare interface CommonNeighbors {
    left: string;
    right: string;
    neighbors: string[];
  }
  declare interface CountCommonNeighbors {
    [key: string]: Array<{
      [key: string]: number | void
    }> | void;
  }
  declare interface CommonProperties {
    [key: string]: Array<
      {
        _id: string
      } & {
        [key: string]: any
      }
    > | void;
  }
  declare interface CountCommonProperties {
    [key: string]: number | void;
  }
  declare interface Path<
    A: { [key: string]: any } = any,
    B: { [key: string]: any } = any,
    E: { [key: string]: any } = any,
    V: { [key: string]: any } = empty
  > {
    source: ArangoDB$Document<A>;
    destination: ArangoDB$Document<B>;
    edges: Array<ArangoDB$Edge<E>>;
    vertice: Array<ArangoDB$Document<A | B | V>>;
  }
  declare interface ShortestPath<T: { [key: string]: any } = any> {
    vertices: string[];
    edges: Array<ArangoDB$Edge<T>>;
    distance: number;
  }
  declare interface Distance {
    startVertex: string;
    vertex: string;
    distance: number;
  }
  declare interface Eccentricity {
    [key: string]: number | void;
  }
  declare type Closeness = Eccentricity;
  declare type Betweenness = Eccentricity;
  declare type Example =
    | Array<{ [key: string]: any } | string>
    | { [key: string]: any }
    | string
    | null;
  declare interface ConnectingEdgesOptions {
    edgeExamples?: Example;
    edgeCollectionRestriction?: string[] | string;
    vertex1CollectionRestriction?: string[] | string;
    vertex2CollectionRestriction?: string[] | string;
  }
  declare interface NeighborsOptions {
    direction?: ArangoDB$EdgeDirection;
    edgeExamples?: Example;
    neighborExamples?: Example;
    edgeCollectionRestriction?: string[] | string;
    vertexCollectionRestriction?: string[] | string;
    minDepth?: number;
    maxDepth?: number;
  }
  declare interface CommonPropertiesOptions {
    vertex1CollectionRestriction?: string[] | string;
    vertex2CollectionRestriction?: string[] | string;
    ignoredProperties?: string[] | string;
  }
  declare interface PathsOptions {
    direction?: ArangoDB$EdgeDirection;
    followCycles?: boolean;
    minLength?: number;
    maxLength?: number;
  }
  declare interface ShortestPathOptions {
    direction?: ArangoDB$EdgeDirection;
    edgeCollectionRestriction?: string[] | string;
    startVertexCollectionRestriction?: string[] | string;
    endVertexCollectionRestriction?: string[] | string;
    weight?: string;
    defaultWeight?: number;
  }
  declare type EccentricityOptions = ShortestPathOptions;
  declare type ClosenessOptions = ShortestPathOptions;
  declare interface BetweennessOptions {
    direction?: ArangoDB$EdgeDirection;
    weight?: string;
    defaultWeight?: number;
  }
  declare type RadiusOptions = BetweennessOptions;
  declare type DiameterOptions = BetweennessOptions;
  declare interface Graph {
    _extendEdgeDefinitions(edgeDefinition: EdgeDefinition): void;
    _editEdgeDefinitions(edgeDefinition: EdgeDefinition): void;
    _deleteEdgeDefinition(
      edgeCollectionName: string,
      dropCollection?: boolean
    ): void;
    _addVertexCollection(
      orphanCollectionName: string,
      createCollection?: boolean
    ): void;
    _orphanCollections(): string[];
    _removeVertexCollection(
      orphanCollectionName: string,
      dropCollection?: boolean
    ): void;
    _getConnectingEdges(
      vertexExample1: Example,
      vertexExample2: Example,
      options: ConnectingEdgesOptions
    ): ArangoDB$Edge;
    _fromVertex(edgeId: string): ArangoDB$Document;
    _toVertex(edgeId: string): ArangoDB$Document;
    _neighbors(vertexExample: Example, options?: NeighborsOptions): string[];
    _commonNeighbors(
      vertex1Example: Example,
      vertex2Example: Example,
      vertex1Options?: NeighborsOptions,
      vertex2Options?: NeighborsOptions
    ): CommonNeighbors[];
    _countCommonNeighbors(
      vertex1Example: Example,
      vertex2Example: Example,
      vertex1Options?: NeighborsOptions,
      vertex2Options?: NeighborsOptions
    ): CountCommonNeighbors[];
    _commonProperties(
      vertexExample1: Example,
      vertex2Example: Example,
      options?: CommonPropertiesOptions
    ): CommonProperties[];
    _countCommonProperties(
      vertex1Example: Example,
      vertex2Example: Example,
      options?: CommonPropertiesOptions
    ): CountCommonProperties[];
    _paths(options?: PathsOptions): Path<>[];
    _shortestPath(
      startVertexExample: Example,
      endVertexExample: Example,
      options?: ShortestPathOptions
    ): ShortestPath<>[];
    _distanceTo(
      startVertexExample: Example,
      endVertexExample: Example,
      options?: ShortestPathOptions
    ): Distance[];
    _absoluteEccentricity(
      vertexExample: Example,
      options?: EccentricityOptions
    ): Eccentricity;
    _eccentricity(
      vertexExample: Example,
      options?: EccentricityOptions
    ): Eccentricity;
    _absoluteCloseness(
      vertexExample: Example,
      options?: ClosenessOptions
    ): Closeness;
    _closeness(vertexExample: Example, options?: ClosenessOptions): Closeness;
    _absoluteBetweenness(
      vertexExample: Example,
      options?: BetweennessOptions
    ): Betweenness;
    _betweenness(
      vertexExample: Example,
      options?: BetweennessOptions
    ): Betweenness;
    _radius(vertexExample: Example, options?: RadiusOptions): number;
    _diameter(vertexExample: Example, options?: DiameterOptions): number;
  }
  declare function _create(
    name: string,
    edgeDefinitions?: EdgeDefinition[],
    orphanCollections?: string[]
  ): Graph & {
    [key: string]: ArangoDB$Collection | void
  };

  declare function _list(): string[];

  declare function _graph(
    name: string
  ): Graph & {
    [key: string]: ArangoDB$Collection | void
  };

  declare function _drop(name: string, dropCollections?: boolean): boolean;

  declare function _relation(
    name: string,
    fromVertexCollections: string[] | string,
    toVertexCollections: string[] | string
  ): EdgeDefinition;

  declare function _edgeDefinitions(
    ...relations: EdgeDefinition[]
  ): EdgeDefinition[];

  declare function _extendEdgeDefinitions(
    edgeDefinitions: EdgeDefinition[],
    ...relations: EdgeDefinition[]
  ): EdgeDefinition[];
}
declare module "@arangodb/crypto" {
  declare function createNonce(): string;

  declare function checkAndMarkNonce(nonce: string): void;

  declare function rand(): number;

  declare function genRandomAlphaNumbers(length: number): string;

  declare function genRandomNumbers(length: number): string;

  declare function genRandomSalt(length: number): string;

  declare function jwtEncode(
    key: string,
    message: string,
    algorithm: ArangoDB$JwtAlgorithm
  ): string;

  declare function jwtEncode(
    key: null,
    message: string,
    algorithm: "none"
  ): string;

  declare function jwtDecode(
    key: string | null,
    token: string,
    noVerify?: boolean
  ): { [key: string]: any } | null;

  declare function md5(message: string): string;

  declare function sha1(message: string): string;

  declare function sha224(message: string): string;

  declare function sha256(message: string): string;

  declare function sha384(message: string): string;

  declare function sha512(message: string): string;

  declare function constantEquals(a: string, b: string): boolean;

  declare function pbkdf2(
    salt: string,
    password: string,
    iterations: number,
    keyLength: number
  ): string;

  declare function hmac(
    key: string,
    message: string,
    algorithm: ArangoDB$HashAlgorithm
  ): string;
}
declare module "@arangodb/request" {
  declare interface Response {
    rawBody: Buffer;
    body: string | Buffer;
    json?: any;
    headers: {
      [key: string]: string | void
    };
    status: number;
    statusCode: number;
    message: string;
    throw(message?: string): void | empty;
  }
  declare interface RequestOptions {
    qs?: { [key: string]: any };
    useQuerystring?: boolean;
    headers?: {
      [key: string]: string | void
    };
    body?: any;
    json?: boolean;
    form?: any;
    auth?:
      | {
          username: string,
          password?: string
        }
      | {
          bearer: string
        };
    sslProtocol?: number;
    followRedirect?: boolean;
    maxRedirects?: number;
    encoding?: string | null;
    timeout?: number;
    returnBodyOnError?: boolean;
  }
  declare function method(
    options: {
      url: string
    } & RequestOptions
  ): Foxx$Response;

  declare function method(url: string, options?: RequestOptions): Foxx$Response;

  declare interface Request {
    (
      options: {
        url: string,
        method?: ArangoDB$HttpMethod
      } & RequestOptions
    ): Foxx$Response;
    head: typeof method;
    get: typeof method;
    post: typeof method;
    put: typeof method;
    patch: typeof method;
    delete: typeof method;
  }
  declare var request: Foxx$Request;
  declare export default typeof request;
}
declare module "@arangodb/foxx" {
  declare function createRouter(): Foxx$Router;
}
declare module "@arangodb/foxx/oauth2" {
  declare interface OAuth2Options {
    authEndpoint: string;
    tokenEndpoint: string;
    refreshEndpoint?: string;
    activeUserEndpoint?: string;
    clientId: string;
    clientSecret: string;
  }
  declare interface OAuth2Client {
    getAuthUrl(
      redirect_uri: string,
      options?: {
        response_type?: string
      }
    ): string;
    exchangeGrantToken(
      code: string,
      redirect_uri: string,
      options?: {
        grant_type?: string
      }
    ): any;
    fetchActiveUser(access_token: string): any;
  }
  declare function createOAuth2Client(options: OAuth2Options): OAuth2Client;

  declare export default typeof createOAuth2Client;
}
declare module "@arangodb/foxx/oauth1" {
  declare interface OAuth1Options {
    requestTokenEndpoint: string;
    authEndpoint: string;
    accessTokenEndpoint: string;
    activeUserEndpoint?: string;
    clientId: string;
    clientSecret: string;
    signatureMethod?: "HMAC-SHA1" | "PLAINTEXT";
  }
  declare interface OAuth1Client {
    fetchRequestToken(
      oauth_callback: string,
      qs?: {
        [key: string]: string | void
      }
    ): any;
    getAuthUrl(
      oauth_token: string,
      qs?: {
        [key: string]: string | void
      }
    ): string;
    exchangeRequestToken(
      oauth_token: string,
      oauth_verifier: string,
      qs?: {
        [key: string]: string | void
      }
    ): any;
    fetchActiveUser(
      oauth_token: string,
      oauth_token_secret: string,
      qs?: {
        [key: string]: string | void
      }
    ): any;
    createSignedRequest(
      method: ArangoDB$HttpMethod,
      url: string,
      parameters:
        | string
        | {
            [key: string]: string | void
          }
        | null,
      oauth_token: string,
      oauth_token_secret: string
    ): {
      url: string,
      qs: string,
      headers: {
        accept: "application/json",
        authorization: string
      }
    };
  }
  declare function createOAuth1Client(options: OAuth1Options): OAuth1Client;

  declare export default typeof createOAuth1Client;
}
declare module "@arangodb/foxx/auth" {
  declare interface AuthData {
    method: string;
    salt: string;
    hash: string;
  }
  declare interface Authenticator {
    create(password: string): AuthData;
    verify(hash?: AuthData, password?: string): boolean;
  }
  declare interface AuthOptions {
    method?: ArangoDB$HashAlgorithm;
    saltLength?: number;
  }
  declare function createAuth(options?: AuthOptions): Authenticator;

  declare export default typeof createAuth;
}
declare module "@arangodb/foxx/sessions/transports/header" {
  declare interface HeaderTransportOptions {
    name?: string;
  }
  declare function headerTransport(
    options?: HeaderTransportOptions
  ): Foxx$SessionTransport;

  declare function headerTransport(name: string): Foxx$SessionTransport;

  declare export default typeof headerTransport;
}
declare module "@arangodb/foxx/sessions/transports/cookie" {
  declare interface CookieTransportOptions {
    name?: string;
    ttl?: number;
    algorithm?: ArangoDB$HashAlgorithm;
    secret?: string;
    path?: string;
    domain?: string;
    secure?: string;
    httpOnly?: string;
  }
  declare function cookieTransport(
    options?: CookieTransportOptions
  ): Foxx$SessionTransport;

  declare function cookieTransport(name: string): Foxx$SessionTransport;

  declare export default typeof cookieTransport;
}
declare module "@arangodb/foxx/sessions/storages/jwt" {
  declare interface SafeJwtStorageOptions {
    algorithm?: ArangoDB$JwtAlgorithm;
    secret: string;
    ttl?: number;
    verify?: boolean;
    maxExp?: number;
  }
  declare interface UnsafeJwtStorageOptions {
    algorithm: "none";
    ttl?: number;
    verify?: boolean;
    maxExp?: number;
  }
  declare function jwtStorage(
    options:
      | SafeJwtStorageOptions
      | UnsafeJwtStorageOptions
      | $PropertyType<SafeJwtStorageOptions, "secret">
  ): Foxx$SessionStorage;

  declare export default typeof jwtStorage;
}
declare module "@arangodb/foxx/sessions/storages/collection" {
  declare interface CollectionStorageOptions {
    collection: string | ArangoDB$Collection;
    ttl?: number;
    pruneExpired?: boolean;
    autoUpdate?: boolean;
  }
  declare function collectionStorage(
    options:
      | CollectionStorageOptions
      | $PropertyType<CollectionStorageOptions, "collection">
  ): Foxx$CollectionSessionStorage;

  declare export default typeof collectionStorage;
}
declare module "@arangodb/foxx/sessions" {
  declare interface SessionsOptions {
    storage: Foxx$SessionStorage | string | ArangoDB$Collection;
    transport:
      | Foxx$SessionTransport
      | Foxx$SessionTransport[]
      | "cookie"
      | "header";
    autoCreate?: boolean;
  }
  declare function sessionsMiddleware(
    options: SessionsOptions
  ): Foxx$SessionsMiddleware;

  declare export default typeof sessionsMiddleware;
}
declare module "@arangodb/foxx/graphql" {
  import type { formatError, GraphQLSchema } from "graphql";

  declare type GraphQLModule = { [key: string]: any };
  declare type GraphQLFormatErrorFunction = typeof formatError;
  declare interface GraphQLOptions {
    schema: GraphQLSchema;
    context?: any;
    rootValue?: { [key: string]: any };
    pretty?: boolean;
    formatError?: GraphQLFormatErrorFunction;
    validationRules?: any[];
    graphiql?: boolean;
    graphql?: GraphQLModule;
  }
  declare function createGraphQLRouter(
    options: GraphQLOptions | GraphQLSchema
  ): Foxx$Router;

  declare export default typeof createGraphQLRouter;
}
declare module "@arangodb/foxx/queues" {
  declare interface QueueItem {
    name: string;
    mount: string;
    backOff?: ((failureCount: number) => number) | number;
    maxFailures?: number;
    schema?: Foxx$Schema;
    preprocess?: (data: any) => any;
  }
  declare interface Script {
    name: string;
    mount: string;
  }
  declare type JobCallback = (
    result: any,
    jobData: any,
    job: ArangoDB$Document<Job>
  ) => void;
  declare interface Job {
    status: string;
    queue: string;
    type: Script;
    failures: { [key: string]: any }[];
    runs: number;
    data: any;
    created: number;
    modified: number;
    delayUntil: number;
    maxFailures: number;
    repeatDelay: number;
    repeatTimes: number;
    repeatUntil: number;
    success?: string;
    failure?: string;
    runFailures: number;
    abort(): void;
  }
  declare interface JobOptions {
    success?: JobCallback;
    failure?: JobCallback;
    delayUntil?: number | Date;
    backOff?: ((failureCount: number) => number) | number;
    maxFailures?: number;
    repeatTimes?: number;
    repeatUntil?: number | Date;
    repeatDelay?: number;
  }
  declare interface Queue {
    push(item: QueueItem, data: any, opts?: JobOptions): void;
    get(jobId: string): ArangoDB$Document<Job>;
    delete(jobId: string): boolean;
    pending(script?: Script): string[];
    progress(script?: Script): string[];
    complete(script?: Script): string[];
    failed(script?: Script): string[];
    all(script?: Script): string[];
  }
  declare function createQueue(name: string, maxWorkers?: number): Queue;

  declare function deleteQueue(name: string): boolean;

  declare function get(name: string): Queue;

  declare export {
    createQueue as create,
    deleteQueue as delete,
    get,
    JobOptions,
    Job,
    Queue,
    QueueItem,
    Script
  };
}
declare module "@arangodb/foxx/router" {
  declare function createRouter(): Foxx$Router;

  declare export default typeof createRouter;
}
declare module "@arangodb" {
  declare function aql(
    strings: TemplateStringsArray,
    ...args: any[]
  ): ArangoDB$Query;

  declare var npm$namespace$aql: {
    literal: typeof aql$literal
  };
  declare function aql$literal(value: any): ArangoDB$AqlLiteral;

  declare function query(
    strings: TemplateStringsArray,
    ...args: any[]
  ): ArangoDB$Cursor;

  declare function time(): number;

  declare var db: ArangoDB$Database & {
    [key: string]: ArangoDB$Collection | void
  };
  declare var errors: $ObjMapi<
    { [k: ArangoDB$ErrorName]: any },
    <Name>(
      Name
    ) => {
      code: number,
      message: string
    }
  >;
}
declare module "arangodb" {
  declare type ArangoDB$JwtAlgorithm = "HS512" | "HS384" | "HS256";

  declare type ArangoDB$HashAlgorithm =
    | "sha512"
    | "sha384"
    | "sha256"
    | "sha224"
    | "sha1"
    | "md5";

  declare type ArangoDB$HttpMethod =
    | "HEAD"
    | "GET"
    | "POST"
    | "PUT"
    | "PATCH"
    | "DELETE"
    | "OPTIONS";

  declare type ArangoDB$HttpStatus =
    | "continue"
    | "switching protocols"
    | "processing"
    | "ok"
    | "created"
    | "accepted"
    | "non-authoritative information"
    | "no content"
    | "reset content"
    | "partial content"
    | "multi-status"
    | "already reported"
    | "im used"
    | "multiple choices"
    | "moved permanently"
    | "found"
    | "see other"
    | "not modified"
    | "use proxy"
    | "(unused)"
    | "temporary redirect"
    | "permanent redirect"
    | "bad request"
    | "unauthorized"
    | "payment required"
    | "forbidden"
    | "not found"
    | "method not allowed"
    | "not acceptable"
    | "proxy authentication required"
    | "request timeout"
    | "conflict"
    | "gone"
    | "length required"
    | "precondition failed"
    | "payload too large"
    | "uri too long"
    | "unsupported media type"
    | "range not satisfiable"
    | "expectation failed"
    | "i'm a teapot"
    | "misdirected request"
    | "unprocessable entity"
    | "locked"
    | "failed dependency"
    | "unordered collection"
    | "upgrade required"
    | "precondition required"
    | "too many requests"
    | "request header fields too large"
    | "unavailable for legal reasons"
    | "internal server error"
    | "not implemented"
    | "bad gateway"
    | "service unavailable"
    | "gateway timeout"
    | "http version not supported"
    | "variant also negotiates"
    | "insufficient storage"
    | "loop detected"
    | "bandwidth limit exceeded"
    | "not extended"
    | "network authentication required";

  declare type ArangoDB$EdgeDirection = "any" | "inbound" | "outbound";

  declare type ArangoDB$EngineType = "mmfiles" | "rocksdb";

  declare type ArangoDB$IndexType = "hash" | "skiplist" | "fulltext" | "geo";

  declare type ArangoDB$ViewType = "arangosearch";

  declare type ArangoDB$KeyGeneratorType = "traditional" | "autoincrement";

  declare type ArangoDB$ErrorName =
    | "ERROR_NO_ERROR"
    | "ERROR_FAILED"
    | "ERROR_SYS_ERROR"
    | "ERROR_OUT_OF_MEMORY"
    | "ERROR_INTERNAL"
    | "ERROR_ILLEGAL_NUMBER"
    | "ERROR_NUMERIC_OVERFLOW"
    | "ERROR_ILLEGAL_OPTION"
    | "ERROR_DEAD_PID"
    | "ERROR_NOT_IMPLEMENTED"
    | "ERROR_BAD_PARAMETER"
    | "ERROR_FORBIDDEN"
    | "ERROR_OUT_OF_MEMORY_MMAP"
    | "ERROR_CORRUPTED_CSV"
    | "ERROR_FILE_NOT_FOUND"
    | "ERROR_CANNOT_WRITE_FILE"
    | "ERROR_CANNOT_OVERWRITE_FILE"
    | "ERROR_TYPE_ERROR"
    | "ERROR_LOCK_TIMEOUT"
    | "ERROR_CANNOT_CREATE_DIRECTORY"
    | "ERROR_CANNOT_CREATE_TEMP_FILE"
    | "ERROR_REQUEST_CANCELED"
    | "ERROR_DEBUG"
    | "ERROR_IP_ADDRESS_INVALID"
    | "ERROR_FILE_EXISTS"
    | "ERROR_LOCKED"
    | "ERROR_DEADLOCK"
    | "ERROR_SHUTTING_DOWN"
    | "ERROR_ONLY_ENTERPRISE"
    | "ERROR_RESOURCE_LIMIT"
    | "ERROR_ARANGO_ICU_ERROR"
    | "ERROR_CANNOT_READ_FILE"
    | "ERROR_HTTP_BAD_PARAMETER"
    | "ERROR_HTTP_UNAUTHORIZED"
    | "ERROR_HTTP_FORBIDDEN"
    | "ERROR_HTTP_NOT_FOUND"
    | "ERROR_HTTP_METHOD_NOT_ALLOWED"
    | "ERROR_HTTP_NOT_ACCEPTABLE"
    | "ERROR_HTTP_PRECONDITION_FAILED"
    | "ERROR_HTTP_SERVER_ERROR"
    | "ERROR_HTTP_SERVICE_UNAVAILABLE"
    | "ERROR_HTTP_GATEWAY_TIMEOUT"
    | "ERROR_HTTP_CORRUPTED_JSON"
    | "ERROR_HTTP_SUPERFLUOUS_SUFFICES"
    | "ERROR_ARANGO_ILLEGAL_STATE"
    | "ERROR_ARANGO_DATAFILE_SEALED"
    | "ERROR_ARANGO_READ_ONLY"
    | "ERROR_ARANGO_DUPLICATE_IDENTIFIER"
    | "ERROR_ARANGO_DATAFILE_UNREADABLE"
    | "ERROR_ARANGO_DATAFILE_EMPTY"
    | "ERROR_ARANGO_RECOVERY"
    | "ERROR_ARANGO_DATAFILE_STATISTICS_NOT_FOUND"
    | "ERROR_ARANGO_CORRUPTED_DATAFILE"
    | "ERROR_ARANGO_ILLEGAL_PARAMETER_FILE"
    | "ERROR_ARANGO_CORRUPTED_COLLECTION"
    | "ERROR_ARANGO_MMAP_FAILED"
    | "ERROR_ARANGO_FILESYSTEM_FULL"
    | "ERROR_ARANGO_NO_JOURNAL"
    | "ERROR_ARANGO_DATAFILE_ALREADY_EXISTS"
    | "ERROR_ARANGO_DATADIR_LOCKED"
    | "ERROR_ARANGO_COLLECTION_DIRECTORY_ALREADY_EXISTS"
    | "ERROR_ARANGO_MSYNC_FAILED"
    | "ERROR_ARANGO_DATADIR_UNLOCKABLE"
    | "ERROR_ARANGO_SYNC_TIMEOUT"
    | "ERROR_ARANGO_CONFLICT"
    | "ERROR_ARANGO_DATADIR_INVALID"
    | "ERROR_ARANGO_DOCUMENT_NOT_FOUND"
    | "ERROR_ARANGO_DATA_SOURCE_NOT_FOUND"
    | "ERROR_ARANGO_COLLECTION_PARAMETER_MISSING"
    | "ERROR_ARANGO_DOCUMENT_HANDLE_BAD"
    | "ERROR_ARANGO_MAXIMAL_SIZE_TOO_SMALL"
    | "ERROR_ARANGO_DUPLICATE_NAME"
    | "ERROR_ARANGO_ILLEGAL_NAME"
    | "ERROR_ARANGO_NO_INDEX"
    | "ERROR_ARANGO_UNIQUE_CONSTRAINT_VIOLATED"
    | "ERROR_ARANGO_INDEX_NOT_FOUND"
    | "ERROR_ARANGO_CROSS_COLLECTION_REQUEST"
    | "ERROR_ARANGO_INDEX_HANDLE_BAD"
    | "ERROR_ARANGO_DOCUMENT_TOO_LARGE"
    | "ERROR_ARANGO_COLLECTION_NOT_UNLOADED"
    | "ERROR_ARANGO_COLLECTION_TYPE_INVALID"
    | "ERROR_ARANGO_VALIDATION_FAILED"
    | "ERROR_ARANGO_ATTRIBUTE_PARSER_FAILED"
    | "ERROR_ARANGO_DOCUMENT_KEY_BAD"
    | "ERROR_ARANGO_DOCUMENT_KEY_UNEXPECTED"
    | "ERROR_ARANGO_DATADIR_NOT_WRITABLE"
    | "ERROR_ARANGO_OUT_OF_KEYS"
    | "ERROR_ARANGO_DOCUMENT_KEY_MISSING"
    | "ERROR_ARANGO_DOCUMENT_TYPE_INVALID"
    | "ERROR_ARANGO_DATABASE_NOT_FOUND"
    | "ERROR_ARANGO_DATABASE_NAME_INVALID"
    | "ERROR_ARANGO_USE_SYSTEM_DATABASE"
    | "ERROR_ARANGO_ENDPOINT_NOT_FOUND"
    | "ERROR_ARANGO_INVALID_KEY_GENERATOR"
    | "ERROR_ARANGO_INVALID_EDGE_ATTRIBUTE"
    | "ERROR_ARANGO_INDEX_DOCUMENT_ATTRIBUTE_MISSING"
    | "ERROR_ARANGO_INDEX_CREATION_FAILED"
    | "ERROR_ARANGO_WRITE_THROTTLE_TIMEOUT"
    | "ERROR_ARANGO_COLLECTION_TYPE_MISMATCH"
    | "ERROR_ARANGO_COLLECTION_NOT_LOADED"
    | "ERROR_ARANGO_DOCUMENT_REV_BAD"
    | "ERROR_ARANGO_DATAFILE_FULL"
    | "ERROR_ARANGO_EMPTY_DATADIR"
    | "ERROR_ARANGO_TRY_AGAIN"
    | "ERROR_ARANGO_BUSY"
    | "ERROR_ARANGO_MERGE_IN_PROGRESS"
    | "ERROR_ARANGO_IO_ERROR"
    | "ERROR_REPLICATION_NO_RESPONSE"
    | "ERROR_REPLICATION_INVALID_RESPONSE"
    | "ERROR_REPLICATION_MASTER_ERROR"
    | "ERROR_REPLICATION_MASTER_INCOMPATIBLE"
    | "ERROR_REPLICATION_MASTER_CHANGE"
    | "ERROR_REPLICATION_LOOP"
    | "ERROR_REPLICATION_UNEXPECTED_MARKER"
    | "ERROR_REPLICATION_INVALID_APPLIER_STATE"
    | "ERROR_REPLICATION_UNEXPECTED_TRANSACTION"
    | "ERROR_REPLICATION_INVALID_APPLIER_CONFIGURATION"
    | "ERROR_REPLICATION_RUNNING"
    | "ERROR_REPLICATION_APPLIER_STOPPED"
    | "ERROR_REPLICATION_NO_START_TICK"
    | "ERROR_REPLICATION_START_TICK_NOT_PRESENT"
    | "ERROR_REPLICATION_WRONG_CHECKSUM"
    | "ERROR_REPLICATION_SHARD_NONEMPTY"
    | "ERROR_CLUSTER_NO_AGENCY"
    | "ERROR_CLUSTER_NO_COORDINATOR_HEADER"
    | "ERROR_CLUSTER_COULD_NOT_LOCK_PLAN"
    | "ERROR_CLUSTER_COLLECTION_ID_EXISTS"
    | "ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION_IN_PLAN"
    | "ERROR_CLUSTER_COULD_NOT_READ_CURRENT_VERSION"
    | "ERROR_CLUSTER_COULD_NOT_CREATE_COLLECTION"
    | "ERROR_CLUSTER_TIMEOUT"
    | "ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_PLAN"
    | "ERROR_CLUSTER_COULD_NOT_REMOVE_COLLECTION_IN_CURRENT"
    | "ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE_IN_PLAN"
    | "ERROR_CLUSTER_COULD_NOT_CREATE_DATABASE"
    | "ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_PLAN"
    | "ERROR_CLUSTER_COULD_NOT_REMOVE_DATABASE_IN_CURRENT"
    | "ERROR_CLUSTER_SHARD_GONE"
    | "ERROR_CLUSTER_CONNECTION_LOST"
    | "ERROR_CLUSTER_MUST_NOT_SPECIFY_KEY"
    | "ERROR_CLUSTER_GOT_CONTRADICTING_ANSWERS"
    | "ERROR_CLUSTER_NOT_ALL_SHARDING_ATTRIBUTES_GIVEN"
    | "ERROR_CLUSTER_MUST_NOT_CHANGE_SHARDING_ATTRIBUTES"
    | "ERROR_CLUSTER_UNSUPPORTED"
    | "ERROR_CLUSTER_ONLY_ON_COORDINATOR"
    | "ERROR_CLUSTER_READING_PLAN_AGENCY"
    | "ERROR_CLUSTER_COULD_NOT_TRUNCATE_COLLECTION"
    | "ERROR_CLUSTER_AQL_COMMUNICATION"
    | "ERROR_ARANGO_DOCUMENT_NOT_FOUND_OR_SHARDING_ATTRIBUTES_CHANGED"
    | "ERROR_CLUSTER_COULD_NOT_DETERMINE_ID"
    | "ERROR_CLUSTER_ONLY_ON_DBSERVER"
    | "ERROR_CLUSTER_BACKEND_UNAVAILABLE"
    | "ERROR_CLUSTER_UNKNOWN_CALLBACK_ENDPOINT"
    | "ERROR_CLUSTER_AGENCY_STRUCTURE_INVALID"
    | "ERROR_CLUSTER_AQL_COLLECTION_OUT_OF_SYNC"
    | "ERROR_CLUSTER_COULD_NOT_CREATE_INDEX_IN_PLAN"
    | "ERROR_CLUSTER_COULD_NOT_DROP_INDEX_IN_PLAN"
    | "ERROR_CLUSTER_CHAIN_OF_DISTRIBUTESHARDSLIKE"
    | "ERROR_CLUSTER_MUST_NOT_DROP_COLL_OTHER_DISTRIBUTESHARDSLIKE"
    | "ERROR_CLUSTER_UNKNOWN_DISTRIBUTESHARDSLIKE"
    | "ERROR_CLUSTER_INSUFFICIENT_DBSERVERS"
    | "ERROR_CLUSTER_COULD_NOT_DROP_FOLLOWER"
    | "ERROR_CLUSTER_SHARD_LEADER_REFUSES_REPLICATION"
    | "ERROR_CLUSTER_SHARD_FOLLOWER_REFUSES_OPERATION"
    | "ERROR_CLUSTER_SHARD_LEADER_RESIGNED"
    | "ERROR_CLUSTER_AGENCY_COMMUNICATION_FAILED"
    | "ERROR_CLUSTER_DISTRIBUTE_SHARDS_LIKE_REPLICATION_FACTOR"
    | "ERROR_CLUSTER_DISTRIBUTE_SHARDS_LIKE_NUMBER_OF_SHARDS"
    | "ERROR_CLUSTER_LEADERSHIP_CHALLENGE_ONGOING"
    | "ERROR_CLUSTER_NOT_LEADER"
    | "ERROR_CLUSTER_COULD_NOT_CREATE_VIEW_IN_PLAN"
    | "ERROR_QUERY_KILLED"
    | "ERROR_QUERY_PARSE"
    | "ERROR_QUERY_EMPTY"
    | "ERROR_QUERY_SCRIPT"
    | "ERROR_QUERY_NUMBER_OUT_OF_RANGE"
    | "ERROR_QUERY_VARIABLE_NAME_INVALID"
    | "ERROR_QUERY_VARIABLE_REDECLARED"
    | "ERROR_QUERY_VARIABLE_NAME_UNKNOWN"
    | "ERROR_QUERY_COLLECTION_LOCK_FAILED"
    | "ERROR_QUERY_TOO_MANY_COLLECTIONS"
    | "ERROR_QUERY_DOCUMENT_ATTRIBUTE_REDECLARED"
    | "ERROR_QUERY_FUNCTION_NAME_UNKNOWN"
    | "ERROR_QUERY_FUNCTION_ARGUMENT_NUMBER_MISMATCH"
    | "ERROR_QUERY_FUNCTION_ARGUMENT_TYPE_MISMATCH"
    | "ERROR_QUERY_INVALID_REGEX"
    | "ERROR_QUERY_BIND_PARAMETERS_INVALID"
    | "ERROR_QUERY_BIND_PARAMETER_MISSING"
    | "ERROR_QUERY_BIND_PARAMETER_UNDECLARED"
    | "ERROR_QUERY_BIND_PARAMETER_TYPE"
    | "ERROR_QUERY_INVALID_LOGICAL_VALUE"
    | "ERROR_QUERY_INVALID_ARITHMETIC_VALUE"
    | "ERROR_QUERY_DIVISION_BY_ZERO"
    | "ERROR_QUERY_ARRAY_EXPECTED"
    | "ERROR_QUERY_FAIL_CALLED"
    | "ERROR_QUERY_GEO_INDEX_MISSING"
    | "ERROR_QUERY_FULLTEXT_INDEX_MISSING"
    | "ERROR_QUERY_INVALID_DATE_VALUE"
    | "ERROR_QUERY_MULTI_MODIFY"
    | "ERROR_QUERY_INVALID_AGGREGATE_EXPRESSION"
    | "ERROR_QUERY_COMPILE_TIME_OPTIONS"
    | "ERROR_QUERY_EXCEPTION_OPTIONS"
    | "ERROR_QUERY_COLLECTION_USED_IN_EXPRESSION"
    | "ERROR_QUERY_DISALLOWED_DYNAMIC_CALL"
    | "ERROR_QUERY_ACCESS_AFTER_MODIFICATION"
    | "ERROR_QUERY_FUNCTION_INVALID_NAME"
    | "ERROR_QUERY_FUNCTION_INVALID_CODE"
    | "ERROR_QUERY_FUNCTION_NOT_FOUND"
    | "ERROR_QUERY_FUNCTION_RUNTIME_ERROR"
    | "ERROR_QUERY_BAD_JSON_PLAN"
    | "ERROR_QUERY_NOT_FOUND"
    | "ERROR_QUERY_IN_USE"
    | "ERROR_QUERY_USER_ASSERT"
    | "ERROR_QUERY_USER_WARN"
    | "ERROR_CURSOR_NOT_FOUND"
    | "ERROR_CURSOR_BUSY"
    | "ERROR_TRANSACTION_INTERNAL"
    | "ERROR_TRANSACTION_NESTED"
    | "ERROR_TRANSACTION_UNREGISTERED_COLLECTION"
    | "ERROR_TRANSACTION_DISALLOWED_OPERATION"
    | "ERROR_TRANSACTION_ABORTED"
    | "ERROR_USER_INVALID_NAME"
    | "ERROR_USER_INVALID_PASSWORD"
    | "ERROR_USER_DUPLICATE"
    | "ERROR_USER_NOT_FOUND"
    | "ERROR_USER_CHANGE_PASSWORD"
    | "ERROR_USER_EXTERNAL"
    | "ERROR_SERVICE_INVALID_NAME"
    | "ERROR_SERVICE_INVALID_MOUNT"
    | "ERROR_SERVICE_DOWNLOAD_FAILED"
    | "ERROR_SERVICE_UPLOAD_FAILED"
    | "ERROR_LDAP_CANNOT_INIT"
    | "ERROR_LDAP_CANNOT_SET_OPTION"
    | "ERROR_LDAP_CANNOT_BIND"
    | "ERROR_LDAP_CANNOT_UNBIND"
    | "ERROR_LDAP_CANNOT_SEARCH"
    | "ERROR_LDAP_CANNOT_START_TLS"
    | "ERROR_LDAP_FOUND_NO_OBJECTS"
    | "ERROR_LDAP_NOT_ONE_USER_FOUND"
    | "ERROR_LDAP_USER_NOT_IDENTIFIED"
    | "ERROR_LDAP_INVALID_MODE"
    | "ERROR_TASK_INVALID_ID"
    | "ERROR_TASK_DUPLICATE_ID"
    | "ERROR_TASK_NOT_FOUND"
    | "ERROR_GRAPH_INVALID_GRAPH"
    | "ERROR_GRAPH_COULD_NOT_CREATE_GRAPH"
    | "ERROR_GRAPH_INVALID_VERTEX"
    | "ERROR_GRAPH_COULD_NOT_CREATE_VERTEX"
    | "ERROR_GRAPH_COULD_NOT_CHANGE_VERTEX"
    | "ERROR_GRAPH_INVALID_EDGE"
    | "ERROR_GRAPH_COULD_NOT_CREATE_EDGE"
    | "ERROR_GRAPH_COULD_NOT_CHANGE_EDGE"
    | "ERROR_GRAPH_TOO_MANY_ITERATIONS"
    | "ERROR_GRAPH_INVALID_FILTER_RESULT"
    | "ERROR_GRAPH_EMPTY"
    | "ERROR_SESSION_UNKNOWN"
    | "ERROR_SESSION_EXPIRED"
    | "SIMPLE_CLIENT_UNKNOWN_ERROR"
    | "SIMPLE_CLIENT_COULD_NOT_CONNECT"
    | "SIMPLE_CLIENT_COULD_NOT_WRITE"
    | "SIMPLE_CLIENT_COULD_NOT_READ"
    | "COMMUNICATOR_REQUEST_ABORTED"
    | "COMMUNICATOR_DISABLED"
    | "ERROR_MALFORMED_MANIFEST_FILE"
    | "ERROR_INVALID_SERVICE_MANIFEST"
    | "ERROR_SERVICE_FILES_MISSING"
    | "ERROR_SERVICE_FILES_OUTDATED"
    | "ERROR_INVALID_FOXX_OPTIONS"
    | "ERROR_INVALID_MOUNTPOINT"
    | "ERROR_SERVICE_NOT_FOUND"
    | "ERROR_SERVICE_NEEDS_CONFIGURATION"
    | "ERROR_SERVICE_MOUNTPOINT_CONFLICT"
    | "ERROR_SERVICE_MANIFEST_NOT_FOUND"
    | "ERROR_SERVICE_OPTIONS_MALFORMED"
    | "ERROR_SERVICE_SOURCE_NOT_FOUND"
    | "ERROR_SERVICE_SOURCE_ERROR"
    | "ERROR_SERVICE_UNKNOWN_SCRIPT"
    | "ERROR_MODULE_NOT_FOUND"
    | "ERROR_MODULE_SYNTAX_ERROR"
    | "ERROR_MODULE_FAILURE"
    | "ERROR_NO_SMART_COLLECTION"
    | "ERROR_NO_SMART_GRAPH_ATTRIBUTE"
    | "ERROR_CANNOT_DROP_SMART_COLLECTION"
    | "ERROR_KEY_MUST_BE_PREFIXED_WITH_SMART_GRAPH_ATTRIBUTE"
    | "ERROR_ILLEGAL_SMART_GRAPH_ATTRIBUTE"
    | "ERROR_AGENCY_INQUIRY_SYNTAX"
    | "ERROR_AGENCY_INFORM_MUST_BE_OBJECT"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_TERM"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_ID"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_ACTIVE"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_POOL"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_MIN_PING"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_MAX_PING"
    | "ERROR_AGENCY_INFORM_MUST_CONTAIN_TIMEOUT_MULT"
    | "ERROR_AGENCY_INQUIRE_CLIENT_ID_MUST_BE_STRING"
    | "ERROR_AGENCY_CANNOT_REBUILD_DBS"
    | "ERROR_SUPERVISION_GENERAL_FAILURE"
    | "ERROR_DISPATCHER_IS_STOPPING"
    | "ERROR_QUEUE_UNKNOWN"
    | "ERROR_QUEUE_FULL";

  declare type ArangoDB$DocumentCollectionType = 2;

  declare type ArangoDB$EdgeCollectionType = 3;

  declare type ArangoDB$CollectionType =
    | ArangoDB$DocumentCollectionType
    | ArangoDB$EdgeCollectionType;

  declare interface ArangoDB$CollectionChecksum {
    checksum: string;
    revision: string;
  }

  declare interface ArangoDB$CollectionFigures {
    alive: {
      count: number,
      size: number
    };
    dead: {
      count: number,
      size: number,
      deletion: number
    };
    datafiles: {
      count: number,
      fileSize: number
    };
    journals: {
      count: number,
      fileSize: number
    };
    compactors: {
      count: number,
      fileSize: number
    };
    shapefiles: {
      count: number,
      fileSize: number
    };
    shapes: {
      count: number,
      size: number
    };
    attributes: {
      count: number,
      size: number
    };
    indexes: {
      count: number,
      size: number
    };
    lastTick: number;
    uncollectedLogfileEntries: number;
    documentReferences: number;
    waitingFor: string;
    compactionStatus: {
      time: string,
      message: string,
      count: number,
      filesCombined: number,
      bytesRead: number,
      bytesWritten: number
    };
  }

  declare interface ArangoDB$CollectionPropertiesOptions {
    waitForSync?: boolean;
    journalSize?: number;
    indexBuckets?: number;
    replicationFactor?: number;
  }

  declare interface ArangoDB$CreateCollectionOptions {
    waitForSync?: boolean;
    journalSize?: number;
    isVolatile?: boolean;
    isSystem?: boolean;
    keyOptions?: {
      type?: ArangoDB$KeyGeneratorType,
      allowUserKeys?: boolean,
      increment?: number,
      offset?: number
    };
    numberOfShards?: number;
    shardKeys?: string[];
    replicationFactor?: number;
  }

  declare interface ArangoDB$CollectionProperties {
    waitForSync: boolean;
    journalSize: number;
    isSystem: boolean;
    isVolatile: boolean;
    keyOptions?: {
      type: ArangoDB$KeyGeneratorType,
      allowUserKeys: boolean,
      increment?: number,
      offset?: number
    };
    indexBuckets: number;
    numberOfShards?: number;
    shardKeys?: string[];
    replicationFactor?: number;
  }

  declare interface ArangoDB$IndexLike {
    [key: string]: any;
    id: string;
  }

  declare interface ArangoDB$IndexDescription<T> {
    type: ArangoDB$IndexType;
    fields: $ReadOnlyArray<$Keys<T> | string>;
    sparse?: boolean;
    unique?: boolean;
    deduplicate?: boolean;
  }

  declare interface ArangoDB$Index<T: { [key: string]: any } = any> {
    id: string;
    type: ArangoDB$IndexType;
    fields: Array<$Keys<T> | string>;
    sparse: boolean;
    unique: boolean;
    deduplicate: boolean;
    isNewlyCreated: boolean;
    selectivityEstimate: number;
    code: number;
  }

  declare interface ArangoDB$ObjectWithId {
    [key: string]: any;
    _id: string;
  }

  declare interface ArangoDB$ObjectWithKey {
    [key: string]: any;
    _key: string;
  }

  declare type ArangoDB$DocumentLike =
    | ArangoDB$ObjectWithId
    | ArangoDB$ObjectWithKey;

  declare type ArangoDB$Patch<T> = $ObjMapi<
    T,
    <K>(K) => $ElementType<T, K> | ArangoDB$Patch<$ElementType<T, K>>
  >;

  declare interface ArangoDB$DocumentMetadata {
    _key: string;
    _id: string;
    _rev: string;
  }

  declare type ArangoDB$UpdateMetadata = {
    _oldRev: string
  } & ArangoDB$DocumentMetadata;

  declare type ArangoDB$Document<T: { [key: string]: any } = any> = $ObjMapi<
    T,
    <K>(K) => $ElementType<T, K>
  > &
    ArangoDB$DocumentMetadata & {
      _from?: string,
      _to?: string
    } & {
      [key: string]: any
    };

  declare type ArangoDB$DocumentData<
    T: { [key: string]: any } = any
  > = $ObjMapi<T, <K>(K) => $ElementType<T, K>> &
    $Shape<ArangoDB$DocumentMetadata>;

  declare type ArangoDB$Edge<
    T: { [key: string]: any } = any
  > = ArangoDB$Document<T> & {
    _from: string,
    _to: string
  };

  declare type ArangoDB$InsertResult<T: { [key: string]: any } = any> = {
    new?: ArangoDB$Document<T>
  } & ArangoDB$DocumentMetadata;

  declare type ArangoDB$UpdateResult<T: { [key: string]: any } = any> = {
    old?: ArangoDB$Document<T>,
    new?: ArangoDB$Document<T>
  } & ArangoDB$UpdateMetadata;

  declare type ArangoDB$RemoveResult<T: { [key: string]: any } = any> = {
    old?: ArangoDB$Document<T>
  } & ArangoDB$DocumentMetadata;

  declare interface ArangoDB$InsertOptions {
    waitForSync?: boolean;
    silent?: boolean;
    returnNew?: boolean;
  }

  declare type ArangoDB$ReplaceOptions = {
    overwrite?: boolean,
    returnOld?: boolean
  } & ArangoDB$InsertOptions;

  declare type ArangoDB$UpdateOptions = {
    keepNull?: boolean,
    mergeObjects?: boolean
  } & ArangoDB$ReplaceOptions;

  declare interface ArangoDB$UpdateByExampleOptions {
    keepNull?: boolean;
    waitForSync?: boolean;
    limit?: number;
    mergeObjects?: boolean;
  }

  declare interface ArangoDB$RemoveOptions {
    waitForSync?: boolean;
    overwrite?: boolean;
    returnOld?: boolean;
    silent?: boolean;
  }

  declare interface ArangoDB$RemoveByExampleOptions {
    waitForSync?: boolean;
    limit?: number;
  }

  declare interface ArangoDB$IterateOptions {
    limit?: number;
    probability?: number;
  }

  declare type ArangoDB$DocumentIterator<T: { [key: string]: any }> = (
    document: ArangoDB$Document<T>,
    number: number
  ) => void;

  declare interface ArangoDB$Collection<T: { [key: string]: any } = any> {
    name(): string;
    checksum(
      withRevisions?: boolean,
      withData?: boolean
    ): ArangoDB$CollectionChecksum;
    count(): number;
    drop(options?: {
      isSystem?: boolean
    }): void;
    figures(): ArangoDB$CollectionFigures;
    load(): void;
    path(): string;
    properties(
      properties?: ArangoDB$CollectionPropertiesOptions
    ): ArangoDB$CollectionProperties;
    revision(): string;
    rotate(): void;
    toArray(): Array<ArangoDB$Document<T>>;
    truncate(): void;
    type(): ArangoDB$CollectionType;
    unload(): void;
    dropIndex(index: string | ArangoDB$IndexLike): boolean;
    ensureIndex(description: ArangoDB$IndexDescription<T>): ArangoDB$Index<T>;
    getIndexes(): Array<ArangoDB$Index<T>>;
    index(index: string | ArangoDB$IndexLike): ArangoDB$Index<T> | null;
    all(): ArangoDB$Cursor<ArangoDB$Document<T>>;
    any(): ArangoDB$Document<T>;
    byExample(
      example: $Shape<ArangoDB$Document<T>>
    ): ArangoDB$Cursor<ArangoDB$Document<T>>;
    document(selector: string | ArangoDB$DocumentLike): ArangoDB$Document<T>;
    document(
      selectors: $ReadOnlyArray<string | ArangoDB$DocumentLike>
    ): Array<ArangoDB$Document<T>>;
    exists(name: string): boolean;
    firstExample(
      example: $Shape<ArangoDB$Document<T>>
    ): ArangoDB$Document<T> | null;
    insert(
      data: ArangoDB$DocumentData<T>,
      options?: ArangoDB$InsertOptions
    ): ArangoDB$InsertResult<T>;
    insert(
      array: $ReadOnlyArray<ArangoDB$DocumentData<T>>,
      options?: ArangoDB$InsertOptions
    ): Array<ArangoDB$InsertResult<T>>;
    insert(
      from: string,
      to: string,
      data: ArangoDB$DocumentData<T>,
      options?: ArangoDB$InsertOptions
    ): ArangoDB$InsertResult<T>;
    edges(
      vertex:
        | string
        | ArangoDB$ObjectWithId
        | $ReadOnlyArray<string | ArangoDB$ObjectWithId>
    ): Array<ArangoDB$Edge<T>>;
    inEdges(
      vertex:
        | string
        | ArangoDB$ObjectWithId
        | $ReadOnlyArray<string | ArangoDB$ObjectWithId>
    ): Array<ArangoDB$Edge<T>>;
    outEdges(
      vertex:
        | string
        | ArangoDB$ObjectWithId
        | $ReadOnlyArray<string | ArangoDB$ObjectWithId>
    ): Array<ArangoDB$Edge<T>>;
    iterate(
      iterator: ArangoDB$DocumentIterator<T>,
      options?: ArangoDB$IterateOptions
    ): void;
    remove(
      selector: string | ArangoDB$DocumentLike,
      options?: ArangoDB$RemoveOptions
    ): ArangoDB$RemoveResult<>;
    remove(
      selectors: $ReadOnlyArray<string | ArangoDB$DocumentLike>,
      options?: ArangoDB$RemoveOptions
    ): ArangoDB$RemoveResult<>[];
    removeByExample(
      example: $Shape<ArangoDB$Document<T>>,
      waitForSync?: boolean,
      limit?: number
    ): number;
    removeByExample(
      example: $Shape<ArangoDB$Document<T>>,
      options?: ArangoDB$RemoveByExampleOptions
    ): number;
    rename(newName: string): void;
    replace(
      selector: string | ArangoDB$DocumentLike,
      data: ArangoDB$DocumentData<T>,
      options?: ArangoDB$ReplaceOptions
    ): ArangoDB$UpdateResult<T>;
    replace(
      selectors: $ReadOnlyArray<string | ArangoDB$DocumentLike>,
      data: $ReadOnlyArray<ArangoDB$DocumentData<T>>,
      options?: ArangoDB$ReplaceOptions
    ): Array<ArangoDB$UpdateResult<T>>;
    replaceByExample(
      example: $Shape<ArangoDB$Document<T>>,
      newValue: ArangoDB$DocumentData<T>,
      waitForSync?: boolean,
      limit?: number
    ): number;
    replaceByExample(
      example: $Shape<ArangoDB$Document<T>>,
      newValue: ArangoDB$DocumentData<T>,
      options?: {
        waitForSync?: boolean,
        limit?: number
      }
    ): number;
    save(
      data: ArangoDB$DocumentData<T>,
      options?: ArangoDB$InsertOptions
    ): ArangoDB$InsertResult<T>;
    save(
      array: $ReadOnlyArray<ArangoDB$DocumentData<T>>,
      options?: ArangoDB$InsertOptions
    ): Array<ArangoDB$InsertResult<T>>;
    save(
      from: string,
      to: string,
      data: ArangoDB$DocumentData<T>,
      options?: ArangoDB$InsertOptions
    ): ArangoDB$InsertResult<T>;
    update(
      selector: string | ArangoDB$DocumentLike,
      data: ArangoDB$Patch<ArangoDB$Document<T>>,
      options?: ArangoDB$UpdateOptions
    ): ArangoDB$UpdateResult<T>;
    update(
      selectors: $ReadOnlyArray<string | ArangoDB$DocumentLike>,
      data: $ReadOnlyArray<ArangoDB$Patch<ArangoDB$Document<T>>>,
      options?: ArangoDB$UpdateOptions
    ): Array<ArangoDB$UpdateResult<T>>;
    updateByExample(
      example: $Shape<ArangoDB$Document<T>>,
      newValue: ArangoDB$Patch<ArangoDB$Document<T>>,
      keepNull?: boolean,
      waitForSync?: boolean,
      limit?: number
    ): number;
    updateByExample(
      example: $Shape<ArangoDB$Document<T>>,
      newValue: ArangoDB$Patch<ArangoDB$Document<T>>,
      options?: ArangoDB$UpdateByExampleOptions
    ): number;
  }

  declare interface ArangoDB$DatabaseUser {
    username: string;
    passwd?: string;
    active?: boolean;
    extra?: { [key: string]: any };
  }

  declare interface ArangoDB$Query {
    query: string;
    bindVars?: { [key: string]: any };
    options?: ArangoDB$QueryOptions;
  }

  declare interface ArangoDB$AqlLiteral {
    toAQL: () => string;
  }

  declare interface ArangoDB$Cursor<T = any> {
    toArray(): T[];
    hasNext(): boolean;
    next(): T;
    count(count?: boolean): number;
    getExtra(): ArangoDB$QueryExtra;
    setBatchSize(size: number): void;
    getBatchSize(): number;
    execute(batchSize?: number): void;
    dispose(): void;
  }

  declare interface ArangoDB$Statement<T = any> {
    bind(name: string, value: any): void;
    setBatchSize(size: number): void;
    getBatchSize(): number;
    execute(): ArangoDB$Cursor<T>;
  }

  declare interface ArangoDB$QueryOptions {
    memoryLimit?: number;
    failOnWarning?: boolean;
    cache?: boolean;
    count?: boolean;
    fullCount?: boolean;
    profile?: boolean;
    maxWarningCount?: number;
    maxNumberOfPlans?: number;
    stream?: boolean;
    maxTransactionsSize?: number;
    intermediateCommitSize?: number;
    intermediateCommitCount?: number;
    skipInaccessibleCollections?: boolean;
  }

  declare interface ArangoDB$QueryExtra {
    stats: {
      writesExecuted: number,
      writesIgnored: number,
      scannedFull: number,
      scannedIndex: number,
      filtered: number,
      httpRequests: number,
      fullCount: number,
      executionTime: number
    };
    warnings: string[];
  }

  declare interface ArangoDB$QueryAstNode {
    type: string;
    subNodes?: ArangoDB$QueryAstNode[];
    [key: string]: any;
  }

  declare interface ArangoDB$ParsedQuery {
    parsed: boolean;
    collections: string[];
    parameters: string[];
    bindVars: string[];
    ast: ArangoDB$QueryAstNode[];
  }

  declare interface ArangoDB$ArangoSearchView {
    _dbName: string;
    _id: string;
    name(): string;
    type(): ArangoDB$ViewType;
    rename(newName: string): void;
    properties(
      newProperties?: ArangoDB$ArangoSearchViewPropertiesOptions
    ): ArangoDB$ArangoSearchViewProperties;
  }

  declare type ArangoDB$ArangoSearchViewConsolidationType =
    | "bytes"
    | "bytes_accum"
    | "count"
    | "fill";

  declare interface ArangoDB$ArangoSearchViewCollectionLink {
    analyzers?: string[];
    fields?: {
      [key: string]: ArangoDB$ArangoSearchViewCollectionLink | void
    };
    includeAllFields?: boolean;
    trackListPositions?: boolean;
    storeValues?: "none" | "id";
  }

  declare interface ArangoDB$ArangoSearchViewProperties {
    id: string;
    name: string;
    type: "arangosearch";
    cleanupIntervalStep: number;
    consolidationIntervalMsec: number;
    consolidationPolicy: {
      type: ArangoDB$ArangoSearchViewConsolidationType,
      segmentThreshold: number,
      threshold: number
    };
    links: {
      [key: string]: ArangoDB$ArangoSearchViewCollectionLink | void
    };
  }

  declare interface ArangoDB$ArangoSearchViewPropertiesOptions {
    cleanupIntervalStep?: number;
    consolidationIntervalMsec?: number;
    consolidationPolicy?: {
      type?: ArangoDB$ArangoSearchViewConsolidationType,
      segmentThreshold?: number,
      threshold?: number
    };
    links?: {
      [key: string]: ArangoDB$ArangoSearchViewCollectionLink | void
    };
  }

  declare interface ArangoDB$TransactionCollections {
    read?: string | string[];
    write?: string | string[];
    allowImplicit?: boolean;
  }

  declare interface ArangoDB$Transaction {
    collections: ArangoDB$TransactionCollections | string[];
    action: (params: { [key: string]: any }) => void | string;
    waitForSync?: boolean;
    lockTimeout?: number;
    params?: { [key: string]: any };
    maxTransactionsSize?: number;
    intermediateCommitSize?: number;
    intermediateCommitCount?: number;
  }

  declare interface ArangoDB$Database {
    _createDatabase(
      name: string,
      options?: empty,
      users?: ArangoDB$DatabaseUser[]
    ): true;
    _databases(): string[];
    _dropDatabase(name: string): true;
    _useDatabase(name: string): ArangoDB$Database;
    _index(index: string | ArangoDB$IndexLike): ArangoDB$Index<> | null;
    _dropIndex(index: string | ArangoDB$IndexLike): boolean;
    _id(): string;
    _isSystem(): boolean;
    _name(): string;
    _path(): string;
    _version(): string;
    _collection(name: string): ArangoDB$Collection<>;
    _collections(): ArangoDB$Collection<>[];
    _create(
      name: string,
      properties?: ArangoDB$CreateCollectionOptions
    ): ArangoDB$Collection<>;
    _createDocumentCollection(
      name: string,
      properties?: ArangoDB$CreateCollectionOptions
    ): ArangoDB$Collection<>;
    _createEdgeCollection(
      name: string,
      properties?: ArangoDB$CreateCollectionOptions
    ): ArangoDB$Collection<>;
    _drop(name: string): void;
    _truncate(name: string): void;
    _createStatement(query: ArangoDB$Query | string): ArangoDB$Statement<>;
    _query(
      query: ArangoDB$Query | string,
      bindVars?: { [key: string]: any },
      options?: ArangoDB$QueryOptions
    ): ArangoDB$Cursor<>;
    _explain(query: ArangoDB$Query | string): void;
    _parse(query: string): ArangoDB$ParsedQuery;
    _document(name: string): ArangoDB$Document<>;
    _exists(
      selector: string | ArangoDB$ObjectWithId
    ): ArangoDB$DocumentMetadata;
    _remove(
      selector: string | ArangoDB$ObjectWithId
    ): ArangoDB$DocumentMetadata;
    _replace(
      selector: string | ArangoDB$ObjectWithId,
      data: { [key: string]: any }
    ): ArangoDB$DocumentMetadata;
    _update(
      selector: string | ArangoDB$ObjectWithId,
      data: { [key: string]: any }
    ): ArangoDB$DocumentMetadata;
    _view(name: string): ArangoDB$ArangoSearchView | null;
    _views(): ArangoDB$ArangoSearchView[];
    _createView(
      name: string,
      type: ArangoDB$ViewType,
      properties: ArangoDB$ArangoSearchViewPropertiesOptions
    ): ArangoDB$ArangoSearchView;
    _dropView(name: string): void;
    _engine(): ArangoDB$EngineType;
    _engineStats(): {
      [key: string]: any
    };
    _executeTransaction(transaction: ArangoDB$Transaction): void;
  }

  declare var npm$namespace$Foxx: {
    route: typeof Foxx$route
  };
  declare interface Foxx$Session {
    uid: string | null;
    created: number;
    data: any;
  }

  declare interface Foxx$SessionStorage {
    new?: () => Foxx$Session;
    fromClient: (sid: string) => Foxx$Session | null;
    forClient: (session: Foxx$Session) => string | null;
  }

  declare interface Foxx$SessionTransport {
    get?: (req: Foxx$Request) => string | null;
    set?: (res: Foxx$Response, sid: string) => void;
    clear?: (res: Foxx$Response) => void;
  }

  declare type Foxx$CollectionSessionStorage = {
    new: () => Foxx$Session,
    save: (session: Foxx$Session) => Foxx$Session,
    clear: (session: Foxx$Session) => boolean,
    prune: () => string[]
  } & Foxx$SessionStorage;

  declare type Foxx$SessionsMiddleware = {
    storage: Foxx$SessionStorage,
    transport: Foxx$SessionTransport[]
  } & Foxx$DelegateMiddleware;

  declare type Foxx$SimpleMiddleware = (
    req: Foxx$Request,
    res: Foxx$Response,
    next: Foxx$NextFunction
  ) => void;

  declare interface Foxx$DelegateMiddleware {
    register: (endpoint: Foxx$Endpoint) => Foxx$SimpleMiddleware;
  }

  declare type Foxx$Middleware =
    | Foxx$SimpleMiddleware
    | Foxx$DelegateMiddleware;

  declare type Foxx$Handler = (req: Foxx$Request, res: Foxx$Response) => void;

  declare type Foxx$NextFunction = () => void;

  declare interface Foxx$ValidationResult<T> {
    value: T;
    error: any;
  }

  declare interface Foxx$Schema {
    isJoi: boolean;
    validate<T>(value: T): Foxx$ValidationResult<T>;
  }

  declare interface Foxx$Model {
    schema: Foxx$Schema;
    fromClient?: (value: any) => any;
    forClient?: (value: any) => any;
  }

  declare interface Foxx$DocumentationRouterOptions {
    mount: string;
    indexFile: string;
    swaggerRoot: string;
    before: (req: Foxx$Request, res: Foxx$Response) => void | false;
  }

  declare interface Foxx$MediaType {
    type: string;
    subtype: string;
    suffix?: string;
    parameters: {
      charset: string
    };
  }

  declare interface Foxx$TypeDefinition {
    fromClient?: (
      body: string | Buffer,
      req: Foxx$Request,
      type: Foxx$MediaType
    ) => any;
    forClient?: (
      body: any
    ) => {
      data: string,
      headers: {
        [key: string]: string | void
      }
    };
  }

  declare type Foxx$Ranges = Array<{
    start: number,
    end: number
  }> & {
    type: string
  };

  declare type Foxx$ConfigurationType =
    | "integer"
    | "boolean"
    | "string"
    | "number"
    | "json"
    | "password"
    | "int"
    | "bool";

  declare interface Foxx$ConfigurationDefinition {
    default?: any;
    type?: Foxx$ConfigurationType;
    description?: string;
    required: boolean;
  }

  declare interface Foxx$DependencyDefinition {
    name: string;
    version: string;
    description?: string;
    required: boolean;
    multiple: boolean;
  }

  declare interface Foxx$AssetDefinition {
    path: string;
    gzip?: boolean;
    type?: string;
  }

  declare interface Foxx$Manifest {
    name?: string;
    version?: string;
    keywords?: string;
    license?: string;
    repository?: {
      type: string,
      url: string
    };
    author: string;
    contributors?: any[];
    description: string;
    thumbnail?: string;
    engines?: {
      [key: string]: string | void
    };
    defaultDocument?: string;
    lib: string;
    main?: string;
    configuration?: {
      [key: string]: Foxx$ConfigurationDefinition
    };
    dependencies?: {
      [key: string]: Foxx$DependencyDefinition
    };
    provides?: {
      [key: string]: string | void
    };
    files?: {
      [key: string]: Foxx$AssetDefinition
    };
    scripts?: {
      [key: string]: string | void
    };
    tests?: string[];
  }

  declare interface Foxx$Context {
    argv: any[];
    basePath: string;
    baseUrl: string;
    collectionPrefix: string;
    configuration: {
      [key: string]: any
    };
    dependencies: {
      [key: string]: any
    };
    isDevelopment: boolean;
    isProduction: boolean;
    manifest: Foxx$Manifest;
    mount: string;
    collection(name: string): ArangoDB$Collection<> | null;
    collectionName(name: string): string;
    createDocumentationRouter(
      opts?:
        | $Shape<Foxx$DocumentationRouterOptions>
        | $PropertyType<Foxx$DocumentationRouterOptions, "before">
        | $PropertyType<Foxx$DocumentationRouterOptions, "swaggerRoot">
    ): Foxx$Router;
    file(name: string): Buffer;
    file(name: string, encoding: string): string;
    fileName(name: string): string;
    registerType(type: string, def: Foxx$TypeDefinition): void;
    use(
      path: string,
      routerOrMiddleware: Foxx$Router | Foxx$Middleware,
      name?: string
    ): Foxx$Endpoint;
    use(
      routerOrMiddleware: Foxx$Router | Foxx$Middleware,
      name?: string
    ): Foxx$Endpoint;
  }

  declare interface Foxx$Request {
    arangoUser: string | null;
    arangoVersion: number;
    baseUrl: string;
    body: any;
    context: Foxx$Context;
    database: string;
    headers: {
      [key: string]: string | void
    };
    hostname: string;
    method: ArangoDB$HttpMethod;
    originalUrl: string;
    path: string;
    pathParams: {
      [key: string]: any
    };
    port: number;
    protocol: string;
    queryParams: {
      [key: string]: any
    };
    rawBody: Buffer;
    remoteAddress: string;
    remoteAddresses: string[];
    remotePort: number;
    secure: boolean;
    session?: Foxx$Session;
    sessionStorage?: Foxx$SessionStorage;
    suffix: string;
    trustProxy: boolean;
    url: string;
    xhr: boolean;
    accepts(types: string[]): string | false;
    accepts(...types: string[]): string | false;
    acceptsCharsets(charsets: string[]): string | false;
    acceptsCharsets(...charsets: string[]): string | false;
    acceptsEncodings(encodings: string[]): string | false;
    acceptsEncodings(...encodings: string[]): string | false;
    acceptsLanguages(languages: string[]): string | false;
    acceptsLanguages(...languages: string[]): string | false;
    cookie(
      name: string,
      options?: {
        secret?: string,
        algorithm?: ArangoDB$HashAlgorithm
      }
    ): string | null;
    get(name: string): string | void;
    header(name: string): string | void;
    is(types: string[]): string;
    is(...types: string[]): string;
    json(): any;
    makeAbsolute(
      path: string,
      query?:
        | string
        | {
            [key: string]: string | void
          }
    ): string;
    param(name: string): any;
    range(size?: number): Foxx$Ranges | number;
    reverse(name: string, params?: { [key: string]: any }): string;
  }

  declare interface Foxx$Response {
    body: Buffer | string;
    context: Foxx$Context;
    headers: {
      [key: string]: any
    };
    statusCode: number;
    attachment(filename?: string): this;
    cookie(
      name: string,
      value: string,
      options?: {
        ttl?: number,
        algorithm?: ArangoDB$HashAlgorithm,
        secret?: string,
        path?: string,
        domain?: string,
        secure?: boolean,
        httpOnly?: boolean
      }
    ): this;
    download(path: string, filename?: string): this;
    getHeader(name: string): string | void;
    json(data: any): this;
    redirect(status: number | ArangoDB$HttpStatus, path: string): this;
    redirect(path: string): this;
    removeHeader(name: string): this;
    send(data: any, type?: string): this;
    sendFile(
      path: string,
      options?: {
        lastModified: boolean
      }
    ): this;
    sendStatus(status: number | ArangoDB$HttpStatus): this;
    setHeader(name: string, value: string): this;
    set(name: string, value: string): this;
    set(headers: {
      [name: string]: string
    }): this;
    status(status: number | ArangoDB$HttpStatus): this;
    throw(
      status: number | ArangoDB$HttpStatus,
      reason: string,
      error: Error
    ): empty;
    throw(
      status: number | ArangoDB$HttpStatus,
      reason: string,
      options?: {
        cause?: Error,
        extra?: any
      }
    ): empty;
    throw(status: number | ArangoDB$HttpStatus, error: Error): empty;
    throw(
      status: number | ArangoDB$HttpStatus,
      options?: {
        cause?: Error,
        extra?: any
      }
    ): empty;
    type(type?: string): string;
    vary(names: string[]): this;
    vary(...names: string[]): this;
    write(data: string | Buffer): this;
  }

  declare interface Foxx$Endpoint {
    header(name: string, schema: Foxx$Schema, description?: string): this;
    header(name: string, description: string): this;
    pathParam(name: string, schema: Foxx$Schema, description?: string): this;
    pathParam(name: string, description: string): this;
    queryParam(name: string, schema: Foxx$Schema, description?: string): this;
    queryParam(name: string, description: string): this;
    body(
      schema: Foxx$Schema | Foxx$Model | [Foxx$Model],
      mimes?: string[],
      description?: string
    ): this;
    body(
      schemaOrMimes: Foxx$Schema | Foxx$Model | [Foxx$Model] | string[],
      description?: string
    ): this;
    body(description: string): this;
    response(
      status: number | ArangoDB$HttpStatus,
      schema: Foxx$Schema | Foxx$Model | [Foxx$Model],
      mimes?: string[],
      description?: string
    ): this;
    response(
      status: number | ArangoDB$HttpStatus,
      mimes: string[],
      description?: string
    ): this;
    response(status: number | ArangoDB$HttpStatus, description: string): this;
    summary(summary: string): this;
    description(description: string): this;
    deprecated(deprecated: boolean): this;
    error(status: number | ArangoDB$HttpStatus, description: string): this;
    tag(...tags: string[]): this;
  }

  declare function Foxx$route(
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    middleware4: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    middleware4: Foxx$SimpleMiddleware,
    middleware5: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    middleware4: Foxx$SimpleMiddleware,
    middleware5: Foxx$SimpleMiddleware,
    middleware6: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    middleware4: Foxx$SimpleMiddleware,
    middleware5: Foxx$SimpleMiddleware,
    middleware6: Foxx$SimpleMiddleware,
    middleware7: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    middleware4: Foxx$SimpleMiddleware,
    middleware5: Foxx$SimpleMiddleware,
    middleware6: Foxx$SimpleMiddleware,
    middleware7: Foxx$SimpleMiddleware,
    middleware8: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare function Foxx$route(
    pathOrMiddleware: string | Foxx$SimpleMiddleware,
    middleware1: Foxx$SimpleMiddleware,
    middleware2: Foxx$SimpleMiddleware,
    middleware3: Foxx$SimpleMiddleware,
    middleware4: Foxx$SimpleMiddleware,
    middleware5: Foxx$SimpleMiddleware,
    middleware6: Foxx$SimpleMiddleware,
    middleware7: Foxx$SimpleMiddleware,
    middleware8: Foxx$SimpleMiddleware,
    middleware9: Foxx$SimpleMiddleware,
    handler: Foxx$Handler,
    name?: string
  ): Foxx$Endpoint;

  declare interface Foxx$Router {
    get: typeof Foxx$route;
    post: typeof Foxx$route;
    put: typeof Foxx$route;
    patch: typeof Foxx$route;
    delete: typeof Foxx$route;
    all: typeof Foxx$route;
    use(
      path: string,
      routerOrMiddleware: Foxx$Router | Foxx$Middleware,
      name?: string
    ): Foxx$Endpoint;
    use(
      routerOrMiddleware: Foxx$Router | Foxx$Middleware,
      name?: string
    ): Foxx$Endpoint;
  }
  declare interface NodeModule {
    context: Foxx$Context;
  }
  declare interface Console {
    logLines(...args: any[]): void;
    errorLines(...args: any[]): void;
    warnLines(...args: any[]): void;
    infoLines(...args: any[]): void;
    debugLines(...args: any[]): void;
    errorStack(err: Error, msg?: string): void;
    warnStack(err: Error, msg?: string): void;
    infoStack(err: Error, msg?: string): void;
    debugStack(err: Error, msg?: string): void;
  }
}
