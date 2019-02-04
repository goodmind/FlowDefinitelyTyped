declare module 'redux-sentry-middleware' {
        import type {
          Action,Middleware
        } from 'redux';

	import typeof * as Sentry from '@sentry/browser';

	declare export interface SentryMiddlewareOptions<T> {
breadcrumbDataFromAction?: (action: Action) => any,
actionTransformer?: (action: Action) => Action,
stateTransformer?: (state: T) => T,
breadcrumbCategory?: string,
filterBreadcrumbActions?: (action: Action) => boolean,
getUserContext?: (state: T) => Sentry.User,
getTags?: (state: T) => $ElementType<Sentry.SentryEvent, "tags">
} 
	declare export default function createSentryMiddleware<T>(sentry: typeof Sentry, options?: SentryMiddlewareOptions<T>): Middleware

    }
