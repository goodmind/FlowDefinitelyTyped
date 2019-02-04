declare module 'swagger-restify-mw' {
        import type {
          Config,RestifyMiddleware
        } from 'swagger-node-runner';

	declare export {
          Config,RestifyMiddleware
        }from 'swagger-node-runner';

	
/**
 * Create a new instance of a Restify specific `SwaggerNodeRunner` middleware
 * 
 * The `swagger-node-runner` module has the following config priority:
 *    1. `swagger_*` environment vars
 *    2. `config` passed to `create()`
 *    3. read from swagger node in `default.yaml` in config directory
 *    4. module defaults
 * @see
 * @link {https://github.com/apigee-127/swagger-express|Github}
 */
declare export function create(
config: Config,
cb: (err: Error | void, middleware: RestifyMiddleware) => void): void

    }
