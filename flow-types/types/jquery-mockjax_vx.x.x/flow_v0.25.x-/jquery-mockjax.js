declare module "jquery-mockjax" {
  declare type MockJaxLoggingFunction = (
    message?: any,
    ...additionalParameters: any[]
  ) => void;
  declare interface MockJaxStandardLogger {
    error?: MockJaxLoggingFunction;
    warn?: MockJaxLoggingFunction;
    info?: MockJaxLoggingFunction;
    log?: MockJaxLoggingFunction;
    debug?: MockJaxLoggingFunction;
  }
  declare interface MockJaxCustomLogger {
    [key: string]: MockJaxLoggingFunction;
  }
  declare interface MockJaxSettingsHeaders {
    [key: string]: string;
  }
  declare interface MockJaxSettings {
    url?: string | RegExp;
    urlParams?: string[];
    data?: any;
    type?: string;
    headers?: MockJaxSettingsHeaders;
    logging?: boolean;
    status?: number;
    statusText?: string;
    responseTime?: number;
    isTimeout?: boolean;
    dataType?: string;
    contentType?: string;
    response?: (settings: any, done?: Function) => void;
    responseText?: string | Object;
    responseXml?: string;
    proxy?: string;
    proxyType?: string;
    lastModified?: string;
    etag?: string;
    onAfterSuccess?: Function;
    onAfterError?: Function;
    onAfterComplete?: Function;
    logger?: MockJaxStandardLogger | MockJaxCustomLogger;
    logLevelMethods?: string[];
    namespace?: string;
    throwUnmocked?: boolean;
    retainAjaxCalls?: boolean;
  }
  declare interface MockJaxStatic {
    (options: MockJaxSettings): number;
    (options: MockJaxSettings[]): number[];
    handler(id?: number): any;
    clear(id?: number): void;
    mockedAjaxCalls(): any[];
    unfiredHandlers(): any[];
    unmockedAjaxCalls(): any[];
    clearRetainedAjaxCalls(): void;
  }
  declare interface JQueryStatic {
    mockjax: MockJaxStatic;
    mockjaxSettings: MockJaxSettings;
  }
}
