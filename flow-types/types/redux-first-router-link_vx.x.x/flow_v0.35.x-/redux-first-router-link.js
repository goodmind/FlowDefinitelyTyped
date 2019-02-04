declare module 'redux-first-router-link' {
        import typeof * as React from 'react';

	import type {
          Location
        } from 'redux-first-router';

	declare export type To = string | string[] | {[key: string]: any};
	declare export interface Match<P> {
params: P,
isExact: boolean,
path: string,
url: string
} 
	declare export type LinkProps = {
to: To,
redirect?: boolean,
replace?: boolean,
tagName?: string,
down?: boolean,
shouldDispatch?: boolean,
target?: string
} & React.HTMLAttributes<HTMLElement>

	declare export default class Link mixins React.Component<LinkProps> {}
	declare export type NavLinkProps = {
activeClassName?: string,
activeStyle?: React.CSSProperties,
ariaCurrent?: string,
exact?: boolean,
strict?: boolean,
isActive(match: Match<{[key: string]: any}>, location: Location): boolean
} & LinkProps

	declare export class NavLink mixins React.Component<NavLinkProps> {}
    }
