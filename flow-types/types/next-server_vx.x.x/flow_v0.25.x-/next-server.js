declare module "next-server" {
  import typeof * as http from "http";

  import type { NextConfig } from "./next-config";

  import type { UrlLike, DefaultQuery } from "./router";

  declare interface next$RenderOptions {
    staticMarkup: boolean;
    distDir: string;
    buildId: string;
    generateETags: boolean;
    runtimeConfig?: Record<any, any>;
  }

  /**
   * Options passed to the Server constructor in Node.js.
   */
  declare interface next$ServerOptions {
    dev?: boolean;
    dir?: string;
    staticMarkup?: boolean;
    quiet?: boolean;
    conf?: NextConfig;
  }

  declare interface next$ServerRoute<P = DefaultQuery> {
    match(pathname: string, params?: $Shape<P>): P | false;
    fn(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      params: P,
      parsedUrl: UrlLike
    ): Promise<void>;
  }

  declare interface next$ServerRouter {
    routes: next$ServerRoute<>[];
    add(route: next$ServerRoute<>): void;
    match(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      parsedUrl: UrlLike
    ): (() => Promise<void>) | void;
  }

  /**
   * Next.js server instance API.
   */
  declare interface next$Server {
    dir: string;
    quiet: boolean;
    router: next$ServerRouter;
    nextConfig: NextConfig;
    distDir: string;
    buildId: string;
    renderOpts: next$RenderOptions;
    currentPhase(): string;
    handleRequest(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      parsedUrl?: UrlLike
    ): Promise<void>;
    getRequestHandler(): (
      req: http.IncomingMessage,
      res: http.ServerResponse,
      parsedUrl?: UrlLike
    ) => Promise<void>;
    setAssetPrefix(prefix: string): void;
    prepare(): Promise<void>;
    close(): Promise<void>;
    setImmutableAssetCacheControl(res: http.ServerResponse): void;
    generateRoutes(): next$ServerRoute<>[];
    run(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      parsedUrl: UrlLike
    ): Promise<void>;
    render(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      pathname: string,
      query?: DefaultQuery,
      parsedUrl?: UrlLike
    ): Promise<void>;
    renderToHTML(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      pathname: string,
      query?: DefaultQuery
    ): Promise<string>;
    renderError(
      err: any,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      pathname: string,
      query?: DefaultQuery
    ): Promise<void>;
    renderErrorToHTML(
      err: any,
      req: http.IncomingMessage,
      res: http.ServerResponse,
      pathname: string,
      query?: DefaultQuery
    ): Promise<string>;
    render404(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      parsedUrl?: UrlLike
    ): Promise<void>;
    serveStatic(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      path: string
    ): Promise<void>;
    isServeableUrl(path: string): boolean;
    readBuildId(): string;
  }
  declare function next(options?: next$ServerOptions): next$Server;

  declare export default typeof next;
}
