declare module 'on-headers' {
        import type {
          ServerResponse
        } from 'http';

	
/**
 * This will add the listener to fire when headers are emitted for res.
 * The listener is passed the response object as its context (this).
 * Headers are considered emitted only once, right before they
 * are sent to the client.
 * 
 * When this is called multiple times on the same res, the listeners
 * are fired in the reverse order they were added.
 * @param res HTTP server response object
 * @param listener Function to call prior to headers being emitted,
the response object is passed as this context.
 */
declare function onHeaders(res: ServerResponse, listener: () => void): void

	declare module.exports: typeof onHeaders

    }
