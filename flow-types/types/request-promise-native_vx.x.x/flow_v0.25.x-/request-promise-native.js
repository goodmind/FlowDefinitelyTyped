declare module "request-promise-native" {
  declare type requestPromise$RequestPromise<T = any> = {
    then: $ElementType<Promise<T>, "then">,
    catch: $ElementType<Promise<T>, "catch">,
    promise(): Promise<T>
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

  declare type requestPromise$FullResponse = request.Response;

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
