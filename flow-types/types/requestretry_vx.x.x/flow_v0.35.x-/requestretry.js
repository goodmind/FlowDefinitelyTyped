declare module 'requestretry' {
        declare type requestretry$RetryStrategy = (err: Error, response: http.IncomingMessage, body: any) => boolean;

declare type requestretry$RetryRequestAPI = {
RetryStrategies: {
"HttpError": requestretry$RetryStrategy,
"HTTPOrNetworkError": requestretry$RetryStrategy,
"NetworkError": requestretry$RetryStrategy
}
} & request.RequestAPI<request.Request, requestretry$RequestRetryOptions, request.RequiredUriUrl>


declare type requestretry$RequestRetryOptions = {
maxAttempts?: number,
promiseFactory(resolver: any): any,
retryDelay?: number,
retryStrategy?: requestretry$RetryStrategy
} & request.CoreOptions

	declare var requestretry: requestretry$requestretry$RetryRequestAPI;
	declare module.exports: typeof requestretry

    }
