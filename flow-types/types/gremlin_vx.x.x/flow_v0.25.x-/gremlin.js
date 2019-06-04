declare module "gremlin" {
  declare export { driver, process, structure };

  declare var driver: typeof npm$namespace$driver;

  declare var npm$namespace$driver: {
    RemoteConnection: typeof driver$RemoteConnection,
    RemoteStrategy: typeof driver$RemoteStrategy,
    RemoteTraversal: typeof driver$RemoteTraversal,
    DriverRemoteConnection: typeof driver$DriverRemoteConnection,
    Client: typeof driver$Client,
    ResultSet: typeof driver$ResultSet,
    Authenticator: typeof driver$Authenticator,
    PlainTextSaslAuthenticator: typeof driver$PlainTextSaslAuthenticator
  };
  declare class driver$RemoteConnection {
    constructor(url: string): this;
    open(): Promise<void>;
    submit(bytecode: process$Bytecode): Promise<any>;
    close(): Promise<void>;
  }

  declare class driver$RemoteStrategy mixins process$TraversalStrategy {
    constructor(connection: driver$RemoteConnection): this;
    apply(traversal: driver$RemoteTraversal): Promise<any>;
  }

  declare class driver$RemoteTraversal mixins process$Traversal {
    constructor(
      traversers?: process$Traverser[],
      sideEffects?: process$TraversalSideEffects
    ): this;
  }

  declare class driver$DriverRemoteConnection mixins driver$RemoteConnection {
    constructor(url: string, options?: any): this;
    open(): Promise<void>;
    submit(bytecode: process$Bytecode): Promise<any>;
    close(): Promise<void>;
  }

  declare class driver$Client {
    constructor(url: string, options?: any): this;
    open(): Promise<void>;
    submit(message: process$Bytecode | string, bindings?: any): Promise<any>;
    close(): Promise<void>;
  }

  declare class driver$ResultSet {
    constructor(items: any[], attributes?: MapConstructor): this;
    toArray(): any[];
    first(): any;
  }

  declare class driver$Authenticator {
    constructor(options?: any): this;
    evaluateChallenge(challenge: string): any;
  }

  declare class driver$PlainTextSaslAuthenticator mixins driver$Authenticator {
    constructor(username: string, password: string, authzid?: string): this;
    evaluateChallenge(challenge: string): Promise<any>;
  }
  declare var process: typeof npm$namespace$process;

  declare var npm$namespace$process: {
    traversal: typeof process$traversal,
    barrier: typeof process$barrier,
    cardinality: typeof process$cardinality,
    column: typeof process$column,
    direction: typeof process$direction,
    graphSONVersion: typeof process$graphSONVersion,
    gryoVersion: typeof process$gryoVersion,
    operator: typeof process$operator,
    order: typeof process$order,
    pick: typeof process$pick,
    pop: typeof process$pop,
    scope: typeof process$scope,
    t: typeof process$t,
    statics: typeof process$statics,
    withOptions: typeof process$withOptions,

    Bytecode: typeof process$Bytecode,
    EnumValue: typeof process$EnumValue,
    P: typeof process$P,
    TextP: typeof process$TextP,
    Traversal: typeof process$Traversal,
    TraversalSideEffects: typeof process$TraversalSideEffects,
    TraversalStrategies: typeof process$TraversalStrategies,
    TraversalStrategy: typeof process$TraversalStrategy,
    Traverser: typeof process$Traverser,
    GraphTraversal: typeof process$GraphTraversal,
    GraphTraversalSource: typeof process$GraphTraversalSource,
    Translator: typeof process$Translator,
    AnonymousTraversalSource: typeof process$AnonymousTraversalSource
  };
  declare class process$Bytecode {
    constructor(toClone?: process$Bytecode): this;
    addSource(name: string, values?: $ReadOnlyArray<any>): process$Bytecode;
    addStep(name: string, values?: $ReadOnlyArray<any>): process$Bytecode;
    toString(): string;
  }

  declare class process$EnumValue {
    constructor(typeName: string, elementName: string): this;
    toString(): string;
  }

  declare class process$P {
    constructor(operator: process$EnumValue, value: any, other?: any): this;
    toString(): string;
    and(arg?: any): process$P;
    or(arg?: any): process$P;
    static between(...args: any[]): process$P;
    static eq(...args: any[]): process$P;
    static gt(...args: any[]): process$P;
    static gte(...args: any[]): process$P;
    static inside(...args: any[]): process$P;
    static lt(...args: any[]): process$P;
    static lte(...args: any[]): process$P;
    static neq(...args: any[]): process$P;
    static not(...args: any[]): process$P;
    static outside(...args: any[]): process$P;
    static test(...args: any[]): process$P;
    static within(...args: any[]): process$P;
    static without(...args: any[]): process$P;
  }

  declare class process$TextP {
    constructor(operator: process$EnumValue, value: string, other?: any): this;
    toString(): string;
    and(arg?: any): process$P;
    or(arg?: any): process$P;
    static containing(...args: any[]): process$TextP;
    static endingWith(...args: any[]): process$TextP;
    static notContaining(...args: any[]): process$TextP;
    static notEndingWith(...args: any[]): process$TextP;
    static notStartingWith(...args: any[]): process$TextP;
    static startingWith(...args: any[]): process$TextP;
  }

  declare class process$Traversal {
    constructor(
      graph: structure$Graph | null,
      traversalStrategies: process$TraversalStrategies | null,
      bytecode: process$Bytecode
    ): this;
    getBytecode(): process$Bytecode;
    toList(): Promise<process$Traverser[]>;
    iterate(): Promise<void>;
    next(): Promise<{
      value: any,
      done: boolean
    }>;
    toString(): string;
  }

  declare class process$TraversalSideEffects {}

  declare class process$TraversalStrategies {
    constructor(parent?: process$TraversalStrategies): this;
    addStrategy(strategy: process$TraversalStrategy): void;
    applyStrategies(traversal: process$Traversal): Promise<process$Traversal>;
  }

  declare class process$TraversalStrategy {
    apply(traversal: process$Traversal): Promise<process$Traversal>;
  }

  declare class process$Traverser {
    constructor(object: any, bulk?: number): this;
  }

  declare var process$barrier: {
    normsack: process$EnumValue
  };

  declare var process$cardinality: {
    list: process$EnumValue,
    set: process$EnumValue,
    single: process$EnumValue
  };

  declare var process$column: {
    keys: process$EnumValue,
    values: process$EnumValue
  };

  declare var process$direction: {
    both: process$EnumValue,
    in: process$EnumValue,
    out: process$EnumValue
  };

  declare var process$graphSONVersion: {
    v1_0: process$EnumValue,
    v2_0: process$EnumValue,
    v3_0: process$EnumValue
  };

  declare var process$gryoVersion: {
    v1_0: process$EnumValue,
    v3_0: process$EnumValue
  };

  declare interface process$Operator {
    addall: process$EnumValue;
    and: process$EnumValue;
    assign: process$EnumValue;
    div: process$EnumValue;
    max: process$EnumValue;
    min: process$EnumValue;
    minus: process$EnumValue;
    mult: process$EnumValue;
    or: process$EnumValue;
    sum: process$EnumValue;
    sumlong: process$EnumValue;
  }

  declare var process$operator: process$Operator;

  declare var process$order: {
    asc: process$EnumValue,
    decr: process$EnumValue,
    desc: process$EnumValue,
    incr: process$EnumValue,
    shuffle: process$EnumValue
  };

  declare var process$pick: {
    any: process$EnumValue,
    none: process$EnumValue
  };

  declare var process$pop: {
    all: process$EnumValue,
    first: process$EnumValue,
    last: process$EnumValue,
    mixed: process$EnumValue
  };

  declare var process$scope: {
    global: process$EnumValue,
    local: process$EnumValue
  };

  declare var process$t: {
    id: process$EnumValue,
    key: process$EnumValue,
    label: process$EnumValue,
    value: process$EnumValue
  };

  declare class process$GraphTraversal mixins process$Traversal {
    constructor(
      graph: structure$Graph | null,
      traversalStrategies: process$TraversalStrategies | null,
      bytecode: process$Bytecode
    ): this;
    V(...args: any[]): process$GraphTraversal;
    addE(...args: any[]): process$GraphTraversal;
    addV(...args: any[]): process$GraphTraversal;
    aggregate(...args: any[]): process$GraphTraversal;
    and(...args: any[]): process$GraphTraversal;
    as(...args: any[]): process$GraphTraversal;
    barrier(...args: any[]): process$GraphTraversal;
    both(...args: any[]): process$GraphTraversal;
    bothE(...args: any[]): process$GraphTraversal;
    bothV(...args: any[]): process$GraphTraversal;
    branch(...args: any[]): process$GraphTraversal;
    by(...args: any[]): process$GraphTraversal;
    cap(...args: any[]): process$GraphTraversal;
    choose(...args: any[]): process$GraphTraversal;
    coalesce(...args: any[]): process$GraphTraversal;
    coin(...args: any[]): process$GraphTraversal;
    connectedComponent(...args: any[]): process$GraphTraversal;
    constant(...args: any[]): process$GraphTraversal;
    count(...args: any[]): process$GraphTraversal;
    cyclicPath(...args: any[]): process$GraphTraversal;
    dedup(...args: any[]): process$GraphTraversal;
    drop(...args: any[]): process$GraphTraversal;
    emit(...args: any[]): process$GraphTraversal;
    filter(...args: any[]): process$GraphTraversal;
    flatMap(...args: any[]): process$GraphTraversal;
    fold(...args: any[]): process$GraphTraversal;
    from_(...args: any[]): process$GraphTraversal;
    group(...args: any[]): process$GraphTraversal;
    groupCount(...args: any[]): process$GraphTraversal;
    has(...args: any[]): process$GraphTraversal;
    hasId(...args: any[]): process$GraphTraversal;
    hasKey(...args: any[]): process$GraphTraversal;
    hasLabel(...args: any[]): process$GraphTraversal;
    hasNot(...args: any[]): process$GraphTraversal;
    hasValue(...args: any[]): process$GraphTraversal;
    id(...args: any[]): process$GraphTraversal;
    identity(...args: any[]): process$GraphTraversal;
    in_(...args: any[]): process$GraphTraversal;
    inE(...args: any[]): process$GraphTraversal;
    inV(...args: any[]): process$GraphTraversal;
    index(...args: any[]): process$GraphTraversal;
    inject(...args: any[]): process$GraphTraversal;
    is(...args: any[]): process$GraphTraversal;
    key(...args: any[]): process$GraphTraversal;
    label(...args: any[]): process$GraphTraversal;
    limit(...args: any[]): process$GraphTraversal;
    local(...args: any[]): process$GraphTraversal;
    loops(...args: any[]): process$GraphTraversal;
    map(...args: any[]): process$GraphTraversal;
    match(...args: any[]): process$GraphTraversal;
    math(...args: any[]): process$GraphTraversal;
    max(...args: any[]): process$GraphTraversal;
    mean(...args: any[]): process$GraphTraversal;
    min(...args: any[]): process$GraphTraversal;
    not(...args: any[]): process$GraphTraversal;
    option(...args: any[]): process$GraphTraversal;
    optional(...args: any[]): process$GraphTraversal;
    or(...args: any[]): process$GraphTraversal;
    order(...args: any[]): process$GraphTraversal;
    otherV(...args: any[]): process$GraphTraversal;
    out(...args: any[]): process$GraphTraversal;
    outE(...args: any[]): process$GraphTraversal;
    outV(...args: any[]): process$GraphTraversal;
    pageRank(...args: any[]): process$GraphTraversal;
    path(...args: any[]): process$GraphTraversal;
    peerPressure(...args: any[]): process$GraphTraversal;
    profile(...args: any[]): process$GraphTraversal;
    program(...args: any[]): process$GraphTraversal;
    project(...args: any[]): process$GraphTraversal;
    properties(...args: any[]): process$GraphTraversal;
    property(...args: any[]): process$GraphTraversal;
    propertyMap(...args: any[]): process$GraphTraversal;
    range(...args: any[]): process$GraphTraversal;
    read(...args: any[]): process$GraphTraversal;
    repeat(...args: any[]): process$GraphTraversal;
    sack(...args: any[]): process$GraphTraversal;
    sample(...args: any[]): process$GraphTraversal;
    select(...args: any[]): process$GraphTraversal;
    shortestPath(...args: any[]): process$GraphTraversal;
    sideEffect(...args: any[]): process$GraphTraversal;
    simplePath(...args: any[]): process$GraphTraversal;
    skip(...args: any[]): process$GraphTraversal;
    store(...args: any[]): process$GraphTraversal;
    subgraph(...args: any[]): process$GraphTraversal;
    sum(...args: any[]): process$GraphTraversal;
    tail(...args: any[]): process$GraphTraversal;
    timeLimit(...args: any[]): process$GraphTraversal;
    times(...args: any[]): process$GraphTraversal;
    to(...args: any[]): process$GraphTraversal;
    toE(...args: any[]): process$GraphTraversal;
    toV(...args: any[]): process$GraphTraversal;
    tree(...args: any[]): process$GraphTraversal;
    unfold(...args: any[]): process$GraphTraversal;
    union(...args: any[]): process$GraphTraversal;
    until(...args: any[]): process$GraphTraversal;
    value(...args: any[]): process$GraphTraversal;
    valueMap(...args: any[]): process$GraphTraversal;
    values(...args: any[]): process$GraphTraversal;
    where(...args: any[]): process$GraphTraversal;
    with_(...args: any[]): process$GraphTraversal;
    write(...args: any[]): process$GraphTraversal;
  }

  declare class process$GraphTraversalSource {
    constructor(
      graph: structure$Graph | null,
      traversalStrategies: process$TraversalStrategies | null,
      bytecode: process$Bytecode
    ): this;
    withRemote(
      remoteConnection: driver$RemoteConnection
    ): process$GraphTraversalSource;
    toString(): string;
    with_(...args: any[]): process$GraphTraversalSource;
    withBulk(...args: any[]): process$GraphTraversalSource;
    withPath(...args: any[]): process$GraphTraversalSource;
    withSack(...args: any[]): process$GraphTraversalSource;
    withSideEffect(...args: any[]): process$GraphTraversalSource;
    withStrategies(...args: any[]): process$GraphTraversalSource;
    withoutStrategies(...args: any[]): process$GraphTraversalSource;
    E(...args: any[]): process$GraphTraversal;
    V(...args: any[]): process$GraphTraversal;
    addE(...args: any[]): process$GraphTraversal;
    addV(...args: any[]): process$GraphTraversal;
    inject(...args: any[]): process$GraphTraversal;
    io(...args: any[]): process$GraphTraversal;
  }

  declare interface process$Statics {
    V: (...args: any[]) => process$GraphTraversal;
    addE: (...args: any[]) => process$GraphTraversal;
    addV: (...args: any[]) => process$GraphTraversal;
    aggregate: (...args: any[]) => process$GraphTraversal;
    and: (...args: any[]) => process$GraphTraversal;
    as: (...args: any[]) => process$GraphTraversal;
    barrier: (...args: any[]) => process$GraphTraversal;
    both: (...args: any[]) => process$GraphTraversal;
    bothE: (...args: any[]) => process$GraphTraversal;
    bothV: (...args: any[]) => process$GraphTraversal;
    branch: (...args: any[]) => process$GraphTraversal;
    cap: (...args: any[]) => process$GraphTraversal;
    choose: (...args: any[]) => process$GraphTraversal;
    coalesce: (...args: any[]) => process$GraphTraversal;
    coin: (...args: any[]) => process$GraphTraversal;
    constant: (...args: any[]) => process$GraphTraversal;
    count: (...args: any[]) => process$GraphTraversal;
    cyclicPath: (...args: any[]) => process$GraphTraversal;
    dedup: (...args: any[]) => process$GraphTraversal;
    drop: (...args: any[]) => process$GraphTraversal;
    emit: (...args: any[]) => process$GraphTraversal;
    filter: (...args: any[]) => process$GraphTraversal;
    flatMap: (...args: any[]) => process$GraphTraversal;
    fold: (...args: any[]) => process$GraphTraversal;
    group: (...args: any[]) => process$GraphTraversal;
    groupCount: (...args: any[]) => process$GraphTraversal;
    has: (...args: any[]) => process$GraphTraversal;
    hasId: (...args: any[]) => process$GraphTraversal;
    hasKey: (...args: any[]) => process$GraphTraversal;
    hasLabel: (...args: any[]) => process$GraphTraversal;
    hasNot: (...args: any[]) => process$GraphTraversal;
    hasValue: (...args: any[]) => process$GraphTraversal;
    id: (...args: any[]) => process$GraphTraversal;
    identity: (...args: any[]) => process$GraphTraversal;
    in_: (...args: any[]) => process$GraphTraversal;
    inE: (...args: any[]) => process$GraphTraversal;
    inV: (...args: any[]) => process$GraphTraversal;
    index: (...args: any[]) => process$GraphTraversal;
    inject: (...args: any[]) => process$GraphTraversal;
    is: (...args: any[]) => process$GraphTraversal;
    key: (...args: any[]) => process$GraphTraversal;
    label: (...args: any[]) => process$GraphTraversal;
    limit: (...args: any[]) => process$GraphTraversal;
    local: (...args: any[]) => process$GraphTraversal;
    loops: (...args: any[]) => process$GraphTraversal;
    map: (...args: any[]) => process$GraphTraversal;
    match: (...args: any[]) => process$GraphTraversal;
    math: (...args: any[]) => process$GraphTraversal;
    max: (...args: any[]) => process$GraphTraversal;
    mean: (...args: any[]) => process$GraphTraversal;
    min: (...args: any[]) => process$GraphTraversal;
    not: (...args: any[]) => process$GraphTraversal;
    optional: (...args: any[]) => process$GraphTraversal;
    or: (...args: any[]) => process$GraphTraversal;
    order: (...args: any[]) => process$GraphTraversal;
    otherV: (...args: any[]) => process$GraphTraversal;
    out: (...args: any[]) => process$GraphTraversal;
    outE: (...args: any[]) => process$GraphTraversal;
    outV: (...args: any[]) => process$GraphTraversal;
    path: (...args: any[]) => process$GraphTraversal;
    project: (...args: any[]) => process$GraphTraversal;
    properties: (...args: any[]) => process$GraphTraversal;
    property: (...args: any[]) => process$GraphTraversal;
    propertyMap: (...args: any[]) => process$GraphTraversal;
    range: (...args: any[]) => process$GraphTraversal;
    repeat: (...args: any[]) => process$GraphTraversal;
    sack: (...args: any[]) => process$GraphTraversal;
    sample: (...args: any[]) => process$GraphTraversal;
    select: (...args: any[]) => process$GraphTraversal;
    sideEffect: (...args: any[]) => process$GraphTraversal;
    simplePath: (...args: any[]) => process$GraphTraversal;
    skip: (...args: any[]) => process$GraphTraversal;
    store: (...args: any[]) => process$GraphTraversal;
    subgraph: (...args: any[]) => process$GraphTraversal;
    sum: (...args: any[]) => process$GraphTraversal;
    tail: (...args: any[]) => process$GraphTraversal;
    timeLimit: (...args: any[]) => process$GraphTraversal;
    times: (...args: any[]) => process$GraphTraversal;
    to: (...args: any[]) => process$GraphTraversal;
    toE: (...args: any[]) => process$GraphTraversal;
    toV: (...args: any[]) => process$GraphTraversal;
    tree: (...args: any[]) => process$GraphTraversal;
    unfold: (...args: any[]) => process$GraphTraversal;
    union: (...args: any[]) => process$GraphTraversal;
    until: (...args: any[]) => process$GraphTraversal;
    value: (...args: any[]) => process$GraphTraversal;
    valueMap: (...args: any[]) => process$GraphTraversal;
    values: (...args: any[]) => process$GraphTraversal;
    where: (...args: any[]) => process$GraphTraversal;
  }

  declare var process$statics: process$Statics;

  declare class process$Translator {
    constructor(
      traversalSource:
        | process$AnonymousTraversalSource
        | process$GraphTraversalSource
    ): this;
    getTraversalSource(): process$Translator;
    of(
      traversalSource:
        | process$AnonymousTraversalSource
        | process$GraphTraversalSource
    ): void;
    translate(bytecode: process$Bytecode): string;
  }

  declare function process$traversal(): process$AnonymousTraversalSource;

  declare class process$AnonymousTraversalSource {
    static traversal(): process$AnonymousTraversalSource;
    withRemote(
      remoteConnection: driver$RemoteConnection
    ): process$GraphTraversalSource;
    withGraph(graph: structure$Graph): process$GraphTraversalSource;
  }

  declare interface process$WithOptions {
    tokens: string;
    none: number;
    ids: number;
    labels: number;
    keys: number;
    values: number;
    all: number;
    indexer: string;
    list: number;
    map: number;
  }

  declare var process$withOptions: process$WithOptions;
  declare var structure: typeof npm$namespace$structure;

  declare var npm$namespace$structure: {
    toLong: typeof structure$toLong,

    Element: typeof structure$Element,
    GraphSONReader: typeof structure$GraphSONReader,
    GraphSONWriter: typeof structure$GraphSONWriter,
    Edge: typeof structure$Edge,
    Graph: typeof structure$Graph,
    Path: typeof structure$Path,
    Property: typeof structure$Property,
    Vertex: typeof structure$Vertex,
    VertexProperty: typeof structure$VertexProperty,
    Long: typeof structure$Long
  };
  declare class structure$Element {
    constructor(id: number, label: string): this;
    equals(other: structure$Element): boolean;
  }

  declare class structure$GraphSONReader {
    constructor(options?: any): this;
    read(obj: any): any;
  }

  declare class structure$GraphSONWriter {
    constructor(options?: any): this;
    adaptObject(value: any): any;
    write(obj: any): string;
  }

  declare class structure$Edge mixins structure$Element {
    constructor(
      id: number,
      outV: structure$Vertex,
      label: string,
      inV: structure$Vertex,
      properties?: structure$Property[]
    ): this;
    toString(): string;
  }

  declare class structure$Graph {
    traversal(): process$GraphTraversalSource;
    toString(): string;
  }

  declare class structure$Path {
    constructor(labels: string[], objects: any[]): this;
    toString(): string;
    equals(other: structure$Path): boolean;
  }

  declare class structure$Property {
    constructor(key: string, value: any): this;
    toString(): string;
    equals(other: structure$Property): boolean;
  }

  declare class structure$Vertex mixins structure$Element {
    constructor(
      id: number,
      label: string,
      properties?: structure$VertexProperty[]
    ): this;
    toString(): string;
  }

  declare class structure$VertexProperty mixins structure$Element {
    constructor(
      id: number,
      label: string,
      value: any,
      properties?: structure$Property[]
    ): this;
    toString(): string;
  }

  declare function structure$toLong(value: number | string): structure$Long;

  declare class structure$Long {
    constructor(value: number | string): this;
  }
}
