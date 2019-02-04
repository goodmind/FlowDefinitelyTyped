declare module 'google-apps-script-oauth2' {
        declare interface GoogleAppsScriptOAuth2$OAuth2 {

/**
 * The supported locations for passing the state parameter.
 */
STATE_PARAMETER_LOCATION: typeof StateParameterLocation,

/**
 * The supported formats for the returned OAuth2 token.
 */
TOKEN_FORMAT: typeof TokenFormat,

/**
 * Creates a new OAuth2 service with the name specified.
 * It's usually best to create and configure your service once at the start of your script,
 * and then reference them during the different phases of the authorization flow.
 */
createService(serviceName: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Returns the redirect URI that will be used for a given script.
 * Often this URI needs to be entered into a configuration screen of your OAuth provider.
 */
getRedirectUri(scriptId: string): string
} 

declare interface GoogleAppsScriptOAuth2$OAuth2Service {

/**
 * Gets an access token for this service.
 * This token can be used in HTTP requests to the service's endpoint.
 * This method will throw an error if the user's access was not granted or has expired.
 */
getAccessToken(): string,

/**
 * Gets the authorization URL.
 * The first step in getting an OAuth2 token is to have the user visit this URL
 * and approve the authorization request. The user will then be redirected back to your
 * application using callback function name specified, so that the flow may continue.
 */
getAuthorizationUrl(): string,

/**
 * Gets the last error that occurred this execution when trying to
 * automatically refresh or generate an access token.
 */
getLastError(): any,

/**
 * Returns the redirect URI that will be used for this service.
 * Often this URI needs to be entered into a configuration screen of your OAuth provider.
 */
getRedirectUri(): string,

/**
 * Gets the token from the service's property store or cache.
 */
getToken(): {[key: string]: any} | null,

/**
 * Completes the OAuth2 flow using the request data passed in to the callback function.
 */
handleCallback(callbackRequest: {[key: string]: any}): boolean,

/**
 * Determines if the service has access (has been authorized and hasn't expired).
 * If offline access was granted and the previous token has expired this method attempts
 * to generate a new token.
 */
hasAccess(): boolean,

/**
 * Refreshes a token that has expired.
 * This is only possible if offline access was requested when the token was authorized.
 */
refresh(): void,

/**
 * Resets the service, removing access and requiring the service to be re-authorized.
 */
reset(): void,

/**
 * Sets the service's authorization base URL (required).
 * For Google services this URL should be `https://accounts.google.com/o/oauth2/auth`.
 */
setAuthorizationBaseUrl(authorizationBaseUrl: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the cache to use when persisting credentials (optional).
 * Using a cache will reduce the need to read from the property store and may increase
 * performance. In most cases this should be a private cache, but a public cache may be
 * appropriate if you want to share access across users.
 */
setCache(cache: GoogleAppsScript.Cache.Cache): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the name of the authorization callback function (required).
 * This is the function that will be called when the user completes the authorization flow
 * on the service provider's website. The callback accepts a request parameter, which
 * should be passed to this service's `handleCallback()` method to complete the process.
 */
setCallbackFunction(callbackFunctionName: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the client ID to use for the OAuth flow (required).
 * You can create client IDs in the "Credentials" section of a Google Developers Console
 * project. Although you can use any project with this library, it may be convinient to use
 * the project that was created for your script. These projects are not visible if you
 * visit the console directly, but you can access it by click on the menu item
 * "Resources > Advanced Google services" in the Script Editor, and then click on the link
 * "Google Developers Console" in the resulting dialog.
 */
setClientId(clientId: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the client secret to use for the OAuth flow (required).
 * See the documentation for `setClientId()` for more information on how to create client IDs and secrets.
 */
setClientSecret(clientSecret: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets number of minutes that a token obtained through Service Account authorization should be valid. Default: 60 minutes.
 */
setExpirationMinutes(expirationMinutes: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the issuer (iss) value to use for Service Account authorization.
 * If not set the client ID will be used instead.
 */
setIssuer(issuer: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets an additional parameter to use when constructing the authorization URL (optional).
 * See the documentation for your service provider for information on what parameter values they support.
 */
setParam(name: string, value: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the private key to use for Service Account authorization.
 */
setPrivateKey(privateKey: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the property store to use when persisting credentials (required).
 * In most cases this should be user properties, but document or script properties may be appropriate
 * if you want to share access across users.
 */
setPropertyStore(
propertyStore: GoogleAppsScript.Properties.Properties): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the scope or scopes to request during the authorization flow (optional).
 * If the scope value is an array it will be joined using the separator before being sent to the server,
 * which is is a space character by default.
 */
setScope(
scope: string | string[],
separator?: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the subject (sub) value to use for Service Account authorization.
 */
setSubject(subject: string): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the format of the returned token. Default: `OAuth2.TOKEN_FORMAT.JSON`.
 */
setTokenFormat(
tokenFormat: GoogleAppsScriptOAuth2$TokenFormat): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the additional HTTP headers that should be sent when retrieving or refreshing the access token.
 */
setTokenHeaders(tokenHeaders: {
[key: string]: string
}): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets an additional function to invoke on the payload of the access token request.
 */
setTokenPayloadHandler(
tokenHandler: (tokenPayload: GoogleAppsScriptOAuth2$TokenPayload) => {[key: string]: any}): GoogleAppsScriptOAuth2$OAuth2Service,

/**
 * Sets the service's token URL (required).
 * For Google services this URL should be `https://accounts.google.com/o/oauth2/token`.
 */
setTokenUrl(tokenUrl: string): GoogleAppsScriptOAuth2$OAuth2Service
} 

declare  class GoogleAppsScriptOAuth2$StateParameterLocation {
  constructor(...args: empty): mixed;
static +AUTHORIZATION_URL: Class<GoogleAppsScriptOAuth2$StateParameterLocation__AUTHORIZATION_URL> & GoogleAppsScriptOAuth2$StateParameterLocation__AUTHORIZATION_URL & 0;// 0
static +REDIRECT_URL: Class<GoogleAppsScriptOAuth2$StateParameterLocation__REDIRECT_URL> & GoogleAppsScriptOAuth2$StateParameterLocation__REDIRECT_URL & 1;// 1

}

declare class GoogleAppsScriptOAuth2$StateParameterLocation__AUTHORIZATION_URL mixins GoogleAppsScriptOAuth2$StateParameterLocation {}
declare class GoogleAppsScriptOAuth2$StateParameterLocation__REDIRECT_URL mixins GoogleAppsScriptOAuth2$StateParameterLocation {}


declare  class GoogleAppsScriptOAuth2$TokenFormat {
  constructor(...args: empty): mixed;
static +JSON: Class<GoogleAppsScriptOAuth2$TokenFormat__JSON> & GoogleAppsScriptOAuth2$TokenFormat__JSON & 0;// 0
static +FORM_URL_ENCODED: Class<GoogleAppsScriptOAuth2$TokenFormat__FORM_URL_ENCODED> & GoogleAppsScriptOAuth2$TokenFormat__FORM_URL_ENCODED & 1;// 1

}

declare class GoogleAppsScriptOAuth2$TokenFormat__JSON mixins GoogleAppsScriptOAuth2$TokenFormat {}
declare class GoogleAppsScriptOAuth2$TokenFormat__FORM_URL_ENCODED mixins GoogleAppsScriptOAuth2$TokenFormat {}


declare interface GoogleAppsScriptOAuth2$TokenPayload {
code: string,
client_id: string,
client_secret: string,
redirect_uri: string,
grant_type: string
} 
	declare var GoogleAppsScriptOAuth2$OAuth2: GoogleAppsScriptOAuth2$GoogleAppsScriptOAuth2$OAuth2;
    }
