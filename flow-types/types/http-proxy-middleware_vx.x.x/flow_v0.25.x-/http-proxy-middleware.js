declare module "http-proxy-middleware" {
  import typeof * as http from "http";

  import typeof * as net from "net";

  import typeof * as tls from "tls";

  import typeof * as connect from "connect";

  import typeof * as httpProxy from "http-proxy";

  import type { Readable } from "stream";

  declare function proxy(config: proxy$proxy$Config): proxy$proxy$Proxy;

  declare function proxy(
    contextOrUri: string | string[] | proxy$proxy$Filter,
    config?: proxy$proxy$Config
  ): proxy$proxy$Proxy;

  declare type proxy$Filter = (
    pathname: string,
    req: http.IncomingMessage
  ) => boolean;

  declare type proxy$Logger = (...args: any[]) => void;

  declare interface proxy$LogProvider {
    log: proxy$Logger;
    debug?: proxy$Logger;
    info?: proxy$Logger;
    warn?: proxy$Logger;
    error?: proxy$Logger;
  }

  declare interface proxy$Config {
    pathRewrite?:
      | {
          [regexp: string]: string
        }
      | ((path: string, req: http.IncomingMessage) => string);
    router?:
      | {
          [hostOrPath: string]: string
        }
      | ((req: http.IncomingMessage) => string);
    logLevel?: "debug" | "info" | "warn" | "error" | "silent";
    logProvider?: (provider: proxy$LogProvider) => proxy$LogProvider;
    onError?: (
      err: Error,
      req: http.IncomingMessage,
      res: http.ServerResponse
    ) => void;
    onProxyRes?: (
      proxyRes: http.IncomingMessage,
      req: http.IncomingMessage,
      res: http.ServerResponse
    ) => void;
    onProxyReq?: (
      proxyReq: http.ClientRequest,
      req: http.IncomingMessage,
      res: http.ServerResponse
    ) => void;
    onProxyReqWs?: (
      proxyReq: http.ClientRequest,
      req: http.IncomingMessage,
      socket: net.Socket,
      options: httpProxy.ServerOptions,
      head: any
    ) => void;
    onOpen?: (proxySocket: net.Socket) => void;
    onClose?: (
      res: http.IncomingMessage,
      socket: net.Socket,
      head: any
    ) => void;
    target?: string;
    forward?: string;
    agent?: http.Agent;
    ssl?: tls.TlsOptions;
    ws?: boolean;
    xfwd?: boolean;
    secure?: boolean;
    toProxy?: boolean;
    prependPath?: boolean;
    ignorePath?: boolean;
    localAddress?: string;
    changeOrigin?: boolean;
    preserveHeaderKeyCase?: boolean;
    auth?: string;
    hostRewrite?: string;
    autoRewrite?: boolean;
    protocolRewrite?: string;
    cookieDomainRewrite?:
      | false
      | string
      | {
          [domain: string]: string
        };
    cookiePathRewrite?:
      | false
      | string
      | {
          [path: string]: string
        };
    headers?: {
      [header: string]: string
    };
    proxyTimeout?: number;
    timeout?: number;
    followRedirects?: boolean;
    selfHandleResponse?: boolean;
    buffer?: Readable;

    /**
     * @deprecated
     */
    proxyHost?: any;

    /**
     * @deprecated
     */
    proxyTable?: any;
  }

  declare type proxy$Proxy = connect.NextHandleFunction;
  declare module.exports: typeof proxy;
}
