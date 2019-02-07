declare module "openapi-factory" {
  declare interface OpenApi$ApiOptions {
    requestMiddleware?: () => any;
    responseMiddleware?: () => any;
    errorMiddleware?: () => any;
  }

  declare interface OpenApi$HttpMethodOptions {
    rawBody?: boolean;
  }

  declare interface OpenApi$HttpResponse {
    statusCode?: number;
    headers?: { [key: string]: any };
    body?: { [key: string]: any } | string;
  }
  declare class OpenApi {
    constructor(
      options: OpenApi$OpenApi$ApiOptions,
      overrideLogger?: () => void
    ): this;
    setAuthorizer(authorizerFunc: (req?: any) => Promise<any>): void;
    onEvent(onEventFunc: (req?: any) => Promise<any>): void;
    onSchedule(onScheduleFunc: (req?: any) => Promise<any>): void;
    head(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    head(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: any) => any
    ): void;
    get(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    get(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    post(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    post(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    put(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    put(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    patch(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    patch(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    delete(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    delete(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    options(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    options(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    any(
      route: string,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    any(
      route: string,
      options: OpenApi$OpenApi$HttpMethodOptions,
      handler: (req?: { [key: string]: any }) =>
        | OpenApi$OpenApi$HttpResponse
        | Promise<OpenApi$OpenApi$HttpResponse>
    ): void;
    handler(
      event: { [key: string]: any },
      context: { [key: string]: any }
    ): Promise<any>;
  }
  declare module.exports: typeof OpenApi;
}
