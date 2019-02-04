declare module 'serve-favicon' {
        
/**
 * Node.js middleware for serving a favicon.
 */
declare function serveFavicon(
path: string,
options?: {

/**
 * The cache-control max-age directive in ms, defaulting to 1 day. This can also be a string accepted by the ms module.
 */
maxAge?: number
}): express.RequestHandler

	
	declare module.exports: typeof serveFavicon

    }
