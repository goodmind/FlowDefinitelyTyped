declare module 'fluxible-router' {
        import typeof * as React from 'react';

	import type {
          FluxibleContext
        } from 'fluxible';

	declare export class NavLink mixins React.Component<NavLinkProps, any> {}
	declare export class RouteStore mixins BaseStore {
dehydrate(context?: FluxibleContext): any;
rehydrate(state: any): void;
static withStaticRoutes(routes: {[key: string]: any}): typeof RouteStore
}
	declare export function handleHistory(Component: typeof undefined, opts?: {[key: string]: any}): typeof undefined

	declare export function navigateAction(context: FluxibleContext, params: {[key: string]: any}): void

	declare export class NavLinkProps  {
href: string;
routeName: string;
activeStyle: {[key: string]: any};
preserveScrollPosition: boolean;
className: string;
type: string
}
    }
