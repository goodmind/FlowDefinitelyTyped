declare module "angular-httpi" {
  declare export type Httpi$HttpiPayload = {
    method?: string,
    url?: string,
    params?: {},
    data?: {},
    keepTrailingSlash?: boolean
  } & ng.IRequestShortcutConfig;

  declare export interface Httpi$HttpiFactory {
    (config: Httpi$HttpiPayload): ng.IHttpPromise<{}>;
    resource(url: string): Httpi$HttpiResource;
  }

  declare export class Httpi$HttpiResource {
    constructor(http: ng.IHttpService, url: string): this;
    delete<T>(config: Httpi$HttpiPayload): ng.IHttpPromise<T>;
    get<T>(config: Httpi$HttpiPayload): ng.IHttpPromise<T>;
    head<T>(config: Httpi$HttpiPayload): ng.IHttpPromise<T>;
    jsonp<T>(config: Httpi$HttpiPayload): ng.IHttpPromise<T>;
    post<T>(config: Httpi$HttpiPayload): ng.IHttpPromise<T>;
    put<T>(config: Httpi$HttpiPayload): ng.IHttpPromise<T>;
    setKeepTrailingSlash(newKeepTrailingSlash: boolean): Httpi$HttpiResource;
  }
}
