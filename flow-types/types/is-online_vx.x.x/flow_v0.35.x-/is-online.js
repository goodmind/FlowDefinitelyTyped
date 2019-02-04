declare module 'is-online' {
        declare module.exports: typeof isOnline

	
/**
 * Check if the internet connection is up.
 * 
 * The following checks are run in parallel:
 * - Retrieve [icanhazip.com](https://github.com/major/icanhaz) via HTTPS
 * - Query `myip.opendns.com` on OpenDNS (Node.js only)
 * - Retrieve Apple's Captive Portal test page (Node.js only)
 * 
 * When the first check succeeds, the returned Promise is resolved to `true`.
 */
declare function isOnline(options?: isOnline$isOnline$Options): Promise<boolean>

	declare interface isOnline$Options {

/**
 * Milliseconds to wait for a server to respond.
 * @default 5000
 */
timeout?: number,

/**
 * Internet Protocol version to use. This is an advanced option that is usually not necessary to be set,
 * but it can prove useful to specifically assert IPv6 connectivity.
 * @default 'v4'
 */
version?: "v4" | "v6"
} 
    }
