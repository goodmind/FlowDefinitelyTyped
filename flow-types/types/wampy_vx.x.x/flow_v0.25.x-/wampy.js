declare module "wampy" {
  declare type wampy$Dict = {
    [key: string]: any
  };

  declare type wampy$Callback = () => void;

  declare type wampy$ErrorCallback = (args: wampy$ErrorArgs) => void;

  declare type wampy$EventCallback = (args: wampy$DataArgs) => void;

  declare type wampy$SuccessCallback = (args: wampy$DataArgs) => void;

  declare type wampy$RPCCallback = (
    args: wampy$DataArgs
  ) => wampy$RPCResult | void;

  declare type wampy$ChallengeCallback = (
    auth_method: string,
    extra: wampy$Dict
  ) => string;

  declare type wampy$Payload =
    | wampy$Args
    | wampy$Dict
    | string
    | number
    | boolean
    | any[]
    | null;

  declare interface wampy$Args {
    argsList: any[];
    argsDict: wampy$Dict;
  }

  declare interface wampy$ErrorArgs {
    error: string;
    details: wampy$Dict;
  }

  declare type wampy$DataArgs = {
    details: wampy$Dict
  } & wampy$Args;

  declare interface wampy$RPCOptions {
    process?: boolean;
  }

  declare type wampy$RPCResult = {
    options: wampy$RPCOptions
  } & wampy$Args;

  declare interface wampy$SubscribeCallbacksHash {
    onSuccess?: wampy$Callback;
    onError?: wampy$ErrorCallback;
    onEvent?: wampy$EventCallback;
  }

  declare type wampy$UnsubscibeCallbacksHash = {} & wampy$SubscribeCallbacksHash;

  declare interface wampy$PublishCallbacksHash {
    onSuccess?: wampy$Callback;
    onError?: wampy$ErrorCallback;
  }

  declare interface wampy$CallCallbacksHash {
    onSuccess?: wampy$SuccessCallback;
    onError?: wampy$ErrorCallback;
  }

  declare interface wampy$CancelCallbacksHash {
    onSuccess?: wampy$Callback;
    onError?: wampy$Callback;
  }

  declare interface wampy$RegisterCallbacksHash {
    rpc: wampy$RPCCallback;
    onSuccess?: wampy$Callback;
    onError?: wampy$ErrorCallback;
  }

  declare interface wampy$UnregisterCallbacksHash {
    onSuccess?: wampy$Callback;
    onError?: wampy$ErrorCallback;
  }

  declare interface wampy$AdvancedOptions {
    exclude?: number | number[];
    eligible?: number | number[];
    exclude_me?: boolean;
    disclose_me?: boolean;
  }

  declare type wampy$PublishAdvancedOptions = {
    exclude_authid?: string | string[],
    exclude_authrole?: string | string[],
    eligible_authid?: string | string[],
    eligible_authrole?: string | string[]
  } & wampy$AdvancedOptions;

  declare interface wampy$CallAdvancedOptions {
    disclose_me?: boolean;
    receive_progress?: boolean;
    timeout?: number;
  }

  declare interface wampy$CancelAdvancedOptions {
    mode?: "skip" | "kill" | "killnowait";
  }

  declare interface wampy$RegisterAdvancedOptions {
    match?: "prefix" | "wildcard";
    invoke?: "single" | "roundrobin" | "random" | "first" | "last";
  }

  declare interface wampy$WampyOptions {
    autoReconnect?: boolean;
    reconnectInterval?: number;
    maxRetries?: number;
    realm?: string;
    helloCustomDetails?: any;
    authid?: string;
    authmethods?: string[];
    onChallenge?: wampy$ChallengeCallback;
    onConnect?: wampy$Callback;
    onClose?: wampy$Callback;
    onError?: wampy$Callback;
    onReconnect?: wampy$Callback;
    onReconnectSuccess?: wampy$Callback;
    ws?: any;
    serializer?: any;
  }

  declare interface wampy$WampyOpStatus {
    code: number;
    description: string;
    reqId?: number;
  }

  declare interface wampy$WampyStatic {
    new(options?: wampy$WampyOptions): wampy$Wampy;
    new(url: string, options?: wampy$WampyOptions): wampy$Wampy;
  }

  declare interface wampy$Wampy {
    constructor: wampy$WampyStatic;
    options(opts?: wampy$WampyOptions): wampy$WampyOptions | wampy$Wampy;
    getOpStatus(): wampy$WampyOpStatus;
    getSessionId(): number;
    connect(url?: string): wampy$Wampy;
    disconnect(): wampy$Wampy;
    abort(): wampy$Wampy;
    subscribe(
      topicURI: string,
      callbacks: wampy$EventCallback | wampy$SubscribeCallbacksHash
    ): wampy$Wampy;
    unsubscribe(
      topicURI: string,
      callbacks?: wampy$EventCallback | wampy$UnsubscibeCallbacksHash
    ): wampy$Wampy;
    publish(
      topicURI: string,
      payload?: wampy$Payload,
      callbacks?: wampy$PublishCallbacksHash,
      advancedOptions?: wampy$PublishAdvancedOptions
    ): wampy$Wampy;
    call(
      topicURI: string,
      payload?: wampy$Payload,
      callbacks?: wampy$SuccessCallback | wampy$CallCallbacksHash,
      advancedOptions?: wampy$CallAdvancedOptions
    ): wampy$Wampy;
    cancel(
      reqId: number,
      callbacks?: wampy$Callback | wampy$CancelCallbacksHash,
      advancedOptions?: wampy$CancelAdvancedOptions
    ): wampy$Wampy;
    register(
      topicURI: string,
      callbacks: wampy$RPCCallback | wampy$RegisterCallbacksHash,
      avdancedOptions?: wampy$RegisterAdvancedOptions
    ): wampy$Wampy;
    unregister(
      topicURI: string,
      callbacks?: wampy$Callback | wampy$UnregisterCallbacksHash
    ): wampy$Wampy;
  }
  declare var wampy: wampy$wampy$WampyStatic;
  declare module.exports: typeof wampy;
}
