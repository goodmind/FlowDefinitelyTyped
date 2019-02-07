declare module "ng-stomp" {
  declare interface ngStomp {
    sock: any;
    stomp: any;
    debug: any;
    off: any;
    setDebug(callback: Function): void;
    connect(
      endpoint: string,
      headers?: ngStomp$ngStomp$Headers
    ): angular.IHttpPromise<any>;
    disconnect(callback: () => void): angular.IHttpPromise<any>;
    subscribe(
      destination: string,
      callback: (
        payload: string,
        headers: ngStomp$ngStomp$Headers,
        res: Function
      ) => void,
      headers?: ngStomp$ngStomp$Headers,
      scope?: any
    ): any;
    unsubscribe(): any;
    send(destination: string, body: any, headers: ngStomp$ngStomp$Headers): any;
  }
  declare interface ngStomp$Headers {
    [key: string]: any;
  }
}
