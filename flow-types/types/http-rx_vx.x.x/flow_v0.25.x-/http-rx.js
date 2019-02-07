declare module "http-rx" {
  import type { Observable } from "rxjs";

  declare interface ResponseWrapper {
    response: request.Response;
    body: any;
  }
  declare interface HttpRx {
    get(
      url: string,
      options?: request.CoreOptions
    ): Observable<ResponseWrapper>;
    head(
      url: string,
      options?: request.CoreOptions
    ): Observable<ResponseWrapper>;
    patch(
      url: string,
      options?: request.CoreOptions
    ): Observable<ResponseWrapper>;
    post(
      url: string,
      options?: request.CoreOptions
    ): Observable<ResponseWrapper>;
    put(
      url: string,
      options?: request.CoreOptions
    ): Observable<ResponseWrapper>;
    delete(
      url: string,
      options?: request.CoreOptions
    ): Observable<ResponseWrapper>;
  }
  declare var httpRx: HttpRx;
  declare module.exports: typeof httpRx;
}
