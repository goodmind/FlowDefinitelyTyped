declare module "restangular" {
  import typeof * as angular from "angular";

  declare module.exports: typeof restangular;

  declare type restangular$IPromise<T> = {
    call(methodName: string, params?: any): restangular$IPromise<T>,
    get(fieldName: string): restangular$IPromise<T>,
    $object: T
  } & angular.restangular$IPromise<T>;

  declare type restangular$ICollectionPromise<T> = {
    push(object: any): restangular$ICollectionPromise<T>,
    call(methodName: string, params?: any): restangular$ICollectionPromise<T>,
    get(fieldName: string): restangular$ICollectionPromise<T>,
    $object: T[]
  } & angular.restangular$IPromise<T[]>;

  declare interface restangular$IResponse {
    status: number;
    data: any;
    headers(name: string): string;
    config: {
      method: string,
      url: string,
      params: any
    };
  }

  declare interface restangular$IProvider {
    setBaseUrl(baseUrl: string): restangular$IProvider;
    setExtraFields(fields: string[]): restangular$IProvider;
    setParentless(parentless: boolean, routes: string[]): restangular$IProvider;
    setDefaultHttpFields(httpFields: any): restangular$IProvider;
    addElementTransformer(
      route: string,
      transformer: Function
    ): restangular$IProvider;
    addElementTransformer(
      route: string,
      isCollection: boolean,
      transformer: Function
    ): restangular$IProvider;
    setTransformOnlyServerElements(active: boolean): restangular$IProvider;
    setOnElemRestangularized(
      callback: (
        elem: any,
        isCollection: boolean,
        what: string,
        restangular: restangular$IService
      ) => any
    ): restangular$IProvider;
    setResponseInterceptor(
      responseInterceptor: (
        data: any,
        operation: string,
        what: string,
        url: string,
        response: restangular$IResponse,
        deferred: angular.IDeferred<any>
      ) => any
    ): restangular$IProvider;
    setResponseExtractor(
      responseInterceptor: (
        data: any,
        operation: string,
        what: string,
        url: string,
        response: restangular$IResponse,
        deferred: angular.IDeferred<any>
      ) => any
    ): restangular$IProvider;
    addResponseInterceptor(
      responseInterceptor: (
        data: any,
        operation: string,
        what: string,
        url: string,
        response: restangular$IResponse,
        deferred: angular.IDeferred<any>
      ) => any
    ): restangular$IProvider;
    setRequestInterceptor(
      requestInterceptor: (
        element: any,
        operation: string,
        what: string,
        url: string
      ) => any
    ): restangular$IProvider;
    addRequestInterceptor(
      requestInterceptor: (
        element: any,
        operation: string,
        what: string,
        url: string
      ) => any
    ): restangular$IProvider;
    setFullRequestInterceptor(
      fullRequestInterceptor: (
        element: any,
        operation: string,
        what: string,
        url: string,
        headers: any,
        params: any,
        httpConfig: angular.IRequestShortcutConfig
      ) => {
        element: any,
        headers: any,
        params: any
      }
    ): restangular$IProvider;
    addFullRequestInterceptor(
      requestInterceptor: (
        element: any,
        operation: string,
        what: string,
        url: string,
        headers: any,
        params: any,
        httpConfig: angular.IRequestShortcutConfig
      ) => {
        headers: any,
        params: any,
        element: any,
        httpConfig: angular.IRequestShortcutConfig
      }
    ): restangular$IProvider;
    setErrorInterceptor(
      errorInterceptor: (
        response: restangular$IResponse,
        deferred: angular.IDeferred<any>,
        responseHandler: (response: restangular$restangular$IResponse) => any
      ) => any
    ): restangular$IProvider;
    setRestangularFields(fields: {
      [fieldName: string]: string
    }): restangular$IProvider;
    setMethodOverriders(overriders: string[]): restangular$IProvider;
    setJsonp(jsonp: boolean): restangular$IProvider;
    setDefaultRequestParams(params: any): restangular$IProvider;
    setDefaultRequestParams(method: string, params: any): restangular$IProvider;
    setDefaultRequestParams(
      methods: string[],
      params: any
    ): restangular$IProvider;
    setFullResponse(fullResponse: boolean): restangular$IProvider;
    setDefaultHeaders(headers: any): restangular$IProvider;
    setRequestSuffix(suffix: string): restangular$IProvider;
    setUseCannonicalId(useCannonicalId: boolean): restangular$IProvider;
    setEncodeIds(encode: boolean): restangular$IProvider;
    setSelfLinkAbsoluteUrl(value: boolean): restangular$IProvider;
    setParentless(value: any): restangular$IProvider;
    setPlainByDefault(isPlain: boolean): restangular$IProvider;
    extendModel(
      route: string,
      extender: (model: restangular$IElement) => any
    ): restangular$IProvider;
    extendCollection(
      route: string,
      extender: (collection: restangular$ICollection) => any
    ): restangular$IProvider;
  }

  declare interface restangular$ICustom {
    customGET(
      path: string,
      params?: any,
      headers?: any
    ): restangular$IPromise<any>;
    customGETLIST(
      path: string,
      params?: any,
      headers?: any
    ): restangular$ICollectionPromise<any>;
    customDELETE(
      path: string,
      params?: any,
      headers?: any
    ): restangular$IPromise<any>;
    customPOST(
      elem?: any,
      path?: string,
      params?: any,
      headers?: any
    ): restangular$IPromise<any>;
    customPUT(
      elem?: any,
      path?: string,
      params?: any,
      headers?: any
    ): restangular$IPromise<any>;
    customPATCH(
      elem?: any,
      path?: string,
      params?: any,
      headers?: any
    ): restangular$IPromise<any>;
    customOperation(
      operation: string,
      path: string,
      params?: any,
      headers?: any,
      elem?: any
    ): restangular$IPromise<any>;
    addRestangularMethod(
      name: string,
      operation: string,
      path?: string,
      params?: any,
      headers?: any,
      elem?: any
    ): restangular$IPromise<any>;
  }

  declare type restangular$IService = {
    one(route: string, id?: number): restangular$IElement,
    one(route: string, id?: string): restangular$IElement,
    oneUrl(route: string, url: string): restangular$IElement,
    all(route: string): restangular$ICollection,
    allUrl(route: string, url: string): restangular$ICollection,
    copy(fromElement: any): restangular$IElement,
    withConfig(
      configurer: (RestangularProvider: restangular$IProvider) => any
    ): restangular$IService,
    restangularizeElement(
      parent: any,
      element: any,
      route: string,
      collection?: any,
      reqParams?: any
    ): restangular$IElement,
    restangularizeCollection(
      parent: any,
      element: any,
      route: string
    ): restangular$ICollection,
    service(route: string, parent?: any): restangular$IScopedService,
    stripRestangular(element: any): any
  } & restangular$ICustom &
    restangular$IProvider;

  declare type restangular$IScopedService = {
    one(id: number): restangular$IElement,
    one(id: string): restangular$IElement,
    post(
      elementToPost: any,
      queryParams?: any,
      headers?: any
    ): restangular$IPromise<any>,
    post<T>(
      elementToPost: T,
      queryParams?: any,
      headers?: any
    ): restangular$IPromise<T>,
    getList(
      queryParams?: any,
      headers?: any
    ): restangular$ICollectionPromise<any>,
    getList<T>(
      queryParams?: any,
      headers?: any
    ): restangular$ICollectionPromise<T>
  } & restangular$IService;

  declare type restangular$IElement = {
    get(queryParams?: any, headers?: any): restangular$IPromise<any>,
    get<T>(queryParams?: any, headers?: any): restangular$IPromise<T>,
    getList(
      subElement?: any,
      queryParams?: any,
      headers?: any
    ): restangular$ICollectionPromise<any>,
    getList<T>(
      subElement?: any,
      queryParams?: any,
      headers?: any
    ): restangular$ICollectionPromise<T>,
    put(queryParams?: any, headers?: any): restangular$IPromise<any>,
    post(
      subElement: any,
      elementToPost?: any,
      queryParams?: any,
      headers?: any
    ): restangular$IPromise<any>,
    post<T>(
      subElement: any,
      elementToPost: T,
      queryParams?: any,
      headers?: any
    ): restangular$IPromise<T>,
    remove(queryParams?: any, headers?: any): restangular$IPromise<any>,
    head(queryParams?: any, headers?: any): restangular$IPromise<any>,
    trace(queryParams?: any, headers?: any): restangular$IPromise<any>,
    options(queryParams?: any, headers?: any): restangular$IPromise<any>,
    patch(queryParams?: any, headers?: any): restangular$IPromise<any>,
    clone(): restangular$IElement,
    plain(): any,
    plain<T>(): T,
    withHttpConfig(
      httpConfig: angular.IRequestShortcutConfig
    ): restangular$IElement,
    save(queryParams?: any, headers?: any): restangular$IPromise<any>,
    getRestangularUrl(): string,
    getRequestedUrl(): string,
    route?: string,
    id?: number | string,
    reqParams?: any
  } & restangular$IService;

  declare type restangular$ICollection = {
    getList(
      queryParams?: any,
      headers?: any
    ): restangular$ICollectionPromise<any>,
    getList<T>(
      queryParams?: any,
      headers?: any
    ): restangular$ICollectionPromise<T>,
    post(
      elementToPost: any,
      queryParams?: any,
      headers?: any
    ): restangular$IPromise<any>,
    post<T>(
      elementToPost: T,
      queryParams?: any,
      headers?: any
    ): restangular$IPromise<T>,
    head(queryParams?: any, headers?: any): restangular$IPromise<any>,
    trace(queryParams?: any, headers?: any): restangular$IPromise<any>,
    options(queryParams?: any, headers?: any): restangular$IPromise<any>,
    patch(queryParams?: any, headers?: any): restangular$IPromise<any>,
    putElement(idx: any, params: any, headers: any): restangular$IPromise<any>,
    withHttpConfig(
      httpConfig: angular.IRequestShortcutConfig
    ): restangular$ICollection,
    clone(): restangular$ICollection,
    plain(): any,
    plain<T>(): T[],
    getRestangularUrl(): string,
    getRequestedUrl(): string
  } & restangular$IService &
    Array<any>;
}
