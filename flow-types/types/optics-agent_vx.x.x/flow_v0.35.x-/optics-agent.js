declare module 'optics-agent' {
        import type {
          GraphQLSchema
        } from 'graphql';

	import type {
          Request,Response
        } from 'express';

	import type {
          Server
        } from 'hapi';

	import type {
          Context
        } from 'koa';

	declare export interface Options {

/**
 * Your API key for the Optics service.
 * 
 * This defaults to the OPTICS_API_KEY environment variable, but can be overridden here.
 */
apiKey?: string,

/**
 * Called to determine the query shape for for a GraphQL query.
 * 
 * You shouldn't need to set this unless you are debugging.
 */
normalizeQuery(graphQLResolveInfo: any): string,

/**
 * Where to send the reports. Defaults to the production Optics endpoint, or the OPTICS_ENDPOINT_URL environment variable if it is set.
 * 
 * You shouldn't need to set this unless you are debugging.
 */
endpointUrl?: string,

/**
 * HTTP proxy to use when sending reports. Default to no proxying, or the HTTPS_PROXY environment variable if it is set.
 * 
 * You should only set this when your servers cannot connect directly to the Optics service.
 */
proxyUrl?: string,

/**
 * How often to send reports in milliseconds. Defaults to 1 minute. Minimum 10 seconds.
 * 
 * You shouldn't need to set this unless you are debugging.
 */
reportIntervalMs?: number,

/**
 * Print a JSON version of reports as they are sent. This may be useful for debugging. Defaults to false.
 */
printReports?: boolean,

/**
 * Send detailed traces along with usage reports. Defaults to true.
 */
reportTraces?: boolean,

/**
 * Send the query variables along with traces. Defaults to true.
 */
reportVariables?: boolean,

/**
 * Send statistics when the process exits. Defaults to true.
 */
shutdownGracefully?: boolean
} 
	declare export class Agent  {
constructor(options: Options): this;
configureAgent(options: Options): Agent;
instrumentSchema(schema: GraphQLSchema): void;
koaMiddleware(): (context: Context, next: () => Promise<any>) => void;
middleware(): (req: Request, res: Response, next?: any) => void;
instrumentHapiServer(server: Server): void;
context(req: Request): any
}
	declare export function configureAgent(options: Options): Agent

	declare export function instrumentSchema(schema: GraphQLSchema): void

	declare export function koaMiddleware(): (context: Context, next: () => Promise<any>) => void

	declare export function middleware(): (req: Request, res: Response, next?: any) => void

	declare export function instrumentHapiServer(server: Server): void

	declare export function context(req: Request): any

	declare var defaultExport: {
configureAgent: typeof configureAgent,
instrumentSchema: typeof instrumentSchema,
koaMiddleware: typeof koaMiddleware,
middleware: typeof middleware,
instrumentHapiServer: typeof instrumentHapiServer,
context: typeof context,
Agent: typeof Agent
};
	declare export default typeof defaultExport

    }
