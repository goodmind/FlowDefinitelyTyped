declare module "signalr" {
  declare class SignalR$ConnectionState {
    constructor(...args: empty): mixed;
    static +Connecting: Class<SignalR$ConnectionState__Connecting> &
      SignalR$ConnectionState__Connecting &
      0; // 0
    static +Connected: Class<SignalR$ConnectionState__Connected> &
      SignalR$ConnectionState__Connected &
      1; // 1
    static +Reconnecting: Class<SignalR$ConnectionState__Reconnecting> &
      SignalR$ConnectionState__Reconnecting &
      2; // 2
    static +Disconnected: Class<SignalR$ConnectionState__Disconnected> &
      SignalR$ConnectionState__Disconnected &
      4; // 4
  }

  declare class SignalR$ConnectionState__Connecting
    mixins SignalR$ConnectionState {}
  declare class SignalR$ConnectionState__Connected
    mixins SignalR$ConnectionState {}
  declare class SignalR$ConnectionState__Reconnecting
    mixins SignalR$ConnectionState {}
  declare class SignalR$ConnectionState__Disconnected
    mixins SignalR$ConnectionState {}

  declare interface SignalR$AvailableEvents {
    onStart: string;
    onStarting: string;
    onReceived: string;
    onError: string;
    onConnectionSlow: string;
    onReconnect: string;
    onStateChanged: string;
    onDisconnect: string;
  }

  declare interface SignalR$Transport {
    name: string;
    supportsKeepAlive(): boolean;
    send(connection: SignalR$SignalR$Connection, data: any): void;
    start(
      connection: SignalR$SignalR$Connection,
      onSuccess: () => void,
      onFailed: (error?: SignalR$ConnectionError) => void
    ): void;
    reconnect(connection: SignalR$SignalR$Connection): void;
    lostConnection(connection: SignalR$SignalR$Connection): void;
    stop(connection: SignalR$SignalR$Connection): void;
    abort(connection: SignalR$SignalR$Connection, async: boolean): void;
  }

  declare interface SignalR$Transports {
    foreverFrame: SignalR$Transport;
    longPolling: SignalR$Transport;
    serverSentEvents: SignalR$Transport;
    webSockets: SignalR$Transport;
  }

  declare interface Hub$Proxy {
    state: any;
    connection: SignalR$Connection;
    hubName: string;
    init(connection: SignalR$Connection, hubName: string): void;
    hasSubscriptions(): boolean;

    /**
     * Wires up a callback to be invoked when a invocation request is received from the server hub.
     * @param eventName The name of the hub event to register the callback for.
     * @param callback The callback to be invoked.
     */
    on(eventName: string, callback: (...msg: any[]) => void): Hub$Proxy;

    /**
     * Removes the callback invocation request from the server hub for the given event name.
     * @param eventName The name of the hub event to unregister the callback for.
     * @param callback The callback to be invoked.
     */
    off(eventName: string, callback: (...msg: any[]) => void): Hub$Proxy;

    /**
     * Invokes a server hub method with the given arguments.
     * @param methodName The name of the server hub method.
     */
    invoke(methodName: string, ...args: any[]): JQueryPromise<any>;
  }

  declare interface Hub$Options {
    qs?: string;
    logging?: boolean;
    useDefaultPath?: boolean;
  }

  declare interface Hub$ClientHubInvocation {
    Hub: string;
    Method: string;
    Args: string;
    State: string;
  }

  declare type Hub$Connection = {
    proxies: {
      [hubName: string]: any
    },
    transport: {
      name: string,
      supportsKeepAlive: () => boolean
    },

    /**
     * Creates a new proxy object for the given hub connection that can be used to invoke
     * methods on server hubs and handle client method invocation requests from the server.
     * @param hubName The name of the hub on the server to create the proxy for.
     */
    createHubProxy(hubName: string): Hub$Proxy,
    clientProtocol: string,
    ajaxDataType: string,
    contentType: string,
    id: string,
    json: JSON,
    logging: boolean,
    url: string,
    qs: string | Object,
    state: number,
    reconnectDelay: number,
    transportConnectTimeout: number,

    /**
     * This should be set by the server in response to the negotiate request (30s default)
     */
    disconnectTimeout: number,

    /**
     * This should be set by the server in response to the negotiate request
     */
    reconnectWindow: number,

    /**
     * Warn user of slow connection if we breach the X% mark of the keep alive timeout
     */
    keepAliveWarnAt: number,

    /**
     * Starts the connection
     */
    start(): JQueryPromise<any>,

    /**
     * Starts the connection
     * @param callback A callback function to execute when the connection has started
     */
    start(callback: () => void): JQueryPromise<any>,

    /**
     * Starts the connection
     * @param options Options map
     */
    start(options: SignalR$ConnectionOptions): JQueryPromise<any>,

    /**
     * Starts the connection
     * @param options Options map
     * @param calback A callback function to execute when the connection has started
     */
    start(
      options: SignalR$ConnectionOptions,
      callback: () => void
    ): JQueryPromise<any>,

    /**
     * Adds a callback that will be invoked before anything is sent over the connection
     * @param calback A callback function to execute before the connection is fully instantiated.
     */
    starting(callback: () => void): Hub$Connection,

    /**
     * Sends data over the connection
     * @param options Options map
     * @param calback The data to send over the connection
     */
    send(data: string): Hub$Connection,

    /**
     * Adds a callback that will be invoked after anything is received over the connection
     * @param calback A callback function to execute when any data is received on the connection
     */
    received(callback: (data: any) => void): Hub$Connection,

    /**
     * Adds a callback that will be invoked when the connection state changes
     * @param calback A callback function to execute when the connection state changes
     */
    stateChanged(
      callback: (change: SignalR$StateChanged) => void
    ): Hub$Connection,

    /**
     * Adds a callback that will be invoked after an error occurs with the connection
     * @param calback A callback function to execute when an error occurs on the connection
     */
    error(callback: (error: SignalR$ConnectionError) => void): Hub$Connection,

    /**
     * Adds a callback that will be invoked when the client disconnects
     * @param calback A callback function to execute when the connection is broken
     */
    disconnected(callback: () => void): Hub$Connection,

    /**
     * Adds a callback that will be invoked when the client detects a slow connection
     * @param calback A callback function to execute when the connection is slow
     */
    connectionSlow(callback: () => void): Hub$Connection,

    /**
     * Adds a callback that will be invoked when the underlying transport begins reconnecting
     * @param calback A callback function to execute when the connection enters a reconnecting state
     */
    reconnecting(callback: () => void): Hub$Connection,

    /**
     * Adds a callback that will be invoked when the underlying transport reconnects
     * @param calback A callback function to execute when the connection is restored
     */
    reconnected(callback: () => void): Hub$Connection,

    /**
     * Stops listening
     * @param async Whether or not to asynchronously abort the connection
     * @param notifyServer Whether we want to notify the server that we are aborting the connection
     */
    stop(async?: boolean, notifyServer?: boolean): Hub$Connection,
    log(msg: string): Hub$Connection,

    /**
     * Checks if url is cross domain
     * @param url The base URL
     * @param against An optional argument to compare the URL against, if not specified it will be set to window.location. If specified it must contain a protocol and a host property.
     */
    isCrossDomain(
      url: string,
      against?: Location | SignalR$SimplifyLocation
    ): boolean,
    hub: Hub$Hub$Connection,
    lastError: SignalR$ConnectionError,
    resources: SignalR$Resources
  } & SignalR$Hub$Connection;

  declare interface Hub$HubCreator {
    /**
     * Creates a new hub connection.
     * @param url [Optional] The hub route url, defaults to "/signalr".
     * @param options [Optional] Settings to use when creating the hubConnection.
     */
    (url?: string, options?: Hub$Options): Hub$Connection;
  }

  declare interface Hub$IHub {
    start(): void;
  }

  declare interface SignalR$StateChanged {
    oldState: number;
    newState: number;
  }

  declare interface SignalR$ConnectionStates {
    connecting: number;
    connected: number;
    reconnecting: number;
    disconnected: number;
  }

  declare interface SignalR$Resources {
    nojQuery: string;
    noTransportOnInit: string;
    errorOnNegotiate: string;
    stoppedWhileLoading: string;
    stoppedWhileNegotiating: string;
    errorParsingNegotiateResponse: string;
    errorDuringStartRequest: string;
    stoppedDuringStartRequest: string;
    errorParsingStartResponse: string;
    invalidStartResponse: string;
    protocolIncompatible: string;
    sendFailed: string;
    parseFailed: string;
    longPollFailed: string;
    eventSourceFailedToConnect: string;
    eventSourceError: string;
    webSocketClosed: string;
    pingServerFailedInvalidResponse: string;
    pingServerFailed: string;
    pingServerFailedStatusCode: string;
    pingServerFailedParse: string;
    noConnectionTransport: string;
    webSocketsInvalidState: string;
    reconnectTimeout: string;
    reconnectWindowTimeout: string;
  }

  declare interface SignalR$AjaxDefaults {
    processData: boolean;
    timeout: number;
    async: boolean;
    global: boolean;
    cache: boolean;
  }

  declare interface SignalR$ConnectionOptions {
    transport?: string | Array<string> | SignalR$Transport;
    callback?: Function;
    waitForPageLoad?: boolean;
    jsonp?: boolean;
    pingInterval?: number;
    withCredentials?: boolean;
  }

  declare interface SignalR$SimplifyLocation {
    protocol: string;
    host: string;
  }

  declare interface SignalR$ConnectionErrorContext {
    readyState: number;
    responseText: string;
    status: number;
    statusText: string;
  }

  declare type SignalR$ConnectionError = {
    context: SignalR$ConnectionErrorContext,
    transport?: string,
    source?: string
  } & Error;

  declare type SignalR$Connection = {
    proxies: {
      [hubName: string]: any
    },
    transport: {
      name: string,
      supportsKeepAlive: () => boolean
    },

    /**
     * Creates a new proxy object for the given hub connection that can be used to invoke
     * methods on server hubs and handle client method invocation requests from the server.
     * @param hubName The name of the hub on the server to create the proxy for.
     */
    createHubProxy(hubName: string): Hub$Proxy,
    clientProtocol: string,
    ajaxDataType: string,
    contentType: string,
    id: string,
    json: JSON,
    logging: boolean,
    url: string,
    qs: string | Object,
    state: number,
    reconnectDelay: number,
    transportConnectTimeout: number,

    /**
     * This should be set by the server in response to the negotiate request (30s default)
     */
    disconnectTimeout: number,

    /**
     * This should be set by the server in response to the negotiate request
     */
    reconnectWindow: number,

    /**
     * Warn user of slow connection if we breach the X% mark of the keep alive timeout
     */
    keepAliveWarnAt: number,

    /**
     * Starts the connection
     */
    start(): JQueryPromise<any>,

    /**
     * Starts the connection
     * @param callback A callback function to execute when the connection has started
     */
    start(callback: () => void): JQueryPromise<any>,

    /**
     * Starts the connection
     * @param options Options map
     */
    start(options: SignalR$ConnectionOptions): JQueryPromise<any>,

    /**
     * Starts the connection
     * @param options Options map
     * @param calback A callback function to execute when the connection has started
     */
    start(
      options: SignalR$ConnectionOptions,
      callback: () => void
    ): JQueryPromise<any>,

    /**
     * Adds a callback that will be invoked before anything is sent over the connection
     * @param calback A callback function to execute before the connection is fully instantiated.
     */
    starting(callback: () => void): SignalR$Connection,

    /**
     * Sends data over the connection
     * @param options Options map
     * @param calback The data to send over the connection
     */
    send(data: string): SignalR$Connection,

    /**
     * Adds a callback that will be invoked after anything is received over the connection
     * @param calback A callback function to execute when any data is received on the connection
     */
    received(callback: (data: any) => void): SignalR$Connection,

    /**
     * Adds a callback that will be invoked when the connection state changes
     * @param calback A callback function to execute when the connection state changes
     */
    stateChanged(
      callback: (change: SignalR$StateChanged) => void
    ): SignalR$Connection,

    /**
     * Adds a callback that will be invoked after an error occurs with the connection
     * @param calback A callback function to execute when an error occurs on the connection
     */
    error(
      callback: (error: SignalR$ConnectionError) => void
    ): SignalR$Connection,

    /**
     * Adds a callback that will be invoked when the client disconnects
     * @param calback A callback function to execute when the connection is broken
     */
    disconnected(callback: () => void): SignalR$Connection,

    /**
     * Adds a callback that will be invoked when the client detects a slow connection
     * @param calback A callback function to execute when the connection is slow
     */
    connectionSlow(callback: () => void): SignalR$Connection,

    /**
     * Adds a callback that will be invoked when the underlying transport begins reconnecting
     * @param calback A callback function to execute when the connection enters a reconnecting state
     */
    reconnecting(callback: () => void): SignalR$Connection,

    /**
     * Adds a callback that will be invoked when the underlying transport reconnects
     * @param calback A callback function to execute when the connection is restored
     */
    reconnected(callback: () => void): SignalR$Connection,

    /**
     * Stops listening
     * @param async Whether or not to asynchronously abort the connection
     * @param notifyServer Whether we want to notify the server that we are aborting the connection
     */
    stop(async?: boolean, notifyServer?: boolean): SignalR$Connection,
    log(msg: string): SignalR$Connection,

    /**
     * Checks if url is cross domain
     * @param url The base URL
     * @param against An optional argument to compare the URL against, if not specified it will be set to window.location. If specified it must contain a protocol and a host property.
     */
    isCrossDomain(
      url: string,
      against?: Location | SignalR$SimplifyLocation
    ): boolean,
    hub: Hub$SignalR$Connection,
    lastError: SignalR$ConnectionError,
    resources: SignalR$Resources
  } & SignalR$SignalR$Connection;

  declare interface SignalR {
    /**
     * Creates a new SignalR connection for the given url
     * @param url The URL of the long polling endpoint
     * @param queryString [Optional] Custom querystring parameters to add to the connection URL. If an object, every non-function member will be added to the querystring. If a string, it's added to the QS as specified.
     * @param logging [Optional] A flag indicating whether connection logging is enabled to the browser console/log. Defaults to false.
     */
    (
      url: string,
      queryString?: string | Object,
      logging?: boolean
    ): SignalR$SignalR$Connection;
    ajaxDefaults: SignalR$SignalR$AjaxDefaults;
    changeState(
      connection: SignalR$SignalR$Connection,
      expectedState: number,
      newState: number
    ): void;
    connectionState: SignalR$SignalR$ConnectionStates;
    events: SignalR$SignalR$AvailableEvents;
    transports: SignalR$SignalR$Transports;
    hub: SignalR$Hub.SignalR$Connection;
    hubConnection: SignalR$Hub.Hub$HubCreator;
    isDisconnecting(connection: SignalR$SignalR$Connection): boolean;

    /**
     * Reinstates the original value of $.connection and returns the signalR object for manual assignment.
     */
    noConflict(): SignalR$SignalR$Connection;

    /**
     * Current SignalR version.
     */
    version: string;
  }
  declare interface JQueryStatic {
    signalR: SignalR;
    connection: SignalR;
    hubConnection: SignalR$Hub.Hub$HubCreator;
  }
}
