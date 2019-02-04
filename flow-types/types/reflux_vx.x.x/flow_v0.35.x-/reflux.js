declare module 'reflux' {
        import typeof * as React from 'react';

	declare export interface StoreDefinition {
listenables?: any[],
init?: Function,
getInitialState?: Function,
[propertyName: string]: any
} 
	declare export interface ListenFn {
(...params: any[]): any,
completed: Function,
failed: Function
} 
	declare export interface Listenable {
listen: ListenFn
} 
	declare export interface Subscription {
stop: Function,
listenable: Listenable
} 
	declare export class Store  {
id: string;
hasListener(listenable: Listenable): boolean;
listenToMany(listenables: Listenable[]): void;
validateListening(listenable: Listenable): string;
listenTo(
listenable: Listenable,
callback: Function,
defaultCallback?: Function): Subscription;
stopListeningTo(listenable: Listenable): boolean;
stopListeningToAll(): void;
fetchInitialState(listenable: Listenable, defaultCallback: Function): void;
trigger(state: any): void;
listen(callback: Function, bindContext: any): Function;
listenables: any;
state: $ReadOnly<any>;
setState(state: {[key: string]: any}): void
}
	declare export class Component<TOfStore: typeof Store, P, S> mixins React.Component<P, S> {
store: TOfStore;
stores: TOfStore[];
storeKeys: string[];
state: S;
props: P;
mapStoreToState(storeType: TOfStore, mappingFunc: (newState: any) => any): void
}
	declare export class PureComponent<TOfStore: typeof Store, P, S, SS> mixins React.PureComponent<P, S, SS> {
store: TOfStore;
stores: TOfStore[];
storeKeys: string[];
mapStoreToState(storeType: TOfStore, mappingFunc: (newState: any) => any): void
}
	declare export interface ActionParameters {
children?: string[],
asyncResult?: boolean,
sync?: boolean,
preEmit?: (...args: any[]) => void | any[],
shouldEmit?: (...args: any[]) => boolean
} 
	declare export type ActionDefinition = {
actionName?: string
} & ActionParameters

	declare export interface ActionObjectDefinition {
[propertyName: string]: ActionParameters
} 
	declare export interface Actions {
[index: string]: Listenable
} 
	declare export function createStore(definition: StoreDefinition): Store

	declare export function createAction(definition?: ActionDefinition | string | {[key: string]: any}): any

	declare export function createActions(definitions: string[] | ActionObjectDefinition | ActionDefinition[]): any

	declare export function connect(store: Store, key?: string): void

	declare export function listenTo(store: Store, handler: string): void

	declare export function setState(state: any): void

	declare export function ListenerMixin(): any

	declare export function initStore(typeOfStore: typeof Store): Store

	declare export var ActionMethods: any;
    }
