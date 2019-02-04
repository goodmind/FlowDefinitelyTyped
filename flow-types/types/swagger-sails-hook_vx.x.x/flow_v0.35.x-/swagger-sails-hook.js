declare module 'swagger-sails-hook' {
        import type {
          Config,SailsMiddleware
        } from 'swagger-node-runner';

	declare module.exports: typeof SwaggerHook

	
/**
 * Create a new `swagger-sails-hook` sails hook and register it with `sails`
 * @param sails - reference to the running sails instance
 * @returns SailsHook - `swagger-sails-hook` object implementing the Sails' hook specification.
 */
declare function SwaggerHook(sails: any): SwaggerHook$SwaggerHook$SailsHook

	
/**
 * `swagger-sails-hook` object implementing the Sails' hook specification.
 * @see {@link http://sailsjs.com/documentation/concepts/extending-sails/hooks/hook-specification|Sails Hook Docs}
 * @see {@link http://sailsjs.com/documentation/anatomy/api/hooks/my-hook/index-js|Sails Hook Example}
 */
declare interface SwaggerHook$SailsHook {

/**
 * Perform startup tasks.
 * All Sails configuration is guaranteed to be completed before a hook’s initialize function runs.
 * @param done - called when `swagger-sails-hook`'s startup tasks have finished.
 */
initialize(done: () => any): void,

/**
 * `swagger-sails-hook` specific route bound to a Sails app at load time.
 * 
 * It handles any unhandled requests (any routes that aren't bound in the app via a
 * custom route configuration or a blueprint) via the swagger middleware.
 */
routes: {

/**
 * routes specified in the `after` object will be bound after custom and blueprint routes
 */
after: {

/**
 * This route will match any routes that aren't bound in the app via a custom route configuration
 * or a blueprint.
 */
/*(req: any, res: any, next: () => any): any
}
}
} 
    }
