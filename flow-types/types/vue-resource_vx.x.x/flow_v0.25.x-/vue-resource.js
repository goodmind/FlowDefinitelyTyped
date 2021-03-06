declare interface vuejs$HttpHeaders {
  put?: {
    [key: string]: string
  };
  post?: {
    [key: string]: string
  };
  patch?: {
    [key: string]: string
  };
  delete?: {
    [key: string]: string
  };
  common?: {
    [key: string]: string
  };
  custom?: {
    [key: string]: string
  };
  [key: string]: any;
}

declare interface vuejs$HttpResponse {
  data: Object;
  ok: boolean;
  status: number;
  statusText: string;
  headers: Function;
  text(): string;
  json(): any;
  blob(): Blob;
}

declare interface vuejs$HttpOptions {
  url?: string;
  method?: string;
  body?: any;
  params?: any;
  headers?: any;
  before?: (request: any) => any;
  progress?: (event: any) => any;
  credentials?: boolean;
  emulateHTTP?: boolean;
  emulateJSON?: boolean;
}

declare interface vuejs$$http {
  (
    url: string,
    data?: any,
    options?: vuejs$HttpOptions
  ): PromiseLike<vuejs$HttpResponse>;
  (url: string, options?: vuejs$HttpOptions): PromiseLike<vuejs$HttpResponse>;
}

declare interface vuejs$HttpInterceptor {
  request?: (request: vuejs$HttpOptions) => vuejs$HttpOptions;
  response?: (response: vuejs$HttpResponse) => vuejs$HttpResponse;
}

declare interface vuejs$Http {
  options: vuejs$HttpOptions & {
    root: string
  };
  headers: vuejs$HttpHeaders;
  interceptors: (vuejs$HttpInterceptor | (() => vuejs$HttpInterceptor))[];
  get: vuejs$$http;
  post: vuejs$$http;
  put: vuejs$$http;
  patch: vuejs$$http;
  delete: vuejs$$http;
  jsonp: vuejs$$http;
}

declare interface vuejs$ResourceActions {
  get: {
    method: string
  };
  save: {
    method: string
  };
  query: {
    method: string
  };
  update: {
    method: string
  };
  remove: {
    method: string
  };
  delete: {
    method: string
  };
}

declare interface vuejs$ResourceMethod {
  (
    params: any,
    data?: any,
    success?: Function,
    error?: Function
  ): PromiseLike<vuejs$HttpResponse>;
  (
    params: any,
    success?: Function,
    error?: Function
  ): PromiseLike<vuejs$HttpResponse>;
  (success?: Function, error?: Function): PromiseLike<vuejs$HttpResponse>;
}

declare interface vuejs$ResourceMethods {
  get: vuejs$ResourceMethod;
  save: vuejs$ResourceMethod;
  query: vuejs$ResourceMethod;
  update: vuejs$ResourceMethod;
  remove: vuejs$ResourceMethod;
  delete: vuejs$ResourceMethod;
}

declare interface vuejs$$resource {
  (
    url: string,
    params?: Object,
    actions?: any,
    options?: vuejs$HttpOptions
  ): vuejs$ResourceMethods;
}

declare type vuejs$Resource = {
  actions: vuejs$ResourceActions
} & vuejs$$resource;

declare interface vuejs$Vue {
  vuejs$$http: {
    (options: vuejs$HttpOptions): PromiseLike<vuejs$HttpResponse>,
    get: vuejs$$http,
    post: vuejs$$http,
    put: vuejs$$http,
    patch: vuejs$$http,
    delete: vuejs$$http,
    jsonp: vuejs$$http
  };
  vuejs$$resource: vuejs$$resource;
}

declare interface vuejs$VueStatic {
  http: vuejs$Http;
  resource: vuejs$Resource;
}

declare interface vuejs$ComponentOption {
  http?: vuejs$HttpOptions & {
    headers?: vuejs$HttpHeaders
  } & {
    [key: string]: any
  };
}
declare module "vue-resource" {
  declare var install: (vue: vuejs$vuejs$VueStatic) => void;
  declare module.exports: typeof install;
}
