declare interface Atmosphere$Atmosphere {
  /**
   * The atmosphere API is a little bit special here: the first parameter can either be
   * a URL string or a Request object. If it is a URL string, then the additional parameters are expected.
   */
  subscribe?: (
    requestOrUrl: any,
    callback?: Function,
    request?: Atmosphere$Request
  ) => Atmosphere$Request;
  unsubscribe?: () => void;
  Atmosphere$AtmosphereRequest?: Atmosphere$AtmosphereRequest;
}

declare interface Atmosphere$AtmosphereRequest {
  new(): Atmosphere$Request;
}

declare interface Atmosphere$Request {
  timeout?: number;
  method?: string;
  headers?: any;
  contentType?: string;
  callback?: Function;
  url?: string;
  data?: string;
  suspend?: boolean;
  maxRequest?: number;
  reconnect?: boolean;
  maxStreamingLength?: number;
  lastIndex?: number;
  logLevel?: string;
  requestCount?: number;
  fallbackMethod?: string;
  fallbackTransport?: string;
  transport?: string;
  webSocketImpl?: any;
  webSocketBinaryType?: any;
  dispatchUrl?: string;
  webSocketPathDelimiter?: string;
  enableXDR?: boolean;
  rewriteURL?: boolean;
  attachHeadersAsQueryString?: boolean;
  executeCallbackBeforeReconnect?: boolean;
  readyState?: number;
  lastTimestamp?: number;
  withCredentials?: boolean;
  trackMessageLength?: boolean;
  messageDelimiter?: string;
  connectTimeout?: number;
  reconnectInterval?: number;
  dropHeaders?: boolean;
  uuid?: string;
  async?: boolean;
  shared?: boolean;
  readResponsesHeaders?: boolean;
  maxReconnectOnClose?: number;
  enableProtocol?: boolean;
  pollingInterval?: number;
  webSocketUrl?: string;
  onError?: (response?: Atmosphere$Response) => void;
  onClose?: (response?: Atmosphere$Response) => void;
  onOpen?: (response?: Atmosphere$Response) => void;
  onMessage?: (response: Atmosphere$Response) => void;
  onReopen?: (
    request?: Atmosphere$Request,
    response?: Atmosphere$Response
  ) => void;
  onReconnect?: (
    request?: Atmosphere$Request,
    response?: Atmosphere$Response
  ) => void;
  onMessagePublished?: (response?: Atmosphere$Response) => void;
  onTransportFailure?: (
    reason?: string,
    response?: Atmosphere$Response
  ) => void;
  onLocalMessage?: (request?: Atmosphere$Request) => void;
  onFailureToReconnect?: (
    request?: Atmosphere$Request,
    response?: Atmosphere$Response
  ) => void;
  onClientTimeout?: (request?: Atmosphere$Request) => void;
  subscribe?: (options: Atmosphere$Request) => void;
  execute?: () => void;
  close?: () => void;
  disconnect?: () => void;
  getUrl?: () => string;
  push?: (message: string, dispatchUrl?: string) => void;
  getUUID?: () => void;
  pushLocal?: (message: string) => void;
}

declare interface Atmosphere$Response {
  status?: number;
  reasonPhrase?: string;
  responseBody?: string;
  messages?: string[];
  headers?: string[];
  state?: string;
  transport?: string;
  error?: string;
  request?: Atmosphere$Request;
  partialMessage?: string;
  errorHandled?: boolean;
  closedByClientTimeout?: boolean;
}
declare var atmosphere: Atmosphere$Atmosphere.Atmosphere$Atmosphere;
declare module "atmosphere.js" {
  declare module.exports: typeof atmosphere;
}
