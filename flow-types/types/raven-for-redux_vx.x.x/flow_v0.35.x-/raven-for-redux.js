declare module 'raven-for-redux' {
        import type {
          Action,Middleware
        } from 'redux';

	import typeof * as Raven from 'raven-js';

	declare module.exports: typeof createRavenMiddleware

	declare function createRavenMiddleware(
raven: Raven.RavenStatic,
options?: createRavenMiddleware$createRavenMiddleware$RavenMiddlewareOptions<any>): Middleware

	declare interface createRavenMiddleware$RavenUserContext {
id?: string,
username?: string,
email?: string
} 

declare interface createRavenMiddleware$RavenMiddlewareOptions<T> {
breadcrumbDataFromAction?: (action: Action) => any,
actionTransformer?: (action: Action) => Action,
stateTransformer?: (state: T) => T,
breadcrumbCategory?: string,
filterBreadcrumbActions?: (action: Action) => boolean,
getUserContext?: (state: T) => createRavenMiddleware$RavenUserContext
} 
    }
