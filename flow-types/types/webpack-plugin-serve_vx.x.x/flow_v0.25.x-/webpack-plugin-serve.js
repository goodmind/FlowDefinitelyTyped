declare module "webpack-plugin-serve" {
  import type { Url } from "url";

  import type {
    Config as HttpProxyMiddlewareConfig,
    Proxy
  } from "http-proxy-middleware";

  import typeof * as Koa from "koa";

  import type {
    ServerOptions as Http2ServerOptions,
    SecureServerOptions as Http2SecureServerOptions
  } from "http2";

  import type { ServerOptions as HttpsServerOptions } from "https";

  import type { ZlibOptions } from "zlib";

  import type { Compiler } from "webpack";

  import type { Options as HistoryApiFallbackOptions } from "connect-history-api-fallback";

  import type { CompressOptions } from "koa-compress";

  import type { Options as KoaStaticOptions } from "koa-static";

  import type { Options as FastGlobOptions } from "fast-glob";

  declare export interface Builtins {
    proxy: (args: HttpProxyMiddlewareConfig) => Proxy;
    compress: (opts: CompressOptions) => void;
    static: (paths: string[], opts?: KoaStaticOptions) => void;
    historyFallback: (opts: HistoryApiFallbackOptions) => void;
    websocket: () => void;
    four0four: (fn?: (ctx: Koa.Context) => void) => void;
  }
  declare export interface StaticObject {
    glob?: string | string[];
    options?: FastGlobOptions;
  }
  declare export interface WebpackPluginServeOptions {
    client?: {
      address?: string,
      retry?: boolean,
      silent?: boolean
    };
    compress?: boolean;
    historyFallback?: boolean | HistoryApiFallbackOptions;
    hmr?: boolean;
    host?: string | Promise<string>;
    http2?: boolean | Http2ServerOptions | Http2SecureServerOptions;
    https?: HttpsServerOptions;
    liveReload?: boolean;
    log?: {
      level: "trace" | "debug" | "info" | "warn" | "error",
      timestamp?: boolean
    };
    middleware?: (app: Koa, builtins: Builtins) => void;
    open?:
      | boolean
      | {
          wait?: boolean,
          app?: string | $ReadOnlyArray<string>
        };
    port?: number | Promise<number>;
    progress?: boolean | "minimal";
    static?: string | string[] | StaticObject;
    status?: boolean;
    waitForBuild?: boolean;
  }
  declare export class WebpackPluginServe {
    constructor(opts?: WebpackPluginServeOptions): this;
    attach(): {
      apply(compiler: Compiler): void
    };
    hook(compiler: Compiler): void;
    apply(compiler: Compiler): void;
  }
}
