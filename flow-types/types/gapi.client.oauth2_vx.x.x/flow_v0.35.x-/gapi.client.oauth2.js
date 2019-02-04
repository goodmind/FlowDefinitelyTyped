declare module 'gapi.client.oauth2' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        userinfo: typeof client$userinfo,
      }

/**
 * Load Google OAuth2 API v2
 */
declare function client$load(name: "oauth2", version: "v2"): PromiseLike<void>


declare function client$load(name: "oauth2", version: "v2", callback: () => any): void


declare var client$userinfo: oauth2$oauth2$UserinfoResource;

declare interface oauth2$Jwk {
keys?: Array<{
alg?: string,
e?: string,
kid?: string,
kty?: string,
n?: string,
use?: string
}>
} 

declare interface oauth2$Tokeninfo {

/**
 * The access type granted with this token. It can be offline or online.
 */
access_type?: string,

/**
 * Who is the intended audience for this token. In general the same as issued_to.
 */
audience?: string,

/**
 * The email address of the user. Present only if the email scope is present in the request.
 */
email?: string,

/**
 * The expiry time of the token, as number of seconds left until expiry.
 */
expires_in?: number,

/**
 * To whom was the token issued to. In general the same as audience.
 */
issued_to?: string,

/**
 * The space separated list of scopes granted to this token.
 */
scope?: string,

/**
 * The token handle associated with this token.
 */
token_handle?: string,

/**
 * The obfuscated user id.
 */
user_id?: string,

/**
 * Boolean flag which is true if the email address is verified. Present only if the email scope is present in the request.
 */
verified_email?: boolean
} 

declare interface oauth2$Userinfoplus {

/**
 * The user's email address.
 */
email?: string,

/**
 * The user's last name.
 */
family_name?: string,

/**
 * The user's gender.
 */
gender?: string,

/**
 * The user's first name.
 */
given_name?: string,

/**
 * The hosted domain e.g. example.com if the user is Google apps user.
 */
hd?: string,

/**
 * The obfuscated ID of the user.
 */
id?: string,

/**
 * URL of the profile page.
 */
link?: string,

/**
 * The user's preferred locale.
 */
locale?: string,

/**
 * The user's full name.
 */
name?: string,

/**
 * URL of the user's picture image.
 */
picture?: string,

/**
 * Boolean flag which is true if the email address is verified. Always verified because we only return the user's primary email address.
 */
verified_email?: boolean
} 

declare interface oauth2$MeResource {
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<oauth2$Userinfoplus>
} 

declare interface oauth2$V2Resource {
me: oauth2$MeResource
} 

declare interface oauth2$UserinfoResource {
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<oauth2$Userinfoplus>,
v2: oauth2$V2Resource
} 
    }
