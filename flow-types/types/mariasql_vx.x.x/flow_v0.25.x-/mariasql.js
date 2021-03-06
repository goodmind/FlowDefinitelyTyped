declare module "mariasql" {
  declare export interface mariasql$MariaCallBackError {
    (error: Error): void;
  }

  declare export interface mariasql$MariaCallBackResult {
    (result: mariasql$MariaResult): void;
  }

  declare export interface mariasql$MariaCallBackRow {
    (result: Array<any>): void;
  }

  declare export interface mariasql$MariaCallBackBoolean {
    (result: boolean): void;
  }

  declare export interface mariasql$MariaCallBackObject {
    (result: Object): void;
  }

  declare export interface mariasql$MariaCallBackInfo {
    (result: mariasql$MariaInfo): void;
  }

  declare export interface mariasql$MariaCallBackVoid {
    (): void;
  }

  declare export interface mariasql$Dictionary {
    [index: string]: any;
  }

  declare export interface mariasql$MariaInfo {
    affectedRows: number;
    insertId: number;
    numRows: number;
  }

  declare export interface mariasql$MariaPreparedQuery {
    (values: mariasql$Dictionary): string;
    (values: Array<any>): string;
  }

  declare export interface mariasql$ClientConfig {
    host: string;
    user: string;
    password: string;
    db?: string;
    port?: number;
    unixSocket?: string;
    keepQueries?: boolean;
    multiStatements?: boolean;
    connTimeout?: number;
    pingInterval?: number;
    secureAuth?: boolean;
    compress?: boolean;
    ssl?: any;
    local_infile?: boolean;
    read_default_group?: string;
    charset?: string;
  }

  declare export interface mariasql$MariaResult {
    on(signal: "end", cb: mariasql$MariaCallBackInfo): mariasql$MariaResult;
    on(signal: "error", cb: mariasql$MariaCallBackError): mariasql$MariaResult;
    on(signal: "row", cb: mariasql$MariaCallBackRow): mariasql$MariaResult;
    on(signal: "abort", cb: mariasql$MariaCallBackVoid): mariasql$MariaResult;
    on(signal: string, cb: mariasql$MariaCallBackVoid): mariasql$MariaResult;
    abort(): void;
  }

  declare export interface mariasql$MariaQuery {
    on(signal: "result", cb: mariasql$MariaCallBackResult): mariasql$MariaQuery;
    on(signal: "end", cb: mariasql$MariaCallBackVoid): mariasql$MariaQuery;
    on(signal: "abort", cb: mariasql$MariaCallBackVoid): mariasql$MariaQuery;
    on(signal: "error", cb: mariasql$MariaCallBackError): mariasql$MariaQuery;
    on(signal: string, cb: mariasql$MariaCallBackVoid): mariasql$MariaQuery;
    abort(): void;
  }

  declare export interface mariasql$MariaClient {
    connect(config: mariasql$ClientConfig): void;
    end(): void;
    destroy(): void;
    escape(query: string): string;
    query(
      q: string,
      placeHolders?: mariasql$Dictionary,
      useArray?: boolean
    ): mariasql$MariaQuery;
    query(
      q: string,
      placeHolders?: Array<any>,
      useArray?: boolean
    ): mariasql$MariaQuery;
    query(q: string, useArray?: boolean): mariasql$MariaQuery;
    prepare(query: string): mariasql$MariaPreparedQuery;
    isMariaDB(): boolean;
    on(signal: "error", cb: mariasql$MariaCallBackError): mariasql$MariaClient;
    on(signal: "close", cb: mariasql$MariaCallBackObject): mariasql$MariaClient;
    on(signal: "connect", cb: mariasql$MariaCallBackVoid): mariasql$MariaClient;
    on(signal: string, cb: mariasql$MariaCallBackVoid): mariasql$MariaClient;
    connected: boolean;
    threadId: string;
  }

  declare export interface mariasql$Client {
    new(): mariasql$MariaClient;
    (): mariasql$MariaClient;
    prototype: mariasql$MariaClient;
  }
  declare var mariasql$Client: mariasql$mariasql$Client;
  declare module.exports: typeof mariasql$Client;
}
