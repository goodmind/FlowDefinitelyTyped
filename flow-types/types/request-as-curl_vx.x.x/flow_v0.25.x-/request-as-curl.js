declare module "request-as-curl" {
  import type {
    CoreOptions,
    Request,
    RequestAPI,
    RequiredUriUrl
  } from "request";

  declare export default typeof request_as_curl;

  declare function request_as_curl(
    request: RequestAPI<Request, CoreOptions, RequiredUriUrl>,
    body?: any
  ): string;

  declare var npm$namespace$request_as_curl: {
    serialize: typeof request_as_curl$serialize
  };
  declare function request_as_curl$serialize(
    request: RequestAPI<Request, CoreOptions, RequiredUriUrl>
  ): string;
}
