declare module 'oauth2-server' {
        
/**
 * Represents an OAuth2 server instance.
 */
declare class OAuth2Server  {
static OAuth2Server: typeof OAuth2Server;

/**
 * Instantiates OAuth2Server using the supplied model
 */
constructor(options: OAuth2Server$OAuth2Server$ServerOptions): this;

/**
 * Authenticates a request.
 */
authenticate(
request: OAuth2Server$OAuth2Server$Request,
response: OAuth2Server$OAuth2Server$Response,
options?: OAuth2Server$OAuth2Server$AuthenticateOptions,
callback?: OAuth2Server$OAuth2Server$Callback<OAuth2Server$OAuth2Server$Token>): Promise<OAuth2Server$OAuth2Server$Token>;

/**
 * Authorizes a token request.
 */
authorize(
request: OAuth2Server$OAuth2Server$Request,
response: OAuth2Server$OAuth2Server$Response,
options?: OAuth2Server$OAuth2Server$AuthorizeOptions,
callback?: OAuth2Server$OAuth2Server$Callback<OAuth2Server$OAuth2Server$AuthorizationCode>): Promise<OAuth2Server$OAuth2Server$AuthorizationCode>;

/**
 * Retrieves a new token for an authorized token request.
 */
token(
request: OAuth2Server$OAuth2Server$Request,
response: OAuth2Server$OAuth2Server$Response,
options?: OAuth2Server$OAuth2Server$TokenOptions,
callback?: OAuth2Server$OAuth2Server$Callback<OAuth2Server$OAuth2Server$Token>): Promise<OAuth2Server$OAuth2Server$Token>
}
	
/**
 * Represents an incoming HTTP request.
 */
declare class OAuth2Server$Request  {
body: any;
headers: {
[key: string]: string
};
method: string;
query: {
[key: string]: string
};

/**
 * Instantiates Request using the supplied options.
 */
constructor(options?: {
[key: string]: any
} | Express.OAuth2Server$Request): this;

/**
 * Returns the specified HTTP header field. The match is case-insensitive.
 */
get(field: string): any | void;

/**
 * Checks if the request’s Content-Type HTTP header matches any of the given MIME types.
 */
is(types: string[]): string | false
}


/**
 * Represents an outgoing HTTP response.
 */
declare class OAuth2Server$Response  {
body: any;
headers: {
[key: string]: string
};
status: number;

/**
 * Instantiates Response using the supplied options.
 */
constructor(options?: {
[key: string]: any
} | Express.OAuth2Server$Response): this;

/**
 * Returns the specified HTTP header field. The match is case-insensitive.
 */
get(field: string): any | void;

/**
 * Sets the specified HTTP header field. The match is case-insensitive.
 */
set(field: string, value: string): void;

/**
 * Redirects to the specified URL using 302 Found.
 */
redirect(url: string): void
}

declare class OAuth2Server$AbstractGrantType  {

/**
 * Instantiates AbstractGrantType using the supplied options.
 */
constructor(options: OAuth2Server$TokenOptions): this;

/**
 * Generate access token. Calls Model#generateAccessToken() if implemented.
 */
generateAccessToken(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[]): Promise<string>;

/**
 * Generate refresh token. Calls Model#generateRefreshToken() if implemented.
 */
generateRefreshToken(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[]): Promise<string>;

/**
 * Get access token expiration date.
 */
getAccessTokenExpiresAt(): Date;

/**
 * Get refresh token expiration date.
 */
getRefreshTokenExpiresAt(): Date;

/**
 * Get scope from the request body.
 */
getScope(request: OAuth2Server$Request): string;

/**
 * Validate requested scope. Calls Model#validateScope() if implemented.
 */
validateScope(
user: OAuth2Server$User,
client: OAuth2Server$Client,
scope: string | string[]): Promise<string | string[] | OAuth2Server$Falsey>;

/**
 * Retrieve info from the request and client and return token
 */
handle(
request: OAuth2Server$Request,
client: OAuth2Server$Client): Promise<OAuth2Server$Token | OAuth2Server$Falsey>
}

declare type OAuth2Server$ServerOptions = {

/**
 * Model object
 */
model: OAuth2Server$AuthorizationCodeModel
| OAuth2Server$ClientCredentialsModel
| OAuth2Server$RefreshTokenModel
| OAuth2Server$PasswordModel
| OAuth2Server$ExtensionModel
} & OAuth2Server$AuthenticateOptions & OAuth2Server$AuthorizeOptions & OAuth2Server$TokenOptions


declare interface OAuth2Server$AuthenticateOptions {

/**
 * The scope(s) to authenticate.
 */
scope?: string | string[],

/**
 * Set the X-Accepted-OAuth-Scopes HTTP header on response objects.
 */
addAcceptedScopesHeader?: boolean,

/**
 * Set the X-OAuth-Scopes HTTP header on response objects.
 */
addAuthorizedScopesHeader?: boolean,

/**
 * Allow clients to pass bearer tokens in the query string of a request.
 */
allowBearerTokensInQueryString?: boolean
} 

declare interface OAuth2Server$AuthorizeOptions {

/**
 * The authenticate handler
 */
authenticateHandler?: {},

/**
 * Allow clients to specify an empty state
 */
allowEmptyState?: boolean,

/**
 * Lifetime of generated authorization codes in seconds (default = 5 minutes).
 */
authorizationCodeLifetime?: number
} 

declare interface OAuth2Server$TokenOptions {

/**
 * Lifetime of generated access tokens in seconds (default = 1 hour)
 */
accessTokenLifetime?: number,

/**
 * Lifetime of generated refresh tokens in seconds (default = 2 weeks)
 */
refreshTokenLifetime?: number,

/**
 * Allow extended attributes to be set on the returned token
 */
allowExtendedTokenAttributes?: boolean,

/**
 * Require a client secret. Defaults to true for all grant types.
 */
requireClientAuthentication?: {},

/**
 * Always revoke the used refresh token and issue a new one for the refresh_token grant.
 */
alwaysIssueNewRefreshToken?: boolean,

/**
 * Additional supported grant types.
 */
extendedGrantTypes?: {
[key: string]: typeof AbstractGrantType
}
} 


/**
 * Represents a generic callback structure for model callbacks
 */
declare type OAuth2Server$Callback<T> = (err?: any, result?: T) => void;


/**
 * For returning falsey parameters in cases of failure
 */
declare type OAuth2Server$Falsey = ""
| 0
| false
| null
| void;

declare interface OAuth2Server$BaseModel {

/**
 * Invoked to generate a new access token.
 */
generateAccessToken(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[],
callback?: OAuth2Server$Callback<string>): Promise<string>,

/**
 * Invoked to retrieve a client using a client id or a client id/client secret combination, depending on the grant type.
 */
getClient(
clientId: string,
clientSecret: string,
callback?: OAuth2Server$Callback<OAuth2Server$Client | OAuth2Server$Falsey>): Promise<OAuth2Server$Client | OAuth2Server$Falsey>,

/**
 * Invoked to save an access token and optionally a refresh token, depending on the grant type.
 */
saveToken(
token: OAuth2Server$Token,
client: OAuth2Server$Client,
user: OAuth2Server$User,
callback?: OAuth2Server$Callback<OAuth2Server$Token>): Promise<OAuth2Server$Token | OAuth2Server$Falsey>
} 

declare interface OAuth2Server$RequestAuthenticationModel {

/**
 * Invoked to retrieve an existing access token previously saved through Model#saveToken().
 */
getAccessToken(
accessToken: string,
callback?: OAuth2Server$Callback<OAuth2Server$Token>): Promise<OAuth2Server$Token | OAuth2Server$Falsey>,

/**
 * Invoked during request authentication to check if the provided access token was authorized the requested scopes.
 */
verifyScope(
token: OAuth2Server$Token,
scope: string | string[],
callback?: OAuth2Server$Callback<boolean>): Promise<boolean>
} 

declare type OAuth2Server$AuthorizationCodeModel = {

/**
 * Invoked to generate a new refresh token.
 */
generateRefreshToken(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[],
callback?: OAuth2Server$Callback<string>): Promise<string>,

/**
 * Invoked to generate a new authorization code.
 */
generateAuthorizationCode(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[],
callback?: OAuth2Server$Callback<string>): Promise<string>,

/**
 * Invoked to retrieve an existing authorization code previously saved through Model#saveAuthorizationCode().
 */
getAuthorizationCode(
authorizationCode: string,
callback?: OAuth2Server$Callback<OAuth2Server$AuthorizationCode>): Promise<OAuth2Server$AuthorizationCode | OAuth2Server$Falsey>,

/**
 * Invoked to save an authorization code.
 */
saveAuthorizationCode(
code: OAuth2Server$AuthorizationCode,
client: OAuth2Server$Client,
user: OAuth2Server$User,
callback?: OAuth2Server$Callback<OAuth2Server$AuthorizationCode>): Promise<OAuth2Server$AuthorizationCode | OAuth2Server$Falsey>,

/**
 * Invoked to revoke an authorization code.
 */
revokeAuthorizationCode(
code: OAuth2Server$AuthorizationCode,
callback?: OAuth2Server$Callback<boolean>): Promise<boolean>,

/**
 * Invoked to check if the requested scope is valid for a particular client/user combination.
 */
validateScope(
user: OAuth2Server$User,
client: OAuth2Server$Client,
scope: string | string[],
callback?: OAuth2Server$Callback<string | OAuth2Server$Falsey>): Promise<string | string[] | OAuth2Server$Falsey>
} & OAuth2Server$BaseModel & OAuth2Server$RequestAuthenticationModel


declare type OAuth2Server$PasswordModel = {

/**
 * Invoked to generate a new refresh token.
 */
generateRefreshToken(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[],
callback?: OAuth2Server$Callback<string>): Promise<string>,

/**
 * Invoked to retrieve a user using a username/password combination.
 */
getUser(
username: string,
password: string,
callback?: OAuth2Server$Callback<OAuth2Server$User | OAuth2Server$Falsey>): Promise<OAuth2Server$User | OAuth2Server$Falsey>,

/**
 * Invoked to check if the requested scope is valid for a particular client/user combination.
 */
validateScope(
user: OAuth2Server$User,
client: OAuth2Server$Client,
scope: string | string[],
callback?: OAuth2Server$Callback<string | OAuth2Server$Falsey>): Promise<string | string[] | OAuth2Server$Falsey>
} & OAuth2Server$BaseModel & OAuth2Server$RequestAuthenticationModel


declare type OAuth2Server$RefreshTokenModel = {

/**
 * Invoked to generate a new refresh token.
 */
generateRefreshToken(
client: OAuth2Server$Client,
user: OAuth2Server$User,
scope: string | string[],
callback?: OAuth2Server$Callback<string>): Promise<string>,

/**
 * Invoked to retrieve an existing refresh token previously saved through Model#saveToken().
 */
getRefreshToken(
refreshToken: string,
callback?: OAuth2Server$Callback<OAuth2Server$RefreshToken>): Promise<OAuth2Server$RefreshToken | OAuth2Server$Falsey>,

/**
 * Invoked to revoke a refresh token.
 */
revokeToken(
token: OAuth2Server$RefreshToken | OAuth2Server$Token,
callback?: OAuth2Server$Callback<boolean>): Promise<boolean>
} & OAuth2Server$BaseModel & OAuth2Server$RequestAuthenticationModel


declare type OAuth2Server$ClientCredentialsModel = {

/**
 * Invoked to retrieve the user associated with the specified client.
 */
getUserFromClient(
client: OAuth2Server$Client,
callback?: OAuth2Server$Callback<OAuth2Server$User | OAuth2Server$Falsey>): Promise<OAuth2Server$User | OAuth2Server$Falsey>,

/**
 * Invoked to check if the requested scope is valid for a particular client/user combination.
 */
validateScope(
user: OAuth2Server$User,
client: OAuth2Server$Client,
scope: string | string[],
callback?: OAuth2Server$Callback<string | OAuth2Server$Falsey>): Promise<string | string[] | OAuth2Server$Falsey>
} & OAuth2Server$BaseModel & OAuth2Server$RequestAuthenticationModel


declare type OAuth2Server$ExtensionModel = {} & OAuth2Server$BaseModel & OAuth2Server$RequestAuthenticationModel



/**
 * An interface representing the user.
 * A user object is completely transparent to oauth2-server and is simply used as input to model functions.
 */
declare interface OAuth2Server$User {
[key: string]: any
} 


/**
 * An interface representing the client and associated data
 */
declare interface OAuth2Server$Client {
id: string,
redirectUris?: string | string[],
grants: string | string[],
accessTokenLifetime?: number,
refreshTokenLifetime?: number,
[key: string]: any
} 


/**
 * An interface representing the authorization code and associated data.
 */
declare interface OAuth2Server$AuthorizationCode {
authorizationCode: string,
expiresAt: Date,
redirectUri: string,
scope?: string | string[],
client: OAuth2Server$Client,
user: OAuth2Server$User,
[key: string]: any
} 


/**
 * An interface representing the token(s) and associated data.
 */
declare interface OAuth2Server$Token {
accessToken: string,
accessTokenExpiresAt?: Date,
refreshToken?: string,
refreshTokenExpiresAt?: Date,
scope?: string | string[],
client: OAuth2Server$Client,
user: OAuth2Server$User,
[key: string]: any
} 


/**
 * An interface representing the refresh token and associated data.
 */
declare interface OAuth2Server$RefreshToken {
refreshToken: string,
refreshTokenExpiresAt?: Date,
scope?: string | string[],
client: OAuth2Server$Client,
user: OAuth2Server$User,
[key: string]: any
} 

declare class OAuth2Server$OAuthError mixins Error {
constructor(messageOrError: string | Error, properties?: {[key: string]: any}): this;

/**
 * The HTTP error code.
 */
code: number;

/**
 * The OAuth error code.
 */
name: string;

/**
 * A human-readable error message.
 */
message: string
}

declare class OAuth2Server$AccessDeniedError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InsufficientScopeError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InvalidArgumentError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InvalidClientError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InvalidGrantError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InvalidRequestError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InvalidScopeError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$InvalidTokenError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$ServerError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$UnauthorizedClientError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$UnauthorizedRequestError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$UnsupportedGrantTypeError mixins OAuth2Server$OAuthError {}

declare class OAuth2Server$UnsupportedResponseTypeError mixins OAuth2Server$OAuthError {}
	declare module.exports: typeof OAuth2Server

    }
