declare module "clearbladejs-client" {
  declare var npm$namespace$CbClient: {
    ClearBlade: typeof CbClient$ClearBlade
  };
  declare interface CbClient$Resp {
    error(msg: any): empty;
    success(msg: any): empty;
  }

  declare class CbClient$MessagingQOS {
    constructor(...args: empty): mixed;
    static +MESSAGING_QOS_AT_MOST_ONCE: Class<CbClient$MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE> &
      CbClient$MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE &
      0; // 0
    static +MESSAGING_QOS_AT_LEAST_ONCE: Class<CbClient$MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE> &
      CbClient$MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE &
      1; // 1
    static +MESSAGING_QOS_EXACTLY_ONCE: Class<CbClient$MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE> &
      CbClient$MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE &
      2; // 2
  }

  declare class CbClient$MessagingQOS__MESSAGING_QOS_AT_MOST_ONCE
    mixins CbClient$MessagingQOS {}
  declare class CbClient$MessagingQOS__MESSAGING_QOS_AT_LEAST_ONCE
    mixins CbClient$MessagingQOS {}
  declare class CbClient$MessagingQOS__MESSAGING_QOS_EXACTLY_ONCE
    mixins CbClient$MessagingQOS {}

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
    MESSAGING_QOS_AT_MOST_ONCE: CbClient$MessagingQOS.MESSAGING_QOS_AT_MOST_ONCE,
    MESSAGING_QOS_AT_LEAST_ONCE: CbClient$MessagingQOS.MESSAGING_QOS_AT_LEAST_ONCE,
    MESSAGING_QOS_EXACTLY_ONCE: CbClient$MessagingQOS.MESSAGING_QOS_EXACTLY_ONCE,
    request(
      options: CbClient$RequestOptions,
      callback: CbClient$CbCallback
    ): void
  } & CbClient$ClearBladeInt;

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
    CbClient$Collection(
      options:
        | string
        | CbClient$CollectionOptionsWithName
        | CbClient$CollectionOptionsWithID
    ): CbClient$Collection;
    CbClient$Query(
      options:
        | string
        | CbClient$QueryOptionsWithName
        | CbClient$QueryOptionsWithID
    ): CbClient$QueryObj;
    CbClient$Item(
      data: { [key: string]: any },
      collectionID: string | CbClient$ItemOptions
    ): CbClient$Item;
    CbClient$Code(): CbClient$Code;
    User(): CbClient$AppUser;
    CbClient$Messaging(
      options: CbClient$MessagingOptions,
      callback: CbClient$CbCallback
    ): CbClient$Messaging;
    CbClient$MessagingStats(): CbClient$MessagingStats;
    sendPush(
      users: string[],
      payload: { [key: string]: any },
      appId: string,
      callback: CbClient$CbCallback
    ): void;
    getEdges(query: CbClient$Query, callback: CbClient$CbCallback): void;
    CbClient$Edge(): CbClient$Edge;
    CbClient$Metrics(): CbClient$Metrics;
    CbClient$Device(): CbClient$Device;
    CbClient$Analytics(): CbClient$Analytics;
    CbClient$Portal(name: string): CbClient$Portal;
    CbClient$Triggers(): CbClient$Triggers;
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

  declare class CbClient$QuerySortDirections {
    constructor(...args: empty): mixed;
    static +QUERY_SORT_ASCENDING: Class<CbClient$QuerySortDirections__QUERY_SORT_ASCENDING> &
      CbClient$QuerySortDirections__QUERY_SORT_ASCENDING &
      "ASC"; // "ASC"
    static +QUERY_SORT_DESCENDING: Class<CbClient$QuerySortDirections__QUERY_SORT_DESCENDING> &
      CbClient$QuerySortDirections__QUERY_SORT_DESCENDING &
      "DESC"; // "DESC"
  }

  declare class CbClient$QuerySortDirections__QUERY_SORT_ASCENDING
    mixins CbClient$QuerySortDirections {}
  declare class CbClient$QuerySortDirections__QUERY_SORT_DESCENDING
    mixins CbClient$QuerySortDirections {}

  declare class CbClient$QueryConditions {
    constructor(...args: empty): mixed;
    static +QUERY_EQUAL: Class<CbClient$QueryConditions__QUERY_EQUAL> &
      CbClient$QueryConditions__QUERY_EQUAL &
      "EQ"; // "EQ"
    static +QUERY_NOTEQUAL: Class<CbClient$QueryConditions__QUERY_NOTEQUAL> &
      CbClient$QueryConditions__QUERY_NOTEQUAL &
      "NEQ"; // "NEQ"
    static +QUERY_GREATERTHAN: Class<CbClient$QueryConditions__QUERY_GREATERTHAN> &
      CbClient$QueryConditions__QUERY_GREATERTHAN &
      "GT"; // "GT"
    static +QUERY_GREATERTHAN_EQUAL: Class<CbClient$QueryConditions__QUERY_GREATERTHAN_EQUAL> &
      CbClient$QueryConditions__QUERY_GREATERTHAN_EQUAL &
      "GTE"; // "GTE"
    static +QUERY_LESSTHAN: Class<CbClient$QueryConditions__QUERY_LESSTHAN> &
      CbClient$QueryConditions__QUERY_LESSTHAN &
      "LT"; // "LT"
    static +QUERY_LESSTHAN_EQUAL: Class<CbClient$QueryConditions__QUERY_LESSTHAN_EQUAL> &
      CbClient$QueryConditions__QUERY_LESSTHAN_EQUAL &
      "LTE"; // "LTE"
    static +QUERY_MATCHES: Class<CbClient$QueryConditions__QUERY_MATCHES> &
      CbClient$QueryConditions__QUERY_MATCHES &
      "RE"; // "RE"
  }

  declare class CbClient$QueryConditions__QUERY_EQUAL
    mixins CbClient$QueryConditions {}
  declare class CbClient$QueryConditions__QUERY_NOTEQUAL
    mixins CbClient$QueryConditions {}
  declare class CbClient$QueryConditions__QUERY_GREATERTHAN
    mixins CbClient$QueryConditions {}
  declare class CbClient$QueryConditions__QUERY_GREATERTHAN_EQUAL
    mixins CbClient$QueryConditions {}
  declare class CbClient$QueryConditions__QUERY_LESSTHAN
    mixins CbClient$QueryConditions {}
  declare class CbClient$QueryConditions__QUERY_LESSTHAN_EQUAL
    mixins CbClient$QueryConditions {}
  declare class CbClient$QueryConditions__QUERY_MATCHES
    mixins CbClient$QueryConditions {}

  declare type CbClient$QueryValue = string | number | boolean;

  declare interface CbClient$QueryOptions {
    offset?: number;
    limit?: number;
  }

  declare type CbClient$QueryOptionsWithName = {} & CbClient$CollectionOptionsWithName &
    CbClient$QueryOptions;

  declare type CbClient$QueryOptionsWithID = {} & CbClient$CollectionOptionsWithID &
    CbClient$QueryOptions;

  declare interface CbClient$Query {
    SELECTCOLUMNS?: string[];
    SORT?: CbClient$QuerySortDirections;
    FILTERS?: CbClient$QueryFilter[];
    PAGESIZE?: number;
    PAGENUM?: number;
  }

  declare interface CbClient$QueryFilter {
    [CbClient$QueryConditions: string]: CbClient$QueryFilterValue;
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

  declare type CbClient$ItemOptions = {} & CbClient$CollectionOptionsWithID;

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
    client: Paho.MQTT.Client;
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
  } & CbClient$CommonMessagingProperties;

  declare type CbClient$MessagingConfiguration = {
    userName: string,
    password: string
  } & CbClient$CommonMessagingProperties;

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
