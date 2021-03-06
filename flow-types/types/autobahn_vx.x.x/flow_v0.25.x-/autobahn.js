declare module "autobahn" {
  declare export default typeof autobahn;

  declare var npm$namespace$autobahn: {
    util: typeof autobahn$util,
    log: typeof autobahn$log,
    transports: typeof autobahn$transports,
    auth_cra: typeof autobahn$auth_cra,

    Session: typeof autobahn$Session,
    Invocation: typeof autobahn$Invocation,
    Event: typeof autobahn$Event,
    Result: typeof autobahn$Result,
    Error: typeof autobahn$Error,
    Subscription: typeof autobahn$Subscription,
    Registration: typeof autobahn$Registration,
    Publication: typeof autobahn$Publication,
    Connection: typeof autobahn$Connection
  };
  declare export class autobahn$Session {
    id: number;
    realm: string;
    isOpen: boolean;
    features: any;
    caller_disclose_me: boolean;
    publisher_disclose_me: boolean;
    subscriptions: autobahn$ISubscription[][];
    registrations: autobahn$IRegistration[];
    constructor(
      transport: autobahn$ITransport,
      defer: autobahn$DeferFactory,
      challenge: autobahn$OnChallengeHandler
    ): this;
    join(realm: string, authmethods: string[], authid: string): void;
    leave(reason: string, message: string): void;
    call<TResult>(
      procedure: string,
      args?: any[] | any,
      kwargs?: any,
      options?: autobahn$ICallOptions
    ): When.Promise<TResult>;
    publish(
      topic: string,
      args?: any[],
      kwargs?: any,
      options?: autobahn$IPublishOptions
    ): When.Promise<autobahn$IPublication>;
    subscribe(
      topic: string,
      handler: autobahn$SubscribeHandler,
      options?: autobahn$ISubscribeOptions
    ): When.Promise<autobahn$ISubscription>;
    register(
      procedure: string,
      endpoint: autobahn$RegisterEndpoint,
      options?: autobahn$IRegisterOptions
    ): When.Promise<autobahn$IRegistration>;
    unsubscribe(subscription: autobahn$ISubscription): When.Promise<any>;
    unregister(registration: autobahn$IRegistration): When.Promise<any>;
    prefix(prefix: string, uri: string): void;
    resolve(curie: string): string;
    onjoin: (roleFeatures: any) => void;
    onleave: (reason: string, details: any) => void;
  }

  declare interface autobahn$IInvocation {
    caller?: number;
    progress?: (args: any[], kwargs: any) => void;
    procedure: string;
  }

  declare class autobahn$Invocation mixins IInvocation {
    constructor(caller?: number, progress?: boolean, procedure?: string): this;
    procedure: string;
  }

  declare interface autobahn$IEvent {
    publication: number;
    publisher?: number;
    topic: string;
  }

  declare class autobahn$Event mixins IEvent {
    constructor(publication?: number, publisher?: string, topic?: string): this;
    publication: number;
    topic: string;
  }

  declare interface autobahn$IResult {
    args: any[];
    kwargs: any;
  }

  declare class autobahn$Result mixins IResult {
    constructor(args?: any[], kwargs?: any): this;
    args: any[];
    kwargs: any;
  }

  declare interface autobahn$IError {
    error: string;
    args: any[];
    kwargs: any;
  }

  declare class autobahn$Error mixins IError {
    constructor(error?: string, args?: any[], kwargs?: any): this;
    error: string;
    args: any[];
    kwargs: any;
  }

  declare type autobahn$SubscribeHandler = (
    args?: any[] | any,
    kwargs?: any,
    details?: autobahn$IEvent
  ) => void;

  declare interface autobahn$ISubscription {
    topic: string;
    handler: autobahn$SubscribeHandler;
    options: autobahn$ISubscribeOptions;
    session: autobahn$Session;
    id: number;
    active: boolean;
    unsubscribe(): When.Promise<any>;
  }

  declare class autobahn$Subscription mixins ISubscription {
    constructor(
      topic?: string,
      handler?: autobahn$SubscribeHandler,
      options?: autobahn$ISubscribeOptions,
      session?: autobahn$Session,
      id?: number
    ): this;
    handler: autobahn$SubscribeHandler;
    unsubscribe(): When.Promise<any>;
    topic: string;
    options: autobahn$ISubscribeOptions;
    session: autobahn$Session;
    id: number;
    active: boolean;
  }

  declare type autobahn$RegisterEndpoint = (
    args?: any[],
    kwargs?: any,
    details?: autobahn$IInvocation
  ) => void;

  declare interface autobahn$IRegistration {
    procedure: string;
    endpoint: autobahn$RegisterEndpoint;
    options: autobahn$IRegisterOptions;
    session: autobahn$Session;
    id: number;
    active: boolean;
    unregister(): When.Promise<any>;
  }

  declare class autobahn$Registration mixins IRegistration {
    constructor(
      procedure?: string,
      endpoint?: autobahn$RegisterEndpoint,
      options?: autobahn$IRegisterOptions,
      session?: autobahn$Session,
      id?: number
    ): this;
    endpoint: autobahn$RegisterEndpoint;
    unregister(): When.Promise<any>;
    procedure: string;
    options: autobahn$IRegisterOptions;
    session: autobahn$Session;
    id: number;
    active: boolean;
  }

  declare interface autobahn$IPublication {
    id: number;
  }

  declare class autobahn$Publication mixins IPublication {
    constructor(id: number): this;
    id: number;
  }

  declare interface autobahn$ICallOptions {
    timeout?: number;
    receive_progress?: boolean;
    disclose_me?: boolean;
  }

  declare interface autobahn$IPublishOptions {
    acknowledge?: boolean;
    exclude?: number[];
    exclude_authid?: string[];
    exclude_authrole?: string[];
    eligible?: number[];
    eligible_authid?: string[];
    eligible_authrole?: string[];
    retain?: boolean;
    disclose_me?: boolean;
    exclude_me?: boolean;
  }

  declare interface autobahn$ISubscribeOptions {
    match?: string;
    get_retained?: boolean;
  }

  declare interface autobahn$IRegisterOptions {
    disclose_caller?: boolean;
    invoke?: "single" | "roundrobin" | "random" | "first" | "last";
  }

  declare export class autobahn$Connection {
    constructor(options?: autobahn$IConnectionOptions): this;
    isOpen: boolean;
    isRetrying: boolean;
    session: autobahn$Session;
    open(): void;
    close(reason?: string, message?: string): void;
    onopen: (session: autobahn$Session, details: any) => void;
    onclose: (reason: string, details: any) => boolean;
  }

  declare interface autobahn$ITransportDefinition {
    url?: string;
    protocols?: string[];
    type: string;
  }

  declare type autobahn$DeferFactory = () => When.Promise<any>;

  declare type autobahn$OnChallengeHandler = (
    session: autobahn$Session,
    method: string,
    extra: any
  ) => string | When.Promise<string>;

  declare interface autobahn$IConnectionOptions {
    use_es6_promises?: boolean;
    use_deferred?: autobahn$DeferFactory;
    transports?: autobahn$ITransportDefinition[];
    retry_if_unreachable?: boolean;
    max_retries?: number;
    initial_retry_delay?: number;
    max_retry_delay?: number;
    retry_delay_growth?: number;
    retry_delay_jitter?: number;
    url?: string;
    protocols?: string[];
    onchallenge?: autobahn$OnChallengeHandler;
    realm?: string;
    authmethods?: string[];
    authid?: string;
  }

  declare interface autobahn$ICloseEventDetails {
    wasClean: boolean;
    reason: string;
    code: number;
  }

  declare interface autobahn$ITransport {
    onopen: () => void;
    onmessage: (message: any[]) => void;
    onclose: (details: autobahn$ICloseEventDetails) => void;
    send(message: any[]): void;
    close(errorCode: number, reason?: string): void;
  }

  declare interface autobahn$ITransportFactory {
    type: string;
    create(): autobahn$ITransport;
  }

  declare interface autobahn$ITransports {
    register(name: string, factory: any): void;
    isRegistered(name: string): boolean;
    get(name: string): any;
    list(): string[];
  }

  declare interface autobahn$ILog {
    debug(...args: any[]): void;
  }

  declare interface autobahn$IUtil {
    assert(condition: boolean, message: string): void;
  }

  declare interface autobahn$IAuthCra {
    derive_key(
      secret: string,
      salt: string,
      iterations: number,
      keylen: number
    ): string;
    sign(key: string, challenge: string): string;
  }

  declare var autobahn$util: autobahn$IUtil;

  declare var autobahn$log: autobahn$ILog;

  declare var autobahn$transports: autobahn$ITransports;

  declare var autobahn$auth_cra: autobahn$IAuthCra;
}
