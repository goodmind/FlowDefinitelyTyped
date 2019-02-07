declare module "azure-mobile-services-client" {
  declare interface WindowsAzure$MobileServiceClient {
    new(
      applicationUrl: string,
      applicationKey?: string
    ): WindowsAzure$MobileServiceClient;
    applicationUrl: string;
    applicationKey: string;
    currentUser: WindowsAzure$User;
    push: WindowsAzure$Push;
    login(
      provider: string,
      token: string,
      callback: (error: any, user: WindowsAzure$User) => void
    ): void;
    login(provider: string, token: string): WindowsAzure$asyncPromise;
    login(
      provider: string,
      callback: (error: any, user: WindowsAzure$User) => void
    ): void;
    login(provider: string): WindowsAzure$asyncPromise;
    logout(): WindowsAzure$asyncPromise;
    getTable(tableName: string): WindowsAzure$MobileServiceTable;
    withFilter(
      serviceFilter: (
        request: any,
        next: (
          request: any,
          callback: (error: any, response: any) => void
        ) => void,
        callback: (error: any, response: any) => void
      ) => void
    ): WindowsAzure$MobileServiceClient;

    /**
 * Invokes the specified custom api and returns a response object.
 * @param apiName The custom api to invoke.
 * @param options Contains additional parameter information, valid values are:
body: The body of the HTTP request.
method: The HTTP method to use in the request, with the default being POST,
parameters: Any additional query string parameters, 
headers: HTTP request headers, specified as an object.
 * @param callback Optional callback accepting (error, results) parameters.
 */
    invokeApi(
      apiName: string,
      options?: WindowsAzure$InvokeApiOptions,
      callback?: (error: any, results: any) => void
    ): WindowsAzure$asyncPromise;
  }

  declare interface WindowsAzure$Push {
    /**
     * Register a push channel with the Mobile Apps backend to start receiving notifications.
     * @param platform The device platform being used - wns, gcm or apns.
     * @param pushChannel The push channel identifier or URI.
     * @param templates An object containing template definitions. Template objects should contain body, headers and tags properties.
     * @param secondaryTiles An object containing template definitions to be used with secondary tiles when using WNS.
     * @param callback Optional callback accepting (error, results) parameters.
     */
    register(
      platform: string,
      pushChannel: string,
      templates?: any,
      secondaryTiles?: any,
      callback?: (error: any, results: any) => void
    ): void;

    /**
     * Invokes the specified custom api and returns a response object.
     * @param pushChannel The push channel identifier or URI.
     * @param callback Optional callback accepting (error, results) parameters.
     */
    unregister(
      pushChannel: string,
      callback?: (error: any, results: any) => void
    ): void;
  }

  declare interface WindowsAzure$InvokeApiOptions {
    method?: string;
    body?: any;
    headers?: Object;
    parameters?: Object;
  }

  declare interface WindowsAzure$User {
    getIdentities(): any;
    accessTokens: any;
    level: string;
    userId: string;
    mobileServiceAuthenticationToken: string;
  }

  declare interface WindowsAzure$asyncPromise {
    then(
      onSuccess: (result: any) => any,
      onError?: (error: any) => any
    ): WindowsAzure$asyncPromise;
    done(
      onSuccess?: (result: any) => void,
      onError?: (error: any) => void
    ): void;
  }

  declare type WindowsAzure$MobileServiceTable = {
    new(
      tableName: string,
      client: WindowsAzure$MobileServiceClient
    ): WindowsAzure$MobileServiceTable,
    getTableName(): string,
    getMobileServiceClient(): WindowsAzure$MobileServiceClient,
    insert(
      instance: any,
      paramsQS: Object,
      callback: (error: any, retInserted: any) => any
    ): void,
    insert(instance: any, paramsQS: Object): WindowsAzure$asyncPromise,
    insert(instance: any): WindowsAzure$asyncPromise,
    update(
      instance: any,
      paramsQS: Object,
      callback: (error: any, retUpdated: any) => any
    ): void,
    update(instance: any, paramsQS: Object): WindowsAzure$asyncPromise,
    update(instance: any): WindowsAzure$asyncPromise,
    lookup(
      id: number,
      paramsQS: Object,
      callback: (error: any, retValue: any) => any
    ): void,
    lookup(id: number, paramsQS: Object): WindowsAzure$asyncPromise,
    lookup(id: number): WindowsAzure$asyncPromise,
    del(instance: any, paramsQS: Object, callback: (error?: any) => void): void,
    del(instance: any, paramsQS: Object): WindowsAzure$asyncPromise,
    del(instance: any): WindowsAzure$asyncPromise,
    read(
      query: WindowsAzure$IQuery,
      paramsQS: Object,
      callback: (error: any, retValues: any) => any
    ): void,
    read(
      query: WindowsAzure$IQuery,
      paramsQS: Object
    ): WindowsAzure$asyncPromise,
    read(query: WindowsAzure$IQuery): WindowsAzure$asyncPromise,
    read(): WindowsAzure$asyncPromise
  } & WindowsAzure$IQuery;

  declare interface WindowsAzure$IQuery {
    read(paramsQS?: Object): WindowsAzure$asyncPromise;
    orderBy(...propName: string[]): WindowsAzure$IQuery;
    orderByDescending(...propName: string[]): WindowsAzure$IQuery;
    select(...propNameSelected: string[]): WindowsAzure$IQuery;
    select(funcProjectionFromThis: () => any): WindowsAzure$IQuery;
    where(mapObjFilterCriteria: any): WindowsAzure$IQuery;
    where(
      funcPredicateOnThis: (...qParams: any[]) => boolean,
      ...qValues: any[]
    ): WindowsAzure$IQuery;
    skip(n: number): WindowsAzure$IQuery;
    take(n: number): WindowsAzure$IQuery;
    includeTotalCount(): WindowsAzure$IQuery;
  }

  declare interface WindowsAzure$WindowsAzureStatic {
    WindowsAzure$MobileServiceClient: WindowsAzure$MobileServiceClient;
  }
  declare var WindowsAzure: Microsoft$WindowsAzure.WindowsAzure$WindowsAzureStatic;
}
