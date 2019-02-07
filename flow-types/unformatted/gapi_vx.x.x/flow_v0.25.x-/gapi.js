declare module 'gapi' {
        
/**
 * The OAuth 2.0 token object represents the OAuth 2.0 token and any associated data.
 */
declare interface GoogleApiOAuth2TokenObject {

/**
 * The OAuth 2.0 token. Only present in successful responses
 */
access_token: string,

/**
 * Details about the error. Only present in error responses
 */
error: string,

/**
 * The duration, in seconds, the token is valid for. Only present in successful responses
 */
expires_in: string,

/**
 * The Google API scopes related to this token
 */
state: string
} 
	
      declare var npm$namespace$gapi: {
        load: typeof gapi$load,
        
      }
declare type gapi$LoadCallback = (...args: any[]) => void;

declare type gapi$LoadConfig = {
callback: gapi$LoadCallback,
onerror?: Function,
timeout?: number,
ontimeout?: Function
};

declare type gapi$CallbackOrConfig = gapi$LoadConfig | gapi$LoadCallback;


/**
 * Pragmatically initialize gapi class member.
 * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiloadlibraries-callbackorconfig
 */
declare export function gapi$load(apiName: string, callback: gapi$CallbackOrConfig): void



      declare var npm$namespace$auth: {
        authorize: typeof auth$authorize,
init: typeof auth$init,
getToken: typeof auth$getToken,
setToken: typeof auth$setToken,
signIn: typeof auth$signIn,
signOut: typeof auth$signOut,
        
      }

/**
 * Initiates the OAuth 2.0 authorization process. The browser displays a popup window prompting the user authenticate and authorize. After the user authorizes, the popup closes and the callback function fires.
 * @param params A key/value map of parameters for the request. If the key is not one of the expected OAuth 2.0 parameters, it is added to the URI as a query parameter.
 * @param callback The function to call once the login process is complete. The function takes an OAuth 2.0 token object as its only parameter.
 */
declare export function auth$authorize(
params: {

/**
 * The application's client ID.
 */
client_id?: string,

/**
 * If true, then login uses "immediate mode", which means that the token is refreshed behind the scenes, and no UI is shown to the user.
 */
immediate?: boolean,

/**
 * The OAuth 2.0 response type property. Default: token
 */
response_type?: string,

/**
 * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
 */
scope?: any,

/**
 * The user to sign in as. -1 to toggle a multi-account chooser, 0 to default to the user's current account, and 1 to automatically sign in if the user is signed into Google Plus.
 */
authuser?: number
},
callback: (token: GoogleApiOAuth2TokenObject) => any): void



/**
 * Initializes the authorization feature. Call this when the client loads to prevent popup blockers from blocking the auth window on gapi.auth.authorize calls.
 * @param callback A callback to execute when the auth feature is ready to make authorization calls.
 */
declare export function auth$init(callback: () => any): void



/**
 * Retrieves the OAuth 2.0 token for the application.
 * @return The OAuth 2.0 token.
 */
declare export function auth$getToken(): GoogleApiOAuth2TokenObject



/**
 * Sets the OAuth 2.0 token for the application.
 * @param token The token to set.
 */
declare export function auth$setToken(token: GoogleApiOAuth2TokenObject): void



/**
 * Initiates the client-side Google+ Sign-In OAuth 2.0 flow.
 * When the method is called, the OAuth 2.0 authorization dialog is displayed to the user and when they accept, the callback function is called.
 * @param params
 */
declare export function auth$signIn(
params: {

/**
 * Your OAuth 2.0 client ID that you obtained from the Google Developers Console.
 */
clientid?: string,

/**
 * Directs the sign-in button to store user and session information in a session cookie and HTML5 session storage on the user's client for the purpose of minimizing HTTP traffic and distinguishing between multiple Google accounts a user might be signed into.
 */
cookiepolicy?: string,

/**
 * A function in the global namespace, which is called when the sign-in button is rendered and also called after a sign-in flow completes.
 */
callback?: () => void,

/**
 * If true, all previously granted scopes remain granted in each incremental request, for incremental authorization. The default value true is correct for most use cases; use false only if employing delegated auth, where you pass the bearer token to a less-trusted component with lower programmatic authority.
 */
includegrantedscopes?: boolean,

/**
 * If your app will write moments, list the full URI of the types of moments that you intend to write.
 */
requestvisibleactions?: any,

/**
 * The OAuth 2.0 scopes for the APIs that you would like to use as a space-delimited list.
 */
scope?: any,

/**
 * If you have an Android app, you can drive automatic Android downloads from your web sign-in flow.
 */
apppackagename?: string
}): void



/**
 * Signs a user out of your app without logging the user out of Google. This method will only work when the user is signed in with Google+ Sign-In.
 */
declare export function auth$signOut(): void



      declare var npm$namespace$client: {
        init: typeof client$init,
load: typeof client$load,
request: typeof client$request,
rpcRequest: typeof client$rpcRequest,
setApiKey: typeof client$setApiKey,
setToken: typeof client$setToken,
        
      }

/**
 * Initializes the JavaScript client with API key, OAuth client ID, scope, and API discovery document(s).
 * If OAuth client ID and scope are provided, this function will load the gapi.auth2 module to perform OAuth.
 * The gapi.client.init function can be run multiple times, such as to set up more APIs, to change API key, or initialize OAuth lazily.
 */
declare export function client$init(
args: {

/**
 * The API Key to use.
 */
apiKey?: string,

/**
 * An array of discovery doc URLs or discovery doc JSON objects.
 */
discoveryDocs?: string[],

/**
 * The app's client ID, found and created in the Google Developers Console.
 */
clientId?: string,

/**
 * The scopes to request, as a space-delimited string.
 */
scope?: string,
hosted_domain?: string
}): Promise<void>


declare interface client$RequestOptions {

/**
 * The URL to handle the request
 */
path: string,

/**
 * The HTTP request method to use. Default is GET
 */
method?: string,

/**
 * URL params in key-value pair form
 */
params?: any,

/**
 * Additional HTTP request headers
 */
headers?: any,

/**
 * The HTTP request body (applies to PUT or POST).
 */
body?: any,

/**
 * If supplied, the request is executed immediately and no gapi.client.HttpRequest object is returned
 */
callback?: () => any
} 

declare interface client$TokenObject {

/**
 * The access token to use in requests.
 */
access_token: string
} 


/**
 * Loads the client library interface to a particular API. If a callback is not provided, a promise is returned.
 * @param name The name of the API to load.
 * @param version The version of the API to load.
 * @return promise The promise that get's resolved after the request is finished.
 */
declare export function client$load(name: string, version: string): Promise<void>



/**
 * Loads the client library interface to a particular API. The new API interface will be in the form gapi.client.api.collection.method.
 * @param name The name of the API to load.
 * @param version The version of the API to load
 * @param callback the function that is called once the API interface is loaded
 * @param url optional, the url of your app - if using Google's APIs, don't set it
 */
declare export function client$load(name: string, version: string, callback: () => any, url?: string): void



/**
 * Creates a HTTP request for making RESTful requests.
 * An object encapsulating the various arguments for this method.
 */
declare export function client$request(args: client$RequestOptions): client$HttpRequest<any>



/**
 * Creates an RPC Request directly. The method name and version identify the method to be executed and the RPC params are provided upon RPC creation.
 * @param method The method to be executed.
 * @param version The version of the API which defines the method to be executed. Defaults to v1
 * @param rpcParams A key-value pair of the params to supply to this RPC
 */
declare export function client$rpcRequest(method: string, version?: string, rpcParams?: any): client$RpcRequest



/**
 * Sets the API key for the application.
 * @param apiKey The API key to set
 */
declare export function client$setApiKey(apiKey: string): void



/**
 * Sets the authentication token to use in requests.
 * @param token The token to set.

Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiclientsettokentokenobject
 */
declare export function client$setToken(token: client$TokenObject | null): void


declare interface client$HttpRequestFulfilled<T> {
result: T,
body: string,
headers?: any[],
status?: number,
statusText?: string
} 

declare interface client$HttpRequestRejected {
result: any | boolean,
body: string,
headers?: any[],
status?: number,
statusText?: string
} 


/**
 * HttpRequest supports promises.
 * See Google API Client JavaScript Using Promises https://developers.google.com/api-client-library/javascript/features/promises
 */
declare class client$HttpRequestPromise<T>  {
then<TResult1= T, TResult2= empty>(
onfulfilled?: ((response: client$HttpRequestFulfilled<T>) => TResult1 | PromiseLike<TResult1>) | void | null,
onrejected?: ((reason: client$HttpRequestRejected) => TResult2 | PromiseLike<TResult2>) | void | null,
opt_context?: any): Promise<TResult1 | TResult2>
}


/**
 * An object encapsulating an HTTP request. This object is not instantiated directly, rather it is returned by gapi.client.request.
 */
declare export class client$HttpRequest<T> mixins client$HttpRequestPromise<T> {

/**
 * Executes the request and runs the supplied callback on response.
 * @param callback The callback function which executes when the request succeeds or fails.
 */
execute(
callback: (
jsonResp: T,
rawResp: {
body: string,
headers: any[],
status: number,
statusText: string
}) => any): void
}


/**
 * Represents an HTTP Batch operation. Individual HTTP requests are added with the add method and the batch is executed using execute.
 */
declare export class client$HttpBatch  {

/**
 * Adds a gapi.client.HttpRequest to the batch.
 * @param httpRequest The HTTP request to add to this batch.
 * @param opt_params extra parameters for this batch entry.
 */
add(
httpRequest: client$HttpRequest<any>,
opt_params?: {

/**
 * Identifies the response for this request in the map of batch responses. If one is not provided, the system generates a random ID.
 */
id: string,
callback: (individualResponse: any, rawBatchResponse: any) => any
}): void;

/**
 * Executes all requests in the batch. The supplied callback is executed on success or failure.
 * @param callback The callback to execute when the batch returns.
 */
execute(callback: (responseMap: any, rawBatchResponse: string) => any): void
}


/**
 * Similar to gapi.client.HttpRequest except this object encapsulates requests generated by registered methods.
 */
declare export class client$RpcRequest  {

/**
 * Executes the request and runs the supplied callback with the response.
 * @param callback The callback function which executes when the request succeeds or fails.
 */
callback(callback: (jsonResp: any, rawResp: string) => void): void
}
    }
