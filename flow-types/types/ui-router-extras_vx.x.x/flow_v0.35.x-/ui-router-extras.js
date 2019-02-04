declare module 'ui-router-extras' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface ui$IDeepStateRedirectService {
reset(stateName: string, stateParams?: {
[key: string]: string | string[]
}): void
} 

declare interface ui$IDeepStateRedirectConfig {
default?: string | ui$IRedirectParams,
params?: boolean | string[],
fn(
$dsr$: {
redirect: ui$IRedirectParams,
to: ui$IRedirectParams
}): boolean | ui$IRedirectParams
} 

declare interface ui$IRedirectParams {
state: string,
params?: IStateParamsService
} 

declare interface ui$IPreviousState {
state: IState,
params?: IStateParamsService
} 


/**
 * Previous state service
 */
declare interface ui$IPreviousStateService {

/**
 * Get a previous state
 * @param memoName Memo name
 * @return Previous state
 */
get(memoName?: string): ui$IPreviousState,

/**
 * Go to a state
 * @param memoName Memo name
 * @param options State options
 * @return Promise
 */
go(memoName: string, options?: IStateOptions): IPromise<any>,

/**
 * Memorize a state
 * @param memoName Memo name
 * @param defaultStateName Default state name
 * @param defaultStateParams Default state parameters
 */
memo(memoName: string, defaultStateName?: string, defaultStateParams?: {}): void,

/**
 * Forget a memorized name
 * @param memoName Memo name
 */
forget(memoName: string): void
} 


/**
 * Sticky state
 */
declare type ui$IStickyState = {
sticky?: boolean,
deepStateRedirect?: boolean | ui$IDeepStateRedirectConfig,
dsr?: boolean | ui$IDeepStateRedirectConfig,
onInactivate(...args: any[]): void,
onReactivate(...args: any[]): void,
views?: {
[name: string]: IState
}
} & IState



/**
 * Sticky state service
 */
declare interface ui$IStickyStateService {
getInactiveStates(): ui$IStickyState[],
reset(
inactiveStateName: string,
stateParams?: {
[key: string]: string | string[]
}): void
} 


/**
 * Sticky state provider
 */
declare type ui$IStickyStateProvider = {
debugMode(): boolean,
enableDebug(enabled: boolean): boolean,
registerStickyState(state: ui$IStickyState): void
} & IServiceProvider


declare type ui$IStateProvider = {
state(config: ui$IStickyState): ui$IStateProvider,
state(name: string, config: ui$IStickyState): ui$IStateProvider
} & IServiceProvider


declare interface ui$IFutureStateProvider {

/**
 * Registers a `FutureState` object as a placeholder for a full UI-Router `state` or `state` tree.
 */
futureState(state: ui$IFutureState): void,

/**
 * Registers a `StateFactory` function for `FutureState` of type `type`.
 */
stateFactory(type: string, stateFactory: ui$IFutureStateFactory): void,

/**
 * Adds a resolve function.
 * `$futureStateProvider` won't reject any state transitions or routes until all resolveFunction promises have been resolved.
 * Resolves may be used to defer routing until the states have been loaded via $http, for instance.
 */
addResolve(resolveFn: ui$IResolveFunction): void
} 

declare interface ui$IFutureStateService {} 


/**
 * A `FutureState` object is a placeholder for full a UI-Router `state`
 */
declare interface ui$IFutureState {

/**
 * The placeholder state name (fully qualified).
 * Attempted transitions to this state (or any substates) will trigger a lazy load of the full UI-Router `state` represented by this FutureState.
 */
stateName: string,

/**
 * The placeholder url path fragment (the fragment is the URL prefix which the state will be accessed on, not the URL of the state's source code).
 * Attempted navigations to a URL starting with this fragment will trigger a lazy load of the full UI-Router `state` represented by this FutureState.
 */
url: string,

/**
 * The type of FutureState. This is a used to select a registered StateFactory which is then used to build the full UI-Router `state`
 */
type: string,
[key: string]: any
} 


/**
 * `StateFactory` factories convert `FutureState` into a full UI-Router `state`, or `state` tree
 */
declare type ui$IFutureStateFactory = Injectable<(...args: any[]) => IPromise<IState | void>>;

declare type ui$IResolveFunction = Injectable<(...args: any[]) => IPromise<any>>;
    }

    }
