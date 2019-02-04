declare module 'redux-first-router' {
        import type {
          Dispatch,Store,Reducer,Middleware,StoreEnhancer
        } from 'redux';

	import type {
          History
        } from 'history';

	declare export type Nullable<T> = T | null | void;
	declare export type StateGetter<TState> = () => TState;
	declare export type RouteString = string;
	declare export type ConfirmLeave = (state: {[key: string]: any}, action: {[key: string]: any}) => Nullable<string>;
	declare export type RouteThunk<TState> = (dispatch: Dispatch<any>, getState: StateGetter<TState>) => any | Promise<any>;
	declare export type RouteObject<TKeys, TState> = TKeys & {
capitalizedWords?: boolean,
navKey?: string,
path: string,
thunk?: RouteThunk<TState>,
fromPath(path: string, key?: string): string,
toPath(param: string, key?: string): string,
coerceNumbers?: boolean,
confirmLeave?: ConfirmLeave,
meta?: Meta
};
	declare export type Route<TKeys, TState> = RouteString | RouteObject<TKeys, TState>;
	declare export interface RoutesMap<TKeys, TState> {
[key: string]: Route<TKeys, TState>
} 
	declare export interface ReceivedAction {
type: string,
payload: Payload,
meta?: {[key: string]: any},
query?: {[key: string]: any},
search?: string,
navKey?: Nullable<string>
} 
	declare export interface ReceivedActionMeta {
type: string,
payload: Payload,
query?: {[key: string]: any},
navKey?: Nullable<string>,
meta: {
notFoundPath?: string,
query?: {[key: string]: any},
search?: string
}
} 
	declare export type HistoryEntries = Array<{
pathname: string
}>;
	declare export interface HistoryData {
entries: HistoryEntries,
index: number,
length: number
} 
	declare export interface Location {
pathname: string,
type: string,
payload: Payload,
query?: {[key: string]: any},
search?: string
} 
	declare export interface LocationState<TKeys, TState> {
pathname: string,
type: string,
payload: Payload,
query?: {[key: string]: any},
search?: string,
prev: Location,
kind: Nullable<string>,
history: Nullable<HistoryData>,
routesMap: RoutesMap<TKeys, TState>,
hasSSR?: boolean
} 
	declare export interface ActionMetaLocation {
current: Location,
prev: Location,
kind: Nullable<string>,
history: Nullable<HistoryData>
} 
	declare export interface NavigationAction {
type: string,
key?: Nullable<string>,
navKey?: Nullable<string>,
routeName?: string,
actions?: NavigationAction[],
action?: NavigationAction,
params?: Params,
meta?: {[key: string]: any}
} 
	declare export interface Meta {
location: ActionMetaLocation,
notFoundPath?: string,
navigation?: NavigationAction,
query?: {[key: string]: any},
search?: string
} 
	declare export interface Action {
type: string,
payload?: Payload,
meta?: Meta,
query?: {[key: string]: any},
navKey?: Nullable<string>
} 
	declare export interface HistoryLocation {
pathname: string,
search?: string
} 
	declare export type HistoryAction = string;
	declare export type Listener = (location: HistoryLocation, action: HistoryAction) => void;
	declare export type ScrollBehavior = {[key: string]: any};
	declare export interface Router<TState> {
getStateForActionOriginal(action: {[key: string]: any}, state: Nullable<TState>): Nullable<TState>,
getStateForAction(action: {[key: string]: any}, state: Nullable<TState>): Nullable<TState>,
getPathAndParamsForState(state: TState): {
path: Nullable<string>,
params: Nullable<Params>
},
getActionForPathAndParams(path: string): Nullable<{[key: string]: any}>
} 
	declare export interface Navigator<TState> {
router: Router<TState>
} 
	declare export interface Navigators<TState> {
[key: string]: Navigator<TState>
} 
	declare export type SelectLocationState<TKeys, TState> = (state: TState) => LocationState<TKeys, TState>;
	declare export type SelectTitleState<TState> = (state: TState) => string;
	declare export interface QuerySerializer {
stringify(params: Params): string,
parse(queryString: string): {[key: string]: any}
} 
	declare export interface NavigatorsConfig<TKeys, TState> {
navigators: Navigators<TState>,
patchNavigators(navigators: Navigators<TState>): void,
actionToNavigation(
navigators: Navigators<TState>,
action: {[key: string]: any},
navigationAction: Nullable<NavigationAction>,
route: Nullable<Route<TKeys, TState>>): {[key: string]: any},
navigationToAction(
navigators: Navigators<TState>,
store: Store<TState>,
routesMap: RoutesMap<TKeys, TState>,
action: {[key: string]: any}): {
action: {[key: string]: any},
navigationAction: Nullable<NavigationAction>
}
} 
	declare export interface Bag {
action: ReceivedAction | Action,
extra: any
} 
	declare export interface Options<TKeys, TState> {

/**
 * A prefix that will be prepended to the URL. For example, using a basename of '/playground',
 * a route with the path '/home' would correspond to the URL path '/playground/home'.
 */
basename?: string,

/**
 * Whether or not a trailing delimiter is allowed when matching path.
 */
strict?: boolean,

/**
 * The name of the state key or a selector function to specify where in your Redux state tree
 * Redux First Router should expect your page location reducer to be attached to.
 */
location?: string | SelectLocationState<TKeys, TState>,

/**
 * The name of the state key or a selector function to specify where in your Redux state tree
 * Redux First Router should expect your page title reducer to be attached to.
 * This can be omitted if you attach the reducer at state.title.
 */
title?: string | SelectTitleState<TState>,

/**
 * Can be set to false to bypass the initial dispatch, so you can do it manually, perhaps after running sagas.
 */
initialDispatch?: boolean,

/**
 * An array of entries to initialise history object. Useful for server side rendering and tests.
 */
initialEntries?: HistoryEntries,

/**
 * An object with parse and stringify methods, such as the `query-string` or `qs` libraries (or anything handmade).
 * This will be used to handle querystrings. Without this option, query strings are ignored silently.
 */
querySerializer?: QuerySerializer,

/**
 * The path where users may be redirected in 2 situations: when you dispatch an action with no matching path,
 *   or if you manually call dispatch(redirect({ type: NOT_FOUND })), where NOT_FOUND is an export from this package.
 *   The type in actions and state will be NOT_FOUND, which you can use to show a 404 page.
 */
notFoundPath?: string,

/**
 * Whether or not window.scrollTo(0, 0) should be run on route changes so the user starts each page at the top.
 */
scrollTop?: boolean,

/**
 * A function to update window/elements scroll position.
 */
restoreScroll(history: History): ScrollBehavior,

/**
 * A simple function that will be called before the routes change.
 * It's passed your standard `dispatch` and `getState` arguments like a thunk,
 * as well as the `bag` object as a third parameter, which contains the dispatched `action` and the configured `extra` value.
 */
onBeforeChange(dispatch: Dispatch<any>, getState: StateGetter<TState>, bag: Bag): void,

/**
 * A simple function that will be called after the routes change.
 * It's passed your standard `dispatch` and `getState` arguments like a thunk,
 * as well as the `bag` object as a third parameter, which contains the dispatched `action` and the configured `extra` value.
 */
onAfterChange(dispatch: Dispatch<any>, getState: StateGetter<TState>, bag: Bag): void,

/**
 * A simple function that will be called whenever the user uses the browser back/next buttons.
 * It's passed your standard `dispatch` and `getState` arguments like a thunk,
 * as well as the `bag` object as a third parameter, which contains the dispatched `action`
 * and the configured `extra` value. Actions with kinds `back`, `next`, and `pop` trigger this.
 */
onBackNext(dispatch: Dispatch<any>, getState: StateGetter<TState>, bag: Bag): void,

/**
 * A function receiving `message` and `callback` when navigation is blocked with `confirmLeave`.
 * The message is the return value from `confirmLeave`.
 * The callback can be called with `true` to unblock the navigation, or with `false` to cancel the navigation.
 */
displayConfirmLeave?: DisplayConfirmLeave,

/**
 * A function returning a history object compatible with the popular `history` package.
 */
createHistory(): History,

/**
 * A map of of your Redux state keys to _React Navigation_ navigators.
 */
navigators?: NavigatorsConfig<TKeys, TState>,

/**
 * An optional value that will be passed as part of the third `bag` argument to all options callbacks and routes thunk.
 * It works much like the `withExtraArgument` feature of `redux-thunk` or the `context` argument of GraphQL resolvers.
 * You can use it to pass any required context to your thunks without having to tightly couple them to it.
 * For example, you could pass an instance of an API client initialised with authentication cookies,
 * or a function `addReducer` to inject new code split reducers into the store.
 */
extra?: any
} 
	declare export type Params = {[key: string]: any};
	declare export type Payload = {[key: string]: any};
	declare export type DisplayConfirmLeave = (message: string, callback: (unblock: boolean) => void) => void;
	declare export type ScrollUpdater = (performedByUser: boolean) => void;
	declare export var NOT_FOUND: "@@redux-first-router/NOT_FOUND";
	declare export function actionToPath<TKeys, TState>(
action: ReceivedAction,
routesMap: RoutesMap<TKeys, TState>,
querySerializer?: QuerySerializer): string

	declare export function back(): void

	declare export function canGo(n: number): boolean

	declare export function canGoBack(): boolean

	declare export function canGoForward(): boolean

	declare export function connectRoutes<TKeys, TState>(
routesMap: RoutesMap<TKeys, TState>,
options?: Options<TKeys, TState>): {
reducer: Reducer<LocationState<TKeys, TState>>,
middleware: Middleware,
thunk(store: Store<TState>): Promise<Nullable<RouteThunk<TState>>>,
enhancer: StoreEnhancer,
initialDispatch(): void
}

	declare export function go(n: number): void

	declare export function history(): History

	declare export function isLocationAction(action: any): boolean

	declare export function next(): void

	declare export function nextPath(): string | void

	declare export function pathToAction<TKeys, TState>(
pathname: string,
routesMap: RoutesMap<TKeys, TState>,
querySerializer?: QuerySerializer): ReceivedAction

	declare export function prevPath(): string | void

	declare export function push(pathname: string): void

	declare export function redirect(action: Action): Action

	declare export function replace(pathname: string): void

	declare export function scrollBehavior(): ScrollBehavior | void

	declare export function setKind(action: Action, kind: string): Action

	declare export function updateScroll(): void

    }
