declare module "@hapi/wreck" {
  import typeof * as Boom from "@hapi/boom";

  import typeof * as events from "events";

  import typeof * as http from "http";

  import typeof * as stream from "stream";

  import typeof * as Url from "url";

  declare interface RequestOptions {
    baseUrl?: string;
    socketPath?: string;
    payload?: any;
    headers?: {
      [key: string]: any
    };
    redirects?: number;
    redirect303?: boolean;
    beforeRedirect?: (
      redirectMethod: string,
      statusCode: number,
      location: string,
      resHeaders: {
        [key: string]: any
      },
      redirectOptions: any,
      next: () => {}
    ) => void;
    redirected?: (
      statusCode: number,
      location: string,
      req: http.ClientRequest
    ) => void;
    timeout?: number;
    maxBytes?: number;
    rejectUnauthorized?: boolean;
    downstreamRes?: any;
    agent?: $PropertyType<WreckObject, "agents"> | false;
    secureProtocol?: string;
    ciphers?: string;
    events?: boolean;
  }
  declare interface ReadOptions {
    timeout?: number;
    json?: true | "strict" | "force";
    gunzip?: boolean | "force";
    maxBytes?: number;
  }
  declare interface RequestResponse {
    res: http.IncomingMessage;
    payload: any;
  }
  declare type RequestCallback = (
    uri: string,
    options: RequestOptions & {
      payload?: any
    }
  ) => void;
  declare type ResponseCallback = (
    err: Boom | void,
    details: {
      req: http.ClientRequest,
      res: http.IncomingMessage | void,
      start: number,
      url: Url.URL
    }
  ) => void;
  declare class WreckEventEmitter mixins events.EventEmitter {
    on(event: "request", listener: RequestCallback): this;
    on(event: "response", listener: ResponseCallback): this;
  }
  declare interface WreckObject {
    defaults: (options: RequestOptions) => WreckObject;
    request: (
      method: string,
      uri: string,
      options: RequestOptions
    ) => Promise<http.IncomingMessage> & {
      req: http.ClientRequest
    };
    read: (
      response: http.IncomingMessage,
      options: ReadOptions
    ) => Promise<any>;
    get: (
      uri: string,
      options: RequestOptions & ReadOptions
    ) => Promise<RequestResponse>;
    post: (
      uri: string,
      options: RequestOptions & ReadOptions
    ) => Promise<RequestResponse>;
    patch: (
      uri: string,
      options: RequestOptions & ReadOptions
    ) => Promise<RequestResponse>;
    put: (
      uri: string,
      options: RequestOptions & ReadOptions
    ) => Promise<RequestResponse>;
    delete: (
      uri: string,
      options: RequestOptions & ReadOptions
    ) => Promise<RequestResponse>;
    toReadableStream: (payload: any, encoding?: string) => stream.Readable;
    parseCacheControl: (field: string) => any;
    agents: {
      http: http.Agent,
      https: http.Agent,
      httpsAllowUnauthorized: http.Agent
    };
    events?: WreckEventEmitter;
  }
  declare var wreck: WreckObject;
  declare export default typeof wreck;
}
