declare module "http-server" {
  import typeof * as http from "http";

  import typeof * as https from "https";

  import type { HandleFunction } from "connect";

  declare export function createServer(
    options?: Options
  ): http.Server | https.Server;

  declare export interface Options {
    root?: string;
    headers?: {
      [name: string]: string
    };
    cache?: number;
    showDir?: boolean | "false";
    autoIndex?: boolean | "false";
    showDotfiles?: boolean;
    gzip?: boolean;
    contentType?: string;
    ext?: boolean;
    before?: HandleFunction[];
    logFn?: (
      req: http.IncomingMessage,
      res: http.ServerResponse,
      err: Error
    ) => void;
    cors?: boolean;
    corsHeaders?: string;
    robots?: string | true;
    proxy?: string;
    https?: https.ServerOptions;
  }
}
