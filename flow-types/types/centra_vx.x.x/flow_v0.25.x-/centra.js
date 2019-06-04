declare module "centra" {
  import type { RequestOptions, IncomingMessage } from "http";

  import type { URL } from "url";

  declare interface CentraFactory {
    (url: URL | string, method?: string): Centra$Request;
  }
  declare var Centra: CentraFactory;
  declare interface Centra$Response {
    coreRes: IncomingMessage;
    headers: $PropertyType<IncomingMessage, "headers">;
    statusCode: $PropertyType<IncomingMessage, "statusCode">;
    body: Buffer;
    json(): Promise<any>;
    text(): Promise<string>;
  }

  declare interface Centra$Request {
    url: URL;
    method: string;
    data: string | Buffer | null;
    sendDataAs: "form" | "json" | "buffer" | null;
    reqHeaders: {
      [k: string]: string
    };
    streamEnabled: boolean;
    compressionEnabled: boolean;
    timeoutTime: number | null;
    coreOptions: RequestOptions;
    query(key: string, value: any): this;
    query(params: {
      [k: string]: any
    }): this;
    path(relativePath: string): this;
    body(data: any, sendAs?: "json" | "buffer" | "form"): this;
    header(key: string, value: string): this;
    header(headers: {
      [k: string]: string
    }): this;
    timeout(timeMs: number): this;
    option<T: $Keys<RequestOptions>>(
      key: T,
      value: $ElementType<RequestOptions, T>
    ): this;
    stream(): this;
    compress(): this;
    send(): Promise<Centra$Response>;
  }
  declare export default typeof Centra;
}
