declare module 'gapi.client.playcustomapp' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        accounts: typeof client$accounts,
      }

/**
 * Load Google Play Custom App Publishing API v1
 */
declare function client$load(name: "playcustomapp", version: "v1"): PromiseLike<void>


declare function client$load(name: "playcustomapp", version: "v1", callback: () => any): void


declare var client$accounts: playcustomapp$playcustomapp$AccountsResource;

declare interface playcustomapp$CustomApp {

/**
 * Default listing language in BCP 47 format.
 */
languageCode?: string,

/**
 * Title for the Android app.
 */
title?: string
} 

declare interface playcustomapp$CustomAppsResource {

/**
 * Create and publish a new custom app.
 */
create(
request: {

/**
 * Developer account ID.
 */
account: string,

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
}): Request<playcustomapp$CustomApp>
} 

declare interface playcustomapp$AccountsResource {
customApps: playcustomapp$CustomAppsResource
} 
    }
