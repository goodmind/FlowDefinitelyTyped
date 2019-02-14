declare module "clearbladejs-client" {
  declare var npm$namespace$CbClient: {
    ClearBlade: typeof CbClient$ClearBlade,
    MessagingQOS: typeof CbClient$MessagingQOS,
    QuerySortDirections: typeof CbClient$QuerySortDirections,
    QueryConditions: typeof CbClient$QueryConditions
  };
  declare interface CbClient$Resp {
    error(msg: any): empty;
    success(msg: any): empty;
  }

  declare var CbClient$MessagingQOS: {|
    +MESSAGING_QOS_AT_MOST_ONCE: 0, // 0
    +MESSAGING_QOS_AT_LEAST_ONCE: 1, // 1
    +MESSAGING_QOS_EXACTLY_ONCE: 2 // 2
  |};

  declare interface CbClient$InitOptions {
    systemKey: string;
    systemSecret: string;
    masterSecret?: string;
    logging?: boolean;
    callback?: CbClient$CbCallback;
    email?: string;
    password?: string;
    registerUser?: boolean;
    useUser?: CbClient$APIUser;
    URI?: string;
    messagingURI?: string;
    messagingPort?: number;
    defaultQoS?: CbClient$MessagingQOS;
    callTimeout?: number;
    messagingAuthPort?: number;
  }

  declare interface CbClient$RequestOptions {
    method?: string;
    endpoint?: string;
    body?: string;
    qs?: string;
    URI?: string;
    useUser?: boolean;
    authToken?: string;
    timeout?: number;
    user?: CbClient$APIUser;
  }

  declare interface CbClient$APIUser {
    email: string;
    authToken: string;
  }

  declare type CbClient$CbCallback = (
    error: boolean,
    response: CbClient$Resp
  ) => void;

  declare type CbClient$ClearBladeGlobal = {
    MESSAGING_QOS_AT_MOST_ONCE: MessagingQOS.MESSAGING_QOS_AT_MOST_ONCE,
    MESSAGING_QOS_AT_LEAST_ONCE: MessagingQOS.MESSAGING_QOS_AT_LEAST_ONCE,
    MESSAGING_QOS_EXACTLY_ONCE: MessagingQOS.MESSAGING_QOS_EXACTLY_ONCE,
    request(
      options: CbClient$RequestOptions,
      callback: CbClient$CbCallback
    ): void
  } & ClearBladeInt;

  declare interface CbClient$ClearBladeInt {
    systemKey: string;
    systemSecret: string;
    masterSecret: string;
    URI: string;
    messagingURI: string;
    messagingPort: number;
    logging: boolean;
    defaultQoS: CbClient$MessagingQOS;
    init(options: CbClient$InitOptions): void;
    setUser(email: string, password: string): void;
    registerUser(
      email: string,
      password: string,
      callback: CbClient$CbCallback
    ): void;
    isCurrentUserAuthenticated(callback: CbClient$CbCallback): void;
    logoutUser(callback: CbClient$CbCallback): void;
    loginAnon(callback: CbClient$CbCallback): void;
    loginUser(
      email: string,
      password: string,
      callback: CbClient$CbCallback
    ): void;
    loginUserMqtt(
      email: string,
      password: string,
      callback: CbClient$CbCallback
    ): void;
    registerMasterCallback(callback: CbClient$CbCallback): void;
    Collection(
      options:
        | string
        | CbClient$CollectionOptionsWithName
        | CbClient$CollectionOptionsWithID
    ): CbClient$Collection;
    Query(
      options:
        | string
        | CbClient$QueryOptionsWithName
        | CbClient$QueryOptionsWithID
    ): CbClient$QueryObj;
    Item(
      data: { [key: string]: any },
      collectionID: string | CbClient$ItemOptions
    ): CbClient$Item;
    Code(): CbClient$Code;
    User(): CbClient$AppUser;
    Messaging(
      options: CbClient$MessagingOptions,
      callback: CbClient$CbCallback
    ): CbClient$Messaging;
    MessagingStats(): CbClient$MessagingStats;
    sendPush(
      users: string[],
      payload: { [key: string]: any },
      appId: string,
      callback: CbClient$CbCallback
    ): void;
    getEdges(query: CbClient$Query, callback: CbClient$CbCallback): void;
    Edge(): CbClient$Edge;
    Metrics(): CbClient$Metrics;
    Device(): CbClient$Device;
    Analytics(): CbClient$Analytics;
    Portal(name: string): CbClient$Portal;
    Triggers(): CbClient$Triggers;
    getAllCollections(callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$CollectionOptionsWithName {
    collectionName: string;
  }

  declare interface CbClient$CollectionOptionsWithID {
    collectionID: string;
  }

  declare interface CbClient$Collection {
    name: string;
    endpoint: string;
    isUsingCollectionName: boolean;
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    fetch(query: CbClient$Query, callback: CbClient$CbCallback): void;
    create(newItem: CbClient$Item, callback: CbClient$CbCallback): void;
    update(
      query: CbClient$Query,
      changes: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    remove(query: CbClient$Query, callback: CbClient$CbCallback): void;
    columns(callback: CbClient$CbCallback): void;
    count(query: CbClient$Query, callback: CbClient$CbCallback): void;
  }

  declare var CbClient$QuerySortDirections: {|
    +QUERY_SORT_ASCENDING: "ASC", // "ASC"
    +QUERY_SORT_DESCENDING: "DESC" // "DESC"
  |};

  declare var CbClient$QueryConditions: {|
    +QUERY_EQUAL: "EQ", // "EQ"
    +QUERY_NOTEQUAL: "NEQ", // "NEQ"
    +QUERY_GREATERTHAN: "GT", // "GT"
    +QUERY_GREATERTHAN_EQUAL: "GTE", // "GTE"
    +QUERY_LESSTHAN: "LT", // "LT"
    +QUERY_LESSTHAN_EQUAL: "LTE", // "LTE"
    +QUERY_MATCHES: "RE" // "RE"
  |};

  declare type CbClient$QueryValue = string | number | boolean;

  declare interface CbClient$QueryOptions {
    offset?: number;
    limit?: number;
  }

  declare type CbClient$QueryOptionsWithName = {} & CollectionOptionsWithName &
    QueryOptions;

  declare type CbClient$QueryOptionsWithID = {} & CollectionOptionsWithID &
    QueryOptions;

  declare interface CbClient$Query {
    SELECTCOLUMNS?: string[];
    SORT?: CbClient$QuerySortDirections;
    FILTERS?: CbClient$QueryFilter[];
    PAGESIZE?: number;
    PAGENUM?: number;
  }

  declare interface CbClient$QueryFilter {
    [QueryConditions: string]: CbClient$QueryFilterValue;
  }

  declare interface CbClient$QueryFilterValue {
    [name: string]: CbClient$QueryValue;
  }

  declare interface CbClient$QueryObj {
    endpoint: string;
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    query: CbClient$Query;
    OR: CbClient$Query[];
    offset: number;
    limit: number;
    addSortToQuery(
      query: CbClient$QueryObj,
      direction: CbClient$QuerySortDirections,
      column: string
    ): void;
    addFilterToQuery(
      query: CbClient$QueryObj,
      condition: CbClient$QueryConditions,
      key: string,
      value: CbClient$QueryValue
    ): void;
    ascending(field: string): void;
    descending(field: string): void;
    equalTo(field: string, value: CbClient$QueryValue): void;
    greaterThan(field: string, value: CbClient$QueryValue): void;
    greaterThanEqualTo(field: string, value: CbClient$QueryValue): void;
    lessThan(field: string, value: CbClient$QueryValue): void;
    lessThanEqualTo(field: string, value: CbClient$QueryValue): void;
    notEqualTo(field: string, value: CbClient$QueryValue): void;
    matches(field: string, pattern: RegExp): void;
    or(query: CbClient$QueryObj): void;
    setPage(pageSize: number, pageNum: number): void;
    fetch(callback: CbClient$CbCallback): void;
    update(
      changes: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    columns(columnsArray: string[]): void;
    remove(callback: CbClient$CbCallback): void;
  }

  declare type CbClient$ItemOptions = {} & CollectionOptionsWithID;

  declare interface CbClient$Item {
    data: { [key: string]: any };
    save(callback: CbClient$CbCallback): void;
    refresh(callback: CbClient$CbCallback): void;
    destroy(callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Code {
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    callTimeout: number;
    create(name: string, body: string, callback: CbClient$CbCallback): void;
    update(name: string, body: string, callback: CbClient$CbCallback): void;
    delete(name: string, callback: CbClient$CbCallback): void;
    execute(
      name: string,
      params: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    getCompletedServices(callback: CbClient$CbCallback): void;
    getFailedServices(callback: CbClient$CbCallback): void;
    getAllServices(callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$AppUser {
    user: CbClient$APIUser;
    URI: string;
    endpoint: string;
    systemKey: string;
    systemSecret: string;
    callTimeout: number;
    getUser(callback: CbClient$CbCallback): void;
    setUser(data: { [key: string]: any }, callback: CbClient$CbCallback): void;
    allUsers(query: CbClient$Query, callback: CbClient$CbCallback): void;
    setPassword(
      old_password: string,
      new_password: string,
      callback: CbClient$CbCallback
    ): void;
    count(query: CbClient$Query, callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Messaging {
    user: CbClient$APIUser;
    URI: string;
    endpoint: string;
    systemKey: string;
    systemSecret: string;
    callTimeout: number;
    client: Paho.MQTTClient;
    getMessageHistoryWithTimeFrame(
      topic: string,
      count: number,
      last: number,
      start: number,
      stop: number,
      callback: CbClient$CbCallback
    ): void;
    getMessageHistory(
      topic: string,
      last: number,
      count: number,
      callback: CbClient$CbCallback
    ): void;
    getAndDeleteMessageHistory(
      topic: string,
      count: number,
      last: number,
      start: number,
      stop: number,
      callback: CbClient$CbCallback
    ): void;
    currentTopics(callback: CbClient$CbCallback): void;
    publish(topic: string, payload: { [key: string]: any }): void;
    publishREST(
      topic: string,
      payload: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    subscribe(
      topic: string,
      options: CbClient$MessagingSubscribeOptions,
      messageCallback: CbClient$MessageCallback
    ): void;
    unsubscribe(
      topic: string,
      options: CbClient$MessagingSubscribeOptions
    ): void;
    disconnect(): void;
  }

  declare interface CbClient$CommonMessagingProperties {
    cleanSession?: boolean;
    useSSL?: boolean;
    hosts?: string;
    ports?: string;
    onSuccess?: Function;
    onFailure?: Function;
  }

  declare type CbClient$MessagingOptions = {
    qos?: CbClient$MessagingQOS
  } & CommonMessagingProperties;

  declare type CbClient$MessagingConfiguration = {
    userName: string,
    password: string
  } & CommonMessagingProperties;

  declare type CbClient$MessageCallback = (message: string) => void;

  declare interface CbClient$MessagingSubscribeOptions {
    qos?: CbClient$MessagingQOS;
    invocationContext?: { [key: string]: any };
    onSuccess?: Function;
    onFailure?: Function;
    timeout?: number;
  }

  declare interface CbClient$MessagingStats {
    user: CbClient$APIUser;
    URI: string;
    endpoint: string;
    systemKey: string;
    getAveragePayloadSize(
      topic: string,
      start: number,
      stop: number,
      callback: CbClient$CbCallback
    ): void;
    getOpenConnections(callback: CbClient$CbCallback): void;
    getCurrentSubscribers(topic: string, callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Edge {
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    updateEdgeByName(
      name: string,
      object: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    deleteEdgeByName(name: string, callback: CbClient$CbCallback): void;
    create(
      newEdge: { [key: string]: any },
      name: string,
      callback: CbClient$CbCallback
    ): void;
    columns(callback: CbClient$CbCallback): void;
    count(query: CbClient$Query, callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Metrics {
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    setQuery(query: CbClient$Query): void;
    getStatistics(callback: CbClient$CbCallback): void;
    getStatisticsHistory(callback: CbClient$CbCallback): void;
    getDBConnections(callback: CbClient$CbCallback): void;
    getLogs(callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Device {
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    getDeviceByName(name: string, callback: CbClient$CbCallback): void;
    updateDeviceByName(
      name: string,
      object: { [key: string]: any },
      trigger: boolean,
      callback: CbClient$CbCallback
    ): void;
    deleteDeviceByName(name: string, callback: CbClient$CbCallback): void;
    fetch(query: CbClient$Query, callback: CbClient$CbCallback): void;
    update(
      query: CbClient$Query,
      object: { [key: string]: any },
      trigger: boolean,
      callback: CbClient$CbCallback
    ): void;
    delete(query: CbClient$Query, callback: CbClient$CbCallback): void;
    create(
      newDevice: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    columns(callback: CbClient$CbCallback): void;
    count(query: CbClient$Query, callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Analytics {
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    getStorage(
      filter: CbClient$QueryFilter,
      callback: CbClient$CbCallback
    ): void;
    getCount(filter: CbClient$QueryFilter, callback: CbClient$CbCallback): void;
    getEventList(
      filter: CbClient$QueryFilter,
      callback: CbClient$CbCallback
    ): void;
    getEventTotals(
      filter: CbClient$QueryFilter,
      callback: CbClient$CbCallback
    ): void;
    getUserEvents(
      filter: CbClient$QueryFilter,
      callback: CbClient$CbCallback
    ): void;
  }

  declare interface CbClient$Portal {
    name: string;
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    fetch(callback: CbClient$CbCallback): void;
    update(data: { [key: string]: any }, callback: CbClient$CbCallback): void;
  }

  declare interface CbClient$Triggers {
    user: CbClient$APIUser;
    URI: string;
    systemKey: string;
    systemSecret: string;
    fetchDefinitions(callback: CbClient$CbCallback): void;
    create(
      name: string,
      data: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    update(
      name: string,
      data: { [key: string]: any },
      callback: CbClient$CbCallback
    ): void;
    delete(name: string, callback: CbClient$CbCallback): void;
  }

  declare var CbClient$ClearBlade: CbClient$ClearBladeGlobal;
}
