declare module 'react-lifecycle-component' {
        import type {
          ComponentLifecycle,Component,ComponentClass
        } from 'react';

	import type {
          Connect
        } from 'react-redux';

	declare export interface LifecycleStateProps<P, S> {
component: ComponentClass<P, S>
} 
	declare export type LifecycleDispatchProps<P, S> = {} & ComponentLifecycle<P, S>

	declare export type Props<P, S> = {} & LifecycleStateProps<P, S> & LifecycleDispatchProps<P, S>

	declare export class LifecycleComponent mixins Component<Props<any, any>, any> {}
	declare export function applyLifecycle<P, S>(
component: ComponentClass<P, S>): ComponentClass<P & LifecycleDispatchProps<P, S>>

	declare export var connectWithLifecycle: Connect;
    }
