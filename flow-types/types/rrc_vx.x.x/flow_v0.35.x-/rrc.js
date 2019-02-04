declare module 'rrc' {
        import typeof * as React from 'react';

	import typeof * as H from 'history';

	import type {
          RouteProps,RouteComponentProps,MatchObject
        } from 'react-router-dom';

	declare export interface ScrollIntoViewProps {
alignToTop?: boolean,
id: string
} 
	declare export class ScrollIntoView mixins React.Component<ScrollIntoViewProps> {}
	declare export type PropIdCallback = () => string;
	declare export interface WithScrollOptions {
propId?: PropIdCallback,
alignToTop?: boolean
} 
	declare export type ComponentConstructor<Props> = React.ComponentType<Props>;
	declare export function withScroll(
component: ComponentConstructor<RouteComponentProps<any> | {}>,
options?: WithScrollOptions): ComponentConstructor<RouteComponentProps<any> | {}>

	declare export type RouteConfiguration = RouteProps & {
inject?: {
[key: string]: any
}
};
	declare export interface SwitchProps {
routes: RouteConfiguration[],
location: H.LocationDescriptorObject & {
pathname: H.Pathname
}
} 
	declare export class ConfigSwitch mixins React.Component<SwitchProps> {}
	declare export type OnUpdateCall = (location: H.Location) => void;
	declare export interface OnUpdateProps {
call: OnUpdateCall,
immediate?: boolean
} 
	declare export class OnUpdate mixins React.Component<OnUpdateProps> {}
	declare export type IsActiveCallback = () => boolean;
	declare export interface WhenActiveOptions {
exact?: boolean,
strict?: boolean,
pathProp?: string,
className?: string,
style?: React.CSSProperties,
isActive?: IsActiveCallback
} 
	declare export type WhenActiveReturnType<Props> = (component: ComponentConstructor<Props>) => ComponentConstructor<Props>;
	declare export function whenActive<Props>(options?: WhenActiveOptions): WhenActiveReturnType<Props>

	declare export interface StatusProps {
code: string
} 
	declare export class Status mixins React.Component<StatusProps> {}
	declare export type GetKeyFunction<Params> = (
match: MatchObject<Params>,
route: RouteConfiguration,
location: H.Location) => string;
	declare export type WrapSwitchProps<Params> = {
getKey?: GetKeyFunction<Params>
} & SwitchProps

	declare export function wrapSwitch<WrapperProps, Params>(
Wrapper: ComponentConstructor<WrapperProps>): ComponentConstructor<WrapSwitchProps<Params> & WrapperProps>

    }
