declare module 'cloudflare-apps' {
        
/**
 * An object which contains all of the options the installer specified,
 * based on the structure given in the options section of your `install.json`.
 */
declare var INSTALL_OPTIONS: CloudflareApps$CloudflareApps.CloudflareApps$InstallOptions;
	
/**
 * A string ID which is equal to the ID of this install.
 * Its primary purpose is to allow you to easily distinguish between your app being loaded
 * in the Cloudflare Preview or the installer’s live website.
 */
declare var INSTALL_ID: string;
	
/**
 * An object which you can use to store arbitrary values
 * which you would like to be accessable from other Cloudflare scripts,
 * without polluting the global scope.
 * For example, it’s commonly used to share an update function with its update handler.
 */
declare var INSTALL_SCOPE: CloudflareApps$CloudflareApps.CloudflareApps$InstallScope;
	
/**
 * This object is specific to paid apps. It allows you to know which product the user has purchased.
 * When you create a paid app you will be given product ids for each of the plans you wish to sell the product for.
 * `INSTALL_PRODUCT.id` will then be that id for the plan the user has purchased.
 * This value is absent for free apps and will always be set for paid apps even if the user is on a free plan.
 */
declare var INSTALL_PRODUCT: CloudflareApps$CloudflareApps.CloudflareApps$InstallProduct | void;
	
/**
 * It's the same as CloudflareApps variable.
 * 
 * DON'T use this variable directly.
 * BAD Example:
 * ```ts
 *  * const apps: cloudflareApps.CloudflareApps = INSTALL;
 *  * ```
 * -------------------------------------------------
 * Use directly properties and methods.
 * GOOD Example:
 * ```ts
 *  * const siteId: string = INSTALL.siteId;
 *  * ```
 */
declare var INSTALL: CloudflareApps$CloudflareApps.CloudflareApps$CloudflareApps;
	
/**
 * This is undocumented global variable.
 * The documentation may arrive later.
 */
declare var CloudflareApps$CloudflareApps: CloudflareApps$CloudflareApps.CloudflareApps$CloudflareApps;
	declare interface CloudflareApps$InstallOptions {
[key: string]: any
} 

declare interface CloudflareApps$InstallScope {
[key: string]: any
} 

declare interface CloudflareApps$InstallProduct {
id: string
} 

declare interface CloudflareApps$CloudflareAppsMethods {
createElement<T: Element>(options: CloudflareApps$ElementLocation, previousElement?: T): T,
matchPage(patterns: string[]): boolean,
querySelector<K: $Keys<ElementTagNameMap>>(
selectors: K): $ElementType<ElementTagNameMap, K> | null,
querySelector(selectors: string): Element | null
} 

declare type CloudflareApps$CloudflareApps = {
installs: {
[id: string]: CloudflareApps$App | void
},
proxy: CloudflareApps$CloudflareAppsProxy,
siteId: string
} & CloudflareApps$CloudflareAppsMethods


declare interface CloudflareApps$App {
appId: string,
options: CloudflareApps$InstallOptions,
scope: CloudflareApps$InstallScope
} 

declare interface CloudflareApps$CloudflareAppsProxy {
embedSiteId: string,
hasRocketEmbed: boolean,
originalURL: CloudflareApps$OriginalURL
} 

declare interface CloudflareApps$OriginalURL {
raw: string,
parsed: CloudflareApps$OriginalURLParsed
} 

declare interface CloudflareApps$OriginalURLParsed {
fragment: string,
host: string,
path: string,
scheme: "https" | "http",
query: CloudflareApps$URLQuery
} 

declare interface CloudflareApps$URLQuery {
[key: string]: string[]
} 

declare interface CloudflareApps$ElementLocation {
method: "before"
| "prepend"
| "append"
| "after"
| "replace",
selector: string
} 
    }
