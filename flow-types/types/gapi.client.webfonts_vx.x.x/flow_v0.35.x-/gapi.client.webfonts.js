declare module 'gapi.client.webfonts' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        webfonts: typeof client$webfonts,
      }

/**
 * Load Google Fonts Developer API v1
 */
declare function client$load(name: "webfonts", version: "v1"): PromiseLike<void>


declare function client$load(name: "webfonts", version: "v1", callback: () => any): void


declare var client$webfonts: client$webfonts.webfonts$WebfontsResource;

declare interface webfonts$Webfont {

/**
 * The category of the font.
 */
category?: string,

/**
 * The name of the font.
 */
family?: string,

/**
 * The font files (with all supported scripts) for each one of the available variants, as a key : value map.
 */
files?: Record<string, string>,

/**
 * This kind represents a webfont object in the webfonts service.
 */
kind?: string,

/**
 * The date (format "yyyy-MM-dd") the font was modified for the last time.
 */
lastModified?: string,

/**
 * The scripts supported by the font.
 */
subsets?: string[],

/**
 * The available variants for the font.
 */
variants?: string[],

/**
 * The font version.
 */
version?: string
} 

declare interface webfonts$WebfontList {

/**
 * The list of fonts currently served by the Google Fonts API.
 */
items?: webfonts$Webfont[],

/**
 * This kind represents a list of webfont objects in the webfonts service.
 */
kind?: string
} 

declare interface webfonts$WebfontsResource {

/**
 * Retrieves the list of fonts currently served by the Google Fonts Developer API
 */
list(
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
 * Enables sorting of the list
 */
sort?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<webfonts$WebfontList>
} 
    }
