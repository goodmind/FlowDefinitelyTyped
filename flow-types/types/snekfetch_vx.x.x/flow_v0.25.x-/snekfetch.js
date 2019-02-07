declare module "snekfetch" {
  import type { ClientRequest, Agent } from "http";

  import type { Readable } from "stream";

  declare interface Snekfetch$SnekfetchOptions {
    headers?: {
      [key: string]: any
    };
    data?: { [key: string]: any } | string | Buffer;
    agent?: Agent | boolean;
    qs?: { [key: string]: any };
    query?: { [key: string]: any } | string;
    redirect?: boolean;
  }

  declare interface Snekfetch$SnekfetchResponse {
    request: ClientRequest;
    body: string | { [key: string]: any } | Buffer;
    raw: Buffer;
    ok: boolean;
    headers: {
      [key: string]: any
    };
    status: number;
    statusText: string;
  }

  declare type Snekfetch$methods =
    | "ACL"
    | "BIND"
    | "CHECKOUT"
    | "CONNECT"
    | "COPY"
    | "DELETE"
    | "GET"
    | "HEAD"
    | "LINK"
    | "LOCK"
    | "MERGE"
    | "MKACTIVITY"
    | "MKCALENDAR"
    | "MKCOL"
    | "MOVE"
    | "NOTIFY"
    | "OPTIONS"
    | "PATCH"
    | "POST"
    | "PROPFIND"
    | "PROPPATCH"
    | "PURGE"
    | "PUT"
    | "REBIND"
    | "REPORT"
    | "SEARCH"
    | "SOURCE"
    | "SUBSCRIBE"
    | "TRACE"
    | "UNBIND"
    | "UNLINK"
    | "UNLOCK"
    | "UNSUBSCRIBE";
  declare class Snekfetch mixins Readable {
    static METHODS: Snekfetch$Snekfetch$methods[];
    static version: string;
    data: any;
    request: ClientRequest;
    response: Snekfetch$Snekfetch$SnekfetchResponse | null;
    constructor(
      method: Snekfetch$Snekfetch$methods,
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): this;
    static acl(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static bind(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static checkout(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static connect(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static copy(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static delete(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static get(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static head(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static link(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static lock(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static merge(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static mkactivity(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static mkcalendar(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static mkcol(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static move(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static notify(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static options(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static patch(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static post(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static propfind(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static proppatch(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static purge(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static put(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static rebind(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static report(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static search(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static source(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static subscribe(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static trace(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static unbind(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static unlink(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static unlock(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    static unsubscribe(
      url: string,
      opts?: Snekfetch$Snekfetch$SnekfetchOptions
    ): Snekfetch;
    query(
      name:
        | string
        | {
            [key: string]: any
          },
      value?: string
    ): Snekfetch;
    set(
      name:
        | string
        | {
            [key: string]: any
          },
      value?: string
    ): Snekfetch;
    attach(
      name: string,
      data: string | { [key: string]: any } | Buffer,
      filename?: string
    ): Snekfetch;
    send(data?: string | Buffer | { [key: string]: any }): Snekfetch;
    then(): Promise<Snekfetch$Snekfetch$SnekfetchResponse>;
    then<T>(
      resolver: (res: Snekfetch$Snekfetch$SnekfetchResponse) => T,
      rejector?: (err: Error) => any
    ): Promise<T>;
    catch(
      rejector: (err: Error) => any
    ): Promise<Snekfetch$Snekfetch$SnekfetchResponse>;
    end(): Promise<Snekfetch$Snekfetch$SnekfetchResponse>;
    end<T>(
      cb: (
        err: Error | null,
        res: Snekfetch$Snekfetch$SnekfetchResponse | Error | null
      ) => T
    ): Promise<T>;
  }
  declare module.exports: typeof Snekfetch;
}
