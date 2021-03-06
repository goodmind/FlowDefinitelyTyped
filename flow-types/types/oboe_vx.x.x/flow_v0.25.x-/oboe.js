declare module "oboe" {
  declare type oboe$OboeFunction = {
    drop: Object,
    (url: string): oboe$Oboe,
    (options: oboe$Options): oboe$Oboe,
    (stream: NodeJS.ReadableStream): oboe$Oboe
  } & Function;

  declare interface oboe$Oboe {
    done(callback: (result: any) => void): oboe$Oboe;
    fail(callback: (result: oboe$FailReason) => void): oboe$Oboe;
    node(pattern: string, callback: oboe$CallbackSignature): oboe$Oboe;
    node(patterns: oboe$PatternMap): oboe$Oboe;
    on(
      event: string,
      pattern: string,
      callback: oboe$CallbackSignature
    ): oboe$Oboe;
    on(eventPattern: string, callback: oboe$CallbackSignature): oboe$Oboe;
    path(pattern: string, callback: oboe$CallbackSignature): oboe$Oboe;
    path(listeners: any): oboe$Oboe;
    removeListener(
      eventPattern: string,
      callback: oboe$CallbackSignature
    ): oboe$Oboe;
    removeListener(
      event: string,
      pattern: string,
      callback: oboe$CallbackSignature
    ): oboe$Oboe;
    start(callback: (status: number, headers: Object) => void): oboe$Oboe;
    abort(): void;
    source: string;
  }

  declare interface oboe$CallbackSignature {
    (node: any, pathOrHeaders: any, ancestors: Object[]): any;
  }

  declare interface oboe$Options {
    url: string;
    method?: string;
    headers?: Object;
    body?: any;
    cached?: boolean;
    withCredentials?: boolean;
  }

  declare interface oboe$FailReason {
    thrown?: Error;
    statusCode?: number;
    body?: string;
    jsonBody?: Object;
  }

  declare interface oboe$PatternMap {
    [pattern: string]: oboe$CallbackSignature;
  }
  declare var oboe: oboe$oboe$OboeFunction;
  declare module.exports: typeof oboe;
}
