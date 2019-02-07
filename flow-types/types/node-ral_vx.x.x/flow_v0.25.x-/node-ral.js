declare module "node-ral" {
  import type { EventEmitter } from "events";

  import type { Request, Response, NextFunction } from "express";

  declare export interface LogInfo {
    service: string;
    requestID: string;
    conv: string;
    prot: string;
    method: string;
    path: string;
    proxy: string;
    query: string;
    remote: string;
    cost: string;
    talk: string;
    write: string;
    read: string;
    pack: string;
    unpack: string;
    retry: string;
  }
  declare export function RAL(
    serviceName: string,
    options?: {}
  ): RAL$RAL$RalRunner;

  declare var npm$namespace$RAL: {
    appendExtPath: typeof RAL$appendExtPath,
    setConfigNormalizer: typeof RAL$setConfigNormalizer,
    getConf: typeof RAL$getConf,
    getRawConf: typeof RAL$getRawConf,
    init: typeof RAL$init,
    reload: typeof RAL$reload
  };
  declare function RAL$appendExtPath(extPath: string): void;

  declare function RAL$setConfigNormalizer(normalizers: ConfigNormalizer): void;

  declare function RAL$getConf(name: string): Config;

  declare function RAL$getRawConf(name: string): Config;

  declare function RAL$init(options?: {}): void;

  declare function RAL$reload(options?: {}): void;

  declare class RAL$RalRunner mixins EventEmitter {
    constructor(serviceName: string, options?: {}): this;
    doRequest(): void;
    getLogInfo(): LogInfo;
    throwError(err: any): void;
    callRetry(err: any): void;
  }

  declare class RAL$NormalizerManager {
    constructor(): this;
    normalizers: string[];
    setConfigNormalizer(normalizers: string[]): void;
    needUpdate(config: any): boolean;
    apply(config: {}): {};
  }
  declare export interface Config {
    loadRawConf(config?: Service): Service;
    load(confPath: string): {};
    normalizerManager: RAL$RAL$NormalizerManager;
    normalize(config?: Service): {};
    getContext(serviceID: string, options?: Service): Service;
    RAL$getConf(name: string): Service;
    clearConf(): void;
    getConfNames(): string[];
    RAL$getRawConf(): any;
    getUpdateNeededRawConf(): any;
    enableUpdate(
      interval: number,
      all: boolean,
      cb: (err: any, confs: any) => any
    ): void;
    disableUpdate(): void;
    isAutoUpdateEnabled(): boolean;
  }
  declare export var Config: Config;
  declare export class RalModule {
    constructor(): this;
    getCategory(): string;
    getName(): string;
    static clearCache(): void;
    static load(pathOrModule: string | RalModule): void;
    static modules: {
      [key: string]: RalModule
    };
  }
  declare export interface Server {
    idc?: string;
    host: string;
    port: string | number;
  }
  declare export type buildInConverter =
    | "form"
    | "formData"
    | "json"
    | "protobuf"
    | "querystring"
    | "raw"
    | "redis"
    | "stream"
    | "string";
  declare export interface Service {
    method?: "GET" | "POST";
    server: Server[];
    hybird?: boolean;
    timeout?: number;
    retry?: number;
    unpack: buildInConverter;
    pack: buildInConverter;
    encoding?: "utf-8" | "GBK";
    balance: "random" | "roundrobin" | "hashring";
    protocol: "http" | "https" | "soap" | "redis";
    headers?: {
      [key: string]: string | number
    };
    query?: any;
    data?: any;
    path?: string;
  }
  declare export type BalanceContextConstructor = (
    serviceID: string,
    service: Service
  ) => Balance$Balance$BalanceContextClass;
  declare export class Balance {
    constructor(): this;
    fetchServer(
      balanceContext: Balance$Balance$BalanceContextClass,
      conf: any,
      prevBackend: Server
    ): Server;
    getCategory(): any;
    getContextClass(): BalanceContextConstructor;
    static BalanceContext: BalanceContextConstructor;
  }
  declare class Balance$BalanceContextClass {
    constructor(serviceID: string, service: Service): this;
    currentIDC: string;
    serviceID: string;
    reqIDCServers: string[];
    crossIDCServers: string[];
  }
  declare export class Converter mixins RalModule {
    constructor(): this;
    getCategory(): string;
    pack(config: Service, data: any): Buffer;
    unpack(config: Service, data: any): any;
    isStreamify: false;
  }
  declare export class Protocol mixins RalModule {
    constructor(): this;
    beforeRequest(context: any): any;
    getCategory(): string;
    normalizeConfig(context: any): any;
    talk(config: any, callback: any): any;
    _request(config: any, callback: (...param: any[]) => any): any;
    static beforeRequest(context: any): any;
    static normalizeConfig(context: any): any;
  }
  declare export interface LoggerFactory {
    (prefix: string): RalLogger;
    options: {
      format_wf: string,
      log_path: string,
      app: string,
      logInstance: RalLogger
    };
  }
  declare export interface RalLogger {
    notice(...param: any[]): void;
    warning(...param: any[]): void;
    fatal(...param: any[]): void;
    trace(...param: any[]): void;
    debug(...param: any[]): void;
  }
  declare export var Logger: LoggerFactory;
  declare export class ConfigNormalizer mixins RalModule {
    constructor(): this;
    getCategory(): string;
    normalizeConfig(config: any): Config;
    needUpdate(config?: any): boolean;
  }
  declare export function Middleware(
    options?: Service
  ): (req: Request, resp: Response, next: NextFunction) => void;

  declare export function RALPromise<T>(name: string, options?: {}): Promise<T>;
}
