declare module "request-promise" {
  declare type requestPromise$RequestPromise = {
    then: $ElementType<Promise<any>, "then">,
    catch: $ElementType<Promise<any>, "catch">,
    finally: $ElementType<Promise<any>, "finally">,
    cancel: $ElementType<Promise<any>, "cancel">,
    promise(): Promise<any>
  } & request.Request;

  declare type requestPromise$RequestPromiseOptions = {
    simple?: boolean,
    transform?: (
      body: any,
      response: request.Response,
      resolveWithFullResponse?: boolean
    ) => any,
    transform2xxOnly?: boolean,
    resolveWithFullResponse?: boolean
  } & request.CoreOptions;

  declare type requestPromise$OptionsWithUri = request.UriOptions &
    requestPromise$RequestPromiseOptions;

  declare type requestPromise$OptionsWithUrl = request.UrlOptions &
    requestPromise$RequestPromiseOptions;

  declare type requestPromise$Options =
    | requestPromise$OptionsWithUri
    | requestPromise$OptionsWithUrl;
  declare var requestPromise: request.RequestAPI<
    requestPromise$requestPromise$RequestPromise,
    requestPromise$requestPromise$RequestPromiseOptions,
    request.RequiredUriUrl
  >;
  declare module.exports: typeof requestPromise;
}
