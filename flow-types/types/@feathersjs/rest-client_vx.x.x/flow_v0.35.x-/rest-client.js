declare module '@feathersjs/rest-client' {
        declare export default function feathersRestClient(base?: string): Transport

	declare export type HandlerResult = {

/**
 * initialize service
 */
(): void,

/**
 * Transport Service
 */
Service: any,

/**
 * default Service
 */
service: any
} & Function

	declare export type Handler = (connection: any, options?: any) => () => HandlerResult;
	declare export interface Transport {
jquery: Handler,
superagent: Handler,
request: Handler,
fetch: Handler,
axios: Handler,
angular: Handler,
angularHttpClient: Handler
} 
    }
