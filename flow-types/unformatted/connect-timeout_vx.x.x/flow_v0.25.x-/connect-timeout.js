declare export interface Express$Request {

/**
 * @summary Clears the timeout on the request.
 */
clearTimeout(): void,

/**
 * @summary true if timeout fired; false otherwise.
 */
timedout: boolean
} declare module 'connect-timeout' {
        
/**
 * @summary Interface for timeout options.
 * @interface
 */
declare interface e$TimeoutOptions {

/**
 * @summary Controls if this module will "respond" in the form of forwarding an error.
 * @type {boolean}
 */
respond?: boolean
} 
	declare function e(timeout: string, options?: e$e$TimeoutOptions): express.RequestHandler

	declare module.exports: typeof e

    }
